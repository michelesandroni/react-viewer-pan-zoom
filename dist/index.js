import * as Dr from "react";
import ft, { useState as Ie, useRef as he, useEffect as Ee, useLayoutEffect as bs, forwardRef as _s, useCallback as ge, useContext as jr, useMemo as ut, createContext as ws } from "react";
import { unstable_batchedUpdates as Es } from "react-dom";
import './index.css';function Ss(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _r = { exports: {} }, it = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fn;
function Ts() {
  if (fn)
    return it;
  fn = 1;
  var e = ft, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, h, u) {
    var l, f = {}, b = null, E = null;
    u !== void 0 && (b = "" + u), h.key !== void 0 && (b = "" + h.key), h.ref !== void 0 && (E = h.ref);
    for (l in h)
      n.call(h, l) && !s.hasOwnProperty(l) && (f[l] = h[l]);
    if (c && c.defaultProps)
      for (l in h = c.defaultProps, h)
        f[l] === void 0 && (f[l] = h[l]);
    return { $$typeof: t, type: c, key: b, ref: E, props: f, _owner: i.current };
  }
  return it.Fragment = r, it.jsx = a, it.jsxs = a, it;
}
var st = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dn;
function Ps() {
  return dn || (dn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ft, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), P = Symbol.iterator, g = "@@iterator";
    function R(o) {
      if (o === null || typeof o != "object")
        return null;
      var m = P && o[P] || o[g];
      return typeof m == "function" ? m : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(o) {
      {
        for (var m = arguments.length, S = new Array(m > 1 ? m - 1 : 0), x = 1; x < m; x++)
          S[x - 1] = arguments[x];
        O("error", o, S);
      }
    }
    function O(o, m, S) {
      {
        var x = w.ReactDebugCurrentFrame, B = x.getStackAddendum();
        B !== "" && (m += "%s", S = S.concat([B]));
        var Z = S.map(function(W) {
          return String(W);
        });
        Z.unshift("Warning: " + m), Function.prototype.apply.call(console[o], console, Z);
      }
    }
    var I = !1, y = !1, q = !1, te = !1, be = !1, re;
    re = Symbol.for("react.module.reference");
    function me(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === n || o === s || be || o === i || o === u || o === l || te || o === E || I || y || q || typeof o == "object" && o !== null && (o.$$typeof === b || o.$$typeof === f || o.$$typeof === a || o.$$typeof === c || o.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === re || o.getModuleId !== void 0));
    }
    function G(o, m, S) {
      var x = o.displayName;
      if (x)
        return x;
      var B = m.displayName || m.name || "";
      return B !== "" ? S + "(" + B + ")" : S;
    }
    function ue(o) {
      return o.displayName || "Context";
    }
    function Y(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case c:
            var m = o;
            return ue(m) + ".Consumer";
          case a:
            var S = o;
            return ue(S._context) + ".Provider";
          case h:
            return G(o, o.render, "ForwardRef");
          case f:
            var x = o.displayName || null;
            return x !== null ? x : Y(o.type) || "Memo";
          case b: {
            var B = o, Z = B._payload, W = B._init;
            try {
              return Y(W(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var se = Object.assign, _e = 0, ne, ve, fe, ke, v, T, j;
    function M() {
    }
    M.__reactDisabledLog = !0;
    function k() {
      {
        if (_e === 0) {
          ne = console.log, ve = console.info, fe = console.warn, ke = console.error, v = console.group, T = console.groupCollapsed, j = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: M,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        _e++;
      }
    }
    function N() {
      {
        if (_e--, _e === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: se({}, o, {
              value: ne
            }),
            info: se({}, o, {
              value: ve
            }),
            warn: se({}, o, {
              value: fe
            }),
            error: se({}, o, {
              value: ke
            }),
            group: se({}, o, {
              value: v
            }),
            groupCollapsed: se({}, o, {
              value: T
            }),
            groupEnd: se({}, o, {
              value: j
            })
          });
        }
        _e < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var D = w.ReactCurrentDispatcher, $;
    function F(o, m, S) {
      {
        if ($ === void 0)
          try {
            throw Error();
          } catch (B) {
            var x = B.stack.trim().match(/\n( *(at )?)/);
            $ = x && x[1] || "";
          }
        return `
` + $ + o;
      }
    }
    var z = !1, d;
    {
      var A = typeof WeakMap == "function" ? WeakMap : Map;
      d = new A();
    }
    function p(o, m) {
      if (!o || z)
        return "";
      {
        var S = d.get(o);
        if (S !== void 0)
          return S;
      }
      var x;
      z = !0;
      var B = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = D.current, D.current = null, k();
      try {
        if (m) {
          var W = function() {
            throw Error();
          };
          if (Object.defineProperty(W.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(W, []);
            } catch (de) {
              x = de;
            }
            Reflect.construct(o, [], W);
          } else {
            try {
              W.call();
            } catch (de) {
              x = de;
            }
            o.call(W.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            x = de;
          }
          o();
        }
      } catch (de) {
        if (de && x && typeof de.stack == "string") {
          for (var L = de.stack.split(`
`), le = x.stack.split(`
`), ie = L.length - 1, oe = le.length - 1; ie >= 1 && oe >= 0 && L[ie] !== le[oe]; )
            oe--;
          for (; ie >= 1 && oe >= 0; ie--, oe--)
            if (L[ie] !== le[oe]) {
              if (ie !== 1 || oe !== 1)
                do
                  if (ie--, oe--, oe < 0 || L[ie] !== le[oe]) {
                    var we = `
` + L[ie].replace(" at new ", " at ");
                    return o.displayName && we.includes("<anonymous>") && (we = we.replace("<anonymous>", o.displayName)), typeof o == "function" && d.set(o, we), we;
                  }
                while (ie >= 1 && oe >= 0);
              break;
            }
        }
      } finally {
        z = !1, D.current = Z, N(), Error.prepareStackTrace = B;
      }
      var Ke = o ? o.displayName || o.name : "", Ue = Ke ? F(Ke) : "";
      return typeof o == "function" && d.set(o, Ue), Ue;
    }
    function Q(o, m, S) {
      return p(o, !1);
    }
    function ce(o) {
      var m = o.prototype;
      return !!(m && m.isReactComponent);
    }
    function X(o, m, S) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return p(o, ce(o));
      if (typeof o == "string")
        return F(o);
      switch (o) {
        case u:
          return F("Suspense");
        case l:
          return F("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case h:
            return Q(o.render);
          case f:
            return X(o.type, m, S);
          case b: {
            var x = o, B = x._payload, Z = x._init;
            try {
              return X(Z(B), m, S);
            } catch {
            }
          }
        }
      return "";
    }
    var je = Object.prototype.hasOwnProperty, rt = {}, kt = w.ReactDebugCurrentFrame;
    function Me(o) {
      if (o) {
        var m = o._owner, S = X(o.type, o._source, m ? m.type : null);
        kt.setExtraStackFrame(S);
      } else
        kt.setExtraStackFrame(null);
    }
    function Xi(o, m, S, x, B) {
      {
        var Z = Function.call.bind(je);
        for (var W in o)
          if (Z(o, W)) {
            var L = void 0;
            try {
              if (typeof o[W] != "function") {
                var le = Error((x || "React class") + ": " + S + " type `" + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[W] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw le.name = "Invariant Violation", le;
              }
              L = o[W](m, W, x, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ie) {
              L = ie;
            }
            L && !(L instanceof Error) && (Me(B), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", S, W, typeof L), Me(null)), L instanceof Error && !(L.message in rt) && (rt[L.message] = !0, Me(B), C("Failed %s type: %s", S, L.message), Me(null));
          }
      }
    }
    var Zi = Array.isArray;
    function tr(o) {
      return Zi(o);
    }
    function Ji(o) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, S = m && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return S;
      }
    }
    function es(o) {
      try {
        return Jr(o), !1;
      } catch {
        return !0;
      }
    }
    function Jr(o) {
      return "" + o;
    }
    function en(o) {
      if (es(o))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ji(o)), Jr(o);
    }
    var nt = w.ReactCurrentOwner, ts = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tn, rn, rr;
    rr = {};
    function rs(o) {
      if (je.call(o, "ref")) {
        var m = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function ns(o) {
      if (je.call(o, "key")) {
        var m = Object.getOwnPropertyDescriptor(o, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function is(o, m) {
      if (typeof o.ref == "string" && nt.current && m && nt.current.stateNode !== m) {
        var S = Y(nt.current.type);
        rr[S] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(nt.current.type), o.ref), rr[S] = !0);
      }
    }
    function ss(o, m) {
      {
        var S = function() {
          tn || (tn = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        S.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: S,
          configurable: !0
        });
      }
    }
    function os(o, m) {
      {
        var S = function() {
          rn || (rn = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        S.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var as = function(o, m, S, x, B, Z, W) {
      var L = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: m,
        ref: S,
        props: W,
        // Record the component responsible for creating this element.
        _owner: Z
      };
      return L._store = {}, Object.defineProperty(L._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(L, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.defineProperty(L, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.freeze && (Object.freeze(L.props), Object.freeze(L)), L;
    };
    function cs(o, m, S, x, B) {
      {
        var Z, W = {}, L = null, le = null;
        S !== void 0 && (en(S), L = "" + S), ns(m) && (en(m.key), L = "" + m.key), rs(m) && (le = m.ref, is(m, B));
        for (Z in m)
          je.call(m, Z) && !ts.hasOwnProperty(Z) && (W[Z] = m[Z]);
        if (o && o.defaultProps) {
          var ie = o.defaultProps;
          for (Z in ie)
            W[Z] === void 0 && (W[Z] = ie[Z]);
        }
        if (L || le) {
          var oe = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          L && ss(W, oe), le && os(W, oe);
        }
        return as(o, L, le, B, x, nt.current, W);
      }
    }
    var nr = w.ReactCurrentOwner, nn = w.ReactDebugCurrentFrame;
    function Be(o) {
      if (o) {
        var m = o._owner, S = X(o.type, o._source, m ? m.type : null);
        nn.setExtraStackFrame(S);
      } else
        nn.setExtraStackFrame(null);
    }
    var ir;
    ir = !1;
    function sr(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function sn() {
      {
        if (nr.current) {
          var o = Y(nr.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function us(o) {
      return "";
    }
    var on = {};
    function ls(o) {
      {
        var m = sn();
        if (!m) {
          var S = typeof o == "string" ? o : o.displayName || o.name;
          S && (m = `

Check the top-level render call using <` + S + ">.");
        }
        return m;
      }
    }
    function an(o, m) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var S = ls(m);
        if (on[S])
          return;
        on[S] = !0;
        var x = "";
        o && o._owner && o._owner !== nr.current && (x = " It was passed a child from " + Y(o._owner.type) + "."), Be(o), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, x), Be(null);
      }
    }
    function cn(o, m) {
      {
        if (typeof o != "object")
          return;
        if (tr(o))
          for (var S = 0; S < o.length; S++) {
            var x = o[S];
            sr(x) && an(x, m);
          }
        else if (sr(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var B = R(o);
          if (typeof B == "function" && B !== o.entries)
            for (var Z = B.call(o), W; !(W = Z.next()).done; )
              sr(W.value) && an(W.value, m);
        }
      }
    }
    function fs(o) {
      {
        var m = o.type;
        if (m == null || typeof m == "string")
          return;
        var S;
        if (typeof m == "function")
          S = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === f))
          S = m.propTypes;
        else
          return;
        if (S) {
          var x = Y(m);
          Xi(S, o.props, "prop", x, o);
        } else if (m.PropTypes !== void 0 && !ir) {
          ir = !0;
          var B = Y(m);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ds(o) {
      {
        for (var m = Object.keys(o.props), S = 0; S < m.length; S++) {
          var x = m[S];
          if (x !== "children" && x !== "key") {
            Be(o), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), Be(null);
            break;
          }
        }
        o.ref !== null && (Be(o), C("Invalid attribute `ref` supplied to `React.Fragment`."), Be(null));
      }
    }
    var un = {};
    function ln(o, m, S, x, B, Z) {
      {
        var W = me(o);
        if (!W) {
          var L = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var le = us();
          le ? L += le : L += sn();
          var ie;
          o === null ? ie = "null" : tr(o) ? ie = "array" : o !== void 0 && o.$$typeof === t ? (ie = "<" + (Y(o.type) || "Unknown") + " />", L = " Did you accidentally export a JSX literal instead of a component?") : ie = typeof o, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ie, L);
        }
        var oe = cs(o, m, S, B, Z);
        if (oe == null)
          return oe;
        if (W) {
          var we = m.children;
          if (we !== void 0)
            if (x)
              if (tr(we)) {
                for (var Ke = 0; Ke < we.length; Ke++)
                  cn(we[Ke], o);
                Object.freeze && Object.freeze(we);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              cn(we, o);
        }
        if (je.call(m, "key")) {
          var Ue = Y(o), de = Object.keys(m).filter(function(ys) {
            return ys !== "key";
          }), or = de.length > 0 ? "{key: someKey, " + de.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!un[Ue + or]) {
            var gs = de.length > 0 ? "{" + de.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, or, Ue, gs, Ue), un[Ue + or] = !0;
          }
        }
        return o === n ? ds(oe) : fs(oe), oe;
      }
    }
    function hs(o, m, S) {
      return ln(o, m, S, !0);
    }
    function ps(o, m, S) {
      return ln(o, m, S, !1);
    }
    var ms = ps, vs = hs;
    st.Fragment = n, st.jsx = ms, st.jsxs = vs;
  }()), st;
}
process.env.NODE_ENV === "production" ? _r.exports = Ts() : _r.exports = Ps();
var Fe = _r.exports, Os = Object.defineProperty, Rs = (e, t) => {
  for (var r in t)
    Os(e, r, { get: t[r], enumerable: !0 });
}, Ce = {};
Rs(Ce, {
  assign: () => Is,
  colors: () => ze,
  createStringInterpolator: () => Ur,
  skipAnimation: () => hi,
  to: () => di,
  willAdvance: () => Wr
});
var Vr = Ct(), V = (e) => Rt(e, Vr), $r = Ct();
V.write = (e) => Rt(e, $r);
var Bt = Ct();
V.onStart = (e) => Rt(e, Bt);
var Fr = Ct();
V.onFrame = (e) => Rt(e, Fr);
var Nr = Ct();
V.onFinish = (e) => Rt(e, Nr);
var Xe = [];
V.setTimeout = (e, t) => {
  const r = V.now() + t, n = () => {
    const s = Xe.findIndex((a) => a.cancel == n);
    ~s && Xe.splice(s, 1), Le -= ~s ? 1 : 0;
  }, i = { time: r, handler: e, cancel: n };
  return Xe.splice(ai(r), 0, i), Le += 1, ci(), i;
};
var ai = (e) => ~(~Xe.findIndex((t) => t.time > e) || ~Xe.length);
V.cancel = (e) => {
  Bt.delete(e), Fr.delete(e), Nr.delete(e), Vr.delete(e), $r.delete(e);
};
V.sync = (e) => {
  wr = !0, V.batchedUpdates(e), wr = !1;
};
V.throttle = (e) => {
  let t;
  function r() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function n(...i) {
    t = i, V.onStart(r);
  }
  return n.handler = e, n.cancel = () => {
    Bt.delete(r), t = null;
  }, n;
};
var Lr = typeof window < "u" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {
  }
);
V.use = (e) => Lr = e;
V.now = typeof performance < "u" ? () => performance.now() : Date.now;
V.batchedUpdates = (e) => e();
V.catch = console.error;
V.frameLoop = "always";
V.advance = () => {
  V.frameLoop !== "demand" ? console.warn(
    "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
  ) : li();
};
var Ne = -1, Le = 0, wr = !1;
function Rt(e, t) {
  wr ? (t.delete(e), e(0)) : (t.add(e), ci());
}
function ci() {
  Ne < 0 && (Ne = 0, V.frameLoop !== "demand" && Lr(ui));
}
function Cs() {
  Ne = -1;
}
function ui() {
  ~Ne && (Lr(ui), V.batchedUpdates(li));
}
function li() {
  const e = Ne;
  Ne = V.now();
  const t = ai(Ne);
  if (t && (fi(Xe.splice(0, t), (r) => r.handler()), Le -= t), !Le) {
    Cs();
    return;
  }
  Bt.flush(), Vr.flush(e ? Math.min(64, Ne - e) : 16.667), Fr.flush(), $r.flush(), Nr.flush();
}
function Ct() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return {
    add(r) {
      Le += t == e && !e.has(r) ? 1 : 0, e.add(r);
    },
    delete(r) {
      return Le -= t == e && e.has(r) ? 1 : 0, e.delete(r);
    },
    flush(r) {
      t.size && (e = /* @__PURE__ */ new Set(), Le -= t.size, fi(t, (n) => n(r) && e.add(n)), Le += e.size, t = e);
    }
  };
}
function fi(e, t) {
  e.forEach((r) => {
    try {
      t(r);
    } catch (n) {
      V.catch(n);
    }
  });
}
function Er() {
}
var As = (e, t, r) => Object.defineProperty(e, t, { value: r, writable: !0, configurable: !0 }), _ = {
  arr: Array.isArray,
  obj: (e) => !!e && e.constructor.name === "Object",
  fun: (e) => typeof e == "function",
  str: (e) => typeof e == "string",
  num: (e) => typeof e == "number",
  und: (e) => e === void 0
};
function De(e, t) {
  if (_.arr(e)) {
    if (!_.arr(t) || e.length !== t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  return e === t;
}
var U = (e, t) => e.forEach(t);
function xe(e, t, r) {
  if (_.arr(e)) {
    for (let n = 0; n < e.length; n++)
      t.call(r, e[n], `${n}`);
    return;
  }
  for (const n in e)
    e.hasOwnProperty(n) && t.call(r, e[n], n);
}
var ye = (e) => _.und(e) ? [] : _.arr(e) ? e : [e];
function dt(e, t) {
  if (e.size) {
    const r = Array.from(e);
    e.clear(), U(r, t);
  }
}
var lt = (e, ...t) => dt(e, (r) => r(...t)), zr = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), Ur, di, ze = null, hi = !1, Wr = Er, Is = (e) => {
  e.to && (di = e.to), e.now && (V.now = e.now), e.colors !== void 0 && (ze = e.colors), e.skipAnimation != null && (hi = e.skipAnimation), e.createStringInterpolator && (Ur = e.createStringInterpolator), e.requestAnimationFrame && V.use(e.requestAnimationFrame), e.batchedUpdates && (V.batchedUpdates = e.batchedUpdates), e.willAdvance && (Wr = e.willAdvance), e.frameLoop && (V.frameLoop = e.frameLoop);
}, ht = /* @__PURE__ */ new Set(), Pe = [], ar = [], Lt = 0, Kt = {
  get idle() {
    return !ht.size && !Pe.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(e) {
    Lt > e.priority ? (ht.add(e), V.onStart(xs)) : (pi(e), V(Sr));
  },
  /** Advance all animations by the given time. */
  advance: Sr,
  /** Call this when an animation's priority changes. */
  sort(e) {
    if (Lt)
      V.onFrame(() => Kt.sort(e));
    else {
      const t = Pe.indexOf(e);
      ~t && (Pe.splice(t, 1), mi(e));
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    Pe = [], ht.clear();
  }
};
function xs() {
  ht.forEach(pi), ht.clear(), V(Sr);
}
function pi(e) {
  Pe.includes(e) || mi(e);
}
function mi(e) {
  Pe.splice(
    ks(Pe, (t) => t.priority > e.priority),
    0,
    e
  );
}
function Sr(e) {
  const t = ar;
  for (let r = 0; r < Pe.length; r++) {
    const n = Pe[r];
    Lt = n.priority, n.idle || (Wr(n), n.advance(e), n.idle || t.push(n));
  }
  return Lt = 0, ar = Pe, ar.length = 0, Pe = t, Pe.length > 0;
}
function ks(e, t) {
  const r = e.findIndex(t);
  return r < 0 ? e.length : r;
}
var Ms = (e, t, r) => Math.min(Math.max(r, e), t), Ds = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
}, Re = "[-+]?\\d*\\.?\\d+", zt = Re + "%";
function Ht(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var js = new RegExp("rgb" + Ht(Re, Re, Re)), Vs = new RegExp("rgba" + Ht(Re, Re, Re, Re)), $s = new RegExp("hsl" + Ht(Re, zt, zt)), Fs = new RegExp(
  "hsla" + Ht(Re, zt, zt, Re)
), Ns = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Ls = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, zs = /^#([0-9a-fA-F]{6})$/, Us = /^#([0-9a-fA-F]{8})$/;
function Ws(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = zs.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : ze && ze[e] !== void 0 ? ze[e] : (t = js.exec(e)) ? (He(t[1]) << 24 | // r
  He(t[2]) << 16 | // g
  He(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = Vs.exec(e)) ? (He(t[1]) << 24 | // r
  He(t[2]) << 16 | // g
  He(t[3]) << 8 | // b
  mn(t[4])) >>> // a
  0 : (t = Ns.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = Us.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Ls.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = $s.exec(e)) ? (hn(
    pn(t[1]),
    // h
    Mt(t[2]),
    // s
    Mt(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = Fs.exec(e)) ? (hn(
    pn(t[1]),
    // h
    Mt(t[2]),
    // s
    Mt(t[3])
    // l
  ) | mn(t[4])) >>> // a
  0 : null;
}
function cr(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function hn(e, t, r) {
  const n = r < 0.5 ? r * (1 + t) : r + t - r * t, i = 2 * r - n, s = cr(i, n, e + 1 / 3), a = cr(i, n, e), c = cr(i, n, e - 1 / 3);
  return Math.round(s * 255) << 24 | Math.round(a * 255) << 16 | Math.round(c * 255) << 8;
}
function He(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function pn(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function mn(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Mt(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function vn(e) {
  let t = Ws(e);
  if (t === null)
    return e;
  t = t || 0;
  const r = (t & 4278190080) >>> 24, n = (t & 16711680) >>> 16, i = (t & 65280) >>> 8, s = (t & 255) / 255;
  return `rgba(${r}, ${n}, ${i}, ${s})`;
}
var gt = (e, t, r) => {
  if (_.fun(e))
    return e;
  if (_.arr(e))
    return gt({
      range: e,
      output: t,
      extrapolate: r
    });
  if (_.str(e.output[0]))
    return Ur(e);
  const n = e, i = n.output, s = n.range || [0, 1], a = n.extrapolateLeft || n.extrapolate || "extend", c = n.extrapolateRight || n.extrapolate || "extend", h = n.easing || ((u) => u);
  return (u) => {
    const l = qs(u, s);
    return Ys(
      u,
      s[l],
      s[l + 1],
      i[l],
      i[l + 1],
      h,
      a,
      c,
      n.map
    );
  };
};
function Ys(e, t, r, n, i, s, a, c, h) {
  let u = h ? h(e) : e;
  if (u < t) {
    if (a === "identity")
      return u;
    a === "clamp" && (u = t);
  }
  if (u > r) {
    if (c === "identity")
      return u;
    c === "clamp" && (u = r);
  }
  return n === i ? n : t === r ? e <= t ? n : i : (t === -1 / 0 ? u = -u : r === 1 / 0 ? u = u - t : u = (u - t) / (r - t), u = s(u), n === -1 / 0 ? u = -u : i === 1 / 0 ? u = u + n : u = u * (i - n) + n, u);
}
function qs(e, t) {
  for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r)
    ;
  return r - 1;
}
var Bs = (e, t = "end") => (r) => {
  r = t === "end" ? Math.min(r, 0.999) : Math.max(r, 1e-3);
  const n = r * e, i = t === "end" ? Math.floor(n) : Math.ceil(n);
  return Ms(0, 1, i / e);
}, Ut = 1.70158, Dt = Ut * 1.525, gn = Ut + 1, yn = 2 * Math.PI / 3, bn = 2 * Math.PI / 4.5, jt = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, Ks = {
  linear: (e) => e,
  easeInQuad: (e) => e * e,
  easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
  easeInOutQuad: (e) => e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
  easeInCubic: (e) => e * e * e,
  easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
  easeInOutCubic: (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
  easeInQuart: (e) => e * e * e * e,
  easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
  easeInOutQuart: (e) => e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
  easeInQuint: (e) => e * e * e * e * e,
  easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
  easeInOutQuint: (e) => e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
  easeInSine: (e) => 1 - Math.cos(e * Math.PI / 2),
  easeOutSine: (e) => Math.sin(e * Math.PI / 2),
  easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
  easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * e - 10),
  easeOutExpo: (e) => e === 1 ? 1 : 1 - Math.pow(2, -10 * e),
  easeInOutExpo: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
  easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
  easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
  easeInOutCirc: (e) => e < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
  easeInBack: (e) => gn * e * e * e - Ut * e * e,
  easeOutBack: (e) => 1 + gn * Math.pow(e - 1, 3) + Ut * Math.pow(e - 1, 2),
  easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((Dt + 1) * 2 * e - Dt) / 2 : (Math.pow(2 * e - 2, 2) * ((Dt + 1) * (e * 2 - 2) + Dt) + 2) / 2,
  easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * yn),
  easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * yn) + 1,
  easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * bn)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * bn) / 2 + 1,
  easeInBounce: (e) => 1 - jt(1 - e),
  easeOutBounce: jt,
  easeInOutBounce: (e) => e < 0.5 ? (1 - jt(1 - 2 * e)) / 2 : (1 + jt(2 * e - 1)) / 2,
  steps: Bs
}, yt = Symbol.for("FluidValue.get"), Je = Symbol.for("FluidValue.observers"), Se = (e) => !!(e && e[yt]), pe = (e) => e && e[yt] ? e[yt]() : e, _n = (e) => e[Je] || null;
function Hs(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function bt(e, t) {
  const r = e[Je];
  r && r.forEach((n) => {
    Hs(n, t);
  });
}
var vi = class {
  constructor(e) {
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    Gs(this, e);
  }
}, Gs = (e, t) => gi(e, yt, t);
function tt(e, t) {
  if (e[yt]) {
    let r = e[Je];
    r || gi(e, Je, r = /* @__PURE__ */ new Set()), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t));
  }
  return t;
}
function _t(e, t) {
  const r = e[Je];
  if (r && r.has(t)) {
    const n = r.size - 1;
    n ? r.delete(t) : e[Je] = null, e.observerRemoved && e.observerRemoved(n, t);
  }
}
var gi = (e, t, r) => Object.defineProperty(e, t, {
  value: r,
  writable: !0,
  configurable: !0
}), $t = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Qs = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, wn = new RegExp(`(${$t.source})(%|[a-z]+)`, "i"), Xs = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Gt = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, yi = (e) => {
  const [t, r] = Zs(e);
  if (!t || zr())
    return e;
  const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  if (n)
    return n.trim();
  if (r && r.startsWith("--")) {
    const i = window.getComputedStyle(document.documentElement).getPropertyValue(r);
    return i || e;
  } else {
    if (r && Gt.test(r))
      return yi(r);
    if (r)
      return r;
  }
  return e;
}, Zs = (e) => {
  const t = Gt.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}, ur, Js = (e, t, r, n, i) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`, bi = (e) => {
  ur || (ur = ze ? (
    // match color names, ignore partial matches
    new RegExp(`(${Object.keys(ze).join("|")})(?!\\w)`, "g")
  ) : (
    // never match
    /^\b$/
  ));
  const t = e.output.map((s) => pe(s).replace(Gt, yi).replace(Qs, vn).replace(ur, vn)), r = t.map((s) => s.match($t).map(Number)), i = r[0].map(
    (s, a) => r.map((c) => {
      if (!(a in c))
        throw Error('The arity of each "output" value must be equal');
      return c[a];
    })
  ).map(
    (s) => gt({ ...e, output: s })
  );
  return (s) => {
    var h;
    const a = !wn.test(t[0]) && ((h = t.find((u) => wn.test(u))) == null ? void 0 : h.replace($t, ""));
    let c = 0;
    return t[0].replace(
      $t,
      () => `${i[c++](s)}${a || ""}`
    ).replace(Xs, Js);
  };
}, Yr = "react-spring: ", _i = (e) => {
  const t = e;
  let r = !1;
  if (typeof t != "function")
    throw new TypeError(`${Yr}once requires a function parameter`);
  return (...n) => {
    r || (t(...n), r = !0);
  };
}, eo = _i(console.warn);
function to() {
  eo(
    `${Yr}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var ro = _i(console.warn);
function no() {
  ro(
    `${Yr}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function Qt(e) {
  return _.str(e) && (e[0] == "#" || /\d/.test(e) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !zr() && Gt.test(e) || e in (ze || {}));
}
var qr = zr() ? Ee : bs, io = () => {
  const e = he(!1);
  return qr(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function wi() {
  const e = Ie()[1], t = io();
  return () => {
    t.current && e(Math.random());
  };
}
function so(e, t) {
  const [r] = Ie(
    () => ({
      inputs: t,
      result: e()
    })
  ), n = he(), i = n.current;
  let s = i;
  return s ? t && s.inputs && oo(t, s.inputs) || (s = {
    inputs: t,
    result: e()
  }) : s = r, Ee(() => {
    n.current = s, i == r && (r.inputs = r.result = void 0);
  }, [s]), s.result;
}
function oo(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var Ei = (e) => Ee(e, ao), ao = [];
function En(e) {
  const t = he();
  return Ee(() => {
    t.current = e;
  }), t.current;
}
var wt = Symbol.for("Animated:node"), co = (e) => !!e && e[wt] === e, Ae = (e) => e && e[wt], Br = (e, t) => As(e, wt, t), Xt = (e) => e && e[wt] && e[wt].getPayload(), Si = class {
  constructor() {
    Br(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
}, At = class extends Si {
  constructor(e) {
    super(), this._value = e, this.done = !0, this.durationProgress = 0, _.num(this._value) && (this.lastPosition = this._value);
  }
  /** @internal */
  static create(e) {
    return new At(e);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(e, t) {
    return _.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0);
  }
  reset() {
    const { done: e } = this;
    this.done = !1, _.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null);
  }
}, Et = class extends At {
  constructor(e) {
    super(0), this._string = null, this._toString = gt({
      output: [e, e]
    });
  }
  /** @internal */
  static create(e) {
    return new Et(e);
  }
  getValue() {
    const e = this._string;
    return e ?? (this._string = this._toString(this._value));
  }
  setValue(e) {
    if (_.str(e)) {
      if (e == this._string)
        return !1;
      this._string = e, this._value = 1;
    } else if (super.setValue(e))
      this._string = null;
    else
      return !1;
    return !0;
  }
  reset(e) {
    e && (this._toString = gt({
      output: [this.getValue(), e]
    })), this._value = 0, super.reset();
  }
}, Wt = { dependencies: null }, Zt = class extends Si {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    const t = {};
    return xe(this.source, (r, n) => {
      co(r) ? t[n] = r.getValue(e) : Se(r) ? t[n] = pe(r) : e || (t[n] = r);
    }), t;
  }
  /** Replace the raw object data */
  setValue(e) {
    this.source = e, this.payload = this._makePayload(e);
  }
  reset() {
    this.payload && U(this.payload, (e) => e.reset());
  }
  /** Create a payload set. */
  _makePayload(e) {
    if (e) {
      const t = /* @__PURE__ */ new Set();
      return xe(e, this._addToPayload, t), Array.from(t);
    }
  }
  /** Add to a payload set. */
  _addToPayload(e) {
    Wt.dependencies && Se(e) && Wt.dependencies.add(e);
    const t = Xt(e);
    t && U(t, (r) => this.add(r));
  }
}, Ti = class extends Zt {
  constructor(e) {
    super(e);
  }
  /** @internal */
  static create(e) {
    return new Ti(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    const t = this.getPayload();
    return e.length == t.length ? t.map((r, n) => r.setValue(e[n])).some(Boolean) : (super.setValue(e.map(uo)), !0);
  }
};
function uo(e) {
  return (Qt(e) ? Et : At).create(e);
}
function Tr(e) {
  const t = Ae(e);
  return t ? t.constructor : _.arr(e) ? Ti : Qt(e) ? Et : At;
}
var Sn = (e, t) => {
  const r = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !_.fun(e) || e.prototype && e.prototype.isReactComponent
  );
  return _s((n, i) => {
    const s = he(null), a = r && // eslint-disable-next-line react-hooks/rules-of-hooks
    ge(
      (P) => {
        s.current = ho(i, P);
      },
      [i]
    ), [c, h] = fo(n, t), u = wi(), l = () => {
      const P = s.current;
      if (r && !P)
        return;
      (P ? t.applyAnimatedValues(P, c.getValue(!0)) : !1) === !1 && u();
    }, f = new lo(l, h), b = he();
    qr(() => (b.current = f, U(h, (P) => tt(P, f)), () => {
      b.current && (U(
        b.current.deps,
        (P) => _t(P, b.current)
      ), V.cancel(b.current.update));
    })), Ee(l, []), Ei(() => () => {
      const P = b.current;
      U(P.deps, (g) => _t(g, P));
    });
    const E = t.getComponentProps(c.getValue());
    return /* @__PURE__ */ Dr.createElement(e, { ...E, ref: a });
  });
}, lo = class {
  constructor(e, t) {
    this.update = e, this.deps = t;
  }
  eventObserved(e) {
    e.type == "change" && V.write(this.update);
  }
};
function fo(e, t) {
  const r = /* @__PURE__ */ new Set();
  return Wt.dependencies = r, e.style && (e = {
    ...e,
    style: t.createAnimatedStyle(e.style)
  }), e = new Zt(e), Wt.dependencies = null, [e, r];
}
function ho(e, t) {
  return e && (_.fun(e) ? e(t) : e.current = t), t;
}
var Tn = Symbol.for("AnimatedComponent"), po = (e, {
  applyAnimatedValues: t = () => !1,
  createAnimatedStyle: r = (i) => new Zt(i),
  getComponentProps: n = (i) => i
} = {}) => {
  const i = {
    applyAnimatedValues: t,
    createAnimatedStyle: r,
    getComponentProps: n
  }, s = (a) => {
    const c = Pn(a) || "Anonymous";
    return _.str(a) ? a = s[a] || (s[a] = Sn(a, i)) : a = a[Tn] || (a[Tn] = Sn(a, i)), a.displayName = `Animated(${c})`, a;
  };
  return xe(e, (a, c) => {
    _.arr(e) && (c = Pn(a)), s[c] = s(a);
  }), {
    animated: s
  };
}, Pn = (e) => _.str(e) ? e : e && _.str(e.displayName) ? e.displayName : _.fun(e) && e.name || null;
function We(e, ...t) {
  return _.fun(e) ? e(...t) : e;
}
var pt = (e, t) => e === !0 || !!(t && e && (_.fun(e) ? e(t) : ye(e).includes(t))), Pi = (e, t) => _.obj(e) ? t && e[t] : e, Oi = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, mo = (e) => e, Kr = (e, t = mo) => {
  let r = vo;
  e.default && e.default !== !0 && (e = e.default, r = Object.keys(e));
  const n = {};
  for (const i of r) {
    const s = t(e[i], i);
    _.und(s) || (n[i] = s);
  }
  return n;
}, vo = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
], go = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  // Transition props
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  // Internal props
  keys: 1,
  callId: 1,
  parentId: 1
};
function yo(e) {
  const t = {};
  let r = 0;
  if (xe(e, (n, i) => {
    go[i] || (t[i] = n, r++);
  }), r)
    return t;
}
function Ri(e) {
  const t = yo(e);
  if (t) {
    const r = { to: t };
    return xe(e, (n, i) => i in t || (r[i] = n)), r;
  }
  return { ...e };
}
function St(e) {
  return e = pe(e), _.arr(e) ? e.map(St) : Qt(e) ? Ce.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function bo(e) {
  for (const t in e)
    return !0;
  return !1;
}
function Pr(e) {
  return _.fun(e) || _.arr(e) && _.obj(e[0]);
}
function _o(e, t) {
  var r;
  (r = e.ref) == null || r.delete(e), t == null || t.delete(e);
}
function wo(e, t) {
  var r;
  t && e.ref !== t && ((r = e.ref) == null || r.delete(e), t.add(e), e.ref = t);
}
var Eo = {
  default: { tension: 170, friction: 26 },
  gentle: { tension: 120, friction: 14 },
  wobbly: { tension: 180, friction: 12 },
  stiff: { tension: 210, friction: 20 },
  slow: { tension: 280, friction: 60 },
  molasses: { tension: 280, friction: 120 }
}, Or = {
  ...Eo.default,
  mass: 1,
  damping: 1,
  easing: Ks.linear,
  clamp: !1
}, So = class {
  constructor() {
    this.velocity = 0, Object.assign(this, Or);
  }
};
function To(e, t, r) {
  r && (r = { ...r }, On(r, t), t = { ...r, ...t }), On(e, t), Object.assign(e, t);
  for (const a in Or)
    e[a] == null && (e[a] = Or[a]);
  let { frequency: n, damping: i } = e;
  const { mass: s } = e;
  return _.und(n) || (n < 0.01 && (n = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * s, e.friction = 4 * Math.PI * i * s / n), e;
}
function On(e, t) {
  if (!_.und(t.decay))
    e.duration = void 0;
  else {
    const r = !_.und(t.tension) || !_.und(t.friction);
    (r || !_.und(t.frequency) || !_.und(t.damping) || !_.und(t.mass)) && (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0);
  }
}
var Rn = [], Po = class {
  constructor() {
    this.changed = !1, this.values = Rn, this.toValues = null, this.fromValues = Rn, this.config = new So(), this.immediate = !1;
  }
};
function Ci(e, { key: t, props: r, defaultProps: n, state: i, actions: s }) {
  return new Promise((a, c) => {
    let h, u, l = pt(r.cancel ?? (n == null ? void 0 : n.cancel), t);
    if (l)
      E();
    else {
      _.und(r.pause) || (i.paused = pt(r.pause, t));
      let P = n == null ? void 0 : n.pause;
      P !== !0 && (P = i.paused || pt(P, t)), h = We(r.delay || 0, t), P ? (i.resumeQueue.add(b), s.pause()) : (s.resume(), b());
    }
    function f() {
      i.resumeQueue.add(b), i.timeouts.delete(u), u.cancel(), h = u.time - V.now();
    }
    function b() {
      h > 0 && !Ce.skipAnimation ? (i.delayed = !0, u = V.setTimeout(E, h), i.pauseQueue.add(f), i.timeouts.add(u)) : E();
    }
    function E() {
      i.delayed && (i.delayed = !1), i.pauseQueue.delete(f), i.timeouts.delete(u), e <= (i.cancelId || 0) && (l = !0);
      try {
        s.start({ ...r, callId: e, cancel: l }, a);
      } catch (P) {
        c(P);
      }
    }
  });
}
var Hr = (e, t) => t.length == 1 ? t[0] : t.some((r) => r.cancelled) ? Ze(e.get()) : t.every((r) => r.noop) ? Ai(e.get()) : Oe(
  e.get(),
  t.every((r) => r.finished)
), Ai = (e) => ({
  value: e,
  noop: !0,
  finished: !0,
  cancelled: !1
}), Oe = (e, t, r = !1) => ({
  value: e,
  finished: t,
  cancelled: r
}), Ze = (e) => ({
  value: e,
  cancelled: !0,
  finished: !1
});
function Ii(e, t, r, n) {
  const { callId: i, parentId: s, onRest: a } = t, { asyncTo: c, promise: h } = r;
  return !s && e === c && !t.reset ? h : r.promise = (async () => {
    r.asyncId = i, r.asyncTo = e;
    const u = Kr(
      t,
      (R, w) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        w === "onRest" ? void 0 : R
      )
    );
    let l, f;
    const b = new Promise(
      (R, w) => (l = R, f = w)
    ), E = (R) => {
      const w = (
        // The `cancel` prop or `stop` method was used.
        i <= (r.cancelId || 0) && Ze(n) || // The async `to` prop was replaced.
        i !== r.asyncId && Oe(n, !1)
      );
      if (w)
        throw R.result = w, f(R), R;
    }, P = (R, w) => {
      const C = new Cn(), O = new An();
      return (async () => {
        if (Ce.skipAnimation)
          throw Tt(r), O.result = Oe(n, !1), f(O), O;
        E(C);
        const I = _.obj(R) ? { ...R } : { ...w, to: R };
        I.parentId = i, xe(u, (q, te) => {
          _.und(I[te]) && (I[te] = q);
        });
        const y = await n.start(I);
        return E(C), r.paused && await new Promise((q) => {
          r.resumeQueue.add(q);
        }), y;
      })();
    };
    let g;
    if (Ce.skipAnimation)
      return Tt(r), Oe(n, !1);
    try {
      let R;
      _.arr(e) ? R = (async (w) => {
        for (const C of w)
          await P(C);
      })(e) : R = Promise.resolve(e(P, n.stop.bind(n))), await Promise.all([R.then(l), b]), g = Oe(n.get(), !0, !1);
    } catch (R) {
      if (R instanceof Cn)
        g = R.result;
      else if (R instanceof An)
        g = R.result;
      else
        throw R;
    } finally {
      i == r.asyncId && (r.asyncId = s, r.asyncTo = s ? c : void 0, r.promise = s ? h : void 0);
    }
    return _.fun(a) && V.batchedUpdates(() => {
      a(g, n, n.item);
    }), g;
  })();
}
function Tt(e, t) {
  dt(e.timeouts, (r) => r.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
var Cn = class extends Error {
  constructor() {
    super(
      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
    );
  }
}, An = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
}, Rr = (e) => e instanceof Gr, Oo = 1, Gr = class extends vi {
  constructor() {
    super(...arguments), this.id = Oo++, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    this._priority != e && (this._priority = e, this._onPriorityChange(e));
  }
  /** Get the current value */
  get() {
    const e = Ae(this);
    return e && e.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...e) {
    return Ce.to(this, e);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...e) {
    return to(), Ce.to(this, e);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(e) {
    e == 1 && this._attach();
  }
  observerRemoved(e) {
    e == 0 && this._detach();
  }
  /** Called when the first child is added. */
  _attach() {
  }
  /** Called when the last child is removed. */
  _detach() {
  }
  /** Tell our children about our new value */
  _onChange(e, t = !1) {
    bt(this, {
      type: "change",
      parent: this,
      value: e,
      idle: t
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(e) {
    this.idle || Kt.sort(this), bt(this, {
      type: "priority",
      parent: this,
      priority: e
    });
  }
}, Ye = Symbol.for("SpringPhase"), xi = 1, Cr = 2, Ar = 4, lr = (e) => (e[Ye] & xi) > 0, Ve = (e) => (e[Ye] & Cr) > 0, ot = (e) => (e[Ye] & Ar) > 0, In = (e, t) => t ? e[Ye] |= Cr | xi : e[Ye] &= ~Cr, xn = (e, t) => t ? e[Ye] |= Ar : e[Ye] &= ~Ar, Ro = class extends Gr {
  constructor(e, t) {
    if (super(), this.animation = new Po(), this.defaultProps = {}, this._state = {
      paused: !1,
      delayed: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !_.und(e) || !_.und(t)) {
      const r = _.obj(e) ? { ...e } : { ...t, from: e };
      _.und(r.default) && (r.default = !0), this.start(r);
    }
  }
  /** Equals true when not advancing on each frame. */
  get idle() {
    return !(Ve(this) || this._state.asyncTo) || ot(this);
  }
  get goal() {
    return pe(this.animation.to);
  }
  get velocity() {
    const e = Ae(this);
    return e instanceof At ? e.lastVelocity || 0 : e.getPayload().map((t) => t.lastVelocity || 0);
  }
  /**
   * When true, this value has been animated at least once.
   */
  get hasAnimated() {
    return lr(this);
  }
  /**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */
  get isAnimating() {
    return Ve(this);
  }
  /**
   * When true, all current and future animations are paused.
   */
  get isPaused() {
    return ot(this);
  }
  /**
   *
   *
   */
  get isDelayed() {
    return this._state.delayed;
  }
  /** Advance the current animation by a number of milliseconds */
  advance(e) {
    let t = !0, r = !1;
    const n = this.animation;
    let { toValues: i } = n;
    const { config: s } = n, a = Xt(n.to);
    !a && Se(n.to) && (i = ye(pe(n.to))), n.values.forEach((u, l) => {
      if (u.done)
        return;
      const f = (
        // Animated strings always go from 0 to 1.
        u.constructor == Et ? 1 : a ? a[l].lastPosition : i[l]
      );
      let b = n.immediate, E = f;
      if (!b) {
        if (E = u.lastPosition, s.tension <= 0) {
          u.done = !0;
          return;
        }
        let P = u.elapsedTime += e;
        const g = n.fromValues[l], R = u.v0 != null ? u.v0 : u.v0 = _.arr(s.velocity) ? s.velocity[l] : s.velocity;
        let w;
        const C = s.precision || (g == f ? 5e-3 : Math.min(1, Math.abs(f - g) * 1e-3));
        if (_.und(s.duration))
          if (s.decay) {
            const O = s.decay === !0 ? 0.998 : s.decay, I = Math.exp(-(1 - O) * P);
            E = g + R / (1 - O) * (1 - I), b = Math.abs(u.lastPosition - E) <= C, w = R * I;
          } else {
            w = u.lastVelocity == null ? R : u.lastVelocity;
            const O = s.restVelocity || C / 10, I = s.clamp ? 0 : s.bounce, y = !_.und(I), q = g == f ? u.v0 > 0 : g < f;
            let te, be = !1;
            const re = 1, me = Math.ceil(e / re);
            for (let G = 0; G < me && (te = Math.abs(w) > O, !(!te && (b = Math.abs(f - E) <= C, b))); ++G) {
              y && (be = E == f || E > f == q, be && (w = -w * I, E = f));
              const ue = -s.tension * 1e-6 * (E - f), Y = -s.friction * 1e-3 * w, se = (ue + Y) / s.mass;
              w = w + se * re, E = E + w * re;
            }
          }
        else {
          let O = 1;
          s.duration > 0 && (this._memoizedDuration !== s.duration && (this._memoizedDuration = s.duration, u.durationProgress > 0 && (u.elapsedTime = s.duration * u.durationProgress, P = u.elapsedTime += e)), O = (s.progress || 0) + P / this._memoizedDuration, O = O > 1 ? 1 : O < 0 ? 0 : O, u.durationProgress = O), E = g + s.easing(O) * (f - g), w = (E - u.lastPosition) / e, b = O == 1;
        }
        u.lastVelocity = w, Number.isNaN(E) && (console.warn("Got NaN while animating:", this), b = !0);
      }
      a && !a[l].done && (b = !1), b ? u.done = !0 : t = !1, u.setValue(E, s.round) && (r = !0);
    });
    const c = Ae(this), h = c.getValue();
    if (t) {
      const u = pe(n.to);
      (h !== u || r) && !s.decay ? (c.setValue(u), this._onChange(u)) : r && s.decay && this._onChange(h), this._stop();
    } else
      r && this._onChange(h);
  }
  /** Set the current value, while stopping the current animation */
  set(e) {
    return V.batchedUpdates(() => {
      this._stop(), this._focus(e), this._set(e);
    }), this;
  }
  /**
   * Freeze the active animation in time, as well as any updates merged
   * before `resume` is called.
   */
  pause() {
    this._update({ pause: !0 });
  }
  /** Resume the animation if paused. */
  resume() {
    this._update({ pause: !1 });
  }
  /** Skip to the end of the current animation. */
  finish() {
    if (Ve(this)) {
      const { to: e, config: t } = this.animation;
      V.batchedUpdates(() => {
        this._onStart(), t.decay || this._set(e, !1), this._stop();
      });
    }
    return this;
  }
  /** Push props into the pending queue. */
  update(e) {
    return (this.queue || (this.queue = [])).push(e), this;
  }
  start(e, t) {
    let r;
    return _.und(e) ? (r = this.queue || [], this.queue = []) : r = [_.obj(e) ? e : { ...t, to: e }], Promise.all(
      r.map((n) => this._update(n))
    ).then((n) => Hr(this, n));
  }
  /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */
  stop(e) {
    const { to: t } = this.animation;
    return this._focus(this.get()), Tt(this._state, e && this._lastCallId), V.batchedUpdates(() => this._stop(t, e)), this;
  }
  /** Restart the animation. */
  reset() {
    this._update({ reset: !0 });
  }
  /** @internal */
  eventObserved(e) {
    e.type == "change" ? this._start() : e.type == "priority" && (this.priority = e.priority + 1);
  }
  /**
   * Parse the `to` and `from` range from the given `props` object.
   *
   * This also ensures the initial value is available to animated components
   * during the render phase.
   */
  _prepareNode(e) {
    const t = this.key || "";
    let { to: r, from: n } = e;
    r = _.obj(r) ? r[t] : r, (r == null || Pr(r)) && (r = void 0), n = _.obj(n) ? n[t] : n, n == null && (n = void 0);
    const i = { to: r, from: n };
    return lr(this) || (e.reverse && ([r, n] = [n, r]), n = pe(n), _.und(n) ? Ae(this) || this._set(r) : this._set(n)), i;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...e }, t) {
    const { key: r, defaultProps: n } = this;
    e.default && Object.assign(
      n,
      Kr(
        e,
        (a, c) => /^on/.test(c) ? Pi(a, r) : a
      )
    ), Mn(this, e, "onProps"), ct(this, "onProps", e, this);
    const i = this._prepareNode(e);
    if (Object.isFrozen(this))
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    const s = this._state;
    return Ci(++this._lastCallId, {
      key: r,
      props: e,
      defaultProps: n,
      state: s,
      actions: {
        pause: () => {
          ot(this) || (xn(this, !0), lt(s.pauseQueue), ct(
            this,
            "onPause",
            Oe(this, at(this, this.animation.to)),
            this
          ));
        },
        resume: () => {
          ot(this) && (xn(this, !1), Ve(this) && this._resume(), lt(s.resumeQueue), ct(
            this,
            "onResume",
            Oe(this, at(this, this.animation.to)),
            this
          ));
        },
        start: this._merge.bind(this, i)
      }
    }).then((a) => {
      if (e.loop && a.finished && !(t && a.noop)) {
        const c = ki(e);
        if (c)
          return this._update(c, !0);
      }
      return a;
    });
  }
  /** Merge props into the current animation */
  _merge(e, t, r) {
    if (t.cancel)
      return this.stop(!0), r(Ze(this));
    const n = !_.und(e.to), i = !_.und(e.from);
    if (n || i)
      if (t.callId > this._lastToId)
        this._lastToId = t.callId;
      else
        return r(Ze(this));
    const { key: s, defaultProps: a, animation: c } = this, { to: h, from: u } = c;
    let { to: l = h, from: f = u } = e;
    i && !n && (!t.default || _.und(l)) && (l = f), t.reverse && ([l, f] = [f, l]);
    const b = !De(f, u);
    b && (c.from = f), f = pe(f);
    const E = !De(l, h);
    E && this._focus(l);
    const P = Pr(t.to), { config: g } = c, { decay: R, velocity: w } = g;
    (n || i) && (g.velocity = 0), t.config && !P && To(
      g,
      We(t.config, s),
      // Avoid calling the same "config" prop twice.
      t.config !== a.config ? We(a.config, s) : void 0
    );
    let C = Ae(this);
    if (!C || _.und(l))
      return r(Oe(this, !0));
    const O = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      _.und(t.reset) ? i && !t.default : !_.und(f) && pt(t.reset, s)
    ), I = O ? f : this.get(), y = St(l), q = _.num(y) || _.arr(y) || Qt(y), te = !P && (!q || pt(a.immediate || t.immediate, s));
    if (E) {
      const G = Tr(l);
      if (G !== C.constructor)
        if (te)
          C = this._set(y);
        else
          throw Error(
            `Cannot animate between ${C.constructor.name} and ${G.name}, as the "to" prop suggests`
          );
    }
    const be = C.constructor;
    let re = Se(l), me = !1;
    if (!re) {
      const G = O || !lr(this) && b;
      (E || G) && (me = De(St(I), y), re = !me), (!De(c.immediate, te) && !te || !De(g.decay, R) || !De(g.velocity, w)) && (re = !0);
    }
    if (me && Ve(this) && (c.changed && !O ? re = !0 : re || this._stop(h)), !P && ((re || Se(h)) && (c.values = C.getPayload(), c.toValues = Se(l) ? null : be == Et ? [1] : ye(y)), c.immediate != te && (c.immediate = te, !te && !O && this._set(h)), re)) {
      const { onRest: G } = c;
      U(Ao, (Y) => Mn(this, t, Y));
      const ue = Oe(this, at(this, h));
      lt(this._pendingCalls, ue), this._pendingCalls.add(r), c.changed && V.batchedUpdates(() => {
        var Y;
        c.changed = !O, G == null || G(ue, this), O ? We(a.onRest, ue) : (Y = c.onStart) == null || Y.call(c, ue, this);
      });
    }
    O && this._set(I), P ? r(Ii(t.to, t, this._state, this)) : re ? this._start() : Ve(this) && !E ? this._pendingCalls.add(r) : r(Ai(I));
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(e) {
    const t = this.animation;
    e !== t.to && (_n(this) && this._detach(), t.to = e, _n(this) && this._attach());
  }
  _attach() {
    let e = 0;
    const { to: t } = this.animation;
    Se(t) && (tt(t, this), Rr(t) && (e = t.priority + 1)), this.priority = e;
  }
  _detach() {
    const { to: e } = this.animation;
    Se(e) && _t(e, this);
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(e, t = !0) {
    const r = pe(e);
    if (!_.und(r)) {
      const n = Ae(this);
      if (!n || !De(r, n.getValue())) {
        const i = Tr(r);
        !n || n.constructor != i ? Br(this, i.create(r)) : n.setValue(r), n && V.batchedUpdates(() => {
          this._onChange(r, t);
        });
      }
    }
    return Ae(this);
  }
  _onStart() {
    const e = this.animation;
    e.changed || (e.changed = !0, ct(
      this,
      "onStart",
      Oe(this, at(this, e.to)),
      this
    ));
  }
  _onChange(e, t) {
    t || (this._onStart(), We(this.animation.onChange, e, this)), We(this.defaultProps.onChange, e, this), super._onChange(e, t);
  }
  // This method resets the animation state (even if already animating) to
  // ensure the latest from/to range is used, and it also ensures this spring
  // is added to the frameloop.
  _start() {
    const e = this.animation;
    Ae(this).reset(pe(e.to)), e.immediate || (e.fromValues = e.values.map((t) => t.lastPosition)), Ve(this) || (In(this, !0), ot(this) || this._resume());
  }
  _resume() {
    Ce.skipAnimation ? this.finish() : Kt.start(this);
  }
  /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */
  _stop(e, t) {
    if (Ve(this)) {
      In(this, !1);
      const r = this.animation;
      U(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), bt(this, {
        type: "idle",
        parent: this
      });
      const n = t ? Ze(this.get()) : Oe(this.get(), at(this, e ?? r.to));
      lt(this._pendingCalls, n), r.changed && (r.changed = !1, ct(this, "onRest", n, this));
    }
  }
};
function at(e, t) {
  const r = St(t), n = St(e.get());
  return De(n, r);
}
function ki(e, t = e.loop, r = e.to) {
  const n = We(t);
  if (n) {
    const i = n !== !0 && Ri(n), s = (i || e).reverse, a = !i || i.reset;
    return Pt({
      ...e,
      loop: t,
      // Avoid updating default props when looping.
      default: !1,
      // Never loop the `pause` prop.
      pause: void 0,
      // For the "reverse" prop to loop as expected, the "to" prop
      // must be undefined. The "reverse" prop is ignored when the
      // "to" prop is an array or function.
      to: !s || Pr(r) ? r : void 0,
      // Ignore the "from" prop except on reset.
      from: a ? e.from : void 0,
      reset: a,
      // The "loop" prop can return a "useSpring" props object to
      // override any of the original props.
      ...i
    });
  }
}
function Pt(e) {
  const { to: t, from: r } = e = Ri(e), n = /* @__PURE__ */ new Set();
  return _.obj(t) && kn(t, n), _.obj(r) && kn(r, n), e.keys = n.size ? Array.from(n) : null, e;
}
function Co(e) {
  const t = Pt(e);
  return _.und(t.default) && (t.default = Kr(t)), t;
}
function kn(e, t) {
  xe(e, (r, n) => r != null && t.add(n));
}
var Ao = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function Mn(e, t, r) {
  e.animation[r] = t[r] !== Oi(t, r) ? Pi(t[r], e.key) : void 0;
}
function ct(e, t, ...r) {
  var n, i, s, a;
  (i = (n = e.animation)[t]) == null || i.call(n, ...r), (a = (s = e.defaultProps)[t]) == null || a.call(s, ...r);
}
var Io = ["onStart", "onChange", "onRest"], xo = 1, ko = class {
  constructor(t, r) {
    this.id = xo++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._state = {
      paused: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    }, this._onFrame = this._onFrame.bind(this), r && (this._flush = r), t && this.start({ default: !0, ...t });
  }
  /**
   * Equals `true` when no spring values are in the frameloop, and
   * no async animation is currently active.
   */
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((t) => t.idle && !t.isDelayed && !t.isPaused);
  }
  get item() {
    return this._item;
  }
  set item(t) {
    this._item = t;
  }
  /** Get the current values of our springs */
  get() {
    const t = {};
    return this.each((r, n) => t[n] = r.get()), t;
  }
  /** Set the current values without animating. */
  set(t) {
    for (const r in t) {
      const n = t[r];
      _.und(n) || this.springs[r].set(n);
    }
  }
  /** Push an update onto the queue of each value. */
  update(t) {
    return t && this.queue.push(Pt(t)), this;
  }
  /**
   * Start the queued animations for every spring, and resolve the returned
   * promise once all queued animations have finished or been cancelled.
   *
   * When you pass a queue (instead of nothing), that queue is used instead of
   * the queued animations added with the `update` method, which are left alone.
   */
  start(t) {
    let { queue: r } = this;
    return t ? r = ye(t).map(Pt) : this.queue = [], this._flush ? this._flush(this, r) : ($i(this, r), Ir(this, r));
  }
  /** @internal */
  stop(t, r) {
    if (t !== !!t && (r = t), r) {
      const n = this.springs;
      U(ye(r), (i) => n[i].stop(!!t));
    } else
      Tt(this._state, this._lastAsyncId), this.each((n) => n.stop(!!t));
    return this;
  }
  /** Freeze the active animation in time */
  pause(t) {
    if (_.und(t))
      this.start({ pause: !0 });
    else {
      const r = this.springs;
      U(ye(t), (n) => r[n].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(t) {
    if (_.und(t))
      this.start({ pause: !1 });
    else {
      const r = this.springs;
      U(ye(t), (n) => r[n].resume());
    }
    return this;
  }
  /** Call a function once per spring value */
  each(t) {
    xe(this.springs, t);
  }
  /** @internal Called at the end of every animation frame */
  _onFrame() {
    const { onStart: t, onChange: r, onRest: n } = this._events, i = this._active.size > 0, s = this._changed.size > 0;
    (i && !this._started || s && !this._started) && (this._started = !0, dt(t, ([h, u]) => {
      u.value = this.get(), h(u, this, this._item);
    }));
    const a = !i && this._started, c = s || a && n.size ? this.get() : null;
    s && r.size && dt(r, ([h, u]) => {
      u.value = c, h(u, this, this._item);
    }), a && (this._started = !1, dt(n, ([h, u]) => {
      u.value = c, h(u, this, this._item);
    }));
  }
  /** @internal */
  eventObserved(t) {
    if (t.type == "change")
      this._changed.add(t.parent), t.idle || this._active.add(t.parent);
    else if (t.type == "idle")
      this._active.delete(t.parent);
    else
      return;
    V.onFrame(this._onFrame);
  }
};
function Ir(e, t) {
  return Promise.all(t.map((r) => Mi(e, r))).then(
    (r) => Hr(e, r)
  );
}
async function Mi(e, t, r) {
  const { keys: n, to: i, from: s, loop: a, onRest: c, onResolve: h } = t, u = _.obj(t.default) && t.default;
  a && (t.loop = !1), i === !1 && (t.to = null), s === !1 && (t.from = null);
  const l = _.arr(i) || _.fun(i) ? i : void 0;
  l ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : U(Io, (g) => {
    const R = t[g];
    if (_.fun(R)) {
      const w = e._events[g];
      t[g] = ({ finished: C, cancelled: O }) => {
        const I = w.get(R);
        I ? (C || (I.finished = !1), O && (I.cancelled = !0)) : w.set(R, {
          value: null,
          finished: C || !1,
          cancelled: O || !1
        });
      }, u && (u[g] = t[g]);
    }
  });
  const f = e._state;
  t.pause === !f.paused ? (f.paused = t.pause, lt(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
  const b = (n || Object.keys(e.springs)).map(
    (g) => e.springs[g].start(t)
  ), E = t.cancel === !0 || Oi(t, "cancel") === !0;
  (l || E && f.asyncId) && b.push(
    Ci(++e._lastAsyncId, {
      props: t,
      state: f,
      actions: {
        pause: Er,
        resume: Er,
        start(g, R) {
          E ? (Tt(f, e._lastAsyncId), R(Ze(e))) : (g.onRest = c, R(
            Ii(
              l,
              g,
              f,
              e
            )
          ));
        }
      }
    })
  ), f.paused && await new Promise((g) => {
    f.resumeQueue.add(g);
  });
  const P = Hr(e, await Promise.all(b));
  if (a && P.finished && !(r && P.noop)) {
    const g = ki(t, a, i);
    if (g)
      return $i(e, [g]), Mi(e, g, !0);
  }
  return h && V.batchedUpdates(() => h(P, e, e.item)), P;
}
function Dn(e, t) {
  const r = { ...e.springs };
  return t && U(ye(t), (n) => {
    _.und(n.keys) && (n = Pt(n)), _.obj(n.to) || (n = { ...n, to: void 0 }), Vi(r, n, (i) => ji(i));
  }), Di(e, r), r;
}
function Di(e, t) {
  xe(t, (r, n) => {
    e.springs[n] || (e.springs[n] = r, tt(r, e));
  });
}
function ji(e, t) {
  const r = new Ro();
  return r.key = e, t && tt(r, t), r;
}
function Vi(e, t, r) {
  t.keys && U(t.keys, (n) => {
    (e[n] || (e[n] = r(n)))._prepareNode(t);
  });
}
function $i(e, t) {
  U(t, (r) => {
    Vi(e.springs, r, (n) => ji(n, e));
  });
}
var Jt = ({
  children: e,
  ...t
}) => {
  const r = jr(Yt), n = t.pause || !!r.pause, i = t.immediate || !!r.immediate;
  t = so(() => ({ pause: n, immediate: i }), [n, i]);
  const { Provider: s } = Yt;
  return /* @__PURE__ */ Dr.createElement(s, { value: t }, e);
}, Yt = Mo(Jt, {});
Jt.Provider = Yt.Provider;
Jt.Consumer = Yt.Consumer;
function Mo(e, t) {
  return Object.assign(e, Dr.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
var Do = () => {
  const e = [], t = function(n) {
    no();
    const i = [];
    return U(e, (s, a) => {
      if (_.und(n))
        i.push(s.start());
      else {
        const c = r(n, s, a);
        c && i.push(s.start(c));
      }
    }), i;
  };
  t.current = e, t.add = function(n) {
    e.includes(n) || e.push(n);
  }, t.delete = function(n) {
    const i = e.indexOf(n);
    ~i && e.splice(i, 1);
  }, t.pause = function() {
    return U(e, (n) => n.pause(...arguments)), this;
  }, t.resume = function() {
    return U(e, (n) => n.resume(...arguments)), this;
  }, t.set = function(n) {
    U(e, (i, s) => {
      const a = _.fun(n) ? n(s, i) : n;
      a && i.set(a);
    });
  }, t.start = function(n) {
    const i = [];
    return U(e, (s, a) => {
      if (_.und(n))
        i.push(s.start());
      else {
        const c = this._getProps(n, s, a);
        c && i.push(s.start(c));
      }
    }), i;
  }, t.stop = function() {
    return U(e, (n) => n.stop(...arguments)), this;
  }, t.update = function(n) {
    return U(e, (i, s) => i.update(this._getProps(n, i, s))), this;
  };
  const r = function(n, i, s) {
    return _.fun(n) ? n(s, i) : n;
  };
  return t._getProps = r, t;
};
function jo(e, t, r) {
  const n = _.fun(t) && t;
  n && !r && (r = []);
  const i = ut(
    () => n || arguments.length == 3 ? Do() : void 0,
    []
  ), s = he(0), a = wi(), c = ut(
    () => ({
      ctrls: [],
      queue: [],
      flush(w, C) {
        const O = Dn(w, C);
        return s.current > 0 && !c.queue.length && !Object.keys(O).some((y) => !w.springs[y]) ? Ir(w, C) : new Promise((y) => {
          Di(w, O), c.queue.push(() => {
            y(Ir(w, C));
          }), a();
        });
      }
    }),
    []
  ), h = he([...c.ctrls]), u = [], l = En(e) || 0;
  ut(() => {
    U(h.current.slice(e, l), (w) => {
      _o(w, i), w.stop(!0);
    }), h.current.length = e, f(l, e);
  }, [e]), ut(() => {
    f(0, Math.min(l, e));
  }, r);
  function f(w, C) {
    for (let O = w; O < C; O++) {
      const I = h.current[O] || (h.current[O] = new ko(null, c.flush)), y = n ? n(O, I) : t[O];
      y && (u[O] = Co(y));
    }
  }
  const b = h.current.map((w, C) => Dn(w, u[C])), E = jr(Jt), P = En(E), g = E !== P && bo(E);
  qr(() => {
    s.current++, c.ctrls = h.current;
    const { queue: w } = c;
    w.length && (c.queue = [], U(w, (C) => C())), U(h.current, (C, O) => {
      i == null || i.add(C), g && C.start({ default: E });
      const I = u[O];
      I && (wo(C, I.ref), C.ref ? C.queue.push(I) : C.start(I));
    });
  }), Ei(() => () => {
    U(c.ctrls, (w) => w.stop(!0));
  });
  const R = b.map((w) => ({ ...w }));
  return i ? [R, i] : R;
}
function Vo(e, t) {
  const r = _.fun(e), [[n], i] = jo(
    1,
    r ? e : [e],
    r ? [] : t
  );
  return r || arguments.length == 2 ? [n, i] : n;
}
var $o = class extends Gr {
  constructor(e, t) {
    super(), this.source = e, this.idle = !0, this._active = /* @__PURE__ */ new Set(), this.calc = gt(...t);
    const r = this._get(), n = Tr(r);
    Br(this, n.create(r));
  }
  advance(e) {
    const t = this._get(), r = this.get();
    De(t, r) || (Ae(this).setValue(t), this._onChange(t, this.idle)), !this.idle && jn(this._active) && fr(this);
  }
  _get() {
    const e = _.arr(this.source) ? this.source.map(pe) : ye(pe(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !jn(this._active) && (this.idle = !1, U(Xt(this), (e) => {
      e.done = !1;
    }), Ce.skipAnimation ? (V.batchedUpdates(() => this.advance()), fr(this)) : Kt.start(this));
  }
  // Observe our sources only when we're observed.
  _attach() {
    let e = 1;
    U(ye(this.source), (t) => {
      Se(t) && tt(t, this), Rr(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1));
    }), this.priority = e, this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    U(ye(this.source), (e) => {
      Se(e) && _t(e, this);
    }), this._active.clear(), fr(this);
  }
  /** @internal */
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = ye(this.source).reduce(
      (t, r) => Math.max(t, (Rr(r) ? r.priority : 0) + 1),
      0
    ));
  }
};
function Fo(e) {
  return e.idle !== !1;
}
function jn(e) {
  return !e.size || Array.from(e).every(Fo);
}
function fr(e) {
  e.idle || (e.idle = !0, U(Xt(e), (t) => {
    t.done = !0;
  }), bt(e, {
    type: "idle",
    parent: e
  }));
}
Ce.assign({
  createStringInterpolator: bi,
  to: (e, t) => new $o(e, t)
});
var Fi = /^--/;
function No(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !Fi.test(e) && !(mt.hasOwnProperty(e) && mt[e]) ? t + "px" : ("" + t).trim();
}
var Vn = {};
function Lo(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const r = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: n, children: i, scrollTop: s, scrollLeft: a, viewBox: c, ...h } = t, u = Object.values(h), l = Object.keys(h).map(
    (f) => r || e.hasAttribute(f) ? f : Vn[f] || (Vn[f] = f.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (b) => "-" + b.toLowerCase()
    ))
  );
  i !== void 0 && (e.textContent = i);
  for (const f in n)
    if (n.hasOwnProperty(f)) {
      const b = No(f, n[f]);
      Fi.test(f) ? e.style.setProperty(f, b) : e.style[f] = b;
    }
  l.forEach((f, b) => {
    e.setAttribute(f, u[b]);
  }), s !== void 0 && (e.scrollTop = s), a !== void 0 && (e.scrollLeft = a), c !== void 0 && e.setAttribute("viewBox", c);
}
var mt = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  // SVG-related properties
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, zo = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), Uo = ["Webkit", "Ms", "Moz", "O"];
mt = Object.keys(mt).reduce((e, t) => (Uo.forEach((r) => e[zo(r, t)] = e[t]), e), mt);
var Wo = /^(matrix|translate|scale|rotate|skew)/, Yo = /^(translate)/, qo = /^(rotate|skew)/, dr = (e, t) => _.num(e) && e !== 0 ? e + t : e, Ft = (e, t) => _.arr(e) ? e.every((r) => Ft(r, t)) : _.num(e) ? e === t : parseFloat(e) === t, Bo = class extends Zt {
  constructor({ x: e, y: t, z: r, ...n }) {
    const i = [], s = [];
    (e || t || r) && (i.push([e || 0, t || 0, r || 0]), s.push((a) => [
      `translate3d(${a.map((c) => dr(c, "px")).join(",")})`,
      // prettier-ignore
      Ft(a, 0)
    ])), xe(n, (a, c) => {
      if (c === "transform")
        i.push([a || ""]), s.push((h) => [h, h === ""]);
      else if (Wo.test(c)) {
        if (delete n[c], _.und(a))
          return;
        const h = Yo.test(c) ? "px" : qo.test(c) ? "deg" : "";
        i.push(ye(a)), s.push(
          c === "rotate3d" ? ([u, l, f, b]) => [
            `rotate3d(${u},${l},${f},${dr(b, h)})`,
            Ft(b, 0)
          ] : (u) => [
            `${c}(${u.map((l) => dr(l, h)).join(",")})`,
            Ft(u, c.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    }), i.length && (n.transform = new Ko(i, s)), super(n);
  }
}, Ko = class extends vi {
  constructor(e, t) {
    super(), this.inputs = e, this.transforms = t, this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", t = !0;
    return U(this.inputs, (r, n) => {
      const i = pe(r[0]), [s, a] = this.transforms[n](
        _.arr(i) ? i : r.map(pe)
      );
      e += " " + s, t = t && a;
    }), t ? "none" : e;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(e) {
    e == 1 && U(
      this.inputs,
      (t) => U(
        t,
        (r) => Se(r) && tt(r, this)
      )
    );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(e) {
    e == 0 && U(
      this.inputs,
      (t) => U(
        t,
        (r) => Se(r) && _t(r, this)
      )
    );
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), bt(this, e);
  }
}, Ho = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
Ce.assign({
  batchedUpdates: Es,
  createStringInterpolator: bi,
  colors: Ds
});
var Go = po(Ho, {
  applyAnimatedValues: Lo,
  createAnimatedStyle: (e) => new Bo(e),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop: e, scrollLeft: t, ...r }) => r
}), Qo = Go.animated;
function Xo(e, t, r) {
  return Math.max(t, Math.min(e, r));
}
const J = {
  toVector(e, t) {
    return e === void 0 && (e = t), Array.isArray(e) ? e : [e, e];
  },
  add(e, t) {
    return [e[0] + t[0], e[1] + t[1]];
  },
  sub(e, t) {
    return [e[0] - t[0], e[1] - t[1]];
  },
  addTo(e, t) {
    e[0] += t[0], e[1] += t[1];
  },
  subTo(e, t) {
    e[0] -= t[0], e[1] -= t[1];
  }
};
function $n(e, t, r) {
  return t === 0 || Math.abs(t) === 1 / 0 ? Math.pow(e, r * 5) : e * t * r / (t + r * e);
}
function Fn(e, t, r, n = 0.15) {
  return n === 0 ? Xo(e, t, r) : e < t ? -$n(t - e, r - t, n) + t : e > r ? +$n(e - r, r - t, n) + r : e;
}
function Zo(e, [t, r], [n, i]) {
  const [[s, a], [c, h]] = e;
  return [Fn(t, s, a, n), Fn(r, c, h, i)];
}
function Jo(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ea(e) {
  var t = Jo(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function ae(e, t, r) {
  return t = ea(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Nn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nn(Object(r), !0).forEach(function(n) {
      ae(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Ni = {
  pointer: {
    start: "down",
    change: "move",
    end: "up"
  },
  mouse: {
    start: "down",
    change: "move",
    end: "up"
  },
  touch: {
    start: "start",
    change: "move",
    end: "end"
  },
  gesture: {
    start: "start",
    change: "change",
    end: "end"
  }
};
function Ln(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : "";
}
const ta = ["enter", "leave"];
function ra(e = !1, t) {
  return e && !ta.includes(t);
}
function na(e, t = "", r = !1) {
  const n = Ni[e], i = n && n[t] || t;
  return "on" + Ln(e) + Ln(i) + (ra(r, i) ? "Capture" : "");
}
const ia = ["gotpointercapture", "lostpointercapture"];
function sa(e) {
  let t = e.substring(2).toLowerCase();
  const r = !!~t.indexOf("passive");
  r && (t = t.replace("passive", ""));
  const n = ia.includes(t) ? "capturecapture" : "capture", i = !!~t.indexOf(n);
  return i && (t = t.replace("capture", "")), {
    device: t,
    capture: i,
    passive: r
  };
}
function oa(e, t = "") {
  const r = Ni[e], n = r && r[t] || t;
  return e + n;
}
function er(e) {
  return "touches" in e;
}
function Li(e) {
  return er(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse";
}
function aa(e) {
  return Array.from(e.touches).filter((t) => {
    var r, n;
    return t.target === e.currentTarget || ((r = e.currentTarget) === null || r === void 0 || (n = r.contains) === null || n === void 0 ? void 0 : n.call(r, t.target));
  });
}
function ca(e) {
  return e.type === "touchend" || e.type === "touchcancel" ? e.changedTouches : e.targetTouches;
}
function zi(e) {
  return er(e) ? ca(e)[0] : e;
}
function xr(e, t) {
  try {
    const r = t.clientX - e.clientX, n = t.clientY - e.clientY, i = (t.clientX + e.clientX) / 2, s = (t.clientY + e.clientY) / 2, a = Math.hypot(r, n);
    return {
      angle: -(Math.atan2(r, n) * 180) / Math.PI,
      distance: a,
      origin: [i, s]
    };
  } catch {
  }
  return null;
}
function ua(e) {
  return aa(e).map((t) => t.identifier);
}
function zn(e, t) {
  const [r, n] = Array.from(e.touches).filter((i) => t.includes(i.identifier));
  return xr(r, n);
}
function hr(e) {
  const t = zi(e);
  return er(e) ? t.identifier : t.pointerId;
}
function et(e) {
  const t = zi(e);
  return [t.clientX, t.clientY];
}
const Un = 40, Wn = 800;
function Ui(e) {
  let {
    deltaX: t,
    deltaY: r,
    deltaMode: n
  } = e;
  return n === 1 ? (t *= Un, r *= Un) : n === 2 && (t *= Wn, r *= Wn), [t, r];
}
function la(e) {
  var t, r;
  const {
    scrollX: n,
    scrollY: i,
    scrollLeft: s,
    scrollTop: a
  } = e.currentTarget;
  return [(t = n ?? s) !== null && t !== void 0 ? t : 0, (r = i ?? a) !== null && r !== void 0 ? r : 0];
}
function fa(e) {
  const t = {};
  if ("buttons" in e && (t.buttons = e.buttons), "shiftKey" in e) {
    const {
      shiftKey: r,
      altKey: n,
      metaKey: i,
      ctrlKey: s
    } = e;
    Object.assign(t, {
      shiftKey: r,
      altKey: n,
      metaKey: i,
      ctrlKey: s
    });
  }
  return t;
}
function qt(e, ...t) {
  return typeof e == "function" ? e(...t) : e;
}
function da() {
}
function ha(...e) {
  return e.length === 0 ? da : e.length === 1 ? e[0] : function() {
    let t;
    for (const r of e)
      t = r.apply(this, arguments) || t;
    return t;
  };
}
function Yn(e, t) {
  return Object.assign({}, t, e || {});
}
const pa = 32;
class Wi {
  constructor(t, r, n) {
    this.ctrl = t, this.args = r, this.key = n, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset());
  }
  get state() {
    return this.ctrl.state[this.key];
  }
  set state(t) {
    this.ctrl.state[this.key] = t;
  }
  get shared() {
    return this.ctrl.state.shared;
  }
  get eventStore() {
    return this.ctrl.gestureEventStores[this.key];
  }
  get timeoutStore() {
    return this.ctrl.gestureTimeoutStores[this.key];
  }
  get config() {
    return this.ctrl.config[this.key];
  }
  get sharedConfig() {
    return this.ctrl.config.shared;
  }
  get handler() {
    return this.ctrl.handlers[this.key];
  }
  reset() {
    const {
      state: t,
      shared: r,
      ingKey: n,
      args: i
    } = this;
    r[n] = t._active = t.active = t._blocked = t._force = !1, t._step = [!1, !1], t.intentional = !1, t._movement = [0, 0], t._distance = [0, 0], t._direction = [0, 0], t._delta = [0, 0], t._bounds = [[-1 / 0, 1 / 0], [-1 / 0, 1 / 0]], t.args = i, t.axis = void 0, t.memo = void 0, t.elapsedTime = t.timeDelta = 0, t.direction = [0, 0], t.distance = [0, 0], t.overflow = [0, 0], t._movementBound = [!1, !1], t.velocity = [0, 0], t.movement = [0, 0], t.delta = [0, 0], t.timeStamp = 0;
  }
  start(t) {
    const r = this.state, n = this.config;
    r._active || (this.reset(), this.computeInitial(), r._active = !0, r.target = t.target, r.currentTarget = t.currentTarget, r.lastOffset = n.from ? qt(n.from, r) : r.offset, r.offset = r.lastOffset, r.startTime = r.timeStamp = t.timeStamp);
  }
  computeValues(t) {
    const r = this.state;
    r._values = t, r.values = this.config.transform(t);
  }
  computeInitial() {
    const t = this.state;
    t._initial = t._values, t.initial = t.values;
  }
  compute(t) {
    const {
      state: r,
      config: n,
      shared: i
    } = this;
    r.args = this.args;
    let s = 0;
    if (t && (r.event = t, n.preventDefault && t.cancelable && r.event.preventDefault(), r.type = t.type, i.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, i.locked = !!document.pointerLockElement, Object.assign(i, fa(t)), i.down = i.pressed = i.buttons % 2 === 1 || i.touches > 0, s = t.timeStamp - r.timeStamp, r.timeStamp = t.timeStamp, r.elapsedTime = r.timeStamp - r.startTime), r._active) {
      const q = r._delta.map(Math.abs);
      J.addTo(r._distance, q);
    }
    this.axisIntent && this.axisIntent(t);
    const [a, c] = r._movement, [h, u] = n.threshold, {
      _step: l,
      values: f
    } = r;
    if (n.hasCustomTransform ? (l[0] === !1 && (l[0] = Math.abs(a) >= h && f[0]), l[1] === !1 && (l[1] = Math.abs(c) >= u && f[1])) : (l[0] === !1 && (l[0] = Math.abs(a) >= h && Math.sign(a) * h), l[1] === !1 && (l[1] = Math.abs(c) >= u && Math.sign(c) * u)), r.intentional = l[0] !== !1 || l[1] !== !1, !r.intentional)
      return;
    const b = [0, 0];
    if (n.hasCustomTransform) {
      const [q, te] = f;
      b[0] = l[0] !== !1 ? q - l[0] : 0, b[1] = l[1] !== !1 ? te - l[1] : 0;
    } else
      b[0] = l[0] !== !1 ? a - l[0] : 0, b[1] = l[1] !== !1 ? c - l[1] : 0;
    this.restrictToAxis && !r._blocked && this.restrictToAxis(b);
    const E = r.offset, P = r._active && !r._blocked || r.active;
    P && (r.first = r._active && !r.active, r.last = !r._active && r.active, r.active = i[this.ingKey] = r._active, t && (r.first && ("bounds" in n && (r._bounds = qt(n.bounds, r)), this.setup && this.setup()), r.movement = b, this.computeOffset()));
    const [g, R] = r.offset, [[w, C], [O, I]] = r._bounds;
    r.overflow = [g < w ? -1 : g > C ? 1 : 0, R < O ? -1 : R > I ? 1 : 0], r._movementBound[0] = r.overflow[0] ? r._movementBound[0] === !1 ? r._movement[0] : r._movementBound[0] : !1, r._movementBound[1] = r.overflow[1] ? r._movementBound[1] === !1 ? r._movement[1] : r._movementBound[1] : !1;
    const y = r._active ? n.rubberband || [0, 0] : [0, 0];
    if (r.offset = Zo(r._bounds, r.offset, y), r.delta = J.sub(r.offset, E), this.computeMovement(), P && (!r.last || s > pa)) {
      r.delta = J.sub(r.offset, E);
      const q = r.delta.map(Math.abs);
      J.addTo(r.distance, q), r.direction = r.delta.map(Math.sign), r._direction = r._delta.map(Math.sign), !r.first && s > 0 && (r.velocity = [q[0] / s, q[1] / s], r.timeDelta = s);
    }
  }
  emit() {
    const t = this.state, r = this.shared, n = this.config;
    if (t._active || this.clean(), (t._blocked || !t.intentional) && !t._force && !n.triggerAllEvents)
      return;
    const i = this.handler(ee(ee(ee({}, r), t), {}, {
      [this.aliasKey]: t.values
    }));
    i !== void 0 && (t.memo = i);
  }
  clean() {
    this.eventStore.clean(), this.timeoutStore.clean();
  }
}
function ma([e, t], r) {
  const n = Math.abs(e), i = Math.abs(t);
  if (n > i && n > r)
    return "x";
  if (i > n && i > r)
    return "y";
}
class It extends Wi {
  constructor(...t) {
    super(...t), ae(this, "aliasKey", "xy");
  }
  reset() {
    super.reset(), this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0], this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = J.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = J.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(t) {
    const r = this.state, n = this.config;
    if (!r.axis && t) {
      const i = typeof n.axisThreshold == "object" ? n.axisThreshold[Li(t)] : n.axisThreshold;
      r.axis = ma(r._movement, i);
    }
    r._blocked = (n.lockDirection || !!n.axis) && !r.axis || !!n.axis && n.axis !== r.axis;
  }
  restrictToAxis(t) {
    if (this.config.axis || this.config.lockDirection)
      switch (this.state.axis) {
        case "x":
          t[1] = 0;
          break;
        case "y":
          t[0] = 0;
          break;
      }
  }
}
const qn = (e) => e, Bn = 0.15, Qr = {
  enabled(e = !0) {
    return e;
  },
  eventOptions(e, t, r) {
    return ee(ee({}, r.shared.eventOptions), e);
  },
  preventDefault(e = !1) {
    return e;
  },
  triggerAllEvents(e = !1) {
    return e;
  },
  rubberband(e = 0) {
    switch (e) {
      case !0:
        return [Bn, Bn];
      case !1:
        return [0, 0];
      default:
        return J.toVector(e);
    }
  },
  from(e) {
    if (typeof e == "function")
      return e;
    if (e != null)
      return J.toVector(e);
  },
  transform(e, t, r) {
    const n = e || r.shared.transform;
    if (this.hasCustomTransform = !!n, process.env.NODE_ENV === "development") {
      const i = n || qn;
      return (s) => {
        const a = i(s);
        return (!isFinite(a[0]) || !isFinite(a[1])) && console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${a[0]},${[1]}]`), a;
      };
    }
    return n || qn;
  },
  threshold(e) {
    return J.toVector(e, 0);
  }
};
process.env.NODE_ENV === "development" && Object.assign(Qr, {
  domTarget(e) {
    if (e !== void 0)
      throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
    return NaN;
  },
  lockDirection(e) {
    if (e !== void 0)
      throw Error("[@use-gesture]: `lockDirection` option has been merged with `axis`. Use it as in `{ axis: 'lock' }`");
    return NaN;
  },
  initial(e) {
    if (e !== void 0)
      throw Error("[@use-gesture]: `initial` option has been renamed to `from`.");
    return NaN;
  }
});
const va = 0, qe = ee(ee({}, Qr), {}, {
  axis(e, t, {
    axis: r
  }) {
    if (this.lockDirection = r === "lock", !this.lockDirection)
      return r;
  },
  axisThreshold(e = va) {
    return e;
  },
  bounds(e = {}) {
    if (typeof e == "function")
      return (s) => qe.bounds(e(s));
    if ("current" in e)
      return () => e.current;
    if (typeof HTMLElement == "function" && e instanceof HTMLElement)
      return e;
    const {
      left: t = -1 / 0,
      right: r = 1 / 0,
      top: n = -1 / 0,
      bottom: i = 1 / 0
    } = e;
    return [[t, r], [n, i]];
  }
}), Kn = {
  ArrowRight: (e, t = 1) => [e * t, 0],
  ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
  ArrowUp: (e, t = 1) => [0, -1 * e * t],
  ArrowDown: (e, t = 1) => [0, e * t]
};
class ga extends It {
  constructor(...t) {
    super(...t), ae(this, "ingKey", "dragging");
  }
  reset() {
    super.reset();
    const t = this.state;
    t._pointerId = void 0, t._pointerActive = !1, t._keyboardActive = !1, t._preventScroll = !1, t._delayed = !1, t.swipe = [0, 0], t.tap = !1, t.canceled = !1, t.cancel = this.cancel.bind(this);
  }
  setup() {
    const t = this.state;
    if (t._bounds instanceof HTMLElement) {
      const r = t._bounds.getBoundingClientRect(), n = t.currentTarget.getBoundingClientRect(), i = {
        left: r.left - n.left + t.offset[0],
        right: r.right - n.right + t.offset[0],
        top: r.top - n.top + t.offset[1],
        bottom: r.bottom - n.bottom + t.offset[1]
      };
      t._bounds = qe.bounds(i);
    }
  }
  cancel() {
    const t = this.state;
    t.canceled || (t.canceled = !0, t._active = !1, setTimeout(() => {
      this.compute(), this.emit();
    }, 0));
  }
  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive;
  }
  clean() {
    this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean();
  }
  pointerDown(t) {
    const r = this.config, n = this.state;
    if (t.buttons != null && (Array.isArray(r.pointerButtons) ? !r.pointerButtons.includes(t.buttons) : r.pointerButtons !== -1 && r.pointerButtons !== t.buttons))
      return;
    const i = this.ctrl.setEventIds(t);
    r.pointerCapture && t.target.setPointerCapture(t.pointerId), !(i && i.size > 1 && n._pointerActive) && (this.start(t), this.setupPointer(t), n._pointerId = hr(t), n._pointerActive = !0, this.computeValues(et(t)), this.computeInitial(), r.preventScrollAxis && Li(t) !== "mouse" ? (n._active = !1, this.setupScrollPrevention(t)) : r.delay > 0 ? (this.setupDelayTrigger(t), r.triggerAllEvents && (this.compute(t), this.emit())) : this.startPointerDrag(t));
  }
  startPointerDrag(t) {
    const r = this.state;
    r._active = !0, r._preventScroll = !0, r._delayed = !1, this.compute(t), this.emit();
  }
  pointerMove(t) {
    const r = this.state, n = this.config;
    if (!r._pointerActive)
      return;
    const i = hr(t);
    if (r._pointerId !== void 0 && i !== r._pointerId)
      return;
    const s = et(t);
    if (document.pointerLockElement === t.target ? r._delta = [t.movementX, t.movementY] : (r._delta = J.sub(s, r._values), this.computeValues(s)), J.addTo(r._movement, r._delta), this.compute(t), r._delayed && r.intentional) {
      this.timeoutStore.remove("dragDelay"), r.active = !1, this.startPointerDrag(t);
      return;
    }
    if (n.preventScrollAxis && !r._preventScroll)
      if (r.axis)
        if (r.axis === n.preventScrollAxis || n.preventScrollAxis === "xy") {
          r._active = !1, this.clean();
          return;
        } else {
          this.timeoutStore.remove("startPointerDrag"), this.startPointerDrag(t);
          return;
        }
      else
        return;
    this.emit();
  }
  pointerUp(t) {
    this.ctrl.setEventIds(t);
    try {
      this.config.pointerCapture && t.target.hasPointerCapture(t.pointerId) && t.target.releasePointerCapture(t.pointerId);
    } catch {
      process.env.NODE_ENV === "development" && console.warn("[@use-gesture]: If you see this message, it's likely that you're using an outdated version of `@react-three/fiber`. \n\nPlease upgrade to the latest version.");
    }
    const r = this.state, n = this.config;
    if (!r._active || !r._pointerActive)
      return;
    const i = hr(t);
    if (r._pointerId !== void 0 && i !== r._pointerId)
      return;
    this.state._pointerActive = !1, this.setActive(), this.compute(t);
    const [s, a] = r._distance;
    if (r.tap = s <= n.tapsThreshold && a <= n.tapsThreshold, r.tap && n.filterTaps)
      r._force = !0;
    else {
      const [c, h] = r._delta, [u, l] = r._movement, [f, b] = n.swipe.velocity, [E, P] = n.swipe.distance, g = n.swipe.duration;
      if (r.elapsedTime < g) {
        const R = Math.abs(c / r.timeDelta), w = Math.abs(h / r.timeDelta);
        R > f && Math.abs(u) > E && (r.swipe[0] = Math.sign(c)), w > b && Math.abs(l) > P && (r.swipe[1] = Math.sign(h));
      }
    }
    this.emit();
  }
  pointerClick(t) {
    !this.state.tap && t.detail > 0 && (t.preventDefault(), t.stopPropagation());
  }
  setupPointer(t) {
    const r = this.config, n = r.device;
    if (process.env.NODE_ENV === "development")
      try {
        if (n === "pointer" && r.preventScrollDelay === void 0) {
          const i = "uv" in t ? t.sourceEvent.currentTarget : t.currentTarget;
          window.getComputedStyle(i).touchAction === "auto" && console.warn("[@use-gesture]: The drag target has its `touch-action` style property set to `auto`. It is recommended to add `touch-action: 'none'` so that the drag gesture behaves correctly on touch-enabled devices. For more information read this: https://use-gesture.netlify.app/docs/extras/#touch-action.\n\nThis message will only show in development mode. It won't appear in production. If this is intended, you can ignore it.", i);
        }
      } catch {
      }
    r.pointerLock && t.currentTarget.requestPointerLock(), r.pointerCapture || (this.eventStore.add(this.sharedConfig.window, n, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "cancel", this.pointerUp.bind(this)));
  }
  pointerClean() {
    this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock();
  }
  preventScroll(t) {
    this.state._preventScroll && t.cancelable && t.preventDefault();
  }
  setupScrollPrevention(t) {
    this.state._preventScroll = !1, ya(t);
    const r = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
      passive: !1
    });
    this.eventStore.add(this.sharedConfig.window, "touch", "end", r), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", r), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, t);
  }
  setupDelayTrigger(t) {
    this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
      this.state._step = [0, 0], this.startPointerDrag(t);
    }, this.config.delay);
  }
  keyDown(t) {
    const r = Kn[t.key];
    if (r) {
      const n = this.state, i = t.shiftKey ? 10 : t.altKey ? 0.1 : 1;
      this.start(t), n._delta = r(this.config.keyboardDisplacement, i), n._keyboardActive = !0, J.addTo(n._movement, n._delta), this.compute(t), this.emit();
    }
  }
  keyUp(t) {
    t.key in Kn && (this.state._keyboardActive = !1, this.setActive(), this.compute(t), this.emit());
  }
  bind(t) {
    const r = this.config.device;
    t(r, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (t(r, "change", this.pointerMove.bind(this)), t(r, "end", this.pointerUp.bind(this)), t(r, "cancel", this.pointerUp.bind(this)), t("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (t("key", "down", this.keyDown.bind(this)), t("key", "up", this.keyUp.bind(this))), this.config.filterTaps && t("click", "", this.pointerClick.bind(this), {
      capture: !0,
      passive: !1
    });
  }
}
function ya(e) {
  "persist" in e && typeof e.persist == "function" && e.persist();
}
const xt = typeof window < "u" && window.document && window.document.createElement;
function Yi() {
  return xt && "ontouchstart" in window;
}
function ba() {
  return Yi() || xt && window.navigator.maxTouchPoints > 1;
}
function _a() {
  return xt && "onpointerdown" in window;
}
function wa() {
  return xt && "exitPointerLock" in window.document;
}
function Ea() {
  try {
    return "constructor" in GestureEvent;
  } catch {
    return !1;
  }
}
const Te = {
  isBrowser: xt,
  gesture: Ea(),
  touch: Yi(),
  touchscreen: ba(),
  pointer: _a(),
  pointerLock: wa()
}, Sa = 250, Ta = 180, Pa = 0.5, Oa = 50, Ra = 250, Ca = 10, Hn = {
  mouse: 0,
  touch: 0,
  pen: 8
}, qi = ee(ee({}, qe), {}, {
  device(e, t, {
    pointer: {
      touch: r = !1,
      lock: n = !1,
      mouse: i = !1
    } = {}
  }) {
    return this.pointerLock = n && Te.pointerLock, Te.touch && r ? "touch" : this.pointerLock ? "mouse" : Te.pointer && !i ? "pointer" : Te.touch ? "touch" : "mouse";
  },
  preventScrollAxis(e, t, {
    preventScroll: r
  }) {
    if (this.preventScrollDelay = typeof r == "number" ? r : r || r === void 0 && e ? Sa : void 0, !(!Te.touchscreen || r === !1))
      return e || (r !== void 0 ? "y" : void 0);
  },
  pointerCapture(e, t, {
    pointer: {
      capture: r = !0,
      buttons: n = 1,
      keys: i = !0
    } = {}
  }) {
    return this.pointerButtons = n, this.keys = i, !this.pointerLock && this.device === "pointer" && r;
  },
  threshold(e, t, {
    filterTaps: r = !1,
    tapsThreshold: n = 3,
    axis: i = void 0
  }) {
    const s = J.toVector(e, r ? n : i ? 1 : 0);
    return this.filterTaps = r, this.tapsThreshold = n, s;
  },
  swipe({
    velocity: e = Pa,
    distance: t = Oa,
    duration: r = Ra
  } = {}) {
    return {
      velocity: this.transform(J.toVector(e)),
      distance: this.transform(J.toVector(t)),
      duration: r
    };
  },
  delay(e = 0) {
    switch (e) {
      case !0:
        return Ta;
      case !1:
        return 0;
      default:
        return e;
    }
  },
  axisThreshold(e) {
    return e ? ee(ee({}, Hn), e) : Hn;
  },
  keyboardDisplacement(e = Ca) {
    return e;
  }
});
process.env.NODE_ENV === "development" && Object.assign(qi, {
  useTouch(e) {
    if (e !== void 0)
      throw Error("[@use-gesture]: `useTouch` option has been renamed to `pointer.touch`. Use it as in `{ pointer: { touch: true } }`.");
    return NaN;
  },
  experimental_preventWindowScrollY(e) {
    if (e !== void 0)
      throw Error("[@use-gesture]: `experimental_preventWindowScrollY` option has been renamed to `preventScroll`.");
    return NaN;
  },
  swipeVelocity(e) {
    if (e !== void 0)
      throw Error("[@use-gesture]: `swipeVelocity` option has been renamed to `swipe.velocity`. Use it as in `{ swipe: { velocity: 0.5 } }`.");
    return NaN;
  },
  swipeDistance(e) {
    if (e !== void 0)
      throw Error("[@use-gesture]: `swipeDistance` option has been renamed to `swipe.distance`. Use it as in `{ swipe: { distance: 50 } }`.");
    return NaN;
  },
  swipeDuration(e) {
    if (e !== void 0)
      throw Error("[@use-gesture]: `swipeDuration` option has been renamed to `swipe.duration`. Use it as in `{ swipe: { duration: 250 } }`.");
    return NaN;
  }
});
function Bi(e) {
  const [t, r] = e.overflow, [n, i] = e._delta, [s, a] = e._direction;
  (t < 0 && n > 0 && s < 0 || t > 0 && n < 0 && s > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && i > 0 && a < 0 || r > 0 && i < 0 && a > 0) && (e._movement[1] = e._movementBound[1]);
}
const Aa = 30, Ia = 100;
class xa extends Wi {
  constructor(...t) {
    super(...t), ae(this, "ingKey", "pinching"), ae(this, "aliasKey", "da");
  }
  init() {
    this.state.offset = [1, 0], this.state.lastOffset = [1, 0], this.state._pointerEvents = /* @__PURE__ */ new Map();
  }
  reset() {
    super.reset();
    const t = this.state;
    t._touchIds = [], t.canceled = !1, t.cancel = this.cancel.bind(this), t.turns = 0;
  }
  computeOffset() {
    const {
      type: t,
      movement: r,
      lastOffset: n
    } = this.state;
    t === "wheel" ? this.state.offset = J.add(r, n) : this.state.offset = [(1 + r[0]) * n[0], r[1] + n[1]];
  }
  computeMovement() {
    const {
      offset: t,
      lastOffset: r
    } = this.state;
    this.state.movement = [t[0] / r[0], t[1] - r[1]];
  }
  axisIntent() {
    const t = this.state, [r, n] = t._movement;
    if (!t.axis) {
      const i = Math.abs(r) * Aa - Math.abs(n);
      i < 0 ? t.axis = "angle" : i > 0 && (t.axis = "scale");
    }
  }
  restrictToAxis(t) {
    this.config.lockDirection && (this.state.axis === "scale" ? t[1] = 0 : this.state.axis === "angle" && (t[0] = 0));
  }
  cancel() {
    const t = this.state;
    t.canceled || setTimeout(() => {
      t.canceled = !0, t._active = !1, this.compute(), this.emit();
    }, 0);
  }
  touchStart(t) {
    this.ctrl.setEventIds(t);
    const r = this.state, n = this.ctrl.touchIds;
    if (r._active && r._touchIds.every((s) => n.has(s)) || n.size < 2)
      return;
    this.start(t), r._touchIds = Array.from(n).slice(0, 2);
    const i = zn(t, r._touchIds);
    i && this.pinchStart(t, i);
  }
  pointerStart(t) {
    if (t.buttons != null && t.buttons % 2 !== 1)
      return;
    this.ctrl.setEventIds(t), t.target.setPointerCapture(t.pointerId);
    const r = this.state, n = r._pointerEvents, i = this.ctrl.pointerIds;
    if (r._active && Array.from(n.keys()).every((a) => i.has(a)) || (n.size < 2 && n.set(t.pointerId, t), r._pointerEvents.size < 2))
      return;
    this.start(t);
    const s = xr(...Array.from(n.values()));
    s && this.pinchStart(t, s);
  }
  pinchStart(t, r) {
    const n = this.state;
    n.origin = r.origin, this.computeValues([r.distance, r.angle]), this.computeInitial(), this.compute(t), this.emit();
  }
  touchMove(t) {
    if (!this.state._active)
      return;
    const r = zn(t, this.state._touchIds);
    r && this.pinchMove(t, r);
  }
  pointerMove(t) {
    const r = this.state._pointerEvents;
    if (r.has(t.pointerId) && r.set(t.pointerId, t), !this.state._active)
      return;
    const n = xr(...Array.from(r.values()));
    n && this.pinchMove(t, n);
  }
  pinchMove(t, r) {
    const n = this.state, i = n._values[1], s = r.angle - i;
    let a = 0;
    Math.abs(s) > 270 && (a += Math.sign(s)), this.computeValues([r.distance, r.angle - 360 * a]), n.origin = r.origin, n.turns = a, n._movement = [n._values[0] / n._initial[0] - 1, n._values[1] - n._initial[1]], this.compute(t), this.emit();
  }
  touchEnd(t) {
    this.ctrl.setEventIds(t), this.state._active && this.state._touchIds.some((r) => !this.ctrl.touchIds.has(r)) && (this.state._active = !1, this.compute(t), this.emit());
  }
  pointerEnd(t) {
    const r = this.state;
    this.ctrl.setEventIds(t);
    try {
      t.target.releasePointerCapture(t.pointerId);
    } catch {
    }
    r._pointerEvents.has(t.pointerId) && r._pointerEvents.delete(t.pointerId), r._active && r._pointerEvents.size < 2 && (r._active = !1, this.compute(t), this.emit());
  }
  gestureStart(t) {
    t.cancelable && t.preventDefault();
    const r = this.state;
    r._active || (this.start(t), this.computeValues([t.scale, t.rotation]), r.origin = [t.clientX, t.clientY], this.compute(t), this.emit());
  }
  gestureMove(t) {
    if (t.cancelable && t.preventDefault(), !this.state._active)
      return;
    const r = this.state;
    this.computeValues([t.scale, t.rotation]), r.origin = [t.clientX, t.clientY];
    const n = r._movement;
    r._movement = [t.scale - 1, t.rotation], r._delta = J.sub(r._movement, n), this.compute(t), this.emit();
  }
  gestureEnd(t) {
    this.state._active && (this.state._active = !1, this.compute(t), this.emit());
  }
  wheel(t) {
    const r = this.config.modifierKey;
    r && (Array.isArray(r) ? !r.find((n) => t[n]) : !t[r]) || (this.state._active ? this.wheelChange(t) : this.wheelStart(t), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)));
  }
  wheelStart(t) {
    this.start(t), this.wheelChange(t);
  }
  wheelChange(t) {
    "uv" in t || (t.cancelable && t.preventDefault(), process.env.NODE_ENV === "development" && !t.defaultPrevented && console.warn("[@use-gesture]: To properly support zoom on trackpads, try using the `target` option.\n\nThis message will only appear in development mode."));
    const n = this.state;
    n._delta = [-Ui(t)[1] / Ia * n.offset[0], 0], J.addTo(n._movement, n._delta), Bi(n), this.state.origin = [t.clientX, t.clientY], this.compute(t), this.emit();
  }
  wheelEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    const r = this.config.device;
    r && (t(r, "start", this[r + "Start"].bind(this)), t(r, "change", this[r + "Move"].bind(this)), t(r, "end", this[r + "End"].bind(this)), t(r, "cancel", this[r + "End"].bind(this)), t("lostPointerCapture", "", this[r + "End"].bind(this))), this.config.pinchOnWheel && t("wheel", "", this.wheel.bind(this), {
      passive: !1
    });
  }
}
const ka = ee(ee({}, Qr), {}, {
  device(e, t, {
    shared: r,
    pointer: {
      touch: n = !1
    } = {}
  }) {
    if (r.target && !Te.touch && Te.gesture)
      return "gesture";
    if (Te.touch && n)
      return "touch";
    if (Te.touchscreen) {
      if (Te.pointer)
        return "pointer";
      if (Te.touch)
        return "touch";
    }
  },
  bounds(e, t, {
    scaleBounds: r = {},
    angleBounds: n = {}
  }) {
    const i = (a) => {
      const c = Yn(qt(r, a), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [c.min, c.max];
    }, s = (a) => {
      const c = Yn(qt(n, a), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [c.min, c.max];
    };
    return typeof r != "function" && typeof n != "function" ? [i(), s()] : (a) => [i(a), s(a)];
  },
  threshold(e, t, r) {
    return this.lockDirection = r.axis === "lock", J.toVector(e, this.lockDirection ? [0.1, 3] : 0);
  },
  modifierKey(e) {
    return e === void 0 ? "ctrlKey" : e;
  },
  pinchOnWheel(e = !0) {
    return e;
  }
});
class Ma extends It {
  constructor(...t) {
    super(...t), ae(this, "ingKey", "moving");
  }
  move(t) {
    this.config.mouseOnly && t.pointerType !== "mouse" || (this.state._active ? this.moveChange(t) : this.moveStart(t), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)));
  }
  moveStart(t) {
    this.start(t), this.computeValues(et(t)), this.compute(t), this.computeInitial(), this.emit();
  }
  moveChange(t) {
    if (!this.state._active)
      return;
    const r = et(t), n = this.state;
    n._delta = J.sub(r, n._values), J.addTo(n._movement, n._delta), this.computeValues(r), this.compute(t), this.emit();
  }
  moveEnd(t) {
    this.state._active && (this.state._active = !1, this.compute(t), this.emit());
  }
  bind(t) {
    t("pointer", "change", this.move.bind(this)), t("pointer", "leave", this.moveEnd.bind(this));
  }
}
const Da = ee(ee({}, qe), {}, {
  mouseOnly: (e = !0) => e
});
class ja extends It {
  constructor(...t) {
    super(...t), ae(this, "ingKey", "scrolling");
  }
  scroll(t) {
    this.state._active || this.start(t), this.scrollChange(t), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
  }
  scrollChange(t) {
    t.cancelable && t.preventDefault();
    const r = this.state, n = la(t);
    r._delta = J.sub(n, r._values), J.addTo(r._movement, r._delta), this.computeValues(n), this.compute(t), this.emit();
  }
  scrollEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    t("scroll", "", this.scroll.bind(this));
  }
}
const Va = qe;
class $a extends It {
  constructor(...t) {
    super(...t), ae(this, "ingKey", "wheeling");
  }
  wheel(t) {
    this.state._active || this.start(t), this.wheelChange(t), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
  }
  wheelChange(t) {
    const r = this.state;
    r._delta = Ui(t), J.addTo(r._movement, r._delta), Bi(r), this.compute(t), this.emit();
  }
  wheelEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    t("wheel", "", this.wheel.bind(this));
  }
}
const Fa = qe;
class Na extends It {
  constructor(...t) {
    super(...t), ae(this, "ingKey", "hovering");
  }
  enter(t) {
    this.config.mouseOnly && t.pointerType !== "mouse" || (this.start(t), this.computeValues(et(t)), this.compute(t), this.emit());
  }
  leave(t) {
    if (this.config.mouseOnly && t.pointerType !== "mouse")
      return;
    const r = this.state;
    if (!r._active)
      return;
    r._active = !1;
    const n = et(t);
    r._movement = r._delta = J.sub(n, r._values), this.computeValues(n), this.compute(t), r.delta = r.movement, this.emit();
  }
  bind(t) {
    t("pointer", "enter", this.enter.bind(this)), t("pointer", "leave", this.leave.bind(this));
  }
}
const La = ee(ee({}, qe), {}, {
  mouseOnly: (e = !0) => e
}), Xr = /* @__PURE__ */ new Map(), kr = /* @__PURE__ */ new Map();
function za(e) {
  Xr.set(e.key, e.engine), kr.set(e.key, e.resolver);
}
const Ua = {
  key: "drag",
  engine: ga,
  resolver: qi
}, Wa = {
  key: "hover",
  engine: Na,
  resolver: La
}, Ya = {
  key: "move",
  engine: Ma,
  resolver: Da
}, qa = {
  key: "pinch",
  engine: xa,
  resolver: ka
}, Ba = {
  key: "scroll",
  engine: ja,
  resolver: Va
}, Ka = {
  key: "wheel",
  engine: $a,
  resolver: Fa
};
function Ha(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, s;
  for (s = 0; s < n.length; s++)
    i = n[s], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Ga(e, t) {
  if (e == null)
    return {};
  var r = Ha(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
const Qa = {
  target(e) {
    if (e)
      return () => "current" in e ? e.current : e;
  },
  enabled(e = !0) {
    return e;
  },
  window(e = Te.isBrowser ? window : void 0) {
    return e;
  },
  eventOptions({
    passive: e = !0,
    capture: t = !1
  } = {}) {
    return {
      passive: e,
      capture: t
    };
  },
  transform(e) {
    return e;
  }
}, Xa = ["target", "eventOptions", "window", "enabled", "transform"];
function Nt(e = {}, t) {
  const r = {};
  for (const [n, i] of Object.entries(t))
    switch (typeof i) {
      case "function":
        if (process.env.NODE_ENV === "development") {
          const s = i.call(r, e[n], n, e);
          Number.isNaN(s) || (r[n] = s);
        } else
          r[n] = i.call(r, e[n], n, e);
        break;
      case "object":
        r[n] = Nt(e[n], i);
        break;
      case "boolean":
        i && (r[n] = e[n]);
        break;
    }
  return r;
}
function Za(e, t, r = {}) {
  const n = e, {
    target: i,
    eventOptions: s,
    window: a,
    enabled: c,
    transform: h
  } = n, u = Ga(n, Xa);
  if (r.shared = Nt({
    target: i,
    eventOptions: s,
    window: a,
    enabled: c,
    transform: h
  }, Qa), t) {
    const l = kr.get(t);
    r[t] = Nt(ee({
      shared: r.shared
    }, u), l);
  } else
    for (const l in u) {
      const f = kr.get(l);
      if (f)
        r[l] = Nt(ee({
          shared: r.shared
        }, u[l]), f);
      else if (process.env.NODE_ENV === "development" && !["drag", "pinch", "scroll", "wheel", "move", "hover"].includes(l)) {
        if (l === "domTarget")
          throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
        console.warn(`[@use-gesture]: Unknown config key \`${l}\` was used. Please read the documentation for further information.`);
      }
    }
  return r;
}
class Ki {
  constructor(t, r) {
    ae(this, "_listeners", /* @__PURE__ */ new Set()), this._ctrl = t, this._gestureKey = r;
  }
  add(t, r, n, i, s) {
    const a = this._listeners, c = oa(r, n), h = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}, u = ee(ee({}, h), s);
    t.addEventListener(c, i, u);
    const l = () => {
      t.removeEventListener(c, i, u), a.delete(l);
    };
    return a.add(l), l;
  }
  clean() {
    this._listeners.forEach((t) => t()), this._listeners.clear();
  }
}
class Ja {
  constructor() {
    ae(this, "_timeouts", /* @__PURE__ */ new Map());
  }
  add(t, r, n = 140, ...i) {
    this.remove(t), this._timeouts.set(t, window.setTimeout(r, n, ...i));
  }
  remove(t) {
    const r = this._timeouts.get(t);
    r && window.clearTimeout(r);
  }
  clean() {
    this._timeouts.forEach((t) => void window.clearTimeout(t)), this._timeouts.clear();
  }
}
class ec {
  constructor(t) {
    ae(this, "gestures", /* @__PURE__ */ new Set()), ae(this, "_targetEventStore", new Ki(this)), ae(this, "gestureEventStores", {}), ae(this, "gestureTimeoutStores", {}), ae(this, "handlers", {}), ae(this, "config", {}), ae(this, "pointerIds", /* @__PURE__ */ new Set()), ae(this, "touchIds", /* @__PURE__ */ new Set()), ae(this, "state", {
      shared: {
        shiftKey: !1,
        metaKey: !1,
        ctrlKey: !1,
        altKey: !1
      }
    }), tc(this, t);
  }
  setEventIds(t) {
    if (er(t))
      return this.touchIds = new Set(ua(t)), this.touchIds;
    if ("pointerId" in t)
      return t.type === "pointerup" || t.type === "pointercancel" ? this.pointerIds.delete(t.pointerId) : t.type === "pointerdown" && this.pointerIds.add(t.pointerId), this.pointerIds;
  }
  applyHandlers(t, r) {
    this.handlers = t, this.nativeHandlers = r;
  }
  applyConfig(t, r) {
    this.config = Za(t, r, this.config);
  }
  clean() {
    this._targetEventStore.clean();
    for (const t of this.gestures)
      this.gestureEventStores[t].clean(), this.gestureTimeoutStores[t].clean();
  }
  effect() {
    return this.config.shared.target && this.bind(), () => this._targetEventStore.clean();
  }
  bind(...t) {
    const r = this.config.shared, n = {};
    let i;
    if (!(r.target && (i = r.target(), !i))) {
      if (r.enabled) {
        for (const a of this.gestures) {
          const c = this.config[a], h = Gn(n, c.eventOptions, !!i);
          if (c.enabled) {
            const u = Xr.get(a);
            new u(this, t, a).bind(h);
          }
        }
        const s = Gn(n, r.eventOptions, !!i);
        for (const a in this.nativeHandlers)
          s(a, "", (c) => this.nativeHandlers[a](ee(ee({}, this.state.shared), {}, {
            event: c,
            args: t
          })), void 0, !0);
      }
      for (const s in n)
        n[s] = ha(...n[s]);
      if (!i)
        return n;
      for (const s in n) {
        const {
          device: a,
          capture: c,
          passive: h
        } = sa(s);
        this._targetEventStore.add(i, a, "", n[s], {
          capture: c,
          passive: h
        });
      }
    }
  }
}
function Ge(e, t) {
  e.gestures.add(t), e.gestureEventStores[t] = new Ki(e, t), e.gestureTimeoutStores[t] = new Ja();
}
function tc(e, t) {
  t.drag && Ge(e, "drag"), t.wheel && Ge(e, "wheel"), t.scroll && Ge(e, "scroll"), t.move && Ge(e, "move"), t.pinch && Ge(e, "pinch"), t.hover && Ge(e, "hover");
}
const Gn = (e, t, r) => (n, i, s, a = {}, c = !1) => {
  var h, u;
  const l = (h = a.capture) !== null && h !== void 0 ? h : t.capture, f = (u = a.passive) !== null && u !== void 0 ? u : t.passive;
  let b = c ? n : na(n, i, l);
  r && f && (b += "Passive"), e[b] = e[b] || [], e[b].push(s);
}, rc = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function nc(e) {
  const t = {}, r = {}, n = /* @__PURE__ */ new Set();
  for (let i in e)
    rc.test(i) ? (n.add(RegExp.lastMatch), r[i] = e[i]) : t[i] = e[i];
  return [r, t, n];
}
function Qe(e, t, r, n, i, s) {
  if (!e.has(r))
    return;
  if (!Xr.has(n)) {
    process.env.NODE_ENV === "development" && console.warn(`[@use-gesture]: You've created a custom handler that that uses the \`${n}\` gesture but isn't properly configured.

Please add \`${n}Action\` when creating your handler.`);
    return;
  }
  const a = r + "Start", c = r + "End", h = (u) => {
    let l;
    return u.first && a in t && t[a](u), r in t && (l = t[r](u)), u.last && c in t && t[c](u), l;
  };
  i[n] = h, s[n] = s[n] || {};
}
function ic(e, t) {
  const [r, n, i] = nc(e), s = {};
  return Qe(i, r, "onDrag", "drag", s, t), Qe(i, r, "onWheel", "wheel", s, t), Qe(i, r, "onScroll", "scroll", s, t), Qe(i, r, "onPinch", "pinch", s, t), Qe(i, r, "onMove", "move", s, t), Qe(i, r, "onHover", "hover", s, t), {
    handlers: s,
    config: t,
    nativeHandlers: n
  };
}
function sc(e, t = {}, r, n) {
  const i = ft.useMemo(() => new ec(e), []);
  if (i.applyHandlers(e, n), i.applyConfig(t, r), ft.useEffect(i.effect.bind(i)), ft.useEffect(() => i.clean.bind(i), []), t.target === void 0)
    return i.bind.bind(i);
}
function oc(e) {
  return e.forEach(za), function(r, n) {
    const {
      handlers: i,
      nativeHandlers: s,
      config: a
    } = ic(r, n || {});
    return sc(i, a, void 0, s);
  };
}
function Qn(e, t) {
  return oc([Ua, qa, Ba, Ka, Ya, Wa])(e, t || {});
}
var Mr = { exports: {} }, Vt = { exports: {} }, K = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function ac() {
  if (Xn)
    return K;
  Xn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, P = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function O(y) {
    if (typeof y == "object" && y !== null) {
      var q = y.$$typeof;
      switch (q) {
        case t:
          switch (y = y.type, y) {
            case h:
            case u:
            case n:
            case s:
            case i:
            case f:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case c:
                case l:
                case P:
                case E:
                case a:
                  return y;
                default:
                  return q;
              }
          }
        case r:
          return q;
      }
    }
  }
  function I(y) {
    return O(y) === u;
  }
  return K.AsyncMode = h, K.ConcurrentMode = u, K.ContextConsumer = c, K.ContextProvider = a, K.Element = t, K.ForwardRef = l, K.Fragment = n, K.Lazy = P, K.Memo = E, K.Portal = r, K.Profiler = s, K.StrictMode = i, K.Suspense = f, K.isAsyncMode = function(y) {
    return I(y) || O(y) === h;
  }, K.isConcurrentMode = I, K.isContextConsumer = function(y) {
    return O(y) === c;
  }, K.isContextProvider = function(y) {
    return O(y) === a;
  }, K.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, K.isForwardRef = function(y) {
    return O(y) === l;
  }, K.isFragment = function(y) {
    return O(y) === n;
  }, K.isLazy = function(y) {
    return O(y) === P;
  }, K.isMemo = function(y) {
    return O(y) === E;
  }, K.isPortal = function(y) {
    return O(y) === r;
  }, K.isProfiler = function(y) {
    return O(y) === s;
  }, K.isStrictMode = function(y) {
    return O(y) === i;
  }, K.isSuspense = function(y) {
    return O(y) === f;
  }, K.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === u || y === s || y === i || y === f || y === b || typeof y == "object" && y !== null && (y.$$typeof === P || y.$$typeof === E || y.$$typeof === a || y.$$typeof === c || y.$$typeof === l || y.$$typeof === R || y.$$typeof === w || y.$$typeof === C || y.$$typeof === g);
  }, K.typeOf = O, K;
}
var H = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn;
function cc() {
  return Zn || (Zn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, P = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function O(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === n || p === u || p === s || p === i || p === f || p === b || typeof p == "object" && p !== null && (p.$$typeof === P || p.$$typeof === E || p.$$typeof === a || p.$$typeof === c || p.$$typeof === l || p.$$typeof === R || p.$$typeof === w || p.$$typeof === C || p.$$typeof === g);
    }
    function I(p) {
      if (typeof p == "object" && p !== null) {
        var Q = p.$$typeof;
        switch (Q) {
          case t:
            var ce = p.type;
            switch (ce) {
              case h:
              case u:
              case n:
              case s:
              case i:
              case f:
                return ce;
              default:
                var X = ce && ce.$$typeof;
                switch (X) {
                  case c:
                  case l:
                  case P:
                  case E:
                  case a:
                    return X;
                  default:
                    return Q;
                }
            }
          case r:
            return Q;
        }
      }
    }
    var y = h, q = u, te = c, be = a, re = t, me = l, G = n, ue = P, Y = E, se = r, _e = s, ne = i, ve = f, fe = !1;
    function ke(p) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), v(p) || I(p) === h;
    }
    function v(p) {
      return I(p) === u;
    }
    function T(p) {
      return I(p) === c;
    }
    function j(p) {
      return I(p) === a;
    }
    function M(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function k(p) {
      return I(p) === l;
    }
    function N(p) {
      return I(p) === n;
    }
    function D(p) {
      return I(p) === P;
    }
    function $(p) {
      return I(p) === E;
    }
    function F(p) {
      return I(p) === r;
    }
    function z(p) {
      return I(p) === s;
    }
    function d(p) {
      return I(p) === i;
    }
    function A(p) {
      return I(p) === f;
    }
    H.AsyncMode = y, H.ConcurrentMode = q, H.ContextConsumer = te, H.ContextProvider = be, H.Element = re, H.ForwardRef = me, H.Fragment = G, H.Lazy = ue, H.Memo = Y, H.Portal = se, H.Profiler = _e, H.StrictMode = ne, H.Suspense = ve, H.isAsyncMode = ke, H.isConcurrentMode = v, H.isContextConsumer = T, H.isContextProvider = j, H.isElement = M, H.isForwardRef = k, H.isFragment = N, H.isLazy = D, H.isMemo = $, H.isPortal = F, H.isProfiler = z, H.isStrictMode = d, H.isSuspense = A, H.isValidElementType = O, H.typeOf = I;
  }()), H;
}
var Jn;
function Hi() {
  return Jn || (Jn = 1, process.env.NODE_ENV === "production" ? Vt.exports = ac() : Vt.exports = cc()), Vt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var pr, ei;
function uc() {
  if (ei)
    return pr;
  ei = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var h = Object.getOwnPropertyNames(a).map(function(l) {
        return a[l];
      });
      if (h.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        u[l] = l;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return pr = i() ? Object.assign : function(s, a) {
    for (var c, h = n(s), u, l = 1; l < arguments.length; l++) {
      c = Object(arguments[l]);
      for (var f in c)
        t.call(c, f) && (h[f] = c[f]);
      if (e) {
        u = e(c);
        for (var b = 0; b < u.length; b++)
          r.call(c, u[b]) && (h[u[b]] = c[u[b]]);
      }
    }
    return h;
  }, pr;
}
var mr, ti;
function Zr() {
  if (ti)
    return mr;
  ti = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return mr = e, mr;
}
var vr, ri;
function Gi() {
  return ri || (ri = 1, vr = Function.call.bind(Object.prototype.hasOwnProperty)), vr;
}
var gr, ni;
function lc() {
  if (ni)
    return gr;
  ni = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Zr(), r = {}, n = Gi();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(s, a, c, h, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in s)
        if (n(s, l)) {
          var f;
          try {
            if (typeof s[l] != "function") {
              var b = Error(
                (h || "React class") + ": " + c + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            f = s[l](a, l, h, c, null, t);
          } catch (P) {
            f = P;
          }
          if (f && !(f instanceof Error) && e(
            (h || "React class") + ": type specification of " + c + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var E = u ? u() : "";
            e(
              "Failed " + c + " type: " + f.message + (E ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, gr = i, gr;
}
var yr, ii;
function fc() {
  if (ii)
    return yr;
  ii = 1;
  var e = Hi(), t = uc(), r = Zr(), n = Gi(), i = lc(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(c) {
    var h = "Warning: " + c;
    typeof console < "u" && console.error(h);
    try {
      throw new Error(h);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return yr = function(c, h) {
    var u = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function f(v) {
      var T = v && (u && v[u] || v[l]);
      if (typeof T == "function")
        return T;
    }
    var b = "<<anonymous>>", E = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: C(),
      arrayOf: O,
      element: I(),
      elementType: y(),
      instanceOf: q,
      node: me(),
      objectOf: be,
      oneOf: te,
      oneOfType: re,
      shape: ue,
      exact: Y
    };
    function P(v, T) {
      return v === T ? v !== 0 || 1 / v === 1 / T : v !== v && T !== T;
    }
    function g(v, T) {
      this.message = v, this.data = T && typeof T == "object" ? T : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function R(v) {
      if (process.env.NODE_ENV !== "production")
        var T = {}, j = 0;
      function M(N, D, $, F, z, d, A) {
        if (F = F || b, d = d || $, A !== r) {
          if (h) {
            var p = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw p.name = "Invariant Violation", p;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = F + ":" + $;
            !T[Q] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + d + "` prop on `" + F + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), T[Q] = !0, j++);
          }
        }
        return D[$] == null ? N ? D[$] === null ? new g("The " + z + " `" + d + "` is marked as required " + ("in `" + F + "`, but its value is `null`.")) : new g("The " + z + " `" + d + "` is marked as required in " + ("`" + F + "`, but its value is `undefined`.")) : null : v(D, $, F, z, d);
      }
      var k = M.bind(null, !1);
      return k.isRequired = M.bind(null, !0), k;
    }
    function w(v) {
      function T(j, M, k, N, D, $) {
        var F = j[M], z = ne(F);
        if (z !== v) {
          var d = ve(F);
          return new g(
            "Invalid " + N + " `" + D + "` of type " + ("`" + d + "` supplied to `" + k + "`, expected ") + ("`" + v + "`."),
            { expectedType: v }
          );
        }
        return null;
      }
      return R(T);
    }
    function C() {
      return R(a);
    }
    function O(v) {
      function T(j, M, k, N, D) {
        if (typeof v != "function")
          return new g("Property `" + D + "` of component `" + k + "` has invalid PropType notation inside arrayOf.");
        var $ = j[M];
        if (!Array.isArray($)) {
          var F = ne($);
          return new g("Invalid " + N + " `" + D + "` of type " + ("`" + F + "` supplied to `" + k + "`, expected an array."));
        }
        for (var z = 0; z < $.length; z++) {
          var d = v($, z, k, N, D + "[" + z + "]", r);
          if (d instanceof Error)
            return d;
        }
        return null;
      }
      return R(T);
    }
    function I() {
      function v(T, j, M, k, N) {
        var D = T[j];
        if (!c(D)) {
          var $ = ne(D);
          return new g("Invalid " + k + " `" + N + "` of type " + ("`" + $ + "` supplied to `" + M + "`, expected a single ReactElement."));
        }
        return null;
      }
      return R(v);
    }
    function y() {
      function v(T, j, M, k, N) {
        var D = T[j];
        if (!e.isValidElementType(D)) {
          var $ = ne(D);
          return new g("Invalid " + k + " `" + N + "` of type " + ("`" + $ + "` supplied to `" + M + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return R(v);
    }
    function q(v) {
      function T(j, M, k, N, D) {
        if (!(j[M] instanceof v)) {
          var $ = v.name || b, F = ke(j[M]);
          return new g("Invalid " + N + " `" + D + "` of type " + ("`" + F + "` supplied to `" + k + "`, expected ") + ("instance of `" + $ + "`."));
        }
        return null;
      }
      return R(T);
    }
    function te(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function T(j, M, k, N, D) {
        for (var $ = j[M], F = 0; F < v.length; F++)
          if (P($, v[F]))
            return null;
        var z = JSON.stringify(v, function(A, p) {
          var Q = ve(p);
          return Q === "symbol" ? String(p) : p;
        });
        return new g("Invalid " + N + " `" + D + "` of value `" + String($) + "` " + ("supplied to `" + k + "`, expected one of " + z + "."));
      }
      return R(T);
    }
    function be(v) {
      function T(j, M, k, N, D) {
        if (typeof v != "function")
          return new g("Property `" + D + "` of component `" + k + "` has invalid PropType notation inside objectOf.");
        var $ = j[M], F = ne($);
        if (F !== "object")
          return new g("Invalid " + N + " `" + D + "` of type " + ("`" + F + "` supplied to `" + k + "`, expected an object."));
        for (var z in $)
          if (n($, z)) {
            var d = v($, z, k, N, D + "." + z, r);
            if (d instanceof Error)
              return d;
          }
        return null;
      }
      return R(T);
    }
    function re(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var T = 0; T < v.length; T++) {
        var j = v[T];
        if (typeof j != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe(j) + " at index " + T + "."
          ), a;
      }
      function M(k, N, D, $, F) {
        for (var z = [], d = 0; d < v.length; d++) {
          var A = v[d], p = A(k, N, D, $, F, r);
          if (p == null)
            return null;
          p.data && n(p.data, "expectedType") && z.push(p.data.expectedType);
        }
        var Q = z.length > 0 ? ", expected one of type [" + z.join(", ") + "]" : "";
        return new g("Invalid " + $ + " `" + F + "` supplied to " + ("`" + D + "`" + Q + "."));
      }
      return R(M);
    }
    function me() {
      function v(T, j, M, k, N) {
        return se(T[j]) ? null : new g("Invalid " + k + " `" + N + "` supplied to " + ("`" + M + "`, expected a ReactNode."));
      }
      return R(v);
    }
    function G(v, T, j, M, k) {
      return new g(
        (v || "React class") + ": " + T + " type `" + j + "." + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + k + "`."
      );
    }
    function ue(v) {
      function T(j, M, k, N, D) {
        var $ = j[M], F = ne($);
        if (F !== "object")
          return new g("Invalid " + N + " `" + D + "` of type `" + F + "` " + ("supplied to `" + k + "`, expected `object`."));
        for (var z in v) {
          var d = v[z];
          if (typeof d != "function")
            return G(k, N, D, z, ve(d));
          var A = d($, z, k, N, D + "." + z, r);
          if (A)
            return A;
        }
        return null;
      }
      return R(T);
    }
    function Y(v) {
      function T(j, M, k, N, D) {
        var $ = j[M], F = ne($);
        if (F !== "object")
          return new g("Invalid " + N + " `" + D + "` of type `" + F + "` " + ("supplied to `" + k + "`, expected `object`."));
        var z = t({}, j[M], v);
        for (var d in z) {
          var A = v[d];
          if (n(v, d) && typeof A != "function")
            return G(k, N, D, d, ve(A));
          if (!A)
            return new g(
              "Invalid " + N + " `" + D + "` key `" + d + "` supplied to `" + k + "`.\nBad object: " + JSON.stringify(j[M], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(v), null, "  ")
            );
          var p = A($, d, k, N, D + "." + d, r);
          if (p)
            return p;
        }
        return null;
      }
      return R(T);
    }
    function se(v) {
      switch (typeof v) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !v;
        case "object":
          if (Array.isArray(v))
            return v.every(se);
          if (v === null || c(v))
            return !0;
          var T = f(v);
          if (T) {
            var j = T.call(v), M;
            if (T !== v.entries) {
              for (; !(M = j.next()).done; )
                if (!se(M.value))
                  return !1;
            } else
              for (; !(M = j.next()).done; ) {
                var k = M.value;
                if (k && !se(k[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function _e(v, T) {
      return v === "symbol" ? !0 : T ? T["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && T instanceof Symbol : !1;
    }
    function ne(v) {
      var T = typeof v;
      return Array.isArray(v) ? "array" : v instanceof RegExp ? "object" : _e(T, v) ? "symbol" : T;
    }
    function ve(v) {
      if (typeof v > "u" || v === null)
        return "" + v;
      var T = ne(v);
      if (T === "object") {
        if (v instanceof Date)
          return "date";
        if (v instanceof RegExp)
          return "regexp";
      }
      return T;
    }
    function fe(v) {
      var T = ve(v);
      switch (T) {
        case "array":
        case "object":
          return "an " + T;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + T;
        default:
          return T;
      }
    }
    function ke(v) {
      return !v.constructor || !v.constructor.name ? b : v.constructor.name;
    }
    return E.checkPropTypes = i, E.resetWarningCache = i.resetWarningCache, E.PropTypes = E, E;
  }, yr;
}
var br, si;
function dc() {
  if (si)
    return br;
  si = 1;
  var e = Zr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, br = function() {
    function n(a, c, h, u, l, f) {
      if (f !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, br;
}
if (process.env.NODE_ENV !== "production") {
  var hc = Hi(), pc = !0;
  Mr.exports = fc()(hc.isElement, pc);
} else
  Mr.exports = dc()();
var mc = Mr.exports;
const vt = /* @__PURE__ */ Ss(mc);
class Ot {
  static transformBounds(t, { pan: r, zoom: n }) {
    const i = t.width * n, s = t.height * n, a = t.left + t.width / 2, c = t.top + t.height / 2, h = a * n - r[0], u = c * n - r[1], l = (t.width - i) / 2, f = (t.height - s) / 2, b = h - i / 2, E = u - s / 2, P = l - b, g = f - E;
    return {
      width: i,
      height: s,
      top: g,
      left: P,
      right: P + i,
      bottom: g + s,
      x: P,
      y: g
    };
  }
  static getEditableRect(t) {
    return {
      ...t,
      bottom: t.bottom,
      height: t.height,
      left: t.left,
      right: t.right,
      top: t.top,
      width: t.width,
      x: t.x,
      y: t.y
    };
  }
  static mergeDeep(t, r) {
    const n = (i) => i && typeof i == "object";
    return Object.keys(r).forEach((i) => {
      const s = t[i], a = r[i];
      Array.isArray(s) && Array.isArray(a) ? t[i] = a : n(s) && n(a) ? t[i] = Ot.mergeDeep({ ...s }, a) : t[i] = a;
    }), t;
  }
}
const Qi = ws(), $e = {
  "viewer-main": "_viewer-main_1mddk_1",
  "viewer-main-fill-height": "_viewer-main-fill-height_1mddk_10",
  "viewer-viewport": "_viewer-viewport_1mddk_14",
  "viewer-minimap-content": "_viewer-minimap-content_1mddk_19",
  "viewer-viewport-content": "_viewer-viewport-content_1mddk_20",
  "viewer-minimap": "_viewer-minimap_1mddk_19",
  "viewer-minimap-viewport-area": "_viewer-minimap-viewport-area_1mddk_38",
  "viewer-viewport-center-guide": "_viewer-viewport-center-guide_1mddk_59"
}, vc = ({ className: e = "", viewportContent: t, minimapContent: r }) => {
  const {
    crop: n,
    setCrop: i,
    settings: s,
    setZoomIn: a,
    setZoomOut: c,
    setResetView: h,
    setCenterView: u,
    setToggleMinimap: l
  } = jr(Qi), f = he(n), b = 0.75, E = 100, P = he(), g = he(), R = he(), w = he(), C = he(s.minimap.width), O = he(160), [I, y] = Ie(s.minimap.enabled), [q, te] = Ie({
    width: C.current,
    height: O.current,
    scale: 1
  }), [be, re] = Vo(() => ({
    transform: `scale(${n.zoom}) translate(${n.pan[0] / n.zoom}px, ${n.pan[1] / n.zoom}px)`,
    onRest: () => {
    },
    config: {
      tension: 170,
      // 170
      friction: 26
      // 26
    }
  }));
  Ee(() => {
    n !== f.current && (f.current = n, re.start({ transform: `scale(${n.zoom}) translate(${n.pan[0] / n.zoom}px, ${n.pan[1] / n.zoom}px)` }));
  }, [n, re]);
  const me = (d, A, p) => {
    const Q = (p.width - A.width) / 2, ce = (p.height - A.height) / 2;
    return p.width < A.width ? d.pan[0] = 0 : p.left > A.left ? d.pan[0] = Math.min(d.pan[0], Q) : p.right < A.right && (d.pan[0] = Math.max(d.pan[0], A.width - p.width + Q)), p.height < A.height ? d.pan[1] = 0 : p.top > A.top ? d.pan[1] = Math.min(d.pan[1], ce) : p.bottom < A.bottom && (d.pan[1] = Math.max(d.pan[1], A.height - p.height + ce)), d;
  }, G = ge((d) => {
    const A = Ot.getEditableRect(ue(g.current)), p = Ot.transformBounds(A, d);
    return me(d, A, p);
  }, []), ue = (d) => {
    const A = P.current.getBoundingClientRect(), p = d.getBoundingClientRect();
    return {
      top: p.top - A.top,
      left: p.left - A.left,
      width: d.offsetWidth,
      height: d.offsetHeight,
      bottom: p.top - A.top + d.offsetHeight,
      right: p.left - A.left + d.offsetWidth
    };
  }, Y = ge(() => {
    const d = w.current.offsetWidth, A = g.current.offsetWidth / g.current.offsetHeight;
    O.current = d / A;
    const p = d / g.current.offsetWidth;
    te((ce) => ({
      ...ce,
      width: C.current,
      height: O.current,
      scale: p
    }));
    let Q = {
      ...f.current
    };
    Q = G(Q), i(Q);
  }, [G, i]);
  Ee(() => {
    if (R.current) {
      const d = R.current.querySelector("img");
      d && (d.complete ? Y() : d.onload = Y);
      const A = R.current.querySelector("video");
      A && (A.readyState >= 4 ? Y() : A.onloadeddata = Y);
    }
    return () => {
    };
  }, [t, Y]), Ee(() => {
    Y();
  }, [I, Y]);
  const se = ge(() => {
    Y();
  }, [Y]);
  Ee(() => (window.addEventListener("resize", se), () => {
    window.removeEventListener("resize", se);
  }), [se]);
  const _e = ge((d) => {
    const A = { pan: { ...d.pan }, zoom: d.zoom }, p = G({ pan: { ...d.pan }, zoom: d.zoom });
    return A.pan[0] = Math.max(A.pan[0], p.pan[0] - s.spring.rubberbandDistance), A.pan[0] = Math.min(A.pan[0], p.pan[0] + s.spring.rubberbandDistance), A.pan[1] = Math.max(A.pan[1], p.pan[1] - s.spring.rubberbandDistance), A.pan[1] = Math.min(A.pan[1], p.pan[1] + s.spring.rubberbandDistance), A;
  }, [s, G]), ne = ge((d, A, p) => {
    if (!s.zoom.enabled || d.last)
      return p;
    p ?? (p = f.current);
    const Q = ue(g.current);
    let ce = 0, X = [0, 0];
    if (d.type === "click")
      ce = Number(d.zoomChange) * s.zoom.zoomButtonStep;
    else if (d.type === "pointermove" && d.pinching)
      ce = d.delta[0], X[0] = d.origin[0] - Q.width / 2, X[1] = d.origin[1] - Q.height / 2;
    else if (d.type === "wheel")
      if (d.ctrlKey && d.pinching === !0) {
        switch (d.axis) {
          case "scale":
            ce = d.delta[0];
            break;
        }
        X[0] = d.event.clientX - Q.width / 2, X[1] = d.event.clientY - Q.height / 2;
      } else
        d.axis === "y" && (!("pinching" in d) || d.pinching === !1) && (ce = -d.delta[1] / E * s.zoom.mouseWheelStep, X[0] = d.event.clientX - Q.width / 2, X[1] = d.event.clientY - Q.height / 2);
    A == "minimap" && (X[0] = 0, X[1] = 0);
    const je = Math.min(Math.max(p.zoom + ce, s.zoom.min), s.zoom.max), rt = je / f.current.zoom, kt = [
      X[0] + (f.current.pan[0] - X[0]) * rt,
      X[1] + (f.current.pan[1] - X[1]) * rt
    ];
    let Me = {
      ...f.current,
      zoom: je,
      pan: kt
    };
    return Me = G(Me), i(Me), Me;
  }, [s, i, G]), ve = ge((d, A, p) => {
    if (!s.pan.enabled || d.last)
      return p;
    p ?? (p = f.current);
    const Q = A == "viewport" ? 1 : -f.current.zoom / q.scale, ce = [
      p.pan[0] + d.delta[0] * Q,
      p.pan[1] + d.delta[1] * Q
    ];
    let X = {
      ...f.current,
      pan: ce
    };
    return s.spring.rubberband ? X = _e(X) : X = G(X), i(X), X;
  }, [s, i, G, _e, q.scale]), fe = ge(() => {
    let d = {
      ...f.current
    };
    d = G(d), i(d);
  }, [i, G]), ke = ge(() => {
    ne({ type: "click", zoomChange: -1 }, "minimap", f.current);
  }, [ne]), v = ge(() => {
    ne({ type: "click", zoomChange: 1 }, "minimap", f.current);
  }, [ne]), T = ge(() => {
    const d = {
      pan: [0, 0],
      zoom: s.zoom.default
    };
    i(d);
  }, [s, i]), j = ge(() => {
    const d = {
      pan: [0, 0],
      zoom: f.current.zoom
    };
    i(d);
  }, [i]), M = ge(() => {
    y((d) => !d);
  }, []);
  Ee(() => (c(() => ke), a(() => v), h(() => T), u(() => j), l(() => M), () => {
  }), [ke, c, v, a, T, h, j, u, M, l]), Ee(() => {
    const d = (A) => {
      const p = A.key.toLowerCase();
      s.resetView.enabled && p === s.resetView.keyboardShortcut && T(), s.centerView.enabled && p === s.centerView.keyboardShortcut && j(), s.minimap.enabled && p === s.minimap.keyboardShortcut && M();
    };
    return window.addEventListener("keydown", d), () => {
      window.removeEventListener("keydown", d);
    };
  }, [s, T, j, M]);
  const k = {
    drag: {
      enabled: s.pan.enabled,
      from: () => f.current.pan,
      preventScroll: !1
      // Ignores vertical scrolling on touch devices
    },
    pinch: {
      enabled: s.zoom.enabled,
      preventDefault: !0,
      pinchOnWheel: !0,
      angleBounds: { min: 0, max: 0 },
      from: () => [f.current.zoom * b, 0]
    },
    wheel: {
      enabled: s.zoom.enabled,
      preventDefault: !0,
      from: () => [0, -f.current.zoom * E]
    },
    eventOptions: {
      passive: !1
    }
  };
  Qn(
    {
      onDrag: (d) => ve(d, "viewport", d.memo),
      onDragEnd: fe,
      onPinch: (d) => ne(d, "viewport", d.memo),
      onPinchEnd: fe,
      onWheel: (d) => ne(d, "viewport", d.memo),
      onWheelEnd: fe
    },
    {
      ...k,
      target: g
    }
  ), Qn({
    onDrag: (d) => ve(d, "minimap", d.memo),
    onDragEnd: fe,
    onPinch: (d) => ne(d, "minimap", d.memo),
    onPinchEnd: fe,
    onWheel: (d) => ne(d, "minimap", d.memo),
    onWheelEnd: fe
  }, {
    ...k,
    target: w
  });
  const N = {
    width: C.current,
    height: O.current,
    display: I && r ? "block" : "none",
    outline: s.minimap.outlineStyle
  };
  let D = {};
  if (g.current) {
    const d = q.scale;
    D = {
      // The order of transform matters! Scale first, then translate
      transform: `scale(${1 / Math.max(n.zoom, 1)}) translate(${-n.pan[0] * d}px, ${-n.pan[1] * d}px)`,
      width: `${g.current.offsetWidth * d}px`,
      height: `${g.current.offsetHeight * d}px`,
      outline: s.minimap.viewportAreaOutlineStyle
    };
  }
  const $ = s.spring.enabled === !0 ? be : { transform: `scale(${n.zoom}) translate(${n.pan[0] / n.zoom}px, ${n.pan[1] / n.zoom}px)` };
  let F = {};
  g.current && (F = {
    transformOrigin: "0% 0%",
    transform: `scale(${q.scale})`,
    width: `${g.current.offsetWidth}px`,
    height: `${g.current.offsetHeight}px`
  });
  const z = [
    e,
    $e["viewer-main"],
    s.fillHeight && $e["viewer-main-fill-height"]
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ Fe.jsxs("div", { className: z, ref: P, children: [
    /* @__PURE__ */ Fe.jsxs("div", { className: $e["viewer-minimap"], ref: w, style: N, children: [
      /* @__PURE__ */ Fe.jsx("div", { className: $e["viewer-minimap-content"], style: F, children: r }),
      /* @__PURE__ */ Fe.jsx("div", { className: $e["viewer-minimap-viewport-area"], style: D })
    ] }),
    /* @__PURE__ */ Fe.jsxs("div", { className: $e["viewer-viewport"], ref: g, children: [
      s.guides.enabled && /* @__PURE__ */ Fe.jsx("div", { className: $e["viewer-viewport-center-guide"] }),
      /* @__PURE__ */ Fe.jsx(Qo.div, { className: $e["viewer-viewport-content"], ref: R, style: $, children: t })
    ] })
  ] });
};
vc.propTypes = {
  className: vt.string,
  viewportContent: vt.node,
  minimapContent: vt.node
};
const gc = {
  pan: { enabled: !0 },
  zoom: { enabled: !0, default: 1, min: 1, max: 4, mouseWheelStep: 0.5, zoomButtonStep: 0.5 },
  resetView: { enabled: !0, keyboardShortcut: "r" },
  centerView: { enabled: !1, keyboardShortcut: "c" },
  minimap: { enabled: !0, width: "160px", keyboardShortcut: "m", outlineStyle: "1px solid #ccc", viewportAreaOutlineStyle: "2px solid #333" },
  spring: { enabled: !0, rubberband: !0, rubberbandDistance: 100 },
  guides: { enabled: !1 },
  fillHeight: !0
}, oi = {
  pan: [0, 0],
  zoom: 1
}, yc = ({ children: e, settings: t = {} }) => {
  const r = ut(() => Ot.mergeDeep({ ...gc }, t), [t]), [n, i] = Ie(oi), [s, a] = Ie(null), [c, h] = Ie(null), [u, l] = Ie(null), [f, b] = Ie(null), [E, P] = Ie(null);
  return Ee(() => {
    i({ pan: oi.pan, zoom: r.zoom.default });
  }, [r.zoom.default]), /* @__PURE__ */ Fe.jsx(Qi.Provider, { value: {
    crop: n,
    setCrop: i,
    settings: r,
    zoomOut: s,
    setZoomOut: a,
    zoomIn: c,
    setZoomIn: h,
    resetView: u,
    setResetView: l,
    centerView: f,
    setCenterView: b,
    toggleMinimap: E,
    setToggleMinimap: P
  }, children: e });
};
yc.propTypes = {
  children: vt.node,
  settings: vt.object
};
export {
  vc as Viewer,
  Qi as ViewerContext,
  yc as ViewerProvider,
  Ot as ViewerUtils
};
