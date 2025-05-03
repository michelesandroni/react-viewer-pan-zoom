import { jsxs as Ct, jsx as Le } from "react/jsx-runtime";
import * as tn from "react";
import It, { useState as ve, useRef as Z, useEffect as ie, useLayoutEffect as ai, forwardRef as ci, useCallback as te, useContext as nn, useMemo as Fe, createContext as ui } from "react";
import { unstable_batchedUpdates as li } from "react-dom";
import './index.css';var rn = st(), C = (e) => it(e, rn), sn = st();
C.write = (e) => it(e, sn);
var bt = st();
C.onStart = (e) => it(e, bt);
var on = st();
C.onFrame = (e) => it(e, on);
var an = st();
C.onFinish = (e) => it(e, an);
var ke = [];
C.setTimeout = (e, t) => {
  const n = C.now() + t, r = () => {
    const s = ke.findIndex((o) => o.cancel == r);
    ~s && ke.splice(s, 1), Ee -= ~s ? 1 : 0;
  }, i = { time: n, handler: e, cancel: r };
  return ke.splice(pr(n), 0, i), Ee += 1, mr(), i;
};
var pr = (e) => ~(~ke.findIndex((t) => t.time > e) || ~ke.length);
C.cancel = (e) => {
  bt.delete(e), on.delete(e), an.delete(e), rn.delete(e), sn.delete(e);
};
C.sync = (e) => {
  Wt = !0, C.batchedUpdates(e), Wt = !1;
};
C.throttle = (e) => {
  let t;
  function n() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function r(...i) {
    t = i, C.onStart(n);
  }
  return r.handler = e, r.cancel = () => {
    bt.delete(n), t = null;
  }, r;
};
var cn = typeof window < "u" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {
  }
);
C.use = (e) => cn = e;
C.now = typeof performance < "u" ? () => performance.now() : Date.now;
C.batchedUpdates = (e) => e();
C.catch = console.error;
C.frameLoop = "always";
C.advance = () => {
  C.frameLoop !== "demand" ? console.warn(
    "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
  ) : gr();
};
var we = -1, Ee = 0, Wt = !1;
function it(e, t) {
  Wt ? (t.delete(e), e(0)) : (t.add(e), mr());
}
function mr() {
  we < 0 && (we = 0, C.frameLoop !== "demand" && cn(vr));
}
function fi() {
  we = -1;
}
function vr() {
  ~we && (cn(vr), C.batchedUpdates(gr));
}
function gr() {
  const e = we;
  we = C.now();
  const t = pr(we);
  if (t && (yr(ke.splice(0, t), (n) => n.handler()), Ee -= t), !Ee) {
    fi();
    return;
  }
  bt.flush(), rn.flush(e ? Math.min(64, we - e) : 16.667), on.flush(), sn.flush(), an.flush();
}
function st() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return {
    add(n) {
      Ee += t == e && !e.has(n) ? 1 : 0, e.add(n);
    },
    delete(n) {
      return Ee -= t == e && e.has(n) ? 1 : 0, e.delete(n);
    },
    flush(n) {
      t.size && (e = /* @__PURE__ */ new Set(), Ee -= t.size, yr(t, (r) => r(n) && e.add(r)), Ee += e.size, t = e);
    }
  };
}
function yr(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      C.catch(r);
    }
  });
}
var di = Object.defineProperty, hi = (e, t) => {
  for (var n in t)
    di(e, n, { get: t[n], enumerable: !0 });
}, de = {};
hi(de, {
  assign: () => mi,
  colors: () => Se,
  createStringInterpolator: () => ln,
  skipAnimation: () => br,
  to: () => _r,
  willAdvance: () => fn
});
function Yt() {
}
var pi = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), y = {
  arr: Array.isArray,
  obj: (e) => !!e && e.constructor.name === "Object",
  fun: (e) => typeof e == "function",
  str: (e) => typeof e == "string",
  num: (e) => typeof e == "number",
  und: (e) => e === void 0
};
function ye(e, t) {
  if (y.arr(e)) {
    if (!y.arr(t) || e.length !== t.length)
      return !1;
    for (let n = 0; n < e.length; n++)
      if (e[n] !== t[n])
        return !1;
    return !0;
  }
  return e === t;
}
var V = (e, t) => e.forEach(t);
function ge(e, t, n) {
  if (y.arr(e)) {
    for (let r = 0; r < e.length; r++)
      t.call(n, e[r], `${r}`);
    return;
  }
  for (const r in e)
    e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var ne = (e) => y.und(e) ? [] : y.arr(e) ? e : [e];
function qe(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), V(n, t);
  }
}
var Ue = (e, ...t) => qe(e, (n) => n(...t)), un = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), ln, _r, Se = null, br = !1, fn = Yt, mi = (e) => {
  e.to && (_r = e.to), e.now && (C.now = e.now), e.colors !== void 0 && (Se = e.colors), e.skipAnimation != null && (br = e.skipAnimation), e.createStringInterpolator && (ln = e.createStringInterpolator), e.requestAnimationFrame && C.use(e.requestAnimationFrame), e.batchedUpdates && (C.batchedUpdates = e.batchedUpdates), e.willAdvance && (fn = e.willAdvance), e.frameLoop && (C.frameLoop = e.frameLoop);
}, We = /* @__PURE__ */ new Set(), ae = [], Rt = [], mt = 0, wt = {
  get idle() {
    return !We.size && !ae.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(e) {
    mt > e.priority ? (We.add(e), C.onStart(vi)) : (wr(e), C(Ht));
  },
  /** Advance all animations by the given time. */
  advance: Ht,
  /** Call this when an animation's priority changes. */
  sort(e) {
    if (mt)
      C.onFrame(() => wt.sort(e));
    else {
      const t = ae.indexOf(e);
      ~t && (ae.splice(t, 1), Er(e));
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    ae = [], We.clear();
  }
};
function vi() {
  We.forEach(wr), We.clear(), C(Ht);
}
function wr(e) {
  ae.includes(e) || Er(e);
}
function Er(e) {
  ae.splice(
    gi(ae, (t) => t.priority > e.priority),
    0,
    e
  );
}
function Ht(e) {
  const t = Rt;
  for (let n = 0; n < ae.length; n++) {
    const r = ae[n];
    mt = r.priority, r.idle || (fn(r), r.advance(e), r.idle || t.push(r));
  }
  return mt = 0, Rt = ae, Rt.length = 0, ae = t, ae.length > 0;
}
function gi(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var yi = {
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
}, fe = "[-+]?\\d*\\.?\\d+", vt = fe + "%";
function Et(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var _i = new RegExp("rgb" + Et(fe, fe, fe)), bi = new RegExp("rgba" + Et(fe, fe, fe, fe)), wi = new RegExp("hsl" + Et(fe, vt, vt)), Ei = new RegExp(
  "hsla" + Et(fe, vt, vt, fe)
), Si = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Ti = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Pi = /^#([0-9a-fA-F]{6})$/, xi = /^#([0-9a-fA-F]{8})$/;
function Ai(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Pi.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Se && Se[e] !== void 0 ? Se[e] : (t = _i.exec(e)) ? (Ce(t[1]) << 24 | // r
  Ce(t[2]) << 16 | // g
  Ce(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = bi.exec(e)) ? (Ce(t[1]) << 24 | // r
  Ce(t[2]) << 16 | // g
  Ce(t[3]) << 8 | // b
  Pn(t[4])) >>> // a
  0 : (t = Si.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = xi.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Ti.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = wi.exec(e)) ? (Sn(
    Tn(t[1]),
    // h
    lt(t[2]),
    // s
    lt(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = Ei.exec(e)) ? (Sn(
    Tn(t[1]),
    // h
    lt(t[2]),
    // s
    lt(t[3])
    // l
  ) | Pn(t[4])) >>> // a
  0 : null;
}
function kt(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Sn(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r, s = kt(i, r, e + 1 / 3), o = kt(i, r, e), a = kt(i, r, e - 1 / 3);
  return Math.round(s * 255) << 24 | Math.round(o * 255) << 16 | Math.round(a * 255) << 8;
}
function Ce(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Tn(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Pn(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function lt(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function xn(e) {
  let t = Ai(e);
  if (t === null)
    return e;
  t = t || 0;
  const n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, i = (t & 65280) >>> 8, s = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${i}, ${s})`;
}
var Be = (e, t, n) => {
  if (y.fun(e))
    return e;
  if (y.arr(e))
    return Be({
      range: e,
      output: t,
      extrapolate: n
    });
  if (y.str(e.output[0]))
    return ln(e);
  const r = e, i = r.output, s = r.range || [0, 1], o = r.extrapolateLeft || r.extrapolate || "extend", a = r.extrapolateRight || r.extrapolate || "extend", d = r.easing || ((c) => c);
  return (c) => {
    const l = Ci(c, s);
    return Oi(
      c,
      s[l],
      s[l + 1],
      i[l],
      i[l + 1],
      d,
      o,
      a,
      r.map
    );
  };
};
function Oi(e, t, n, r, i, s, o, a, d) {
  let c = d ? d(e) : e;
  if (c < t) {
    if (o === "identity")
      return c;
    o === "clamp" && (c = t);
  }
  if (c > n) {
    if (a === "identity")
      return c;
    a === "clamp" && (c = n);
  }
  return r === i ? r : t === n ? e <= t ? r : i : (t === -1 / 0 ? c = -c : n === 1 / 0 ? c = c - t : c = (c - t) / (n - t), c = s(c), r === -1 / 0 ? c = -c : i === 1 / 0 ? c = c + r : c = c * (i - r) + r, c);
}
function Ci(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
var Ii = {
  linear: (e) => e
}, Ge = Symbol.for("FluidValue.get"), Me = Symbol.for("FluidValue.observers"), se = (e) => !!(e && e[Ge]), J = (e) => e && e[Ge] ? e[Ge]() : e, An = (e) => e[Me] || null;
function Ri(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function Qe(e, t) {
  const n = e[Me];
  n && n.forEach((r) => {
    Ri(r, t);
  });
}
var Sr = class {
  constructor(e) {
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    ki(this, e);
  }
}, ki = (e, t) => Tr(e, Ge, t);
function $e(e, t) {
  if (e[Ge]) {
    let n = e[Me];
    n || Tr(e, Me, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function Xe(e, t) {
  const n = e[Me];
  if (n && n.has(t)) {
    const r = n.size - 1;
    r ? n.delete(t) : e[Me] = null, e.observerRemoved && e.observerRemoved(r, t);
  }
}
var Tr = (e, t, n) => Object.defineProperty(e, t, {
  value: n,
  writable: !0,
  configurable: !0
}), dt = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Di = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, On = new RegExp(`(${dt.source})(%|[a-z]+)`, "i"), Mi = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, St = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, Pr = (e) => {
  const [t, n] = Vi(e);
  if (!t || un())
    return e;
  const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  if (r)
    return r.trim();
  if (n && n.startsWith("--")) {
    const i = window.getComputedStyle(document.documentElement).getPropertyValue(n);
    return i || e;
  } else {
    if (n && St.test(n))
      return Pr(n);
    if (n)
      return n;
  }
  return e;
}, Vi = (e) => {
  const t = St.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
}, Dt, $i = (e, t, n, r, i) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`, xr = (e) => {
  Dt || (Dt = Se ? (
    // match color names, ignore partial matches
    new RegExp(`(${Object.keys(Se).join("|")})(?!\\w)`, "g")
  ) : (
    // never match
    /^\b$/
  ));
  const t = e.output.map((s) => J(s).replace(St, Pr).replace(Di, xn).replace(Dt, xn)), n = t.map((s) => s.match(dt).map(Number)), i = n[0].map(
    (s, o) => n.map((a) => {
      if (!(o in a))
        throw Error('The arity of each "output" value must be equal');
      return a[o];
    })
  ).map(
    (s) => Be({ ...e, output: s })
  );
  return (s) => {
    var d;
    const o = !On.test(t[0]) && ((d = t.find((c) => On.test(c))) == null ? void 0 : d.replace(dt, ""));
    let a = 0;
    return t[0].replace(
      dt,
      () => `${i[a++](s)}${o || ""}`
    ).replace(Mi, $i);
  };
}, dn = "react-spring: ", Ar = (e) => {
  const t = e;
  let n = !1;
  if (typeof t != "function")
    throw new TypeError(`${dn}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, ji = Ar(console.warn);
function zi() {
  ji(
    `${dn}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var Ni = Ar(console.warn);
function Li() {
  Ni(
    `${dn}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function Tt(e) {
  return y.str(e) && (e[0] == "#" || /\d/.test(e) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !un() && St.test(e) || e in (Se || {}));
}
var hn = un() ? ie : ai, Fi = () => {
  const e = Z(!1);
  return hn(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function Or() {
  const e = ve()[1], t = Fi();
  return () => {
    t.current && e(Math.random());
  };
}
function Ui(e, t) {
  const [n] = ve(
    () => ({
      inputs: t,
      result: e()
    })
  ), r = Z(), i = r.current;
  let s = i;
  return s ? t && s.inputs && qi(t, s.inputs) || (s = {
    inputs: t,
    result: e()
  }) : s = n, ie(() => {
    r.current = s, i == n && (n.inputs = n.result = void 0);
  }, [s]), s.result;
}
function qi(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var Cr = (e) => ie(e, Wi), Wi = [];
function Cn(e) {
  const t = Z();
  return ie(() => {
    t.current = e;
  }), t.current;
}
var Ze = Symbol.for("Animated:node"), Yi = (e) => !!e && e[Ze] === e, me = (e) => e && e[Ze], pn = (e, t) => pi(e, Ze, t), Pt = (e) => e && e[Ze] && e[Ze].getPayload(), Ir = class {
  constructor() {
    pn(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
}, ot = class extends Ir {
  constructor(e) {
    super(), this._value = e, this.done = !0, this.durationProgress = 0, y.num(this._value) && (this.lastPosition = this._value);
  }
  /** @internal */
  static create(e) {
    return new ot(e);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(e, t) {
    return y.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0);
  }
  reset() {
    const { done: e } = this;
    this.done = !1, y.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null);
  }
}, Je = class extends ot {
  constructor(e) {
    super(0), this._string = null, this._toString = Be({
      output: [e, e]
    });
  }
  /** @internal */
  static create(e) {
    return new Je(e);
  }
  getValue() {
    const e = this._string;
    return e ?? (this._string = this._toString(this._value));
  }
  setValue(e) {
    if (y.str(e)) {
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
    e && (this._toString = Be({
      output: [this.getValue(), e]
    })), this._value = 0, super.reset();
  }
}, gt = { dependencies: null }, xt = class extends Ir {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    const t = {};
    return ge(this.source, (n, r) => {
      Yi(n) ? t[r] = n.getValue(e) : se(n) ? t[r] = J(n) : e || (t[r] = n);
    }), t;
  }
  /** Replace the raw object data */
  setValue(e) {
    this.source = e, this.payload = this._makePayload(e);
  }
  reset() {
    this.payload && V(this.payload, (e) => e.reset());
  }
  /** Create a payload set. */
  _makePayload(e) {
    if (e) {
      const t = /* @__PURE__ */ new Set();
      return ge(e, this._addToPayload, t), Array.from(t);
    }
  }
  /** Add to a payload set. */
  _addToPayload(e) {
    gt.dependencies && se(e) && gt.dependencies.add(e);
    const t = Pt(e);
    t && V(t, (n) => this.add(n));
  }
}, Rr = class extends xt {
  constructor(e) {
    super(e);
  }
  /** @internal */
  static create(e) {
    return new Rr(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    const t = this.getPayload();
    return e.length == t.length ? t.map((n, r) => n.setValue(e[r])).some(Boolean) : (super.setValue(e.map(Hi)), !0);
  }
};
function Hi(e) {
  return (Tt(e) ? Je : ot).create(e);
}
function Kt(e) {
  const t = me(e);
  return t ? t.constructor : y.arr(e) ? Rr : Tt(e) ? Je : ot;
}
var In = (e, t) => {
  const n = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !y.fun(e) || e.prototype && e.prototype.isReactComponent
  );
  return ci((r, i) => {
    const s = Z(null), o = n && // eslint-disable-next-line react-hooks/rules-of-hooks
    te(
      (E) => {
        s.current = Gi(i, E);
      },
      [i]
    ), [a, d] = Bi(r, t), c = Or(), l = () => {
      const E = s.current;
      if (n && !E)
        return;
      (E ? t.applyAnimatedValues(E, a.getValue(!0)) : !1) === !1 && c();
    }, f = new Ki(l, d), m = Z();
    hn(() => (m.current = f, V(d, (E) => $e(E, f)), () => {
      m.current && (V(
        m.current.deps,
        (E) => Xe(E, m.current)
      ), C.cancel(m.current.update));
    })), ie(l, []), Cr(() => () => {
      const E = m.current;
      V(E.deps, (v) => Xe(v, E));
    });
    const _ = t.getComponentProps(a.getValue());
    return /* @__PURE__ */ tn.createElement(e, { ..._, ref: o });
  });
}, Ki = class {
  constructor(e, t) {
    this.update = e, this.deps = t;
  }
  eventObserved(e) {
    e.type == "change" && C.write(this.update);
  }
};
function Bi(e, t) {
  const n = /* @__PURE__ */ new Set();
  return gt.dependencies = n, e.style && (e = {
    ...e,
    style: t.createAnimatedStyle(e.style)
  }), e = new xt(e), gt.dependencies = null, [e, n];
}
function Gi(e, t) {
  return e && (y.fun(e) ? e(t) : e.current = t), t;
}
var Rn = Symbol.for("AnimatedComponent"), Qi = (e, {
  applyAnimatedValues: t = () => !1,
  createAnimatedStyle: n = (i) => new xt(i),
  getComponentProps: r = (i) => i
} = {}) => {
  const i = {
    applyAnimatedValues: t,
    createAnimatedStyle: n,
    getComponentProps: r
  }, s = (o) => {
    const a = kn(o) || "Anonymous";
    return y.str(o) ? o = s[o] || (s[o] = In(o, i)) : o = o[Rn] || (o[Rn] = In(o, i)), o.displayName = `Animated(${a})`, o;
  };
  return ge(e, (o, a) => {
    y.arr(e) && (a = kn(o)), s[a] = s(o);
  }), {
    animated: s
  };
}, kn = (e) => y.str(e) ? e : e && y.str(e.displayName) ? e.displayName : y.fun(e) && e.name || null;
function Te(e, ...t) {
  return y.fun(e) ? e(...t) : e;
}
var Ye = (e, t) => e === !0 || !!(t && e && (y.fun(e) ? e(t) : ne(e).includes(t))), kr = (e, t) => y.obj(e) ? t && e[t] : e, Dr = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, Xi = (e) => e, mn = (e, t = Xi) => {
  let n = Zi;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  const r = {};
  for (const i of n) {
    const s = t(e[i], i);
    y.und(s) || (r[i] = s);
  }
  return r;
}, Zi = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
], Ji = {
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
function es(e) {
  const t = {};
  let n = 0;
  if (ge(e, (r, i) => {
    Ji[i] || (t[i] = r, n++);
  }), n)
    return t;
}
function Mr(e) {
  const t = es(e);
  if (t) {
    const n = { to: t };
    return ge(e, (r, i) => i in t || (n[i] = r)), n;
  }
  return { ...e };
}
function et(e) {
  return e = J(e), y.arr(e) ? e.map(et) : Tt(e) ? de.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function ts(e) {
  for (const t in e)
    return !0;
  return !1;
}
function Bt(e) {
  return y.fun(e) || y.arr(e) && y.obj(e[0]);
}
function ns(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function rs(e, t) {
  var n;
  t && e.ref !== t && ((n = e.ref) == null || n.delete(e), t.add(e), e.ref = t);
}
var is = {
  default: { tension: 170, friction: 26 }
}, Gt = {
  ...is.default,
  mass: 1,
  damping: 1,
  easing: Ii.linear,
  clamp: !1
}, ss = class {
  constructor() {
    this.velocity = 0, Object.assign(this, Gt);
  }
};
function os(e, t, n) {
  n && (n = { ...n }, Dn(n, t), t = { ...n, ...t }), Dn(e, t), Object.assign(e, t);
  for (const o in Gt)
    e[o] == null && (e[o] = Gt[o]);
  let { frequency: r, damping: i } = e;
  const { mass: s } = e;
  return y.und(r) || (r < 0.01 && (r = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * s, e.friction = 4 * Math.PI * i * s / r), e;
}
function Dn(e, t) {
  if (!y.und(t.decay))
    e.duration = void 0;
  else {
    const n = !y.und(t.tension) || !y.und(t.friction);
    (n || !y.und(t.frequency) || !y.und(t.damping) || !y.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
var Mn = [], as = class {
  constructor() {
    this.changed = !1, this.values = Mn, this.toValues = null, this.fromValues = Mn, this.config = new ss(), this.immediate = !1;
  }
};
function Vr(e, { key: t, props: n, defaultProps: r, state: i, actions: s }) {
  return new Promise((o, a) => {
    let d, c, l = Ye(n.cancel ?? (r == null ? void 0 : r.cancel), t);
    if (l)
      _();
    else {
      y.und(n.pause) || (i.paused = Ye(n.pause, t));
      let E = r == null ? void 0 : r.pause;
      E !== !0 && (E = i.paused || Ye(E, t)), d = Te(n.delay || 0, t), E ? (i.resumeQueue.add(m), s.pause()) : (s.resume(), m());
    }
    function f() {
      i.resumeQueue.add(m), i.timeouts.delete(c), c.cancel(), d = c.time - C.now();
    }
    function m() {
      d > 0 && !de.skipAnimation ? (i.delayed = !0, c = C.setTimeout(_, d), i.pauseQueue.add(f), i.timeouts.add(c)) : _();
    }
    function _() {
      i.delayed && (i.delayed = !1), i.pauseQueue.delete(f), i.timeouts.delete(c), e <= (i.cancelId || 0) && (l = !0);
      try {
        s.start({ ...n, callId: e, cancel: l }, o);
      } catch (E) {
        a(E);
      }
    }
  });
}
var vn = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? De(e.get()) : t.every((n) => n.noop) ? $r(e.get()) : le(
  e.get(),
  t.every((n) => n.finished)
), $r = (e) => ({
  value: e,
  noop: !0,
  finished: !0,
  cancelled: !1
}), le = (e, t, n = !1) => ({
  value: e,
  finished: t,
  cancelled: n
}), De = (e) => ({
  value: e,
  cancelled: !0,
  finished: !1
});
function jr(e, t, n, r) {
  const { callId: i, parentId: s, onRest: o } = t, { asyncTo: a, promise: d } = n;
  return !s && e === a && !t.reset ? d : n.promise = (async () => {
    n.asyncId = i, n.asyncTo = e;
    const c = mn(
      t,
      (T, b) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        b === "onRest" ? void 0 : T
      )
    );
    let l, f;
    const m = new Promise(
      (T, b) => (l = T, f = b)
    ), _ = (T) => {
      const b = (
        // The `cancel` prop or `stop` method was used.
        i <= (n.cancelId || 0) && De(r) || // The async `to` prop was replaced.
        i !== n.asyncId && le(r, !1)
      );
      if (b)
        throw T.result = b, f(T), T;
    }, E = (T, b) => {
      const A = new Vn(), S = new $n();
      return (async () => {
        if (de.skipAnimation)
          throw tt(n), S.result = le(r, !1), f(S), S;
        _(A);
        const x = y.obj(T) ? { ...T } : { ...b, to: T };
        x.parentId = i, ge(c, (L, H) => {
          y.und(x[H]) && (x[H] = L);
        });
        const g = await r.start(x);
        return _(A), n.paused && await new Promise((L) => {
          n.resumeQueue.add(L);
        }), g;
      })();
    };
    let v;
    if (de.skipAnimation)
      return tt(n), le(r, !1);
    try {
      let T;
      y.arr(e) ? T = (async (b) => {
        for (const A of b)
          await E(A);
      })(e) : T = Promise.resolve(e(E, r.stop.bind(r))), await Promise.all([T.then(l), m]), v = le(r.get(), !0, !1);
    } catch (T) {
      if (T instanceof Vn)
        v = T.result;
      else if (T instanceof $n)
        v = T.result;
      else
        throw T;
    } finally {
      i == n.asyncId && (n.asyncId = s, n.asyncTo = s ? a : void 0, n.promise = s ? d : void 0);
    }
    return y.fun(o) && C.batchedUpdates(() => {
      o(v, r, r.item);
    }), v;
  })();
}
function tt(e, t) {
  qe(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
var Vn = class extends Error {
  constructor() {
    super(
      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
    );
  }
}, $n = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
}, Qt = (e) => e instanceof gn, cs = 1, gn = class extends Sr {
  constructor() {
    super(...arguments), this.id = cs++, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    this._priority != e && (this._priority = e, this._onPriorityChange(e));
  }
  /** Get the current value */
  get() {
    const e = me(this);
    return e && e.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...e) {
    return de.to(this, e);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...e) {
    return zi(), de.to(this, e);
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
    Qe(this, {
      type: "change",
      parent: this,
      value: e,
      idle: t
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(e) {
    this.idle || wt.sort(this), Qe(this, {
      type: "priority",
      parent: this,
      priority: e
    });
  }
}, Pe = Symbol.for("SpringPhase"), zr = 1, Nr = 2, Lr = 4, Mt = (e) => (e[Pe] & zr) > 0, _e = (e) => (e[Pe] & Nr) > 0, je = (e) => (e[Pe] & Lr) > 0, jn = (e, t) => t ? e[Pe] |= Nr | zr : e[Pe] &= -3, zn = (e, t) => t ? e[Pe] |= Lr : e[Pe] &= -5, us = class extends gn {
  constructor(e, t) {
    if (super(), this.animation = new as(), this.defaultProps = {}, this._state = {
      paused: !1,
      delayed: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !y.und(e) || !y.und(t)) {
      const n = y.obj(e) ? { ...e } : { ...t, from: e };
      y.und(n.default) && (n.default = !0), this.start(n);
    }
  }
  /** Equals true when not advancing on each frame. */
  get idle() {
    return !(_e(this) || this._state.asyncTo) || je(this);
  }
  get goal() {
    return J(this.animation.to);
  }
  get velocity() {
    const e = me(this);
    return e instanceof ot ? e.lastVelocity || 0 : e.getPayload().map((t) => t.lastVelocity || 0);
  }
  /**
   * When true, this value has been animated at least once.
   */
  get hasAnimated() {
    return Mt(this);
  }
  /**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */
  get isAnimating() {
    return _e(this);
  }
  /**
   * When true, all current and future animations are paused.
   */
  get isPaused() {
    return je(this);
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
    let t = !0, n = !1;
    const r = this.animation;
    let { toValues: i } = r;
    const { config: s } = r, o = Pt(r.to);
    !o && se(r.to) && (i = ne(J(r.to))), r.values.forEach((c, l) => {
      if (c.done)
        return;
      const f = (
        // Animated strings always go from 0 to 1.
        c.constructor == Je ? 1 : o ? o[l].lastPosition : i[l]
      );
      let m = r.immediate, _ = f;
      if (!m) {
        if (_ = c.lastPosition, s.tension <= 0) {
          c.done = !0;
          return;
        }
        let E = c.elapsedTime += e;
        const v = r.fromValues[l], T = c.v0 != null ? c.v0 : c.v0 = y.arr(s.velocity) ? s.velocity[l] : s.velocity;
        let b;
        const A = s.precision || (v == f ? 5e-3 : Math.min(1, Math.abs(f - v) * 1e-3));
        if (y.und(s.duration))
          if (s.decay) {
            const S = s.decay === !0 ? 0.998 : s.decay, x = Math.exp(-(1 - S) * E);
            _ = v + T / (1 - S) * (1 - x), m = Math.abs(c.lastPosition - _) <= A, b = T * x;
          } else {
            b = c.lastVelocity == null ? T : c.lastVelocity;
            const S = s.restVelocity || A / 10, x = s.clamp ? 0 : s.bounce, g = !y.und(x), L = v == f ? c.v0 > 0 : v < f;
            let H, he = !1;
            const G = 1, ce = Math.ceil(e / G);
            for (let F = 0; F < ce && (H = Math.abs(b) > S, !(!H && (m = Math.abs(f - _) <= A, m))); ++F) {
              g && (he = _ == f || _ > f == L, he && (b = -b * x, _ = f));
              const ee = -s.tension * 1e-6 * (_ - f), K = -s.friction * 1e-3 * b, re = (ee + K) / s.mass;
              b = b + re * G, _ = _ + b * G;
            }
          }
        else {
          let S = 1;
          s.duration > 0 && (this._memoizedDuration !== s.duration && (this._memoizedDuration = s.duration, c.durationProgress > 0 && (c.elapsedTime = s.duration * c.durationProgress, E = c.elapsedTime += e)), S = (s.progress || 0) + E / this._memoizedDuration, S = S > 1 ? 1 : S < 0 ? 0 : S, c.durationProgress = S), _ = v + s.easing(S) * (f - v), b = (_ - c.lastPosition) / e, m = S == 1;
        }
        c.lastVelocity = b, Number.isNaN(_) && (console.warn("Got NaN while animating:", this), m = !0);
      }
      o && !o[l].done && (m = !1), m ? c.done = !0 : t = !1, c.setValue(_, s.round) && (n = !0);
    });
    const a = me(this), d = a.getValue();
    if (t) {
      const c = J(r.to);
      (d !== c || n) && !s.decay ? (a.setValue(c), this._onChange(c)) : n && s.decay && this._onChange(d), this._stop();
    } else n && this._onChange(d);
  }
  /** Set the current value, while stopping the current animation */
  set(e) {
    return C.batchedUpdates(() => {
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
    if (_e(this)) {
      const { to: e, config: t } = this.animation;
      C.batchedUpdates(() => {
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
    let n;
    return y.und(e) ? (n = this.queue || [], this.queue = []) : n = [y.obj(e) ? e : { ...t, to: e }], Promise.all(
      n.map((r) => this._update(r))
    ).then((r) => vn(this, r));
  }
  /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */
  stop(e) {
    const { to: t } = this.animation;
    return this._focus(this.get()), tt(this._state, e && this._lastCallId), C.batchedUpdates(() => this._stop(t, e)), this;
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
    let { to: n, from: r } = e;
    n = y.obj(n) ? n[t] : n, (n == null || Bt(n)) && (n = void 0), r = y.obj(r) ? r[t] : r, r == null && (r = void 0);
    const i = { to: n, from: r };
    return Mt(this) || (e.reverse && ([n, r] = [r, n]), r = J(r), y.und(r) ? me(this) || this._set(n) : this._set(r)), i;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...e }, t) {
    const { key: n, defaultProps: r } = this;
    e.default && Object.assign(
      r,
      mn(
        e,
        (o, a) => /^on/.test(a) ? kr(o, n) : o
      )
    ), Ln(this, e, "onProps"), Ne(this, "onProps", e, this);
    const i = this._prepareNode(e);
    if (Object.isFrozen(this))
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    const s = this._state;
    return Vr(++this._lastCallId, {
      key: n,
      props: e,
      defaultProps: r,
      state: s,
      actions: {
        pause: () => {
          je(this) || (zn(this, !0), Ue(s.pauseQueue), Ne(
            this,
            "onPause",
            le(this, ze(this, this.animation.to)),
            this
          ));
        },
        resume: () => {
          je(this) && (zn(this, !1), _e(this) && this._resume(), Ue(s.resumeQueue), Ne(
            this,
            "onResume",
            le(this, ze(this, this.animation.to)),
            this
          ));
        },
        start: this._merge.bind(this, i)
      }
    }).then((o) => {
      if (e.loop && o.finished && !(t && o.noop)) {
        const a = Fr(e);
        if (a)
          return this._update(a, !0);
      }
      return o;
    });
  }
  /** Merge props into the current animation */
  _merge(e, t, n) {
    if (t.cancel)
      return this.stop(!0), n(De(this));
    const r = !y.und(e.to), i = !y.und(e.from);
    if (r || i)
      if (t.callId > this._lastToId)
        this._lastToId = t.callId;
      else
        return n(De(this));
    const { key: s, defaultProps: o, animation: a } = this, { to: d, from: c } = a;
    let { to: l = d, from: f = c } = e;
    i && !r && (!t.default || y.und(l)) && (l = f), t.reverse && ([l, f] = [f, l]);
    const m = !ye(f, c);
    m && (a.from = f), f = J(f);
    const _ = !ye(l, d);
    _ && this._focus(l);
    const E = Bt(t.to), { config: v } = a, { decay: T, velocity: b } = v;
    (r || i) && (v.velocity = 0), t.config && !E && os(
      v,
      Te(t.config, s),
      // Avoid calling the same "config" prop twice.
      t.config !== o.config ? Te(o.config, s) : void 0
    );
    let A = me(this);
    if (!A || y.und(l))
      return n(le(this, !0));
    const S = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      y.und(t.reset) ? i && !t.default : !y.und(f) && Ye(t.reset, s)
    ), x = S ? f : this.get(), g = et(l), L = y.num(g) || y.arr(g) || Tt(g), H = !E && (!L || Ye(o.immediate || t.immediate, s));
    if (_) {
      const F = Kt(l);
      if (F !== A.constructor)
        if (H)
          A = this._set(g);
        else
          throw Error(
            `Cannot animate between ${A.constructor.name} and ${F.name}, as the "to" prop suggests`
          );
    }
    const he = A.constructor;
    let G = se(l), ce = !1;
    if (!G) {
      const F = S || !Mt(this) && m;
      (_ || F) && (ce = ye(et(x), g), G = !ce), (!ye(a.immediate, H) && !H || !ye(v.decay, T) || !ye(v.velocity, b)) && (G = !0);
    }
    if (ce && _e(this) && (a.changed && !S ? G = !0 : G || this._stop(d)), !E && ((G || se(d)) && (a.values = A.getPayload(), a.toValues = se(l) ? null : he == Je ? [1] : ne(g)), a.immediate != H && (a.immediate = H, !H && !S && this._set(d)), G)) {
      const { onRest: F } = a;
      V(fs, (K) => Ln(this, t, K));
      const ee = le(this, ze(this, d));
      Ue(this._pendingCalls, ee), this._pendingCalls.add(n), a.changed && C.batchedUpdates(() => {
        var K;
        a.changed = !S, F == null || F(ee, this), S ? Te(o.onRest, ee) : (K = a.onStart) == null || K.call(a, ee, this);
      });
    }
    S && this._set(x), E ? n(jr(t.to, t, this._state, this)) : G ? this._start() : _e(this) && !_ ? this._pendingCalls.add(n) : n($r(x));
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(e) {
    const t = this.animation;
    e !== t.to && (An(this) && this._detach(), t.to = e, An(this) && this._attach());
  }
  _attach() {
    let e = 0;
    const { to: t } = this.animation;
    se(t) && ($e(t, this), Qt(t) && (e = t.priority + 1)), this.priority = e;
  }
  _detach() {
    const { to: e } = this.animation;
    se(e) && Xe(e, this);
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(e, t = !0) {
    const n = J(e);
    if (!y.und(n)) {
      const r = me(this);
      if (!r || !ye(n, r.getValue())) {
        const i = Kt(n);
        !r || r.constructor != i ? pn(this, i.create(n)) : r.setValue(n), r && C.batchedUpdates(() => {
          this._onChange(n, t);
        });
      }
    }
    return me(this);
  }
  _onStart() {
    const e = this.animation;
    e.changed || (e.changed = !0, Ne(
      this,
      "onStart",
      le(this, ze(this, e.to)),
      this
    ));
  }
  _onChange(e, t) {
    t || (this._onStart(), Te(this.animation.onChange, e, this)), Te(this.defaultProps.onChange, e, this), super._onChange(e, t);
  }
  // This method resets the animation state (even if already animating) to
  // ensure the latest from/to range is used, and it also ensures this spring
  // is added to the frameloop.
  _start() {
    const e = this.animation;
    me(this).reset(J(e.to)), e.immediate || (e.fromValues = e.values.map((t) => t.lastPosition)), _e(this) || (jn(this, !0), je(this) || this._resume());
  }
  _resume() {
    de.skipAnimation ? this.finish() : wt.start(this);
  }
  /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */
  _stop(e, t) {
    if (_e(this)) {
      jn(this, !1);
      const n = this.animation;
      V(n.values, (i) => {
        i.done = !0;
      }), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Qe(this, {
        type: "idle",
        parent: this
      });
      const r = t ? De(this.get()) : le(this.get(), ze(this, e ?? n.to));
      Ue(this._pendingCalls, r), n.changed && (n.changed = !1, Ne(this, "onRest", r, this));
    }
  }
};
function ze(e, t) {
  const n = et(t), r = et(e.get());
  return ye(r, n);
}
function Fr(e, t = e.loop, n = e.to) {
  const r = Te(t);
  if (r) {
    const i = r !== !0 && Mr(r), s = (i || e).reverse, o = !i || i.reset;
    return nt({
      ...e,
      loop: t,
      // Avoid updating default props when looping.
      default: !1,
      // Never loop the `pause` prop.
      pause: void 0,
      // For the "reverse" prop to loop as expected, the "to" prop
      // must be undefined. The "reverse" prop is ignored when the
      // "to" prop is an array or function.
      to: !s || Bt(n) ? n : void 0,
      // Ignore the "from" prop except on reset.
      from: o ? e.from : void 0,
      reset: o,
      // The "loop" prop can return a "useSpring" props object to
      // override any of the original props.
      ...i
    });
  }
}
function nt(e) {
  const { to: t, from: n } = e = Mr(e), r = /* @__PURE__ */ new Set();
  return y.obj(t) && Nn(t, r), y.obj(n) && Nn(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function ls(e) {
  const t = nt(e);
  return y.und(t.default) && (t.default = mn(t)), t;
}
function Nn(e, t) {
  ge(e, (n, r) => n != null && t.add(r));
}
var fs = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function Ln(e, t, n) {
  e.animation[n] = t[n] !== Dr(t, n) ? kr(t[n], e.key) : void 0;
}
function Ne(e, t, ...n) {
  var r, i, s, o;
  (i = (r = e.animation)[t]) == null || i.call(r, ...n), (o = (s = e.defaultProps)[t]) == null || o.call(s, ...n);
}
var ds = ["onStart", "onChange", "onRest"], hs = 1, ps = class {
  constructor(t, n) {
    this.id = hs++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._state = {
      paused: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    }, this._onFrame = this._onFrame.bind(this), n && (this._flush = n), t && this.start({ default: !0, ...t });
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
    return this.each((n, r) => t[r] = n.get()), t;
  }
  /** Set the current values without animating. */
  set(t) {
    for (const n in t) {
      const r = t[n];
      y.und(r) || this.springs[n].set(r);
    }
  }
  /** Push an update onto the queue of each value. */
  update(t) {
    return t && this.queue.push(nt(t)), this;
  }
  /**
   * Start the queued animations for every spring, and resolve the returned
   * promise once all queued animations have finished or been cancelled.
   *
   * When you pass a queue (instead of nothing), that queue is used instead of
   * the queued animations added with the `update` method, which are left alone.
   */
  start(t) {
    let { queue: n } = this;
    return t ? n = ne(t).map(nt) : this.queue = [], this._flush ? this._flush(this, n) : (Hr(this, n), Xt(this, n));
  }
  /** @internal */
  stop(t, n) {
    if (t !== !!t && (n = t), n) {
      const r = this.springs;
      V(ne(n), (i) => r[i].stop(!!t));
    } else
      tt(this._state, this._lastAsyncId), this.each((r) => r.stop(!!t));
    return this;
  }
  /** Freeze the active animation in time */
  pause(t) {
    if (y.und(t))
      this.start({ pause: !0 });
    else {
      const n = this.springs;
      V(ne(t), (r) => n[r].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(t) {
    if (y.und(t))
      this.start({ pause: !1 });
    else {
      const n = this.springs;
      V(ne(t), (r) => n[r].resume());
    }
    return this;
  }
  /** Call a function once per spring value */
  each(t) {
    ge(this.springs, t);
  }
  /** @internal Called at the end of every animation frame */
  _onFrame() {
    const { onStart: t, onChange: n, onRest: r } = this._events, i = this._active.size > 0, s = this._changed.size > 0;
    (i && !this._started || s && !this._started) && (this._started = !0, qe(t, ([d, c]) => {
      c.value = this.get(), d(c, this, this._item);
    }));
    const o = !i && this._started, a = s || o && r.size ? this.get() : null;
    s && n.size && qe(n, ([d, c]) => {
      c.value = a, d(c, this, this._item);
    }), o && (this._started = !1, qe(r, ([d, c]) => {
      c.value = a, d(c, this, this._item);
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
    C.onFrame(this._onFrame);
  }
};
function Xt(e, t) {
  return Promise.all(t.map((n) => Ur(e, n))).then(
    (n) => vn(e, n)
  );
}
async function Ur(e, t, n) {
  const { keys: r, to: i, from: s, loop: o, onRest: a, onResolve: d } = t, c = y.obj(t.default) && t.default;
  o && (t.loop = !1), i === !1 && (t.to = null), s === !1 && (t.from = null);
  const l = y.arr(i) || y.fun(i) ? i : void 0;
  l ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : V(ds, (v) => {
    const T = t[v];
    if (y.fun(T)) {
      const b = e._events[v];
      t[v] = ({ finished: A, cancelled: S }) => {
        const x = b.get(T);
        x ? (A || (x.finished = !1), S && (x.cancelled = !0)) : b.set(T, {
          value: null,
          finished: A || !1,
          cancelled: S || !1
        });
      }, c && (c[v] = t[v]);
    }
  });
  const f = e._state;
  t.pause === !f.paused ? (f.paused = t.pause, Ue(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
  const m = (r || Object.keys(e.springs)).map(
    (v) => e.springs[v].start(t)
  ), _ = t.cancel === !0 || Dr(t, "cancel") === !0;
  (l || _ && f.asyncId) && m.push(
    Vr(++e._lastAsyncId, {
      props: t,
      state: f,
      actions: {
        pause: Yt,
        resume: Yt,
        start(v, T) {
          _ ? (tt(f, e._lastAsyncId), T(De(e))) : (v.onRest = a, T(
            jr(
              l,
              v,
              f,
              e
            )
          ));
        }
      }
    })
  ), f.paused && await new Promise((v) => {
    f.resumeQueue.add(v);
  });
  const E = vn(e, await Promise.all(m));
  if (o && E.finished && !(n && E.noop)) {
    const v = Fr(t, o, i);
    if (v)
      return Hr(e, [v]), Ur(e, v, !0);
  }
  return d && C.batchedUpdates(() => d(E, e, e.item)), E;
}
function Fn(e, t) {
  const n = { ...e.springs };
  return t && V(ne(t), (r) => {
    y.und(r.keys) && (r = nt(r)), y.obj(r.to) || (r = { ...r, to: void 0 }), Yr(n, r, (i) => Wr(i));
  }), qr(e, n), n;
}
function qr(e, t) {
  ge(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, $e(n, e));
  });
}
function Wr(e, t) {
  const n = new us();
  return n.key = e, t && $e(n, t), n;
}
function Yr(e, t, n) {
  t.keys && V(t.keys, (r) => {
    (e[r] || (e[r] = n(r)))._prepareNode(t);
  });
}
function Hr(e, t) {
  V(t, (n) => {
    Yr(e.springs, n, (r) => Wr(r, e));
  });
}
var At = ({
  children: e,
  ...t
}) => {
  const n = nn(yt), r = t.pause || !!n.pause, i = t.immediate || !!n.immediate;
  t = Ui(() => ({ pause: r, immediate: i }), [r, i]);
  const { Provider: s } = yt;
  return /* @__PURE__ */ tn.createElement(s, { value: t }, e);
}, yt = ms(At, {});
At.Provider = yt.Provider;
At.Consumer = yt.Consumer;
function ms(e, t) {
  return Object.assign(e, tn.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
var vs = () => {
  const e = [], t = function(r) {
    Li();
    const i = [];
    return V(e, (s, o) => {
      if (y.und(r))
        i.push(s.start());
      else {
        const a = n(r, s, o);
        a && i.push(s.start(a));
      }
    }), i;
  };
  t.current = e, t.add = function(r) {
    e.includes(r) || e.push(r);
  }, t.delete = function(r) {
    const i = e.indexOf(r);
    ~i && e.splice(i, 1);
  }, t.pause = function() {
    return V(e, (r) => r.pause(...arguments)), this;
  }, t.resume = function() {
    return V(e, (r) => r.resume(...arguments)), this;
  }, t.set = function(r) {
    V(e, (i, s) => {
      const o = y.fun(r) ? r(s, i) : r;
      o && i.set(o);
    });
  }, t.start = function(r) {
    const i = [];
    return V(e, (s, o) => {
      if (y.und(r))
        i.push(s.start());
      else {
        const a = this._getProps(r, s, o);
        a && i.push(s.start(a));
      }
    }), i;
  }, t.stop = function() {
    return V(e, (r) => r.stop(...arguments)), this;
  }, t.update = function(r) {
    return V(e, (i, s) => i.update(this._getProps(r, i, s))), this;
  };
  const n = function(r, i, s) {
    return y.fun(r) ? r(s, i) : r;
  };
  return t._getProps = n, t;
};
function gs(e, t, n) {
  const r = y.fun(t) && t;
  r && !n && (n = []);
  const i = Fe(
    () => r || arguments.length == 3 ? vs() : void 0,
    []
  ), s = Z(0), o = Or(), a = Fe(
    () => ({
      ctrls: [],
      queue: [],
      flush(b, A) {
        const S = Fn(b, A);
        return s.current > 0 && !a.queue.length && !Object.keys(S).some((g) => !b.springs[g]) ? Xt(b, A) : new Promise((g) => {
          qr(b, S), a.queue.push(() => {
            g(Xt(b, A));
          }), o();
        });
      }
    }),
    []
  ), d = Z([...a.ctrls]), c = [], l = Cn(e) || 0;
  Fe(() => {
    V(d.current.slice(e, l), (b) => {
      ns(b, i), b.stop(!0);
    }), d.current.length = e, f(l, e);
  }, [e]), Fe(() => {
    f(0, Math.min(l, e));
  }, n);
  function f(b, A) {
    for (let S = b; S < A; S++) {
      const x = d.current[S] || (d.current[S] = new ps(null, a.flush)), g = r ? r(S, x) : t[S];
      g && (c[S] = ls(g));
    }
  }
  const m = d.current.map((b, A) => Fn(b, c[A])), _ = nn(At), E = Cn(_), v = _ !== E && ts(_);
  hn(() => {
    s.current++, a.ctrls = d.current;
    const { queue: b } = a;
    b.length && (a.queue = [], V(b, (A) => A())), V(d.current, (A, S) => {
      i == null || i.add(A), v && A.start({ default: _ });
      const x = c[S];
      x && (rs(A, x.ref), A.ref ? A.queue.push(x) : A.start(x));
    });
  }), Cr(() => () => {
    V(a.ctrls, (b) => b.stop(!0));
  });
  const T = m.map((b) => ({ ...b }));
  return i ? [T, i] : T;
}
function ys(e, t) {
  const n = y.fun(e), [[r], i] = gs(
    1,
    n ? e : [e],
    n ? [] : t
  );
  return n || arguments.length == 2 ? [r, i] : r;
}
var _s = class extends gn {
  constructor(e, t) {
    super(), this.source = e, this.idle = !0, this._active = /* @__PURE__ */ new Set(), this.calc = Be(...t);
    const n = this._get(), r = Kt(n);
    pn(this, r.create(n));
  }
  advance(e) {
    const t = this._get(), n = this.get();
    ye(t, n) || (me(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Un(this._active) && Vt(this);
  }
  _get() {
    const e = y.arr(this.source) ? this.source.map(J) : ne(J(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !Un(this._active) && (this.idle = !1, V(Pt(this), (e) => {
      e.done = !1;
    }), de.skipAnimation ? (C.batchedUpdates(() => this.advance()), Vt(this)) : wt.start(this));
  }
  // Observe our sources only when we're observed.
  _attach() {
    let e = 1;
    V(ne(this.source), (t) => {
      se(t) && $e(t, this), Qt(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1));
    }), this.priority = e, this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    V(ne(this.source), (e) => {
      se(e) && Xe(e, this);
    }), this._active.clear(), Vt(this);
  }
  /** @internal */
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = ne(this.source).reduce(
      (t, n) => Math.max(t, (Qt(n) ? n.priority : 0) + 1),
      0
    ));
  }
};
function bs(e) {
  return e.idle !== !1;
}
function Un(e) {
  return !e.size || Array.from(e).every(bs);
}
function Vt(e) {
  e.idle || (e.idle = !0, V(Pt(e), (t) => {
    t.done = !0;
  }), Qe(e, {
    type: "idle",
    parent: e
  }));
}
de.assign({
  createStringInterpolator: xr,
  to: (e, t) => new _s(e, t)
});
var Kr = /^--/;
function ws(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !Kr.test(e) && !(He.hasOwnProperty(e) && He[e]) ? t + "px" : ("" + t).trim();
}
var qn = {};
function Es(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", {
    className: r,
    style: i,
    children: s,
    scrollTop: o,
    scrollLeft: a,
    viewBox: d,
    ...c
  } = t, l = Object.values(c), f = Object.keys(c).map(
    (m) => n || e.hasAttribute(m) ? m : qn[m] || (qn[m] = m.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (_) => "-" + _.toLowerCase()
    ))
  );
  s !== void 0 && (e.textContent = s);
  for (const m in i)
    if (i.hasOwnProperty(m)) {
      const _ = ws(m, i[m]);
      Kr.test(m) ? e.style.setProperty(m, _) : e.style[m] = _;
    }
  f.forEach((m, _) => {
    e.setAttribute(m, l[_]);
  }), r !== void 0 && (e.className = r), o !== void 0 && (e.scrollTop = o), a !== void 0 && (e.scrollLeft = a), d !== void 0 && e.setAttribute("viewBox", d);
}
var He = {
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
}, Ss = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), Ts = ["Webkit", "Ms", "Moz", "O"];
He = Object.keys(He).reduce((e, t) => (Ts.forEach((n) => e[Ss(n, t)] = e[t]), e), He);
var Ps = /^(matrix|translate|scale|rotate|skew)/, xs = /^(translate)/, As = /^(rotate|skew)/, $t = (e, t) => y.num(e) && e !== 0 ? e + t : e, ht = (e, t) => y.arr(e) ? e.every((n) => ht(n, t)) : y.num(e) ? e === t : parseFloat(e) === t, Os = class extends xt {
  constructor({ x: e, y: t, z: n, ...r }) {
    const i = [], s = [];
    (e || t || n) && (i.push([e || 0, t || 0, n || 0]), s.push((o) => [
      `translate3d(${o.map((a) => $t(a, "px")).join(",")})`,
      // prettier-ignore
      ht(o, 0)
    ])), ge(r, (o, a) => {
      if (a === "transform")
        i.push([o || ""]), s.push((d) => [d, d === ""]);
      else if (Ps.test(a)) {
        if (delete r[a], y.und(o))
          return;
        const d = xs.test(a) ? "px" : As.test(a) ? "deg" : "";
        i.push(ne(o)), s.push(
          a === "rotate3d" ? ([c, l, f, m]) => [
            `rotate3d(${c},${l},${f},${$t(m, d)})`,
            ht(m, 0)
          ] : (c) => [
            `${a}(${c.map((l) => $t(l, d)).join(",")})`,
            ht(c, a.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    }), i.length && (r.transform = new Cs(i, s)), super(r);
  }
}, Cs = class extends Sr {
  constructor(e, t) {
    super(), this.inputs = e, this.transforms = t, this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", t = !0;
    return V(this.inputs, (n, r) => {
      const i = J(n[0]), [s, o] = this.transforms[r](
        y.arr(i) ? i : n.map(J)
      );
      e += " " + s, t = t && o;
    }), t ? "none" : e;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(e) {
    e == 1 && V(
      this.inputs,
      (t) => V(
        t,
        (n) => se(n) && $e(n, this)
      )
    );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(e) {
    e == 0 && V(
      this.inputs,
      (t) => V(
        t,
        (n) => se(n) && Xe(n, this)
      )
    );
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), Qe(this, e);
  }
}, Is = [
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
de.assign({
  batchedUpdates: li,
  createStringInterpolator: xr,
  colors: yi
});
var Rs = Qi(Is, {
  applyAnimatedValues: Es,
  createAnimatedStyle: (e) => new Os(e),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n
}), ks = Rs.animated;
function Ds(e, t, n) {
  return Math.max(t, Math.min(e, n));
}
const q = {
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
function Wn(e, t, n) {
  return t === 0 || Math.abs(t) === 1 / 0 ? Math.pow(e, n * 5) : e * t * n / (t + n * e);
}
function Yn(e, t, n, r = 0.15) {
  return r === 0 ? Ds(e, t, n) : e < t ? -Wn(t - e, n - t, r) + t : e > n ? +Wn(e - n, n - t, r) + n : e;
}
function Ms(e, [t, n], [r, i]) {
  const [[s, o], [a, d]] = e;
  return [Yn(t, s, o, r), Yn(n, a, d, i)];
}
function Vs(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $s(e) {
  var t = Vs(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function B(e, t, n) {
  return t = $s(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Hn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hn(Object(n), !0).forEach(function(r) {
      B(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
const Br = {
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
function Kn(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : "";
}
const js = ["enter", "leave"];
function zs(e = !1, t) {
  return e && !js.includes(t);
}
function Ns(e, t = "", n = !1) {
  const r = Br[e], i = r && r[t] || t;
  return "on" + Kn(e) + Kn(i) + (zs(n, i) ? "Capture" : "");
}
const Ls = ["gotpointercapture", "lostpointercapture"];
function Fs(e) {
  let t = e.substring(2).toLowerCase();
  const n = !!~t.indexOf("passive");
  n && (t = t.replace("passive", ""));
  const r = Ls.includes(t) ? "capturecapture" : "capture", i = !!~t.indexOf(r);
  return i && (t = t.replace("capture", "")), {
    device: t,
    capture: i,
    passive: n
  };
}
function Us(e, t = "") {
  const n = Br[e], r = n && n[t] || t;
  return e + r;
}
function Ot(e) {
  return "touches" in e;
}
function Gr(e) {
  return Ot(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse";
}
function qs(e) {
  return Array.from(e.touches).filter((t) => {
    var n, r;
    return t.target === e.currentTarget || ((n = e.currentTarget) === null || n === void 0 || (r = n.contains) === null || r === void 0 ? void 0 : r.call(n, t.target));
  });
}
function Ws(e) {
  return e.type === "touchend" || e.type === "touchcancel" ? e.changedTouches : e.targetTouches;
}
function Qr(e) {
  return Ot(e) ? Ws(e)[0] : e;
}
function Zt(e, t) {
  try {
    const n = t.clientX - e.clientX, r = t.clientY - e.clientY, i = (t.clientX + e.clientX) / 2, s = (t.clientY + e.clientY) / 2, o = Math.hypot(n, r);
    return {
      angle: -(Math.atan2(n, r) * 180) / Math.PI,
      distance: o,
      origin: [i, s]
    };
  } catch {
  }
  return null;
}
function Ys(e) {
  return qs(e).map((t) => t.identifier);
}
function Bn(e, t) {
  const [n, r] = Array.from(e.touches).filter((i) => t.includes(i.identifier));
  return Zt(n, r);
}
function jt(e) {
  const t = Qr(e);
  return Ot(e) ? t.identifier : t.pointerId;
}
function Ve(e) {
  const t = Qr(e);
  return [t.clientX, t.clientY];
}
const Gn = 40, Qn = 800;
function Xr(e) {
  let {
    deltaX: t,
    deltaY: n,
    deltaMode: r
  } = e;
  return r === 1 ? (t *= Gn, n *= Gn) : r === 2 && (t *= Qn, n *= Qn), [t, n];
}
function Hs(e) {
  var t, n;
  const {
    scrollX: r,
    scrollY: i,
    scrollLeft: s,
    scrollTop: o
  } = e.currentTarget;
  return [(t = r ?? s) !== null && t !== void 0 ? t : 0, (n = i ?? o) !== null && n !== void 0 ? n : 0];
}
function Ks(e) {
  const t = {};
  if ("buttons" in e && (t.buttons = e.buttons), "shiftKey" in e) {
    const {
      shiftKey: n,
      altKey: r,
      metaKey: i,
      ctrlKey: s
    } = e;
    Object.assign(t, {
      shiftKey: n,
      altKey: r,
      metaKey: i,
      ctrlKey: s
    });
  }
  return t;
}
function _t(e, ...t) {
  return typeof e == "function" ? e(...t) : e;
}
function Bs() {
}
function Gs(...e) {
  return e.length === 0 ? Bs : e.length === 1 ? e[0] : function() {
    let t;
    for (const n of e)
      t = n.apply(this, arguments) || t;
    return t;
  };
}
function Xn(e, t) {
  return Object.assign({}, t, e || {});
}
const Qs = 32;
class Zr {
  constructor(t, n, r) {
    this.ctrl = t, this.args = n, this.key = r, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset());
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
      shared: n,
      ingKey: r,
      args: i
    } = this;
    n[r] = t._active = t.active = t._blocked = t._force = !1, t._step = [!1, !1], t.intentional = !1, t._movement = [0, 0], t._distance = [0, 0], t._direction = [0, 0], t._delta = [0, 0], t._bounds = [[-1 / 0, 1 / 0], [-1 / 0, 1 / 0]], t.args = i, t.axis = void 0, t.memo = void 0, t.elapsedTime = t.timeDelta = 0, t.direction = [0, 0], t.distance = [0, 0], t.overflow = [0, 0], t._movementBound = [!1, !1], t.velocity = [0, 0], t.movement = [0, 0], t.delta = [0, 0], t.timeStamp = 0;
  }
  start(t) {
    const n = this.state, r = this.config;
    n._active || (this.reset(), this.computeInitial(), n._active = !0, n.target = t.target, n.currentTarget = t.currentTarget, n.lastOffset = r.from ? _t(r.from, n) : n.offset, n.offset = n.lastOffset, n.startTime = n.timeStamp = t.timeStamp);
  }
  computeValues(t) {
    const n = this.state;
    n._values = t, n.values = this.config.transform(t);
  }
  computeInitial() {
    const t = this.state;
    t._initial = t._values, t.initial = t.values;
  }
  compute(t) {
    const {
      state: n,
      config: r,
      shared: i
    } = this;
    n.args = this.args;
    let s = 0;
    if (t && (n.event = t, r.preventDefault && t.cancelable && n.event.preventDefault(), n.type = t.type, i.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, i.locked = !!document.pointerLockElement, Object.assign(i, Ks(t)), i.down = i.pressed = i.buttons % 2 === 1 || i.touches > 0, s = t.timeStamp - n.timeStamp, n.timeStamp = t.timeStamp, n.elapsedTime = n.timeStamp - n.startTime), n._active) {
      const L = n._delta.map(Math.abs);
      q.addTo(n._distance, L);
    }
    this.axisIntent && this.axisIntent(t);
    const [o, a] = n._movement, [d, c] = r.threshold, {
      _step: l,
      values: f
    } = n;
    if (r.hasCustomTransform ? (l[0] === !1 && (l[0] = Math.abs(o) >= d && f[0]), l[1] === !1 && (l[1] = Math.abs(a) >= c && f[1])) : (l[0] === !1 && (l[0] = Math.abs(o) >= d && Math.sign(o) * d), l[1] === !1 && (l[1] = Math.abs(a) >= c && Math.sign(a) * c)), n.intentional = l[0] !== !1 || l[1] !== !1, !n.intentional) return;
    const m = [0, 0];
    if (r.hasCustomTransform) {
      const [L, H] = f;
      m[0] = l[0] !== !1 ? L - l[0] : 0, m[1] = l[1] !== !1 ? H - l[1] : 0;
    } else
      m[0] = l[0] !== !1 ? o - l[0] : 0, m[1] = l[1] !== !1 ? a - l[1] : 0;
    this.restrictToAxis && !n._blocked && this.restrictToAxis(m);
    const _ = n.offset, E = n._active && !n._blocked || n.active;
    E && (n.first = n._active && !n.active, n.last = !n._active && n.active, n.active = i[this.ingKey] = n._active, t && (n.first && ("bounds" in r && (n._bounds = _t(r.bounds, n)), this.setup && this.setup()), n.movement = m, this.computeOffset()));
    const [v, T] = n.offset, [[b, A], [S, x]] = n._bounds;
    n.overflow = [v < b ? -1 : v > A ? 1 : 0, T < S ? -1 : T > x ? 1 : 0], n._movementBound[0] = n.overflow[0] ? n._movementBound[0] === !1 ? n._movement[0] : n._movementBound[0] : !1, n._movementBound[1] = n.overflow[1] ? n._movementBound[1] === !1 ? n._movement[1] : n._movementBound[1] : !1;
    const g = n._active ? r.rubberband || [0, 0] : [0, 0];
    if (n.offset = Ms(n._bounds, n.offset, g), n.delta = q.sub(n.offset, _), this.computeMovement(), E && (!n.last || s > Qs)) {
      n.delta = q.sub(n.offset, _);
      const L = n.delta.map(Math.abs);
      q.addTo(n.distance, L), n.direction = n.delta.map(Math.sign), n._direction = n._delta.map(Math.sign), !n.first && s > 0 && (n.velocity = [L[0] / s, L[1] / s], n.timeDelta = s);
    }
  }
  emit() {
    const t = this.state, n = this.shared, r = this.config;
    if (t._active || this.clean(), (t._blocked || !t.intentional) && !t._force && !r.triggerAllEvents) return;
    const i = this.handler(W(W(W({}, n), t), {}, {
      [this.aliasKey]: t.values
    }));
    i !== void 0 && (t.memo = i);
  }
  clean() {
    this.eventStore.clean(), this.timeoutStore.clean();
  }
}
function Xs([e, t], n) {
  const r = Math.abs(e), i = Math.abs(t);
  if (r > i && r > n)
    return "x";
  if (i > r && i > n)
    return "y";
}
class at extends Zr {
  constructor(...t) {
    super(...t), B(this, "aliasKey", "xy");
  }
  reset() {
    super.reset(), this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0], this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = q.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = q.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(t) {
    const n = this.state, r = this.config;
    if (!n.axis && t) {
      const i = typeof r.axisThreshold == "object" ? r.axisThreshold[Gr(t)] : r.axisThreshold;
      n.axis = Xs(n._movement, i);
    }
    n._blocked = (r.lockDirection || !!r.axis) && !n.axis || !!r.axis && r.axis !== n.axis;
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
const Zn = (e) => e, Jn = 0.15, yn = {
  enabled(e = !0) {
    return e;
  },
  eventOptions(e, t, n) {
    return W(W({}, n.shared.eventOptions), e);
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
        return [Jn, Jn];
      case !1:
        return [0, 0];
      default:
        return q.toVector(e);
    }
  },
  from(e) {
    if (typeof e == "function") return e;
    if (e != null) return q.toVector(e);
  },
  transform(e, t, n) {
    const r = e || n.shared.transform;
    if (this.hasCustomTransform = !!r, process.env.NODE_ENV === "development") {
      const i = r || Zn;
      return (s) => {
        const o = i(s);
        return (!isFinite(o[0]) || !isFinite(o[1])) && console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${o[0]},${[1]}]`), o;
      };
    }
    return r || Zn;
  },
  threshold(e) {
    return q.toVector(e, 0);
  }
};
process.env.NODE_ENV === "development" && Object.assign(yn, {
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
const Zs = 0, xe = W(W({}, yn), {}, {
  axis(e, t, {
    axis: n
  }) {
    if (this.lockDirection = n === "lock", !this.lockDirection) return n;
  },
  axisThreshold(e = Zs) {
    return e;
  },
  bounds(e = {}) {
    if (typeof e == "function")
      return (s) => xe.bounds(e(s));
    if ("current" in e)
      return () => e.current;
    if (typeof HTMLElement == "function" && e instanceof HTMLElement)
      return e;
    const {
      left: t = -1 / 0,
      right: n = 1 / 0,
      top: r = -1 / 0,
      bottom: i = 1 / 0
    } = e;
    return [[t, n], [r, i]];
  }
}), er = {
  ArrowRight: (e, t = 1) => [e * t, 0],
  ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
  ArrowUp: (e, t = 1) => [0, -1 * e * t],
  ArrowDown: (e, t = 1) => [0, e * t]
};
class Js extends at {
  constructor(...t) {
    super(...t), B(this, "ingKey", "dragging");
  }
  reset() {
    super.reset();
    const t = this.state;
    t._pointerId = void 0, t._pointerActive = !1, t._keyboardActive = !1, t._preventScroll = !1, t._delayed = !1, t.swipe = [0, 0], t.tap = !1, t.canceled = !1, t.cancel = this.cancel.bind(this);
  }
  setup() {
    const t = this.state;
    if (t._bounds instanceof HTMLElement) {
      const n = t._bounds.getBoundingClientRect(), r = t.currentTarget.getBoundingClientRect(), i = {
        left: n.left - r.left + t.offset[0],
        right: n.right - r.right + t.offset[0],
        top: n.top - r.top + t.offset[1],
        bottom: n.bottom - r.bottom + t.offset[1]
      };
      t._bounds = xe.bounds(i);
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
    const n = this.config, r = this.state;
    if (t.buttons != null && (Array.isArray(n.pointerButtons) ? !n.pointerButtons.includes(t.buttons) : n.pointerButtons !== -1 && n.pointerButtons !== t.buttons)) return;
    const i = this.ctrl.setEventIds(t);
    n.pointerCapture && t.target.setPointerCapture(t.pointerId), !(i && i.size > 1 && r._pointerActive) && (this.start(t), this.setupPointer(t), r._pointerId = jt(t), r._pointerActive = !0, this.computeValues(Ve(t)), this.computeInitial(), n.preventScrollAxis && Gr(t) !== "mouse" ? (r._active = !1, this.setupScrollPrevention(t)) : n.delay > 0 ? (this.setupDelayTrigger(t), n.triggerAllEvents && (this.compute(t), this.emit())) : this.startPointerDrag(t));
  }
  startPointerDrag(t) {
    const n = this.state;
    n._active = !0, n._preventScroll = !0, n._delayed = !1, this.compute(t), this.emit();
  }
  pointerMove(t) {
    const n = this.state, r = this.config;
    if (!n._pointerActive) return;
    const i = jt(t);
    if (n._pointerId !== void 0 && i !== n._pointerId) return;
    const s = Ve(t);
    if (document.pointerLockElement === t.target ? n._delta = [t.movementX, t.movementY] : (n._delta = q.sub(s, n._values), this.computeValues(s)), q.addTo(n._movement, n._delta), this.compute(t), n._delayed && n.intentional) {
      this.timeoutStore.remove("dragDelay"), n.active = !1, this.startPointerDrag(t);
      return;
    }
    if (r.preventScrollAxis && !n._preventScroll)
      if (n.axis)
        if (n.axis === r.preventScrollAxis || r.preventScrollAxis === "xy") {
          n._active = !1, this.clean();
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
    const n = this.state, r = this.config;
    if (!n._active || !n._pointerActive) return;
    const i = jt(t);
    if (n._pointerId !== void 0 && i !== n._pointerId) return;
    this.state._pointerActive = !1, this.setActive(), this.compute(t);
    const [s, o] = n._distance;
    if (n.tap = s <= r.tapsThreshold && o <= r.tapsThreshold, n.tap && r.filterTaps)
      n._force = !0;
    else {
      const [a, d] = n._delta, [c, l] = n._movement, [f, m] = r.swipe.velocity, [_, E] = r.swipe.distance, v = r.swipe.duration;
      if (n.elapsedTime < v) {
        const T = Math.abs(a / n.timeDelta), b = Math.abs(d / n.timeDelta);
        T > f && Math.abs(c) > _ && (n.swipe[0] = Math.sign(a)), b > m && Math.abs(l) > E && (n.swipe[1] = Math.sign(d));
      }
    }
    this.emit();
  }
  pointerClick(t) {
    !this.state.tap && t.detail > 0 && (t.preventDefault(), t.stopPropagation());
  }
  setupPointer(t) {
    const n = this.config, r = n.device;
    if (process.env.NODE_ENV === "development")
      try {
        if (r === "pointer" && n.preventScrollDelay === void 0) {
          const i = "uv" in t ? t.sourceEvent.currentTarget : t.currentTarget;
          window.getComputedStyle(i).touchAction === "auto" && console.warn("[@use-gesture]: The drag target has its `touch-action` style property set to `auto`. It is recommended to add `touch-action: 'none'` so that the drag gesture behaves correctly on touch-enabled devices. For more information read this: https://use-gesture.netlify.app/docs/extras/#touch-action.\n\nThis message will only show in development mode. It won't appear in production. If this is intended, you can ignore it.", i);
        }
      } catch {
      }
    n.pointerLock && t.currentTarget.requestPointerLock(), n.pointerCapture || (this.eventStore.add(this.sharedConfig.window, r, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, r, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, r, "cancel", this.pointerUp.bind(this)));
  }
  pointerClean() {
    this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock();
  }
  preventScroll(t) {
    this.state._preventScroll && t.cancelable && t.preventDefault();
  }
  setupScrollPrevention(t) {
    this.state._preventScroll = !1, eo(t);
    const n = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
      passive: !1
    });
    this.eventStore.add(this.sharedConfig.window, "touch", "end", n), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", n), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, t);
  }
  setupDelayTrigger(t) {
    this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
      this.state._step = [0, 0], this.startPointerDrag(t);
    }, this.config.delay);
  }
  keyDown(t) {
    const n = er[t.key];
    if (n) {
      const r = this.state, i = t.shiftKey ? 10 : t.altKey ? 0.1 : 1;
      this.start(t), r._delta = n(this.config.keyboardDisplacement, i), r._keyboardActive = !0, q.addTo(r._movement, r._delta), this.compute(t), this.emit();
    }
  }
  keyUp(t) {
    t.key in er && (this.state._keyboardActive = !1, this.setActive(), this.compute(t), this.emit());
  }
  bind(t) {
    const n = this.config.device;
    t(n, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (t(n, "change", this.pointerMove.bind(this)), t(n, "end", this.pointerUp.bind(this)), t(n, "cancel", this.pointerUp.bind(this)), t("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (t("key", "down", this.keyDown.bind(this)), t("key", "up", this.keyUp.bind(this))), this.config.filterTaps && t("click", "", this.pointerClick.bind(this), {
      capture: !0,
      passive: !1
    });
  }
}
function eo(e) {
  "persist" in e && typeof e.persist == "function" && e.persist();
}
const ct = typeof window < "u" && window.document && window.document.createElement;
function Jr() {
  return ct && "ontouchstart" in window;
}
function to() {
  return Jr() || ct && window.navigator.maxTouchPoints > 1;
}
function no() {
  return ct && "onpointerdown" in window;
}
function ro() {
  return ct && "exitPointerLock" in window.document;
}
function io() {
  try {
    return "constructor" in GestureEvent;
  } catch {
    return !1;
  }
}
const oe = {
  isBrowser: ct,
  gesture: io(),
  touch: Jr(),
  touchscreen: to(),
  pointer: no(),
  pointerLock: ro()
}, so = 250, oo = 180, ao = 0.5, co = 50, uo = 250, lo = 10, tr = {
  mouse: 0,
  touch: 0,
  pen: 8
}, ei = W(W({}, xe), {}, {
  device(e, t, {
    pointer: {
      touch: n = !1,
      lock: r = !1,
      mouse: i = !1
    } = {}
  }) {
    return this.pointerLock = r && oe.pointerLock, oe.touch && n ? "touch" : this.pointerLock ? "mouse" : oe.pointer && !i ? "pointer" : oe.touch ? "touch" : "mouse";
  },
  preventScrollAxis(e, t, {
    preventScroll: n
  }) {
    if (this.preventScrollDelay = typeof n == "number" ? n : n || n === void 0 && e ? so : void 0, !(!oe.touchscreen || n === !1))
      return e || (n !== void 0 ? "y" : void 0);
  },
  pointerCapture(e, t, {
    pointer: {
      capture: n = !0,
      buttons: r = 1,
      keys: i = !0
    } = {}
  }) {
    return this.pointerButtons = r, this.keys = i, !this.pointerLock && this.device === "pointer" && n;
  },
  threshold(e, t, {
    filterTaps: n = !1,
    tapsThreshold: r = 3,
    axis: i = void 0
  }) {
    const s = q.toVector(e, n ? r : i ? 1 : 0);
    return this.filterTaps = n, this.tapsThreshold = r, s;
  },
  swipe({
    velocity: e = ao,
    distance: t = co,
    duration: n = uo
  } = {}) {
    return {
      velocity: this.transform(q.toVector(e)),
      distance: this.transform(q.toVector(t)),
      duration: n
    };
  },
  delay(e = 0) {
    switch (e) {
      case !0:
        return oo;
      case !1:
        return 0;
      default:
        return e;
    }
  },
  axisThreshold(e) {
    return e ? W(W({}, tr), e) : tr;
  },
  keyboardDisplacement(e = lo) {
    return e;
  }
});
process.env.NODE_ENV === "development" && Object.assign(ei, {
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
function ti(e) {
  const [t, n] = e.overflow, [r, i] = e._delta, [s, o] = e._direction;
  (t < 0 && r > 0 && s < 0 || t > 0 && r < 0 && s > 0) && (e._movement[0] = e._movementBound[0]), (n < 0 && i > 0 && o < 0 || n > 0 && i < 0 && o > 0) && (e._movement[1] = e._movementBound[1]);
}
const fo = 30, ho = 100;
class po extends Zr {
  constructor(...t) {
    super(...t), B(this, "ingKey", "pinching"), B(this, "aliasKey", "da");
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
      movement: n,
      lastOffset: r
    } = this.state;
    t === "wheel" ? this.state.offset = q.add(n, r) : this.state.offset = [(1 + n[0]) * r[0], n[1] + r[1]];
  }
  computeMovement() {
    const {
      offset: t,
      lastOffset: n
    } = this.state;
    this.state.movement = [t[0] / n[0], t[1] - n[1]];
  }
  axisIntent() {
    const t = this.state, [n, r] = t._movement;
    if (!t.axis) {
      const i = Math.abs(n) * fo - Math.abs(r);
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
    const n = this.state, r = this.ctrl.touchIds;
    if (n._active && n._touchIds.every((s) => r.has(s)) || r.size < 2) return;
    this.start(t), n._touchIds = Array.from(r).slice(0, 2);
    const i = Bn(t, n._touchIds);
    i && this.pinchStart(t, i);
  }
  pointerStart(t) {
    if (t.buttons != null && t.buttons % 2 !== 1) return;
    this.ctrl.setEventIds(t), t.target.setPointerCapture(t.pointerId);
    const n = this.state, r = n._pointerEvents, i = this.ctrl.pointerIds;
    if (n._active && Array.from(r.keys()).every((o) => i.has(o)) || (r.size < 2 && r.set(t.pointerId, t), n._pointerEvents.size < 2)) return;
    this.start(t);
    const s = Zt(...Array.from(r.values()));
    s && this.pinchStart(t, s);
  }
  pinchStart(t, n) {
    const r = this.state;
    r.origin = n.origin, this.computeValues([n.distance, n.angle]), this.computeInitial(), this.compute(t), this.emit();
  }
  touchMove(t) {
    if (!this.state._active) return;
    const n = Bn(t, this.state._touchIds);
    n && this.pinchMove(t, n);
  }
  pointerMove(t) {
    const n = this.state._pointerEvents;
    if (n.has(t.pointerId) && n.set(t.pointerId, t), !this.state._active) return;
    const r = Zt(...Array.from(n.values()));
    r && this.pinchMove(t, r);
  }
  pinchMove(t, n) {
    const r = this.state, i = r._values[1], s = n.angle - i;
    let o = 0;
    Math.abs(s) > 270 && (o += Math.sign(s)), this.computeValues([n.distance, n.angle - 360 * o]), r.origin = n.origin, r.turns = o, r._movement = [r._values[0] / r._initial[0] - 1, r._values[1] - r._initial[1]], this.compute(t), this.emit();
  }
  touchEnd(t) {
    this.ctrl.setEventIds(t), this.state._active && this.state._touchIds.some((n) => !this.ctrl.touchIds.has(n)) && (this.state._active = !1, this.compute(t), this.emit());
  }
  pointerEnd(t) {
    const n = this.state;
    this.ctrl.setEventIds(t);
    try {
      t.target.releasePointerCapture(t.pointerId);
    } catch {
    }
    n._pointerEvents.has(t.pointerId) && n._pointerEvents.delete(t.pointerId), n._active && n._pointerEvents.size < 2 && (n._active = !1, this.compute(t), this.emit());
  }
  gestureStart(t) {
    t.cancelable && t.preventDefault();
    const n = this.state;
    n._active || (this.start(t), this.computeValues([t.scale, t.rotation]), n.origin = [t.clientX, t.clientY], this.compute(t), this.emit());
  }
  gestureMove(t) {
    if (t.cancelable && t.preventDefault(), !this.state._active) return;
    const n = this.state;
    this.computeValues([t.scale, t.rotation]), n.origin = [t.clientX, t.clientY];
    const r = n._movement;
    n._movement = [t.scale - 1, t.rotation], n._delta = q.sub(n._movement, r), this.compute(t), this.emit();
  }
  gestureEnd(t) {
    this.state._active && (this.state._active = !1, this.compute(t), this.emit());
  }
  wheel(t) {
    const n = this.config.modifierKey;
    n && (Array.isArray(n) ? !n.find((r) => t[r]) : !t[n]) || (this.state._active ? this.wheelChange(t) : this.wheelStart(t), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)));
  }
  wheelStart(t) {
    this.start(t), this.wheelChange(t);
  }
  wheelChange(t) {
    "uv" in t || (t.cancelable && t.preventDefault(), process.env.NODE_ENV === "development" && !t.defaultPrevented && console.warn("[@use-gesture]: To properly support zoom on trackpads, try using the `target` option.\n\nThis message will only appear in development mode."));
    const r = this.state;
    r._delta = [-Xr(t)[1] / ho * r.offset[0], 0], q.addTo(r._movement, r._delta), ti(r), this.state.origin = [t.clientX, t.clientY], this.compute(t), this.emit();
  }
  wheelEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    const n = this.config.device;
    n && (t(n, "start", this[n + "Start"].bind(this)), t(n, "change", this[n + "Move"].bind(this)), t(n, "end", this[n + "End"].bind(this)), t(n, "cancel", this[n + "End"].bind(this)), t("lostPointerCapture", "", this[n + "End"].bind(this))), this.config.pinchOnWheel && t("wheel", "", this.wheel.bind(this), {
      passive: !1
    });
  }
}
const mo = W(W({}, yn), {}, {
  device(e, t, {
    shared: n,
    pointer: {
      touch: r = !1
    } = {}
  }) {
    if (n.target && !oe.touch && oe.gesture) return "gesture";
    if (oe.touch && r) return "touch";
    if (oe.touchscreen) {
      if (oe.pointer) return "pointer";
      if (oe.touch) return "touch";
    }
  },
  bounds(e, t, {
    scaleBounds: n = {},
    angleBounds: r = {}
  }) {
    const i = (o) => {
      const a = Xn(_t(n, o), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [a.min, a.max];
    }, s = (o) => {
      const a = Xn(_t(r, o), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [a.min, a.max];
    };
    return typeof n != "function" && typeof r != "function" ? [i(), s()] : (o) => [i(o), s(o)];
  },
  threshold(e, t, n) {
    return this.lockDirection = n.axis === "lock", q.toVector(e, this.lockDirection ? [0.1, 3] : 0);
  },
  modifierKey(e) {
    return e === void 0 ? "ctrlKey" : e;
  },
  pinchOnWheel(e = !0) {
    return e;
  }
});
class vo extends at {
  constructor(...t) {
    super(...t), B(this, "ingKey", "moving");
  }
  move(t) {
    this.config.mouseOnly && t.pointerType !== "mouse" || (this.state._active ? this.moveChange(t) : this.moveStart(t), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)));
  }
  moveStart(t) {
    this.start(t), this.computeValues(Ve(t)), this.compute(t), this.computeInitial(), this.emit();
  }
  moveChange(t) {
    if (!this.state._active) return;
    const n = Ve(t), r = this.state;
    r._delta = q.sub(n, r._values), q.addTo(r._movement, r._delta), this.computeValues(n), this.compute(t), this.emit();
  }
  moveEnd(t) {
    this.state._active && (this.state._active = !1, this.compute(t), this.emit());
  }
  bind(t) {
    t("pointer", "change", this.move.bind(this)), t("pointer", "leave", this.moveEnd.bind(this));
  }
}
const go = W(W({}, xe), {}, {
  mouseOnly: (e = !0) => e
});
class yo extends at {
  constructor(...t) {
    super(...t), B(this, "ingKey", "scrolling");
  }
  scroll(t) {
    this.state._active || this.start(t), this.scrollChange(t), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
  }
  scrollChange(t) {
    t.cancelable && t.preventDefault();
    const n = this.state, r = Hs(t);
    n._delta = q.sub(r, n._values), q.addTo(n._movement, n._delta), this.computeValues(r), this.compute(t), this.emit();
  }
  scrollEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    t("scroll", "", this.scroll.bind(this));
  }
}
const _o = xe;
class bo extends at {
  constructor(...t) {
    super(...t), B(this, "ingKey", "wheeling");
  }
  wheel(t) {
    this.state._active || this.start(t), this.wheelChange(t), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
  }
  wheelChange(t) {
    const n = this.state;
    n._delta = Xr(t), q.addTo(n._movement, n._delta), ti(n), this.compute(t), this.emit();
  }
  wheelEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    t("wheel", "", this.wheel.bind(this));
  }
}
const wo = xe;
class Eo extends at {
  constructor(...t) {
    super(...t), B(this, "ingKey", "hovering");
  }
  enter(t) {
    this.config.mouseOnly && t.pointerType !== "mouse" || (this.start(t), this.computeValues(Ve(t)), this.compute(t), this.emit());
  }
  leave(t) {
    if (this.config.mouseOnly && t.pointerType !== "mouse") return;
    const n = this.state;
    if (!n._active) return;
    n._active = !1;
    const r = Ve(t);
    n._movement = n._delta = q.sub(r, n._values), this.computeValues(r), this.compute(t), n.delta = n.movement, this.emit();
  }
  bind(t) {
    t("pointer", "enter", this.enter.bind(this)), t("pointer", "leave", this.leave.bind(this));
  }
}
const So = W(W({}, xe), {}, {
  mouseOnly: (e = !0) => e
}), _n = /* @__PURE__ */ new Map(), Jt = /* @__PURE__ */ new Map();
function To(e) {
  _n.set(e.key, e.engine), Jt.set(e.key, e.resolver);
}
const Po = {
  key: "drag",
  engine: Js,
  resolver: ei
}, xo = {
  key: "hover",
  engine: Eo,
  resolver: So
}, Ao = {
  key: "move",
  engine: vo,
  resolver: go
}, Oo = {
  key: "pinch",
  engine: po,
  resolver: mo
}, Co = {
  key: "scroll",
  engine: yo,
  resolver: _o
}, Io = {
  key: "wheel",
  engine: bo,
  resolver: wo
};
function Ro(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, s;
  for (s = 0; s < r.length; s++)
    i = r[s], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ko(e, t) {
  if (e == null) return {};
  var n = Ro(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      r = s[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
const Do = {
  target(e) {
    if (e)
      return () => "current" in e ? e.current : e;
  },
  enabled(e = !0) {
    return e;
  },
  window(e = oe.isBrowser ? window : void 0) {
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
}, Mo = ["target", "eventOptions", "window", "enabled", "transform"];
function pt(e = {}, t) {
  const n = {};
  for (const [r, i] of Object.entries(t))
    switch (typeof i) {
      case "function":
        if (process.env.NODE_ENV === "development") {
          const s = i.call(n, e[r], r, e);
          Number.isNaN(s) || (n[r] = s);
        } else
          n[r] = i.call(n, e[r], r, e);
        break;
      case "object":
        n[r] = pt(e[r], i);
        break;
      case "boolean":
        i && (n[r] = e[r]);
        break;
    }
  return n;
}
function Vo(e, t, n = {}) {
  const r = e, {
    target: i,
    eventOptions: s,
    window: o,
    enabled: a,
    transform: d
  } = r, c = ko(r, Mo);
  if (n.shared = pt({
    target: i,
    eventOptions: s,
    window: o,
    enabled: a,
    transform: d
  }, Do), t) {
    const l = Jt.get(t);
    n[t] = pt(W({
      shared: n.shared
    }, c), l);
  } else
    for (const l in c) {
      const f = Jt.get(l);
      if (f)
        n[l] = pt(W({
          shared: n.shared
        }, c[l]), f);
      else if (process.env.NODE_ENV === "development" && !["drag", "pinch", "scroll", "wheel", "move", "hover"].includes(l)) {
        if (l === "domTarget")
          throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
        console.warn(`[@use-gesture]: Unknown config key \`${l}\` was used. Please read the documentation for further information.`);
      }
    }
  return n;
}
class ni {
  constructor(t, n) {
    B(this, "_listeners", /* @__PURE__ */ new Set()), this._ctrl = t, this._gestureKey = n;
  }
  add(t, n, r, i, s) {
    const o = this._listeners, a = Us(n, r), d = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}, c = W(W({}, d), s);
    t.addEventListener(a, i, c);
    const l = () => {
      t.removeEventListener(a, i, c), o.delete(l);
    };
    return o.add(l), l;
  }
  clean() {
    this._listeners.forEach((t) => t()), this._listeners.clear();
  }
}
class $o {
  constructor() {
    B(this, "_timeouts", /* @__PURE__ */ new Map());
  }
  add(t, n, r = 140, ...i) {
    this.remove(t), this._timeouts.set(t, window.setTimeout(n, r, ...i));
  }
  remove(t) {
    const n = this._timeouts.get(t);
    n && window.clearTimeout(n);
  }
  clean() {
    this._timeouts.forEach((t) => void window.clearTimeout(t)), this._timeouts.clear();
  }
}
class jo {
  constructor(t) {
    B(this, "gestures", /* @__PURE__ */ new Set()), B(this, "_targetEventStore", new ni(this)), B(this, "gestureEventStores", {}), B(this, "gestureTimeoutStores", {}), B(this, "handlers", {}), B(this, "config", {}), B(this, "pointerIds", /* @__PURE__ */ new Set()), B(this, "touchIds", /* @__PURE__ */ new Set()), B(this, "state", {
      shared: {
        shiftKey: !1,
        metaKey: !1,
        ctrlKey: !1,
        altKey: !1
      }
    }), zo(this, t);
  }
  setEventIds(t) {
    if (Ot(t))
      return this.touchIds = new Set(Ys(t)), this.touchIds;
    if ("pointerId" in t)
      return t.type === "pointerup" || t.type === "pointercancel" ? this.pointerIds.delete(t.pointerId) : t.type === "pointerdown" && this.pointerIds.add(t.pointerId), this.pointerIds;
  }
  applyHandlers(t, n) {
    this.handlers = t, this.nativeHandlers = n;
  }
  applyConfig(t, n) {
    this.config = Vo(t, n, this.config);
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
    const n = this.config.shared, r = {};
    let i;
    if (!(n.target && (i = n.target(), !i))) {
      if (n.enabled) {
        for (const o of this.gestures) {
          const a = this.config[o], d = nr(r, a.eventOptions, !!i);
          if (a.enabled) {
            const c = _n.get(o);
            new c(this, t, o).bind(d);
          }
        }
        const s = nr(r, n.eventOptions, !!i);
        for (const o in this.nativeHandlers)
          s(o, "", (a) => this.nativeHandlers[o](W(W({}, this.state.shared), {}, {
            event: a,
            args: t
          })), void 0, !0);
      }
      for (const s in r)
        r[s] = Gs(...r[s]);
      if (!i) return r;
      for (const s in r) {
        const {
          device: o,
          capture: a,
          passive: d
        } = Fs(s);
        this._targetEventStore.add(i, o, "", r[s], {
          capture: a,
          passive: d
        });
      }
    }
  }
}
function Ie(e, t) {
  e.gestures.add(t), e.gestureEventStores[t] = new ni(e, t), e.gestureTimeoutStores[t] = new $o();
}
function zo(e, t) {
  t.drag && Ie(e, "drag"), t.wheel && Ie(e, "wheel"), t.scroll && Ie(e, "scroll"), t.move && Ie(e, "move"), t.pinch && Ie(e, "pinch"), t.hover && Ie(e, "hover");
}
const nr = (e, t, n) => (r, i, s, o = {}, a = !1) => {
  var d, c;
  const l = (d = o.capture) !== null && d !== void 0 ? d : t.capture, f = (c = o.passive) !== null && c !== void 0 ? c : t.passive;
  let m = a ? r : Ns(r, i, l);
  n && f && (m += "Passive"), e[m] = e[m] || [], e[m].push(s);
}, No = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function Lo(e) {
  const t = {}, n = {}, r = /* @__PURE__ */ new Set();
  for (let i in e)
    No.test(i) ? (r.add(RegExp.lastMatch), n[i] = e[i]) : t[i] = e[i];
  return [n, t, r];
}
function Re(e, t, n, r, i, s) {
  if (!e.has(n)) return;
  if (!_n.has(r)) {
    process.env.NODE_ENV === "development" && console.warn(`[@use-gesture]: You've created a custom handler that that uses the \`${r}\` gesture but isn't properly configured.

Please add \`${r}Action\` when creating your handler.`);
    return;
  }
  const o = n + "Start", a = n + "End", d = (c) => {
    let l;
    return c.first && o in t && t[o](c), n in t && (l = t[n](c)), c.last && a in t && t[a](c), l;
  };
  i[r] = d, s[r] = s[r] || {};
}
function Fo(e, t) {
  const [n, r, i] = Lo(e), s = {};
  return Re(i, n, "onDrag", "drag", s, t), Re(i, n, "onWheel", "wheel", s, t), Re(i, n, "onScroll", "scroll", s, t), Re(i, n, "onPinch", "pinch", s, t), Re(i, n, "onMove", "move", s, t), Re(i, n, "onHover", "hover", s, t), {
    handlers: s,
    config: t,
    nativeHandlers: r
  };
}
function Uo(e, t = {}, n, r) {
  const i = It.useMemo(() => new jo(e), []);
  if (i.applyHandlers(e, r), i.applyConfig(t, n), It.useEffect(i.effect.bind(i)), It.useEffect(() => i.clean.bind(i), []), t.target === void 0)
    return i.bind.bind(i);
}
function qo(e) {
  return e.forEach(To), function(n, r) {
    const {
      handlers: i,
      nativeHandlers: s,
      config: o
    } = Fo(n, r || {});
    return Uo(i, o, void 0, s);
  };
}
function rr(e, t) {
  return qo([Po, Oo, Co, Io, Ao, xo])(e, t || {});
}
function Wo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var en = { exports: {} }, ft = { exports: {} }, z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir;
function Yo() {
  if (ir) return z;
  ir = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function S(g) {
    if (typeof g == "object" && g !== null) {
      var L = g.$$typeof;
      switch (L) {
        case t:
          switch (g = g.type, g) {
            case d:
            case c:
            case r:
            case s:
            case i:
            case f:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case a:
                case l:
                case E:
                case _:
                case o:
                  return g;
                default:
                  return L;
              }
          }
        case n:
          return L;
      }
    }
  }
  function x(g) {
    return S(g) === c;
  }
  return z.AsyncMode = d, z.ConcurrentMode = c, z.ContextConsumer = a, z.ContextProvider = o, z.Element = t, z.ForwardRef = l, z.Fragment = r, z.Lazy = E, z.Memo = _, z.Portal = n, z.Profiler = s, z.StrictMode = i, z.Suspense = f, z.isAsyncMode = function(g) {
    return x(g) || S(g) === d;
  }, z.isConcurrentMode = x, z.isContextConsumer = function(g) {
    return S(g) === a;
  }, z.isContextProvider = function(g) {
    return S(g) === o;
  }, z.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, z.isForwardRef = function(g) {
    return S(g) === l;
  }, z.isFragment = function(g) {
    return S(g) === r;
  }, z.isLazy = function(g) {
    return S(g) === E;
  }, z.isMemo = function(g) {
    return S(g) === _;
  }, z.isPortal = function(g) {
    return S(g) === n;
  }, z.isProfiler = function(g) {
    return S(g) === s;
  }, z.isStrictMode = function(g) {
    return S(g) === i;
  }, z.isSuspense = function(g) {
    return S(g) === f;
  }, z.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === c || g === s || g === i || g === f || g === m || typeof g == "object" && g !== null && (g.$$typeof === E || g.$$typeof === _ || g.$$typeof === o || g.$$typeof === a || g.$$typeof === l || g.$$typeof === T || g.$$typeof === b || g.$$typeof === A || g.$$typeof === v);
  }, z.typeOf = S, z;
}
var N = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr;
function Ho() {
  return sr || (sr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function S(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === r || h === c || h === s || h === i || h === f || h === m || typeof h == "object" && h !== null && (h.$$typeof === E || h.$$typeof === _ || h.$$typeof === o || h.$$typeof === a || h.$$typeof === l || h.$$typeof === T || h.$$typeof === b || h.$$typeof === A || h.$$typeof === v);
    }
    function x(h) {
      if (typeof h == "object" && h !== null) {
        var U = h.$$typeof;
        switch (U) {
          case t:
            var X = h.type;
            switch (X) {
              case d:
              case c:
              case r:
              case s:
              case i:
              case f:
                return X;
              default:
                var Y = X && X.$$typeof;
                switch (Y) {
                  case a:
                  case l:
                  case E:
                  case _:
                  case o:
                    return Y;
                  default:
                    return U;
                }
            }
          case n:
            return U;
        }
      }
    }
    var g = d, L = c, H = a, he = o, G = t, ce = l, F = r, ee = E, K = _, re = n, Ae = s, Q = i, pe = f, ue = !1;
    function Oe(h) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), p(h) || x(h) === d;
    }
    function p(h) {
      return x(h) === c;
    }
    function w(h) {
      return x(h) === a;
    }
    function R(h) {
      return x(h) === o;
    }
    function I(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function O(h) {
      return x(h) === l;
    }
    function $(h) {
      return x(h) === r;
    }
    function k(h) {
      return x(h) === E;
    }
    function D(h) {
      return x(h) === _;
    }
    function M(h) {
      return x(h) === n;
    }
    function j(h) {
      return x(h) === s;
    }
    function u(h) {
      return x(h) === i;
    }
    function P(h) {
      return x(h) === f;
    }
    N.AsyncMode = g, N.ConcurrentMode = L, N.ContextConsumer = H, N.ContextProvider = he, N.Element = G, N.ForwardRef = ce, N.Fragment = F, N.Lazy = ee, N.Memo = K, N.Portal = re, N.Profiler = Ae, N.StrictMode = Q, N.Suspense = pe, N.isAsyncMode = Oe, N.isConcurrentMode = p, N.isContextConsumer = w, N.isContextProvider = R, N.isElement = I, N.isForwardRef = O, N.isFragment = $, N.isLazy = k, N.isMemo = D, N.isPortal = M, N.isProfiler = j, N.isStrictMode = u, N.isSuspense = P, N.isValidElementType = S, N.typeOf = x;
  }()), N;
}
var or;
function ri() {
  return or || (or = 1, process.env.NODE_ENV === "production" ? ft.exports = Yo() : ft.exports = Ho()), ft.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var zt, ar;
function Ko() {
  if (ar) return zt;
  ar = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(s) {
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
      for (var o = {}, a = 0; a < 10; a++)
        o["_" + String.fromCharCode(a)] = a;
      var d = Object.getOwnPropertyNames(o).map(function(l) {
        return o[l];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        c[l] = l;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return zt = i() ? Object.assign : function(s, o) {
    for (var a, d = r(s), c, l = 1; l < arguments.length; l++) {
      a = Object(arguments[l]);
      for (var f in a)
        t.call(a, f) && (d[f] = a[f]);
      if (e) {
        c = e(a);
        for (var m = 0; m < c.length; m++)
          n.call(a, c[m]) && (d[c[m]] = a[c[m]]);
      }
    }
    return d;
  }, zt;
}
var Nt, cr;
function bn() {
  if (cr) return Nt;
  cr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Nt = e, Nt;
}
var Lt, ur;
function ii() {
  return ur || (ur = 1, Lt = Function.call.bind(Object.prototype.hasOwnProperty)), Lt;
}
var Ft, lr;
function Bo() {
  if (lr) return Ft;
  lr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = bn(), n = {}, r = ii();
    e = function(s) {
      var o = "Warning: " + s;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(s, o, a, d, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in s)
        if (r(s, l)) {
          var f;
          try {
            if (typeof s[l] != "function") {
              var m = Error(
                (d || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            f = s[l](o, l, d, a, null, t);
          } catch (E) {
            f = E;
          }
          if (f && !(f instanceof Error) && e(
            (d || "React class") + ": type specification of " + a + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var _ = c ? c() : "";
            e(
              "Failed " + a + " type: " + f.message + (_ ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Ft = i, Ft;
}
var Ut, fr;
function Go() {
  if (fr) return Ut;
  fr = 1;
  var e = ri(), t = Ko(), n = bn(), r = ii(), i = Bo(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(a) {
    var d = "Warning: " + a;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Ut = function(a, d) {
    var c = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function f(p) {
      var w = p && (c && p[c] || p[l]);
      if (typeof w == "function")
        return w;
    }
    var m = "<<anonymous>>", _ = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: A(),
      arrayOf: S,
      element: x(),
      elementType: g(),
      instanceOf: L,
      node: ce(),
      objectOf: he,
      oneOf: H,
      oneOfType: G,
      shape: ee,
      exact: K
    };
    function E(p, w) {
      return p === w ? p !== 0 || 1 / p === 1 / w : p !== p && w !== w;
    }
    function v(p, w) {
      this.message = p, this.data = w && typeof w == "object" ? w : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function T(p) {
      if (process.env.NODE_ENV !== "production")
        var w = {}, R = 0;
      function I($, k, D, M, j, u, P) {
        if (M = M || m, u = u || D, P !== n) {
          if (d) {
            var h = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw h.name = "Invariant Violation", h;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var U = M + ":" + D;
            !w[U] && // Avoid spamming the console because they are often not actionable except for lib authors
            R < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + u + "` prop on `" + M + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), w[U] = !0, R++);
          }
        }
        return k[D] == null ? $ ? k[D] === null ? new v("The " + j + " `" + u + "` is marked as required " + ("in `" + M + "`, but its value is `null`.")) : new v("The " + j + " `" + u + "` is marked as required in " + ("`" + M + "`, but its value is `undefined`.")) : null : p(k, D, M, j, u);
      }
      var O = I.bind(null, !1);
      return O.isRequired = I.bind(null, !0), O;
    }
    function b(p) {
      function w(R, I, O, $, k, D) {
        var M = R[I], j = Q(M);
        if (j !== p) {
          var u = pe(M);
          return new v(
            "Invalid " + $ + " `" + k + "` of type " + ("`" + u + "` supplied to `" + O + "`, expected ") + ("`" + p + "`."),
            { expectedType: p }
          );
        }
        return null;
      }
      return T(w);
    }
    function A() {
      return T(o);
    }
    function S(p) {
      function w(R, I, O, $, k) {
        if (typeof p != "function")
          return new v("Property `" + k + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var D = R[I];
        if (!Array.isArray(D)) {
          var M = Q(D);
          return new v("Invalid " + $ + " `" + k + "` of type " + ("`" + M + "` supplied to `" + O + "`, expected an array."));
        }
        for (var j = 0; j < D.length; j++) {
          var u = p(D, j, O, $, k + "[" + j + "]", n);
          if (u instanceof Error)
            return u;
        }
        return null;
      }
      return T(w);
    }
    function x() {
      function p(w, R, I, O, $) {
        var k = w[R];
        if (!a(k)) {
          var D = Q(k);
          return new v("Invalid " + O + " `" + $ + "` of type " + ("`" + D + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return T(p);
    }
    function g() {
      function p(w, R, I, O, $) {
        var k = w[R];
        if (!e.isValidElementType(k)) {
          var D = Q(k);
          return new v("Invalid " + O + " `" + $ + "` of type " + ("`" + D + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return T(p);
    }
    function L(p) {
      function w(R, I, O, $, k) {
        if (!(R[I] instanceof p)) {
          var D = p.name || m, M = Oe(R[I]);
          return new v("Invalid " + $ + " `" + k + "` of type " + ("`" + M + "` supplied to `" + O + "`, expected ") + ("instance of `" + D + "`."));
        }
        return null;
      }
      return T(w);
    }
    function H(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), o;
      function w(R, I, O, $, k) {
        for (var D = R[I], M = 0; M < p.length; M++)
          if (E(D, p[M]))
            return null;
        var j = JSON.stringify(p, function(P, h) {
          var U = pe(h);
          return U === "symbol" ? String(h) : h;
        });
        return new v("Invalid " + $ + " `" + k + "` of value `" + String(D) + "` " + ("supplied to `" + O + "`, expected one of " + j + "."));
      }
      return T(w);
    }
    function he(p) {
      function w(R, I, O, $, k) {
        if (typeof p != "function")
          return new v("Property `" + k + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var D = R[I], M = Q(D);
        if (M !== "object")
          return new v("Invalid " + $ + " `" + k + "` of type " + ("`" + M + "` supplied to `" + O + "`, expected an object."));
        for (var j in D)
          if (r(D, j)) {
            var u = p(D, j, O, $, k + "." + j, n);
            if (u instanceof Error)
              return u;
          }
        return null;
      }
      return T(w);
    }
    function G(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var w = 0; w < p.length; w++) {
        var R = p[w];
        if (typeof R != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ue(R) + " at index " + w + "."
          ), o;
      }
      function I(O, $, k, D, M) {
        for (var j = [], u = 0; u < p.length; u++) {
          var P = p[u], h = P(O, $, k, D, M, n);
          if (h == null)
            return null;
          h.data && r(h.data, "expectedType") && j.push(h.data.expectedType);
        }
        var U = j.length > 0 ? ", expected one of type [" + j.join(", ") + "]" : "";
        return new v("Invalid " + D + " `" + M + "` supplied to " + ("`" + k + "`" + U + "."));
      }
      return T(I);
    }
    function ce() {
      function p(w, R, I, O, $) {
        return re(w[R]) ? null : new v("Invalid " + O + " `" + $ + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return T(p);
    }
    function F(p, w, R, I, O) {
      return new v(
        (p || "React class") + ": " + w + " type `" + R + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function ee(p) {
      function w(R, I, O, $, k) {
        var D = R[I], M = Q(D);
        if (M !== "object")
          return new v("Invalid " + $ + " `" + k + "` of type `" + M + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var j in p) {
          var u = p[j];
          if (typeof u != "function")
            return F(O, $, k, j, pe(u));
          var P = u(D, j, O, $, k + "." + j, n);
          if (P)
            return P;
        }
        return null;
      }
      return T(w);
    }
    function K(p) {
      function w(R, I, O, $, k) {
        var D = R[I], M = Q(D);
        if (M !== "object")
          return new v("Invalid " + $ + " `" + k + "` of type `" + M + "` " + ("supplied to `" + O + "`, expected `object`."));
        var j = t({}, R[I], p);
        for (var u in j) {
          var P = p[u];
          if (r(p, u) && typeof P != "function")
            return F(O, $, k, u, pe(P));
          if (!P)
            return new v(
              "Invalid " + $ + " `" + k + "` key `" + u + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(R[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(p), null, "  ")
            );
          var h = P(D, u, O, $, k + "." + u, n);
          if (h)
            return h;
        }
        return null;
      }
      return T(w);
    }
    function re(p) {
      switch (typeof p) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !p;
        case "object":
          if (Array.isArray(p))
            return p.every(re);
          if (p === null || a(p))
            return !0;
          var w = f(p);
          if (w) {
            var R = w.call(p), I;
            if (w !== p.entries) {
              for (; !(I = R.next()).done; )
                if (!re(I.value))
                  return !1;
            } else
              for (; !(I = R.next()).done; ) {
                var O = I.value;
                if (O && !re(O[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Ae(p, w) {
      return p === "symbol" ? !0 : w ? w["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && w instanceof Symbol : !1;
    }
    function Q(p) {
      var w = typeof p;
      return Array.isArray(p) ? "array" : p instanceof RegExp ? "object" : Ae(w, p) ? "symbol" : w;
    }
    function pe(p) {
      if (typeof p > "u" || p === null)
        return "" + p;
      var w = Q(p);
      if (w === "object") {
        if (p instanceof Date)
          return "date";
        if (p instanceof RegExp)
          return "regexp";
      }
      return w;
    }
    function ue(p) {
      var w = pe(p);
      switch (w) {
        case "array":
        case "object":
          return "an " + w;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + w;
        default:
          return w;
      }
    }
    function Oe(p) {
      return !p.constructor || !p.constructor.name ? m : p.constructor.name;
    }
    return _.checkPropTypes = i, _.resetWarningCache = i.resetWarningCache, _.PropTypes = _, _;
  }, Ut;
}
var qt, dr;
function Qo() {
  if (dr) return qt;
  dr = 1;
  var e = bn();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, qt = function() {
    function r(o, a, d, c, l, f) {
      if (f !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var s = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, qt;
}
if (process.env.NODE_ENV !== "production") {
  var Xo = ri(), Zo = !0;
  en.exports = Go()(Xo.isElement, Zo);
} else
  en.exports = Qo()();
var Jo = en.exports;
const Ke = /* @__PURE__ */ Wo(Jo);
class rt {
  static transformBounds(t, { pan: n, zoom: r }) {
    const i = t.width * r, s = t.height * r, o = t.left + t.width / 2, a = t.top + t.height / 2, d = o * r - n[0], c = a * r - n[1], l = (t.width - i) / 2, f = (t.height - s) / 2, m = d - i / 2, _ = c - s / 2, E = l - m, v = f - _;
    return {
      width: i,
      height: s,
      top: v,
      left: E,
      right: E + i,
      bottom: v + s,
      x: E,
      y: v
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
  static mergeDeep(t, n) {
    const r = (i) => i && typeof i == "object";
    return Object.keys(n).forEach((i) => {
      const s = t[i], o = n[i];
      Array.isArray(s) && Array.isArray(o) ? t[i] = o : r(s) && r(o) ? t[i] = rt.mergeDeep({ ...s }, o) : t[i] = o;
    }), t;
  }
}
const si = ui(), be = {
  "viewer-main": "_viewer-main_1mddk_1",
  "viewer-main-fill-height": "_viewer-main-fill-height_1mddk_10",
  "viewer-viewport": "_viewer-viewport_1mddk_14",
  "viewer-minimap-content": "_viewer-minimap-content_1mddk_19",
  "viewer-viewport-content": "_viewer-viewport-content_1mddk_20",
  "viewer-minimap": "_viewer-minimap_1mddk_19",
  "viewer-minimap-viewport-area": "_viewer-minimap-viewport-area_1mddk_38",
  "viewer-viewport-center-guide": "_viewer-viewport-center-guide_1mddk_59"
}, ea = ({ className: e = "", viewportContent: t, minimapContent: n }) => {
  const {
    crop: r,
    setCrop: i,
    settings: s,
    setZoomIn: o,
    setZoomOut: a,
    setResetView: d,
    setCenterView: c,
    setToggleMinimap: l
  } = nn(si), f = Z(r), m = 0.75, _ = 100, E = Z(), v = Z(), T = Z(), b = Z(), A = Z(s.minimap.width), S = Z(160), [x, g] = ve(s.minimap.enabled), [L, H] = ve({
    width: A.current,
    height: S.current,
    scale: 1
  }), [he, G] = ys(() => ({
    transform: `scale(${r.zoom}) translate(${r.pan[0] / r.zoom}px, ${r.pan[1] / r.zoom}px)`,
    onRest: () => {
    },
    config: {
      tension: 170,
      // 170
      friction: 26
      // 26
    }
  }));
  ie(() => {
    r !== f.current && (f.current = r, G.start({ transform: `scale(${r.zoom}) translate(${r.pan[0] / r.zoom}px, ${r.pan[1] / r.zoom}px)` }));
  }, [r, G]);
  const ce = (u, P, h) => {
    const U = (h.width - P.width) / 2, X = (h.height - P.height) / 2;
    return h.width < P.width ? u.pan[0] = 0 : h.left > P.left ? u.pan[0] = Math.min(u.pan[0], U) : h.right < P.right && (u.pan[0] = Math.max(u.pan[0], P.width - h.width + U)), h.height < P.height ? u.pan[1] = 0 : h.top > P.top ? u.pan[1] = Math.min(u.pan[1], X) : h.bottom < P.bottom && (u.pan[1] = Math.max(u.pan[1], P.height - h.height + X)), u;
  }, F = te((u) => {
    const P = rt.getEditableRect(ee(v.current)), h = rt.transformBounds(P, u);
    return ce(u, P, h);
  }, []), ee = (u) => {
    const P = E.current.getBoundingClientRect(), h = u.getBoundingClientRect();
    return {
      top: h.top - P.top,
      left: h.left - P.left,
      width: u.offsetWidth,
      height: u.offsetHeight,
      bottom: h.top - P.top + u.offsetHeight,
      right: h.left - P.left + u.offsetWidth
    };
  }, K = te(() => {
    const u = b.current.offsetWidth, P = v.current.offsetWidth / v.current.offsetHeight;
    S.current = u / P;
    const h = u / v.current.offsetWidth;
    H((X) => ({
      ...X,
      width: A.current,
      height: S.current,
      scale: h
    }));
    let U = {
      ...f.current
    };
    U = F(U), i(U);
  }, [F, i]);
  ie(() => {
    if (T.current) {
      const u = T.current.querySelector("img");
      u && (u.complete ? K() : u.onload = K);
      const P = T.current.querySelector("video");
      P && (P.readyState >= 4 ? K() : P.onloadeddata = K);
    }
    return () => {
    };
  }, [t, K]), ie(() => {
    K();
  }, [x, K]);
  const re = te(() => {
    K();
  }, [K]);
  ie(() => (window.addEventListener("resize", re), () => {
    window.removeEventListener("resize", re);
  }), [re]);
  const Ae = te((u) => {
    const P = { pan: { ...u.pan }, zoom: u.zoom }, h = F({ pan: { ...u.pan }, zoom: u.zoom });
    return P.pan[0] = Math.max(P.pan[0], h.pan[0] - s.spring.rubberbandDistance), P.pan[0] = Math.min(P.pan[0], h.pan[0] + s.spring.rubberbandDistance), P.pan[1] = Math.max(P.pan[1], h.pan[1] - s.spring.rubberbandDistance), P.pan[1] = Math.min(P.pan[1], h.pan[1] + s.spring.rubberbandDistance), P;
  }, [s, F]), Q = te((u, P, h) => {
    if (!s.zoom.enabled || u.last) return h;
    h ?? (h = f.current);
    const U = ee(v.current);
    let X = 0, Y = [0, 0];
    if (u.type === "click")
      X = Number(u.zoomChange) * s.zoom.zoomButtonStep;
    else if (u.type === "pointermove" && u.pinching)
      X = u.delta[0], Y[0] = u.origin[0] - U.width / 2, Y[1] = u.origin[1] - U.height / 2;
    else if (u.type === "wheel")
      if (u.ctrlKey && u.pinching === !0) {
        switch (u.axis) {
          case "scale":
            X = u.delta[0];
            break;
        }
        Y[0] = u.event.clientX - U.width / 2, Y[1] = u.event.clientY - U.height / 2;
      } else u.axis === "y" && (!("pinching" in u) || u.pinching === !1) && (X = -u.delta[1] / _ * s.zoom.mouseWheelStep, Y[0] = u.event.clientX - U.width / 2, Y[1] = u.event.clientY - U.height / 2);
    P == "minimap" && (Y[0] = 0, Y[1] = 0);
    const wn = Math.min(Math.max(h.zoom + X, s.zoom.min), s.zoom.max), En = wn / f.current.zoom, oi = [
      Y[0] + (f.current.pan[0] - Y[0]) * En,
      Y[1] + (f.current.pan[1] - Y[1]) * En
    ];
    let ut = {
      ...f.current,
      zoom: wn,
      pan: oi
    };
    return ut = F(ut), i(ut), ut;
  }, [s, i, F]), pe = te((u, P, h) => {
    if (!s.pan.enabled || u.last) return h;
    h ?? (h = f.current);
    const U = P == "viewport" ? 1 : -f.current.zoom / L.scale, X = [
      h.pan[0] + u.delta[0] * U,
      h.pan[1] + u.delta[1] * U
    ];
    let Y = {
      ...f.current,
      pan: X
    };
    return s.spring.rubberband ? Y = Ae(Y) : Y = F(Y), i(Y), Y;
  }, [s, i, F, Ae, L.scale]), ue = te(() => {
    let u = {
      ...f.current
    };
    u = F(u), i(u);
  }, [i, F]), Oe = te(() => {
    Q({ type: "click", zoomChange: -1 }, "minimap", f.current);
  }, [Q]), p = te(() => {
    Q({ type: "click", zoomChange: 1 }, "minimap", f.current);
  }, [Q]), w = te(() => {
    const u = {
      pan: [0, 0],
      zoom: s.zoom.default
    };
    i(u);
  }, [s, i]), R = te(() => {
    const u = {
      pan: [0, 0],
      zoom: f.current.zoom
    };
    i(u);
  }, [i]), I = te(() => {
    g((u) => !u);
  }, []);
  ie(() => (a(() => Oe), o(() => p), d(() => w), c(() => R), l(() => I), () => {
  }), [Oe, a, p, o, w, d, R, c, I, l]), ie(() => {
    const u = (P) => {
      const h = P.key.toLowerCase();
      s.resetView.enabled && h === s.resetView.keyboardShortcut && w(), s.centerView.enabled && h === s.centerView.keyboardShortcut && R(), s.minimap.enabled && h === s.minimap.keyboardShortcut && I();
    };
    return window.addEventListener("keydown", u), () => {
      window.removeEventListener("keydown", u);
    };
  }, [s, w, R, I]);
  const O = {
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
      from: () => [f.current.zoom * m, 0]
    },
    wheel: {
      enabled: s.zoom.enabled,
      preventDefault: !0,
      from: () => [0, -f.current.zoom * _]
    },
    eventOptions: {
      passive: !1
    }
  };
  rr(
    {
      onDrag: (u) => pe(u, "viewport", u.memo),
      onDragEnd: ue,
      onPinch: (u) => Q(u, "viewport", u.memo),
      onPinchEnd: ue,
      onWheel: (u) => Q(u, "viewport", u.memo),
      onWheelEnd: ue
    },
    {
      ...O,
      target: v
    }
  ), rr({
    onDrag: (u) => pe(u, "minimap", u.memo),
    onDragEnd: ue,
    onPinch: (u) => Q(u, "minimap", u.memo),
    onPinchEnd: ue,
    onWheel: (u) => Q(u, "minimap", u.memo),
    onWheelEnd: ue
  }, {
    ...O,
    target: b
  });
  const $ = {
    width: A.current,
    height: S.current,
    display: x && n ? "block" : "none",
    outline: s.minimap.outlineStyle
  };
  let k = {};
  if (v.current) {
    const u = L.scale;
    k = {
      // The order of transform matters! Scale first, then translate
      transform: `scale(${1 / Math.max(r.zoom, 1)}) translate(${-r.pan[0] * u}px, ${-r.pan[1] * u}px)`,
      width: `${v.current.offsetWidth * u}px`,
      height: `${v.current.offsetHeight * u}px`,
      outline: s.minimap.viewportAreaOutlineStyle
    };
  }
  const D = s.spring.enabled === !0 ? he : { transform: `scale(${r.zoom}) translate(${r.pan[0] / r.zoom}px, ${r.pan[1] / r.zoom}px)` };
  let M = {};
  v.current && (M = {
    transformOrigin: "0% 0%",
    transform: `scale(${L.scale})`,
    width: `${v.current.offsetWidth}px`,
    height: `${v.current.offsetHeight}px`
  });
  const j = [
    e,
    be["viewer-main"],
    s.fillHeight && be["viewer-main-fill-height"]
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ Ct("div", { className: j, ref: E, children: [
    /* @__PURE__ */ Ct("div", { className: be["viewer-minimap"], ref: b, style: $, children: [
      /* @__PURE__ */ Le("div", { className: be["viewer-minimap-content"], style: M, children: n }),
      /* @__PURE__ */ Le("div", { className: be["viewer-minimap-viewport-area"], style: k })
    ] }),
    /* @__PURE__ */ Ct("div", { className: be["viewer-viewport"], ref: v, children: [
      s.guides.enabled && /* @__PURE__ */ Le("div", { className: be["viewer-viewport-center-guide"] }),
      /* @__PURE__ */ Le(ks.div, { className: be["viewer-viewport-content"], ref: T, style: D, children: t })
    ] })
  ] });
};
ea.propTypes = {
  className: Ke.string,
  viewportContent: Ke.node,
  minimapContent: Ke.node
};
const ta = {
  pan: { enabled: !0 },
  zoom: { enabled: !0, default: 1, min: 1, max: 4, mouseWheelStep: 0.5, zoomButtonStep: 0.5 },
  resetView: { enabled: !0, keyboardShortcut: "r" },
  centerView: { enabled: !1, keyboardShortcut: "c" },
  minimap: { enabled: !0, width: "160px", keyboardShortcut: "m", outlineStyle: "1px solid #ccc", viewportAreaOutlineStyle: "2px solid #333" },
  spring: { enabled: !0, rubberband: !0, rubberbandDistance: 100 },
  guides: { enabled: !1 },
  fillHeight: !0
}, hr = {
  pan: [0, 0],
  zoom: 1
}, na = ({ children: e, settings: t = {} }) => {
  const n = Fe(() => rt.mergeDeep({ ...ta }, t), [t]), [r, i] = ve(hr), [s, o] = ve(null), [a, d] = ve(null), [c, l] = ve(null), [f, m] = ve(null), [_, E] = ve(null);
  return ie(() => {
    i({ pan: hr.pan, zoom: n.zoom.default });
  }, [n.zoom.default]), /* @__PURE__ */ Le(si.Provider, { value: {
    crop: r,
    setCrop: i,
    settings: n,
    zoomOut: s,
    setZoomOut: o,
    zoomIn: a,
    setZoomIn: d,
    resetView: c,
    setResetView: l,
    centerView: f,
    setCenterView: m,
    toggleMinimap: _,
    setToggleMinimap: E
  }, children: e });
};
na.propTypes = {
  children: Ke.node,
  settings: Ke.object
};
export {
  ea as Viewer,
  si as ViewerContext,
  na as ViewerProvider,
  rt as ViewerUtils
};
