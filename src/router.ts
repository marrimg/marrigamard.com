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
    document.addEventListener("click", (e) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target && target.href && target.origin === window.location.origin) {
        e.preventDefault();
        this.navigate(target.pathname);
      }
    });
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
        break;
      }
    }

    if (!matched) {
      this.mainView.innerHTML = "<h1>404 Not Found</h1>";
      this.closePopover();
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
