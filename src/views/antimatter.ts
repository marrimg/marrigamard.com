import close from "../partials/svgs/close";

export default /* HTML */ `<div
  class="relative flex w-full h-full flex-col items-end justify-end transition-[opacity,display] duration-300 ease-out transition-discrete
         popover-open:opacity-100 starting:opacity-0"
>
  <div
    class="absolute h-full w-full justify-center  bg-overlay text-text-popover overflow-scroll grid grid-cols-12 pt-12"
  >
    <a
      class="top-4 sticky h-8 w-8  text-text-popover hover:text-text-callout col-start-11 col-span-1"
      href="/"
      aria-label="Close project details"
    >
      ${close}
    </a>
    <div class="flex max-w-320 col-start-2 col-end-11">
      <div class="flex w-full flex-col gap-8 pr-12 pl-12 pb-12">
        <header>
          <h1 class="mb-2 font-heading-main text-[3.125rem]">
            Antimatter Audio
          </h1>
        </header>
        <main class="flex flex-col pb-20">
          <div
            class="grid w-full grid-cols-1 gap-6 relative md:grid-cols-12 sm:grid-cols-1"
          >
            <div
              class="col-start-1 col-span-1 md:col-span-3 flex flex-col gap-1 md:sticky top-0 z-10"
            >
              <a
                href=""
                class="text-2xl font-heading-main hover:text-link-hover"
                >Summary</a
              >
              <a
                href="#design-direction"
                class="text-2xl font-heading-main hover:text-link-hover"
                >Design Direction</a
              >
              <a
                href="#starting-point"
                class="text-2xl font-heading-main hover:text-link-hover"
                >Starting Point</a
              >
              <a
                href="#discovery"
                class="text-2xl font-heading-main hover:text-link-hover"
                >Discovery</a
              >
              <a
                href="#product-mockups"
                class="text-2xl font-heading-main hover:text-link-hover"
                >Mockups</a
              >
              <a
                href="#takeaways"
                class="text-2xl font-heading-main hover:text-link-hover"
                >Takeaways</a
              >
            </div>
            <div
              class="col-start-1 md:col-start-4 col-end-12 flex flex-col gap-6"
            >
              <p class="mb-4 text-3xl">
                Antimatter Audio is an independent audio engineering company
                that wanted to pivot from building hardware synthesizers to
                producing high-quality plugins for Digital Audio Workstation
                software. Working with the founder, I helped craft their new
                brand identity and product concepts to ensure a successful
                direction shift.
              </p>
              <div>
                <h3 id="design-direction" class="mb-2 font-heading text-xl">
                  Design Direction
                </h3>
                <p class="mb-2">
                  Antimatter Audio wants to create audio plugins that spark
                  users' creativity and sense of experimentation. They want to
                  give users a curated set of options that still feel expansive
                  to play with. Finally, they wanted to create a framework for
                  the design of their first plugin that they could carry on into
                  other plugins in the future.
                </p>
              </div>
              <div class="col-start-1 col-end-6">
                <div class="col-start-4 col-end-8">
                  <h2 id="starting-point" class="mb-2 font-heading text-xl">
                    Starting point
                  </h2>
                  <img
                    src="https://marrigamard.com/antimatter-modules.webp"
                    class="col-start-1 col-end-6"
                    loading="lazy"
                  />
                  <p class="mb-2">
                    I researched Antimatter Audio's current hardware products.
                    They have a devoted following of customers who have been
                    long-time fans of their products. I did a deep dive into
                    what their customers enjoy about their current offerings as
                    a foundation for designing their new direction.
                  </p>
                </div>
              </div>
              <div class="col-start-6 col-end-12">
                <h3 id="discovery" class="mb-2 font-heading text-xl">
                  Discovery
                </h3>

                <div class="grid grid-cols-2 gap-2 col-span-12 pb-4">
                  <img
                    src="https://marrigamard.com/antimatter-mood-board.webp"
                    loading="lazy"
                  />
                  <img
                    src="https://marrigamard.com/mood-board-competetors.webp"
                    class="w-full object-cover"
                  />
                </div>
                <p>
                  The design process began with a deep dive into Antimatter's
                  current and desired customer base, and other audio plugins'
                  visual style and behavior.
                </p>
                <p>
                  The plugin concept included two design directions: a
                  distinctive, unique experience for its main central panel, and
                  a sleek, branded design for the global header and footer
                  components that would carry over to other plugins in the
                  future.
                </p>
                <p>
                  We settled on a retro-futuristic, sci-fi inspired design for
                  the central panel, and a clean, modern dark theme for the
                  global header and footer components. In the future, we can
                  switch up the design for the central panel from plugin to
                  plugin while keeping the global components consistent.
                </p>
              </div>
              <h3 class="mb-2 font-heading text-xl">Style Guide</h3>
              <div class="grid grid-cols-12 gap-6">
                <div class="col-span-12">
                  <img
                    src="https://marrigamard.com/antimatter-style-guide.webp"
                    loading="lazy"
                  />
                </div>
                <p class="mb-2 col-span-12">
                  Based on the discovery process, I created a style guide for
                  the brand. I decided on ALTE DIN 1451 for the brand's typeface
                  to evoke the boxy, geometric feel of text on an old
                  greenscreen CRT monitor while remaining highly legible and
                  unobtrusive. Inspired by vintage green and amber CRT monitors,
                  I chose a bold green and amber theme for the central panel. I
                  went with a more modern-looking dark grey and magenta theme
                  for the main brand sections.
                </p>
              </div>

              <h3 id="product-mockups" class="mb-2 font-heading text-xl">
                Product mockups
              </h3>
              <img
                src="https://marrigamard.com/plugin-mockup.webp"
                class="w-full max-w-250"
                loading="lazy"
              />
              <p class="mb-2">
                Finally, I created mockups of the plugin that included both the
                global header and footer sections and the retro sci-fi inspired
                central panel.
              </p>
              <h2
                id="takeaways"
                class="col-start-1 col-end-4 font-heading text-xl"
              >
                Takeaways
              </h2>
              <p class="mb-2">
                Every detail of the Antimatter Audio rebrand and plugin design
                was designed to build user trust and spark creativity. From the
                sleek, orderly header and footer areas to the bold, experimental
                central panel, Antimatter's plugins aim to inspire their users
                to let their imagination fly.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</div>`;
