(() => {
    "use strict";
    var e = {
            80: () => {
                try {
                    self["workbox:core:6.6.0"] && _()
                } catch (e) {}
            },
            940: () => {
                try {
                    self["workbox:expiration:6.6.0"] && _()
                } catch (e) {}
            },
            17: () => {
                try {
                    self["workbox:precaching:6.6.0"] && _()
                } catch (e) {}
            },
            490: () => {
                try {
                    self["workbox:routing:6.6.0"] && _()
                } catch (e) {}
            },
            581: () => {
                try {
                    self["workbox:strategies:6.6.0"] && _()
                } catch (e) {}
            }
        },
        t = {};

    function a(s) {
        var r = t[s];
        if (void 0 !== r) return r.exports;
        var i = t[s] = {
            exports: {}
        };
        return e[s](i, i.exports, a), i.exports
    }(() => {
        var e, t, s;
        let r, i, n, o, c;
        a(80);
        let l = (e, ...t) => {
                let a = e;
                return t.length > 0 && (a += ` :: ${JSON.stringify(t)}`), a
            },
            h = class extends Error {
                constructor(e, t) {
                    super(l(e, t)), this.name = e, this.details = t
                }
            },
            u = {
                googleAnalytics: "googleAnalytics",
                precache: "precache-v2",
                prefix: "workbox",
                runtime: "runtime",
                suffix: "undefined" != typeof registration ? registration.scope : ""
            },
            d = e => [u.prefix, e, u.suffix].filter(e => e && e.length > 0).join("-"),
            f = e => {
                for (let t of Object.keys(u)) e(t)
            },
            p = {
                updateDetails: e => {
                    f(t => {
                        "string" == typeof e[t] && (u[t] = e[t])
                    })
                },
                getGoogleAnalyticsName: e => e || d(u.googleAnalytics),
                getPrecacheName: e => e || d(u.precache),
                getPrefix: () => u.prefix,
                getRuntimeName: e => e || d(u.runtime),
                getSuffix: () => u.suffix
            };

        function g(e, t) {
            let a = t();
            return e.waitUntil(a), a
        }
        a(17);
        let w = class {
                constructor() {
                    this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({
                        request: e,
                        state: t
                    }) => {
                        t && (t.originalRequest = e)
                    }, this.cachedResponseWillBeUsed = async ({
                        event: e,
                        state: t,
                        cachedResponse: a
                    }) => {
                        if ("install" === e.type && t && t.originalRequest && t.originalRequest instanceof Request) {
                            let e = t.originalRequest.url;
                            a ? this.notUpdatedURLs.push(e) : this.updatedURLs.push(e)
                        }
                        return a
                    }
                }
            },
            m = class {
                constructor({
                    precacheController: e
                }) {
                    this.cacheKeyWillBeUsed = async ({
                        request: e,
                        params: t
                    }) => {
                        let a = (null == t ? void 0 : t.cacheKey) || this._precacheController.getCacheKeyForURL(e.url);
                        return a ? new Request(a, {
                            headers: e.headers
                        }) : e
                    }, this._precacheController = e
                }
            };
        async function y(e, t) {
            let a = null;
            if (e.url && (a = new URL(e.url).origin), a !== self.location.origin) throw new h("cross-origin-copy-response", {
                origin: a
            });
            let s = e.clone(),
                i = {
                    headers: new Headers(s.headers),
                    status: s.status,
                    statusText: s.statusText
                },
                n = t ? t(i) : i,
                o = ! function() {
                    if (void 0 === r) {
                        let e = new Response("");
                        if ("body" in e) try {
                            new Response(e.body), r = !0
                        } catch (e) {
                            r = !1
                        }
                        r = !1
                    }
                    return r
                }() ? await s.blob() : s.body;
            return new Response(o, n)
        }
        let b = e => new URL(String(e), location.href).href.replace(RegExp(`^${location.origin}`), "");

        function x(e, t) {
            let a = new URL(e);
            for (let e of t) a.searchParams.delete(e);
            return a.href
        }
        async function R(e, t, a, s) {
            let r = x(t.url, a);
            if (t.url === r) return e.match(t, s);
            let i = Object.assign(Object.assign({}, s), {
                ignoreSearch: !0
            });
            for (let n of (await e.keys(t, i)))
                if (r === x(n.url, a)) return e.match(n, s)
        }
        let v = class {
                constructor() {
                    this.promise = new Promise((e, t) => {
                        this.resolve = e, this.reject = t
                    })
                }
            },
            C = new Set;
        async function E() {
            for (let e of C) await e()
        }

        function D(e) {
            return "string" == typeof e ? new Request(e) : e
        }
        a(581);
        let L = class {
                async fetch(e) {
                    let {
                        event: t
                    } = this, a = D(e);
                    if ("navigate" === a.mode && t instanceof FetchEvent && t.preloadResponse) {
                        let e = await t.preloadResponse;
                        if (e) return e
                    }
                    let s = this.hasCallback("fetchDidFail") ? a.clone() : null;
                    try {
                        for (let e of this.iterateCallbacks("requestWillFetch")) a = await e({
                            request: a.clone(),
                            event: t
                        })
                    } catch (e) {
                        if (e instanceof Error) throw new h("plugin-error-request-will-fetch", {
                            thrownErrorMessage: e.message
                        })
                    }
                    let r = a.clone();
                    try {
                        let e;
                        for (let s of (e = await fetch(a, "navigate" === a.mode ? void 0 : this._strategy.fetchOptions), this.iterateCallbacks("fetchDidSucceed"))) e = await s({
                            event: t,
                            request: r,
                            response: e
                        });
                        return e
                    } catch (e) {
                        throw s && await this.runCallbacks("fetchDidFail", {
                            error: e,
                            event: t,
                            originalRequest: s.clone(),
                            request: r.clone()
                        }), e
                    }
                }
                async fetchAndCachePut(e) {
                    let t = await this.fetch(e),
                        a = t.clone();
                    return this.waitUntil(this.cachePut(e, a)), t
                }
                async cacheMatch(e) {
                    let t;
                    let a = D(e),
                        {
                            cacheName: s,
                            matchOptions: r
                        } = this._strategy,
                        i = await this.getCacheKey(a, "read"),
                        n = Object.assign(Object.assign({}, r), {
                            cacheName: s
                        });
                    for (let e of (t = await caches.match(i, n), this.iterateCallbacks("cachedResponseWillBeUsed"))) t = await e({
                        cacheName: s,
                        matchOptions: r,
                        cachedResponse: t,
                        request: i,
                        event: this.event
                    }) || void 0;
                    return t
                }
                async cachePut(e, t) {
                    let a = D(e);
                    await new Promise(e => setTimeout(e, 0));
                    let s = await this.getCacheKey(a, "write");
                    if (!t) throw new h("cache-put-with-no-response", {
                        url: b(s.url)
                    });
                    let r = await this._ensureResponseSafeToCache(t);
                    if (!r) return !1;
                    let {
                        cacheName: i,
                        matchOptions: n
                    } = this._strategy, o = await self.caches.open(i), c = this.hasCallback("cacheDidUpdate"), l = c ? await R(o, s.clone(), ["__WB_REVISION__"], n) : null;
                    try {
                        await o.put(s, c ? r.clone() : r)
                    } catch (e) {
                        if (e instanceof Error) throw "QuotaExceededError" === e.name && await E(), e
                    }
                    for (let e of this.iterateCallbacks("cacheDidUpdate")) await e({
                        cacheName: i,
                        oldResponse: l,
                        newResponse: r.clone(),
                        request: s,
                        event: this.event
                    });
                    return !0
                }
                async getCacheKey(e, t) {
                    let a = `${e.url} | ${t}`;
                    if (!this._cacheKeys[a]) {
                        let s = e;
                        for (let e of this.iterateCallbacks("cacheKeyWillBeUsed")) s = D(await e({
                            mode: t,
                            request: s,
                            event: this.event,
                            params: this.params
                        }));
                        this._cacheKeys[a] = s
                    }
                    return this._cacheKeys[a]
                }
                hasCallback(e) {
                    for (let t of this._strategy.plugins)
                        if (e in t) return !0;
                    return !1
                }
                async runCallbacks(e, t) {
                    for (let a of this.iterateCallbacks(e)) await a(t)
                }* iterateCallbacks(e) {
                    for (let t of this._strategy.plugins)
                        if ("function" == typeof t[e]) {
                            let a = this._pluginStateMap.get(t),
                                s = s => {
                                    let r = Object.assign(Object.assign({}, s), {
                                        state: a
                                    });
                                    return t[e](r)
                                };
                            yield s
                        }
                }
                waitUntil(e) {
                    return this._extendLifetimePromises.push(e), e
                }
                async doneWaiting() {
                    let e;
                    for (; e = this._extendLifetimePromises.shift();) await e
                }
                destroy() {
                    this._handlerDeferred.resolve(null)
                }
                async _ensureResponseSafeToCache(e) {
                    let t = e,
                        a = !1;
                    for (let e of this.iterateCallbacks("cacheWillUpdate"))
                        if (t = await e({
                                request: this.request,
                                response: t,
                                event: this.event
                            }) || void 0, a = !0, !t) break;
                    return !a && t && 200 !== t.status && (t = void 0), t
                }
                constructor(e, t) {
                    for (let a of (this._cacheKeys = {}, Object.assign(this, t), this.event = t.event, this._strategy = e, this._handlerDeferred = new v, this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = new Map, this._plugins)) this._pluginStateMap.set(a, {});
                    this.event.waitUntil(this._handlerDeferred.promise)
                }
            },
            T = class {
                handle(e) {
                    let [t] = this.handleAll(e);
                    return t
                }
                handleAll(e) {
                    e instanceof FetchEvent && (e = {
                        event: e,
                        request: e.request
                    });
                    let t = e.event,
                        a = "string" == typeof e.request ? new Request(e.request) : e.request,
                        s = new L(this, {
                            event: t,
                            request: a,
                            params: "params" in e ? e.params : void 0
                        }),
                        r = this._getResponse(s, a, t),
                        i = this._awaitComplete(r, s, a, t);
                    return [r, i]
                }
                async _getResponse(e, t, a) {
                    let s;
                    await e.runCallbacks("handlerWillStart", {
                        event: a,
                        request: t
                    });
                    try {
                        if (!(s = await this._handle(t, e)) || "error" === s.type) throw new h("no-response", {
                            url: t.url
                        })
                    } catch (r) {
                        if (r instanceof Error) {
                            for (let i of e.iterateCallbacks("handlerDidError"))
                                if (s = await i({
                                        error: r,
                                        event: a,
                                        request: t
                                    })) break
                        }
                        if (s);
                        else throw r
                    }
                    for (let r of e.iterateCallbacks("handlerWillRespond")) s = await r({
                        event: a,
                        request: t,
                        response: s
                    });
                    return s
                }
                async _awaitComplete(e, t, a, s) {
                    let r, i;
                    try {
                        r = await e
                    } catch (e) {}
                    try {
                        await t.runCallbacks("handlerDidRespond", {
                            event: s,
                            request: a,
                            response: r
                        }), await t.doneWaiting()
                    } catch (e) {
                        e instanceof Error && (i = e)
                    }
                    if (await t.runCallbacks("handlerDidComplete", {
                            event: s,
                            request: a,
                            response: r,
                            error: i
                        }), t.destroy(), i) throw i
                }
                constructor(e = {}) {
                    this.cacheName = p.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions
                }
            },
            k = class e extends T {
                async _handle(e, t) {
                    return await t.cacheMatch(e) || (t.event && "install" === t.event.type ? await this._handleInstall(e, t) : await this._handleFetch(e, t))
                }
                async _handleFetch(e, t) {
                    let a;
                    let s = t.params || {};
                    if (this._fallbackToNetwork) {
                        let r = s.integrity,
                            i = e.integrity,
                            n = !i || i === r;
                        a = await t.fetch(new Request(e, {
                            integrity: "no-cors" !== e.mode ? i || r : void 0
                        })), r && n && "no-cors" !== e.mode && (this._useDefaultCacheabilityPluginIfNeeded(), await t.cachePut(e, a.clone()))
                    } else throw new h("missing-precache-entry", {
                        cacheName: this.cacheName,
                        url: e.url
                    });
                    return a
                }
                async _handleInstall(e, t) {
                    this._useDefaultCacheabilityPluginIfNeeded();
                    let a = await t.fetch(e);
                    if (!await t.cachePut(e, a.clone())) throw new h("bad-precaching-response", {
                        url: e.url,
                        status: a.status
                    });
                    return a
                }
                _useDefaultCacheabilityPluginIfNeeded() {
                    let t = null,
                        a = 0;
                    for (let [s, r] of this.plugins.entries()) r !== e.copyRedirectedCacheableResponsesPlugin && (r === e.defaultPrecacheCacheabilityPlugin && (t = s), r.cacheWillUpdate && a++);
                    0 === a ? this.plugins.push(e.defaultPrecacheCacheabilityPlugin) : a > 1 && null !== t && this.plugins.splice(t, 1)
                }
                constructor(t = {}) {
                    t.cacheName = p.getPrecacheName(t.cacheName), super(t), this._fallbackToNetwork = !1 !== t.fallbackToNetwork, this.plugins.push(e.copyRedirectedCacheableResponsesPlugin)
                }
            };
        k.defaultPrecacheCacheabilityPlugin = {
            cacheWillUpdate: async ({
                response: e
            }) => !e || e.status >= 400 ? null : e
        }, k.copyRedirectedCacheableResponsesPlugin = {
            cacheWillUpdate: async ({
                response: e
            }) => e.redirected ? await y(e) : e
        };
        let N = class {
                get strategy() {
                    return this._strategy
                }
                precache(e) {
                    this.addToCacheList(e), this._installAndActiveListenersAdded || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this._installAndActiveListenersAdded = !0)
                }
                addToCacheList(e) {
                    let t = [];
                    for (let a of e) {
                        "string" == typeof a ? t.push(a) : a && void 0 === a.revision && t.push(a.url);
                        let {
                            cacheKey: e,
                            url: s
                        } = function(e) {
                            if (!e) throw new h("add-to-cache-list-unexpected-type", {
                                entry: e
                            });
                            if ("string" == typeof e) {
                                let t = new URL(e, location.href);
                                return {
                                    cacheKey: t.href,
                                    url: t.href
                                }
                            }
                            let {
                                revision: t,
                                url: a
                            } = e;
                            if (!a) throw new h("add-to-cache-list-unexpected-type", {
                                entry: e
                            });
                            if (!t) {
                                let e = new URL(a, location.href);
                                return {
                                    cacheKey: e.href,
                                    url: e.href
                                }
                            }
                            let s = new URL(a, location.href),
                                r = new URL(a, location.href);
                            return s.searchParams.set("__WB_REVISION__", t), {
                                cacheKey: s.href,
                                url: r.href
                            }
                        }(a), r = "string" != typeof a && a.revision ? "reload" : "default";
                        if (this._urlsToCacheKeys.has(s) && this._urlsToCacheKeys.get(s) !== e) throw new h("add-to-cache-list-conflicting-entries", {
                            firstEntry: this._urlsToCacheKeys.get(s),
                            secondEntry: e
                        });
                        if ("string" != typeof a && a.integrity) {
                            if (this._cacheKeysToIntegrities.has(e) && this._cacheKeysToIntegrities.get(e) !== a.integrity) throw new h("add-to-cache-list-conflicting-integrities", {
                                url: s
                            });
                            this._cacheKeysToIntegrities.set(e, a.integrity)
                        }
                        this._urlsToCacheKeys.set(s, e), this._urlsToCacheModes.set(s, r), t.length > 0 && console.warn(`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`)
                    }
                }
                install(e) {
                    return g(e, async () => {
                        let t = new w;
                        for (let [a, s] of (this.strategy.plugins.push(t), this._urlsToCacheKeys)) {
                            let t = this._cacheKeysToIntegrities.get(s),
                                r = this._urlsToCacheModes.get(a),
                                i = new Request(a, {
                                    integrity: t,
                                    cache: r,
                                    credentials: "same-origin"
                                });
                            await Promise.all(this.strategy.handleAll({
                                params: {
                                    cacheKey: s
                                },
                                request: i,
                                event: e
                            }))
                        }
                        let {
                            updatedURLs: a,
                            notUpdatedURLs: s
                        } = t;
                        return {
                            updatedURLs: a,
                            notUpdatedURLs: s
                        }
                    })
                }
                activate(e) {
                    return g(e, async () => {
                        let e = await self.caches.open(this.strategy.cacheName),
                            t = await e.keys(),
                            a = new Set(this._urlsToCacheKeys.values()),
                            s = [];
                        for (let r of t) a.has(r.url) || (await e.delete(r), s.push(r.url));
                        return {
                            deletedURLs: s
                        }
                    })
                }
                getURLsToCacheKeys() {
                    return this._urlsToCacheKeys
                }
                getCachedURLs() {
                    return [...this._urlsToCacheKeys.keys()]
                }
                getCacheKeyForURL(e) {
                    let t = new URL(e, location.href);
                    return this._urlsToCacheKeys.get(t.href)
                }
                getIntegrityForCacheKey(e) {
                    return this._cacheKeysToIntegrities.get(e)
                }
                async matchPrecache(e) {
                    let t = e instanceof Request ? e.url : e,
                        a = this.getCacheKeyForURL(t);
                    if (a) return (await self.caches.open(this.strategy.cacheName)).match(a)
                }
                createHandlerBoundToURL(e) {
                    let t = this.getCacheKeyForURL(e);
                    if (!t) throw new h("non-precached-url", {
                        url: e
                    });
                    return a => (a.request = new Request(e), a.params = Object.assign({
                        cacheKey: t
                    }, a.params), this.strategy.handle(a))
                }
                constructor({
                    cacheName: e,
                    plugins: t = [],
                    fallbackToNetwork: a = !0
                } = {}) {
                    this._urlsToCacheKeys = new Map, this._urlsToCacheModes = new Map, this._cacheKeysToIntegrities = new Map, this._strategy = new k({
                        cacheName: p.getPrecacheName(e),
                        plugins: [...t, new m({
                            precacheController: this
                        })],
                        fallbackToNetwork: a
                    }), this.install = this.install.bind(this), this.activate = this.activate.bind(this)
                }
            },
            U = () => (i || (i = new N), i);
        a(490);
        let P = e => e && "object" == typeof e ? e : {
                handle: e
            },
            I = class {
                setCatchHandler(e) {
                    this.catchHandler = P(e)
                }
                constructor(e, t, a = "GET") {
                    this.handler = P(t), this.match = e, this.method = a
                }
            },
            q = class extends I {
                constructor(e, t, a) {
                    super(({
                        url: t
                    }) => {
                        let a = e.exec(t.href);
                        if (a && (t.origin === location.origin || 0 === a.index)) return a.slice(1)
                    }, t, a)
                }
            },
            K = class {
                get routes() {
                    return this._routes
                }
                addFetchListener() {
                    self.addEventListener("fetch", e => {
                        let {
                            request: t
                        } = e, a = this.handleRequest({
                            request: t,
                            event: e
                        });
                        a && e.respondWith(a)
                    })
                }
                addCacheListener() {
                    self.addEventListener("message", e => {
                        if (e.data && "CACHE_URLS" === e.data.type) {
                            let {
                                payload: t
                            } = e.data, a = Promise.all(t.urlsToCache.map(t => {
                                "string" == typeof t && (t = [t]);
                                let a = new Request(...t);
                                return this.handleRequest({
                                    request: a,
                                    event: e
                                })
                            }));
                            e.waitUntil(a), e.ports && e.ports[0] && a.then(() => e.ports[0].postMessage(!0))
                        }
                    })
                }
                handleRequest({
                    request: e,
                    event: t
                }) {
                    let a;
                    let s = new URL(e.url, location.href);
                    if (!s.protocol.startsWith("http")) return;
                    let r = s.origin === location.origin,
                        {
                            params: i,
                            route: n
                        } = this.findMatchingRoute({
                            event: t,
                            request: e,
                            sameOrigin: r,
                            url: s
                        }),
                        o = n && n.handler,
                        c = e.method;
                    if (!o && this._defaultHandlerMap.has(c) && (o = this._defaultHandlerMap.get(c)), !o) return;
                    try {
                        a = o.handle({
                            url: s,
                            request: e,
                            event: t,
                            params: i
                        })
                    } catch (e) {
                        a = Promise.reject(e)
                    }
                    let l = n && n.catchHandler;
                    return a instanceof Promise && (this._catchHandler || l) && (a = a.catch(async a => {
                        if (l) try {
                            return await l.handle({
                                url: s,
                                request: e,
                                event: t,
                                params: i
                            })
                        } catch (e) {
                            e instanceof Error && (a = e)
                        }
                        if (this._catchHandler) return this._catchHandler.handle({
                            url: s,
                            request: e,
                            event: t
                        });
                        throw a
                    })), a
                }
                findMatchingRoute({
                    url: e,
                    sameOrigin: t,
                    request: a,
                    event: s
                }) {
                    for (let r of this._routes.get(a.method) || []) {
                        let i;
                        let n = r.match({
                            url: e,
                            sameOrigin: t,
                            request: a,
                            event: s
                        });
                        if (n) return Array.isArray(i = n) && 0 === i.length ? i = void 0 : n.constructor === Object && 0 === Object.keys(n).length ? i = void 0 : "boolean" == typeof n && (i = void 0), {
                            route: r,
                            params: i
                        }
                    }
                    return {}
                }
                setDefaultHandler(e, t = "GET") {
                    this._defaultHandlerMap.set(t, P(e))
                }
                setCatchHandler(e) {
                    this._catchHandler = P(e)
                }
                registerRoute(e) {
                    this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e)
                }
                unregisterRoute(e) {
                    if (!this._routes.has(e.method)) throw new h("unregister-route-but-not-found-with-method", {
                        method: e.method
                    });
                    let t = this._routes.get(e.method).indexOf(e);
                    if (t > -1) this._routes.get(e.method).splice(t, 1);
                    else throw new h("unregister-route-route-not-registered")
                }
                constructor() {
                    this._routes = new Map, this._defaultHandlerMap = new Map
                }
            },
            M = () => (n || ((n = new K).addFetchListener(), n.addCacheListener()), n);

        function A(e, t, a) {
            let s;
            if ("string" == typeof e) {
                let r = new URL(e, location.href);
                s = new I(({
                    url: e
                }) => e.href === r.href, t, a)
            } else if (e instanceof RegExp) s = new q(e, t, a);
            else if ("function" == typeof e) s = new I(e, t, a);
            else if (e instanceof I) s = e;
            else throw new h("unsupported-route-type", {
                moduleName: "workbox-routing",
                funcName: "registerRoute",
                paramName: "capture"
            });
            return M().registerRoute(s), s
        }
        let S = class extends I {
            constructor(e, t) {
                super(({
                    request: a
                }) => {
                    let s = e.getURLsToCacheKeys();
                    for (let r of function*(e, {
                            ignoreURLParametersMatching: t = [/^utm_/, /^fbclid$/],
                            directoryIndex: a = "index.html",
                            cleanURLs: s = !0,
                            urlManipulation: r
                        } = {}) {
                            let i = new URL(e, location.href);
                            i.hash = "", yield i.href;
                            let n = function(e, t = []) {
                                for (let a of [...e.searchParams.keys()]) t.some(e => e.test(a)) && e.searchParams.delete(a);
                                return e
                            }(i, t);
                            if (yield n.href, a && n.pathname.endsWith("/")) {
                                let e = new URL(n.href);
                                e.pathname += a, yield e.href
                            }
                            if (s) {
                                let e = new URL(n.href);
                                e.pathname += ".html", yield e.href
                            }
                            if (r)
                                for (let e of r({
                                        url: i
                                    })) yield e.href
                        }(a.url, t)) {
                        let t = s.get(r);
                        if (t) {
                            let a = e.getIntegrityForCacheKey(t);
                            return {
                                cacheKey: t,
                                integrity: a
                            }
                        }
                    }
                }, e.strategy)
            }
        };

        function O(e) {
            e.then(() => {})
        }
        let B = {
                get precache() {
                    return p.getPrecacheName()
                },
                get prefix() {
                    return p.getPrefix()
                },
                get suffix() {
                    return p.getSuffix()
                }
            },
            W = (e, t) => t.some(t => e instanceof t),
            j = new WeakMap,
            F = new WeakMap,
            H = new WeakMap,
            $ = new WeakMap,
            V = new WeakMap,
            G = {
                get(e, t, a) {
                    if (e instanceof IDBTransaction) {
                        if ("done" === t) return F.get(e);
                        if ("objectStoreNames" === t) return e.objectStoreNames || H.get(e);
                        if ("store" === t) return a.objectStoreNames[1] ? void 0 : a.objectStore(a.objectStoreNames[0])
                    }
                    return Q(e[t])
                },
                set: (e, t, a) => (e[t] = a, !0),
                has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
            };

        function Q(e) {
            var t;
            if (e instanceof IDBRequest) return function(e) {
                let t = new Promise((t, a) => {
                    let s = () => {
                            e.removeEventListener("success", r), e.removeEventListener("error", i)
                        },
                        r = () => {
                            t(Q(e.result)), s()
                        },
                        i = () => {
                            a(e.error), s()
                        };
                    e.addEventListener("success", r), e.addEventListener("error", i)
                });
                return t.then(t => {
                    t instanceof IDBCursor && j.set(t, e)
                }).catch(() => {}), V.set(t, e), t
            }(e);
            if ($.has(e)) return $.get(e);
            let a = "function" == typeof(t = e) ? t !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (c || (c = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t) ? function(...e) {
                return t.apply(J(this), e), Q(j.get(this))
            } : function(...e) {
                return Q(t.apply(J(this), e))
            } : function(e, ...a) {
                let s = t.call(J(this), e, ...a);
                return H.set(s, e.sort ? e.sort() : [e]), Q(s)
            } : (t instanceof IDBTransaction && function(e) {
                if (F.has(e)) return;
                let t = new Promise((t, a) => {
                    let s = () => {
                            e.removeEventListener("complete", r), e.removeEventListener("error", i), e.removeEventListener("abort", i)
                        },
                        r = () => {
                            t(), s()
                        },
                        i = () => {
                            a(e.error || new DOMException("AbortError", "AbortError")), s()
                        };
                    e.addEventListener("complete", r), e.addEventListener("error", i), e.addEventListener("abort", i)
                });
                F.set(e, t)
            }(t), W(t, o || (o = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]))) ? new Proxy(t, G) : t;
            return a !== e && ($.set(e, a), V.set(a, e)), a
        }
        let J = e => V.get(e),
            z = ["get", "getKey", "getAll", "getAllKeys", "count"],
            X = ["put", "add", "delete", "clear"],
            Y = new Map;

        function Z(e, t) {
            if (!(e instanceof IDBDatabase && !(t in e) && "string" == typeof t)) return;
            if (Y.get(t)) return Y.get(t);
            let a = t.replace(/FromIndex$/, ""),
                s = t !== a,
                r = X.includes(a);
            if (!(a in (s ? IDBIndex : IDBObjectStore).prototype) || !(r || z.includes(a))) return;
            let i = async function(e, ...t) {
                let i = this.transaction(e, r ? "readwrite" : "readonly"),
                    n = i.store;
                return s && (n = n.index(t.shift())), (await Promise.all([n[a](...t), r && i.done]))[0]
            };
            return Y.set(t, i), i
        }
        G = { ...e = G,
            get: (t, a, s) => Z(t, a) || e.get(t, a, s),
            has: (t, a) => !!Z(t, a) || e.has(t, a)
        }, a(940);
        let ee = "cache-entries",
            et = e => {
                let t = new URL(e, location.href);
                return t.hash = "", t.href
            },
            ea = class {
                _upgradeDb(e) {
                    let t = e.createObjectStore(ee, {
                        keyPath: "id"
                    });
                    t.createIndex("cacheName", "cacheName", {
                        unique: !1
                    }), t.createIndex("timestamp", "timestamp", {
                        unique: !1
                    })
                }
                _upgradeDbAndDeleteOldDbs(e) {
                    this._upgradeDb(e), this._cacheName && function(e, {
                        blocked: t
                    } = {}) {
                        let a = indexedDB.deleteDatabase(e);
                        t && a.addEventListener("blocked", e => t(e.oldVersion, e)), Q(a).then(() => void 0)
                    }(this._cacheName)
                }
                async setTimestamp(e, t) {
                    let a = {
                            url: e = et(e),
                            timestamp: t,
                            cacheName: this._cacheName,
                            id: this._getId(e)
                        },
                        s = (await this.getDb()).transaction(ee, "readwrite", {
                            durability: "relaxed"
                        });
                    await s.store.put(a), await s.done
                }
                async getTimestamp(e) {
                    let t = await this.getDb(),
                        a = await t.get(ee, this._getId(e));
                    return null == a ? void 0 : a.timestamp
                }
                async expireEntries(e, t) {
                    let a = await this.getDb(),
                        s = await a.transaction(ee).store.index("timestamp").openCursor(null, "prev"),
                        r = [],
                        i = 0;
                    for (; s;) {
                        let a = s.value;
                        a.cacheName === this._cacheName && (e && a.timestamp < e || t && i >= t ? r.push(s.value) : i++), s = await s.continue()
                    }
                    let n = [];
                    for (let e of r) await a.delete(ee, e.id), n.push(e.url);
                    return n
                }
                _getId(e) {
                    return this._cacheName + "|" + et(e)
                }
                async getDb() {
                    return this._db || (this._db = await
                        function(e, t, {
                            blocked: a,
                            upgrade: s,
                            blocking: r,
                            terminated: i
                        } = {}) {
                            let n = indexedDB.open(e, 1),
                                o = Q(n);
                            return s && n.addEventListener("upgradeneeded", e => {
                                s(Q(n.result), e.oldVersion, e.newVersion, Q(n.transaction), e)
                            }), a && n.addEventListener("blocked", e => a(e.oldVersion, e.newVersion, e)), o.then(e => {
                                i && e.addEventListener("close", () => i()), r && e.addEventListener("versionchange", e => r(e.oldVersion, e.newVersion, e))
                            }).catch(() => {}), o
                        }("workbox-expiration", 0, {
                            upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
                        })), this._db
                }
                constructor(e) {
                    this._db = null, this._cacheName = e
                }
            },
            es = class {
                async expireEntries() {
                    if (this._isRunning) {
                        this._rerunRequested = !0;
                        return
                    }
                    this._isRunning = !0;
                    let e = this._maxAgeSeconds ? Date.now() - 1e3 * this._maxAgeSeconds : 0,
                        t = await this._timestampModel.expireEntries(e, this._maxEntries),
                        a = await self.caches.open(this._cacheName);
                    for (let e of t) await a.delete(e, this._matchOptions);
                    this._isRunning = !1, this._rerunRequested && (this._rerunRequested = !1, O(this.expireEntries()))
                }
                async updateTimestamp(e) {
                    await this._timestampModel.setTimestamp(e, Date.now())
                }
                async isURLExpired(e) {
                    if (!this._maxAgeSeconds) return !1; {
                        let t = await this._timestampModel.getTimestamp(e),
                            a = Date.now() - 1e3 * this._maxAgeSeconds;
                        return void 0 === t || t < a
                    }
                }
                async delete() {
                    this._rerunRequested = !1, await this._timestampModel.expireEntries(1 / 0)
                }
                constructor(e, t = {}) {
                    this._isRunning = !1, this._rerunRequested = !1, this._maxEntries = t.maxEntries, this._maxAgeSeconds = t.maxAgeSeconds, this._matchOptions = t.matchOptions, this._cacheName = e, this._timestampModel = new ea(e)
                }
            },
            er = class {
                _getCacheExpiration(e) {
                    if (e === p.getRuntimeName()) throw new h("expire-custom-caches-only");
                    let t = this._cacheExpirations.get(e);
                    return t || (t = new es(e, this._config), this._cacheExpirations.set(e, t)), t
                }
                _isResponseDateFresh(e) {
                    if (!this._maxAgeSeconds) return !0;
                    let t = this._getDateHeaderTimestamp(e);
                    return null === t || t >= Date.now() - 1e3 * this._maxAgeSeconds
                }
                _getDateHeaderTimestamp(e) {
                    if (!e.headers.has("date")) return null;
                    let t = new Date(e.headers.get("date")).getTime();
                    return isNaN(t) ? null : t
                }
                async deleteCacheAndMetadata() {
                    for (let [e, t] of this._cacheExpirations) await self.caches.delete(e), await t.delete();
                    this._cacheExpirations = new Map
                }
                constructor(e = {}) {
                    this.cachedResponseWillBeUsed = async ({
                        event: e,
                        request: t,
                        cacheName: a,
                        cachedResponse: s
                    }) => {
                        if (!s) return null;
                        let r = this._isResponseDateFresh(s),
                            i = this._getCacheExpiration(a);
                        O(i.expireEntries());
                        let n = i.updateTimestamp(t.url);
                        if (e) try {
                            e.waitUntil(n)
                        } catch (e) {}
                        return r ? s : null
                    }, this.cacheDidUpdate = async ({
                        cacheName: e,
                        request: t
                    }) => {
                        let a = this._getCacheExpiration(e);
                        await a.updateTimestamp(t.url), await a.expireEntries()
                    }, this._config = e, this._maxAgeSeconds = e.maxAgeSeconds, this._cacheExpirations = new Map, e.purgeOnQuotaError && C.add(() => this.deleteCacheAndMetadata())
                }
            },
            ei = class extends T {
                async _handle(e, t) {
                    let a, s = await t.cacheMatch(e);
                    if (!s) try {
                        s = await t.fetchAndCachePut(e)
                    } catch (e) {
                        e instanceof Error && (a = e)
                    }
                    if (!s) throw new h("no-response", {
                        url: e.url,
                        error: a
                    });
                    return s
                }
            };
        async function en(e, {
            usedCaches: t
        }) {
            (await e.keys()).filter(e => !t.includes(e)).forEach(t => e.delete(t))
        }
        let eo = RegExp("/[^/?]+\\.[^/]+$"),
            ec = "/index.html";

        function el({
            request: e,
            url: t
        }) {
            return !("navigate" !== e.mode || t.pathname.match(eo)) && !!("localhost" === self.location.hostname || "[::1]" === self.location.hostname || self.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/) || self.location.hostname.endsWith(".vercel.app") || function({
                hostname: e
            }) {
                return "app.uniswap-staging.org" === e
            }(t) || function({
                hostname: e
            }) {
                return "app.uniswap.org" === e
            }(t))
        }
        async function eh({
            request: e
        }) {
            let t;
            if ("onLine" in navigator && !navigator.onLine) return this ? .offlineDocument ? .clone() || fetch(e);
            let a = U().getCacheKeyForURL(ec),
                s = await U().matchPrecache(ec),
                r = new AbortController;
            try {
                if (t = await fetch(a || ec, {
                        cache: "reload",
                        signal: r.signal
                    }), !s) return new Response(t.body, t)
            } catch (e) {
                if (!s) throw e;
                return eu.from(s)
            }
            let i = t ? .headers.get("etag"),
                n = s ? .headers.get("etag");
            return i && i === n ? (r.abort(), eu.from(s)) : new Response(t.body, t)
        }
        class eu extends Response {
            static async from(e) {
                let t = await e.text(),
                    a = new Headers(e.headers);
                a.set("Content-Type", "text/html; charset=utf-8");
                let s = { ...e,
                    headers: a
                };
                return new eu(t.replace("<body>", "<body><script>window.__isDocumentCached=true</script>"), s)
            }
            constructor(e, t) {
                super(e, t)
            }
        }
        self.addEventListener("activate", () => self.clients.claim()), self.skipWaiting(), A(new class extends I {
            constructor(e) {
                super(el, eh.bind({
                    offlineDocument: e
                }), "GET")
            }
        });
        let {
            onDemandEntries: ed,
            precacheEntries: ef
        } = [{
            'revision': 'a6fe491b1d7913f8d244f3f6008fe545',
            'url': '/index.html'
        }, {
            'revision': null,
            'url': '/static/css/569.06f2a779.css'
        }, {
            'revision': null,
            'url': '/static/css/main.a7e20881.css'
        }, {
            'revision': null,
            'url': '/static/js/10.20ebfbf7.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/120.28ede630.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/15.82e9e0a8.js'
        }, {
            'revision': null,
            'url': '/static/js/152.87938b43.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/17.5a60a1cf.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/183.0a5fadf0.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/300.9203ad28.js'
        }, {
            'revision': null,
            'url': '/static/js/333.2f12b95f.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/349.dad5c199.js'
        }, {
            'revision': null,
            'url': '/static/js/379.409b2f92.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/384.f6906e96.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/421.020094f3.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/444.9275a0e3.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/46.196f494f.js'
        }, {
            'revision': null,
            'url': '/static/js/477.99caf94f.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/488.9235567a.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/489.b4c7f3ee.js'
        }, {
            'revision': null,
            'url': '/static/js/492.d016617c.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/519.b0956f30.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/533.d84e4268.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/549.db93618c.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/555.8549475d.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/567.0b0b1234.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/585.9a6e78e0.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/595.39e8c4dd.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/606.574bf5d1.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/658.ec54506a.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/666.4b6b7797.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/668.0202fe7a.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/693.7862b5b1.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/696.36721213.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/699.c172bb7b.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/729.72407a37.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/733.67ef61da.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/740.ec1d6e5e.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/744.63714413.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/75.a3b8b212.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/769.2c7002d6.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/78.50e5bb17.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/791.9df71e5c.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/804.8ede53c8.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/840.b8a4e0e0.js'
        }, {
            'revision': null,
            'url': '/static/js/881.c45ab432.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/887.f3c7b3e7.js'
        }, {
            'revision': null,
            'url': '/static/js/965.3939af3d.chunk.js'
        }, {
            'revision': null,
            'url': '/static/js/978.f9c87a06.js'
        }, {
            'revision': null,
            'url': '/static/js/main.0918c446.js'
        }, {
            'revision': 'f54a957f36afd8ea11ade5b817ab3f66',
            'url': '/static/media/1.645267661646795606ae3bd2d0fece52.svg'
        }, {
            'revision': 'c923a7709c725202820ffc68ea1df34b',
            'url': '/static/media/2.e6a27fe5970c944aa3f308e6e88fc0f2.svg'
        }, {
            'revision': '20e690c034aee4cd1a6a0423af0511ba',
            'url': '/static/media/3.5b1e504e4e386f990f36c2e0996d14b5.svg'
        }, {
            'revision': '8f46095646e83fcde5e318b0a4c1d54b',
            'url': '/static/media/4.f101aa54e42b33d40c6721e048aec1c0.svg'
        }, {
            'revision': null,
            'url': '/static/media/404-page-dark.f24684e761633ae99402.png'
        }, {
            'revision': null,
            'url': '/static/media/404-page-light.c448d3fd36de14609aba.png'
        }, {
            'revision': null,
            'url': '/static/media/Inter-Black.15ca31c0a2a68f76d2d1.woff2'
        }, {
            'revision': null,
            'url': '/static/media/Inter-Black.c6938660eec019fefd68.woff'
        }, {
            'revision': null,
            'url': '/static/media/Inter-BlackItalic.ca1e738e4f349f27514d.woff'
        }, {
            'revision': null,
            'url': '/static/media/Inter-BlackItalic.cb2a7335650c690077fe.woff2'
        }, {
            'revision': null,
            'url': '/static/media/Inter-Bold.93c1301bd9f486c573b3.woff'
        }, {
            'revision': null,
            'url': '/static/media/Inter-Bold.ec64ea577b0349e055ad.woff2'
        }, {
            'revision': null,
            'url': '/static/media/Inter-BoldItalic.2d26c56a606662486796.woff2'
        }, {
            'revision': null,
            'url': '/static/media/Inter-BoldItalic.b376885042f6c961a541.woff'
        }, {
            'revision': null,
            'url': '/static/media/Inter-ExtraBold.cbe0ae49c52c920fd563.woff2'
        }, {
            'revision': null,
            'url': '/static/media/Inter-ExtraBold.d0fa3bb2b7c9063dc594.woff'
        }, {
            'revision': null,
            'url': '/static/media/Inter-ExtraBoldItalic.535a6cf662596b3bd6a6.woff2'
        }, {
            'revision': null,
            'url': '/static/media/Inter-ExtraBoldItalic.6ab17abedc4d3f140953.woff'
        }, {
            'revision': null,
            'url': '/static/media/Inter-ExtraLight.72505e6a122c6acd5471.woff2'
        }, {
            'revision': null,
            'url': '/static/media/Inter-ExtraLight.c4248615291a9e8f1fb7.woff'
        }, {
            'revision': null,
            'url': '/static/media/Inter-ExtraLightItalic.170dddfca278d3c2ad4a.woff'
        }, {
            'revision': null,
            'url': '/static/media/Inter-ExtraLightItalic.5c7d7d6deb1d2ec8d48c.woff2'
        }, {
            'revision': null,
            'url': '/static/media/Inter-Italic.890025e726861dba417f.woff'
        }, {
            'revision': null,
            'url': '/static/media/Inter-Italic.cb10ffd7684cd9836a05.woff2'
        }, {
            'revision': null,
            'url': '/static/media/Inter-Light.2d5198822ab091ce4305.woff2'
        }, {
            'revision': null,
            'url': '/static/media/Inter-Light.994e34451cc19ede31d3.woff'
        }, {
            'revision': null,
            'url': '/static/media/Inter-LightItalic.ef9f65d91d2b0ba9b2e4.woff'
        }, {
            'revision': null,
            'url': '/static/media/Inter-LightItalic.f86952265d7b0f02c921.woff2'
        }, {
            'revision': null,
            'url': '/static/media/Inter-Medium.293fd13dbca5a3e450ef.woff2'
        }, {
            'revision': null,
            'url': '/static/media/Inter-Medium.9053572c46aeb4b16caa.woff'
        }, {
            'revision': null,
            'url': '/static/media/Inter-MediumItalic.085cb93e613ba3d40d2b.woff2'
        }, {
            'revision': null,
            'url': '/static/media/Inter-MediumItalic.3d0107dd43d0101274d3.woff'
        }, {
            'revision': null,
            'url': '/static/media/Inter-Regular.8c206db99195777c6769.woff'
        }, {
            'revision': null,
            'url': '/static/media/Inter-Regular.c8ba52b05a9ef10f4758.woff2'
        }, {
            'revision': null,
            'url': '/static/media/Inter-SemiBold.b5f0f109bc88052d4000.woff2'
        }, {
            'revision': null,
            'url': '/static/media/Inter-SemiBold.cca62d21c8c555c392e5.woff'
        }, {
            'revision': null,
            'url': '/static/media/Inter-SemiBoldItalic.463bdbfb28abad0fa6df.woff'
        }, {
            'revision': null,
            'url': '/static/media/Inter-SemiBoldItalic.d9467ee321a8f38aefff.woff2'
        }, {
            'revision': null,
            'url': '/static/media/Inter-Thin.29b9c616a95a912abf73.woff'
        }, {
            'revision': null,
            'url': '/static/media/Inter-Thin.fff2a096db014f6239d4.woff2'
        }, {
            'revision': null,
            'url': '/static/media/Inter-ThinItalic.bae95eb2f889c797e435.woff'
        }, {
            'revision': null,
            'url': '/static/media/Inter-ThinItalic.bf213704dce6b437ede4.woff2'
        }, {
            'revision': null,
            'url': '/static/media/Inter-italic.var.30807be7abc48ba8c73c.woff2'
        }, {
            'revision': null,
            'url': '/static/media/Inter-roman.var.ba4caefcdf5b36b438db.woff2'
        }, {
            'revision': null,
            'url': '/static/media/Inter.var.c2fe3cb2b7c746f7966a.woff2'
        }, {
            'revision': 'd74817d9f63e9c17e50702c14bf42566',
            'url': '/static/media/arbitrum.8e9b1f5582c6cb36ea202afb210e6d67.svg'
        }, {
            'revision': '34c09082dd514131428a86593ee3e260',
            'url': '/static/media/arbitrum_logo.17ba9b2d5b1574bd70b71505367f5130.svg'
        }, {
            'revision': '452920d07d82a7f674995b50874134d2',
            'url': '/static/media/avax.078fa91df3aed7c91b5740e9aba458be.svg'
        }, {
            'revision': 'bea17c505747126921ea37ce217d9622',
            'url': '/static/media/avax_logo.cccd7fc1b8cc3508f945300068d80ba3.svg'
        }, {
            'revision': 'fbc03c68c6663d0054f789f4311711c4',
            'url': '/static/media/avax_square_logo.4a934d828b6b42b7a4a592e85a418d2c.svg'
        }, {
            'revision': 'e9023ccd29e0f67973a4f8b7b110a640',
            'url': '/static/media/base.7e6d24bf4ce775562eaff72d903da13d.svg'
        }, {
            'revision': '68b1250192df5ef80a93c78329d6a904',
            'url': '/static/media/base_logo.592b9f3296cf185dc13a87accb29f844.svg'
        }, {
            'revision': 'acc8795c5a8a49ce3dc14de799e6ef8a',
            'url': '/static/media/base_square_logo.6b02aa3e74095827e14aa77ab3e8b203.svg'
        }, {
            'revision': null,
            'url': '/static/media/big_unicorn.595c49962d708abbaaec.png'
        }, {
            'revision': 'c9d4315664443cfbf90d12db0369c289',
            'url': '/static/media/blank_token.1870729478dcddb2cac513635621d4c9.svg'
        }, {
            'revision': '39836d72d809d2b3b2cfc8fc41b9be57',
            'url': '/static/media/blast.038d639d199bef0ef641b77e7cf91c9b.svg'
        }, {
            'revision': null,
            'url': '/static/media/blastCircle.175c797edc0df1a25f73.png'
        }, {
            'revision': 'de39d9bdccc07b9aca7552e8a2db5271',
            'url': '/static/media/blast_dark.c85a0d730c7b164d225d8b99a101f04a.svg'
        }, {
            'revision': '904b44c2b22eb2d49f618396e6f2db1a',
            'url': '/static/media/blue-loader.249140daf016adc355cfb029ec67de19.svg'
        }, {
            'revision': '1aa88810b9f05826b0ce034c0799f7e6',
            'url': '/static/media/bnb-logo.797868eb94521320b78e3967134febbe.svg'
        }, {
            'revision': '5e425406a78f5c0ac2d9dc6657ac017c',
            'url': '/static/media/bnb.e6b5dbb55094fe29b2ee5dd34be41508.svg'
        }, {
            'revision': '1aa88810b9f05826b0ce034c0799f7e6',
            'url': '/static/media/bnbCircle.797868eb94521320b78e3967134febbe.svg'
        }, {
            'revision': '4723eeb5b799c004be60dcfc1342d5b0',
            'url': '/static/media/bnb_square_logo.2d1fd22f591e299d5139ab4935da17c9.svg'
        }, {
            'revision': 'a742fcfcc61e9c1bc351906deb7d08ca',
            'url': '/static/media/bolt.2f107ece38a7328ecebd282d2c3884d6.svg'
        }, {
            'revision': 'ec95aec81c093fd24af0dd3c753afbec',
            'url': '/static/media/brave-icon.91e0081d6d5d0001a27211aa0bdf8f37.svg'
        }, {
            'revision': 'd210e0119ae86ad96cc822e3e7a4839c',
            'url': '/static/media/browser-wallet-dark.257c8f5da352c06afbfad5e277146406.svg'
        }, {
            'revision': 'dc81f09336349a0e0a479fc3dd804764',
            'url': '/static/media/browser-wallet-light.a43bf67e7318b333e0664b16b816410b.svg'
        }, {
            'revision': 'cf4ac95c92500589b93cfae7cb4243b9',
            'url': '/static/media/celo.3ec5ec2a6b1bb4566400d9323049cbdc.svg'
        }, {
            'revision': '69fd9db4f5b5e2a995d12819bb9de008',
            'url': '/static/media/celo_light.8a1d66c13556279ce59a7cb25919a834.svg'
        }, {
            'revision': 'f1af089baededa225cd877aebc77917e',
            'url': '/static/media/celo_logo.e95fad7be41e27771a1729f111f11ec9.svg'
        }, {
            'revision': '1cdda4af788a326dcdd0aa3088cad534',
            'url': '/static/media/celo_square_logo.2ca4ce8b181980cb6ca8b5809319ec49.svg'
        }, {
            'revision': '801715a804509ca9b412a89abe97058d',
            'url': '/static/media/coinbase-icon.6870e62fb40f1d213198361a1b3d5521.svg'
        }, {
            'revision': '1cd7e5b722faa7e20ef7ecf948b74791',
            'url': '/static/media/contract-interaction.c6167131a8fe6fcb2ccf88699a2ef4f5.svg'
        }, {
            'revision': '3a34c42d38a1de213d41433f6265f549',
            'url': '/static/media/discord.293ffb0f8360028d0f021f1d6f413ef6.svg'
        }, {
            'revision': '1472213754ea9ab845a4407baa9d1bfc',
            'url': '/static/media/dot_line.41984deedf7551ac719792666e0f44c8.svg'
        }, {
            'revision': '7d32d2fa19d17d6ab9f0e0067bebaf96',
            'url': '/static/media/dropdown.fef18eeb100831b750bb2101c7ed956f.svg'
        }, {
            'revision': '9b3fd22cb2e726e29fcd4348907174a2',
            'url': '/static/media/ethereum.def956bb6849d9c686ce74c24da62537.svg'
        }, {
            'revision': '8dc66f6f6f62dcd1661b79ac93910a05',
            'url': '/static/media/github.3b21c250a99986431958daaa9246a45a.svg'
        }, {
            'revision': '98bb15f7996f04d245c0870dbc07ec92',
            'url': '/static/media/ledger-icon.e85018863afe4a8e0e1a19a7d24bc792.svg'
        }, {
            'revision': 'c8c3b71d7ec5367db89995bfe0518042',
            'url': '/static/media/logo.4115f048994edec457d65bab386470b4.svg'
        }, {
            'revision': 'b14bd71c969e0958e80cbd6146c72d19',
            'url': '/static/media/matic-token-icon.da7b877d41122a55de4a43760bb4c8e5.svg'
        }, {
            'revision': '801a9c289da055ef8693ba23dc23a5b2',
            'url': '/static/media/metamask-icon.c8b2298e68e585a7f4d9c7b7e6320715.svg'
        }, {
            'revision': null,
            'url': '/static/media/nftCard.ec17cbfb46691a05720c.png'
        }, {
            'revision': null,
            'url': '/static/media/noise.3c7efafc83614205bd1a.png'
        }, {
            'revision': '01b35719be4aec89a0fe53323e221c11',
            'url': '/static/media/optimism.cd72924bce33646667c409e3437d7255.svg'
        }, {
            'revision': '84f413350799732a7ac67482981a5801',
            'url': '/static/media/optimism_square_logo.ce1b534277a7091704d6d681f1d725ca.svg'
        }, {
            'revision': '15863d469e2ea202ed0f4adc542cd142',
            'url': '/static/media/optimistic_ethereum.34412af263c903b58c43a243c4a21d56.svg'
        }, {
            'revision': 'c5b5e4e65841af29e61a19ad5d0457b7',
            'url': '/static/media/papers-text.59088c60908213059fe247224711a962.svg'
        }, {
            'revision': null,
            'url': '/static/media/partner_continue.f00d69e5a19e6ca63c70.png'
        }, {
            'revision': null,
            'url': '/static/media/partner_manifold.f89383c8b8e76127e47b.png'
        }, {
            'revision': '1087d3d671ac2ca5eeea49c18e1175bf',
            'url': '/static/media/polygon-matic-logo.97ff139cc7379a42cf141d74a6595fff.svg'
        }, {
            'revision': '6edf2c80e93f0a7c208835b672be71cd',
            'url': '/static/media/polygon.339f2393b315d299ac894f14f9d48116.svg'
        }, {
            'revision': 'c78c8600d25ec955e29a13be9a9556c7',
            'url': '/static/media/polygon_square_logo.55f0df10db3483f328c55fbdd3608054.svg'
        }, {
            'revision': 'd26202ebbc39878094a2bd9f0629966d',
            'url': '/static/media/pool.3c783eb6f9c6e632170650fa64dfb13f.svg'
        }, {
            'revision': 'fc3459f5b1a52a382efd905f10e9b3af',
            'url': '/static/media/rabby-icon.529c59c12dcafffcb062cd7cdb994b3f.svg'
        }, {
            'revision': '5566a6fa9e71bd98cabe521678ffae40',
            'url': '/static/media/rocket-launch.d0cc1b4279db9d03e3d9e1060684b00e.svg'
        }, {
            'revision': '3fb7ced50fded7ae88a8cd1708178f34',
            'url': '/static/media/search.3d4b96e3a9ccded7bfd728a818c83611.svg'
        }, {
            'revision': '73a0afd86bf23a6b4a63b987c720d62d',
            'url': '/static/media/socks.e6b0bda323ae546a877a5c49b95201cb.svg'
        }, {
            'revision': null,
            'url': '/static/media/swapCard.1a0376fd97213efb0859.png'
        }, {
            'revision': 'd5ec1b70e83b4bb5c01e64cef1563414',
            'url': '/static/media/tooltip_triangle.50e53ca86366852445bb688bcffdfddb.svg'
        }, {
            'revision': '99faf049de08e5e52e7078fc82939ef8',
            'url': '/static/media/trustwallet-icon.941137891bdeaeeddd010948171cea0f.svg'
        }, {
            'revision': '1e541baa1f95175f1048604456db0220',
            'url': '/static/media/twitter-safe.55cffd589d2838bd191cfd3ed211b200.svg'
        }, {
            'revision': null,
            'url': '/static/media/uniswap-wallet-icon.12b3568891522db07d59.png'
        }, {
            'revision': 'ffda6fc09a6e1619f792fa987ad1c621',
            'url': '/static/media/uniswapx_error.cfa0e5729278c91682b88eff55afda98.svg'
        }, {
            'revision': '9fa15534c32f49de5036121568f98b4a',
            'url': '/static/media/walletconnect-icon.bd207ef6f3632304cd1b6e772271cb43.svg'
        }, {
            'revision': null,
            'url': '/static/media/xl_uni.9c9e061bed67e15ad3c8.png'
        }].reduce(({
            onDemandEntries: e,
            precacheEntries: t
        }, a) => "string" == typeof a || a.url.includes("/media/") ? {
            precacheEntries: t,
            onDemandEntries: [...e, a]
        } : a.revision ? {
            precacheEntries: [...t, a],
            onDemandEntries: e
        } : {
            precacheEntries: t,
            onDemandEntries: [...e, a]
        }, {
            onDemandEntries: [],
            precacheEntries: []
        }), ep = ed.map(e => "string" == typeof e ? e : e.url), eg = `${B.prefix}-on-demand-${B.suffix}`;
        A(new I(({
            url: e
        }) => ep.includes("." + e.pathname), new ei({
            cacheName: eg,
            plugins: [new er({
                maxEntries: 64
            })]
        }))), t = ef, U().precache(t), A(new S(U(), void 0)), self.addEventListener("activate", () => en(self.caches, {
            usedCaches: [B.precache, eg]
        }))
    })()
})();