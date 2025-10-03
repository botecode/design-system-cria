import Ie, { useState as br } from "react";
const B = {
  // Primary Colors
  primary: "#7566A1",
  primaryLight: "#3A2E52",
  primaryDark: "#2A1F3A",
  // Secondary Colors
  secondary: "#28DDB9",
  secondaryDark: "#167B7A",
  // Background Colors
  background: "#F2F4F3",
  backgroundLight: "#FFFFFF",
  backgroundDark: "#1A1A1A",
  // Neutral Colors
  white: "#FFFFFF",
  black: "#000000",
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827"
  },
  // Semantic Colors
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",
  // Text Colors
  text: {
    primary: "#3A2E52",
    // Primary Darker
    secondary: "#6B7280",
    disabled: "#9CA3AF",
    inverse: "#FFFFFF"
  },
  // Border Colors
  border: {
    light: "#E5E7EB",
    medium: "#D1D5DB",
    dark: "#9CA3AF"
  }
}, F = {
  0: "0px",
  1: "4px",
  // 0.25rem
  2: "8px",
  // 0.5rem
  3: "12px",
  // 0.75rem
  4: "16px",
  // 1rem
  5: "20px",
  // 1.25rem
  6: "24px",
  // 1.5rem
  8: "32px",
  // 2rem
  10: "40px",
  // 2.5rem
  12: "48px",
  // 3rem
  16: "64px",
  // 4rem
  20: "80px",
  // 5rem
  24: "96px",
  // 6rem
  32: "128px",
  // 8rem
  40: "160px",
  // 10rem
  48: "192px",
  // 12rem
  56: "224px",
  // 14rem
  64: "256px"
  // 16rem
}, q = {
  fontFamily: {
    primary: '"Cartograph CF", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace'
  },
  fontSize: {
    display: "48px",
    h1: "32px",
    h2: "24px",
    h3: "20px",
    title1: "32px",
    title2: "24px",
    title3: "20px",
    body: "16px",
    bodySmall: "14px",
    caption: "12px"
  },
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    heavy: 900
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75
  },
  letterSpacing: {
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em"
  }
}, We = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "16px",
  full: "9999px"
}, Z = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)"
}, _r = {
  // Colors
  "--cria-primary": "#7566A1",
  "--cria-primary-light": "#3A2E52",
  "--cria-primary-dark": "#2A1F3A",
  "--cria-secondary": "#28DDB9",
  "--cria-secondary-dark": "#167B7A",
  "--cria-background": "#F2F4F3",
  "--cria-background-light": "#FFFFFF",
  "--cria-background-dark": "#1A1A1A",
  "--cria-text-primary": "#111827",
  "--cria-text-secondary": "#6B7280",
  "--cria-text-disabled": "#9CA3AF",
  "--cria-text-inverse": "#FFFFFF",
  "--cria-border-light": "#E5E7EB",
  "--cria-border-medium": "#D1D5DB",
  "--cria-border-dark": "#9CA3AF",
  "--cria-success": "#10B981",
  "--cria-warning": "#F59E0B",
  "--cria-error": "#EF4444",
  "--cria-info": "#3B82F6",
  // Typography
  "--cria-font-family": '"Cartograph CF", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  "--cria-font-size-display": "48px",
  "--cria-font-size-h1": "32px",
  "--cria-font-size-h2": "24px",
  "--cria-font-size-h3": "20px",
  "--cria-font-size-title1": "32px",
  "--cria-font-size-title2": "24px",
  "--cria-font-size-title3": "20px",
  "--cria-font-size-body": "16px",
  "--cria-font-size-body-small": "14px",
  "--cria-font-size-caption": "12px",
  // Spacing
  "--cria-spacing-1": "4px",
  "--cria-spacing-2": "8px",
  "--cria-spacing-3": "12px",
  "--cria-spacing-4": "16px",
  "--cria-spacing-5": "20px",
  "--cria-spacing-6": "24px",
  "--cria-spacing-8": "32px",
  "--cria-spacing-10": "40px",
  "--cria-spacing-12": "48px",
  "--cria-spacing-16": "64px",
  "--cria-spacing-20": "80px",
  "--cria-spacing-24": "96px",
  // Border Radius
  "--cria-radius-sm": "4px",
  "--cria-radius-md": "8px",
  "--cria-radius-lg": "16px",
  "--cria-radius-full": "9999px",
  // Shadows
  "--cria-shadow-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  "--cria-shadow-md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  "--cria-shadow-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
};
var de = { exports: {} }, H = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function Er() {
  if (Le) return H;
  Le = 1;
  var c = Ie, p = Symbol.for("react.element"), m = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, y = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(w, x, k) {
    var v, j = {}, D = null, P = null;
    k !== void 0 && (D = "" + k), x.key !== void 0 && (D = "" + x.key), x.ref !== void 0 && (P = x.ref);
    for (v in x) f.call(x, v) && !T.hasOwnProperty(v) && (j[v] = x[v]);
    if (w && w.defaultProps) for (v in x = w.defaultProps, x) j[v] === void 0 && (j[v] = x[v]);
    return { $$typeof: p, type: w, key: D, ref: P, props: j, _owner: y.current };
  }
  return H.Fragment = m, H.jsx = R, H.jsxs = R, H;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Br() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    var c = Ie, p = Symbol.for("react.element"), m = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), w = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), V = Symbol.iterator, Q = "@@iterator";
    function ee(r) {
      if (r === null || typeof r != "object")
        return null;
      var t = V && r[V] || r[Q];
      return typeof t == "function" ? t : null;
    }
    var W = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(r) {
      {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
          a[n - 1] = arguments[n];
        ze("error", r, a);
      }
    }
    function ze(r, t, a) {
      {
        var n = W.ReactDebugCurrentFrame, d = n.getStackAddendum();
        d !== "" && (t += "%s", a = a.concat([d]));
        var u = a.map(function(l) {
          return String(l);
        });
        u.unshift("Warning: " + t), Function.prototype.apply.call(console[r], console, u);
      }
    }
    var Me = !1, Ve = !1, Ne = !1, Ye = !1, qe = !1, ue;
    ue = Symbol.for("react.module.reference");
    function He(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === f || r === T || qe || r === y || r === k || r === v || Ye || r === P || Me || Ve || Ne || typeof r == "object" && r !== null && (r.$$typeof === D || r.$$typeof === j || r.$$typeof === R || r.$$typeof === w || r.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === ue || r.getModuleId !== void 0));
    }
    function Ue(r, t, a) {
      var n = r.displayName;
      if (n)
        return n;
      var d = t.displayName || t.name || "";
      return d !== "" ? a + "(" + d + ")" : a;
    }
    function pe(r) {
      return r.displayName || "Context";
    }
    function O(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case f:
          return "Fragment";
        case m:
          return "Portal";
        case T:
          return "Profiler";
        case y:
          return "StrictMode";
        case k:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case w:
            var t = r;
            return pe(t) + ".Consumer";
          case R:
            var a = r;
            return pe(a._context) + ".Provider";
          case x:
            return Ue(r, r.render, "ForwardRef");
          case j:
            var n = r.displayName || null;
            return n !== null ? n : O(r.type) || "Memo";
          case D: {
            var d = r, u = d._payload, l = d._init;
            try {
              return O(l(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, N = 0, me, xe, he, fe, ge, ye, ve;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function Je() {
      {
        if (N === 0) {
          me = console.log, xe = console.info, he = console.warn, fe = console.error, ge = console.group, ye = console.groupCollapsed, ve = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: je,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        N++;
      }
    }
    function Ge() {
      {
        if (N--, N === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, r, {
              value: me
            }),
            info: L({}, r, {
              value: xe
            }),
            warn: L({}, r, {
              value: he
            }),
            error: L({}, r, {
              value: fe
            }),
            group: L({}, r, {
              value: ge
            }),
            groupCollapsed: L({}, r, {
              value: ye
            }),
            groupEnd: L({}, r, {
              value: ve
            })
          });
        }
        N < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = W.ReactCurrentDispatcher, te;
    function J(r, t, a) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (d) {
            var n = d.stack.trim().match(/\n( *(at )?)/);
            te = n && n[1] || "";
          }
        return `
` + te + r;
      }
    }
    var ie = !1, G;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      G = new Ke();
    }
    function be(r, t) {
      if (!r || ie)
        return "";
      {
        var a = G.get(r);
        if (a !== void 0)
          return a;
      }
      var n;
      ie = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = re.current, re.current = null, Je();
      try {
        if (t) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (C) {
              n = C;
            }
            Reflect.construct(r, [], l);
          } else {
            try {
              l.call();
            } catch (C) {
              n = C;
            }
            r.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            n = C;
          }
          r();
        }
      } catch (C) {
        if (C && n && typeof C.stack == "string") {
          for (var o = C.stack.split(`
`), E = n.stack.split(`
`), h = o.length - 1, g = E.length - 1; h >= 1 && g >= 0 && o[h] !== E[g]; )
            g--;
          for (; h >= 1 && g >= 0; h--, g--)
            if (o[h] !== E[g]) {
              if (h !== 1 || g !== 1)
                do
                  if (h--, g--, g < 0 || o[h] !== E[g]) {
                    var A = `
` + o[h].replace(" at new ", " at ");
                    return r.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", r.displayName)), typeof r == "function" && G.set(r, A), A;
                  }
                while (h >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        ie = !1, re.current = u, Ge(), Error.prepareStackTrace = d;
      }
      var M = r ? r.displayName || r.name : "", $ = M ? J(M) : "";
      return typeof r == "function" && G.set(r, $), $;
    }
    function Xe(r, t, a) {
      return be(r, !1);
    }
    function Ze(r) {
      var t = r.prototype;
      return !!(t && t.isReactComponent);
    }
    function K(r, t, a) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return be(r, Ze(r));
      if (typeof r == "string")
        return J(r);
      switch (r) {
        case k:
          return J("Suspense");
        case v:
          return J("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case x:
            return Xe(r.render);
          case j:
            return K(r.type, t, a);
          case D: {
            var n = r, d = n._payload, u = n._init;
            try {
              return K(u(d), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, Ee = {}, Be = W.ReactDebugCurrentFrame;
    function X(r) {
      if (r) {
        var t = r._owner, a = K(r.type, r._source, t ? t.type : null);
        Be.setExtraStackFrame(a);
      } else
        Be.setExtraStackFrame(null);
    }
    function Qe(r, t, a, n, d) {
      {
        var u = Function.call.bind(Y);
        for (var l in r)
          if (u(r, l)) {
            var o = void 0;
            try {
              if (typeof r[l] != "function") {
                var E = Error((n || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              o = r[l](t, l, n, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              o = h;
            }
            o && !(o instanceof Error) && (X(d), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", a, l, typeof o), X(null)), o instanceof Error && !(o.message in Ee) && (Ee[o.message] = !0, X(d), b("Failed %s type: %s", a, o.message), X(null));
          }
      }
    }
    var er = Array.isArray;
    function ae(r) {
      return er(r);
    }
    function rr(r) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return a;
      }
    }
    function tr(r) {
      try {
        return we(r), !1;
      } catch {
        return !0;
      }
    }
    function we(r) {
      return "" + r;
    }
    function Ce(r) {
      if (tr(r))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(r)), we(r);
    }
    var Fe = W.ReactCurrentOwner, ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, Se;
    function ar(r) {
      if (Y.call(r, "ref")) {
        var t = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function nr(r) {
      if (Y.call(r, "key")) {
        var t = Object.getOwnPropertyDescriptor(r, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function or(r, t) {
      typeof r.ref == "string" && Fe.current;
    }
    function sr(r, t) {
      {
        var a = function() {
          Re || (Re = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function lr(r, t) {
      {
        var a = function() {
          Se || (Se = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var cr = function(r, t, a, n, d, u, l) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: r,
        key: t,
        ref: a,
        props: l,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function dr(r, t, a, n, d) {
      {
        var u, l = {}, o = null, E = null;
        a !== void 0 && (Ce(a), o = "" + a), nr(t) && (Ce(t.key), o = "" + t.key), ar(t) && (E = t.ref, or(t, d));
        for (u in t)
          Y.call(t, u) && !ir.hasOwnProperty(u) && (l[u] = t[u]);
        if (r && r.defaultProps) {
          var h = r.defaultProps;
          for (u in h)
            l[u] === void 0 && (l[u] = h[u]);
        }
        if (o || E) {
          var g = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          o && sr(l, g), E && lr(l, g);
        }
        return cr(r, o, E, d, n, Fe.current, l);
      }
    }
    var ne = W.ReactCurrentOwner, _e = W.ReactDebugCurrentFrame;
    function z(r) {
      if (r) {
        var t = r._owner, a = K(r.type, r._source, t ? t.type : null);
        _e.setExtraStackFrame(a);
      } else
        _e.setExtraStackFrame(null);
    }
    var oe;
    oe = !1;
    function se(r) {
      return typeof r == "object" && r !== null && r.$$typeof === p;
    }
    function Te() {
      {
        if (ne.current) {
          var r = O(ne.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function ur(r) {
      return "";
    }
    var ke = {};
    function pr(r) {
      {
        var t = Te();
        if (!t) {
          var a = typeof r == "string" ? r : r.displayName || r.name;
          a && (t = `

Check the top-level render call using <` + a + ">.");
        }
        return t;
      }
    }
    function Ae(r, t) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var a = pr(t);
        if (ke[a])
          return;
        ke[a] = !0;
        var n = "";
        r && r._owner && r._owner !== ne.current && (n = " It was passed a child from " + O(r._owner.type) + "."), z(r), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, n), z(null);
      }
    }
    function De(r, t) {
      {
        if (typeof r != "object")
          return;
        if (ae(r))
          for (var a = 0; a < r.length; a++) {
            var n = r[a];
            se(n) && Ae(n, t);
          }
        else if (se(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var d = ee(r);
          if (typeof d == "function" && d !== r.entries)
            for (var u = d.call(r), l; !(l = u.next()).done; )
              se(l.value) && Ae(l.value, t);
        }
      }
    }
    function mr(r) {
      {
        var t = r.type;
        if (t == null || typeof t == "string")
          return;
        var a;
        if (typeof t == "function")
          a = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === x || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === j))
          a = t.propTypes;
        else
          return;
        if (a) {
          var n = O(t);
          Qe(a, r.props, "prop", n, r);
        } else if (t.PropTypes !== void 0 && !oe) {
          oe = !0;
          var d = O(t);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xr(r) {
      {
        for (var t = Object.keys(r.props), a = 0; a < t.length; a++) {
          var n = t[a];
          if (n !== "children" && n !== "key") {
            z(r), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), z(null);
            break;
          }
        }
        r.ref !== null && (z(r), b("Invalid attribute `ref` supplied to `React.Fragment`."), z(null));
      }
    }
    var Pe = {};
    function Oe(r, t, a, n, d, u) {
      {
        var l = He(r);
        if (!l) {
          var o = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = ur();
          E ? o += E : o += Te();
          var h;
          r === null ? h = "null" : ae(r) ? h = "array" : r !== void 0 && r.$$typeof === p ? (h = "<" + (O(r.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : h = typeof r, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, o);
        }
        var g = dr(r, t, a, d, u);
        if (g == null)
          return g;
        if (l) {
          var A = t.children;
          if (A !== void 0)
            if (n)
              if (ae(A)) {
                for (var M = 0; M < A.length; M++)
                  De(A[M], r);
                Object.freeze && Object.freeze(A);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(A, r);
        }
        if (Y.call(t, "key")) {
          var $ = O(r), C = Object.keys(t).filter(function(jr) {
            return jr !== "key";
          }), le = C.length > 0 ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pe[$ + le]) {
            var vr = C.length > 0 ? "{" + C.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, le, $, vr, $), Pe[$ + le] = !0;
          }
        }
        return r === f ? xr(g) : mr(g), g;
      }
    }
    function hr(r, t, a) {
      return Oe(r, t, a, !0);
    }
    function fr(r, t, a) {
      return Oe(r, t, a, !1);
    }
    var gr = fr, yr = hr;
    U.Fragment = f, U.jsx = gr, U.jsxs = yr;
  }()), U;
}
process.env.NODE_ENV === "production" ? de.exports = Er() : de.exports = Br();
var e = de.exports;
const i = ({
  variant: c = "body",
  as: p,
  className: m = "",
  color: f = "primary",
  weight: y = "regular",
  lineHeight: T = "normal",
  letterSpacing: R = "normal",
  align: w = "left",
  children: x,
  ...k
}) => {
  const j = (() => {
    if (p) return p;
    switch (c) {
      case "display":
      case "h1":
      case "title1":
        return "h1";
      case "h2":
      case "title2":
        return "h2";
      case "h3":
      case "title3":
        return "h3";
      case "body":
      case "bodySmall":
        return "p";
      case "caption":
        return "span";
      default:
        return "p";
    }
  })(), D = [
    "cria-typography",
    `cria-typography--${c}`,
    `cria-typography--color-${f}`,
    `cria-typography--weight-${y}`,
    `cria-typography--line-height-${T}`,
    `cria-typography--letter-spacing-${R}`,
    `cria-typography--align-${w}`,
    m
  ].filter(Boolean).join(" "), P = (ee) => {
    switch (ee) {
      case "primary":
        return { color: "#7566A1" };
      case "primaryLight":
        return { color: "#3A2E52" };
      case "secondary":
        return { color: "#28DDB9" };
      case "secondaryDark":
        return { color: "#167B7A" };
      case "disabled":
        return { color: "#9CA3AF" };
      case "inverse":
        return { color: "#FFFFFF" };
      case "success":
        return { color: "#10B981" };
      case "warning":
        return { color: "#F59E0B" };
      case "error":
        return { color: "#EF4444" };
      case "info":
        return { color: "#3B82F6" };
      default:
        return { color: "#3A2E52" };
    }
  }, V = c === "title1" || c === "title2" || c === "title3", Q = {
    fontFamily: q.fontFamily.primary,
    fontSize: q.fontSize[c],
    fontWeight: q.fontWeight[y],
    lineHeight: q.lineHeight[T],
    letterSpacing: q.letterSpacing[R],
    textAlign: w,
    margin: 0,
    textTransform: V ? "uppercase" : "none",
    ...P(V ? "primary" : f)
  };
  return /* @__PURE__ */ e.jsx(j, { className: D, style: Q, ...k, children: x });
}, Tr = () => /* @__PURE__ */ e.jsxs("div", { style: { padding: "24px", maxWidth: "800px" }, children: [
  /* @__PURE__ */ e.jsx(i, { variant: "display", weight: "bold", style: { marginBottom: "32px" }, children: "Typography Demo" }),
  /* @__PURE__ */ e.jsxs("div", { style: { marginBottom: "24px" }, children: [
    /* @__PURE__ */ e.jsx(i, { variant: "h1", weight: "bold", style: { marginBottom: "16px" }, children: "Heading 1" }),
    /* @__PURE__ */ e.jsx(i, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Heading 2" }),
    /* @__PURE__ */ e.jsx(i, { variant: "h3", weight: "medium", style: { marginBottom: "16px" }, children: "Heading 3" })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { style: { marginBottom: "24px" }, children: [
    /* @__PURE__ */ e.jsx(i, { variant: "h3", color: "primary", weight: "medium", style: { marginBottom: "16px" }, children: "Titles (ALL CAPS)" }),
    /* @__PURE__ */ e.jsx(i, { variant: "title1", weight: "bold", style: { marginBottom: "16px" }, children: "Title 1 - Large Title" }),
    /* @__PURE__ */ e.jsx(i, { variant: "title2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Title 2 - Medium Title" }),
    /* @__PURE__ */ e.jsx(i, { variant: "title3", weight: "medium", style: { marginBottom: "16px" }, children: "Title 3 - Small Title" })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { style: { marginBottom: "24px" }, children: [
    /* @__PURE__ */ e.jsx(i, { variant: "body", style: { marginBottom: "12px" }, children: "This is body text using the regular weight. It's perfect for paragraphs and general content." }),
    /* @__PURE__ */ e.jsx(i, { variant: "bodySmall", style: { marginBottom: "12px" }, children: "This is smaller body text, ideal for captions and secondary information." }),
    /* @__PURE__ */ e.jsx(i, { variant: "caption", children: "This is caption text, typically used for labels and fine print." })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { style: { marginBottom: "24px" }, children: [
    /* @__PURE__ */ e.jsx(i, { variant: "h3", color: "primary", weight: "medium", style: { marginBottom: "16px" }, children: "Color Variants" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", color: "primary", style: { marginBottom: "8px" }, children: "Primary text color - Main brand purple (#7566A1)" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", color: "primaryLight", style: { marginBottom: "8px" }, children: "Primary Light text color - Darker purple variant (#3A2E52)" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", color: "secondary", style: { marginBottom: "8px" }, children: "Secondary text color - Brand teal (#28DDB9)" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", color: "secondaryDark", style: { marginBottom: "8px" }, children: "Secondary Dark text color - Darker teal variant (#167B7A)" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", color: "disabled", style: { marginBottom: "8px" }, children: "Disabled text color (light gray)" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", color: "success", style: { marginBottom: "8px" }, children: "Success text color (green)" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", color: "warning", style: { marginBottom: "8px" }, children: "Warning text color (orange)" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", color: "error", style: { marginBottom: "8px" }, children: "Error text color (red)" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", color: "info", style: { marginBottom: "8px" }, children: "Info text color (blue)" }),
    /* @__PURE__ */ e.jsx("div", { style: { backgroundColor: "#111827", padding: "12px", borderRadius: "8px" }, children: /* @__PURE__ */ e.jsx(i, { variant: "body", color: "inverse", children: "Inverse text color (white on dark background)" }) })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { style: { marginBottom: "24px" }, children: [
    /* @__PURE__ */ e.jsx(i, { variant: "h3", weight: "medium", style: { marginBottom: "16px" }, children: "Font Weights" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", weight: "thin", style: { marginBottom: "4px" }, children: "Thin (100) - Lorem ipsum dolor sit amet" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", weight: "light", style: { marginBottom: "4px" }, children: "Light (300) - Lorem ipsum dolor sit amet" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", weight: "regular", style: { marginBottom: "4px" }, children: "Regular (400) - Lorem ipsum dolor sit amet" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", weight: "medium", style: { marginBottom: "4px" }, children: "Medium (500) - Lorem ipsum dolor sit amet" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", weight: "semiBold", style: { marginBottom: "4px" }, children: "Semi Bold (600) - Lorem ipsum dolor sit amet" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", weight: "bold", style: { marginBottom: "4px" }, children: "Bold (700) - Lorem ipsum dolor sit amet" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", weight: "extraBold", style: { marginBottom: "4px" }, children: "Extra Bold (800) - Lorem ipsum dolor sit amet" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", weight: "heavy", children: "Heavy (900) - Lorem ipsum dolor sit amet" })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { style: { marginBottom: "24px" }, children: [
    /* @__PURE__ */ e.jsx(i, { variant: "h3", weight: "medium", style: { marginBottom: "16px" }, children: "Text Alignment" }),
    /* @__PURE__ */ e.jsx("div", { style: { border: "1px solid #E5E7EB", padding: "12px", marginBottom: "8px", borderRadius: "4px" }, children: /* @__PURE__ */ e.jsx(i, { variant: "body", align: "left", children: "Left aligned text (default)" }) }),
    /* @__PURE__ */ e.jsx("div", { style: { border: "1px solid #E5E7EB", padding: "12px", marginBottom: "8px", borderRadius: "4px" }, children: /* @__PURE__ */ e.jsx(i, { variant: "body", align: "center", children: "Center aligned text" }) }),
    /* @__PURE__ */ e.jsx("div", { style: { border: "1px solid #E5E7EB", padding: "12px", marginBottom: "8px", borderRadius: "4px" }, children: /* @__PURE__ */ e.jsx(i, { variant: "body", align: "right", children: "Right aligned text" }) }),
    /* @__PURE__ */ e.jsx("div", { style: { border: "1px solid #E5E7EB", padding: "12px", marginBottom: "8px", borderRadius: "4px", width: "100%" }, children: /* @__PURE__ */ e.jsx(i, { variant: "body", align: "justify", children: "Justified text that spreads across the full width of the container, creating even margins on both sides. This demonstrates how justified text creates uniform spacing." }) })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { style: { marginBottom: "24px" }, children: [
    /* @__PURE__ */ e.jsx(i, { variant: "h3", weight: "medium", style: { marginBottom: "16px" }, children: "Line Heights" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", lineHeight: "tight", style: { marginBottom: "8px" }, children: "Tight line height (1.2) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", lineHeight: "normal", style: { marginBottom: "8px" }, children: "Normal line height (1.5) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", lineHeight: "relaxed", children: "Relaxed line height (1.75) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx(i, { variant: "h3", weight: "medium", style: { marginBottom: "16px" }, children: "Custom HTML Elements" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", as: "div", style: { marginBottom: "8px" }, children: "Rendered as a div element" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", as: "span", style: { marginBottom: "8px" }, children: "Rendered as a span element" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", as: "strong", style: { marginBottom: "8px" }, children: "Rendered as a strong element" }),
    /* @__PURE__ */ e.jsx(i, { variant: "body", as: "em", children: "Rendered as an em element" })
  ] })
] }), s = ({
  variant: c = "primary",
  size: p = "md",
  loading: m = !1,
  disabled: f = !1,
  leftIcon: y,
  rightIcon: T,
  fullWidth: R = !1,
  children: w,
  className: x = "",
  style: k,
  ...v
}) => {
  const j = f || m, D = [
    "cria-button",
    `cria-button--${c}`,
    `cria-button--${p}`,
    R && "cria-button--full-width",
    m && "cria-button--loading",
    j && "cria-button--disabled",
    x
  ].filter(Boolean).join(" "), P = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: F[2],
    fontFamily: "var(--cria-font-family)",
    fontWeight: 500,
    textDecoration: "none",
    border: "none",
    borderRadius: We.md,
    cursor: j ? "not-allowed" : "pointer",
    transition: "all 0.2s ease-in-out",
    position: "relative",
    width: R ? "100%" : "auto",
    ...wr(c),
    ...Cr(p),
    ...k
  };
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: D,
      style: P,
      disabled: j,
      ...v,
      children: [
        m && /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "16px",
              height: "16px",
              border: "2px solid transparent",
              borderTop: "2px solid currentColor",
              borderRadius: "50%",
              animation: "spin 1s linear infinite"
            }
          }
        ),
        /* @__PURE__ */ e.jsxs("span", { style: { opacity: m ? 0 : 1, display: "flex", alignItems: "center", gap: F[2] }, children: [
          y && /* @__PURE__ */ e.jsx("span", { children: y }),
          w,
          T && /* @__PURE__ */ e.jsx("span", { children: T })
        ] })
      ]
    }
  );
};
function wr(c) {
  switch (c) {
    case "primary":
      return {
        backgroundColor: B.primary,
        color: B.white,
        boxShadow: Z.sm
      };
    case "secondary":
      return {
        backgroundColor: B.secondary,
        color: B.white,
        boxShadow: Z.sm
      };
    case "outline":
      return {
        backgroundColor: "transparent",
        color: B.primary,
        border: `1px solid ${B.primary}`
      };
    case "ghost":
      return {
        backgroundColor: "transparent",
        color: B.primary
      };
    case "danger":
      return {
        backgroundColor: B.error,
        color: B.white,
        boxShadow: Z.sm
      };
    default:
      return {};
  }
}
function Cr(c) {
  switch (c) {
    case "sm":
      return {
        padding: `${F[2]} ${F[3]}`,
        fontSize: "14px",
        minHeight: "32px"
      };
    case "md":
      return {
        padding: `${F[3]} ${F[4]}`,
        fontSize: "16px",
        minHeight: "40px"
      };
    case "lg":
      return {
        padding: `${F[4]} ${F[6]}`,
        fontSize: "18px",
        minHeight: "48px"
      };
    default:
      return {};
  }
}
const kr = () => {
  const [c, p] = br(!1), m = () => {
    p(!0), setTimeout(() => p(!1), 2e3);
  };
  return /* @__PURE__ */ e.jsxs("div", { style: { padding: "24px", maxWidth: "800px" }, children: [
    /* @__PURE__ */ e.jsx("h1", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "32px" }, children: "Button Demo" }),
    /* @__PURE__ */ e.jsxs("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ e.jsx("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Variantes" }),
      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ e.jsx(s, { variant: "primary", children: "Primário" }),
        /* @__PURE__ */ e.jsx(s, { variant: "secondary", children: "Secundário" }),
        /* @__PURE__ */ e.jsx(s, { variant: "outline", children: "Contorno" }),
        /* @__PURE__ */ e.jsx(s, { variant: "ghost", children: "Fantasma" }),
        /* @__PURE__ */ e.jsx(s, { variant: "danger", children: "Perigo" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ e.jsx("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Tamanhos" }),
      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ e.jsx(s, { size: "sm", children: "Pequeno" }),
        /* @__PURE__ */ e.jsx(s, { size: "md", children: "Médio" }),
        /* @__PURE__ */ e.jsx(s, { size: "lg", children: "Grande" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ e.jsx("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Estados" }),
      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ e.jsx(s, { children: "Normal" }),
        /* @__PURE__ */ e.jsx(s, { loading: !0, children: "Carregando" }),
        /* @__PURE__ */ e.jsx(s, { disabled: !0, children: "Desabilitado" }),
        /* @__PURE__ */ e.jsx(s, { loading: c, onClick: m, children: "Clique para Carregar" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ e.jsx("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Com Ícones" }),
      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ e.jsx(s, { leftIcon: "←", children: "Voltar" }),
        /* @__PURE__ */ e.jsx(s, { rightIcon: "→", children: "Próximo" }),
        /* @__PURE__ */ e.jsx(s, { leftIcon: "★", rightIcon: "★", children: "Estrela" }),
        /* @__PURE__ */ e.jsx(s, { leftIcon: "📧", children: "Email" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ e.jsx("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Largura Completa" }),
      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
        /* @__PURE__ */ e.jsx(s, { fullWidth: !0, children: "Botão de Largura Completa" }),
        /* @__PURE__ */ e.jsx(s, { variant: "outline", fullWidth: !0, children: "Contorno de Largura Completa" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ e.jsx("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Efeitos de Hover" }),
      /* @__PURE__ */ e.jsx("p", { style: { fontFamily: "var(--cria-font-family)", color: "#6B7280", marginBottom: "16px", fontSize: "14px" }, children: "Passe o mouse sobre os botões para ver os efeitos de hover" }),
      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ e.jsx(s, { variant: "primary", children: "Primário" }),
        /* @__PURE__ */ e.jsx(s, { variant: "secondary", children: "Secundário" }),
        /* @__PURE__ */ e.jsx(s, { variant: "outline", children: "Contorno" }),
        /* @__PURE__ */ e.jsx(s, { variant: "ghost", children: "Fantasma" }),
        /* @__PURE__ */ e.jsx(s, { variant: "danger", children: "Perigo" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ e.jsx("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Exemplos Interativos" }),
      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ e.jsx(s, { onClick: () => alert("Primário clicado!"), children: "Clique em Mim" }),
        /* @__PURE__ */ e.jsx(s, { variant: "secondary", onClick: () => console.log("Secundário clicado!"), children: "Log no Console" }),
        /* @__PURE__ */ e.jsx(s, { variant: "outline", onClick: () => window.open("https://example.com", "_blank"), children: "Link Externo" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ e.jsx("h2", { style: { fontFamily: "var(--cria-font-family)", marginBottom: "16px" }, children: "Acessibilidade" }),
      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ e.jsx(s, { "aria-label": "Fechar diálogo", children: "×" }),
        /* @__PURE__ */ e.jsx(s, { "aria-describedby": "help-text", children: "Ajuda" }),
        /* @__PURE__ */ e.jsx(s, { disabled: !0, "aria-label": "Esta ação não está disponível", children: "Indisponível" })
      ] }),
      /* @__PURE__ */ e.jsx("p", { id: "help-text", style: { fontSize: "14px", color: "#6B7280", marginTop: "8px" }, children: "Este botão fornece informações de ajuda adicionais." })
    ] })
  ] });
}, S = ({
  variant: c = "default",
  size: p = "md",
  interactive: m = !1,
  disabled: f = !1,
  children: y,
  className: T = "",
  style: R,
  ...w
}) => {
  const x = [
    "cria-card",
    `cria-card--${c}`,
    `cria-card--${p}`,
    m && "cria-card--interactive",
    f && "cria-card--disabled",
    T
  ].filter(Boolean).join(" "), k = {
    borderRadius: We.md,
    overflow: "hidden",
    position: "relative",
    cursor: m && !f ? "pointer" : "default",
    transition: "all 0.2s ease-in-out",
    ...Fr(c),
    ...Rr(p),
    ...R
  };
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: x,
      style: k,
      ...w,
      children: y
    }
  );
};
function Fr(c) {
  switch (c) {
    case "default":
      return {
        backgroundColor: B.backgroundLight,
        border: `1px solid ${B.border.light}`
      };
    case "elevated":
      return {
        backgroundColor: B.backgroundLight,
        boxShadow: Z.md,
        border: "none"
      };
    case "outlined":
      return {
        backgroundColor: "transparent",
        border: `2px solid ${B.border.medium}`
      };
    case "filled":
      return {
        backgroundColor: B.gray[50],
        border: "none"
      };
    default:
      return {};
  }
}
function Rr(c) {
  switch (c) {
    case "sm":
      return {
        padding: F[3]
      };
    case "md":
      return {
        padding: F[4]
      };
    case "lg":
      return {
        padding: F[6]
      };
    default:
      return {};
  }
}
const I = ({
  children: c,
  className: p = "",
  style: m,
  ...f
}) => {
  const y = ["cria-card-header", p].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: y,
      style: {
        marginBottom: F[4],
        ...m
      },
      ...f,
      children: c
    }
  );
}, _ = ({
  children: c,
  className: p = "",
  style: m,
  ...f
}) => {
  const y = ["cria-card-content", p].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: y,
      style: {
        ...m
      },
      ...f,
      children: c
    }
  );
}, ce = ({
  children: c,
  className: p = "",
  style: m,
  ...f
}) => {
  const y = ["cria-card-footer", p].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: y,
      style: {
        marginTop: F[4],
        paddingTop: F[4],
        borderTop: `1px solid ${B.border.light}`,
        ...m
      },
      ...f,
      children: c
    }
  );
}, Ar = () => /* @__PURE__ */ e.jsxs("div", { style: { padding: "24px", maxWidth: "1000px" }, children: [
  /* @__PURE__ */ e.jsx(i, { variant: "display", color: "primary", weight: "bold", style: { marginBottom: "32px" }, children: "Demo de Cards" }),
  /* @__PURE__ */ e.jsxs("section", { style: { marginBottom: "32px" }, children: [
    /* @__PURE__ */ e.jsx(i, { variant: "h2", color: "primary", weight: "semiBold", style: { marginBottom: "16px" }, children: "Variantes" }),
    /* @__PURE__ */ e.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }, children: [
      /* @__PURE__ */ e.jsxs(S, { variant: "default", children: [
        /* @__PURE__ */ e.jsx(I, { children: /* @__PURE__ */ e.jsx(i, { variant: "h3", color: "primary", weight: "medium", children: "Card Padrão" }) }),
        /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(i, { variant: "body", color: "secondary", children: "Este é um card padrão com borda e fundo claros." }) })
      ] }),
      /* @__PURE__ */ e.jsxs(S, { variant: "elevated", children: [
        /* @__PURE__ */ e.jsx(I, { children: /* @__PURE__ */ e.jsx(i, { variant: "h3", color: "primary", weight: "medium", children: "Card Elevado" }) }),
        /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(i, { variant: "body", color: "secondary", children: "Este card tem uma sombra para profundidade e hierarquia visual." }) })
      ] }),
      /* @__PURE__ */ e.jsxs(S, { variant: "outlined", children: [
        /* @__PURE__ */ e.jsx(I, { children: /* @__PURE__ */ e.jsx(i, { variant: "h3", color: "primary", weight: "medium", children: "Card com Contorno" }) }),
        /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(i, { variant: "body", color: "secondary", children: "Este card tem uma borda proeminente e fundo transparente." }) })
      ] }),
      /* @__PURE__ */ e.jsxs(S, { variant: "filled", children: [
        /* @__PURE__ */ e.jsx(I, { children: /* @__PURE__ */ e.jsx(i, { variant: "h3", color: "primary", weight: "medium", children: "Card Preenchido" }) }),
        /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(i, { variant: "body", color: "secondary", children: "Este card tem um preenchimento sutil de cor de fundo." }) })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("section", { style: { marginBottom: "32px" }, children: [
    /* @__PURE__ */ e.jsx(i, { variant: "h2", color: "primary", weight: "semiBold", style: { marginBottom: "16px" }, children: "Tamanhos" }),
    /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "16px", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ e.jsx(S, { size: "sm", style: { width: "200px" }, children: /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(i, { variant: "bodySmall", color: "secondary", children: "Card pequeno com preenchimento mínimo" }) }) }),
      /* @__PURE__ */ e.jsx(S, { size: "md", style: { width: "250px" }, children: /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(i, { variant: "body", color: "secondary", children: "Card médio com preenchimento padrão" }) }) }),
      /* @__PURE__ */ e.jsx(S, { size: "lg", style: { width: "300px" }, children: /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(i, { variant: "body", color: "secondary", children: "Card grande com preenchimento generoso para mais conteúdo" }) }) })
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("section", { style: { marginBottom: "32px" }, children: [
    /* @__PURE__ */ e.jsx(i, { variant: "h2", color: "primary", weight: "semiBold", style: { marginBottom: "16px" }, children: "Cards Interativos" }),
    /* @__PURE__ */ e.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }, children: [
      /* @__PURE__ */ e.jsxs(
        S,
        {
          interactive: !0,
          onClick: () => alert("Card clicado!"),
          style: { cursor: "pointer" },
          children: [
            /* @__PURE__ */ e.jsx(I, { children: /* @__PURE__ */ e.jsx(i, { variant: "h3", color: "primary", weight: "medium", children: "Card Clicável" }) }),
            /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(i, { variant: "body", color: "secondary", children: "Este card é interativo e responde a cliques." }) })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(S, { interactive: !0, disabled: !0, children: [
        /* @__PURE__ */ e.jsx(I, { children: /* @__PURE__ */ e.jsx(i, { variant: "h3", color: "disabled", weight: "medium", children: "Card Desabilitado" }) }),
        /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(i, { variant: "body", color: "disabled", children: "Este card está desabilitado e não pode ser interagido." }) })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("section", { style: { marginBottom: "32px" }, children: [
    /* @__PURE__ */ e.jsx(i, { variant: "h2", color: "primary", weight: "semiBold", style: { marginBottom: "16px" }, children: "Exemplos Complexos" }),
    /* @__PURE__ */ e.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "16px" }, children: [
      /* @__PURE__ */ e.jsxs(S, { variant: "elevated", children: [
        /* @__PURE__ */ e.jsxs(_, { children: [
          /* @__PURE__ */ e.jsx("div", { style: {
            height: "200px",
            backgroundColor: "#f3f4f6",
            borderRadius: "8px",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#6b7280"
          }, children: "Imagem do Produto" }),
          /* @__PURE__ */ e.jsx(i, { variant: "h3", color: "primary", weight: "medium", style: { marginBottom: "8px" }, children: "Nome do Produto" }),
          /* @__PURE__ */ e.jsx(i, { variant: "body", color: "secondary", style: { marginBottom: "16px" }, children: "Esta é uma descrição do produto que explica o que o produto faz e por que é útil." })
        ] }),
        /* @__PURE__ */ e.jsx(ce, { children: /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
          /* @__PURE__ */ e.jsx(i, { variant: "h3", color: "primary", weight: "bold", children: "R$ 99,99" }),
          /* @__PURE__ */ e.jsx(s, { size: "sm", children: "Adicionar ao Carrinho" })
        ] }) })
      ] }),
      /* @__PURE__ */ e.jsxs(S, { variant: "outlined", children: [
        /* @__PURE__ */ e.jsxs(_, { children: [
          /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", marginBottom: "16px" }, children: [
            /* @__PURE__ */ e.jsx("div", { style: {
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#7566A1",
              marginRight: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold"
            }, children: "JD" }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx(i, { variant: "h3", color: "primary", weight: "medium", children: "João Silva" }),
              /* @__PURE__ */ e.jsx(i, { variant: "bodySmall", color: "secondary", children: "Engenheiro de Software" })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(i, { variant: "body", color: "secondary", style: { marginBottom: "16px" }, children: "Apaixonado por construir grandes experiências de usuário e resolver problemas complexos." })
        ] }),
        /* @__PURE__ */ e.jsx(ce, { children: /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "8px" }, children: [
          /* @__PURE__ */ e.jsx(s, { variant: "outline", size: "sm", children: "Mensagem" }),
          /* @__PURE__ */ e.jsx(s, { size: "sm", children: "Seguir" })
        ] }) })
      ] }),
      /* @__PURE__ */ e.jsx(S, { variant: "filled", children: /* @__PURE__ */ e.jsxs(_, { children: [
        /* @__PURE__ */ e.jsx(i, { variant: "h3", color: "primary", weight: "medium", style: { marginBottom: "8px" }, children: "Receita Total" }),
        /* @__PURE__ */ e.jsx(i, { variant: "display", color: "primary", weight: "bold", style: { marginBottom: "8px" }, children: "R$ 12.345" }),
        /* @__PURE__ */ e.jsx(i, { variant: "bodySmall", color: "success", children: "↗ +12,5% do mês passado" })
      ] }) })
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("section", { style: { marginBottom: "32px" }, children: [
    /* @__PURE__ */ e.jsx(i, { variant: "h2", color: "primary", weight: "semiBold", style: { marginBottom: "16px" }, children: "Cards com Ações" }),
    /* @__PURE__ */ e.jsxs(S, { variant: "elevated", style: { maxWidth: "500px" }, children: [
      /* @__PURE__ */ e.jsx(I, { children: /* @__PURE__ */ e.jsx(i, { variant: "h3", color: "primary", weight: "medium", children: "Configurações" }) }),
      /* @__PURE__ */ e.jsxs(_, { children: [
        /* @__PURE__ */ e.jsx(i, { variant: "body", color: "secondary", style: { marginBottom: "16px" }, children: "Gerencie suas configurações de conta e preferências." }),
        /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
          /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ e.jsx(i, { variant: "body", children: "Notificações por Email" }),
            /* @__PURE__ */ e.jsx(s, { variant: "outline", size: "sm", children: "Alternar" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ e.jsx(i, { variant: "body", children: "Modo Escuro" }),
            /* @__PURE__ */ e.jsx(s, { variant: "outline", size: "sm", children: "Alternar" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(ce, { children: /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ e.jsx(s, { variant: "ghost", size: "sm", children: "Cancelar" }),
        /* @__PURE__ */ e.jsx(s, { size: "sm", children: "Salvar Alterações" })
      ] }) })
    ] })
  ] })
] });
export {
  s as Button,
  kr as ButtonDemo,
  S as Card,
  _ as CardContent,
  Ar as CardDemo,
  ce as CardFooter,
  I as CardHeader,
  i as Typography,
  Tr as TypographyDemo,
  B as colors,
  _r as cssVariables,
  We as radii,
  Z as shadows,
  F as spacing,
  q as typography
};
