import { g as decodeKey } from './chunks/astro/server_Cgw9YMBF.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BmzCn83z.mjs';

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

const manifest = deserializeManifest({"hrefRoot":"file:///home/saul/Proyectos/Personal/SaulPortfolioAstro/","cacheDir":"file:///home/saul/Proyectos/Personal/SaulPortfolioAstro/node_modules/.astro/","outDir":"file:///home/saul/Proyectos/Personal/SaulPortfolioAstro/dist/","srcDir":"file:///home/saul/Proyectos/Personal/SaulPortfolioAstro/src/","publicDir":"file:///home/saul/Proyectos/Personal/SaulPortfolioAstro/public/","buildClientDir":"file:///home/saul/Proyectos/Personal/SaulPortfolioAstro/dist/client/","buildServerDir":"file:///home/saul/Proyectos/Personal/SaulPortfolioAstro/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index/BestPractices/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/index/bestpractices","isIndex":false,"type":"page","pattern":"^\\/index\\/BestPractices\\/?$","segments":[[{"content":"index","dynamic":false,"spread":false}],[{"content":"BestPractices","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/index/BestPractices.astro","pathname":"/index/BestPractices","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index/GetInTouch/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/index/getintouch","isIndex":false,"type":"page","pattern":"^\\/index\\/GetInTouch\\/?$","segments":[[{"content":"index","dynamic":false,"spread":false}],[{"content":"GetInTouch","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/index/GetInTouch.astro","pathname":"/index/GetInTouch","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index/SmallPresentation/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/index/smallpresentation","isIndex":false,"type":"page","pattern":"^\\/index\\/SmallPresentation\\/?$","segments":[[{"content":"index","dynamic":false,"spread":false}],[{"content":"SmallPresentation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/index/SmallPresentation.astro","pathname":"/index/SmallPresentation","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://saulantonio.br-y-sa.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/saul/Proyectos/Personal/SaulPortfolioAstro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/index/BestPractices@_@astro":"pages/index/bestpractices.astro.mjs","\u0000@astro-page:src/pages/index/GetInTouch@_@astro":"pages/index/getintouch.astro.mjs","\u0000@astro-page:src/pages/index/SmallPresentation@_@astro":"pages/index/smallpresentation.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BnJiU0r7.mjs","/home/saul/Proyectos/Personal/SaulPortfolioAstro/node_modules/.pnpm/unstorage@1.17.1/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/profile.CQRORje3.jpg","/favicon.svg","/index/BestPractices/index.html","/index/GetInTouch/index.html","/index/SmallPresentation/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"M3hcUfpt/LGtW/rJBHZFLM2HeIyJj9jbwn6Z3AYSuUU=","sessionConfig":{"driver":"fs-lite","options":{"base":"/home/saul/Proyectos/Personal/SaulPortfolioAstro/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
