import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_hy5EYIg1.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Timeline;
  const { sections } = Astro2.props;
  function getTimelinePosition(date) {
    const startDate = /* @__PURE__ */ new Date("2021-01-01");
    const currentDate = new Date(date);
    const endDate = /* @__PURE__ */ new Date("2025-12-31");
    const totalDuration = endDate.getTime() - startDate.getTime();
    const position = (currentDate.getTime() - startDate.getTime()) / totalDuration;
    return Math.max(0, Math.min(100, position * 100));
  }
  function getTimelineWidth(startDate, endDate) {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : /* @__PURE__ */ new Date();
    const timelineEnd = /* @__PURE__ */ new Date("2025-12-31");
    const totalDuration = timelineEnd.getTime() - (/* @__PURE__ */ new Date("2021-01-01")).getTime();
    const duration = end.getTime() - start.getTime();
    const width = duration / totalDuration * 100;
    return Math.max(8, Math.min(100, width));
  }
  function getCurrentDatePosition() {
    const startDate = /* @__PURE__ */ new Date("2021-01-01");
    const today = /* @__PURE__ */ new Date();
    const endDate = /* @__PURE__ */ new Date("2025-12-31");
    const totalDuration = endDate.getTime() - startDate.getTime();
    const position = (today.getTime() - startDate.getTime()) / totalDuration;
    return Math.max(0, Math.min(100, position * 100));
  }
  function getCurrentDateString() {
    const today = /* @__PURE__ */ new Date();
    return today.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }
  const sectionsWithTimeline = sections.map((section) => ({
    ...section,
    items: section.items.map((item) => ({
      ...item,
      timelinePosition: getTimelinePosition(item.startDate),
      timelineWidth: getTimelineWidth(item.startDate, item.endDate)
    }))
  }));
  const TIMELINE_YEARS = ["2021", "2022", "2023", "2024", "2025"];
  const GRID_POSITIONS = [0, 25, 50, 75, 100];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 px-4 bg-dark-bg" data-astro-cid-zhxkjw2l> <div class="max-w-7xl mx-auto" data-astro-cid-zhxkjw2l> <!-- Header Section --> <header class="text-center mb-16" data-astro-cid-zhxkjw2l> <h2 class="text-4xl font-bold text-text-primary mb-6" data-astro-cid-zhxkjw2l> <span class="text-neon-cyan" data-astro-cid-zhxkjw2l>Work Experience</span> </h2> <div class="w-24 h-1 bg-neon-cyan mx-auto mb-6" data-astro-cid-zhxkjw2l></div> <p class="text-text-secondary text-lg max-w-2xl mx-auto" data-astro-cid-zhxkjw2l>
