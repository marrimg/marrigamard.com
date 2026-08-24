import "./style.css";
import home from "./views/home";
import antimatter from "./views/antimatter";
import { PopoverRouter } from "./router";

const router = new PopoverRouter("app", "modal-popover");

router.addRoute("/", () => {
  document.getElementById("app")!.innerHTML = /*html*/ `
    <div class="flex min-h-screen flex-col items-center">
      ${home}
    </div>
  `;
  router.closePopover();
});

router.addRoute("/antimatter-details", () => {
  // document.getElementById("app")!.innerHTML = "<h1>Main Dashboard</h1>";
  router.openPopover(`
      ${antimatter}
  `);
});

// Initialize on load
router.resolveRoute();

document.querySelector<HTMLDivElement>("#app")!.innerHTML;
