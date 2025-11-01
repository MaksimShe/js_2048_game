// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"9sVWG":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 8080;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "47f455d51fcc916e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"fILKw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _gameClassJs = require("./modules/Game.class.js");
var _gameClassJsDefault = parcelHelpers.interopDefault(_gameClassJs);
'use strict';
const button = document.querySelector('.game-control');
const infoBtn = document.querySelector('.game-description');
const game = new (0, _gameClassJsDefault.default)();
button.addEventListener('click', ()=>{
    if (button.classList.contains('start')) {
        game.start();
        game.render();
    } else if (button.classList.contains('restart')) {
        game.restart();
        game.render();
    }
});
window.addEventListener('keydown', (eventKey)=>{
    if (game.gameStatus === (0, _gameClassJs.GAME_STATUS).playing) switch(eventKey.key){
        case 'ArrowUp':
            game.moveUp();
            break;
        case 'ArrowDown':
            game.moveDown();
            break;
        case 'ArrowLeft':
            game.moveLeft();
            break;
        case 'ArrowRight':
            game.moveRight();
            break;
    }
});
infoBtn.addEventListener('click', ()=>{
    const infoText = `
    Use arrow keys to move the tiles.
    When two tiles with the same number touch, they merge into one!
    Reach 2048 to win!

    Developer: Maksym Shevcuk
  `;
    alert(infoText);
});

},{"./modules/Game.class.js":"dhlFI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dhlFI":[function(require,module,exports,__globalThis) {
/* eslint-disable prettier/prettier */ /* eslint-disable comma-dangle */ /* eslint-disable no-shadow */ /* eslint-disable no-console */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GAME_STATUS", ()=>GAME_STATUS);
'use strict';
const GAME_STATUS = {
    idle: 'idle',
    playing: 'playing',
    lose: 'lose',
    win: 'win'
};
const TABLE_SIZE = 4;
const ANIM_DURATION = 120;
class Game {
    gameStatus = GAME_STATUS.idle;
    gameTable = [
        []
    ];
    score = 0;
    prevTable = null;
    savePrevState() {
        this.prevTable = this.gameTable.map((row)=>[
                ...row
            ]);
    }
    /**
   * @param {number[][]} initialState
   * @default
   * [[0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0]]
   */ constructor(initialState){
        let initialStateValid = true;
        if (initialState) {
            for (const row of initialState)row.map((num)=>{
                if (this.isPowerOfTwo(num) === false) {
                    console.error('All numbers in initialState must be power of two or zero');
                    initialStateValid = false;
                }
            });
            if (initialStateValid) this.gameTable = initialState.map((row)=>[
                    ...row
                ]);
            else this.createEmptyTable();
        } else this.createEmptyTable();
    }
    async animateMove(direction) {
        if (!this.prevTable) return;
        const field = document.querySelector('.game-field');
        if (!field) {
            this.prevTable = null;
            return;
        }
        const rows = field.querySelectorAll('.field-row');
        if (rows.length === 0) {
            this.prevTable = null;
            return;
        }
        // helper to map row moves (left/right)
        const mapRowMoves = (oldRow, newRow, rowIdx, dir)=>{
            const sources = [];
            const targets = [];
            const forward = dir === 'left';
            for(let c = 0; c < oldRow.length; c++)if (oldRow[c] !== 0) sources.push({
                col: c,
                v: oldRow[c]
            });
            for(let c = 0; c < newRow.length; c++)if (newRow[c] !== 0) targets.push({
                col: c,
                v: newRow[c]
            });
            // if direction is right, match from right/left
            const sList = forward ? sources : sources.slice().reverse();
            const tList = forward ? targets : targets.slice().reverse();
            const moves = [];
            for(let k = 0; k < sList.length; k++){
                const src = sList[k];
                const tgt = tList[Math.min(k, tList.length - 1)];
                if (tgt) moves.push({
                    fromRow: rowIdx,
                    fromCol: src.col,
                    toRow: rowIdx,
                    toCol: tgt.col
                });
            }
            return moves;
        };
        // map moves up/down
        const mapColMoves = (oldCol, newCol, colIdx, dir)=>{
            const sources = [];
            const targets = [];
            for(let r = 0; r < oldCol.length; r++)if (oldCol[r] !== 0) sources.push({
                row: r,
                v: oldCol[r]
            });
            for(let r = 0; r < newCol.length; r++)if (newCol[r] !== 0) targets.push({
                row: r,
                v: newCol[r]
            });
            const forward = dir === 'up';
            const sList = forward ? sources : sources.slice().reverse();
            const tList = forward ? targets : targets.slice().reverse();
            const moves = [];
            for(let k = 0; k < sList.length; k++){
                const src = sList[k];
                const tgt = tList[Math.min(k, tList.length - 1)];
                if (tgt) moves.push({
                    fromRow: src.row,
                    fromCol: colIdx,
                    toRow: tgt.row,
                    toCol: colIdx
                });
            }
            return moves;
        };
        // build moves list from prevTable ti gameTable
        const moves = [];
        if (direction === 'left' || direction === 'right') for(let r = 0; r < TABLE_SIZE; r++)moves.push(...mapRowMoves(this.prevTable[r], this.gameTable[r], r, direction));
        else // up / down
        for(let c = 0; c < TABLE_SIZE; c++){
            const oldCol = [];
            const newCol = [];
            for(let r = 0; r < TABLE_SIZE; r++){
                oldCol.push(this.prevTable[r][c] ?? 0);
                newCol.push(this.gameTable[r][c] ?? 0);
            }
            moves.push(...mapColMoves(oldCol, newCol, c, direction));
        }
        if (moves.length === 0) {
            this.render();
            this.prevTable = null;
            return;
        }
        // ensure field is posiioned for absolute overlay
        const prevFieldPosition = field.style.position;
        if (getComputedStyle(field).position === 'static') field.style.position = 'relative';
        const fieldRect = field.getBoundingClientRect();
        // create overlay container
        const overlay = document.createElement('div');
        overlay.className = 'move-overlay';
        overlay.style.position = 'absolute';
        overlay.style.left = `${fieldRect.left}px`;
        overlay.style.top = `${fieldRect.top}px`;
        overlay.style.width = `${fieldRect.width}px`;
        overlay.style.height = `${fieldRect.height}px`;
        overlay.style.pointerEvents = 'none';
        overlay.style.zIndex = '1000';
        document.body.append(overlay);
        // create clones from current dom
        const clones = moves.map((m)=>{
            const rowEl = rows[m.fromRow];
            if (!rowEl) return null;
            const cellEls = rowEl.querySelectorAll('.field-cell');
            const sourceEl = cellEls[m.fromCol];
            if (!sourceEl) return null;
            const srcRect = sourceEl.getBoundingClientRect();
            const clone = sourceEl.cloneNode(true);
            clone.classList.add('tile-fly');
            clone.style.position = 'absolute';
            clone.style.left = `${srcRect.left - fieldRect.left}px`;
            clone.style.top = `${srcRect.top - fieldRect.top}px`;
            clone.style.width = `${srcRect.width}px`;
            clone.style.height = `${srcRect.height}px`;
            clone.style.margin = '0';
            clone.style.transform = 'translate(0, 0)';
            clone.style.transition = `transform ${ANIM_DURATION}ms ease`;
            overlay.appendChild(clone);
            return {
                el: clone,
                fromRect: srcRect,
                move: m
            };
        }).filter(Boolean);
        // now update dom to final state
        this.render();
        // trigger animation next frame
        await new Promise((resolve)=>{
            // allow browser to paint render() first
            requestAnimationFrame(()=>{
                // compute target rects and animate clones
                clones.forEach((c)=>{
                    const targetRowEl = field.querySelectorAll('.field-row')[c.move.toRow];
                    if (!targetRowEl) return;
                    const targetCellEls = targetRowEl.querySelectorAll('.field-cell');
                    const targetEl = targetCellEls[c.move.toCol];
                    if (!targetEl) return;
                    const tgtRect = targetEl.getBoundingClientRect();
                    const dx = tgtRect.left - c.fromRect.left;
                    const dy = tgtRect.top - c.fromRect.top;
                    c.el.style.transform = `translate(${dx}px, ${dy}px)`;
                });
                // wait animation duration
                setTimeout(()=>{
                    // clean up
                    overlay.remove();
                    // restore original position style if we changed it
                    if (prevFieldPosition === '') field.style.position = '';
                    else field.style.position = prevFieldPosition;
                    resolve();
                }, ANIM_DURATION + 20);
            });
        });
        this.prevTable = null;
    }
    createCell() {
        this.updateScore();
        const emptyCels = [];
        for(let i = 0; i < TABLE_SIZE; i++)for(let j = 0; j < TABLE_SIZE; j++){
            if (this.gameTable[i][j] === 0) emptyCels.push({
                row: i,
                cell: j
            });
            else if (this.gameTable[i][j] === 2048) {
                this.render();
                this.addScore(2048);
                this.gameWin();
                return;
            }
        }
        if (emptyCels.length === 0) {
            if (this.isLose()) this.gameLose();
            return;
        }
        let numberToAdd = 2;
        const randomNum = Math.floor(Math.random() * emptyCels.length);
        const randomValue = Math.floor(Math.random() * 10);
        if (randomValue === 9) // created cells with num 4 (10% chance for this);
        numberToAdd = 4;
        this.gameTable[emptyCels[randomNum].row][emptyCels[randomNum].cell] = numberToAdd;
        this.render();
    }
    async moveLeft() {
        this.savePrevState();
        for(let i = 0; i < TABLE_SIZE; i++){
            const row = this.gameTable[i].filter((n)=>n !== 0);
            for(let k = 0; k < row.length - 1; k++)if (row[k] === row[k + 1]) {
                row[k] *= 2;
                this.addScore(row[k]);
                row.splice(k + 1, 1);
            }
            while(row.length < TABLE_SIZE)row.push(0);
            this.gameTable[i] = row;
        }
        await this.animateMove('left');
        this.createCell();
    }
    async moveRight() {
        this.savePrevState();
        for(let i = 0; i < TABLE_SIZE; i++){
            const row = this.gameTable[i].filter((n)=>n !== 0);
            for(let k = row.length - 1; k > 0; k--)if (row[k] === row[k - 1]) {
                row[k] *= 2;
                this.addScore(row[k]);
                row.splice(k - 1, 1);
            }
            while(row.length < TABLE_SIZE)row.unshift(0);
            this.gameTable[i] = row;
        }
        await this.animateMove('right');
        this.createCell();
    }
    async moveUp() {
        this.savePrevState();
        for(let i = 0; i < TABLE_SIZE; i++){
            const col = [];
            for(let r = 0; r < TABLE_SIZE; r++)if (this.gameTable[r][i] !== 0) col.push(this.gameTable[r][i]);
            for(let k = 0; k < col.length - 1; k++)if (col[k] === col[k + 1]) {
                col[k] *= 2;
                this.addScore(col[k]);
                col.splice(k + 1, 1);
            }
            while(col.length < TABLE_SIZE)col.push(0);
            for(let r = 0; r < TABLE_SIZE; r++)this.gameTable[r][i] = col[r];
        }
        await this.animateMove('up');
        this.createCell();
    }
    async moveDown() {
        this.savePrevState();
        for(let i = 0; i < TABLE_SIZE; i++){
            const col = [];
            for(let r = 0; r < TABLE_SIZE; r++)if (this.gameTable[r][i] !== 0) col.push(this.gameTable[r][i]);
            for(let k = col.length - 1; k > 0; k--)if (col[k] === col[k - 1]) {
                col[k] *= 2;
                this.addScore(col[k]);
                col.splice(k - 1, 1);
            }
            while(col.length < TABLE_SIZE)col.unshift(0);
            for(let r = 0; r < TABLE_SIZE; r++)this.gameTable[r][i] = col[r];
        }
        await this.animateMove('down');
        this.createCell();
    }
    /**
   * @returns {number}
   */ getScore() {
        return this.score;
    }
    addScore(num) {
        this.score += num;
    }
    updateScore() {
        const scoreElement = document.querySelector('.game-score');
        if (!scoreElement) return;
        scoreElement.textContent = this.score;
    }
    /**
   * @returns {number[][]}
   */ getState() {
        return this.gameTable;
    }
    /**
   * @returns {string} One of: 'idle', 'playing', 'win', 'lose'
   */ getStatus() {
        return this.gameStatus;
    }
    start() {
        this.gameStatus = GAME_STATUS.playing;
        this.score = 0;
        const button = document.querySelector('.button');
        button.textContent = 'Restart';
        button.classList.add('restart');
        button.classList.remove('start');
        const messageStart = document.querySelector('.message-start');
        const messageWin = document.querySelector('.message-win');
        const messageLose = document.querySelector('.message-lose');
        if (messageStart) messageStart.classList.add('hidden');
        if (messageWin) messageWin.classList.add('hidden');
        if (messageLose) messageLose.classList.add('hidden');
        this.createCell();
        this.updateScore();
    }
    restart() {
        this.gameTable = Array.from({
            length: TABLE_SIZE
        }, ()=>Array(TABLE_SIZE).fill(0));
        this.score = 0;
        this.gameStatus = GAME_STATUS.playing;
        const messageWin = document.querySelector('.message-win');
        const messageLose = document.querySelector('.message-lose');
        if (messageWin) messageWin.classList.add('hidden');
        if (messageLose) messageLose.classList.add('hidden');
        this.updateScore();
        this.createCell();
    }
    render() {
        const rows = document.querySelectorAll('.field-row');
        this.gameTable.forEach((rowGT, i)=>{
            const cells = rows[i].querySelectorAll('.field-cell');
            rowGT.forEach((value, j)=>{
                cells[j].className = `field-cell`;
                cells[j].textContent = '';
                if (value !== 0) {
                    cells[j].textContent = value;
                    cells[j].className = `field-cell field-cell--${value}`;
                }
            });
        });
        this.addTransitionEffect();
    }
    gameLose() {
        this.gameStatus = GAME_STATUS.lose;
        const message = document.querySelector('.message-lose');
        message.classList.remove('hidden');
    }
    gameWin() {
        this.gameStatus = GAME_STATUS.win;
        const message = document.querySelector('.message-win');
        message.classList.remove('hidden');
    }
    isLose() {
        // check ability to make not lose move
        for(let i = 1; i < TABLE_SIZE - 1; i++)for(let j = 0; j < TABLE_SIZE; j++){
            if (this.gameTable[i][j] === this.gameTable[i - 1][j] || this.gameTable[i][j] === this.gameTable[i + 1][j]) return false;
        }
        for(let i = 0; i < TABLE_SIZE; i++)for(let j = 1; j < TABLE_SIZE - 1; j++){
            if (this.gameTable[i][j] === this.gameTable[i][j - 1] || this.gameTable[i][j] === this.gameTable[i][j + 1]) return false;
        }
        return true;
    }
    addTransitionEffect() {
        const rows = document.querySelectorAll('.field-row');
        this.gameTable.forEach((rowGT, i)=>{
            const cells = rows[i].querySelectorAll('.field-cell');
            rowGT.forEach((_, j)=>{
                cells[j].classList.add('transition-effect');
            });
        });
    }
    isPowerOfTwo(n) {
        return n > 0 && (n & n - 1) === 0 || n === 0;
    }
    createEmptyTable() {
        this.gameTable = Array.from({
            length: TABLE_SIZE
        }, ()=>Array(TABLE_SIZE).fill(0));
    }
}
exports.default = Game;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["9sVWG","fILKw"], "fILKw", "parcelRequire7b01", {})

//# sourceMappingURL=js_2048_game.1fcc916e.js.map
