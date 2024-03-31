"use strict";
(self.webpackChunk_few_interface = self.webpackChunk_few_interface || []).push([
    [152], {
        32798: (e, t) => {
            function a(e, t) {
                return {
                    validate: e,
                    compare: t
                }
            }
            t.u5 = void 0, t.u5 = {
                date: a(i, n),
                time: a(o, p),
                "date-time": a(function(e) {
                    let t = e.split(h);
                    return 2 === t.length && i(t[0]) && o(t[1], !0)
                }, f),
                duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
                uri: function(e) {
                    return l.test(e) && d.test(e)
                },
                "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
                "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
                url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
                email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
                ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
                ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
                regex: function(e) {
                    if (P.test(e)) return !1;
                    try {
                        return new RegExp(e), !0
                    } catch (e) {
                        return !1
                    }
                },
                uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
                "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
                "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
                "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
                byte: function(e) {
                    return u.lastIndex = 0, u.test(e)
                },
                int32: {
                    type: "number",
                    validate: function(e) {
                        return Number.isInteger(e) && e <= c && e >= y
                    }
                },
                int64: {
                    type: "number",
                    validate: function(e) {
                        return Number.isInteger(e)
                    }
                },
                float: {
                    type: "number",
                    validate: g
                },
                double: {
                    type: "number",
                    validate: g
                },
                password: !0,
                binary: !0
            }, t.u5, a(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, n), a(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, p), a(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, f), Object.keys(t.u5);
            let r = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
                s = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            function i(e) {
                var t;
                let a = r.exec(e);
                if (!a) return !1;
                let i = +a[1],
                    n = +a[2],
                    m = +a[3];
                return n >= 1 && n <= 12 && m >= 1 && m <= (2 === n && (t = i) % 4 == 0 && (t % 100 != 0 || t % 400 == 0) ? 29 : s[n])
            }

            function n(e, t) {
                if (e && t) return e > t ? 1 : e < t ? -1 : 0
            }
            let m = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;

            function o(e, t) {
                let a = m.exec(e);
                if (!a) return !1;
                let r = +a[1],
                    s = +a[2],
                    i = +a[3],
                    n = a[5];
                return (r <= 23 && s <= 59 && i <= 59 || 23 === r && 59 === s && 60 === i) && (!t || "" !== n)
            }

            function p(e, t) {
                if (!(e && t)) return;
                let a = m.exec(e),
                    r = m.exec(t);
                if (a && r) return (e = a[1] + a[2] + a[3] + (a[4] || "")) > (t = r[1] + r[2] + r[3] + (r[4] || "")) ? 1 : e < t ? -1 : 0
            }
            let h = /t|\s/i;

            function f(e, t) {
                if (!(e && t)) return;
                let [a, r] = e.split(h), [s, i] = t.split(h), m = n(a, s);
                if (void 0 !== m) return m || p(r, i)
            }
            let l = /\/|:/,
                d = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
                u = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm,
                y = -2147483648,
                c = 2147483648 - 1;

            function g() {
                return !0
            }
            let P = /[^\\]\\Z/
        },
        61432: (e, t) => {
            function a(e) {
                let t;
                let a = e.length,
                    r = 0,
                    s = 0;
                for (; s < a;) r++, (t = e.charCodeAt(s++)) >= 55296 && t <= 56319 && s < a && (64512 & (t = e.charCodeAt(s))) == 56320 && s++;
                return r
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = a, a.code = 'require("ajv/dist/runtime/ucs2length").default'
        },
        70152: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => s,
                validate: () => r
            });
            let r = k,
                s = k,
                i = a(61432).default,
                n = RegExp("^[\\w ]+$", "u"),
                m = RegExp("^[\\w]+$", "u"),
                o = RegExp("^[ \\w]+$", "u"),
                p = RegExp("^[ \\w\\.,:]+$", "u"),
                h = a(32798).u5["date-time"],
                f = a(32798).u5.uri,
                l = RegExp("^0x[a-fA-F0-9]{40}$", "u"),
                d = RegExp("^[ \\S+]+$", "u"),
                u = RegExp("^\\S+$", "u");

            function y(e, {
                instancePath: t = "",
                parentData: a,
                parentDataProperty: r,
                rootData: s = e
            } = {}) {
                let n = null,
                    m = 0,
                    o = !1,
                    p = !1;
                if ("string" == typeof e) {
                    if (i(e) > 42) {
                        let e = {
                            instancePath: t,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
                            keyword: "maxLength",
                            params: {
                                limit: 42
                            },
                            message: "must NOT have more than 42 characters"
                        };
                        null === n ? n = [e] : n.push(e), m++
                    } else if (1 > i(e)) {
                        let e = {
                            instancePath: t,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
                            keyword: "minLength",
                            params: {
                                limit: 1
                            },
                            message: "must NOT have fewer than 1 characters"
                        };
                        null === n ? n = [e] : n.push(e), m++
                    }
                } else {
                    let e = {
                        instancePath: t,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
                        keyword: "type",
                        params: {
                            type: "string"
                        },
                        message: "must be string"
                    };
                    null === n ? n = [e] : n.push(e), m++
                }
                var h = 0 === m;
                if (!(p = p || h)) {
                    let a = m;
                    if ("boolean" != typeof e) {
                        let e = {
                            instancePath: t,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
                            keyword: "type",
                            params: {
                                type: "boolean"
                            },
                            message: "must be boolean"
                        };
                        null === n ? n = [e] : n.push(e), m++
                    }
                    var h = a === m;
                    if (!(p = p || h)) {
                        let a = m;
                        if (!("number" == typeof e && isFinite(e))) {
                            let e = {
                                instancePath: t,
                                schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
                                keyword: "type",
                                params: {
                                    type: "number"
                                },
                                message: "must be number"
                            };
                            null === n ? n = [e] : n.push(e), m++
                        }
                        var h = a === m;
                        if (!(p = p || h)) {
                            let a = m;
                            if (null !== e) {
                                let e = {
                                    instancePath: t,
                                    schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
                                    keyword: "type",
                                    params: {
                                        type: "null"
                                    },
                                    message: "must be null"
                                };
                                null === n ? n = [e] : n.push(e), m++
                            }
                            var h = a === m;
                            p = p || h
                        }
                    }
                }
                if (p) m = 0, null !== n && (n = null);
                else {
                    let e = {
                        instancePath: t,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    null === n ? n = [e] : n.push(e), m++
                }
                var f = 0 === m;
                if (o = o || f) m = 0, null !== n && (n = null);
                else {
                    let e = {
                        instancePath: t,
                        schemaPath: "#/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    return null === n ? n = [e] : n.push(e), m++, y.errors = n, !1
                }
                return y.errors = n, 0 === m
            }

            function c(e, {
                instancePath: t = "",
                parentData: a,
                parentDataProperty: r,
                rootData: s = e
            } = {}) {
                let n = null,
                    o = 0,
                    p = !1,
                    h = !1;
                if ("string" == typeof e) {
                    if (i(e) > 42) {
                        let e = {
                            instancePath: t,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
                            keyword: "maxLength",
                            params: {
                                limit: 42
                            },
                            message: "must NOT have more than 42 characters"
                        };
                        null === n ? n = [e] : n.push(e), o++
                    } else if (1 > i(e)) {
                        let e = {
                            instancePath: t,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
                            keyword: "minLength",
                            params: {
                                limit: 1
                            },
                            message: "must NOT have fewer than 1 characters"
                        };
                        null === n ? n = [e] : n.push(e), o++
                    }
                } else {
                    let e = {
                        instancePath: t,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
                        keyword: "type",
                        params: {
                            type: "string"
                        },
                        message: "must be string"
                    };
                    null === n ? n = [e] : n.push(e), o++
                }
                var f = 0 === o;
                if (!(h = h || f)) {
                    let a = o;
                    if ("boolean" != typeof e) {
                        let e = {
                            instancePath: t,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
                            keyword: "type",
                            params: {
                                type: "boolean"
                            },
                            message: "must be boolean"
                        };
                        null === n ? n = [e] : n.push(e), o++
                    }
                    var f = a === o;
                    if (!(h = h || f)) {
                        let a = o;
                        if (!("number" == typeof e && isFinite(e))) {
                            let e = {
                                instancePath: t,
                                schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
                                keyword: "type",
                                params: {
                                    type: "number"
                                },
                                message: "must be number"
                            };
                            null === n ? n = [e] : n.push(e), o++
                        }
                        var f = a === o;
                        if (!(h = h || f)) {
                            let a = o;
                            if (null !== e) {
                                let e = {
                                    instancePath: t,
                                    schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
                                    keyword: "type",
                                    params: {
                                        type: "null"
                                    },
                                    message: "must be null"
                                };
                                null === n ? n = [e] : n.push(e), o++
                            }
                            var f = a === o;
                            h = h || f
                        }
                    }
                }
                if (h) o = 0, null !== n && (n = null);
                else {
                    let e = {
                        instancePath: t,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    null === n ? n = [e] : n.push(e), o++
                }
                var l = 0 === o;
                if (!(p = p || l)) {
                    let a = o;
                    if (o === a) {
                        if (e && "object" == typeof e && !Array.isArray(e)) {
                            if (Object.keys(e).length > 10) {
                                let e = {
                                    instancePath: t,
                                    schemaPath: "#/anyOf/1/maxProperties",
                                    keyword: "maxProperties",
                                    params: {
                                        limit: 10
                                    },
                                    message: "must NOT have more than 10 properties"
                                };
                                null === n ? n = [e] : n.push(e), o++
                            } else {
                                for (let a in e) {
                                    let e = o,
                                        r = o;
                                    if (o === r) {
                                        if ("string" == typeof a) {
                                            if (i(a) > 40) {
                                                let e = {
                                                    instancePath: t,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                                                    keyword: "maxLength",
                                                    params: {
                                                        limit: 40
                                                    },
                                                    message: "must NOT have more than 40 characters",
                                                    propertyName: a
                                                };
                                                null === n ? n = [e] : n.push(e), o++
                                            } else if (1 > i(a)) {
                                                let e = {
                                                    instancePath: t,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                                                    keyword: "minLength",
                                                    params: {
                                                        limit: 1
                                                    },
                                                    message: "must NOT have fewer than 1 characters",
                                                    propertyName: a
                                                };
                                                null === n ? n = [e] : n.push(e), o++
                                            } else if (!m.test(a)) {
                                                let e = {
                                                    instancePath: t,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                                                    keyword: "pattern",
                                                    params: {
                                                        pattern: "^[\\w]+$"
                                                    },
                                                    message: 'must match pattern "^[\\w]+$"',
                                                    propertyName: a
                                                };
                                                null === n ? n = [e] : n.push(e), o++
                                            }
                                        } else {
                                            let e = {
                                                instancePath: t,
                                                schemaPath: "#/definitions/ExtensionIdentifier/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string",
                                                propertyName: a
                                            };
                                            null === n ? n = [e] : n.push(e), o++
                                        }
                                    }
                                    var d = e === o;
                                    if (!d) {
                                        let e = {
                                            instancePath: t,
                                            schemaPath: "#/anyOf/1/propertyNames",
                                            keyword: "propertyNames",
                                            params: {
                                                propertyName: a
                                            },
                                            message: "property name must be valid"
                                        };
                                        null === n ? n = [e] : n.push(e), o++;
                                        break
                                    }
                                }
                                if (d)
                                    for (let a in e) {
                                        let r = o;
                                        if (y(e[a], {
                                                instancePath: t + "/" + a.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                parentData: e,
                                                parentDataProperty: a,
                                                rootData: s
                                            }) || (o = (n = null === n ? y.errors : n.concat(y.errors)).length), r !== o) break
                                    }
                            }
                        } else {
                            let e = {
                                instancePath: t,
                                schemaPath: "#/anyOf/1/type",
                                keyword: "type",
                                params: {
                                    type: "object"
                                },
                                message: "must be object"
                            };
                            null === n ? n = [e] : n.push(e), o++
                        }
                    }
                    var l = a === o;
                    p = p || l
                }
                if (p) o = 0, null !== n && (n = null);
                else {
                    let e = {
                        instancePath: t,
                        schemaPath: "#/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    return null === n ? n = [e] : n.push(e), o++, c.errors = n, !1
                }
                return c.errors = n, 0 === o
            }

            function g(e, {
                instancePath: t = "",
                parentData: a,
                parentDataProperty: r,
                rootData: s = e
            } = {}) {
                let n = null,
                    o = 0,
                    p = !1,
                    h = !1;
                if ("string" == typeof e) {
                    if (i(e) > 42) {
                        let e = {
                            instancePath: t,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
                            keyword: "maxLength",
                            params: {
                                limit: 42
                            },
                            message: "must NOT have more than 42 characters"
                        };
                        null === n ? n = [e] : n.push(e), o++
                    } else if (1 > i(e)) {
                        let e = {
                            instancePath: t,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
                            keyword: "minLength",
                            params: {
                                limit: 1
                            },
                            message: "must NOT have fewer than 1 characters"
                        };
                        null === n ? n = [e] : n.push(e), o++
                    }
                } else {
                    let e = {
                        instancePath: t,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
                        keyword: "type",
                        params: {
                            type: "string"
                        },
                        message: "must be string"
                    };
                    null === n ? n = [e] : n.push(e), o++
                }
                var f = 0 === o;
                if (!(h = h || f)) {
                    let a = o;
                    if ("boolean" != typeof e) {
                        let e = {
                            instancePath: t,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
                            keyword: "type",
                            params: {
                                type: "boolean"
                            },
                            message: "must be boolean"
                        };
                        null === n ? n = [e] : n.push(e), o++
                    }
                    var f = a === o;
                    if (!(h = h || f)) {
                        let a = o;
                        if (!("number" == typeof e && isFinite(e))) {
                            let e = {
                                instancePath: t,
                                schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
                                keyword: "type",
                                params: {
                                    type: "number"
                                },
                                message: "must be number"
                            };
                            null === n ? n = [e] : n.push(e), o++
                        }
                        var f = a === o;
                        if (!(h = h || f)) {
                            let a = o;
                            if (null !== e) {
                                let e = {
                                    instancePath: t,
                                    schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
                                    keyword: "type",
                                    params: {
                                        type: "null"
                                    },
                                    message: "must be null"
                                };
                                null === n ? n = [e] : n.push(e), o++
                            }
                            var f = a === o;
                            h = h || f
                        }
                    }
                }
                if (h) o = 0, null !== n && (n = null);
                else {
                    let e = {
                        instancePath: t,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    null === n ? n = [e] : n.push(e), o++
                }
                var l = 0 === o;
                if (!(p = p || l)) {
                    let a = o;
                    if (o === a) {
                        if (e && "object" == typeof e && !Array.isArray(e)) {
                            if (Object.keys(e).length > 10) {
                                let e = {
                                    instancePath: t,
                                    schemaPath: "#/anyOf/1/maxProperties",
                                    keyword: "maxProperties",
                                    params: {
                                        limit: 10
                                    },
                                    message: "must NOT have more than 10 properties"
                                };
                                null === n ? n = [e] : n.push(e), o++
                            } else {
                                for (let a in e) {
                                    let e = o,
                                        r = o;
                                    if (o === r) {
                                        if ("string" == typeof a) {
                                            if (i(a) > 40) {
                                                let e = {
                                                    instancePath: t,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                                                    keyword: "maxLength",
                                                    params: {
                                                        limit: 40
                                                    },
                                                    message: "must NOT have more than 40 characters",
                                                    propertyName: a
                                                };
                                                null === n ? n = [e] : n.push(e), o++
                                            } else if (1 > i(a)) {
                                                let e = {
                                                    instancePath: t,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                                                    keyword: "minLength",
                                                    params: {
                                                        limit: 1
                                                    },
                                                    message: "must NOT have fewer than 1 characters",
                                                    propertyName: a
                                                };
                                                null === n ? n = [e] : n.push(e), o++
                                            } else if (!m.test(a)) {
                                                let e = {
                                                    instancePath: t,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                                                    keyword: "pattern",
                                                    params: {
                                                        pattern: "^[\\w]+$"
                                                    },
                                                    message: 'must match pattern "^[\\w]+$"',
                                                    propertyName: a
                                                };
                                                null === n ? n = [e] : n.push(e), o++
                                            }
                                        } else {
                                            let e = {
                                                instancePath: t,
                                                schemaPath: "#/definitions/ExtensionIdentifier/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string",
                                                propertyName: a
                                            };
                                            null === n ? n = [e] : n.push(e), o++
                                        }
                                    }
                                    var d = e === o;
                                    if (!d) {
                                        let e = {
                                            instancePath: t,
                                            schemaPath: "#/anyOf/1/propertyNames",
                                            keyword: "propertyNames",
                                            params: {
                                                propertyName: a
                                            },
                                            message: "property name must be valid"
                                        };
                                        null === n ? n = [e] : n.push(e), o++;
                                        break
                                    }
                                }
                                if (d)
                                    for (let a in e) {
                                        let r = o;
                                        if (c(e[a], {
                                                instancePath: t + "/" + a.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                parentData: e,
                                                parentDataProperty: a,
                                                rootData: s
                                            }) || (o = (n = null === n ? c.errors : n.concat(c.errors)).length), r !== o) break
                                    }
                            }
                        } else {
                            let e = {
                                instancePath: t,
                                schemaPath: "#/anyOf/1/type",
                                keyword: "type",
                                params: {
                                    type: "object"
                                },
                                message: "must be object"
                            };
                            null === n ? n = [e] : n.push(e), o++
                        }
                    }
                    var l = a === o;
                    p = p || l
                }
                if (p) o = 0, null !== n && (n = null);
                else {
                    let e = {
                        instancePath: t,
                        schemaPath: "#/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    return null === n ? n = [e] : n.push(e), o++, g.errors = n, !1
                }
                return g.errors = n, 0 === o
            }

            function P(e, {
                instancePath: t = "",
                parentData: a,
                parentDataProperty: r,
                rootData: s = e
            } = {}) {
                let n = null,
                    o = 0;
                if (!e || "object" != typeof e || Array.isArray(e)) return P.errors = [{
                    instancePath: t,
                    schemaPath: "#/type",
                    keyword: "type",
                    params: {
                        type: "object"
                    },
                    message: "must be object"
                }], !1;
                if (Object.keys(e).length > 10) return P.errors = [{
                    instancePath: t,
                    schemaPath: "#/maxProperties",
                    keyword: "maxProperties",
                    params: {
                        limit: 10
                    },
                    message: "must NOT have more than 10 properties"
                }], !1;
                for (let a in e) {
                    let e = o,
                        r = o;
                    if (o === r) {
                        if ("string" == typeof a) {
                            if (i(a) > 40) {
                                let e = {
                                    instancePath: t,
                                    schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                                    keyword: "maxLength",
                                    params: {
                                        limit: 40
                                    },
                                    message: "must NOT have more than 40 characters",
                                    propertyName: a
                                };
                                null === n ? n = [e] : n.push(e), o++
                            } else if (1 > i(a)) {
                                let e = {
                                    instancePath: t,
                                    schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                                    keyword: "minLength",
                                    params: {
                                        limit: 1
                                    },
                                    message: "must NOT have fewer than 1 characters",
                                    propertyName: a
                                };
                                null === n ? n = [e] : n.push(e), o++
                            } else if (!m.test(a)) {
                                let e = {
                                    instancePath: t,
                                    schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                                    keyword: "pattern",
                                    params: {
                                        pattern: "^[\\w]+$"
                                    },
                                    message: 'must match pattern "^[\\w]+$"',
                                    propertyName: a
                                };
                                null === n ? n = [e] : n.push(e), o++
                            }
                        } else {
                            let e = {
                                instancePath: t,
                                schemaPath: "#/definitions/ExtensionIdentifier/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string",
                                propertyName: a
                            };
                            null === n ? n = [e] : n.push(e), o++
                        }
                    }
                    var p = e === o;
                    if (!p) {
                        let e = {
                            instancePath: t,
                            schemaPath: "#/propertyNames",
                            keyword: "propertyNames",
                            params: {
                                propertyName: a
                            },
                            message: "property name must be valid"
                        };
                        return null === n ? n = [e] : n.push(e), o++, P.errors = n, !1
                    }
                }
                if (p)
                    for (let a in e) {
                        let r = o;
                        if (g(e[a], {
                                instancePath: t + "/" + a.replace(/~/g, "~0").replace(/\//g, "~1"),
                                parentData: e,
                                parentDataProperty: a,
                                rootData: s
                            }) || (o = (n = null === n ? g.errors : n.concat(g.errors)).length), r !== o) break
                    }
                return P.errors = n, 0 === o
            }

            function v(e, {
                instancePath: t = "",
                parentData: a,
                parentDataProperty: r,
                rootData: s = e
            } = {}) {
                let n = null,
                    o = 0;
                if (!e || "object" != typeof e || Array.isArray(e)) return v.errors = [{
                    instancePath: t,
                    schemaPath: "#/type",
                    keyword: "type",
                    params: {
                        type: "object"
                    },
                    message: "must be object"
                }], !1; {
                    let a;
                    if (void 0 === e.chainId && (a = "chainId") || void 0 === e.address && (a = "address") || void 0 === e.decimals && (a = "decimals") || void 0 === e.name && (a = "name") || void 0 === e.symbol && (a = "symbol")) return v.errors = [{
                        instancePath: t,
                        schemaPath: "#/required",
                        keyword: "required",
                        params: {
                            missingProperty: a
                        },
                        message: "must have required property '" + a + "'"
                    }], !1; {
                        let a = o;
                        for (let a in e)
                            if (!("chainId" === a || "address" === a || "decimals" === a || "name" === a || "symbol" === a || "logoURI" === a || "tags" === a || "extensions" === a)) return v.errors = [{
                                instancePath: t,
                                schemaPath: "#/additionalProperties",
                                keyword: "additionalProperties",
                                params: {
                                    additionalProperty: a
                                },
                                message: "must NOT have additional properties"
                            }], !1;
                        if (a === o) {
                            if (void 0 !== e.chainId) {
                                let a = e.chainId,
                                    r = o;
                                if (!("number" == typeof a && !(a % 1) && !isNaN(a) && isFinite(a))) return v.errors = [{
                                    instancePath: t + "/chainId",
                                    schemaPath: "#/properties/chainId/type",
                                    keyword: "type",
                                    params: {
                                        type: "integer"
                                    },
                                    message: "must be integer"
                                }], !1;
                                if (o === r && "number" == typeof a && isFinite(a) && (a < 1 || isNaN(a))) return v.errors = [{
                                    instancePath: t + "/chainId",
                                    schemaPath: "#/properties/chainId/minimum",
                                    keyword: "minimum",
                                    params: {
                                        comparison: ">=",
                                        limit: 1
                                    },
                                    message: "must be >= 1"
                                }], !1;
                                var p = r === o
                            } else var p = !0;
                            if (p) {
                                if (void 0 !== e.address) {
                                    let a = e.address,
                                        r = o;
                                    if (o === r) {
                                        if ("string" != typeof a) return v.errors = [{
                                            instancePath: t + "/address",
                                            schemaPath: "#/properties/address/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        if (!l.test(a)) return v.errors = [{
                                            instancePath: t + "/address",
                                            schemaPath: "#/properties/address/pattern",
                                            keyword: "pattern",
                                            params: {
                                                pattern: "^0x[a-fA-F0-9]{40}$"
                                            },
                                            message: 'must match pattern "^0x[a-fA-F0-9]{40}$"'
                                        }], !1
                                    }
                                    var p = r === o
                                } else var p = !0;
                                if (p) {
                                    if (void 0 !== e.decimals) {
                                        let a = e.decimals,
                                            r = o;
                                        if (!("number" == typeof a && !(a % 1) && !isNaN(a) && isFinite(a))) return v.errors = [{
                                            instancePath: t + "/decimals",
                                            schemaPath: "#/properties/decimals/type",
                                            keyword: "type",
                                            params: {
                                                type: "integer"
                                            },
                                            message: "must be integer"
                                        }], !1;
                                        if (o === r && "number" == typeof a && isFinite(a)) {
                                            if (a > 255 || isNaN(a)) return v.errors = [{
                                                instancePath: t + "/decimals",
                                                schemaPath: "#/properties/decimals/maximum",
                                                keyword: "maximum",
                                                params: {
                                                    comparison: "<=",
                                                    limit: 255
                                                },
                                                message: "must be <= 255"
                                            }], !1;
                                            if (a < 0 || isNaN(a)) return v.errors = [{
                                                instancePath: t + "/decimals",
                                                schemaPath: "#/properties/decimals/minimum",
                                                keyword: "minimum",
                                                params: {
                                                    comparison: ">=",
                                                    limit: 0
                                                },
                                                message: "must be >= 0"
                                            }], !1
                                        }
                                        var p = r === o
                                    } else var p = !0;
                                    if (p) {
                                        if (void 0 !== e.name) {
                                            let a = e.name,
                                                r = o,
                                                s = o,
                                                m = !1,
                                                f = o;
                                            if ("" !== a) {
                                                let e = {
                                                    instancePath: t + "/name",
                                                    schemaPath: "#/properties/name/anyOf/0/const",
                                                    keyword: "const",
                                                    params: {
                                                        allowedValue: ""
                                                    },
                                                    message: "must be equal to constant"
                                                };
                                                null === n ? n = [e] : n.push(e), o++
                                            }
                                            var h = f === o;
                                            if (!(m = m || h)) {
                                                let e = o;
                                                if ("string" == typeof a && !d.test(a)) {
                                                    let e = {
                                                        instancePath: t + "/name",
                                                        schemaPath: "#/properties/name/anyOf/1/pattern",
                                                        keyword: "pattern",
                                                        params: {
                                                            pattern: "^[ \\S+]+$"
                                                        },
                                                        message: 'must match pattern "^[ \\S+]+$"'
                                                    };
                                                    null === n ? n = [e] : n.push(e), o++
                                                }
                                                var h = e === o;
                                                m = m || h
                                            }
                                            if (m) o = s, null !== n && (s ? n.length = s : n = null);
                                            else {
                                                let e = {
                                                    instancePath: t + "/name",
                                                    schemaPath: "#/properties/name/anyOf",
                                                    keyword: "anyOf",
                                                    params: {},
                                                    message: "must match a schema in anyOf"
                                                };
                                                return null === n ? n = [e] : n.push(e), o++, v.errors = n, !1
                                            }
                                            if (o === r) {
                                                if ("string" != typeof a) return v.errors = [{
                                                    instancePath: t + "/name",
                                                    schemaPath: "#/properties/name/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "must be string"
                                                }], !1;
                                                if (i(a) > 40) return v.errors = [{
                                                    instancePath: t + "/name",
                                                    schemaPath: "#/properties/name/maxLength",
                                                    keyword: "maxLength",
                                                    params: {
                                                        limit: 40
                                                    },
                                                    message: "must NOT have more than 40 characters"
                                                }], !1;
                                                if (0 > i(a)) return v.errors = [{
                                                    instancePath: t + "/name",
                                                    schemaPath: "#/properties/name/minLength",
                                                    keyword: "minLength",
                                                    params: {
                                                        limit: 0
                                                    },
                                                    message: "must NOT have fewer than 0 characters"
                                                }], !1
                                            }
                                            var p = r === o
                                        } else var p = !0;
                                        if (p) {
                                            if (void 0 !== e.symbol) {
                                                let a = e.symbol,
                                                    r = o,
                                                    s = o,
                                                    m = !1,
                                                    h = o;
                                                if ("" !== a) {
                                                    let e = {
                                                        instancePath: t + "/symbol",
                                                        schemaPath: "#/properties/symbol/anyOf/0/const",
                                                        keyword: "const",
                                                        params: {
                                                            allowedValue: ""
                                                        },
                                                        message: "must be equal to constant"
                                                    };
                                                    null === n ? n = [e] : n.push(e), o++
                                                }
                                                var y = h === o;
                                                if (!(m = m || y)) {
                                                    let e = o;
                                                    if ("string" == typeof a && !u.test(a)) {
                                                        let e = {
                                                            instancePath: t + "/symbol",
                                                            schemaPath: "#/properties/symbol/anyOf/1/pattern",
                                                            keyword: "pattern",
                                                            params: {
                                                                pattern: "^\\S+$"
                                                            },
                                                            message: 'must match pattern "^\\S+$"'
                                                        };
                                                        null === n ? n = [e] : n.push(e), o++
                                                    }
                                                    var y = e === o;
                                                    m = m || y
                                                }
                                                if (m) o = s, null !== n && (s ? n.length = s : n = null);
                                                else {
                                                    let e = {
                                                        instancePath: t + "/symbol",
                                                        schemaPath: "#/properties/symbol/anyOf",
                                                        keyword: "anyOf",
                                                        params: {},
                                                        message: "must match a schema in anyOf"
                                                    };
                                                    return null === n ? n = [e] : n.push(e), o++, v.errors = n, !1
                                                }
                                                if (o === r) {
                                                    if ("string" != typeof a) return v.errors = [{
                                                        instancePath: t + "/symbol",
                                                        schemaPath: "#/properties/symbol/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "must be string"
                                                    }], !1;
                                                    if (i(a) > 20) return v.errors = [{
                                                        instancePath: t + "/symbol",
                                                        schemaPath: "#/properties/symbol/maxLength",
                                                        keyword: "maxLength",
                                                        params: {
                                                            limit: 20
                                                        },
                                                        message: "must NOT have more than 20 characters"
                                                    }], !1;
                                                    if (0 > i(a)) return v.errors = [{
                                                        instancePath: t + "/symbol",
                                                        schemaPath: "#/properties/symbol/minLength",
                                                        keyword: "minLength",
                                                        params: {
                                                            limit: 0
                                                        },
                                                        message: "must NOT have fewer than 0 characters"
                                                    }], !1
                                                }
                                                var p = r === o
                                            } else var p = !0;
                                            if (p) {
                                                if (void 0 !== e.logoURI) {
                                                    let a = e.logoURI,
                                                        r = o;
                                                    if (o === r && o === r) {
                                                        if ("string" != typeof a) return v.errors = [{
                                                            instancePath: t + "/logoURI",
                                                            schemaPath: "#/properties/logoURI/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "string"
                                                            },
                                                            message: "must be string"
                                                        }], !1;
                                                        if (!f(a)) return v.errors = [{
                                                            instancePath: t + "/logoURI",
                                                            schemaPath: "#/properties/logoURI/format",
                                                            keyword: "format",
                                                            params: {
                                                                format: "uri"
                                                            },
                                                            message: 'must match format "uri"'
                                                        }], !1
                                                    }
                                                    var p = r === o
                                                } else var p = !0;
                                                if (p) {
                                                    if (void 0 !== e.tags) {
                                                        let a = e.tags,
                                                            r = o;
                                                        if (o === r) {
                                                            if (!Array.isArray(a)) return v.errors = [{
                                                                instancePath: t + "/tags",
                                                                schemaPath: "#/properties/tags/type",
                                                                keyword: "type",
                                                                params: {
                                                                    type: "array"
                                                                },
                                                                message: "must be array"
                                                            }], !1;
                                                            if (a.length > 10) return v.errors = [{
                                                                instancePath: t + "/tags",
                                                                schemaPath: "#/properties/tags/maxItems",
                                                                keyword: "maxItems",
                                                                params: {
                                                                    limit: 10
                                                                },
                                                                message: "must NOT have more than 10 items"
                                                            }], !1; {
                                                                var c = !0;
                                                                let e = a.length;
                                                                for (let r = 0; r < e; r++) {
                                                                    let e = a[r],
                                                                        s = o,
                                                                        n = o;
                                                                    if (o === n) {
                                                                        if ("string" != typeof e) return v.errors = [{
                                                                            instancePath: t + "/tags/" + r,
                                                                            schemaPath: "#/definitions/TagIdentifier/type",
                                                                            keyword: "type",
                                                                            params: {
                                                                                type: "string"
                                                                            },
                                                                            message: "must be string"
                                                                        }], !1;
                                                                        if (i(e) > 10) return v.errors = [{
                                                                            instancePath: t + "/tags/" + r,
                                                                            schemaPath: "#/definitions/TagIdentifier/maxLength",
                                                                            keyword: "maxLength",
                                                                            params: {
                                                                                limit: 10
                                                                            },
                                                                            message: "must NOT have more than 10 characters"
                                                                        }], !1;
                                                                        if (1 > i(e)) return v.errors = [{
                                                                            instancePath: t + "/tags/" + r,
                                                                            schemaPath: "#/definitions/TagIdentifier/minLength",
                                                                            keyword: "minLength",
                                                                            params: {
                                                                                limit: 1
                                                                            },
                                                                            message: "must NOT have fewer than 1 characters"
                                                                        }], !1;
                                                                        if (!m.test(e)) return v.errors = [{
                                                                            instancePath: t + "/tags/" + r,
                                                                            schemaPath: "#/definitions/TagIdentifier/pattern",
                                                                            keyword: "pattern",
                                                                            params: {
                                                                                pattern: "^[\\w]+$"
                                                                            },
                                                                            message: 'must match pattern "^[\\w]+$"'
                                                                        }], !1
                                                                    }
                                                                    var c = s === o;
                                                                    if (!c) break
                                                                }
                                                            }
                                                        }
                                                        var p = r === o
                                                    } else var p = !0;
                                                    if (p) {
                                                        if (void 0 !== e.extensions) {
                                                            let a = o;
                                                            P(e.extensions, {
                                                                instancePath: t + "/extensions",
                                                                parentData: e,
                                                                parentDataProperty: "extensions",
                                                                rootData: s
                                                            }) || (o = (n = null === n ? P.errors : n.concat(P.errors)).length);
                                                            var p = a === o
                                                        } else var p = !0
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return v.errors = n, 0 === o
            }

            function k(e, {
                instancePath: t = "",
                parentData: a,
                parentDataProperty: r,
                rootData: s = e
            } = {}) {
                let l = null,
                    d = 0;
                if (!e || "object" != typeof e || Array.isArray(e)) return k.errors = [{
                    instancePath: t,
                    schemaPath: "#/type",
                    keyword: "type",
                    params: {
                        type: "object"
                    },
                    message: "must be object"
                }], !1; {
                    let a;
                    if (void 0 === e.name && (a = "name") || void 0 === e.timestamp && (a = "timestamp") || void 0 === e.version && (a = "version") || void 0 === e.tokens && (a = "tokens")) return k.errors = [{
                        instancePath: t,
                        schemaPath: "#/required",
                        keyword: "required",
                        params: {
                            missingProperty: a
                        },
                        message: "must have required property '" + a + "'"
                    }], !1; {
                        let a = d;
                        for (let a in e)
                            if (!("name" === a || "timestamp" === a || "version" === a || "tokens" === a || "tokenMap" === a || "keywords" === a || "tags" === a || "logoURI" === a)) return k.errors = [{
                                instancePath: t,
                                schemaPath: "#/additionalProperties",
                                keyword: "additionalProperties",
                                params: {
                                    additionalProperty: a
                                },
                                message: "must NOT have additional properties"
                            }], !1;
                        if (a === d) {
                            if (void 0 !== e.name) {
                                let a = e.name,
                                    r = d;
                                if (d === r) {
                                    if ("string" != typeof a) return k.errors = [{
                                        instancePath: t + "/name",
                                        schemaPath: "#/properties/name/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    if (i(a) > 30) return k.errors = [{
                                        instancePath: t + "/name",
                                        schemaPath: "#/properties/name/maxLength",
                                        keyword: "maxLength",
                                        params: {
                                            limit: 30
                                        },
                                        message: "must NOT have more than 30 characters"
                                    }], !1;
                                    if (1 > i(a)) return k.errors = [{
                                        instancePath: t + "/name",
                                        schemaPath: "#/properties/name/minLength",
                                        keyword: "minLength",
                                        params: {
                                            limit: 1
                                        },
                                        message: "must NOT have fewer than 1 characters"
                                    }], !1;
                                    if (!n.test(a)) return k.errors = [{
                                        instancePath: t + "/name",
                                        schemaPath: "#/properties/name/pattern",
                                        keyword: "pattern",
                                        params: {
                                            pattern: "^[\\w ]+$"
                                        },
                                        message: 'must match pattern "^[\\w ]+$"'
                                    }], !1
                                }
                                var u = r === d
                            } else var u = !0;
                            if (u) {
                                if (void 0 !== e.timestamp) {
                                    let a = e.timestamp,
                                        r = d;
                                    if (d === r && d === r) {
                                        if ("string" != typeof a) return k.errors = [{
                                            instancePath: t + "/timestamp",
                                            schemaPath: "#/properties/timestamp/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        if (!h.validate(a)) return k.errors = [{
                                            instancePath: t + "/timestamp",
                                            schemaPath: "#/properties/timestamp/format",
                                            keyword: "format",
                                            params: {
                                                format: "date-time"
                                            },
                                            message: 'must match format "date-time"'
                                        }], !1
                                    }
                                    var u = r === d
                                } else var u = !0;
                                if (u) {
                                    if (void 0 !== e.version) {
                                        let a = e.version,
                                            r = d,
                                            s = d;
                                        if (d === s) {
                                            if (!a || "object" != typeof a || Array.isArray(a)) return k.errors = [{
                                                instancePath: t + "/version",
                                                schemaPath: "#/definitions/Version/type",
                                                keyword: "type",
                                                params: {
                                                    type: "object"
                                                },
                                                message: "must be object"
                                            }], !1; {
                                                let e;
                                                if (void 0 === a.major && (e = "major") || void 0 === a.minor && (e = "minor") || void 0 === a.patch && (e = "patch")) return k.errors = [{
                                                    instancePath: t + "/version",
                                                    schemaPath: "#/definitions/Version/required",
                                                    keyword: "required",
                                                    params: {
                                                        missingProperty: e
                                                    },
                                                    message: "must have required property '" + e + "'"
                                                }], !1; {
                                                    let e = d;
                                                    for (let e in a)
                                                        if (!("major" === e || "minor" === e || "patch" === e)) return k.errors = [{
                                                            instancePath: t + "/version",
                                                            schemaPath: "#/definitions/Version/additionalProperties",
                                                            keyword: "additionalProperties",
                                                            params: {
                                                                additionalProperty: e
                                                            },
                                                            message: "must NOT have additional properties"
                                                        }], !1;
                                                    if (e === d) {
                                                        if (void 0 !== a.major) {
                                                            let e = a.major,
                                                                r = d;
                                                            if (!("number" == typeof e && !(e % 1) && !isNaN(e) && isFinite(e))) return k.errors = [{
                                                                instancePath: t + "/version/major",
                                                                schemaPath: "#/definitions/Version/properties/major/type",
                                                                keyword: "type",
                                                                params: {
                                                                    type: "integer"
                                                                },
                                                                message: "must be integer"
                                                            }], !1;
                                                            if (d === r && "number" == typeof e && isFinite(e) && (e < 0 || isNaN(e))) return k.errors = [{
                                                                instancePath: t + "/version/major",
                                                                schemaPath: "#/definitions/Version/properties/major/minimum",
                                                                keyword: "minimum",
                                                                params: {
                                                                    comparison: ">=",
                                                                    limit: 0
                                                                },
                                                                message: "must be >= 0"
                                                            }], !1;
                                                            var y = r === d
                                                        } else var y = !0;
                                                        if (y) {
                                                            if (void 0 !== a.minor) {
                                                                let e = a.minor,
                                                                    r = d;
                                                                if (!("number" == typeof e && !(e % 1) && !isNaN(e) && isFinite(e))) return k.errors = [{
                                                                    instancePath: t + "/version/minor",
                                                                    schemaPath: "#/definitions/Version/properties/minor/type",
                                                                    keyword: "type",
                                                                    params: {
                                                                        type: "integer"
                                                                    },
                                                                    message: "must be integer"
                                                                }], !1;
                                                                if (d === r && "number" == typeof e && isFinite(e) && (e < 0 || isNaN(e))) return k.errors = [{
                                                                    instancePath: t + "/version/minor",
                                                                    schemaPath: "#/definitions/Version/properties/minor/minimum",
                                                                    keyword: "minimum",
                                                                    params: {
                                                                        comparison: ">=",
                                                                        limit: 0
                                                                    },
                                                                    message: "must be >= 0"
                                                                }], !1;
                                                                var y = r === d
                                                            } else var y = !0;
                                                            if (y) {
                                                                if (void 0 !== a.patch) {
                                                                    let e = a.patch,
                                                                        r = d;
                                                                    if (!("number" == typeof e && !(e % 1) && !isNaN(e) && isFinite(e))) return k.errors = [{
                                                                        instancePath: t + "/version/patch",
                                                                        schemaPath: "#/definitions/Version/properties/patch/type",
                                                                        keyword: "type",
                                                                        params: {
                                                                            type: "integer"
                                                                        },
                                                                        message: "must be integer"
                                                                    }], !1;
                                                                    if (d === r && "number" == typeof e && isFinite(e) && (e < 0 || isNaN(e))) return k.errors = [{
                                                                        instancePath: t + "/version/patch",
                                                                        schemaPath: "#/definitions/Version/properties/patch/minimum",
                                                                        keyword: "minimum",
                                                                        params: {
                                                                            comparison: ">=",
                                                                            limit: 0
                                                                        },
                                                                        message: "must be >= 0"
                                                                    }], !1;
                                                                    var y = r === d
                                                                } else var y = !0
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        var u = r === d
                                    } else var u = !0;
                                    if (u) {
                                        if (void 0 !== e.tokens) {
                                            let a = e.tokens,
                                                r = d;
                                            if (d === r) {
                                                if (!Array.isArray(a)) return k.errors = [{
                                                    instancePath: t + "/tokens",
                                                    schemaPath: "#/properties/tokens/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "array"
                                                    },
                                                    message: "must be array"
                                                }], !1;
                                                if (a.length > 1e4) return k.errors = [{
                                                    instancePath: t + "/tokens",
                                                    schemaPath: "#/properties/tokens/maxItems",
                                                    keyword: "maxItems",
                                                    params: {
                                                        limit: 1e4
                                                    },
                                                    message: "must NOT have more than 10000 items"
                                                }], !1;
                                                if (a.length < 1) return k.errors = [{
                                                    instancePath: t + "/tokens",
                                                    schemaPath: "#/properties/tokens/minItems",
                                                    keyword: "minItems",
                                                    params: {
                                                        limit: 1
                                                    },
                                                    message: "must NOT have fewer than 1 items"
                                                }], !1; {
                                                    var c = !0;
                                                    let e = a.length;
                                                    for (let r = 0; r < e; r++) {
                                                        let e = d;
                                                        v(a[r], {
                                                            instancePath: t + "/tokens/" + r,
                                                            parentData: a,
                                                            parentDataProperty: r,
                                                            rootData: s
                                                        }) || (d = (l = null === l ? v.errors : l.concat(v.errors)).length);
                                                        var c = e === d;
                                                        if (!c) break
                                                    }
                                                }
                                            }
                                            var u = r === d
                                        } else var u = !0;
                                        if (u) {
                                            if (void 0 !== e.tokenMap) {
                                                let a = e.tokenMap,
                                                    r = d;
                                                if (d === r) {
                                                    if (!a || "object" != typeof a || Array.isArray(a)) return k.errors = [{
                                                        instancePath: t + "/tokenMap",
                                                        schemaPath: "#/properties/tokenMap/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "object"
                                                        },
                                                        message: "must be object"
                                                    }], !1;
                                                    if (Object.keys(a).length > 1e4) return k.errors = [{
                                                        instancePath: t + "/tokenMap",
                                                        schemaPath: "#/properties/tokenMap/maxProperties",
                                                        keyword: "maxProperties",
                                                        params: {
                                                            limit: 1e4
                                                        },
                                                        message: "must NOT have more than 10000 properties"
                                                    }], !1;
                                                    if (Object.keys(a).length < 1) return k.errors = [{
                                                        instancePath: t + "/tokenMap",
                                                        schemaPath: "#/properties/tokenMap/minProperties",
                                                        keyword: "minProperties",
                                                        params: {
                                                            limit: 1
                                                        },
                                                        message: "must NOT have fewer than 1 properties"
                                                    }], !1;
                                                    for (let e in a) {
                                                        let a = d;
                                                        if ("string" != typeof e) {
                                                            let a = {
                                                                instancePath: t + "/tokenMap",
                                                                schemaPath: "#/properties/tokenMap/propertyNames/type",
                                                                keyword: "type",
                                                                params: {
                                                                    type: "string"
                                                                },
                                                                message: "must be string",
                                                                propertyName: e
                                                            };
                                                            null === l ? l = [a] : l.push(a), d++
                                                        }
                                                        var g = a === d;
                                                        if (!g) {
                                                            let a = {
                                                                instancePath: t + "/tokenMap",
                                                                schemaPath: "#/properties/tokenMap/propertyNames",
                                                                keyword: "propertyNames",
                                                                params: {
                                                                    propertyName: e
                                                                },
                                                                message: "property name must be valid"
                                                            };
                                                            return null === l ? l = [a] : l.push(a), d++, k.errors = l, !1
                                                        }
                                                    }
                                                    if (g)
                                                        for (let e in a) {
                                                            let r = d;
                                                            if (v(a[e], {
                                                                    instancePath: t + "/tokenMap/" + e.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                                    parentData: a,
                                                                    parentDataProperty: e,
                                                                    rootData: s
                                                                }) || (d = (l = null === l ? v.errors : l.concat(v.errors)).length), r !== d) break
                                                        }
                                                }
                                                var u = r === d
                                            } else var u = !0;
                                            if (u) {
                                                if (void 0 !== e.keywords) {
                                                    let a = e.keywords,
                                                        r = d;
                                                    if (d === r) {
                                                        if (!Array.isArray(a)) return k.errors = [{
                                                            instancePath: t + "/keywords",
                                                            schemaPath: "#/properties/keywords/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "array"
                                                            },
                                                            message: "must be array"
                                                        }], !1;
                                                        if (a.length > 20) return k.errors = [{
                                                            instancePath: t + "/keywords",
                                                            schemaPath: "#/properties/keywords/maxItems",
                                                            keyword: "maxItems",
                                                            params: {
                                                                limit: 20
                                                            },
                                                            message: "must NOT have more than 20 items"
                                                        }], !1; {
                                                            var P = !0;
                                                            let e = a.length;
                                                            for (let r = 0; r < e; r++) {
                                                                let e = a[r],
                                                                    s = d;
                                                                if (d === s) {
                                                                    if ("string" != typeof e) return k.errors = [{
                                                                        instancePath: t + "/keywords/" + r,
                                                                        schemaPath: "#/properties/keywords/items/type",
                                                                        keyword: "type",
                                                                        params: {
                                                                            type: "string"
                                                                        },
                                                                        message: "must be string"
                                                                    }], !1;
                                                                    if (i(e) > 20) return k.errors = [{
                                                                        instancePath: t + "/keywords/" + r,
                                                                        schemaPath: "#/properties/keywords/items/maxLength",
                                                                        keyword: "maxLength",
                                                                        params: {
                                                                            limit: 20
                                                                        },
                                                                        message: "must NOT have more than 20 characters"
                                                                    }], !1;
                                                                    if (1 > i(e)) return k.errors = [{
                                                                        instancePath: t + "/keywords/" + r,
                                                                        schemaPath: "#/properties/keywords/items/minLength",
                                                                        keyword: "minLength",
                                                                        params: {
                                                                            limit: 1
                                                                        },
                                                                        message: "must NOT have fewer than 1 characters"
                                                                    }], !1;
                                                                    if (!n.test(e)) return k.errors = [{
                                                                        instancePath: t + "/keywords/" + r,
                                                                        schemaPath: "#/properties/keywords/items/pattern",
                                                                        keyword: "pattern",
                                                                        params: {
                                                                            pattern: "^[\\w ]+$"
                                                                        },
                                                                        message: 'must match pattern "^[\\w ]+$"'
                                                                    }], !1
                                                                }
                                                                var P = s === d;
                                                                if (!P) break
                                                            }
                                                            if (P) {
                                                                let e, r = a.length;
                                                                if (r > 1) {
                                                                    let s = {};
                                                                    for (; r--;) {
                                                                        let i = a[r];
                                                                        if ("string" == typeof i) {
                                                                            if ("number" == typeof s[i]) return e = s[i], k.errors = [{
                                                                                instancePath: t + "/keywords",
                                                                                schemaPath: "#/properties/keywords/uniqueItems",
                                                                                keyword: "uniqueItems",
                                                                                params: {
                                                                                    i: r,
                                                                                    j: e
                                                                                },
                                                                                message: "must NOT have duplicate items (items ## " + e + " and " + r + " are identical)"
                                                                            }], !1;
                                                                            s[i] = r
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    var u = r === d
                                                } else var u = !0;
                                                if (u) {
                                                    if (void 0 !== e.tags) {
                                                        let a = e.tags,
                                                            r = d;
                                                        if (d === r) {
                                                            if (!a || "object" != typeof a || Array.isArray(a)) return k.errors = [{
                                                                instancePath: t + "/tags",
                                                                schemaPath: "#/properties/tags/type",
                                                                keyword: "type",
                                                                params: {
                                                                    type: "object"
                                                                },
                                                                message: "must be object"
                                                            }], !1;
                                                            if (Object.keys(a).length > 20) return k.errors = [{
                                                                instancePath: t + "/tags",
                                                                schemaPath: "#/properties/tags/maxProperties",
                                                                keyword: "maxProperties",
                                                                params: {
                                                                    limit: 20
                                                                },
                                                                message: "must NOT have more than 20 properties"
                                                            }], !1;
                                                            for (let e in a) {
                                                                let a = d,
                                                                    r = d;
                                                                if (d === r) {
                                                                    if ("string" == typeof e) {
                                                                        if (i(e) > 10) {
                                                                            let a = {
                                                                                instancePath: t + "/tags",
                                                                                schemaPath: "#/definitions/TagIdentifier/maxLength",
                                                                                keyword: "maxLength",
                                                                                params: {
                                                                                    limit: 10
                                                                                },
                                                                                message: "must NOT have more than 10 characters",
                                                                                propertyName: e
                                                                            };
                                                                            null === l ? l = [a] : l.push(a), d++
                                                                        } else if (1 > i(e)) {
                                                                            let a = {
                                                                                instancePath: t + "/tags",
                                                                                schemaPath: "#/definitions/TagIdentifier/minLength",
                                                                                keyword: "minLength",
                                                                                params: {
                                                                                    limit: 1
                                                                                },
                                                                                message: "must NOT have fewer than 1 characters",
                                                                                propertyName: e
                                                                            };
                                                                            null === l ? l = [a] : l.push(a), d++
                                                                        } else if (!m.test(e)) {
                                                                            let a = {
                                                                                instancePath: t + "/tags",
                                                                                schemaPath: "#/definitions/TagIdentifier/pattern",
                                                                                keyword: "pattern",
                                                                                params: {
                                                                                    pattern: "^[\\w]+$"
                                                                                },
                                                                                message: 'must match pattern "^[\\w]+$"',
                                                                                propertyName: e
                                                                            };
                                                                            null === l ? l = [a] : l.push(a), d++
                                                                        }
                                                                    } else {
                                                                        let a = {
                                                                            instancePath: t + "/tags",
                                                                            schemaPath: "#/definitions/TagIdentifier/type",
                                                                            keyword: "type",
                                                                            params: {
                                                                                type: "string"
                                                                            },
                                                                            message: "must be string",
                                                                            propertyName: e
                                                                        };
                                                                        null === l ? l = [a] : l.push(a), d++
                                                                    }
                                                                }
                                                                var w = a === d;
                                                                if (!w) {
                                                                    let a = {
                                                                        instancePath: t + "/tags",
                                                                        schemaPath: "#/properties/tags/propertyNames",
                                                                        keyword: "propertyNames",
                                                                        params: {
                                                                            propertyName: e
                                                                        },
                                                                        message: "property name must be valid"
                                                                    };
                                                                    return null === l ? l = [a] : l.push(a), d++, k.errors = l, !1
                                                                }
                                                            }
                                                            if (w)
                                                                for (let e in a) {
                                                                    let r = a[e],
                                                                        s = d,
                                                                        n = d;
                                                                    if (d === n) {
                                                                        if (!r || "object" != typeof r || Array.isArray(r)) return k.errors = [{
                                                                            instancePath: t + "/tags/" + e.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                                            schemaPath: "#/definitions/TagDefinition/type",
                                                                            keyword: "type",
                                                                            params: {
                                                                                type: "object"
                                                                            },
                                                                            message: "must be object"
                                                                        }], !1; {
                                                                            let a;
                                                                            if (void 0 === r.name && (a = "name") || void 0 === r.description && (a = "description")) return k.errors = [{
                                                                                instancePath: t + "/tags/" + e.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                                                schemaPath: "#/definitions/TagDefinition/required",
                                                                                keyword: "required",
                                                                                params: {
                                                                                    missingProperty: a
                                                                                },
                                                                                message: "must have required property '" + a + "'"
                                                                            }], !1; {
                                                                                let a = d;
                                                                                for (let a in r)
                                                                                    if (!("name" === a || "description" === a)) return k.errors = [{
                                                                                        instancePath: t + "/tags/" + e.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                                                        schemaPath: "#/definitions/TagDefinition/additionalProperties",
                                                                                        keyword: "additionalProperties",
                                                                                        params: {
                                                                                            additionalProperty: a
                                                                                        },
                                                                                        message: "must NOT have additional properties"
                                                                                    }], !1;
                                                                                if (a === d) {
                                                                                    if (void 0 !== r.name) {
                                                                                        let a = r.name,
                                                                                            s = d;
                                                                                        if (d === s) {
                                                                                            if ("string" != typeof a) return k.errors = [{
                                                                                                instancePath: t + "/tags/" + e.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                                                                schemaPath: "#/definitions/TagDefinition/properties/name/type",
                                                                                                keyword: "type",
                                                                                                params: {
                                                                                                    type: "string"
                                                                                                },
                                                                                                message: "must be string"
                                                                                            }], !1;
                                                                                            if (i(a) > 20) return k.errors = [{
                                                                                                instancePath: t + "/tags/" + e.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                                                                schemaPath: "#/definitions/TagDefinition/properties/name/maxLength",
                                                                                                keyword: "maxLength",
                                                                                                params: {
                                                                                                    limit: 20
                                                                                                },
                                                                                                message: "must NOT have more than 20 characters"
                                                                                            }], !1;
                                                                                            if (1 > i(a)) return k.errors = [{
                                                                                                instancePath: t + "/tags/" + e.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                                                                schemaPath: "#/definitions/TagDefinition/properties/name/minLength",
                                                                                                keyword: "minLength",
                                                                                                params: {
                                                                                                    limit: 1
                                                                                                },
                                                                                                message: "must NOT have fewer than 1 characters"
                                                                                            }], !1;
                                                                                            if (!o.test(a)) return k.errors = [{
                                                                                                instancePath: t + "/tags/" + e.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                                                                schemaPath: "#/definitions/TagDefinition/properties/name/pattern",
                                                                                                keyword: "pattern",
                                                                                                params: {
                                                                                                    pattern: "^[ \\w]+$"
                                                                                                },
                                                                                                message: 'must match pattern "^[ \\w]+$"'
                                                                                            }], !1
                                                                                        }
                                                                                        var b = s === d
                                                                                    } else var b = !0;
                                                                                    if (b) {
                                                                                        if (void 0 !== r.description) {
                                                                                            let a = r.description,
                                                                                                s = d;
                                                                                            if (d === s) {
                                                                                                if ("string" != typeof a) return k.errors = [{
                                                                                                    instancePath: t + "/tags/" + e.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                                                                    schemaPath: "#/definitions/TagDefinition/properties/description/type",
                                                                                                    keyword: "type",
                                                                                                    params: {
                                                                                                        type: "string"
                                                                                                    },
                                                                                                    message: "must be string"
                                                                                                }], !1;
                                                                                                if (i(a) > 200) return k.errors = [{
                                                                                                    instancePath: t + "/tags/" + e.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                                                                    schemaPath: "#/definitions/TagDefinition/properties/description/maxLength",
                                                                                                    keyword: "maxLength",
                                                                                                    params: {
                                                                                                        limit: 200
                                                                                                    },
                                                                                                    message: "must NOT have more than 200 characters"
                                                                                                }], !1;
                                                                                                if (1 > i(a)) return k.errors = [{
                                                                                                    instancePath: t + "/tags/" + e.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                                                                    schemaPath: "#/definitions/TagDefinition/properties/description/minLength",
                                                                                                    keyword: "minLength",
                                                                                                    params: {
                                                                                                        limit: 1
                                                                                                    },
                                                                                                    message: "must NOT have fewer than 1 characters"
                                                                                                }], !1;
                                                                                                if (!p.test(a)) return k.errors = [{
                                                                                                    instancePath: t + "/tags/" + e.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                                                                    schemaPath: "#/definitions/TagDefinition/properties/description/pattern",
                                                                                                    keyword: "pattern",
                                                                                                    params: {
                                                                                                        pattern: "^[ \\w\\.,:]+$"
                                                                                                    },
                                                                                                    message: 'must match pattern "^[ \\w\\.,:]+$"'
                                                                                                }], !1
                                                                                            }
                                                                                            var b = s === d
                                                                                        } else var b = !0
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                    if (s !== d) break
                                                                }
                                                        }
                                                        var u = r === d
                                                    } else var u = !0;
                                                    if (u) {
                                                        if (void 0 !== e.logoURI) {
                                                            let a = e.logoURI,
                                                                r = d;
                                                            if (d === r && d === r) {
                                                                if ("string" != typeof a) return k.errors = [{
                                                                    instancePath: t + "/logoURI",
                                                                    schemaPath: "#/properties/logoURI/type",
                                                                    keyword: "type",
                                                                    params: {
                                                                        type: "string"
                                                                    },
                                                                    message: "must be string"
                                                                }], !1;
                                                                if (!f(a)) return k.errors = [{
                                                                    instancePath: t + "/logoURI",
                                                                    schemaPath: "#/properties/logoURI/format",
                                                                    keyword: "format",
                                                                    params: {
                                                                        format: "uri"
                                                                    },
                                                                    message: 'must match format "uri"'
                                                                }], !1
                                                            }
                                                            var u = r === d
                                                        } else var u = !0
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return k.errors = l, 0 === d
            }
        }
    }
]);