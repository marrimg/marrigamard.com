import antimatterLogo from "./svgs/antimatter-logo";
import freelanceLogo from "./svgs/freelance";
import open from "./svgs/open";

export default //html
`<div class="flex flex-col gap-4">
  <h3 class="mb-2 font-heading text-2xl text-text-header">What I'm up to</h3>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col justify-center">
      <h4 class="mb-2 pb-2 font-heading text-text-header">Antimatter Audio</h4>
      <div class="group work-item-primary-details flex gap-4 pointer-events-none">
        <a class="pointer-events-auto flex items-center" href="./antimatter-details.html">
          <div id="antimatter-details-link-logo" class="work-item-logo-container flex h-[75px] w-[75px] cursor-pointer items-center justify-center bg-section-bg p-4 transition-colors duration-1000 hover:bg-antimatter-bg group-has-hover:bg-antimatter-bg">
            ${antimatterLogo}
          </div>
        </a>
        <div>
          <p class="mb-2 text-base leading-6 pointer-events-none">Brand identity, visual design, UX design, and front end development for a growing audio software company.
          </p>
          <p>
          <div class="inline-flex items-center gap-1">
            ${open}
            <a id="antimatter-details-link" class="pointer-events-auto button-secondary-container flex items-center text-link-secondary no-underline transition-colors duration-1000 hover:text-link-secondary-hover group-has-hover:text-link-secondary-hover" href="./antimatter-details">Case
              study</a>
          </div>
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center">
      <h4 class="mb-2 pb-2 font-heading text-text-header">Freelance projects</h4>

      <div class="group work-item-primary-details flex gap-4 pointer-events-none">
        <div class="work-item-logo-container flex h-[75px] w-[75px] cursor-pointer items-center justify-center bg-section-bg p-4 pointer-events-auto">
          <a href="mailto:hello@marrigamard.com">
            ${freelanceLogo}
          </a>
        </div>
        <div>
          <p class="mb-2 text-base leading-6 pointer-events-none">Let me help you bring your ideas to life!</p>
          <p>
          <div class="inline-flex items-center gap-1">
            ${open}
            <a class="button-secondary-container flex items-center text-link-secondary no-underline transition-colors duration-1000 hover:text-link-secondary-hover group-has-hover:text-link-secondary-hover pointer-events-auto" href="mailto:hello@marrigamard.com">Contact
              me</a>
          </div>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`;
