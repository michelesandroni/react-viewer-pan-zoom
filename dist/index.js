import { jsxs as Ft, jsx as Ve } from "react/jsx-runtime";
import * as or from "react";
import Ut, { useState as ee, useRef as F, useEffect as K, useLayoutEffect as Zi, forwardRef as Ji, useCallback as L, useContext as cr, useMemo as je, createContext as es } from "react";
import { unstable_batchedUpdates as ts } from "react-dom";
import './index.css';var ur = Je(), A = (e) => Ze(e, ur), lr = Je();
A.write = (e) => Ze(e, lr);
var Et = Je();
A.onStart = (e) => Ze(e, Et);
var fr = Je();
A.onFrame = (e) => Ze(e, fr);
var hr = Je();
A.onFinish = (e) => Ze(e, hr);
var Se = [];
A.setTimeout = (e, t) => {
  const r = A.now() + t, n = () => {
    const s = Se.findIndex((a) => a.cancel == n);
    ~s && Se.splice(s, 1), le -= ~s ? 1 : 0;
  }, i = { time: r, handler: e, cancel: n };
  return Se.splice(zn(r), 0, i), le += 1, Ln(), i;
};
var zn = (e) => ~(~Se.findIndex((t) => t.time > e) || ~Se.length);
A.cancel = (e) => {
  Et.delete(e), fr.delete(e), hr.delete(e), ur.delete(e), lr.delete(e);
};
A.sync = (e) => {
  Xt = !0, A.batchedUpdates(e), Xt = !1;
};
A.throttle = (e) => {
  let t;
  function r() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function n(...i) {
    t = i, A.onStart(r);
  }
  return n.handler = e, n.cancel = () => {
    Et.delete(r), t = null;
  }, n;
};
var dr = typeof window < "u" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {
  }
);
A.use = (e) => dr = e;
A.now = typeof performance < "u" ? () => performance.now() : Date.now;
A.batchedUpdates = (e) => e();
A.catch = console.error;
A.frameLoop = "always";
A.advance = () => {
  A.frameLoop !== "demand" ? console.warn(
    "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
  ) : Un();
};
var ue = -1, le = 0, Xt = !1;
function Ze(e, t) {
  Xt ? (t.delete(e), e(0)) : (t.add(e), Ln());
}
function Ln() {
  ue < 0 && (ue = 0, A.frameLoop !== "demand" && dr(Fn));
}
function rs() {
  ue = -1;
}
function Fn() {
  ~ue && (dr(Fn), A.batchedUpdates(Un));
}
function Un() {
  const e = ue;
  ue = A.now();
  const t = zn(ue);
  if (t && (Gn(Se.splice(0, t), (r) => r.handler()), le -= t), !le) {
    rs();
    return;
  }
  Et.flush(), ur.flush(e ? Math.min(64, ue - e) : 16.667), fr.flush(), lr.flush(), hr.flush();
}
function Je() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return {
    add(r) {
      le += t == e && !e.has(r) ? 1 : 0, e.add(r);
    },
    delete(r) {
      return le -= t == e && e.has(r) ? 1 : 0, e.delete(r);
    },
    flush(r) {
      t.size && (e = /* @__PURE__ */ new Set(), le -= t.size, Gn(t, (n) => n(r) && e.add(n)), le += e.size, t = e);
    }
  };
}
function Gn(e, t) {
  e.forEach((r) => {
    try {
      t(r);
    } catch (n) {
      A.catch(n);
    }
  });
}
var ns = Object.defineProperty, is = (e, t) => {
  for (var r in t)
    ns(e, r, { get: t[r], enumerable: !0 });
}, Z = {};
is(Z, {
  assign: () => as,
  colors: () => fe,
  createStringInterpolator: () => mr,
  skipAnimation: () => Kn,
  to: () => Hn,
  willAdvance: () => gr
});
function Zt() {
}
var ss = (e, t, r) => Object.defineProperty(e, t, { value: r, writable: !0, configurable: !0 }), d = {
  arr: Array.isArray,
  obj: (e) => !!e && e.constructor.name === "Object",
  fun: (e) => typeof e == "function",
  str: (e) => typeof e == "string",
  num: (e) => typeof e == "number",
  und: (e) => e === void 0
};
function ne(e, t) {
  if (d.arr(e)) {
    if (!d.arr(t) || e.length !== t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  return e === t;
}
var T = (e, t) => e.forEach(t);
function te(e, t, r) {
  if (d.arr(e)) {
    for (let n = 0; n < e.length; n++)
      t.call(r, e[n], `${n}`);
    return;
  }
  for (const n in e)
    e.hasOwnProperty(n) && t.call(r, e[n], n);
}
var H = (e) => d.und(e) ? [] : d.arr(e) ? e : [e];
function ze(e, t) {
  if (e.size) {
    const r = Array.from(e);
    e.clear(), T(r, t);
  }
}
var Ne = (e, ...t) => ze(e, (r) => r(...t)), pr = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), mr, Hn, fe = null, Kn = !1, gr = Zt, as = (e) => {
  e.to && (Hn = e.to), e.now && (A.now = e.now), e.colors !== void 0 && (fe = e.colors), e.skipAnimation != null && (Kn = e.skipAnimation), e.createStringInterpolator && (mr = e.createStringInterpolator), e.requestAnimationFrame && A.use(e.requestAnimationFrame), e.batchedUpdates && (A.batchedUpdates = e.batchedUpdates), e.willAdvance && (gr = e.willAdvance), e.frameLoop && (A.frameLoop = e.frameLoop);
}, Le = /* @__PURE__ */ new Set(), W = [], Gt = [], gt = 0, Tt = {
  get idle() {
    return !Le.size && !W.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(e) {
    gt > e.priority ? (Le.add(e), A.onStart(os)) : (qn(e), A(Jt));
  },
  /** Advance all animations by the given time. */
  advance: Jt,
  /** Call this when an animation's priority changes. */
  sort(e) {
    if (gt)
      A.onFrame(() => Tt.sort(e));
    else {
      const t = W.indexOf(e);
      ~t && (W.splice(t, 1), Bn(e));
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    W = [], Le.clear();
  }
};
function os() {
  Le.forEach(qn), Le.clear(), A(Jt);
}
function qn(e) {
  W.includes(e) || Bn(e);
}
function Bn(e) {
  W.splice(
    cs(W, (t) => t.priority > e.priority),
    0,
    e
  );
}
function Jt(e) {
  const t = Gt;
  for (let r = 0; r < W.length; r++) {
    const n = W[r];
    gt = n.priority, n.idle || (gr(n), n.advance(e), n.idle || t.push(n));
  }
  return gt = 0, Gt = W, Gt.length = 0, W = t, W.length > 0;
}
function cs(e, t) {
  const r = e.findIndex(t);
  return r < 0 ? e.length : r;
}
var us = {
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
}, X = "[-+]?\\d*\\.?\\d+", vt = X + "%";
function $t(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var ls = new RegExp("rgb" + $t(X, X, X)), fs = new RegExp("rgba" + $t(X, X, X, X)), hs = new RegExp("hsl" + $t(X, vt, vt)), ds = new RegExp(
  "hsla" + $t(X, vt, vt, X)
), ps = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, ms = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, gs = /^#([0-9a-fA-F]{6})$/, vs = /^#([0-9a-fA-F]{8})$/;
function _s(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = gs.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : fe && fe[e] !== void 0 ? fe[e] : (t = ls.exec(e)) ? (ye(t[1]) << 24 | // r
  ye(t[2]) << 16 | // g
  ye(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = fs.exec(e)) ? (ye(t[1]) << 24 | // r
  ye(t[2]) << 16 | // g
  ye(t[3]) << 8 | // b
  Lr(t[4])) >>> // a
  0 : (t = ps.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = vs.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ms.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = hs.exec(e)) ? (Nr(
    zr(t[1]),
    // h
    ft(t[2]),
    // s
    ft(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = ds.exec(e)) ? (Nr(
    zr(t[1]),
    // h
    ft(t[2]),
    // s
    ft(t[3])
    // l
  ) | Lr(t[4])) >>> // a
  0 : null;
}
function Ht(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function Nr(e, t, r) {
  const n = r < 0.5 ? r * (1 + t) : r + t - r * t, i = 2 * r - n, s = Ht(i, n, e + 1 / 3), a = Ht(i, n, e), o = Ht(i, n, e - 1 / 3);
  return Math.round(s * 255) << 24 | Math.round(a * 255) << 16 | Math.round(o * 255) << 8;
}
function ye(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function zr(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Lr(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function ft(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Fr(e) {
  let t = _s(e);
  if (t === null)
    return e;
  t = t || 0;
  const r = (t & 4278190080) >>> 24, n = (t & 16711680) >>> 16, i = (t & 65280) >>> 8, s = (t & 255) / 255;
  return `rgba(${r}, ${n}, ${i}, ${s})`;
}
var Ge = (e, t, r) => {
  if (d.fun(e))
    return e;
  if (d.arr(e))
    return Ge({
      range: e,
      output: t,
      extrapolate: r
    });
  if (d.str(e.output[0]))
    return mr(e);
  const n = e, i = n.output, s = n.range || [0, 1], a = n.extrapolateLeft || n.extrapolate || "extend", o = n.extrapolateRight || n.extrapolate || "extend", u = n.easing || ((c) => c);
  return (c) => {
    const l = bs(c, s);
    return ys(
      c,
      s[l],
      s[l + 1],
      i[l],
      i[l + 1],
      u,
      a,
      o,
      n.map
    );
  };
};
function ys(e, t, r, n, i, s, a, o, u) {
  let c = u ? u(e) : e;
  if (c < t) {
    if (a === "identity")
      return c;
    a === "clamp" && (c = t);
  }
  if (c > r) {
    if (o === "identity")
      return c;
    o === "clamp" && (c = r);
  }
  return n === i ? n : t === r ? e <= t ? n : i : (t === -1 / 0 ? c = -c : r === 1 / 0 ? c = c - t : c = (c - t) / (r - t), c = s(c), n === -1 / 0 ? c = -c : i === 1 / 0 ? c = c + n : c = c * (i - n) + n, c);
}
function bs(e, t) {
  for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r)
    ;
  return r - 1;
}
var ws = {
  linear: (e) => e
}, He = Symbol.for("FluidValue.get"), Ee = Symbol.for("FluidValue.observers"), q = (e) => !!(e && e[He]), U = (e) => e && e[He] ? e[He]() : e, Ur = (e) => e[Ee] || null;
function Ss(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function Ke(e, t) {
  const r = e[Ee];
  r && r.forEach((n) => {
    Ss(n, t);
  });
}
var Wn = class {
  constructor(e) {
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    As(this, e);
  }
}, As = (e, t) => Yn(e, He, t);
function $e(e, t) {
  if (e[He]) {
    let r = e[Ee];
    r || Yn(e, Ee, r = /* @__PURE__ */ new Set()), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t));
  }
  return t;
}
function qe(e, t) {
  const r = e[Ee];
  if (r && r.has(t)) {
    const n = r.size - 1;
    n ? r.delete(t) : e[Ee] = null, e.observerRemoved && e.observerRemoved(n, t);
  }
}
var Yn = (e, t, r) => Object.defineProperty(e, t, {
  value: r,
  writable: !0,
  configurable: !0
}), dt = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Es = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Gr = new RegExp(`(${dt.source})(%|[a-z]+)`, "i"), Ts = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, xt = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, Qn = (e) => {
  const [t, r] = $s(e);
  if (!t || pr())
    return e;
  const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  if (n)
    return n.trim();
  if (r && r.startsWith("--")) {
    const i = window.getComputedStyle(document.documentElement).getPropertyValue(r);
    return i || e;
  } else {
    if (r && xt.test(r))
      return Qn(r);
    if (r)
      return r;
  }
  return e;
}, $s = (e) => {
  const t = xt.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}, Kt, xs = (e, t, r, n, i) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`, Xn = (e) => {
  Kt || (Kt = fe ? (
    // match color names, ignore partial matches
    new RegExp(`(${Object.keys(fe).join("|")})(?!\\w)`, "g")
  ) : (
    // never match
    /^\b$/
  ));
  const t = e.output.map((s) => U(s).replace(xt, Qn).replace(Es, Fr).replace(Kt, Fr)), r = t.map((s) => s.match(dt).map(Number)), i = r[0].map(
    (s, a) => r.map((o) => {
      if (!(a in o))
        throw Error('The arity of each "output" value must be equal');
      return o[a];
    })
  ).map(
    (s) => Ge({ ...e, output: s })
  );
  return (s) => {
    var u;
    const a = !Gr.test(t[0]) && ((u = t.find((c) => Gr.test(c))) == null ? void 0 : u.replace(dt, ""));
    let o = 0;
    return t[0].replace(
      dt,
      () => `${i[o++](s)}${a || ""}`
    ).replace(Ts, xs);
  };
}, vr = "react-spring: ", Zn = (e) => {
  const t = e;
  let r = !1;
  if (typeof t != "function")
    throw new TypeError(`${vr}once requires a function parameter`);
  return (...n) => {
    r || (t(...n), r = !0);
  };
}, Os = Zn(console.warn);
function Ps() {
  Os(
    `${vr}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var Cs = Zn(console.warn);
function Is() {
  Cs(
    `${vr}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function Ot(e) {
  return d.str(e) && (e[0] == "#" || /\d/.test(e) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !pr() && xt.test(e) || e in (fe || {}));
}
var _r = pr() ? K : Zi, ks = () => {
  const e = F(!1);
  return _r(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function Jn() {
  const e = ee()[1], t = ks();
  return () => {
    t.current && e(Math.random());
  };
}
function Ds(e, t) {
  const [r] = ee(
    () => ({
      inputs: t,
      result: e()
    })
  ), n = F(), i = n.current;
  let s = i;
  return s ? t && s.inputs && Ms(t, s.inputs) || (s = {
    inputs: t,
    result: e()
  }) : s = r, K(() => {
    n.current = s, i == r && (r.inputs = r.result = void 0);
  }, [s]), s.result;
}
function Ms(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var ei = (e) => K(e, Rs), Rs = [];
function Hr(e) {
  const t = F();
  return K(() => {
    t.current = e;
  }), t.current;
}
var Be = Symbol.for("Animated:node"), Vs = (e) => !!e && e[Be] === e, J = (e) => e && e[Be], yr = (e, t) => ss(e, Be, t), Pt = (e) => e && e[Be] && e[Be].getPayload(), ti = class {
  constructor() {
    yr(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
}, et = class extends ti {
  constructor(e) {
    super(), this._value = e, this.done = !0, this.durationProgress = 0, d.num(this._value) && (this.lastPosition = this._value);
  }
  /** @internal */
  static create(e) {
    return new et(e);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(e, t) {
    return d.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0);
  }
  reset() {
    const { done: e } = this;
    this.done = !1, d.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null);
  }
}, We = class extends et {
  constructor(e) {
    super(0), this._string = null, this._toString = Ge({
      output: [e, e]
    });
  }
  /** @internal */
  static create(e) {
    return new We(e);
  }
  getValue() {
    const e = this._string;
    return e ?? (this._string = this._toString(this._value));
  }
  setValue(e) {
    if (d.str(e)) {
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
    e && (this._toString = Ge({
      output: [this.getValue(), e]
    })), this._value = 0, super.reset();
  }
}, _t = { dependencies: null }, Ct = class extends ti {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    const t = {};
    return te(this.source, (r, n) => {
      Vs(r) ? t[n] = r.getValue(e) : q(r) ? t[n] = U(r) : e || (t[n] = r);
    }), t;
  }
  /** Replace the raw object data */
  setValue(e) {
    this.source = e, this.payload = this._makePayload(e);
  }
  reset() {
    this.payload && T(this.payload, (e) => e.reset());
  }
  /** Create a payload set. */
  _makePayload(e) {
    if (e) {
      const t = /* @__PURE__ */ new Set();
      return te(e, this._addToPayload, t), Array.from(t);
    }
  }
  /** Add to a payload set. */
  _addToPayload(e) {
    _t.dependencies && q(e) && _t.dependencies.add(e);
    const t = Pt(e);
    t && T(t, (r) => this.add(r));
  }
}, ri = class extends Ct {
  constructor(e) {
    super(e);
  }
  /** @internal */
  static create(e) {
    return new ri(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    const t = this.getPayload();
    return e.length == t.length ? t.map((r, n) => r.setValue(e[n])).some(Boolean) : (super.setValue(e.map(js)), !0);
  }
};
function js(e) {
  return (Ot(e) ? We : et).create(e);
}
function er(e) {
  const t = J(e);
  return t ? t.constructor : d.arr(e) ? ri : Ot(e) ? We : et;
}
var Kr = (e, t) => {
  const r = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !d.fun(e) || e.prototype && e.prototype.isReactComponent
  );
  return Ji((n, i) => {
    const s = F(null), a = r && // eslint-disable-next-line react-hooks/rules-of-hooks
    L(
      (_) => {
        s.current = Ls(i, _);
      },
      [i]
    ), [o, u] = zs(n, t), c = Jn(), l = () => {
      const _ = s.current;
      if (r && !_)
        return;
      (_ ? t.applyAnimatedValues(_, o.getValue(!0)) : !1) === !1 && c();
    }, f = new Ns(l, u), p = F();
    _r(() => (p.current = f, T(u, (_) => $e(_, f)), () => {
      p.current && (T(
        p.current.deps,
        (_) => qe(_, p.current)
      ), A.cancel(p.current.update));
    })), K(l, []), ei(() => () => {
      const _ = p.current;
      T(_.deps, (m) => qe(m, _));
    });
    const g = t.getComponentProps(o.getValue());
    return /* @__PURE__ */ or.createElement(e, { ...g, ref: a });
  });
}, Ns = class {
  constructor(e, t) {
    this.update = e, this.deps = t;
  }
  eventObserved(e) {
    e.type == "change" && A.write(this.update);
  }
};
function zs(e, t) {
  const r = /* @__PURE__ */ new Set();
  return _t.dependencies = r, e.style && (e = {
    ...e,
    style: t.createAnimatedStyle(e.style)
  }), e = new Ct(e), _t.dependencies = null, [e, r];
}
function Ls(e, t) {
  return e && (d.fun(e) ? e(t) : e.current = t), t;
}
var qr = Symbol.for("AnimatedComponent"), Fs = (e, {
  applyAnimatedValues: t = () => !1,
  createAnimatedStyle: r = (i) => new Ct(i),
  getComponentProps: n = (i) => i
} = {}) => {
  const i = {
    applyAnimatedValues: t,
    createAnimatedStyle: r,
    getComponentProps: n
  }, s = (a) => {
    const o = Br(a) || "Anonymous";
    return d.str(a) ? a = s[a] || (s[a] = Kr(a, i)) : a = a[qr] || (a[qr] = Kr(a, i)), a.displayName = `Animated(${o})`, a;
  };
  return te(e, (a, o) => {
    d.arr(e) && (o = Br(a)), s[o] = s(a);
  }), {
    animated: s
  };
}, Br = (e) => d.str(e) ? e : e && d.str(e.displayName) ? e.displayName : d.fun(e) && e.name || null;
function he(e, ...t) {
  return d.fun(e) ? e(...t) : e;
}
var Fe = (e, t) => e === !0 || !!(t && e && (d.fun(e) ? e(t) : H(e).includes(t))), ni = (e, t) => d.obj(e) ? t && e[t] : e, ii = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, Us = (e) => e, br = (e, t = Us) => {
  let r = Gs;
  e.default && e.default !== !0 && (e = e.default, r = Object.keys(e));
  const n = {};
  for (const i of r) {
    const s = t(e[i], i);
    d.und(s) || (n[i] = s);
  }
  return n;
}, Gs = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
], Hs = {
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
function Ks(e) {
  const t = {};
  let r = 0;
  if (te(e, (n, i) => {
    Hs[i] || (t[i] = n, r++);
  }), r)
    return t;
}
function si(e) {
  const t = Ks(e);
  if (t) {
    const r = { to: t };
    return te(e, (n, i) => i in t || (r[i] = n)), r;
  }
  return { ...e };
}
function Ye(e) {
  return e = U(e), d.arr(e) ? e.map(Ye) : Ot(e) ? Z.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function qs(e) {
  for (const t in e)
    return !0;
  return !1;
}
function tr(e) {
  return d.fun(e) || d.arr(e) && d.obj(e[0]);
}
function Bs(e, t) {
  var r;
  (r = e.ref) == null || r.delete(e), t == null || t.delete(e);
}
function Ws(e, t) {
  var r;
  t && e.ref !== t && ((r = e.ref) == null || r.delete(e), t.add(e), e.ref = t);
}
var Ys = {
  default: { tension: 170, friction: 26 }
}, rr = {
  ...Ys.default,
  mass: 1,
  damping: 1,
  easing: ws.linear,
  clamp: !1
}, Qs = class {
  constructor() {
    this.velocity = 0, Object.assign(this, rr);
  }
};
function Xs(e, t, r) {
  r && (r = { ...r }, Wr(r, t), t = { ...r, ...t }), Wr(e, t), Object.assign(e, t);
  for (const a in rr)
    e[a] == null && (e[a] = rr[a]);
  let { frequency: n, damping: i } = e;
  const { mass: s } = e;
  return d.und(n) || (n < 0.01 && (n = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * s, e.friction = 4 * Math.PI * i * s / n), e;
}
function Wr(e, t) {
  if (!d.und(t.decay))
    e.duration = void 0;
  else {
    const r = !d.und(t.tension) || !d.und(t.friction);
    (r || !d.und(t.frequency) || !d.und(t.damping) || !d.und(t.mass)) && (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0);
  }
}
var Yr = [], Zs = class {
  constructor() {
    this.changed = !1, this.values = Yr, this.toValues = null, this.fromValues = Yr, this.config = new Qs(), this.immediate = !1;
  }
};
function ai(e, { key: t, props: r, defaultProps: n, state: i, actions: s }) {
  return new Promise((a, o) => {
    let u, c, l = Fe(r.cancel ?? (n == null ? void 0 : n.cancel), t);
    if (l)
      g();
    else {
      d.und(r.pause) || (i.paused = Fe(r.pause, t));
      let _ = n == null ? void 0 : n.pause;
      _ !== !0 && (_ = i.paused || Fe(_, t)), u = he(r.delay || 0, t), _ ? (i.resumeQueue.add(p), s.pause()) : (s.resume(), p());
    }
    function f() {
      i.resumeQueue.add(p), i.timeouts.delete(c), c.cancel(), u = c.time - A.now();
    }
    function p() {
      u > 0 && !Z.skipAnimation ? (i.delayed = !0, c = A.setTimeout(g, u), i.pauseQueue.add(f), i.timeouts.add(c)) : g();
    }
    function g() {
      i.delayed && (i.delayed = !1), i.pauseQueue.delete(f), i.timeouts.delete(c), e <= (i.cancelId || 0) && (l = !0);
      try {
        s.start({ ...r, callId: e, cancel: l }, a);
      } catch (_) {
        o(_);
      }
    }
  });
}
var wr = (e, t) => t.length == 1 ? t[0] : t.some((r) => r.cancelled) ? Ae(e.get()) : t.every((r) => r.noop) ? oi(e.get()) : Q(
  e.get(),
  t.every((r) => r.finished)
), oi = (e) => ({
  value: e,
  noop: !0,
  finished: !0,
  cancelled: !1
}), Q = (e, t, r = !1) => ({
  value: e,
  finished: t,
  cancelled: r
}), Ae = (e) => ({
  value: e,
  cancelled: !0,
  finished: !1
});
function ci(e, t, r, n) {
  const { callId: i, parentId: s, onRest: a } = t, { asyncTo: o, promise: u } = r;
  return !s && e === o && !t.reset ? u : r.promise = (async () => {
    r.asyncId = i, r.asyncTo = e;
    const c = br(
      t,
      (b, v) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        v === "onRest" ? void 0 : b
      )
    );
    let l, f;
    const p = new Promise(
      (b, v) => (l = b, f = v)
    ), g = (b) => {
      const v = (
        // The `cancel` prop or `stop` method was used.
        i <= (r.cancelId || 0) && Ae(n) || // The async `to` prop was replaced.
        i !== r.asyncId && Q(n, !1)
      );
      if (v)
        throw b.result = v, f(b), b;
    }, _ = (b, v) => {
      const E = new Qr(), w = new Xr();
      return (async () => {
        if (Z.skipAnimation)
          throw Qe(r), w.result = Q(n, !1), f(w), w;
        g(E);
        const $ = d.obj(b) ? { ...b } : { ...v, to: b };
        $.parentId = i, te(c, (V, M) => {
          d.und($[M]) && ($[M] = V);
        });
        const I = await n.start($);
        return g(E), r.paused && await new Promise((V) => {
          r.resumeQueue.add(V);
        }), I;
      })();
    };
    let m;
    if (Z.skipAnimation)
      return Qe(r), Q(n, !1);
    try {
      let b;
      d.arr(e) ? b = (async (v) => {
        for (const E of v)
          await _(E);
      })(e) : b = Promise.resolve(e(_, n.stop.bind(n))), await Promise.all([b.then(l), p]), m = Q(n.get(), !0, !1);
    } catch (b) {
      if (b instanceof Qr)
        m = b.result;
      else if (b instanceof Xr)
        m = b.result;
      else
        throw b;
    } finally {
      i == r.asyncId && (r.asyncId = s, r.asyncTo = s ? o : void 0, r.promise = s ? u : void 0);
    }
    return d.fun(a) && A.batchedUpdates(() => {
      a(m, n, n.item);
    }), m;
  })();
}
function Qe(e, t) {
  ze(e.timeouts, (r) => r.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
var Qr = class extends Error {
  constructor() {
    super(
      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
    );
  }
}, Xr = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
}, nr = (e) => e instanceof Sr, Js = 1, Sr = class extends Wn {
  constructor() {
    super(...arguments), this.id = Js++, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    this._priority != e && (this._priority = e, this._onPriorityChange(e));
  }
  /** Get the current value */
  get() {
    const e = J(this);
    return e && e.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...e) {
    return Z.to(this, e);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...e) {
    return Ps(), Z.to(this, e);
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
    Ke(this, {
      type: "change",
      parent: this,
      value: e,
      idle: t
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(e) {
    this.idle || Tt.sort(this), Ke(this, {
      type: "priority",
      parent: this,
      priority: e
    });
  }
}, de = Symbol.for("SpringPhase"), ui = 1, li = 2, fi = 4, qt = (e) => (e[de] & ui) > 0, oe = (e) => (e[de] & li) > 0, ke = (e) => (e[de] & fi) > 0, Zr = (e, t) => t ? e[de] |= li | ui : e[de] &= -3, Jr = (e, t) => t ? e[de] |= fi : e[de] &= -5, ea = class extends Sr {
  constructor(e, t) {
    if (super(), this.animation = new Zs(), this.defaultProps = {}, this._state = {
      paused: !1,
      delayed: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !d.und(e) || !d.und(t)) {
      const r = d.obj(e) ? { ...e } : { ...t, from: e };
      d.und(r.default) && (r.default = !0), this.start(r);
    }
  }
  /** Equals true when not advancing on each frame. */
  get idle() {
    return !(oe(this) || this._state.asyncTo) || ke(this);
  }
  get goal() {
    return U(this.animation.to);
  }
  get velocity() {
    const e = J(this);
    return e instanceof et ? e.lastVelocity || 0 : e.getPayload().map((t) => t.lastVelocity || 0);
  }
  /**
   * When true, this value has been animated at least once.
   */
  get hasAnimated() {
    return qt(this);
  }
  /**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */
  get isAnimating() {
    return oe(this);
  }
  /**
   * When true, all current and future animations are paused.
   */
  get isPaused() {
    return ke(this);
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
    const { config: s } = n, a = Pt(n.to);
    !a && q(n.to) && (i = H(U(n.to))), n.values.forEach((c, l) => {
      if (c.done)
        return;
      const f = (
        // Animated strings always go from 0 to 1.
        c.constructor == We ? 1 : a ? a[l].lastPosition : i[l]
      );
      let p = n.immediate, g = f;
      if (!p) {
        if (g = c.lastPosition, s.tension <= 0) {
          c.done = !0;
          return;
        }
        let _ = c.elapsedTime += e;
        const m = n.fromValues[l], b = c.v0 != null ? c.v0 : c.v0 = d.arr(s.velocity) ? s.velocity[l] : s.velocity;
        let v;
        const E = s.precision || (m == f ? 5e-3 : Math.min(1, Math.abs(f - m) * 1e-3));
        if (d.und(s.duration))
          if (s.decay) {
            const w = s.decay === !0 ? 0.998 : s.decay, $ = Math.exp(-(1 - w) * _);
            g = m + b / (1 - w) * (1 - $), p = Math.abs(c.lastPosition - g) <= E, v = b * $;
          } else {
            v = c.lastVelocity == null ? b : c.lastVelocity;
            const w = s.restVelocity || E / 10, $ = s.clamp ? 0 : s.bounce, I = !d.und($), V = m == f ? c.v0 > 0 : m < f;
            let M, ge = !1;
            const N = 1, ie = Math.ceil(e / N);
            for (let G = 0; G < ie && (M = Math.abs(v) > w, !(!M && (p = Math.abs(f - g) <= E, p))); ++G) {
              I && (ge = g == f || g > f == V, ge && (v = -v * $, g = f));
              const se = -s.tension * 1e-6 * (g - f), j = -s.friction * 1e-3 * v, it = (se + j) / s.mass;
              v = v + it * N, g = g + v * N;
            }
          }
        else {
          let w = 1;
          s.duration > 0 && (this._memoizedDuration !== s.duration && (this._memoizedDuration = s.duration, c.durationProgress > 0 && (c.elapsedTime = s.duration * c.durationProgress, _ = c.elapsedTime += e)), w = (s.progress || 0) + _ / this._memoizedDuration, w = w > 1 ? 1 : w < 0 ? 0 : w, c.durationProgress = w), g = m + s.easing(w) * (f - m), v = (g - c.lastPosition) / e, p = w == 1;
        }
        c.lastVelocity = v, Number.isNaN(g) && (console.warn("Got NaN while animating:", this), p = !0);
      }
      a && !a[l].done && (p = !1), p ? c.done = !0 : t = !1, c.setValue(g, s.round) && (r = !0);
    });
    const o = J(this), u = o.getValue();
    if (t) {
      const c = U(n.to);
      (u !== c || r) && !s.decay ? (o.setValue(c), this._onChange(c)) : r && s.decay && this._onChange(u), this._stop();
    } else r && this._onChange(u);
  }
  /** Set the current value, while stopping the current animation */
  set(e) {
    return A.batchedUpdates(() => {
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
    if (oe(this)) {
      const { to: e, config: t } = this.animation;
      A.batchedUpdates(() => {
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
    return d.und(e) ? (r = this.queue || [], this.queue = []) : r = [d.obj(e) ? e : { ...t, to: e }], Promise.all(
      r.map((n) => this._update(n))
    ).then((n) => wr(this, n));
  }
  /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */
  stop(e) {
    const { to: t } = this.animation;
    return this._focus(this.get()), Qe(this._state, e && this._lastCallId), A.batchedUpdates(() => this._stop(t, e)), this;
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
    r = d.obj(r) ? r[t] : r, (r == null || tr(r)) && (r = void 0), n = d.obj(n) ? n[t] : n, n == null && (n = void 0);
    const i = { to: r, from: n };
    return qt(this) || (e.reverse && ([r, n] = [n, r]), n = U(n), d.und(n) ? J(this) || this._set(r) : this._set(n)), i;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...e }, t) {
    const { key: r, defaultProps: n } = this;
    e.default && Object.assign(
      n,
      br(
        e,
        (a, o) => /^on/.test(o) ? ni(a, r) : a
      )
    ), tn(this, e, "onProps"), Me(this, "onProps", e, this);
    const i = this._prepareNode(e);
    if (Object.isFrozen(this))
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    const s = this._state;
    return ai(++this._lastCallId, {
      key: r,
      props: e,
      defaultProps: n,
      state: s,
      actions: {
        pause: () => {
          ke(this) || (Jr(this, !0), Ne(s.pauseQueue), Me(
            this,
            "onPause",
            Q(this, De(this, this.animation.to)),
            this
          ));
        },
        resume: () => {
          ke(this) && (Jr(this, !1), oe(this) && this._resume(), Ne(s.resumeQueue), Me(
            this,
            "onResume",
            Q(this, De(this, this.animation.to)),
            this
          ));
        },
        start: this._merge.bind(this, i)
      }
    }).then((a) => {
      if (e.loop && a.finished && !(t && a.noop)) {
        const o = hi(e);
        if (o)
          return this._update(o, !0);
      }
      return a;
    });
  }
  /** Merge props into the current animation */
  _merge(e, t, r) {
    if (t.cancel)
      return this.stop(!0), r(Ae(this));
    const n = !d.und(e.to), i = !d.und(e.from);
    if (n || i)
      if (t.callId > this._lastToId)
        this._lastToId = t.callId;
      else
        return r(Ae(this));
    const { key: s, defaultProps: a, animation: o } = this, { to: u, from: c } = o;
    let { to: l = u, from: f = c } = e;
    i && !n && (!t.default || d.und(l)) && (l = f), t.reverse && ([l, f] = [f, l]);
    const p = !ne(f, c);
    p && (o.from = f), f = U(f);
    const g = !ne(l, u);
    g && this._focus(l);
    const _ = tr(t.to), { config: m } = o, { decay: b, velocity: v } = m;
    (n || i) && (m.velocity = 0), t.config && !_ && Xs(
      m,
      he(t.config, s),
      // Avoid calling the same "config" prop twice.
      t.config !== a.config ? he(a.config, s) : void 0
    );
    let E = J(this);
    if (!E || d.und(l))
      return r(Q(this, !0));
    const w = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      d.und(t.reset) ? i && !t.default : !d.und(f) && Fe(t.reset, s)
    ), $ = w ? f : this.get(), I = Ye(l), V = d.num(I) || d.arr(I) || Ot(I), M = !_ && (!V || Fe(a.immediate || t.immediate, s));
    if (g) {
      const G = er(l);
      if (G !== E.constructor)
        if (M)
          E = this._set(I);
        else
          throw Error(
            `Cannot animate between ${E.constructor.name} and ${G.name}, as the "to" prop suggests`
          );
    }
    const ge = E.constructor;
    let N = q(l), ie = !1;
    if (!N) {
      const G = w || !qt(this) && p;
      (g || G) && (ie = ne(Ye($), I), N = !ie), (!ne(o.immediate, M) && !M || !ne(m.decay, b) || !ne(m.velocity, v)) && (N = !0);
    }
    if (ie && oe(this) && (o.changed && !w ? N = !0 : N || this._stop(u)), !_ && ((N || q(u)) && (o.values = E.getPayload(), o.toValues = q(l) ? null : ge == We ? [1] : H(I)), o.immediate != M && (o.immediate = M, !M && !w && this._set(u)), N)) {
      const { onRest: G } = o;
      T(ra, (j) => tn(this, t, j));
      const se = Q(this, De(this, u));
      Ne(this._pendingCalls, se), this._pendingCalls.add(r), o.changed && A.batchedUpdates(() => {
        var j;
        o.changed = !w, G == null || G(se, this), w ? he(a.onRest, se) : (j = o.onStart) == null || j.call(o, se, this);
      });
    }
    w && this._set($), _ ? r(ci(t.to, t, this._state, this)) : N ? this._start() : oe(this) && !g ? this._pendingCalls.add(r) : r(oi($));
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(e) {
    const t = this.animation;
    e !== t.to && (Ur(this) && this._detach(), t.to = e, Ur(this) && this._attach());
  }
  _attach() {
    let e = 0;
    const { to: t } = this.animation;
    q(t) && ($e(t, this), nr(t) && (e = t.priority + 1)), this.priority = e;
  }
  _detach() {
    const { to: e } = this.animation;
    q(e) && qe(e, this);
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(e, t = !0) {
    const r = U(e);
    if (!d.und(r)) {
      const n = J(this);
      if (!n || !ne(r, n.getValue())) {
        const i = er(r);
        !n || n.constructor != i ? yr(this, i.create(r)) : n.setValue(r), n && A.batchedUpdates(() => {
          this._onChange(r, t);
        });
      }
    }
    return J(this);
  }
  _onStart() {
    const e = this.animation;
    e.changed || (e.changed = !0, Me(
      this,
      "onStart",
      Q(this, De(this, e.to)),
      this
    ));
  }
  _onChange(e, t) {
    t || (this._onStart(), he(this.animation.onChange, e, this)), he(this.defaultProps.onChange, e, this), super._onChange(e, t);
  }
  // This method resets the animation state (even if already animating) to
  // ensure the latest from/to range is used, and it also ensures this spring
  // is added to the frameloop.
  _start() {
    const e = this.animation;
    J(this).reset(U(e.to)), e.immediate || (e.fromValues = e.values.map((t) => t.lastPosition)), oe(this) || (Zr(this, !0), ke(this) || this._resume());
  }
  _resume() {
    Z.skipAnimation ? this.finish() : Tt.start(this);
  }
  /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */
  _stop(e, t) {
    if (oe(this)) {
      Zr(this, !1);
      const r = this.animation;
      T(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Ke(this, {
        type: "idle",
        parent: this
      });
      const n = t ? Ae(this.get()) : Q(this.get(), De(this, e ?? r.to));
      Ne(this._pendingCalls, n), r.changed && (r.changed = !1, Me(this, "onRest", n, this));
    }
  }
};
function De(e, t) {
  const r = Ye(t), n = Ye(e.get());
  return ne(n, r);
}
function hi(e, t = e.loop, r = e.to) {
  const n = he(t);
  if (n) {
    const i = n !== !0 && si(n), s = (i || e).reverse, a = !i || i.reset;
    return Xe({
      ...e,
      loop: t,
      // Avoid updating default props when looping.
      default: !1,
      // Never loop the `pause` prop.
      pause: void 0,
      // For the "reverse" prop to loop as expected, the "to" prop
      // must be undefined. The "reverse" prop is ignored when the
      // "to" prop is an array or function.
      to: !s || tr(r) ? r : void 0,
      // Ignore the "from" prop except on reset.
      from: a ? e.from : void 0,
      reset: a,
      // The "loop" prop can return a "useSpring" props object to
      // override any of the original props.
      ...i
    });
  }
}
function Xe(e) {
  const { to: t, from: r } = e = si(e), n = /* @__PURE__ */ new Set();
  return d.obj(t) && en(t, n), d.obj(r) && en(r, n), e.keys = n.size ? Array.from(n) : null, e;
}
function ta(e) {
  const t = Xe(e);
  return d.und(t.default) && (t.default = br(t)), t;
}
function en(e, t) {
  te(e, (r, n) => r != null && t.add(n));
}
var ra = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function tn(e, t, r) {
  e.animation[r] = t[r] !== ii(t, r) ? ni(t[r], e.key) : void 0;
}
function Me(e, t, ...r) {
  var n, i, s, a;
  (i = (n = e.animation)[t]) == null || i.call(n, ...r), (a = (s = e.defaultProps)[t]) == null || a.call(s, ...r);
}
var na = ["onStart", "onChange", "onRest"], ia = 1, sa = class {
  constructor(t, r) {
    this.id = ia++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._state = {
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
      d.und(n) || this.springs[r].set(n);
    }
  }
  /** Push an update onto the queue of each value. */
  update(t) {
    return t && this.queue.push(Xe(t)), this;
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
    return t ? r = H(t).map(Xe) : this.queue = [], this._flush ? this._flush(this, r) : (vi(this, r), ir(this, r));
  }
  /** @internal */
  stop(t, r) {
    if (t !== !!t && (r = t), r) {
      const n = this.springs;
      T(H(r), (i) => n[i].stop(!!t));
    } else
      Qe(this._state, this._lastAsyncId), this.each((n) => n.stop(!!t));
    return this;
  }
  /** Freeze the active animation in time */
  pause(t) {
    if (d.und(t))
      this.start({ pause: !0 });
    else {
      const r = this.springs;
      T(H(t), (n) => r[n].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(t) {
    if (d.und(t))
      this.start({ pause: !1 });
    else {
      const r = this.springs;
      T(H(t), (n) => r[n].resume());
    }
    return this;
  }
  /** Call a function once per spring value */
  each(t) {
    te(this.springs, t);
  }
  /** @internal Called at the end of every animation frame */
  _onFrame() {
    const { onStart: t, onChange: r, onRest: n } = this._events, i = this._active.size > 0, s = this._changed.size > 0;
    (i && !this._started || s && !this._started) && (this._started = !0, ze(t, ([u, c]) => {
      c.value = this.get(), u(c, this, this._item);
    }));
    const a = !i && this._started, o = s || a && n.size ? this.get() : null;
    s && r.size && ze(r, ([u, c]) => {
      c.value = o, u(c, this, this._item);
    }), a && (this._started = !1, ze(n, ([u, c]) => {
      c.value = o, u(c, this, this._item);
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
    A.onFrame(this._onFrame);
  }
};
function ir(e, t) {
  return Promise.all(t.map((r) => di(e, r))).then(
    (r) => wr(e, r)
  );
}
async function di(e, t, r) {
  const { keys: n, to: i, from: s, loop: a, onRest: o, onResolve: u } = t, c = d.obj(t.default) && t.default;
  a && (t.loop = !1), i === !1 && (t.to = null), s === !1 && (t.from = null);
  const l = d.arr(i) || d.fun(i) ? i : void 0;
  l ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : T(na, (m) => {
    const b = t[m];
    if (d.fun(b)) {
      const v = e._events[m];
      t[m] = ({ finished: E, cancelled: w }) => {
        const $ = v.get(b);
        $ ? (E || ($.finished = !1), w && ($.cancelled = !0)) : v.set(b, {
          value: null,
          finished: E || !1,
          cancelled: w || !1
        });
      }, c && (c[m] = t[m]);
    }
  });
  const f = e._state;
  t.pause === !f.paused ? (f.paused = t.pause, Ne(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
  const p = (n || Object.keys(e.springs)).map(
    (m) => e.springs[m].start(t)
  ), g = t.cancel === !0 || ii(t, "cancel") === !0;
  (l || g && f.asyncId) && p.push(
    ai(++e._lastAsyncId, {
      props: t,
      state: f,
      actions: {
        pause: Zt,
        resume: Zt,
        start(m, b) {
          g ? (Qe(f, e._lastAsyncId), b(Ae(e))) : (m.onRest = o, b(
            ci(
              l,
              m,
              f,
              e
            )
          ));
        }
      }
    })
  ), f.paused && await new Promise((m) => {
    f.resumeQueue.add(m);
  });
  const _ = wr(e, await Promise.all(p));
  if (a && _.finished && !(r && _.noop)) {
    const m = hi(t, a, i);
    if (m)
      return vi(e, [m]), di(e, m, !0);
  }
  return u && A.batchedUpdates(() => u(_, e, e.item)), _;
}
function rn(e, t) {
  const r = { ...e.springs };
  return t && T(H(t), (n) => {
    d.und(n.keys) && (n = Xe(n)), d.obj(n.to) || (n = { ...n, to: void 0 }), gi(r, n, (i) => mi(i));
  }), pi(e, r), r;
}
function pi(e, t) {
  te(t, (r, n) => {
    e.springs[n] || (e.springs[n] = r, $e(r, e));
  });
}
function mi(e, t) {
  const r = new ea();
  return r.key = e, t && $e(r, t), r;
}
function gi(e, t, r) {
  t.keys && T(t.keys, (n) => {
    (e[n] || (e[n] = r(n)))._prepareNode(t);
  });
}
function vi(e, t) {
  T(t, (r) => {
    gi(e.springs, r, (n) => mi(n, e));
  });
}
var It = ({
  children: e,
  ...t
}) => {
  const r = cr(yt), n = t.pause || !!r.pause, i = t.immediate || !!r.immediate;
  t = Ds(() => ({ pause: n, immediate: i }), [n, i]);
  const { Provider: s } = yt;
  return /* @__PURE__ */ or.createElement(s, { value: t }, e);
}, yt = aa(It, {});
It.Provider = yt.Provider;
It.Consumer = yt.Consumer;
function aa(e, t) {
  return Object.assign(e, or.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
var oa = () => {
  const e = [], t = function(n) {
    Is();
    const i = [];
    return T(e, (s, a) => {
      if (d.und(n))
        i.push(s.start());
      else {
        const o = r(n, s, a);
        o && i.push(s.start(o));
      }
    }), i;
  };
  t.current = e, t.add = function(n) {
    e.includes(n) || e.push(n);
  }, t.delete = function(n) {
    const i = e.indexOf(n);
    ~i && e.splice(i, 1);
  }, t.pause = function() {
    return T(e, (n) => n.pause(...arguments)), this;
  }, t.resume = function() {
    return T(e, (n) => n.resume(...arguments)), this;
  }, t.set = function(n) {
    T(e, (i, s) => {
      const a = d.fun(n) ? n(s, i) : n;
      a && i.set(a);
    });
  }, t.start = function(n) {
    const i = [];
    return T(e, (s, a) => {
      if (d.und(n))
        i.push(s.start());
      else {
        const o = this._getProps(n, s, a);
        o && i.push(s.start(o));
      }
    }), i;
  }, t.stop = function() {
    return T(e, (n) => n.stop(...arguments)), this;
  }, t.update = function(n) {
    return T(e, (i, s) => i.update(this._getProps(n, i, s))), this;
  };
  const r = function(n, i, s) {
    return d.fun(n) ? n(s, i) : n;
  };
  return t._getProps = r, t;
};
function ca(e, t, r) {
  const n = d.fun(t) && t;
  n && !r && (r = []);
  const i = je(
    () => n || arguments.length == 3 ? oa() : void 0,
    []
  ), s = F(0), a = Jn(), o = je(
    () => ({
      ctrls: [],
      queue: [],
      flush(v, E) {
        const w = rn(v, E);
        return s.current > 0 && !o.queue.length && !Object.keys(w).some((I) => !v.springs[I]) ? ir(v, E) : new Promise((I) => {
          pi(v, w), o.queue.push(() => {
            I(ir(v, E));
          }), a();
        });
      }
    }),
    []
  ), u = F([...o.ctrls]), c = [], l = Hr(e) || 0;
  je(() => {
    T(u.current.slice(e, l), (v) => {
      Bs(v, i), v.stop(!0);
    }), u.current.length = e, f(l, e);
  }, [e]), je(() => {
    f(0, Math.min(l, e));
  }, r);
  function f(v, E) {
    for (let w = v; w < E; w++) {
      const $ = u.current[w] || (u.current[w] = new sa(null, o.flush)), I = n ? n(w, $) : t[w];
      I && (c[w] = ta(I));
    }
  }
  const p = u.current.map((v, E) => rn(v, c[E])), g = cr(It), _ = Hr(g), m = g !== _ && qs(g);
  _r(() => {
    s.current++, o.ctrls = u.current;
    const { queue: v } = o;
    v.length && (o.queue = [], T(v, (E) => E())), T(u.current, (E, w) => {
      i == null || i.add(E), m && E.start({ default: g });
      const $ = c[w];
      $ && (Ws(E, $.ref), E.ref ? E.queue.push($) : E.start($));
    });
  }), ei(() => () => {
    T(o.ctrls, (v) => v.stop(!0));
  });
  const b = p.map((v) => ({ ...v }));
  return i ? [b, i] : b;
}
function ua(e, t) {
  const r = d.fun(e), [[n], i] = ca(
    1,
    r ? e : [e],
    r ? [] : t
  );
  return r || arguments.length == 2 ? [n, i] : n;
}
var la = class extends Sr {
  constructor(e, t) {
    super(), this.source = e, this.idle = !0, this._active = /* @__PURE__ */ new Set(), this.calc = Ge(...t);
    const r = this._get(), n = er(r);
    yr(this, n.create(r));
  }
  advance(e) {
    const t = this._get(), r = this.get();
    ne(t, r) || (J(this).setValue(t), this._onChange(t, this.idle)), !this.idle && nn(this._active) && Bt(this);
  }
  _get() {
    const e = d.arr(this.source) ? this.source.map(U) : H(U(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !nn(this._active) && (this.idle = !1, T(Pt(this), (e) => {
      e.done = !1;
    }), Z.skipAnimation ? (A.batchedUpdates(() => this.advance()), Bt(this)) : Tt.start(this));
  }
  // Observe our sources only when we're observed.
  _attach() {
    let e = 1;
    T(H(this.source), (t) => {
      q(t) && $e(t, this), nr(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1));
    }), this.priority = e, this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    T(H(this.source), (e) => {
      q(e) && qe(e, this);
    }), this._active.clear(), Bt(this);
  }
  /** @internal */
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = H(this.source).reduce(
      (t, r) => Math.max(t, (nr(r) ? r.priority : 0) + 1),
      0
    ));
  }
};
function fa(e) {
  return e.idle !== !1;
}
function nn(e) {
  return !e.size || Array.from(e).every(fa);
}
function Bt(e) {
  e.idle || (e.idle = !0, T(Pt(e), (t) => {
    t.done = !0;
  }), Ke(e, {
    type: "idle",
    parent: e
  }));
}
Z.assign({
  createStringInterpolator: Xn,
  to: (e, t) => new la(e, t)
});
var _i = /^--/;
function ha(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !_i.test(e) && !(Ue.hasOwnProperty(e) && Ue[e]) ? t + "px" : ("" + t).trim();
}
var sn = {};
function da(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const r = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", {
    className: n,
    style: i,
    children: s,
    scrollTop: a,
    scrollLeft: o,
    viewBox: u,
    ...c
  } = t, l = Object.values(c), f = Object.keys(c).map(
    (p) => r || e.hasAttribute(p) ? p : sn[p] || (sn[p] = p.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (g) => "-" + g.toLowerCase()
    ))
  );
  s !== void 0 && (e.textContent = s);
  for (const p in i)
    if (i.hasOwnProperty(p)) {
      const g = ha(p, i[p]);
      _i.test(p) ? e.style.setProperty(p, g) : e.style[p] = g;
    }
  f.forEach((p, g) => {
    e.setAttribute(p, l[g]);
  }), n !== void 0 && (e.className = n), a !== void 0 && (e.scrollTop = a), o !== void 0 && (e.scrollLeft = o), u !== void 0 && e.setAttribute("viewBox", u);
}
var Ue = {
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
}, pa = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), ma = ["Webkit", "Ms", "Moz", "O"];
Ue = Object.keys(Ue).reduce((e, t) => (ma.forEach((r) => e[pa(r, t)] = e[t]), e), Ue);
var ga = /^(matrix|translate|scale|rotate|skew)/, va = /^(translate)/, _a = /^(rotate|skew)/, Wt = (e, t) => d.num(e) && e !== 0 ? e + t : e, pt = (e, t) => d.arr(e) ? e.every((r) => pt(r, t)) : d.num(e) ? e === t : parseFloat(e) === t, ya = class extends Ct {
  constructor({ x: e, y: t, z: r, ...n }) {
    const i = [], s = [];
    (e || t || r) && (i.push([e || 0, t || 0, r || 0]), s.push((a) => [
      `translate3d(${a.map((o) => Wt(o, "px")).join(",")})`,
      // prettier-ignore
      pt(a, 0)
    ])), te(n, (a, o) => {
      if (o === "transform")
        i.push([a || ""]), s.push((u) => [u, u === ""]);
      else if (ga.test(o)) {
        if (delete n[o], d.und(a))
          return;
        const u = va.test(o) ? "px" : _a.test(o) ? "deg" : "";
        i.push(H(a)), s.push(
          o === "rotate3d" ? ([c, l, f, p]) => [
            `rotate3d(${c},${l},${f},${Wt(p, u)})`,
            pt(p, 0)
          ] : (c) => [
            `${o}(${c.map((l) => Wt(l, u)).join(",")})`,
            pt(c, o.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    }), i.length && (n.transform = new ba(i, s)), super(n);
  }
}, ba = class extends Wn {
  constructor(e, t) {
    super(), this.inputs = e, this.transforms = t, this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", t = !0;
    return T(this.inputs, (r, n) => {
      const i = U(r[0]), [s, a] = this.transforms[n](
        d.arr(i) ? i : r.map(U)
      );
      e += " " + s, t = t && a;
    }), t ? "none" : e;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(e) {
    e == 1 && T(
      this.inputs,
      (t) => T(
        t,
        (r) => q(r) && $e(r, this)
      )
    );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(e) {
    e == 0 && T(
      this.inputs,
      (t) => T(
        t,
        (r) => q(r) && qe(r, this)
      )
    );
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), Ke(this, e);
  }
}, wa = [
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
Z.assign({
  batchedUpdates: ts,
  createStringInterpolator: Xn,
  colors: us
});
var Sa = Fs(wa, {
  applyAnimatedValues: da,
  createAnimatedStyle: (e) => new ya(e),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop: e, scrollLeft: t, ...r }) => r
}), Aa = Sa.animated;
function Ea(e, t, r) {
  return Math.max(t, Math.min(e, r));
}
const P = {
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
function an(e, t, r) {
  return t === 0 || Math.abs(t) === 1 / 0 ? Math.pow(e, r * 5) : e * t * r / (t + r * e);
}
function on(e, t, r, n = 0.15) {
  return n === 0 ? Ea(e, t, r) : e < t ? -an(t - e, r - t, n) + t : e > r ? +an(e - r, r - t, n) + r : e;
}
function Ta(e, [t, r], [n, i]) {
  const [[s, a], [o, u]] = e;
  return [on(t, s, a, n), on(r, o, u, i)];
}
function $a(e, t) {
  if (typeof e != "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xa(e) {
  var t = $a(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function D(e, t, r) {
  return t = xa(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function cn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cn(Object(r), !0).forEach(function(n) {
      D(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const yi = {
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
function un(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : "";
}
const Oa = ["enter", "leave"];
function Pa(e = !1, t) {
  return e && !Oa.includes(t);
}
function Ca(e, t = "", r = !1) {
  const n = yi[e], i = n && n[t] || t;
  return "on" + un(e) + un(i) + (Pa(r, i) ? "Capture" : "");
}
const Ia = ["gotpointercapture", "lostpointercapture"];
function ka(e) {
  let t = e.substring(2).toLowerCase();
  const r = !!~t.indexOf("passive");
  r && (t = t.replace("passive", ""));
  const n = Ia.includes(t) ? "capturecapture" : "capture", i = !!~t.indexOf(n);
  return i && (t = t.replace("capture", "")), {
    device: t,
    capture: i,
    passive: r
  };
}
function Da(e, t = "") {
  const r = yi[e], n = r && r[t] || t;
  return e + n;
}
function kt(e) {
  return "touches" in e;
}
function bi(e) {
  return kt(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse";
}
function Ma(e) {
  return Array.from(e.touches).filter((t) => {
    var r, n;
    return t.target === e.currentTarget || ((r = e.currentTarget) === null || r === void 0 || (n = r.contains) === null || n === void 0 ? void 0 : n.call(r, t.target));
  });
}
function Ra(e) {
  return e.type === "touchend" || e.type === "touchcancel" ? e.changedTouches : e.targetTouches;
}
function wi(e) {
  return kt(e) ? Ra(e)[0] : e;
}
function sr(e, t) {
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
function Va(e) {
  return Ma(e).map((t) => t.identifier);
}
function ln(e, t) {
  const [r, n] = Array.from(e.touches).filter((i) => t.includes(i.identifier));
  return sr(r, n);
}
function Yt(e) {
  const t = wi(e);
  return kt(e) ? t.identifier : t.pointerId;
}
function Te(e) {
  const t = wi(e);
  return [t.clientX, t.clientY];
}
const fn = 40, hn = 800;
function Si(e) {
  let {
    deltaX: t,
    deltaY: r,
    deltaMode: n
  } = e;
  return n === 1 ? (t *= fn, r *= fn) : n === 2 && (t *= hn, r *= hn), [t, r];
}
function ja(e) {
  var t, r;
  const {
    scrollX: n,
    scrollY: i,
    scrollLeft: s,
    scrollTop: a
  } = e.currentTarget;
  return [(t = n ?? s) !== null && t !== void 0 ? t : 0, (r = i ?? a) !== null && r !== void 0 ? r : 0];
}
function Na(e) {
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
function bt(e, ...t) {
  return typeof e == "function" ? e(...t) : e;
}
function za() {
}
function La(...e) {
  return e.length === 0 ? za : e.length === 1 ? e[0] : function() {
    let t;
    for (const r of e)
      t = r.apply(this, arguments) || t;
    return t;
  };
}
function dn(e, t) {
  return Object.assign({}, t, e || {});
}
const Fa = 32;
class Ai {
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
    r._active || (this.reset(), this.computeInitial(), r._active = !0, r.target = t.target, r.currentTarget = t.currentTarget, r.lastOffset = n.from ? bt(n.from, r) : r.offset, r.offset = r.lastOffset, r.startTime = r.timeStamp = t.timeStamp);
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
    if (t && (r.event = t, n.preventDefault && t.cancelable && r.event.preventDefault(), r.type = t.type, i.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, i.locked = !!document.pointerLockElement, Object.assign(i, Na(t)), i.down = i.pressed = i.buttons % 2 === 1 || i.touches > 0, s = t.timeStamp - r.timeStamp, r.timeStamp = t.timeStamp, r.elapsedTime = r.timeStamp - r.startTime), r._active) {
      const V = r._delta.map(Math.abs);
      P.addTo(r._distance, V);
    }
    this.axisIntent && this.axisIntent(t);
    const [a, o] = r._movement, [u, c] = n.threshold, {
      _step: l,
      values: f
    } = r;
    if (n.hasCustomTransform ? (l[0] === !1 && (l[0] = Math.abs(a) >= u && f[0]), l[1] === !1 && (l[1] = Math.abs(o) >= c && f[1])) : (l[0] === !1 && (l[0] = Math.abs(a) >= u && Math.sign(a) * u), l[1] === !1 && (l[1] = Math.abs(o) >= c && Math.sign(o) * c)), r.intentional = l[0] !== !1 || l[1] !== !1, !r.intentional) return;
    const p = [0, 0];
    if (n.hasCustomTransform) {
      const [V, M] = f;
      p[0] = l[0] !== !1 ? V - l[0] : 0, p[1] = l[1] !== !1 ? M - l[1] : 0;
    } else
      p[0] = l[0] !== !1 ? a - l[0] : 0, p[1] = l[1] !== !1 ? o - l[1] : 0;
    this.restrictToAxis && !r._blocked && this.restrictToAxis(p);
    const g = r.offset, _ = r._active && !r._blocked || r.active;
    _ && (r.first = r._active && !r.active, r.last = !r._active && r.active, r.active = i[this.ingKey] = r._active, t && (r.first && ("bounds" in n && (r._bounds = bt(n.bounds, r)), this.setup && this.setup()), r.movement = p, this.computeOffset()));
    const [m, b] = r.offset, [[v, E], [w, $]] = r._bounds;
    r.overflow = [m < v ? -1 : m > E ? 1 : 0, b < w ? -1 : b > $ ? 1 : 0], r._movementBound[0] = r.overflow[0] ? r._movementBound[0] === !1 ? r._movement[0] : r._movementBound[0] : !1, r._movementBound[1] = r.overflow[1] ? r._movementBound[1] === !1 ? r._movement[1] : r._movementBound[1] : !1;
    const I = r._active ? n.rubberband || [0, 0] : [0, 0];
    if (r.offset = Ta(r._bounds, r.offset, I), r.delta = P.sub(r.offset, g), this.computeMovement(), _ && (!r.last || s > Fa)) {
      r.delta = P.sub(r.offset, g);
      const V = r.delta.map(Math.abs);
      P.addTo(r.distance, V), r.direction = r.delta.map(Math.sign), r._direction = r._delta.map(Math.sign), !r.first && s > 0 && (r.velocity = [V[0] / s, V[1] / s], r.timeDelta = s);
    }
  }
  emit() {
    const t = this.state, r = this.shared, n = this.config;
    if (t._active || this.clean(), (t._blocked || !t.intentional) && !t._force && !n.triggerAllEvents) return;
    const i = this.handler(C(C(C({}, r), t), {}, {
      [this.aliasKey]: t.values
    }));
    i !== void 0 && (t.memo = i);
  }
  clean() {
    this.eventStore.clean(), this.timeoutStore.clean();
  }
}
function Ua([e, t], r) {
  const n = Math.abs(e), i = Math.abs(t);
  if (n > i && n > r)
    return "x";
  if (i > n && i > r)
    return "y";
}
class tt extends Ai {
  constructor(...t) {
    super(...t), D(this, "aliasKey", "xy");
  }
  reset() {
    super.reset(), this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0], this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = P.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = P.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(t) {
    const r = this.state, n = this.config;
    if (!r.axis && t) {
      const i = typeof n.axisThreshold == "object" ? n.axisThreshold[bi(t)] : n.axisThreshold;
      r.axis = Ua(r._movement, i);
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
const pn = (e) => e, mn = 0.15, Ar = {
  enabled(e = !0) {
    return e;
  },
  eventOptions(e, t, r) {
    return C(C({}, r.shared.eventOptions), e);
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
        return [mn, mn];
      case !1:
        return [0, 0];
      default:
        return P.toVector(e);
    }
  },
  from(e) {
    if (typeof e == "function") return e;
    if (e != null) return P.toVector(e);
  },
  transform(e, t, r) {
    const n = e || r.shared.transform;
    if (this.hasCustomTransform = !!n, process.env.NODE_ENV === "development") {
      const i = n || pn;
      return (s) => {
        const a = i(s);
        return (!isFinite(a[0]) || !isFinite(a[1])) && console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${a[0]},${[1]}]`), a;
      };
    }
    return n || pn;
  },
  threshold(e) {
    return P.toVector(e, 0);
  }
};
process.env.NODE_ENV === "development" && Object.assign(Ar, {
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
const Ga = 0, pe = C(C({}, Ar), {}, {
  axis(e, t, {
    axis: r
  }) {
    if (this.lockDirection = r === "lock", !this.lockDirection) return r;
  },
  axisThreshold(e = Ga) {
    return e;
  },
  bounds(e = {}) {
    if (typeof e == "function")
      return (s) => pe.bounds(e(s));
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
}), gn = {
  ArrowRight: (e, t = 1) => [e * t, 0],
  ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
  ArrowUp: (e, t = 1) => [0, -1 * e * t],
  ArrowDown: (e, t = 1) => [0, e * t]
};
class Ha extends tt {
  constructor(...t) {
    super(...t), D(this, "ingKey", "dragging");
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
      t._bounds = pe.bounds(i);
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
    if (t.buttons != null && (Array.isArray(r.pointerButtons) ? !r.pointerButtons.includes(t.buttons) : r.pointerButtons !== -1 && r.pointerButtons !== t.buttons)) return;
    const i = this.ctrl.setEventIds(t);
    r.pointerCapture && t.target.setPointerCapture(t.pointerId), !(i && i.size > 1 && n._pointerActive) && (this.start(t), this.setupPointer(t), n._pointerId = Yt(t), n._pointerActive = !0, this.computeValues(Te(t)), this.computeInitial(), r.preventScrollAxis && bi(t) !== "mouse" ? (n._active = !1, this.setupScrollPrevention(t)) : r.delay > 0 ? (this.setupDelayTrigger(t), r.triggerAllEvents && (this.compute(t), this.emit())) : this.startPointerDrag(t));
  }
  startPointerDrag(t) {
    const r = this.state;
    r._active = !0, r._preventScroll = !0, r._delayed = !1, this.compute(t), this.emit();
  }
  pointerMove(t) {
    const r = this.state, n = this.config;
    if (!r._pointerActive) return;
    const i = Yt(t);
    if (r._pointerId !== void 0 && i !== r._pointerId) return;
    const s = Te(t);
    if (document.pointerLockElement === t.target ? r._delta = [t.movementX, t.movementY] : (r._delta = P.sub(s, r._values), this.computeValues(s)), P.addTo(r._movement, r._delta), this.compute(t), r._delayed && r.intentional) {
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
    if (!r._active || !r._pointerActive) return;
    const i = Yt(t);
    if (r._pointerId !== void 0 && i !== r._pointerId) return;
    this.state._pointerActive = !1, this.setActive(), this.compute(t);
    const [s, a] = r._distance;
    if (r.tap = s <= n.tapsThreshold && a <= n.tapsThreshold, r.tap && n.filterTaps)
      r._force = !0;
    else {
      const [o, u] = r._delta, [c, l] = r._movement, [f, p] = n.swipe.velocity, [g, _] = n.swipe.distance, m = n.swipe.duration;
      if (r.elapsedTime < m) {
        const b = Math.abs(o / r.timeDelta), v = Math.abs(u / r.timeDelta);
        b > f && Math.abs(c) > g && (r.swipe[0] = Math.sign(o)), v > p && Math.abs(l) > _ && (r.swipe[1] = Math.sign(u));
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
    this.state._preventScroll = !1, Ka(t);
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
    const r = gn[t.key];
    if (r) {
      const n = this.state, i = t.shiftKey ? 10 : t.altKey ? 0.1 : 1;
      this.start(t), n._delta = r(this.config.keyboardDisplacement, i), n._keyboardActive = !0, P.addTo(n._movement, n._delta), this.compute(t), this.emit();
    }
  }
  keyUp(t) {
    t.key in gn && (this.state._keyboardActive = !1, this.setActive(), this.compute(t), this.emit());
  }
  bind(t) {
    const r = this.config.device;
    t(r, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (t(r, "change", this.pointerMove.bind(this)), t(r, "end", this.pointerUp.bind(this)), t(r, "cancel", this.pointerUp.bind(this)), t("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (t("key", "down", this.keyDown.bind(this)), t("key", "up", this.keyUp.bind(this))), this.config.filterTaps && t("click", "", this.pointerClick.bind(this), {
      capture: !0,
      passive: !1
    });
  }
}
function Ka(e) {
  "persist" in e && typeof e.persist == "function" && e.persist();
}
const rt = typeof window < "u" && window.document && window.document.createElement;
function Ei() {
  return rt && "ontouchstart" in window;
}
function qa() {
  return Ei() || rt && window.navigator.maxTouchPoints > 1;
}
function Ba() {
  return rt && "onpointerdown" in window;
}
function Wa() {
  return rt && "exitPointerLock" in window.document;
}
function Ya() {
  try {
    return "constructor" in GestureEvent;
  } catch {
    return !1;
  }
}
const B = {
  isBrowser: rt,
  gesture: Ya(),
  touch: Ei(),
  touchscreen: qa(),
  pointer: Ba(),
  pointerLock: Wa()
}, Qa = 250, Xa = 180, Za = 0.5, Ja = 50, eo = 250, to = 10, vn = {
  mouse: 0,
  touch: 0,
  pen: 8
}, Ti = C(C({}, pe), {}, {
  device(e, t, {
    pointer: {
      touch: r = !1,
      lock: n = !1,
      mouse: i = !1
    } = {}
  }) {
    return this.pointerLock = n && B.pointerLock, B.touch && r ? "touch" : this.pointerLock ? "mouse" : B.pointer && !i ? "pointer" : B.touch ? "touch" : "mouse";
  },
  preventScrollAxis(e, t, {
    preventScroll: r
  }) {
    if (this.preventScrollDelay = typeof r == "number" ? r : r || r === void 0 && e ? Qa : void 0, !(!B.touchscreen || r === !1))
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
    const s = P.toVector(e, r ? n : i ? 1 : 0);
    return this.filterTaps = r, this.tapsThreshold = n, s;
  },
  swipe({
    velocity: e = Za,
    distance: t = Ja,
    duration: r = eo
  } = {}) {
    return {
      velocity: this.transform(P.toVector(e)),
      distance: this.transform(P.toVector(t)),
      duration: r
    };
  },
  delay(e = 0) {
    switch (e) {
      case !0:
        return Xa;
      case !1:
        return 0;
      default:
        return e;
    }
  },
  axisThreshold(e) {
    return e ? C(C({}, vn), e) : vn;
  },
  keyboardDisplacement(e = to) {
    return e;
  }
});
process.env.NODE_ENV === "development" && Object.assign(Ti, {
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
function $i(e) {
  const [t, r] = e.overflow, [n, i] = e._delta, [s, a] = e._direction;
  (t < 0 && n > 0 && s < 0 || t > 0 && n < 0 && s > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && i > 0 && a < 0 || r > 0 && i < 0 && a > 0) && (e._movement[1] = e._movementBound[1]);
}
const ro = 30, no = 100;
class io extends Ai {
  constructor(...t) {
    super(...t), D(this, "ingKey", "pinching"), D(this, "aliasKey", "da");
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
    t === "wheel" ? this.state.offset = P.add(r, n) : this.state.offset = [(1 + r[0]) * n[0], r[1] + n[1]];
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
      const i = Math.abs(r) * ro - Math.abs(n);
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
    if (r._active && r._touchIds.every((s) => n.has(s)) || n.size < 2) return;
    this.start(t), r._touchIds = Array.from(n).slice(0, 2);
    const i = ln(t, r._touchIds);
    i && this.pinchStart(t, i);
  }
  pointerStart(t) {
    if (t.buttons != null && t.buttons % 2 !== 1) return;
    this.ctrl.setEventIds(t), t.target.setPointerCapture(t.pointerId);
    const r = this.state, n = r._pointerEvents, i = this.ctrl.pointerIds;
    if (r._active && Array.from(n.keys()).every((a) => i.has(a)) || (n.size < 2 && n.set(t.pointerId, t), r._pointerEvents.size < 2)) return;
    this.start(t);
    const s = sr(...Array.from(n.values()));
    s && this.pinchStart(t, s);
  }
  pinchStart(t, r) {
    const n = this.state;
    n.origin = r.origin, this.computeValues([r.distance, r.angle]), this.computeInitial(), this.compute(t), this.emit();
  }
  touchMove(t) {
    if (!this.state._active) return;
    const r = ln(t, this.state._touchIds);
    r && this.pinchMove(t, r);
  }
  pointerMove(t) {
    const r = this.state._pointerEvents;
    if (r.has(t.pointerId) && r.set(t.pointerId, t), !this.state._active) return;
    const n = sr(...Array.from(r.values()));
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
    if (t.cancelable && t.preventDefault(), !this.state._active) return;
    const r = this.state;
    this.computeValues([t.scale, t.rotation]), r.origin = [t.clientX, t.clientY];
    const n = r._movement;
    r._movement = [t.scale - 1, t.rotation], r._delta = P.sub(r._movement, n), this.compute(t), this.emit();
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
    n._delta = [-Si(t)[1] / no * n.offset[0], 0], P.addTo(n._movement, n._delta), $i(n), this.state.origin = [t.clientX, t.clientY], this.compute(t), this.emit();
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
const so = C(C({}, Ar), {}, {
  device(e, t, {
    shared: r,
    pointer: {
      touch: n = !1
    } = {}
  }) {
    if (r.target && !B.touch && B.gesture) return "gesture";
    if (B.touch && n) return "touch";
    if (B.touchscreen) {
      if (B.pointer) return "pointer";
      if (B.touch) return "touch";
    }
  },
  bounds(e, t, {
    scaleBounds: r = {},
    angleBounds: n = {}
  }) {
    const i = (a) => {
      const o = dn(bt(r, a), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [o.min, o.max];
    }, s = (a) => {
      const o = dn(bt(n, a), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [o.min, o.max];
    };
    return typeof r != "function" && typeof n != "function" ? [i(), s()] : (a) => [i(a), s(a)];
  },
  threshold(e, t, r) {
    return this.lockDirection = r.axis === "lock", P.toVector(e, this.lockDirection ? [0.1, 3] : 0);
  },
  modifierKey(e) {
    return e === void 0 ? "ctrlKey" : e;
  },
  pinchOnWheel(e = !0) {
    return e;
  }
});
class ao extends tt {
  constructor(...t) {
    super(...t), D(this, "ingKey", "moving");
  }
  move(t) {
    this.config.mouseOnly && t.pointerType !== "mouse" || (this.state._active ? this.moveChange(t) : this.moveStart(t), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)));
  }
  moveStart(t) {
    this.start(t), this.computeValues(Te(t)), this.compute(t), this.computeInitial(), this.emit();
  }
  moveChange(t) {
    if (!this.state._active) return;
    const r = Te(t), n = this.state;
    n._delta = P.sub(r, n._values), P.addTo(n._movement, n._delta), this.computeValues(r), this.compute(t), this.emit();
  }
  moveEnd(t) {
    this.state._active && (this.state._active = !1, this.compute(t), this.emit());
  }
  bind(t) {
    t("pointer", "change", this.move.bind(this)), t("pointer", "leave", this.moveEnd.bind(this));
  }
}
const oo = C(C({}, pe), {}, {
  mouseOnly: (e = !0) => e
});
class co extends tt {
  constructor(...t) {
    super(...t), D(this, "ingKey", "scrolling");
  }
  scroll(t) {
    this.state._active || this.start(t), this.scrollChange(t), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
  }
  scrollChange(t) {
    t.cancelable && t.preventDefault();
    const r = this.state, n = ja(t);
    r._delta = P.sub(n, r._values), P.addTo(r._movement, r._delta), this.computeValues(n), this.compute(t), this.emit();
  }
  scrollEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    t("scroll", "", this.scroll.bind(this));
  }
}
const uo = pe;
class lo extends tt {
  constructor(...t) {
    super(...t), D(this, "ingKey", "wheeling");
  }
  wheel(t) {
    this.state._active || this.start(t), this.wheelChange(t), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
  }
  wheelChange(t) {
    const r = this.state;
    r._delta = Si(t), P.addTo(r._movement, r._delta), $i(r), this.compute(t), this.emit();
  }
  wheelEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    t("wheel", "", this.wheel.bind(this));
  }
}
const fo = pe;
class ho extends tt {
  constructor(...t) {
    super(...t), D(this, "ingKey", "hovering");
  }
  enter(t) {
    this.config.mouseOnly && t.pointerType !== "mouse" || (this.start(t), this.computeValues(Te(t)), this.compute(t), this.emit());
  }
  leave(t) {
    if (this.config.mouseOnly && t.pointerType !== "mouse") return;
    const r = this.state;
    if (!r._active) return;
    r._active = !1;
    const n = Te(t);
    r._movement = r._delta = P.sub(n, r._values), this.computeValues(n), this.compute(t), r.delta = r.movement, this.emit();
  }
  bind(t) {
    t("pointer", "enter", this.enter.bind(this)), t("pointer", "leave", this.leave.bind(this));
  }
}
const po = C(C({}, pe), {}, {
  mouseOnly: (e = !0) => e
}), Er = /* @__PURE__ */ new Map(), ar = /* @__PURE__ */ new Map();
function mo(e) {
  Er.set(e.key, e.engine), ar.set(e.key, e.resolver);
}
const go = {
  key: "drag",
  engine: Ha,
  resolver: Ti
}, vo = {
  key: "hover",
  engine: ho,
  resolver: po
}, _o = {
  key: "move",
  engine: ao,
  resolver: oo
}, yo = {
  key: "pinch",
  engine: io,
  resolver: so
}, bo = {
  key: "scroll",
  engine: co,
  resolver: uo
}, wo = {
  key: "wheel",
  engine: lo,
  resolver: fo
};
function So(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, s;
  for (s = 0; s < n.length; s++)
    i = n[s], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Ao(e, t) {
  if (e == null) return {};
  var r = So(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
const Eo = {
  target(e) {
    if (e)
      return () => "current" in e ? e.current : e;
  },
  enabled(e = !0) {
    return e;
  },
  window(e = B.isBrowser ? window : void 0) {
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
}, To = ["target", "eventOptions", "window", "enabled", "transform"];
function mt(e = {}, t) {
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
        r[n] = mt(e[n], i);
        break;
      case "boolean":
        i && (r[n] = e[n]);
        break;
    }
  return r;
}
function $o(e, t, r = {}) {
  const n = e, {
    target: i,
    eventOptions: s,
    window: a,
    enabled: o,
    transform: u
  } = n, c = Ao(n, To);
  if (r.shared = mt({
    target: i,
    eventOptions: s,
    window: a,
    enabled: o,
    transform: u
  }, Eo), t) {
    const l = ar.get(t);
    r[t] = mt(C({
      shared: r.shared
    }, c), l);
  } else
    for (const l in c) {
      const f = ar.get(l);
      if (f)
        r[l] = mt(C({
          shared: r.shared
        }, c[l]), f);
      else if (process.env.NODE_ENV === "development" && !["drag", "pinch", "scroll", "wheel", "move", "hover"].includes(l)) {
        if (l === "domTarget")
          throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
        console.warn(`[@use-gesture]: Unknown config key \`${l}\` was used. Please read the documentation for further information.`);
      }
    }
  return r;
}
class xi {
  constructor(t, r) {
    D(this, "_listeners", /* @__PURE__ */ new Set()), this._ctrl = t, this._gestureKey = r;
  }
  add(t, r, n, i, s) {
    const a = this._listeners, o = Da(r, n), u = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}, c = C(C({}, u), s);
    t.addEventListener(o, i, c);
    const l = () => {
      t.removeEventListener(o, i, c), a.delete(l);
    };
    return a.add(l), l;
  }
  clean() {
    this._listeners.forEach((t) => t()), this._listeners.clear();
  }
}
class xo {
  constructor() {
    D(this, "_timeouts", /* @__PURE__ */ new Map());
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
class Oo {
  constructor(t) {
    D(this, "gestures", /* @__PURE__ */ new Set()), D(this, "_targetEventStore", new xi(this)), D(this, "gestureEventStores", {}), D(this, "gestureTimeoutStores", {}), D(this, "handlers", {}), D(this, "config", {}), D(this, "pointerIds", /* @__PURE__ */ new Set()), D(this, "touchIds", /* @__PURE__ */ new Set()), D(this, "state", {
      shared: {
        shiftKey: !1,
        metaKey: !1,
        ctrlKey: !1,
        altKey: !1
      }
    }), Po(this, t);
  }
  setEventIds(t) {
    if (kt(t))
      return this.touchIds = new Set(Va(t)), this.touchIds;
    if ("pointerId" in t)
      return t.type === "pointerup" || t.type === "pointercancel" ? this.pointerIds.delete(t.pointerId) : t.type === "pointerdown" && this.pointerIds.add(t.pointerId), this.pointerIds;
  }
  applyHandlers(t, r) {
    this.handlers = t, this.nativeHandlers = r;
  }
  applyConfig(t, r) {
    this.config = $o(t, r, this.config);
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
          const o = this.config[a], u = _n(n, o.eventOptions, !!i);
          if (o.enabled) {
            const c = Er.get(a);
            new c(this, t, a).bind(u);
          }
        }
        const s = _n(n, r.eventOptions, !!i);
        for (const a in this.nativeHandlers)
          s(a, "", (o) => this.nativeHandlers[a](C(C({}, this.state.shared), {}, {
            event: o,
            args: t
          })), void 0, !0);
      }
      for (const s in n)
        n[s] = La(...n[s]);
      if (!i) return n;
      for (const s in n) {
        const {
          device: a,
          capture: o,
          passive: u
        } = ka(s);
        this._targetEventStore.add(i, a, "", n[s], {
          capture: o,
          passive: u
        });
      }
    }
  }
}
function be(e, t) {
  e.gestures.add(t), e.gestureEventStores[t] = new xi(e, t), e.gestureTimeoutStores[t] = new xo();
}
function Po(e, t) {
  t.drag && be(e, "drag"), t.wheel && be(e, "wheel"), t.scroll && be(e, "scroll"), t.move && be(e, "move"), t.pinch && be(e, "pinch"), t.hover && be(e, "hover");
}
const _n = (e, t, r) => (n, i, s, a = {}, o = !1) => {
  var u, c;
  const l = (u = a.capture) !== null && u !== void 0 ? u : t.capture, f = (c = a.passive) !== null && c !== void 0 ? c : t.passive;
  let p = o ? n : Ca(n, i, l);
  r && f && (p += "Passive"), e[p] = e[p] || [], e[p].push(s);
}, Co = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function Io(e) {
  const t = {}, r = {}, n = /* @__PURE__ */ new Set();
  for (let i in e)
    Co.test(i) ? (n.add(RegExp.lastMatch), r[i] = e[i]) : t[i] = e[i];
  return [r, t, n];
}
function we(e, t, r, n, i, s) {
  if (!e.has(r)) return;
  if (!Er.has(n)) {
    process.env.NODE_ENV === "development" && console.warn(`[@use-gesture]: You've created a custom handler that that uses the \`${n}\` gesture but isn't properly configured.

Please add \`${n}Action\` when creating your handler.`);
    return;
  }
  const a = r + "Start", o = r + "End", u = (c) => {
    let l;
    return c.first && a in t && t[a](c), r in t && (l = t[r](c)), c.last && o in t && t[o](c), l;
  };
  i[n] = u, s[n] = s[n] || {};
}
function ko(e, t) {
  const [r, n, i] = Io(e), s = {};
  return we(i, r, "onDrag", "drag", s, t), we(i, r, "onWheel", "wheel", s, t), we(i, r, "onScroll", "scroll", s, t), we(i, r, "onPinch", "pinch", s, t), we(i, r, "onMove", "move", s, t), we(i, r, "onHover", "hover", s, t), {
    handlers: s,
    config: t,
    nativeHandlers: n
  };
}
function Do(e, t = {}, r, n) {
  const i = Ut.useMemo(() => new Oo(e), []);
  if (i.applyHandlers(e, n), i.applyConfig(t, r), Ut.useEffect(i.effect.bind(i)), Ut.useEffect(() => i.clean.bind(i), []), t.target === void 0)
    return i.bind.bind(i);
}
function Mo(e) {
  return e.forEach(mo), function(r, n) {
    const {
      handlers: i,
      nativeHandlers: s,
      config: a
    } = ko(r, n || {});
    return Do(i, a, void 0, s);
  };
}
function yn(e, t) {
  return Mo([go, yo, bo, wo, _o, vo])(e, t || {});
}
var Y = /* @__PURE__ */ ((e) => (e.Minimap = "minimap", e.Viewport = "viewport", e))(Y || {});
const Oi = es({}), ce = {
  "viewer-main": "_viewer-main_1mddk_1",
  "viewer-main-fill-height": "_viewer-main-fill-height_1mddk_10",
  "viewer-viewport": "_viewer-viewport_1mddk_14",
  "viewer-minimap-content": "_viewer-minimap-content_1mddk_19",
  "viewer-viewport-content": "_viewer-viewport-content_1mddk_20",
  "viewer-minimap": "_viewer-minimap_1mddk_19",
  "viewer-minimap-viewport-area": "_viewer-minimap-viewport-area_1mddk_38",
  "viewer-viewport-center-guide": "_viewer-viewport-center-guide_1mddk_59"
}, Op = ({
  className: e = "",
  viewportContent: t,
  minimapContent: r
}) => {
  const {
    crop: n,
    setCrop: i,
    settings: s,
    setZoomIn: a,
    setZoomOut: o,
    setResetView: u,
    setCenterView: c,
    setToggleMinimap: l
  } = cr(Oi), f = F(n), p = 0.75, g = 100, _ = F(null), m = F(null), b = F(null), v = F(null), E = Aa("div"), w = F(s.minimap.width), $ = F(160), [I, V] = ee(s.minimap.enabled), [M, ge] = ee({
    width: w.current,
    height: $.current,
    scale: 1
  }), [N, ie] = ua(() => ({
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
  K(() => {
    n !== f.current && (f.current = n, ie.start({ transform: `scale(${n.zoom}) translate(${n.pan[0] / n.zoom}px, ${n.pan[1] / n.zoom}px)` }));
  }, [n, ie]);
  const G = (h, y, S) => {
    const x = (S.width - y.width) / 2, z = (S.height - y.height) / 2;
    return S.width < y.width ? h.pan[0] = 0 : S.left > y.left ? h.pan[0] = Math.min(h.pan[0], x) : S.right < y.right && (h.pan[0] = Math.max(h.pan[0], y.width - S.width + x)), S.height < y.height ? h.pan[1] = 0 : S.top > y.top ? h.pan[1] = Math.min(h.pan[1], z) : S.bottom < y.bottom && (h.pan[1] = Math.max(h.pan[1], y.height - S.height + z)), h;
  }, se = L((h, y) => {
    const S = h.width * y.zoom, x = h.height * y.zoom, z = h.left + h.width / 2, k = h.top + h.height / 2, ct = z * y.zoom - y.pan[0], ut = k * y.zoom - y.pan[1], Lt = (h.width - S) / 2, _e = (h.height - x) / 2, R = ct - S / 2, lt = ut - x / 2, Vr = Lt - R, jr = _e - lt;
    return {
      width: S,
      height: x,
      left: Vr,
      right: Vr + S,
      top: jr,
      bottom: jr + x
    };
  }, []), j = L((h) => {
    if (m.current == null || _.current == null) return h;
    const y = it(m.current, _.current), S = {
      ...y,
      width: y.width,
      height: y.height,
      left: y.left,
      right: y.right,
      top: y.top,
      bottom: y.bottom
    }, x = se(S, h);
    return G(h, S, x);
  }, []), it = (h, y) => {
    const S = y.getBoundingClientRect(), x = h.getBoundingClientRect();
    return {
      top: x.top - S.top,
      left: x.left - S.left,
      width: h.offsetWidth,
      height: h.offsetHeight,
      bottom: x.top - S.top + h.offsetHeight,
      right: x.left - S.left + h.offsetWidth
    };
  }, re = L(() => {
    if (b.current == null || m.current == null)
      return;
    const h = b.current.offsetWidth, y = m.current.offsetWidth / m.current.offsetHeight;
    $.current = h / y;
    const S = h / m.current.offsetWidth;
    ge((z) => ({
      ...z,
      width: w.current,
      height: $.current,
      scale: S
    }));
    let x = {
      ...f.current
    };
    x = j(x), i(x);
  }, [j, i]);
  K(() => {
    if (v.current) {
      const h = v.current.querySelector("img");
      h && (h.complete ? re() : h.onload = re);
      const y = v.current.querySelector("video");
      y && (y.readyState >= 4 ? re() : y.onloadeddata = re);
    }
    return () => {
    };
  }, [t, re]), K(() => {
    re();
  }, [I, re]);
  const zt = L(() => {
    re();
  }, [re]);
  K(() => (window.addEventListener("resize", zt), () => {
    window.removeEventListener("resize", zt);
  }), [zt]);
  const Pr = L((h) => {
    const y = { pan: { ...h.pan }, zoom: h.zoom }, S = j({ pan: { ...h.pan }, zoom: h.zoom });
    return y.pan[0] = Math.max(y.pan[0], S.pan[0] - s.spring.rubberbandDistance), y.pan[0] = Math.min(y.pan[0], S.pan[0] + s.spring.rubberbandDistance), y.pan[1] = Math.max(y.pan[1], S.pan[1] - s.spring.rubberbandDistance), y.pan[1] = Math.min(y.pan[1], S.pan[1] + s.spring.rubberbandDistance), y;
  }, [s, j]), ae = L((h, y, S) => {
    if (!s.zoom.enabled || h.last || !m.current || !_.current) return S || f.current;
    S ?? (S = f.current);
    const x = it(m.current, _.current);
    let z = 0;
    const k = [0, 0];
    if (h.type === "click")
      z = Number(h.zoomChange) * s.zoom.zoomButtonStep;
    else if (h.type === "pointermove" && h.pinching) {
      const R = h;
      z = R.delta[0], k[0] = R.origin[0] - x.width / 2, k[1] = R.origin[1] - x.height / 2;
    } else if (h.type === "wheel") {
      const R = h, lt = h;
      R.ctrlKey && R.pinching === !0 ? (lt.axis === "scale" ? z = lt.delta[0] : R.axis === "x" || R.axis, k[0] = R.event.clientX - x.width / 2, k[1] = R.event.clientY - x.height / 2) : R.axis === "y" && (!("pinching" in R) || R.pinching === !1) && (z = -R.delta[1] / g * s.zoom.mouseWheelStep, k[0] = R.event.clientX - x.width / 2, k[1] = R.event.clientY - x.height / 2);
    }
    y == Y.Minimap && (k[0] = 0, k[1] = 0);
    const ct = Math.min(Math.max(S.zoom + z, s.zoom.min), s.zoom.max), ut = ct / f.current.zoom, Lt = [
      k[0] + (f.current.pan[0] - k[0]) * ut,
      k[1] + (f.current.pan[1] - k[1]) * ut
    ];
    let _e = {
      ...f.current,
      zoom: ct,
      pan: Lt
    };
    return _e = j(_e), i(_e), _e;
  }, [s, i, j]), Cr = L((h, y, S) => {
    if (!s.pan.enabled || h.last) return S || f.current;
    S ?? (S = f.current);
    const x = y == Y.Viewport ? 1 : -f.current.zoom / M.scale, z = [
      S.pan[0] + h.delta[0] * x,
      S.pan[1] + h.delta[1] * x
    ];
    let k = {
      ...f.current,
      pan: z
    };
    return s.spring.rubberband ? k = Pr(k) : k = j(k), i(k), k;
  }, [s, i, j, Pr, M.scale]), ve = L(() => {
    let h = {
      ...f.current
    };
    h = j(h), i(h);
  }, [i, j]), Ir = L(() => {
    ae({
      type: "click",
      zoomChange: -1,
      delta: [0, 0],
      last: !1
    }, Y.Minimap, f.current);
  }, [ae]), kr = L(() => {
    ae({
      type: "click",
      zoomChange: 1,
      delta: [0, 0],
      last: !1
    }, Y.Minimap, f.current);
  }, [ae]), st = L(() => {
    const h = {
      pan: [0, 0],
      zoom: s.zoom.default
    };
    i(h);
  }, [s, i]), at = L(() => {
    const h = {
      pan: [0, 0],
      zoom: f.current.zoom
    };
    i(h);
  }, [i]), ot = L(() => {
    V((h) => !h);
  }, []);
  K(() => (o(() => Ir), a(() => kr), u(() => st), c(() => at), l(() => ot), () => {
  }), [Ir, o, kr, a, st, u, at, c, ot, l]), K(() => {
    const h = (y) => {
      const S = y.key.toLowerCase();
      s.resetView.enabled && S === s.resetView.keyboardShortcut && st(), s.centerView.enabled && S === s.centerView.keyboardShortcut && at(), s.minimap.enabled && S === s.minimap.keyboardShortcut && ot();
    };
    return window.addEventListener("keydown", h), () => {
      window.removeEventListener("keydown", h);
    };
  }, [s, st, at, ot]);
  const Dr = {
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
      from: () => [f.current.zoom * p, 0]
    },
    wheel: {
      enabled: s.zoom.enabled,
      preventDefault: !0,
      from: () => [0, -f.current.zoom * g]
    },
    eventOptions: {
      passive: !1
    }
  };
  yn(
    {
      onDrag: (h) => Cr(h, Y.Viewport, h.memo),
      onDragEnd: ve,
      onPinch: (h) => ae(h, Y.Viewport, h.memo),
      onPinchEnd: ve,
      onWheel: (h) => ae(h, Y.Viewport, h.memo),
      onWheelEnd: ve
    },
    {
      ...Dr,
      target: m
    }
  ), yn({
    onDrag: (h) => Cr(h, Y.Minimap, h.memo),
    onDragEnd: ve,
    onPinch: (h) => ae(h, Y.Minimap, h.memo),
    onPinchEnd: ve,
    onWheel: (h) => ae(h, Y.Minimap, h.memo),
    onWheelEnd: ve
  }, {
    ...Dr,
    target: b
  });
  const Yi = {
    width: w.current,
    height: $.current,
    display: I && r ? "block" : "none",
    outline: s.minimap.outlineStyle
  };
  let Mr = {};
  if (m.current) {
    const h = M.scale;
    Mr = {
      // The order of transform matters! Scale first, then translate
      transform: `scale(${1 / Math.max(n.zoom, 1)}) translate(${-n.pan[0] * h}px, ${-n.pan[1] * h}px)`,
      width: `${m.current.offsetWidth * h}px`,
      height: `${m.current.offsetHeight * h}px`,
      outline: s.minimap.viewportAreaOutlineStyle
    };
  }
  const Qi = s.spring.enabled === !0 ? N : { transform: `scale(${n.zoom}) translate(${n.pan[0] / n.zoom}px, ${n.pan[1] / n.zoom}px)` };
  let Rr = {};
  m.current && (Rr = {
    transformOrigin: "0% 0%",
    transform: `scale(${M.scale})`,
    width: `${m.current.offsetWidth}px`,
    height: `${m.current.offsetHeight}px`
  });
  const Xi = [
    e,
    ce["viewer-main"],
    s.fillHeight && ce["viewer-main-fill-height"]
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ Ft("div", { className: Xi, ref: _, children: [
    /* @__PURE__ */ Ft("div", { className: ce["viewer-minimap"], ref: b, style: Yi, children: [
      /* @__PURE__ */ Ve("div", { className: ce["viewer-minimap-content"], style: Rr, children: r }),
      /* @__PURE__ */ Ve("div", { className: ce["viewer-minimap-viewport-area"], style: Mr })
    ] }),
    /* @__PURE__ */ Ft("div", { className: ce["viewer-viewport"], ref: m, children: [
      s.guides.enabled && /* @__PURE__ */ Ve("div", { className: ce["viewer-viewport-center-guide"] }),
      /* @__PURE__ */ Ve(E, { className: ce["viewer-viewport-content"], ref: v, style: Qi, children: t })
    ] })
  ] });
};
var ht = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ro(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Vo() {
  this.__data__ = [], this.size = 0;
}
var jo = Vo;
function No(e, t) {
  return e === t || e !== e && t !== t;
}
var Dt = No, zo = Dt;
function Lo(e, t) {
  for (var r = e.length; r--; )
    if (zo(e[r][0], t))
      return r;
  return -1;
}
var Mt = Lo, Fo = Mt, Uo = Array.prototype, Go = Uo.splice;
function Ho(e) {
  var t = this.__data__, r = Fo(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Go.call(t, r, 1), --this.size, !0;
}
var Ko = Ho, qo = Mt;
function Bo(e) {
  var t = this.__data__, r = qo(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Wo = Bo, Yo = Mt;
function Qo(e) {
  return Yo(this.__data__, e) > -1;
}
var Xo = Qo, Zo = Mt;
function Jo(e, t) {
  var r = this.__data__, n = Zo(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var ec = Jo, tc = jo, rc = Ko, nc = Wo, ic = Xo, sc = ec;
function xe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
xe.prototype.clear = tc;
xe.prototype.delete = rc;
xe.prototype.get = nc;
xe.prototype.has = ic;
xe.prototype.set = sc;
var Rt = xe, ac = Rt;
function oc() {
  this.__data__ = new ac(), this.size = 0;
}
var cc = oc;
function uc(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var lc = uc;
function fc(e) {
  return this.__data__.get(e);
}
var hc = fc;
function dc(e) {
  return this.__data__.has(e);
}
var pc = dc, mc = typeof ht == "object" && ht && ht.Object === Object && ht, Pi = mc, gc = Pi, vc = typeof self == "object" && self && self.Object === Object && self, _c = gc || vc || Function("return this")(), Oe = _c, yc = Oe, bc = yc.Symbol, Ci = bc, bn = Ci, Ii = Object.prototype, wc = Ii.hasOwnProperty, Sc = Ii.toString, Re = bn ? bn.toStringTag : void 0;
function Ac(e) {
  var t = wc.call(e, Re), r = e[Re];
  try {
    e[Re] = void 0;
    var n = !0;
  } catch {
  }
  var i = Sc.call(e);
  return n && (t ? e[Re] = r : delete e[Re]), i;
}
var Ec = Ac, Tc = Object.prototype, $c = Tc.toString;
function xc(e) {
  return $c.call(e);
}
var Oc = xc, wn = Ci, Pc = Ec, Cc = Oc, Ic = "[object Null]", kc = "[object Undefined]", Sn = wn ? wn.toStringTag : void 0;
function Dc(e) {
  return e == null ? e === void 0 ? kc : Ic : Sn && Sn in Object(e) ? Pc(e) : Cc(e);
}
var Vt = Dc;
function Mc(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var me = Mc, Rc = Vt, Vc = me, jc = "[object AsyncFunction]", Nc = "[object Function]", zc = "[object GeneratorFunction]", Lc = "[object Proxy]";
function Fc(e) {
  if (!Vc(e))
    return !1;
  var t = Rc(e);
  return t == Nc || t == zc || t == jc || t == Lc;
}
var Tr = Fc, Uc = Oe, Gc = Uc["__core-js_shared__"], Hc = Gc, Qt = Hc, An = function() {
  var e = /[^.]+$/.exec(Qt && Qt.keys && Qt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Kc(e) {
  return !!An && An in e;
}
var qc = Kc, Bc = Function.prototype, Wc = Bc.toString;
function Yc(e) {
  if (e != null) {
    try {
      return Wc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Qc = Yc, Xc = Tr, Zc = qc, Jc = me, eu = Qc, tu = /[\\^$.*+?()[\]{}|]/g, ru = /^\[object .+?Constructor\]$/, nu = Function.prototype, iu = Object.prototype, su = nu.toString, au = iu.hasOwnProperty, ou = RegExp(
  "^" + su.call(au).replace(tu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function cu(e) {
  if (!Jc(e) || Zc(e))
    return !1;
  var t = Xc(e) ? ou : ru;
  return t.test(eu(e));
}
var uu = cu;
function lu(e, t) {
  return e == null ? void 0 : e[t];
}
var fu = lu, hu = uu, du = fu;
function pu(e, t) {
  var r = du(e, t);
  return hu(r) ? r : void 0;
}
var $r = pu, mu = $r, gu = Oe, vu = mu(gu, "Map"), ki = vu, _u = $r, yu = _u(Object, "create"), jt = yu, En = jt;
function bu() {
  this.__data__ = En ? En(null) : {}, this.size = 0;
}
var wu = bu;
function Su(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Au = Su, Eu = jt, Tu = "__lodash_hash_undefined__", $u = Object.prototype, xu = $u.hasOwnProperty;
function Ou(e) {
  var t = this.__data__;
  if (Eu) {
    var r = t[e];
    return r === Tu ? void 0 : r;
  }
  return xu.call(t, e) ? t[e] : void 0;
}
var Pu = Ou, Cu = jt, Iu = Object.prototype, ku = Iu.hasOwnProperty;
function Du(e) {
  var t = this.__data__;
  return Cu ? t[e] !== void 0 : ku.call(t, e);
}
var Mu = Du, Ru = jt, Vu = "__lodash_hash_undefined__";
function ju(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Ru && t === void 0 ? Vu : t, this;
}
var Nu = ju, zu = wu, Lu = Au, Fu = Pu, Uu = Mu, Gu = Nu;
function Pe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Pe.prototype.clear = zu;
Pe.prototype.delete = Lu;
Pe.prototype.get = Fu;
Pe.prototype.has = Uu;
Pe.prototype.set = Gu;
var Hu = Pe, Tn = Hu, Ku = Rt, qu = ki;
function Bu() {
  this.size = 0, this.__data__ = {
    hash: new Tn(),
    map: new (qu || Ku)(),
    string: new Tn()
  };
}
var Wu = Bu;
function Yu(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Qu = Yu, Xu = Qu;
function Zu(e, t) {
  var r = e.__data__;
  return Xu(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Nt = Zu, Ju = Nt;
function el(e) {
  var t = Ju(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var tl = el, rl = Nt;
function nl(e) {
  return rl(this, e).get(e);
}
var il = nl, sl = Nt;
function al(e) {
  return sl(this, e).has(e);
}
var ol = al, cl = Nt;
function ul(e, t) {
  var r = cl(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var ll = ul, fl = Wu, hl = tl, dl = il, pl = ol, ml = ll;
function Ce(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ce.prototype.clear = fl;
Ce.prototype.delete = hl;
Ce.prototype.get = dl;
Ce.prototype.has = pl;
Ce.prototype.set = ml;
var gl = Ce, vl = Rt, _l = ki, yl = gl, bl = 200;
function wl(e, t) {
  var r = this.__data__;
  if (r instanceof vl) {
    var n = r.__data__;
    if (!_l || n.length < bl - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new yl(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Sl = wl, Al = Rt, El = cc, Tl = lc, $l = hc, xl = pc, Ol = Sl;
function Ie(e) {
  var t = this.__data__ = new Al(e);
  this.size = t.size;
}
Ie.prototype.clear = El;
Ie.prototype.delete = Tl;
Ie.prototype.get = $l;
Ie.prototype.has = xl;
Ie.prototype.set = Ol;
var Pl = Ie, Cl = $r, Il = function() {
  try {
    var e = Cl(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Di = Il, $n = Di;
function kl(e, t, r) {
  t == "__proto__" && $n ? $n(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var xr = kl, Dl = xr, Ml = Dt;
function Rl(e, t, r) {
  (r !== void 0 && !Ml(e[t], r) || r === void 0 && !(t in e)) && Dl(e, t, r);
}
var Mi = Rl;
function Vl(e) {
  return function(t, r, n) {
    for (var i = -1, s = Object(t), a = n(t), o = a.length; o--; ) {
      var u = a[e ? o : ++i];
      if (r(s[u], u, s) === !1)
        break;
    }
    return t;
  };
}
var jl = Vl, Nl = jl, zl = Nl(), Ll = zl, wt = { exports: {} };
wt.exports;
(function(e, t) {
  var r = Oe, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, s = i && i.exports === n, a = s ? r.Buffer : void 0, o = a ? a.allocUnsafe : void 0;
  function u(c, l) {
    if (l)
      return c.slice();
    var f = c.length, p = o ? o(f) : new c.constructor(f);
    return c.copy(p), p;
  }
  e.exports = u;
})(wt, wt.exports);
var Fl = wt.exports, Ul = Oe, Gl = Ul.Uint8Array, Hl = Gl, xn = Hl;
function Kl(e) {
  var t = new e.constructor(e.byteLength);
  return new xn(t).set(new xn(e)), t;
}
var ql = Kl, Bl = ql;
function Wl(e, t) {
  var r = t ? Bl(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Yl = Wl;
function Ql(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Xl = Ql, Zl = me, On = Object.create, Jl = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Zl(t))
      return {};
    if (On)
      return On(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), ef = Jl;
function tf(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var rf = tf, nf = rf, sf = nf(Object.getPrototypeOf, Object), Ri = sf, af = Object.prototype;
function of(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || af;
  return e === r;
}
var Vi = of, cf = ef, uf = Ri, lf = Vi;
function ff(e) {
  return typeof e.constructor == "function" && !lf(e) ? cf(uf(e)) : {};
}
var hf = ff;
function df(e) {
  return e != null && typeof e == "object";
}
var nt = df, pf = Vt, mf = nt, gf = "[object Arguments]";
function vf(e) {
  return mf(e) && pf(e) == gf;
}
var _f = vf, Pn = _f, yf = nt, ji = Object.prototype, bf = ji.hasOwnProperty, wf = ji.propertyIsEnumerable, Sf = Pn(/* @__PURE__ */ function() {
  return arguments;
}()) ? Pn : function(e) {
  return yf(e) && bf.call(e, "callee") && !wf.call(e, "callee");
}, Ni = Sf, Af = Array.isArray, zi = Af, Ef = 9007199254740991;
function Tf(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ef;
}
var Li = Tf, $f = Tr, xf = Li;
function Of(e) {
  return e != null && xf(e.length) && !$f(e);
}
var Or = Of, Pf = Or, Cf = nt;
function If(e) {
  return Cf(e) && Pf(e);
}
var kf = If, St = { exports: {} };
function Df() {
  return !1;
}
var Mf = Df;
St.exports;
(function(e, t) {
  var r = Oe, n = Mf, i = t && !t.nodeType && t, s = i && !0 && e && !e.nodeType && e, a = s && s.exports === i, o = a ? r.Buffer : void 0, u = o ? o.isBuffer : void 0, c = u || n;
  e.exports = c;
})(St, St.exports);
var Fi = St.exports, Rf = Vt, Vf = Ri, jf = nt, Nf = "[object Object]", zf = Function.prototype, Lf = Object.prototype, Ui = zf.toString, Ff = Lf.hasOwnProperty, Uf = Ui.call(Object);
function Gf(e) {
  if (!jf(e) || Rf(e) != Nf)
    return !1;
  var t = Vf(e);
  if (t === null)
    return !0;
  var r = Ff.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Ui.call(r) == Uf;
}
var Hf = Gf, Kf = Vt, qf = Li, Bf = nt, Wf = "[object Arguments]", Yf = "[object Array]", Qf = "[object Boolean]", Xf = "[object Date]", Zf = "[object Error]", Jf = "[object Function]", eh = "[object Map]", th = "[object Number]", rh = "[object Object]", nh = "[object RegExp]", ih = "[object Set]", sh = "[object String]", ah = "[object WeakMap]", oh = "[object ArrayBuffer]", ch = "[object DataView]", uh = "[object Float32Array]", lh = "[object Float64Array]", fh = "[object Int8Array]", hh = "[object Int16Array]", dh = "[object Int32Array]", ph = "[object Uint8Array]", mh = "[object Uint8ClampedArray]", gh = "[object Uint16Array]", vh = "[object Uint32Array]", O = {};
O[uh] = O[lh] = O[fh] = O[hh] = O[dh] = O[ph] = O[mh] = O[gh] = O[vh] = !0;
O[Wf] = O[Yf] = O[oh] = O[Qf] = O[ch] = O[Xf] = O[Zf] = O[Jf] = O[eh] = O[th] = O[rh] = O[nh] = O[ih] = O[sh] = O[ah] = !1;
function _h(e) {
  return Bf(e) && qf(e.length) && !!O[Kf(e)];
}
var yh = _h;
function bh(e) {
  return function(t) {
    return e(t);
  };
}
var wh = bh, At = { exports: {} };
At.exports;
(function(e, t) {
  var r = Pi, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, s = i && i.exports === n, a = s && r.process, o = function() {
    try {
      var u = i && i.require && i.require("util").types;
      return u || a && a.binding && a.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(At, At.exports);
var Sh = At.exports, Ah = yh, Eh = wh, Cn = Sh, In = Cn && Cn.isTypedArray, Th = In ? Eh(In) : Ah, Gi = Th;
function $h(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Hi = $h, xh = xr, Oh = Dt, Ph = Object.prototype, Ch = Ph.hasOwnProperty;
function Ih(e, t, r) {
  var n = e[t];
  (!(Ch.call(e, t) && Oh(n, r)) || r === void 0 && !(t in e)) && xh(e, t, r);
}
var kh = Ih, Dh = kh, Mh = xr;
function Rh(e, t, r, n) {
  var i = !r;
  r || (r = {});
  for (var s = -1, a = t.length; ++s < a; ) {
    var o = t[s], u = n ? n(r[o], e[o], o, r, e) : void 0;
    u === void 0 && (u = e[o]), i ? Mh(r, o, u) : Dh(r, o, u);
  }
  return r;
}
var Vh = Rh;
function jh(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Nh = jh, zh = 9007199254740991, Lh = /^(?:0|[1-9]\d*)$/;
function Fh(e, t) {
  var r = typeof e;
  return t = t ?? zh, !!t && (r == "number" || r != "symbol" && Lh.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ki = Fh, Uh = Nh, Gh = Ni, Hh = zi, Kh = Fi, qh = Ki, Bh = Gi, Wh = Object.prototype, Yh = Wh.hasOwnProperty;
function Qh(e, t) {
  var r = Hh(e), n = !r && Gh(e), i = !r && !n && Kh(e), s = !r && !n && !i && Bh(e), a = r || n || i || s, o = a ? Uh(e.length, String) : [], u = o.length;
  for (var c in e)
    (t || Yh.call(e, c)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    qh(c, u))) && o.push(c);
  return o;
}
var Xh = Qh;
function Zh(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Jh = Zh, ed = me, td = Vi, rd = Jh, nd = Object.prototype, id = nd.hasOwnProperty;
function sd(e) {
  if (!ed(e))
    return rd(e);
  var t = td(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !id.call(e, n)) || r.push(n);
  return r;
}
var ad = sd, od = Xh, cd = ad, ud = Or;
function ld(e) {
  return ud(e) ? od(e, !0) : cd(e);
}
var qi = ld, fd = Vh, hd = qi;
function dd(e) {
  return fd(e, hd(e));
}
var pd = dd, kn = Mi, md = Fl, gd = Yl, vd = Xl, _d = hf, Dn = Ni, Mn = zi, yd = kf, bd = Fi, wd = Tr, Sd = me, Ad = Hf, Ed = Gi, Rn = Hi, Td = pd;
function $d(e, t, r, n, i, s, a) {
  var o = Rn(e, r), u = Rn(t, r), c = a.get(u);
  if (c) {
    kn(e, r, c);
    return;
  }
  var l = s ? s(o, u, r + "", e, t, a) : void 0, f = l === void 0;
  if (f) {
    var p = Mn(u), g = !p && bd(u), _ = !p && !g && Ed(u);
    l = u, p || g || _ ? Mn(o) ? l = o : yd(o) ? l = vd(o) : g ? (f = !1, l = md(u, !0)) : _ ? (f = !1, l = gd(u, !0)) : l = [] : Ad(u) || Dn(u) ? (l = o, Dn(o) ? l = Td(o) : (!Sd(o) || wd(o)) && (l = _d(u))) : f = !1;
  }
  f && (a.set(u, l), i(l, u, n, s, a), a.delete(u)), kn(e, r, l);
}
var xd = $d, Od = Pl, Pd = Mi, Cd = Ll, Id = xd, kd = me, Dd = qi, Md = Hi;
function Bi(e, t, r, n, i) {
  e !== t && Cd(t, function(s, a) {
    if (i || (i = new Od()), kd(s))
      Id(e, t, a, r, Bi, n, i);
    else {
      var o = n ? n(Md(e, a), s, a + "", e, t, i) : void 0;
      o === void 0 && (o = s), Pd(e, a, o);
    }
  }, Dd);
}
var Rd = Bi;
function Vd(e) {
  return e;
}
var Wi = Vd;
function jd(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var Nd = jd, zd = Nd, Vn = Math.max;
function Ld(e, t, r) {
  return t = Vn(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, s = Vn(n.length - t, 0), a = Array(s); ++i < s; )
      a[i] = n[t + i];
    i = -1;
    for (var o = Array(t + 1); ++i < t; )
      o[i] = n[i];
    return o[t] = r(a), zd(e, this, o);
  };
}
var Fd = Ld;
function Ud(e) {
  return function() {
    return e;
  };
}
var Gd = Ud, Hd = Gd, jn = Di, Kd = Wi, qd = jn ? function(e, t) {
  return jn(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Hd(t),
    writable: !0
  });
} : Kd, Bd = qd, Wd = 800, Yd = 16, Qd = Date.now;
function Xd(e) {
  var t = 0, r = 0;
  return function() {
    var n = Qd(), i = Yd - (n - r);
    if (r = n, i > 0) {
      if (++t >= Wd)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var Zd = Xd, Jd = Bd, ep = Zd, tp = ep(Jd), rp = tp, np = Wi, ip = Fd, sp = rp;
function ap(e, t) {
  return sp(ip(e, t, np), e + "");
}
var op = ap, cp = Dt, up = Or, lp = Ki, fp = me;
function hp(e, t, r) {
  if (!fp(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? up(r) && lp(t, r.length) : n == "string" && t in r) ? cp(r[t], e) : !1;
}
var dp = hp, pp = op, mp = dp;
function gp(e) {
  return pp(function(t, r) {
    var n = -1, i = r.length, s = i > 1 ? r[i - 1] : void 0, a = i > 2 ? r[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (i--, s) : void 0, a && mp(r[0], r[1], a) && (s = i < 3 ? void 0 : s, i = 1), t = Object(t); ++n < i; ) {
      var o = r[n];
      o && e(t, o, n, s);
    }
    return t;
  });
}
var vp = gp, _p = Rd, yp = vp, bp = yp(function(e, t, r) {
  _p(e, t, r);
}), wp = bp;
const Sp = /* @__PURE__ */ Ro(wp), Ap = {
  pan: { enabled: !0 },
  zoom: { enabled: !0, default: 1, min: 1, max: 4, mouseWheelStep: 0.5, zoomButtonStep: 0.5 },
  resetView: { enabled: !0, keyboardShortcut: "r" },
  centerView: { enabled: !1, keyboardShortcut: "c" },
  minimap: { enabled: !0, width: "160px", keyboardShortcut: "m", outlineStyle: "1px solid #ccc", viewportAreaOutlineStyle: "2px solid #333" },
  spring: { enabled: !0, rubberband: !0, rubberbandDistance: 100 },
  guides: { enabled: !1 },
  fillHeight: !0
}, Nn = {
  pan: [0, 0],
  zoom: 1
}, Pp = ({
  children: e,
  settings: t = {}
}) => {
  const r = je(() => Sp({ ...Ap }, t), [t]), [n, i] = ee(Nn), [s, a] = ee(() => {
  }), [o, u] = ee(() => {
  }), [c, l] = ee(() => {
  }), [f, p] = ee(() => {
  }), [g, _] = ee(() => {
  });
  return K(() => {
    i({ pan: Nn.pan, zoom: r.zoom.default });
  }, [r.zoom.default]), /* @__PURE__ */ Ve(Oi.Provider, { value: {
    crop: n,
    setCrop: i,
    settings: r,
    zoomOut: s,
    setZoomOut: a,
    zoomIn: o,
    setZoomIn: u,
    resetView: c,
    setResetView: l,
    centerView: f,
    setCenterView: p,
    toggleMinimap: g,
    setToggleMinimap: _
  }, children: e });
};
export {
  Op as Viewer,
  Oi as ViewerContext,
  Pp as ViewerProvider
};
