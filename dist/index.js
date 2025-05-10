import { jsxs as It, jsx as et } from "react/jsx-runtime";
import At, { createContext as hr, useContext as fr, useRef as V, useState as N, useEffect as z, useCallback as C, useMemo as pr } from "react";
import './index.css';function dr(e, t, r) {
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
function Zt(e, t, r) {
  return t === 0 || Math.abs(t) === 1 / 0 ? Math.pow(e, r * 5) : e * t * r / (t + r * e);
}
function Jt(e, t, r, n = 0.15) {
  return n === 0 ? dr(e, t, r) : e < t ? -Zt(t - e, r - t, n) + t : e > r ? +Zt(e - r, r - t, n) + r : e;
}
function mr(e, [t, r], [n, i]) {
  const [[s, o], [c, u]] = e;
  return [Jt(t, s, o, n), Jt(r, c, u, i)];
}
function vr(e, t) {
  if (typeof e != "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gr(e) {
  var t = vr(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function $(e, t, r) {
  return t = gr(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Qt(e, t) {
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
    t % 2 ? Qt(Object(r), !0).forEach(function(n) {
      $(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qt(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Ae = {
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
function te(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : "";
}
const _r = ["enter", "leave"];
function br(e = !1, t) {
  return e && !_r.includes(t);
}
function yr(e, t = "", r = !1) {
  const n = Ae[e], i = n && n[t] || t;
  return "on" + te(e) + te(i) + (br(r, i) ? "Capture" : "");
}
const wr = ["gotpointercapture", "lostpointercapture"];
function $r(e) {
  let t = e.substring(2).toLowerCase();
  const r = !!~t.indexOf("passive");
  r && (t = t.replace("passive", ""));
  const n = wr.includes(t) ? "capturecapture" : "capture", i = !!~t.indexOf(n);
  return i && (t = t.replace("capture", "")), {
    device: t,
    capture: i,
    passive: r
  };
}
function Er(e, t = "") {
  const r = Ae[e], n = r && r[t] || t;
  return e + n;
}
function _t(e) {
  return "touches" in e;
}
function De(e) {
  return _t(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse";
}
function Tr(e) {
  return Array.from(e.touches).filter((t) => {
    var r, n;
    return t.target === e.currentTarget || ((r = e.currentTarget) === null || r === void 0 || (n = r.contains) === null || n === void 0 ? void 0 : n.call(r, t.target));
  });
}
function Sr(e) {
  return e.type === "touchend" || e.type === "touchcancel" ? e.changedTouches : e.targetTouches;
}
function Pe(e) {
  return _t(e) ? Sr(e)[0] : e;
}
function Mt(e, t) {
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
  return Tr(e).map((t) => t.identifier);
}
function ee(e, t) {
  const [r, n] = Array.from(e.touches).filter((i) => t.includes(i.identifier));
  return Mt(r, n);
}
function Dt(e) {
  const t = Pe(e);
  return _t(e) ? t.identifier : t.pointerId;
}
function F(e) {
  const t = Pe(e);
  return [t.clientX, t.clientY];
}
const re = 40, ne = 800;
function Me(e) {
  let {
    deltaX: t,
    deltaY: r,
    deltaMode: n
  } = e;
  return n === 1 ? (t *= re, r *= re) : n === 2 && (t *= ne, r *= ne), [t, r];
}
function Cr(e) {
  var t, r;
  const {
    scrollX: n,
    scrollY: i,
    scrollLeft: s,
    scrollTop: o
  } = e.currentTarget;
  return [(t = n ?? s) !== null && t !== void 0 ? t : 0, (r = i ?? o) !== null && r !== void 0 ? r : 0];
}
function xr(e) {
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
function dt(e, ...t) {
  return typeof e == "function" ? e(...t) : e;
}
function Ir() {
}
function Ar(...e) {
  return e.length === 0 ? Ir : e.length === 1 ? e[0] : function() {
    let t;
    for (const r of e)
      t = r.apply(this, arguments) || t;
    return t;
  };
}
function ie(e, t) {
  return Object.assign({}, t, e || {});
}
const Dr = 32;
class ke {
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
    r._active || (this.reset(), this.computeInitial(), r._active = !0, r.target = t.target, r.currentTarget = t.currentTarget, r.lastOffset = n.from ? dt(n.from, r) : r.offset, r.offset = r.lastOffset, r.startTime = r.timeStamp = t.timeStamp);
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
    if (t && (r.event = t, n.preventDefault && t.cancelable && r.event.preventDefault(), r.type = t.type, i.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, i.locked = !!document.pointerLockElement, Object.assign(i, xr(t)), i.down = i.pressed = i.buttons % 2 === 1 || i.touches > 0, s = t.timeStamp - r.timeStamp, r.timeStamp = t.timeStamp, r.elapsedTime = r.timeStamp - r.startTime), r._active) {
      const x = r._delta.map(Math.abs);
      g.addTo(r._distance, x);
    }
    this.axisIntent && this.axisIntent(t);
    const [o, c] = r._movement, [u, h] = n.threshold, {
      _step: l,
      values: d
    } = r;
    if (n.hasCustomTransform ? (l[0] === !1 && (l[0] = Math.abs(o) >= u && d[0]), l[1] === !1 && (l[1] = Math.abs(c) >= h && d[1])) : (l[0] === !1 && (l[0] = Math.abs(o) >= u && Math.sign(o) * u), l[1] === !1 && (l[1] = Math.abs(c) >= h && Math.sign(c) * h)), r.intentional = l[0] !== !1 || l[1] !== !1, !r.intentional) return;
    const _ = [0, 0];
    if (n.hasCustomTransform) {
      const [x, Ot] = d;
      _[0] = l[0] !== !1 ? x - l[0] : 0, _[1] = l[1] !== !1 ? Ot - l[1] : 0;
    } else
      _[0] = l[0] !== !1 ? o - l[0] : 0, _[1] = l[1] !== !1 ? c - l[1] : 0;
    this.restrictToAxis && !r._blocked && this.restrictToAxis(_);
    const O = r.offset, T = r._active && !r._blocked || r.active;
    T && (r.first = r._active && !r.active, r.last = !r._active && r.active, r.active = i[this.ingKey] = r._active, t && (r.first && ("bounds" in n && (r._bounds = dt(n.bounds, r)), this.setup && this.setup()), r.movement = _, this.computeOffset()));
    const [y, P] = r.offset, [[k, Q], [U, st]] = r._bounds;
    r.overflow = [y < k ? -1 : y > Q ? 1 : 0, P < U ? -1 : P > st ? 1 : 0], r._movementBound[0] = r.overflow[0] ? r._movementBound[0] === !1 ? r._movement[0] : r._movementBound[0] : !1, r._movementBound[1] = r.overflow[1] ? r._movementBound[1] === !1 ? r._movement[1] : r._movementBound[1] : !1;
    const St = r._active ? n.rubberband || [0, 0] : [0, 0];
    if (r.offset = mr(r._bounds, r.offset, St), r.delta = g.sub(r.offset, O), this.computeMovement(), T && (!r.last || s > Dr)) {
      r.delta = g.sub(r.offset, O);
      const x = r.delta.map(Math.abs);
      g.addTo(r.distance, x), r.direction = r.delta.map(Math.sign), r._direction = r._delta.map(Math.sign), !r.first && s > 0 && (r.velocity = [x[0] / s, x[1] / s], r.timeDelta = s);
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
function Pr([e, t], r) {
  const n = Math.abs(e), i = Math.abs(t);
  if (n > i && n > r)
    return "x";
  if (i > n && i > r)
    return "y";
}
class rt extends ke {
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
      const i = typeof n.axisThreshold == "object" ? n.axisThreshold[De(t)] : n.axisThreshold;
      r.axis = Pr(r._movement, i);
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
const se = (e) => e, oe = 0.15, jt = {
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
        return [oe, oe];
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
      const i = n || se;
      return (s) => {
        const o = i(s);
        return (!isFinite(o[0]) || !isFinite(o[1])) && console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${o[0]},${[1]}]`), o;
      };
    }
    return n || se;
  },
  threshold(e) {
    return g.toVector(e, 0);
  }
};
process.env.NODE_ENV === "development" && Object.assign(jt, {
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
const Mr = 0, R = b(b({}, jt), {}, {
  axis(e, t, {
    axis: r
  }) {
    if (this.lockDirection = r === "lock", !this.lockDirection) return r;
  },
  axisThreshold(e = Mr) {
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
}), ae = {
  ArrowRight: (e, t = 1) => [e * t, 0],
  ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
  ArrowUp: (e, t = 1) => [0, -1 * e * t],
  ArrowDown: (e, t = 1) => [0, e * t]
};
class kr extends rt {
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
    r.pointerCapture && t.target.setPointerCapture(t.pointerId), !(i && i.size > 1 && n._pointerActive) && (this.start(t), this.setupPointer(t), n._pointerId = Dt(t), n._pointerActive = !0, this.computeValues(F(t)), this.computeInitial(), r.preventScrollAxis && De(t) !== "mouse" ? (n._active = !1, this.setupScrollPrevention(t)) : r.delay > 0 ? (this.setupDelayTrigger(t), r.triggerAllEvents && (this.compute(t), this.emit())) : this.startPointerDrag(t));
  }
  startPointerDrag(t) {
    const r = this.state;
    r._active = !0, r._preventScroll = !0, r._delayed = !1, this.compute(t), this.emit();
  }
  pointerMove(t) {
    const r = this.state, n = this.config;
    if (!r._pointerActive) return;
    const i = Dt(t);
    if (r._pointerId !== void 0 && i !== r._pointerId) return;
    const s = F(t);
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
    const i = Dt(t);
    if (r._pointerId !== void 0 && i !== r._pointerId) return;
    this.state._pointerActive = !1, this.setActive(), this.compute(t);
    const [s, o] = r._distance;
    if (r.tap = s <= n.tapsThreshold && o <= n.tapsThreshold, r.tap && n.filterTaps)
      r._force = !0;
    else {
      const [c, u] = r._delta, [h, l] = r._movement, [d, _] = n.swipe.velocity, [O, T] = n.swipe.distance, y = n.swipe.duration;
      if (r.elapsedTime < y) {
        const P = Math.abs(c / r.timeDelta), k = Math.abs(u / r.timeDelta);
        P > d && Math.abs(h) > O && (r.swipe[0] = Math.sign(c)), k > _ && Math.abs(l) > T && (r.swipe[1] = Math.sign(u));
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
    this.state._preventScroll = !1, jr(t);
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
    const r = ae[t.key];
    if (r) {
      const n = this.state, i = t.shiftKey ? 10 : t.altKey ? 0.1 : 1;
      this.start(t), n._delta = r(this.config.keyboardDisplacement, i), n._keyboardActive = !0, g.addTo(n._movement, n._delta), this.compute(t), this.emit();
    }
  }
  keyUp(t) {
    t.key in ae && (this.state._keyboardActive = !1, this.setActive(), this.compute(t), this.emit());
  }
  bind(t) {
    const r = this.config.device;
    t(r, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (t(r, "change", this.pointerMove.bind(this)), t(r, "end", this.pointerUp.bind(this)), t(r, "cancel", this.pointerUp.bind(this)), t("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (t("key", "down", this.keyDown.bind(this)), t("key", "up", this.keyUp.bind(this))), this.config.filterTaps && t("click", "", this.pointerClick.bind(this), {
      capture: !0,
      passive: !1
    });
  }
}
function jr(e) {
  "persist" in e && typeof e.persist == "function" && e.persist();
}
const nt = typeof window < "u" && window.document && window.document.createElement;
function je() {
  return nt && "ontouchstart" in window;
}
function Lr() {
  return je() || nt && window.navigator.maxTouchPoints > 1;
}
function Nr() {
  return nt && "onpointerdown" in window;
}
function Vr() {
  return nt && "exitPointerLock" in window.document;
}
function zr() {
  try {
    return "constructor" in GestureEvent;
  } catch {
    return !1;
  }
}
const I = {
  isBrowser: nt,
  gesture: zr(),
  touch: je(),
  touchscreen: Lr(),
  pointer: Nr(),
  pointerLock: Vr()
}, Rr = 250, Hr = 180, Ur = 0.5, Gr = 50, Kr = 250, Br = 10, ce = {
  mouse: 0,
  touch: 0,
  pen: 8
}, Le = b(b({}, R), {}, {
  device(e, t, {
    pointer: {
      touch: r = !1,
      lock: n = !1,
      mouse: i = !1
    } = {}
  }) {
    return this.pointerLock = n && I.pointerLock, I.touch && r ? "touch" : this.pointerLock ? "mouse" : I.pointer && !i ? "pointer" : I.touch ? "touch" : "mouse";
  },
  preventScrollAxis(e, t, {
    preventScroll: r
  }) {
    if (this.preventScrollDelay = typeof r == "number" ? r : r || r === void 0 && e ? Rr : void 0, !(!I.touchscreen || r === !1))
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
    velocity: e = Ur,
    distance: t = Gr,
    duration: r = Kr
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
        return Hr;
      case !1:
        return 0;
      default:
        return e;
    }
  },
  axisThreshold(e) {
    return e ? b(b({}, ce), e) : ce;
  },
  keyboardDisplacement(e = Br) {
    return e;
  }
});
process.env.NODE_ENV === "development" && Object.assign(Le, {
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
function Ne(e) {
  const [t, r] = e.overflow, [n, i] = e._delta, [s, o] = e._direction;
  (t < 0 && n > 0 && s < 0 || t > 0 && n < 0 && s > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && i > 0 && o < 0 || r > 0 && i < 0 && o > 0) && (e._movement[1] = e._movementBound[1]);
}
const Wr = 30, Fr = 100;
class Yr extends ke {
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
      const i = Math.abs(r) * Wr - Math.abs(n);
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
    const i = ee(t, r._touchIds);
    i && this.pinchStart(t, i);
  }
  pointerStart(t) {
    if (t.buttons != null && t.buttons % 2 !== 1) return;
    this.ctrl.setEventIds(t), t.target.setPointerCapture(t.pointerId);
    const r = this.state, n = r._pointerEvents, i = this.ctrl.pointerIds;
    if (r._active && Array.from(n.keys()).every((o) => i.has(o)) || (n.size < 2 && n.set(t.pointerId, t), r._pointerEvents.size < 2)) return;
    this.start(t);
    const s = Mt(...Array.from(n.values()));
    s && this.pinchStart(t, s);
  }
  pinchStart(t, r) {
    const n = this.state;
    n.origin = r.origin, this.computeValues([r.distance, r.angle]), this.computeInitial(), this.compute(t), this.emit();
  }
  touchMove(t) {
    if (!this.state._active) return;
    const r = ee(t, this.state._touchIds);
    r && this.pinchMove(t, r);
  }
  pointerMove(t) {
    const r = this.state._pointerEvents;
    if (r.has(t.pointerId) && r.set(t.pointerId, t), !this.state._active) return;
    const n = Mt(...Array.from(r.values()));
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
    n._delta = [-Me(t)[1] / Fr * n.offset[0], 0], g.addTo(n._movement, n._delta), Ne(n), this.state.origin = [t.clientX, t.clientY], this.compute(t), this.emit();
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
const Xr = b(b({}, jt), {}, {
  device(e, t, {
    shared: r,
    pointer: {
      touch: n = !1
    } = {}
  }) {
    if (r.target && !I.touch && I.gesture) return "gesture";
    if (I.touch && n) return "touch";
    if (I.touchscreen) {
      if (I.pointer) return "pointer";
      if (I.touch) return "touch";
    }
  },
  bounds(e, t, {
    scaleBounds: r = {},
    angleBounds: n = {}
  }) {
    const i = (o) => {
      const c = ie(dt(r, o), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [c.min, c.max];
    }, s = (o) => {
      const c = ie(dt(n, o), {
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
class qr extends rt {
  constructor(...t) {
    super(...t), $(this, "ingKey", "moving");
  }
  move(t) {
    this.config.mouseOnly && t.pointerType !== "mouse" || (this.state._active ? this.moveChange(t) : this.moveStart(t), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)));
  }
  moveStart(t) {
    this.start(t), this.computeValues(F(t)), this.compute(t), this.computeInitial(), this.emit();
  }
  moveChange(t) {
    if (!this.state._active) return;
    const r = F(t), n = this.state;
    n._delta = g.sub(r, n._values), g.addTo(n._movement, n._delta), this.computeValues(r), this.compute(t), this.emit();
  }
  moveEnd(t) {
    this.state._active && (this.state._active = !1, this.compute(t), this.emit());
  }
  bind(t) {
    t("pointer", "change", this.move.bind(this)), t("pointer", "leave", this.moveEnd.bind(this));
  }
}
const Zr = b(b({}, R), {}, {
  mouseOnly: (e = !0) => e
});
class Jr extends rt {
  constructor(...t) {
    super(...t), $(this, "ingKey", "scrolling");
  }
  scroll(t) {
    this.state._active || this.start(t), this.scrollChange(t), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
  }
  scrollChange(t) {
    t.cancelable && t.preventDefault();
    const r = this.state, n = Cr(t);
    r._delta = g.sub(n, r._values), g.addTo(r._movement, r._delta), this.computeValues(n), this.compute(t), this.emit();
  }
  scrollEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    t("scroll", "", this.scroll.bind(this));
  }
}
const Qr = R;
class tn extends rt {
  constructor(...t) {
    super(...t), $(this, "ingKey", "wheeling");
  }
  wheel(t) {
    this.state._active || this.start(t), this.wheelChange(t), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
  }
  wheelChange(t) {
    const r = this.state;
    r._delta = Me(t), g.addTo(r._movement, r._delta), Ne(r), this.compute(t), this.emit();
  }
  wheelEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    t("wheel", "", this.wheel.bind(this));
  }
}
const en = R;
class rn extends rt {
  constructor(...t) {
    super(...t), $(this, "ingKey", "hovering");
  }
  enter(t) {
    this.config.mouseOnly && t.pointerType !== "mouse" || (this.start(t), this.computeValues(F(t)), this.compute(t), this.emit());
  }
  leave(t) {
    if (this.config.mouseOnly && t.pointerType !== "mouse") return;
    const r = this.state;
    if (!r._active) return;
    r._active = !1;
    const n = F(t);
    r._movement = r._delta = g.sub(n, r._values), this.computeValues(n), this.compute(t), r.delta = r.movement, this.emit();
  }
  bind(t) {
    t("pointer", "enter", this.enter.bind(this)), t("pointer", "leave", this.leave.bind(this));
  }
}
const nn = b(b({}, R), {}, {
  mouseOnly: (e = !0) => e
}), Lt = /* @__PURE__ */ new Map(), kt = /* @__PURE__ */ new Map();
function sn(e) {
  Lt.set(e.key, e.engine), kt.set(e.key, e.resolver);
}
const on = {
  key: "drag",
  engine: kr,
  resolver: Le
}, an = {
  key: "hover",
  engine: rn,
  resolver: nn
}, cn = {
  key: "move",
  engine: qr,
  resolver: Zr
}, un = {
  key: "pinch",
  engine: Yr,
  resolver: Xr
}, ln = {
  key: "scroll",
  engine: Jr,
  resolver: Qr
}, hn = {
  key: "wheel",
  engine: tn,
  resolver: en
};
function fn(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, s;
  for (s = 0; s < n.length; s++)
    i = n[s], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function pn(e, t) {
  if (e == null) return {};
  var r = fn(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
const dn = {
  target(e) {
    if (e)
      return () => "current" in e ? e.current : e;
  },
  enabled(e = !0) {
    return e;
  },
  window(e = I.isBrowser ? window : void 0) {
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
}, mn = ["target", "eventOptions", "window", "enabled", "transform"];
function pt(e = {}, t) {
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
        r[n] = pt(e[n], i);
        break;
      case "boolean":
        i && (r[n] = e[n]);
        break;
    }
  return r;
}
function vn(e, t, r = {}) {
  const n = e, {
    target: i,
    eventOptions: s,
    window: o,
    enabled: c,
    transform: u
  } = n, h = pn(n, mn);
  if (r.shared = pt({
    target: i,
    eventOptions: s,
    window: o,
    enabled: c,
    transform: u
  }, dn), t) {
    const l = kt.get(t);
    r[t] = pt(b({
      shared: r.shared
    }, h), l);
  } else
    for (const l in h) {
      const d = kt.get(l);
      if (d)
        r[l] = pt(b({
          shared: r.shared
        }, h[l]), d);
      else if (process.env.NODE_ENV === "development" && !["drag", "pinch", "scroll", "wheel", "move", "hover"].includes(l)) {
        if (l === "domTarget")
          throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
        console.warn(`[@use-gesture]: Unknown config key \`${l}\` was used. Please read the documentation for further information.`);
      }
    }
  return r;
}
class Ve {
  constructor(t, r) {
    $(this, "_listeners", /* @__PURE__ */ new Set()), this._ctrl = t, this._gestureKey = r;
  }
  add(t, r, n, i, s) {
    const o = this._listeners, c = Er(r, n), u = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}, h = b(b({}, u), s);
    t.addEventListener(c, i, h);
    const l = () => {
      t.removeEventListener(c, i, h), o.delete(l);
    };
    return o.add(l), l;
  }
  clean() {
    this._listeners.forEach((t) => t()), this._listeners.clear();
  }
}
class gn {
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
class _n {
  constructor(t) {
    $(this, "gestures", /* @__PURE__ */ new Set()), $(this, "_targetEventStore", new Ve(this)), $(this, "gestureEventStores", {}), $(this, "gestureTimeoutStores", {}), $(this, "handlers", {}), $(this, "config", {}), $(this, "pointerIds", /* @__PURE__ */ new Set()), $(this, "touchIds", /* @__PURE__ */ new Set()), $(this, "state", {
      shared: {
        shiftKey: !1,
        metaKey: !1,
        ctrlKey: !1,
        altKey: !1
      }
    }), bn(this, t);
  }
  setEventIds(t) {
    if (_t(t))
      return this.touchIds = new Set(Or(t)), this.touchIds;
    if ("pointerId" in t)
      return t.type === "pointerup" || t.type === "pointercancel" ? this.pointerIds.delete(t.pointerId) : t.type === "pointerdown" && this.pointerIds.add(t.pointerId), this.pointerIds;
  }
  applyHandlers(t, r) {
    this.handlers = t, this.nativeHandlers = r;
  }
  applyConfig(t, r) {
    this.config = vn(t, r, this.config);
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
          const c = this.config[o], u = ue(n, c.eventOptions, !!i);
          if (c.enabled) {
            const h = Lt.get(o);
            new h(this, t, o).bind(u);
          }
        }
        const s = ue(n, r.eventOptions, !!i);
        for (const o in this.nativeHandlers)
          s(o, "", (c) => this.nativeHandlers[o](b(b({}, this.state.shared), {}, {
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
          passive: u
        } = $r(s);
        this._targetEventStore.add(i, o, "", n[s], {
          capture: c,
          passive: u
        });
      }
    }
  }
}
function B(e, t) {
  e.gestures.add(t), e.gestureEventStores[t] = new Ve(e, t), e.gestureTimeoutStores[t] = new gn();
}
function bn(e, t) {
  t.drag && B(e, "drag"), t.wheel && B(e, "wheel"), t.scroll && B(e, "scroll"), t.move && B(e, "move"), t.pinch && B(e, "pinch"), t.hover && B(e, "hover");
}
const ue = (e, t, r) => (n, i, s, o = {}, c = !1) => {
  var u, h;
  const l = (u = o.capture) !== null && u !== void 0 ? u : t.capture, d = (h = o.passive) !== null && h !== void 0 ? h : t.passive;
  let _ = c ? n : yr(n, i, l);
  r && d && (_ += "Passive"), e[_] = e[_] || [], e[_].push(s);
}, yn = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function wn(e) {
  const t = {}, r = {}, n = /* @__PURE__ */ new Set();
  for (let i in e)
    yn.test(i) ? (n.add(RegExp.lastMatch), r[i] = e[i]) : t[i] = e[i];
  return [r, t, n];
}
function W(e, t, r, n, i, s) {
  if (!e.has(r)) return;
  if (!Lt.has(n)) {
    process.env.NODE_ENV === "development" && console.warn(`[@use-gesture]: You've created a custom handler that that uses the \`${n}\` gesture but isn't properly configured.

Please add \`${n}Action\` when creating your handler.`);
    return;
  }
  const o = r + "Start", c = r + "End", u = (h) => {
    let l;
    return h.first && o in t && t[o](h), r in t && (l = t[r](h)), h.last && c in t && t[c](h), l;
  };
  i[n] = u, s[n] = s[n] || {};
}
function $n(e, t) {
  const [r, n, i] = wn(e), s = {};
  return W(i, r, "onDrag", "drag", s, t), W(i, r, "onWheel", "wheel", s, t), W(i, r, "onScroll", "scroll", s, t), W(i, r, "onPinch", "pinch", s, t), W(i, r, "onMove", "move", s, t), W(i, r, "onHover", "hover", s, t), {
    handlers: s,
    config: t,
    nativeHandlers: n
  };
}
function En(e, t = {}, r, n) {
  const i = At.useMemo(() => new _n(e), []);
  if (i.applyHandlers(e, n), i.applyConfig(t, r), At.useEffect(i.effect.bind(i)), At.useEffect(() => i.clean.bind(i), []), t.target === void 0)
    return i.bind.bind(i);
}
function Tn(e) {
  return e.forEach(sn), function(r, n) {
    const {
      handlers: i,
      nativeHandlers: s,
      config: o
    } = $n(r, n || {});
    return En(i, o, void 0, s);
  };
}
function le(e, t) {
  return Tn([on, un, ln, hn, cn, an])(e, t || {});
}
var A = /* @__PURE__ */ ((e) => (e.Minimap = "minimap", e.Viewport = "viewport", e))(A || {});
const ze = hr({}), L = {
  "viewer-main": "_viewer-main_1mddk_1",
  "viewer-main-fill-height": "_viewer-main-fill-height_1mddk_10",
  "viewer-viewport": "_viewer-viewport_1mddk_14",
  "viewer-minimap-content": "_viewer-minimap-content_1mddk_19",
  "viewer-viewport-content": "_viewer-viewport-content_1mddk_20",
  "viewer-minimap": "_viewer-minimap_1mddk_19",
  "viewer-minimap-viewport-area": "_viewer-minimap-viewport-area_1mddk_38",
  "viewer-viewport-center-guide": "_viewer-viewport-center-guide_1mddk_59"
}, vl = ({
  className: e = "",
  viewportContent: t,
  minimapContent: r
}) => {
  const {
    crop: n,
    setCrop: i,
    settings: s,
    setZoomIn: o,
    setZoomOut: c,
    setResetView: u,
    setCenterView: h,
    setToggleMinimap: l
  } = fr(ze), d = V(n), _ = 0.75, O = 100, T = V(null), y = V(null), P = V(null), k = V(null), Q = V(s.minimap.width), U = V(160), [st, St] = N(s.minimap.enabled), [x, Ot] = N({
    width: Q.current,
    height: U.current,
    scale: 1
  });
  z(() => {
    n !== d.current && (d.current = n);
  }, [n]);
  const or = (a, f, p) => {
    const m = (p.width - f.width) / 2, S = (p.height - f.height) / 2;
    return p.width < f.width ? a.pan[0] = 0 : p.left > f.left ? a.pan[0] = Math.min(a.pan[0], m) : p.right < f.right && (a.pan[0] = Math.max(a.pan[0], f.width - p.width + m)), p.height < f.height ? a.pan[1] = 0 : p.top > f.top ? a.pan[1] = Math.min(a.pan[1], S) : p.bottom < f.bottom && (a.pan[1] = Math.max(a.pan[1], f.height - p.height + S)), a;
  }, ar = C((a, f) => {
    const p = a.width * f.zoom, m = a.height * f.zoom, S = a.left + a.width / 2, w = a.top + a.height / 2, ut = S * f.zoom - f.pan[0], lt = w * f.zoom - f.pan[1], xt = (a.width - p) / 2, K = (a.height - m) / 2, E = ut - p / 2, ht = lt - m / 2, Xt = xt - E, qt = K - ht;
    return {
      width: p,
      height: m,
      left: Xt,
      right: Xt + p,
      top: qt,
      bottom: qt + m
    };
  }, []), D = C((a) => {
    if (y.current == null || T.current == null) return a;
    const f = Ht(y.current, T.current), p = {
      ...f,
      width: f.width,
      height: f.height,
      left: f.left,
      right: f.right,
      top: f.top,
      bottom: f.bottom
    }, m = ar(p, a);
    return or(a, p, m);
  }, []), Ht = (a, f) => {
    const p = f.getBoundingClientRect(), m = a.getBoundingClientRect();
    return {
      top: m.top - p.top,
      left: m.left - p.left,
      width: a.offsetWidth,
      height: a.offsetHeight,
      bottom: m.top - p.top + a.offsetHeight,
      right: m.left - p.left + a.offsetWidth
    };
  }, M = C(() => {
    if (P.current == null || y.current == null)
      return;
    const a = P.current.offsetWidth, f = y.current.offsetWidth / y.current.offsetHeight;
    U.current = a / f;
    const p = a / y.current.offsetWidth;
    Ot((S) => ({
      ...S,
      width: Q.current,
      height: U.current,
      scale: p
    }));
    let m = {
      ...d.current
    };
    m = D(m), i(m);
  }, [D, i]);
  z(() => {
    if (k.current) {
      const a = k.current.querySelector("img");
      a && (a.complete ? M() : a.onload = M);
      const f = k.current.querySelector("video");
      f && (f.readyState >= 4 ? M() : f.onloadeddata = M);
    }
    return () => {
    };
  }, [t, M]), z(() => {
    M();
  }, [st, M]);
  const Ct = C(() => {
    M();
  }, [M]);
  z(() => (window.addEventListener("resize", Ct), () => {
    window.removeEventListener("resize", Ct);
  }), [Ct]);
  const Ut = C((a) => {
    const f = { pan: { ...a.pan }, zoom: a.zoom }, p = D({ pan: { ...a.pan }, zoom: a.zoom });
    return f.pan[0] = Math.max(f.pan[0], p.pan[0] - s.spring.rubberbandDistance), f.pan[0] = Math.min(f.pan[0], p.pan[0] + s.spring.rubberbandDistance), f.pan[1] = Math.max(f.pan[1], p.pan[1] - s.spring.rubberbandDistance), f.pan[1] = Math.min(f.pan[1], p.pan[1] + s.spring.rubberbandDistance), f;
  }, [s, D]), j = C((a, f, p) => {
    if (!s.zoom.enabled || a.last || !y.current || !T.current) return p || d.current;
    p ?? (p = d.current);
    const m = Ht(y.current, T.current);
    let S = 0;
    const w = [0, 0];
    if (a.type === "click")
      S = Number(a.zoomChange) * s.zoom.zoomButtonStep;
    else if (a.type === "pointermove" && a.pinching) {
      const E = a;
      S = E.delta[0], w[0] = E.origin[0] - m.width / 2, w[1] = E.origin[1] - m.height / 2;
    } else if (a.type === "wheel") {
      const E = a, ht = a;
      E.ctrlKey && E.pinching === !0 ? (ht.axis === "scale" ? S = ht.delta[0] : E.axis === "x" || E.axis, w[0] = E.event.clientX - m.width / 2, w[1] = E.event.clientY - m.height / 2) : E.axis === "y" && (!("pinching" in E) || E.pinching === !1) && (S = -E.delta[1] / O * s.zoom.mouseWheelStep, w[0] = E.event.clientX - m.width / 2, w[1] = E.event.clientY - m.height / 2);
    }
    f == A.Minimap && (w[0] = 0, w[1] = 0);
    const ut = Math.min(Math.max(p.zoom + S, s.zoom.min), s.zoom.max), lt = ut / d.current.zoom, xt = [
      w[0] + (d.current.pan[0] - w[0]) * lt,
      w[1] + (d.current.pan[1] - w[1]) * lt
    ];
    let K = {
      ...d.current,
      zoom: ut,
      pan: xt
    };
    return K = D(K), i(K), K;
  }, [s, i, D]), Gt = C((a, f, p) => {
    if (!s.pan.enabled || a.last) return p || d.current;
    p ?? (p = d.current);
    const m = f == A.Viewport ? 1 : -d.current.zoom / x.scale, S = [
      p.pan[0] + a.delta[0] * m,
      p.pan[1] + a.delta[1] * m
    ];
    let w = {
      ...d.current,
      pan: S
    };
    return s.spring.rubberband ? w = Ut(w) : w = D(w), i(w), w;
  }, [s, i, D, Ut, x.scale]), G = C(() => {
    let a = {
      ...d.current
    };
    a = D(a), i(a);
  }, [i, D]), Kt = C(() => {
    j({
      type: "click",
      zoomChange: -1,
      delta: [0, 0],
      last: !1
    }, A.Minimap, d.current);
  }, [j]), Bt = C(() => {
    j({
      type: "click",
      zoomChange: 1,
      delta: [0, 0],
      last: !1
    }, A.Minimap, d.current);
  }, [j]), ot = C(() => {
    const a = {
      pan: [0, 0],
      zoom: s.zoom.default
    };
    i(a);
  }, [s, i]), at = C(() => {
    const a = {
      pan: [0, 0],
      zoom: d.current.zoom
    };
    i(a);
  }, [i]), ct = C(() => {
    St((a) => !a);
  }, []);
  z(() => (c(() => Kt), o(() => Bt), u(() => ot), h(() => at), l(() => ct), () => {
  }), [Kt, c, Bt, o, ot, u, at, h, ct, l]), z(() => {
    const a = (f) => {
      const p = f.key.toLowerCase();
      s.resetView.enabled && p === s.resetView.keyboardShortcut && ot(), s.centerView.enabled && p === s.centerView.keyboardShortcut && at(), s.minimap.enabled && p === s.minimap.keyboardShortcut && ct();
    };
    return window.addEventListener("keydown", a), () => {
      window.removeEventListener("keydown", a);
    };
  }, [s, ot, at, ct]);
  const Wt = {
    drag: {
      enabled: s.pan.enabled,
      from: () => d.current.pan,
      preventScroll: !1
      // Ignores vertical scrolling on touch devices
    },
    pinch: {
      enabled: s.zoom.enabled,
      preventDefault: !0,
      pinchOnWheel: !0,
      angleBounds: { min: 0, max: 0 },
      from: () => [d.current.zoom * _, 0]
    },
    wheel: {
      enabled: s.zoom.enabled,
      preventDefault: !0,
      from: () => [0, -d.current.zoom * O]
    },
    eventOptions: {
      passive: !1
    }
  };
  le(
    {
      onDrag: (a) => Gt(a, A.Viewport, a.memo),
      onDragEnd: G,
      onPinch: (a) => j(a, A.Viewport, a.memo),
      onPinchEnd: G,
      onWheel: (a) => j(a, A.Viewport, a.memo),
      onWheelEnd: G
    },
    {
      ...Wt,
      target: y
    }
  ), le({
    onDrag: (a) => Gt(a, A.Minimap, a.memo),
    onDragEnd: G,
    onPinch: (a) => j(a, A.Minimap, a.memo),
    onPinchEnd: G,
    onWheel: (a) => j(a, A.Minimap, a.memo),
    onWheelEnd: G
  }, {
    ...Wt,
    target: P
  });
  const cr = {
    width: Q.current,
    height: U.current,
    display: st && r ? "block" : "none",
    outline: s.minimap.outlineStyle
  };
  let Ft = {};
  if (y.current) {
    const a = x.scale;
    Ft = {
      // The order of transform matters! Scale first, then translate
      transform: `scale(${1 / Math.max(n.zoom, 1)}) translate(${-n.pan[0] * a}px, ${-n.pan[1] * a}px)`,
      width: `${y.current.offsetWidth * a}px`,
      height: `${y.current.offsetHeight * a}px`,
      outline: s.minimap.viewportAreaOutlineStyle
    };
  }
  const ur = {
    transform: `scale(${n.zoom}) translate(${n.pan[0] / n.zoom}px, ${n.pan[1] / n.zoom}px)`,
    transition: s.spring.enabled === !0 ? s.spring.transition : "none"
  };
  let Yt = {};
  y.current && (Yt = {
    transformOrigin: "0% 0%",
    transform: `scale(${x.scale})`,
    width: `${y.current.offsetWidth}px`,
    height: `${y.current.offsetHeight}px`
  });
  const lr = [
    e,
    L["viewer-main"],
    s.fillHeight && L["viewer-main-fill-height"]
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ It("div", { className: lr, ref: T, children: [
    /* @__PURE__ */ It("div", { className: L["viewer-minimap"], ref: P, style: cr, children: [
      /* @__PURE__ */ et("div", { className: L["viewer-minimap-content"], style: Yt, children: r }),
      /* @__PURE__ */ et("div", { className: L["viewer-minimap-viewport-area"], style: Ft })
    ] }),
    /* @__PURE__ */ It("div", { className: L["viewer-viewport"], ref: y, children: [
      s.guides.enabled && /* @__PURE__ */ et("div", { className: L["viewer-viewport-center-guide"] }),
      /* @__PURE__ */ et("div", { className: L["viewer-viewport-content"], ref: k, style: ur, children: t })
    ] })
  ] });
};
var ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Sn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function On() {
  this.__data__ = [], this.size = 0;
}
var Cn = On;
function xn(e, t) {
  return e === t || e !== e && t !== t;
}
var bt = xn, In = bt;
function An(e, t) {
  for (var r = e.length; r--; )
    if (In(e[r][0], t))
      return r;
  return -1;
}
var yt = An, Dn = yt, Pn = Array.prototype, Mn = Pn.splice;
function kn(e) {
  var t = this.__data__, r = Dn(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Mn.call(t, r, 1), --this.size, !0;
}
var jn = kn, Ln = yt;
function Nn(e) {
  var t = this.__data__, r = Ln(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Vn = Nn, zn = yt;
function Rn(e) {
  return zn(this.__data__, e) > -1;
}
var Hn = Rn, Un = yt;
function Gn(e, t) {
  var r = this.__data__, n = Un(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var Kn = Gn, Bn = Cn, Wn = jn, Fn = Vn, Yn = Hn, Xn = Kn;
function Y(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Y.prototype.clear = Bn;
Y.prototype.delete = Wn;
Y.prototype.get = Fn;
Y.prototype.has = Yn;
Y.prototype.set = Xn;
var wt = Y, qn = wt;
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
var ii = ni, si = typeof ft == "object" && ft && ft.Object === Object && ft, Re = si, oi = Re, ai = typeof self == "object" && self && self.Object === Object && self, ci = oi || ai || Function("return this")(), X = ci, ui = X, li = ui.Symbol, He = li, he = He, Ue = Object.prototype, hi = Ue.hasOwnProperty, fi = Ue.toString, tt = he ? he.toStringTag : void 0;
function pi(e) {
  var t = hi.call(e, tt), r = e[tt];
  try {
    e[tt] = void 0;
    var n = !0;
  } catch {
  }
  var i = fi.call(e);
  return n && (t ? e[tt] = r : delete e[tt]), i;
}
var di = pi, mi = Object.prototype, vi = mi.toString;
function gi(e) {
  return vi.call(e);
}
var _i = gi, fe = He, bi = di, yi = _i, wi = "[object Null]", $i = "[object Undefined]", pe = fe ? fe.toStringTag : void 0;
function Ei(e) {
  return e == null ? e === void 0 ? $i : wi : pe && pe in Object(e) ? bi(e) : yi(e);
}
var $t = Ei;
function Ti(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var H = Ti, Si = $t, Oi = H, Ci = "[object AsyncFunction]", xi = "[object Function]", Ii = "[object GeneratorFunction]", Ai = "[object Proxy]";
function Di(e) {
  if (!Oi(e))
    return !1;
  var t = Si(e);
  return t == xi || t == Ii || t == Ci || t == Ai;
}
var Nt = Di, Pi = X, Mi = Pi["__core-js_shared__"], ki = Mi, Pt = ki, de = function() {
  var e = /[^.]+$/.exec(Pt && Pt.keys && Pt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ji(e) {
  return !!de && de in e;
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
var Ri = zi, Hi = Nt, Ui = Li, Gi = H, Ki = Ri, Bi = /[\\^$.*+?()[\]{}|]/g, Wi = /^\[object .+?Constructor\]$/, Fi = Function.prototype, Yi = Object.prototype, Xi = Fi.toString, qi = Yi.hasOwnProperty, Zi = RegExp(
  "^" + Xi.call(qi).replace(Bi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ji(e) {
  if (!Gi(e) || Ui(e))
    return !1;
  var t = Hi(e) ? Zi : Wi;
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
var Vt = is, ss = Vt, os = X, as = ss(os, "Map"), Ge = as, cs = Vt, us = cs(Object, "create"), Et = us, me = Et;
function ls() {
  this.__data__ = me ? me(null) : {}, this.size = 0;
}
var hs = ls;
function fs(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ps = fs, ds = Et, ms = "__lodash_hash_undefined__", vs = Object.prototype, gs = vs.hasOwnProperty;
function _s(e) {
  var t = this.__data__;
  if (ds) {
    var r = t[e];
    return r === ms ? void 0 : r;
  }
  return gs.call(t, e) ? t[e] : void 0;
}
var bs = _s, ys = Et, ws = Object.prototype, $s = ws.hasOwnProperty;
function Es(e) {
  var t = this.__data__;
  return ys ? t[e] !== void 0 : $s.call(t, e);
}
var Ts = Es, Ss = Et, Os = "__lodash_hash_undefined__";
function Cs(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Ss && t === void 0 ? Os : t, this;
}
var xs = Cs, Is = hs, As = ps, Ds = bs, Ps = Ts, Ms = xs;
function q(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
q.prototype.clear = Is;
q.prototype.delete = As;
q.prototype.get = Ds;
q.prototype.has = Ps;
q.prototype.set = Ms;
var ks = q, ve = ks, js = wt, Ls = Ge;
function Ns() {
  this.size = 0, this.__data__ = {
    hash: new ve(),
    map: new (Ls || js)(),
    string: new ve()
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
var Tt = Us, Gs = Tt;
function Ks(e) {
  var t = Gs(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Bs = Ks, Ws = Tt;
function Fs(e) {
  return Ws(this, e).get(e);
}
var Ys = Fs, Xs = Tt;
function qs(e) {
  return Xs(this, e).has(e);
}
var Zs = qs, Js = Tt;
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
var oo = Z, ao = wt, co = Ge, uo = oo, lo = 200;
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
var fo = ho, po = wt, mo = Jn, vo = ti, go = ri, _o = ii, bo = fo;
function J(e) {
  var t = this.__data__ = new po(e);
  this.size = t.size;
}
J.prototype.clear = mo;
J.prototype.delete = vo;
J.prototype.get = go;
J.prototype.has = _o;
J.prototype.set = bo;
var yo = J, wo = Vt, $o = function() {
  try {
    var e = wo(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ke = $o, ge = Ke;
function Eo(e, t, r) {
  t == "__proto__" && ge ? ge(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var zt = Eo, To = zt, So = bt;
function Oo(e, t, r) {
  (r !== void 0 && !So(e[t], r) || r === void 0 && !(t in e)) && To(e, t, r);
}
var Be = Oo;
function Co(e) {
  return function(t, r, n) {
    for (var i = -1, s = Object(t), o = n(t), c = o.length; c--; ) {
      var u = o[e ? c : ++i];
      if (r(s[u], u, s) === !1)
        break;
    }
    return t;
  };
}
var xo = Co, Io = xo, Ao = Io(), Do = Ao, mt = { exports: {} };
mt.exports;
(function(e, t) {
  var r = X, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, s = i && i.exports === n, o = s ? r.Buffer : void 0, c = o ? o.allocUnsafe : void 0;
  function u(h, l) {
    if (l)
      return h.slice();
    var d = h.length, _ = c ? c(d) : new h.constructor(d);
    return h.copy(_), _;
  }
  e.exports = u;
})(mt, mt.exports);
var Po = mt.exports, Mo = X, ko = Mo.Uint8Array, jo = ko, _e = jo;
function Lo(e) {
  var t = new e.constructor(e.byteLength);
  return new _e(t).set(new _e(e)), t;
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
var Uo = Ho, Go = H, be = Object.create, Ko = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Go(t))
      return {};
    if (be)
      return be(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), Bo = Ko;
function Wo(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Fo = Wo, Yo = Fo, Xo = Yo(Object.getPrototypeOf, Object), We = Xo, qo = Object.prototype;
function Zo(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || qo;
  return e === r;
}
var Fe = Zo, Jo = Bo, Qo = We, ta = Fe;
function ea(e) {
  return typeof e.constructor == "function" && !ta(e) ? Jo(Qo(e)) : {};
}
var ra = ea;
function na(e) {
  return e != null && typeof e == "object";
}
var it = na, ia = $t, sa = it, oa = "[object Arguments]";
function aa(e) {
  return sa(e) && ia(e) == oa;
}
var ca = aa, ye = ca, ua = it, Ye = Object.prototype, la = Ye.hasOwnProperty, ha = Ye.propertyIsEnumerable, fa = ye(/* @__PURE__ */ function() {
  return arguments;
}()) ? ye : function(e) {
  return ua(e) && la.call(e, "callee") && !ha.call(e, "callee");
}, Xe = fa, pa = Array.isArray, qe = pa, da = 9007199254740991;
function ma(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= da;
}
var Ze = ma, va = Nt, ga = Ze;
function _a(e) {
  return e != null && ga(e.length) && !va(e);
}
var Rt = _a, ba = Rt, ya = it;
function wa(e) {
  return ya(e) && ba(e);
}
var $a = wa, vt = { exports: {} };
function Ea() {
  return !1;
}
var Ta = Ea;
vt.exports;
(function(e, t) {
  var r = X, n = Ta, i = t && !t.nodeType && t, s = i && !0 && e && !e.nodeType && e, o = s && s.exports === i, c = o ? r.Buffer : void 0, u = c ? c.isBuffer : void 0, h = u || n;
  e.exports = h;
})(vt, vt.exports);
var Je = vt.exports, Sa = $t, Oa = We, Ca = it, xa = "[object Object]", Ia = Function.prototype, Aa = Object.prototype, Qe = Ia.toString, Da = Aa.hasOwnProperty, Pa = Qe.call(Object);
function Ma(e) {
  if (!Ca(e) || Sa(e) != xa)
    return !1;
  var t = Oa(e);
  if (t === null)
    return !0;
  var r = Da.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Qe.call(r) == Pa;
}
var ka = Ma, ja = $t, La = Ze, Na = it, Va = "[object Arguments]", za = "[object Array]", Ra = "[object Boolean]", Ha = "[object Date]", Ua = "[object Error]", Ga = "[object Function]", Ka = "[object Map]", Ba = "[object Number]", Wa = "[object Object]", Fa = "[object RegExp]", Ya = "[object Set]", Xa = "[object String]", qa = "[object WeakMap]", Za = "[object ArrayBuffer]", Ja = "[object DataView]", Qa = "[object Float32Array]", tc = "[object Float64Array]", ec = "[object Int8Array]", rc = "[object Int16Array]", nc = "[object Int32Array]", ic = "[object Uint8Array]", sc = "[object Uint8ClampedArray]", oc = "[object Uint16Array]", ac = "[object Uint32Array]", v = {};
v[Qa] = v[tc] = v[ec] = v[rc] = v[nc] = v[ic] = v[sc] = v[oc] = v[ac] = !0;
v[Va] = v[za] = v[Za] = v[Ra] = v[Ja] = v[Ha] = v[Ua] = v[Ga] = v[Ka] = v[Ba] = v[Wa] = v[Fa] = v[Ya] = v[Xa] = v[qa] = !1;
function cc(e) {
  return Na(e) && La(e.length) && !!v[ja(e)];
}
var uc = cc;
function lc(e) {
  return function(t) {
    return e(t);
  };
}
var hc = lc, gt = { exports: {} };
gt.exports;
(function(e, t) {
  var r = Re, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, s = i && i.exports === n, o = s && r.process, c = function() {
    try {
      var u = i && i.require && i.require("util").types;
      return u || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(gt, gt.exports);
var fc = gt.exports, pc = uc, dc = hc, we = fc, $e = we && we.isTypedArray, mc = $e ? dc($e) : pc, tr = mc;
function vc(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var er = vc, gc = zt, _c = bt, bc = Object.prototype, yc = bc.hasOwnProperty;
function wc(e, t, r) {
  var n = e[t];
  (!(yc.call(e, t) && _c(n, r)) || r === void 0 && !(t in e)) && gc(e, t, r);
}
var $c = wc, Ec = $c, Tc = zt;
function Sc(e, t, r, n) {
  var i = !r;
  r || (r = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var c = t[s], u = n ? n(r[c], e[c], c, r, e) : void 0;
    u === void 0 && (u = e[c]), i ? Tc(r, c, u) : Ec(r, c, u);
  }
  return r;
}
var Oc = Sc;
function Cc(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var xc = Cc, Ic = 9007199254740991, Ac = /^(?:0|[1-9]\d*)$/;
function Dc(e, t) {
  var r = typeof e;
  return t = t ?? Ic, !!t && (r == "number" || r != "symbol" && Ac.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var rr = Dc, Pc = xc, Mc = Xe, kc = qe, jc = Je, Lc = rr, Nc = tr, Vc = Object.prototype, zc = Vc.hasOwnProperty;
function Rc(e, t) {
  var r = kc(e), n = !r && Mc(e), i = !r && !n && jc(e), s = !r && !n && !i && Nc(e), o = r || n || i || s, c = o ? Pc(e.length, String) : [], u = c.length;
  for (var h in e)
    (t || zc.call(e, h)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    Lc(h, u))) && c.push(h);
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
var Gc = Uc, Kc = H, Bc = Fe, Wc = Gc, Fc = Object.prototype, Yc = Fc.hasOwnProperty;
function Xc(e) {
  if (!Kc(e))
    return Wc(e);
  var t = Bc(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Yc.call(e, n)) || r.push(n);
  return r;
}
var qc = Xc, Zc = Hc, Jc = qc, Qc = Rt;
function tu(e) {
  return Qc(e) ? Zc(e, !0) : Jc(e);
}
var nr = tu, eu = Oc, ru = nr;
function nu(e) {
  return eu(e, ru(e));
}
var iu = nu, Ee = Be, su = Po, ou = Ro, au = Uo, cu = ra, Te = Xe, Se = qe, uu = $a, lu = Je, hu = Nt, fu = H, pu = ka, du = tr, Oe = er, mu = iu;
function vu(e, t, r, n, i, s, o) {
  var c = Oe(e, r), u = Oe(t, r), h = o.get(u);
  if (h) {
    Ee(e, r, h);
    return;
  }
  var l = s ? s(c, u, r + "", e, t, o) : void 0, d = l === void 0;
  if (d) {
    var _ = Se(u), O = !_ && lu(u), T = !_ && !O && du(u);
    l = u, _ || O || T ? Se(c) ? l = c : uu(c) ? l = au(c) : O ? (d = !1, l = su(u, !0)) : T ? (d = !1, l = ou(u, !0)) : l = [] : pu(u) || Te(u) ? (l = c, Te(c) ? l = mu(c) : (!fu(c) || hu(c)) && (l = cu(u))) : d = !1;
  }
  d && (o.set(u, l), i(l, u, n, s, o), o.delete(u)), Ee(e, r, l);
}
var gu = vu, _u = yo, bu = Be, yu = Do, wu = gu, $u = H, Eu = nr, Tu = er;
function ir(e, t, r, n, i) {
  e !== t && yu(t, function(s, o) {
    if (i || (i = new _u()), $u(s))
      wu(e, t, o, r, ir, n, i);
    else {
      var c = n ? n(Tu(e, o), s, o + "", e, t, i) : void 0;
      c === void 0 && (c = s), bu(e, o, c);
    }
  }, Eu);
}
var Su = ir;
function Ou(e) {
  return e;
}
var sr = Ou;
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
var xu = Cu, Iu = xu, Ce = Math.max;
function Au(e, t, r) {
  return t = Ce(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, s = Ce(n.length - t, 0), o = Array(s); ++i < s; )
      o[i] = n[t + i];
    i = -1;
    for (var c = Array(t + 1); ++i < t; )
      c[i] = n[i];
    return c[t] = r(o), Iu(e, this, c);
  };
}
var Du = Au;
function Pu(e) {
  return function() {
    return e;
  };
}
var Mu = Pu, ku = Mu, xe = Ke, ju = sr, Lu = xe ? function(e, t) {
  return xe(e, "toString", {
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
var Uu = Hu, Gu = Nu, Ku = Uu, Bu = Ku(Gu), Wu = Bu, Fu = sr, Yu = Du, Xu = Wu;
function qu(e, t) {
  return Xu(Yu(e, t, Fu), e + "");
}
var Zu = qu, Ju = bt, Qu = Rt, tl = rr, el = H;
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
var al = ol, cl = Su, ul = al, ll = ul(function(e, t, r) {
  cl(e, t, r);
}), hl = ll;
const fl = /* @__PURE__ */ Sn(hl), pl = {
  pan: { enabled: !0 },
  zoom: { enabled: !0, default: 1, min: 1, max: 4, mouseWheelStep: 0.5, zoomButtonStep: 0.5 },
  resetView: { enabled: !0, keyboardShortcut: "r" },
  centerView: { enabled: !1, keyboardShortcut: "c" },
  minimap: { enabled: !0, width: "160px", keyboardShortcut: "m", outlineStyle: "1px solid #ccc", viewportAreaOutlineStyle: "2px solid #333" },
  spring: { enabled: !0, rubberband: !0, rubberbandDistance: 100, transition: "transform 0.25s ease-out" },
  guides: { enabled: !1 },
  fillHeight: !0
}, Ie = {
  pan: [0, 0],
  zoom: 1
}, gl = ({
  children: e,
  settings: t = {}
}) => {
  const r = pr(() => fl({ ...pl }, t), [t]), [n, i] = N(Ie), [s, o] = N(() => {
  }), [c, u] = N(() => {
  }), [h, l] = N(() => {
  }), [d, _] = N(() => {
  }), [O, T] = N(() => {
  });
  return z(() => {
    i({ pan: Ie.pan, zoom: r.zoom.default });
  }, [r.zoom.default]), /* @__PURE__ */ et(ze.Provider, { value: {
    crop: n,
    setCrop: i,
    settings: r,
    zoomOut: s,
    setZoomOut: o,
    zoomIn: c,
    setZoomIn: u,
    resetView: h,
    setResetView: l,
    centerView: d,
    setCenterView: _,
    toggleMinimap: O,
    setToggleMinimap: T
  }, children: e });
};
export {
  vl as Viewer,
  ze as ViewerContext,
  gl as ViewerProvider
};
