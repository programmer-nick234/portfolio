/* empty css                                */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_hy5EYIg1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_VnVRUUcK.mjs';
import { $ as $$Navigation, a as $$Footer } from '../chunks/Footer_COnq7bgZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Uses = createComponent(($$result, $$props, $$slots) => {
  const categories = [
    {
      name: "Hardware",
      items: [
        { name: 'MacBook Pro 16"', description: "M2 Max, 32GB RAM, 1TB SSD", icon: "fas fa-laptop" },
        { name: "Dell XPS 13", description: "Secondary development machine", icon: "fas fa-laptop" },
        { name: "Apple Studio Display", description: "27-inch 5K Retina display", icon: "fas fa-desktop" },
        { name: "Keychron K2", description: "Mechanical keyboard with brown switches", icon: "fas fa-keyboard" },
        { name: "Logitech MX Master 3", description: "Wireless mouse", icon: "fas fa-mouse" },
        { name: "AirPods Pro", description: "Wireless earbuds for calls and music", icon: "fas fa-headphones" }
      ]
    },
    {
      name: "Software",
      items: [
        { name: "VS Code", description: "Primary code editor", icon: "fas fa-code" },
        { name: "iTerm2", description: "Terminal emulator", icon: "fas fa-terminal" },
        { name: "Figma", description: "Design and prototyping", icon: "fab fa-figma" },
        { name: "Notion", description: "Note-taking and project management", icon: "fas fa-sticky-note" },
        { name: "Spotify", description: "Music streaming", icon: "fab fa-spotify" },
        { name: "Slack", description: "Team communication", icon: "fab fa-slack" }
      ]
    },
    {
      name: "Development Tools",
      items: [
        { name: "Git", description: "Version control", icon: "fab fa-git-alt" },
        { name: "Docker", description: "Containerization", icon: "fab fa-docker" },
        { name: "Postman", description: "API testing", icon: "fas fa-paper-plane" },
        { name: "Chrome DevTools", description: "Web debugging", icon: "fab fa-chrome" },
        { name: "Insomnia", description: "API client", icon: "fas fa-moon" },
        { name: "TablePlus", description: "Database management", icon: "fas fa-database" }
      ]
    },
    {
      name: "Browser Extensions",
      items: [
        { name: "React Developer Tools", description: "React debugging", icon: "fab fa-react" },
        { name: "Vue.js devtools", description: "Vue debugging", icon: "fab fa-vuejs" },
        { name: "ColorZilla", description: "Color picker", icon: "fas fa-eye-dropper" },
        { name: "JSON Formatter", description: "JSON formatting", icon: "fas fa-code" },
        { name: "Grammarly", description: "Writing assistant", icon: "fas fa-spell-check" },
        { name: "uBlock Origin", description: "Ad blocker", icon: "fas fa-shield-alt" }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Uses - Nick", "description": "Tools, software, and hardware I use" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="pt-16"> <section class="py-20 bg-dark-bg"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h1 class="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
What I <span class="text-neon-cyan">Use</span> </h1> <div class="w-24 h-1 bg-neon-cyan mx-auto mb-6"></div> <p class="text-text-secondary text-lg max-w-2xl mx-auto">
A comprehensive list of the tools, software, and hardware I use for development and productivity
</p> </div> <div class="space-y-16"> ${categories.map((category) => renderTemplate`<div class="animate-fade-in"> <h2 class="text-3xl font-bold text-text-primary mb-8 text-center"> ${category.name} </h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${category.items.map((item) => renderTemplate`<div class="group bg-dark-card border border-dark-border rounded-lg p-6 hover:border-neon-cyan transition-all duration-300 hover:transform hover:scale-105"> <div class="flex items-start space-x-4"> <div class="flex-shrink-0 w-12 h-12 bg-dark-bg border border-dark-border rounded-lg flex items-center justify-center group-hover:border-neon-cyan transition-all duration-300"> <i${addAttribute(`${item.icon} text-neon-cyan text-xl`, "class")}></i> </div> <div class="flex-1"> <h3 class="text-lg font-semibold text-text-primary mb-2 group-hover:text-neon-cyan transition-colors duration-300"> ${item.name} </h3> <p class="text-text-secondary text-sm"> ${item.description} </p> </div> </div> </div>`)} </div> </div>`)} </div> <!-- Setup Details --> <div class="mt-20 text-center"> <h3 class="text-2xl font-semibold text-text-primary mb-8">
My Development Setup
</h3> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"> <div class="bg-dark-card border border-dark-border rounded-lg p-6"> <div class="text-neon-cyan text-3xl mb-4"> <i class="fas fa-code"></i> </div> <h4 class="text-text-primary font-semibold mb-2">Code Editor</h4> <p class="text-text-muted text-sm">VS Code with custom theme and extensions</p> </div> <div class="bg-dark-card border border-dark-border rounded-lg p-6"> <div class="text-neon-purple text-3xl mb-4"> <i class="fas fa-terminal"></i> </div> <h4 class="text-text-primary font-semibold mb-2">Terminal</h4> <p class="text-text-muted text-sm">iTerm2 with Oh My Zsh and custom aliases</p> </div> <div class="bg-dark-card border border-dark-border rounded-lg p-6"> <div class="text-neon-green text-3xl mb-4"> <i class="fas fa-palette"></i> </div> <h4 class="text-text-primary font-semibold mb-2">Design</h4> <p class="text-text-muted text-sm">Figma for UI/UX design and prototyping</p> </div> <div class="bg-dark-card border border-dark-border rounded-lg p-6"> <div class="text-yellow-400 text-3xl mb-4"> <i class="fas fa-music"></i> </div> <h4 class="text-text-primary font-semibold mb-2">Music</h4> <p class="text-text-muted text-sm">Spotify with focus playlists for coding</p> </div> </div> </div> <!-- Daily Routine --> <div class="mt-20"> <h3 class="text-2xl font-semibold text-text-primary mb-8 text-center">
Daily Development Routine
</h3> <div class="max-w-4xl mx-auto"> <div class="space-y-6"> <div class="flex items-center space-x-4"> <div class="w-8 h-8 bg-neon-cyan rounded-full flex items-center justify-center text-dark-bg font-bold text-sm">1</div> <p class="text-text-secondary">Start the day with a cup of coffee and check emails</p> </div> <div class="flex items-center space-x-4"> <div class="w-8 h-8 bg-neon-purple rounded-full flex items-center justify-center text-dark-bg font-bold text-sm">2</div> <p class="text-text-secondary">Review yesterday's progress and plan today's tasks</p> </div> <div class="flex items-center space-x-4"> <div class="w-8 h-8 bg-neon-green rounded-full flex items-center justify-center text-dark-bg font-bold text-sm">3</div> <p class="text-text-secondary">Focus on coding with minimal distractions</p> </div> <div class="flex items-center space-x-4"> <div class="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-dark-bg font-bold text-sm">4</div> <p class="text-text-secondary">Take regular breaks and stay hydrated</p> </div> <div class="flex items-center space-x-4"> <div class="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center text-dark-bg font-bold text-sm">5</div> <p class="text-text-secondary">End the day with documentation and planning for tomorrow</p> </div> </div> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "E:/portfolio-web/nick-devfolio/src/pages/uses.astro", void 0);

const $$file = "E:/portfolio-web/nick-devfolio/src/pages/uses.astro";
const $$url = "/uses";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Uses,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
