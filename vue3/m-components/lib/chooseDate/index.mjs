import { defineComponent as v, ref as s, resolveComponent as y, openBlock as b, createElementBlock as C, createElementVNode as u, createVNode as c, mergeProps as p } from "vue";
const V = { style: { display: "flex" } }, P = { style: { "margin-right": "20px" } }, T = /* @__PURE__ */ v({
  __name: "index",
  props: {
    startPlaceholder: {
      type: String,
      default: "请选择开始日期"
    },
    endPlaceholder: {
      type: String,
      default: "请选择结束日期"
    },
    disabledToday: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["startChange", "endChange"],
  setup(t, { emit: r }) {
    const m = t, a = s(null), l = s(null), o = s(!0), g = (e) => {
      if (m.disabledToday)
        return e.getTime() < Date.now() - 24 * 60 * 60 * 1e3;
    }, h = (e) => {
      if (a.value)
        return e.getTime() < a.value.getTime();
    }, D = (e) => {
      console.log("changeStartDate", e), e ? (o.value = !1, r("startChange", e)) : (l.value = null, o.value = !0);
    }, f = (e) => {
      console.log("changeEndDate", e), e && r("endChange", {
        startDate: l.value,
        endDate: e
      });
    };
    return (e, n) => {
      const i = y("el-date-picker");
      return b(), C("div", V, [
        u("div", P, [
          c(i, p({
            modelValue: a.value,
            "onUpdate:modelValue": n[0] || (n[0] = (d) => a.value = d),
            type: "date",
            placeholder: t.startPlaceholder,
            disabledDate: g,
            onChange: D
          }, e.$attrs.startOptions), null, 16, ["modelValue", "placeholder"])
        ]),
        u("div", null, [
          c(i, p({
            modelValue: l.value,
            "onUpdate:modelValue": n[1] || (n[1] = (d) => l.value = d),
            type: "date",
            placeholder: t.endPlaceholder,
            disabled: o.value,
            disabledDate: h,
            onChange: f
          }, e.$attrs.endOptions), null, 16, ["modelValue", "placeholder", "disabled"])
        ])
      ]);
    };
  }
}), x = {
  install(t) {
    t.component("choose-date", T);
  }
};
export {
  x as default
};
