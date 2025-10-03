import pe, { useState as jr } from "react";
const _ = {
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
    primary: "#374151",
    // Dark gray for default text
    content: "#3A2E52",
    // Primary Light/Darker for content text
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
}, T = {
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
}, J = {
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
}, ze = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "16px",
  full: "9999px"
}, re = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)"
}, Sr = {
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
var ue = { exports: {} }, K = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function Er() {
  if (Ie) return K;
  Ie = 1;
  var l = pe, m = Symbol.for("react.element"), h = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, f = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(C, x, b) {
    var E, B = {}, j = null, P = null;
    b !== void 0 && (j = "" + b), x.key !== void 0 && (j = "" + x.key), x.ref !== void 0 && (P = x.ref);
    for (E in x) u.call(x, E) && !w.hasOwnProperty(E) && (B[E] = x[E]);
    if (C && C.defaultProps) for (E in x = C.defaultProps, x) B[E] === void 0 && (B[E] = x[E]);
    return { $$typeof: m, type: C, key: j, ref: P, props: B, _owner: f.current };
  }
  return K.Fragment = h, K.jsx = R, K.jsxs = R, K;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function Br() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var l = pe, m = Symbol.for("react.element"), h = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), C = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), L = Symbol.iterator, Y = "@@iterator";
    function q(r) {
      if (r === null || typeof r != "object")
        return null;
      var t = L && r[L] || r[Y];
      return typeof t == "function" ? t : null;
    }
    var O = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(r) {
      {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
          a[n - 1] = arguments[n];
        I("error", r, a);
      }
    }
    function I(r, t, a) {
      {
        var n = O.ReactDebugCurrentFrame, d = n.getStackAddendum();
        d !== "" && (t += "%s", a = a.concat([d]));
        var p = a.map(function(c) {
          return String(c);
        });
        p.unshift("Warning: " + t), Function.prototype.apply.call(console[r], console, p);
      }
    }
    var Me = !1, Ne = !1, Ve = !1, Ye = !1, qe = !1, xe;
    xe = Symbol.for("react.module.reference");
    function He(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === u || r === w || qe || r === f || r === b || r === E || Ye || r === P || Me || Ne || Ve || typeof r == "object" && r !== null && (r.$$typeof === j || r.$$typeof === B || r.$$typeof === R || r.$$typeof === C || r.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === xe || r.getModuleId !== void 0));
    }
    function Ue(r, t, a) {
      var n = r.displayName;
      if (n)
        return n;
      var d = t.displayName || t.name || "";
      return d !== "" ? a + "(" + d + ")" : a;
    }
    function me(r) {
      return r.displayName || "Context";
    }
    function $(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case u:
          return "Fragment";
        case h:
          return "Portal";
        case w:
          return "Profiler";
        case f:
          return "StrictMode";
        case b:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case C:
            var t = r;
            return me(t) + ".Consumer";
          case R:
            var a = r;
            return me(a._context) + ".Provider";
          case x:
            return Ue(r, r.render, "ForwardRef");
          case B:
            var n = r.displayName || null;
            return n !== null ? n : $(r.type) || "Memo";
          case j: {
            var d = r, p = d._payload, c = d._init;
            try {
              return $(c(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, H = 0, fe, he, ge, ye, ve, be, je;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Je() {
      {
        if (H === 0) {
          fe = console.log, he = console.info, ge = console.warn, ye = console.error, ve = console.group, be = console.groupCollapsed, je = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
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
        H++;
      }
    }
    function Ke() {
      {
        if (H--, H === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, r, {
              value: fe
            }),
            info: W({}, r, {
              value: he
            }),
            warn: W({}, r, {
              value: ge
            }),
            error: W({}, r, {
              value: ye
            }),
            group: W({}, r, {
              value: ve
            }),
            groupCollapsed: W({}, r, {
              value: be
            }),
            groupEnd: W({}, r, {
              value: je
            })
          });
        }
        H < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = O.ReactCurrentDispatcher, ie;
    function X(r, t, a) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (d) {
            var n = d.stack.trim().match(/\n( *(at )?)/);
            ie = n && n[1] || "";
          }
        return `
` + ie + r;
      }
    }
    var ae = !1, Z;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new Ge();
    }
    function Be(r, t) {
      if (!r || ae)
        return "";
      {
        var a = Z.get(r);
        if (a !== void 0)
          return a;
      }
      var n;
      ae = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = te.current, te.current = null, Je();
      try {
        if (t) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (S) {
              n = S;
            }
            Reflect.construct(r, [], c);
          } else {
            try {
              c.call();
            } catch (S) {
              n = S;
            }
            r.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            n = S;
          }
          r();
        }
      } catch (S) {
        if (S && n && typeof S.stack == "string") {
          for (var o = S.stack.split(`
`), F = n.stack.split(`
`), y = o.length - 1, v = F.length - 1; y >= 1 && v >= 0 && o[y] !== F[v]; )
            v--;
          for (; y >= 1 && v >= 0; y--, v--)
            if (o[y] !== F[v]) {
              if (y !== 1 || v !== 1)
                do
                  if (y--, v--, v < 0 || o[y] !== F[v]) {
                    var D = `
` + o[y].replace(" at new ", " at ");
                    return r.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", r.displayName)), typeof r == "function" && Z.set(r, D), D;
                  }
                while (y >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        ae = !1, te.current = p, Ke(), Error.prepareStackTrace = d;
      }
      var V = r ? r.displayName || r.name : "", z = V ? X(V) : "";
      return typeof r == "function" && Z.set(r, z), z;
    }
    function Xe(r, t, a) {
      return Be(r, !1);
    }
    function Ze(r) {
      var t = r.prototype;
      return !!(t && t.isReactComponent);
    }
    function Q(r, t, a) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Be(r, Ze(r));
      if (typeof r == "string")
        return X(r);
      switch (r) {
        case b:
          return X("Suspense");
        case E:
          return X("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case x:
            return Xe(r.render);
          case B:
            return Q(r.type, t, a);
          case j: {
            var n = r, d = n._payload, p = n._init;
            try {
              return Q(p(d), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, we = {}, Ce = O.ReactDebugCurrentFrame;
    function ee(r) {
      if (r) {
        var t = r._owner, a = Q(r.type, r._source, t ? t.type : null);
        Ce.setExtraStackFrame(a);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Qe(r, t, a, n, d) {
      {
        var p = Function.call.bind(U);
        for (var c in r)
          if (p(r, c)) {
            var o = void 0;
            try {
              if (typeof r[c] != "function") {
                var F = Error((n || "React class") + ": " + a + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw F.name = "Invariant Violation", F;
              }
              o = r[c](t, c, n, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              o = y;
            }
            o && !(o instanceof Error) && (ee(d), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", a, c, typeof o), ee(null)), o instanceof Error && !(o.message in we) && (we[o.message] = !0, ee(d), g("Failed %s type: %s", a, o.message), ee(null));
          }
      }
    }
    var er = Array.isArray;
    function ne(r) {
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
        return Re(r), !1;
      } catch {
        return !0;
      }
    }
    function Re(r) {
      return "" + r;
    }
    function Fe(r) {
      if (tr(r))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(r)), Re(r);
    }
    var _e = O.ReactCurrentOwner, ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Te;
    function ar(r) {
      if (U.call(r, "ref")) {
        var t = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function nr(r) {
      if (U.call(r, "key")) {
        var t = Object.getOwnPropertyDescriptor(r, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function or(r, t) {
      typeof r.ref == "string" && _e.current;
    }
    function sr(r, t) {
      {
        var a = function() {
          Se || (Se = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
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
          Te || (Te = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var cr = function(r, t, a, n, d, p, c) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
        // Built-in properties that belong on the element
        type: r,
        key: t,
        ref: a,
        props: c,
        // Record the component responsible for creating this element.
        _owner: p
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
        var p, c = {}, o = null, F = null;
        a !== void 0 && (Fe(a), o = "" + a), nr(t) && (Fe(t.key), o = "" + t.key), ar(t) && (F = t.ref, or(t, d));
        for (p in t)
          U.call(t, p) && !ir.hasOwnProperty(p) && (c[p] = t[p]);
        if (r && r.defaultProps) {
          var y = r.defaultProps;
          for (p in y)
            c[p] === void 0 && (c[p] = y[p]);
        }
        if (o || F) {
          var v = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          o && sr(c, v), F && lr(c, v);
        }
        return cr(r, o, F, d, n, _e.current, c);
      }
    }
    var oe = O.ReactCurrentOwner, ke = O.ReactDebugCurrentFrame;
    function N(r) {
      if (r) {
        var t = r._owner, a = Q(r.type, r._source, t ? t.type : null);
        ke.setExtraStackFrame(a);
      } else
        ke.setExtraStackFrame(null);
    }
    var se;
    se = !1;
    function le(r) {
      return typeof r == "object" && r !== null && r.$$typeof === m;
    }
    function Ae() {
      {
        if (oe.current) {
          var r = $(oe.current.type);
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
    var De = {};
    function pr(r) {
      {
        var t = Ae();
        if (!t) {
          var a = typeof r == "string" ? r : r.displayName || r.name;
          a && (t = `

Check the top-level render call using <` + a + ">.");
        }
        return t;
      }
    }
    function Pe(r, t) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var a = pr(t);
        if (De[a])
          return;
        De[a] = !0;
        var n = "";
        r && r._owner && r._owner !== oe.current && (n = " It was passed a child from " + $(r._owner.type) + "."), N(r), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, n), N(null);
      }
    }
    function Oe(r, t) {
      {
        if (typeof r != "object")
          return;
        if (ne(r))
          for (var a = 0; a < r.length; a++) {
            var n = r[a];
            le(n) && Pe(n, t);
          }
        else if (le(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var d = q(r);
          if (typeof d == "function" && d !== r.entries)
            for (var p = d.call(r), c; !(c = p.next()).done; )
              le(c.value) && Pe(c.value, t);
        }
      }
    }
    function xr(r) {
      {
        var t = r.type;
        if (t == null || typeof t == "string")
          return;
        var a;
        if (typeof t == "function")
          a = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === x || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === B))
          a = t.propTypes;
        else
          return;
        if (a) {
          var n = $(t);
          Qe(a, r.props, "prop", n, r);
        } else if (t.PropTypes !== void 0 && !se) {
          se = !0;
          var d = $(t);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mr(r) {
      {
        for (var t = Object.keys(r.props), a = 0; a < t.length; a++) {
          var n = t[a];
          if (n !== "children" && n !== "key") {
            N(r), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), N(null);
            break;
          }
        }
        r.ref !== null && (N(r), g("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    var $e = {};
    function Le(r, t, a, n, d, p) {
      {
        var c = He(r);
        if (!c) {
          var o = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var F = ur();
          F ? o += F : o += Ae();
          var y;
          r === null ? y = "null" : ne(r) ? y = "array" : r !== void 0 && r.$$typeof === m ? (y = "<" + ($(r.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : y = typeof r, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, o);
        }
        var v = dr(r, t, a, d, p);
        if (v == null)
          return v;
        if (c) {
          var D = t.children;
          if (D !== void 0)
            if (n)
              if (ne(D)) {
                for (var V = 0; V < D.length; V++)
                  Oe(D[V], r);
                Object.freeze && Object.freeze(D);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(D, r);
        }
        if (U.call(t, "key")) {
          var z = $(r), S = Object.keys(t).filter(function(br) {
            return br !== "key";
          }), ce = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$e[z + ce]) {
            var vr = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ce, z, vr, z), $e[z + ce] = !0;
          }
        }
        return r === u ? mr(v) : xr(v), v;
      }
    }
    function fr(r, t, a) {
      return Le(r, t, a, !0);
    }
    function hr(r, t, a) {
      return Le(r, t, a, !1);
    }
    var gr = hr, yr = fr;
    G.Fragment = u, G.jsx = gr, G.jsxs = yr;
  }()), G;
}
process.env.NODE_ENV === "production" ? ue.exports = Er() : ue.exports = Br();
var e = ue.exports;
const i = ({
  variant: l = "body",
  as: m,
  className: h = "",
  color: u,
  weight: f = "regular",
  lineHeight: w = "normal",
  letterSpacing: R = "normal",
  align: C = "left",
  children: x,
  ...b
}) => {
  const B = (() => {
    if (m) return m;
    switch (l) {
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
  })(), j = [
    "cria-typography",
    `cria-typography--${l}`,
    u ? `cria-typography--color-${u}` : null,
    `cria-typography--weight-${f}`,
    `cria-typography--line-height-${w}`,
    `cria-typography--letter-spacing-${R}`,
    `cria-typography--align-${C}`,
    h
  ].filter(Boolean).join(" "), P = (q) => {
    switch (q) {
      case "primary":
        return { color: "#7566A1" };
      case "primaryLight":
        return { color: "#3A2E52" };
      case "content":
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
        return { color: "#374151" };
    }
  }, L = l === "title1" || l === "title2" || l === "title3", Y = {
    fontFamily: J.fontFamily.primary,
    fontSize: J.fontSize[l],
    fontWeight: J.fontWeight[f],
    lineHeight: J.lineHeight[w],
    letterSpacing: J.letterSpacing[R],
    textAlign: C,
    margin: 0,
    textTransform: L ? "uppercase" : "none",
    ...P(L ? "primary" : u || "default")
  };
  return /* @__PURE__ */ e.jsx(B, { className: j, style: Y, ...b, children: x });
}, Tr = () => /* @__PURE__ */ e.jsxs("div", { style: { padding: "24px", maxWidth: "800px" }, children: [
  /* @__PURE__ */ e.jsx(i, { variant: "title1", weight: "bold", style: { marginBottom: "32px" }, children: "Typography Demo" }),
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
    /* @__PURE__ */ e.jsx(i, { variant: "body", color: "content", style: { marginBottom: "8px" }, children: "Content text color - Primary dark for content (#3A2E52)" }),
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
  variant: l = "primary",
  size: m = "md",
  loading: h = !1,
  disabled: u = !1,
  leftIcon: f,
  rightIcon: w,
  fullWidth: R = !1,
  children: C,
  className: x = "",
  style: b,
  ...E
}) => {
  const B = u || h, j = [
    "cria-button",
    `cria-button--${l}`,
    `cria-button--${m}`,
    R && "cria-button--full-width",
    h && "cria-button--loading",
    B && "cria-button--disabled",
    x
  ].filter(Boolean).join(" "), P = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: T[2],
    fontFamily: "var(--cria-font-family)",
    fontWeight: 500,
    textDecoration: "none",
    border: "none",
    borderRadius: ze.md,
    cursor: B ? "not-allowed" : "pointer",
    transition: "all 0.2s ease-in-out",
    position: "relative",
    width: R ? "100%" : "auto",
    ...wr(l),
    ...Cr(m),
    ...b
  };
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      className: j,
      style: P,
      disabled: B,
      "aria-disabled": B,
      ...E,
      children: [
        h && /* @__PURE__ */ e.jsx(
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
        /* @__PURE__ */ e.jsxs("span", { style: { opacity: h ? 0 : 1, display: "flex", alignItems: "center", gap: T[2] }, children: [
          f && /* @__PURE__ */ e.jsx("span", { children: f }),
          C,
          w && /* @__PURE__ */ e.jsx("span", { children: w })
        ] })
      ]
    }
  );
};
function wr(l) {
  switch (l) {
    case "primary":
      return {
        backgroundColor: _.primary,
        color: _.white,
        boxShadow: re.sm
      };
    case "secondary":
      return {
        backgroundColor: _.secondary,
        color: _.white,
        boxShadow: re.sm
      };
    case "outline":
      return {
        backgroundColor: "transparent",
        color: _.primary,
        border: `1px solid ${_.primary}`
      };
    case "ghost":
      return {
        backgroundColor: "transparent",
        color: _.primary
      };
    case "danger":
      return {
        backgroundColor: _.error,
        color: _.white,
        boxShadow: re.sm
      };
    default:
      return {};
  }
}
function Cr(l) {
  switch (l) {
    case "sm":
      return {
        padding: `${T[2]} ${T[3]}`,
        fontSize: "14px",
        minHeight: "32px"
      };
    case "md":
      return {
        padding: `${T[3]} ${T[4]}`,
        fontSize: "16px",
        minHeight: "40px"
      };
    case "lg":
      return {
        padding: `${T[4]} ${T[6]}`,
        fontSize: "18px",
        minHeight: "48px"
      };
    default:
      return {};
  }
}
const kr = () => {
  const [l, m] = jr(!1), h = () => {
    m(!0), setTimeout(() => m(!1), 2e3);
  };
  return /* @__PURE__ */ e.jsxs("div", { style: { padding: "24px", maxWidth: "800px" }, children: [
    /* @__PURE__ */ e.jsx(i, { variant: "title1", weight: "bold", style: { marginBottom: "32px" }, children: "Button Demo" }),
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
        /* @__PURE__ */ e.jsx(s, { loading: l, onClick: h, children: "Clique para Carregar" })
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
}, k = ({
  variant: l = "default",
  size: m = "md",
  interactive: h = !1,
  disabled: u = !1,
  children: f,
  className: w = "",
  style: R,
  ...C
}) => {
  const x = [
    "cria-card",
    `cria-card--${l}`,
    `cria-card--${m}`,
    h && "cria-card--interactive",
    u && "cria-card--disabled",
    w
  ].filter(Boolean).join(" "), b = {
    borderRadius: ze.md,
    overflow: "hidden",
    position: "relative",
    cursor: h && !u ? "pointer" : "default",
    transition: "all 0.2s ease-in-out",
    ...Rr(l),
    ...Fr(m),
    ...R
  };
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: x,
      style: b,
      ...C,
      children: f
    }
  );
};
function Rr(l) {
  switch (l) {
    case "default":
      return {
        backgroundColor: _.backgroundLight,
        border: `1px solid ${_.border.light}`
      };
    case "elevated":
      return {
        backgroundColor: _.backgroundLight,
        boxShadow: re.md,
        border: "none"
      };
    case "outlined":
      return {
        backgroundColor: "transparent",
        border: `2px solid ${_.border.medium}`
      };
    case "filled":
      return {
        backgroundColor: _.gray[50],
        border: "none"
      };
    default:
      return {};
  }
}
function Fr(l) {
  switch (l) {
    case "sm":
      return {
        padding: T[3]
      };
    case "md":
      return {
        padding: T[4]
      };
    case "lg":
      return {
        padding: T[6]
      };
    default:
      return {};
  }
}
const M = ({
  children: l,
  className: m = "",
  style: h,
  ...u
}) => {
  const f = ["cria-card-header", m].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: f,
      style: {
        marginBottom: T[4],
        ...h
      },
      ...u,
      children: l
    }
  );
}, A = ({
  children: l,
  className: m = "",
  style: h,
  ...u
}) => {
  const f = ["cria-card-content", m].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: f,
      style: {
        ...h
      },
      ...u,
      children: l
    }
  );
}, de = ({
  children: l,
  className: m = "",
  style: h,
  ...u
}) => {
  const f = ["cria-card-footer", m].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: f,
      style: {
        marginTop: T[4],
        paddingTop: T[4],
        borderTop: `1px solid ${_.border.light}`,
        ...h
      },
      ...u,
      children: l
    }
  );
}, Ar = () => /* @__PURE__ */ e.jsxs("div", { style: { padding: "24px", maxWidth: "1000px" }, children: [
  /* @__PURE__ */ e.jsx(i, { variant: "title1", weight: "bold", style: { marginBottom: "32px" }, children: "Demo de Cards" }),
  /* @__PURE__ */ e.jsxs("section", { style: { marginBottom: "32px" }, children: [
    /* @__PURE__ */ e.jsx(i, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Variantes" }),
    /* @__PURE__ */ e.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }, children: [
      /* @__PURE__ */ e.jsxs(k, { variant: "default", children: [
        /* @__PURE__ */ e.jsx(M, { children: /* @__PURE__ */ e.jsx(i, { variant: "h3", weight: "medium", children: "Card Padrão" }) }),
        /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(i, { variant: "body", children: "Este é um card padrão com borda e fundo claros." }) })
      ] }),
      /* @__PURE__ */ e.jsxs(k, { variant: "elevated", children: [
        /* @__PURE__ */ e.jsx(M, { children: /* @__PURE__ */ e.jsx(i, { variant: "h3", weight: "medium", children: "Card Elevado" }) }),
        /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(i, { variant: "body", children: "Este card tem uma sombra para profundidade e hierarquia visual." }) })
      ] }),
      /* @__PURE__ */ e.jsxs(k, { variant: "outlined", children: [
        /* @__PURE__ */ e.jsx(M, { children: /* @__PURE__ */ e.jsx(i, { variant: "h3", weight: "medium", children: "Card com Contorno" }) }),
        /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(i, { variant: "body", children: "Este card tem uma borda proeminente e fundo transparente." }) })
      ] }),
      /* @__PURE__ */ e.jsxs(k, { variant: "filled", children: [
        /* @__PURE__ */ e.jsx(M, { children: /* @__PURE__ */ e.jsx(i, { variant: "h3", weight: "medium", children: "Card Preenchido" }) }),
        /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(i, { variant: "body", children: "Este card tem um preenchimento sutil de cor de fundo." }) })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("section", { style: { marginBottom: "32px" }, children: [
    /* @__PURE__ */ e.jsx(i, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Tamanhos" }),
    /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "16px", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ e.jsx(k, { size: "sm", style: { width: "200px" }, children: /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(i, { variant: "bodySmall", children: "Card pequeno com preenchimento mínimo" }) }) }),
      /* @__PURE__ */ e.jsx(k, { size: "md", style: { width: "250px" }, children: /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(i, { variant: "body", children: "Card médio com preenchimento padrão" }) }) }),
      /* @__PURE__ */ e.jsx(k, { size: "lg", style: { width: "300px" }, children: /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(i, { variant: "body", children: "Card grande com preenchimento generoso para mais conteúdo" }) }) })
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("section", { style: { marginBottom: "32px" }, children: [
    /* @__PURE__ */ e.jsx(i, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Cards Interativos" }),
    /* @__PURE__ */ e.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }, children: [
      /* @__PURE__ */ e.jsxs(
        k,
        {
          interactive: !0,
          onClick: () => alert("Card clicado!"),
          style: { cursor: "pointer" },
          children: [
            /* @__PURE__ */ e.jsx(M, { children: /* @__PURE__ */ e.jsx(i, { variant: "h3", weight: "medium", children: "Card Clicável" }) }),
            /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(i, { variant: "body", children: "Este card é interativo e responde a cliques." }) })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(k, { interactive: !0, disabled: !0, children: [
        /* @__PURE__ */ e.jsx(M, { children: /* @__PURE__ */ e.jsx(i, { variant: "h3", color: "disabled", weight: "medium", children: "Card Desabilitado" }) }),
        /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(i, { variant: "body", color: "disabled", children: "Este card está desabilitado e não pode ser interagido." }) })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("section", { style: { marginBottom: "32px" }, children: [
    /* @__PURE__ */ e.jsx(i, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Exemplos Complexos" }),
    /* @__PURE__ */ e.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "16px" }, children: [
      /* @__PURE__ */ e.jsxs(k, { variant: "elevated", children: [
        /* @__PURE__ */ e.jsxs(A, { children: [
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
          /* @__PURE__ */ e.jsx(i, { variant: "h3", weight: "medium", style: { marginBottom: "8px" }, children: "Nome do Produto" }),
          /* @__PURE__ */ e.jsx(i, { variant: "body", style: { marginBottom: "16px" }, children: "Esta é uma descrição do produto que explica o que o produto faz e por que é útil." })
        ] }),
        /* @__PURE__ */ e.jsx(de, { children: /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
          /* @__PURE__ */ e.jsx(i, { variant: "h3", weight: "bold", children: "R$ 99,99" }),
          /* @__PURE__ */ e.jsx(s, { size: "sm", children: "Adicionar ao Carrinho" })
        ] }) })
      ] }),
      /* @__PURE__ */ e.jsxs(k, { variant: "outlined", children: [
        /* @__PURE__ */ e.jsxs(A, { children: [
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
              /* @__PURE__ */ e.jsx(i, { variant: "h3", weight: "medium", children: "João Silva" }),
              /* @__PURE__ */ e.jsx(i, { variant: "bodySmall", children: "Engenheiro de Software" })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(i, { variant: "body", style: { marginBottom: "16px" }, children: "Apaixonado por construir grandes experiências de usuário e resolver problemas complexos." })
        ] }),
        /* @__PURE__ */ e.jsx(de, { children: /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "8px" }, children: [
          /* @__PURE__ */ e.jsx(s, { variant: "outline", size: "sm", children: "Mensagem" }),
          /* @__PURE__ */ e.jsx(s, { size: "sm", children: "Seguir" })
        ] }) })
      ] }),
      /* @__PURE__ */ e.jsx(k, { variant: "filled", children: /* @__PURE__ */ e.jsxs(A, { children: [
        /* @__PURE__ */ e.jsx(i, { variant: "h3", weight: "medium", style: { marginBottom: "8px" }, children: "Receita Total" }),
        /* @__PURE__ */ e.jsx(i, { variant: "display", weight: "bold", style: { marginBottom: "8px" }, children: "R$ 12.345" }),
        /* @__PURE__ */ e.jsx(i, { variant: "bodySmall", color: "success", children: "↗ +12,5% do mês passado" })
      ] }) })
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("section", { style: { marginBottom: "32px" }, children: [
    /* @__PURE__ */ e.jsx(i, { variant: "h2", weight: "semiBold", style: { marginBottom: "16px" }, children: "Cards com Ações" }),
    /* @__PURE__ */ e.jsxs(k, { variant: "elevated", style: { maxWidth: "500px" }, children: [
      /* @__PURE__ */ e.jsx(M, { children: /* @__PURE__ */ e.jsx(i, { variant: "h3", weight: "medium", children: "Configurações" }) }),
      /* @__PURE__ */ e.jsxs(A, { children: [
        /* @__PURE__ */ e.jsx(i, { variant: "body", style: { marginBottom: "16px" }, children: "Gerencie suas configurações de conta e preferências." }),
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
      /* @__PURE__ */ e.jsx(de, { children: /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ e.jsx(s, { variant: "ghost", size: "sm", children: "Cancelar" }),
        /* @__PURE__ */ e.jsx(s, { size: "sm", children: "Salvar Alterações" })
      ] }) })
    ] })
  ] })
] }), Dr = ({
  variant: l = "default",
  size: m = "md",
  badgeStyle: h = "solid",
  interactive: u = !1,
  disabled: f = !1,
  children: w,
  leftIcon: R,
  rightIcon: C,
  maxCount: x,
  dot: b = !1,
  className: E = "",
  style: B,
  ...j
}) => {
  const P = pe.useMemo(() => b ? null : typeof w == "number" && x && w > x ? `${x}+` : w, [w, x, b]), L = [
    "cria-badge",
    `cria-badge--${l}`,
    `cria-badge--${m}`,
    `cria-badge--${h}`,
    u ? "cria-badge--interactive" : null,
    f ? "cria-badge--disabled" : null,
    b ? "cria-badge--dot" : null,
    E
  ].filter(Boolean).join(" "), Y = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    fontFamily: "var(--cria-font-family)",
    fontWeight: "var(--cria-font-weight-medium)",
    lineHeight: "1",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    borderRadius: "var(--cria-radius-full)",
    transition: "all 0.2s ease-in-out",
    ...B
  }, q = (g) => {
    var I;
    f || !u || (I = j.onClick) == null || I.call(j, g);
  }, O = (g) => {
    var I;
    f || !u || (g.key === "Enter" || g.key === " ") && (g.preventDefault(), (I = j.onClick) == null || I.call(j, g));
  };
  return /* @__PURE__ */ e.jsxs(
    "span",
    {
      className: L,
      style: Y,
      onClick: q,
      onKeyDown: O,
      role: u ? "button" : void 0,
      tabIndex: u && !f ? 0 : void 0,
      "aria-disabled": f,
      ...j,
      children: [
        R && !b && /* @__PURE__ */ e.jsx("span", { className: "cria-badge__icon cria-badge__icon--left", children: R }),
        !b && P && /* @__PURE__ */ e.jsx("span", { className: "cria-badge__content", children: P }),
        C && !b && /* @__PURE__ */ e.jsx("span", { className: "cria-badge__icon cria-badge__icon--right", children: C })
      ]
    }
  );
};
export {
  Dr as Badge,
  s as Button,
  kr as ButtonDemo,
  k as Card,
  A as CardContent,
  Ar as CardDemo,
  de as CardFooter,
  M as CardHeader,
  i as Typography,
  Tr as TypographyDemo,
  _ as colors,
  Sr as cssVariables,
  ze as radii,
  re as shadows,
  T as spacing,
  J as typography
};
