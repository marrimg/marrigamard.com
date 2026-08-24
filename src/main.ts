import "./style.css";
import header from "./partials/header.ts";
import workItemsHighlighted from "./partials/work-items-highlighted.ts";
import workItems from "./partials/work-items.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
<div class="bg-bg text-text flex flex-col items-center">
  <div class="flex flex-col max-w-150">
    <header >${header}</header>
    <main>${workItemsHighlighted} ${workItems}</main>
  </div>
</div>
`;
