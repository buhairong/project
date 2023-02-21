import { defineComponent as p, useSlots as f, computed as C, openBlock as n, createElementBlock as s, createElementVNode as a, normalizeStyle as d, unref as l, renderSlot as v, toDisplayString as x, createBlock as u, resolveDynamicComponent as i } from "vue";
const y = (e) => e.replace(/(A-Z)/g, "$1").toLocaleLowerCase(), g = { class: "trend" }, m = { key: 1 }, S = { class: "icon" }, w = /* @__PURE__ */ p({
  __name: "index",
  props: {
    type: {
      type: String,
      default: "up"
    },
    text: {
      type: String,
      default: "文字"
    },
    upIconColor: {
      type: String,
      default: "#f5222d"
    },
    downIconColor: {
      type: String,
      default: "#52c41a"
    },
    reverseColor: {
      type: Boolean,
      default: !1
    },
    upTextColor: {
      type: String,
      default: "#000000"
    },
    downTextColor: {
      type: String,
      default: "#000000"
    },
    upIcon: {
      type: String,
      default: "ArrowUp"
    },
    downIcon: {
      type: String,
      default: "ArrowDown"
    }
  },
  setup(e) {
    const t = e, o = f(), r = C(() => t.type === "up" ? t.upTextColor : t.downTextColor);
    return (c, k) => (n(), s("div", g, [
      a("div", {
        class: "text",
        style: d({ color: l(r) })
      }, [
        l(o).default ? v(c.$slots, "default", { key: 0 }, void 0, !0) : (n(), s("div", m, x(e.text), 1))
      ], 4),
      a("div", S, [
        e.type === "up" ? (n(), u(i(`el-icon-${l(y)(e.upIcon)}`), {
          key: 0,
          style: d({ color: e.reverseColor ? "#52c41a" : e.upIconColor })
        }, null, 8, ["style"])) : (n(), u(i(`el-icon-${l(y)(e.downIcon)}`), {
          key: 1,
          style: d({ color: e.reverseColor ? "#f5222d" : e.downIconColor })
        }, null, 8, ["style"]))
      ])
    ]));
  }
});
const _ = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, c] of t)
    o[r] = c;
  return o;
}, I = /* @__PURE__ */ _(w, [["__scopeId", "data-v-8c801fd8"]]), B = {
  install(e) {
    e.component("trend", I);
  }
};
export {
  B as default
};
