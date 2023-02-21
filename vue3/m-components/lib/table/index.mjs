import { defineComponent as I, ref as L, computed as y, resolveComponent as r, resolveDirective as U, openBlock as n, createElementBlock as i, Fragment as u, withDirectives as F, createBlock as _, mergeProps as f, withCtx as k, renderList as b, unref as v, normalizeProps as w, createVNode as g, createElementVNode as j, renderSlot as x, toDisplayString as G, createCommentVNode as $ } from "vue";
const H = {
  key: 0,
  style: { display: "flex", "align-items": "center" }
}, J = { class: "icons" }, K = { key: 1 }, M = {
  key: 0,
  class: "pagination"
}, Q = /* @__PURE__ */ I({
  __name: "index",
  props: {
    options: {
      type: Array,
      required: !0
    },
    data: {
      type: Array,
      required: !0
    },
    isEditRow: {
      type: Boolean,
      default: !1
    },
    editRowIndex: {
      type: String,
      default: ""
    },
    pagination: {
      type: Boolean,
      default: !1
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40]
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    }
  },
  emits: ["comfirm", "cancel", "sizeChange", "currentChange"],
  setup(l, { emit: s }) {
    const a = l, c = L(""), p = y(() => a.options.filter((e) => !e.action)), V = y(() => a.options.filter((e) => e.action)), N = y(() => !a.data || !a.data.length), B = (e) => {
      c.value = e.$index + e.column.id;
    }, E = (e) => {
      c.value = "", s("comfirm", e);
    }, S = (e) => {
      c.value = "", s("cancel", e);
    }, z = (e, A, h) => {
    };
    return (e, A) => {
      const h = r("el-input"), D = r("el-icon-check"), O = r("el-icon-close"), P = r("el-icon-edit"), C = r("el-table-column"), R = r("el-table"), q = U("loading");
      return n(), i(u, null, [
        F((n(), _(R, f({ data: l.data }, e.$attrs, { onRowClick: z }), {
          default: k(() => [
            (n(!0), i(u, null, b(v(p), (o, m) => (n(), _(C, w(f({ key: m }, o)), {
              default: k((t) => [
                c.value === t.$index + t.column.id ? (n(), i("div", H, [
                  g(h, {
                    modelValue: t.row[o.prop],
                    "onUpdate:modelValue": (d) => t.row[o.prop] = d
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  j("div", J, [
                    g(D, {
                      class: "icon-check",
                      onClick: (d) => E(t)
                    }, null, 8, ["onClick"]),
                    g(O, {
                      class: "icon-close",
                      onClick: (d) => S(t)
                    }, null, 8, ["onClick"])
                  ])
                ])) : (n(), i(u, { key: 1 }, [
                  o.slot ? x(e.$slots, o.slot, {
                    key: 0,
                    scope: t
                  }, void 0, !0) : (n(), i("span", K, G(t.row[o.prop]), 1))
                ], 64)),
                o.editable && c.value !== t.$index + t.column.id ? (n(), _(P, {
                  key: 2,
                  class: "edit-icon",
                  onClick: (d) => B(t)
                }, null, 8, ["onClick"])) : $("", !0)
              ]),
              _: 2
            }, 1040))), 128)),
            (n(!0), i(u, null, b(v(V), (o, m) => (n(), _(C, w(f({ key: m }, o)), {
              default: k((t) => [
                x(e.$slots, "action", { scope: t }, void 0, !0)
              ]),
              _: 2
            }, 1040))), 128))
          ]),
          _: 3
        }, 16, ["data"])), [
          [q, v(N)]
        ]),
        l.pagination ? (n(), i("div", M)) : $("", !0)
      ], 64);
    };
  }
});
const T = (l, s) => {
  const a = l.__vccOpts || l;
  for (const [c, p] of s)
    a[c] = p;
  return a;
}, W = /* @__PURE__ */ T(Q, [["__scopeId", "data-v-15455883"]]), Y = {
  install(l) {
    l.component("m-table", W);
  }
};
export {
  Y as default
};
