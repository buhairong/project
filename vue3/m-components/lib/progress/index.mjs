import { defineComponent as i, ref as s, onMounted as l, resolveComponent as c, openBlock as m, createBlock as p, mergeProps as u } from "vue";
const f = /* @__PURE__ */ i({
  __name: "index",
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    isAnimation: {
      type: Boolean,
      default: !1
    },
    time: {
      type: Number,
      default: 3e3
    }
  },
  setup(t) {
    const e = t, n = s(0);
    return l(() => {
      if (e.isAnimation) {
        const o = Math.ceil(e.time / e.percentage), a = setInterval(() => {
          n.value += 1, n.value >= e.percentage && (n.value = e.percentage, clearInterval(a));
        }, o);
      } else
        n.value = e.percentage;
    }), (o, a) => {
      const r = c("el-progress");
      return m(), p(r, u({
        percentage: n.value,
        isAnimation: t.isAnimation,
        time: t.time
      }, o.$attrs), null, 16, ["percentage", "isAnimation", "time"]);
    };
  }
}), d = {
  install(t) {
    t.component("m-progress", f);
  }
};
export {
  d as default
};
