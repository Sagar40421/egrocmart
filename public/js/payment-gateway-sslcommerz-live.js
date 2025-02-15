/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */

/**
 * @license text 2.0.15 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/text/LICENSE
 */

/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */

/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */

/*!
 * tingle.js
 * @author  robin_parisi
 * @version 0.14.0
 * @url
 */

/*!mobile-detect v1.4.3 2018-09-08*/

/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/

!(function () {
    var e, t, n;
    !(function (o) {
        function r(e, t) {
            return v.call(e, t);
        }
        function i(e, t) {
            var n,
                o,
                r,
                i,
                a,
                s,
                l,
                c,
                u,
                d,
                p,
                f,
                m = t && t.split("/"),
                h = T.map,
                b = (h && h["*"]) || {};
            if (e) {
                for (e = e.split("/"), a = e.length - 1, T.nodeIdCompat && x.test(e[a]) && (e[a] = e[a].replace(x, "")), "." === e[0].charAt(0) && m && ((f = m.slice(0, m.length - 1)), (e = f.concat(e))), u = 0; u < e.length; u++)
                    if ("." === (p = e[u])) e.splice(u, 1), (u -= 1);
                    else if (".." === p) {
                        if (0 === u || (1 === u && ".." === e[2]) || ".." === e[u - 1]) continue;
                        u > 0 && (e.splice(u - 1, 2), (u -= 2));
                    }
                e = e.join("/");
            }
            if ((m || b) && h) {
                for (n = e.split("/"), u = n.length; u > 0; u -= 1) {
                    if (((o = n.slice(0, u).join("/")), m))
                        for (d = m.length; d > 0; d -= 1)
                            if ((r = h[m.slice(0, d).join("/")]) && (r = r[o])) {
                                (i = r), (s = u);
                                break;
                            }
                    if (i) break;
                    !l && b && b[o] && ((l = b[o]), (c = u));
                }
                !i && l && ((i = l), (s = c)), i && (n.splice(0, s, i), (e = n.join("/")));
            }
            return e;
        }
        function a(e, t) {
            return function () {
                var n = S.call(arguments, 0);
                return "string" != typeof n[0] && 1 === n.length && n.push(null), m.apply(o, n.concat([e, t]));
            };
        }
        function s(e) {
            return function (t) {
                return i(t, e);
            };
        }
        function l(e) {
            return function (t) {
                g[e] = t;
            };
        }
        function c(e) {
            if (r(w, e)) {
                var t = w[e];
                delete w[e], (y[e] = !0), f.apply(o, t);
            }
            if (!r(g, e) && !r(y, e)) throw new Error("No " + e);
            return g[e];
        }
        function u(e) {
            var t,
                n = e ? e.indexOf("!") : -1;
            return n > -1 && ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))), [t, e];
        }
        function d(e) {
            return e ? u(e) : [];
        }
        function p(e) {
            return function () {
                return (T && T.config && T.config[e]) || {};
            };
        }
        var f,
            m,
            h,
            b,
            g = {},
            w = {},
            T = {},
            y = {},
            v = Object.prototype.hasOwnProperty,
            S = [].slice,
            x = /\.js$/;
        (h = function (e, t) {
            var n,
                o = u(e),
                r = o[0],
                a = t[1];
            return (
                (e = o[1]), r && ((r = i(r, a)), (n = c(r))), r ? (e = n && n.normalize ? n.normalize(e, s(a)) : i(e, a)) : ((e = i(e, a)), (o = u(e)), (r = o[0]), (e = o[1]), r && (n = c(r))), { f: r ? r + "!" + e : e, n: e, pr: r, p: n }
            );
        }),
            (b = {
                require: function (e) {
                    return a(e);
                },
                exports: function (e) {
                    var t = g[e];
                    return void 0 !== t ? t : (g[e] = {});
                },
                module: function (e) {
                    return { id: e, uri: "", exports: g[e], config: p(e) };
                },
            }),
            (f = function (e, t, n, i) {
                var s,
                    u,
                    p,
                    f,
                    m,
                    T,
                    v,
                    S = [],
                    x = typeof n;
                if (((i = i || e), (T = d(i)), "undefined" === x || "function" === x)) {
                    for (t = !t.length && n.length ? ["require", "exports", "module"] : t, m = 0; m < t.length; m += 1)
                        if (((f = h(t[m], T)), "require" === (u = f.f))) S[m] = b.require(e);
                        else if ("exports" === u) (S[m] = b.exports(e)), (v = !0);
                        else if ("module" === u) s = S[m] = b.module(e);
                        else if (r(g, u) || r(w, u) || r(y, u)) S[m] = c(u);
                        else {
                            if (!f.p) throw new Error(e + " missing " + u);
                            f.p.load(f.n, a(i, !0), l(u), {}), (S[m] = g[u]);
                        }
                    (p = n ? n.apply(g[e], S) : void 0), e && (s && s.exports !== o && s.exports !== g[e] ? (g[e] = s.exports) : (p === o && v) || (g[e] = p));
                } else e && (g[e] = n);
            }),
            (e = t = m = function (e, t, n, r, i) {
                if ("string" == typeof e) return b[e] ? b[e](t) : c(h(e, d(t)).f);
                if (!e.splice) {
                    if (((T = e), T.deps && m(T.deps, T.callback), !t)) return;
                    t.splice ? ((e = t), (t = n), (n = null)) : (e = o);
                }
                return (
                    (t = t || function () {}),
                    "function" == typeof n && ((n = r), (r = i)),
                    r
                        ? f(o, e, t, n)
                        : setTimeout(function () {
                              f(o, e, t, n);
                          }, 4),
                    m
                );
            }),
            (m.config = function (e) {
                return m(e);
            }),
            (e._defined = g),
            (n = function (e, t, n) {
                if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                t.splice || ((n = t), (t = [])), r(g, e) || r(w, e) || (w[e] = [e, t, n]);
            }),
            (n.amd = { jQuery: !0 });
    })(),
        n("bower_components/almond/almond", function () {});
    var o = function () {};
    (o.prototype.validate = function (e, t) {
        var n = this;
        return t.every(function (t) {
            return n[t](e);
        });
    }),
        (o.prototype.isString = function (e) {
            return "string" == typeof e;
        }),
        (o.prototype.isNotEmpty = function (e) {
            return "" !== e && null !== e && void 0 !== e;
        }),
        (o.prototype.isInt = function (e) {
            return Number.isInteger(e);
        }),
        n("Validator", function () {}),
        n("sform", function () {}),
        n("text", ["module"], function (e) {
            "use strict";
            function n(e, t) {
                return void 0 === e || "" === e ? t : e;
            }
            function o(e, t, o, r) {
                if (t === r) return !0;
                if (e === o) {
                    if ("http" === e) return n(t, "80") === n(r, "80");
                    if ("https" === e) return n(t, "443") === n(r, "443");
                }
                return !1;
            }
            var r,
                i,
                a,
                s,
                l,
                c = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
                u = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
                d = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
                p = "undefined" != typeof location && location.href,
                f = p && location.protocol && location.protocol.replace(/\:/, ""),
                m = p && location.hostname,
                h = p && (location.port || void 0),
                b = {},
                g = (e.config && e.config()) || {};
            return (
                (r = {
                    version: "2.0.15",
                    strip: function (e) {
                        if (e) {
                            e = e.replace(u, "");
                            var t = e.match(d);
                            t && (e = t[1]);
                        } else e = "";
                        return e;
                    },
                    jsEscape: function (e) {
                        return e
                            .replace(/(['\\])/g, "\\$1")
                            .replace(/[\f]/g, "\\f")
                            .replace(/[\b]/g, "\\b")
                            .replace(/[\n]/g, "\\n")
                            .replace(/[\t]/g, "\\t")
                            .replace(/[\r]/g, "\\r")
                            .replace(/[\u2028]/g, "\\u2028")
                            .replace(/[\u2029]/g, "\\u2029");
                    },
                    createXhr:
                        g.createXhr ||
                        function () {
                            var e, t, n;
                            if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest();
                            if ("undefined" != typeof ActiveXObject)
                                for (t = 0; t < 3; t += 1) {
                                    n = c[t];
                                    try {
                                        e = new ActiveXObject(n);
                                    } catch (e) {}
                                    if (e) {
                                        c = [n];
                                        break;
                                    }
                                }
                            return e;
                        },
                    parseName: function (e) {
                        var t,
                            n,
                            o,
                            r = !1,
                            i = e.lastIndexOf("."),
                            a = 0 === e.indexOf("./") || 0 === e.indexOf("../");
                        return (
                            -1 !== i && (!a || i > 1) ? ((t = e.substring(0, i)), (n = e.substring(i + 1))) : (t = e),
                            (o = n || t),
                            (i = o.indexOf("!")),
                            -1 !== i && ((r = "strip" === o.substring(i + 1)), (o = o.substring(0, i)), n ? (n = o) : (t = o)),
                            { moduleName: t, ext: n, strip: r }
                        );
                    },
                    xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
                    useXhr: function (e, t, n, i) {
                        var a,
                            s,
                            l,
                            c = r.xdRegExp.exec(e);
                        return !c || ((a = c[2]), (s = c[3]), (s = s.split(":")), (l = s[1]), (s = s[0]), (!a || a === t) && (!s || s.toLowerCase() === n.toLowerCase()) && ((!l && !s) || o(a, l, t, i)));
                    },
                    finishLoad: function (e, t, n, o) {
                        (n = t ? r.strip(n) : n), g.isBuild && (b[e] = n), o(n);
                    },
                    load: function (e, t, n, o) {
                        if (o && o.isBuild && !o.inlineText) return void n();
                        g.isBuild = o && o.isBuild;
                        var i = r.parseName(e),
                            a = i.moduleName + (i.ext ? "." + i.ext : ""),
                            s = t.toUrl(a),
                            l = g.useXhr || r.useXhr;
                        if (0 === s.indexOf("empty:")) return void n();
                        !p || l(s, f, m, h)
                            ? r.get(
                                  s,
                                  function (t) {
                                      r.finishLoad(e, i.strip, t, n);
                                  },
                                  function (e) {
                                      n.error && n.error(e);
                                  }
                              )
                            : t([a], function (e) {
                                  r.finishLoad(i.moduleName + "." + i.ext, i.strip, e, n);
                              });
                    },
                    write: function (e, t, n, o) {
                        if (b.hasOwnProperty(t)) {
                            var i = r.jsEscape(b[t]);
                            n.asModule(e + "!" + t, "define(function () { return '" + i + "';});\n");
                        }
                    },
                    writeFile: function (e, t, n, o, i) {
                        var a = r.parseName(t),
                            s = a.ext ? "." + a.ext : "",
                            l = a.moduleName + s,
                            c = n.toUrl(a.moduleName + s) + ".js";
                        r.load(
                            l,
                            n,
                            function (t) {
                                var n = function (e) {
                                    return o(c, e);
                                };
                                (n.asModule = function (e, t) {
                                    return o.asModule(e, c, t);
                                }),
                                    r.write(e, l, n, i);
                            },
                            i
                        );
                    },
                }),
                "node" === g.env || (!g.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] && !process.versions["atom-shell"])
                    ? ((i = t.nodeRequire("fs")),
                      (r.get = function (e, t, n) {
                          try {
                              var o = i.readFileSync(e, "utf8");
                              "\ufeff" === o[0] && (o = o.substring(1)), t(o);
                          } catch (e) {
                              n && n(e);
                          }
                      }))
                    : "xhr" === g.env || (!g.env && r.createXhr())
                    ? (r.get = function (e, t, n, o) {
                          var i,
                              a = r.createXhr();
                          if ((a.open("GET", e, !0), o)) for (i in o) o.hasOwnProperty(i) && a.setRequestHeader(i.toLowerCase(), o[i]);
                          g.onXhr && g.onXhr(a, e),
                              (a.onreadystatechange = function (o) {
                                  var r, i;
                                  4 === a.readyState && ((r = a.status || 0), r > 399 && r < 600 ? ((i = new Error(e + " HTTP status: " + r)), (i.xhr = a), n && n(i)) : t(a.responseText), g.onXhrComplete && g.onXhrComplete(a, e));
                              }),
                              a.send(null);
                      })
                    : "rhino" === g.env || (!g.env && "undefined" != typeof Packages && "undefined" != typeof java)
                    ? (r.get = function (e, t) {
                          var n,
                              o,
                              r = new java.io.File(e),
                              i = java.lang.System.getProperty("line.separator"),
                              a = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(r), "utf-8")),
                              s = "";
                          try {
                              for (n = new java.lang.StringBuffer(), o = a.readLine(), o && o.length() && 65279 === o.charAt(0) && (o = o.substring(1)), null !== o && n.append(o); null !== (o = a.readLine()); ) n.append(i), n.append(o);
                              s = String(n.toString());
                          } finally {
                              a.close();
                          }
                          t(s);
                      })
                    : ("xpconnect" === g.env || (!g.env && "undefined" != typeof Components && Components.classes && Components.interfaces)) &&
                      ((a = Components.classes),
                      (s = Components.interfaces),
                      Components.utils.import("resource://gre/modules/FileUtils.jsm"),
                      (l = "@mozilla.org/windows-registry-key;1" in a),
                      (r.get = function (e, t) {
                          var n,
                              o,
                              r,
                              i = {};
                          l && (e = e.replace(/\//g, "\\")), (r = new FileUtils.File(e));
                          try {
                              (n = a["@mozilla.org/network/file-input-stream;1"].createInstance(s.nsIFileInputStream)),
                                  n.init(r, 1, 0, !1),
                                  (o = a["@mozilla.org/intl/converter-input-stream;1"].createInstance(s.nsIConverterInputStream)),
                                  o.init(n, "utf-8", n.available(), s.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),
                                  o.readString(n.available(), i),
                                  o.close(),
                                  n.close(),
                                  t(i.value);
                          } catch (e) {
                              throw new Error(((r && r.path) || "") + ": " + e);
                          }
                      })),
                r
            );
        }),
        n("text!sslcz_widget_embed.css", [], function () {
            return '.cleanslate,.cleanslate a,.cleanslate abbr,.cleanslate acronym,.cleanslate address,.cleanslate applet,.cleanslate area,.cleanslate aside,.cleanslate audio,.cleanslate b,.cleanslate big,.cleanslate blockquote,.cleanslate button,.cleanslate canvas,.cleanslate caption,.cleanslate cite,.cleanslate code,.cleanslate col,.cleanslate colgroup,.cleanslate datalist,.cleanslate dd,.cleanslate del,.cleanslate dfn,.cleanslate div,.cleanslate dl,.cleanslate dt,.cleanslate em,.cleanslate fieldset,.cleanslate figcaption,.cleanslate figure,.cleanslate footer,.cleanslate form,.cleanslate h1,.cleanslate h2,.cleanslate h3,.cleanslate h4,.cleanslate h5,.cleanslate h6,.cleanslate header,.cleanslate hr,.cleanslate i,.cleanslate iframe,.cleanslate img,.cleanslate input,.cleanslate ins,.cleanslate kbd,.cleanslate label,.cleanslate legend,.cleanslate li,.cleanslate main,.cleanslate map,.cleanslate mark,.cleanslate menu,.cleanslate meta,.cleanslate nav,.cleanslate object,.cleanslate ol,.cleanslate optgroup,.cleanslate option,.cleanslate output,.cleanslate p,.cleanslate pre,.cleanslate progress,.cleanslate q,.cleanslate samp,.cleanslate section,.cleanslate select,.cleanslate small,.cleanslate span,.cleanslate strike,.cleanslate strong,.cleanslate sub,.cleanslate summary,.cleanslate sup,.cleanslate table,.cleanslate tbody,.cleanslate td,.cleanslate textarea,.cleanslate tfoot,.cleanslate th,.cleanslate thead,.cleanslate time,.cleanslate tr,.cleanslate tt,.cleanslate ul,.cleanslate var,.cleanslate video, .cleanslate article{background-attachment:scroll!important;background-color:transparent!important;background-image:none!important;background-position:0 0!important;background-repeat:repeat!important;border-color:currentColor!important;border-style:none!important;border-width:medium!important;bottom:auto!important;clear:none!important;clip:auto!important;color:inherit!important;counter-increment:none!important;counter-reset:none!important;cursor:auto!important;direction:inherit!important;display:inline!important;float:none!important;font-family:inherit!important;font-size:inherit!important;font-style:inherit!important;font-variant:normal!important;font-weight:inherit!important;height:auto!important;left:auto!important;letter-spacing:normal!important;line-height:inherit!important;list-style-type:inherit!important;list-style-position:outside!important;list-style-image:none!important;margin:0!important;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:1;outline:0!important;overflow:visible!important;padding:0!important;position:static!important;quotes:"" ""!important;right:auto!important;table-layout:auto!important;text-align:inherit!important;text-decoration:inherit!important;text-indent:0!important;text-transform:none!important;top:auto!important;unicode-bidi:normal!important;vertical-align:baseline!important;visibility:inherit!important;white-space:normal!important;width:auto!important;word-spacing:normal!important;z-index:auto!important;-webkit-background-origin:padding-box!important;background-origin:padding-box!important;-webkit-background-clip:border-box!important;background-clip:border-box!important;-webkit-background-size:auto!important;-moz-background-size:auto!important;background-size:auto!important;-webkit-border-image:none!important;-moz-border-image:none!important;-o-border-image:none!important;border-image:none!important;-webkit-border-radius:0!important;-moz-border-radius:0!important;border-radius:0!important;-webkit-box-shadow:none!important;box-shadow:none!important;-webkit-box-sizing:content-box!important;-moz-box-sizing:content-box!important;box-sizing:content-box!important;-webkit-column-count:auto!important;-moz-column-count:auto!important;column-count:auto!important;-webkit-column-gap:normal!important;-moz-column-gap:normal!important;column-gap:normal!important;-webkit-column-rule:medium none #000!important;-moz-column-rule:medium none #000!important;column-rule:medium none #000!important;-webkit-column-span:1!important;-moz-column-span:1!important;column-span:1!important;-webkit-column-width:auto!important;-moz-column-width:auto!important;column-width:auto!important;font-feature-settings:normal!important;overflow-x:visible!important;overflow-y:visible!important;-webkit-hyphens:manual!important;-moz-hyphens:manual!important;hyphens:manual!important;-webkit-perspective:none!important;-moz-perspective:none!important;-ms-perspective:none!important;-o-perspective:none!important;perspective:none!important;-webkit-perspective-origin:50% 50%!important;-moz-perspective-origin:50% 50%!important;-ms-perspective-origin:50% 50%!important;-o-perspective-origin:50% 50%!important;perspective-origin:50% 50%!important;-webkit-backface-visibility:visible!important;-moz-backface-visibility:visible!important;-ms-backface-visibility:visible!important;-o-backface-visibility:visible!important;backface-visibility:visible!important;text-shadow:none!important;-webkit-transition:all 0s ease 0s!important;transition:all 0s ease 0s!important;-webkit-transform:none!important;-moz-transform:none!important;-ms-transform:none!important;-o-transform:none!important;transform:none!important;-webkit-transform-origin:50% 50%!important;-moz-transform-origin:50% 50%!important;-ms-transform-origin:50% 50%!important;-o-transform-origin:50% 50%!important;transform-origin:50% 50%!important;-webkit-transform-style:flat!important;-moz-transform-style:flat!important;-ms-transform-style:flat!important;-o-transform-style:flat!important;transform-style:flat!important;word-break:normal!important}.cleanslate em,.cleanslate mark{font-style:italic!important}.cleanslate h1,.cleanslate h2,.cleanslate h3,.cleanslate h4,.cleanslate h5,.cleanslate h6,.cleanslate mark,.cleanslate strong{font-weight:700!important}.cleanslate ol,.cleanslate p,.cleanslate ul{margin:1em 0!important}.cleanslate,.cleanslate address,.cleanslate audio,.cleanslate blockquote,.cleanslate caption,.cleanslate colgroup,.cleanslate dd,.cleanslate dialog,.cleanslate div,.cleanslate dl,.cleanslate dt,.cleanslate fieldset,.cleanslate figure,.cleanslate footer,.cleanslate form,.cleanslate h1,.cleanslate h2,.cleanslate h3,.cleanslate h4,.cleanslate h5,.cleanslate h6,.cleanslate header,.cleanslate hgroup,.cleanslate hr,.cleanslate main,.cleanslate menu,.cleanslate nav,.cleanslate ol,.cleanslate option,.cleanslate p,.cleanslate pre,.cleanslate progress,.cleanslate section,.cleanslate summary,.cleanslate ul,.cleanslate video, .cleanslate article{display:block!important}.cleanslate h1{font-size:2em!important;padding:.67em 0!important}.cleanslate h2{font-size:1.5em!important;padding:.83em 0!important}.cleanslate h3{font-size:1.17em!important;padding:.83em 0!important}.cleanslate h4{font-size:1em!important}.cleanslate h5{font-size:.83em!important}.cleanslate table{display:table!important;border-collapse:collapse!important;border-spacing:0!important}.cleanslate thead{display:table-header-group!important}.cleanslate tbody{display:table-row-group!important}.cleanslate tfoot{display:table-footer-group!important}.cleanslate tr{display:table-row!important}.cleanslate td,.cleanslate th{display:table-cell!important;padding:2px!important}.cleanslate ol li,.cleanslate ol ol li,.cleanslate ol ol ol li,.cleanslate ol ol ul li,.cleanslate ol ul ul li,.cleanslate ul li,.cleanslate ul ol ol li,.cleanslate ul ul li,.cleanslate ul ul ol li,.cleanslate ul ul ul li{list-style-position:inside!important;margin-top:.08em!important}.cleanslate ol ol,.cleanslate ol ol ol,.cleanslate ol ol ul,.cleanslate ol ul,.cleanslate ol ul ul,.cleanslate ul ol,.cleanslate ul ol ol,.cleanslate ul ul,.cleanslate ul ul ol,.cleanslate ul ul ul{padding-left:40px!important;margin:0!important}.cleanslate nav ol,.cleanslate nav ul{list-style-type:none!important}.cleanslate menu,.cleanslate ul{list-style-type:disc!important}.cleanslate ol{list-style-type:decimal!important}.cleanslate menu menu,.cleanslate menu ul,.cleanslate ol menu,.cleanslate ol ul,.cleanslate ul menu,.cleanslate ul ul{list-style-type:circle!important}.cleanslate menu menu menu,.cleanslate menu menu ul,.cleanslate menu ol menu,.cleanslate menu ol ul,.cleanslate menu ul menu,.cleanslate menu ul ul,.cleanslate ol menu menu,.cleanslate ol menu ul,.cleanslate ol ol menu,.cleanslate ol ol ul,.cleanslate ol ul menu,.cleanslate ol ul ul,.cleanslate ul menu menu,.cleanslate ul menu ul,.cleanslate ul ol menu,.cleanslate ul ol ul,.cleanslate ul ul menu,.cleanslate ul ul ul{list-style-type:square!important}.cleanslate li{display:list-item!important;min-height:auto!important;min-width:auto!important;padding-left:20px!important}.cleanslate code,.cleanslate kbd,.cleanslate samp{font-family:monospace!important}.cleanslate a{color:#00f!important;text-decoration:underline!important}.cleanslate a:visited{color:#529!important}.cleanslate a,.cleanslate a *,.cleanslate input[type=checkbox],.cleanslate input[type=radio],.cleanslate input[type=submit],.cleanslate select{cursor:pointer!important}.cleanslate button,.cleanslate input[type=submit]{text-align:center!important;padding:2px 6px 3px!important;border-radius:4px!important;text-decoration:none!important;font-family:arial,helvetica,sans-serif!important;font-size:small!important;-webkit-appearance:push-button!important;color:buttontext!important;border:1px solid #a6a6a6!important;background:#d3d3d3!important;background:-moz-linear-gradient(top,rgba(255,255,255,1) 0,rgba(221,221,221,1) 100%,rgba(209,209,209,1) 100%,rgba(221,221,221,1) 100%)!important;background:-webkit-gradient(linear,left top,left bottom,color-stop(0,rgba(255,255,255,1)),color-stop(100%,rgba(221,221,221,1)),color-stop(100%,rgba(209,209,209,1)),color-stop(100%,rgba(221,221,221,1)))!important;background:-webkit-linear-gradient(top,rgba(255,255,255,1) 0,rgba(221,221,221,1) 100%,rgba(209,209,209,1) 100%,rgba(221,221,221,1) 100%)!important;background:-o-linear-gradient(top,rgba(255,255,255,1) 0,rgba(221,221,221,1) 100%,rgba(209,209,209,1) 100%,rgba(221,221,221,1) 100%)!important;background:-ms-linear-gradient(top,rgba(255,255,255,1) 0,rgba(221,221,221,1) 100%,rgba(209,209,209,1) 100%,rgba(221,221,221,1) 100%)!important;background:linear-gradient(to bottom,rgba(255,255,255,1) 0,rgba(221,221,221,1) 100%,rgba(209,209,209,1) 100%,rgba(221,221,221,1) 100%)!important;filter:progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#ffffff\', endColorstr=\'#dddddd\', GradientType=0 )!important;-webkit-box-shadow:1px 1px 0 #eee!important;-moz-box-shadow:1px 1px 0 #eee!important;-o-box-shadow:1px 1px 0 #eee!important;box-shadow:1px 1px 0 #eee!important;outline:initial!important}.cleanslate button{padding:1px 6px 2px!important;margin-right:5px!important}.cleanslate input[type=hidden]{display:none!important}.cleanslate textarea{-webkit-appearance:textarea!important;background:#fff!important;padding:2px!important;margin-left:4px!important;word-wrap:break-word!important;white-space:pre-wrap!important;font-size:11px!important;font-family:arial,helvetica,sans-serif!important;line-height:13px!important;resize:both!important}.cleanslate input,.cleanslate select,.cleanslate textarea{border:1px solid #ccc!important}.cleanslate select{font-size:11px!important;font-family:helvetica,arial,sans-serif!important;display:inline-block}.cleanslate input:focus,.cleanslate textarea:focus{outline:-webkit-focus-ring-color auto 5px!important;outline:initial!important}.cleanslate input[type=text]{background:#fff!important;padding:1px!important;font-family:initial!important;font-size:small!important}.cleanslate input[type=checkbox],.cleanslate input[type=radio]{border:1px solid #2b2b2b!important;border-radius:4px!important;outline:intial!important}.cleanslate input[type=radio]{margin:2px 2px 3px!important}.cleanslate button:active,.cleanslate input[type=submit]:active{background:#3b679e!important;background:-moz-linear-gradient(top,rgba(59,103,158,1) 0,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%)!important;background:-webkit-gradient(linear,left top,left bottom,color-stop(0,rgba(59,103,158,1)),color-stop(50%,rgba(43,136,217,1)),color-stop(51%,rgba(32,124,202,1)),color-stop(100%,rgba(125,185,232,1)))!important;background:-webkit-linear-gradient(top,rgba(59,103,158,1) 0,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%)!important;background:-o-linear-gradient(top,rgba(59,103,158,1) 0,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%)!important;background:-ms-linear-gradient(top,rgba(59,103,158,1) 0,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%)!important;background:linear-gradient(to bottom,rgba(59,103,158,1) 0,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%)!important;border-color:#5259b0!important}.cleanslate ins,.cleanslate mark{background-color:#ff9!important;color:#000!important}.cleanslate abbr[title],.cleanslate acronym[title],.cleanslate dfn[title]{cursor:help!important;border-bottom-width:1px!important;border-bottom-style:dotted!important}.cleanslate del{text-decoration:line-through!important}.cleanslate blockquote,.cleanslate q{quotes:none!important}.cleanslate blockquote:after,.cleanslate blockquote:before,.cleanslate li:after,.cleanslate li:before,.cleanslate q:after,.cleanslate q:before{content:""!important}.cleanslate input,.cleanslate select{vertical-align:middle!important}.cleanslate hr{display:block!important;height:1px!important;border:0!important;border-top:1px solid #ccc!important;margin:1em 0!important}.cleanslate [dir=rtl]{direction:rtl!important}.cleanslate menu{padding-left:40px!important;padding-top:8px!important}.cleanslate [hidden],.cleanslate template{display:none!important}.cleanslate abbr[title]{border-bottom:1px dotted!important}.cleanslate sub,.cleanslate sup{font-size:75%!important;line-height:0!important;position:relative!important;vertical-align:baseline!important}.cleanslate sup{top:-.5em!important}.cleanslate sub{bottom:-.25em!important}.cleanslate img{border:0!important}.cleanslate figure{margin:0!important}.cleanslate textarea{overflow:auto!important;vertical-align:top!important}.cleanslate{font-size:medium!important;line-height:1!important;direction:ltr!important;text-align:left!important;text-align:start!important;font-family:"Times New Roman",Times,serif!important;color:#000!important;font-style:normal!important;font-weight:400!important;text-decoration:none!important;list-style-type:disc!important}\r\n#my-widget a {\r\n  color:orange !important;\r\n}\r\n';
        }),
        n("text!css/resp.css", [], function () {
            return "/*\n.tingle-modal--visible .tingle-modal-box__footer {\n    display: none;\n}\n*/\n";
        }),
        n("text!css/generic.css", [], function () {
            return '.generic{\r\n\tfont-family: \'Open Sans Condensed\', arial, sans;\r\n\twidth: 500px;\r\n\tpadding: 30px;\r\n\tbackground: #FFFFFF;\r\n\tmargin: 50px auto;\r\n\tbox-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\r\n\t-moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\r\n\t-webkit-box-shadow:  0px 0px 15px rgba(0, 0, 0, 0.22);\r\n\r\n}\r\n.generic h2{\r\n\tbackground: #4D4D4D;\r\n\ttext-transform: uppercase;\r\n\tfont-family: \'Open Sans Condensed\', sans-serif;\r\n\tcolor: #797979;\r\n\tfont-size: 18px;\r\n\tfont-weight: 100;\r\n\tpadding: 20px;\r\n\tmargin: -30px -30px 30px -30px;\r\n}\r\n.generic input[type="text"],\r\n.generic input[type="date"],\r\n.generic input[type="datetime"],\r\n.generic input[type="email"],\r\n.generic input[type="number"],\r\n.generic input[type="search"],\r\n.generic input[type="time"],\r\n.generic input[type="url"],\r\n.generic input[type="password"],\r\n.generic textarea,\r\n.generic select\r\n{\r\n\tbox-sizing: border-box;\r\n\t-webkit-box-sizing: border-box;\r\n\t-moz-box-sizing: border-box;\r\n\toutline: none;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tpadding: 7px;\r\n\tborder: none;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tbackground: transparent;\r\n\tmargin-bottom: 10px;\r\n\tfont: 16px Arial, Helvetica, sans-serif;\r\n\theight: 45px;\r\n}\r\n.generic textarea{\r\n\tresize:none;\r\n\toverflow: hidden;\r\n}\r\n.generic input[type="button"],\r\n.generic input[type="submit"]{\r\n\t-moz-box-shadow: inset 0px 1px 0px 0px #45D6D6;\r\n\t-webkit-box-shadow: inset 0px 1px 0px 0px #45D6D6;\r\n\tbox-shadow: inset 0px 1px 0px 0px #45D6D6;\r\n\tbackground-color: #2CBBBB;\r\n\tborder: 1px solid #27A0A0;\r\n\tdisplay: inline-block;\r\n\tcursor: pointer;\r\n\tcolor: #FFFFFF;\r\n\tfont-family: \'Open Sans Condensed\', sans-serif;\r\n\tfont-size: 14px;\r\n\tpadding: 8px 18px;\r\n\ttext-decoration: none;\r\n\ttext-transform: uppercase;\r\n}\r\n.generic input[type="button"]:hover,\r\n.generic input[type="submit"]:hover {\r\n\tbackground:linear-gradient(to bottom, #34CACA 5%, #30C9C9 100%);\r\n\tbackground-color:#34CACA;\r\n}\r\n\r\n\r\n.s_button {\r\n  border-radius: 28px;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  display: block;\r\n  background: #fff;\r\n  width: 150px;\r\n  box-shadow: 0 2px 6px rgba(170, 185, 200, 0.4);\r\n  -webkit-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n}\r\n.s_button svg {\r\n  display: none;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  margin: -15px 0 0 -15px;\r\n  fill: #fff;\r\n}\r\n.s_button div {\r\n  height: 4px;\r\n  margin: -2px 0 0 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 71px;\r\n  right: 25px;\r\n  background: #d3d7e0;\r\n  display: none;\r\n  border-radius: 2px;\r\n}\r\n.s_button div span {\r\n  position: absolute;\r\n  background: #28e470;\r\n  height: 4px;\r\n  left: 0;\r\n  top: 0;\r\n  width: 0;\r\n  display: block;\r\n  border-radius: 2px;\r\n}\r\n.s_button a {\r\n  position: relative;\r\n  display: block;\r\n  background: #3f82d7;\r\n  z-index: 2;\r\n  line-height: 56px;\r\n  height: 56px;\r\n  border-radius: 28px;\r\n  width: 100%;\r\n  text-align: center;\r\n  color: #fff;\r\n  box-shadow: 0 2px 6px rgba(170, 185, 200, 0.4);\r\n}\r\n.s_button a span {\r\n  cursor: pointer;\r\n  display: block;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.sloader,\r\n.sloader:after {\r\n  border-radius: 50%;\r\n  width: 10em;\r\n  height: 10em;\r\n}\r\n.sloader {\r\n\ttop: 35%;\r\n  margin: 60px auto;\r\n  font-size: 10px;\r\n  position: relative;\r\n  text-indent: -9999em;\r\n  border-top: 5px solid rgba(255, 255, 255, 0.2);\r\n  border-right: 5px solid rgba(255, 255, 255, 0.2);\r\n  border-bottom: 5px solid rgba(255, 255, 255, 0.2);\r\n  border-left: 5px solid #ffffff;\r\n  -webkit-transform: translateZ(0);\r\n  -ms-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-animation: load8 1.1s infinite linear;\r\n  animation: load8 1.1s infinite linear;\r\n\tz-index: 99999999;\r\n}\r\n@-webkit-keyframes load8 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes load8 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n.s_button {\r\n\tcolor : #fff;\r\n}\r\n\r\n.shaz_back_overlay {\r\n\tdisplay: block;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: rgba(0,0,0,0.85);\r\n\tz-index: 999;\r\n}\r\n\r\n\r\n\r\n\r\n.icon-lock {\r\n  width: 48px;\r\n  height: 48px;\r\n  position: absolute;\r\n  overflow: hidden;\r\n  margin-left: 25px;\r\n  margin-bottom: 25px;\r\n\ttop: 46.4vh;\r\n\tleft: 45.4vw;\r\n\tdisplay: none;\r\n}\r\n\r\n.icon-lock .lock-top-1 {\r\n  width: 40%;\r\n  height: 40%;\r\n  position: absolute;\r\n  left: 50%;\r\n  margin-left: -20%;\r\n  top: 14%;\r\n  background-color: #fff;\r\n  border-radius: 40%;\r\n}\r\n\r\n.icon-lock .lock-top-2 {\r\n  width: 24%;\r\n  height: 40%;\r\n  position: absolute;\r\n  left: 50%;\r\n  margin-left: -12%;\r\n  top: 22%;\r\n  background-color: rgba(0,0,0,0.85);\r\n  border-radius: 25%;\r\n}\r\n\r\n.icon-lock .lock-body {\r\n  width: 60%;\r\n  height: 48%;\r\n  position: absolute;\r\n  left: 50%;\r\n  margin-left: -30%;\r\n  bottom: 11%;\r\n  background-color: #000;\r\n  border-radius: 15%;\r\n}\r\n\r\n.icon-lock .lock-hole {\r\n  width: 16%;\r\n  height: 16%;\r\n  position: absolute;\r\n  left: 50%;\r\n  margin-left: -8%;\r\n  top: 51%;\r\n  border-radius: 100%;\r\n  background-color: rgba(0,0,0,0.85);\r\n}\r\n\r\n.icon-lock .lock-hole:after {\r\n  content: "";\r\n  width: 43%;\r\n  height: 78%;\r\n  position: absolute;\r\n  left: 50%;\r\n  margin-left: -20%;\r\n  top: 100%;\r\n  background-color: inherit;\r\n}\r\n\r\n\r\n.lock:before,\r\n.lock:after,\r\n.unlock:before,\r\n.unlock:after {\r\n    z-index:10;\r\n    left:8px;\r\n    width:3px;\r\n    height:3px;\r\n    margin-top:-2px;\r\n    background:#fff;\r\n    /* css3 */\r\n    -webkit-border-radius:3px;\r\n    -moz-border-radius:3px;\r\n    border-radius:3px;\r\n}\r\n\r\n.lock:before,\r\n.unlock:before {\r\n    left:9px;\r\n    width:1px;\r\n    height:4px;\r\n    margin-top:0px;\r\n}\r\n\r\n.lock a:before,\r\n.unlock a:before {\r\n    left:3px;\r\n    width:13px;\r\n    height:10px;\r\n    margin-top:-4px;\r\n}\r\n\r\n.lock a:after,\r\n.unlock a:after {\r\n    left:5px;\r\n    width:5px;\r\n    height:5px;\r\n    border:2px solid #c55500;\r\n    border-bottom:0;\r\n    margin-top:-11px;\r\n    background:transparent;\r\n    /* css3 */\r\n    -webkit-border-radius:5px 5px 0 0;\r\n    -moz-border-radius:5px 5px 0 0;\r\n    border-radius:5px 5px 0 0;\r\n}\r\n\r\n.unlock a:after {\r\n    left:12px;\r\n}\r\n\r\n.lock a:hover:after,\r\n.lock a:focus:after,\r\n.lock a:active:after,\r\n.unlock a:hover:after,\r\n.unlock a:focus:after,\r\n.unlock a:active:after {\r\n    border-color:#730800;\r\n}\r\n.tingle-modal--visible .tingle-modal-box__footer button {\r\n\t\t\tborder: 0 none;\r\n\t\t\tfloat: right;\r\n\t\t\tfont-size: 21px;\r\n\t\t\tfont-weight: 700;\r\n\t\t\tline-height: 1;\r\n\t\t\tcolor: #000;\r\n\t\t\ttext-shadow: 0 1px 0 #fff;\r\n\t\t\tfilter: alpha(opacity=20);\r\n\t\t\topacity: .2;\r\n\t\t\tpadding: 0;\r\n\t\t\twidth: auto;\r\n\t\t\theight: auto;\r\n\t\t}\r\n\t\t.tingle-modal-box__content {\r\n\t\t\tpadding: 0;\r\n\t\t\tborder-radius: 6px;\r\n\t\t}\r\n\t\t.tingle-modal > .tingle-modal__close {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t\t.tingle-modal--visible .tingle-modal-box__footer button.tingle-modal__close {\r\n\t\t\tright: 18px;\r\n\t\t}\r\n\t\t.iframeWrap {\r\n\t\t\tborder-radius: 6px;\r\n\t\t\toverflow: hidden;\r\n\t\t\tmargin-top: -54px;\r\n\t\t}\r\n\t\tiframe {\r\n\t\t\tborder: none;\r\n\t\t\tmargin: 0;\r\n\t\t\tpadding: 0;\r\n\t\t\tdisplay:block; /* Add this */\r\n\t\t}\r\n';
        }),
        n("text!css/tingle.css", [], function () {
            return '/* ----------------------------------------------------------- */\n/* == tingle v0.14.0 */\n/* ----------------------------------------------------------- */\n\n.tingle-modal * {\n  box-sizing: border-box;\n}\n\n.tingle-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2147483647;\n  display: flex;\n  visibility: hidden;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  background: rgba(0, 0, 0, .8);\n  opacity: 0;\n  user-select: none;\n  cursor: pointer;\n  transition: transform .2s ease;\n}\n\n/* confirm and alerts\n-------------------------------------------------------------- */\n\n.tingle-modal--confirm .tingle-modal-box {\n  text-align: center;\n}\n\n/* modal\n-------------------------------------------------------------- */\n\n.tingle-modal--noOverlayClose {\n  cursor: default;\n}\n\n.tingle-modal--noClose .tingle-modal__close {\n  display: none;\n}\n\n.tingle-modal__close {\n  position: fixed;\n  top: 10px;\n  right: 28px;\n  z-index: 1000;\n  padding: 0;\n  width: 5rem;\n  height: 5rem;\n  border: none;\n  background-color: transparent;\n  color: #f0f0f0;\n  font-size: 6rem;\n  font-family: monospace;\n  line-height: 1;\n  cursor: pointer;\n  transition: color .3s ease;\n}\n\n.tingle-modal__closeLabel {\n  display: none;\n}\n\n.tingle-modal__close:hover {\n  color: #fff;\n}\n\n.tingle-modal-box {\n  position: relative;\n  flex-shrink: 0;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 340px;\n  border-radius: 6px;\n  background: #fff;\n  opacity: 1;\n  cursor: auto;\n  transition: transform .3s cubic-bezier(.175, .885, .32, 1.275);\n  transform: scale(1);\n}\n\n.tingle-modal-box__content {\n  padding: 0;\n}\n\n.tingle-modal-box__footer {\n  padding: 1.5rem 2rem;\n  width: auto;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-color: #f5f5f5;\n  cursor: auto;\n}\n\n.tingle-modal-box__footer::after {\n  display: table;\n  clear: both;\n  content: "";\n}\n\n.tingle-modal-box__footer--sticky {\n  position: fixed;\n  bottom: -200px; /* TODO : find a better way */\n  z-index: 10001;\n  opacity: 1;\n  transition: bottom .3s ease-in-out .3s;\n}\n\n/* state\n-------------------------------------------------------------- */\n\n.tingle-enabled {\n  position: fixed;\n  right: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.tingle-modal--visible .tingle-modal-box__footer {\n  bottom: 0;\n  padding: 0;\n  background: none;\n  position: absolute;\n  top: 6px;\n  right: 5px;\n  z-index: 9999;\n}\n\n.tingle-modal--visible .tingle-modal-box__footer button {\n  border: 0 none;\n  float: right;\n  font-size: 21px;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  filter: alpha(opacity=20);\n  opacity: .2;\n}\n\n.tingle-enabled .tingle-content-wrapper {\n  filter: blur(8px);\n}\n\n.tingle-modal--visible {\n  visibility: visible;\n  opacity: 1;\n}\n\n.tingle-modal--visible .tingle-modal-box {\n  transform: scale(1);\n}\n\n.tingle-modal--overflow {\n  overflow-y: scroll;\n  padding-top: 8vh;\n}\n\n/* btn\n-------------------------------------------------------------- */\n\n.tingle-btn {\n  display: inline-block;\n  margin: 0 .5rem;\n  padding: 1rem 2rem;\n  border: none;\n  background-color: grey;\n  box-shadow: none;\n  color: #fff;\n  vertical-align: middle;\n  text-decoration: none;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: normal;\n  cursor: pointer;\n  transition: background-color .4s ease;\n}\n\n.tingle-btn--primary {\n  background-color: #3498db;\n}\n\n.tingle-btn--danger {\n  background-color: #e74c3c;\n}\n\n.tingle-btn--default {\n  background-color: #34495e;\n}\n\n.tingle-btn--pull-left {\n  float: left;\n}\n\n.tingle-btn--pull-right {\n  float: right;\n}\n\n/* responsive\n-------------------------------------------------------------- */\n\n@media (max-width : 540px) {\n  .tingle-modal {\n    top: 0px;\n    display: block;\n    padding-top: 60px;\n    width: 100%;\n  }\n\n  .tingle-modal-box {\n    width: auto;\n    border-radius: 0;\n  }\n\n  .tingle-modal-box__content {\n    overflow-y: scroll;\n  }\n\n  .tingle-modal--noClose {\n    top: 0;\n  }\n\n  .tingle-modal--noOverlayClose {\n    padding-top: 0;\n  }\n\n  .tingle-modal-box__footer .tingle-btn {\n    display: block;\n    float: none;\n    margin-bottom: 1rem;\n    width: 100%;\n  }\n\n  .tingle-modal__close {\n    top: 0;\n    right: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    height: 60px;\n    border: none;\n    background-color: #2c3e50;\n    box-shadow: none;\n    color: #fff;\n    line-height: 55px;\n  }\n\n  .tingle-modal__closeLabel {\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 1.5rem;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  }\n\n  .tingle-modal__closeIcon {\n    display: inline-block;\n    margin-right: .5rem;\n    vertical-align: middle;\n    font-size: 4rem;\n  }\n}\n\n@supports (backdrop-filter: blur(12px)) {\n  .tingle-modal {\n    backdrop-filter: blur(20px);\n  }\n\n  @media (max-width : 540px) {\n    .tingle-modal {\n      backdrop-filter: blur(8px);\n    }\n  }\n\n  .tingle-enabled .tingle-content-wrapper {\n    filter: none;\n  }\n}\n\n\n\n\n\n  .client_logo {\n    width: 100px;\n    height: 100px;\n    background: #fff;\n    border: 2px solid #2a5da8;\n    border-radius: 50%;\n    text-align: center;\n    margin: -50px auto 5px;\n    overflow: hidden;\n    position: relative;\n    display: table;\n  }\n.client_logo_inner {\n  width: 100%;\n  height: 100%;\n  display: table-cell;\n  vertical-align: middle;\n}\n.client_logo img {\n  width: 80%;\n  margin-top: 0px;\n}\n.sslczPayBtn {\n  position: relative;\n  background: #3498db;\n  border: 0 none;\n  color: #fff;\n  padding: 8px 20px 8px 70px;\n  border-radius: 4px;\n  height: 42px;\n  cursor: pointer;\n  text-transform: uppercase;\n  font-size: 13px;\n  width: 254px;\n  outline: 0;\n  overflow: hidden;\n}\n.sslczPayBtn:active,\n.sslczPayBtn:focus,\n.sslczPayBtn:visited,\n.sslczPayBtn:hover {\n  outline: 0;\n  box-shadow: none;\n}\n.sslczPayBtn:before {\n  content: \'\';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 42px;\n  height: 100%;\n  background: #2a5da8 url(https://securepay.sslcommerz.com/stores/logos/z.png) no-repeat 90% 50%;\n  background-size: 70%;\n  border-radius: 4px 0px 0px 4px;\n  z-index: 9;\n}\n.sslczPayBtn:after {\n  content: \'\';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 54px;\n  height: 100%;\n  background: #2a5da8;\n  border-radius: 4px 0px 0px 4px;\n  -ms-transform: skewX(-20deg);\n  -webkit-transform: skewX(-20deg);\n  transform: skewX(-25deg);\n}\n.client_logo img {\n  width: 92%;\n}\n';
        }),
        (function (e, t) {
            "use strict";
            "object" == typeof module && "object" == typeof module.exports
                ? (module.exports = e.document
                      ? t(e, !0)
                      : function (e) {
                            if (!e.document) throw new Error("jQuery requires a window with a document");
                            return t(e);
                        })
                : t(e);
        })("undefined" != typeof window ? window : this, function (e, t) {
            function o(e, t, n) {
                t = t || se;
                var o,
                    r = t.createElement("script");
                if (((r.text = e), n)) for (o in ve) n[o] && (r[o] = n[o]);
                t.head.appendChild(r).parentNode.removeChild(r);
            }
            function r(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? fe[me.call(e)] || "object" : typeof e;
            }
            function i(e) {
                var t = !!e && "length" in e && e.length,
                    n = r(e);
                return !Te(e) && !ye(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
            }
            function a(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }
            function s(e, t, n) {
                return Te(t)
                    ? Se.grep(e, function (e, o) {
                          return !!t.call(e, o, e) !== n;
                      })
                    : t.nodeType
                    ? Se.grep(e, function (e) {
                          return (e === t) !== n;
                      })
                    : "string" != typeof t
                    ? Se.grep(e, function (e) {
                          return pe.call(t, e) > -1 !== n;
                      })
                    : Se.filter(t, e, n);
            }
            function l(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; );
                return e;
            }
            function c(e) {
                var t = {};
                return (
                    Se.each(e.match(De) || [], function (e, n) {
                        t[n] = !0;
                    }),
                    t
                );
            }
            function u(e) {
                return e;
            }
            function d(e) {
                throw e;
            }
            function p(e, t, n, o) {
                var r;
                try {
                    e && Te((r = e.promise)) ? r.call(e).done(t).fail(n) : e && Te((r = e.then)) ? r.call(e, t, n) : t.apply(void 0, [e].slice(o));
                } catch (e) {
                    n.apply(void 0, [e]);
                }
            }
            function f() {
                se.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), Se.ready();
            }
            function m(e, t) {
                return t.toUpperCase();
            }
            function h(e) {
                return e.replace(Ne, "ms-").replace(Ve, m);
            }
            function b() {
                this.expando = Se.expando + b.uid++;
            }
            function g(e) {
                return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : je.test(e) ? JSON.parse(e) : e));
            }
            function w(e, t, n) {
                var o;
                if (void 0 === n && 1 === e.nodeType)
                    if (((o = "data-" + t.replace(_e, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(o)))) {
                        try {
                            n = g(n);
                        } catch (e) {}
                        Xe.set(e, t, n);
                    } else n = void 0;
                return n;
            }
            function T(e, t, n, o) {
                var r,
                    i,
                    a = 20,
                    s = o
                        ? function () {
                              return o.cur();
                          }
                        : function () {
                              return Se.css(e, t, "");
                          },
                    l = s(),
                    c = (n && n[3]) || (Se.cssNumber[t] ? "" : "px"),
                    u = (Se.cssNumber[t] || ("px" !== c && +l)) && ze.exec(Se.css(e, t));
                if (u && u[3] !== c) {
                    for (l /= 2, c = c || u[3], u = +l || 1; a--; ) Se.style(e, t, u + c), (1 - i) * (1 - (i = s() / l || 0.5)) <= 0 && (a = 0), (u /= i);
                    (u *= 2), Se.style(e, t, u + c), (n = n || []);
                }
                return n && ((u = +u || +l || 0), (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), o && ((o.unit = c), (o.start = u), (o.end = r))), r;
            }
            function y(e) {
                var t,
                    n = e.ownerDocument,
                    o = e.nodeName,
                    r = Qe[o];
                return r || ((t = n.body.appendChild(n.createElement(o))), (r = Se.css(t, "display")), t.parentNode.removeChild(t), "none" === r && (r = "block"), (Qe[o] = r), r);
            }
            function v(e, t) {
                for (var n, o, r = [], i = 0, a = e.length; i < a; i++)
                    (o = e[i]),
                        o.style &&
                            ((n = o.style.display),
                            t ? ("none" === n && ((r[i] = Fe.get(o, "display") || null), r[i] || (o.style.display = "")), "" === o.style.display && Ue(o) && (r[i] = y(o))) : "none" !== n && ((r[i] = "none"), Fe.set(o, "display", n)));
                for (i = 0; i < a; i++) null != r[i] && (e[i].style.display = r[i]);
                return e;
            }
            function S(e, t) {
                var n;
                return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && a(e, t)) ? Se.merge([e], n) : n;
            }
            function x(e, t) {
                for (var n = 0, o = e.length; n < o; n++) Fe.set(e[n], "globalEval", !t || Fe.get(t[n], "globalEval"));
            }
            function A(e, t, n, o, i) {
                for (var a, s, l, c, u, d, p = t.createDocumentFragment(), f = [], m = 0, h = e.length; m < h; m++)
                    if ((a = e[m]) || 0 === a)
                        if ("object" === r(a)) Se.merge(f, a.nodeType ? [a] : a);
                        else if (et.test(a)) {
                            for (s = s || p.appendChild(t.createElement("div")), l = (Ye.exec(a) || ["", ""])[1].toLowerCase(), c = Je[l] || Je._default, s.innerHTML = c[1] + Se.htmlPrefilter(a) + c[2], d = c[0]; d--; ) s = s.lastChild;
                            Se.merge(f, s.childNodes), (s = p.firstChild), (s.textContent = "");
                        } else f.push(t.createTextNode(a));
                for (p.textContent = "", m = 0; (a = f[m++]); )
                    if (o && Se.inArray(a, o) > -1) i && i.push(a);
                    else if (((u = Se.contains(a.ownerDocument, a)), (s = S(p.appendChild(a), "script")), u && x(s), n)) for (d = 0; (a = s[d++]); ) Ze.test(a.type || "") && n.push(a);
                return p;
            }
            function P() {
                return !0;
            }
            function C() {
                return !1;
            }
            function M() {
                try {
                    return se.activeElement;
                } catch (e) {}
            }
            function k(e, t, n, o, r, i) {
                var a, s;
                if ("object" == typeof t) {
                    "string" != typeof n && ((o = o || n), (n = void 0));
                    for (s in t) k(e, s, n, o, t[s], i);
                    return e;
                }
                if ((null == o && null == r ? ((r = n), (o = n = void 0)) : null == r && ("string" == typeof n ? ((r = o), (o = void 0)) : ((r = o), (o = n), (n = void 0))), !1 === r)) r = C;
                else if (!r) return e;
                return (
                    1 === i &&
                        ((a = r),
                        (r = function (e) {
                            return Se().off(e), a.apply(this, arguments);
                        }),
                        (r.guid = a.guid || (a.guid = Se.guid++))),
                    e.each(function () {
                        Se.event.add(this, t, r, o, n);
                    })
                );
            }
            function G(e, t) {
                return a(e, "table") && a(11 !== t.nodeType ? t : t.firstChild, "tr") ? Se(e).children("tbody")[0] || e : e;
            }
            function B(e) {
                return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
            }
            function E(e) {
                return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
            }
            function H(e, t) {
                var n, o, r, i, a, s, l, c;
                if (1 === t.nodeType) {
                    if (Fe.hasData(e) && ((i = Fe.access(e)), (a = Fe.set(t, i)), (c = i.events))) {
                        delete a.handle, (a.events = {});
                        for (r in c) for (n = 0, o = c[r].length; n < o; n++) Se.event.add(t, r, c[r][n]);
                    }
                    Xe.hasData(e) && ((s = Xe.access(e)), (l = Se.extend({}, s)), Xe.set(t, l));
                }
            }
            function D(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && $e.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
            }
            function L(e, t, n, r) {
                t = ue.apply([], t);
                var i,
                    a,
                    s,
                    l,
                    c,
                    u,
                    d = 0,
                    p = e.length,
                    f = p - 1,
                    m = t[0],
                    h = Te(m);
                if (h || (p > 1 && "string" == typeof m && !we.checkClone && st.test(m)))
                    return e.each(function (o) {
                        var i = e.eq(o);
                        h && (t[0] = m.call(this, o, i.html())), L(i, t, n, r);
                    });
                if (p && ((i = A(t, e[0].ownerDocument, !1, e, r)), (a = i.firstChild), 1 === i.childNodes.length && (i = a), a || r)) {
                    for (s = Se.map(S(i, "script"), B), l = s.length; d < p; d++) (c = i), d !== f && ((c = Se.clone(c, !0, !0)), l && Se.merge(s, S(c, "script"))), n.call(e[d], c, d);
                    if (l)
                        for (u = s[s.length - 1].ownerDocument, Se.map(s, E), d = 0; d < l; d++)
                            (c = s[d]),
                                Ze.test(c.type || "") && !Fe.access(c, "globalEval") && Se.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? Se._evalUrl && Se._evalUrl(c.src) : o(c.textContent.replace(lt, ""), u, c));
                }
                return e;
            }
            function I(e, t, n) {
                for (var o, r = t ? Se.filter(t, e) : e, i = 0; null != (o = r[i]); i++) n || 1 !== o.nodeType || Se.cleanData(S(o)), o.parentNode && (n && Se.contains(o.ownerDocument, o) && x(S(o, "script")), o.parentNode.removeChild(o));
                return e;
            }
            function O(e, t, n) {
                var o,
                    r,
                    i,
                    a,
                    s = e.style;
                return (
                    (n = n || ut(e)),
                    n &&
                        ((a = n.getPropertyValue(t) || n[t]),
                        "" !== a || Se.contains(e.ownerDocument, e) || (a = Se.style(e, t)),
                        !we.pixelBoxStyles() && ct.test(a) && dt.test(t) && ((o = s.width), (r = s.minWidth), (i = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = o), (s.minWidth = r), (s.maxWidth = i))),
                    void 0 !== a ? a + "" : a
                );
            }
            function N(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
                    },
                };
            }
            function V(e) {
                if (e in gt) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = bt.length; n--; ) if ((e = bt[n] + t) in gt) return e;
            }
            function R(e) {
                var t = Se.cssProps[e];
                return t || (t = Se.cssProps[e] = V(e) || e), t;
            }
            function F(e, t, n) {
                var o = ze.exec(t);
                return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t;
            }
            function X(e, t, n, o, r, i) {
                var a = "width" === t ? 1 : 0,
                    s = 0,
                    l = 0;
                if (n === (o ? "border" : "content")) return 0;
                for (; a < 4; a += 2)
                    "margin" === n && (l += Se.css(e, n + qe[a], !0, r)),
                        o
                            ? ("content" === n && (l -= Se.css(e, "padding" + qe[a], !0, r)), "margin" !== n && (l -= Se.css(e, "border" + qe[a] + "Width", !0, r)))
                            : ((l += Se.css(e, "padding" + qe[a], !0, r)), "padding" !== n ? (l += Se.css(e, "border" + qe[a] + "Width", !0, r)) : (s += Se.css(e, "border" + qe[a] + "Width", !0, r)));
                return !o && i >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - l - s - 0.5))), l;
            }
            function j(e, t, n) {
                var o = ut(e),
                    r = O(e, t, o),
                    i = "border-box" === Se.css(e, "boxSizing", !1, o),
                    a = i;
                if (ct.test(r)) {
                    if (!n) return r;
                    r = "auto";
                }
                return (
                    (a = a && (we.boxSizingReliable() || r === e.style[t])),
                    ("auto" === r || (!parseFloat(r) && "inline" === Se.css(e, "display", !1, o))) && ((r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
                    (r = parseFloat(r) || 0) + X(e, t, n || (i ? "border" : "content"), a, o, r) + "px"
                );
            }
            function _(e, t, n, o, r) {
                return new _.prototype.init(e, t, n, o, r);
            }
            function W() {
                Tt && (!1 === se.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(W) : e.setTimeout(W, Se.fx.interval), Se.fx.tick());
            }
            function z() {
                return (
                    e.setTimeout(function () {
                        wt = void 0;
                    }),
                    (wt = Date.now())
                );
            }
            function q(e, t) {
                var n,
                    o = 0,
                    r = { height: e };
                for (t = t ? 1 : 0; o < 4; o += 2 - t) (n = qe[o]), (r["margin" + n] = r["padding" + n] = e);
                return t && (r.opacity = r.width = e), r;
            }
            function U(e, t, n) {
                for (var o, r = ($.tweeners[t] || []).concat($.tweeners["*"]), i = 0, a = r.length; i < a; i++) if ((o = r[i].call(n, t, e))) return o;
            }
            function K(e, t, n) {
                var o,
                    r,
                    i,
                    a,
                    s,
                    l,
                    c,
                    u,
                    d = "width" in t || "height" in t,
                    p = this,
                    f = {},
                    m = e.style,
                    h = e.nodeType && Ue(e),
                    b = Fe.get(e, "fxshow");
                n.queue ||
                    ((a = Se._queueHooks(e, "fx")),
                    null == a.unqueued &&
                        ((a.unqueued = 0),
                        (s = a.empty.fire),
                        (a.empty.fire = function () {
                            a.unqueued || s();
                        })),
                    a.unqueued++,
                    p.always(function () {
                        p.always(function () {
                            a.unqueued--, Se.queue(e, "fx").length || a.empty.fire();
                        });
                    }));
                for (o in t)
                    if (((r = t[o]), yt.test(r))) {
                        if ((delete t[o], (i = i || "toggle" === r), r === (h ? "hide" : "show"))) {
                            if ("show" !== r || !b || void 0 === b[o]) continue;
                            h = !0;
                        }
                        f[o] = (b && b[o]) || Se.style(e, o);
                    }
                if ((l = !Se.isEmptyObject(t)) || !Se.isEmptyObject(f)) {
                    d &&
                        1 === e.nodeType &&
                        ((n.overflow = [m.overflow, m.overflowX, m.overflowY]),
                        (c = b && b.display),
                        null == c && (c = Fe.get(e, "display")),
                        (u = Se.css(e, "display")),
                        "none" === u && (c ? (u = c) : (v([e], !0), (c = e.style.display || c), (u = Se.css(e, "display")), v([e]))),
                        ("inline" === u || ("inline-block" === u && null != c)) &&
                            "none" === Se.css(e, "float") &&
                            (l ||
                                (p.done(function () {
                                    m.display = c;
                                }),
                                null == c && ((u = m.display), (c = "none" === u ? "" : u))),
                            (m.display = "inline-block"))),
                        n.overflow &&
                            ((m.overflow = "hidden"),
                            p.always(function () {
                                (m.overflow = n.overflow[0]), (m.overflowX = n.overflow[1]), (m.overflowY = n.overflow[2]);
                            })),
                        (l = !1);
                    for (o in f)
                        l ||
                            (b ? "hidden" in b && (h = b.hidden) : (b = Fe.access(e, "fxshow", { display: c })),
                            i && (b.hidden = !h),
                            h && v([e], !0),
                            p.done(function () {
                                h || v([e]), Fe.remove(e, "fxshow");
                                for (o in f) Se.style(e, o, f[o]);
                            })),
                            (l = U(h ? b[o] : 0, o, p)),
                            o in b || ((b[o] = l.start), h && ((l.end = l.start), (l.start = 0)));
                }
            }
            function Q(e, t) {
                var n, o, r, i, a;
                for (n in e)
                    if (((o = h(n)), (r = t[o]), (i = e[n]), Array.isArray(i) && ((r = i[1]), (i = e[n] = i[0])), n !== o && ((e[o] = i), delete e[n]), (a = Se.cssHooks[o]) && "expand" in a)) {
                        (i = a.expand(i)), delete e[o];
                        for (n in i) n in e || ((e[n] = i[n]), (t[n] = r));
                    } else t[o] = r;
            }
            function $(e, t, n) {
                var o,
                    r,
                    i = 0,
                    a = $.prefilters.length,
                    s = Se.Deferred().always(function () {
                        delete l.elem;
                    }),
                    l = function () {
                        if (r) return !1;
                        for (var t = wt || z(), n = Math.max(0, c.startTime + c.duration - t), o = n / c.duration || 0, i = 1 - o, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(i);
                        return s.notifyWith(e, [c, i, n]), i < 1 && l ? n : (l || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1);
                    },
                    c = s.promise({
                        elem: e,
                        props: Se.extend({}, t),
                        opts: Se.extend(!0, { specialEasing: {}, easing: Se.easing._default }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: wt || z(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (t, n) {
                            var o = Se.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(o), o;
                        },
                        stop: function (t) {
                            var n = 0,
                                o = t ? c.tweens.length : 0;
                            if (r) return this;
                            for (r = !0; n < o; n++) c.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this;
                        },
                    }),
                    u = c.props;
                for (Q(u, c.opts.specialEasing); i < a; i++) if ((o = $.prefilters[i].call(c, e, u, c.opts))) return Te(o.stop) && (Se._queueHooks(c.elem, c.opts.queue).stop = o.stop.bind(o)), o;
                return (
                    Se.map(u, U, c),
                    Te(c.opts.start) && c.opts.start.call(e, c),
                    c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
                    Se.fx.timer(Se.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
                    c
                );
            }
            function Y(e) {
                return (e.match(De) || []).join(" ");
            }
            function Z(e) {
                return (e.getAttribute && e.getAttribute("class")) || "";
            }
            function J(e) {
                return Array.isArray(e) ? e : "string" == typeof e ? e.match(De) || [] : [];
            }
            function ee(e, t, n, o) {
                var i;
                if (Array.isArray(t))
                    Se.each(t, function (t, r) {
                        n || Ht.test(e) ? o(e, r) : ee(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, o);
                    });
                else if (n || "object" !== r(t)) o(e, t);
                else for (i in t) ee(e + "[" + i + "]", t[i], n, o);
            }
            function te(e) {
                return function (t, n) {
                    "string" != typeof t && ((n = t), (t = "*"));
                    var o,
                        r = 0,
                        i = t.toLowerCase().match(De) || [];
                    if (Te(n)) for (; (o = i[r++]); ) "+" === o[0] ? ((o = o.slice(1) || "*"), (e[o] = e[o] || []).unshift(n)) : (e[o] = e[o] || []).push(n);
                };
            }
            function ne(e, t, n, o) {
                function r(s) {
                    var l;
                    return (
                        (i[s] = !0),
                        Se.each(e[s] || [], function (e, s) {
                            var c = s(t, n, o);
                            return "string" != typeof c || a || i[c] ? (a ? !(l = c) : void 0) : (t.dataTypes.unshift(c), r(c), !1);
                        }),
                        l
                    );
                }
                var i = {},
                    a = e === Wt;
                return r(t.dataTypes[0]) || (!i["*"] && r("*"));
            }
            function oe(e, t) {
                var n,
                    o,
                    r = Se.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((r[n] ? e : o || (o = {}))[n] = t[n]);
                return o && Se.extend(!0, e, o), e;
            }
            function re(e, t, n) {
                for (var o, r, i, a, s = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                if (o)
                    for (r in s)
                        if (s[r] && s[r].test(o)) {
                            l.unshift(r);
                            break;
                        }
                if (l[0] in n) i = l[0];
                else {
                    for (r in n) {
                        if (!l[0] || e.converters[r + " " + l[0]]) {
                            i = r;
                            break;
                        }
                        a || (a = r);
                    }
                    i = i || a;
                }
                if (i) return i !== l[0] && l.unshift(i), n[i];
            }
            function ie(e, t, n, o) {
                var r,
                    i,
                    a,
                    s,
                    l,
                    c = {},
                    u = e.dataTypes.slice();
                if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                for (i = u.shift(); i; )
                    if ((e.responseFields[i] && (n[e.responseFields[i]] = t), !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = i), (i = u.shift())))
                        if ("*" === i) i = l;
                        else if ("*" !== l && l !== i) {
                            if (!(a = c[l + " " + i] || c["* " + i]))
                                for (r in c)
                                    if (((s = r.split(" ")), s[1] === i && (a = c[l + " " + s[0]] || c["* " + s[0]]))) {
                                        !0 === a ? (a = c[r]) : !0 !== c[r] && ((i = s[0]), u.unshift(s[1]));
                                        break;
                                    }
                            if (!0 !== a)
                                if (a && e.throws) t = a(t);
                                else
                                    try {
                                        t = a(t);
                                    } catch (e) {
                                        return { state: "parsererror", error: a ? e : "No conversion from " + l + " to " + i };
                                    }
                        }
                return { state: "success", data: t };
            }
            var ae = [],
                se = e.document,
                le = Object.getPrototypeOf,
                ce = ae.slice,
                ue = ae.concat,
                de = ae.push,
                pe = ae.indexOf,
                fe = {},
                me = fe.toString,
                he = fe.hasOwnProperty,
                be = he.toString,
                ge = be.call(Object),
                we = {},
                Te = function (e) {
                    return "function" == typeof e && "number" != typeof e.nodeType;
                },
                ye = function (e) {
                    return null != e && e === e.window;
                },
                ve = { type: !0, src: !0, noModule: !0 },
                Se = function (e, t) {
                    return new Se.fn.init(e, t);
                },
                xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            (Se.fn = Se.prototype = {
                jquery: "3.3.1",
                constructor: Se,
                length: 0,
                toArray: function () {
                    return ce.call(this);
                },
                get: function (e) {
                    return null == e ? ce.call(this) : e < 0 ? this[e + this.length] : this[e];
                },
                pushStack: function (e) {
                    var t = Se.merge(this.constructor(), e);
                    return (t.prevObject = this), t;
                },
                each: function (e) {
                    return Se.each(this, e);
                },
                map: function (e) {
                    return this.pushStack(
                        Se.map(this, function (t, n) {
                            return e.call(t, n, t);
                        })
                    );
                },
                slice: function () {
                    return this.pushStack(ce.apply(this, arguments));
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                eq: function (e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                },
                end: function () {
                    return this.prevObject || this.constructor();
                },
                push: de,
                sort: ae.sort,
                splice: ae.splice,
            }),
                (Se.extend = Se.fn.extend = function () {
                    var e,
                        t,
                        n,
                        o,
                        r,
                        i,
                        a = arguments[0] || {},
                        s = 1,
                        l = arguments.length,
                        c = !1;
                    for ("boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++), "object" == typeof a || Te(a) || (a = {}), s === l && ((a = this), s--); s < l; s++)
                        if (null != (e = arguments[s]))
                            for (t in e)
                                (n = a[t]),
                                    (o = e[t]),
                                    a !== o &&
                                        (c && o && (Se.isPlainObject(o) || (r = Array.isArray(o)))
                                            ? (r ? ((r = !1), (i = n && Array.isArray(n) ? n : [])) : (i = n && Se.isPlainObject(n) ? n : {}), (a[t] = Se.extend(c, i, o)))
                                            : void 0 !== o && (a[t] = o));
                    return a;
                }),
                Se.extend({
                    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (e) {
                        throw new Error(e);
                    },
                    noop: function () {},
                    isPlainObject: function (e) {
                        var t, n;
                        return !(!e || "[object Object]" !== me.call(e)) && (!(t = le(e)) || ("function" == typeof (n = he.call(t, "constructor") && t.constructor) && be.call(n) === ge));
                    },
                    isEmptyObject: function (e) {
                        var t;
                        for (t in e) return !1;
                        return !0;
                    },
                    globalEval: function (e) {
                        o(e);
                    },
                    each: function (e, t) {
                        var n,
                            o = 0;
                        if (i(e)) for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
                        else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
                        return e;
                    },
                    trim: function (e) {
                        return null == e ? "" : (e + "").replace(xe, "");
                    },
                    makeArray: function (e, t) {
                        var n = t || [];
                        return null != e && (i(Object(e)) ? Se.merge(n, "string" == typeof e ? [e] : e) : de.call(n, e)), n;
                    },
                    inArray: function (e, t, n) {
                        return null == t ? -1 : pe.call(t, e, n);
                    },
                    merge: function (e, t) {
                        for (var n = +t.length, o = 0, r = e.length; o < n; o++) e[r++] = t[o];
                        return (e.length = r), e;
                    },
                    grep: function (e, t, n) {
                        for (var o = [], r = 0, i = e.length, a = !n; r < i; r++) !t(e[r], r) !== a && o.push(e[r]);
                        return o;
                    },
                    map: function (e, t, n) {
                        var o,
                            r,
                            a = 0,
                            s = [];
                        if (i(e)) for (o = e.length; a < o; a++) null != (r = t(e[a], a, n)) && s.push(r);
                        else for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
                        return ue.apply([], s);
                    },
                    guid: 1,
                    support: we,
                }),
                "function" == typeof Symbol && (Se.fn[Symbol.iterator] = ae[Symbol.iterator]),
                Se.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                    fe["[object " + t + "]"] = t.toLowerCase();
                });
            var Ae = (function (e) {
                function t(e, t, n, o) {
                    var r,
                        i,
                        a,
                        s,
                        l,
                        u,
                        p,
                        f = t && t.ownerDocument,
                        m = t ? t.nodeType : 9;
                    if (((n = n || []), "string" != typeof e || !e || (1 !== m && 9 !== m && 11 !== m))) return n;
                    if (!o && ((t ? t.ownerDocument || t : R) !== E && B(t), (t = t || E), D)) {
                        if (11 !== m && (l = he.exec(e)))
                            if ((r = l[1])) {
                                if (9 === m) {
                                    if (!(a = t.getElementById(r))) return n;
                                    if (a.id === r) return n.push(a), n;
                                } else if (f && (a = f.getElementById(r)) && N(t, a) && a.id === r) return n.push(a), n;
                            } else {
                                if (l[2]) return $.apply(n, t.getElementsByTagName(e)), n;
                                if ((r = l[3]) && y.getElementsByClassName && t.getElementsByClassName) return $.apply(n, t.getElementsByClassName(r)), n;
                            }
                        if (y.qsa && !W[e + " "] && (!L || !L.test(e))) {
                            if (1 !== m) (f = t), (p = e);
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((s = t.getAttribute("id")) ? (s = s.replace(Te, ye)) : t.setAttribute("id", (s = V)), u = A(e), i = u.length; i--; ) u[i] = "#" + s + " " + d(u[i]);
                                (p = u.join(",")), (f = (be.test(e) && c(t.parentNode)) || t);
                            }
                            if (p)
                                try {
                                    return $.apply(n, f.querySelectorAll(p)), n;
                                } catch (e) {
                                } finally {
                                    s === V && t.removeAttribute("id");
                                }
                        }
                    }
                    return C(e.replace(ie, "$1"), t, n, o);
                }
                function n() {
                    function e(n, o) {
                        return t.push(n + " ") > v.cacheLength && delete e[t.shift()], (e[n + " "] = o);
                    }
                    var t = [];
                    return e;
                }
                function o(e) {
                    return (e[V] = !0), e;
                }
                function r(e) {
                    var t = E.createElement("fieldset");
                    try {
                        return !!e(t);
                    } catch (e) {
                        return !1;
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), (t = null);
                    }
                }
                function i(e, t) {
                    for (var n = e.split("|"), o = n.length; o--; ) v.attrHandle[n[o]] = t;
                }
                function a(e, t) {
                    var n = t && e,
                        o = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (o) return o;
                    if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                    return e ? 1 : -1;
                }
                function s(e) {
                    return function (t) {
                        return "form" in t
                            ? t.parentNode && !1 === t.disabled
                                ? "label" in t
                                    ? "label" in t.parentNode
                                        ? t.parentNode.disabled === e
                                        : t.disabled === e
                                    : t.isDisabled === e || (t.isDisabled !== !e && Se(t) === e)
                                : t.disabled === e
                            : "label" in t && t.disabled === e;
                    };
                }
                function l(e) {
                    return o(function (t) {
                        return (
                            (t = +t),
                            o(function (n, o) {
                                for (var r, i = e([], n.length, t), a = i.length; a--; ) n[(r = i[a])] && (n[r] = !(o[r] = n[r]));
                            })
                        );
                    });
                }
                function c(e) {
                    return e && void 0 !== e.getElementsByTagName && e;
                }
                function u() {}
                function d(e) {
                    for (var t = 0, n = e.length, o = ""; t < n; t++) o += e[t].value;
                    return o;
                }
                function p(e, t, n) {
                    var o = t.dir,
                        r = t.next,
                        i = r || o,
                        a = n && "parentNode" === i,
                        s = X++;
                    return t.first
                        ? function (t, n, r) {
                              for (; (t = t[o]); ) if (1 === t.nodeType || a) return e(t, n, r);
                              return !1;
                          }
                        : function (t, n, l) {
                              var c,
                                  u,
                                  d,
                                  p = [F, s];
                              if (l) {
                                  for (; (t = t[o]); ) if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
                              } else
                                  for (; (t = t[o]); )
                                      if (1 === t.nodeType || a)
                                          if (((d = t[V] || (t[V] = {})), (u = d[t.uniqueID] || (d[t.uniqueID] = {})), r && r === t.nodeName.toLowerCase())) t = t[o] || t;
                                          else {
                                              if ((c = u[i]) && c[0] === F && c[1] === s) return (p[2] = c[2]);
                                              if (((u[i] = p), (p[2] = e(t, n, l)))) return !0;
                                          }
                              return !1;
                          };
                }
                function f(e) {
                    return e.length > 1
                        ? function (t, n, o) {
                              for (var r = e.length; r--; ) if (!e[r](t, n, o)) return !1;
                              return !0;
                          }
                        : e[0];
                }
                function m(e, n, o) {
                    for (var r = 0, i = n.length; r < i; r++) t(e, n[r], o);
                    return o;
                }
                function h(e, t, n, o, r) {
                    for (var i, a = [], s = 0, l = e.length, c = null != t; s < l; s++) (i = e[s]) && ((n && !n(i, o, r)) || (a.push(i), c && t.push(s)));
                    return a;
                }
                function b(e, t, n, r, i, a) {
                    return (
                        r && !r[V] && (r = b(r)),
                        i && !i[V] && (i = b(i, a)),
                        o(function (o, a, s, l) {
                            var c,
                                u,
                                d,
                                p = [],
                                f = [],
                                b = a.length,
                                g = o || m(t || "*", s.nodeType ? [s] : s, []),
                                w = !e || (!o && t) ? g : h(g, p, e, s, l),
                                T = n ? (i || (o ? e : b || r) ? [] : a) : w;
                            if ((n && n(w, T, s, l), r)) for (c = h(T, f), r(c, [], s, l), u = c.length; u--; ) (d = c[u]) && (T[f[u]] = !(w[f[u]] = d));
                            if (o) {
                                if (i || e) {
                                    if (i) {
                                        for (c = [], u = T.length; u--; ) (d = T[u]) && c.push((w[u] = d));
                                        i(null, (T = []), c, l);
                                    }
                                    for (u = T.length; u--; ) (d = T[u]) && (c = i ? Z(o, d) : p[u]) > -1 && (o[c] = !(a[c] = d));
                                }
                            } else (T = h(T === a ? T.splice(b, T.length) : T)), i ? i(null, a, T, l) : $.apply(a, T);
                        })
                    );
                }
                function g(e) {
                    for (
                        var t,
                            n,
                            o,
                            r = e.length,
                            i = v.relative[e[0].type],
                            a = i || v.relative[" "],
                            s = i ? 1 : 0,
                            l = p(
                                function (e) {
                                    return e === t;
                                },
                                a,
                                !0
                            ),
                            c = p(
                                function (e) {
                                    return Z(t, e) > -1;
                                },
                                a,
                                !0
                            ),
                            u = [
                                function (e, n, o) {
                                    var r = (!i && (o || n !== M)) || ((t = n).nodeType ? l(e, n, o) : c(e, n, o));
                                    return (t = null), r;
                                },
                            ];
                        s < r;
                        s++
                    )
                        if ((n = v.relative[e[s].type])) u = [p(f(u), n)];
                        else {
                            if (((n = v.filter[e[s].type].apply(null, e[s].matches)), n[V])) {
                                for (o = ++s; o < r && !v.relative[e[o].type]; o++);
                                return b(s > 1 && f(u), s > 1 && d(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(ie, "$1"), n, s < o && g(e.slice(s, o)), o < r && g((e = e.slice(o))), o < r && d(e));
                            }
                            u.push(n);
                        }
                    return f(u);
                }
                function w(e, n) {
                    var r = n.length > 0,
                        i = e.length > 0,
                        a = function (o, a, s, l, c) {
                            var u,
                                d,
                                p,
                                f = 0,
                                m = "0",
                                b = o && [],
                                g = [],
                                w = M,
                                T = o || (i && v.find.TAG("*", c)),
                                y = (F += null == w ? 1 : Math.random() || 0.1),
                                S = T.length;
                            for (c && (M = a === E || a || c); m !== S && null != (u = T[m]); m++) {
                                if (i && u) {
                                    for (d = 0, a || u.ownerDocument === E || (B(u), (s = !D)); (p = e[d++]); )
                                        if (p(u, a || E, s)) {
                                            l.push(u);
                                            break;
                                        }
                                    c && (F = y);
                                }
                                r && ((u = !p && u) && f--, o && b.push(u));
                            }
                            if (((f += m), r && m !== f)) {
                                for (d = 0; (p = n[d++]); ) p(b, g, a, s);
                                if (o) {
                                    if (f > 0) for (; m--; ) b[m] || g[m] || (g[m] = K.call(l));
                                    g = h(g);
                                }
                                $.apply(l, g), c && !o && g.length > 0 && f + n.length > 1 && t.uniqueSort(l);
                            }
                            return c && ((F = y), (M = w)), b;
                        };
                    return r ? o(a) : a;
                }
                var T,
                    y,
                    v,
                    S,
                    x,
                    A,
                    P,
                    C,
                    M,
                    k,
                    G,
                    B,
                    E,
                    H,
                    D,
                    L,
                    I,
                    O,
                    N,
                    V = "sizzle" + 1 * new Date(),
                    R = e.document,
                    F = 0,
                    X = 0,
                    j = n(),
                    _ = n(),
                    W = n(),
                    z = function (e, t) {
                        return e === t && (G = !0), 0;
                    },
                    q = {}.hasOwnProperty,
                    U = [],
                    K = U.pop,
                    Q = U.push,
                    $ = U.push,
                    Y = U.slice,
                    Z = function (e, t) {
                        for (var n = 0, o = e.length; n < o; n++) if (e[n] === t) return n;
                        return -1;
                    },
                    J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ee = "[\\x20\\t\\r\\n\\f]",
                    te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
                    oe = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
                    re = new RegExp(ee + "+", "g"),
                    ie = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                    ae = new RegExp("^" + ee + "*," + ee + "*"),
                    se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                    le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
                    ce = new RegExp(oe),
                    ue = new RegExp("^" + te + "$"),
                    de = {
                        ID: new RegExp("^#(" + te + ")"),
                        CLASS: new RegExp("^\\.(" + te + ")"),
                        TAG: new RegExp("^(" + te + "|[*])"),
                        ATTR: new RegExp("^" + ne),
                        PSEUDO: new RegExp("^" + oe),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + J + ")$", "i"),
                        needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i"),
                    },
                    pe = /^(?:input|select|textarea|button)$/i,
                    fe = /^h\d$/i,
                    me = /^[^{]+\{\s*\[native \w/,
                    he = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    be = /[+~]/,
                    ge = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
                    we = function (e, t, n) {
                        var o = "0x" + t - 65536;
                        return o !== o || n ? t : o < 0 ? String.fromCharCode(o + 65536) : String.fromCharCode((o >> 10) | 55296, (1023 & o) | 56320);
                    },
                    Te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ye = function (e, t) {
                        return t ? ("\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                    },
                    ve = function () {
                        B();
                    },
                    Se = p(
                        function (e) {
                            return !0 === e.disabled && ("form" in e || "label" in e);
                        },
                        { dir: "parentNode", next: "legend" }
                    );
                try {
                    $.apply((U = Y.call(R.childNodes)), R.childNodes), U[R.childNodes.length].nodeType;
                } catch (e) {
                    $ = {
                        apply: U.length
                            ? function (e, t) {
                                  Q.apply(e, Y.call(t));
                              }
                            : function (e, t) {
                                  for (var n = e.length, o = 0; (e[n++] = t[o++]); );
                                  e.length = n - 1;
                              },
                    };
                }
                (y = t.support = {}),
                    (x = t.isXML = function (e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !!t && "HTML" !== t.nodeName;
                    }),
                    (B = t.setDocument = function (e) {
                        var t,
                            n,
                            o = e ? e.ownerDocument || e : R;
                        return o !== E && 9 === o.nodeType && o.documentElement
                            ? ((E = o),
                              (H = E.documentElement),
                              (D = !x(E)),
                              R !== E && (n = E.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ve, !1) : n.attachEvent && n.attachEvent("onunload", ve)),
                              (y.attributes = r(function (e) {
                                  return (e.className = "i"), !e.getAttribute("className");
                              })),
                              (y.getElementsByTagName = r(function (e) {
                                  return e.appendChild(E.createComment("")), !e.getElementsByTagName("*").length;
                              })),
                              (y.getElementsByClassName = me.test(E.getElementsByClassName)),
                              (y.getById = r(function (e) {
                                  return (H.appendChild(e).id = V), !E.getElementsByName || !E.getElementsByName(V).length;
                              })),
                              y.getById
                                  ? ((v.filter.ID = function (e) {
                                        var t = e.replace(ge, we);
                                        return function (e) {
                                            return e.getAttribute("id") === t;
                                        };
                                    }),
                                    (v.find.ID = function (e, t) {
                                        if (void 0 !== t.getElementById && D) {
                                            var n = t.getElementById(e);
                                            return n ? [n] : [];
                                        }
                                    }))
                                  : ((v.filter.ID = function (e) {
                                        var t = e.replace(ge, we);
                                        return function (e) {
                                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                            return n && n.value === t;
                                        };
                                    }),
                                    (v.find.ID = function (e, t) {
                                        if (void 0 !== t.getElementById && D) {
                                            var n,
                                                o,
                                                r,
                                                i = t.getElementById(e);
                                            if (i) {
                                                if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                                for (r = t.getElementsByName(e), o = 0; (i = r[o++]); ) if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                            }
                                            return [];
                                        }
                                    })),
                              (v.find.TAG = y.getElementsByTagName
                                  ? function (e, t) {
                                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : y.qsa ? t.querySelectorAll(e) : void 0;
                                    }
                                  : function (e, t) {
                                        var n,
                                            o = [],
                                            r = 0,
                                            i = t.getElementsByTagName(e);
                                        if ("*" === e) {
                                            for (; (n = i[r++]); ) 1 === n.nodeType && o.push(n);
                                            return o;
                                        }
                                        return i;
                                    }),
                              (v.find.CLASS =
                                  y.getElementsByClassName &&
                                  function (e, t) {
                                      if (void 0 !== t.getElementsByClassName && D) return t.getElementsByClassName(e);
                                  }),
                              (I = []),
                              (L = []),
                              (y.qsa = me.test(E.querySelectorAll)) &&
                                  (r(function (e) {
                                      (H.appendChild(e).innerHTML = "<a id='" + V + "'></a><select id='" + V + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                          e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ee + "*(?:''|\"\")"),
                                          e.querySelectorAll("[selected]").length || L.push("\\[" + ee + "*(?:value|" + J + ")"),
                                          e.querySelectorAll("[id~=" + V + "-]").length || L.push("~="),
                                          e.querySelectorAll(":checked").length || L.push(":checked"),
                                          e.querySelectorAll("a#" + V + "+*").length || L.push(".#.+[+~]");
                                  }),
                                  r(function (e) {
                                      e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                      var t = E.createElement("input");
                                      t.setAttribute("type", "hidden"),
                                          e.appendChild(t).setAttribute("name", "D"),
                                          e.querySelectorAll("[name=d]").length && L.push("name" + ee + "*[*^$|!~]?="),
                                          2 !== e.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"),
                                          (H.appendChild(e).disabled = !0),
                                          2 !== e.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"),
                                          e.querySelectorAll("*,:x"),
                                          L.push(",.*:");
                                  })),
                              (y.matchesSelector = me.test((O = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector))) &&
                                  r(function (e) {
                                      (y.disconnectedMatch = O.call(e, "*")), O.call(e, "[s!='']:x"), I.push("!=", oe);
                                  }),
                              (L = L.length && new RegExp(L.join("|"))),
                              (I = I.length && new RegExp(I.join("|"))),
                              (t = me.test(H.compareDocumentPosition)),
                              (N =
                                  t || me.test(H.contains)
                                      ? function (e, t) {
                                            var n = 9 === e.nodeType ? e.documentElement : e,
                                                o = t && t.parentNode;
                                            return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)));
                                        }
                                      : function (e, t) {
                                            if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                            return !1;
                                        }),
                              (z = t
                                  ? function (e, t) {
                                        if (e === t) return (G = !0), 0;
                                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                        return (
                                            n ||
                                            ((n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1),
                                            1 & n || (!y.sortDetached && t.compareDocumentPosition(e) === n)
                                                ? e === E || (e.ownerDocument === R && N(R, e))
                                                    ? -1
                                                    : t === E || (t.ownerDocument === R && N(R, t))
                                                    ? 1
                                                    : k
                                                    ? Z(k, e) - Z(k, t)
                                                    : 0
                                                : 4 & n
                                                ? -1
                                                : 1)
                                        );
                                    }
                                  : function (e, t) {
                                        if (e === t) return (G = !0), 0;
                                        var n,
                                            o = 0,
                                            r = e.parentNode,
                                            i = t.parentNode,
                                            s = [e],
                                            l = [t];
                                        if (!r || !i) return e === E ? -1 : t === E ? 1 : r ? -1 : i ? 1 : k ? Z(k, e) - Z(k, t) : 0;
                                        if (r === i) return a(e, t);
                                        for (n = e; (n = n.parentNode); ) s.unshift(n);
                                        for (n = t; (n = n.parentNode); ) l.unshift(n);
                                        for (; s[o] === l[o]; ) o++;
                                        return o ? a(s[o], l[o]) : s[o] === R ? -1 : l[o] === R ? 1 : 0;
                                    }),
                              E)
                            : E;
                    }),
                    (t.matches = function (e, n) {
                        return t(e, null, null, n);
                    }),
                    (t.matchesSelector = function (e, n) {
                        if (((e.ownerDocument || e) !== E && B(e), (n = n.replace(le, "='$1']")), y.matchesSelector && D && !W[n + " "] && (!I || !I.test(n)) && (!L || !L.test(n))))
                            try {
                                var o = O.call(e, n);
                                if (o || y.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return o;
                            } catch (e) {}
                        return t(n, E, null, [e]).length > 0;
                    }),
                    (t.contains = function (e, t) {
                        return (e.ownerDocument || e) !== E && B(e), N(e, t);
                    }),
                    (t.attr = function (e, t) {
                        (e.ownerDocument || e) !== E && B(e);
                        var n = v.attrHandle[t.toLowerCase()],
                            o = n && q.call(v.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
                        return void 0 !== o ? o : y.attributes || !D ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
                    }),
                    (t.escape = function (e) {
                        return (e + "").replace(Te, ye);
                    }),
                    (t.error = function (e) {
                        throw new Error("Syntax error, unrecognized expression: " + e);
                    }),
                    (t.uniqueSort = function (e) {
                        var t,
                            n = [],
                            o = 0,
                            r = 0;
                        if (((G = !y.detectDuplicates), (k = !y.sortStable && e.slice(0)), e.sort(z), G)) {
                            for (; (t = e[r++]); ) t === e[r] && (o = n.push(r));
                            for (; o--; ) e.splice(n[o], 1);
                        }
                        return (k = null), e;
                    }),
                    (S = t.getText = function (e) {
                        var t,
                            n = "",
                            o = 0,
                            r = e.nodeType;
                        if (r) {
                            if (1 === r || 9 === r || 11 === r) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += S(e);
                            } else if (3 === r || 4 === r) return e.nodeValue;
                        } else for (; (t = e[o++]); ) n += S(t);
                        return n;
                    }),
                    (v = t.selectors = {
                        cacheLength: 50,
                        createPseudo: o,
                        match: de,
                        attrHandle: {},
                        find: {},
                        relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                        preFilter: {
                            ATTR: function (e) {
                                return (e[1] = e[1].replace(ge, we)), (e[3] = (e[3] || e[4] || e[5] || "").replace(ge, we)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                            },
                            CHILD: function (e) {
                                return (
                                    (e[1] = e[1].toLowerCase()),
                                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && t.error(e[0]),
                                    e
                                );
                            },
                            PSEUDO: function (e) {
                                var t,
                                    n = !e[6] && e[2];
                                return de.CHILD.test(e[0])
                                    ? null
                                    : (e[3] ? (e[2] = e[4] || e[5] || "") : n && ce.test(n) && (t = A(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                            },
                        },
                        filter: {
                            TAG: function (e) {
                                var t = e.replace(ge, we).toLowerCase();
                                return "*" === e
                                    ? function () {
                                          return !0;
                                      }
                                    : function (e) {
                                          return e.nodeName && e.nodeName.toLowerCase() === t;
                                      };
                            },
                            CLASS: function (e) {
                                var t = j[e + " "];
                                return (
                                    t ||
                                    ((t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) &&
                                        j(e, function (e) {
                                            return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                        }))
                                );
                            },
                            ATTR: function (e, n, o) {
                                return function (r) {
                                    var i = t.attr(r, e);
                                    return null == i
                                        ? "!=" === n
                                        : !n ||
                                              ((i += ""),
                                              "=" === n
                                                  ? i === o
                                                  : "!=" === n
                                                  ? i !== o
                                                  : "^=" === n
                                                  ? o && 0 === i.indexOf(o)
                                                  : "*=" === n
                                                  ? o && i.indexOf(o) > -1
                                                  : "$=" === n
                                                  ? o && i.slice(-o.length) === o
                                                  : "~=" === n
                                                  ? (" " + i.replace(re, " ") + " ").indexOf(o) > -1
                                                  : "|=" === n && (i === o || i.slice(0, o.length + 1) === o + "-"));
                                };
                            },
                            CHILD: function (e, t, n, o, r) {
                                var i = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === o && 0 === r
                                    ? function (e) {
                                          return !!e.parentNode;
                                      }
                                    : function (t, n, l) {
                                          var c,
                                              u,
                                              d,
                                              p,
                                              f,
                                              m,
                                              h = i !== a ? "nextSibling" : "previousSibling",
                                              b = t.parentNode,
                                              g = s && t.nodeName.toLowerCase(),
                                              w = !l && !s,
                                              T = !1;
                                          if (b) {
                                              if (i) {
                                                  for (; h; ) {
                                                      for (p = t; (p = p[h]); ) if (s ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                                      m = h = "only" === e && !m && "nextSibling";
                                                  }
                                                  return !0;
                                              }
                                              if (((m = [a ? b.firstChild : b.lastChild]), a && w)) {
                                                  for (
                                                      p = b, d = p[V] || (p[V] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === F && c[1], T = f && c[2], p = f && b.childNodes[f];
                                                      (p = (++f && p && p[h]) || (T = f = 0) || m.pop());

                                                  )
                                                      if (1 === p.nodeType && ++T && p === t) {
                                                          u[e] = [F, f, T];
                                                          break;
                                                      }
                                              } else if ((w && ((p = t), (d = p[V] || (p[V] = {})), (u = d[p.uniqueID] || (d[p.uniqueID] = {})), (c = u[e] || []), (f = c[0] === F && c[1]), (T = f)), !1 === T))
                                                  for (
                                                      ;
                                                      (p = (++f && p && p[h]) || (T = f = 0) || m.pop()) &&
                                                      ((s ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++T || (w && ((d = p[V] || (p[V] = {})), (u = d[p.uniqueID] || (d[p.uniqueID] = {})), (u[e] = [F, T])), p !== t));

                                                  );
                                              return (T -= r) === o || (T % o == 0 && T / o >= 0);
                                          }
                                      };
                            },
                            PSEUDO: function (e, n) {
                                var r,
                                    i = v.pseudos[e] || v.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                return i[V]
                                    ? i(n)
                                    : i.length > 1
                                    ? ((r = [e, e, "", n]),
                                      v.setFilters.hasOwnProperty(e.toLowerCase())
                                          ? o(function (e, t) {
                                                for (var o, r = i(e, n), a = r.length; a--; ) (o = Z(e, r[a])), (e[o] = !(t[o] = r[a]));
                                            })
                                          : function (e) {
                                                return i(e, 0, r);
                                            })
                                    : i;
                            },
                        },
                        pseudos: {
                            not: o(function (e) {
                                var t = [],
                                    n = [],
                                    r = P(e.replace(ie, "$1"));
                                return r[V]
                                    ? o(function (e, t, n, o) {
                                          for (var i, a = r(e, null, o, []), s = e.length; s--; ) (i = a[s]) && (e[s] = !(t[s] = i));
                                      })
                                    : function (e, o, i) {
                                          return (t[0] = e), r(t, null, i, n), (t[0] = null), !n.pop();
                                      };
                            }),
                            has: o(function (e) {
                                return function (n) {
                                    return t(e, n).length > 0;
                                };
                            }),
                            contains: o(function (e) {
                                return (
                                    (e = e.replace(ge, we)),
                                    function (t) {
                                        return (t.textContent || t.innerText || S(t)).indexOf(e) > -1;
                                    }
                                );
                            }),
                            lang: o(function (e) {
                                return (
                                    ue.test(e || "") || t.error("unsupported lang: " + e),
                                    (e = e.replace(ge, we).toLowerCase()),
                                    function (t) {
                                        var n;
                                        do {
                                            if ((n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1;
                                    }
                                );
                            }),
                            target: function (t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id;
                            },
                            root: function (e) {
                                return e === H;
                            },
                            focus: function (e) {
                                return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                            },
                            enabled: s(!1),
                            disabled: s(!0),
                            checked: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                            },
                            selected: function (e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                            },
                            empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                return !0;
                            },
                            parent: function (e) {
                                return !v.pseudos.empty(e);
                            },
                            header: function (e) {
                                return fe.test(e.nodeName);
                            },
                            input: function (e) {
                                return pe.test(e.nodeName);
                            },
                            button: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return ("input" === t && "button" === e.type) || "button" === t;
                            },
                            text: function (e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                            },
                            first: l(function () {
                                return [0];
                            }),
                            last: l(function (e, t) {
                                return [t - 1];
                            }),
                            eq: l(function (e, t, n) {
                                return [n < 0 ? n + t : n];
                            }),
                            even: l(function (e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e;
                            }),
                            odd: l(function (e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e;
                            }),
                            lt: l(function (e, t, n) {
                                for (var o = n < 0 ? n + t : n; --o >= 0; ) e.push(o);
                                return e;
                            }),
                            gt: l(function (e, t, n) {
                                for (var o = n < 0 ? n + t : n; ++o < t; ) e.push(o);
                                return e;
                            }),
                        },
                    }),
                    (v.pseudos.nth = v.pseudos.eq);
                for (T in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
                    v.pseudos[T] = (function (e) {
                        return function (t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e;
                        };
                    })(T);
                for (T in { submit: !0, reset: !0 })
                    v.pseudos[T] = (function (e) {
                        return function (t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e;
                        };
                    })(T);
                return (
                    (u.prototype = v.filters = v.pseudos),
                    (v.setFilters = new u()),
                    (A = t.tokenize = function (e, n) {
                        var o,
                            r,
                            i,
                            a,
                            s,
                            l,
                            c,
                            u = _[e + " "];
                        if (u) return n ? 0 : u.slice(0);
                        for (s = e, l = [], c = v.preFilter; s; ) {
                            (o && !(r = ae.exec(s))) || (r && (s = s.slice(r[0].length) || s), l.push((i = []))), (o = !1), (r = se.exec(s)) && ((o = r.shift()), i.push({ value: o, type: r[0].replace(ie, " ") }), (s = s.slice(o.length)));
                            for (a in v.filter) !(r = de[a].exec(s)) || (c[a] && !(r = c[a](r))) || ((o = r.shift()), i.push({ value: o, type: a, matches: r }), (s = s.slice(o.length)));
                            if (!o) break;
                        }
                        return n ? s.length : s ? t.error(e) : _(e, l).slice(0);
                    }),
                    (P = t.compile = function (e, t) {
                        var n,
                            o = [],
                            r = [],
                            i = W[e + " "];
                        if (!i) {
                            for (t || (t = A(e)), n = t.length; n--; ) (i = g(t[n])), i[V] ? o.push(i) : r.push(i);
                            (i = W(e, w(r, o))), (i.selector = e);
                        }
                        return i;
                    }),
                    (C = t.select = function (e, t, n, o) {
                        var r,
                            i,
                            a,
                            s,
                            l,
                            u = "function" == typeof e && e,
                            p = !o && A((e = u.selector || e));
                        if (((n = n || []), 1 === p.length)) {
                            if (((i = p[0] = p[0].slice(0)), i.length > 2 && "ID" === (a = i[0]).type && 9 === t.nodeType && D && v.relative[i[1].type])) {
                                if (!(t = (v.find.ID(a.matches[0].replace(ge, we), t) || [])[0])) return n;
                                u && (t = t.parentNode), (e = e.slice(i.shift().value.length));
                            }
                            for (r = de.needsContext.test(e) ? 0 : i.length; r-- && ((a = i[r]), !v.relative[(s = a.type)]); )
                                if ((l = v.find[s]) && (o = l(a.matches[0].replace(ge, we), (be.test(i[0].type) && c(t.parentNode)) || t))) {
                                    if ((i.splice(r, 1), !(e = o.length && d(i)))) return $.apply(n, o), n;
                                    break;
                                }
                        }
                        return (u || P(e, p))(o, t, !D, n, !t || (be.test(e) && c(t.parentNode)) || t), n;
                    }),
                    (y.sortStable = V.split("").sort(z).join("") === V),
                    (y.detectDuplicates = !!G),
                    B(),
                    (y.sortDetached = r(function (e) {
                        return 1 & e.compareDocumentPosition(E.createElement("fieldset"));
                    })),
                    r(function (e) {
                        return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                    }) ||
                        i("type|href|height|width", function (e, t, n) {
                            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                        }),
                    (y.attributes &&
                        r(function (e) {
                            return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                        })) ||
                        i("value", function (e, t, n) {
                            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                        }),
                    r(function (e) {
                        return null == e.getAttribute("disabled");
                    }) ||
                        i(J, function (e, t, n) {
                            var o;
                            if (!n) return !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
                        }),
                    t
                );
            })(e);
            (Se.find = Ae),
                (Se.expr = Ae.selectors),
                (Se.expr[":"] = Se.expr.pseudos),
                (Se.uniqueSort = Se.unique = Ae.uniqueSort),
                (Se.text = Ae.getText),
                (Se.isXMLDoc = Ae.isXML),
                (Se.contains = Ae.contains),
                (Se.escapeSelector = Ae.escape);
            var Pe = function (e, t, n) {
                    for (var o = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                        if (1 === e.nodeType) {
                            if (r && Se(e).is(n)) break;
                            o.push(e);
                        }
                    return o;
                },
                Ce = function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n;
                },
                Me = Se.expr.match.needsContext,
                ke = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            (Se.filter = function (e, t, n) {
                var o = t[0];
                return (
                    n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === o.nodeType
                        ? Se.find.matchesSelector(o, e)
                            ? [o]
                            : []
                        : Se.find.matches(
                              e,
                              Se.grep(t, function (e) {
                                  return 1 === e.nodeType;
                              })
                          )
                );
            }),
                Se.fn.extend({
                    find: function (e) {
                        var t,
                            n,
                            o = this.length,
                            r = this;
                        if ("string" != typeof e)
                            return this.pushStack(
                                Se(e).filter(function () {
                                    for (t = 0; t < o; t++) if (Se.contains(r[t], this)) return !0;
                                })
                            );
                        for (n = this.pushStack([]), t = 0; t < o; t++) Se.find(e, r[t], n);
                        return o > 1 ? Se.uniqueSort(n) : n;
                    },
                    filter: function (e) {
                        return this.pushStack(s(this, e || [], !1));
                    },
                    not: function (e) {
                        return this.pushStack(s(this, e || [], !0));
                    },
                    is: function (e) {
                        return !!s(this, "string" == typeof e && Me.test(e) ? Se(e) : e || [], !1).length;
                    },
                });
            var Ge,
                Be = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((Se.fn.init = function (e, t, n) {
                var o, r;
                if (!e) return this;
                if (((n = n || Ge), "string" == typeof e)) {
                    if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Be.exec(e)) || (!o[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (o[1]) {
                        if (((t = t instanceof Se ? t[0] : t), Se.merge(this, Se.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), ke.test(o[1]) && Se.isPlainObject(t)))
                            for (o in t) Te(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                        return this;
                    }
                    return (r = se.getElementById(o[2])), r && ((this[0] = r), (this.length = 1)), this;
                }
                return e.nodeType ? ((this[0] = e), (this.length = 1), this) : Te(e) ? (void 0 !== n.ready ? n.ready(e) : e(Se)) : Se.makeArray(e, this);
            }).prototype = Se.fn),
                (Ge = Se(se));
            var Ee = /^(?:parents|prev(?:Until|All))/,
                He = { children: !0, contents: !0, next: !0, prev: !0 };
            Se.fn.extend({
                has: function (e) {
                    var t = Se(e, this),
                        n = t.length;
                    return this.filter(function () {
                        for (var e = 0; e < n; e++) if (Se.contains(this, t[e])) return !0;
                    });
                },
                closest: function (e, t) {
                    var n,
                        o = 0,
                        r = this.length,
                        i = [],
                        a = "string" != typeof e && Se(e);
                    if (!Me.test(e))
                        for (; o < r; o++)
                            for (n = this[o]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Se.find.matchesSelector(n, e))) {
                                    i.push(n);
                                    break;
                                }
                    return this.pushStack(i.length > 1 ? Se.uniqueSort(i) : i);
                },
                index: function (e) {
                    return e ? ("string" == typeof e ? pe.call(Se(e), this[0]) : pe.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function (e, t) {
                    return this.pushStack(Se.uniqueSort(Se.merge(this.get(), Se(e, t))));
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                },
            }),
                Se.each(
                    {
                        parent: function (e) {
                            var t = e.parentNode;
                            return t && 11 !== t.nodeType ? t : null;
                        },
                        parents: function (e) {
                            return Pe(e, "parentNode");
                        },
                        parentsUntil: function (e, t, n) {
                            return Pe(e, "parentNode", n);
                        },
                        next: function (e) {
                            return l(e, "nextSibling");
                        },
                        prev: function (e) {
                            return l(e, "previousSibling");
                        },
                        nextAll: function (e) {
                            return Pe(e, "nextSibling");
                        },
                        prevAll: function (e) {
                            return Pe(e, "previousSibling");
                        },
                        nextUntil: function (e, t, n) {
                            return Pe(e, "nextSibling", n);
                        },
                        prevUntil: function (e, t, n) {
                            return Pe(e, "previousSibling", n);
                        },
                        siblings: function (e) {
                            return Ce((e.parentNode || {}).firstChild, e);
                        },
                        children: function (e) {
                            return Ce(e.firstChild);
                        },
                        contents: function (e) {
                            return a(e, "iframe") ? e.contentDocument : (a(e, "template") && (e = e.content || e), Se.merge([], e.childNodes));
                        },
                    },
                    function (e, t) {
                        Se.fn[e] = function (n, o) {
                            var r = Se.map(this, t, n);
                            return "Until" !== e.slice(-5) && (o = n), o && "string" == typeof o && (r = Se.filter(o, r)), this.length > 1 && (He[e] || Se.uniqueSort(r), Ee.test(e) && r.reverse()), this.pushStack(r);
                        };
                    }
                );
            var De = /[^\x20\t\r\n\f]+/g;
            (Se.Callbacks = function (e) {
                e = "string" == typeof e ? c(e) : Se.extend({}, e);
                var t,
                    n,
                    o,
                    i,
                    a = [],
                    s = [],
                    l = -1,
                    u = function () {
                        for (i = i || e.once, o = t = !0; s.length; l = -1) for (n = s.shift(); ++l < a.length; ) !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && ((l = a.length), (n = !1));
                        e.memory || (n = !1), (t = !1), i && (a = n ? [] : "");
                    },
                    d = {
                        add: function () {
                            return (
                                a &&
                                    (n && !t && ((l = a.length - 1), s.push(n)),
                                    (function t(n) {
                                        Se.each(n, function (n, o) {
                                            Te(o) ? (e.unique && d.has(o)) || a.push(o) : o && o.length && "string" !== r(o) && t(o);
                                        });
                                    })(arguments),
                                    n && !t && u()),
                                this
                            );
                        },
                        remove: function () {
                            return (
                                Se.each(arguments, function (e, t) {
                                    for (var n; (n = Se.inArray(t, a, n)) > -1; ) a.splice(n, 1), n <= l && l--;
                                }),
                                this
                            );
                        },
                        has: function (e) {
                            return e ? Se.inArray(e, a) > -1 : a.length > 0;
                        },
                        empty: function () {
                            return a && (a = []), this;
                        },
                        disable: function () {
                            return (i = s = []), (a = n = ""), this;
                        },
                        disabled: function () {
                            return !a;
                        },
                        lock: function () {
                            return (i = s = []), n || t || (a = n = ""), this;
                        },
                        locked: function () {
                            return !!i;
                        },
                        fireWith: function (e, n) {
                            return i || ((n = n || []), (n = [e, n.slice ? n.slice() : n]), s.push(n), t || u()), this;
                        },
                        fire: function () {
                            return d.fireWith(this, arguments), this;
                        },
                        fired: function () {
                            return !!o;
                        },
                    };
                return d;
            }),
                Se.extend({
                    Deferred: function (t) {
                        var n = [
                                ["notify", "progress", Se.Callbacks("memory"), Se.Callbacks("memory"), 2],
                                ["resolve", "done", Se.Callbacks("once memory"), Se.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", Se.Callbacks("once memory"), Se.Callbacks("once memory"), 1, "rejected"],
                            ],
                            o = "pending",
                            r = {
                                state: function () {
                                    return o;
                                },
                                always: function () {
                                    return i.done(arguments).fail(arguments), this;
                                },
                                catch: function (e) {
                                    return r.then(null, e);
                                },
                                pipe: function () {
                                    var e = arguments;
                                    return Se.Deferred(function (t) {
                                        Se.each(n, function (n, o) {
                                            var r = Te(e[o[4]]) && e[o[4]];
                                            i[o[1]](function () {
                                                var e = r && r.apply(this, arguments);
                                                e && Te(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[o[0] + "With"](this, r ? [e] : arguments);
                                            });
                                        }),
                                            (e = null);
                                    }).promise();
                                },
                                then: function (t, o, r) {
                                    function i(t, n, o, r) {
                                        return function () {
                                            var s = this,
                                                l = arguments,
                                                c = function () {
                                                    var e, c;
                                                    if (!(t < a)) {
                                                        if ((e = o.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                        (c = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                            Te(c)
                                                                ? r
                                                                    ? c.call(e, i(a, n, u, r), i(a, n, d, r))
                                                                    : (a++, c.call(e, i(a, n, u, r), i(a, n, d, r), i(a, n, u, n.notifyWith)))
                                                                : (o !== u && ((s = void 0), (l = [e])), (r || n.resolveWith)(s, l));
                                                    }
                                                },
                                                p = r
                                                    ? c
                                                    : function () {
                                                          try {
                                                              c();
                                                          } catch (e) {
                                                              Se.Deferred.exceptionHook && Se.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= a && (o !== d && ((s = void 0), (l = [e])), n.rejectWith(s, l));
                                                          }
                                                      };
                                            t ? p() : (Se.Deferred.getStackHook && (p.stackTrace = Se.Deferred.getStackHook()), e.setTimeout(p));
                                        };
                                    }
                                    var a = 0;
                                    return Se.Deferred(function (e) {
                                        n[0][3].add(i(0, e, Te(r) ? r : u, e.notifyWith)), n[1][3].add(i(0, e, Te(t) ? t : u)), n[2][3].add(i(0, e, Te(o) ? o : d));
                                    }).promise();
                                },
                                promise: function (e) {
                                    return null != e ? Se.extend(e, r) : r;
                                },
                            },
                            i = {};
                        return (
                            Se.each(n, function (e, t) {
                                var a = t[2],
                                    s = t[5];
                                (r[t[1]] = a.add),
                                    s &&
                                        a.add(
                                            function () {
                                                o = s;
                                            },
                                            n[3 - e][2].disable,
                                            n[3 - e][3].disable,
                                            n[0][2].lock,
                                            n[0][3].lock
                                        ),
                                    a.add(t[3].fire),
                                    (i[t[0]] = function () {
                                        return i[t[0] + "With"](this === i ? void 0 : this, arguments), this;
                                    }),
                                    (i[t[0] + "With"] = a.fireWith);
                            }),
                            r.promise(i),
                            t && t.call(i, i),
                            i
                        );
                    },
                    when: function (e) {
                        var t = arguments.length,
                            n = t,
                            o = Array(n),
                            r = ce.call(arguments),
                            i = Se.Deferred(),
                            a = function (e) {
                                return function (n) {
                                    (o[e] = this), (r[e] = arguments.length > 1 ? ce.call(arguments) : n), --t || i.resolveWith(o, r);
                                };
                            };
                        if (t <= 1 && (p(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || Te(r[n] && r[n].then))) return i.then();
                        for (; n--; ) p(r[n], a(n), i.reject);
                        return i.promise();
                    },
                });
            var Le = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (Se.Deferred.exceptionHook = function (t, n) {
                e.console && e.console.warn && t && Le.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
            }),
                (Se.readyException = function (t) {
                    e.setTimeout(function () {
                        throw t;
                    });
                });
            var Ie = Se.Deferred();
            (Se.fn.ready = function (e) {
                return (
                    Ie.then(e).catch(function (e) {
                        Se.readyException(e);
                    }),
                    this
                );
            }),
                Se.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function (e) {
                        (!0 === e ? --Se.readyWait : Se.isReady) || ((Se.isReady = !0), (!0 !== e && --Se.readyWait > 0) || Ie.resolveWith(se, [Se]));
                    },
                }),
                (Se.ready.then = Ie.then),
                "complete" === se.readyState || ("loading" !== se.readyState && !se.documentElement.doScroll) ? e.setTimeout(Se.ready) : (se.addEventListener("DOMContentLoaded", f), e.addEventListener("load", f));
            var Oe = function (e, t, n, o, i, a, s) {
                    var l = 0,
                        c = e.length,
                        u = null == n;
                    if ("object" === r(n)) {
                        i = !0;
                        for (l in n) Oe(e, t, l, n[l], !0, a, s);
                    } else if (
                        void 0 !== o &&
                        ((i = !0),
                        Te(o) || (s = !0),
                        u &&
                            (s
                                ? (t.call(e, o), (t = null))
                                : ((u = t),
                                  (t = function (e, t, n) {
                                      return u.call(Se(e), n);
                                  }))),
                        t)
                    )
                        for (; l < c; l++) t(e[l], n, s ? o : o.call(e[l], l, t(e[l], n)));
                    return i ? e : u ? t.call(e) : c ? t(e[0], n) : a;
                },
                Ne = /^-ms-/,
                Ve = /-([a-z])/g,
                Re = function (e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                };
            (b.uid = 1),
                (b.prototype = {
                    cache: function (e) {
                        var t = e[this.expando];
                        return t || ((t = {}), Re(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                    },
                    set: function (e, t, n) {
                        var o,
                            r = this.cache(e);
                        if ("string" == typeof t) r[h(t)] = n;
                        else for (o in t) r[h(o)] = t[o];
                        return r;
                    },
                    get: function (e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][h(t)];
                    },
                    access: function (e, t, n) {
                        return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                    },
                    remove: function (e, t) {
                        var n,
                            o = e[this.expando];
                        if (void 0 !== o) {
                            if (void 0 !== t) {
                                Array.isArray(t) ? (t = t.map(h)) : ((t = h(t)), (t = t in o ? [t] : t.match(De) || [])), (n = t.length);
                                for (; n--; ) delete o[t[n]];
                            }
                            (void 0 === t || Se.isEmptyObject(o)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                        }
                    },
                    hasData: function (e) {
                        var t = e[this.expando];
                        return void 0 !== t && !Se.isEmptyObject(t);
                    },
                });
            var Fe = new b(),
                Xe = new b(),
                je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                _e = /[A-Z]/g;
            Se.extend({
                hasData: function (e) {
                    return Xe.hasData(e) || Fe.hasData(e);
                },
                data: function (e, t, n) {
                    return Xe.access(e, t, n);
                },
                removeData: function (e, t) {
                    Xe.remove(e, t);
                },
                _data: function (e, t, n) {
                    return Fe.access(e, t, n);
                },
                _removeData: function (e, t) {
                    Fe.remove(e, t);
                },
            }),
                Se.fn.extend({
                    data: function (e, t) {
                        var n,
                            o,
                            r,
                            i = this[0],
                            a = i && i.attributes;
                        if (void 0 === e) {
                            if (this.length && ((r = Xe.get(i)), 1 === i.nodeType && !Fe.get(i, "hasDataAttrs"))) {
                                for (n = a.length; n--; ) a[n] && ((o = a[n].name), 0 === o.indexOf("data-") && ((o = h(o.slice(5))), w(i, o, r[o])));
                                Fe.set(i, "hasDataAttrs", !0);
                            }
                            return r;
                        }
                        return "object" == typeof e
                            ? this.each(function () {
                                  Xe.set(this, e);
                              })
                            : Oe(
                                  this,
                                  function (t) {
                                      var n;
                                      if (i && void 0 === t) {
                                          if (void 0 !== (n = Xe.get(i, e))) return n;
                                          if (void 0 !== (n = w(i, e))) return n;
                                      } else
                                          this.each(function () {
                                              Xe.set(this, e, t);
                                          });
                                  },
                                  null,
                                  t,
                                  arguments.length > 1,
                                  null,
                                  !0
                              );
                    },
                    removeData: function (e) {
                        return this.each(function () {
                            Xe.remove(this, e);
                        });
                    },
                }),
                Se.extend({
                    queue: function (e, t, n) {
                        var o;
                        if (e) return (t = (t || "fx") + "queue"), (o = Fe.get(e, t)), n && (!o || Array.isArray(n) ? (o = Fe.access(e, t, Se.makeArray(n))) : o.push(n)), o || [];
                    },
                    dequeue: function (e, t) {
                        t = t || "fx";
                        var n = Se.queue(e, t),
                            o = n.length,
                            r = n.shift(),
                            i = Se._queueHooks(e, t),
                            a = function () {
                                Se.dequeue(e, t);
                            };
                        "inprogress" === r && ((r = n.shift()), o--), r && ("fx" === t && n.unshift("inprogress"), delete i.stop, r.call(e, a, i)), !o && i && i.empty.fire();
                    },
                    _queueHooks: function (e, t) {
                        var n = t + "queueHooks";
                        return (
                            Fe.get(e, n) ||
                            Fe.access(e, n, {
                                empty: Se.Callbacks("once memory").add(function () {
                                    Fe.remove(e, [t + "queue", n]);
                                }),
                            })
                        );
                    },
                }),
                Se.fn.extend({
                    queue: function (e, t) {
                        var n = 2;
                        return (
                            "string" != typeof e && ((t = e), (e = "fx"), n--),
                            arguments.length < n
                                ? Se.queue(this[0], e)
                                : void 0 === t
                                ? this
                                : this.each(function () {
                                      var n = Se.queue(this, e, t);
                                      Se._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Se.dequeue(this, e);
                                  })
                        );
                    },
                    dequeue: function (e) {
                        return this.each(function () {
                            Se.dequeue(this, e);
                        });
                    },
                    clearQueue: function (e) {
                        return this.queue(e || "fx", []);
                    },
                    promise: function (e, t) {
                        var n,
                            o = 1,
                            r = Se.Deferred(),
                            i = this,
                            a = this.length,
                            s = function () {
                                --o || r.resolveWith(i, [i]);
                            };
                        for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (n = Fe.get(i[a], e + "queueHooks")) && n.empty && (o++, n.empty.add(s));
                        return s(), r.promise(t);
                    },
                });
            var We = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ze = new RegExp("^(?:([+-])=|)(" + We + ")([a-z%]*)$", "i"),
                qe = ["Top", "Right", "Bottom", "Left"],
                Ue = function (e, t) {
                    return (e = t || e), "none" === e.style.display || ("" === e.style.display && Se.contains(e.ownerDocument, e) && "none" === Se.css(e, "display"));
                },
                Ke = function (e, t, n, o) {
                    var r,
                        i,
                        a = {};
                    for (i in t) (a[i] = e.style[i]), (e.style[i] = t[i]);
                    r = n.apply(e, o || []);
                    for (i in t) e.style[i] = a[i];
                    return r;
                },
                Qe = {};
            Se.fn.extend({
                show: function () {
                    return v(this, !0);
                },
                hide: function () {
                    return v(this);
                },
                toggle: function (e) {
                    return "boolean" == typeof e
                        ? e
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                              Ue(this) ? Se(this).show() : Se(this).hide();
                          });
                },
            });
            var $e = /^(?:checkbox|radio)$/i,
                Ye = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                Ze = /^$|^module$|\/(?:java|ecma)script/i,
                Je = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""],
                };
            (Je.optgroup = Je.option), (Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead), (Je.th = Je.td);
            var et = /<|&#?\w+;/;
            !(function () {
                var e = se.createDocumentFragment(),
                    t = e.appendChild(se.createElement("div")),
                    n = se.createElement("input");
                n.setAttribute("type", "radio"),
                    n.setAttribute("checked", "checked"),
                    n.setAttribute("name", "t"),
                    t.appendChild(n),
                    (we.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
                    (t.innerHTML = "<textarea>x</textarea>"),
                    (we.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
            })();
            var tt = se.documentElement,
                nt = /^key/,
                ot = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                rt = /^([^.]*)(?:\.(.+)|)/;
            (Se.event = {
                global: {},
                add: function (e, t, n, o, r) {
                    var i,
                        a,
                        s,
                        l,
                        c,
                        u,
                        d,
                        p,
                        f,
                        m,
                        h,
                        b = Fe.get(e);
                    if (b)
                        for (
                            n.handler && ((i = n), (n = i.handler), (r = i.selector)),
                                r && Se.find.matchesSelector(tt, r),
                                n.guid || (n.guid = Se.guid++),
                                (l = b.events) || (l = b.events = {}),
                                (a = b.handle) ||
                                    (a = b.handle = function (t) {
                                        return void 0 !== Se && Se.event.triggered !== t.type ? Se.event.dispatch.apply(e, arguments) : void 0;
                                    }),
                                t = (t || "").match(De) || [""],
                                c = t.length;
                            c--;

                        )
                            (s = rt.exec(t[c]) || []),
                                (f = h = s[1]),
                                (m = (s[2] || "").split(".").sort()),
                                f &&
                                    ((d = Se.event.special[f] || {}),
                                    (f = (r ? d.delegateType : d.bindType) || f),
                                    (d = Se.event.special[f] || {}),
                                    (u = Se.extend({ type: f, origType: h, data: o, handler: n, guid: n.guid, selector: r, needsContext: r && Se.expr.match.needsContext.test(r), namespace: m.join(".") }, i)),
                                    (p = l[f]) || ((p = l[f] = []), (p.delegateCount = 0), (d.setup && !1 !== d.setup.call(e, o, m, a)) || (e.addEventListener && e.addEventListener(f, a))),
                                    d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
                                    r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                                    (Se.event.global[f] = !0));
                },
                remove: function (e, t, n, o, r) {
                    var i,
                        a,
                        s,
                        l,
                        c,
                        u,
                        d,
                        p,
                        f,
                        m,
                        h,
                        b = Fe.hasData(e) && Fe.get(e);
                    if (b && (l = b.events)) {
                        for (t = (t || "").match(De) || [""], c = t.length; c--; )
                            if (((s = rt.exec(t[c]) || []), (f = h = s[1]), (m = (s[2] || "").split(".").sort()), f)) {
                                for (d = Se.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, p = l[f] || [], s = s[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--; )
                                    (u = p[i]),
                                        (!r && h !== u.origType) ||
                                            (n && n.guid !== u.guid) ||
                                            (s && !s.test(u.namespace)) ||
                                            (o && o !== u.selector && ("**" !== o || !u.selector)) ||
                                            (p.splice(i, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                                a && !p.length && ((d.teardown && !1 !== d.teardown.call(e, m, b.handle)) || Se.removeEvent(e, f, b.handle), delete l[f]);
                            } else for (f in l) Se.event.remove(e, f + t[c], n, o, !0);
                        Se.isEmptyObject(l) && Fe.remove(e, "handle events");
                    }
                },
                dispatch: function (e) {
                    var t,
                        n,
                        o,
                        r,
                        i,
                        a,
                        s = Se.event.fix(e),
                        l = new Array(arguments.length),
                        c = (Fe.get(this, "events") || {})[s.type] || [],
                        u = Se.event.special[s.type] || {};
                    for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                    if (((s.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, s))) {
                        for (a = Se.event.handlers.call(this, s, c), t = 0; (r = a[t++]) && !s.isPropagationStopped(); )
                            for (s.currentTarget = r.elem, n = 0; (i = r.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                                (s.rnamespace && !s.rnamespace.test(i.namespace)) ||
                                    ((s.handleObj = i), (s.data = i.data), void 0 !== (o = ((Se.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, l)) && !1 === (s.result = o) && (s.preventDefault(), s.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, s), s.result;
                    }
                },
                handlers: function (e, t) {
                    var n,
                        o,
                        r,
                        i,
                        a,
                        s = [],
                        l = t.delegateCount,
                        c = e.target;
                    if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                for (i = [], a = {}, n = 0; n < l; n++) (o = t[n]), (r = o.selector + " "), void 0 === a[r] && (a[r] = o.needsContext ? Se(r, this).index(c) > -1 : Se.find(r, this, null, [c]).length), a[r] && i.push(o);
                                i.length && s.push({ elem: c, handlers: i });
                            }
                    return (c = this), l < t.length && s.push({ elem: c, handlers: t.slice(l) }), s;
                },
                addProp: function (e, t) {
                    Object.defineProperty(Se.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: Te(t)
                            ? function () {
                                  if (this.originalEvent) return t(this.originalEvent);
                              }
                            : function () {
                                  if (this.originalEvent) return this.originalEvent[e];
                              },
                        set: function (t) {
                            Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                        },
                    });
                },
                fix: function (e) {
                    return e[Se.expando] ? e : new Se.Event(e);
                },
                special: {
                    load: { noBubble: !0 },
                    focus: {
                        trigger: function () {
                            if (this !== M() && this.focus) return this.focus(), !1;
                        },
                        delegateType: "focusin",
                    },
                    blur: {
                        trigger: function () {
                            if (this === M() && this.blur) return this.blur(), !1;
                        },
                        delegateType: "focusout",
                    },
                    click: {
                        trigger: function () {
                            if ("checkbox" === this.type && this.click && a(this, "input")) return this.click(), !1;
                        },
                        _default: function (e) {
                            return a(e.target, "a");
                        },
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                        },
                    },
                },
            }),
                (Se.removeEvent = function (e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n);
                }),
                (Se.Event = function (e, t) {
                    if (!(this instanceof Se.Event)) return new Se.Event(e, t);
                    e && e.type
                        ? ((this.originalEvent = e),
                          (this.type = e.type),
                          (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? P : C),
                          (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                          (this.currentTarget = e.currentTarget),
                          (this.relatedTarget = e.relatedTarget))
                        : (this.type = e),
                        t && Se.extend(this, t),
                        (this.timeStamp = (e && e.timeStamp) || Date.now()),
                        (this[Se.expando] = !0);
                }),
                (Se.Event.prototype = {
                    constructor: Se.Event,
                    isDefaultPrevented: C,
                    isPropagationStopped: C,
                    isImmediatePropagationStopped: C,
                    isSimulated: !1,
                    preventDefault: function () {
                        var e = this.originalEvent;
                        (this.isDefaultPrevented = P), e && !this.isSimulated && e.preventDefault();
                    },
                    stopPropagation: function () {
                        var e = this.originalEvent;
                        (this.isPropagationStopped = P), e && !this.isSimulated && e.stopPropagation();
                    },
                    stopImmediatePropagation: function () {
                        var e = this.originalEvent;
                        (this.isImmediatePropagationStopped = P), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                    },
                }),
                Se.each(
                    {
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: function (e) {
                            var t = e.button;
                            return null == e.which && nt.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && ot.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                        },
                    },
                    Se.event.addProp
                ),
                Se.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                    Se.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function (e) {
                            var n,
                                o = this,
                                r = e.relatedTarget,
                                i = e.handleObj;
                            return (r && (r === o || Se.contains(o, r))) || ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)), n;
                        },
                    };
                }),
                Se.fn.extend({
                    on: function (e, t, n, o) {
                        return k(this, e, t, n, o);
                    },
                    one: function (e, t, n, o) {
                        return k(this, e, t, n, o, 1);
                    },
                    off: function (e, t, n) {
                        var o, r;
                        if (e && e.preventDefault && e.handleObj) return (o = e.handleObj), Se(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
                        if ("object" == typeof e) {
                            for (r in e) this.off(r, t, e[r]);
                            return this;
                        }
                        return (
                            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                            !1 === n && (n = C),
                            this.each(function () {
                                Se.event.remove(this, e, n, t);
                            })
                        );
                    },
                });
            var it = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                at = /<script|<style|<link/i,
                st = /checked\s*(?:[^=]|=\s*.checked.)/i,
                lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            Se.extend({
                htmlPrefilter: function (e) {
                    return e.replace(it, "<$1></$2>");
                },
                clone: function (e, t, n) {
                    var o,
                        r,
                        i,
                        a,
                        s = e.cloneNode(!0),
                        l = Se.contains(e.ownerDocument, e);
                    if (!(we.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || Se.isXMLDoc(e))) for (a = S(s), i = S(e), o = 0, r = i.length; o < r; o++) D(i[o], a[o]);
                    if (t)
                        if (n) for (i = i || S(e), a = a || S(s), o = 0, r = i.length; o < r; o++) H(i[o], a[o]);
                        else H(e, s);
                    return (a = S(s, "script")), a.length > 0 && x(a, !l && S(e, "script")), s;
                },
                cleanData: function (e) {
                    for (var t, n, o, r = Se.event.special, i = 0; void 0 !== (n = e[i]); i++)
                        if (Re(n)) {
                            if ((t = n[Fe.expando])) {
                                if (t.events) for (o in t.events) r[o] ? Se.event.remove(n, o) : Se.removeEvent(n, o, t.handle);
                                n[Fe.expando] = void 0;
                            }
                            n[Xe.expando] && (n[Xe.expando] = void 0);
                        }
                },
            }),
                Se.fn.extend({
                    detach: function (e) {
                        return I(this, e, !0);
                    },
                    remove: function (e) {
                        return I(this, e);
                    },
                    text: function (e) {
                        return Oe(
                            this,
                            function (e) {
                                return void 0 === e
                                    ? Se.text(this)
                                    : this.empty().each(function () {
                                          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                      });
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    append: function () {
                        return L(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                G(this, e).appendChild(e);
                            }
                        });
                    },
                    prepend: function () {
                        return L(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = G(this, e);
                                t.insertBefore(e, t.firstChild);
                            }
                        });
                    },
                    before: function () {
                        return L(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this);
                        });
                    },
                    after: function () {
                        return L(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                        });
                    },
                    empty: function () {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Se.cleanData(S(e, !1)), (e.textContent = ""));
                        return this;
                    },
                    clone: function (e, t) {
                        return (
                            (e = null != e && e),
                            (t = null == t ? e : t),
                            this.map(function () {
                                return Se.clone(this, e, t);
                            })
                        );
                    },
                    html: function (e) {
                        return Oe(
                            this,
                            function (e) {
                                var t = this[0] || {},
                                    n = 0,
                                    o = this.length;
                                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                if ("string" == typeof e && !at.test(e) && !Je[(Ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                                    e = Se.htmlPrefilter(e);
                                    try {
                                        for (; n < o; n++) (t = this[n] || {}), 1 === t.nodeType && (Se.cleanData(S(t, !1)), (t.innerHTML = e));
                                        t = 0;
                                    } catch (e) {}
                                }
                                t && this.empty().append(e);
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    replaceWith: function () {
                        var e = [];
                        return L(
                            this,
                            arguments,
                            function (t) {
                                var n = this.parentNode;
                                Se.inArray(this, e) < 0 && (Se.cleanData(S(this)), n && n.replaceChild(t, this));
                            },
                            e
                        );
                    },
                }),
                Se.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                    Se.fn[e] = function (e) {
                        for (var n, o = [], r = Se(e), i = r.length - 1, a = 0; a <= i; a++) (n = a === i ? this : this.clone(!0)), Se(r[a])[t](n), de.apply(o, n.get());
                        return this.pushStack(o);
                    };
                });
            var ct = new RegExp("^(" + We + ")(?!px)[a-z%]+$", "i"),
                ut = function (t) {
                    var n = t.ownerDocument.defaultView;
                    return (n && n.opener) || (n = e), n.getComputedStyle(t);
                },
                dt = new RegExp(qe.join("|"), "i");
            !(function () {
                function t() {
                    if (c) {
                        (l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                            (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                            tt.appendChild(l).appendChild(c);
                        var t = e.getComputedStyle(c);
                        (o = "1%" !== t.top),
                            (s = 12 === n(t.marginLeft)),
                            (c.style.right = "60%"),
                            (a = 36 === n(t.right)),
                            (r = 36 === n(t.width)),
                            (c.style.position = "absolute"),
                            (i = 36 === c.offsetWidth || "absolute"),
                            tt.removeChild(l),
                            (c = null);
                    }
                }
                function n(e) {
                    return Math.round(parseFloat(e));
                }
                var o,
                    r,
                    i,
                    a,
                    s,
                    l = se.createElement("div"),
                    c = se.createElement("div");
                c.style &&
                    ((c.style.backgroundClip = "content-box"),
                    (c.cloneNode(!0).style.backgroundClip = ""),
                    (we.clearCloneStyle = "content-box" === c.style.backgroundClip),
                    Se.extend(we, {
                        boxSizingReliable: function () {
                            return t(), r;
                        },
                        pixelBoxStyles: function () {
                            return t(), a;
                        },
                        pixelPosition: function () {
                            return t(), o;
                        },
                        reliableMarginLeft: function () {
                            return t(), s;
                        },
                        scrollboxSize: function () {
                            return t(), i;
                        },
                    }));
            })();
            var pt = /^(none|table(?!-c[ea]).+)/,
                ft = /^--/,
                mt = { position: "absolute", visibility: "hidden", display: "block" },
                ht = { letterSpacing: "0", fontWeight: "400" },
                bt = ["Webkit", "Moz", "ms"],
                gt = se.createElement("div").style;
            Se.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = O(e, "opacity");
                                return "" === n ? "1" : n;
                            }
                        },
                    },
                },
                cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
                cssProps: {},
                style: function (e, t, n, o) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var r,
                            i,
                            a,
                            s = h(t),
                            l = ft.test(t),
                            c = e.style;
                        if ((l || (t = R(s)), (a = Se.cssHooks[t] || Se.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (r = a.get(e, !1, o)) ? r : c[t];
                        (i = typeof n),
                            "string" === i && (r = ze.exec(n)) && r[1] && ((n = T(e, t, r)), (i = "number")),
                            null != n &&
                                n === n &&
                                ("number" === i && (n += (r && r[3]) || (Se.cssNumber[s] ? "" : "px")),
                                we.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                                (a && "set" in a && void 0 === (n = a.set(e, n, o))) || (l ? c.setProperty(t, n) : (c[t] = n)));
                    }
                },
                css: function (e, t, n, o) {
                    var r,
                        i,
                        a,
                        s = h(t);
                    return (
                        ft.test(t) || (t = R(s)),
                        (a = Se.cssHooks[t] || Se.cssHooks[s]),
                        a && "get" in a && (r = a.get(e, !0, n)),
                        void 0 === r && (r = O(e, t, o)),
                        "normal" === r && t in ht && (r = ht[t]),
                        "" === n || n ? ((i = parseFloat(r)), !0 === n || isFinite(i) ? i || 0 : r) : r
                    );
                },
            }),
                Se.each(["height", "width"], function (e, t) {
                    Se.cssHooks[t] = {
                        get: function (e, n, o) {
                            if (n)
                                return !pt.test(Se.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                    ? j(e, t, o)
                                    : Ke(e, mt, function () {
                                          return j(e, t, o);
                                      });
                        },
                        set: function (e, n, o) {
                            var r,
                                i = ut(e),
                                a = "border-box" === Se.css(e, "boxSizing", !1, i),
                                s = o && X(e, t, o, a, i);
                            return (
                                a && we.scrollboxSize() === i.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - X(e, t, "border", !1, i) - 0.5)),
                                s && (r = ze.exec(n)) && "px" !== (r[3] || "px") && ((e.style[t] = n), (n = Se.css(e, t))),
                                F(e, n, s)
                            );
                        },
                    };
                }),
                (Se.cssHooks.marginLeft = N(we.reliableMarginLeft, function (e, t) {
                    if (t)
                        return (
                            (parseFloat(O(e, "marginLeft")) ||
                                e.getBoundingClientRect().left -
                                    Ke(e, { marginLeft: 0 }, function () {
                                        return e.getBoundingClientRect().left;
                                    })) + "px"
                        );
                })),
                Se.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                    (Se.cssHooks[e + t] = {
                        expand: function (n) {
                            for (var o = 0, r = {}, i = "string" == typeof n ? n.split(" ") : [n]; o < 4; o++) r[e + qe[o] + t] = i[o] || i[o - 2] || i[0];
                            return r;
                        },
                    }),
                        "margin" !== e && (Se.cssHooks[e + t].set = F);
                }),
                Se.fn.extend({
                    css: function (e, t) {
                        return Oe(
                            this,
                            function (e, t, n) {
                                var o,
                                    r,
                                    i = {},
                                    a = 0;
                                if (Array.isArray(t)) {
                                    for (o = ut(e), r = t.length; a < r; a++) i[t[a]] = Se.css(e, t[a], !1, o);
                                    return i;
                                }
                                return void 0 !== n ? Se.style(e, t, n) : Se.css(e, t);
                            },
                            e,
                            t,
                            arguments.length > 1
                        );
                    },
                }),
                (Se.Tween = _),
                (_.prototype = {
                    constructor: _,
                    init: function (e, t, n, o, r, i) {
                        (this.elem = e), (this.prop = n), (this.easing = r || Se.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = o), (this.unit = i || (Se.cssNumber[n] ? "" : "px"));
                    },
                    cur: function () {
                        var e = _.propHooks[this.prop];
                        return e && e.get ? e.get(this) : _.propHooks._default.get(this);
                    },
                    run: function (e) {
                        var t,
                            n = _.propHooks[this.prop];
                        return (
                            this.options.duration ? (this.pos = t = Se.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                            (this.now = (this.end - this.start) * t + this.start),
                            this.options.step && this.options.step.call(this.elem, this.now, this),
                            n && n.set ? n.set(this) : _.propHooks._default.set(this),
                            this
                        );
                    },
                }),
                (_.prototype.init.prototype = _.prototype),
                (_.propHooks = {
                    _default: {
                        get: function (e) {
                            var t;
                            return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : ((t = Se.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
                        },
                        set: function (e) {
                            Se.fx.step[e.prop] ? Se.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (null == e.elem.style[Se.cssProps[e.prop]] && !Se.cssHooks[e.prop]) ? (e.elem[e.prop] = e.now) : Se.style(e.elem, e.prop, e.now + e.unit);
                        },
                    },
                }),
                (_.propHooks.scrollTop = _.propHooks.scrollLeft = {
                    set: function (e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                    },
                }),
                (Se.easing = {
                    linear: function (e) {
                        return e;
                    },
                    swing: function (e) {
                        return 0.5 - Math.cos(e * Math.PI) / 2;
                    },
                    _default: "swing",
                }),
                (Se.fx = _.prototype.init),
                (Se.fx.step = {});
            var wt,
                Tt,
                yt = /^(?:toggle|show|hide)$/,
                vt = /queueHooks$/;
            (Se.Animation = Se.extend($, {
                tweeners: {
                    "*": [
                        function (e, t) {
                            var n = this.createTween(e, t);
                            return T(n.elem, e, ze.exec(t), n), n;
                        },
                    ],
                },
                tweener: function (e, t) {
                    Te(e) ? ((t = e), (e = ["*"])) : (e = e.match(De));
                    for (var n, o = 0, r = e.length; o < r; o++) (n = e[o]), ($.tweeners[n] = $.tweeners[n] || []), $.tweeners[n].unshift(t);
                },
                prefilters: [K],
                prefilter: function (e, t) {
                    t ? $.prefilters.unshift(e) : $.prefilters.push(e);
                },
            })),
                (Se.speed = function (e, t, n) {
                    var o = e && "object" == typeof e ? Se.extend({}, e) : { complete: n || (!n && t) || (Te(e) && e), duration: e, easing: (n && t) || (t && !Te(t) && t) };
                    return (
                        Se.fx.off ? (o.duration = 0) : "number" != typeof o.duration && (o.duration in Se.fx.speeds ? (o.duration = Se.fx.speeds[o.duration]) : (o.duration = Se.fx.speeds._default)),
                        (null != o.queue && !0 !== o.queue) || (o.queue = "fx"),
                        (o.old = o.complete),
                        (o.complete = function () {
                            Te(o.old) && o.old.call(this), o.queue && Se.dequeue(this, o.queue);
                        }),
                        o
                    );
                }),
                Se.fn.extend({
                    fadeTo: function (e, t, n, o) {
                        return this.filter(Ue).css("opacity", 0).show().end().animate({ opacity: t }, e, n, o);
                    },
                    animate: function (e, t, n, o) {
                        var r = Se.isEmptyObject(e),
                            i = Se.speed(t, n, o),
                            a = function () {
                                var t = $(this, Se.extend({}, e), i);
                                (r || Fe.get(this, "finish")) && t.stop(!0);
                            };
                        return (a.finish = a), r || !1 === i.queue ? this.each(a) : this.queue(i.queue, a);
                    },
                    stop: function (e, t, n) {
                        var o = function (e) {
                            var t = e.stop;
                            delete e.stop, t(n);
                        };
                        return (
                            "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                            t && !1 !== e && this.queue(e || "fx", []),
                            this.each(function () {
                                var t = !0,
                                    r = null != e && e + "queueHooks",
                                    i = Se.timers,
                                    a = Fe.get(this);
                                if (r) a[r] && a[r].stop && o(a[r]);
                                else for (r in a) a[r] && a[r].stop && vt.test(r) && o(a[r]);
                                for (r = i.length; r--; ) i[r].elem !== this || (null != e && i[r].queue !== e) || (i[r].anim.stop(n), (t = !1), i.splice(r, 1));
                                (!t && n) || Se.dequeue(this, e);
                            })
                        );
                    },
                    finish: function (e) {
                        return (
                            !1 !== e && (e = e || "fx"),
                            this.each(function () {
                                var t,
                                    n = Fe.get(this),
                                    o = n[e + "queue"],
                                    r = n[e + "queueHooks"],
                                    i = Se.timers,
                                    a = o ? o.length : 0;
                                for (n.finish = !0, Se.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = i.length; t--; ) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                                for (t = 0; t < a; t++) o[t] && o[t].finish && o[t].finish.call(this);
                                delete n.finish;
                            })
                        );
                    },
                }),
                Se.each(["toggle", "show", "hide"], function (e, t) {
                    var n = Se.fn[t];
                    Se.fn[t] = function (e, o, r) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, o, r);
                    };
                }),
                Se.each({ slideDown: q("show"), slideUp: q("hide"), slideToggle: q("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                    Se.fn[e] = function (e, n, o) {
                        return this.animate(t, e, n, o);
                    };
                }),
                (Se.timers = []),
                (Se.fx.tick = function () {
                    var e,
                        t = 0,
                        n = Se.timers;
                    for (wt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || Se.fx.stop(), (wt = void 0);
                }),
                (Se.fx.timer = function (e) {
                    Se.timers.push(e), Se.fx.start();
                }),
                (Se.fx.interval = 13),
                (Se.fx.start = function () {
                    Tt || ((Tt = !0), W());
                }),
                (Se.fx.stop = function () {
                    Tt = null;
                }),
                (Se.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                (Se.fn.delay = function (t, n) {
                    return (
                        (t = Se.fx ? Se.fx.speeds[t] || t : t),
                        (n = n || "fx"),
                        this.queue(n, function (n, o) {
                            var r = e.setTimeout(n, t);
                            o.stop = function () {
                                e.clearTimeout(r);
                            };
                        })
                    );
                }),
                (function () {
                    var e = se.createElement("input"),
                        t = se.createElement("select"),
                        n = t.appendChild(se.createElement("option"));
                    (e.type = "checkbox"), (we.checkOn = "" !== e.value), (we.optSelected = n.selected), (e = se.createElement("input")), (e.value = "t"), (e.type = "radio"), (we.radioValue = "t" === e.value);
                })();
            var St,
                xt = Se.expr.attrHandle;
            Se.fn.extend({
                attr: function (e, t) {
                    return Oe(this, Se.attr, e, t, arguments.length > 1);
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        Se.removeAttr(this, e);
                    });
                },
            }),
                Se.extend({
                    attr: function (e, t, n) {
                        var o,
                            r,
                            i = e.nodeType;
                        if (3 !== i && 8 !== i && 2 !== i)
                            return void 0 === e.getAttribute
                                ? Se.prop(e, t, n)
                                : ((1 === i && Se.isXMLDoc(e)) || (r = Se.attrHooks[t.toLowerCase()] || (Se.expr.match.bool.test(t) ? St : void 0)),
                                  void 0 !== n
                                      ? null === n
                                          ? void Se.removeAttr(e, t)
                                          : r && "set" in r && void 0 !== (o = r.set(e, n, t))
                                          ? o
                                          : (e.setAttribute(t, n + ""), n)
                                      : r && "get" in r && null !== (o = r.get(e, t))
                                      ? o
                                      : ((o = Se.find.attr(e, t)), null == o ? void 0 : o));
                    },
                    attrHooks: {
                        type: {
                            set: function (e, t) {
                                if (!we.radioValue && "radio" === t && a(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t;
                                }
                            },
                        },
                    },
                    removeAttr: function (e, t) {
                        var n,
                            o = 0,
                            r = t && t.match(De);
                        if (r && 1 === e.nodeType) for (; (n = r[o++]); ) e.removeAttribute(n);
                    },
                }),
                (St = {
                    set: function (e, t, n) {
                        return !1 === t ? Se.removeAttr(e, n) : e.setAttribute(n, n), n;
                    },
                }),
                Se.each(Se.expr.match.bool.source.match(/\w+/g), function (e, t) {
                    var n = xt[t] || Se.find.attr;
                    xt[t] = function (e, t, o) {
                        var r,
                            i,
                            a = t.toLowerCase();
                        return o || ((i = xt[a]), (xt[a] = r), (r = null != n(e, t, o) ? a : null), (xt[a] = i)), r;
                    };
                });
            var At = /^(?:input|select|textarea|button)$/i,
                Pt = /^(?:a|area)$/i;
            Se.fn.extend({
                prop: function (e, t) {
                    return Oe(this, Se.prop, e, t, arguments.length > 1);
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[Se.propFix[e] || e];
                    });
                },
            }),
                Se.extend({
                    prop: function (e, t, n) {
                        var o,
                            r,
                            i = e.nodeType;
                        if (3 !== i && 8 !== i && 2 !== i)
                            return (
                                (1 === i && Se.isXMLDoc(e)) || ((t = Se.propFix[t] || t), (r = Se.propHooks[t])),
                                void 0 !== n ? (r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : (e[t] = n)) : r && "get" in r && null !== (o = r.get(e, t)) ? o : e[t]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (e) {
                                var t = Se.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : At.test(e.nodeName) || (Pt.test(e.nodeName) && e.href) ? 0 : -1;
                            },
                        },
                    },
                    propFix: { for: "htmlFor", class: "className" },
                }),
                we.optSelected ||
                    (Se.propHooks.selected = {
                        get: function (e) {
                            var t = e.parentNode;
                            return t && t.parentNode && t.parentNode.selectedIndex, null;
                        },
                        set: function (e) {
                            var t = e.parentNode;
                            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                        },
                    }),
                Se.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                    Se.propFix[this.toLowerCase()] = this;
                }),
                Se.fn.extend({
                    addClass: function (e) {
                        var t,
                            n,
                            o,
                            r,
                            i,
                            a,
                            s,
                            l = 0;
                        if (Te(e))
                            return this.each(function (t) {
                                Se(this).addClass(e.call(this, t, Z(this)));
                            });
                        if (((t = J(e)), t.length))
                            for (; (n = this[l++]); )
                                if (((r = Z(n)), (o = 1 === n.nodeType && " " + Y(r) + " "))) {
                                    for (a = 0; (i = t[a++]); ) o.indexOf(" " + i + " ") < 0 && (o += i + " ");
                                    (s = Y(o)), r !== s && n.setAttribute("class", s);
                                }
                        return this;
                    },
                    removeClass: function (e) {
                        var t,
                            n,
                            o,
                            r,
                            i,
                            a,
                            s,
                            l = 0;
                        if (Te(e))
                            return this.each(function (t) {
                                Se(this).removeClass(e.call(this, t, Z(this)));
                            });
                        if (!arguments.length) return this.attr("class", "");
                        if (((t = J(e)), t.length))
                            for (; (n = this[l++]); )
                                if (((r = Z(n)), (o = 1 === n.nodeType && " " + Y(r) + " "))) {
                                    for (a = 0; (i = t[a++]); ) for (; o.indexOf(" " + i + " ") > -1; ) o = o.replace(" " + i + " ", " ");
                                    (s = Y(o)), r !== s && n.setAttribute("class", s);
                                }
                        return this;
                    },
                    toggleClass: function (e, t) {
                        var n = typeof e,
                            o = "string" === n || Array.isArray(e);
                        return "boolean" == typeof t && o
                            ? t
                                ? this.addClass(e)
                                : this.removeClass(e)
                            : Te(e)
                            ? this.each(function (n) {
                                  Se(this).toggleClass(e.call(this, n, Z(this), t), t);
                              })
                            : this.each(function () {
                                  var t, r, i, a;
                                  if (o) for (r = 0, i = Se(this), a = J(e); (t = a[r++]); ) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                                  else (void 0 !== e && "boolean" !== n) || ((t = Z(this)), t && Fe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Fe.get(this, "__className__") || ""));
                              });
                    },
                    hasClass: function (e) {
                        var t,
                            n,
                            o = 0;
                        for (t = " " + e + " "; (n = this[o++]); ) if (1 === n.nodeType && (" " + Y(Z(n)) + " ").indexOf(t) > -1) return !0;
                        return !1;
                    },
                });
            var Ct = /\r/g;
            Se.fn.extend({
                val: function (e) {
                    var t,
                        n,
                        o,
                        r = this[0];
                    {
                        if (arguments.length)
                            return (
                                (o = Te(e)),
                                this.each(function (n) {
                                    var r;
                                    1 === this.nodeType &&
                                        ((r = o ? e.call(this, n, Se(this).val()) : e),
                                        null == r
                                            ? (r = "")
                                            : "number" == typeof r
                                            ? (r += "")
                                            : Array.isArray(r) &&
                                              (r = Se.map(r, function (e) {
                                                  return null == e ? "" : e + "";
                                              })),
                                        ((t = Se.valHooks[this.type] || Se.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value")) || (this.value = r));
                                })
                            );
                        if (r)
                            return (t = Se.valHooks[r.type] || Se.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : ((n = r.value), "string" == typeof n ? n.replace(Ct, "") : null == n ? "" : n);
                    }
                },
            }),
                Se.extend({
                    valHooks: {
                        option: {
                            get: function (e) {
                                var t = Se.find.attr(e, "value");
                                return null != t ? t : Y(Se.text(e));
                            },
                        },
                        select: {
                            get: function (e) {
                                var t,
                                    n,
                                    o,
                                    r = e.options,
                                    i = e.selectedIndex,
                                    s = "select-one" === e.type,
                                    l = s ? null : [],
                                    c = s ? i + 1 : r.length;
                                for (o = i < 0 ? c : s ? i : 0; o < c; o++)
                                    if (((n = r[o]), (n.selected || o === i) && !n.disabled && (!n.parentNode.disabled || !a(n.parentNode, "optgroup")))) {
                                        if (((t = Se(n).val()), s)) return t;
                                        l.push(t);
                                    }
                                return l;
                            },
                            set: function (e, t) {
                                for (var n, o, r = e.options, i = Se.makeArray(t), a = r.length; a--; ) (o = r[a]), (o.selected = Se.inArray(Se.valHooks.option.get(o), i) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1), i;
                            },
                        },
                    },
                }),
                Se.each(["radio", "checkbox"], function () {
                    (Se.valHooks[this] = {
                        set: function (e, t) {
                            if (Array.isArray(t)) return (e.checked = Se.inArray(Se(e).val(), t) > -1);
                        },
                    }),
                        we.checkOn ||
                            (Se.valHooks[this].get = function (e) {
                                return null === e.getAttribute("value") ? "on" : e.value;
                            });
                }),
                (we.focusin = "onfocusin" in e);
            var Mt = /^(?:focusinfocus|focusoutblur)$/,
                kt = function (e) {
                    e.stopPropagation();
                };
            Se.extend(Se.event, {
                trigger: function (t, n, o, r) {
                    var i,
                        a,
                        s,
                        l,
                        c,
                        u,
                        d,
                        p,
                        f = [o || se],
                        m = he.call(t, "type") ? t.type : t,
                        h = he.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (
                        ((a = p = s = o = o || se),
                        3 !== o.nodeType &&
                            8 !== o.nodeType &&
                            !Mt.test(m + Se.event.triggered) &&
                            (m.indexOf(".") > -1 && ((h = m.split(".")), (m = h.shift()), h.sort()),
                            (c = m.indexOf(":") < 0 && "on" + m),
                            (t = t[Se.expando] ? t : new Se.Event(m, "object" == typeof t && t)),
                            (t.isTrigger = r ? 2 : 3),
                            (t.namespace = h.join(".")),
                            (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                            (t.result = void 0),
                            t.target || (t.target = o),
                            (n = null == n ? [t] : Se.makeArray(n, [t])),
                            (d = Se.event.special[m] || {}),
                            r || !d.trigger || !1 !== d.trigger.apply(o, n)))
                    ) {
                        if (!r && !d.noBubble && !ye(o)) {
                            for (l = d.delegateType || m, Mt.test(l + m) || (a = a.parentNode); a; a = a.parentNode) f.push(a), (s = a);
                            s === (o.ownerDocument || se) && f.push(s.defaultView || s.parentWindow || e);
                        }
                        for (i = 0; (a = f[i++]) && !t.isPropagationStopped(); )
                            (p = a),
                                (t.type = i > 1 ? l : d.bindType || m),
                                (u = (Fe.get(a, "events") || {})[t.type] && Fe.get(a, "handle")),
                                u && u.apply(a, n),
                                (u = c && a[c]) && u.apply && Re(a) && ((t.result = u.apply(a, n)), !1 === t.result && t.preventDefault());
                        return (
                            (t.type = m),
                            r ||
                                t.isDefaultPrevented() ||
                                (d._default && !1 !== d._default.apply(f.pop(), n)) ||
                                !Re(o) ||
                                (c &&
                                    Te(o[m]) &&
                                    !ye(o) &&
                                    ((s = o[c]),
                                    s && (o[c] = null),
                                    (Se.event.triggered = m),
                                    t.isPropagationStopped() && p.addEventListener(m, kt),
                                    o[m](),
                                    t.isPropagationStopped() && p.removeEventListener(m, kt),
                                    (Se.event.triggered = void 0),
                                    s && (o[c] = s))),
                            t.result
                        );
                    }
                },
                simulate: function (e, t, n) {
                    var o = Se.extend(new Se.Event(), n, { type: e, isSimulated: !0 });
                    Se.event.trigger(o, null, t);
                },
            }),
                Se.fn.extend({
                    trigger: function (e, t) {
                        return this.each(function () {
                            Se.event.trigger(e, t, this);
                        });
                    },
                    triggerHandler: function (e, t) {
                        var n = this[0];
                        if (n) return Se.event.trigger(e, t, n, !0);
                    },
                }),
                we.focusin ||
                    Se.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                        var n = function (e) {
                            Se.event.simulate(t, e.target, Se.event.fix(e));
                        };
                        Se.event.special[t] = {
                            setup: function () {
                                var o = this.ownerDocument || this,
                                    r = Fe.access(o, t);
                                r || o.addEventListener(e, n, !0), Fe.access(o, t, (r || 0) + 1);
                            },
                            teardown: function () {
                                var o = this.ownerDocument || this,
                                    r = Fe.access(o, t) - 1;
                                r ? Fe.access(o, t, r) : (o.removeEventListener(e, n, !0), Fe.remove(o, t));
                            },
                        };
                    });
            var Gt = e.location,
                Bt = Date.now(),
                Et = /\?/;
            Se.parseXML = function (t) {
                var n;
                if (!t || "string" != typeof t) return null;
                try {
                    n = new e.DOMParser().parseFromString(t, "text/xml");
                } catch (e) {
                    n = void 0;
                }
                return (n && !n.getElementsByTagName("parsererror").length) || Se.error("Invalid XML: " + t), n;
            };
            var Ht = /\[\]$/,
                Dt = /\r?\n/g,
                Lt = /^(?:submit|button|image|reset|file)$/i,
                It = /^(?:input|select|textarea|keygen)/i;
            (Se.param = function (e, t) {
                var n,
                    o = [],
                    r = function (e, t) {
                        var n = Te(t) ? t() : t;
                        o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                    };
                if (Array.isArray(e) || (e.jquery && !Se.isPlainObject(e)))
                    Se.each(e, function () {
                        r(this.name, this.value);
                    });
                else for (n in e) ee(n, e[n], t, r);
                return o.join("&");
            }),
                Se.fn.extend({
                    serialize: function () {
                        return Se.param(this.serializeArray());
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var e = Se.prop(this, "elements");
                            return e ? Se.makeArray(e) : this;
                        })
                            .filter(function () {
                                var e = this.type;
                                return this.name && !Se(this).is(":disabled") && It.test(this.nodeName) && !Lt.test(e) && (this.checked || !$e.test(e));
                            })
                            .map(function (e, t) {
                                var n = Se(this).val();
                                return null == n
                                    ? null
                                    : Array.isArray(n)
                                    ? Se.map(n, function (e) {
                                          return { name: t.name, value: e.replace(Dt, "\r\n") };
                                      })
                                    : { name: t.name, value: n.replace(Dt, "\r\n") };
                            })
                            .get();
                    },
                });
            var Ot = /%20/g,
                Nt = /#.*$/,
                Vt = /([?&])_=[^&]*/,
                Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Xt = /^(?:GET|HEAD)$/,
                jt = /^\/\//,
                _t = {},
                Wt = {},
                zt = "*/".concat("*"),
                qt = se.createElement("a");
            (qt.href = Gt.href),
                Se.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Gt.href,
                        type: "GET",
                        isLocal: Ft.test(Gt.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: { "*": zt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                        responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                        converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": Se.parseXML },
                        flatOptions: { url: !0, context: !0 },
                    },
                    ajaxSetup: function (e, t) {
                        return t ? oe(oe(e, Se.ajaxSettings), t) : oe(Se.ajaxSettings, e);
                    },
                    ajaxPrefilter: te(_t),
                    ajaxTransport: te(Wt),
                    ajax: function (t, n) {
                        function o(t, n, o, s) {
                            var c,
                                p,
                                f,
                                y,
                                v,
                                S = n;
                            u ||
                                ((u = !0),
                                l && e.clearTimeout(l),
                                (r = void 0),
                                (a = s || ""),
                                (x.readyState = t > 0 ? 4 : 0),
                                (c = (t >= 200 && t < 300) || 304 === t),
                                o && (y = re(m, x, o)),
                                (y = ie(m, y, x, c)),
                                c
                                    ? (m.ifModified && ((v = x.getResponseHeader("Last-Modified")), v && (Se.lastModified[i] = v), (v = x.getResponseHeader("etag")) && (Se.etag[i] = v)),
                                      204 === t || "HEAD" === m.type ? (S = "nocontent") : 304 === t ? (S = "notmodified") : ((S = y.state), (p = y.data), (f = y.error), (c = !f)))
                                    : ((f = S), (!t && S) || ((S = "error"), t < 0 && (t = 0))),
                                (x.status = t),
                                (x.statusText = (n || S) + ""),
                                c ? g.resolveWith(h, [p, S, x]) : g.rejectWith(h, [x, S, f]),
                                x.statusCode(T),
                                (T = void 0),
                                d && b.trigger(c ? "ajaxSuccess" : "ajaxError", [x, m, c ? p : f]),
                                w.fireWith(h, [x, S]),
                                d && (b.trigger("ajaxComplete", [x, m]), --Se.active || Se.event.trigger("ajaxStop")));
                        }
                        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
                        var r,
                            i,
                            a,
                            s,
                            l,
                            c,
                            u,
                            d,
                            p,
                            f,
                            m = Se.ajaxSetup({}, n),
                            h = m.context || m,
                            b = m.context && (h.nodeType || h.jquery) ? Se(h) : Se.event,
                            g = Se.Deferred(),
                            w = Se.Callbacks("once memory"),
                            T = m.statusCode || {},
                            y = {},
                            v = {},
                            S = "canceled",
                            x = {
                                readyState: 0,
                                getResponseHeader: function (e) {
                                    var t;
                                    if (u) {
                                        if (!s) for (s = {}; (t = Rt.exec(a)); ) s[t[1].toLowerCase()] = t[2];
                                        t = s[e.toLowerCase()];
                                    }
                                    return null == t ? null : t;
                                },
                                getAllResponseHeaders: function () {
                                    return u ? a : null;
                                },
                                setRequestHeader: function (e, t) {
                                    return null == u && ((e = v[e.toLowerCase()] = v[e.toLowerCase()] || e), (y[e] = t)), this;
                                },
                                overrideMimeType: function (e) {
                                    return null == u && (m.mimeType = e), this;
                                },
                                statusCode: function (e) {
                                    var t;
                                    if (e)
                                        if (u) x.always(e[x.status]);
                                        else for (t in e) T[t] = [T[t], e[t]];
                                    return this;
                                },
                                abort: function (e) {
                                    var t = e || S;
                                    return r && r.abort(t), o(0, t), this;
                                },
                            };
                        if (
                            (g.promise(x),
                            (m.url = ((t || m.url || Gt.href) + "").replace(jt, Gt.protocol + "//")),
                            (m.type = n.method || n.type || m.method || m.type),
                            (m.dataTypes = (m.dataType || "*").toLowerCase().match(De) || [""]),
                            null == m.crossDomain)
                        ) {
                            c = se.createElement("a");
                            try {
                                (c.href = m.url), (c.href = c.href), (m.crossDomain = qt.protocol + "//" + qt.host != c.protocol + "//" + c.host);
                            } catch (e) {
                                m.crossDomain = !0;
                            }
                        }
                        if ((m.data && m.processData && "string" != typeof m.data && (m.data = Se.param(m.data, m.traditional)), ne(_t, m, n, x), u)) return x;
                        (d = Se.event && m.global),
                            d && 0 == Se.active++ && Se.event.trigger("ajaxStart"),
                            (m.type = m.type.toUpperCase()),
                            (m.hasContent = !Xt.test(m.type)),
                            (i = m.url.replace(Nt, "")),
                            m.hasContent
                                ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Ot, "+"))
                                : ((f = m.url.slice(i.length)),
                                  m.data && (m.processData || "string" == typeof m.data) && ((i += (Et.test(i) ? "&" : "?") + m.data), delete m.data),
                                  !1 === m.cache && ((i = i.replace(Vt, "$1")), (f = (Et.test(i) ? "&" : "?") + "_=" + Bt++ + f)),
                                  (m.url = i + f)),
                            m.ifModified && (Se.lastModified[i] && x.setRequestHeader("If-Modified-Since", Se.lastModified[i]), Se.etag[i] && x.setRequestHeader("If-None-Match", Se.etag[i])),
                            ((m.data && m.hasContent && !1 !== m.contentType) || n.contentType) && x.setRequestHeader("Content-Type", m.contentType),
                            x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : m.accepts["*"]);
                        for (p in m.headers) x.setRequestHeader(p, m.headers[p]);
                        if (m.beforeSend && (!1 === m.beforeSend.call(h, x, m) || u)) return x.abort();
                        if (((S = "abort"), w.add(m.complete), x.done(m.success), x.fail(m.error), (r = ne(Wt, m, n, x)))) {
                            if (((x.readyState = 1), d && b.trigger("ajaxSend", [x, m]), u)) return x;
                            m.async &&
                                m.timeout > 0 &&
                                (l = e.setTimeout(function () {
                                    x.abort("timeout");
                                }, m.timeout));
                            try {
                                (u = !1), r.send(y, o);
                            } catch (e) {
                                if (u) throw e;
                                o(-1, e);
                            }
                        } else o(-1, "No Transport");
                        return x;
                    },
                    getJSON: function (e, t, n) {
                        return Se.get(e, t, n, "json");
                    },
                    getScript: function (e, t) {
                        return Se.get(e, void 0, t, "script");
                    },
                }),
                Se.each(["get", "post"], function (e, t) {
                    Se[t] = function (e, n, o, r) {
                        return Te(n) && ((r = r || o), (o = n), (n = void 0)), Se.ajax(Se.extend({ url: e, type: t, dataType: r, data: n, success: o }, Se.isPlainObject(e) && e));
                    };
                }),
                (Se._evalUrl = function (e) {
                    return Se.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
                }),
                Se.fn.extend({
                    wrapAll: function (e) {
                        var t;
                        return (
                            this[0] &&
                                (Te(e) && (e = e.call(this[0])),
                                (t = Se(e, this[0].ownerDocument).eq(0).clone(!0)),
                                this[0].parentNode && t.insertBefore(this[0]),
                                t
                                    .map(function () {
                                        for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                        return e;
                                    })
                                    .append(this)),
                            this
                        );
                    },
                    wrapInner: function (e) {
                        return Te(e)
                            ? this.each(function (t) {
                                  Se(this).wrapInner(e.call(this, t));
                              })
                            : this.each(function () {
                                  var t = Se(this),
                                      n = t.contents();
                                  n.length ? n.wrapAll(e) : t.append(e);
                              });
                    },
                    wrap: function (e) {
                        var t = Te(e);
                        return this.each(function (n) {
                            Se(this).wrapAll(t ? e.call(this, n) : e);
                        });
                    },
                    unwrap: function (e) {
                        return (
                            this.parent(e)
                                .not("body")
                                .each(function () {
                                    Se(this).replaceWith(this.childNodes);
                                }),
                            this
                        );
                    },
                }),
                (Se.expr.pseudos.hidden = function (e) {
                    return !Se.expr.pseudos.visible(e);
                }),
                (Se.expr.pseudos.visible = function (e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                }),
                (Se.ajaxSettings.xhr = function () {
                    try {
                        return new e.XMLHttpRequest();
                    } catch (e) {}
                });
            var Ut = { 0: 200, 1223: 204 },
                Kt = Se.ajaxSettings.xhr();
            (we.cors = !!Kt && "withCredentials" in Kt),
                (we.ajax = Kt = !!Kt),
                Se.ajaxTransport(function (t) {
                    var n, o;
                    if (we.cors || (Kt && !t.crossDomain))
                        return {
                            send: function (r, i) {
                                var a,
                                    s = t.xhr();
                                if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                                for (a in r) s.setRequestHeader(a, r[a]);
                                (n = function (e) {
                                    return function () {
                                        n &&
                                            ((n = o = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                            "abort" === e
                                                ? s.abort()
                                                : "error" === e
                                                ? "number" != typeof s.status
                                                    ? i(0, "error")
                                                    : i(s.status, s.statusText)
                                                : i(
                                                      Ut[s.status] || s.status,
                                                      s.statusText,
                                                      "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText },
                                                      s.getAllResponseHeaders()
                                                  ));
                                    };
                                }),
                                    (s.onload = n()),
                                    (o = s.onerror = s.ontimeout = n("error")),
                                    void 0 !== s.onabort
                                        ? (s.onabort = o)
                                        : (s.onreadystatechange = function () {
                                              4 === s.readyState &&
                                                  e.setTimeout(function () {
                                                      n && o();
                                                  });
                                          }),
                                    (n = n("abort"));
                                try {
                                    s.send((t.hasContent && t.data) || null);
                                } catch (e) {
                                    if (n) throw e;
                                }
                            },
                            abort: function () {
                                n && n();
                            },
                        };
                }),
                Se.ajaxPrefilter(function (e) {
                    e.crossDomain && (e.contents.script = !1);
                }),
                Se.ajaxSetup({
                    accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                    contents: { script: /\b(?:java|ecma)script\b/ },
                    converters: {
                        "text script": function (e) {
                            return Se.globalEval(e), e;
                        },
                    },
                }),
                Se.ajaxPrefilter("script", function (e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                }),
                Se.ajaxTransport("script", function (e) {
                    if (e.crossDomain) {
                        var t, n;
                        return {
                            send: function (o, r) {
                                (t = Se("<script>")
                                    .prop({ charset: e.scriptCharset, src: e.url })
                                    .on(
                                        "load error",
                                        (n = function (e) {
                                            t.remove(), (n = null), e && r("error" === e.type ? 404 : 200, e.type);
                                        })
                                    )),
                                    se.head.appendChild(t[0]);
                            },
                            abort: function () {
                                n && n();
                            },
                        };
                    }
                });
            var Qt = [],
                $t = /(=)\?(?=&|$)|\?\?/;
            Se.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = Qt.pop() || Se.expando + "_" + Bt++;
                    return (this[e] = !0), e;
                },
            }),
                Se.ajaxPrefilter("json jsonp", function (t, n, o) {
                    var r,
                        i,
                        a,
                        s = !1 !== t.jsonp && ($t.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(t.data) && "data");
                    if (s || "jsonp" === t.dataTypes[0])
                        return (
                            (r = t.jsonpCallback = Te(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                            s ? (t[s] = t[s].replace($t, "$1" + r)) : !1 !== t.jsonp && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                            (t.converters["script json"] = function () {
                                return a || Se.error(r + " was not called"), a[0];
                            }),
                            (t.dataTypes[0] = "json"),
                            (i = e[r]),
                            (e[r] = function () {
                                a = arguments;
                            }),
                            o.always(function () {
                                void 0 === i ? Se(e).removeProp(r) : (e[r] = i), t[r] && ((t.jsonpCallback = n.jsonpCallback), Qt.push(r)), a && Te(i) && i(a[0]), (a = i = void 0);
                            }),
                            "script"
                        );
                }),
                (we.createHTMLDocument = (function () {
                    var e = se.implementation.createHTMLDocument("").body;
                    return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length;
                })()),
                (Se.parseHTML = function (e, t, n) {
                    if ("string" != typeof e) return [];
                    "boolean" == typeof t && ((n = t), (t = !1));
                    var o, r, i;
                    return (
                        t || (we.createHTMLDocument ? ((t = se.implementation.createHTMLDocument("")), (o = t.createElement("base")), (o.href = se.location.href), t.head.appendChild(o)) : (t = se)),
                        (r = ke.exec(e)),
                        (i = !n && []),
                        r ? [t.createElement(r[1])] : ((r = A([e], t, i)), i && i.length && Se(i).remove(), Se.merge([], r.childNodes))
                    );
                }),
                (Se.fn.load = function (e, t, n) {
                    var o,
                        r,
                        i,
                        a = this,
                        s = e.indexOf(" ");
                    return (
                        s > -1 && ((o = Y(e.slice(s))), (e = e.slice(0, s))),
                        Te(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (r = "POST"),
                        a.length > 0 &&
                            Se.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                                .done(function (e) {
                                    (i = arguments), a.html(o ? Se("<div>").append(Se.parseHTML(e)).find(o) : e);
                                })
                                .always(
                                    n &&
                                        function (e, t) {
                                            a.each(function () {
                                                n.apply(this, i || [e.responseText, t, e]);
                                            });
                                        }
                                ),
                        this
                    );
                }),
                Se.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                    Se.fn[t] = function (e) {
                        return this.on(t, e);
                    };
                }),
                (Se.expr.pseudos.animated = function (e) {
                    return Se.grep(Se.timers, function (t) {
                        return e === t.elem;
                    }).length;
                }),
                (Se.offset = {
                    setOffset: function (e, t, n) {
                        var o,
                            r,
                            i,
                            a,
                            s,
                            l,
                            c,
                            u = Se.css(e, "position"),
                            d = Se(e),
                            p = {};
                        "static" === u && (e.style.position = "relative"),
                            (s = d.offset()),
                            (i = Se.css(e, "top")),
                            (l = Se.css(e, "left")),
                            (c = ("absolute" === u || "fixed" === u) && (i + l).indexOf("auto") > -1),
                            c ? ((o = d.position()), (a = o.top), (r = o.left)) : ((a = parseFloat(i) || 0), (r = parseFloat(l) || 0)),
                            Te(t) && (t = t.call(e, n, Se.extend({}, s))),
                            null != t.top && (p.top = t.top - s.top + a),
                            null != t.left && (p.left = t.left - s.left + r),
                            "using" in t ? t.using.call(e, p) : d.css(p);
                    },
                }),
                Se.fn.extend({
                    offset: function (e) {
                        if (arguments.length)
                            return void 0 === e
                                ? this
                                : this.each(function (t) {
                                      Se.offset.setOffset(this, e, t);
                                  });
                        var t,
                            n,
                            o = this[0];
                        if (o) return o.getClientRects().length ? ((t = o.getBoundingClientRect()), (n = o.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
                    },
                    position: function () {
                        if (this[0]) {
                            var e,
                                t,
                                n,
                                o = this[0],
                                r = { top: 0, left: 0 };
                            if ("fixed" === Se.css(o, "position")) t = o.getBoundingClientRect();
                            else {
                                for (t = this.offset(), n = o.ownerDocument, e = o.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Se.css(e, "position"); ) e = e.parentNode;
                                e && e !== o && 1 === e.nodeType && ((r = Se(e).offset()), (r.top += Se.css(e, "borderTopWidth", !0)), (r.left += Se.css(e, "borderLeftWidth", !0)));
                            }
                            return { top: t.top - r.top - Se.css(o, "marginTop", !0), left: t.left - r.left - Se.css(o, "marginLeft", !0) };
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            for (var e = this.offsetParent; e && "static" === Se.css(e, "position"); ) e = e.offsetParent;
                            return e || tt;
                        });
                    },
                }),
                Se.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                    var n = "pageYOffset" === t;
                    Se.fn[e] = function (o) {
                        return Oe(
                            this,
                            function (e, o, r) {
                                var i;
                                if ((ye(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView), void 0 === r)) return i ? i[t] : e[o];
                                i ? i.scrollTo(n ? i.pageXOffset : r, n ? r : i.pageYOffset) : (e[o] = r);
                            },
                            e,
                            o,
                            arguments.length
                        );
                    };
                }),
                Se.each(["top", "left"], function (e, t) {
                    Se.cssHooks[t] = N(we.pixelPosition, function (e, n) {
                        if (n) return (n = O(e, t)), ct.test(n) ? Se(e).position()[t] + "px" : n;
                    });
                }),
                Se.each({ Height: "height", Width: "width" }, function (e, t) {
                    Se.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, o) {
                        Se.fn[o] = function (r, i) {
                            var a = arguments.length && (n || "boolean" != typeof r),
                                s = n || (!0 === r || !0 === i ? "margin" : "border");
                            return Oe(
                                this,
                                function (t, n, r) {
                                    var i;
                                    return ye(t)
                                        ? 0 === o.indexOf("outer")
                                            ? t["inner" + e]
                                            : t.document.documentElement["client" + e]
                                        : 9 === t.nodeType
                                        ? ((i = t.documentElement), Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e]))
                                        : void 0 === r
                                        ? Se.css(t, n, s)
                                        : Se.style(t, n, r, s);
                                },
                                t,
                                a ? r : void 0,
                                a
                            );
                        };
                    });
                }),
                Se.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
                    Se.fn[t] = function (e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                    };
                }),
                Se.fn.extend({
                    hover: function (e, t) {
                        return this.mouseenter(e).mouseleave(t || e);
                    },
                }),
                Se.fn.extend({
                    bind: function (e, t, n) {
                        return this.on(e, null, t, n);
                    },
                    unbind: function (e, t) {
                        return this.off(e, null, t);
                    },
                    delegate: function (e, t, n, o) {
                        return this.on(t, e, n, o);
                    },
                    undelegate: function (e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                    },
                }),
                (Se.proxy = function (e, t) {
                    var n, o, r;
                    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), Te(e)))
                        return (
                            (o = ce.call(arguments, 2)),
                            (r = function () {
                                return e.apply(t || this, o.concat(ce.call(arguments)));
                            }),
                            (r.guid = e.guid = e.guid || Se.guid++),
                            r
                        );
                }),
                (Se.holdReady = function (e) {
                    e ? Se.readyWait++ : Se.ready(!0);
                }),
                (Se.isArray = Array.isArray),
                (Se.parseJSON = JSON.parse),
                (Se.nodeName = a),
                (Se.isFunction = Te),
                (Se.isWindow = ye),
                (Se.camelCase = h),
                (Se.type = r),
                (Se.now = Date.now),
                (Se.isNumeric = function (e) {
                    var t = Se.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                }),
                "function" == typeof n &&
                    n.amd &&
                    n("jquery", [], function () {
                        return Se;
                    });
            var Yt = e.jQuery,
                Zt = e.$;
            return (
                (Se.noConflict = function (t) {
                    return e.$ === Se && (e.$ = Zt), t && e.jQuery === Se && (e.jQuery = Yt), Se;
                }),
                t || (e.jQuery = e.$ = Se),
                Se
            );
        }),
        (function (e, t) {
            "function" == typeof n && n.amd ? n("tingle", t) : "object" == typeof exports ? (module.exports = t()) : (e.tingle = t());
        })(this, function () {
            function e(e) {
                var t = { onClose: null, onOpen: null, beforeOpen: null, beforeClose: null, stickyFooter: !1, footer: !1, cssClass: [], closeLabel: "Close", closeMethods: ["overlay", "button", "escape"] };
                (this.opts = c({}, t, e)), this.init();
            }
            function t() {
                this.modalBoxFooter && ((this.modalBoxFooter.style.width = this.modalBox.clientWidth + "px"), (this.modalBoxFooter.style.left = this.modalBox.offsetLeft + "px"));
            }
            function n() {
                (this.modal = document.createElement("div")),
                    this.modal.classList.add("tingle-modal"),
                    (0 !== this.opts.closeMethods.length && -1 !== this.opts.closeMethods.indexOf("overlay")) || this.modal.classList.add("tingle-modal--noOverlayClose"),
                    (this.modal.style.display = "none"),
                    this.opts.cssClass.forEach(function (e) {
                        "string" == typeof e && this.modal.classList.add(e);
                    }, this),
                    -1 !== this.opts.closeMethods.indexOf("button") &&
                        ((this.modalCloseBtn = document.createElement("button")),
                        (this.modalCloseBtn.type = "button"),
                        this.modalCloseBtn.classList.add("tingle-modal__close"),
                        (this.modalCloseBtnIcon = document.createElement("span")),
                        this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"),
                        (this.modalCloseBtnIcon.innerHTML = "Ã—"),
                        (this.modalCloseBtnLabel = document.createElement("span")),
                        this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"),
                        (this.modalCloseBtnLabel.innerHTML = this.opts.closeLabel),
                        this.modalCloseBtn.appendChild(this.modalCloseBtnIcon),
                        this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)),
                    (this.modalBox = document.createElement("div")),
                    this.modalBox.classList.add("tingle-modal-box"),
                    (this.modalBoxContent = document.createElement("div")),
                    this.modalBoxContent.classList.add("tingle-modal-box__content"),
                    this.modalBox.appendChild(this.modalBoxContent),
                    -1 !== this.opts.closeMethods.indexOf("button") && this.modal.appendChild(this.modalCloseBtn),
                    this.modal.appendChild(this.modalBox);
            }
            function o() {
                (this.modalBoxFooter = document.createElement("div")), this.modalBoxFooter.classList.add("tingle-modal-box__footer"), this.modalBox.appendChild(this.modalBoxFooter);
            }
            function r() {
                (this._events = { clickCloseBtn: this.close.bind(this), clickOverlay: a.bind(this), resize: this.checkOverflow.bind(this), keyboardNav: i.bind(this) }),
                    -1 !== this.opts.closeMethods.indexOf("button") && this.modalCloseBtn.addEventListener("click", this._events.clickCloseBtn),
                    this.modal.addEventListener("mousedown", this._events.clickOverlay),
                    window.addEventListener("resize", this._events.resize),
                    document.addEventListener("keydown", this._events.keyboardNav);
            }
            function i(e) {
                -1 !== this.opts.closeMethods.indexOf("escape") && 27 === e.which && this.isOpen() && this.close();
            }
            function a(e) {
                -1 !== this.opts.closeMethods.indexOf("overlay") && !s(e.target, "tingle-modal") && e.clientX < this.modal.clientWidth && this.close();
            }
            function s(e, t) {
                for (; (e = e.parentElement) && !e.classList.contains(t); );
                return e;
            }
            function l() {
                -1 !== this.opts.closeMethods.indexOf("button") && this.modalCloseBtn.removeEventListener("click", this._events.clickCloseBtn),
                    this.modal.removeEventListener("mousedown", this._events.clickOverlay),
                    window.removeEventListener("resize", this._events.resize),
                    document.removeEventListener("keydown", this._events.keyboardNav);
            }
            function c() {
                for (var e = 1; e < arguments.length; e++) for (var t in arguments[e]) arguments[e].hasOwnProperty(t) && (arguments[0][t] = arguments[e][t]);
                return arguments[0];
            }
            var u = (function () {
                    var e,
                        t = document.createElement("tingle-test-transition"),
                        n = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
                    for (e in n) if (void 0 !== t.style[e]) return n[e];
                })(),
                d = !1;
            return (
                (e.prototype.init = function () {
                    if (!this.modal) return n.call(this), r.call(this), document.body.insertBefore(this.modal, document.body.firstChild), this.opts.footer && this.addFooter(), this;
                }),
                (e.prototype._busy = function (e) {
                    d = e;
                }),
                (e.prototype._isBusy = function () {
                    return d;
                }),
                (e.prototype.destroy = function () {
                    null !== this.modal && (this.isOpen() && this.close(!0), l.call(this), this.modal.parentNode.removeChild(this.modal), (this.modal = null));
                }),
                (e.prototype.isOpen = function () {
                    return !!this.modal.classList.contains("tingle-modal--visible");
                }),
                (e.prototype.open = function () {
                    if (!this._isBusy()) {
                        this._busy(!0);
                        var e = this;
                        return (
                            "function" == typeof e.opts.beforeOpen && e.opts.beforeOpen(),
                            this.modal.style.removeProperty ? this.modal.style.removeProperty("display") : this.modal.style.removeAttribute("display"),
                            (this._scrollPosition = window.pageYOffset),
                            document.body.classList.add("tingle-enabled"),
                            (document.body.style.top = -this._scrollPosition + "px"),
                            this.setStickyFooter(this.opts.stickyFooter),
                            this.modal.classList.add("tingle-modal--visible"),
                            u
                                ? this.modal.addEventListener(
                                      u,
                                      function t() {
                                          "function" == typeof e.opts.onOpen && e.opts.onOpen.call(e), e.modal.removeEventListener(u, t, !1), e._busy(!1);
                                      },
                                      !1
                                  )
                                : ("function" == typeof e.opts.onOpen && e.opts.onOpen.call(e), e._busy(!1)),
                            this.checkOverflow(),
                            this
                        );
                    }
                }),
                (e.prototype.close = function (e) {
                    if (!this._isBusy()) {
                        if ((this._busy(!0), (e = e || !1), "function" == typeof this.opts.beforeClose)) {
                            if (!this.opts.beforeClose.call(this)) return;
                        }
                        document.body.classList.remove("tingle-enabled"), window.scrollTo(0, this._scrollPosition), (document.body.style.top = null), this.modal.classList.remove("tingle-modal--visible");
                        var t = this;
                        e
                            ? ((t.modal.style.display = "none"), "function" == typeof t.opts.onClose && t.opts.onClose.call(this), t._busy(!1))
                            : u
                            ? this.modal.addEventListener(
                                  u,
                                  function e() {
                                      t.modal.removeEventListener(u, e, !1), (t.modal.style.display = "none"), "function" == typeof t.opts.onClose && t.opts.onClose.call(this), t._busy(!1);
                                  },
                                  !1
                              )
                            : ((t.modal.style.display = "none"), "function" == typeof t.opts.onClose && t.opts.onClose.call(this), t._busy(!1));
                    }
                }),
                (e.prototype.setContent = function (e) {
                    return "string" == typeof e ? (this.modalBoxContent.innerHTML = e) : ((this.modalBoxContent.innerHTML = ""), this.modalBoxContent.appendChild(e)), this.isOpen() && this.checkOverflow(), this;
                }),
                (e.prototype.getContent = function () {
                    return this.modalBoxContent;
                }),
                (e.prototype.addFooter = function () {
                    return o.call(this), this;
                }),
                (e.prototype.setFooterContent = function (e) {
                    return (this.modalBoxFooter.innerHTML = e), this;
                }),
                (e.prototype.getFooterContent = function () {
                    return this.modalBoxFooter;
                }),
                (e.prototype.setStickyFooter = function (e) {
                    return (
                        this.isOverflow() || (e = !1),
                        e
                            ? this.modalBox.contains(this.modalBoxFooter) &&
                              (this.modalBox.removeChild(this.modalBoxFooter),
                              this.modal.appendChild(this.modalBoxFooter),
                              this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"),
                              t.call(this),
                              (this.modalBoxContent.style["padding-bottom"] = this.modalBoxFooter.clientHeight + 20 + "px"))
                            : this.modalBoxFooter &&
                              (this.modalBox.contains(this.modalBoxFooter) ||
                                  (this.modal.removeChild(this.modalBoxFooter),
                                  this.modalBox.appendChild(this.modalBoxFooter),
                                  (this.modalBoxFooter.style.width = "auto"),
                                  (this.modalBoxFooter.style.left = ""),
                                  (this.modalBoxContent.style["padding-bottom"] = ""),
                                  this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky"))),
                        this
                    );
                }),
                (e.prototype.addFooterBtn = function (e, t, n) {
                    var o = document.createElement("button");
                    return (
                        (o.innerHTML = e),
                        o.addEventListener("click", n),
                        "string" == typeof t &&
                            t.length &&
                            t.split(" ").forEach(function (e) {
                                o.classList.add(e);
                            }),
                        this.modalBoxFooter.appendChild(o),
                        o
                    );
                }),
                (e.prototype.resize = function () {
                    console.warn("Resize is deprecated and will be removed in version 1.0");
                }),
                (e.prototype.isOverflow = function () {
                    var e = window.innerHeight;
                    return this.modalBox.clientHeight >= e;
                }),
                (e.prototype.checkOverflow = function () {
                    this.modal.classList.contains("tingle-modal--visible") &&
                        (this.isOverflow() ? this.modal.classList.add("tingle-modal--overflow") : this.modal.classList.remove("tingle-modal--overflow"),
                        !this.isOverflow() && this.opts.stickyFooter ? this.setStickyFooter(!1) : this.isOverflow() && this.opts.stickyFooter && (t.call(this), this.setStickyFooter(!0)));
                }),
                { modal: e }
            );
        }),
        (function (e, t) {
            e("mobiledetect", [], function () {
                "use strict";
                function e(e, t) {
                    return null != e && null != t && e.toLowerCase() === t.toLowerCase();
                }
                function t(e, t) {
                    var n,
                        o,
                        r = e.length;
                    if (!r || !t) return !1;
                    for (n = t.toLowerCase(), o = 0; o < r; ++o) if (n === e[o].toLowerCase()) return !0;
                    return !1;
                }
                function n(e) {
                    for (var t in e) s.call(e, t) && (e[t] = new RegExp(e[t], "i"));
                }
                function o(e) {
                    return (e || "").substr(0, 500);
                }
                function r(e, t) {
                    (this.ua = o(e)), (this._cache = {}), (this.maxPhoneWidth = t || 600);
                }
                var i = {};
                (i.mobileDetectRules = {
                    phones: {
                        iPhone: "\\biPhone\\b|\\biPod\\b",
                        BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
                        HTC:
                            "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                        Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                        Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                        Motorola:
                            "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
                        Samsung:
                            "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
                        LG:
                            "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)",
                        Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                        Asus: "Asus.*Galaxy|PadFone.*Mobile",
                        NokiaLumia: "Lumia [0-9]{3,4}",
                        Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                        Palm: "PalmSource|Palm",
                        Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                        Pantech:
                            "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                        Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                        Wiko:
                            "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                        iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                        SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                        Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                        Alcatel: "Alcatel",
                        Nintendo: "Nintendo (3DS|Switch)",
                        Amoi: "Amoi",
                        INQ: "INQ",
                        GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser",
                    },
                    tablets: {
                        iPad: "iPad|iPad.*Mobile",
                        NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                        GoogleTablet: "Android.*Pixel C",
                        SamsungTablet:
                            "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835",
                        Kindle:
                            "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                        SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                        HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                        AsusTablet:
                            "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
                        BlackBerryTablet: "PlayBook|RIM Tablet",
                        HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                        MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                        NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                        AcerTablet:
                            "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
                        ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                        LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                        FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                        PrestigioTablet:
                            "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                        LenovoTablet:
                            "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304F|TB-X304L|TB-8703F|Tab2A7-10F|TB2-X30L",
                        DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                        YarvikTablet:
                            "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                        MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                        ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                        IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                        IRUTablet: "M702pro",
                        MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                        EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                        AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                        ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                        AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                        NokiaLumiaTablet: "Lumia 2520",
                        SonyTablet:
                            "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
                        PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                        CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                        CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                        MIDTablet:
                            "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                        MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                        SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                        RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                        FlyTablet: "IQ310|Fly Vision",
                        bqTablet: "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus",
                        HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09",
                        NecTablet: "\\bN-06D|\\bN-08D",
                        PantechTablet: "Pantech.*P4100",
                        BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                        VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                        ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                        PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                        NabiTablet: "Android.*\\bNabi",
                        KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                        DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                        TexetTablet:
                            "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                        PlaystationTablet: "Playstation.*(Portable|Vita)",
                        TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                        PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                        AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                        DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                        GalapadTablet: "Android.*\\bG1\\b(?!\\))",
                        MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                        KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                        AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                        PROSCANTablet:
                            "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                        YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                        ChangJiaTablet:
                            "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                        GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                        PointOfViewTablet:
                            "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                        OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                        HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                        DPSTablet: "DPS Dream 9|DPS Dual 7",
                        VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                        CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                        MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                        ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                        GoCleverTablet:
                            "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                        ModecomTablet:
                            "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                        VoninoTablet:
                            "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                        ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                        StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                        VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
                        EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                        RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                        iMobileTablet: "i-mobile i-note",
                        TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                        AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                        AMPETablet: "Android.* A78 ",
                        SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                        TecnoTablet: "TECNO P9|TECNO DP8D",
                        JXDTablet:
                            "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                        iJoyTablet:
                            "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                        FX2Tablet: "FX2 PAD7|FX2 PAD10",
                        XoroTablet:
                            "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                        ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                        VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                        OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                        CaptivaTablet: "CAPTIVA PAD",
                        IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                        TeclastTablet:
                            "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                        OndaTablet:
                            "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
                        JaytechTablet: "TPC-PA762",
                        BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                        DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                        EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                        LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                        AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                        MpmanTablet:
                            "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                        CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                        WolderTablet:
                            "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                        MediacomTablet: "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
                        MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                        NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                        NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                        LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                        UbislateTablet: "UbiSlate[\\s]?7C",
                        PocketBookTablet: "Pocketbook",
                        KocasoTablet: "\\b(TB-1207)\\b",
                        HisenseTablet: "\\b(F5281|E2371)\\b",
                        Hudl: "Hudl HT7S3|Hudl 2",
                        TelstraTablet: "T-Hub2",
                        GenericTablet:
                            "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107",
                    },
                    oss: {
                        AndroidOS: "Android",
                        BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                        PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                        SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                        WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                        WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                        iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                        MeeGoOS: "MeeGo",
                        MaemoOS: "Maemo",
                        JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                        webOS: "webOS|hpwOS",
                        badaOS: "\\bBada\\b",
                        BREWOS: "BREW",
                    },
                    uas: {
                        Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                        Dolfin: "\\bDolfin\\b",
                        Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
                        Skyfire: "Skyfire",
                        Edge: "Mobile Safari/[.0-9]* Edge",
                        IE: "IEMobile|MSIEMobile",
                        Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                        Bolt: "bolt",
                        TeaShark: "teashark",
                        Blazer: "Blazer",
                        Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                        WeChat: "\\bMicroMessenger\\b",
                        UCBrowser: "UC.*Browser|UCWEB",
                        baiduboxapp: "baiduboxapp",
                        baidubrowser: "baidubrowser",
                        DiigoBrowser: "DiigoBrowser",
                        Puffin: "Puffin",
                        Mercury: "\\bMercury\\b",
                        ObigoBrowser: "Obigo",
                        NetFront: "NF-Browser",
                        GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                        PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon",
                    },
                    props: {
                        Mobile: "Mobile/[VER]",
                        Build: "Build/[VER]",
                        Version: "Version/[VER]",
                        VendorID: "VendorID/[VER]",
                        iPad: "iPad.*CPU[a-z ]+[VER]",
                        iPhone: "iPhone.*CPU[a-z ]+[VER]",
                        iPod: "iPod.*CPU[a-z ]+[VER]",
                        Kindle: "Kindle/[VER]",
                        Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                        Coast: ["Coast/[VER]"],
                        Dolfin: "Dolfin/[VER]",
                        Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                        Fennec: "Fennec/[VER]",
                        Edge: "Edge/[VER]",
                        IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                        NetFront: "NetFront/[VER]",
                        NokiaBrowser: "NokiaBrowser/[VER]",
                        Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                        "Opera Mini": "Opera Mini/[VER]",
                        "Opera Mobi": "Version/[VER]",
                        UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
                        MQQBrowser: "MQQBrowser/[VER]",
                        MicroMessenger: "MicroMessenger/[VER]",
                        baiduboxapp: "baiduboxapp/[VER]",
                        baidubrowser: "baidubrowser/[VER]",
                        SamsungBrowser: "SamsungBrowser/[VER]",
                        Iron: "Iron/[VER]",
                        Safari: ["Version/[VER]", "Safari/[VER]"],
                        Skyfire: "Skyfire/[VER]",
                        Tizen: "Tizen/[VER]",
                        Webkit: "webkit[ /][VER]",
                        PaleMoon: "PaleMoon/[VER]",
                        Gecko: "Gecko/[VER]",
                        Trident: "Trident/[VER]",
                        Presto: "Presto/[VER]",
                        Goanna: "Goanna/[VER]",
                        iOS: " \\bi?OS\\b [VER][ ;]{1}",
                        Android: "Android [VER]",
                        BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                        BREW: "BREW [VER]",
                        Java: "Java/[VER]",
                        "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                        "Windows Phone": "Windows Phone [VER]",
                        "Windows CE": "Windows CE/[VER]",
                        "Windows NT": "Windows NT [VER]",
                        Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                        webOS: ["webOS/[VER]", "hpwOS/[VER];"],
                    },
                    utils: {
                        Bot:
                            "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
                        MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                        DesktopMode: "WPDesktop",
                        TV: "SonyDTV|HbbTV",
                        WebKit: "(webkit)[ /]([\\w.]+)",
                        Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
                        Watch: "SM-V700",
                    },
                }),
                    (i.detectMobileBrowsers = {
                        fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                        shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                        tabletPattern: /android|ipad|playbook|silk/i,
                    });
                var a,
                    s = Object.prototype.hasOwnProperty;
                return (
                    (i.FALLBACK_PHONE = "UnknownPhone"),
                    (i.FALLBACK_TABLET = "UnknownTablet"),
                    (i.FALLBACK_MOBILE = "UnknownMobile"),
                    (a =
                        "isArray" in Array
                            ? Array.isArray
                            : function (e) {
                                  return "[object Array]" === Object.prototype.toString.call(e);
                              }),
                    (function () {
                        var e,
                            t,
                            o,
                            r,
                            l,
                            c,
                            u = i.mobileDetectRules;
                        for (e in u.props)
                            if (s.call(u.props, e)) {
                                for (t = u.props[e], a(t) || (t = [t]), l = t.length, r = 0; r < l; ++r)
                                    (o = t[r]), (c = o.indexOf("[VER]")), c >= 0 && (o = o.substring(0, c) + "([\\w._\\+]+)" + o.substring(c + 5)), (t[r] = new RegExp(o, "i"));
                                u.props[e] = t;
                            }
                        n(u.oss), n(u.phones), n(u.tablets), n(u.uas), n(u.utils), (u.oss0 = { WindowsPhoneOS: u.oss.WindowsPhoneOS, WindowsMobileOS: u.oss.WindowsMobileOS });
                    })(),
                    (i.findMatch = function (e, t) {
                        for (var n in e) if (s.call(e, n) && e[n].test(t)) return n;
                        return null;
                    }),
                    (i.findMatches = function (e, t) {
                        var n = [];
                        for (var o in e) s.call(e, o) && e[o].test(t) && n.push(o);
                        return n;
                    }),
                    (i.getVersionStr = function (e, t) {
                        var n,
                            o,
                            r,
                            a,
                            l = i.mobileDetectRules.props;
                        if (s.call(l, e)) for (n = l[e], r = n.length, o = 0; o < r; ++o) if (null !== (a = n[o].exec(t))) return a[1];
                        return null;
                    }),
                    (i.getVersion = function (e, t) {
                        var n = i.getVersionStr(e, t);
                        return n ? i.prepareVersionNo(n) : NaN;
                    }),
                    (i.prepareVersionNo = function (e) {
                        var t;
                        return (t = e.split(/[a-z._ \/\-]/i)), 1 === t.length && (e = t[0]), t.length > 1 && ((e = t[0] + "."), t.shift(), (e += t.join(""))), Number(e);
                    }),
                    (i.isMobileFallback = function (e) {
                        return i.detectMobileBrowsers.fullPattern.test(e) || i.detectMobileBrowsers.shortPattern.test(e.substr(0, 4));
                    }),
                    (i.isTabletFallback = function (e) {
                        return i.detectMobileBrowsers.tabletPattern.test(e);
                    }),
                    (i.prepareDetectionCache = function (e, t, n) {
                        if (void 0 === e.mobile) {
                            var o, a, s;
                            if ((a = i.findMatch(i.mobileDetectRules.tablets, t))) return (e.mobile = e.tablet = a), void (e.phone = null);
                            if ((o = i.findMatch(i.mobileDetectRules.phones, t))) return (e.mobile = e.phone = o), void (e.tablet = null);
                            i.isMobileFallback(t)
                                ? ((s = r.isPhoneSized(n)),
                                  void 0 === s
                                      ? ((e.mobile = i.FALLBACK_MOBILE), (e.tablet = e.phone = null))
                                      : s
                                      ? ((e.mobile = e.phone = i.FALLBACK_PHONE), (e.tablet = null))
                                      : ((e.mobile = e.tablet = i.FALLBACK_TABLET), (e.phone = null)))
                                : i.isTabletFallback(t)
                                ? ((e.mobile = e.tablet = i.FALLBACK_TABLET), (e.phone = null))
                                : (e.mobile = e.tablet = e.phone = null);
                        }
                    }),
                    (i.mobileGrade = function (e) {
                        var t = null !== e.mobile();
                        return (e.os("iOS") && e.version("iPad") >= 4.3) ||
                            (e.os("iOS") && e.version("iPhone") >= 3.1) ||
                            (e.os("iOS") && e.version("iPod") >= 3.1) ||
                            (e.version("Android") > 2.1 && e.is("Webkit")) ||
                            e.version("Windows Phone OS") >= 7 ||
                            (e.is("BlackBerry") && e.version("BlackBerry") >= 6) ||
                            e.match("Playbook.*Tablet") ||
                            (e.version("webOS") >= 1.4 && e.match("Palm|Pre|Pixi")) ||
                            e.match("hp.*TouchPad") ||
                            (e.is("Firefox") && e.version("Firefox") >= 12) ||
                            (e.is("Chrome") && e.is("AndroidOS") && e.version("Android") >= 4) ||
                            (e.is("Skyfire") && e.version("Skyfire") >= 4.1 && e.is("AndroidOS") && e.version("Android") >= 2.3) ||
                            (e.is("Opera") && e.version("Opera Mobi") > 11 && e.is("AndroidOS")) ||
                            e.is("MeeGoOS") ||
                            e.is("Tizen") ||
                            (e.is("Dolfin") && e.version("Bada") >= 2) ||
                            ((e.is("UC Browser") || e.is("Dolfin")) && e.version("Android") >= 2.3) ||
                            e.match("Kindle Fire") ||
                            (e.is("Kindle") && e.version("Kindle") >= 3) ||
                            (e.is("AndroidOS") && e.is("NookTablet")) ||
                            (e.version("Chrome") >= 11 && !t) ||
                            (e.version("Safari") >= 5 && !t) ||
                            (e.version("Firefox") >= 4 && !t) ||
                            (e.version("MSIE") >= 7 && !t) ||
                            (e.version("Opera") >= 10 && !t)
                            ? "A"
                            : (e.os("iOS") && e.version("iPad") < 4.3) ||
                              (e.os("iOS") && e.version("iPhone") < 3.1) ||
                              (e.os("iOS") && e.version("iPod") < 3.1) ||
                              (e.is("Blackberry") && e.version("BlackBerry") >= 5 && e.version("BlackBerry") < 6) ||
                              (e.version("Opera Mini") >= 5 && e.version("Opera Mini") <= 6.5 && (e.version("Android") >= 2.3 || e.is("iOS"))) ||
                              e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") ||
                              (e.version("Opera Mobi") >= 11 && e.is("SymbianOS"))
                            ? "B"
                            : (e.version("BlackBerry") < 5 || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile"), "C");
                    }),
                    (i.detectOS = function (e) {
                        return i.findMatch(i.mobileDetectRules.oss0, e) || i.findMatch(i.mobileDetectRules.oss, e);
                    }),
                    (i.getDeviceSmallerSide = function () {
                        return window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
                    }),
                    (r.prototype = {
                        constructor: r,
                        mobile: function () {
                            return i.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile;
                        },
                        phone: function () {
                            return i.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone;
                        },
                        tablet: function () {
                            return i.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet;
                        },
                        userAgent: function () {
                            return void 0 === this._cache.userAgent && (this._cache.userAgent = i.findMatch(i.mobileDetectRules.uas, this.ua)), this._cache.userAgent;
                        },
                        userAgents: function () {
                            return void 0 === this._cache.userAgents && (this._cache.userAgents = i.findMatches(i.mobileDetectRules.uas, this.ua)), this._cache.userAgents;
                        },
                        os: function () {
                            return void 0 === this._cache.os && (this._cache.os = i.detectOS(this.ua)), this._cache.os;
                        },
                        version: function (e) {
                            return i.getVersion(e, this.ua);
                        },
                        versionStr: function (e) {
                            return i.getVersionStr(e, this.ua);
                        },
                        is: function (n) {
                            return t(this.userAgents(), n) || e(n, this.os()) || e(n, this.phone()) || e(n, this.tablet()) || t(i.findMatches(i.mobileDetectRules.utils, this.ua), n);
                        },
                        match: function (e) {
                            return e instanceof RegExp || (e = new RegExp(e, "i")), e.test(this.ua);
                        },
                        isPhoneSized: function (e) {
                            return r.isPhoneSized(e || this.maxPhoneWidth);
                        },
                        mobileGrade: function () {
                            return void 0 === this._cache.grade && (this._cache.grade = i.mobileGrade(this)), this._cache.grade;
                        },
                    }),
                    "undefined" != typeof window && window.screen
                        ? (r.isPhoneSized = function (e) {
                              return e < 0 ? void 0 : i.getDeviceSmallerSide() <= e;
                          })
                        : (r.isPhoneSized = function () {}),
                    (r._impl = i),
                    (r.version = "1.4.3 2018-09-08"),
                    r
                );
            });
        })(
            (function (e) {
                if ("undefined" != typeof module && module.exports)
                    return function (e) {
                        module.exports = e();
                    };
                if ("function" == typeof n && n.amd) return n;
                if ("undefined" != typeof window)
                    return function (e) {
                        window.MobileDetect = e();
                    };
                throw new Error("unknown environment");
            })()
        ),
        !(function (e, t) {
            "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof n && n.amd ? n("swal", t) : (e.Sweetalert2 = t());
        })(this, function () {
            "use strict";
            function e(t) {
                return (e =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(t);
            }
            function t(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function n(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                }
            }
            function o() {
                return (o =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function r(e) {
                return (r = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function i(e, t) {
                return (i =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function a(e, t, n) {
                return (a = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })()
                    ? Reflect.construct
                    : function (e, t, n) {
                          var o = [null];
                          o.push.apply(o, t);
                          var r = new (Function.bind.apply(e, o))();
                          return n && i(r, n.prototype), r;
                      }).apply(null, arguments);
            }
            function s(e, t) {
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? (function (e) {
                          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return e;
                      })(e)
                    : t;
            }
            function l(e, t, n) {
                return (l =
                    "undefined" != typeof Reflect && Reflect.get
                        ? Reflect.get
                        : function (e, t, n) {
                              var o = (function (e, t) {
                                  for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = r(e)); );
                                  return e;
                              })(e, t);
                              if (o) {
                                  var i = Object.getOwnPropertyDescriptor(o, t);
                                  return i.get ? i.get.call(n) : i.value;
                              }
                          })(e, t, n || e);
            }
            function c() {
                var e = ge.innerParams.get(this),
                    t = ge.domCache.get(this);
                e.showConfirmButton || (H(t.confirmButton), e.showCancelButton || H(t.actions)),
                    G([t.popup, t.actions], S.loading),
                    t.popup.removeAttribute("aria-busy"),
                    t.popup.removeAttribute("data-loading"),
                    (t.confirmButton.disabled = !1),
                    (t.cancelButton.disabled = !1);
            }
            function u(e) {
                var t = L(),
                    n = O(),
                    o = ge.innerParams.get(this),
                    r = ve.swalPromiseResolve.get(this),
                    i = o.onClose,
                    a = o.onAfterClose;
                if (n) {
                    null !== i && "function" == typeof i && i(n), G(n, S.show), k(n, S.hide);
                    var s = function () {
                        $()
                            ? Se(a)
                            : (new Promise(function (e) {
                                  var t = window.scrollX,
                                      n = window.scrollY;
                                  (ue.restoreFocusTimeout = setTimeout(function () {
                                      ue.previousActiveElement && ue.previousActiveElement.focus ? (ue.previousActiveElement.focus(), (ue.previousActiveElement = null)) : document.body && document.body.focus(), e();
                                  }, 100)),
                                      void 0 !== t && void 0 !== n && window.scrollTo(t, n);
                              }).then(function () {
                                  return Se(a);
                              }),
                              ue.keydownTarget.removeEventListener("keydown", ue.keydownHandler, { capture: ue.keydownListenerCapture }),
                              (ue.keydownHandlerAdded = !1)),
                            t.parentNode && t.parentNode.removeChild(t),
                            G([document.documentElement, document.body], [S.shown, S["height-auto"], S["no-backdrop"], S["toast-shown"], S["toast-column"]]),
                            Q() &&
                                (null !== A.previousBodyPadding && ((document.body.style.paddingRight = A.previousBodyPadding + "px"), (A.previousBodyPadding = null)),
                                (function () {
                                    if (P(document.body, S.iosfix)) {
                                        var e = parseInt(document.body.style.top, 10);
                                        G(document.body, S.iosfix), (document.body.style.top = ""), (document.body.scrollTop = -1 * e);
                                    }
                                })(),
                                "undefined" != typeof window && Te() && window.removeEventListener("resize", ye),
                                m(document.body.children).forEach(function (e) {
                                    e.hasAttribute("data-previous-aria-hidden")
                                        ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden")), e.removeAttribute("data-previous-aria-hidden"))
                                        : e.removeAttribute("aria-hidden");
                                }));
                    };
                    te && !P(n, S.noanimation)
                        ? n.addEventListener(te, function e() {
                              n.removeEventListener(te, e), P(n, S.hide) && s();
                          })
                        : s(),
                        r(e || {});
                }
            }
            function d() {
                if ("undefined" != typeof window) {
                    "undefined" == typeof Promise &&
                        b("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),
                        (p = this);
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var o = Object.freeze(this.constructor.argsToParams(t));
                    Object.defineProperties(this, { params: { value: o, writable: !1, enumerable: !0 } });
                    var r = this._main(this.params);
                    ge.promise.set(this, r);
                }
            }
            var p,
                f = "SweetAlert2:",
                m = function (e) {
                    return Array.prototype.slice.call(e);
                },
                h = function (e) {
                    console.warn("".concat(f, " ").concat(e));
                },
                b = function (e) {
                    console.error("".concat(f, " ").concat(e));
                },
                g = [],
                w = function (e) {
                    return "function" == typeof e ? e() : e;
                },
                T = function (e) {
                    return e && Promise.resolve(e) === e;
                },
                y = Object.freeze({ cancel: "cancel", backdrop: "backdrop", close: "close", esc: "esc", timer: "timer" }),
                v = function (e) {
                    var t = {};
                    for (var n in e) t[e[n]] = "swal2-" + e[n];
                    return t;
                },
                S = v([
                    "container",
                    "shown",
                    "height-auto",
                    "iosfix",
                    "popup",
                    "modal",
                    "no-backdrop",
                    "toast",
                    "toast-shown",
                    "toast-column",
                    "fade",
                    "show",
                    "hide",
                    "noanimation",
                    "close",
                    "title",
                    "header",
                    "content",
                    "actions",
                    "confirm",
                    "cancel",
                    "footer",
                    "icon",
                    "icon-text",
                    "image",
                    "input",
                    "file",
                    "range",
                    "select",
                    "radio",
                    "checkbox",
                    "label",
                    "textarea",
                    "inputerror",
                    "validation-message",
                    "progress-steps",
                    "active-progress-step",
                    "progress-step",
                    "progress-step-line",
                    "loading",
                    "styled",
                    "top",
                    "top-start",
                    "top-end",
                    "top-left",
                    "top-right",
                    "center",
                    "center-start",
                    "center-end",
                    "center-left",
                    "center-right",
                    "bottom",
                    "bottom-start",
                    "bottom-end",
                    "bottom-left",
                    "bottom-right",
                    "grow-row",
                    "grow-column",
                    "grow-fullscreen",
                    "rtl",
                ]),
                x = v(["success", "warning", "info", "question", "error"]),
                A = { previousBodyPadding: null },
                P = function (e, t) {
                    return e.classList.contains(t);
                },
                C = function (e) {
                    if ((e.focus(), "file" !== e.type)) {
                        var t = e.value;
                        (e.value = ""), (e.value = t);
                    }
                },
                M = function (e, t, n) {
                    e &&
                        t &&
                        ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)),
                        t.forEach(function (t) {
                            e.forEach
                                ? e.forEach(function (e) {
                                      n ? e.classList.add(t) : e.classList.remove(t);
                                  })
                                : n
                                ? e.classList.add(t)
                                : e.classList.remove(t);
                        }));
                },
                k = function (e, t) {
                    M(e, t, !0);
                },
                G = function (e, t) {
                    M(e, t, !1);
                },
                B = function (e, t) {
                    for (var n = 0; n < e.childNodes.length; n++) if (P(e.childNodes[n], t)) return e.childNodes[n];
                },
                E = function (e) {
                    (e.style.opacity = ""), (e.style.display = e.id === S.content ? "block" : "flex");
                },
                H = function (e) {
                    (e.style.opacity = ""), (e.style.display = "none");
                },
                D = function (e) {
                    return e && (e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                },
                L = function () {
                    return document.body.querySelector("." + S.container);
                },
                I = function (e) {
                    var t = L();
                    return t ? t.querySelector("." + e) : null;
                },
                O = function () {
                    return I(S.popup);
                },
                N = function () {
                    var e = O();
                    return m(e.querySelectorAll("." + S.icon));
                },
                V = function () {
                    return I(S.title);
                },
                R = function () {
                    return I(S.content);
                },
                F = function () {
                    return I(S.image);
                },
                X = function () {
                    return I(S["progress-steps"]);
                },
                j = function () {
                    return I(S["validation-message"]);
                },
                _ = function () {
                    return I(S.confirm);
                },
                W = function () {
                    return I(S.cancel);
                },
                z = function () {
                    return I(S.actions);
                },
                q = function () {
                    return I(S.footer);
                },
                U = function () {
                    return I(S.close);
                },
                K = function () {
                    var e = m(O().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (e, t) {
                            return (e = parseInt(e.getAttribute("tabindex"))), (t = parseInt(t.getAttribute("tabindex"))) < e ? 1 : e < t ? -1 : 0;
                        }),
                        t = m(
                            O().querySelectorAll(
                                'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]'
                            )
                        ).filter(function (e) {
                            return "-1" !== e.getAttribute("tabindex");
                        });
                    return (function (e) {
                        for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
                        return t;
                    })(e.concat(t)).filter(function (e) {
                        return D(e);
                    });
                },
                Q = function () {
                    return !$() && !document.body.classList.contains(S["no-backdrop"]);
                },
                $ = function () {
                    return document.body.classList.contains(S["toast-shown"]);
                },
                Y = function () {
                    return "undefined" == typeof window || "undefined" == typeof document;
                },
                Z = '\n <div aria-labelledby="'
                    .concat(S.title, '" aria-describedby="')
                    .concat(S.content, '" class="')
                    .concat(S.popup, '" tabindex="-1">\n   <div class="')
                    .concat(S.header, '">\n     <ul class="')
                    .concat(S["progress-steps"], '"></ul>\n     <div class="')
                    .concat(S.icon, " ")
                    .concat(x.error, '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="')
                    .concat(S.icon, " ")
                    .concat(x.question, '">\n       <span class="')
                    .concat(S["icon-text"], '">?</span>\n      </div>\n     <div class="')
                    .concat(S.icon, " ")
                    .concat(x.warning, '">\n       <span class="')
                    .concat(S["icon-text"], '">!</span>\n      </div>\n     <div class="')
                    .concat(S.icon, " ")
                    .concat(x.info, '">\n       <span class="')
                    .concat(S["icon-text"], '">i</span>\n      </div>\n     <div class="')
                    .concat(S.icon, " ")
                    .concat(
                        x.success,
                        '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="'
                    )
                    .concat(S.image, '" />\n     <h2 class="')
                    .concat(S.title, '" id="')
                    .concat(S.title, '"></h2>\n     <button type="button" class="')
                    .concat(S.close, '">Ã—</button>\n   </div>\n   <div class="')
                    .concat(S.content, '">\n     <div id="')
                    .concat(S.content, '"></div>\n     <input class="')
                    .concat(S.input, '" />\n     <input type="file" class="')
                    .concat(S.file, '" />\n     <div class="')
                    .concat(S.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="')
                    .concat(S.select, '"></select>\n     <div class="')
                    .concat(S.radio, '"></div>\n     <label for="')
                    .concat(S.checkbox, '" class="')
                    .concat(S.checkbox, '">\n       <input type="checkbox" />\n       <span class="')
                    .concat(S.label, '"></span>\n     </label>\n     <textarea class="')
                    .concat(S.textarea, '"></textarea>\n     <div class="')
                    .concat(S["validation-message"], '" id="')
                    .concat(S["validation-message"], '"></div>\n   </div>\n   <div class="')
                    .concat(S.actions, '">\n     <button type="button" class="')
                    .concat(S.confirm, '">OK</button>\n     <button type="button" class="')
                    .concat(S.cancel, '">Cancel</button>\n   </div>\n   <div class="')
                    .concat(S.footer, '">\n   </div>\n </div>\n')
                    .replace(/(^|\n)\s*/g, ""),
                J = function (e) {
                    var t = L();
                    if ((t && (t.parentNode.removeChild(t), G([document.documentElement, document.body], [S["no-backdrop"], S["toast-shown"], S["has-column"]])), !Y())) {
                        var n = document.createElement("div");
                        (n.className = S.container), (n.innerHTML = Z);
                        var o = "string" == typeof e.target ? document.querySelector(e.target) : e.target;
                        o.appendChild(n);
                        var r,
                            i = O(),
                            a = R(),
                            s = B(a, S.input),
                            l = B(a, S.file),
                            c = a.querySelector(".".concat(S.range, " input")),
                            u = a.querySelector(".".concat(S.range, " output")),
                            d = B(a, S.select),
                            p = a.querySelector(".".concat(S.checkbox, " input")),
                            f = B(a, S.textarea);
                        i.setAttribute("role", e.toast ? "alert" : "dialog"),
                            i.setAttribute("aria-live", e.toast ? "polite" : "assertive"),
                            e.toast || i.setAttribute("aria-modal", "true"),
                            "rtl" === window.getComputedStyle(o).direction && k(L(), S.rtl);
                        var m = function (e) {
                            Me.isVisible() && r !== e.target.value && Me.resetValidationMessage(), (r = e.target.value);
                        };
                        return (
                            (s.oninput = m),
                            (l.onchange = m),
                            (d.onchange = m),
                            (p.onchange = m),
                            (f.oninput = m),
                            (c.oninput = function (e) {
                                m(e), (u.value = c.value);
                            }),
                            (c.onchange = function (e) {
                                m(e), (c.nextSibling.value = c.value);
                            }),
                            i
                        );
                    }
                    b("SweetAlert2 requires document to initialize");
                },
                ee = function (t, n) {
                    if (!t) return H(n);
                    if (t instanceof HTMLElement) n.appendChild(t);
                    else if ("object" === e(t))
                        if (((n.innerHTML = ""), 0 in t)) for (var o = 0; o in t; o++) n.appendChild(t[o].cloneNode(!0));
                        else n.appendChild(t.cloneNode(!0));
                    else t && (n.innerHTML = t);
                    E(n);
                },
                te = (function () {
                    if (Y()) return !1;
                    var e = document.createElement("div"),
                        t = { WebkitAnimation: "webkitAnimationEnd", OAnimation: "oAnimationEnd oanimationend", animation: "animationend" };
                    for (var n in t) if (t.hasOwnProperty(n) && void 0 !== e.style[n]) return t[n];
                    return !1;
                })(),
                ne = function (e) {
                    var t = z(),
                        n = _(),
                        o = W();
                    if (
                        (e.showConfirmButton || e.showCancelButton ? E(t) : H(t),
                        e.showCancelButton ? (o.style.display = "inline-block") : H(o),
                        e.showConfirmButton ? n.style.removeProperty("display") : H(n),
                        (n.innerHTML = e.confirmButtonText),
                        (o.innerHTML = e.cancelButtonText),
                        n.setAttribute("aria-label", e.confirmButtonAriaLabel),
                        o.setAttribute("aria-label", e.cancelButtonAriaLabel),
                        (n.className = S.confirm),
                        k(n, e.confirmButtonClass),
                        (o.className = S.cancel),
                        k(o, e.cancelButtonClass),
                        e.buttonsStyling)
                    ) {
                        k([n, o], S.styled), e.confirmButtonColor && (n.style.backgroundColor = e.confirmButtonColor), e.cancelButtonColor && (o.style.backgroundColor = e.cancelButtonColor);
                        var r = window.getComputedStyle(n).getPropertyValue("background-color");
                        (n.style.borderLeftColor = r), (n.style.borderRightColor = r);
                    } else G([n, o], S.styled), (n.style.backgroundColor = n.style.borderLeftColor = n.style.borderRightColor = ""), (o.style.backgroundColor = o.style.borderLeftColor = o.style.borderRightColor = "");
                },
                oe = function (e) {
                    var t = R().querySelector("#" + S.content);
                    e.html ? ee(e.html, t) : e.text ? ((t.textContent = e.text), E(t)) : H(t);
                },
                re = function (e) {
                    for (var t = N(), n = 0; n < t.length; n++) H(t[n]);
                    if (e.type)
                        if (-1 !== Object.keys(x).indexOf(e.type)) {
                            var o = Me.getPopup().querySelector(".".concat(S.icon, ".").concat(x[e.type]));
                            E(o), e.animation && k(o, "swal2-animate-".concat(e.type, "-icon"));
                        } else b('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.type, '"'));
                },
                ie = function (e) {
                    var t = F();
                    e.imageUrl
                        ? (t.setAttribute("src", e.imageUrl),
                          t.setAttribute("alt", e.imageAlt),
                          E(t),
                          e.imageWidth ? t.setAttribute("width", e.imageWidth) : t.removeAttribute("width"),
                          e.imageHeight ? t.setAttribute("height", e.imageHeight) : t.removeAttribute("height"),
                          (t.className = S.image),
                          e.imageClass && k(t, e.imageClass))
                        : H(t);
                },
                ae = function (e) {
                    var t = X(),
                        n = parseInt(null === e.currentProgressStep ? Me.getQueueStep() : e.currentProgressStep, 10);
                    e.progressSteps && e.progressSteps.length
                        ? (E(t),
                          (t.innerHTML = ""),
                          n >= e.progressSteps.length && h("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),
                          e.progressSteps.forEach(function (o, r) {
                              var i = document.createElement("li");
                              if ((k(i, S["progress-step"]), (i.innerHTML = o), r === n && k(i, S["active-progress-step"]), t.appendChild(i), r !== e.progressSteps.length - 1)) {
                                  var a = document.createElement("li");
                                  k(a, S["progress-step-line"]), e.progressStepsDistance && (a.style.width = e.progressStepsDistance), t.appendChild(a);
                              }
                          }))
                        : H(t);
                },
                se = function (e) {
                    var t = V();
                    e.titleText ? (t.innerText = e.titleText) : e.title && ("string" == typeof e.title && (e.title = e.title.split("\n").join("<br />")), ee(e.title, t));
                },
                le = [],
                ce = function () {
                    var e = O();
                    e || Me.fire(""), (e = O());
                    var t = z(),
                        n = _(),
                        o = W();
                    E(t), E(n), k([e, t], S.loading), (n.disabled = !0), (o.disabled = !0), e.setAttribute("data-loading", !0), e.setAttribute("aria-busy", !0), e.focus();
                },
                ue = {},
                de = {
                    title: "",
                    titleText: "",
                    text: "",
                    html: "",
                    footer: "",
                    type: null,
                    toast: !1,
                    customClass: "",
                    customContainerClass: "",
                    target: "body",
                    backdrop: !0,
                    animation: !0,
                    heightAuto: !0,
                    allowOutsideClick: !0,
                    allowEscapeKey: !0,
                    allowEnterKey: !0,
                    stopKeydownPropagation: !0,
                    keydownListenerCapture: !1,
                    showConfirmButton: !0,
                    showCancelButton: !1,
                    preConfirm: null,
                    confirmButtonText: "OK",
                    confirmButtonAriaLabel: "",
                    confirmButtonColor: null,
                    confirmButtonClass: "",
                    cancelButtonText: "Cancel",
                    cancelButtonAriaLabel: "",
                    cancelButtonColor: null,
                    cancelButtonClass: "",
                    buttonsStyling: !0,
                    reverseButtons: !1,
                    focusConfirm: !0,
                    focusCancel: !1,
                    showCloseButton: !1,
                    closeButtonAriaLabel: "Close this dialog",
                    showLoaderOnConfirm: !1,
                    imageUrl: null,
                    imageWidth: null,
                    imageHeight: null,
                    imageAlt: "",
                    imageClass: "",
                    timer: null,
                    width: null,
                    padding: null,
                    background: null,
                    input: null,
                    inputPlaceholder: "",
                    inputValue: "",
                    inputOptions: {},
                    inputAutoTrim: !0,
                    inputClass: "",
                    inputAttributes: {},
                    inputValidator: null,
                    validationMessage: null,
                    grow: !1,
                    position: "center",
                    progressSteps: [],
                    currentProgressStep: null,
                    progressStepsDistance: null,
                    onBeforeOpen: null,
                    onAfterClose: null,
                    onOpen: null,
                    onClose: null,
                    scrollbarPadding: !0,
                },
                pe = [],
                fe = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"],
                me = function (e) {
                    return de.hasOwnProperty(e);
                },
                he = function (e) {
                    return -1 !== pe.indexOf(e);
                },
                be = Object.freeze({
                    isValidParameter: me,
                    isUpdatableParameter: function (e) {
                        return (
                            -1 !==
                            [
                                "title",
                                "titleText",
                                "text",
                                "html",
                                "type",
                                "showConfirmButton",
                                "showCancelButton",
                                "confirmButtonText",
                                "confirmButtonAriaLabel",
                                "confirmButtonColor",
                                "confirmButtonClass",
                                "cancelButtonText",
                                "cancelButtonAriaLabel",
                                "cancelButtonColor",
                                "cancelButtonClass",
                                "buttonsStyling",
                                "reverseButtons",
                                "imageUrl",
                                "imageWidth",
                                "imageHeigth",
                                "imageAlt",
                                "imageClass",
                                "progressSteps",
                                "currentProgressStep",
                            ].indexOf(e)
                        );
                    },
                    isDeprecatedParameter: he,
                    argsToParams: function (t) {
                        var n = {};
                        switch (e(t[0])) {
                            case "object":
                                o(n, t[0]);
                                break;
                            default:
                                ["title", "html", "type"].forEach(function (o, r) {
                                    switch (e(t[r])) {
                                        case "string":
                                            n[o] = t[r];
                                            break;
                                        case "undefined":
                                            break;
                                        default:
                                            b("Unexpected type of ".concat(o, '! Expected "string", got ').concat(e(t[r])));
                                    }
                                });
                        }
                        return n;
                    },
                    isVisible: function () {
                        return !!O();
                    },
                    clickConfirm: function () {
                        return _().click();
                    },
                    clickCancel: function () {
                        return W().click();
                    },
                    getContainer: L,
                    getPopup: O,
                    getTitle: V,
                    getContent: R,
                    getImage: F,
                    getIcons: N,
                    getCloseButton: U,
                    getActions: z,
                    getConfirmButton: _,
                    getCancelButton: W,
                    getFooter: q,
                    getFocusableElements: K,
                    getValidationMessage: j,
                    isLoading: function () {
                        return O().hasAttribute("data-loading");
                    },
                    fire: function () {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return a(this, t);
                    },
                    mixin: function (e) {
                        return (function (a) {
                            function c() {
                                return t(this, c), s(this, r(c).apply(this, arguments));
                            }
                            return (
                                (function (e, t) {
                                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && i(e, t);
                                })(c, a),
                                n(c.prototype, [
                                    {
                                        key: "_main",
                                        value: function (t) {
                                            return l(r(c.prototype), "_main", this).call(this, o({}, e, t));
                                        },
                                    },
                                ]),
                                c
                            );
                        })(this);
                    },
                    queue: function (e) {
                        var t = this;
                        le = e;
                        var n = function () {
                                (le = []), document.body.removeAttribute("data-swal2-queue-step");
                            },
                            o = [];
                        return new Promise(function (e) {
                            !(function r(i, a) {
                                i < le.length
                                    ? (document.body.setAttribute("data-swal2-queue-step", i),
                                      t.fire(le[i]).then(function (t) {
                                          void 0 !== t.value ? (o.push(t.value), r(i + 1, a)) : (n(), e({ dismiss: t.dismiss }));
                                      }))
                                    : (n(), e({ value: o }));
                            })(0);
                        });
                    },
                    getQueueStep: function () {
                        return document.body.getAttribute("data-swal2-queue-step");
                    },
                    insertQueueStep: function (e, t) {
                        return t && t < le.length ? le.splice(t, 0, e) : le.push(e);
                    },
                    deleteQueueStep: function (e) {
                        void 0 !== le[e] && le.splice(e, 1);
                    },
                    showLoading: ce,
                    enableLoading: ce,
                    getTimerLeft: function () {
                        return ue.timeout && ue.timeout.getTimerLeft();
                    },
                    stopTimer: function () {
                        return ue.timeout && ue.timeout.stop();
                    },
                    resumeTimer: function () {
                        return ue.timeout && ue.timeout.start();
                    },
                    toggleTimer: function () {
                        var e = ue.timeout;
                        return e && (e.running ? e.stop() : e.start());
                    },
                    increaseTimer: function (e) {
                        return ue.timeout && ue.timeout.increase(e);
                    },
                    isTimerRunning: function () {
                        return ue.timeout && ue.timeout.isRunning();
                    },
                }),
                ge = { promise: new WeakMap(), innerParams: new WeakMap(), domCache: new WeakMap() },
                we = function () {
                    null === A.previousBodyPadding &&
                        document.body.scrollHeight > window.innerHeight &&
                        ((A.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"))),
                        (document.body.style.paddingRight =
                            A.previousBodyPadding +
                            (function () {
                                if ("ontouchstart" in window || navigator.msMaxTouchPoints) return 0;
                                var e = document.createElement("div");
                                (e.style.width = "50px"), (e.style.height = "50px"), (e.style.overflow = "scroll"), document.body.appendChild(e);
                                var t = e.offsetWidth - e.clientWidth;
                                return document.body.removeChild(e), t;
                            })() +
                            "px"));
                },
                Te = function () {
                    return !!window.MSInputMethodContext && !!document.documentMode;
                },
                ye = function () {
                    var e = L(),
                        t = O();
                    e.style.removeProperty("align-items"), t.offsetTop < 0 && (e.style.alignItems = "flex-start");
                },
                ve = {
                    swalPromiseResolve: new WeakMap(),
                },
                Se = function (e) {
                    null !== e &&
                        "function" == typeof e &&
                        setTimeout(function () {
                            e();
                        });
                },
                xe = function e(n, o) {
                    t(this, e);
                    var r,
                        i,
                        a = o;
                    (this.running = !1),
                        (this.start = function () {
                            return this.running || ((this.running = !0), (i = new Date()), (r = setTimeout(n, a))), a;
                        }),
                        (this.stop = function () {
                            return this.running && ((this.running = !1), clearTimeout(r), (a -= new Date() - i)), a;
                        }),
                        (this.increase = function (e) {
                            var t = this.running;
                            return t && this.stop(), (a += e), t && this.start(), a;
                        }),
                        (this.getTimerLeft = function () {
                            return this.running && (this.stop(), this.start()), a;
                        }),
                        (this.isRunning = function () {
                            return this.running;
                        }),
                        this.start();
                },
                Ae = {
                    email: function (e, t) {
                        return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address");
                    },
                    url: function (e, t) {
                        return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL");
                    },
                },
                Pe = function (e) {
                    var t = L(),
                        n = O();
                    null !== e.onBeforeOpen && "function" == typeof e.onBeforeOpen && e.onBeforeOpen(n),
                        e.animation ? (k(n, S.show), k(t, S.fade), G(n, S.hide)) : G(n, S.fade),
                        E(n),
                        (t.style.overflowY = "hidden"),
                        te && !P(n, S.noanimation)
                            ? n.addEventListener(te, function e() {
                                  n.removeEventListener(te, e), (t.style.overflowY = "auto");
                              })
                            : (t.style.overflowY = "auto"),
                        k([document.documentElement, document.body, t], S.shown),
                        e.heightAuto && e.backdrop && !e.toast && k([document.documentElement, document.body], S["height-auto"]),
                        Q() &&
                            (e.scrollbarPadding && we(),
                            (function () {
                                if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !P(document.body, S.iosfix)) {
                                    var e = document.body.scrollTop;
                                    (document.body.style.top = -1 * e + "px"), k(document.body, S.iosfix);
                                }
                            })(),
                            "undefined" != typeof window && Te() && (ye(), window.addEventListener("resize", ye)),
                            m(document.body.children).forEach(function (e) {
                                e === L() ||
                                    (function (e, t) {
                                        if ("function" == typeof e.contains) return e.contains(t);
                                    })(e, L()) ||
                                    (e.hasAttribute("aria-hidden") && e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden")), e.setAttribute("aria-hidden", "true"));
                            }),
                            setTimeout(function () {
                                t.scrollTop = 0;
                            })),
                        $() || ue.previousActiveElement || (ue.previousActiveElement = document.activeElement),
                        null !== e.onOpen &&
                            "function" == typeof e.onOpen &&
                            setTimeout(function () {
                                e.onOpen(n);
                            });
                },
                Ce = Object.freeze({
                    hideLoading: c,
                    disableLoading: c,
                    getInput: function (e) {
                        var t = ge.innerParams.get(this),
                            n = ge.domCache.get(this);
                        if (!(e = e || t.input)) return null;
                        switch (e) {
                            case "select":
                            case "textarea":
                            case "file":
                                return B(n.content, S[e]);
                            case "checkbox":
                                return n.popup.querySelector(".".concat(S.checkbox, " input"));
                            case "radio":
                                return n.popup.querySelector(".".concat(S.radio, " input:checked")) || n.popup.querySelector(".".concat(S.radio, " input:first-child"));
                            case "range":
                                return n.popup.querySelector(".".concat(S.range, " input"));
                            default:
                                return B(n.content, S.input);
                        }
                    },
                    close: u,
                    closePopup: u,
                    closeModal: u,
                    closeToast: u,
                    enableButtons: function () {
                        var e = ge.domCache.get(this);
                        (e.confirmButton.disabled = !1), (e.cancelButton.disabled = !1);
                    },
                    disableButtons: function () {
                        var e = ge.domCache.get(this);
                        (e.confirmButton.disabled = !0), (e.cancelButton.disabled = !0);
                    },
                    enableConfirmButton: function () {
                        ge.domCache.get(this).confirmButton.disabled = !1;
                    },
                    disableConfirmButton: function () {
                        ge.domCache.get(this).confirmButton.disabled = !0;
                    },
                    enableInput: function () {
                        var e = this.getInput();
                        if (!e) return !1;
                        if ("radio" === e.type) for (var t = e.parentNode.parentNode.querySelectorAll("input"), n = 0; n < t.length; n++) t[n].disabled = !1;
                        else e.disabled = !1;
                    },
                    disableInput: function () {
                        var e = this.getInput();
                        if (!e) return !1;
                        if (e && "radio" === e.type) for (var t = e.parentNode.parentNode.querySelectorAll("input"), n = 0; n < t.length; n++) t[n].disabled = !0;
                        else e.disabled = !0;
                    },
                    showValidationMessage: function (e) {
                        var t = ge.domCache.get(this);
                        t.validationMessage.innerHTML = e;
                        var n = window.getComputedStyle(t.popup);
                        (t.validationMessage.style.marginLeft = "-".concat(n.getPropertyValue("padding-left"))), (t.validationMessage.style.marginRight = "-".concat(n.getPropertyValue("padding-right"))), E(t.validationMessage);
                        var o = this.getInput();
                        o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedBy", S["validation-message"]), C(o), k(o, S.inputerror));
                    },
                    resetValidationMessage: function () {
                        var e = ge.domCache.get(this);
                        e.validationMessage && H(e.validationMessage);
                        var t = this.getInput();
                        t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedBy"), G(t, S.inputerror));
                    },
                    getProgressSteps: function () {
                        return ge.innerParams.get(this).progressSteps;
                    },
                    setProgressSteps: function (e) {
                        var t = o({}, ge.innerParams.get(this), { progressSteps: e });
                        ge.innerParams.set(this, t), ae(t);
                    },
                    showProgressSteps: function () {
                        var e = ge.domCache.get(this);
                        E(e.progressSteps);
                    },
                    hideProgressSteps: function () {
                        var e = ge.domCache.get(this);
                        H(e.progressSteps);
                    },
                    _main: function (t) {
                        var n = this;
                        !(function (e) {
                            for (var t in e)
                                me(t) || h('Unknown parameter "'.concat(t, '"')),
                                    e.toast && -1 !== fe.indexOf(t) && h('The parameter "'.concat(t, '" is incompatible with toasts')),
                                    he(t) && ((n = 'The parameter "'.concat(t, '" is deprecated and will be removed in the next major release.')), -1 === g.indexOf(n) && (g.push(n), h(n)));
                            var n;
                        })(t);
                        var r = o({}, de, t);
                        !(function (e) {
                            var t;
                            e.inputValidator ||
                                Object.keys(Ae).forEach(function (t) {
                                    e.input === t && (e.inputValidator = Ae[t]);
                                }),
                                (!e.target || ("string" == typeof e.target && !document.querySelector(e.target)) || ("string" != typeof e.target && !e.target.appendChild)) &&
                                    (h('Target parameter is not valid, defaulting to "body"'), (e.target = "body")),
                                "function" == typeof e.animation && (e.animation = e.animation.call());
                            var n = O(),
                                o = "string" == typeof e.target ? document.querySelector(e.target) : e.target;
                            (t = n && o && n.parentNode !== o.parentNode ? J(e) : n || J(e)),
                                e.width && (t.style.width = "number" == typeof e.width ? e.width + "px" : e.width),
                                e.padding && (t.style.padding = "number" == typeof e.padding ? e.padding + "px" : e.padding),
                                e.background && (t.style.background = e.background);
                            for (var r = window.getComputedStyle(t).getPropertyValue("background-color"), i = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), a = 0; a < i.length; a++)
                                i[a].style.backgroundColor = r;
                            var s = L(),
                                l = U(),
                                c = q();
                            if (
                                (se(e),
                                oe(e),
                                "string" == typeof e.backdrop ? (L().style.background = e.backdrop) : e.backdrop || k([document.documentElement, document.body], S["no-backdrop"]),
                                !e.backdrop && e.allowOutsideClick && h('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),
                                e.position in S ? k(s, S[e.position]) : (h('The "position" parameter is not valid, defaulting to "center"'), k(s, S.center)),
                                e.grow && "string" == typeof e.grow)
                            ) {
                                var u = "grow-" + e.grow;
                                u in S && k(s, S[u]);
                            }
                            e.showCloseButton ? (l.setAttribute("aria-label", e.closeButtonAriaLabel), E(l)) : H(l),
                                (t.className = S.popup),
                                e.toast ? (k([document.documentElement, document.body], S["toast-shown"]), k(t, S.toast)) : k(t, S.modal),
                                e.customClass && k(t, e.customClass),
                                e.customContainerClass && k(s, e.customContainerClass),
                                ae(e),
                                re(e),
                                ie(e),
                                ne(e),
                                ee(e.footer, c),
                                !0 === e.animation ? G(t, S.noanimation) : k(t, S.noanimation),
                                e.showLoaderOnConfirm &&
                                    !e.preConfirm &&
                                    h("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");
                        })(r),
                            Object.freeze(r),
                            ge.innerParams.set(this, r),
                            ue.timeout && (ue.timeout.stop(), delete ue.timeout),
                            clearTimeout(ue.restoreFocusTimeout);
                        var i = { popup: O(), container: L(), content: R(), actions: z(), confirmButton: _(), cancelButton: W(), closeButton: U(), validationMessage: j(), progressSteps: X() };
                        ge.domCache.set(this, i);
                        var a = this.constructor;
                        return new Promise(function (t) {
                            var o = function (e) {
                                    n.closePopup({ value: e });
                                },
                                s = function (e) {
                                    n.closePopup({ dismiss: e });
                                };
                            ve.swalPromiseResolve.set(n, t),
                                r.timer &&
                                    (ue.timeout = new xe(function () {
                                        s("timer"), delete ue.timeout;
                                    }, r.timer)),
                                r.input &&
                                    setTimeout(function () {
                                        var e = n.getInput();
                                        e && C(e);
                                    }, 0);
                            for (
                                var l = function (e) {
                                        r.showLoaderOnConfirm && a.showLoading(),
                                            r.preConfirm
                                                ? (n.resetValidationMessage(),
                                                  Promise.resolve()
                                                      .then(function () {
                                                          return r.preConfirm(e, r.validationMessage);
                                                      })
                                                      .then(function (t) {
                                                          D(i.validationMessage) || !1 === t ? n.hideLoading() : o(void 0 === t ? e : t);
                                                      }))
                                                : o(e);
                                    },
                                    c = function (e) {
                                        var t = e.target,
                                            o = i.confirmButton,
                                            c = i.cancelButton,
                                            u = o && (o === t || o.contains(t)),
                                            d = c && (c === t || c.contains(t));
                                        switch (e.type) {
                                            case "click":
                                                if (u && a.isVisible())
                                                    if ((n.disableButtons(), r.input)) {
                                                        var p = (function () {
                                                            var e = n.getInput();
                                                            if (!e) return null;
                                                            switch (r.input) {
                                                                case "checkbox":
                                                                    return e.checked ? 1 : 0;
                                                                case "radio":
                                                                    return e.checked ? e.value : null;
                                                                case "file":
                                                                    return e.files.length ? e.files[0] : null;
                                                                default:
                                                                    return r.inputAutoTrim ? e.value.trim() : e.value;
                                                            }
                                                        })();
                                                        r.inputValidator
                                                            ? (n.disableInput(),
                                                              Promise.resolve()
                                                                  .then(function () {
                                                                      return r.inputValidator(p, r.validationMessage);
                                                                  })
                                                                  .then(function (e) {
                                                                      n.enableButtons(), n.enableInput(), e ? n.showValidationMessage(e) : l(p);
                                                                  }))
                                                            : n.getInput().checkValidity()
                                                            ? l(p)
                                                            : (n.enableButtons(), n.showValidationMessage(r.validationMessage));
                                                    } else l(!0);
                                                else d && a.isVisible() && (n.disableButtons(), s(a.DismissReason.cancel));
                                        }
                                    },
                                    u = i.popup.querySelectorAll("button"),
                                    d = 0;
                                d < u.length;
                                d++
                            )
                                (u[d].onclick = c), (u[d].onmouseover = c), (u[d].onmouseout = c), (u[d].onmousedown = c);
                            if (
                                ((i.closeButton.onclick = function () {
                                    s(a.DismissReason.close);
                                }),
                                r.toast)
                            )
                                i.popup.onclick = function () {
                                    r.showConfirmButton || r.showCancelButton || r.showCloseButton || r.input || s(a.DismissReason.close);
                                };
                            else {
                                var p = !1;
                                (i.popup.onmousedown = function () {
                                    i.container.onmouseup = function (e) {
                                        (i.container.onmouseup = void 0), e.target === i.container && (p = !0);
                                    };
                                }),
                                    (i.container.onmousedown = function () {
                                        i.popup.onmouseup = function (e) {
                                            (i.popup.onmouseup = void 0), (e.target === i.popup || i.popup.contains(e.target)) && (p = !0);
                                        };
                                    }),
                                    (i.container.onclick = function (e) {
                                        p ? (p = !1) : e.target === i.container && w(r.allowOutsideClick) && s(a.DismissReason.backdrop);
                                    });
                            }
                            r.reverseButtons ? i.confirmButton.parentNode.insertBefore(i.cancelButton, i.confirmButton) : i.confirmButton.parentNode.insertBefore(i.confirmButton, i.cancelButton);
                            var f = function (e, t) {
                                for (var n = K(r.focusCancel), o = 0; o < n.length; o++) return (e += t) === n.length ? (e = 0) : -1 === e && (e = n.length - 1), n[e].focus();
                                i.popup.focus();
                            };
                            ue.keydownHandlerAdded && (ue.keydownTarget.removeEventListener("keydown", ue.keydownHandler, { capture: ue.keydownListenerCapture }), (ue.keydownHandlerAdded = !1)),
                                r.toast ||
                                    ((ue.keydownHandler = function (e) {
                                        return (function (e, t) {
                                            if ((t.stopKeydownPropagation && e.stopPropagation(), "Enter" !== e.key || e.isComposing))
                                                if ("Tab" === e.key) {
                                                    for (var o = e.target, r = K(t.focusCancel), l = -1, c = 0; c < r.length; c++)
                                                        if (o === r[c]) {
                                                            l = c;
                                                            break;
                                                        }
                                                    e.shiftKey ? f(l, -1) : f(l, 1), e.stopPropagation(), e.preventDefault();
                                                } else
                                                    -1 !== ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"].indexOf(e.key)
                                                        ? document.activeElement === i.confirmButton && D(i.cancelButton)
                                                            ? i.cancelButton.focus()
                                                            : document.activeElement === i.cancelButton && D(i.confirmButton) && i.confirmButton.focus()
                                                        : ("Escape" !== e.key && "Esc" !== e.key) || !0 !== w(t.allowEscapeKey) || (e.preventDefault(), s(a.DismissReason.esc));
                                            else if (e.target && n.getInput() && e.target.outerHTML === n.getInput().outerHTML) {
                                                if (-1 !== ["textarea", "file"].indexOf(t.input)) return;
                                                a.clickConfirm(), e.preventDefault();
                                            }
                                        })(e, r);
                                    }),
                                    (ue.keydownTarget = r.keydownListenerCapture ? window : i.popup),
                                    (ue.keydownListenerCapture = r.keydownListenerCapture),
                                    ue.keydownTarget.addEventListener("keydown", ue.keydownHandler, { capture: ue.keydownListenerCapture }),
                                    (ue.keydownHandlerAdded = !0)),
                                n.enableButtons(),
                                n.hideLoading(),
                                n.resetValidationMessage(),
                                r.toast && (r.input || r.footer || r.showCloseButton) ? k(document.body, S["toast-column"]) : G(document.body, S["toast-column"]);
                            for (
                                var m,
                                    g,
                                    y = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
                                    v = function (e) {
                                        (e.placeholder && !r.inputPlaceholder) || (e.placeholder = r.inputPlaceholder);
                                    },
                                    x = 0;
                                x < y.length;
                                x++
                            ) {
                                var A = S[y[x]],
                                    P = B(i.content, A);
                                if ((m = n.getInput(y[x]))) {
                                    for (var M in m.attributes)
                                        if (m.attributes.hasOwnProperty(M)) {
                                            var L = m.attributes[M].name;
                                            "type" !== L && "value" !== L && m.removeAttribute(L);
                                        }
                                    for (var I in r.inputAttributes) ("range" === y[x] && "placeholder" === I) || m.setAttribute(I, r.inputAttributes[I]);
                                }
                                (P.className = A), r.inputClass && k(P, r.inputClass), H(P);
                            }
                            switch (r.input) {
                                case "text":
                                case "email":
                                case "password":
                                case "number":
                                case "tel":
                                case "url":
                                    (m = B(i.content, S.input)),
                                        "string" == typeof r.inputValue || "number" == typeof r.inputValue
                                            ? (m.value = r.inputValue)
                                            : T(r.inputValue) || h('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(e(r.inputValue), '"')),
                                        v(m),
                                        (m.type = r.input),
                                        E(m);
                                    break;
                                case "file":
                                    v((m = B(i.content, S.file))), (m.type = r.input), E(m);
                                    break;
                                case "range":
                                    var O = B(i.content, S.range),
                                        N = O.querySelector("input"),
                                        V = O.querySelector("output");
                                    (N.value = r.inputValue), (N.type = r.input), (V.value = r.inputValue), E(O);
                                    break;
                                case "select":
                                    var R = B(i.content, S.select);
                                    if (((R.innerHTML = ""), r.inputPlaceholder)) {
                                        var F = document.createElement("option");
                                        (F.innerHTML = r.inputPlaceholder), (F.value = ""), (F.disabled = !0), (F.selected = !0), R.appendChild(F);
                                    }
                                    g = function (e) {
                                        e.forEach(function (e) {
                                            var t = e[0],
                                                n = e[1],
                                                o = document.createElement("option");
                                            (o.value = t), (o.innerHTML = n), r.inputValue.toString() === t.toString() && (o.selected = !0), R.appendChild(o);
                                        }),
                                            E(R),
                                            R.focus();
                                    };
                                    break;
                                case "radio":
                                    var X = B(i.content, S.radio);
                                    (X.innerHTML = ""),
                                        (g = function (e) {
                                            e.forEach(function (e) {
                                                var t = e[0],
                                                    n = e[1],
                                                    o = document.createElement("input"),
                                                    i = document.createElement("label");
                                                (o.type = "radio"), (o.name = S.radio), (o.value = t), r.inputValue.toString() === t.toString() && (o.checked = !0);
                                                var a = document.createElement("span");
                                                (a.innerHTML = n), (a.className = S.label), i.appendChild(o), i.appendChild(a), X.appendChild(i);
                                            }),
                                                E(X);
                                            var t = X.querySelectorAll("input");
                                            t.length && t[0].focus();
                                        });
                                    break;
                                case "checkbox":
                                    var j = B(i.content, S.checkbox),
                                        _ = n.getInput("checkbox");
                                    (_.type = "checkbox"), (_.value = 1), (_.id = S.checkbox), (_.checked = Boolean(r.inputValue)), (j.querySelector("span").innerHTML = r.inputPlaceholder), E(j);
                                    break;
                                case "textarea":
                                    var W = B(i.content, S.textarea);
                                    (W.value = r.inputValue), v(W), E(W);
                                    break;
                                case null:
                                    break;
                                default:
                                    b('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(r.input, '"'));
                            }
                            if ("select" === r.input || "radio" === r.input) {
                                var z = function (e) {
                                    return g(
                                        ((t = e),
                                        (n = []),
                                        "undefined" != typeof Map && t instanceof Map
                                            ? t.forEach(function (e, t) {
                                                  n.push([t, e]);
                                              })
                                            : Object.keys(t).forEach(function (e) {
                                                  n.push([e, t[e]]);
                                              }),
                                        n)
                                    );
                                    var t, n;
                                };
                                T(r.inputOptions)
                                    ? (a.showLoading(),
                                      r.inputOptions.then(function (e) {
                                          n.hideLoading(), z(e);
                                      }))
                                    : "object" === e(r.inputOptions)
                                    ? z(r.inputOptions)
                                    : b("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(e(r.inputOptions)));
                            } else
                                -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(r.input) &&
                                    T(r.inputValue) &&
                                    (a.showLoading(),
                                    H(m),
                                    r.inputValue
                                        .then(function (e) {
                                            (m.value = "number" === r.input ? parseFloat(e) || 0 : e + ""), E(m), m.focus(), n.hideLoading();
                                        })
                                        .catch(function (e) {
                                            b("Error in inputValue promise: " + e), (m.value = ""), E(m), m.focus(), n.hideLoading();
                                        }));
                            Pe(r),
                                r.toast ||
                                    (w(r.allowEnterKey)
                                        ? r.focusCancel && D(i.cancelButton)
                                            ? i.cancelButton.focus()
                                            : r.focusConfirm && D(i.confirmButton)
                                            ? i.confirmButton.focus()
                                            : f(-1, 1)
                                        : document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()),
                                (i.container.scrollTop = 0);
                        });
                    },
                    update: function (e) {
                        var t = {};
                        Object.keys(e).forEach(function (n) {
                            Me.isUpdatableParameter(n) ? (t[n] = e[n]) : h('Invalid parameter to update: "'.concat(n, '". Updatable params are listed here: TODO (@limonte) add link'));
                        });
                        var n = o({}, ge.innerParams.get(this), t);
                        ne(n), oe(n), re(n), ie(n), ae(n), se(n), ge.innerParams.set(this, n);
                    },
                });
            (d.prototype.then = function (e) {
                return ge.promise.get(this).then(e);
            }),
                (d.prototype.finally = function (e) {
                    return ge.promise.get(this).finally(e);
                }),
                o(d.prototype, Ce),
                o(d, be),
                Object.keys(Ce).forEach(function (e) {
                    d[e] = function () {
                        var t;
                        if (p) return (t = p)[e].apply(t, arguments);
                    };
                }),
                (d.DismissReason = y),
                (d.version = "8.2.1");
            var Me = d;
            return (Me.default = Me);
        }),
        "undefined" != typeof window && window.Sweetalert2 && (window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2),
        "undefined" != typeof document &&
            (function (e, t) {
                var n = e.createElement("style");
                if ((e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet)) n.styleSheet.disabled || (n.styleSheet.cssText = t);
                else
                    try {
                        n.innerHTML = t;
                    } catch (e) {
                        n.innerText = t;
                    }
            })(
                document,
                "@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;box-shadow:0 0 .625em #d9d9d9;overflow-y:hidden}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon-text{font-size:2em;font-weight:700;line-height:1em}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:10px;background-color:transparent;z-index:1060;overflow-x:hidden;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem;box-sizing:border-box}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{flex-wrap:wrap;align-items:center;justify-content:center;margin:1.25em auto 0;z-index:1}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{width:2.5em;height:2.5em;margin:.46875em;padding:0;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;box-sizing:border-box;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled{margin:.3125em;padding:.625em 2em;font-weight:500;box-shadow:none}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-image{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer;overflow:hidden}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;z-index:1;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;font-size:1.125em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);box-sizing:border-box}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range{margin:1em auto;background:inherit}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:0 .75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{background:inherit;font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center;background:inherit}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;overflow:hidden}.swal2-popup .swal2-validation-message::before{display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center;content:'!';zoom:normal}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;zoom:normal}.swal2-icon-text{font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;top:-.25em;left:-.25em;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%;z-index:2;box-sizing:content-box}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;height:.3125em;border-radius:.125em;background-color:#a5dc86;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center;z-index:20}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:inherit;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:inherit}.swal2-progress-steps .swal2-progress-step-line{width:2.5em;height:.4em;margin:0 -1px;background:#3085d6;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:initial!important}}"
            ),
        t(["text!sslcz_widget_embed.css"], function (e) {
            var t = $("<style></style>", { type: "text/css" });
            t.text(e), $("head").append(t);
        }),
        t(["text!css/resp.css"], function (e) {
            var t = $("<style></style>", { type: "text/css" });
            t.text(e), $("head").append(t);
        }),
        t(["text!css/generic.css"], function (e) {
            var t = $("<style></style>", { type: "text/css" });
            t.text(e), $("head").append(t);
        }),
        t(["text!css/tingle.css"], function (e) {
            var t = $("<style></style>", { type: "text/css" });
            t.text(e), $("head").append(t);
        }),
        t(["jquery", "tingle", "mobiledetect", "swal"], function (e, t, n, o) {
            "use strict";
            var r = e.noConflict();
            !(function (e) {
                r.fn.attr = function () {
                    if (0 === arguments.length) {
                        if (0 === this.length) return null;
                        var t = {};
                        return (
                            r.each(this[0].attributes, function () {
                                this.specified && (t[this.name] = this.value);
                            }),
                            t
                        );
                    }
                    return e.apply(this, arguments);
                };
            })(r.fn.attr),
                r(function () {
                    var e, i;
                    window.popup = null;
                    (window.openedDomain = ""), (window.zpay_validation_code = "zpay@ssl"), (window.windowName = "easy"), (window.trackedWindows = {});
                    var a = !0;
                    (window.onfocus = function () {
                        a = !0;
                    }),
                        (window.onblur = function () {
                            a = !1;
                        }),
                        window.addEventListener(
                            "message",
                            function (t) {
                                if (void 0 != t.data) {
                                    var n = {};
                                    try {
                                        n = JSON.parse(t.data);
                                    } catch (t) {}
                                    void 0 != n.status &&
                                        "success" == n.status &&
                                        (void 0 != n.url && -1 !== n.url.indexOf("http") && (window.location.href = n.url),
                                        void 0 != n.type && (("redirect" != n.type && "gw_redirect" != n.type) || (window.location.href = n.url)),
                                        void 0 != n.type && "otp" == n.type && (i.close(), document.open(), document.write(n.data), document.close()),
                                        void 0 != n.type && "resize" == n.type && void 0 != n.height && n.height > 100 && (c ? (e.style.minHeight = window.outerHeight - 100 + "px") : (e.height = n.height)));
                                }
                            },
                            !1
                        );
                    var s = new n(window.navigator.userAgent),
                        l = s.is("iPhone"),
                        c = s.mobile();
                    c && r("body").addClass("pop_up_mobile_device");
                    var u = document.createElement("div");
                    u.setAttribute("class", "shaz_back_overlay"), u.setAttribute("style", "display:none");
                    var d = document.createElement("div");
                    d.setAttribute("class", "sloader lock");
                    r(".shaz_back_overlay");
                    r(u).html(
                        '<div class="lock-center"><div class="icon-lock" style="clear: left; float: left"><div class="lock-top-1" style="background-color: #fff"></div><div class="lock-top-2"></div><div class="lock-body" style="background-color: #24c875"></div><div class="lock-hole"></div></div></div>'
                    ),
                        u.append(d),
                        r("body").append(u);
                    var p = r("#myForm"),
                        f = r("#sslczPayBtn"),
                        m = (p.attr(), f.attr());
                    if (null != m) {
                        if (void 0 == m.order || "" == m.order) return void o.fire({ title: "Order Required", text: "Order required to pay", type: "error", confirmButtonText: "Oh! Ok" });
                        //if (void 0 == m.endpoint || "" == m.endpoint) return void o.fire({ title: "Endpoint Required", text: "Endpoint url required to pay", type: "error", confirmButtonText: "Oh! Ok" });
                    }
                    !window.XMLHttpRequest &&
                        "ActiveXObject" in window &&
                        (window.XMLHttpRequest = function () {
                            return new ActiveXObject("MSXML2.XMLHttp");
                        }),
                        r(document).ready(function () {
                            function n() {
                                r(u).fadeOut("slow");
                            }
                            function a(e, t, n, r) {
                                o.fire({ title: e, text: t, type: n, confirmButtonText: r });
                            }
                            function s(o, r) {
                                if (-1 !== o.indexOf("securepay.sslcommerz")) return void (window.location.href = o);
                                if (null !== c) n(), 1 == l ? (window.location.href = o) : window.open(o, "_blank");
                                else {
                                    (i = new t.modal({
                                        footer: !0,
                                        stickyFooter: !1,
                                        closeMethods: ["button"],
                                        closeLabel: "Close",
                                        cssClass: ["custom-class-1", "custom-class-2"],
                                        onOpen: function () {},
                                        onClose: function () {
                                            n();
                                        },
                                        beforeClose: function () {
                                            return !0;
                                        },
                                    })),
                                        (o += "?full=1");
                                    var a = document.createElement("div"),
                                        s = document.createElement("div"),
                                        u = document.createElement("div");
                                    (s.className = "client_logo"), (u.className = "client_logo_inner");
                                    var d = document.createElement("div");
                                    d.setAttribute("class", "iframeWrap"),
                                        (e = document.createElement("iframe")),
                                        (e.src = o),
                                        (e.name = "frame"),
                                        e.setAttribute("allowFullScreen", ""),
                                        (e.allowFullScreen = !0),
                                        (e.height = c ? 450 : 2e3),
                                        (e.width = 340),
                                        e.setAttribute("frameborder", "0"),
                                        (e.scrolling = "no"),
                                        (e.allowtransparency = !0),
                                        (e.seamless = !0),
                                        d.appendChild(e);
                                    var p = document.createElement("img");
                                    p.setAttribute("src", r),
                                        p.setAttribute("alt", "Logo"),
                                        u.appendChild(p),
                                        s.appendChild(u),
                                        a.appendChild(s),
                                        a.appendChild(d),
                                        i.setContent(a),
                                        i.addFooterBtn("&times;", "tingle-modal__close", function () {
                                            i.close();
                                        }),
                                        i.open();
                                }
                            }
                            f.click(function () {
                                u.style.display = "block";
                                var e = f.prop("postdata") ? f.prop("postdata") : {},
                                    t = f.prop("secure_token");
                                    var deltime = document.getElementsByClassName("deliveryTime");
                                    var dtime = deltime[0]['defaultValue'];
                                    var deldate = document.getElementsByClassName("deliveryDate");
                                    var ddate = deldate[0]['defaultValue'];
                                r.ajax({
                                    url: '/pay-via-ajax',
                                    dataType: "json",
                                    method: "POST",
                                    data: { order: "T.order", cart_json: JSON.stringify(t), deliverytime:ddate +' ' +dtime},
                                    xhr: function () {
                                        var e = new window.XMLHttpRequest();
                                        return (
                                            e.upload.addEventListener(
                                                "progress",
                                                function (e) {
                                                    e.lengthComputable && (e.loaded, e.total);
                                                },
                                                !1
                                            ),
                                            e.addEventListener(
                                                "progress",
                                                function (e) {
                                                    e.lengthComputable && (e.loaded, e.total, null.animate({ width: "100%" }, 50, function () {}));
                                                },
                                                !1
                                            ),
                                            e
                                        );
                                    },
                                }).then(
                                    function (e) {
                                        void 0 != e.status
                                            ? "success" == e.status.toLowerCase()
                                                ? e.data && -1 !== e.data.indexOf("http")
                                                    ? setTimeout(function () {
                                                          s(e.data, e.logo);
                                                      }, 10)
                                                    : e.GatewayPageURL && -1 !== e.GatewayPageURL.indexOf("http")
                                                    ? setTimeout(function () {
                                                          s(e.GatewayPageURL, e.storeLogo);
                                                      }, 10)
                                                    : (a("Error!", "Payment processing fails! Error generating payment URL", "error", "Ok"), n())
                                                : e.error
                                                ? (a("Error!", e.error, "error", "Ok"), n())
                                                : e.message
                                                ? (a("Error!", e.message, "error", "Ok"), n())
                                                : e.reason
                                                ? (a("Error!", e.reason, "error", "Ok"), n())
                                                : (a("Error!", "Payment processing fails! Transaction is fail to generate", "error", "Ok"), n())
                                            : (a("Error!", "Payment processing fails! Invalid response from server", "error", "Ok"), n());
                                    },
                                    function (e) {
                                        o.fire({ title: "Error in Communication", text: "Oops! Something wrong, Try again", type: "error", confirmButtonText: "Oh! Ok" }), n();
                                    }
                                );
                            });
                        });
                });
        }),
        n("embed", function () {});
})();
