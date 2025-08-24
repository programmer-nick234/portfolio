import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DHgkK11a.mjs';
import { manifest } from './manifest_C8wCaVCF.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contact.astro.mjs');
const _page2 = () => import('./pages/api/contact-simple.astro.mjs');
const _page3 = () => import('./pages/api/debug-env.astro.mjs');
const _page4 = () => import('./pages/api/email-test.astro.mjs');
const _page5 = () => import('./pages/api/mail.astro.mjs');
const _page6 = () => import('./pages/api/test-email.astro.mjs');
const _page7 = () => import('./pages/blog.astro.mjs');
const _page8 = () => import('./pages/books.astro.mjs');
const _page9 = () => import('./pages/now.astro.mjs');
const _page10 = () => import('./pages/timeline.astro.mjs');
const _page11 = () => import('./pages/uses.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/contact.ts", _page1],
    ["src/pages/api/contact-simple.ts", _page2],
    ["src/pages/api/debug-env.ts", _page3],
    ["src/pages/api/email-test.ts", _page4],
    ["src/pages/api/mail.ts", _page5],
    ["src/pages/api/test-email.ts", _page6],
    ["src/pages/blog.astro", _page7],
    ["src/pages/books.astro", _page8],
    ["src/pages/now.astro", _page9],
    ["src/pages/timeline.astro", _page10],
    ["src/pages/uses.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "945c736d-3f6b-450d-a7a0-f82656e47b0a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
