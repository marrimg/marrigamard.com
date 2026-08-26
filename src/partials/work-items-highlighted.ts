import antimatterLogo from "./svgs/antimatter-logo";
import freelanceLogo from "./svgs/freelance";
import open from "./svgs/open";

export default //html
`<div class="flex flex-col gap-4">
  <h3 class="mb-2 font-heading text-2xl text-text-header">What I'm up to</h3>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col justify-center">
      <h4 class="mb-2 pb-2 font-heading text-text-header">Antimatter Audio</h4>
      <div class="group work-item-primary-details grid grid-cols-12 gap-4 pointer-events-none">
        <a class="pointer-events-auto flex items-center col-span-2 aspect-square" href="./antimatter-details.html">
          <div id="antimatter-details-link-logo" class="work-item-logo-container flex cursor-pointer items-center justify-center bg-section-bg p-4 aspect-square transition-colors duration-1000 hover:bg-antimatter-bg group-has-hover:bg-antimatter-bg w-full h-full">
            ${antimatterLogo}
          </div>
        </a>
        <div class="col-span-10">
          <p class="mb-2 pointer-events-none">Brand identity, visual design, UX design, and front end development for a growing audio software company.
          </p>
          <p>
          <div class="inline-flex items-center gap-1">
            ${open}
            <a id="antimatter-details-link" class="pointer-events-auto button-secondary-container flex items-center text-link no-underline transition-colors duration-1000 hover:text-link-secondary-hover group-has-hover:text-link-secondary-hover" href="./antimatter-details">Case
              study</a>
          </div>
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center">
      <h4 class="mb-2 pb-2 font-heading text-text-header">Freelance projects</h4>
      <div class="group work-item-primary-details grid grid-cols-12 gap-4 pointer-events-none">
        <a class="pointer-events-auto flex items-center col-span-2 aspect-square" href="mailto:hello@marrigamard.com">
          <div id="antimatter-details-link-logo" class="work-item-logo-container flex cursor-pointer items-center justify-center bg-section-bg p-4 aspect-square transition-colors duration-1000 hover:bg-antimatter-bg group-has-hover:bg-antimatter-bg w-full h-full">
            ${freelanceLogo}
          </div>
        </a>

        <div class="col-span-10">
          <p class="mb-2 pointer-events-none">Let me help you bring your ideas to life!</p>
          <p>
          <div class="inline-flex items-center gap-1">
            ${open}
            <a class="button-secondary-container flex items-center text-link no-underline transition-colors duration-1000 hover:text-link-secondary-hover group-has-hover:text-link-secondary-hover pointer-events-auto" href="mailto:hello@marrigamard.com">Contact
              me</a>
          </div>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`;
