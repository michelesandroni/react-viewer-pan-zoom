import { jsxs as Rt, jsx as z } from "react/jsx-runtime";
import jt, { createContext as fr, memo as Ht, useContext as Ot, useMemo as it, useRef as L, useCallback as S, useState as N, useEffect as W } from "react";
import './index.css';function pr(e, t, r) {
  return Math.max(t, Math.min(e, r));
}
const v = {
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
function te(e, t, r) {
  return t === 0 || Math.abs(t) === 1 / 0 ? Math.pow(e, r * 5) : e * t * r / (t + r * e);
}
function ee(e, t, r, n = 0.15) {
  return n === 0 ? pr(e, t, r) : e < t ? -te(t - e, r - t, n) + t : e > r ? +te(e - r, r - t, n) + r : e;
}
function dr(e, [t, r], [n, i]) {
  const [[s, o], [c, l]] = e;
  return [ee(t, s, o, n), ee(r, c, l, i)];
}
function mr(e, t) {
  if (typeof e != "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vr(e) {
  var t = mr(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function E(e, t, r) {
  return t = vr(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function re(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? re(Object(r), !0).forEach(function(n) {
      E(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : re(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Me = {
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
function ne(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : "";
}
const gr = ["enter", "leave"];
function _r(e = !1, t) {
  return e && !gr.includes(t);
}
function br(e, t = "", r = !1) {
  const n = Me[e], i = n && n[t] || t;
  return "on" + ne(e) + ne(i) + (_r(r, i) ? "Capture" : "");
}
const yr = ["gotpointercapture", "lostpointercapture"];
function wr(e) {
  let t = e.substring(2).toLowerCase();
  const r = !!~t.indexOf("passive");
  r && (t = t.replace("passive", ""));
  const n = yr.includes(t) ? "capturecapture" : "capture", i = !!~t.indexOf(n);
  return i && (t = t.replace("capture", "")), {
    device: t,
    capture: i,
    passive: r
  };
}
function $r(e, t = "") {
  const r = Me[e], n = r && r[t] || t;
  return e + n;
}
function Tt(e) {
  return "touches" in e;
}
function ke(e) {
  return Tt(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse";
}
function Er(e) {
  return Array.from(e.touches).filter((t) => {
    var r, n;
    return t.target === e.currentTarget || ((r = e.currentTarget) === null || r === void 0 || (n = r.contains) === null || n === void 0 ? void 0 : n.call(r, t.target));
  });
}
function Or(e) {
  return e.type === "touchend" || e.type === "touchcancel" ? e.changedTouches : e.targetTouches;
}
function je(e) {
  return Tt(e) ? Or(e)[0] : e;
}
function Vt(e, t) {
  try {
    const r = t.clientX - e.clientX, n = t.clientY - e.clientY, i = (t.clientX + e.clientX) / 2, s = (t.clientY + e.clientY) / 2, o = Math.hypot(r, n);
    return {
      angle: -(Math.atan2(r, n) * 180) / Math.PI,
      distance: o,
      origin: [i, s]
    };
  } catch {
  }
  return null;
}
function Tr(e) {
  return Er(e).map((t) => t.identifier);
}
function ie(e, t) {
  const [r, n] = Array.from(e.touches).filter((i) => t.includes(i.identifier));
  return Vt(r, n);
}
function Lt(e) {
  const t = je(e);
  return Tt(e) ? t.identifier : t.pointerId;
}
function Y(e) {
  const t = je(e);
  return [t.clientX, t.clientY];
}
const se = 40, oe = 800;
function Le(e) {
  let {
    deltaX: t,
    deltaY: r,
    deltaMode: n
  } = e;
  return n === 1 ? (t *= se, r *= se) : n === 2 && (t *= oe, r *= oe), [t, r];
}
function Sr(e) {
  var t, r;
  const {
    scrollX: n,
    scrollY: i,
    scrollLeft: s,
    scrollTop: o
  } = e.currentTarget;
  return [(t = n ?? s) !== null && t !== void 0 ? t : 0, (r = i ?? o) !== null && r !== void 0 ? r : 0];
}
function Cr(e) {
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
function yt(e, ...t) {
  return typeof e == "function" ? e(...t) : e;
}
function xr() {
}
function Ar(...e) {
  return e.length === 0 ? xr : e.length === 1 ? e[0] : function() {
    let t;
    for (const r of e)
      t = r.apply(this, arguments) || t;
    return t;
  };
}
function ae(e, t) {
  return Object.assign({}, t, e || {});
}
const Ir = 32;
class Ne {
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
    r._active || (this.reset(), this.computeInitial(), r._active = !0, r.target = t.target, r.currentTarget = t.currentTarget, r.lastOffset = n.from ? yt(n.from, r) : r.offset, r.offset = r.lastOffset, r.startTime = r.timeStamp = t.timeStamp);
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
    if (t && (r.event = t, n.preventDefault && t.cancelable && r.event.preventDefault(), r.type = t.type, i.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, i.locked = !!document.pointerLockElement, Object.assign(i, Cr(t)), i.down = i.pressed = i.buttons % 2 === 1 || i.touches > 0, s = t.timeStamp - r.timeStamp, r.timeStamp = t.timeStamp, r.elapsedTime = r.timeStamp - r.startTime), r._active) {
      const M = r._delta.map(Math.abs);
      v.addTo(r._distance, M);
    }
    this.axisIntent && this.axisIntent(t);
    const [o, c] = r._movement, [l, h] = n.threshold, {
      _step: u,
      values: g
    } = r;
    if (n.hasCustomTransform ? (u[0] === !1 && (u[0] = Math.abs(o) >= l && g[0]), u[1] === !1 && (u[1] = Math.abs(c) >= h && g[1])) : (u[0] === !1 && (u[0] = Math.abs(o) >= l && Math.sign(o) * l), u[1] === !1 && (u[1] = Math.abs(c) >= h && Math.sign(c) * h)), r.intentional = u[0] !== !1 || u[1] !== !1, !r.intentional) return;
    const d = [0, 0];
    if (n.hasCustomTransform) {
      const [M, Mt] = g;
      d[0] = u[0] !== !1 ? M - u[0] : 0, d[1] = u[1] !== !1 ? Mt - u[1] : 0;
    } else
      d[0] = u[0] !== !1 ? o - u[0] : 0, d[1] = u[1] !== !1 ? c - u[1] : 0;
    this.restrictToAxis && !r._blocked && this.restrictToAxis(d);
    const O = r.offset, b = r._active && !r._blocked || r.active;
    b && (r.first = r._active && !r.active, r.last = !r._active && r.active, r.active = i[this.ingKey] = r._active, t && (r.first && ("bounds" in n && (r._bounds = yt(n.bounds, r)), this.setup && this.setup()), r.movement = d, this.computeOffset()));
    const [D, P] = r.offset, [[U, tt], [ut, Pt]] = r._bounds;
    r.overflow = [D < U ? -1 : D > tt ? 1 : 0, P < ut ? -1 : P > Pt ? 1 : 0], r._movementBound[0] = r.overflow[0] ? r._movementBound[0] === !1 ? r._movement[0] : r._movementBound[0] : !1, r._movementBound[1] = r.overflow[1] ? r._movementBound[1] === !1 ? r._movement[1] : r._movementBound[1] : !1;
    const et = r._active ? n.rubberband || [0, 0] : [0, 0];
    if (r.offset = dr(r._bounds, r.offset, et), r.delta = v.sub(r.offset, O), this.computeMovement(), b && (!r.last || s > Ir)) {
      r.delta = v.sub(r.offset, O);
      const M = r.delta.map(Math.abs);
      v.addTo(r.distance, M), r.direction = r.delta.map(Math.sign), r._direction = r._delta.map(Math.sign), !r.first && s > 0 && (r.velocity = [M[0] / s, M[1] / s], r.timeDelta = s);
    }
  }
  emit() {
    const t = this.state, r = this.shared, n = this.config;
    if (t._active || this.clean(), (t._blocked || !t.intentional) && !t._force && !n.triggerAllEvents) return;
    const i = this.handler(y(y(y({}, r), t), {}, {
      [this.aliasKey]: t.values
    }));
    i !== void 0 && (t.memo = i);
  }
  clean() {
    this.eventStore.clean(), this.timeoutStore.clean();
  }
}
function Dr([e, t], r) {
  const n = Math.abs(e), i = Math.abs(t);
  if (n > i && n > r)
    return "x";
  if (i > n && i > r)
    return "y";
}
class st extends Ne {
  constructor(...t) {
    super(...t), E(this, "aliasKey", "xy");
  }
  reset() {
    super.reset(), this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0], this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = v.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = v.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(t) {
    const r = this.state, n = this.config;
    if (!r.axis && t) {
      const i = typeof n.axisThreshold == "object" ? n.axisThreshold[ke(t)] : n.axisThreshold;
      r.axis = Dr(r._movement, i);
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
const ce = (e) => e, ue = 0.15, Ut = {
  enabled(e = !0) {
    return e;
  },
  eventOptions(e, t, r) {
    return y(y({}, r.shared.eventOptions), e);
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
        return [ue, ue];
      case !1:
        return [0, 0];
      default:
        return v.toVector(e);
    }
  },
  from(e) {
    if (typeof e == "function") return e;
    if (e != null) return v.toVector(e);
  },
  transform(e, t, r) {
    const n = e || r.shared.transform;
    if (this.hasCustomTransform = !!n, process.env.NODE_ENV === "development") {
      const i = n || ce;
      return (s) => {
        const o = i(s);
        return (!isFinite(o[0]) || !isFinite(o[1])) && console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${o[0]},${[1]}]`), o;
      };
    }
    return n || ce;
  },
  threshold(e) {
    return v.toVector(e, 0);
  }
};
process.env.NODE_ENV === "development" && Object.assign(Ut, {
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
const Pr = 0, R = y(y({}, Ut), {}, {
  axis(e, t, {
    axis: r
  }) {
    if (this.lockDirection = r === "lock", !this.lockDirection) return r;
  },
  axisThreshold(e = Pr) {
    return e;
  },
  bounds(e = {}) {
    if (typeof e == "function")
      return (s) => R.bounds(e(s));
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
}), le = {
  ArrowRight: (e, t = 1) => [e * t, 0],
  ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
  ArrowUp: (e, t = 1) => [0, -1 * e * t],
  ArrowDown: (e, t = 1) => [0, e * t]
};
class Mr extends st {
  constructor(...t) {
    super(...t), E(this, "ingKey", "dragging");
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
      t._bounds = R.bounds(i);
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
    r.pointerCapture && t.target.setPointerCapture(t.pointerId), !(i && i.size > 1 && n._pointerActive) && (this.start(t), this.setupPointer(t), n._pointerId = Lt(t), n._pointerActive = !0, this.computeValues(Y(t)), this.computeInitial(), r.preventScrollAxis && ke(t) !== "mouse" ? (n._active = !1, this.setupScrollPrevention(t)) : r.delay > 0 ? (this.setupDelayTrigger(t), r.triggerAllEvents && (this.compute(t), this.emit())) : this.startPointerDrag(t));
  }
  startPointerDrag(t) {
    const r = this.state;
    r._active = !0, r._preventScroll = !0, r._delayed = !1, this.compute(t), this.emit();
  }
  pointerMove(t) {
    const r = this.state, n = this.config;
    if (!r._pointerActive) return;
    const i = Lt(t);
    if (r._pointerId !== void 0 && i !== r._pointerId) return;
    const s = Y(t);
    if (document.pointerLockElement === t.target ? r._delta = [t.movementX, t.movementY] : (r._delta = v.sub(s, r._values), this.computeValues(s)), v.addTo(r._movement, r._delta), this.compute(t), r._delayed && r.intentional) {
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
    const i = Lt(t);
    if (r._pointerId !== void 0 && i !== r._pointerId) return;
    this.state._pointerActive = !1, this.setActive(), this.compute(t);
    const [s, o] = r._distance;
    if (r.tap = s <= n.tapsThreshold && o <= n.tapsThreshold, r.tap && n.filterTaps)
      r._force = !0;
    else {
      const [c, l] = r._delta, [h, u] = r._movement, [g, d] = n.swipe.velocity, [O, b] = n.swipe.distance, D = n.swipe.duration;
      if (r.elapsedTime < D) {
        const P = Math.abs(c / r.timeDelta), U = Math.abs(l / r.timeDelta);
        P > g && Math.abs(h) > O && (r.swipe[0] = Math.sign(c)), U > d && Math.abs(u) > b && (r.swipe[1] = Math.sign(l));
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
    this.state._preventScroll = !1, kr(t);
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
    const r = le[t.key];
    if (r) {
      const n = this.state, i = t.shiftKey ? 10 : t.altKey ? 0.1 : 1;
      this.start(t), n._delta = r(this.config.keyboardDisplacement, i), n._keyboardActive = !0, v.addTo(n._movement, n._delta), this.compute(t), this.emit();
    }
  }
  keyUp(t) {
    t.key in le && (this.state._keyboardActive = !1, this.setActive(), this.compute(t), this.emit());
  }
  bind(t) {
    const r = this.config.device;
    t(r, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (t(r, "change", this.pointerMove.bind(this)), t(r, "end", this.pointerUp.bind(this)), t(r, "cancel", this.pointerUp.bind(this)), t("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (t("key", "down", this.keyDown.bind(this)), t("key", "up", this.keyUp.bind(this))), this.config.filterTaps && t("click", "", this.pointerClick.bind(this), {
      capture: !0,
      passive: !1
    });
  }
}
function kr(e) {
  "persist" in e && typeof e.persist == "function" && e.persist();
}
const ot = typeof window < "u" && window.document && window.document.createElement;
function Ve() {
  return ot && "ontouchstart" in window;
}
function jr() {
  return Ve() || ot && window.navigator.maxTouchPoints > 1;
}
function Lr() {
  return ot && "onpointerdown" in window;
}
function Nr() {
  return ot && "exitPointerLock" in window.document;
}
function Vr() {
  try {
    return "constructor" in GestureEvent;
  } catch {
    return !1;
  }
}
const C = {
  isBrowser: ot,
  gesture: Vr(),
  touch: Ve(),
  touchscreen: jr(),
  pointer: Lr(),
  pointerLock: Nr()
}, zr = 250, Rr = 180, Hr = 0.5, Ur = 50, Gr = 250, Kr = 10, he = {
  mouse: 0,
  touch: 0,
  pen: 8
}, ze = y(y({}, R), {}, {
  device(e, t, {
    pointer: {
      touch: r = !1,
      lock: n = !1,
      mouse: i = !1
    } = {}
  }) {
    return this.pointerLock = n && C.pointerLock, C.touch && r ? "touch" : this.pointerLock ? "mouse" : C.pointer && !i ? "pointer" : C.touch ? "touch" : "mouse";
  },
  preventScrollAxis(e, t, {
    preventScroll: r
  }) {
    if (this.preventScrollDelay = typeof r == "number" ? r : r || r === void 0 && e ? zr : void 0, !(!C.touchscreen || r === !1))
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
    const s = v.toVector(e, r ? n : i ? 1 : 0);
    return this.filterTaps = r, this.tapsThreshold = n, s;
  },
  swipe({
    velocity: e = Hr,
    distance: t = Ur,
    duration: r = Gr
  } = {}) {
    return {
      velocity: this.transform(v.toVector(e)),
      distance: this.transform(v.toVector(t)),
      duration: r
    };
  },
  delay(e = 0) {
    switch (e) {
      case !0:
        return Rr;
      case !1:
        return 0;
      default:
        return e;
    }
  },
  axisThreshold(e) {
    return e ? y(y({}, he), e) : he;
  },
  keyboardDisplacement(e = Kr) {
    return e;
  }
});
process.env.NODE_ENV === "development" && Object.assign(ze, {
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
function Re(e) {
  const [t, r] = e.overflow, [n, i] = e._delta, [s, o] = e._direction;
  (t < 0 && n > 0 && s < 0 || t > 0 && n < 0 && s > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && i > 0 && o < 0 || r > 0 && i < 0 && o > 0) && (e._movement[1] = e._movementBound[1]);
}
const Br = 30, Fr = 100;
class Wr extends Ne {
  constructor(...t) {
    super(...t), E(this, "ingKey", "pinching"), E(this, "aliasKey", "da");
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
    t === "wheel" ? this.state.offset = v.add(r, n) : this.state.offset = [(1 + r[0]) * n[0], r[1] + n[1]];
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
      const i = Math.abs(r) * Br - Math.abs(n);
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
    const i = ie(t, r._touchIds);
    i && this.pinchStart(t, i);
  }
  pointerStart(t) {
    if (t.buttons != null && t.buttons % 2 !== 1) return;
    this.ctrl.setEventIds(t), t.target.setPointerCapture(t.pointerId);
    const r = this.state, n = r._pointerEvents, i = this.ctrl.pointerIds;
    if (r._active && Array.from(n.keys()).every((o) => i.has(o)) || (n.size < 2 && n.set(t.pointerId, t), r._pointerEvents.size < 2)) return;
    this.start(t);
    const s = Vt(...Array.from(n.values()));
    s && this.pinchStart(t, s);
  }
  pinchStart(t, r) {
    const n = this.state;
    n.origin = r.origin, this.computeValues([r.distance, r.angle]), this.computeInitial(), this.compute(t), this.emit();
  }
  touchMove(t) {
    if (!this.state._active) return;
    const r = ie(t, this.state._touchIds);
    r && this.pinchMove(t, r);
  }
  pointerMove(t) {
    const r = this.state._pointerEvents;
    if (r.has(t.pointerId) && r.set(t.pointerId, t), !this.state._active) return;
    const n = Vt(...Array.from(r.values()));
    n && this.pinchMove(t, n);
  }
  pinchMove(t, r) {
    const n = this.state, i = n._values[1], s = r.angle - i;
    let o = 0;
    Math.abs(s) > 270 && (o += Math.sign(s)), this.computeValues([r.distance, r.angle - 360 * o]), n.origin = r.origin, n.turns = o, n._movement = [n._values[0] / n._initial[0] - 1, n._values[1] - n._initial[1]], this.compute(t), this.emit();
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
    r._movement = [t.scale - 1, t.rotation], r._delta = v.sub(r._movement, n), this.compute(t), this.emit();
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
    n._delta = [-Le(t)[1] / Fr * n.offset[0], 0], v.addTo(n._movement, n._delta), Re(n), this.state.origin = [t.clientX, t.clientY], this.compute(t), this.emit();
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
const Yr = y(y({}, Ut), {}, {
  device(e, t, {
    shared: r,
    pointer: {
      touch: n = !1
    } = {}
  }) {
    if (r.target && !C.touch && C.gesture) return "gesture";
    if (C.touch && n) return "touch";
    if (C.touchscreen) {
      if (C.pointer) return "pointer";
      if (C.touch) return "touch";
    }
  },
  bounds(e, t, {
    scaleBounds: r = {},
    angleBounds: n = {}
  }) {
    const i = (o) => {
      const c = ae(yt(r, o), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [c.min, c.max];
    }, s = (o) => {
      const c = ae(yt(n, o), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [c.min, c.max];
    };
    return typeof r != "function" && typeof n != "function" ? [i(), s()] : (o) => [i(o), s(o)];
  },
  threshold(e, t, r) {
    return this.lockDirection = r.axis === "lock", v.toVector(e, this.lockDirection ? [0.1, 3] : 0);
  },
  modifierKey(e) {
    return e === void 0 ? "ctrlKey" : e;
  },
  pinchOnWheel(e = !0) {
    return e;
  }
});
class Xr extends st {
  constructor(...t) {
    super(...t), E(this, "ingKey", "moving");
  }
  move(t) {
    this.config.mouseOnly && t.pointerType !== "mouse" || (this.state._active ? this.moveChange(t) : this.moveStart(t), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)));
  }
  moveStart(t) {
    this.start(t), this.computeValues(Y(t)), this.compute(t), this.computeInitial(), this.emit();
  }
  moveChange(t) {
    if (!this.state._active) return;
    const r = Y(t), n = this.state;
    n._delta = v.sub(r, n._values), v.addTo(n._movement, n._delta), this.computeValues(r), this.compute(t), this.emit();
  }
  moveEnd(t) {
    this.state._active && (this.state._active = !1, this.compute(t), this.emit());
  }
  bind(t) {
    t("pointer", "change", this.move.bind(this)), t("pointer", "leave", this.moveEnd.bind(this));
  }
}
const qr = y(y({}, R), {}, {
  mouseOnly: (e = !0) => e
});
class Zr extends st {
  constructor(...t) {
    super(...t), E(this, "ingKey", "scrolling");
  }
  scroll(t) {
    this.state._active || this.start(t), this.scrollChange(t), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
  }
  scrollChange(t) {
    t.cancelable && t.preventDefault();
    const r = this.state, n = Sr(t);
    r._delta = v.sub(n, r._values), v.addTo(r._movement, r._delta), this.computeValues(n), this.compute(t), this.emit();
  }
  scrollEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    t("scroll", "", this.scroll.bind(this));
  }
}
const Jr = R;
class Qr extends st {
  constructor(...t) {
    super(...t), E(this, "ingKey", "wheeling");
  }
  wheel(t) {
    this.state._active || this.start(t), this.wheelChange(t), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
  }
  wheelChange(t) {
    const r = this.state;
    r._delta = Le(t), v.addTo(r._movement, r._delta), Re(r), this.compute(t), this.emit();
  }
  wheelEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    t("wheel", "", this.wheel.bind(this));
  }
}
const tn = R;
class en extends st {
  constructor(...t) {
    super(...t), E(this, "ingKey", "hovering");
  }
  enter(t) {
    this.config.mouseOnly && t.pointerType !== "mouse" || (this.start(t), this.computeValues(Y(t)), this.compute(t), this.emit());
  }
  leave(t) {
    if (this.config.mouseOnly && t.pointerType !== "mouse") return;
    const r = this.state;
    if (!r._active) return;
    r._active = !1;
    const n = Y(t);
    r._movement = r._delta = v.sub(n, r._values), this.computeValues(n), this.compute(t), r.delta = r.movement, this.emit();
  }
  bind(t) {
    t("pointer", "enter", this.enter.bind(this)), t("pointer", "leave", this.leave.bind(this));
  }
}
const rn = y(y({}, R), {}, {
  mouseOnly: (e = !0) => e
}), Gt = /* @__PURE__ */ new Map(), zt = /* @__PURE__ */ new Map();
function nn(e) {
  Gt.set(e.key, e.engine), zt.set(e.key, e.resolver);
}
const sn = {
  key: "drag",
  engine: Mr,
  resolver: ze
}, on = {
  key: "hover",
  engine: en,
  resolver: rn
}, an = {
  key: "move",
  engine: Xr,
  resolver: qr
}, cn = {
  key: "pinch",
  engine: Wr,
  resolver: Yr
}, un = {
  key: "scroll",
  engine: Zr,
  resolver: Jr
}, ln = {
  key: "wheel",
  engine: Qr,
  resolver: tn
};
function hn(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, s;
  for (s = 0; s < n.length; s++)
    i = n[s], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function fn(e, t) {
  if (e == null) return {};
  var r = hn(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
const pn = {
  target(e) {
    if (e)
      return () => "current" in e ? e.current : e;
  },
  enabled(e = !0) {
    return e;
  },
  window(e = C.isBrowser ? window : void 0) {
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
}, dn = ["target", "eventOptions", "window", "enabled", "transform"];
function bt(e = {}, t) {
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
        r[n] = bt(e[n], i);
        break;
      case "boolean":
        i && (r[n] = e[n]);
        break;
    }
  return r;
}
function mn(e, t, r = {}) {
  const n = e, {
    target: i,
    eventOptions: s,
    window: o,
    enabled: c,
    transform: l
  } = n, h = fn(n, dn);
  if (r.shared = bt({
    target: i,
    eventOptions: s,
    window: o,
    enabled: c,
    transform: l
  }, pn), t) {
    const u = zt.get(t);
    r[t] = bt(y({
      shared: r.shared
    }, h), u);
  } else
    for (const u in h) {
      const g = zt.get(u);
      if (g)
        r[u] = bt(y({
          shared: r.shared
        }, h[u]), g);
      else if (process.env.NODE_ENV === "development" && !["drag", "pinch", "scroll", "wheel", "move", "hover"].includes(u)) {
        if (u === "domTarget")
          throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
        console.warn(`[@use-gesture]: Unknown config key \`${u}\` was used. Please read the documentation for further information.`);
      }
    }
  return r;
}
class He {
  constructor(t, r) {
    E(this, "_listeners", /* @__PURE__ */ new Set()), this._ctrl = t, this._gestureKey = r;
  }
  add(t, r, n, i, s) {
    const o = this._listeners, c = $r(r, n), l = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}, h = y(y({}, l), s);
    t.addEventListener(c, i, h);
    const u = () => {
      t.removeEventListener(c, i, h), o.delete(u);
    };
    return o.add(u), u;
  }
  clean() {
    this._listeners.forEach((t) => t()), this._listeners.clear();
  }
}
class vn {
  constructor() {
    E(this, "_timeouts", /* @__PURE__ */ new Map());
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
class gn {
  constructor(t) {
    E(this, "gestures", /* @__PURE__ */ new Set()), E(this, "_targetEventStore", new He(this)), E(this, "gestureEventStores", {}), E(this, "gestureTimeoutStores", {}), E(this, "handlers", {}), E(this, "config", {}), E(this, "pointerIds", /* @__PURE__ */ new Set()), E(this, "touchIds", /* @__PURE__ */ new Set()), E(this, "state", {
      shared: {
        shiftKey: !1,
        metaKey: !1,
        ctrlKey: !1,
        altKey: !1
      }
    }), _n(this, t);
  }
  setEventIds(t) {
    if (Tt(t))
      return this.touchIds = new Set(Tr(t)), this.touchIds;
    if ("pointerId" in t)
      return t.type === "pointerup" || t.type === "pointercancel" ? this.pointerIds.delete(t.pointerId) : t.type === "pointerdown" && this.pointerIds.add(t.pointerId), this.pointerIds;
  }
  applyHandlers(t, r) {
    this.handlers = t, this.nativeHandlers = r;
  }
  applyConfig(t, r) {
    this.config = mn(t, r, this.config);
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
        for (const o of this.gestures) {
          const c = this.config[o], l = fe(n, c.eventOptions, !!i);
          if (c.enabled) {
            const h = Gt.get(o);
            new h(this, t, o).bind(l);
          }
        }
        const s = fe(n, r.eventOptions, !!i);
        for (const o in this.nativeHandlers)
          s(o, "", (c) => this.nativeHandlers[o](y(y({}, this.state.shared), {}, {
            event: c,
            args: t
          })), void 0, !0);
      }
      for (const s in n)
        n[s] = Ar(...n[s]);
      if (!i) return n;
      for (const s in n) {
        const {
          device: o,
          capture: c,
          passive: l
        } = wr(s);
        this._targetEventStore.add(i, o, "", n[s], {
          capture: c,
          passive: l
        });
      }
    }
  }
}
function B(e, t) {
  e.gestures.add(t), e.gestureEventStores[t] = new He(e, t), e.gestureTimeoutStores[t] = new vn();
}
function _n(e, t) {
  t.drag && B(e, "drag"), t.wheel && B(e, "wheel"), t.scroll && B(e, "scroll"), t.move && B(e, "move"), t.pinch && B(e, "pinch"), t.hover && B(e, "hover");
}
const fe = (e, t, r) => (n, i, s, o = {}, c = !1) => {
  var l, h;
  const u = (l = o.capture) !== null && l !== void 0 ? l : t.capture, g = (h = o.passive) !== null && h !== void 0 ? h : t.passive;
  let d = c ? n : br(n, i, u);
  r && g && (d += "Passive"), e[d] = e[d] || [], e[d].push(s);
}, bn = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function yn(e) {
  const t = {}, r = {}, n = /* @__PURE__ */ new Set();
  for (let i in e)
    bn.test(i) ? (n.add(RegExp.lastMatch), r[i] = e[i]) : t[i] = e[i];
  return [r, t, n];
}
function F(e, t, r, n, i, s) {
  if (!e.has(r)) return;
  if (!Gt.has(n)) {
    process.env.NODE_ENV === "development" && console.warn(`[@use-gesture]: You've created a custom handler that that uses the \`${n}\` gesture but isn't properly configured.

Please add \`${n}Action\` when creating your handler.`);
    return;
  }
  const o = r + "Start", c = r + "End", l = (h) => {
    let u;
    return h.first && o in t && t[o](h), r in t && (u = t[r](h)), h.last && c in t && t[c](h), u;
  };
  i[n] = l, s[n] = s[n] || {};
}
function wn(e, t) {
  const [r, n, i] = yn(e), s = {};
  return F(i, r, "onDrag", "drag", s, t), F(i, r, "onWheel", "wheel", s, t), F(i, r, "onScroll", "scroll", s, t), F(i, r, "onPinch", "pinch", s, t), F(i, r, "onMove", "move", s, t), F(i, r, "onHover", "hover", s, t), {
    handlers: s,
    config: t,
    nativeHandlers: n
  };
}
function $n(e, t = {}, r, n) {
  const i = jt.useMemo(() => new gn(e), []);
  if (i.applyHandlers(e, n), i.applyConfig(t, r), jt.useEffect(i.effect.bind(i)), jt.useEffect(() => i.clean.bind(i), []), t.target === void 0)
    return i.bind.bind(i);
}
function En(e) {
  return e.forEach(nn), function(r, n) {
    const {
      handlers: i,
      nativeHandlers: s,
      config: o
    } = wn(r, n || {});
    return $n(i, o, void 0, s);
  };
}
function pe(e, t) {
  return En([sn, cn, un, ln, an, on])(e, t || {});
}
var A = /* @__PURE__ */ ((e) => (e.Minimap = "minimap", e.Viewport = "viewport", e))(A || {});
const at = fr({}), V = {
  "viewer-main": "_viewer-main_1mddk_1",
  "viewer-main-fill-height": "_viewer-main-fill-height_1mddk_10",
  "viewer-viewport": "_viewer-viewport_1mddk_14",
  "viewer-minimap-content": "_viewer-minimap-content_1mddk_19",
  "viewer-viewport-content": "_viewer-viewport-content_1mddk_20",
  "viewer-minimap": "_viewer-minimap_1mddk_19",
  "viewer-minimap-viewport-area": "_viewer-minimap-viewport-area_1mddk_38",
  "viewer-viewport-center-guide": "_viewer-viewport-center-guide_1mddk_59"
}, Ue = Ht(({ viewportContent: e, viewportContentRef: t, viewportRef: r }) => {
  const { crop: n, settings: i } = Ot(at), s = {
    transform: `scale(${n.zoom}) translate(${n.pan[0] / n.zoom}px, ${n.pan[1] / n.zoom}px)`,
    transition: i.spring.enabled === !0 ? i.spring.transition : "none",
    // Firefox-specific optimizations https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/CSS
    willChange: "transform"
  };
  return /* @__PURE__ */ Rt("div", { className: V["viewer-viewport"], ref: r, children: [
    i.guides.enabled && /* @__PURE__ */ z("div", { className: V["viewer-viewport-center-guide"] }),
    /* @__PURE__ */ z("div", { className: V["viewer-viewport-content"], ref: t, style: s, children: e })
  ] });
});
Ue.displayName = "ViewportContent";
const Ge = Ht(({
  minimapContent: e,
  minimapRef: t,
  minimapVisible: r,
  minimapSize: n,
  viewportRef: i
}) => {
  const { crop: s, settings: o } = Ot(at), c = it(() => ({
    width: n.width,
    height: n.height,
    display: r && e ? "block" : "none",
    outline: o.minimap.outlineStyle
  }), [n.width, n.height, r, e, o.minimap.outlineStyle]), l = (() => {
    if (!i.current) return {};
    const u = n.scale;
    return {
      transform: `scale(${1 / Math.max(s.zoom, 1)}) translate(${-s.pan[0] * u}px, ${-s.pan[1] * u}px)`,
      width: `${i.current.offsetWidth * u}px`,
      height: `${i.current.offsetHeight * u}px`,
      outline: o.minimap.viewportAreaOutlineStyle,
      // Firefox-specific optimizations https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/CSS
      willChange: "transform, width, height"
    };
  })(), h = it(() => i.current ? {
    transformOrigin: "0% 0%",
    transform: `scale(${n.scale})`,
    width: `${i.current.offsetWidth}px`,
    height: `${i.current.offsetHeight}px`
  } : {}, [n.scale]);
  return /* @__PURE__ */ Rt("div", { className: V["viewer-minimap"], ref: t, style: c, children: [
    /* @__PURE__ */ z("div", { className: V["viewer-minimap-content"], style: h, children: e }),
    /* @__PURE__ */ z("div", { className: V["viewer-minimap-viewport-area"], style: l })
  ] });
});
Ge.displayName = "Minimap";
const On = () => {
  const { crop: e, setCrop: t } = Ot(at), r = L(e), n = L(null);
  e !== r.current && (r.current = e);
  const i = S((s, o = !1) => {
    r.current = s, o ? t(s) : (n.current && cancelAnimationFrame(n.current), n.current = requestAnimationFrame(() => {
      t(r.current);
    }));
  }, [t]);
  return {
    crop: r.current,
    setCrop: i,
    cropRef: r
  };
}, Tn = Ht(({
  className: e = "",
  viewportContent: t,
  minimapContent: r
}) => {
  const { setCrop: n, cropRef: i } = On(), {
    settings: s,
    setZoomIn: o,
    setZoomOut: c,
    setResetView: l,
    setCenterView: h,
    setToggleMinimap: u
  } = Ot(at), g = 0.75, d = 100, O = L(null), b = L(null), D = L(null), P = L(null), U = L(s.minimap.width), tt = L(160), [ut, Pt] = N(s.minimap.enabled), [et, M] = N({
    width: U.current,
    height: tt.current,
    scale: 1
  }), Mt = (a, f, p) => {
    const _ = (p.width - f.width) / 2, T = (p.height - f.height) / 2;
    return p.width < f.width ? a.pan[0] = 0 : p.left > f.left ? a.pan[0] = Math.min(a.pan[0], _) : p.right < f.right && (a.pan[0] = Math.max(a.pan[0], f.width - p.width + _)), p.height < f.height ? a.pan[1] = 0 : p.top > f.top ? a.pan[1] = Math.min(a.pan[1], T) : p.bottom < f.bottom && (a.pan[1] = Math.max(a.pan[1], f.height - p.height + T)), a;
  }, lr = S((a, f) => {
    const p = a.width * f.zoom, _ = a.height * f.zoom, T = a.left + a.width / 2, w = a.top + a.height / 2, dt = T * f.zoom - f.pan[0], mt = w * f.zoom - f.pan[1], kt = (a.width - p) / 2, K = (a.height - _) / 2, vt = dt - p / 2, gt = mt - _ / 2, $ = kt - vt, rt = K - gt;
    return {
      width: p,
      height: _,
      left: $,
      right: $ + p,
      top: rt,
      bottom: rt + _
    };
  }, []), I = S((a) => {
    if (b.current == null || O.current == null) return a;
    const f = Yt(b.current, O.current), p = {
      ...f,
      width: f.width,
      height: f.height,
      left: f.left,
      right: f.right,
      top: f.top,
      bottom: f.bottom
    }, _ = lr(p, a);
    return Mt(a, p, _);
  }, []), Yt = (a, f) => {
    const p = f.getBoundingClientRect(), _ = a.getBoundingClientRect();
    return {
      top: _.top - p.top,
      left: _.left - p.left,
      width: a.offsetWidth,
      height: a.offsetHeight,
      bottom: _.top - p.top + a.offsetHeight,
      right: _.left - p.left + a.offsetWidth
    };
  }, k = S(() => {
    if (D.current == null || b.current == null)
      return;
    const a = D.current.offsetWidth, f = b.current.offsetWidth / b.current.offsetHeight;
    tt.current = a / f;
    const p = a / b.current.offsetWidth;
    M((T) => ({
      ...T,
      width: U.current,
      height: tt.current,
      scale: p
    }));
    let _ = {
      ...i.current
    };
    _ = I(_), n(_, !0);
  }, [I, n]);
  W(() => {
    if (P.current) {
      const a = P.current.querySelector("img");
      a && (a.complete ? k() : a.onload = k);
      const f = P.current.querySelector("video");
      f && (f.readyState >= 4 ? k() : f.onloadeddata = k);
    }
    return () => {
    };
  }, [t, k]), W(() => {
    k();
  }, [ut, k]);
  const lt = S(() => {
    k();
  }, [k]);
  W(() => {
    window.addEventListener("resize", lt);
    let a = null;
    return O.current && (a = new ResizeObserver((f) => {
      for (const p of f)
        if (p.target === O.current) {
          lt();
          break;
        }
    }), a.observe(O.current)), () => {
      window.removeEventListener("resize", lt), a && a.disconnect();
    };
  }, [lt]);
  const Xt = S((a) => {
    const f = { pan: { ...a.pan }, zoom: a.zoom }, p = I({ pan: { ...a.pan }, zoom: a.zoom });
    return f.pan[0] = Math.max(f.pan[0], p.pan[0] - s.spring.rubberbandDistance), f.pan[0] = Math.min(f.pan[0], p.pan[0] + s.spring.rubberbandDistance), f.pan[1] = Math.max(f.pan[1], p.pan[1] - s.spring.rubberbandDistance), f.pan[1] = Math.min(f.pan[1], p.pan[1] + s.spring.rubberbandDistance), f;
  }, [s, I]), j = S((a, f, p) => {
    var vt, gt;
    if (!s.zoom.enabled || a.last || !b.current || !O.current) return p || i.current;
    p ?? (p = i.current);
    const _ = Yt(b.current, O.current);
    let T = 0;
    const w = [0, 0];
    if (a.type === "click")
      T = Number(a.zoomChange) * s.zoom.zoomButtonStep;
    else if (a.type === "pointermove" && a.pinching) {
      const $ = a;
      T = $.delta[0], w[0] = $.origin[0] - _.width / 2, w[1] = $.origin[1] - _.height / 2;
    } else if (a.type === "wheel") {
      const $ = a, rt = a;
      if ($.ctrlKey && $.pinching === !0) {
        rt.axis === "scale" ? T = rt.delta[0] : $.axis === "x" || $.axis;
        const x = (vt = b.current) == null ? void 0 : vt.getBoundingClientRect();
        x && (w[0] = $.event.clientX - (x.left + x.width / 2), w[1] = $.event.clientY - (x.top + x.height / 2));
      } else if ($.axis === "y" && (!("pinching" in $) || $.pinching === !1)) {
        T = -$.delta[1] / d * s.zoom.mouseWheelStep;
        const x = (gt = b.current) == null ? void 0 : gt.getBoundingClientRect();
        x && (w[0] = $.event.clientX - (x.left + x.width / 2), w[1] = $.event.clientY - (x.top + x.height / 2));
      }
    }
    f == A.Minimap && (w[0] = 0, w[1] = 0);
    const dt = Math.min(Math.max(p.zoom + T, s.zoom.min), s.zoom.max), mt = dt / i.current.zoom, kt = [
      w[0] + (i.current.pan[0] - w[0]) * mt,
      w[1] + (i.current.pan[1] - w[1]) * mt
    ];
    let K = {
      ...i.current,
      zoom: dt,
      pan: kt
    };
    return K = I(K), n(K, !1), K;
  }, [s, n, I]), qt = S((a, f, p) => {
    if (!s.pan.enabled || a.last) return p || i.current;
    p ?? (p = i.current);
    const _ = f == A.Viewport ? 1 : -i.current.zoom / et.scale, T = [
      p.pan[0] + a.delta[0] * _,
      p.pan[1] + a.delta[1] * _
    ];
    let w = {
      ...i.current,
      pan: T
    };
    return s.spring.rubberband ? w = Xt(w) : w = I(w), n(w, !1), w;
  }, [s, n, I, Xt, et.scale]), G = S(() => {
    let a = {
      ...i.current
    };
    a = I(a), n(a, !0);
  }, [n, I]), Zt = S(() => {
    j({
      type: "click",
      zoomChange: -1,
      delta: [0, 0],
      last: !1
    }, A.Minimap, i.current);
  }, [j]), Jt = S(() => {
    j({
      type: "click",
      zoomChange: 1,
      delta: [0, 0],
      last: !1
    }, A.Minimap, i.current);
  }, [j]), ht = S(() => {
    const a = {
      pan: [0, 0],
      zoom: s.zoom.default
    };
    n(a, !0);
  }, [s, n]), ft = S(() => {
    const a = {
      pan: [0, 0],
      zoom: i.current.zoom
    };
    n(a, !0);
  }, [n]), pt = S(() => {
    Pt((a) => !a);
  }, []);
  W(() => (c(() => Zt), o(() => Jt), l(() => ht), h(() => ft), u(() => pt), () => {
  }), [Zt, c, Jt, o, ht, l, ft, h, pt, u]), W(() => {
    const a = (f) => {
      const p = f.key.toLowerCase();
      s.resetView.enabled && p === s.resetView.keyboardShortcut && ht(), s.centerView.enabled && p === s.centerView.keyboardShortcut && ft(), s.minimap.enabled && p === s.minimap.keyboardShortcut && pt();
    };
    return window.addEventListener("keydown", a), () => {
      window.removeEventListener("keydown", a);
    };
  }, [s, ht, ft, pt]);
  const Qt = it(() => ({
    drag: {
      enabled: s.pan.enabled,
      from: () => i.current.pan,
      preventScroll: !1
      // Ignores vertical scrolling on touch devices
    },
    pinch: {
      enabled: s.zoom.enabled,
      preventDefault: !0,
      pinchOnWheel: !0,
      angleBounds: { min: 0, max: 0 },
      from: () => [i.current.zoom * g, 0]
    },
    wheel: {
      enabled: s.zoom.enabled,
      preventDefault: !0,
      from: () => [0, -i.current.zoom * d]
    },
    eventOptions: {
      passive: !1
    }
  }), [s.pan.enabled, s.zoom.enabled]);
  pe(
    {
      onDrag: (a) => qt(a, A.Viewport, a.memo),
      onDragEnd: G,
      onPinch: (a) => j(a, A.Viewport, a.memo),
      onPinchEnd: G,
      onWheel: (a) => j(a, A.Viewport, a.memo),
      onWheelEnd: G
    },
    {
      ...Qt,
      target: b
    }
  ), pe({
    onDrag: (a) => qt(a, A.Minimap, a.memo),
    onDragEnd: G,
    onPinch: (a) => j(a, A.Minimap, a.memo),
    onPinchEnd: G,
    onWheel: (a) => j(a, A.Minimap, a.memo),
    onWheelEnd: G
  }, {
    ...Qt,
    target: D
  });
  const hr = it(() => [
    e,
    V["viewer-main"],
    s.fillHeight && V["viewer-main-fill-height"]
  ].filter(Boolean).join(" "), [e, s.fillHeight]);
  return /* @__PURE__ */ Rt("div", { className: hr, ref: O, children: [
    /* @__PURE__ */ z(
      Ge,
      {
        minimapContent: r,
        minimapRef: D,
        minimapVisible: ut,
        minimapSize: et,
        viewportRef: b
      }
    ),
    /* @__PURE__ */ z(
      Ue,
      {
        viewportContent: t,
        viewportContentRef: P,
        viewportRef: b
      }
    )
  ] });
});
Tn.displayName = "Viewer";
var _t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Sn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Cn() {
  this.__data__ = [], this.size = 0;
}
var xn = Cn;
function An(e, t) {
  return e === t || e !== e && t !== t;
}
var St = An, In = St;
function Dn(e, t) {
  for (var r = e.length; r--; )
    if (In(e[r][0], t))
      return r;
  return -1;
}
var Ct = Dn, Pn = Ct, Mn = Array.prototype, kn = Mn.splice;
function jn(e) {
  var t = this.__data__, r = Pn(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : kn.call(t, r, 1), --this.size, !0;
}
var Ln = jn, Nn = Ct;
function Vn(e) {
  var t = this.__data__, r = Nn(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var zn = Vn, Rn = Ct;
function Hn(e) {
  return Rn(this.__data__, e) > -1;
}
var Un = Hn, Gn = Ct;
function Kn(e, t) {
  var r = this.__data__, n = Gn(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var Bn = Kn, Fn = xn, Wn = Ln, Yn = zn, Xn = Un, qn = Bn;
function X(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
X.prototype.clear = Fn;
X.prototype.delete = Wn;
X.prototype.get = Yn;
X.prototype.has = Xn;
X.prototype.set = qn;
var xt = X, Zn = xt;
function Jn() {
  this.__data__ = new Zn(), this.size = 0;
}
var Qn = Jn;
function ti(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var ei = ti;
function ri(e) {
  return this.__data__.get(e);
}
var ni = ri;
function ii(e) {
  return this.__data__.has(e);
}
var si = ii, oi = typeof _t == "object" && _t && _t.Object === Object && _t, Ke = oi, ai = Ke, ci = typeof self == "object" && self && self.Object === Object && self, ui = ai || ci || Function("return this")(), q = ui, li = q, hi = li.Symbol, Be = hi, de = Be, Fe = Object.prototype, fi = Fe.hasOwnProperty, pi = Fe.toString, nt = de ? de.toStringTag : void 0;
function di(e) {
  var t = fi.call(e, nt), r = e[nt];
  try {
    e[nt] = void 0;
    var n = !0;
  } catch {
  }
  var i = pi.call(e);
  return n && (t ? e[nt] = r : delete e[nt]), i;
}
var mi = di, vi = Object.prototype, gi = vi.toString;
function _i(e) {
  return gi.call(e);
}
var bi = _i, me = Be, yi = mi, wi = bi, $i = "[object Null]", Ei = "[object Undefined]", ve = me ? me.toStringTag : void 0;
function Oi(e) {
  return e == null ? e === void 0 ? Ei : $i : ve && ve in Object(e) ? yi(e) : wi(e);
}
var At = Oi;
function Ti(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var H = Ti, Si = At, Ci = H, xi = "[object AsyncFunction]", Ai = "[object Function]", Ii = "[object GeneratorFunction]", Di = "[object Proxy]";
function Pi(e) {
  if (!Ci(e))
    return !1;
  var t = Si(e);
  return t == Ai || t == Ii || t == xi || t == Di;
}
var Kt = Pi, Mi = q, ki = Mi["__core-js_shared__"], ji = ki, Nt = ji, ge = function() {
  var e = /[^.]+$/.exec(Nt && Nt.keys && Nt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Li(e) {
  return !!ge && ge in e;
}
var Ni = Li, Vi = Function.prototype, zi = Vi.toString;
function Ri(e) {
  if (e != null) {
    try {
      return zi.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Hi = Ri, Ui = Kt, Gi = Ni, Ki = H, Bi = Hi, Fi = /[\\^$.*+?()[\]{}|]/g, Wi = /^\[object .+?Constructor\]$/, Yi = Function.prototype, Xi = Object.prototype, qi = Yi.toString, Zi = Xi.hasOwnProperty, Ji = RegExp(
  "^" + qi.call(Zi).replace(Fi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Qi(e) {
  if (!Ki(e) || Gi(e))
    return !1;
  var t = Ui(e) ? Ji : Wi;
  return t.test(Bi(e));
}
var ts = Qi;
function es(e, t) {
  return e == null ? void 0 : e[t];
}
var rs = es, ns = ts, is = rs;
function ss(e, t) {
  var r = is(e, t);
  return ns(r) ? r : void 0;
}
var Bt = ss, os = Bt, as = q, cs = os(as, "Map"), We = cs, us = Bt, ls = us(Object, "create"), It = ls, _e = It;
function hs() {
  this.__data__ = _e ? _e(null) : {}, this.size = 0;
}
var fs = hs;
function ps(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ds = ps, ms = It, vs = "__lodash_hash_undefined__", gs = Object.prototype, _s = gs.hasOwnProperty;
function bs(e) {
  var t = this.__data__;
  if (ms) {
    var r = t[e];
    return r === vs ? void 0 : r;
  }
  return _s.call(t, e) ? t[e] : void 0;
}
var ys = bs, ws = It, $s = Object.prototype, Es = $s.hasOwnProperty;
function Os(e) {
  var t = this.__data__;
  return ws ? t[e] !== void 0 : Es.call(t, e);
}
var Ts = Os, Ss = It, Cs = "__lodash_hash_undefined__";
function xs(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Ss && t === void 0 ? Cs : t, this;
}
var As = xs, Is = fs, Ds = ds, Ps = ys, Ms = Ts, ks = As;
function Z(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Z.prototype.clear = Is;
Z.prototype.delete = Ds;
Z.prototype.get = Ps;
Z.prototype.has = Ms;
Z.prototype.set = ks;
var js = Z, be = js, Ls = xt, Ns = We;
function Vs() {
  this.size = 0, this.__data__ = {
    hash: new be(),
    map: new (Ns || Ls)(),
    string: new be()
  };
}
var zs = Vs;
function Rs(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Hs = Rs, Us = Hs;
function Gs(e, t) {
  var r = e.__data__;
  return Us(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Dt = Gs, Ks = Dt;
function Bs(e) {
  var t = Ks(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Fs = Bs, Ws = Dt;
function Ys(e) {
  return Ws(this, e).get(e);
}
var Xs = Ys, qs = Dt;
function Zs(e) {
  return qs(this, e).has(e);
}
var Js = Zs, Qs = Dt;
function to(e, t) {
  var r = Qs(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var eo = to, ro = zs, no = Fs, io = Xs, so = Js, oo = eo;
function J(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
J.prototype.clear = ro;
J.prototype.delete = no;
J.prototype.get = io;
J.prototype.has = so;
J.prototype.set = oo;
var ao = J, co = xt, uo = We, lo = ao, ho = 200;
function fo(e, t) {
  var r = this.__data__;
  if (r instanceof co) {
    var n = r.__data__;
    if (!uo || n.length < ho - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new lo(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var po = fo, mo = xt, vo = Qn, go = ei, _o = ni, bo = si, yo = po;
function Q(e) {
  var t = this.__data__ = new mo(e);
  this.size = t.size;
}
Q.prototype.clear = vo;
Q.prototype.delete = go;
Q.prototype.get = _o;
Q.prototype.has = bo;
Q.prototype.set = yo;
var wo = Q, $o = Bt, Eo = function() {
  try {
    var e = $o(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ye = Eo, ye = Ye;
function Oo(e, t, r) {
  t == "__proto__" && ye ? ye(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Ft = Oo, To = Ft, So = St;
function Co(e, t, r) {
  (r !== void 0 && !So(e[t], r) || r === void 0 && !(t in e)) && To(e, t, r);
}
var Xe = Co;
function xo(e) {
  return function(t, r, n) {
    for (var i = -1, s = Object(t), o = n(t), c = o.length; c--; ) {
      var l = o[e ? c : ++i];
      if (r(s[l], l, s) === !1)
        break;
    }
    return t;
  };
}
var Ao = xo, Io = Ao, Do = Io(), Po = Do, wt = { exports: {} };
wt.exports;
(function(e, t) {
  var r = q, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, s = i && i.exports === n, o = s ? r.Buffer : void 0, c = o ? o.allocUnsafe : void 0;
  function l(h, u) {
    if (u)
      return h.slice();
    var g = h.length, d = c ? c(g) : new h.constructor(g);
    return h.copy(d), d;
  }
  e.exports = l;
})(wt, wt.exports);
var Mo = wt.exports, ko = q, jo = ko.Uint8Array, Lo = jo, we = Lo;
function No(e) {
  var t = new e.constructor(e.byteLength);
  return new we(t).set(new we(e)), t;
}
var Vo = No, zo = Vo;
function Ro(e, t) {
  var r = t ? zo(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Ho = Ro;
function Uo(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Go = Uo, Ko = H, $e = Object.create, Bo = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Ko(t))
      return {};
    if ($e)
      return $e(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), Fo = Bo;
function Wo(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Yo = Wo, Xo = Yo, qo = Xo(Object.getPrototypeOf, Object), qe = qo, Zo = Object.prototype;
function Jo(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Zo;
  return e === r;
}
var Ze = Jo, Qo = Fo, ta = qe, ea = Ze;
function ra(e) {
  return typeof e.constructor == "function" && !ea(e) ? Qo(ta(e)) : {};
}
var na = ra;
function ia(e) {
  return e != null && typeof e == "object";
}
var ct = ia, sa = At, oa = ct, aa = "[object Arguments]";
function ca(e) {
  return oa(e) && sa(e) == aa;
}
var ua = ca, Ee = ua, la = ct, Je = Object.prototype, ha = Je.hasOwnProperty, fa = Je.propertyIsEnumerable, pa = Ee(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ee : function(e) {
  return la(e) && ha.call(e, "callee") && !fa.call(e, "callee");
}, Qe = pa, da = Array.isArray, tr = da, ma = 9007199254740991;
function va(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ma;
}
var er = va, ga = Kt, _a = er;
function ba(e) {
  return e != null && _a(e.length) && !ga(e);
}
var Wt = ba, ya = Wt, wa = ct;
function $a(e) {
  return wa(e) && ya(e);
}
var Ea = $a, $t = { exports: {} };
function Oa() {
  return !1;
}
var Ta = Oa;
$t.exports;
(function(e, t) {
  var r = q, n = Ta, i = t && !t.nodeType && t, s = i && !0 && e && !e.nodeType && e, o = s && s.exports === i, c = o ? r.Buffer : void 0, l = c ? c.isBuffer : void 0, h = l || n;
  e.exports = h;
})($t, $t.exports);
var rr = $t.exports, Sa = At, Ca = qe, xa = ct, Aa = "[object Object]", Ia = Function.prototype, Da = Object.prototype, nr = Ia.toString, Pa = Da.hasOwnProperty, Ma = nr.call(Object);
function ka(e) {
  if (!xa(e) || Sa(e) != Aa)
    return !1;
  var t = Ca(e);
  if (t === null)
    return !0;
  var r = Pa.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && nr.call(r) == Ma;
}
var ja = ka, La = At, Na = er, Va = ct, za = "[object Arguments]", Ra = "[object Array]", Ha = "[object Boolean]", Ua = "[object Date]", Ga = "[object Error]", Ka = "[object Function]", Ba = "[object Map]", Fa = "[object Number]", Wa = "[object Object]", Ya = "[object RegExp]", Xa = "[object Set]", qa = "[object String]", Za = "[object WeakMap]", Ja = "[object ArrayBuffer]", Qa = "[object DataView]", tc = "[object Float32Array]", ec = "[object Float64Array]", rc = "[object Int8Array]", nc = "[object Int16Array]", ic = "[object Int32Array]", sc = "[object Uint8Array]", oc = "[object Uint8ClampedArray]", ac = "[object Uint16Array]", cc = "[object Uint32Array]", m = {};
m[tc] = m[ec] = m[rc] = m[nc] = m[ic] = m[sc] = m[oc] = m[ac] = m[cc] = !0;
m[za] = m[Ra] = m[Ja] = m[Ha] = m[Qa] = m[Ua] = m[Ga] = m[Ka] = m[Ba] = m[Fa] = m[Wa] = m[Ya] = m[Xa] = m[qa] = m[Za] = !1;
function uc(e) {
  return Va(e) && Na(e.length) && !!m[La(e)];
}
var lc = uc;
function hc(e) {
  return function(t) {
    return e(t);
  };
}
var fc = hc, Et = { exports: {} };
Et.exports;
(function(e, t) {
  var r = Ke, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, s = i && i.exports === n, o = s && r.process, c = function() {
    try {
      var l = i && i.require && i.require("util").types;
      return l || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(Et, Et.exports);
var pc = Et.exports, dc = lc, mc = fc, Oe = pc, Te = Oe && Oe.isTypedArray, vc = Te ? mc(Te) : dc, ir = vc;
function gc(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var sr = gc, _c = Ft, bc = St, yc = Object.prototype, wc = yc.hasOwnProperty;
function $c(e, t, r) {
  var n = e[t];
  (!(wc.call(e, t) && bc(n, r)) || r === void 0 && !(t in e)) && _c(e, t, r);
}
var Ec = $c, Oc = Ec, Tc = Ft;
function Sc(e, t, r, n) {
  var i = !r;
  r || (r = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var c = t[s], l = n ? n(r[c], e[c], c, r, e) : void 0;
    l === void 0 && (l = e[c]), i ? Tc(r, c, l) : Oc(r, c, l);
  }
  return r;
}
var Cc = Sc;
function xc(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Ac = xc, Ic = 9007199254740991, Dc = /^(?:0|[1-9]\d*)$/;
function Pc(e, t) {
  var r = typeof e;
  return t = t ?? Ic, !!t && (r == "number" || r != "symbol" && Dc.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var or = Pc, Mc = Ac, kc = Qe, jc = tr, Lc = rr, Nc = or, Vc = ir, zc = Object.prototype, Rc = zc.hasOwnProperty;
function Hc(e, t) {
  var r = jc(e), n = !r && kc(e), i = !r && !n && Lc(e), s = !r && !n && !i && Vc(e), o = r || n || i || s, c = o ? Mc(e.length, String) : [], l = c.length;
  for (var h in e)
    (t || Rc.call(e, h)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    Nc(h, l))) && c.push(h);
  return c;
}
var Uc = Hc;
function Gc(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Kc = Gc, Bc = H, Fc = Ze, Wc = Kc, Yc = Object.prototype, Xc = Yc.hasOwnProperty;
function qc(e) {
  if (!Bc(e))
    return Wc(e);
  var t = Fc(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Xc.call(e, n)) || r.push(n);
  return r;
}
var Zc = qc, Jc = Uc, Qc = Zc, tu = Wt;
function eu(e) {
  return tu(e) ? Jc(e, !0) : Qc(e);
}
var ar = eu, ru = Cc, nu = ar;
function iu(e) {
  return ru(e, nu(e));
}
var su = iu, Se = Xe, ou = Mo, au = Ho, cu = Go, uu = na, Ce = Qe, xe = tr, lu = Ea, hu = rr, fu = Kt, pu = H, du = ja, mu = ir, Ae = sr, vu = su;
function gu(e, t, r, n, i, s, o) {
  var c = Ae(e, r), l = Ae(t, r), h = o.get(l);
  if (h) {
    Se(e, r, h);
    return;
  }
  var u = s ? s(c, l, r + "", e, t, o) : void 0, g = u === void 0;
  if (g) {
    var d = xe(l), O = !d && hu(l), b = !d && !O && mu(l);
    u = l, d || O || b ? xe(c) ? u = c : lu(c) ? u = cu(c) : O ? (g = !1, u = ou(l, !0)) : b ? (g = !1, u = au(l, !0)) : u = [] : du(l) || Ce(l) ? (u = c, Ce(c) ? u = vu(c) : (!pu(c) || fu(c)) && (u = uu(l))) : g = !1;
  }
  g && (o.set(l, u), i(u, l, n, s, o), o.delete(l)), Se(e, r, u);
}
var _u = gu, bu = wo, yu = Xe, wu = Po, $u = _u, Eu = H, Ou = ar, Tu = sr;
function cr(e, t, r, n, i) {
  e !== t && wu(t, function(s, o) {
    if (i || (i = new bu()), Eu(s))
      $u(e, t, o, r, cr, n, i);
    else {
      var c = n ? n(Tu(e, o), s, o + "", e, t, i) : void 0;
      c === void 0 && (c = s), yu(e, o, c);
    }
  }, Ou);
}
var Su = cr;
function Cu(e) {
  return e;
}
var ur = Cu;
function xu(e, t, r) {
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
var Au = xu, Iu = Au, Ie = Math.max;
function Du(e, t, r) {
  return t = Ie(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, s = Ie(n.length - t, 0), o = Array(s); ++i < s; )
      o[i] = n[t + i];
    i = -1;
    for (var c = Array(t + 1); ++i < t; )
      c[i] = n[i];
    return c[t] = r(o), Iu(e, this, c);
  };
}
var Pu = Du;
function Mu(e) {
  return function() {
    return e;
  };
}
var ku = Mu, ju = ku, De = Ye, Lu = ur, Nu = De ? function(e, t) {
  return De(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ju(t),
    writable: !0
  });
} : Lu, Vu = Nu, zu = 800, Ru = 16, Hu = Date.now;
function Uu(e) {
  var t = 0, r = 0;
  return function() {
    var n = Hu(), i = Ru - (n - r);
    if (r = n, i > 0) {
      if (++t >= zu)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var Gu = Uu, Ku = Vu, Bu = Gu, Fu = Bu(Ku), Wu = Fu, Yu = ur, Xu = Pu, qu = Wu;
function Zu(e, t) {
  return qu(Xu(e, t, Yu), e + "");
}
var Ju = Zu, Qu = St, tl = Wt, el = or, rl = H;
function nl(e, t, r) {
  if (!rl(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? tl(r) && el(t, r.length) : n == "string" && t in r) ? Qu(r[t], e) : !1;
}
var il = nl, sl = Ju, ol = il;
function al(e) {
  return sl(function(t, r) {
    var n = -1, i = r.length, s = i > 1 ? r[i - 1] : void 0, o = i > 2 ? r[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (i--, s) : void 0, o && ol(r[0], r[1], o) && (s = i < 3 ? void 0 : s, i = 1), t = Object(t); ++n < i; ) {
      var c = r[n];
      c && e(t, c, n, s);
    }
    return t;
  });
}
var cl = al, ul = Su, ll = cl, hl = ll(function(e, t, r) {
  ul(e, t, r);
}), fl = hl;
const pl = /* @__PURE__ */ Sn(fl), dl = {
  pan: { enabled: !0 },
  zoom: { enabled: !0, default: 1, min: 1, max: 4, mouseWheelStep: 0.5, zoomButtonStep: 0.5 },
  resetView: { enabled: !0, keyboardShortcut: "r" },
  centerView: { enabled: !1, keyboardShortcut: "c" },
  minimap: { enabled: !0, width: "160px", keyboardShortcut: "m", outlineStyle: "1px solid #ccc", viewportAreaOutlineStyle: "2px solid #333" },
  spring: { enabled: !0, rubberband: !0, rubberbandDistance: 100, transition: "transform 0.1s ease-out" },
  guides: { enabled: !1 },
  fillHeight: !0
}, Pe = {
  pan: [0, 0],
  zoom: 1
}, gl = ({
  children: e,
  settings: t = {}
}) => {
  const r = it(() => pl({ ...dl }, t), [t]), [n, i] = N(Pe), [s, o] = N(() => {
  }), [c, l] = N(() => {
  }), [h, u] = N(() => {
  }), [g, d] = N(() => {
  }), [O, b] = N(() => {
  });
  return W(() => {
    i({ pan: Pe.pan, zoom: r.zoom.default });
  }, [r.zoom.default]), /* @__PURE__ */ z(at.Provider, { value: {
    crop: n,
    setCrop: i,
    settings: r,
    zoomOut: s,
    setZoomOut: o,
    zoomIn: c,
    setZoomIn: l,
    resetView: h,
    setResetView: u,
    centerView: g,
    setCenterView: d,
    toggleMinimap: O,
    setToggleMinimap: b
  }, children: e });
};
export {
  Tn as Viewer,
  at as ViewerContext,
  gl as ViewerProvider
};
