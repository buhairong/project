import { defineComponent as T, ref as r, resolveComponent as f, openBlock as h, createElementBlock as S, createElementVNode as o, createVNode as u, mergeProps as c } from "vue";
const v = { style: { display: "flex" } }, y = { style: { "margin-right": "20px" } }, C = /* @__PURE__ */ T({
  __name: "index",
  props: {
    startPlaceholder: {
      type: String,
      default: "请选择开始时间"
    },
    startTimeStart: {
      type: String,
      default: "00:00"
    },
    startTimeEnd: {
      type: String,
      default: "24:00"
    },
    startTimeStep: {
      type: String,
      default: "00:30"
    },
    endPlaceholder: {
      type: String,
      default: "请选择结束时间"
    },
    endTimeStart: {
      type: String,
      default: "00:00"
    },
    endTimeStep: {
      type: String,
      default: "00:30"
    },
    endTimeEnd: {
      type: String,
      default: "24:00"
    }
  },
  emits: ["startChange", "endChange"],
  setup(e, { emit: m }) {
    const n = r(""), a = r(""), d = r(!0), p = (t) => {
      t ? (d.value = !1, m("startChange", t)) : (a.value = "", d.value = !0);
    }, g = (t) => {
      t && m("endChange", {
        startTime: n.value,
        endTime: t
      });
    };
    return (t, l) => {
      const s = f("el-time-select");
      return h(), S("div", v, [
        o("div", y, [
          u(s, c({
            modelValue: n.value,
            "onUpdate:modelValue": l[0] || (l[0] = (i) => n.value = i),
            "max-time": a.value,
            placeholder: e.startPlaceholder,
            start: e.startTimeStart,
            step: e.startTimeStep,
            end: e.startTimeEnd,
            onChange: p
          }, t.$attrs.startOptions), null, 16, ["modelValue", "max-time", "placeholder", "start", "step", "end"])
        ]),
        o("div", null, [
          u(s, c({
            modelValue: a.value,
            "onUpdate:modelValue": l[1] || (l[1] = (i) => a.value = i),
            "min-time": n.value,
            placeholder: e.endPlaceholder,
            start: e.endTimeStart,
            step: e.endTimeStep,
            end: e.endTimeEnd,
            disabled: d.value,
            onChange: g
          }, t.$attrs.endOptions), null, 16, ["modelValue", "min-time", "placeholder", "start", "step", "end", "disabled"])
        ])
      ]);
    };
  }
}), E = {
  install(e) {
    e.component("choose-time", C);
  }
};
export {
  E as default
};
