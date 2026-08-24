import antimatterLogo from "./svgs/antimatter-logo";
import freelanceLogo from "./svgs/freelance";
import open from "./svgs/open";

export default //html
`<div class="work-section">
  <h3>What I'm up to</h3>
  <div class="work-items">
    <div class="work-item-primary">
      <h4 class="work-item-primary-header">Antimatter Audio</h4>
      <div id="antimatter-details-wrapper" class="work-item-primary-details">
        <a href="./antimatter-details.html">
          <div id="antimatter-details-link-logo" class="work-item-logo-container antimatter-logo-container">
            ${antimatterLogo}
          </div>
        </a>
        <div>
          <p>Brand identity, visual design, UX design, and front end development for a growing audio software company.
          </p>
          <p>
          <div class="button-secondary-container">
            ${open}
            <a id="antimatter-details-link" class="button-secondary" href="./antimatter-details.html">Case
              study</a>
          </div>
          </p>
        </div>
      </div>
    </div>

    <div class="work-item-primary">
      <h4 class="work-item-primary-header">Freelance projects</h4>

      <div class="work-item-primary-details">
        <div class="work-item-logo-container">
          <a href="mailto:hello@marrigamard.com">
            ${freelanceLogo}
          </a>
        </div>
        <div>
          <p>Let me help you bring your ideas to life!</p>
          <p>
          <div class="button-secondary-container">
            <svg class="button-secondary-icon" width="24px" height="24px" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3H3.6C3.26863 3 3 3.26863 3 3.6V16"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              </path>
              <path d="M3.5 20.5L12 12M12 12V16M12 12H8" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
            </svg>
            <a class="button-secondary" href="mailto:hello@marrigamard.com">Contact
              me</a>
          </div>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`;
