type RouteHandler = (params: Record<string, string>) => void;

interface Route {
  path: RegExp;
  handler: RouteHandler;
}

export class PopoverRouter {
  private routes: Route[] = [];
  private mainView: HTMLElement;
  private popoverElement: HTMLDialogElement | null;

  constructor(mainViewId: string, popoverId?: string) {
    this.mainView = document.getElementById(mainViewId)!;
    this.popoverElement = popoverId
      ? (document.getElementById(popoverId) as HTMLDialogElement)
      : null;

    window.addEventListener("popstate", () => this.resolveRoute());

    // Handle internal link clicks. Support same-page anchor jumps as well as
    // navigations that include hashes.
    document.addEventListener("click", (e) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target || !target.href || target.origin !== window.location.origin)
        return;

      // If the link points to the same pathname and includes a hash, do an
      // in-page jump without invoking the route handler.
      if (
        target.hash &&
        (target.pathname === window.location.pathname || target.pathname === "")
      ) {
        e.preventDefault();
        const newUrl = target.pathname + target.hash;
        window.history.pushState({}, "", newUrl);
        this.scrollToHash();
        return;
      }

      // Otherwise treat it as an application navigation. Include hash if present
      // so routes that rely on it can react after navigation.
      e.preventDefault();
      const pathWithHash = target.pathname + (target.hash || "");
      this.navigate(pathWithHash);
    });

    // Also respond to native hashchange events (back/forward, manual changes)
    window.addEventListener("hashchange", () => this.scrollToHash());
  }

  public addRoute(pattern: string, handler: RouteHandler) {
    const regexPath = "^" + pattern.replace(/:\w+/g, "([^/]+)") + "$";
    this.routes.push({ path: new RegExp(regexPath), handler });
  }

  public navigate(path: string) {
    window.history.pushState({}, "", path);
    this.resolveRoute();
  }

  public resolveRoute() {
    const currentPath = window.location.pathname;
    let matched = false;

    for (const route of this.routes) {
      const match = currentPath.match(route.path);
      if (match) {
        matched = true;
        route.handler({ id: match[1] });
        // Allow the handler to render, then attempt to scroll to any hash in the URL
        setTimeout(() => this.scrollToHash(), 0);
        break;
      }
    }

    if (!matched) {
      this.mainView.innerHTML = "<h1>404 Not Found</h1>";
      this.closePopover();
      setTimeout(() => this.scrollToHash(), 0);
    }
  }

  private scrollToHash() {
    const hash = window.location.hash;
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    // Prefer id, fall back to name attribute (legacy anchors)
    const el =
      document.getElementById(id) || document.querySelector(`[name="${id}"]`);
    if (el) {
      try {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } catch (err) {
        // Fallback to instant scroll if smooth isn't supported
        (el as HTMLElement).scrollIntoView();
      }
    }
  }

  public openPopover(contentHtml: string) {
    if (!this.popoverElement) return;
    this.popoverElement.innerHTML = contentHtml;
    if (!this.popoverElement.matches(":popover-open")) {
      this.popoverElement.showPopover();
    }
  }

  public closePopover() {
    if (this.popoverElement && this.popoverElement.matches(":popover-open")) {
      this.popoverElement.hidePopover();
    }
  }
}
