import 'kleur/colors';
import { p as decodeKey } from './chunks/astro/server_hy5EYIg1.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Bs3w9tpz.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///E:/portfolio-web/nick-devfolio/","cacheDir":"file:///E:/portfolio-web/nick-devfolio/node_modules/.astro/","outDir":"file:///E:/portfolio-web/nick-devfolio/dist/","srcDir":"file:///E:/portfolio-web/nick-devfolio/src/","publicDir":"file:///E:/portfolio-web/nick-devfolio/public/","buildClientDir":"file:///E:/portfolio-web/nick-devfolio/dist/client/","buildServerDir":"file:///E:/portfolio-web/nick-devfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/mail","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/mail\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"mail","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/mail.ts","pathname":"/api/mail","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/test-email","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/test-email\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"test-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/test-email.ts","pathname":"/api/test-email","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.DlGyG5Z9.css"},{"type":"inline","content":".line-clamp-2[data-astro-cid-ijnerlr2]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-3[data-astro-cid-ijnerlr2]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.DlGyG5Z9.css"}],"routeData":{"route":"/books","isIndex":false,"type":"page","pattern":"^\\/books\\/?$","segments":[[{"content":"books","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/books.astro","pathname":"/books","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.DlGyG5Z9.css"}],"routeData":{"route":"/now","isIndex":false,"type":"page","pattern":"^\\/now\\/?$","segments":[[{"content":"now","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/now.astro","pathname":"/now","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.DlGyG5Z9.css"},{"type":"inline","content":".timeline-wrapper[data-astro-cid-zhxkjw2l]{min-height:400px;padding-bottom:80px}.timeline-grid-bg[data-astro-cid-zhxkjw2l]{height:100%}.grid-line[data-astro-cid-zhxkjw2l]{position:absolute;top:0;bottom:0;width:1px;border-left:1px dashed rgba(75,85,99,.5)}.timeline-items-container[data-astro-cid-zhxkjw2l]{min-height:300px}.timeline-item[data-astro-cid-zhxkjw2l]{position:relative}.timeline-bar-wrapper[data-astro-cid-zhxkjw2l]{min-width:200px}.timeline-bar-container[data-astro-cid-zhxkjw2l]{position:relative;min-height:32px}.timeline-bar[data-astro-cid-zhxkjw2l]{position:absolute;top:0;box-shadow:0 0 10px #22c55e4d}.timeline-item[data-astro-cid-zhxkjw2l]:hover .timeline-bar[data-astro-cid-zhxkjw2l]{opacity:.9;transform:scaleY(1.2);box-shadow:0 0 15px #22c55e80}.present-bar[data-astro-cid-zhxkjw2l]{box-shadow:0 0 15px #22c55e80;border:1px solid rgba(34,197,94,.3)}.present-bar[data-astro-cid-zhxkjw2l]:after{content:\"\";position:absolute;top:0;right:0;width:4px;height:100%;background:linear-gradient(45deg,#06b6d4,#8b5cf6);border-radius:0 4px 4px 0;animation:pulse 2s infinite}.timeline-logo[data-astro-cid-zhxkjw2l]{border:1px solid rgba(75,85,99,.3)}.timeline-card[data-astro-cid-zhxkjw2l]{transition:all .3s ease}.timeline-card[data-astro-cid-zhxkjw2l]:hover{transform:translateY(-2px)}@keyframes pulse{0%,to{opacity:1;transform:scaleY(1)}50%{opacity:.7;transform:scaleY(1.1)}}.timeline-item[data-astro-cid-zhxkjw2l],.timeline-card[data-astro-cid-zhxkjw2l]{will-change:transform}.timeline-bar[data-astro-cid-zhxkjw2l]{will-change:transform,opacity}@media (max-width: 640px){.timeline-card[data-astro-cid-zhxkjw2l]{padding:1rem}}@media (prefers-reduced-motion: reduce){.timeline-item[data-astro-cid-zhxkjw2l],.timeline-card[data-astro-cid-zhxkjw2l],.timeline-bar[data-astro-cid-zhxkjw2l],.timeline-logo[data-astro-cid-zhxkjw2l]{transition:none}.animate-pulse[data-astro-cid-zhxkjw2l]{animation:none}}\n"}],"routeData":{"route":"/timeline","isIndex":false,"type":"page","pattern":"^\\/timeline\\/?$","segments":[[{"content":"timeline","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/timeline.astro","pathname":"/timeline","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.DlGyG5Z9.css"}],"routeData":{"route":"/uses","isIndex":false,"type":"page","pattern":"^\\/uses\\/?$","segments":[[{"content":"uses","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/uses.astro","pathname":"/uses","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.DlGyG5Z9.css"},{"type":"inline","content":".skill-category[data-astro-cid-ab4ihpzs]{transition:all .3s ease}.group[data-astro-cid-ab4ihpzs]:hover{transform:translateY(-2px)}\n.timeline-wrapper[data-astro-cid-zhxkjw2l]{min-height:400px;padding-bottom:80px}.timeline-grid-bg[data-astro-cid-zhxkjw2l]{height:100%}.grid-line[data-astro-cid-zhxkjw2l]{position:absolute;top:0;bottom:0;width:1px;border-left:1px dashed rgba(75,85,99,.5)}.timeline-items-container[data-astro-cid-zhxkjw2l]{min-height:300px}.timeline-item[data-astro-cid-zhxkjw2l]{position:relative}.timeline-bar-wrapper[data-astro-cid-zhxkjw2l]{min-width:200px}.timeline-bar-container[data-astro-cid-zhxkjw2l]{position:relative;min-height:32px}.timeline-bar[data-astro-cid-zhxkjw2l]{position:absolute;top:0;box-shadow:0 0 10px #22c55e4d}.timeline-item[data-astro-cid-zhxkjw2l]:hover .timeline-bar[data-astro-cid-zhxkjw2l]{opacity:.9;transform:scaleY(1.2);box-shadow:0 0 15px #22c55e80}.present-bar[data-astro-cid-zhxkjw2l]{box-shadow:0 0 15px #22c55e80;border:1px solid rgba(34,197,94,.3)}.present-bar[data-astro-cid-zhxkjw2l]:after{content:\"\";position:absolute;top:0;right:0;width:4px;height:100%;background:linear-gradient(45deg,#06b6d4,#8b5cf6);border-radius:0 4px 4px 0;animation:pulse 2s infinite}.timeline-logo[data-astro-cid-zhxkjw2l]{border:1px solid rgba(75,85,99,.3)}.timeline-card[data-astro-cid-zhxkjw2l]{transition:all .3s ease}.timeline-card[data-astro-cid-zhxkjw2l]:hover{transform:translateY(-2px)}@keyframes pulse{0%,to{opacity:1;transform:scaleY(1)}50%{opacity:.7;transform:scaleY(1.1)}}.timeline-item[data-astro-cid-zhxkjw2l],.timeline-card[data-astro-cid-zhxkjw2l]{will-change:transform}.timeline-bar[data-astro-cid-zhxkjw2l]{will-change:transform,opacity}@media (max-width: 640px){.timeline-card[data-astro-cid-zhxkjw2l]{padding:1rem}}@media (prefers-reduced-motion: reduce){.timeline-item[data-astro-cid-zhxkjw2l],.timeline-card[data-astro-cid-zhxkjw2l],.timeline-bar[data-astro-cid-zhxkjw2l],.timeline-logo[data-astro-cid-zhxkjw2l]{transition:none}.animate-pulse[data-astro-cid-zhxkjw2l]{animation:none}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["E:/portfolio-web/nick-devfolio/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["E:/portfolio-web/nick-devfolio/src/pages/books.astro",{"propagation":"none","containsHead":true}],["E:/portfolio-web/nick-devfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["E:/portfolio-web/nick-devfolio/src/pages/now.astro",{"propagation":"none","containsHead":true}],["E:/portfolio-web/nick-devfolio/src/pages/timeline.astro",{"propagation":"none","containsHead":true}],["E:/portfolio-web/nick-devfolio/src/pages/uses.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/api/mail@_@ts":"pages/api/mail.astro.mjs","\u0000@astro-page:src/pages/api/test-email@_@ts":"pages/api/test-email.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/books@_@astro":"pages/books.astro.mjs","\u0000@astro-page:src/pages/now@_@astro":"pages/now.astro.mjs","\u0000@astro-page:src/pages/timeline@_@astro":"pages/timeline.astro.mjs","\u0000@astro-page:src/pages/uses@_@astro":"pages/uses.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_B_10q3cn.mjs","E:/portfolio-web/nick-devfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Cjw_A3S2.mjs","E:/portfolio-web/nick-devfolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.BX9AVsnU.js","E:/portfolio-web/nick-devfolio/src/components/Navigation.astro?astro&type=script&index=0&lang.ts":"_astro/Navigation.astro_astro_type_script_index_0_lang.bqNVwGII.js","E:/portfolio-web/nick-devfolio/src/components/Contact.astro?astro&type=script&index=0&lang.ts":"_astro/Contact.astro_astro_type_script_index_0_lang.DWp9_qOB.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["E:/portfolio-web/nick-devfolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll('a[href^=\"#\"]').forEach(e=>{e.addEventListener(\"click\",t=>{t.preventDefault();const r=e.getAttribute(\"href\");if(r){const o=document.querySelector(r);o&&o.scrollIntoView({behavior:\"smooth\",block:\"start\"})}})});const s={threshold:.1,rootMargin:\"0px 0px -50px 0px\"},c=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add(\"animate-fade-in\")})},s);document.querySelectorAll(\"section\").forEach(e=>{c.observe(e)});"],["E:/portfolio-web/nick-devfolio/src/components/Navigation.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"mobile-menu-button\"),s=document.getElementById(\"mobile-menu\");t&&s&&t.addEventListener(\"click\",()=>{s.classList.toggle(\"hidden\");const e=t.querySelector(\"i\");e&&(s.classList.contains(\"hidden\")?e.className=\"fas fa-bars text-xl\":e.className=\"fas fa-times text-xl\")});document.querySelectorAll(\"#mobile-menu a\").forEach(e=>{e.addEventListener(\"click\",()=>{s?.classList.add(\"hidden\");const n=t?.querySelector(\"i\");n&&(n.className=\"fas fa-bars text-xl\")})});"],["E:/portfolio-web/nick-devfolio/src/components/Contact.astro?astro&type=script&index=0&lang.ts","const n=document.getElementById(\"contactForm\"),a=document.getElementById(\"submitBtn\"),r=document.getElementById(\"submitIcon\"),c=document.getElementById(\"submitText\"),i=document.getElementById(\"messageContainer\"),u=document.getElementById(\"successMessage\"),g=document.getElementById(\"errorMessage\"),f=document.getElementById(\"successText\"),y=document.getElementById(\"errorText\");function t(s,e){i.classList.add(\"hidden\"),u.classList.add(\"hidden\"),g.classList.add(\"hidden\"),i.classList.remove(\"hidden\"),s===\"success\"?(f.textContent=e,u.classList.remove(\"hidden\")):(y.textContent=e,g.classList.remove(\"hidden\")),setTimeout(()=>{i.classList.add(\"hidden\")},5e3)}function o(s){!a||!r||!c||(s?(a.disabled=!0,r.className=\"fas fa-spinner fa-spin mr-2\",c.textContent=\"Sending...\"):(a.disabled=!1,r.className=\"fas fa-paper-plane mr-2\",c.textContent=\"Send Message\"))}n&&a&&r&&c&&i&&u&&g&&f&&y&&n.addEventListener(\"submit\",async function(s){s.preventDefault(),o(!0);try{const e=new FormData(n),d=e.get(\"email\"),h=e.get(\"name\"),E=e.get(\"message\");if(!d?.trim()||!h?.trim()||!E?.trim()){t(\"error\",\"Please fill all the fields\"),o(!1);return}if(!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(d)){t(\"error\",\"Please enter a valid email address\"),o(!1);return}const l=await fetch(\"/api/contact\",{method:\"POST\",body:e});if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);const m=await l.json();m.success?(t(\"success\",\"Received your mail, I will reply back soon ✨\"),console.log(\"[SUCCESS] Mail sent by:\",d),n.reset()):(console.log(\"[ERROR] Send Mail API Response:\",m),t(\"error\",m.message||\"Sorry, couldn't send the mail\"))}catch(e){console.log(\"[ERROR] Send Mail API:\",e),t(\"error\",\"Sorry, couldn't send the mail\")}finally{o(!1)}});"]],"assets":["/_astro/blog.DlGyG5Z9.css","/apple-touch-icon-114x114.png","/apple-touch-icon-120x120.png","/apple-touch-icon-144x144.png","/apple-touch-icon-152x152.png","/apple-touch-icon-180x180.png","/apple-touch-icon-57x57.png","/apple-touch-icon-72x72.png","/apple-touch-icon-76x76.png","/apple-touch-icon.png","/favicon.ico","/favicon.svg","/navbar.png","/profile-image.jpg","/resume.pdf","/college/college-logo.jpg","/community/DK24.png","/community/SSOSC.LOGO-WHITE.png","/fonts/Satoshi-Variable.ttf","/logos/placeholder.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"EPqgJZpLClJfK1XenUlTPSJwcsIUW61SgExWKcDyvqI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