My professional journey and contributions to the tech community
</p> </header> <!-- Timeline Sections --> <div class="space-y-16" data-astro-cid-zhxkjw2l> ${sectionsWithTimeline.map((section, sectionIndex) => renderTemplate`<section class="timeline-section" data-astro-cid-zhxkjw2l> <h3 class="text-2xl font-bold text-text-primary mb-12 text-center" data-astro-cid-zhxkjw2l> ${section.title} </h3> <!-- Desktop/Tablet Timeline View --> <div class="hidden md:block" data-astro-cid-zhxkjw2l> <div class="timeline-wrapper relative" data-astro-cid-zhxkjw2l>  <div class="timeline-grid-bg absolute inset-0 pointer-events-none" data-astro-cid-zhxkjw2l> ${GRID_POSITIONS.map((position) => renderTemplate`<div class="grid-line"${addAttribute(`left: ${position}%`, "style")} data-astro-cid-zhxkjw2l></div>`)} </div>  <div class="timeline-items-container relative z-10 pb-20" data-astro-cid-zhxkjw2l> ${section.items.map((item, itemIndex) => renderTemplate`<article class="timeline-item mb-12 last:mb-0" data-astro-cid-zhxkjw2l> <div class="flex items-center" data-astro-cid-zhxkjw2l>  <div class="timeline-logo flex-shrink-0 w-20 h-20 rounded-lg bg-gray-800 flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-neon-cyan/20 border border-dark-border mr-8" data-astro-cid-zhxkjw2l> <img${addAttribute(item.logo, "src")}${addAttribute(`${item.organization} logo`, "alt")} class="w-12 h-12 object-contain" loading="lazy" onerror="this.src='/logos/placeholder.svg'" data-astro-cid-zhxkjw2l> </div>  <div class="flex-shrink-0 w-64 mr-8" data-astro-cid-zhxkjw2l> <h4 class="text-text-primary font-semibold text-base mb-2" data-astro-cid-zhxkjw2l> ${item.organization} </h4> ${item.isPresent && renderTemplate`<span class="text-neon-cyan text-sm font-medium bg-neon-cyan/10 px-3 py-1 rounded-full inline-flex items-center" data-astro-cid-zhxkjw2l> <i class="fas fa-circle text-xs mr-2" data-astro-cid-zhxkjw2l></i>Present
</span>`} </div>  <div class="flex-1 timeline-bar-wrapper relative" data-astro-cid-zhxkjw2l> <div class="timeline-bar-container relative h-8 bg-gray-800 rounded-full overflow-hidden" data-astro-cid-zhxkjw2l> <div${addAttribute(`timeline-bar h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full transition-all duration-300 ${item.isPresent ? "present-bar" : ""}`, "class")}${addAttribute(`left: ${item.timelinePosition}%; width: ${item.timelineWidth}%`, "style")} data-astro-cid-zhxkjw2l></div> ${item.isPresent && renderTemplate`<div class="absolute top-0 right-0 w-4 h-full bg-neon-cyan rounded-r-full animate-pulse" data-astro-cid-zhxkjw2l></div>`} </div> </div> </div> </article>`)} </div>  <div class="timeline-labels absolute bottom-0 left-0 right-0 flex justify-between text-sm text-text-secondary pt-4" data-astro-cid-zhxkjw2l> ${TIMELINE_YEARS.map((year) => renderTemplate`<span class="font-medium" data-astro-cid-zhxkjw2l>${year}</span>`)} </div>  <div class="current-date-indicator absolute bottom-0 transform -translate-y-8"${addAttribute(`left: ${getCurrentDatePosition()}%`, "style")} data-astro-cid-zhxkjw2l> <div class="flex flex-col items-center space-y-2" data-astro-cid-zhxkjw2l> <div class="w-4 h-4 bg-neon-cyan rounded-full animate-pulse" data-astro-cid-zhxkjw2l></div> <span class="text-neon-cyan text-sm font-medium" data-astro-cid-zhxkjw2l>${getCurrentDateString()}</span> </div> </div> </div> </div> <!-- Mobile Card View --> <div class="md:hidden" data-astro-cid-zhxkjw2l> <div class="space-y-6" data-astro-cid-zhxkjw2l> ${section.items.map((item, itemIndex) => renderTemplate`<article class="timeline-card bg-dark-card border border-dark-border rounded-lg p-6 hover:border-neon-cyan transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/10 group" data-astro-cid-zhxkjw2l> <div class="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6" data-astro-cid-zhxkjw2l>  <div class="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-gray-800 flex items-center justify-center border border-dark-border" data-astro-cid-zhxkjw2l> <img${addAttribute(item.logo, "src")}${addAttribute(`${item.organization} logo`, "alt")} class="w-10 h-10 sm:w-12 sm:h-12 object-contain" loading="lazy" onerror="this.src='/logos/placeholder.svg'" data-astro-cid-zhxkjw2l> </div>  <div class="flex-1 min-w-0" data-astro-cid-zhxkjw2l> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3" data-astro-cid-zhxkjw2l> <h4 class="text-text-primary font-bold text-lg mb-1 sm:mb-0 group-hover:text-neon-cyan transition-colors duration-300" data-astro-cid-zhxkjw2l> ${item.organization} </h4> ${item.isPresent && renderTemplate`<span class="text-neon-cyan text-sm font-medium bg-neon-cyan/10 px-3 py-1 rounded-full inline-flex items-center w-fit" data-astro-cid-zhxkjw2l> <i class="fas fa-circle text-xs mr-2" data-astro-cid-zhxkjw2l></i>Present
</span>`} </div> <h5 class="text-text-primary font-semibold text-base mb-2" data-astro-cid-zhxkjw2l> ${item.title} </h5> ${item.description && renderTemplate`<p class="text-text-secondary text-sm leading-relaxed mb-3" data-astro-cid-zhxkjw2l> ${item.description} </p>`} <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between" data-astro-cid-zhxkjw2l> <time class="text-text-secondary text-sm mb-2 sm:mb-0" data-astro-cid-zhxkjw2l> ${item.startDate} - ${item.isPresent ? "Present" : item.endDate} </time> ${item.website && renderTemplate`<a${addAttribute(item.website, "href")} target="_blank" rel="noopener noreferrer" class="text-text-secondary hover:text-neon-cyan transition-colors duration-300 text-sm inline-flex items-center"${addAttribute(`Visit ${item.organization} website`, "aria-label")} data-astro-cid-zhxkjw2l>
Visit Website
<i class="fas fa-external-link-alt ml-1 text-xs" data-astro-cid-zhxkjw2l></i> </a>`} </div> </div> </div> </article>`)} </div> </div> </section>`)} </div> </div> </section> `;
}, "E:/portfolio-web/nick-devfolio/src/components/Timeline.astro", void 0);

export { $$Timeline as $ };
