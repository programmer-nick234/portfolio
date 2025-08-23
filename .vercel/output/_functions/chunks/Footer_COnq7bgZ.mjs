import { e as createComponent, m as maybeRenderHead, l as renderScript, h as addAttribute, r as renderTemplate, f as createAstro } from './astro/server_hy5EYIg1.mjs';
import 'kleur/colors';
import 'clsx';

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { name: "Home", href: "/", icon: "fas fa-home" },
    { name: "About", href: "/now", icon: "fas fa-user" },
    { name: "Books", href: "/books", icon: "fas fa-book" },
    { name: "Uses", href: "/uses", icon: "fas fa-cog" },
    { name: "Blog", href: "/blog", icon: "fas fa-palette" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="fixed top-0 left-0 right-0 z-50 bg-dark-bg/95 backdrop-blur-md"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-16"> <!-- Panda Logo --> <div class="flex-shrink-0"> <a href="/" class="group"> <img src="/navbar.png" alt="Panda Logo" class="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300"> </a> </div> <!-- Navigation Icons --> <div class="hidden md:flex items-center space-x-6"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="text-text-secondary hover:text-neon-cyan p-2 rounded-lg transition-all duration-300 hover:scale-110 group relative"${addAttribute(item.name, "title")}> <i${addAttribute(`${item.icon} text-xl`, "class")}></i> <!-- Hover tooltip --> <span class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-dark-card text-text-primary text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"> ${item.name} </span> </a>`)} </div> <!-- Mobile menu button --> <div class="md:hidden"> <button id="mobile-menu-button" class="text-text-secondary hover:text-neon-cyan focus:outline-none focus:text-neon-cyan transition-colors duration-300 p-2"> <i class="fas fa-bars text-xl"></i> </button> </div> </div> </div> <!-- Mobile Navigation --> <div id="mobile-menu" class="hidden md:hidden bg-dark-card border-t border-dark-border"> <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="text-text-secondary hover:text-neon-cyan block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 flex items-center space-x-3"> <i${addAttribute(`${item.icon} text-lg`, "class")}></i> <span>${item.name}</span> </a>`)} </div> </div> </nav> ${renderScript($$result, "E:/portfolio-web/nick-devfolio/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/portfolio-web/nick-devfolio/src/components/Navigation.astro", void 0);

const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-dark-bg border-t border-dark-border py-6"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex flex-col sm:flex-row justify-between items-center"> <!-- Copyright --> <div class="text-text-secondary text-sm">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Nikhil Bajantri. All rights reserved.
</div> <!-- Tech Stack Credits --> <div class="text-text-secondary text-sm flex items-center space-x-2 mt-2 sm:mt-0"> <span>Built with</span> <!-- Astro.js Logo --> <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2L2 19h20L12 2zm0 3.84L19.5 19h-15L12 5.84z"></path> </svg> <span>and hosted on</span> <!-- Vercel Logo --> <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"> <path d="M24 22.525H0l12-21.05 12 21.05z"></path> </svg> </div> </div> </div> </footer>`;
}, "E:/portfolio-web/nick-devfolio/src/components/Footer.astro", void 0);

export { $$Navigation as $, $$Footer as a };
