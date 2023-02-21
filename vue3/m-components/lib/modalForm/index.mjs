import { defineComponent as v, ref as i, watch as p, resolveComponent as m, openBlock as _, createBlock as b, mergeProps as V, withCtx as l, createVNode as g, renderSlot as a } from "vue";
const y = /* @__PURE__ */ v({
  __name: "index",
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      required: !0
    }
  },
  emits: ["update:visible"],
  setup(o, { emit: d }) {
    const r = o, t = i(r.visible), n = i();
    return p(() => r.visible, (e) => {
      t.value = e;
    }), p(() => t.value, (e) => {
      d("update:visible", e);
    }), (e, s) => {
      const u = m("m-form"), f = m("el-dialog");
      return _(), b(f, V({
        modelValue: t.value,
        "onUpdate:modelValue": s[0] || (s[0] = (c) => t.value = c)
      }, e.$attrs), {
        default: l(() => [
          g(u, {
            ref_key: "form",
            ref: n,
            options: o.options
          }, {
            uploadArea: l(() => [
              a(e.$slots, "uploadArea")
            ]),
            uploadTip: l(() => [
              a(e.$slots, "uploadTip")
            ]),
            _: 3
          }, 8, ["options"])
        ]),
        footer: l(() => [
          a(e.$slots, "footer", { form: n.value })
        ]),
        _: 3
      }, 16, ["modelValue"]);
    };
  }
}), k = {
  install(o) {
    o.component("modal-form", y);
  }
};
export {
  k as default
};
