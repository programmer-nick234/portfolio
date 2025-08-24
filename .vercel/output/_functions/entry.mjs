import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DHgkK11a.mjs';
import { manifest } from './manifest_B8Wp1Rt7.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contact.astro.mjs');
const _page2 = () => import('./pages/api/contact-simple.astro.mjs');
const _page3 = () => import('./pages/api/debug-env.astro.mjs');
const _page4 = () => import('./pages/api/mail.astro.mjs');
const _page5 = () => import('./pages/api/test-email.astro.mjs');
const _page6 = () => import('./pages/blog.astro.mjs');
const _page7 = () => import('./pages/books.astro.mjs');
const _page8 = () => import('./pages/now.astro.mjs');
const _page9 = () => import('./pages/timeline.astro.mjs');
const _page10 = () => import('./pages/uses.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/contact.ts", _page1],
    ["src/pages/api/contact-simple.ts", _page2],
    ["src/pages/api/debug-env.ts", _page3],
    ["src/pages/api/mail.ts", _page4],
    ["src/pages/api/test-email.ts", _page5],
    ["src/pages/blog.astro", _page6],
    ["src/pages/books.astro", _page7],
    ["src/pages/now.astro", _page8],
    ["src/pages/timeline.astro", _page9],
    ["src/pages/uses.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0c7acec2-3fe7-4fbf-abd7-dfa88df0f9c4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
