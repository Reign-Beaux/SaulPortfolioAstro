import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_ylhCyMXI.mjs';
import { manifest } from './manifest_BnJiU0r7.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/index/bestpractices.astro.mjs');
const _page1 = () => import('./pages/index/getintouch.astro.mjs');
const _page2 = () => import('./pages/index/smallpresentation.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/index/BestPractices.astro", _page0],
    ["src/pages/index/GetInTouch.astro", _page1],
    ["src/pages/index/SmallPresentation.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///home/saul/Proyectos/Personal/SaulPortfolioAstro/dist/client/",
    "server": "file:///home/saul/Proyectos/Personal/SaulPortfolioAstro/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
