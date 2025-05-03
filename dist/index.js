import * as Rr from "react";
import lt, { useState as Ae, useRef as he, useEffect as Ee, useLayoutEffect as ds, forwardRef as hs, useCallback as ge, useContext as Or, useMemo as ct, createContext as ps } from "react";
import { unstable_batchedUpdates as ms } from "react-dom";
import './index.css';function vs(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var mr = { exports: {} }, nt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sn;
function gs() {
  if (sn) return nt;
  sn = 1;
  var t = lt, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, d, u) {
    var l, h = {}, m = null, w = null;
    u !== void 0 && (m = "" + u), d.key !== void 0 && (m = "" + d.key), d.ref !== void 0 && (w = d.ref);
    for (l in d) n.call(d, l) && !s.hasOwnProperty(l) && (h[l] = d[l]);
    if (c && c.defaultProps) for (l in d = c.defaultProps, d) h[l] === void 0 && (h[l] = d[l]);
    return { $$typeof: e, type: c, key: m, ref: w, props: h, _owner: i.current };
  }
  return nt.Fragment = r, nt.jsx = a, nt.jsxs = a, nt;
}
var it = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var on;
function ys() {
  return on || (on = 1, process.env.NODE_ENV !== "production" && function() {
    var t = lt, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), T = Symbol.iterator, y = "@@iterator";
    function R(o) {
      if (o === null || typeof o != "object")
        return null;
      var v = T && o[T] || o[y];
      return typeof v == "function" ? v : null;
    }
    var E = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(o) {
      {
        for (var v = arguments.length, x = new Array(v > 1 ? v - 1 : 0), I = 1; I < v; I++)
          x[I - 1] = arguments[I];
        P("error", o, x);
      }
    }
    function P(o, v, x) {
      {
        var I = E.ReactDebugCurrentFrame, q = I.getStackAddendum();
        q !== "" && (v += "%s", x = x.concat([q]));
        var Z = x.map(function(W) {
          return String(W);
        });
        Z.unshift("Warning: " + v), Function.prototype.apply.call(console[o], console, Z);
      }
    }
    var A = !1, _ = !1, Y = !1, te = !1, _e = !1, re;
    re = Symbol.for("react.module.reference");
    function me(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === n || o === s || _e || o === i || o === u || o === l || te || o === w || A || _ || Y || typeof o == "object" && o !== null && (o.$$typeof === m || o.$$typeof === h || o.$$typeof === a || o.$$typeof === c || o.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === re || o.getModuleId !== void 0));
    }
    function H(o, v, x) {
      var I = o.displayName;
      if (I)
        return I;
      var q = v.displayName || v.name || "";
      return q !== "" ? x + "(" + q + ")" : x;
    }
    function ue(o) {
      return o.displayName || "Context";
    }
    function G(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
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
            var v = o;
            return ue(v) + ".Consumer";
          case a:
            var x = o;
            return ue(x._context) + ".Provider";
          case d:
            return H(o, o.render, "ForwardRef");
          case h:
            var I = o.displayName || null;
            return I !== null ? I : G(o.type) || "Memo";
          case m: {
            var q = o, Z = q._payload, W = q._init;
            try {
              return G(W(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var se = Object.assign, be = 0, ne, ve, fe, ke, g, S, M;
    function D() {
    }
    D.__reactDisabledLog = !0;
    function k() {
      {
        if (be === 0) {
          ne = console.log, ve = console.info, fe = console.warn, ke = console.error, g = console.group, S = console.groupCollapsed, M = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: D,
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
        be++;
      }
    }
    function N() {
      {
        if (be--, be === 0) {
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
              value: g
            }),
            groupCollapsed: se({}, o, {
              value: S
            }),
            groupEnd: se({}, o, {
              value: M
            })
          });
        }
        be < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var j = E.ReactCurrentDispatcher, $;
    function F(o, v, x) {
      {
        if ($ === void 0)
          try {
            throw Error();
          } catch (q) {
            var I = q.stack.trim().match(/\n( *(at )?)/);
            $ = I && I[1] || "";
          }
        return `
` + $ + o;
      }
    }
    var z = !1, f;
    {
      var C = typeof WeakMap == "function" ? WeakMap : Map;
      f = new C();
    }
    function p(o, v) {
      if (!o || z)
        return "";
      {
        var x = f.get(o);
        if (x !== void 0)
          return x;
      }
      var I;
      z = !0;
      var q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = j.current, j.current = null, k();
      try {
        if (v) {
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
              I = de;
            }
            Reflect.construct(o, [], W);
          } else {
            try {
              W.call();
            } catch (de) {
              I = de;
            }
            o.call(W.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            I = de;
          }
          o();
        }
      } catch (de) {
        if (de && I && typeof de.stack == "string") {
          for (var L = de.stack.split(`
`), le = I.stack.split(`
`), ie = L.length - 1, oe = le.length - 1; ie >= 1 && oe >= 0 && L[ie] !== le[oe]; )
            oe--;
          for (; ie >= 1 && oe >= 0; ie--, oe--)
            if (L[ie] !== le[oe]) {
              if (ie !== 1 || oe !== 1)
                do
                  if (ie--, oe--, oe < 0 || L[ie] !== le[oe]) {
                    var we = `
` + L[ie].replace(" at new ", " at ");
                    return o.displayName && we.includes("<anonymous>") && (we = we.replace("<anonymous>", o.displayName)), typeof o == "function" && f.set(o, we), we;
                  }
                while (ie >= 1 && oe >= 0);
              break;
            }
        }
      } finally {
        z = !1, j.current = Z, N(), Error.prepareStackTrace = q;
      }
      var Ke = o ? o.displayName || o.name : "", Ue = Ke ? F(Ke) : "";
      return typeof o == "function" && f.set(o, Ue), Ue;
    }
    function X(o, v, x) {
      return p(o, !1);
    }
    function ce(o) {
      var v = o.prototype;
      return !!(v && v.isReactComponent);
    }
    function Q(o, v, x) {
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
          case d:
            return X(o.render);
          case h:
            return Q(o.type, v, x);
          case m: {
            var I = o, q = I._payload, Z = I._init;
            try {
              return Q(Z(q), v, x);
            } catch {
            }
          }
        }
      return "";
    }
    var Me = Object.prototype.hasOwnProperty, rt = {}, It = E.ReactDebugCurrentFrame;
    function De(o) {
      if (o) {
        var v = o._owner, x = Q(o.type, o._source, v ? v.type : null);
        It.setExtraStackFrame(x);
      } else
        It.setExtraStackFrame(null);
    }
    function Yi(o, v, x, I, q) {
      {
        var Z = Function.call.bind(Me);
        for (var W in o)
          if (Z(o, W)) {
            var L = void 0;
            try {
              if (typeof o[W] != "function") {
                var le = Error((I || "React class") + ": " + x + " type `" + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[W] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw le.name = "Invariant Violation", le;
              }
              L = o[W](v, W, I, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ie) {
              L = ie;
            }
            L && !(L instanceof Error) && (De(q), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", x, W, typeof L), De(null)), L instanceof Error && !(L.message in rt) && (rt[L.message] = !0, De(q), O("Failed %s type: %s", x, L.message), De(null));
          }
      }
    }
    var qi = Array.isArray;
    function Qt(o) {
      return qi(o);
    }
    function Bi(o) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, x = v && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return x;
      }
    }
    function Ki(o) {
      try {
        return Br(o), !1;
      } catch {
        return !0;
      }
    }
    function Br(o) {
      return "" + o;
    }
    function Kr(o) {
      if (Ki(o))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Bi(o)), Br(o);
    }
    var Hr = E.ReactCurrentOwner, Hi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Gr, Xr;
    function Gi(o) {
      if (Me.call(o, "ref")) {
        var v = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Xi(o) {
      if (Me.call(o, "key")) {
        var v = Object.getOwnPropertyDescriptor(o, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Qi(o, v) {
      typeof o.ref == "string" && Hr.current;
    }
    function Zi(o, v) {
      {
        var x = function() {
          Gr || (Gr = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        x.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function Ji(o, v) {
      {
        var x = function() {
          Xr || (Xr = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        x.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var es = function(o, v, x, I, q, Z, W) {
      var L = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: o,
        key: v,
        ref: x,
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
        value: I
      }), Object.defineProperty(L, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.freeze && (Object.freeze(L.props), Object.freeze(L)), L;
    };
    function ts(o, v, x, I, q) {
      {
        var Z, W = {}, L = null, le = null;
        x !== void 0 && (Kr(x), L = "" + x), Xi(v) && (Kr(v.key), L = "" + v.key), Gi(v) && (le = v.ref, Qi(v, q));
        for (Z in v)
          Me.call(v, Z) && !Hi.hasOwnProperty(Z) && (W[Z] = v[Z]);
        if (o && o.defaultProps) {
          var ie = o.defaultProps;
          for (Z in ie)
            W[Z] === void 0 && (W[Z] = ie[Z]);
        }
        if (L || le) {
          var oe = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          L && Zi(W, oe), le && Ji(W, oe);
        }
        return es(o, L, le, q, I, Hr.current, W);
      }
    }
    var Zt = E.ReactCurrentOwner, Qr = E.ReactDebugCurrentFrame;
    function Be(o) {
      if (o) {
        var v = o._owner, x = Q(o.type, o._source, v ? v.type : null);
        Qr.setExtraStackFrame(x);
      } else
        Qr.setExtraStackFrame(null);
    }
    var Jt;
    Jt = !1;
    function er(o) {
      return typeof o == "object" && o !== null && o.$$typeof === e;
    }
    function Zr() {
      {
        if (Zt.current) {
          var o = G(Zt.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function rs(o) {
      return "";
    }
    var Jr = {};
    function ns(o) {
      {
        var v = Zr();
        if (!v) {
          var x = typeof o == "string" ? o : o.displayName || o.name;
          x && (v = `

Check the top-level render call using <` + x + ">.");
        }
        return v;
      }
    }
    function en(o, v) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var x = ns(v);
        if (Jr[x])
          return;
        Jr[x] = !0;
        var I = "";
        o && o._owner && o._owner !== Zt.current && (I = " It was passed a child from " + G(o._owner.type) + "."), Be(o), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, I), Be(null);
      }
    }
    function tn(o, v) {
      {
        if (typeof o != "object")
          return;
        if (Qt(o))
          for (var x = 0; x < o.length; x++) {
            var I = o[x];
            er(I) && en(I, v);
          }
        else if (er(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var q = R(o);
          if (typeof q == "function" && q !== o.entries)
            for (var Z = q.call(o), W; !(W = Z.next()).done; )
              er(W.value) && en(W.value, v);
        }
      }
    }
    function is(o) {
      {
        var v = o.type;
        if (v == null || typeof v == "string")
          return;
        var x;
        if (typeof v == "function")
          x = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === h))
          x = v.propTypes;
        else
          return;
        if (x) {
          var I = G(v);
          Yi(x, o.props, "prop", I, o);
        } else if (v.PropTypes !== void 0 && !Jt) {
          Jt = !0;
          var q = G(v);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ss(o) {
      {
        for (var v = Object.keys(o.props), x = 0; x < v.length; x++) {
          var I = v[x];
          if (I !== "children" && I !== "key") {
            Be(o), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), Be(null);
            break;
          }
        }
        o.ref !== null && (Be(o), O("Invalid attribute `ref` supplied to `React.Fragment`."), Be(null));
      }
    }
    var rn = {};
    function nn(o, v, x, I, q, Z) {
      {
        var W = me(o);
        if (!W) {
          var L = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var le = rs();
          le ? L += le : L += Zr();
          var ie;
          o === null ? ie = "null" : Qt(o) ? ie = "array" : o !== void 0 && o.$$typeof === e ? (ie = "<" + (G(o.type) || "Unknown") + " />", L = " Did you accidentally export a JSX literal instead of a component?") : ie = typeof o, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ie, L);
        }
        var oe = ts(o, v, x, q, Z);
        if (oe == null)
          return oe;
        if (W) {
          var we = v.children;
          if (we !== void 0)
            if (I)
              if (Qt(we)) {
                for (var Ke = 0; Ke < we.length; Ke++)
                  tn(we[Ke], o);
                Object.freeze && Object.freeze(we);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              tn(we, o);
        }
        if (Me.call(v, "key")) {
          var Ue = G(o), de = Object.keys(v).filter(function(fs) {
            return fs !== "key";
          }), tr = de.length > 0 ? "{key: someKey, " + de.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!rn[Ue + tr]) {
            var ls = de.length > 0 ? "{" + de.join(": ..., ") + ": ...}" : "{}";
            O(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, tr, Ue, ls, Ue), rn[Ue + tr] = !0;
          }
        }
        return o === n ? ss(oe) : is(oe), oe;
      }
    }
    function os(o, v, x) {
      return nn(o, v, x, !0);
    }
    function as(o, v, x) {
      return nn(o, v, x, !1);
    }
    var cs = as, us = os;
    it.Fragment = n, it.jsx = cs, it.jsxs = us;
  }()), it;
}
process.env.NODE_ENV === "production" ? mr.exports = gs() : mr.exports = ys();
var Fe = mr.exports, Cr = Rt(), V = (t) => xt(t, Cr), Ar = Rt();
V.write = (t) => xt(t, Ar);
var Ut = Rt();
V.onStart = (t) => xt(t, Ut);
var Ir = Rt();
V.onFrame = (t) => xt(t, Ir);
var kr = Rt();
V.onFinish = (t) => xt(t, kr);
var Qe = [];
V.setTimeout = (t, e) => {
  const r = V.now() + e, n = () => {
    const s = Qe.findIndex((a) => a.cancel == n);
    ~s && Qe.splice(s, 1), Le -= ~s ? 1 : 0;
  }, i = { time: r, handler: t, cancel: n };
  return Qe.splice(Zn(r), 0, i), Le += 1, Jn(), i;
};
var Zn = (t) => ~(~Qe.findIndex((e) => e.time > t) || ~Qe.length);
V.cancel = (t) => {
  Ut.delete(t), Ir.delete(t), kr.delete(t), Cr.delete(t), Ar.delete(t);
};
V.sync = (t) => {
  vr = !0, V.batchedUpdates(t), vr = !1;
};
V.throttle = (t) => {
  let e;
  function r() {
    try {
      t(...e);
    } finally {
      e = null;
    }
  }
  function n(...i) {
    e = i, V.onStart(r);
  }
  return n.handler = t, n.cancel = () => {
    Ut.delete(r), e = null;
  }, n;
};
var Dr = typeof window < "u" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {
  }
);
V.use = (t) => Dr = t;
V.now = typeof performance < "u" ? () => performance.now() : Date.now;
V.batchedUpdates = (t) => t();
V.catch = console.error;
V.frameLoop = "always";
V.advance = () => {
  V.frameLoop !== "demand" ? console.warn(
    "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
  ) : ti();
};
var Ne = -1, Le = 0, vr = !1;
function xt(t, e) {
  vr ? (e.delete(t), t(0)) : (e.add(t), Jn());
}
function Jn() {
  Ne < 0 && (Ne = 0, V.frameLoop !== "demand" && Dr(ei));
}
function _s() {
  Ne = -1;
}
function ei() {
  ~Ne && (Dr(ei), V.batchedUpdates(ti));
}
function ti() {
  const t = Ne;
  Ne = V.now();
  const e = Zn(Ne);
  if (e && (ri(Qe.splice(0, e), (r) => r.handler()), Le -= e), !Le) {
    _s();
    return;
  }
  Ut.flush(), Cr.flush(t ? Math.min(64, Ne - t) : 16.667), Ir.flush(), Ar.flush(), kr.flush();
}
function Rt() {
  let t = /* @__PURE__ */ new Set(), e = t;
  return {
    add(r) {
      Le += e == t && !t.has(r) ? 1 : 0, t.add(r);
    },
    delete(r) {
      return Le -= e == t && t.has(r) ? 1 : 0, t.delete(r);
    },
    flush(r) {
      e.size && (t = /* @__PURE__ */ new Set(), Le -= e.size, ri(e, (n) => n(r) && t.add(n)), Le += t.size, e = t);
    }
  };
}
function ri(t, e) {
  t.forEach((r) => {
    try {
      e(r);
    } catch (n) {
      V.catch(n);
    }
  });
}
var bs = Object.defineProperty, ws = (t, e) => {
  for (var r in e)
    bs(t, r, { get: e[r], enumerable: !0 });
}, Oe = {};
ws(Oe, {
  assign: () => Ss,
  colors: () => ze,
  createStringInterpolator: () => Mr,
  skipAnimation: () => ii,
  to: () => ni,
  willAdvance: () => Vr
});
function gr() {
}
var Es = (t, e, r) => Object.defineProperty(t, e, { value: r, writable: !0, configurable: !0 }), b = {
  arr: Array.isArray,
  obj: (t) => !!t && t.constructor.name === "Object",
  fun: (t) => typeof t == "function",
  str: (t) => typeof t == "string",
  num: (t) => typeof t == "number",
  und: (t) => t === void 0
};
function je(t, e) {
  if (b.arr(t)) {
    if (!b.arr(e) || t.length !== e.length)
      return !1;
    for (let r = 0; r < t.length; r++)
      if (t[r] !== e[r])
        return !1;
    return !0;
  }
  return t === e;
}
var U = (t, e) => t.forEach(e);
function Ie(t, e, r) {
  if (b.arr(t)) {
    for (let n = 0; n < t.length; n++)
      e.call(r, t[n], `${n}`);
    return;
  }
  for (const n in t)
    t.hasOwnProperty(n) && e.call(r, t[n], n);
}
var ye = (t) => b.und(t) ? [] : b.arr(t) ? t : [t];
function ft(t, e) {
  if (t.size) {
    const r = Array.from(t);
    t.clear(), U(r, e);
  }
}
var ut = (t, ...e) => ft(t, (r) => r(...e)), jr = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), Mr, ni, ze = null, ii = !1, Vr = gr, Ss = (t) => {
  t.to && (ni = t.to), t.now && (V.now = t.now), t.colors !== void 0 && (ze = t.colors), t.skipAnimation != null && (ii = t.skipAnimation), t.createStringInterpolator && (Mr = t.createStringInterpolator), t.requestAnimationFrame && V.use(t.requestAnimationFrame), t.batchedUpdates && (V.batchedUpdates = t.batchedUpdates), t.willAdvance && (Vr = t.willAdvance), t.frameLoop && (V.frameLoop = t.frameLoop);
}, dt = /* @__PURE__ */ new Set(), Pe = [], rr = [], $t = 0, Wt = {
  get idle() {
    return !dt.size && !Pe.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(t) {
    $t > t.priority ? (dt.add(t), V.onStart(Ts)) : (si(t), V(yr));
  },
  /** Advance all animations by the given time. */
  advance: yr,
  /** Call this when an animation's priority changes. */
  sort(t) {
    if ($t)
      V.onFrame(() => Wt.sort(t));
    else {
      const e = Pe.indexOf(t);
      ~e && (Pe.splice(e, 1), oi(t));
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    Pe = [], dt.clear();
  }
};
function Ts() {
  dt.forEach(si), dt.clear(), V(yr);
}
function si(t) {
  Pe.includes(t) || oi(t);
}
function oi(t) {
  Pe.splice(
    Ps(Pe, (e) => e.priority > t.priority),
    0,
    t
  );
}
function yr(t) {
  const e = rr;
  for (let r = 0; r < Pe.length; r++) {
    const n = Pe[r];
    $t = n.priority, n.idle || (Vr(n), n.advance(t), n.idle || e.push(n));
  }
  return $t = 0, rr = Pe, rr.length = 0, Pe = e, Pe.length > 0;
}
function Ps(t, e) {
  const r = t.findIndex(e);
  return r < 0 ? t.length : r;
}
var xs = {
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
}, Re = "[-+]?\\d*\\.?\\d+", Ft = Re + "%";
function Yt(...t) {
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var Rs = new RegExp("rgb" + Yt(Re, Re, Re)), Os = new RegExp("rgba" + Yt(Re, Re, Re, Re)), Cs = new RegExp("hsl" + Yt(Re, Ft, Ft)), As = new RegExp(
  "hsla" + Yt(Re, Ft, Ft, Re)
), Is = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, ks = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Ds = /^#([0-9a-fA-F]{6})$/, js = /^#([0-9a-fA-F]{8})$/;
function Ms(t) {
  let e;
  return typeof t == "number" ? t >>> 0 === t && t >= 0 && t <= 4294967295 ? t : null : (e = Ds.exec(t)) ? parseInt(e[1] + "ff", 16) >>> 0 : ze && ze[t] !== void 0 ? ze[t] : (e = Rs.exec(t)) ? (He(e[1]) << 24 | // r
  He(e[2]) << 16 | // g
  He(e[3]) << 8 | // b
  255) >>> // a
  0 : (e = Os.exec(t)) ? (He(e[1]) << 24 | // r
  He(e[2]) << 16 | // g
  He(e[3]) << 8 | // b
  un(e[4])) >>> // a
  0 : (e = Is.exec(t)) ? parseInt(
    e[1] + e[1] + // r
    e[2] + e[2] + // g
    e[3] + e[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (e = js.exec(t)) ? parseInt(e[1], 16) >>> 0 : (e = ks.exec(t)) ? parseInt(
    e[1] + e[1] + // r
    e[2] + e[2] + // g
    e[3] + e[3] + // b
    e[4] + e[4],
    // a
    16
  ) >>> 0 : (e = Cs.exec(t)) ? (an(
    cn(e[1]),
    // h
    kt(e[2]),
    // s
    kt(e[3])
    // l
  ) | 255) >>> // a
  0 : (e = As.exec(t)) ? (an(
    cn(e[1]),
    // h
    kt(e[2]),
    // s
    kt(e[3])
    // l
  ) | un(e[4])) >>> // a
  0 : null;
}
function nr(t, e, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
}
function an(t, e, r) {
  const n = r < 0.5 ? r * (1 + e) : r + e - r * e, i = 2 * r - n, s = nr(i, n, t + 1 / 3), a = nr(i, n, t), c = nr(i, n, t - 1 / 3);
  return Math.round(s * 255) << 24 | Math.round(a * 255) << 16 | Math.round(c * 255) << 8;
}
function He(t) {
  const e = parseInt(t, 10);
  return e < 0 ? 0 : e > 255 ? 255 : e;
}
function cn(t) {
  return (parseFloat(t) % 360 + 360) % 360 / 360;
}
function un(t) {
  const e = parseFloat(t);
  return e < 0 ? 0 : e > 1 ? 255 : Math.round(e * 255);
}
function kt(t) {
  const e = parseFloat(t);
  return e < 0 ? 0 : e > 100 ? 1 : e / 100;
}
function ln(t) {
  let e = Ms(t);
  if (e === null)
    return t;
  e = e || 0;
  const r = (e & 4278190080) >>> 24, n = (e & 16711680) >>> 16, i = (e & 65280) >>> 8, s = (e & 255) / 255;
  return `rgba(${r}, ${n}, ${i}, ${s})`;
}
var vt = (t, e, r) => {
  if (b.fun(t))
    return t;
  if (b.arr(t))
    return vt({
      range: t,
      output: e,
      extrapolate: r
    });
  if (b.str(t.output[0]))
    return Mr(t);
  const n = t, i = n.output, s = n.range || [0, 1], a = n.extrapolateLeft || n.extrapolate || "extend", c = n.extrapolateRight || n.extrapolate || "extend", d = n.easing || ((u) => u);
  return (u) => {
    const l = $s(u, s);
    return Vs(
      u,
      s[l],
      s[l + 1],
      i[l],
      i[l + 1],
      d,
      a,
      c,
      n.map
    );
  };
};
function Vs(t, e, r, n, i, s, a, c, d) {
  let u = d ? d(t) : t;
  if (u < e) {
    if (a === "identity")
      return u;
    a === "clamp" && (u = e);
  }
  if (u > r) {
    if (c === "identity")
      return u;
    c === "clamp" && (u = r);
  }
  return n === i ? n : e === r ? t <= e ? n : i : (e === -1 / 0 ? u = -u : r === 1 / 0 ? u = u - e : u = (u - e) / (r - e), u = s(u), n === -1 / 0 ? u = -u : i === 1 / 0 ? u = u + n : u = u * (i - n) + n, u);
}
function $s(t, e) {
  for (var r = 1; r < e.length - 1 && !(e[r] >= t); ++r)
    ;
  return r - 1;
}
var Fs = {
  linear: (t) => t
}, gt = Symbol.for("FluidValue.get"), Je = Symbol.for("FluidValue.observers"), Se = (t) => !!(t && t[gt]), pe = (t) => t && t[gt] ? t[gt]() : t, fn = (t) => t[Je] || null;
function Ns(t, e) {
  t.eventObserved ? t.eventObserved(e) : t(e);
}
function yt(t, e) {
  const r = t[Je];
  r && r.forEach((n) => {
    Ns(n, e);
  });
}
var ai = class {
  constructor(t) {
    if (!t && !(t = this.get))
      throw Error("Unknown getter");
    Ls(this, t);
  }
}, Ls = (t, e) => ci(t, gt, e);
function tt(t, e) {
  if (t[gt]) {
    let r = t[Je];
    r || ci(t, Je, r = /* @__PURE__ */ new Set()), r.has(e) || (r.add(e), t.observerAdded && t.observerAdded(r.size, e));
  }
  return e;
}
function _t(t, e) {
  const r = t[Je];
  if (r && r.has(e)) {
    const n = r.size - 1;
    n ? r.delete(e) : t[Je] = null, t.observerRemoved && t.observerRemoved(n, e);
  }
}
var ci = (t, e, r) => Object.defineProperty(t, e, {
  value: r,
  writable: !0,
  configurable: !0
}), jt = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, zs = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, dn = new RegExp(`(${jt.source})(%|[a-z]+)`, "i"), Us = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, qt = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, ui = (t) => {
  const [e, r] = Ws(t);
  if (!e || jr())
    return t;
  const n = window.getComputedStyle(document.documentElement).getPropertyValue(e);
  if (n)
    return n.trim();
  if (r && r.startsWith("--")) {
    const i = window.getComputedStyle(document.documentElement).getPropertyValue(r);
    return i || t;
  } else {
    if (r && qt.test(r))
      return ui(r);
    if (r)
      return r;
  }
  return t;
}, Ws = (t) => {
  const e = qt.exec(t);
  if (!e)
    return [,];
  const [, r, n] = e;
  return [r, n];
}, ir, Ys = (t, e, r, n, i) => `rgba(${Math.round(e)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`, li = (t) => {
  ir || (ir = ze ? (
    // match color names, ignore partial matches
    new RegExp(`(${Object.keys(ze).join("|")})(?!\\w)`, "g")
  ) : (
    // never match
    /^\b$/
  ));
  const e = t.output.map((s) => pe(s).replace(qt, ui).replace(zs, ln).replace(ir, ln)), r = e.map((s) => s.match(jt).map(Number)), i = r[0].map(
    (s, a) => r.map((c) => {
      if (!(a in c))
        throw Error('The arity of each "output" value must be equal');
      return c[a];
    })
  ).map(
    (s) => vt({ ...t, output: s })
  );
  return (s) => {
    var d;
    const a = !dn.test(e[0]) && ((d = e.find((u) => dn.test(u))) == null ? void 0 : d.replace(jt, ""));
    let c = 0;
    return e[0].replace(
      jt,
      () => `${i[c++](s)}${a || ""}`
    ).replace(Us, Ys);
  };
}, $r = "react-spring: ", fi = (t) => {
  const e = t;
  let r = !1;
  if (typeof e != "function")
    throw new TypeError(`${$r}once requires a function parameter`);
  return (...n) => {
    r || (e(...n), r = !0);
  };
}, qs = fi(console.warn);
function Bs() {
  qs(
    `${$r}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var Ks = fi(console.warn);
function Hs() {
  Ks(
    `${$r}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function Bt(t) {
  return b.str(t) && (t[0] == "#" || /\d/.test(t) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !jr() && qt.test(t) || t in (ze || {}));
}
var Fr = jr() ? Ee : ds, Gs = () => {
  const t = he(!1);
  return Fr(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t;
};
function di() {
  const t = Ae()[1], e = Gs();
  return () => {
    e.current && t(Math.random());
  };
}
function Xs(t, e) {
  const [r] = Ae(
    () => ({
      inputs: e,
      result: t()
    })
  ), n = he(), i = n.current;
  let s = i;
  return s ? e && s.inputs && Qs(e, s.inputs) || (s = {
    inputs: e,
    result: t()
  }) : s = r, Ee(() => {
    n.current = s, i == r && (r.inputs = r.result = void 0);
  }, [s]), s.result;
}
function Qs(t, e) {
  if (t.length !== e.length)
    return !1;
  for (let r = 0; r < t.length; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
var hi = (t) => Ee(t, Zs), Zs = [];
function hn(t) {
  const e = he();
  return Ee(() => {
    e.current = t;
  }), e.current;
}
var bt = Symbol.for("Animated:node"), Js = (t) => !!t && t[bt] === t, Ce = (t) => t && t[bt], Nr = (t, e) => Es(t, bt, e), Kt = (t) => t && t[bt] && t[bt].getPayload(), pi = class {
  constructor() {
    Nr(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
}, Ot = class extends pi {
  constructor(t) {
    super(), this._value = t, this.done = !0, this.durationProgress = 0, b.num(this._value) && (this.lastPosition = this._value);
  }
  /** @internal */
  static create(t) {
    return new Ot(t);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(t, e) {
    return b.num(t) && (this.lastPosition = t, e && (t = Math.round(t / e) * e, this.done && (this.lastPosition = t))), this._value === t ? !1 : (this._value = t, !0);
  }
  reset() {
    const { done: t } = this;
    this.done = !1, b.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, t && (this.lastVelocity = null), this.v0 = null);
  }
}, wt = class extends Ot {
  constructor(t) {
    super(0), this._string = null, this._toString = vt({
      output: [t, t]
    });
  }
  /** @internal */
  static create(t) {
    return new wt(t);
  }
  getValue() {
    const t = this._string;
    return t ?? (this._string = this._toString(this._value));
  }
  setValue(t) {
    if (b.str(t)) {
      if (t == this._string)
        return !1;
      this._string = t, this._value = 1;
    } else if (super.setValue(t))
      this._string = null;
    else
      return !1;
    return !0;
  }
  reset(t) {
    t && (this._toString = vt({
      output: [this.getValue(), t]
    })), this._value = 0, super.reset();
  }
}, Nt = { dependencies: null }, Ht = class extends pi {
  constructor(t) {
    super(), this.source = t, this.setValue(t);
  }
  getValue(t) {
    const e = {};
    return Ie(this.source, (r, n) => {
      Js(r) ? e[n] = r.getValue(t) : Se(r) ? e[n] = pe(r) : t || (e[n] = r);
    }), e;
  }
  /** Replace the raw object data */
  setValue(t) {
    this.source = t, this.payload = this._makePayload(t);
  }
  reset() {
    this.payload && U(this.payload, (t) => t.reset());
  }
  /** Create a payload set. */
  _makePayload(t) {
    if (t) {
      const e = /* @__PURE__ */ new Set();
      return Ie(t, this._addToPayload, e), Array.from(e);
    }
  }
  /** Add to a payload set. */
  _addToPayload(t) {
    Nt.dependencies && Se(t) && Nt.dependencies.add(t);
    const e = Kt(t);
    e && U(e, (r) => this.add(r));
  }
}, mi = class extends Ht {
  constructor(t) {
    super(t);
  }
  /** @internal */
  static create(t) {
    return new mi(t);
  }
  getValue() {
    return this.source.map((t) => t.getValue());
  }
  setValue(t) {
    const e = this.getPayload();
    return t.length == e.length ? e.map((r, n) => r.setValue(t[n])).some(Boolean) : (super.setValue(t.map(eo)), !0);
  }
};
function eo(t) {
  return (Bt(t) ? wt : Ot).create(t);
}
function _r(t) {
  const e = Ce(t);
  return e ? e.constructor : b.arr(t) ? mi : Bt(t) ? wt : Ot;
}
var pn = (t, e) => {
  const r = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !b.fun(t) || t.prototype && t.prototype.isReactComponent
  );
  return hs((n, i) => {
    const s = he(null), a = r && // eslint-disable-next-line react-hooks/rules-of-hooks
    ge(
      (T) => {
        s.current = no(i, T);
      },
      [i]
    ), [c, d] = ro(n, e), u = di(), l = () => {
      const T = s.current;
      if (r && !T)
        return;
      (T ? e.applyAnimatedValues(T, c.getValue(!0)) : !1) === !1 && u();
    }, h = new to(l, d), m = he();
    Fr(() => (m.current = h, U(d, (T) => tt(T, h)), () => {
      m.current && (U(
        m.current.deps,
        (T) => _t(T, m.current)
      ), V.cancel(m.current.update));
    })), Ee(l, []), hi(() => () => {
      const T = m.current;
      U(T.deps, (y) => _t(y, T));
    });
    const w = e.getComponentProps(c.getValue());
    return /* @__PURE__ */ Rr.createElement(t, { ...w, ref: a });
  });
}, to = class {
  constructor(t, e) {
    this.update = t, this.deps = e;
  }
  eventObserved(t) {
    t.type == "change" && V.write(this.update);
  }
};
function ro(t, e) {
  const r = /* @__PURE__ */ new Set();
  return Nt.dependencies = r, t.style && (t = {
    ...t,
    style: e.createAnimatedStyle(t.style)
  }), t = new Ht(t), Nt.dependencies = null, [t, r];
}
function no(t, e) {
  return t && (b.fun(t) ? t(e) : t.current = e), e;
}
var mn = Symbol.for("AnimatedComponent"), io = (t, {
  applyAnimatedValues: e = () => !1,
  createAnimatedStyle: r = (i) => new Ht(i),
  getComponentProps: n = (i) => i
} = {}) => {
  const i = {
    applyAnimatedValues: e,
    createAnimatedStyle: r,
    getComponentProps: n
  }, s = (a) => {
    const c = vn(a) || "Anonymous";
    return b.str(a) ? a = s[a] || (s[a] = pn(a, i)) : a = a[mn] || (a[mn] = pn(a, i)), a.displayName = `Animated(${c})`, a;
  };
  return Ie(t, (a, c) => {
    b.arr(t) && (c = vn(a)), s[c] = s(a);
  }), {
    animated: s
  };
}, vn = (t) => b.str(t) ? t : t && b.str(t.displayName) ? t.displayName : b.fun(t) && t.name || null;
function We(t, ...e) {
  return b.fun(t) ? t(...e) : t;
}
var ht = (t, e) => t === !0 || !!(e && t && (b.fun(t) ? t(e) : ye(t).includes(e))), vi = (t, e) => b.obj(t) ? e && t[e] : t, gi = (t, e) => t.default === !0 ? t[e] : t.default ? t.default[e] : void 0, so = (t) => t, Lr = (t, e = so) => {
  let r = oo;
  t.default && t.default !== !0 && (t = t.default, r = Object.keys(t));
  const n = {};
  for (const i of r) {
    const s = e(t[i], i);
    b.und(s) || (n[i] = s);
  }
  return n;
}, oo = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
], ao = {
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
function co(t) {
  const e = {};
  let r = 0;
  if (Ie(t, (n, i) => {
    ao[i] || (e[i] = n, r++);
  }), r)
    return e;
}
function yi(t) {
  const e = co(t);
  if (e) {
    const r = { to: e };
    return Ie(t, (n, i) => i in e || (r[i] = n)), r;
  }
  return { ...t };
}
function Et(t) {
  return t = pe(t), b.arr(t) ? t.map(Et) : Bt(t) ? Oe.createStringInterpolator({
    range: [0, 1],
    output: [t, t]
  })(1) : t;
}
function uo(t) {
  for (const e in t)
    return !0;
  return !1;
}
function br(t) {
  return b.fun(t) || b.arr(t) && b.obj(t[0]);
}
function lo(t, e) {
  var r;
  (r = t.ref) == null || r.delete(t), e == null || e.delete(t);
}
function fo(t, e) {
  var r;
  e && t.ref !== e && ((r = t.ref) == null || r.delete(t), e.add(t), t.ref = e);
}
var ho = {
  default: { tension: 170, friction: 26 }
}, wr = {
  ...ho.default,
  mass: 1,
  damping: 1,
  easing: Fs.linear,
  clamp: !1
}, po = class {
  constructor() {
    this.velocity = 0, Object.assign(this, wr);
  }
};
function mo(t, e, r) {
  r && (r = { ...r }, gn(r, e), e = { ...r, ...e }), gn(t, e), Object.assign(t, e);
  for (const a in wr)
    t[a] == null && (t[a] = wr[a]);
  let { frequency: n, damping: i } = t;
  const { mass: s } = t;
  return b.und(n) || (n < 0.01 && (n = 0.01), i < 0 && (i = 0), t.tension = Math.pow(2 * Math.PI / n, 2) * s, t.friction = 4 * Math.PI * i * s / n), t;
}
function gn(t, e) {
  if (!b.und(e.decay))
    t.duration = void 0;
  else {
    const r = !b.und(e.tension) || !b.und(e.friction);
    (r || !b.und(e.frequency) || !b.und(e.damping) || !b.und(e.mass)) && (t.duration = void 0, t.decay = void 0), r && (t.frequency = void 0);
  }
}
var yn = [], vo = class {
  constructor() {
    this.changed = !1, this.values = yn, this.toValues = null, this.fromValues = yn, this.config = new po(), this.immediate = !1;
  }
};
function _i(t, { key: e, props: r, defaultProps: n, state: i, actions: s }) {
  return new Promise((a, c) => {
    let d, u, l = ht(r.cancel ?? (n == null ? void 0 : n.cancel), e);
    if (l)
      w();
    else {
      b.und(r.pause) || (i.paused = ht(r.pause, e));
      let T = n == null ? void 0 : n.pause;
      T !== !0 && (T = i.paused || ht(T, e)), d = We(r.delay || 0, e), T ? (i.resumeQueue.add(m), s.pause()) : (s.resume(), m());
    }
    function h() {
      i.resumeQueue.add(m), i.timeouts.delete(u), u.cancel(), d = u.time - V.now();
    }
    function m() {
      d > 0 && !Oe.skipAnimation ? (i.delayed = !0, u = V.setTimeout(w, d), i.pauseQueue.add(h), i.timeouts.add(u)) : w();
    }
    function w() {
      i.delayed && (i.delayed = !1), i.pauseQueue.delete(h), i.timeouts.delete(u), t <= (i.cancelId || 0) && (l = !0);
      try {
        s.start({ ...r, callId: t, cancel: l }, a);
      } catch (T) {
        c(T);
      }
    }
  });
}
var zr = (t, e) => e.length == 1 ? e[0] : e.some((r) => r.cancelled) ? Ze(t.get()) : e.every((r) => r.noop) ? bi(t.get()) : xe(
  t.get(),
  e.every((r) => r.finished)
), bi = (t) => ({
  value: t,
  noop: !0,
  finished: !0,
  cancelled: !1
}), xe = (t, e, r = !1) => ({
  value: t,
  finished: e,
  cancelled: r
}), Ze = (t) => ({
  value: t,
  cancelled: !0,
  finished: !1
});
function wi(t, e, r, n) {
  const { callId: i, parentId: s, onRest: a } = e, { asyncTo: c, promise: d } = r;
  return !s && t === c && !e.reset ? d : r.promise = (async () => {
    r.asyncId = i, r.asyncTo = t;
    const u = Lr(
      e,
      (R, E) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        E === "onRest" ? void 0 : R
      )
    );
    let l, h;
    const m = new Promise(
      (R, E) => (l = R, h = E)
    ), w = (R) => {
      const E = (
        // The `cancel` prop or `stop` method was used.
        i <= (r.cancelId || 0) && Ze(n) || // The async `to` prop was replaced.
        i !== r.asyncId && xe(n, !1)
      );
      if (E)
        throw R.result = E, h(R), R;
    }, T = (R, E) => {
      const O = new _n(), P = new bn();
      return (async () => {
        if (Oe.skipAnimation)
          throw St(r), P.result = xe(n, !1), h(P), P;
        w(O);
        const A = b.obj(R) ? { ...R } : { ...E, to: R };
        A.parentId = i, Ie(u, (Y, te) => {
          b.und(A[te]) && (A[te] = Y);
        });
        const _ = await n.start(A);
        return w(O), r.paused && await new Promise((Y) => {
          r.resumeQueue.add(Y);
        }), _;
      })();
    };
    let y;
    if (Oe.skipAnimation)
      return St(r), xe(n, !1);
    try {
      let R;
      b.arr(t) ? R = (async (E) => {
        for (const O of E)
          await T(O);
      })(t) : R = Promise.resolve(t(T, n.stop.bind(n))), await Promise.all([R.then(l), m]), y = xe(n.get(), !0, !1);
    } catch (R) {
      if (R instanceof _n)
        y = R.result;
      else if (R instanceof bn)
        y = R.result;
      else
        throw R;
    } finally {
      i == r.asyncId && (r.asyncId = s, r.asyncTo = s ? c : void 0, r.promise = s ? d : void 0);
    }
    return b.fun(a) && V.batchedUpdates(() => {
      a(y, n, n.item);
    }), y;
  })();
}
function St(t, e) {
  ft(t.timeouts, (r) => r.cancel()), t.pauseQueue.clear(), t.resumeQueue.clear(), t.asyncId = t.asyncTo = t.promise = void 0, e && (t.cancelId = e);
}
var _n = class extends Error {
  constructor() {
    super(
      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
    );
  }
}, bn = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
}, Er = (t) => t instanceof Ur, go = 1, Ur = class extends ai {
  constructor() {
    super(...arguments), this.id = go++, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(t) {
    this._priority != t && (this._priority = t, this._onPriorityChange(t));
  }
  /** Get the current value */
  get() {
    const t = Ce(this);
    return t && t.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...t) {
    return Oe.to(this, t);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...t) {
    return Bs(), Oe.to(this, t);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(t) {
    t == 1 && this._attach();
  }
  observerRemoved(t) {
    t == 0 && this._detach();
  }
  /** Called when the first child is added. */
  _attach() {
  }
  /** Called when the last child is removed. */
  _detach() {
  }
  /** Tell our children about our new value */
  _onChange(t, e = !1) {
    yt(this, {
      type: "change",
      parent: this,
      value: t,
      idle: e
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(t) {
    this.idle || Wt.sort(this), yt(this, {
      type: "priority",
      parent: this,
      priority: t
    });
  }
}, Ye = Symbol.for("SpringPhase"), Ei = 1, Si = 2, Ti = 4, sr = (t) => (t[Ye] & Ei) > 0, Ve = (t) => (t[Ye] & Si) > 0, st = (t) => (t[Ye] & Ti) > 0, wn = (t, e) => e ? t[Ye] |= Si | Ei : t[Ye] &= -3, En = (t, e) => e ? t[Ye] |= Ti : t[Ye] &= -5, yo = class extends Ur {
  constructor(t, e) {
    if (super(), this.animation = new vo(), this.defaultProps = {}, this._state = {
      paused: !1,
      delayed: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !b.und(t) || !b.und(e)) {
      const r = b.obj(t) ? { ...t } : { ...e, from: t };
      b.und(r.default) && (r.default = !0), this.start(r);
    }
  }
  /** Equals true when not advancing on each frame. */
  get idle() {
    return !(Ve(this) || this._state.asyncTo) || st(this);
  }
  get goal() {
    return pe(this.animation.to);
  }
  get velocity() {
    const t = Ce(this);
    return t instanceof Ot ? t.lastVelocity || 0 : t.getPayload().map((e) => e.lastVelocity || 0);
  }
  /**
   * When true, this value has been animated at least once.
   */
  get hasAnimated() {
    return sr(this);
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
    return st(this);
  }
  /**
   *
   *
   */
  get isDelayed() {
    return this._state.delayed;
  }
  /** Advance the current animation by a number of milliseconds */
  advance(t) {
    let e = !0, r = !1;
    const n = this.animation;
    let { toValues: i } = n;
    const { config: s } = n, a = Kt(n.to);
    !a && Se(n.to) && (i = ye(pe(n.to))), n.values.forEach((u, l) => {
      if (u.done)
        return;
      const h = (
        // Animated strings always go from 0 to 1.
        u.constructor == wt ? 1 : a ? a[l].lastPosition : i[l]
      );
      let m = n.immediate, w = h;
      if (!m) {
        if (w = u.lastPosition, s.tension <= 0) {
          u.done = !0;
          return;
        }
        let T = u.elapsedTime += t;
        const y = n.fromValues[l], R = u.v0 != null ? u.v0 : u.v0 = b.arr(s.velocity) ? s.velocity[l] : s.velocity;
        let E;
        const O = s.precision || (y == h ? 5e-3 : Math.min(1, Math.abs(h - y) * 1e-3));
        if (b.und(s.duration))
          if (s.decay) {
            const P = s.decay === !0 ? 0.998 : s.decay, A = Math.exp(-(1 - P) * T);
            w = y + R / (1 - P) * (1 - A), m = Math.abs(u.lastPosition - w) <= O, E = R * A;
          } else {
            E = u.lastVelocity == null ? R : u.lastVelocity;
            const P = s.restVelocity || O / 10, A = s.clamp ? 0 : s.bounce, _ = !b.und(A), Y = y == h ? u.v0 > 0 : y < h;
            let te, _e = !1;
            const re = 1, me = Math.ceil(t / re);
            for (let H = 0; H < me && (te = Math.abs(E) > P, !(!te && (m = Math.abs(h - w) <= O, m))); ++H) {
              _ && (_e = w == h || w > h == Y, _e && (E = -E * A, w = h));
              const ue = -s.tension * 1e-6 * (w - h), G = -s.friction * 1e-3 * E, se = (ue + G) / s.mass;
              E = E + se * re, w = w + E * re;
            }
          }
        else {
          let P = 1;
          s.duration > 0 && (this._memoizedDuration !== s.duration && (this._memoizedDuration = s.duration, u.durationProgress > 0 && (u.elapsedTime = s.duration * u.durationProgress, T = u.elapsedTime += t)), P = (s.progress || 0) + T / this._memoizedDuration, P = P > 1 ? 1 : P < 0 ? 0 : P, u.durationProgress = P), w = y + s.easing(P) * (h - y), E = (w - u.lastPosition) / t, m = P == 1;
        }
        u.lastVelocity = E, Number.isNaN(w) && (console.warn("Got NaN while animating:", this), m = !0);
      }
      a && !a[l].done && (m = !1), m ? u.done = !0 : e = !1, u.setValue(w, s.round) && (r = !0);
    });
    const c = Ce(this), d = c.getValue();
    if (e) {
      const u = pe(n.to);
      (d !== u || r) && !s.decay ? (c.setValue(u), this._onChange(u)) : r && s.decay && this._onChange(d), this._stop();
    } else r && this._onChange(d);
  }
  /** Set the current value, while stopping the current animation */
  set(t) {
    return V.batchedUpdates(() => {
      this._stop(), this._focus(t), this._set(t);
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
      const { to: t, config: e } = this.animation;
      V.batchedUpdates(() => {
        this._onStart(), e.decay || this._set(t, !1), this._stop();
      });
    }
    return this;
  }
  /** Push props into the pending queue. */
  update(t) {
    return (this.queue || (this.queue = [])).push(t), this;
  }
  start(t, e) {
    let r;
    return b.und(t) ? (r = this.queue || [], this.queue = []) : r = [b.obj(t) ? t : { ...e, to: t }], Promise.all(
      r.map((n) => this._update(n))
    ).then((n) => zr(this, n));
  }
  /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */
  stop(t) {
    const { to: e } = this.animation;
    return this._focus(this.get()), St(this._state, t && this._lastCallId), V.batchedUpdates(() => this._stop(e, t)), this;
  }
  /** Restart the animation. */
  reset() {
    this._update({ reset: !0 });
  }
  /** @internal */
  eventObserved(t) {
    t.type == "change" ? this._start() : t.type == "priority" && (this.priority = t.priority + 1);
  }
  /**
   * Parse the `to` and `from` range from the given `props` object.
   *
   * This also ensures the initial value is available to animated components
   * during the render phase.
   */
  _prepareNode(t) {
    const e = this.key || "";
    let { to: r, from: n } = t;
    r = b.obj(r) ? r[e] : r, (r == null || br(r)) && (r = void 0), n = b.obj(n) ? n[e] : n, n == null && (n = void 0);
    const i = { to: r, from: n };
    return sr(this) || (t.reverse && ([r, n] = [n, r]), n = pe(n), b.und(n) ? Ce(this) || this._set(r) : this._set(n)), i;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...t }, e) {
    const { key: r, defaultProps: n } = this;
    t.default && Object.assign(
      n,
      Lr(
        t,
        (a, c) => /^on/.test(c) ? vi(a, r) : a
      )
    ), Tn(this, t, "onProps"), at(this, "onProps", t, this);
    const i = this._prepareNode(t);
    if (Object.isFrozen(this))
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    const s = this._state;
    return _i(++this._lastCallId, {
      key: r,
      props: t,
      defaultProps: n,
      state: s,
      actions: {
        pause: () => {
          st(this) || (En(this, !0), ut(s.pauseQueue), at(
            this,
            "onPause",
            xe(this, ot(this, this.animation.to)),
            this
          ));
        },
        resume: () => {
          st(this) && (En(this, !1), Ve(this) && this._resume(), ut(s.resumeQueue), at(
            this,
            "onResume",
            xe(this, ot(this, this.animation.to)),
            this
          ));
        },
        start: this._merge.bind(this, i)
      }
    }).then((a) => {
      if (t.loop && a.finished && !(e && a.noop)) {
        const c = Pi(t);
        if (c)
          return this._update(c, !0);
      }
      return a;
    });
  }
  /** Merge props into the current animation */
  _merge(t, e, r) {
    if (e.cancel)
      return this.stop(!0), r(Ze(this));
    const n = !b.und(t.to), i = !b.und(t.from);
    if (n || i)
      if (e.callId > this._lastToId)
        this._lastToId = e.callId;
      else
        return r(Ze(this));
    const { key: s, defaultProps: a, animation: c } = this, { to: d, from: u } = c;
    let { to: l = d, from: h = u } = t;
    i && !n && (!e.default || b.und(l)) && (l = h), e.reverse && ([l, h] = [h, l]);
    const m = !je(h, u);
    m && (c.from = h), h = pe(h);
    const w = !je(l, d);
    w && this._focus(l);
    const T = br(e.to), { config: y } = c, { decay: R, velocity: E } = y;
    (n || i) && (y.velocity = 0), e.config && !T && mo(
      y,
      We(e.config, s),
      // Avoid calling the same "config" prop twice.
      e.config !== a.config ? We(a.config, s) : void 0
    );
    let O = Ce(this);
    if (!O || b.und(l))
      return r(xe(this, !0));
    const P = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      b.und(e.reset) ? i && !e.default : !b.und(h) && ht(e.reset, s)
    ), A = P ? h : this.get(), _ = Et(l), Y = b.num(_) || b.arr(_) || Bt(_), te = !T && (!Y || ht(a.immediate || e.immediate, s));
    if (w) {
      const H = _r(l);
      if (H !== O.constructor)
        if (te)
          O = this._set(_);
        else
          throw Error(
            `Cannot animate between ${O.constructor.name} and ${H.name}, as the "to" prop suggests`
          );
    }
    const _e = O.constructor;
    let re = Se(l), me = !1;
    if (!re) {
      const H = P || !sr(this) && m;
      (w || H) && (me = je(Et(A), _), re = !me), (!je(c.immediate, te) && !te || !je(y.decay, R) || !je(y.velocity, E)) && (re = !0);
    }
    if (me && Ve(this) && (c.changed && !P ? re = !0 : re || this._stop(d)), !T && ((re || Se(d)) && (c.values = O.getPayload(), c.toValues = Se(l) ? null : _e == wt ? [1] : ye(_)), c.immediate != te && (c.immediate = te, !te && !P && this._set(d)), re)) {
      const { onRest: H } = c;
      U(bo, (G) => Tn(this, e, G));
      const ue = xe(this, ot(this, d));
      ut(this._pendingCalls, ue), this._pendingCalls.add(r), c.changed && V.batchedUpdates(() => {
        var G;
        c.changed = !P, H == null || H(ue, this), P ? We(a.onRest, ue) : (G = c.onStart) == null || G.call(c, ue, this);
      });
    }
    P && this._set(A), T ? r(wi(e.to, e, this._state, this)) : re ? this._start() : Ve(this) && !w ? this._pendingCalls.add(r) : r(bi(A));
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(t) {
    const e = this.animation;
    t !== e.to && (fn(this) && this._detach(), e.to = t, fn(this) && this._attach());
  }
  _attach() {
    let t = 0;
    const { to: e } = this.animation;
    Se(e) && (tt(e, this), Er(e) && (t = e.priority + 1)), this.priority = t;
  }
  _detach() {
    const { to: t } = this.animation;
    Se(t) && _t(t, this);
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(t, e = !0) {
    const r = pe(t);
    if (!b.und(r)) {
      const n = Ce(this);
      if (!n || !je(r, n.getValue())) {
        const i = _r(r);
        !n || n.constructor != i ? Nr(this, i.create(r)) : n.setValue(r), n && V.batchedUpdates(() => {
          this._onChange(r, e);
        });
      }
    }
    return Ce(this);
  }
  _onStart() {
    const t = this.animation;
    t.changed || (t.changed = !0, at(
      this,
      "onStart",
      xe(this, ot(this, t.to)),
      this
    ));
  }
  _onChange(t, e) {
    e || (this._onStart(), We(this.animation.onChange, t, this)), We(this.defaultProps.onChange, t, this), super._onChange(t, e);
  }
  // This method resets the animation state (even if already animating) to
  // ensure the latest from/to range is used, and it also ensures this spring
  // is added to the frameloop.
  _start() {
    const t = this.animation;
    Ce(this).reset(pe(t.to)), t.immediate || (t.fromValues = t.values.map((e) => e.lastPosition)), Ve(this) || (wn(this, !0), st(this) || this._resume());
  }
  _resume() {
    Oe.skipAnimation ? this.finish() : Wt.start(this);
  }
  /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */
  _stop(t, e) {
    if (Ve(this)) {
      wn(this, !1);
      const r = this.animation;
      U(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), yt(this, {
        type: "idle",
        parent: this
      });
      const n = e ? Ze(this.get()) : xe(this.get(), ot(this, t ?? r.to));
      ut(this._pendingCalls, n), r.changed && (r.changed = !1, at(this, "onRest", n, this));
    }
  }
};
function ot(t, e) {
  const r = Et(e), n = Et(t.get());
  return je(n, r);
}
function Pi(t, e = t.loop, r = t.to) {
  const n = We(e);
  if (n) {
    const i = n !== !0 && yi(n), s = (i || t).reverse, a = !i || i.reset;
    return Tt({
      ...t,
      loop: e,
      // Avoid updating default props when looping.
      default: !1,
      // Never loop the `pause` prop.
      pause: void 0,
      // For the "reverse" prop to loop as expected, the "to" prop
      // must be undefined. The "reverse" prop is ignored when the
      // "to" prop is an array or function.
      to: !s || br(r) ? r : void 0,
      // Ignore the "from" prop except on reset.
      from: a ? t.from : void 0,
      reset: a,
      // The "loop" prop can return a "useSpring" props object to
      // override any of the original props.
      ...i
    });
  }
}
function Tt(t) {
  const { to: e, from: r } = t = yi(t), n = /* @__PURE__ */ new Set();
  return b.obj(e) && Sn(e, n), b.obj(r) && Sn(r, n), t.keys = n.size ? Array.from(n) : null, t;
}
function _o(t) {
  const e = Tt(t);
  return b.und(e.default) && (e.default = Lr(e)), e;
}
function Sn(t, e) {
  Ie(t, (r, n) => r != null && e.add(n));
}
var bo = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function Tn(t, e, r) {
  t.animation[r] = e[r] !== gi(e, r) ? vi(e[r], t.key) : void 0;
}
function at(t, e, ...r) {
  var n, i, s, a;
  (i = (n = t.animation)[e]) == null || i.call(n, ...r), (a = (s = t.defaultProps)[e]) == null || a.call(s, ...r);
}
var wo = ["onStart", "onChange", "onRest"], Eo = 1, So = class {
  constructor(e, r) {
    this.id = Eo++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._state = {
      paused: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    }, this._onFrame = this._onFrame.bind(this), r && (this._flush = r), e && this.start({ default: !0, ...e });
  }
  /**
   * Equals `true` when no spring values are in the frameloop, and
   * no async animation is currently active.
   */
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((e) => e.idle && !e.isDelayed && !e.isPaused);
  }
  get item() {
    return this._item;
  }
  set item(e) {
    this._item = e;
  }
  /** Get the current values of our springs */
  get() {
    const e = {};
    return this.each((r, n) => e[n] = r.get()), e;
  }
  /** Set the current values without animating. */
  set(e) {
    for (const r in e) {
      const n = e[r];
      b.und(n) || this.springs[r].set(n);
    }
  }
  /** Push an update onto the queue of each value. */
  update(e) {
    return e && this.queue.push(Tt(e)), this;
  }
  /**
   * Start the queued animations for every spring, and resolve the returned
   * promise once all queued animations have finished or been cancelled.
   *
   * When you pass a queue (instead of nothing), that queue is used instead of
   * the queued animations added with the `update` method, which are left alone.
   */
  start(e) {
    let { queue: r } = this;
    return e ? r = ye(e).map(Tt) : this.queue = [], this._flush ? this._flush(this, r) : (Ai(this, r), Sr(this, r));
  }
  /** @internal */
  stop(e, r) {
    if (e !== !!e && (r = e), r) {
      const n = this.springs;
      U(ye(r), (i) => n[i].stop(!!e));
    } else
      St(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
    return this;
  }
  /** Freeze the active animation in time */
  pause(e) {
    if (b.und(e))
      this.start({ pause: !0 });
    else {
      const r = this.springs;
      U(ye(e), (n) => r[n].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(e) {
    if (b.und(e))
      this.start({ pause: !1 });
    else {
      const r = this.springs;
      U(ye(e), (n) => r[n].resume());
    }
    return this;
  }
  /** Call a function once per spring value */
  each(e) {
    Ie(this.springs, e);
  }
  /** @internal Called at the end of every animation frame */
  _onFrame() {
    const { onStart: e, onChange: r, onRest: n } = this._events, i = this._active.size > 0, s = this._changed.size > 0;
    (i && !this._started || s && !this._started) && (this._started = !0, ft(e, ([d, u]) => {
      u.value = this.get(), d(u, this, this._item);
    }));
    const a = !i && this._started, c = s || a && n.size ? this.get() : null;
    s && r.size && ft(r, ([d, u]) => {
      u.value = c, d(u, this, this._item);
    }), a && (this._started = !1, ft(n, ([d, u]) => {
      u.value = c, d(u, this, this._item);
    }));
  }
  /** @internal */
  eventObserved(e) {
    if (e.type == "change")
      this._changed.add(e.parent), e.idle || this._active.add(e.parent);
    else if (e.type == "idle")
      this._active.delete(e.parent);
    else
      return;
    V.onFrame(this._onFrame);
  }
};
function Sr(t, e) {
  return Promise.all(e.map((r) => xi(t, r))).then(
    (r) => zr(t, r)
  );
}
async function xi(t, e, r) {
  const { keys: n, to: i, from: s, loop: a, onRest: c, onResolve: d } = e, u = b.obj(e.default) && e.default;
  a && (e.loop = !1), i === !1 && (e.to = null), s === !1 && (e.from = null);
  const l = b.arr(i) || b.fun(i) ? i : void 0;
  l ? (e.to = void 0, e.onRest = void 0, u && (u.onRest = void 0)) : U(wo, (y) => {
    const R = e[y];
    if (b.fun(R)) {
      const E = t._events[y];
      e[y] = ({ finished: O, cancelled: P }) => {
        const A = E.get(R);
        A ? (O || (A.finished = !1), P && (A.cancelled = !0)) : E.set(R, {
          value: null,
          finished: O || !1,
          cancelled: P || !1
        });
      }, u && (u[y] = e[y]);
    }
  });
  const h = t._state;
  e.pause === !h.paused ? (h.paused = e.pause, ut(e.pause ? h.pauseQueue : h.resumeQueue)) : h.paused && (e.pause = !0);
  const m = (n || Object.keys(t.springs)).map(
    (y) => t.springs[y].start(e)
  ), w = e.cancel === !0 || gi(e, "cancel") === !0;
  (l || w && h.asyncId) && m.push(
    _i(++t._lastAsyncId, {
      props: e,
      state: h,
      actions: {
        pause: gr,
        resume: gr,
        start(y, R) {
          w ? (St(h, t._lastAsyncId), R(Ze(t))) : (y.onRest = c, R(
            wi(
              l,
              y,
              h,
              t
            )
          ));
        }
      }
    })
  ), h.paused && await new Promise((y) => {
    h.resumeQueue.add(y);
  });
  const T = zr(t, await Promise.all(m));
  if (a && T.finished && !(r && T.noop)) {
    const y = Pi(e, a, i);
    if (y)
      return Ai(t, [y]), xi(t, y, !0);
  }
  return d && V.batchedUpdates(() => d(T, t, t.item)), T;
}
function Pn(t, e) {
  const r = { ...t.springs };
  return e && U(ye(e), (n) => {
    b.und(n.keys) && (n = Tt(n)), b.obj(n.to) || (n = { ...n, to: void 0 }), Ci(r, n, (i) => Oi(i));
  }), Ri(t, r), r;
}
function Ri(t, e) {
  Ie(e, (r, n) => {
    t.springs[n] || (t.springs[n] = r, tt(r, t));
  });
}
function Oi(t, e) {
  const r = new yo();
  return r.key = t, e && tt(r, e), r;
}
function Ci(t, e, r) {
  e.keys && U(e.keys, (n) => {
    (t[n] || (t[n] = r(n)))._prepareNode(e);
  });
}
function Ai(t, e) {
  U(e, (r) => {
    Ci(t.springs, r, (n) => Oi(n, t));
  });
}
var Gt = ({
  children: t,
  ...e
}) => {
  const r = Or(Lt), n = e.pause || !!r.pause, i = e.immediate || !!r.immediate;
  e = Xs(() => ({ pause: n, immediate: i }), [n, i]);
  const { Provider: s } = Lt;
  return /* @__PURE__ */ Rr.createElement(s, { value: e }, t);
}, Lt = To(Gt, {});
Gt.Provider = Lt.Provider;
Gt.Consumer = Lt.Consumer;
function To(t, e) {
  return Object.assign(t, Rr.createContext(e)), t.Provider._context = t, t.Consumer._context = t, t;
}
var Po = () => {
  const t = [], e = function(n) {
    Hs();
    const i = [];
    return U(t, (s, a) => {
      if (b.und(n))
        i.push(s.start());
      else {
        const c = r(n, s, a);
        c && i.push(s.start(c));
      }
    }), i;
  };
  e.current = t, e.add = function(n) {
    t.includes(n) || t.push(n);
  }, e.delete = function(n) {
    const i = t.indexOf(n);
    ~i && t.splice(i, 1);
  }, e.pause = function() {
    return U(t, (n) => n.pause(...arguments)), this;
  }, e.resume = function() {
    return U(t, (n) => n.resume(...arguments)), this;
  }, e.set = function(n) {
    U(t, (i, s) => {
      const a = b.fun(n) ? n(s, i) : n;
      a && i.set(a);
    });
  }, e.start = function(n) {
    const i = [];
    return U(t, (s, a) => {
      if (b.und(n))
        i.push(s.start());
      else {
        const c = this._getProps(n, s, a);
        c && i.push(s.start(c));
      }
    }), i;
  }, e.stop = function() {
    return U(t, (n) => n.stop(...arguments)), this;
  }, e.update = function(n) {
    return U(t, (i, s) => i.update(this._getProps(n, i, s))), this;
  };
  const r = function(n, i, s) {
    return b.fun(n) ? n(s, i) : n;
  };
  return e._getProps = r, e;
};
function xo(t, e, r) {
  const n = b.fun(e) && e;
  n && !r && (r = []);
  const i = ct(
    () => n || arguments.length == 3 ? Po() : void 0,
    []
  ), s = he(0), a = di(), c = ct(
    () => ({
      ctrls: [],
      queue: [],
      flush(E, O) {
        const P = Pn(E, O);
        return s.current > 0 && !c.queue.length && !Object.keys(P).some((_) => !E.springs[_]) ? Sr(E, O) : new Promise((_) => {
          Ri(E, P), c.queue.push(() => {
            _(Sr(E, O));
          }), a();
        });
      }
    }),
    []
  ), d = he([...c.ctrls]), u = [], l = hn(t) || 0;
  ct(() => {
    U(d.current.slice(t, l), (E) => {
      lo(E, i), E.stop(!0);
    }), d.current.length = t, h(l, t);
  }, [t]), ct(() => {
    h(0, Math.min(l, t));
  }, r);
  function h(E, O) {
    for (let P = E; P < O; P++) {
      const A = d.current[P] || (d.current[P] = new So(null, c.flush)), _ = n ? n(P, A) : e[P];
      _ && (u[P] = _o(_));
    }
  }
  const m = d.current.map((E, O) => Pn(E, u[O])), w = Or(Gt), T = hn(w), y = w !== T && uo(w);
  Fr(() => {
    s.current++, c.ctrls = d.current;
    const { queue: E } = c;
    E.length && (c.queue = [], U(E, (O) => O())), U(d.current, (O, P) => {
      i == null || i.add(O), y && O.start({ default: w });
      const A = u[P];
      A && (fo(O, A.ref), O.ref ? O.queue.push(A) : O.start(A));
    });
  }), hi(() => () => {
    U(c.ctrls, (E) => E.stop(!0));
  });
  const R = m.map((E) => ({ ...E }));
  return i ? [R, i] : R;
}
function Ro(t, e) {
  const r = b.fun(t), [[n], i] = xo(
    1,
    r ? t : [t],
    r ? [] : e
  );
  return r || arguments.length == 2 ? [n, i] : n;
}
var Oo = class extends Ur {
  constructor(t, e) {
    super(), this.source = t, this.idle = !0, this._active = /* @__PURE__ */ new Set(), this.calc = vt(...e);
    const r = this._get(), n = _r(r);
    Nr(this, n.create(r));
  }
  advance(t) {
    const e = this._get(), r = this.get();
    je(e, r) || (Ce(this).setValue(e), this._onChange(e, this.idle)), !this.idle && xn(this._active) && or(this);
  }
  _get() {
    const t = b.arr(this.source) ? this.source.map(pe) : ye(pe(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !xn(this._active) && (this.idle = !1, U(Kt(this), (t) => {
      t.done = !1;
    }), Oe.skipAnimation ? (V.batchedUpdates(() => this.advance()), or(this)) : Wt.start(this));
  }
  // Observe our sources only when we're observed.
  _attach() {
    let t = 1;
    U(ye(this.source), (e) => {
      Se(e) && tt(e, this), Er(e) && (e.idle || this._active.add(e), t = Math.max(t, e.priority + 1));
    }), this.priority = t, this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    U(ye(this.source), (t) => {
      Se(t) && _t(t, this);
    }), this._active.clear(), or(this);
  }
  /** @internal */
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = ye(this.source).reduce(
      (e, r) => Math.max(e, (Er(r) ? r.priority : 0) + 1),
      0
    ));
  }
};
function Co(t) {
  return t.idle !== !1;
}
function xn(t) {
  return !t.size || Array.from(t).every(Co);
}
function or(t) {
  t.idle || (t.idle = !0, U(Kt(t), (e) => {
    e.done = !0;
  }), yt(t, {
    type: "idle",
    parent: t
  }));
}
Oe.assign({
  createStringInterpolator: li,
  to: (t, e) => new Oo(t, e)
});
var Ii = /^--/;
function Ao(t, e) {
  return e == null || typeof e == "boolean" || e === "" ? "" : typeof e == "number" && e !== 0 && !Ii.test(t) && !(pt.hasOwnProperty(t) && pt[t]) ? e + "px" : ("" + e).trim();
}
var Rn = {};
function Io(t, e) {
  if (!t.nodeType || !t.setAttribute)
    return !1;
  const r = t.nodeName === "filter" || t.parentNode && t.parentNode.nodeName === "filter", {
    className: n,
    style: i,
    children: s,
    scrollTop: a,
    scrollLeft: c,
    viewBox: d,
    ...u
  } = e, l = Object.values(u), h = Object.keys(u).map(
    (m) => r || t.hasAttribute(m) ? m : Rn[m] || (Rn[m] = m.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (w) => "-" + w.toLowerCase()
    ))
  );
  s !== void 0 && (t.textContent = s);
  for (const m in i)
    if (i.hasOwnProperty(m)) {
      const w = Ao(m, i[m]);
      Ii.test(m) ? t.style.setProperty(m, w) : t.style[m] = w;
    }
  h.forEach((m, w) => {
    t.setAttribute(m, l[w]);
  }), n !== void 0 && (t.className = n), a !== void 0 && (t.scrollTop = a), c !== void 0 && (t.scrollLeft = c), d !== void 0 && t.setAttribute("viewBox", d);
}
var pt = {
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
}, ko = (t, e) => t + e.charAt(0).toUpperCase() + e.substring(1), Do = ["Webkit", "Ms", "Moz", "O"];
pt = Object.keys(pt).reduce((t, e) => (Do.forEach((r) => t[ko(r, e)] = t[e]), t), pt);
var jo = /^(matrix|translate|scale|rotate|skew)/, Mo = /^(translate)/, Vo = /^(rotate|skew)/, ar = (t, e) => b.num(t) && t !== 0 ? t + e : t, Mt = (t, e) => b.arr(t) ? t.every((r) => Mt(r, e)) : b.num(t) ? t === e : parseFloat(t) === e, $o = class extends Ht {
  constructor({ x: t, y: e, z: r, ...n }) {
    const i = [], s = [];
    (t || e || r) && (i.push([t || 0, e || 0, r || 0]), s.push((a) => [
      `translate3d(${a.map((c) => ar(c, "px")).join(",")})`,
      // prettier-ignore
      Mt(a, 0)
    ])), Ie(n, (a, c) => {
      if (c === "transform")
        i.push([a || ""]), s.push((d) => [d, d === ""]);
      else if (jo.test(c)) {
        if (delete n[c], b.und(a))
          return;
        const d = Mo.test(c) ? "px" : Vo.test(c) ? "deg" : "";
        i.push(ye(a)), s.push(
          c === "rotate3d" ? ([u, l, h, m]) => [
            `rotate3d(${u},${l},${h},${ar(m, d)})`,
            Mt(m, 0)
          ] : (u) => [
            `${c}(${u.map((l) => ar(l, d)).join(",")})`,
            Mt(u, c.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    }), i.length && (n.transform = new Fo(i, s)), super(n);
  }
}, Fo = class extends ai {
  constructor(t, e) {
    super(), this.inputs = t, this.transforms = e, this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let t = "", e = !0;
    return U(this.inputs, (r, n) => {
      const i = pe(r[0]), [s, a] = this.transforms[n](
        b.arr(i) ? i : r.map(pe)
      );
      t += " " + s, e = e && a;
    }), e ? "none" : t;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(t) {
    t == 1 && U(
      this.inputs,
      (e) => U(
        e,
        (r) => Se(r) && tt(r, this)
      )
    );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(t) {
    t == 0 && U(
      this.inputs,
      (e) => U(
        e,
        (r) => Se(r) && _t(r, this)
      )
    );
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), yt(this, t);
  }
}, No = [
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
Oe.assign({
  batchedUpdates: ms,
  createStringInterpolator: li,
  colors: xs
});
var Lo = io(No, {
  applyAnimatedValues: Io,
  createAnimatedStyle: (t) => new $o(t),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop: t, scrollLeft: e, ...r }) => r
}), zo = Lo.animated;
function Uo(t, e, r) {
  return Math.max(e, Math.min(t, r));
}
const J = {
  toVector(t, e) {
    return t === void 0 && (t = e), Array.isArray(t) ? t : [t, t];
  },
  add(t, e) {
    return [t[0] + e[0], t[1] + e[1]];
  },
  sub(t, e) {
    return [t[0] - e[0], t[1] - e[1]];
  },
  addTo(t, e) {
    t[0] += e[0], t[1] += e[1];
  },
  subTo(t, e) {
    t[0] -= e[0], t[1] -= e[1];
  }
};
function On(t, e, r) {
  return e === 0 || Math.abs(e) === 1 / 0 ? Math.pow(t, r * 5) : t * e * r / (e + r * t);
}
function Cn(t, e, r, n = 0.15) {
  return n === 0 ? Uo(t, e, r) : t < e ? -On(e - t, r - e, n) + e : t > r ? +On(t - r, r - e, n) + r : t;
}
function Wo(t, [e, r], [n, i]) {
  const [[s, a], [c, d]] = t;
  return [Cn(e, s, a, n), Cn(r, c, d, i)];
}
function Yo(t, e) {
  if (typeof t != "object" || t === null) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function qo(t) {
  var e = Yo(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
function ae(t, e, r) {
  return e = qo(e), e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function An(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ee(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? An(Object(r), !0).forEach(function(n) {
      ae(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : An(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
const ki = {
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
function In(t) {
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}
const Bo = ["enter", "leave"];
function Ko(t = !1, e) {
  return t && !Bo.includes(e);
}
function Ho(t, e = "", r = !1) {
  const n = ki[t], i = n && n[e] || e;
  return "on" + In(t) + In(i) + (Ko(r, i) ? "Capture" : "");
}
const Go = ["gotpointercapture", "lostpointercapture"];
function Xo(t) {
  let e = t.substring(2).toLowerCase();
  const r = !!~e.indexOf("passive");
  r && (e = e.replace("passive", ""));
  const n = Go.includes(e) ? "capturecapture" : "capture", i = !!~e.indexOf(n);
  return i && (e = e.replace("capture", "")), {
    device: e,
    capture: i,
    passive: r
  };
}
function Qo(t, e = "") {
  const r = ki[t], n = r && r[e] || e;
  return t + n;
}
function Xt(t) {
  return "touches" in t;
}
function Di(t) {
  return Xt(t) ? "touch" : "pointerType" in t ? t.pointerType : "mouse";
}
function Zo(t) {
  return Array.from(t.touches).filter((e) => {
    var r, n;
    return e.target === t.currentTarget || ((r = t.currentTarget) === null || r === void 0 || (n = r.contains) === null || n === void 0 ? void 0 : n.call(r, e.target));
  });
}
function Jo(t) {
  return t.type === "touchend" || t.type === "touchcancel" ? t.changedTouches : t.targetTouches;
}
function ji(t) {
  return Xt(t) ? Jo(t)[0] : t;
}
function Tr(t, e) {
  try {
    const r = e.clientX - t.clientX, n = e.clientY - t.clientY, i = (e.clientX + t.clientX) / 2, s = (e.clientY + t.clientY) / 2, a = Math.hypot(r, n);
    return {
      angle: -(Math.atan2(r, n) * 180) / Math.PI,
      distance: a,
      origin: [i, s]
    };
  } catch {
  }
  return null;
}
function ea(t) {
  return Zo(t).map((e) => e.identifier);
}
function kn(t, e) {
  const [r, n] = Array.from(t.touches).filter((i) => e.includes(i.identifier));
  return Tr(r, n);
}
function cr(t) {
  const e = ji(t);
  return Xt(t) ? e.identifier : e.pointerId;
}
function et(t) {
  const e = ji(t);
  return [e.clientX, e.clientY];
}
const Dn = 40, jn = 800;
function Mi(t) {
  let {
    deltaX: e,
    deltaY: r,
    deltaMode: n
  } = t;
  return n === 1 ? (e *= Dn, r *= Dn) : n === 2 && (e *= jn, r *= jn), [e, r];
}
function ta(t) {
  var e, r;
  const {
    scrollX: n,
    scrollY: i,
    scrollLeft: s,
    scrollTop: a
  } = t.currentTarget;
  return [(e = n ?? s) !== null && e !== void 0 ? e : 0, (r = i ?? a) !== null && r !== void 0 ? r : 0];
}
function ra(t) {
  const e = {};
  if ("buttons" in t && (e.buttons = t.buttons), "shiftKey" in t) {
    const {
      shiftKey: r,
      altKey: n,
      metaKey: i,
      ctrlKey: s
    } = t;
    Object.assign(e, {
      shiftKey: r,
      altKey: n,
      metaKey: i,
      ctrlKey: s
    });
  }
  return e;
}
function zt(t, ...e) {
  return typeof t == "function" ? t(...e) : t;
}
function na() {
}
function ia(...t) {
  return t.length === 0 ? na : t.length === 1 ? t[0] : function() {
    let e;
    for (const r of t)
      e = r.apply(this, arguments) || e;
    return e;
  };
}
function Mn(t, e) {
  return Object.assign({}, e, t || {});
}
const sa = 32;
class Vi {
  constructor(e, r, n) {
    this.ctrl = e, this.args = r, this.key = n, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset());
  }
  get state() {
    return this.ctrl.state[this.key];
  }
  set state(e) {
    this.ctrl.state[this.key] = e;
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
      state: e,
      shared: r,
      ingKey: n,
      args: i
    } = this;
    r[n] = e._active = e.active = e._blocked = e._force = !1, e._step = [!1, !1], e.intentional = !1, e._movement = [0, 0], e._distance = [0, 0], e._direction = [0, 0], e._delta = [0, 0], e._bounds = [[-1 / 0, 1 / 0], [-1 / 0, 1 / 0]], e.args = i, e.axis = void 0, e.memo = void 0, e.elapsedTime = e.timeDelta = 0, e.direction = [0, 0], e.distance = [0, 0], e.overflow = [0, 0], e._movementBound = [!1, !1], e.velocity = [0, 0], e.movement = [0, 0], e.delta = [0, 0], e.timeStamp = 0;
  }
  start(e) {
    const r = this.state, n = this.config;
    r._active || (this.reset(), this.computeInitial(), r._active = !0, r.target = e.target, r.currentTarget = e.currentTarget, r.lastOffset = n.from ? zt(n.from, r) : r.offset, r.offset = r.lastOffset, r.startTime = r.timeStamp = e.timeStamp);
  }
  computeValues(e) {
    const r = this.state;
    r._values = e, r.values = this.config.transform(e);
  }
  computeInitial() {
    const e = this.state;
    e._initial = e._values, e.initial = e.values;
  }
  compute(e) {
    const {
      state: r,
      config: n,
      shared: i
    } = this;
    r.args = this.args;
    let s = 0;
    if (e && (r.event = e, n.preventDefault && e.cancelable && r.event.preventDefault(), r.type = e.type, i.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, i.locked = !!document.pointerLockElement, Object.assign(i, ra(e)), i.down = i.pressed = i.buttons % 2 === 1 || i.touches > 0, s = e.timeStamp - r.timeStamp, r.timeStamp = e.timeStamp, r.elapsedTime = r.timeStamp - r.startTime), r._active) {
      const Y = r._delta.map(Math.abs);
      J.addTo(r._distance, Y);
    }
    this.axisIntent && this.axisIntent(e);
    const [a, c] = r._movement, [d, u] = n.threshold, {
      _step: l,
      values: h
    } = r;
    if (n.hasCustomTransform ? (l[0] === !1 && (l[0] = Math.abs(a) >= d && h[0]), l[1] === !1 && (l[1] = Math.abs(c) >= u && h[1])) : (l[0] === !1 && (l[0] = Math.abs(a) >= d && Math.sign(a) * d), l[1] === !1 && (l[1] = Math.abs(c) >= u && Math.sign(c) * u)), r.intentional = l[0] !== !1 || l[1] !== !1, !r.intentional) return;
    const m = [0, 0];
    if (n.hasCustomTransform) {
      const [Y, te] = h;
      m[0] = l[0] !== !1 ? Y - l[0] : 0, m[1] = l[1] !== !1 ? te - l[1] : 0;
    } else
      m[0] = l[0] !== !1 ? a - l[0] : 0, m[1] = l[1] !== !1 ? c - l[1] : 0;
    this.restrictToAxis && !r._blocked && this.restrictToAxis(m);
    const w = r.offset, T = r._active && !r._blocked || r.active;
    T && (r.first = r._active && !r.active, r.last = !r._active && r.active, r.active = i[this.ingKey] = r._active, e && (r.first && ("bounds" in n && (r._bounds = zt(n.bounds, r)), this.setup && this.setup()), r.movement = m, this.computeOffset()));
    const [y, R] = r.offset, [[E, O], [P, A]] = r._bounds;
    r.overflow = [y < E ? -1 : y > O ? 1 : 0, R < P ? -1 : R > A ? 1 : 0], r._movementBound[0] = r.overflow[0] ? r._movementBound[0] === !1 ? r._movement[0] : r._movementBound[0] : !1, r._movementBound[1] = r.overflow[1] ? r._movementBound[1] === !1 ? r._movement[1] : r._movementBound[1] : !1;
    const _ = r._active ? n.rubberband || [0, 0] : [0, 0];
    if (r.offset = Wo(r._bounds, r.offset, _), r.delta = J.sub(r.offset, w), this.computeMovement(), T && (!r.last || s > sa)) {
      r.delta = J.sub(r.offset, w);
      const Y = r.delta.map(Math.abs);
      J.addTo(r.distance, Y), r.direction = r.delta.map(Math.sign), r._direction = r._delta.map(Math.sign), !r.first && s > 0 && (r.velocity = [Y[0] / s, Y[1] / s], r.timeDelta = s);
    }
  }
  emit() {
    const e = this.state, r = this.shared, n = this.config;
    if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents) return;
    const i = this.handler(ee(ee(ee({}, r), e), {}, {
      [this.aliasKey]: e.values
    }));
    i !== void 0 && (e.memo = i);
  }
  clean() {
    this.eventStore.clean(), this.timeoutStore.clean();
  }
}
function oa([t, e], r) {
  const n = Math.abs(t), i = Math.abs(e);
  if (n > i && n > r)
    return "x";
  if (i > n && i > r)
    return "y";
}
class Ct extends Vi {
  constructor(...e) {
    super(...e), ae(this, "aliasKey", "xy");
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
  axisIntent(e) {
    const r = this.state, n = this.config;
    if (!r.axis && e) {
      const i = typeof n.axisThreshold == "object" ? n.axisThreshold[Di(e)] : n.axisThreshold;
      r.axis = oa(r._movement, i);
    }
    r._blocked = (n.lockDirection || !!n.axis) && !r.axis || !!n.axis && n.axis !== r.axis;
  }
  restrictToAxis(e) {
    if (this.config.axis || this.config.lockDirection)
      switch (this.state.axis) {
        case "x":
          e[1] = 0;
          break;
        case "y":
          e[0] = 0;
          break;
      }
  }
}
const Vn = (t) => t, $n = 0.15, Wr = {
  enabled(t = !0) {
    return t;
  },
  eventOptions(t, e, r) {
    return ee(ee({}, r.shared.eventOptions), t);
  },
  preventDefault(t = !1) {
    return t;
  },
  triggerAllEvents(t = !1) {
    return t;
  },
  rubberband(t = 0) {
    switch (t) {
      case !0:
        return [$n, $n];
      case !1:
        return [0, 0];
      default:
        return J.toVector(t);
    }
  },
  from(t) {
    if (typeof t == "function") return t;
    if (t != null) return J.toVector(t);
  },
  transform(t, e, r) {
    const n = t || r.shared.transform;
    if (this.hasCustomTransform = !!n, process.env.NODE_ENV === "development") {
      const i = n || Vn;
      return (s) => {
        const a = i(s);
        return (!isFinite(a[0]) || !isFinite(a[1])) && console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${a[0]},${[1]}]`), a;
      };
    }
    return n || Vn;
  },
  threshold(t) {
    return J.toVector(t, 0);
  }
};
process.env.NODE_ENV === "development" && Object.assign(Wr, {
  domTarget(t) {
    if (t !== void 0)
      throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
    return NaN;
  },
  lockDirection(t) {
    if (t !== void 0)
      throw Error("[@use-gesture]: `lockDirection` option has been merged with `axis`. Use it as in `{ axis: 'lock' }`");
    return NaN;
  },
  initial(t) {
    if (t !== void 0)
      throw Error("[@use-gesture]: `initial` option has been renamed to `from`.");
    return NaN;
  }
});
const aa = 0, qe = ee(ee({}, Wr), {}, {
  axis(t, e, {
    axis: r
  }) {
    if (this.lockDirection = r === "lock", !this.lockDirection) return r;
  },
  axisThreshold(t = aa) {
    return t;
  },
  bounds(t = {}) {
    if (typeof t == "function")
      return (s) => qe.bounds(t(s));
    if ("current" in t)
      return () => t.current;
    if (typeof HTMLElement == "function" && t instanceof HTMLElement)
      return t;
    const {
      left: e = -1 / 0,
      right: r = 1 / 0,
      top: n = -1 / 0,
      bottom: i = 1 / 0
    } = t;
    return [[e, r], [n, i]];
  }
}), Fn = {
  ArrowRight: (t, e = 1) => [t * e, 0],
  ArrowLeft: (t, e = 1) => [-1 * t * e, 0],
  ArrowUp: (t, e = 1) => [0, -1 * t * e],
  ArrowDown: (t, e = 1) => [0, t * e]
};
class ca extends Ct {
  constructor(...e) {
    super(...e), ae(this, "ingKey", "dragging");
  }
  reset() {
    super.reset();
    const e = this.state;
    e._pointerId = void 0, e._pointerActive = !1, e._keyboardActive = !1, e._preventScroll = !1, e._delayed = !1, e.swipe = [0, 0], e.tap = !1, e.canceled = !1, e.cancel = this.cancel.bind(this);
  }
  setup() {
    const e = this.state;
    if (e._bounds instanceof HTMLElement) {
      const r = e._bounds.getBoundingClientRect(), n = e.currentTarget.getBoundingClientRect(), i = {
        left: r.left - n.left + e.offset[0],
        right: r.right - n.right + e.offset[0],
        top: r.top - n.top + e.offset[1],
        bottom: r.bottom - n.bottom + e.offset[1]
      };
      e._bounds = qe.bounds(i);
    }
  }
  cancel() {
    const e = this.state;
    e.canceled || (e.canceled = !0, e._active = !1, setTimeout(() => {
      this.compute(), this.emit();
    }, 0));
  }
  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive;
  }
  clean() {
    this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean();
  }
  pointerDown(e) {
    const r = this.config, n = this.state;
    if (e.buttons != null && (Array.isArray(r.pointerButtons) ? !r.pointerButtons.includes(e.buttons) : r.pointerButtons !== -1 && r.pointerButtons !== e.buttons)) return;
    const i = this.ctrl.setEventIds(e);
    r.pointerCapture && e.target.setPointerCapture(e.pointerId), !(i && i.size > 1 && n._pointerActive) && (this.start(e), this.setupPointer(e), n._pointerId = cr(e), n._pointerActive = !0, this.computeValues(et(e)), this.computeInitial(), r.preventScrollAxis && Di(e) !== "mouse" ? (n._active = !1, this.setupScrollPrevention(e)) : r.delay > 0 ? (this.setupDelayTrigger(e), r.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e));
  }
  startPointerDrag(e) {
    const r = this.state;
    r._active = !0, r._preventScroll = !0, r._delayed = !1, this.compute(e), this.emit();
  }
  pointerMove(e) {
    const r = this.state, n = this.config;
    if (!r._pointerActive) return;
    const i = cr(e);
    if (r._pointerId !== void 0 && i !== r._pointerId) return;
    const s = et(e);
    if (document.pointerLockElement === e.target ? r._delta = [e.movementX, e.movementY] : (r._delta = J.sub(s, r._values), this.computeValues(s)), J.addTo(r._movement, r._delta), this.compute(e), r._delayed && r.intentional) {
      this.timeoutStore.remove("dragDelay"), r.active = !1, this.startPointerDrag(e);
      return;
    }
    if (n.preventScrollAxis && !r._preventScroll)
      if (r.axis)
        if (r.axis === n.preventScrollAxis || n.preventScrollAxis === "xy") {
          r._active = !1, this.clean();
          return;
        } else {
          this.timeoutStore.remove("startPointerDrag"), this.startPointerDrag(e);
          return;
        }
      else
        return;
    this.emit();
  }
  pointerUp(e) {
    this.ctrl.setEventIds(e);
    try {
      this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId);
    } catch {
      process.env.NODE_ENV === "development" && console.warn("[@use-gesture]: If you see this message, it's likely that you're using an outdated version of `@react-three/fiber`. \n\nPlease upgrade to the latest version.");
    }
    const r = this.state, n = this.config;
    if (!r._active || !r._pointerActive) return;
    const i = cr(e);
    if (r._pointerId !== void 0 && i !== r._pointerId) return;
    this.state._pointerActive = !1, this.setActive(), this.compute(e);
    const [s, a] = r._distance;
    if (r.tap = s <= n.tapsThreshold && a <= n.tapsThreshold, r.tap && n.filterTaps)
      r._force = !0;
    else {
      const [c, d] = r._delta, [u, l] = r._movement, [h, m] = n.swipe.velocity, [w, T] = n.swipe.distance, y = n.swipe.duration;
      if (r.elapsedTime < y) {
        const R = Math.abs(c / r.timeDelta), E = Math.abs(d / r.timeDelta);
        R > h && Math.abs(u) > w && (r.swipe[0] = Math.sign(c)), E > m && Math.abs(l) > T && (r.swipe[1] = Math.sign(d));
      }
    }
    this.emit();
  }
  pointerClick(e) {
    !this.state.tap && e.detail > 0 && (e.preventDefault(), e.stopPropagation());
  }
  setupPointer(e) {
    const r = this.config, n = r.device;
    if (process.env.NODE_ENV === "development")
      try {
        if (n === "pointer" && r.preventScrollDelay === void 0) {
          const i = "uv" in e ? e.sourceEvent.currentTarget : e.currentTarget;
          window.getComputedStyle(i).touchAction === "auto" && console.warn("[@use-gesture]: The drag target has its `touch-action` style property set to `auto`. It is recommended to add `touch-action: 'none'` so that the drag gesture behaves correctly on touch-enabled devices. For more information read this: https://use-gesture.netlify.app/docs/extras/#touch-action.\n\nThis message will only show in development mode. It won't appear in production. If this is intended, you can ignore it.", i);
        }
      } catch {
      }
    r.pointerLock && e.currentTarget.requestPointerLock(), r.pointerCapture || (this.eventStore.add(this.sharedConfig.window, n, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "cancel", this.pointerUp.bind(this)));
  }
  pointerClean() {
    this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock();
  }
  preventScroll(e) {
    this.state._preventScroll && e.cancelable && e.preventDefault();
  }
  setupScrollPrevention(e) {
    this.state._preventScroll = !1, ua(e);
    const r = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
      passive: !1
    });
    this.eventStore.add(this.sharedConfig.window, "touch", "end", r), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", r), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, e);
  }
  setupDelayTrigger(e) {
    this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
      this.state._step = [0, 0], this.startPointerDrag(e);
    }, this.config.delay);
  }
  keyDown(e) {
    const r = Fn[e.key];
    if (r) {
      const n = this.state, i = e.shiftKey ? 10 : e.altKey ? 0.1 : 1;
      this.start(e), n._delta = r(this.config.keyboardDisplacement, i), n._keyboardActive = !0, J.addTo(n._movement, n._delta), this.compute(e), this.emit();
    }
  }
  keyUp(e) {
    e.key in Fn && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit());
  }
  bind(e) {
    const r = this.config.device;
    e(r, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(r, "change", this.pointerMove.bind(this)), e(r, "end", this.pointerUp.bind(this)), e(r, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
      capture: !0,
      passive: !1
    });
  }
}
function ua(t) {
  "persist" in t && typeof t.persist == "function" && t.persist();
}
const At = typeof window < "u" && window.document && window.document.createElement;
function $i() {
  return At && "ontouchstart" in window;
}
function la() {
  return $i() || At && window.navigator.maxTouchPoints > 1;
}
function fa() {
  return At && "onpointerdown" in window;
}
function da() {
  return At && "exitPointerLock" in window.document;
}
function ha() {
  try {
    return "constructor" in GestureEvent;
  } catch {
    return !1;
  }
}
const Te = {
  isBrowser: At,
  gesture: ha(),
  touch: $i(),
  touchscreen: la(),
  pointer: fa(),
  pointerLock: da()
}, pa = 250, ma = 180, va = 0.5, ga = 50, ya = 250, _a = 10, Nn = {
  mouse: 0,
  touch: 0,
  pen: 8
}, Fi = ee(ee({}, qe), {}, {
  device(t, e, {
    pointer: {
      touch: r = !1,
      lock: n = !1,
      mouse: i = !1
    } = {}
  }) {
    return this.pointerLock = n && Te.pointerLock, Te.touch && r ? "touch" : this.pointerLock ? "mouse" : Te.pointer && !i ? "pointer" : Te.touch ? "touch" : "mouse";
  },
  preventScrollAxis(t, e, {
    preventScroll: r
  }) {
    if (this.preventScrollDelay = typeof r == "number" ? r : r || r === void 0 && t ? pa : void 0, !(!Te.touchscreen || r === !1))
      return t || (r !== void 0 ? "y" : void 0);
  },
  pointerCapture(t, e, {
    pointer: {
      capture: r = !0,
      buttons: n = 1,
      keys: i = !0
    } = {}
  }) {
    return this.pointerButtons = n, this.keys = i, !this.pointerLock && this.device === "pointer" && r;
  },
  threshold(t, e, {
    filterTaps: r = !1,
    tapsThreshold: n = 3,
    axis: i = void 0
  }) {
    const s = J.toVector(t, r ? n : i ? 1 : 0);
    return this.filterTaps = r, this.tapsThreshold = n, s;
  },
  swipe({
    velocity: t = va,
    distance: e = ga,
    duration: r = ya
  } = {}) {
    return {
      velocity: this.transform(J.toVector(t)),
      distance: this.transform(J.toVector(e)),
      duration: r
    };
  },
  delay(t = 0) {
    switch (t) {
      case !0:
        return ma;
      case !1:
        return 0;
      default:
        return t;
    }
  },
  axisThreshold(t) {
    return t ? ee(ee({}, Nn), t) : Nn;
  },
  keyboardDisplacement(t = _a) {
    return t;
  }
});
process.env.NODE_ENV === "development" && Object.assign(Fi, {
  useTouch(t) {
    if (t !== void 0)
      throw Error("[@use-gesture]: `useTouch` option has been renamed to `pointer.touch`. Use it as in `{ pointer: { touch: true } }`.");
    return NaN;
  },
  experimental_preventWindowScrollY(t) {
    if (t !== void 0)
      throw Error("[@use-gesture]: `experimental_preventWindowScrollY` option has been renamed to `preventScroll`.");
    return NaN;
  },
  swipeVelocity(t) {
    if (t !== void 0)
      throw Error("[@use-gesture]: `swipeVelocity` option has been renamed to `swipe.velocity`. Use it as in `{ swipe: { velocity: 0.5 } }`.");
    return NaN;
  },
  swipeDistance(t) {
    if (t !== void 0)
      throw Error("[@use-gesture]: `swipeDistance` option has been renamed to `swipe.distance`. Use it as in `{ swipe: { distance: 50 } }`.");
    return NaN;
  },
  swipeDuration(t) {
    if (t !== void 0)
      throw Error("[@use-gesture]: `swipeDuration` option has been renamed to `swipe.duration`. Use it as in `{ swipe: { duration: 250 } }`.");
    return NaN;
  }
});
function Ni(t) {
  const [e, r] = t.overflow, [n, i] = t._delta, [s, a] = t._direction;
  (e < 0 && n > 0 && s < 0 || e > 0 && n < 0 && s > 0) && (t._movement[0] = t._movementBound[0]), (r < 0 && i > 0 && a < 0 || r > 0 && i < 0 && a > 0) && (t._movement[1] = t._movementBound[1]);
}
const ba = 30, wa = 100;
class Ea extends Vi {
  constructor(...e) {
    super(...e), ae(this, "ingKey", "pinching"), ae(this, "aliasKey", "da");
  }
  init() {
    this.state.offset = [1, 0], this.state.lastOffset = [1, 0], this.state._pointerEvents = /* @__PURE__ */ new Map();
  }
  reset() {
    super.reset();
    const e = this.state;
    e._touchIds = [], e.canceled = !1, e.cancel = this.cancel.bind(this), e.turns = 0;
  }
  computeOffset() {
    const {
      type: e,
      movement: r,
      lastOffset: n
    } = this.state;
    e === "wheel" ? this.state.offset = J.add(r, n) : this.state.offset = [(1 + r[0]) * n[0], r[1] + n[1]];
  }
  computeMovement() {
    const {
      offset: e,
      lastOffset: r
    } = this.state;
    this.state.movement = [e[0] / r[0], e[1] - r[1]];
  }
  axisIntent() {
    const e = this.state, [r, n] = e._movement;
    if (!e.axis) {
      const i = Math.abs(r) * ba - Math.abs(n);
      i < 0 ? e.axis = "angle" : i > 0 && (e.axis = "scale");
    }
  }
  restrictToAxis(e) {
    this.config.lockDirection && (this.state.axis === "scale" ? e[1] = 0 : this.state.axis === "angle" && (e[0] = 0));
  }
  cancel() {
    const e = this.state;
    e.canceled || setTimeout(() => {
      e.canceled = !0, e._active = !1, this.compute(), this.emit();
    }, 0);
  }
  touchStart(e) {
    this.ctrl.setEventIds(e);
    const r = this.state, n = this.ctrl.touchIds;
    if (r._active && r._touchIds.every((s) => n.has(s)) || n.size < 2) return;
    this.start(e), r._touchIds = Array.from(n).slice(0, 2);
    const i = kn(e, r._touchIds);
    i && this.pinchStart(e, i);
  }
  pointerStart(e) {
    if (e.buttons != null && e.buttons % 2 !== 1) return;
    this.ctrl.setEventIds(e), e.target.setPointerCapture(e.pointerId);
    const r = this.state, n = r._pointerEvents, i = this.ctrl.pointerIds;
    if (r._active && Array.from(n.keys()).every((a) => i.has(a)) || (n.size < 2 && n.set(e.pointerId, e), r._pointerEvents.size < 2)) return;
    this.start(e);
    const s = Tr(...Array.from(n.values()));
    s && this.pinchStart(e, s);
  }
  pinchStart(e, r) {
    const n = this.state;
    n.origin = r.origin, this.computeValues([r.distance, r.angle]), this.computeInitial(), this.compute(e), this.emit();
  }
  touchMove(e) {
    if (!this.state._active) return;
    const r = kn(e, this.state._touchIds);
    r && this.pinchMove(e, r);
  }
  pointerMove(e) {
    const r = this.state._pointerEvents;
    if (r.has(e.pointerId) && r.set(e.pointerId, e), !this.state._active) return;
    const n = Tr(...Array.from(r.values()));
    n && this.pinchMove(e, n);
  }
  pinchMove(e, r) {
    const n = this.state, i = n._values[1], s = r.angle - i;
    let a = 0;
    Math.abs(s) > 270 && (a += Math.sign(s)), this.computeValues([r.distance, r.angle - 360 * a]), n.origin = r.origin, n.turns = a, n._movement = [n._values[0] / n._initial[0] - 1, n._values[1] - n._initial[1]], this.compute(e), this.emit();
  }
  touchEnd(e) {
    this.ctrl.setEventIds(e), this.state._active && this.state._touchIds.some((r) => !this.ctrl.touchIds.has(r)) && (this.state._active = !1, this.compute(e), this.emit());
  }
  pointerEnd(e) {
    const r = this.state;
    this.ctrl.setEventIds(e);
    try {
      e.target.releasePointerCapture(e.pointerId);
    } catch {
    }
    r._pointerEvents.has(e.pointerId) && r._pointerEvents.delete(e.pointerId), r._active && r._pointerEvents.size < 2 && (r._active = !1, this.compute(e), this.emit());
  }
  gestureStart(e) {
    e.cancelable && e.preventDefault();
    const r = this.state;
    r._active || (this.start(e), this.computeValues([e.scale, e.rotation]), r.origin = [e.clientX, e.clientY], this.compute(e), this.emit());
  }
  gestureMove(e) {
    if (e.cancelable && e.preventDefault(), !this.state._active) return;
    const r = this.state;
    this.computeValues([e.scale, e.rotation]), r.origin = [e.clientX, e.clientY];
    const n = r._movement;
    r._movement = [e.scale - 1, e.rotation], r._delta = J.sub(r._movement, n), this.compute(e), this.emit();
  }
  gestureEnd(e) {
    this.state._active && (this.state._active = !1, this.compute(e), this.emit());
  }
  wheel(e) {
    const r = this.config.modifierKey;
    r && (Array.isArray(r) ? !r.find((n) => e[n]) : !e[r]) || (this.state._active ? this.wheelChange(e) : this.wheelStart(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)));
  }
  wheelStart(e) {
    this.start(e), this.wheelChange(e);
  }
  wheelChange(e) {
    "uv" in e || (e.cancelable && e.preventDefault(), process.env.NODE_ENV === "development" && !e.defaultPrevented && console.warn("[@use-gesture]: To properly support zoom on trackpads, try using the `target` option.\n\nThis message will only appear in development mode."));
    const n = this.state;
    n._delta = [-Mi(e)[1] / wa * n.offset[0], 0], J.addTo(n._movement, n._delta), Ni(n), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit();
  }
  wheelEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(e) {
    const r = this.config.device;
    r && (e(r, "start", this[r + "Start"].bind(this)), e(r, "change", this[r + "Move"].bind(this)), e(r, "end", this[r + "End"].bind(this)), e(r, "cancel", this[r + "End"].bind(this)), e("lostPointerCapture", "", this[r + "End"].bind(this))), this.config.pinchOnWheel && e("wheel", "", this.wheel.bind(this), {
      passive: !1
    });
  }
}
const Sa = ee(ee({}, Wr), {}, {
  device(t, e, {
    shared: r,
    pointer: {
      touch: n = !1
    } = {}
  }) {
    if (r.target && !Te.touch && Te.gesture) return "gesture";
    if (Te.touch && n) return "touch";
    if (Te.touchscreen) {
      if (Te.pointer) return "pointer";
      if (Te.touch) return "touch";
    }
  },
  bounds(t, e, {
    scaleBounds: r = {},
    angleBounds: n = {}
  }) {
    const i = (a) => {
      const c = Mn(zt(r, a), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [c.min, c.max];
    }, s = (a) => {
      const c = Mn(zt(n, a), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [c.min, c.max];
    };
    return typeof r != "function" && typeof n != "function" ? [i(), s()] : (a) => [i(a), s(a)];
  },
  threshold(t, e, r) {
    return this.lockDirection = r.axis === "lock", J.toVector(t, this.lockDirection ? [0.1, 3] : 0);
  },
  modifierKey(t) {
    return t === void 0 ? "ctrlKey" : t;
  },
  pinchOnWheel(t = !0) {
    return t;
  }
});
class Ta extends Ct {
  constructor(...e) {
    super(...e), ae(this, "ingKey", "moving");
  }
  move(e) {
    this.config.mouseOnly && e.pointerType !== "mouse" || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)));
  }
  moveStart(e) {
    this.start(e), this.computeValues(et(e)), this.compute(e), this.computeInitial(), this.emit();
  }
  moveChange(e) {
    if (!this.state._active) return;
    const r = et(e), n = this.state;
    n._delta = J.sub(r, n._values), J.addTo(n._movement, n._delta), this.computeValues(r), this.compute(e), this.emit();
  }
  moveEnd(e) {
    this.state._active && (this.state._active = !1, this.compute(e), this.emit());
  }
  bind(e) {
    e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this));
  }
}
const Pa = ee(ee({}, qe), {}, {
  mouseOnly: (t = !0) => t
});
class xa extends Ct {
  constructor(...e) {
    super(...e), ae(this, "ingKey", "scrolling");
  }
  scroll(e) {
    this.state._active || this.start(e), this.scrollChange(e), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
  }
  scrollChange(e) {
    e.cancelable && e.preventDefault();
    const r = this.state, n = ta(e);
    r._delta = J.sub(n, r._values), J.addTo(r._movement, r._delta), this.computeValues(n), this.compute(e), this.emit();
  }
  scrollEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(e) {
    e("scroll", "", this.scroll.bind(this));
  }
}
const Ra = qe;
class Oa extends Ct {
  constructor(...e) {
    super(...e), ae(this, "ingKey", "wheeling");
  }
  wheel(e) {
    this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
  }
  wheelChange(e) {
    const r = this.state;
    r._delta = Mi(e), J.addTo(r._movement, r._delta), Ni(r), this.compute(e), this.emit();
  }
  wheelEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(e) {
    e("wheel", "", this.wheel.bind(this));
  }
}
const Ca = qe;
class Aa extends Ct {
  constructor(...e) {
    super(...e), ae(this, "ingKey", "hovering");
  }
  enter(e) {
    this.config.mouseOnly && e.pointerType !== "mouse" || (this.start(e), this.computeValues(et(e)), this.compute(e), this.emit());
  }
  leave(e) {
    if (this.config.mouseOnly && e.pointerType !== "mouse") return;
    const r = this.state;
    if (!r._active) return;
    r._active = !1;
    const n = et(e);
    r._movement = r._delta = J.sub(n, r._values), this.computeValues(n), this.compute(e), r.delta = r.movement, this.emit();
  }
  bind(e) {
    e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this));
  }
}
const Ia = ee(ee({}, qe), {}, {
  mouseOnly: (t = !0) => t
}), Yr = /* @__PURE__ */ new Map(), Pr = /* @__PURE__ */ new Map();
function ka(t) {
  Yr.set(t.key, t.engine), Pr.set(t.key, t.resolver);
}
const Da = {
  key: "drag",
  engine: ca,
  resolver: Fi
}, ja = {
  key: "hover",
  engine: Aa,
  resolver: Ia
}, Ma = {
  key: "move",
  engine: Ta,
  resolver: Pa
}, Va = {
  key: "pinch",
  engine: Ea,
  resolver: Sa
}, $a = {
  key: "scroll",
  engine: xa,
  resolver: Ra
}, Fa = {
  key: "wheel",
  engine: Oa,
  resolver: Ca
};
function Na(t, e) {
  if (t == null) return {};
  var r = {}, n = Object.keys(t), i, s;
  for (s = 0; s < n.length; s++)
    i = n[s], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
function La(t, e) {
  if (t == null) return {};
  var r = Na(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      n = s[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
const za = {
  target(t) {
    if (t)
      return () => "current" in t ? t.current : t;
  },
  enabled(t = !0) {
    return t;
  },
  window(t = Te.isBrowser ? window : void 0) {
    return t;
  },
  eventOptions({
    passive: t = !0,
    capture: e = !1
  } = {}) {
    return {
      passive: t,
      capture: e
    };
  },
  transform(t) {
    return t;
  }
}, Ua = ["target", "eventOptions", "window", "enabled", "transform"];
function Vt(t = {}, e) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    switch (typeof i) {
      case "function":
        if (process.env.NODE_ENV === "development") {
          const s = i.call(r, t[n], n, t);
          Number.isNaN(s) || (r[n] = s);
        } else
          r[n] = i.call(r, t[n], n, t);
        break;
      case "object":
        r[n] = Vt(t[n], i);
        break;
      case "boolean":
        i && (r[n] = t[n]);
        break;
    }
  return r;
}
function Wa(t, e, r = {}) {
  const n = t, {
    target: i,
    eventOptions: s,
    window: a,
    enabled: c,
    transform: d
  } = n, u = La(n, Ua);
  if (r.shared = Vt({
    target: i,
    eventOptions: s,
    window: a,
    enabled: c,
    transform: d
  }, za), e) {
    const l = Pr.get(e);
    r[e] = Vt(ee({
      shared: r.shared
    }, u), l);
  } else
    for (const l in u) {
      const h = Pr.get(l);
      if (h)
        r[l] = Vt(ee({
          shared: r.shared
        }, u[l]), h);
      else if (process.env.NODE_ENV === "development" && !["drag", "pinch", "scroll", "wheel", "move", "hover"].includes(l)) {
        if (l === "domTarget")
          throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
        console.warn(`[@use-gesture]: Unknown config key \`${l}\` was used. Please read the documentation for further information.`);
      }
    }
  return r;
}
class Li {
  constructor(e, r) {
    ae(this, "_listeners", /* @__PURE__ */ new Set()), this._ctrl = e, this._gestureKey = r;
  }
  add(e, r, n, i, s) {
    const a = this._listeners, c = Qo(r, n), d = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}, u = ee(ee({}, d), s);
    e.addEventListener(c, i, u);
    const l = () => {
      e.removeEventListener(c, i, u), a.delete(l);
    };
    return a.add(l), l;
  }
  clean() {
    this._listeners.forEach((e) => e()), this._listeners.clear();
  }
}
class Ya {
  constructor() {
    ae(this, "_timeouts", /* @__PURE__ */ new Map());
  }
  add(e, r, n = 140, ...i) {
    this.remove(e), this._timeouts.set(e, window.setTimeout(r, n, ...i));
  }
  remove(e) {
    const r = this._timeouts.get(e);
    r && window.clearTimeout(r);
  }
  clean() {
    this._timeouts.forEach((e) => void window.clearTimeout(e)), this._timeouts.clear();
  }
}
class qa {
  constructor(e) {
    ae(this, "gestures", /* @__PURE__ */ new Set()), ae(this, "_targetEventStore", new Li(this)), ae(this, "gestureEventStores", {}), ae(this, "gestureTimeoutStores", {}), ae(this, "handlers", {}), ae(this, "config", {}), ae(this, "pointerIds", /* @__PURE__ */ new Set()), ae(this, "touchIds", /* @__PURE__ */ new Set()), ae(this, "state", {
      shared: {
        shiftKey: !1,
        metaKey: !1,
        ctrlKey: !1,
        altKey: !1
      }
    }), Ba(this, e);
  }
  setEventIds(e) {
    if (Xt(e))
      return this.touchIds = new Set(ea(e)), this.touchIds;
    if ("pointerId" in e)
      return e.type === "pointerup" || e.type === "pointercancel" ? this.pointerIds.delete(e.pointerId) : e.type === "pointerdown" && this.pointerIds.add(e.pointerId), this.pointerIds;
  }
  applyHandlers(e, r) {
    this.handlers = e, this.nativeHandlers = r;
  }
  applyConfig(e, r) {
    this.config = Wa(e, r, this.config);
  }
  clean() {
    this._targetEventStore.clean();
    for (const e of this.gestures)
      this.gestureEventStores[e].clean(), this.gestureTimeoutStores[e].clean();
  }
  effect() {
    return this.config.shared.target && this.bind(), () => this._targetEventStore.clean();
  }
  bind(...e) {
    const r = this.config.shared, n = {};
    let i;
    if (!(r.target && (i = r.target(), !i))) {
      if (r.enabled) {
        for (const a of this.gestures) {
          const c = this.config[a], d = Ln(n, c.eventOptions, !!i);
          if (c.enabled) {
            const u = Yr.get(a);
            new u(this, e, a).bind(d);
          }
        }
        const s = Ln(n, r.eventOptions, !!i);
        for (const a in this.nativeHandlers)
          s(a, "", (c) => this.nativeHandlers[a](ee(ee({}, this.state.shared), {}, {
            event: c,
            args: e
          })), void 0, !0);
      }
      for (const s in n)
        n[s] = ia(...n[s]);
      if (!i) return n;
      for (const s in n) {
        const {
          device: a,
          capture: c,
          passive: d
        } = Xo(s);
        this._targetEventStore.add(i, a, "", n[s], {
          capture: c,
          passive: d
        });
      }
    }
  }
}
function Ge(t, e) {
  t.gestures.add(e), t.gestureEventStores[e] = new Li(t, e), t.gestureTimeoutStores[e] = new Ya();
}
function Ba(t, e) {
  e.drag && Ge(t, "drag"), e.wheel && Ge(t, "wheel"), e.scroll && Ge(t, "scroll"), e.move && Ge(t, "move"), e.pinch && Ge(t, "pinch"), e.hover && Ge(t, "hover");
}
const Ln = (t, e, r) => (n, i, s, a = {}, c = !1) => {
  var d, u;
  const l = (d = a.capture) !== null && d !== void 0 ? d : e.capture, h = (u = a.passive) !== null && u !== void 0 ? u : e.passive;
  let m = c ? n : Ho(n, i, l);
  r && h && (m += "Passive"), t[m] = t[m] || [], t[m].push(s);
}, Ka = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function Ha(t) {
  const e = {}, r = {}, n = /* @__PURE__ */ new Set();
  for (let i in t)
    Ka.test(i) ? (n.add(RegExp.lastMatch), r[i] = t[i]) : e[i] = t[i];
  return [r, e, n];
}
function Xe(t, e, r, n, i, s) {
  if (!t.has(r)) return;
  if (!Yr.has(n)) {
    process.env.NODE_ENV === "development" && console.warn(`[@use-gesture]: You've created a custom handler that that uses the \`${n}\` gesture but isn't properly configured.

Please add \`${n}Action\` when creating your handler.`);
    return;
  }
  const a = r + "Start", c = r + "End", d = (u) => {
    let l;
    return u.first && a in e && e[a](u), r in e && (l = e[r](u)), u.last && c in e && e[c](u), l;
  };
  i[n] = d, s[n] = s[n] || {};
}
function Ga(t, e) {
  const [r, n, i] = Ha(t), s = {};
  return Xe(i, r, "onDrag", "drag", s, e), Xe(i, r, "onWheel", "wheel", s, e), Xe(i, r, "onScroll", "scroll", s, e), Xe(i, r, "onPinch", "pinch", s, e), Xe(i, r, "onMove", "move", s, e), Xe(i, r, "onHover", "hover", s, e), {
    handlers: s,
    config: e,
    nativeHandlers: n
  };
}
function Xa(t, e = {}, r, n) {
  const i = lt.useMemo(() => new qa(t), []);
  if (i.applyHandlers(t, n), i.applyConfig(e, r), lt.useEffect(i.effect.bind(i)), lt.useEffect(() => i.clean.bind(i), []), e.target === void 0)
    return i.bind.bind(i);
}
function Qa(t) {
  return t.forEach(ka), function(r, n) {
    const {
      handlers: i,
      nativeHandlers: s,
      config: a
    } = Ga(r, n || {});
    return Xa(i, a, void 0, s);
  };
}
function zn(t, e) {
  return Qa([Da, Va, $a, Fa, Ma, ja])(t, e || {});
}
var xr = { exports: {} }, Dt = { exports: {} }, B = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Un;
function Za() {
  if (Un) return B;
  Un = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, a = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, d = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, l = t ? Symbol.for("react.forward_ref") : 60112, h = t ? Symbol.for("react.suspense") : 60113, m = t ? Symbol.for("react.suspense_list") : 60120, w = t ? Symbol.for("react.memo") : 60115, T = t ? Symbol.for("react.lazy") : 60116, y = t ? Symbol.for("react.block") : 60121, R = t ? Symbol.for("react.fundamental") : 60117, E = t ? Symbol.for("react.responder") : 60118, O = t ? Symbol.for("react.scope") : 60119;
  function P(_) {
    if (typeof _ == "object" && _ !== null) {
      var Y = _.$$typeof;
      switch (Y) {
        case e:
          switch (_ = _.type, _) {
            case d:
            case u:
            case n:
            case s:
            case i:
            case h:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case c:
                case l:
                case T:
                case w:
                case a:
                  return _;
                default:
                  return Y;
              }
          }
        case r:
          return Y;
      }
    }
  }
  function A(_) {
    return P(_) === u;
  }
  return B.AsyncMode = d, B.ConcurrentMode = u, B.ContextConsumer = c, B.ContextProvider = a, B.Element = e, B.ForwardRef = l, B.Fragment = n, B.Lazy = T, B.Memo = w, B.Portal = r, B.Profiler = s, B.StrictMode = i, B.Suspense = h, B.isAsyncMode = function(_) {
    return A(_) || P(_) === d;
  }, B.isConcurrentMode = A, B.isContextConsumer = function(_) {
    return P(_) === c;
  }, B.isContextProvider = function(_) {
    return P(_) === a;
  }, B.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === e;
  }, B.isForwardRef = function(_) {
    return P(_) === l;
  }, B.isFragment = function(_) {
    return P(_) === n;
  }, B.isLazy = function(_) {
    return P(_) === T;
  }, B.isMemo = function(_) {
    return P(_) === w;
  }, B.isPortal = function(_) {
    return P(_) === r;
  }, B.isProfiler = function(_) {
    return P(_) === s;
  }, B.isStrictMode = function(_) {
    return P(_) === i;
  }, B.isSuspense = function(_) {
    return P(_) === h;
  }, B.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === n || _ === u || _ === s || _ === i || _ === h || _ === m || typeof _ == "object" && _ !== null && (_.$$typeof === T || _.$$typeof === w || _.$$typeof === a || _.$$typeof === c || _.$$typeof === l || _.$$typeof === R || _.$$typeof === E || _.$$typeof === O || _.$$typeof === y);
  }, B.typeOf = P, B;
}
var K = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wn;
function Ja() {
  return Wn || (Wn = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, a = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, d = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, l = t ? Symbol.for("react.forward_ref") : 60112, h = t ? Symbol.for("react.suspense") : 60113, m = t ? Symbol.for("react.suspense_list") : 60120, w = t ? Symbol.for("react.memo") : 60115, T = t ? Symbol.for("react.lazy") : 60116, y = t ? Symbol.for("react.block") : 60121, R = t ? Symbol.for("react.fundamental") : 60117, E = t ? Symbol.for("react.responder") : 60118, O = t ? Symbol.for("react.scope") : 60119;
    function P(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === n || p === u || p === s || p === i || p === h || p === m || typeof p == "object" && p !== null && (p.$$typeof === T || p.$$typeof === w || p.$$typeof === a || p.$$typeof === c || p.$$typeof === l || p.$$typeof === R || p.$$typeof === E || p.$$typeof === O || p.$$typeof === y);
    }
    function A(p) {
      if (typeof p == "object" && p !== null) {
        var X = p.$$typeof;
        switch (X) {
          case e:
            var ce = p.type;
            switch (ce) {
              case d:
              case u:
              case n:
              case s:
              case i:
              case h:
                return ce;
              default:
                var Q = ce && ce.$$typeof;
                switch (Q) {
                  case c:
                  case l:
                  case T:
                  case w:
                  case a:
                    return Q;
                  default:
                    return X;
                }
            }
          case r:
            return X;
        }
      }
    }
    var _ = d, Y = u, te = c, _e = a, re = e, me = l, H = n, ue = T, G = w, se = r, be = s, ne = i, ve = h, fe = !1;
    function ke(p) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), g(p) || A(p) === d;
    }
    function g(p) {
      return A(p) === u;
    }
    function S(p) {
      return A(p) === c;
    }
    function M(p) {
      return A(p) === a;
    }
    function D(p) {
      return typeof p == "object" && p !== null && p.$$typeof === e;
    }
    function k(p) {
      return A(p) === l;
    }
    function N(p) {
      return A(p) === n;
    }
    function j(p) {
      return A(p) === T;
    }
    function $(p) {
      return A(p) === w;
    }
    function F(p) {
      return A(p) === r;
    }
    function z(p) {
      return A(p) === s;
    }
    function f(p) {
      return A(p) === i;
    }
    function C(p) {
      return A(p) === h;
    }
    K.AsyncMode = _, K.ConcurrentMode = Y, K.ContextConsumer = te, K.ContextProvider = _e, K.Element = re, K.ForwardRef = me, K.Fragment = H, K.Lazy = ue, K.Memo = G, K.Portal = se, K.Profiler = be, K.StrictMode = ne, K.Suspense = ve, K.isAsyncMode = ke, K.isConcurrentMode = g, K.isContextConsumer = S, K.isContextProvider = M, K.isElement = D, K.isForwardRef = k, K.isFragment = N, K.isLazy = j, K.isMemo = $, K.isPortal = F, K.isProfiler = z, K.isStrictMode = f, K.isSuspense = C, K.isValidElementType = P, K.typeOf = A;
  }()), K;
}
var Yn;
function zi() {
  return Yn || (Yn = 1, process.env.NODE_ENV === "production" ? Dt.exports = Za() : Dt.exports = Ja()), Dt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ur, qn;
function ec() {
  if (qn) return ur;
  qn = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
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
      var d = Object.getOwnPropertyNames(a).map(function(l) {
        return a[l];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        u[l] = l;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ur = i() ? Object.assign : function(s, a) {
    for (var c, d = n(s), u, l = 1; l < arguments.length; l++) {
      c = Object(arguments[l]);
      for (var h in c)
        e.call(c, h) && (d[h] = c[h]);
      if (t) {
        u = t(c);
        for (var m = 0; m < u.length; m++)
          r.call(c, u[m]) && (d[u[m]] = c[u[m]]);
      }
    }
    return d;
  }, ur;
}
var lr, Bn;
function qr() {
  if (Bn) return lr;
  Bn = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return lr = t, lr;
}
var fr, Kn;
function Ui() {
  return Kn || (Kn = 1, fr = Function.call.bind(Object.prototype.hasOwnProperty)), fr;
}
var dr, Hn;
function tc() {
  if (Hn) return dr;
  Hn = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = qr(), r = {}, n = Ui();
    t = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(s, a, c, d, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in s)
        if (n(s, l)) {
          var h;
          try {
            if (typeof s[l] != "function") {
              var m = Error(
                (d || "React class") + ": " + c + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            h = s[l](a, l, d, c, null, e);
          } catch (T) {
            h = T;
          }
          if (h && !(h instanceof Error) && t(
            (d || "React class") + ": type specification of " + c + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var w = u ? u() : "";
            t(
              "Failed " + c + " type: " + h.message + (w ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, dr = i, dr;
}
var hr, Gn;
function rc() {
  if (Gn) return hr;
  Gn = 1;
  var t = zi(), e = ec(), r = qr(), n = Ui(), i = tc(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(c) {
    var d = "Warning: " + c;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return hr = function(c, d) {
    var u = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function h(g) {
      var S = g && (u && g[u] || g[l]);
      if (typeof S == "function")
        return S;
    }
    var m = "<<anonymous>>", w = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: O(),
      arrayOf: P,
      element: A(),
      elementType: _(),
      instanceOf: Y,
      node: me(),
      objectOf: _e,
      oneOf: te,
      oneOfType: re,
      shape: ue,
      exact: G
    };
    function T(g, S) {
      return g === S ? g !== 0 || 1 / g === 1 / S : g !== g && S !== S;
    }
    function y(g, S) {
      this.message = g, this.data = S && typeof S == "object" ? S : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function R(g) {
      if (process.env.NODE_ENV !== "production")
        var S = {}, M = 0;
      function D(N, j, $, F, z, f, C) {
        if (F = F || m, f = f || $, C !== r) {
          if (d) {
            var p = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw p.name = "Invariant Violation", p;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var X = F + ":" + $;
            !S[X] && // Avoid spamming the console because they are often not actionable except for lib authors
            M < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + f + "` prop on `" + F + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), S[X] = !0, M++);
          }
        }
        return j[$] == null ? N ? j[$] === null ? new y("The " + z + " `" + f + "` is marked as required " + ("in `" + F + "`, but its value is `null`.")) : new y("The " + z + " `" + f + "` is marked as required in " + ("`" + F + "`, but its value is `undefined`.")) : null : g(j, $, F, z, f);
      }
      var k = D.bind(null, !1);
      return k.isRequired = D.bind(null, !0), k;
    }
    function E(g) {
      function S(M, D, k, N, j, $) {
        var F = M[D], z = ne(F);
        if (z !== g) {
          var f = ve(F);
          return new y(
            "Invalid " + N + " `" + j + "` of type " + ("`" + f + "` supplied to `" + k + "`, expected ") + ("`" + g + "`."),
            { expectedType: g }
          );
        }
        return null;
      }
      return R(S);
    }
    function O() {
      return R(a);
    }
    function P(g) {
      function S(M, D, k, N, j) {
        if (typeof g != "function")
          return new y("Property `" + j + "` of component `" + k + "` has invalid PropType notation inside arrayOf.");
        var $ = M[D];
        if (!Array.isArray($)) {
          var F = ne($);
          return new y("Invalid " + N + " `" + j + "` of type " + ("`" + F + "` supplied to `" + k + "`, expected an array."));
        }
        for (var z = 0; z < $.length; z++) {
          var f = g($, z, k, N, j + "[" + z + "]", r);
          if (f instanceof Error)
            return f;
        }
        return null;
      }
      return R(S);
    }
    function A() {
      function g(S, M, D, k, N) {
        var j = S[M];
        if (!c(j)) {
          var $ = ne(j);
          return new y("Invalid " + k + " `" + N + "` of type " + ("`" + $ + "` supplied to `" + D + "`, expected a single ReactElement."));
        }
        return null;
      }
      return R(g);
    }
    function _() {
      function g(S, M, D, k, N) {
        var j = S[M];
        if (!t.isValidElementType(j)) {
          var $ = ne(j);
          return new y("Invalid " + k + " `" + N + "` of type " + ("`" + $ + "` supplied to `" + D + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return R(g);
    }
    function Y(g) {
      function S(M, D, k, N, j) {
        if (!(M[D] instanceof g)) {
          var $ = g.name || m, F = ke(M[D]);
          return new y("Invalid " + N + " `" + j + "` of type " + ("`" + F + "` supplied to `" + k + "`, expected ") + ("instance of `" + $ + "`."));
        }
        return null;
      }
      return R(S);
    }
    function te(g) {
      if (!Array.isArray(g))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function S(M, D, k, N, j) {
        for (var $ = M[D], F = 0; F < g.length; F++)
          if (T($, g[F]))
            return null;
        var z = JSON.stringify(g, function(C, p) {
          var X = ve(p);
          return X === "symbol" ? String(p) : p;
        });
        return new y("Invalid " + N + " `" + j + "` of value `" + String($) + "` " + ("supplied to `" + k + "`, expected one of " + z + "."));
      }
      return R(S);
    }
    function _e(g) {
      function S(M, D, k, N, j) {
        if (typeof g != "function")
          return new y("Property `" + j + "` of component `" + k + "` has invalid PropType notation inside objectOf.");
        var $ = M[D], F = ne($);
        if (F !== "object")
          return new y("Invalid " + N + " `" + j + "` of type " + ("`" + F + "` supplied to `" + k + "`, expected an object."));
        for (var z in $)
          if (n($, z)) {
            var f = g($, z, k, N, j + "." + z, r);
            if (f instanceof Error)
              return f;
          }
        return null;
      }
      return R(S);
    }
    function re(g) {
      if (!Array.isArray(g))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var S = 0; S < g.length; S++) {
        var M = g[S];
        if (typeof M != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe(M) + " at index " + S + "."
          ), a;
      }
      function D(k, N, j, $, F) {
        for (var z = [], f = 0; f < g.length; f++) {
          var C = g[f], p = C(k, N, j, $, F, r);
          if (p == null)
            return null;
          p.data && n(p.data, "expectedType") && z.push(p.data.expectedType);
        }
        var X = z.length > 0 ? ", expected one of type [" + z.join(", ") + "]" : "";
        return new y("Invalid " + $ + " `" + F + "` supplied to " + ("`" + j + "`" + X + "."));
      }
      return R(D);
    }
    function me() {
      function g(S, M, D, k, N) {
        return se(S[M]) ? null : new y("Invalid " + k + " `" + N + "` supplied to " + ("`" + D + "`, expected a ReactNode."));
      }
      return R(g);
    }
    function H(g, S, M, D, k) {
      return new y(
        (g || "React class") + ": " + S + " type `" + M + "." + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + k + "`."
      );
    }
    function ue(g) {
      function S(M, D, k, N, j) {
        var $ = M[D], F = ne($);
        if (F !== "object")
          return new y("Invalid " + N + " `" + j + "` of type `" + F + "` " + ("supplied to `" + k + "`, expected `object`."));
        for (var z in g) {
          var f = g[z];
          if (typeof f != "function")
            return H(k, N, j, z, ve(f));
          var C = f($, z, k, N, j + "." + z, r);
          if (C)
            return C;
        }
        return null;
      }
      return R(S);
    }
    function G(g) {
      function S(M, D, k, N, j) {
        var $ = M[D], F = ne($);
        if (F !== "object")
          return new y("Invalid " + N + " `" + j + "` of type `" + F + "` " + ("supplied to `" + k + "`, expected `object`."));
        var z = e({}, M[D], g);
        for (var f in z) {
          var C = g[f];
          if (n(g, f) && typeof C != "function")
            return H(k, N, j, f, ve(C));
          if (!C)
            return new y(
              "Invalid " + N + " `" + j + "` key `" + f + "` supplied to `" + k + "`.\nBad object: " + JSON.stringify(M[D], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(g), null, "  ")
            );
          var p = C($, f, k, N, j + "." + f, r);
          if (p)
            return p;
        }
        return null;
      }
      return R(S);
    }
    function se(g) {
      switch (typeof g) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !g;
        case "object":
          if (Array.isArray(g))
            return g.every(se);
          if (g === null || c(g))
            return !0;
          var S = h(g);
          if (S) {
            var M = S.call(g), D;
            if (S !== g.entries) {
              for (; !(D = M.next()).done; )
                if (!se(D.value))
                  return !1;
            } else
              for (; !(D = M.next()).done; ) {
                var k = D.value;
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
    function be(g, S) {
      return g === "symbol" ? !0 : S ? S["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && S instanceof Symbol : !1;
    }
    function ne(g) {
      var S = typeof g;
      return Array.isArray(g) ? "array" : g instanceof RegExp ? "object" : be(S, g) ? "symbol" : S;
    }
    function ve(g) {
      if (typeof g > "u" || g === null)
        return "" + g;
      var S = ne(g);
      if (S === "object") {
        if (g instanceof Date)
          return "date";
        if (g instanceof RegExp)
          return "regexp";
      }
      return S;
    }
    function fe(g) {
      var S = ve(g);
      switch (S) {
        case "array":
        case "object":
          return "an " + S;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + S;
        default:
          return S;
      }
    }
    function ke(g) {
      return !g.constructor || !g.constructor.name ? m : g.constructor.name;
    }
    return w.checkPropTypes = i, w.resetWarningCache = i.resetWarningCache, w.PropTypes = w, w;
  }, hr;
}
var pr, Xn;
function nc() {
  if (Xn) return pr;
  Xn = 1;
  var t = qr();
  function e() {
  }
  function r() {
  }
  return r.resetWarningCache = e, pr = function() {
    function n(a, c, d, u, l, h) {
      if (h !== t) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
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
      resetWarningCache: e
    };
    return s.PropTypes = s, s;
  }, pr;
}
if (process.env.NODE_ENV !== "production") {
  var ic = zi(), sc = !0;
  xr.exports = rc()(ic.isElement, sc);
} else
  xr.exports = nc()();
var oc = xr.exports;
const mt = /* @__PURE__ */ vs(oc);
class Pt {
  static transformBounds(e, { pan: r, zoom: n }) {
    const i = e.width * n, s = e.height * n, a = e.left + e.width / 2, c = e.top + e.height / 2, d = a * n - r[0], u = c * n - r[1], l = (e.width - i) / 2, h = (e.height - s) / 2, m = d - i / 2, w = u - s / 2, T = l - m, y = h - w;
    return {
      width: i,
      height: s,
      top: y,
      left: T,
      right: T + i,
      bottom: y + s,
      x: T,
      y
    };
  }
  static getEditableRect(e) {
    return {
      ...e,
      bottom: e.bottom,
      height: e.height,
      left: e.left,
      right: e.right,
      top: e.top,
      width: e.width,
      x: e.x,
      y: e.y
    };
  }
  static mergeDeep(e, r) {
    const n = (i) => i && typeof i == "object";
    return Object.keys(r).forEach((i) => {
      const s = e[i], a = r[i];
      Array.isArray(s) && Array.isArray(a) ? e[i] = a : n(s) && n(a) ? e[i] = Pt.mergeDeep({ ...s }, a) : e[i] = a;
    }), e;
  }
}
const Wi = ps(), $e = {
  "viewer-main": "_viewer-main_1mddk_1",
  "viewer-main-fill-height": "_viewer-main-fill-height_1mddk_10",
  "viewer-viewport": "_viewer-viewport_1mddk_14",
  "viewer-minimap-content": "_viewer-minimap-content_1mddk_19",
  "viewer-viewport-content": "_viewer-viewport-content_1mddk_20",
  "viewer-minimap": "_viewer-minimap_1mddk_19",
  "viewer-minimap-viewport-area": "_viewer-minimap-viewport-area_1mddk_38",
  "viewer-viewport-center-guide": "_viewer-viewport-center-guide_1mddk_59"
}, ac = ({ className: t = "", viewportContent: e, minimapContent: r }) => {
  const {
    crop: n,
    setCrop: i,
    settings: s,
    setZoomIn: a,
    setZoomOut: c,
    setResetView: d,
    setCenterView: u,
    setToggleMinimap: l
  } = Or(Wi), h = he(n), m = 0.75, w = 100, T = he(), y = he(), R = he(), E = he(), O = he(s.minimap.width), P = he(160), [A, _] = Ae(s.minimap.enabled), [Y, te] = Ae({
    width: O.current,
    height: P.current,
    scale: 1
  }), [_e, re] = Ro(() => ({
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
    n !== h.current && (h.current = n, re.start({ transform: `scale(${n.zoom}) translate(${n.pan[0] / n.zoom}px, ${n.pan[1] / n.zoom}px)` }));
  }, [n, re]);
  const me = (f, C, p) => {
    const X = (p.width - C.width) / 2, ce = (p.height - C.height) / 2;
    return p.width < C.width ? f.pan[0] = 0 : p.left > C.left ? f.pan[0] = Math.min(f.pan[0], X) : p.right < C.right && (f.pan[0] = Math.max(f.pan[0], C.width - p.width + X)), p.height < C.height ? f.pan[1] = 0 : p.top > C.top ? f.pan[1] = Math.min(f.pan[1], ce) : p.bottom < C.bottom && (f.pan[1] = Math.max(f.pan[1], C.height - p.height + ce)), f;
  }, H = ge((f) => {
    const C = Pt.getEditableRect(ue(y.current)), p = Pt.transformBounds(C, f);
    return me(f, C, p);
  }, []), ue = (f) => {
    const C = T.current.getBoundingClientRect(), p = f.getBoundingClientRect();
    return {
      top: p.top - C.top,
      left: p.left - C.left,
      width: f.offsetWidth,
      height: f.offsetHeight,
      bottom: p.top - C.top + f.offsetHeight,
      right: p.left - C.left + f.offsetWidth
    };
  }, G = ge(() => {
    const f = E.current.offsetWidth, C = y.current.offsetWidth / y.current.offsetHeight;
    P.current = f / C;
    const p = f / y.current.offsetWidth;
    te((ce) => ({
      ...ce,
      width: O.current,
      height: P.current,
      scale: p
    }));
    let X = {
      ...h.current
    };
    X = H(X), i(X);
  }, [H, i]);
  Ee(() => {
    if (R.current) {
      const f = R.current.querySelector("img");
      f && (f.complete ? G() : f.onload = G);
      const C = R.current.querySelector("video");
      C && (C.readyState >= 4 ? G() : C.onloadeddata = G);
    }
    return () => {
    };
  }, [e, G]), Ee(() => {
    G();
  }, [A, G]);
  const se = ge(() => {
    G();
  }, [G]);
  Ee(() => (window.addEventListener("resize", se), () => {
    window.removeEventListener("resize", se);
  }), [se]);
  const be = ge((f) => {
    const C = { pan: { ...f.pan }, zoom: f.zoom }, p = H({ pan: { ...f.pan }, zoom: f.zoom });
    return C.pan[0] = Math.max(C.pan[0], p.pan[0] - s.spring.rubberbandDistance), C.pan[0] = Math.min(C.pan[0], p.pan[0] + s.spring.rubberbandDistance), C.pan[1] = Math.max(C.pan[1], p.pan[1] - s.spring.rubberbandDistance), C.pan[1] = Math.min(C.pan[1], p.pan[1] + s.spring.rubberbandDistance), C;
  }, [s, H]), ne = ge((f, C, p) => {
    if (!s.zoom.enabled || f.last) return p;
    p ?? (p = h.current);
    const X = ue(y.current);
    let ce = 0, Q = [0, 0];
    if (f.type === "click")
      ce = Number(f.zoomChange) * s.zoom.zoomButtonStep;
    else if (f.type === "pointermove" && f.pinching)
      ce = f.delta[0], Q[0] = f.origin[0] - X.width / 2, Q[1] = f.origin[1] - X.height / 2;
    else if (f.type === "wheel")
      if (f.ctrlKey && f.pinching === !0) {
        switch (f.axis) {
          case "scale":
            ce = f.delta[0];
            break;
        }
        Q[0] = f.event.clientX - X.width / 2, Q[1] = f.event.clientY - X.height / 2;
      } else f.axis === "y" && (!("pinching" in f) || f.pinching === !1) && (ce = -f.delta[1] / w * s.zoom.mouseWheelStep, Q[0] = f.event.clientX - X.width / 2, Q[1] = f.event.clientY - X.height / 2);
    C == "minimap" && (Q[0] = 0, Q[1] = 0);
    const Me = Math.min(Math.max(p.zoom + ce, s.zoom.min), s.zoom.max), rt = Me / h.current.zoom, It = [
      Q[0] + (h.current.pan[0] - Q[0]) * rt,
      Q[1] + (h.current.pan[1] - Q[1]) * rt
    ];
    let De = {
      ...h.current,
      zoom: Me,
      pan: It
    };
    return De = H(De), i(De), De;
  }, [s, i, H]), ve = ge((f, C, p) => {
    if (!s.pan.enabled || f.last) return p;
    p ?? (p = h.current);
    const X = C == "viewport" ? 1 : -h.current.zoom / Y.scale, ce = [
      p.pan[0] + f.delta[0] * X,
      p.pan[1] + f.delta[1] * X
    ];
    let Q = {
      ...h.current,
      pan: ce
    };
    return s.spring.rubberband ? Q = be(Q) : Q = H(Q), i(Q), Q;
  }, [s, i, H, be, Y.scale]), fe = ge(() => {
    let f = {
      ...h.current
    };
    f = H(f), i(f);
  }, [i, H]), ke = ge(() => {
    ne({ type: "click", zoomChange: -1 }, "minimap", h.current);
  }, [ne]), g = ge(() => {
    ne({ type: "click", zoomChange: 1 }, "minimap", h.current);
  }, [ne]), S = ge(() => {
    const f = {
      pan: [0, 0],
      zoom: s.zoom.default
    };
    i(f);
  }, [s, i]), M = ge(() => {
    const f = {
      pan: [0, 0],
      zoom: h.current.zoom
    };
    i(f);
  }, [i]), D = ge(() => {
    _((f) => !f);
  }, []);
  Ee(() => (c(() => ke), a(() => g), d(() => S), u(() => M), l(() => D), () => {
  }), [ke, c, g, a, S, d, M, u, D, l]), Ee(() => {
    const f = (C) => {
      const p = C.key.toLowerCase();
      s.resetView.enabled && p === s.resetView.keyboardShortcut && S(), s.centerView.enabled && p === s.centerView.keyboardShortcut && M(), s.minimap.enabled && p === s.minimap.keyboardShortcut && D();
    };
    return window.addEventListener("keydown", f), () => {
      window.removeEventListener("keydown", f);
    };
  }, [s, S, M, D]);
  const k = {
    drag: {
      enabled: s.pan.enabled,
      from: () => h.current.pan,
      preventScroll: !1
      // Ignores vertical scrolling on touch devices
    },
    pinch: {
      enabled: s.zoom.enabled,
      preventDefault: !0,
      pinchOnWheel: !0,
      angleBounds: { min: 0, max: 0 },
      from: () => [h.current.zoom * m, 0]
    },
    wheel: {
      enabled: s.zoom.enabled,
      preventDefault: !0,
      from: () => [0, -h.current.zoom * w]
    },
    eventOptions: {
      passive: !1
    }
  };
  zn(
    {
      onDrag: (f) => ve(f, "viewport", f.memo),
      onDragEnd: fe,
      onPinch: (f) => ne(f, "viewport", f.memo),
      onPinchEnd: fe,
      onWheel: (f) => ne(f, "viewport", f.memo),
      onWheelEnd: fe
    },
    {
      ...k,
      target: y
    }
  ), zn({
    onDrag: (f) => ve(f, "minimap", f.memo),
    onDragEnd: fe,
    onPinch: (f) => ne(f, "minimap", f.memo),
    onPinchEnd: fe,
    onWheel: (f) => ne(f, "minimap", f.memo),
    onWheelEnd: fe
  }, {
    ...k,
    target: E
  });
  const N = {
    width: O.current,
    height: P.current,
    display: A && r ? "block" : "none",
    outline: s.minimap.outlineStyle
  };
  let j = {};
  if (y.current) {
    const f = Y.scale;
    j = {
      // The order of transform matters! Scale first, then translate
      transform: `scale(${1 / Math.max(n.zoom, 1)}) translate(${-n.pan[0] * f}px, ${-n.pan[1] * f}px)`,
      width: `${y.current.offsetWidth * f}px`,
      height: `${y.current.offsetHeight * f}px`,
      outline: s.minimap.viewportAreaOutlineStyle
    };
  }
  const $ = s.spring.enabled === !0 ? _e : { transform: `scale(${n.zoom}) translate(${n.pan[0] / n.zoom}px, ${n.pan[1] / n.zoom}px)` };
  let F = {};
  y.current && (F = {
    transformOrigin: "0% 0%",
    transform: `scale(${Y.scale})`,
    width: `${y.current.offsetWidth}px`,
    height: `${y.current.offsetHeight}px`
  });
  const z = [
    t,
    $e["viewer-main"],
    s.fillHeight && $e["viewer-main-fill-height"]
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ Fe.jsxs("div", { className: z, ref: T, children: [
    /* @__PURE__ */ Fe.jsxs("div", { className: $e["viewer-minimap"], ref: E, style: N, children: [
      /* @__PURE__ */ Fe.jsx("div", { className: $e["viewer-minimap-content"], style: F, children: r }),
      /* @__PURE__ */ Fe.jsx("div", { className: $e["viewer-minimap-viewport-area"], style: j })
    ] }),
    /* @__PURE__ */ Fe.jsxs("div", { className: $e["viewer-viewport"], ref: y, children: [
      s.guides.enabled && /* @__PURE__ */ Fe.jsx("div", { className: $e["viewer-viewport-center-guide"] }),
      /* @__PURE__ */ Fe.jsx(zo.div, { className: $e["viewer-viewport-content"], ref: R, style: $, children: e })
    ] })
  ] });
};
ac.propTypes = {
  className: mt.string,
  viewportContent: mt.node,
  minimapContent: mt.node
};
const cc = {
  pan: { enabled: !0 },
  zoom: { enabled: !0, default: 1, min: 1, max: 4, mouseWheelStep: 0.5, zoomButtonStep: 0.5 },
  resetView: { enabled: !0, keyboardShortcut: "r" },
  centerView: { enabled: !1, keyboardShortcut: "c" },
  minimap: { enabled: !0, width: "160px", keyboardShortcut: "m", outlineStyle: "1px solid #ccc", viewportAreaOutlineStyle: "2px solid #333" },
  spring: { enabled: !0, rubberband: !0, rubberbandDistance: 100 },
  guides: { enabled: !1 },
  fillHeight: !0
}, Qn = {
  pan: [0, 0],
  zoom: 1
}, uc = ({ children: t, settings: e = {} }) => {
  const r = ct(() => Pt.mergeDeep({ ...cc }, e), [e]), [n, i] = Ae(Qn), [s, a] = Ae(null), [c, d] = Ae(null), [u, l] = Ae(null), [h, m] = Ae(null), [w, T] = Ae(null);
  return Ee(() => {
    i({ pan: Qn.pan, zoom: r.zoom.default });
  }, [r.zoom.default]), /* @__PURE__ */ Fe.jsx(Wi.Provider, { value: {
    crop: n,
    setCrop: i,
    settings: r,
    zoomOut: s,
    setZoomOut: a,
    zoomIn: c,
    setZoomIn: d,
    resetView: u,
    setResetView: l,
    centerView: h,
    setCenterView: m,
    toggleMinimap: w,
    setToggleMinimap: T
  }, children: t });
};
uc.propTypes = {
  children: mt.node,
  settings: mt.object
};
export {
  ac as Viewer,
  Wi as ViewerContext,
  uc as ViewerProvider,
  Pt as ViewerUtils
};
