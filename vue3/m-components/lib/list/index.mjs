import { defineComponent as N, resolveComponent as a, openBlock as t, createElementBlock as n, createVNode as k, withCtx as u, Fragment as m, renderList as y, createBlock as f, createCommentVNode as l, createElementVNode as p, toDisplayString as i, createTextVNode as V, normalizeClass as $, resolveDynamicComponent as z, unref as B } from "vue";
const w = (c) => c.replace(/(A-Z)/g, "$1").toLocaleLowerCase(), D = { class: "list-tabs__item" }, E = ["onClick"], T = {
  key: 0,
  class: "avatar"
}, q = { class: "content" }, F = {
  key: 0,
  class: "title"
}, O = {
  key: 1,
  class: "time"
}, S = {
  key: 2,
  class: "time"
}, Z = { class: "actions" }, j = ["onClick"], G = {
  key: 0,
  class: "a-icon"
}, H = { class: "a-text" }, J = /* @__PURE__ */ N({
  __name: "index",
  props: {
    list: {
      type: Array,
      required: !0
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  emits: ["clickItem", "clickAction"],
  setup(c, { emit: r }) {
    const _ = (o, d) => {
      r("clickItem", { item: o, index: d });
    }, v = (o, d) => {
      r("clickAction", { item: o, index: d });
    };
    return (o, d) => {
      const g = a("el-avatar"), x = a("el-tag"), C = a("el-scrollbar"), b = a("el-tab-pane"), A = a("el-tabs");
      return t(), n("div", D, [
        k(A, null, {
          default: u(() => [
            (t(!0), n(m, null, y(c.list, (h, I) => (t(), f(b, {
              key: I,
              label: h.title
            }, {
              default: u(() => [
                k(C, { "max-height": "300px" }, {
                  default: u(() => [
                    (t(!0), n(m, null, y(h.content, (e, s) => (t(), n("div", {
                      class: "container",
                      key: s,
                      onClick: (L) => _(e, s)
                    }, [
                      e.avatar ? (t(), n("div", T, [
                        k(g, {
                          size: "small",
                          src: e.avatar
                        }, null, 8, ["src"])
                      ])) : l("", !0),
                      p("div", q, [
                        e.title ? (t(), n("div", F, [
                          p("div", null, i(e.title), 1),
                          e.tag ? (t(), f(x, {
                            key: 0,
                            type: e.tagType,
                            size: "mini"
                          }, {
                            default: u(() => [
                              V(i(e.tag), 1)
                            ]),
                            _: 2
                          }, 1032, ["type"])) : l("", !0)
                        ])) : l("", !0),
                        e.desc ? (t(), n("div", O, i(e.desc), 1)) : l("", !0),
                        e.time ? (t(), n("div", S, i(e.time), 1)) : l("", !0)
                      ])
                    ], 8, E))), 128)),
                    p("div", Z, [
                      (t(!0), n(m, null, y(c.actions, (e, s) => (t(), n("div", {
                        class: $(["a-item", { border: s !== c.actions.length - 1 }]),
                        onClick: (L) => v(e, s),
                        key: s
                      }, [
                        e.icon ? (t(), n("div", G, [
                          (t(), f(z(`el-icon-${B(w)(e.icon)}`)))
                        ])) : l("", !0),
                        p("div", H, i(e.text), 1)
                      ], 10, j))), 128))
                    ])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["label"]))), 128))
          ]),
          _: 1
        })
      ]);
    };
  }
});
const K = (c, r) => {
  const _ = c.__vccOpts || c;
  for (const [v, o] of r)
    _[v] = o;
  return _;
}, M = /* @__PURE__ */ K(J, [["__scopeId", "data-v-040fc9f3"]]), Q = {
  install(c) {
    c.component("notification-list", M);
  }
};
export {
  Q as default
};
