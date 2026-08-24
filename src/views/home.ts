import header from "../partials/header.ts";
import workItemsHighlighted from "../partials/work-items-highlighted.ts";
import workItems from "../partials/work-items.ts";

export default //html
`<div class="flex w-full max-w-160 flex-col gap-2 px-8 py-24 text-text">
  <header class="pb-4">${header}</header>
  <main class="flex flex-col gap-8">${workItemsHighlighted} ${workItems}</main>
</div>`;
