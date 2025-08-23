import { e as createComponent, f as createAstro, h as addAttribute, n as renderHead, o as renderSlot, l as renderScript, r as renderTemplate } from './astro/server_hy5EYIg1.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Developer | Designer | Innovator" } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title><!-- Font Awesome for icons --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">${renderHead()}</head> <body class="text-text-primary font-sans antialiased"> <!-- Clean Dark Background --> <div class="fixed inset-0 z-[-1] bg-gradient-to-br from-gray-900 via-slate-900 to-black"></div> <!-- Subtle accent elements --> <div class="fixed inset-0 z-[-1] opacity-30"> <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div> <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div> </div> <!-- Content --> <div class="relative z-10 min-h-screen"> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "E:/portfolio-web/nick-devfolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "E:/portfolio-web/nick-devfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
