/* empty css                                */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_hy5EYIg1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_VnVRUUcK.mjs';
import { $ as $$Navigation, a as $$Footer } from '../chunks/Footer_COnq7bgZ.mjs';
import { $ as $$About } from '../chunks/About_w-7qhV9i.mjs';
export { renderers } from '../renderers.mjs';

const $$Now = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Me - Nick", "description": "Learn more about Nick, a passionate developer and designer" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="pt-16"> ${renderComponent($$result2, "About", $$About, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "E:/portfolio-web/nick-devfolio/src/pages/now.astro", void 0);

const $$file = "E:/portfolio-web/nick-devfolio/src/pages/now.astro";
const $$url = "/now";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Now,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
