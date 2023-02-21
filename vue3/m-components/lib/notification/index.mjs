import { defineComponent as i, resolveComponent as o, openBlock as n, createBlock as l, withCtx as t, renderSlot as m, createVNode as s, resolveDynamicComponent as u, unref as d } from "vue";
const p = (e) => e.replace(/(A-Z)/g, "$1").toLocaleLowerCase(), f = /* @__PURE__ */ i({
  __name: "index",
  props: {
    icon: {
      type: String,
      default: "Bell"
    },
    value: {
      type: [String, Number],
      default: ""
    },
    max: {
      type: Number
    },
    isDot: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (a, v) => {
      const r = o("el-badge"), c = o("el-popover");
      return n(), l(c, {
        placement: "bottom",
        width: 300,
        trigger: "click"
      }, {
        default: t(() => [
          m(a.$slots, "default")
        ]),
        reference: t(() => [
          s(r, {
            value: e.value,
            max: e.max,
            "is-dot": e.isDot,
            style: { cursor: "pointer" }
          }, {
            default: t(() => [
              (n(), l(u(`el-icon-${d(p)(e.icon)}`)))
            ]),
            _: 1
          }, 8, ["value", "max", "is-dot"])
        ]),
        _: 3
      });
    };
  }
}), g = {
  install(e) {
    e.component("notification", f);
  }
};
export {
  g as default
};
