import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DHgkK11a.mjs';
import { manifest } from './manifest_B_10q3cn.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contact.astro.mjs');
const _page2 = () => import('./pages/api/mail.astro.mjs');
const _page3 = () => import('./pages/api/test-email.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/books.astro.mjs');
const _page6 = () => import('./pages/now.astro.mjs');
const _page7 = () => import('./pages/timeline.astro.mjs');
const _page8 = () => import('./pages/uses.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/contact.ts", _page1],
    ["src/pages/api/mail.ts", _page2],
    ["src/pages/api/test-email.ts", _page3],
    ["src/pages/blog.astro", _page4],
    ["src/pages/books.astro", _page5],
    ["src/pages/now.astro", _page6],
    ["src/pages/timeline.astro", _page7],
    ["src/pages/uses.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c336b2b4-8c2c-46cc-a990-b28152b4ecb6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
