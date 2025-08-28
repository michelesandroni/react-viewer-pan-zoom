import { jsxs as Nt, jsx as V } from "react/jsx-runtime";
import Pt, { createContext as hr, memo as Vt, useContext as wt, useMemo as rt, useRef as j, useCallback as S, useState as L, useEffect as F } from "react";
import './index.css';function fr(e, t, r) {
  return Math.max(t, Math.min(e, r));
}
const g = {
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
function Qt(e, t, r) {
  return t === 0 || Math.abs(t) === 1 / 0 ? Math.pow(e, r * 5) : e * t * r / (t + r * e);
}
function te(e, t, r, n = 0.15) {
  return n === 0 ? fr(e, t, r) : e < t ? -Qt(t - e, r - t, n) + t : e > r ? +Qt(e - r, r - t, n) + r : e;
}
function pr(e, [t, r], [n, i]) {
  const [[s, o], [c, l]] = e;
  return [te(t, s, o, n), te(r, c, l, i)];
}
function dr(e, t) {
  if (typeof e != "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mr(e) {
  var t = dr(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function $(e, t, r) {
  return t = mr(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function ee(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ee(Object(r), !0).forEach(function(n) {
      $(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ee(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Pe = {
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
function re(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : "";
}
const vr = ["enter", "leave"];
function gr(e = !1, t) {
  return e && !vr.includes(t);
}
function _r(e, t = "", r = !1) {
  const n = Pe[e], i = n && n[t] || t;
  return "on" + re(e) + re(i) + (gr(r, i) ? "Capture" : "");
}
const br = ["gotpointercapture", "lostpointercapture"];
function yr(e) {
  let t = e.substring(2).toLowerCase();
  const r = !!~t.indexOf("passive");
  r && (t = t.replace("passive", ""));
  const n = br.includes(t) ? "capturecapture" : "capture", i = !!~t.indexOf(n);
  return i && (t = t.replace("capture", "")), {
    device: t,
    capture: i,
    passive: r
  };
}
function wr(e, t = "") {
  const r = Pe[e], n = r && r[t] || t;
  return e + n;
}
function $t(e) {
  return "touches" in e;
}
function Me(e) {
  return $t(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse";
}
function $r(e) {
  return Array.from(e.touches).filter((t) => {
    var r, n;
    return t.target === e.currentTarget || ((r = e.currentTarget) === null || r === void 0 || (n = r.contains) === null || n === void 0 ? void 0 : n.call(r, t.target));
  });
}
function Er(e) {
  return e.type === "touchend" || e.type === "touchcancel" ? e.changedTouches : e.targetTouches;
}
function ke(e) {
  return $t(e) ? Er(e)[0] : e;
}
function jt(e, t) {
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
function Or(e) {
  return $r(e).map((t) => t.identifier);
}
function ne(e, t) {
  const [r, n] = Array.from(e.touches).filter((i) => t.includes(i.identifier));
  return jt(r, n);
}
function Mt(e) {
  const t = ke(e);
  return $t(e) ? t.identifier : t.pointerId;
}
function W(e) {
  const t = ke(e);
  return [t.clientX, t.clientY];
}
const ie = 40, se = 800;
function je(e) {
  let {
    deltaX: t,
    deltaY: r,
    deltaMode: n
  } = e;
  return n === 1 ? (t *= ie, r *= ie) : n === 2 && (t *= se, r *= se), [t, r];
}
function Tr(e) {
  var t, r;
  const {
    scrollX: n,
    scrollY: i,
    scrollLeft: s,
    scrollTop: o
  } = e.currentTarget;
  return [(t = n ?? s) !== null && t !== void 0 ? t : 0, (r = i ?? o) !== null && r !== void 0 ? r : 0];
}
function Sr(e) {
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
function gt(e, ...t) {
  return typeof e == "function" ? e(...t) : e;
}
function Cr() {
}
function xr(...e) {
  return e.length === 0 ? Cr : e.length === 1 ? e[0] : function() {
    let t;
    for (const r of e)
      t = r.apply(this, arguments) || t;
    return t;
  };
}
function oe(e, t) {
  return Object.assign({}, t, e || {});
}
const Ar = 32;
class Le {
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
    r._active || (this.reset(), this.computeInitial(), r._active = !0, r.target = t.target, r.currentTarget = t.currentTarget, r.lastOffset = n.from ? gt(n.from, r) : r.offset, r.offset = r.lastOffset, r.startTime = r.timeStamp = t.timeStamp);
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
    if (t && (r.event = t, n.preventDefault && t.cancelable && r.event.preventDefault(), r.type = t.type, i.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, i.locked = !!document.pointerLockElement, Object.assign(i, Sr(t)), i.down = i.pressed = i.buttons % 2 === 1 || i.touches > 0, s = t.timeStamp - r.timeStamp, r.timeStamp = t.timeStamp, r.elapsedTime = r.timeStamp - r.startTime), r._active) {
      const P = r._delta.map(Math.abs);
      g.addTo(r._distance, P);
    }
    this.axisIntent && this.axisIntent(t);
    const [o, c] = r._movement, [l, h] = n.threshold, {
      _step: u,
      values: _
    } = r;
    if (n.hasCustomTransform ? (u[0] === !1 && (u[0] = Math.abs(o) >= l && _[0]), u[1] === !1 && (u[1] = Math.abs(c) >= h && _[1])) : (u[0] === !1 && (u[0] = Math.abs(o) >= l && Math.sign(o) * l), u[1] === !1 && (u[1] = Math.abs(c) >= h && Math.sign(c) * h)), r.intentional = u[0] !== !1 || u[1] !== !1, !r.intentional) return;
    const m = [0, 0];
    if (n.hasCustomTransform) {
      const [P, It] = _;
      m[0] = u[0] !== !1 ? P - u[0] : 0, m[1] = u[1] !== !1 ? It - u[1] : 0;
    } else
      m[0] = u[0] !== !1 ? o - u[0] : 0, m[1] = u[1] !== !1 ? c - u[1] : 0;
    this.restrictToAxis && !r._blocked && this.restrictToAxis(m);
    const E = r.offset, y = r._active && !r._blocked || r.active;
    y && (r.first = r._active && !r.active, r.last = !r._active && r.active, r.active = i[this.ingKey] = r._active, t && (r.first && ("bounds" in n && (r._bounds = gt(n.bounds, r)), this.setup && this.setup()), r.movement = m, this.computeOffset()));
    const [I, D] = r.offset, [[H, Q], [at, At]] = r._bounds;
    r.overflow = [I < H ? -1 : I > Q ? 1 : 0, D < at ? -1 : D > At ? 1 : 0], r._movementBound[0] = r.overflow[0] ? r._movementBound[0] === !1 ? r._movement[0] : r._movementBound[0] : !1, r._movementBound[1] = r.overflow[1] ? r._movementBound[1] === !1 ? r._movement[1] : r._movementBound[1] : !1;
    const tt = r._active ? n.rubberband || [0, 0] : [0, 0];
    if (r.offset = pr(r._bounds, r.offset, tt), r.delta = g.sub(r.offset, E), this.computeMovement(), y && (!r.last || s > Ar)) {
      r.delta = g.sub(r.offset, E);
      const P = r.delta.map(Math.abs);
      g.addTo(r.distance, P), r.direction = r.delta.map(Math.sign), r._direction = r._delta.map(Math.sign), !r.first && s > 0 && (r.velocity = [P[0] / s, P[1] / s], r.timeDelta = s);
    }
  }
  emit() {
    const t = this.state, r = this.shared, n = this.config;
    if (t._active || this.clean(), (t._blocked || !t.intentional) && !t._force && !n.triggerAllEvents) return;
    const i = this.handler(b(b(b({}, r), t), {}, {
      [this.aliasKey]: t.values
    }));
    i !== void 0 && (t.memo = i);
  }
  clean() {
    this.eventStore.clean(), this.timeoutStore.clean();
  }
}
function Ir([e, t], r) {
  const n = Math.abs(e), i = Math.abs(t);
  if (n > i && n > r)
    return "x";
  if (i > n && i > r)
    return "y";
}
class nt extends Le {
  constructor(...t) {
    super(...t), $(this, "aliasKey", "xy");
  }
  reset() {
    super.reset(), this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0], this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = g.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = g.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(t) {
    const r = this.state, n = this.config;
    if (!r.axis && t) {
      const i = typeof n.axisThreshold == "object" ? n.axisThreshold[Me(t)] : n.axisThreshold;
      r.axis = Ir(r._movement, i);
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
const ae = (e) => e, ce = 0.15, zt = {
  enabled(e = !0) {
    return e;
  },
  eventOptions(e, t, r) {
    return b(b({}, r.shared.eventOptions), e);
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
        return [ce, ce];
      case !1:
        return [0, 0];
      default:
        return g.toVector(e);
    }
  },
  from(e) {
    if (typeof e == "function") return e;
    if (e != null) return g.toVector(e);
  },
  transform(e, t, r) {
    const n = e || r.shared.transform;
    if (this.hasCustomTransform = !!n, process.env.NODE_ENV === "development") {
      const i = n || ae;
      return (s) => {
        const o = i(s);
        return (!isFinite(o[0]) || !isFinite(o[1])) && console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${o[0]},${[1]}]`), o;
      };
    }
    return n || ae;
  },
  threshold(e) {
    return g.toVector(e, 0);
  }
};
process.env.NODE_ENV === "development" && Object.assign(zt, {
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
const Dr = 0, z = b(b({}, zt), {}, {
  axis(e, t, {
    axis: r
  }) {
    if (this.lockDirection = r === "lock", !this.lockDirection) return r;
  },
  axisThreshold(e = Dr) {
    return e;
  },
  bounds(e = {}) {
    if (typeof e == "function")
      return (s) => z.bounds(e(s));
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
}), ue = {
  ArrowRight: (e, t = 1) => [e * t, 0],
  ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
  ArrowUp: (e, t = 1) => [0, -1 * e * t],
  ArrowDown: (e, t = 1) => [0, e * t]
};
class Pr extends nt {
  constructor(...t) {
    super(...t), $(this, "ingKey", "dragging");
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
      t._bounds = z.bounds(i);
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
    r.pointerCapture && t.target.setPointerCapture(t.pointerId), !(i && i.size > 1 && n._pointerActive) && (this.start(t), this.setupPointer(t), n._pointerId = Mt(t), n._pointerActive = !0, this.computeValues(W(t)), this.computeInitial(), r.preventScrollAxis && Me(t) !== "mouse" ? (n._active = !1, this.setupScrollPrevention(t)) : r.delay > 0 ? (this.setupDelayTrigger(t), r.triggerAllEvents && (this.compute(t), this.emit())) : this.startPointerDrag(t));
  }
  startPointerDrag(t) {
    const r = this.state;
    r._active = !0, r._preventScroll = !0, r._delayed = !1, this.compute(t), this.emit();
  }
  pointerMove(t) {
    const r = this.state, n = this.config;
    if (!r._pointerActive) return;
    const i = Mt(t);
    if (r._pointerId !== void 0 && i !== r._pointerId) return;
    const s = W(t);
    if (document.pointerLockElement === t.target ? r._delta = [t.movementX, t.movementY] : (r._delta = g.sub(s, r._values), this.computeValues(s)), g.addTo(r._movement, r._delta), this.compute(t), r._delayed && r.intentional) {
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
    const i = Mt(t);
    if (r._pointerId !== void 0 && i !== r._pointerId) return;
    this.state._pointerActive = !1, this.setActive(), this.compute(t);
    const [s, o] = r._distance;
    if (r.tap = s <= n.tapsThreshold && o <= n.tapsThreshold, r.tap && n.filterTaps)
      r._force = !0;
    else {
      const [c, l] = r._delta, [h, u] = r._movement, [_, m] = n.swipe.velocity, [E, y] = n.swipe.distance, I = n.swipe.duration;
      if (r.elapsedTime < I) {
        const D = Math.abs(c / r.timeDelta), H = Math.abs(l / r.timeDelta);
        D > _ && Math.abs(h) > E && (r.swipe[0] = Math.sign(c)), H > m && Math.abs(u) > y && (r.swipe[1] = Math.sign(l));
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
    this.state._preventScroll = !1, Mr(t);
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
    const r = ue[t.key];
    if (r) {
      const n = this.state, i = t.shiftKey ? 10 : t.altKey ? 0.1 : 1;
      this.start(t), n._delta = r(this.config.keyboardDisplacement, i), n._keyboardActive = !0, g.addTo(n._movement, n._delta), this.compute(t), this.emit();
    }
  }
  keyUp(t) {
    t.key in ue && (this.state._keyboardActive = !1, this.setActive(), this.compute(t), this.emit());
  }
  bind(t) {
    const r = this.config.device;
    t(r, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (t(r, "change", this.pointerMove.bind(this)), t(r, "end", this.pointerUp.bind(this)), t(r, "cancel", this.pointerUp.bind(this)), t("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (t("key", "down", this.keyDown.bind(this)), t("key", "up", this.keyUp.bind(this))), this.config.filterTaps && t("click", "", this.pointerClick.bind(this), {
      capture: !0,
      passive: !1
    });
  }
}
function Mr(e) {
  "persist" in e && typeof e.persist == "function" && e.persist();
}
const it = typeof window < "u" && window.document && window.document.createElement;
function Ne() {
  return it && "ontouchstart" in window;
}
function kr() {
  return Ne() || it && window.navigator.maxTouchPoints > 1;
}
function jr() {
  return it && "onpointerdown" in window;
}
function Lr() {
  return it && "exitPointerLock" in window.document;
}
function Nr() {
  try {
    return "constructor" in GestureEvent;
  } catch {
    return !1;
  }
}
const C = {
  isBrowser: it,
  gesture: Nr(),
  touch: Ne(),
  touchscreen: kr(),
  pointer: jr(),
  pointerLock: Lr()
}, Vr = 250, zr = 180, Rr = 0.5, Hr = 50, Ur = 250, Gr = 10, le = {
  mouse: 0,
  touch: 0,
  pen: 8
}, Ve = b(b({}, z), {}, {
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
    if (this.preventScrollDelay = typeof r == "number" ? r : r || r === void 0 && e ? Vr : void 0, !(!C.touchscreen || r === !1))
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
    const s = g.toVector(e, r ? n : i ? 1 : 0);
    return this.filterTaps = r, this.tapsThreshold = n, s;
  },
  swipe({
    velocity: e = Rr,
    distance: t = Hr,
    duration: r = Ur
  } = {}) {
    return {
      velocity: this.transform(g.toVector(e)),
      distance: this.transform(g.toVector(t)),
      duration: r
    };
  },
  delay(e = 0) {
    switch (e) {
      case !0:
        return zr;
      case !1:
        return 0;
      default:
        return e;
    }
  },
  axisThreshold(e) {
    return e ? b(b({}, le), e) : le;
  },
  keyboardDisplacement(e = Gr) {
    return e;
  }
});
process.env.NODE_ENV === "development" && Object.assign(Ve, {
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
function ze(e) {
  const [t, r] = e.overflow, [n, i] = e._delta, [s, o] = e._direction;
  (t < 0 && n > 0 && s < 0 || t > 0 && n < 0 && s > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && i > 0 && o < 0 || r > 0 && i < 0 && o > 0) && (e._movement[1] = e._movementBound[1]);
}
const Kr = 30, Br = 100;
class Fr extends Le {
  constructor(...t) {
    super(...t), $(this, "ingKey", "pinching"), $(this, "aliasKey", "da");
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
    t === "wheel" ? this.state.offset = g.add(r, n) : this.state.offset = [(1 + r[0]) * n[0], r[1] + n[1]];
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
      const i = Math.abs(r) * Kr - Math.abs(n);
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
    const i = ne(t, r._touchIds);
    i && this.pinchStart(t, i);
  }
  pointerStart(t) {
    if (t.buttons != null && t.buttons % 2 !== 1) return;
    this.ctrl.setEventIds(t), t.target.setPointerCapture(t.pointerId);
    const r = this.state, n = r._pointerEvents, i = this.ctrl.pointerIds;
    if (r._active && Array.from(n.keys()).every((o) => i.has(o)) || (n.size < 2 && n.set(t.pointerId, t), r._pointerEvents.size < 2)) return;
    this.start(t);
    const s = jt(...Array.from(n.values()));
    s && this.pinchStart(t, s);
  }
  pinchStart(t, r) {
    const n = this.state;
    n.origin = r.origin, this.computeValues([r.distance, r.angle]), this.computeInitial(), this.compute(t), this.emit();
  }
  touchMove(t) {
    if (!this.state._active) return;
    const r = ne(t, this.state._touchIds);
    r && this.pinchMove(t, r);
  }
  pointerMove(t) {
    const r = this.state._pointerEvents;
    if (r.has(t.pointerId) && r.set(t.pointerId, t), !this.state._active) return;
    const n = jt(...Array.from(r.values()));
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
    r._movement = [t.scale - 1, t.rotation], r._delta = g.sub(r._movement, n), this.compute(t), this.emit();
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
    n._delta = [-je(t)[1] / Br * n.offset[0], 0], g.addTo(n._movement, n._delta), ze(n), this.state.origin = [t.clientX, t.clientY], this.compute(t), this.emit();
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
const Wr = b(b({}, zt), {}, {
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
      const c = oe(gt(r, o), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [c.min, c.max];
    }, s = (o) => {
      const c = oe(gt(n, o), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [c.min, c.max];
    };
    return typeof r != "function" && typeof n != "function" ? [i(), s()] : (o) => [i(o), s(o)];
  },
  threshold(e, t, r) {
    return this.lockDirection = r.axis === "lock", g.toVector(e, this.lockDirection ? [0.1, 3] : 0);
  },
  modifierKey(e) {
    return e === void 0 ? "ctrlKey" : e;
  },
  pinchOnWheel(e = !0) {
    return e;
  }
});
class Yr extends nt {
  constructor(...t) {
    super(...t), $(this, "ingKey", "moving");
  }
  move(t) {
    this.config.mouseOnly && t.pointerType !== "mouse" || (this.state._active ? this.moveChange(t) : this.moveStart(t), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)));
  }
  moveStart(t) {
    this.start(t), this.computeValues(W(t)), this.compute(t), this.computeInitial(), this.emit();
  }
  moveChange(t) {
    if (!this.state._active) return;
    const r = W(t), n = this.state;
    n._delta = g.sub(r, n._values), g.addTo(n._movement, n._delta), this.computeValues(r), this.compute(t), this.emit();
  }
  moveEnd(t) {
    this.state._active && (this.state._active = !1, this.compute(t), this.emit());
  }
  bind(t) {
    t("pointer", "change", this.move.bind(this)), t("pointer", "leave", this.moveEnd.bind(this));
  }
}
const Xr = b(b({}, z), {}, {
  mouseOnly: (e = !0) => e
});
class qr extends nt {
  constructor(...t) {
    super(...t), $(this, "ingKey", "scrolling");
  }
  scroll(t) {
    this.state._active || this.start(t), this.scrollChange(t), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
  }
  scrollChange(t) {
    t.cancelable && t.preventDefault();
    const r = this.state, n = Tr(t);
    r._delta = g.sub(n, r._values), g.addTo(r._movement, r._delta), this.computeValues(n), this.compute(t), this.emit();
  }
  scrollEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    t("scroll", "", this.scroll.bind(this));
  }
}
const Zr = z;
class Jr extends nt {
  constructor(...t) {
    super(...t), $(this, "ingKey", "wheeling");
  }
  wheel(t) {
    this.state._active || this.start(t), this.wheelChange(t), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
  }
  wheelChange(t) {
    const r = this.state;
    r._delta = je(t), g.addTo(r._movement, r._delta), ze(r), this.compute(t), this.emit();
  }
  wheelEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    t("wheel", "", this.wheel.bind(this));
  }
}
const Qr = z;
class tn extends nt {
  constructor(...t) {
    super(...t), $(this, "ingKey", "hovering");
  }
  enter(t) {
    this.config.mouseOnly && t.pointerType !== "mouse" || (this.start(t), this.computeValues(W(t)), this.compute(t), this.emit());
  }
  leave(t) {
    if (this.config.mouseOnly && t.pointerType !== "mouse") return;
    const r = this.state;
    if (!r._active) return;
    r._active = !1;
    const n = W(t);
    r._movement = r._delta = g.sub(n, r._values), this.computeValues(n), this.compute(t), r.delta = r.movement, this.emit();
  }
  bind(t) {
    t("pointer", "enter", this.enter.bind(this)), t("pointer", "leave", this.leave.bind(this));
  }
}
const en = b(b({}, z), {}, {
  mouseOnly: (e = !0) => e
}), Rt = /* @__PURE__ */ new Map(), Lt = /* @__PURE__ */ new Map();
function rn(e) {
  Rt.set(e.key, e.engine), Lt.set(e.key, e.resolver);
}
const nn = {
  key: "drag",
  engine: Pr,
  resolver: Ve
}, sn = {
  key: "hover",
  engine: tn,
  resolver: en
}, on = {
  key: "move",
  engine: Yr,
  resolver: Xr
}, an = {
  key: "pinch",
  engine: Fr,
  resolver: Wr
}, cn = {
  key: "scroll",
  engine: qr,
  resolver: Zr
}, un = {
  key: "wheel",
  engine: Jr,
  resolver: Qr
};
function ln(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, s;
  for (s = 0; s < n.length; s++)
    i = n[s], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function hn(e, t) {
  if (e == null) return {};
  var r = ln(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
const fn = {
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
}, pn = ["target", "eventOptions", "window", "enabled", "transform"];
function vt(e = {}, t) {
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
        r[n] = vt(e[n], i);
        break;
      case "boolean":
        i && (r[n] = e[n]);
        break;
    }
  return r;
}
function dn(e, t, r = {}) {
  const n = e, {
    target: i,
    eventOptions: s,
    window: o,
    enabled: c,
    transform: l
  } = n, h = hn(n, pn);
  if (r.shared = vt({
    target: i,
    eventOptions: s,
    window: o,
    enabled: c,
    transform: l
  }, fn), t) {
    const u = Lt.get(t);
    r[t] = vt(b({
      shared: r.shared
    }, h), u);
  } else
    for (const u in h) {
      const _ = Lt.get(u);
      if (_)
        r[u] = vt(b({
          shared: r.shared
        }, h[u]), _);
      else if (process.env.NODE_ENV === "development" && !["drag", "pinch", "scroll", "wheel", "move", "hover"].includes(u)) {
        if (u === "domTarget")
          throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
        console.warn(`[@use-gesture]: Unknown config key \`${u}\` was used. Please read the documentation for further information.`);
      }
    }
  return r;
}
class Re {
  constructor(t, r) {
    $(this, "_listeners", /* @__PURE__ */ new Set()), this._ctrl = t, this._gestureKey = r;
  }
  add(t, r, n, i, s) {
    const o = this._listeners, c = wr(r, n), l = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}, h = b(b({}, l), s);
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
class mn {
  constructor() {
    $(this, "_timeouts", /* @__PURE__ */ new Map());
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
class vn {
  constructor(t) {
    $(this, "gestures", /* @__PURE__ */ new Set()), $(this, "_targetEventStore", new Re(this)), $(this, "gestureEventStores", {}), $(this, "gestureTimeoutStores", {}), $(this, "handlers", {}), $(this, "config", {}), $(this, "pointerIds", /* @__PURE__ */ new Set()), $(this, "touchIds", /* @__PURE__ */ new Set()), $(this, "state", {
      shared: {
        shiftKey: !1,
        metaKey: !1,
        ctrlKey: !1,
        altKey: !1
      }
    }), gn(this, t);
  }
  setEventIds(t) {
    if ($t(t))
      return this.touchIds = new Set(Or(t)), this.touchIds;
    if ("pointerId" in t)
      return t.type === "pointerup" || t.type === "pointercancel" ? this.pointerIds.delete(t.pointerId) : t.type === "pointerdown" && this.pointerIds.add(t.pointerId), this.pointerIds;
  }
  applyHandlers(t, r) {
    this.handlers = t, this.nativeHandlers = r;
  }
  applyConfig(t, r) {
    this.config = dn(t, r, this.config);
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
          const c = this.config[o], l = he(n, c.eventOptions, !!i);
          if (c.enabled) {
            const h = Rt.get(o);
            new h(this, t, o).bind(l);
          }
        }
        const s = he(n, r.eventOptions, !!i);
        for (const o in this.nativeHandlers)
          s(o, "", (c) => this.nativeHandlers[o](b(b({}, this.state.shared), {}, {
            event: c,
            args: t
          })), void 0, !0);
      }
      for (const s in n)
        n[s] = xr(...n[s]);
      if (!i) return n;
      for (const s in n) {
        const {
          device: o,
          capture: c,
          passive: l
        } = yr(s);
        this._targetEventStore.add(i, o, "", n[s], {
          capture: c,
          passive: l
        });
      }
    }
  }
}
function K(e, t) {
  e.gestures.add(t), e.gestureEventStores[t] = new Re(e, t), e.gestureTimeoutStores[t] = new mn();
}
function gn(e, t) {
  t.drag && K(e, "drag"), t.wheel && K(e, "wheel"), t.scroll && K(e, "scroll"), t.move && K(e, "move"), t.pinch && K(e, "pinch"), t.hover && K(e, "hover");
}
const he = (e, t, r) => (n, i, s, o = {}, c = !1) => {
  var l, h;
  const u = (l = o.capture) !== null && l !== void 0 ? l : t.capture, _ = (h = o.passive) !== null && h !== void 0 ? h : t.passive;
  let m = c ? n : _r(n, i, u);
  r && _ && (m += "Passive"), e[m] = e[m] || [], e[m].push(s);
}, _n = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function bn(e) {
  const t = {}, r = {}, n = /* @__PURE__ */ new Set();
  for (let i in e)
    _n.test(i) ? (n.add(RegExp.lastMatch), r[i] = e[i]) : t[i] = e[i];
  return [r, t, n];
}
function B(e, t, r, n, i, s) {
  if (!e.has(r)) return;
  if (!Rt.has(n)) {
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
function yn(e, t) {
  const [r, n, i] = bn(e), s = {};
  return B(i, r, "onDrag", "drag", s, t), B(i, r, "onWheel", "wheel", s, t), B(i, r, "onScroll", "scroll", s, t), B(i, r, "onPinch", "pinch", s, t), B(i, r, "onMove", "move", s, t), B(i, r, "onHover", "hover", s, t), {
    handlers: s,
    config: t,
    nativeHandlers: n
  };
}
function wn(e, t = {}, r, n) {
  const i = Pt.useMemo(() => new vn(e), []);
  if (i.applyHandlers(e, n), i.applyConfig(t, r), Pt.useEffect(i.effect.bind(i)), Pt.useEffect(() => i.clean.bind(i), []), t.target === void 0)
    return i.bind.bind(i);
}
function $n(e) {
  return e.forEach(rn), function(r, n) {
    const {
      handlers: i,
      nativeHandlers: s,
      config: o
    } = yn(r, n || {});
    return wn(i, o, void 0, s);
  };
}
function fe(e, t) {
  return $n([nn, an, cn, un, on, sn])(e, t || {});
}
var x = /* @__PURE__ */ ((e) => (e.Minimap = "minimap", e.Viewport = "viewport", e))(x || {});
const st = hr({}), N = {
  "viewer-main": "_viewer-main_1mddk_1",
  "viewer-main-fill-height": "_viewer-main-fill-height_1mddk_10",
  "viewer-viewport": "_viewer-viewport_1mddk_14",
  "viewer-minimap-content": "_viewer-minimap-content_1mddk_19",
  "viewer-viewport-content": "_viewer-viewport-content_1mddk_20",
  "viewer-minimap": "_viewer-minimap_1mddk_19",
  "viewer-minimap-viewport-area": "_viewer-minimap-viewport-area_1mddk_38",
  "viewer-viewport-center-guide": "_viewer-viewport-center-guide_1mddk_59"
}, He = Vt(({ viewportContent: e, viewportContentRef: t, viewportRef: r }) => {
  const { crop: n, settings: i } = wt(st), s = {
    transform: `scale(${n.zoom}) translate(${n.pan[0] / n.zoom}px, ${n.pan[1] / n.zoom}px)`,
    transition: i.spring.enabled === !0 ? i.spring.transition : "none",
    // Firefox-specific optimizations https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/CSS
    willChange: "transform"
  };
  return /* @__PURE__ */ Nt("div", { className: N["viewer-viewport"], ref: r, children: [
    i.guides.enabled && /* @__PURE__ */ V("div", { className: N["viewer-viewport-center-guide"] }),
    /* @__PURE__ */ V("div", { className: N["viewer-viewport-content"], ref: t, style: s, children: e })
  ] });
});
He.displayName = "ViewportContent";
const Ue = Vt(({
  minimapContent: e,
  minimapRef: t,
  minimapVisible: r,
  minimapSize: n,
  viewportRef: i
}) => {
  const { crop: s, settings: o } = wt(st), c = rt(() => ({
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
  })(), h = rt(() => i.current ? {
    transformOrigin: "0% 0%",
    transform: `scale(${n.scale})`,
    width: `${i.current.offsetWidth}px`,
    height: `${i.current.offsetHeight}px`
  } : {}, [n.scale]);
  return /* @__PURE__ */ Nt("div", { className: N["viewer-minimap"], ref: t, style: c, children: [
    /* @__PURE__ */ V("div", { className: N["viewer-minimap-content"], style: h, children: e }),
    /* @__PURE__ */ V("div", { className: N["viewer-minimap-viewport-area"], style: l })
  ] });
});
Ue.displayName = "Minimap";
const En = () => {
  const { crop: e, setCrop: t } = wt(st), r = j(e), n = j(null);
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
}, On = Vt(({
  className: e = "",
  viewportContent: t,
  minimapContent: r
}) => {
  const { setCrop: n, cropRef: i } = En(), {
    settings: s,
    setZoomIn: o,
    setZoomOut: c,
    setResetView: l,
    setCenterView: h,
    setToggleMinimap: u
  } = wt(st), _ = 0.75, m = 100, E = j(null), y = j(null), I = j(null), D = j(null), H = j(s.minimap.width), Q = j(160), [at, At] = L(s.minimap.enabled), [tt, P] = L({
    width: H.current,
    height: Q.current,
    scale: 1
  }), It = (a, f, p) => {
    const d = (p.width - f.width) / 2, T = (p.height - f.height) / 2;
    return p.width < f.width ? a.pan[0] = 0 : p.left > f.left ? a.pan[0] = Math.min(a.pan[0], d) : p.right < f.right && (a.pan[0] = Math.max(a.pan[0], f.width - p.width + d)), p.height < f.height ? a.pan[1] = 0 : p.top > f.top ? a.pan[1] = Math.min(a.pan[1], T) : p.bottom < f.bottom && (a.pan[1] = Math.max(a.pan[1], f.height - p.height + T)), a;
  }, ur = S((a, f) => {
    const p = a.width * f.zoom, d = a.height * f.zoom, T = a.left + a.width / 2, w = a.top + a.height / 2, ft = T * f.zoom - f.pan[0], pt = w * f.zoom - f.pan[1], Dt = (a.width - p) / 2, G = (a.height - d) / 2, O = ft - p / 2, dt = pt - d / 2, Zt = Dt - O, Jt = G - dt;
    return {
      width: p,
      height: d,
      left: Zt,
      right: Zt + p,
      top: Jt,
      bottom: Jt + d
    };
  }, []), A = S((a) => {
    if (y.current == null || E.current == null) return a;
    const f = Bt(y.current, E.current), p = {
      ...f,
      width: f.width,
      height: f.height,
      left: f.left,
      right: f.right,
      top: f.top,
      bottom: f.bottom
    }, d = ur(p, a);
    return It(a, p, d);
  }, []), Bt = (a, f) => {
    const p = f.getBoundingClientRect(), d = a.getBoundingClientRect();
    return {
      top: d.top - p.top,
      left: d.left - p.left,
      width: a.offsetWidth,
      height: a.offsetHeight,
      bottom: d.top - p.top + a.offsetHeight,
      right: d.left - p.left + a.offsetWidth
    };
  }, M = S(() => {
    if (I.current == null || y.current == null)
      return;
    const a = I.current.offsetWidth, f = y.current.offsetWidth / y.current.offsetHeight;
    Q.current = a / f;
    const p = a / y.current.offsetWidth;
    P((T) => ({
      ...T,
      width: H.current,
      height: Q.current,
      scale: p
    }));
    let d = {
      ...i.current
    };
    d = A(d), n(d, !0);
  }, [A, n]);
  F(() => {
    if (D.current) {
      const a = D.current.querySelector("img");
      a && (a.complete ? M() : a.onload = M);
      const f = D.current.querySelector("video");
      f && (f.readyState >= 4 ? M() : f.onloadeddata = M);
    }
    return () => {
    };
  }, [t, M]), F(() => {
    M();
  }, [at, M]);
  const ct = S(() => {
    M();
  }, [M]);
  F(() => {
    window.addEventListener("resize", ct);
    let a = null;
    return E.current && (a = new ResizeObserver((f) => {
      for (const p of f)
        if (p.target === E.current) {
          ct();
          break;
        }
    }), a.observe(E.current)), () => {
      window.removeEventListener("resize", ct), a && a.disconnect();
    };
  }, [ct]);
  const Ft = S((a) => {
    const f = { pan: { ...a.pan }, zoom: a.zoom }, p = A({ pan: { ...a.pan }, zoom: a.zoom });
    return f.pan[0] = Math.max(f.pan[0], p.pan[0] - s.spring.rubberbandDistance), f.pan[0] = Math.min(f.pan[0], p.pan[0] + s.spring.rubberbandDistance), f.pan[1] = Math.max(f.pan[1], p.pan[1] - s.spring.rubberbandDistance), f.pan[1] = Math.min(f.pan[1], p.pan[1] + s.spring.rubberbandDistance), f;
  }, [s, A]), k = S((a, f, p) => {
    if (!s.zoom.enabled || a.last || !y.current || !E.current) return p || i.current;
    p ?? (p = i.current);
    const d = Bt(y.current, E.current);
    let T = 0;
    const w = [0, 0];
    if (a.type === "click")
      T = Number(a.zoomChange) * s.zoom.zoomButtonStep;
    else if (a.type === "pointermove" && a.pinching) {
      const O = a;
      T = O.delta[0], w[0] = O.origin[0] - d.width / 2, w[1] = O.origin[1] - d.height / 2;
    } else if (a.type === "wheel") {
      const O = a, dt = a;
      O.ctrlKey && O.pinching === !0 ? (dt.axis === "scale" ? T = dt.delta[0] : O.axis === "x" || O.axis, w[0] = O.event.clientX - d.width / 2, w[1] = O.event.clientY - d.height / 2) : O.axis === "y" && (!("pinching" in O) || O.pinching === !1) && (T = -O.delta[1] / m * s.zoom.mouseWheelStep, w[0] = O.event.clientX - d.width / 2, w[1] = O.event.clientY - d.height / 2);
    }
    f == x.Minimap && (w[0] = 0, w[1] = 0);
    const ft = Math.min(Math.max(p.zoom + T, s.zoom.min), s.zoom.max), pt = ft / i.current.zoom, Dt = [
      w[0] + (i.current.pan[0] - w[0]) * pt,
      w[1] + (i.current.pan[1] - w[1]) * pt
    ];
    let G = {
      ...i.current,
      zoom: ft,
      pan: Dt
    };
    return G = A(G), n(G, !1), G;
  }, [s, n, A]), Wt = S((a, f, p) => {
    if (!s.pan.enabled || a.last) return p || i.current;
    p ?? (p = i.current);
    const d = f == x.Viewport ? 1 : -i.current.zoom / tt.scale, T = [
      p.pan[0] + a.delta[0] * d,
      p.pan[1] + a.delta[1] * d
    ];
    let w = {
      ...i.current,
      pan: T
    };
    return s.spring.rubberband ? w = Ft(w) : w = A(w), n(w, !1), w;
  }, [s, n, A, Ft, tt.scale]), U = S(() => {
    let a = {
      ...i.current
    };
    a = A(a), n(a, !0);
  }, [n, A]), Yt = S(() => {
    k({
      type: "click",
      zoomChange: -1,
      delta: [0, 0],
      last: !1
    }, x.Minimap, i.current);
  }, [k]), Xt = S(() => {
    k({
      type: "click",
      zoomChange: 1,
      delta: [0, 0],
      last: !1
    }, x.Minimap, i.current);
  }, [k]), ut = S(() => {
    const a = {
      pan: [0, 0],
      zoom: s.zoom.default
    };
    n(a, !0);
  }, [s, n]), lt = S(() => {
    const a = {
      pan: [0, 0],
      zoom: i.current.zoom
    };
    n(a, !0);
  }, [n]), ht = S(() => {
    At((a) => !a);
  }, []);
  F(() => (c(() => Yt), o(() => Xt), l(() => ut), h(() => lt), u(() => ht), () => {
  }), [Yt, c, Xt, o, ut, l, lt, h, ht, u]), F(() => {
    const a = (f) => {
      const p = f.key.toLowerCase();
      s.resetView.enabled && p === s.resetView.keyboardShortcut && ut(), s.centerView.enabled && p === s.centerView.keyboardShortcut && lt(), s.minimap.enabled && p === s.minimap.keyboardShortcut && ht();
    };
    return window.addEventListener("keydown", a), () => {
      window.removeEventListener("keydown", a);
    };
  }, [s, ut, lt, ht]);
  const qt = rt(() => ({
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
      from: () => [i.current.zoom * _, 0]
    },
    wheel: {
      enabled: s.zoom.enabled,
      preventDefault: !0,
      from: () => [0, -i.current.zoom * m]
    },
    eventOptions: {
      passive: !1
    }
  }), [s.pan.enabled, s.zoom.enabled]);
  fe(
    {
      onDrag: (a) => Wt(a, x.Viewport, a.memo),
      onDragEnd: U,
      onPinch: (a) => k(a, x.Viewport, a.memo),
      onPinchEnd: U,
      onWheel: (a) => k(a, x.Viewport, a.memo),
      onWheelEnd: U
    },
    {
      ...qt,
      target: y
    }
  ), fe({
    onDrag: (a) => Wt(a, x.Minimap, a.memo),
    onDragEnd: U,
    onPinch: (a) => k(a, x.Minimap, a.memo),
    onPinchEnd: U,
    onWheel: (a) => k(a, x.Minimap, a.memo),
    onWheelEnd: U
  }, {
    ...qt,
    target: I
  });
  const lr = rt(() => [
    e,
    N["viewer-main"],
    s.fillHeight && N["viewer-main-fill-height"]
  ].filter(Boolean).join(" "), [e, s.fillHeight]);
  return /* @__PURE__ */ Nt("div", { className: lr, ref: E, children: [
    /* @__PURE__ */ V(
      Ue,
      {
        minimapContent: r,
        minimapRef: I,
        minimapVisible: at,
        minimapSize: tt,
        viewportRef: y
      }
    ),
    /* @__PURE__ */ V(
      He,
      {
        viewportContent: t,
        viewportContentRef: D,
        viewportRef: y
      }
    )
  ] });
});
On.displayName = "Viewer";
var mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Tn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Sn() {
  this.__data__ = [], this.size = 0;
}
var Cn = Sn;
function xn(e, t) {
  return e === t || e !== e && t !== t;
}
var Et = xn, An = Et;
function In(e, t) {
  for (var r = e.length; r--; )
    if (An(e[r][0], t))
      return r;
  return -1;
}
var Ot = In, Dn = Ot, Pn = Array.prototype, Mn = Pn.splice;
function kn(e) {
  var t = this.__data__, r = Dn(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Mn.call(t, r, 1), --this.size, !0;
}
var jn = kn, Ln = Ot;
function Nn(e) {
  var t = this.__data__, r = Ln(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Vn = Nn, zn = Ot;
function Rn(e) {
  return zn(this.__data__, e) > -1;
}
var Hn = Rn, Un = Ot;
function Gn(e, t) {
  var r = this.__data__, n = Un(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var Kn = Gn, Bn = Cn, Fn = jn, Wn = Vn, Yn = Hn, Xn = Kn;
function Y(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Y.prototype.clear = Bn;
Y.prototype.delete = Fn;
Y.prototype.get = Wn;
Y.prototype.has = Yn;
Y.prototype.set = Xn;
var Tt = Y, qn = Tt;
function Zn() {
  this.__data__ = new qn(), this.size = 0;
}
var Jn = Zn;
function Qn(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var ti = Qn;
function ei(e) {
  return this.__data__.get(e);
}
var ri = ei;
function ni(e) {
  return this.__data__.has(e);
}
var ii = ni, si = typeof mt == "object" && mt && mt.Object === Object && mt, Ge = si, oi = Ge, ai = typeof self == "object" && self && self.Object === Object && self, ci = oi || ai || Function("return this")(), X = ci, ui = X, li = ui.Symbol, Ke = li, pe = Ke, Be = Object.prototype, hi = Be.hasOwnProperty, fi = Be.toString, et = pe ? pe.toStringTag : void 0;
function pi(e) {
  var t = hi.call(e, et), r = e[et];
  try {
    e[et] = void 0;
    var n = !0;
  } catch {
  }
  var i = fi.call(e);
  return n && (t ? e[et] = r : delete e[et]), i;
}
var di = pi, mi = Object.prototype, vi = mi.toString;
function gi(e) {
  return vi.call(e);
}
var _i = gi, de = Ke, bi = di, yi = _i, wi = "[object Null]", $i = "[object Undefined]", me = de ? de.toStringTag : void 0;
function Ei(e) {
  return e == null ? e === void 0 ? $i : wi : me && me in Object(e) ? bi(e) : yi(e);
}
var St = Ei;
function Oi(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var R = Oi, Ti = St, Si = R, Ci = "[object AsyncFunction]", xi = "[object Function]", Ai = "[object GeneratorFunction]", Ii = "[object Proxy]";
function Di(e) {
  if (!Si(e))
    return !1;
  var t = Ti(e);
  return t == xi || t == Ai || t == Ci || t == Ii;
}
var Ht = Di, Pi = X, Mi = Pi["__core-js_shared__"], ki = Mi, kt = ki, ve = function() {
  var e = /[^.]+$/.exec(kt && kt.keys && kt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ji(e) {
  return !!ve && ve in e;
}
var Li = ji, Ni = Function.prototype, Vi = Ni.toString;
function zi(e) {
  if (e != null) {
    try {
      return Vi.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ri = zi, Hi = Ht, Ui = Li, Gi = R, Ki = Ri, Bi = /[\\^$.*+?()[\]{}|]/g, Fi = /^\[object .+?Constructor\]$/, Wi = Function.prototype, Yi = Object.prototype, Xi = Wi.toString, qi = Yi.hasOwnProperty, Zi = RegExp(
  "^" + Xi.call(qi).replace(Bi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ji(e) {
  if (!Gi(e) || Ui(e))
    return !1;
  var t = Hi(e) ? Zi : Fi;
  return t.test(Ki(e));
}
var Qi = Ji;
function ts(e, t) {
  return e == null ? void 0 : e[t];
}
var es = ts, rs = Qi, ns = es;
function is(e, t) {
  var r = ns(e, t);
  return rs(r) ? r : void 0;
}
var Ut = is, ss = Ut, os = X, as = ss(os, "Map"), Fe = as, cs = Ut, us = cs(Object, "create"), Ct = us, ge = Ct;
function ls() {
  this.__data__ = ge ? ge(null) : {}, this.size = 0;
}
var hs = ls;
function fs(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ps = fs, ds = Ct, ms = "__lodash_hash_undefined__", vs = Object.prototype, gs = vs.hasOwnProperty;
function _s(e) {
  var t = this.__data__;
  if (ds) {
    var r = t[e];
    return r === ms ? void 0 : r;
  }
  return gs.call(t, e) ? t[e] : void 0;
}
var bs = _s, ys = Ct, ws = Object.prototype, $s = ws.hasOwnProperty;
function Es(e) {
  var t = this.__data__;
  return ys ? t[e] !== void 0 : $s.call(t, e);
}
var Os = Es, Ts = Ct, Ss = "__lodash_hash_undefined__";
function Cs(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Ts && t === void 0 ? Ss : t, this;
}
var xs = Cs, As = hs, Is = ps, Ds = bs, Ps = Os, Ms = xs;
function q(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
q.prototype.clear = As;
q.prototype.delete = Is;
q.prototype.get = Ds;
q.prototype.has = Ps;
q.prototype.set = Ms;
var ks = q, _e = ks, js = Tt, Ls = Fe;
function Ns() {
  this.size = 0, this.__data__ = {
    hash: new _e(),
    map: new (Ls || js)(),
    string: new _e()
  };
}
var Vs = Ns;
function zs(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Rs = zs, Hs = Rs;
function Us(e, t) {
  var r = e.__data__;
  return Hs(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var xt = Us, Gs = xt;
function Ks(e) {
  var t = Gs(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Bs = Ks, Fs = xt;
function Ws(e) {
  return Fs(this, e).get(e);
}
var Ys = Ws, Xs = xt;
function qs(e) {
  return Xs(this, e).has(e);
}
var Zs = qs, Js = xt;
function Qs(e, t) {
  var r = Js(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var to = Qs, eo = Vs, ro = Bs, no = Ys, io = Zs, so = to;
function Z(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Z.prototype.clear = eo;
Z.prototype.delete = ro;
Z.prototype.get = no;
Z.prototype.has = io;
Z.prototype.set = so;
var oo = Z, ao = Tt, co = Fe, uo = oo, lo = 200;
function ho(e, t) {
  var r = this.__data__;
  if (r instanceof ao) {
    var n = r.__data__;
    if (!co || n.length < lo - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new uo(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var fo = ho, po = Tt, mo = Jn, vo = ti, go = ri, _o = ii, bo = fo;
function J(e) {
  var t = this.__data__ = new po(e);
  this.size = t.size;
}
J.prototype.clear = mo;
J.prototype.delete = vo;
J.prototype.get = go;
J.prototype.has = _o;
J.prototype.set = bo;
var yo = J, wo = Ut, $o = function() {
  try {
    var e = wo(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), We = $o, be = We;
function Eo(e, t, r) {
  t == "__proto__" && be ? be(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Gt = Eo, Oo = Gt, To = Et;
function So(e, t, r) {
  (r !== void 0 && !To(e[t], r) || r === void 0 && !(t in e)) && Oo(e, t, r);
}
var Ye = So;
function Co(e) {
  return function(t, r, n) {
    for (var i = -1, s = Object(t), o = n(t), c = o.length; c--; ) {
      var l = o[e ? c : ++i];
      if (r(s[l], l, s) === !1)
        break;
    }
    return t;
  };
}
var xo = Co, Ao = xo, Io = Ao(), Do = Io, _t = { exports: {} };
_t.exports;
(function(e, t) {
  var r = X, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, s = i && i.exports === n, o = s ? r.Buffer : void 0, c = o ? o.allocUnsafe : void 0;
  function l(h, u) {
    if (u)
      return h.slice();
    var _ = h.length, m = c ? c(_) : new h.constructor(_);
    return h.copy(m), m;
  }
  e.exports = l;
})(_t, _t.exports);
var Po = _t.exports, Mo = X, ko = Mo.Uint8Array, jo = ko, ye = jo;
function Lo(e) {
  var t = new e.constructor(e.byteLength);
  return new ye(t).set(new ye(e)), t;
}
var No = Lo, Vo = No;
function zo(e, t) {
  var r = t ? Vo(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Ro = zo;
function Ho(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Uo = Ho, Go = R, we = Object.create, Ko = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Go(t))
      return {};
    if (we)
      return we(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), Bo = Ko;
function Fo(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Wo = Fo, Yo = Wo, Xo = Yo(Object.getPrototypeOf, Object), Xe = Xo, qo = Object.prototype;
function Zo(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || qo;
  return e === r;
}
var qe = Zo, Jo = Bo, Qo = Xe, ta = qe;
function ea(e) {
  return typeof e.constructor == "function" && !ta(e) ? Jo(Qo(e)) : {};
}
var ra = ea;
function na(e) {
  return e != null && typeof e == "object";
}
var ot = na, ia = St, sa = ot, oa = "[object Arguments]";
function aa(e) {
  return sa(e) && ia(e) == oa;
}
var ca = aa, $e = ca, ua = ot, Ze = Object.prototype, la = Ze.hasOwnProperty, ha = Ze.propertyIsEnumerable, fa = $e(/* @__PURE__ */ function() {
  return arguments;
}()) ? $e : function(e) {
  return ua(e) && la.call(e, "callee") && !ha.call(e, "callee");
}, Je = fa, pa = Array.isArray, Qe = pa, da = 9007199254740991;
function ma(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= da;
}
var tr = ma, va = Ht, ga = tr;
function _a(e) {
  return e != null && ga(e.length) && !va(e);
}
var Kt = _a, ba = Kt, ya = ot;
function wa(e) {
  return ya(e) && ba(e);
}
var $a = wa, bt = { exports: {} };
function Ea() {
  return !1;
}
var Oa = Ea;
bt.exports;
(function(e, t) {
  var r = X, n = Oa, i = t && !t.nodeType && t, s = i && !0 && e && !e.nodeType && e, o = s && s.exports === i, c = o ? r.Buffer : void 0, l = c ? c.isBuffer : void 0, h = l || n;
  e.exports = h;
})(bt, bt.exports);
var er = bt.exports, Ta = St, Sa = Xe, Ca = ot, xa = "[object Object]", Aa = Function.prototype, Ia = Object.prototype, rr = Aa.toString, Da = Ia.hasOwnProperty, Pa = rr.call(Object);
function Ma(e) {
  if (!Ca(e) || Ta(e) != xa)
    return !1;
  var t = Sa(e);
  if (t === null)
    return !0;
  var r = Da.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && rr.call(r) == Pa;
}
var ka = Ma, ja = St, La = tr, Na = ot, Va = "[object Arguments]", za = "[object Array]", Ra = "[object Boolean]", Ha = "[object Date]", Ua = "[object Error]", Ga = "[object Function]", Ka = "[object Map]", Ba = "[object Number]", Fa = "[object Object]", Wa = "[object RegExp]", Ya = "[object Set]", Xa = "[object String]", qa = "[object WeakMap]", Za = "[object ArrayBuffer]", Ja = "[object DataView]", Qa = "[object Float32Array]", tc = "[object Float64Array]", ec = "[object Int8Array]", rc = "[object Int16Array]", nc = "[object Int32Array]", ic = "[object Uint8Array]", sc = "[object Uint8ClampedArray]", oc = "[object Uint16Array]", ac = "[object Uint32Array]", v = {};
v[Qa] = v[tc] = v[ec] = v[rc] = v[nc] = v[ic] = v[sc] = v[oc] = v[ac] = !0;
v[Va] = v[za] = v[Za] = v[Ra] = v[Ja] = v[Ha] = v[Ua] = v[Ga] = v[Ka] = v[Ba] = v[Fa] = v[Wa] = v[Ya] = v[Xa] = v[qa] = !1;
function cc(e) {
  return Na(e) && La(e.length) && !!v[ja(e)];
}
var uc = cc;
function lc(e) {
  return function(t) {
    return e(t);
  };
}
var hc = lc, yt = { exports: {} };
yt.exports;
(function(e, t) {
  var r = Ge, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, s = i && i.exports === n, o = s && r.process, c = function() {
    try {
      var l = i && i.require && i.require("util").types;
      return l || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(yt, yt.exports);
var fc = yt.exports, pc = uc, dc = hc, Ee = fc, Oe = Ee && Ee.isTypedArray, mc = Oe ? dc(Oe) : pc, nr = mc;
function vc(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var ir = vc, gc = Gt, _c = Et, bc = Object.prototype, yc = bc.hasOwnProperty;
function wc(e, t, r) {
  var n = e[t];
  (!(yc.call(e, t) && _c(n, r)) || r === void 0 && !(t in e)) && gc(e, t, r);
}
var $c = wc, Ec = $c, Oc = Gt;
function Tc(e, t, r, n) {
  var i = !r;
  r || (r = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var c = t[s], l = n ? n(r[c], e[c], c, r, e) : void 0;
    l === void 0 && (l = e[c]), i ? Oc(r, c, l) : Ec(r, c, l);
  }
  return r;
}
var Sc = Tc;
function Cc(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var xc = Cc, Ac = 9007199254740991, Ic = /^(?:0|[1-9]\d*)$/;
function Dc(e, t) {
  var r = typeof e;
  return t = t ?? Ac, !!t && (r == "number" || r != "symbol" && Ic.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var sr = Dc, Pc = xc, Mc = Je, kc = Qe, jc = er, Lc = sr, Nc = nr, Vc = Object.prototype, zc = Vc.hasOwnProperty;
function Rc(e, t) {
  var r = kc(e), n = !r && Mc(e), i = !r && !n && jc(e), s = !r && !n && !i && Nc(e), o = r || n || i || s, c = o ? Pc(e.length, String) : [], l = c.length;
  for (var h in e)
    (t || zc.call(e, h)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    Lc(h, l))) && c.push(h);
  return c;
}
var Hc = Rc;
function Uc(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Gc = Uc, Kc = R, Bc = qe, Fc = Gc, Wc = Object.prototype, Yc = Wc.hasOwnProperty;
function Xc(e) {
  if (!Kc(e))
    return Fc(e);
  var t = Bc(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Yc.call(e, n)) || r.push(n);
  return r;
}
var qc = Xc, Zc = Hc, Jc = qc, Qc = Kt;
function tu(e) {
  return Qc(e) ? Zc(e, !0) : Jc(e);
}
var or = tu, eu = Sc, ru = or;
function nu(e) {
  return eu(e, ru(e));
}
var iu = nu, Te = Ye, su = Po, ou = Ro, au = Uo, cu = ra, Se = Je, Ce = Qe, uu = $a, lu = er, hu = Ht, fu = R, pu = ka, du = nr, xe = ir, mu = iu;
function vu(e, t, r, n, i, s, o) {
  var c = xe(e, r), l = xe(t, r), h = o.get(l);
  if (h) {
    Te(e, r, h);
    return;
  }
  var u = s ? s(c, l, r + "", e, t, o) : void 0, _ = u === void 0;
  if (_) {
    var m = Ce(l), E = !m && lu(l), y = !m && !E && du(l);
    u = l, m || E || y ? Ce(c) ? u = c : uu(c) ? u = au(c) : E ? (_ = !1, u = su(l, !0)) : y ? (_ = !1, u = ou(l, !0)) : u = [] : pu(l) || Se(l) ? (u = c, Se(c) ? u = mu(c) : (!fu(c) || hu(c)) && (u = cu(l))) : _ = !1;
  }
  _ && (o.set(l, u), i(u, l, n, s, o), o.delete(l)), Te(e, r, u);
}
var gu = vu, _u = yo, bu = Ye, yu = Do, wu = gu, $u = R, Eu = or, Ou = ir;
function ar(e, t, r, n, i) {
  e !== t && yu(t, function(s, o) {
    if (i || (i = new _u()), $u(s))
      wu(e, t, o, r, ar, n, i);
    else {
      var c = n ? n(Ou(e, o), s, o + "", e, t, i) : void 0;
      c === void 0 && (c = s), bu(e, o, c);
    }
  }, Eu);
}
var Tu = ar;
function Su(e) {
  return e;
}
var cr = Su;
function Cu(e, t, r) {
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
var xu = Cu, Au = xu, Ae = Math.max;
function Iu(e, t, r) {
  return t = Ae(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, s = Ae(n.length - t, 0), o = Array(s); ++i < s; )
      o[i] = n[t + i];
    i = -1;
    for (var c = Array(t + 1); ++i < t; )
      c[i] = n[i];
    return c[t] = r(o), Au(e, this, c);
  };
}
var Du = Iu;
function Pu(e) {
  return function() {
    return e;
  };
}
var Mu = Pu, ku = Mu, Ie = We, ju = cr, Lu = Ie ? function(e, t) {
  return Ie(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ku(t),
    writable: !0
  });
} : ju, Nu = Lu, Vu = 800, zu = 16, Ru = Date.now;
function Hu(e) {
  var t = 0, r = 0;
  return function() {
    var n = Ru(), i = zu - (n - r);
    if (r = n, i > 0) {
      if (++t >= Vu)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var Uu = Hu, Gu = Nu, Ku = Uu, Bu = Ku(Gu), Fu = Bu, Wu = cr, Yu = Du, Xu = Fu;
function qu(e, t) {
  return Xu(Yu(e, t, Wu), e + "");
}
var Zu = qu, Ju = Et, Qu = Kt, tl = sr, el = R;
function rl(e, t, r) {
  if (!el(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Qu(r) && tl(t, r.length) : n == "string" && t in r) ? Ju(r[t], e) : !1;
}
var nl = rl, il = Zu, sl = nl;
function ol(e) {
  return il(function(t, r) {
    var n = -1, i = r.length, s = i > 1 ? r[i - 1] : void 0, o = i > 2 ? r[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (i--, s) : void 0, o && sl(r[0], r[1], o) && (s = i < 3 ? void 0 : s, i = 1), t = Object(t); ++n < i; ) {
      var c = r[n];
      c && e(t, c, n, s);
    }
    return t;
  });
}
var al = ol, cl = Tu, ul = al, ll = ul(function(e, t, r) {
  cl(e, t, r);
}), hl = ll;
const fl = /* @__PURE__ */ Tn(hl), pl = {
  pan: { enabled: !0 },
  zoom: { enabled: !0, default: 1, min: 1, max: 4, mouseWheelStep: 0.5, zoomButtonStep: 0.5 },
  resetView: { enabled: !0, keyboardShortcut: "r" },
  centerView: { enabled: !1, keyboardShortcut: "c" },
  minimap: { enabled: !0, width: "160px", keyboardShortcut: "m", outlineStyle: "1px solid #ccc", viewportAreaOutlineStyle: "2px solid #333" },
  spring: { enabled: !0, rubberband: !0, rubberbandDistance: 100, transition: "transform 0.1s ease-out" },
  guides: { enabled: !1 },
  fillHeight: !0
}, De = {
  pan: [0, 0],
  zoom: 1
}, vl = ({
  children: e,
  settings: t = {}
}) => {
  const r = rt(() => fl({ ...pl }, t), [t]), [n, i] = L(De), [s, o] = L(() => {
  }), [c, l] = L(() => {
  }), [h, u] = L(() => {
  }), [_, m] = L(() => {
  }), [E, y] = L(() => {
  });
  return F(() => {
    i({ pan: De.pan, zoom: r.zoom.default });
  }, [r.zoom.default]), /* @__PURE__ */ V(st.Provider, { value: {
    crop: n,
    setCrop: i,
    settings: r,
    zoomOut: s,
    setZoomOut: o,
    zoomIn: c,
    setZoomIn: l,
    resetView: h,
    setResetView: u,
    centerView: _,
    setCenterView: m,
    toggleMinimap: E,
    setToggleMinimap: y
  }, children: e });
};
export {
  On as Viewer,
  st as ViewerContext,
  vl as ViewerProvider
};
