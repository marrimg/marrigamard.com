import antimatterLogo from "./svgs/antimatter-logo";
import freelanceLogo from "./svgs/freelance";
import open from "./svgs/open";

export default //html
`<div class="flex flex-col gap-4">
  <h3 class="mb-2 font-heading text-2xl text-text-header">What I'm up to</h3>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col justify-center">
      <h4 class="mb-2 pb-2 font-heading text-text-header">Antimatter Audio</h4>
      <div id="antimatter-details-wrapper" class="flex gap-4">
        <a href="./antimatter-details.html">
          <div id="antimatter-details-link-logo" class="flex h-[75px] w-[75px] cursor-pointer items-center justify-center bg-section-bg p-4 transition-colors duration-[1.25s] hover:bg-antimatter-bg">
            ${antimatterLogo}
          </div>
        </a>
        <div>
          <p class="mb-2 text-base leading-6">Brand identity, visual design, UX design, and front end development for a growing audio software company.
          </p>
          <p>
          <div class="inline-flex items-center gap-1">
            ${open}
            <a id="antimatter-details-link" class="flex items-center text-link-secondary no-underline transition-colors duration-[1.25s] hover:text-link-secondary-hover" href="./antimatter-details.html">Case
              study</a>
          </div>
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center">
      <h4 class="mb-2 pb-2 font-heading text-text-header">Freelance projects</h4>

      <div class="flex gap-4">
        <div class="flex h-[75px] w-[75px] cursor-pointer items-center justify-center bg-section-bg p-4">
          <a href="mailto:hello@marrigamard.com">
            ${freelanceLogo}
          </a>
        </div>
        <div>
          <p class="mb-2 text-base leading-6">Let me help you bring your ideas to life!</p>
          <p>
          <div class="inline-flex items-center gap-1">
            <svg class="h-6 w-6 stroke-link-secondary transition-colors duration-[1.25s] hover:stroke-link-secondary-hover" width="24px" height="24px" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3H3.6C3.26863 3 3 3.26863 3 3.6V16"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              </path>
              <path d="M3.5 20.5L12 12M12 12V16M12 12H8" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
            </svg>
            <a class="flex items-center text-link-secondary no-underline transition-colors duration-[1.25s] hover:text-link-secondary-hover" href="mailto:hello@marrigamard.com">Contact
              me</a>
          </div>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`;
