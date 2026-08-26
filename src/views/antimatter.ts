import close from "../partials/svgs/close";
export default //html
`<div class="relative flex w-full h-full flex-col items-end justify-end transition-[opacity,display] duration-300 ease-out transition-discrete
         popover-open:opacity-100 starting:opacity-0">
  <div class="absolute flex h-full w-full justify-center  bg-overlay text-text-popover overflow-scroll">
    <div class="flex w-full  p-8">
      <a class="absolute right-4 top-4 h-8 w-8  text-link hover:text-text-callout" href="/" aria-label="Close project details">
          ${close}
      </a>
      <div class="flex w-full flex-col gap-8 p-12">
        <header>
          <h1 class="mb-2 font-heading-main text-[3.125rem]">Antimatter Audio</h1>
        </header>
        <main class="flex flex-col gap-5">
          <div class="flex flex-col gap-1">
            <h2 class="mb-2 font-heading text-xl">Project Summary</h2>
            <div class="grid grid-cols-12 gap-4">
              <p class="mb-2 col-start-1 col-end-6">
                Antimatter Audio is an independent audio engineering company that
                wanted to pivot from building hardware synthesizers to producing
                high-quality plugins for Digital Audio Workstation software.
                Working with the founder, I helped craft their new brand identity
                and product concepts to ensure a successful direction shift.
              </p>
              <div class="col-start-6 col-end-12">
                <img
                  src="https://marrigamard.com/Eurorack_Modular_Synthesizer.jpg"
                  class="w-full max-w-250"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <h2 class="mb-2 font-heading text-xl">Design goals</h2>
            <div class="flex flex-col gap-1">
              <div>
                <p class="mb-2">
                  Antimatter Audio wants to create audio plugins that spark
                  users' creativity and sense of experimentation. They want to
                  give users a curated set of options that still feel expansive
                  to play with. Finally, they wanted to create a framework for
                  the design of their first plugin that they could carry on into
                  other plugins in the future.
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <h2 class="mb-2 font-heading text-xl">Starting point</h2>
            <div class="flex flex-col gap-1">
              <div>
                <p class="mb-2">
                  As a starting point, I researched Antimatter Audio's current
                  hardware products. They have a devoted following of customers
                  who have been long-time fans of their products. I researched
                  what their customers enjoy about their current offerings as a
                  foundation for designing their new direction.
                </p>
              </div>
              <img
                src="https://marrigamard.com/antimatter-modules.webp"
                class="w-full max-w-250"
                loading="lazy"
              />
            </div>
          </div>
          <div class="flex flex-col gap-6">
            <h2 class="mb-2 font-heading text-xl">Design process</h2>
            <div>
              <h3 class="mb-2 font-heading">1. Discovery</h3>
              <p class="mb-2">
                The design process began with a deep dive into Antimatter's
                current and desired customer base, and other audio plugins' visual
                style and behavior.
              </p>
              <p class="mb-2">
                The plugin concept included two design directions: a distinctive,
                unique experience for its main central panel, and a sleek, branded
                design for the global header and footer components that would
                carry over to other plugins in the future.
              </p>
              <p class="mb-2">
                We settled on a retro-futuristic, sci-fi inspired design for the
                central panel, and a clean, modern dark theme for the global
                header and footer components. In the future, we can switch up the
                design for the central panel from plugin to plugin while keeping
                the global components consistent.
              </p>
            </div>
            <div class="flex gap-1">
              <div class="flex-1 w-min-0">
                <img
                  src="https://marrigamard.com/antimatter-mood-board.webp"
                  class="w-full object-cover"
                  loading="lazy"
                />
                </div>
                <div class="flex-1 w-min-0">
                <img
                  src="https://marrigamard.com/mood-board-competetors.webp"
                  class="w-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 class="mb-2 font-heading">2. Style Guide</h3>
              <p class="mb-2">
                Based on this discovery process, I created a style guide for the
                brand. I decided on ALTE DIN 1451 for the brand's typeface to
                evoke the boxy, geometric feel of text on an old greenscreen CRT
                monitor while remaining highly legible and unobtrusive. Inspired
                by vintage green and amber CRT monitors, I chose a bold green and
                amber theme for the central panel. I went with a more
                modern-looking dark grey and magenta theme for the main brand
                sections.
              </p>
              <img
                src="https://marrigamard.com/antimatter-style-guide.webp"
                class="w-full max-w-250"
                loading="lazy"
              />
            </div>
            <div>
              <h3 class="mb-2 font-heading">3. Product mockups</h3>
              <p class="mb-2">
                Finally, I created mockups of the plugin that included both the
                global header and footer sections and the retro sci-fi inspired
                central panel.
              </p>
              <img
                src="https://marrigamard.com/plugin-mockup.webp"
                class="w-full max-w-250"
                loading="lazy"
              />
          </div>
          </div>
          <div class="flex flex-col gap-1">
            <h2 class="mb-2 font-heading text-xl">Takeaway</h2>
            <p class="mb-2">
              Every detail of the Antimatter Audio rebrand and plugin design was
              designed to build user trust and spark creativity. From the sleek,
              orderly header and footer areas to the bold, experimental central
              panel, Antimatter's plugins aim to inspire their users to let
              their imagination fly.
            </p>
          </div>
        </main>
      </div>
    </div>
  </div>
</div>`;
