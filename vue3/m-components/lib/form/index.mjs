import { defineComponent as Yt, ref as Bt, onMounted as zt, resolveComponent as Lt, openBlock as st, createBlock as gt, mergeProps as It, withCtx as Dt, createElementBlock as Ft, Fragment as Ot, renderList as $t, resolveDynamicComponent as Ut, renderSlot as jt, createVNode as Vt, nextTick as Gt } from "vue";
function Kt(rt) {
  return rt && rt.__esModule && Object.prototype.hasOwnProperty.call(rt, "default") ? rt.default : rt;
}
var wt = { exports: {} };
(function(rt, Qt) {
  (function(n, t) {
    rt.exports = t();
  })(window, function() {
    return function(f) {
      var n = {};
      function t(e) {
        if (n[e])
          return n[e].exports;
        var a = n[e] = {
          i: e,
          l: !1,
          exports: {}
        };
        return f[e].call(a.exports, a, a.exports, t), a.l = !0, a.exports;
      }
      return t.m = f, t.c = n, t.d = function(e, a, r) {
        t.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: r });
      }, t.r = function(e) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
      }, t.t = function(e, a) {
        if (a & 1 && (e = t(e)), a & 8 || a & 4 && typeof e == "object" && e && e.__esModule)
          return e;
        var r = /* @__PURE__ */ Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), a & 2 && typeof e != "string")
          for (var o in e)
            t.d(r, o, function(v) {
              return e[v];
            }.bind(null, o));
        return r;
      }, t.n = function(e) {
        var a = e && e.__esModule ? function() {
          return e.default;
        } : function() {
          return e;
        };
        return t.d(a, "a", a), a;
      }, t.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a);
      }, t.p = "", t(t.s = 141);
    }([
      function(f, n) {
        function t(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }
        f.exports = t;
      },
      function(f, n, t) {
        f.exports = t(142);
      },
      function(f, n, t) {
        t.r(n), t.d(n, "__extends", function() {
          return a;
        }), t.d(n, "__assign", function() {
          return r;
        }), t.d(n, "__rest", function() {
          return o;
        }), t.d(n, "__decorate", function() {
          return v;
        }), t.d(n, "__param", function() {
          return A;
        }), t.d(n, "__metadata", function() {
          return d;
        }), t.d(n, "__awaiter", function() {
          return m;
        }), t.d(n, "__generator", function() {
          return s;
        }), t.d(n, "__createBinding", function() {
          return i;
        }), t.d(n, "__exportStar", function() {
          return u;
        }), t.d(n, "__values", function() {
          return l;
        }), t.d(n, "__read", function() {
          return p;
        }), t.d(n, "__spread", function() {
          return c;
        }), t.d(n, "__spreadArrays", function() {
          return h;
        }), t.d(n, "__spreadArray", function() {
          return y;
        }), t.d(n, "__await", function() {
          return g;
        }), t.d(n, "__asyncGenerator", function() {
          return x;
        }), t.d(n, "__asyncDelegator", function() {
          return S;
        }), t.d(n, "__asyncValues", function() {
          return T;
        }), t.d(n, "__makeTemplateObject", function() {
          return P;
        }), t.d(n, "__importStar", function() {
          return E;
        }), t.d(n, "__importDefault", function() {
          return D;
        }), t.d(n, "__classPrivateFieldGet", function() {
          return R;
        }), t.d(n, "__classPrivateFieldSet", function() {
          return M;
        });
        var e = function(I, N) {
          return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(B, F) {
            B.__proto__ = F;
          } || function(B, F) {
            for (var O in F)
              Object.prototype.hasOwnProperty.call(F, O) && (B[O] = F[O]);
          }, e(I, N);
        };
        function a(I, N) {
          if (typeof N != "function" && N !== null)
            throw new TypeError("Class extends value " + String(N) + " is not a constructor or null");
          e(I, N);
          function B() {
            this.constructor = I;
          }
          I.prototype = N === null ? Object.create(N) : (B.prototype = N.prototype, new B());
        }
        var r = function() {
          return r = Object.assign || function(N) {
            for (var B, F = 1, O = arguments.length; F < O; F++) {
              B = arguments[F];
              for (var H in B)
                Object.prototype.hasOwnProperty.call(B, H) && (N[H] = B[H]);
            }
            return N;
          }, r.apply(this, arguments);
        };
        function o(I, N) {
          var B = {};
          for (var F in I)
            Object.prototype.hasOwnProperty.call(I, F) && N.indexOf(F) < 0 && (B[F] = I[F]);
          if (I != null && typeof Object.getOwnPropertySymbols == "function")
            for (var O = 0, F = Object.getOwnPropertySymbols(I); O < F.length; O++)
              N.indexOf(F[O]) < 0 && Object.prototype.propertyIsEnumerable.call(I, F[O]) && (B[F[O]] = I[F[O]]);
          return B;
        }
        function v(I, N, B, F) {
          var O = arguments.length, H = O < 3 ? N : F === null ? F = Object.getOwnPropertyDescriptor(N, B) : F, L;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
            H = Reflect.decorate(I, N, B, F);
          else
            for (var U = I.length - 1; U >= 0; U--)
              (L = I[U]) && (H = (O < 3 ? L(H) : O > 3 ? L(N, B, H) : L(N, B)) || H);
          return O > 3 && H && Object.defineProperty(N, B, H), H;
        }
        function A(I, N) {
          return function(B, F) {
            N(B, F, I);
          };
        }
        function d(I, N) {
          if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
            return Reflect.metadata(I, N);
        }
        function m(I, N, B, F) {
          function O(H) {
            return H instanceof B ? H : new B(function(L) {
              L(H);
            });
          }
          return new (B || (B = Promise))(function(H, L) {
            function U(K) {
              try {
                j(F.next(K));
              } catch (V) {
                L(V);
              }
            }
            function z(K) {
              try {
                j(F.throw(K));
              } catch (V) {
                L(V);
              }
            }
            function j(K) {
              K.done ? H(K.value) : O(K.value).then(U, z);
            }
            j((F = F.apply(I, N || [])).next());
          });
        }
        function s(I, N) {
          var B = { label: 0, sent: function() {
            if (H[0] & 1)
              throw H[1];
            return H[1];
          }, trys: [], ops: [] }, F, O, H, L;
          return L = { next: U(0), throw: U(1), return: U(2) }, typeof Symbol == "function" && (L[Symbol.iterator] = function() {
            return this;
          }), L;
          function U(j) {
            return function(K) {
              return z([j, K]);
            };
          }
          function z(j) {
            if (F)
              throw new TypeError("Generator is already executing.");
            for (; B; )
              try {
                if (F = 1, O && (H = j[0] & 2 ? O.return : j[0] ? O.throw || ((H = O.return) && H.call(O), 0) : O.next) && !(H = H.call(O, j[1])).done)
                  return H;
                switch (O = 0, H && (j = [j[0] & 2, H.value]), j[0]) {
                  case 0:
                  case 1:
                    H = j;
                    break;
                  case 4:
                    return B.label++, { value: j[1], done: !1 };
                  case 5:
                    B.label++, O = j[1], j = [0];
                    continue;
                  case 7:
                    j = B.ops.pop(), B.trys.pop();
                    continue;
                  default:
                    if (H = B.trys, !(H = H.length > 0 && H[H.length - 1]) && (j[0] === 6 || j[0] === 2)) {
                      B = 0;
                      continue;
                    }
                    if (j[0] === 3 && (!H || j[1] > H[0] && j[1] < H[3])) {
                      B.label = j[1];
                      break;
                    }
                    if (j[0] === 6 && B.label < H[1]) {
                      B.label = H[1], H = j;
                      break;
                    }
                    if (H && B.label < H[2]) {
                      B.label = H[2], B.ops.push(j);
                      break;
                    }
                    H[2] && B.ops.pop(), B.trys.pop();
                    continue;
                }
                j = N.call(I, B);
              } catch (K) {
                j = [6, K], O = 0;
              } finally {
                F = H = 0;
              }
            if (j[0] & 5)
              throw j[1];
            return { value: j[0] ? j[1] : void 0, done: !0 };
          }
        }
        var i = Object.create ? function(I, N, B, F) {
          F === void 0 && (F = B), Object.defineProperty(I, F, { enumerable: !0, get: function() {
            return N[B];
          } });
        } : function(I, N, B, F) {
          F === void 0 && (F = B), I[F] = N[B];
        };
        function u(I, N) {
          for (var B in I)
            B !== "default" && !Object.prototype.hasOwnProperty.call(N, B) && i(N, I, B);
        }
        function l(I) {
          var N = typeof Symbol == "function" && Symbol.iterator, B = N && I[N], F = 0;
          if (B)
            return B.call(I);
          if (I && typeof I.length == "number")
            return {
              next: function() {
                return I && F >= I.length && (I = void 0), { value: I && I[F++], done: !I };
              }
            };
          throw new TypeError(N ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function p(I, N) {
          var B = typeof Symbol == "function" && I[Symbol.iterator];
          if (!B)
            return I;
          var F = B.call(I), O, H = [], L;
          try {
            for (; (N === void 0 || N-- > 0) && !(O = F.next()).done; )
              H.push(O.value);
          } catch (U) {
            L = { error: U };
          } finally {
            try {
              O && !O.done && (B = F.return) && B.call(F);
            } finally {
              if (L)
                throw L.error;
            }
          }
          return H;
        }
        function c() {
          for (var I = [], N = 0; N < arguments.length; N++)
            I = I.concat(p(arguments[N]));
          return I;
        }
        function h() {
          for (var I = 0, N = 0, B = arguments.length; N < B; N++)
            I += arguments[N].length;
          for (var F = Array(I), O = 0, N = 0; N < B; N++)
            for (var H = arguments[N], L = 0, U = H.length; L < U; L++, O++)
              F[O] = H[L];
          return F;
        }
        function y(I, N) {
          for (var B = 0, F = N.length, O = I.length; B < F; B++, O++)
            I[O] = N[B];
          return I;
        }
        function g(I) {
          return this instanceof g ? (this.v = I, this) : new g(I);
        }
        function x(I, N, B) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var F = B.apply(I, N || []), O, H = [];
          return O = {}, L("next"), L("throw"), L("return"), O[Symbol.asyncIterator] = function() {
            return this;
          }, O;
          function L(Q) {
            F[Q] && (O[Q] = function(w) {
              return new Promise(function(G, X) {
                H.push([Q, w, G, X]) > 1 || U(Q, w);
              });
            });
          }
          function U(Q, w) {
            try {
              z(F[Q](w));
            } catch (G) {
              V(H[0][3], G);
            }
          }
          function z(Q) {
            Q.value instanceof g ? Promise.resolve(Q.value.v).then(j, K) : V(H[0][2], Q);
          }
          function j(Q) {
            U("next", Q);
          }
          function K(Q) {
            U("throw", Q);
          }
          function V(Q, w) {
            Q(w), H.shift(), H.length && U(H[0][0], H[0][1]);
          }
        }
        function S(I) {
          var N, B;
          return N = {}, F("next"), F("throw", function(O) {
            throw O;
          }), F("return"), N[Symbol.iterator] = function() {
            return this;
          }, N;
          function F(O, H) {
            N[O] = I[O] ? function(L) {
              return (B = !B) ? { value: g(I[O](L)), done: O === "return" } : H ? H(L) : L;
            } : H;
          }
        }
        function T(I) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var N = I[Symbol.asyncIterator], B;
          return N ? N.call(I) : (I = typeof l == "function" ? l(I) : I[Symbol.iterator](), B = {}, F("next"), F("throw"), F("return"), B[Symbol.asyncIterator] = function() {
            return this;
          }, B);
          function F(H) {
            B[H] = I[H] && function(L) {
              return new Promise(function(U, z) {
                L = I[H](L), O(U, z, L.done, L.value);
              });
            };
          }
          function O(H, L, U, z) {
            Promise.resolve(z).then(function(j) {
              H({ value: j, done: U });
            }, L);
          }
        }
        function P(I, N) {
          return Object.defineProperty ? Object.defineProperty(I, "raw", { value: N }) : I.raw = N, I;
        }
        var C = Object.create ? function(I, N) {
          Object.defineProperty(I, "default", { enumerable: !0, value: N });
        } : function(I, N) {
          I.default = N;
        };
        function E(I) {
          if (I && I.__esModule)
            return I;
          var N = {};
          if (I != null)
            for (var B in I)
              B !== "default" && Object.prototype.hasOwnProperty.call(I, B) && i(N, I, B);
          return C(N, I), N;
        }
        function D(I) {
          return I && I.__esModule ? I : { default: I };
        }
        function R(I, N) {
          if (!N.has(I))
            throw new TypeError("attempted to get private field on non-instance");
          return N.get(I);
        }
        function M(I, N, B) {
          if (!N.has(I))
            throw new TypeError("attempted to set private field on non-instance");
          return N.set(I, B), B;
        }
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(89)), o = e(t(4)), v = e(t(26)), A = e(t(17)), d = e(t(121)), m = e(t(27)), s = e(t(91)), i = e(t(70)), u = e(t(28)), l = e(t(57));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.DomElement = void 0;
        var p = t(2), c = t(6), h = [];
        function y(C) {
          var E = document.createElement("div");
          E.innerHTML = C;
          var D = E.children;
          return c.toArray(D);
        }
        function g(C) {
          return C ? C instanceof HTMLCollection || C instanceof NodeList : !1;
        }
        function x(C) {
          var E = document.querySelectorAll(C);
          return c.toArray(E);
        }
        function S(C) {
          var E = [], D = [];
          return (0, r.default)(C) ? E = C : E = C.split(";"), (0, o.default)(E).call(E, function(R) {
            var M, I = (0, v.default)(M = R.split(":")).call(M, function(N) {
              return (0, A.default)(N).call(N);
            });
            I.length === 2 && D.push(I[0] + ":" + I[1]);
          }), D;
        }
        var T = function() {
          function C(E) {
            if (this.elems = [], this.length = this.elems.length, this.dataSource = new d.default(), !!E) {
              if (E instanceof C)
                return E;
              var D = [], R = E instanceof Node ? E.nodeType : -1;
              if (this.selector = E, R === 1 || R === 9)
                D = [E];
              else if (g(E))
                D = c.toArray(E);
              else if (E instanceof Array)
                D = E;
              else if (typeof E == "string") {
                var M, I = (0, A.default)(M = E.replace(`/
/mg`, "")).call(M);
                (0, m.default)(I).call(I, "<") === 0 ? D = y(I) : D = x(I);
              }
              var N = D.length;
              if (!N)
                return this;
              for (var B = 0; B < N; B++)
                this.elems.push(D[B]);
              this.length = N;
            }
          }
          return (0, a.default)(C.prototype, "id", {
            get: function() {
              return this.elems[0].id;
            },
            enumerable: !1,
            configurable: !0
          }), C.prototype.forEach = function(E) {
            for (var D = 0; D < this.length; D++) {
              var R = this.elems[D], M = E.call(R, R, D);
              if (M === !1)
                break;
            }
            return this;
          }, C.prototype.clone = function(E) {
            var D;
            E === void 0 && (E = !1);
            var R = [];
            return (0, o.default)(D = this.elems).call(D, function(M) {
              R.push(M.cloneNode(!!E));
            }), P(R);
          }, C.prototype.get = function(E) {
            E === void 0 && (E = 0);
            var D = this.length;
            return E >= D && (E = E % D), P(this.elems[E]);
          }, C.prototype.first = function() {
            return this.get(0);
          }, C.prototype.last = function() {
            var E = this.length;
            return this.get(E - 1);
          }, C.prototype.on = function(E, D, R) {
            var M;
            return E ? (typeof D == "function" && (R = D, D = ""), (0, o.default)(M = this).call(M, function(I) {
              if (!D) {
                I.addEventListener(E, R);
                return;
              }
              var N = function(F) {
                var O = F.target;
                O.matches(D) && R.call(O, F);
              };
              I.addEventListener(E, N), h.push({
                elem: I,
                selector: D,
                fn: R,
                agentFn: N
              });
            })) : this;
          }, C.prototype.off = function(E, D, R) {
            var M;
            return E ? (typeof D == "function" && (R = D, D = ""), (0, o.default)(M = this).call(M, function(I) {
              if (D) {
                for (var N = -1, B = 0; B < h.length; B++) {
                  var F = h[B];
                  if (F.selector === D && F.fn === R && F.elem === I) {
                    N = B;
                    break;
                  }
                }
                if (N !== -1) {
                  var O = (0, s.default)(h).call(h, N, 1)[0].agentFn;
                  I.removeEventListener(E, O);
                }
              } else
                I.removeEventListener(E, R);
            })) : this;
          }, C.prototype.attr = function(E, D) {
            var R;
            return D == null ? this.elems[0].getAttribute(E) || "" : (0, o.default)(R = this).call(R, function(M) {
              M.setAttribute(E, D);
            });
          }, C.prototype.removeAttr = function(E) {
            var D;
            (0, o.default)(D = this).call(D, function(R) {
              R.removeAttribute(E);
            });
          }, C.prototype.addClass = function(E) {
            var D;
            return E ? (0, o.default)(D = this).call(D, function(R) {
              if (R.className) {
                var M = R.className.split(/\s/);
                M = (0, i.default)(M).call(M, function(I) {
                  return !!(0, A.default)(I).call(I);
                }), (0, m.default)(M).call(M, E) < 0 && M.push(E), R.className = M.join(" ");
              } else
                R.className = E;
            }) : this;
          }, C.prototype.removeClass = function(E) {
            var D;
            return E ? (0, o.default)(D = this).call(D, function(R) {
              if (R.className) {
                var M = R.className.split(/\s/);
                M = (0, i.default)(M).call(M, function(I) {
                  return I = (0, A.default)(I).call(I), !(!I || I === E);
                }), R.className = M.join(" ");
              }
            }) : this;
          }, C.prototype.hasClass = function(E) {
            if (!E)
              return !1;
            var D = this.elems[0];
            if (!D.className)
              return !1;
            var R = D.className.split(/\s/);
            return (0, u.default)(R).call(R, E);
          }, C.prototype.css = function(E, D) {
            var R, M;
            return D == "" ? M = "" : M = E + ":" + D + ";", (0, o.default)(R = this).call(R, function(I) {
              var N, B = (0, A.default)(N = I.getAttribute("style") || "").call(N);
              if (B) {
                var F = S(B);
                F = (0, v.default)(F).call(F, function(O) {
                  return (0, m.default)(O).call(O, E) === 0 ? M : O;
                }), M != "" && (0, m.default)(F).call(F, M) < 0 && F.push(M), M == "" && (F = S(F)), I.setAttribute("style", F.join("; "));
              } else
                I.setAttribute("style", M);
            });
          }, C.prototype.getBoundingClientRect = function() {
            var E = this.elems[0];
            return E.getBoundingClientRect();
          }, C.prototype.show = function() {
            return this.css("display", "block");
          }, C.prototype.hide = function() {
            return this.css("display", "none");
          }, C.prototype.children = function() {
            var E = this.elems[0];
            return E ? P(E.children) : null;
          }, C.prototype.childNodes = function() {
            var E = this.elems[0];
            return E ? P(E.childNodes) : null;
          }, C.prototype.replaceChildAll = function(E) {
            for (var D = this.getNode(), R = this.elems[0]; R.hasChildNodes(); )
              D.firstChild && R.removeChild(D.firstChild);
            this.append(E);
          }, C.prototype.append = function(E) {
            var D;
            return (0, o.default)(D = this).call(D, function(R) {
              (0, o.default)(E).call(E, function(M) {
                R.appendChild(M);
              });
            });
          }, C.prototype.remove = function() {
            var E;
            return (0, o.default)(E = this).call(E, function(D) {
              if (D.remove)
                D.remove();
              else {
                var R = D.parentElement;
                R && R.removeChild(D);
              }
            });
          }, C.prototype.isContain = function(E) {
            var D = this.elems[0], R = E.elems[0];
            return D.contains(R);
          }, C.prototype.getNodeName = function() {
            var E = this.elems[0];
            return E.nodeName;
          }, C.prototype.getNode = function(E) {
            E === void 0 && (E = 0);
            var D;
            return D = this.elems[E], D;
          }, C.prototype.find = function(E) {
            var D = this.elems[0];
            return P(D.querySelectorAll(E));
          }, C.prototype.text = function(E) {
            if (E) {
              var R;
              return (0, o.default)(R = this).call(R, function(M) {
                M.innerHTML = E;
              });
            } else {
              var D = this.elems[0];
              return D.innerHTML.replace(/<[^>]+>/g, function() {
                return "";
              });
            }
          }, C.prototype.html = function(E) {
            var D = this.elems[0];
            return E ? (D.innerHTML = E, this) : D.innerHTML;
          }, C.prototype.val = function() {
            var E, D = this.elems[0];
            return (0, A.default)(E = D.value).call(E);
          }, C.prototype.focus = function() {
            var E;
            return (0, o.default)(E = this).call(E, function(D) {
              D.focus();
            });
          }, C.prototype.prev = function() {
            var E = this.elems[0];
            return P(E.previousElementSibling);
          }, C.prototype.next = function() {
            var E = this.elems[0];
            return P(E.nextElementSibling);
          }, C.prototype.getNextSibling = function() {
            var E = this.elems[0];
            return P(E.nextSibling);
          }, C.prototype.parent = function() {
            var E = this.elems[0];
            return P(E.parentElement);
          }, C.prototype.parentUntil = function(E, D) {
            var R = D || this.elems[0];
            if (R.nodeName === "BODY")
              return null;
            var M = R.parentElement;
            return M === null ? null : M.matches(E) ? P(M) : this.parentUntil(E, M);
          }, C.prototype.parentUntilEditor = function(E, D, R) {
            var M = R || this.elems[0];
            if (P(M).equal(D.$textContainerElem) || P(M).equal(D.$toolbarElem))
              return null;
            var I = M.parentElement;
            return I === null ? null : I.matches(E) ? P(I) : this.parentUntilEditor(E, D, I);
          }, C.prototype.equal = function(E) {
            return E instanceof C ? this.elems[0] === E.elems[0] : E instanceof HTMLElement ? this.elems[0] === E : !1;
          }, C.prototype.insertBefore = function(E) {
            var D, R = P(E), M = R.elems[0];
            return M ? (0, o.default)(D = this).call(D, function(I) {
              var N = M.parentNode;
              N == null || N.insertBefore(I, M);
            }) : this;
          }, C.prototype.insertAfter = function(E) {
            var D, R = P(E), M = R.elems[0], I = M && M.nextSibling;
            return M ? (0, o.default)(D = this).call(D, function(N) {
              var B = M.parentNode;
              I ? B.insertBefore(N, I) : B.appendChild(N);
            }) : this;
          }, C.prototype.data = function(E, D) {
            if (D != null)
              this.dataSource.set(E, D);
            else
              return this.dataSource.get(E);
          }, C.prototype.getNodeTop = function(E) {
            if (this.length < 1)
              return this;
            var D = this.parent();
            return E.$textElem.equal(this) || E.$textElem.equal(D) ? this : (D.prior = this, D.getNodeTop(E));
          }, C.prototype.getOffsetData = function() {
            var E = this.elems[0];
            return {
              top: E.offsetTop,
              left: E.offsetLeft,
              width: E.offsetWidth,
              height: E.offsetHeight,
              parent: E.offsetParent
            };
          }, C.prototype.scrollTop = function(E) {
            var D = this.elems[0];
            D.scrollTo({
              top: E
            });
          }, C;
        }();
        n.DomElement = T;
        function P() {
          for (var C = [], E = 0; E < arguments.length; E++)
            C[E] = arguments[E];
          return new ((0, l.default)(T).apply(T, p.__spreadArrays([void 0], C)))();
        }
        n.default = P;
      },
      function(f, n, t) {
        f.exports = t(180);
      },
      function(f, n, t) {
        var e = t(8), a = t(71).f, r = t(101), o = t(9), v = t(40), A = t(19), d = t(16), m = function(s) {
          var i = function(u, l, p) {
            if (this instanceof s) {
              switch (arguments.length) {
                case 0:
                  return new s();
                case 1:
                  return new s(u);
                case 2:
                  return new s(u, l);
              }
              return new s(u, l, p);
            }
            return s.apply(this, arguments);
          };
          return i.prototype = s.prototype, i;
        };
        f.exports = function(s, i) {
          var u = s.target, l = s.global, p = s.stat, c = s.proto, h = l ? e : p ? e[u] : (e[u] || {}).prototype, y = l ? o : o[u] || (o[u] = {}), g = y.prototype, x, S, T, P, C, E, D, R, M;
          for (P in i)
            x = r(l ? P : u + (p ? "." : "#") + P, s.forced), S = !x && h && d(h, P), E = y[P], S && (s.noTargetGet ? (M = a(h, P), D = M && M.value) : D = h[P]), C = S && D ? D : i[P], !(S && typeof E == typeof C) && (s.bind && S ? R = v(C, e) : s.wrap && S ? R = m(C) : c && typeof C == "function" ? R = v(Function.call, C) : R = C, (s.sham || C && C.sham || E && E.sham) && A(R, "sham", !0), y[P] = R, c && (T = u + "Prototype", d(o, T) || A(o, T, {}), o[T][P] = C, s.real && g && !g[P] && A(g, P, C)));
        };
      },
      function(f, n, t) {
        var e = t(0), a = e(t(92)), r = e(t(1)), o = e(t(256)), v = e(t(45)), A = e(t(46)), d = e(t(89)), m = e(t(26));
        (0, r.default)(n, "__esModule", {
          value: !0
        }), n.hexToRgb = n.getRandomCode = n.toArray = n.deepClone = n.isFunction = n.debounce = n.throttle = n.arrForEach = n.forEach = n.replaceSpecialSymbol = n.replaceHtmlSymbol = n.getRandom = n.UA = void 0;
        var s = t(2), i = function() {
          function E() {
            this._ua = navigator.userAgent;
            var D = this._ua.match(/(Edge?)\/(\d+)/);
            this.isOldEdge = !!(D && D[1] == "Edge" && (0, o.default)(D[2]) < 19), this.isFirefox = !!(/Firefox\/\d+/.test(this._ua) && !/Seamonkey\/\d+/.test(this._ua));
          }
          return E.prototype.isIE = function() {
            return "ActiveXObject" in window;
          }, E.prototype.isWebkit = function() {
            return /webkit/i.test(this._ua);
          }, E;
        }();
        n.UA = new i();
        function u(E) {
          var D;
          return E === void 0 && (E = ""), E + (0, v.default)(D = Math.random().toString()).call(D, 2);
        }
        n.getRandom = u;
        function l(E) {
          return E.replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;").replace(/(\r\n|\r|\n)/g, "<br/>");
        }
        n.replaceHtmlSymbol = l;
        function p(E) {
          return E.replace(/&lt;/gm, "<").replace(/&gt;/gm, ">").replace(/&quot;/gm, '"');
        }
        n.replaceSpecialSymbol = p;
        function c(E, D) {
          for (var R in E)
            if (Object.prototype.hasOwnProperty.call(E, R)) {
              var M = D(R, E[R]);
              if (M === !1)
                break;
            }
        }
        n.forEach = c;
        function h(E, D) {
          var R, M, I, N = E.length || 0;
          for (R = 0; R < N && (M = E[R], I = D.call(E, M, R), I !== !1); R++)
            ;
        }
        n.arrForEach = h;
        function y(E, D) {
          D === void 0 && (D = 200);
          var R = !1;
          return function() {
            for (var M = this, I = [], N = 0; N < arguments.length; N++)
              I[N] = arguments[N];
            R || (R = !0, (0, A.default)(function() {
              R = !1, E.call.apply(E, s.__spreadArrays([M], I));
            }, D));
          };
        }
        n.throttle = y;
        function g(E, D) {
          D === void 0 && (D = 200);
          var R = 0;
          return function() {
            for (var M = this, I = [], N = 0; N < arguments.length; N++)
              I[N] = arguments[N];
            R && window.clearTimeout(R), R = (0, A.default)(function() {
              R = 0, E.call.apply(E, s.__spreadArrays([M], I));
            }, D);
          };
        }
        n.debounce = g;
        function x(E) {
          return typeof E == "function";
        }
        n.isFunction = x;
        function S(E) {
          if ((0, a.default)(E) !== "object" || typeof E == "function" || E === null)
            return E;
          var D;
          (0, d.default)(E) && (D = []), (0, d.default)(E) || (D = {});
          for (var R in E)
            Object.prototype.hasOwnProperty.call(E, R) && (D[R] = S(E[R]));
          return D;
        }
        n.deepClone = S;
        function T(E) {
          return (0, v.default)(Array.prototype).call(E);
        }
        n.toArray = T;
        function P() {
          var E;
          return (0, v.default)(E = Math.random().toString(36)).call(E, -5);
        }
        n.getRandomCode = P;
        function C(E) {
          var D = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(E);
          if (D == null)
            return null;
          var R = (0, m.default)(D).call(D, function(B) {
            return (0, o.default)(B, 16);
          }), M = R[1], I = R[2], N = R[3];
          return "rgb(" + M + ", " + I + ", " + N + ")";
        }
        n.hexToRgb = C;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.EMPTY_P_REGEX = n.EMPTY_P_LAST_REGEX = n.EMPTY_P = n.urlRegex = n.EMPTY_FN = void 0;
        function r() {
        }
        n.EMPTY_FN = r, n.urlRegex = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/g, n.EMPTY_P = '<p data-we-empty-p=""><br></p>', n.EMPTY_P_LAST_REGEX = /<p data-we-empty-p=""><br\/?><\/p>$/gim, n.EMPTY_P_REGEX = /<p data-we-empty-p="">/gim;
      },
      function(f, n, t) {
        (function(e) {
          var a = function(r) {
            return r && r.Math == Math && r;
          };
          f.exports = a(typeof globalThis == "object" && globalThis) || a(typeof window == "object" && window) || a(typeof self == "object" && self) || a(typeof e == "object" && e) || Function("return this")();
        }).call(this, t(145));
      },
      function(f, n) {
        f.exports = {};
      },
      function(f, n, t) {
        var e = t(8), a = t(74), r = t(16), o = t(64), v = t(76), A = t(106), d = a("wks"), m = e.Symbol, s = A ? m : m && m.withoutSetter || o;
        f.exports = function(i) {
          return r(d, i) || (v && r(m, i) ? d[i] = m[i] : d[i] = s("Symbol." + i)), d[i];
        };
      },
      function(f, n) {
        f.exports = function(t) {
          try {
            return !!t();
          } catch {
            return !0;
          }
        };
      },
      function(f, n, t) {
        var e = t(9), a = t(16), r = t(93), o = t(18).f;
        f.exports = function(v) {
          var A = e.Symbol || (e.Symbol = {});
          a(A, v) || o(A, v, {
            value: r.f(v)
          });
        };
      },
      function(f, n) {
        f.exports = function(t) {
          return typeof t == "object" ? t !== null : typeof t == "function";
        };
      },
      function(f, n, t) {
        var e = t(11);
        f.exports = !e(function() {
          return Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1] != 7;
        });
      },
      function(f, n, t) {
        var e = t(9);
        f.exports = function(a) {
          return e[a + "Prototype"];
        };
      },
      function(f, n) {
        var t = {}.hasOwnProperty;
        f.exports = function(e, a) {
          return t.call(e, a);
        };
      },
      function(f, n, t) {
        f.exports = t(192);
      },
      function(f, n, t) {
        var e = t(14), a = t(100), r = t(25), o = t(60), v = Object.defineProperty;
        n.f = e ? v : function(d, m, s) {
          if (r(d), m = o(m, !0), r(s), a)
            try {
              return v(d, m, s);
            } catch {
            }
          if ("get" in s || "set" in s)
            throw TypeError("Accessors not supported");
          return "value" in s && (d[m] = s.value), d;
        };
      },
      function(f, n, t) {
        var e = t(14), a = t(18), r = t(48);
        f.exports = e ? function(o, v, A) {
          return a.f(o, v, r(1, A));
        } : function(o, v, A) {
          return o[v] = A, o;
        };
      },
      function(f, n, t) {
        var e = function() {
          var h;
          return function() {
            return typeof h > "u" && (h = Boolean(window && document && document.all && !window.atob)), h;
          };
        }(), a = function() {
          var h = {};
          return function(g) {
            if (typeof h[g] > "u") {
              var x = document.querySelector(g);
              if (window.HTMLIFrameElement && x instanceof window.HTMLIFrameElement)
                try {
                  x = x.contentDocument.head;
                } catch {
                  x = null;
                }
              h[g] = x;
            }
            return h[g];
          };
        }(), r = [];
        function o(c) {
          for (var h = -1, y = 0; y < r.length; y++)
            if (r[y].identifier === c) {
              h = y;
              break;
            }
          return h;
        }
        function v(c, h) {
          for (var y = {}, g = [], x = 0; x < c.length; x++) {
            var S = c[x], T = h.base ? S[0] + h.base : S[0], P = y[T] || 0, C = "".concat(T, " ").concat(P);
            y[T] = P + 1;
            var E = o(C), D = {
              css: S[1],
              media: S[2],
              sourceMap: S[3]
            };
            E !== -1 ? (r[E].references++, r[E].updater(D)) : r.push({
              identifier: C,
              updater: p(D, h),
              references: 1
            }), g.push(C);
          }
          return g;
        }
        function A(c) {
          var h = document.createElement("style"), y = c.attributes || {};
          if (typeof y.nonce > "u") {
            var g = t.nc;
            g && (y.nonce = g);
          }
          if (Object.keys(y).forEach(function(S) {
            h.setAttribute(S, y[S]);
          }), typeof c.insert == "function")
            c.insert(h);
          else {
            var x = a(c.insert || "head");
            if (!x)
              throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            x.appendChild(h);
          }
          return h;
        }
        function d(c) {
          if (c.parentNode === null)
            return !1;
          c.parentNode.removeChild(c);
        }
        var m = function() {
          var h = [];
          return function(g, x) {
            return h[g] = x, h.filter(Boolean).join(`
`);
          };
        }();
        function s(c, h, y, g) {
          var x = y ? "" : g.media ? "@media ".concat(g.media, " {").concat(g.css, "}") : g.css;
          if (c.styleSheet)
            c.styleSheet.cssText = m(h, x);
          else {
            var S = document.createTextNode(x), T = c.childNodes;
            T[h] && c.removeChild(T[h]), T.length ? c.insertBefore(S, T[h]) : c.appendChild(S);
          }
        }
        function i(c, h, y) {
          var g = y.css, x = y.media, S = y.sourceMap;
          if (x ? c.setAttribute("media", x) : c.removeAttribute("media"), S && typeof btoa < "u" && (g += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(S)))), " */")), c.styleSheet)
            c.styleSheet.cssText = g;
          else {
            for (; c.firstChild; )
              c.removeChild(c.firstChild);
            c.appendChild(document.createTextNode(g));
          }
        }
        var u = null, l = 0;
        function p(c, h) {
          var y, g, x;
          if (h.singleton) {
            var S = l++;
            y = u || (u = A(h)), g = s.bind(null, y, S, !1), x = s.bind(null, y, S, !0);
          } else
            y = A(h), g = i.bind(null, y, h), x = function() {
              d(y);
            };
          return g(c), function(P) {
            if (P) {
              if (P.css === c.css && P.media === c.media && P.sourceMap === c.sourceMap)
                return;
              g(c = P);
            } else
              x();
          };
        }
        f.exports = function(c, h) {
          h = h || {}, !h.singleton && typeof h.singleton != "boolean" && (h.singleton = e()), c = c || [];
          var y = v(c, h);
          return function(x) {
            if (x = x || [], Object.prototype.toString.call(x) === "[object Array]") {
              for (var S = 0; S < y.length; S++) {
                var T = y[S], P = o(T);
                r[P].references--;
              }
              for (var C = v(x, h), E = 0; E < y.length; E++) {
                var D = y[E], R = o(D);
                r[R].references === 0 && (r[R].updater(), r.splice(R, 1));
              }
              y = C;
            }
          };
        };
      },
      function(f, n, t) {
        f.exports = function(r) {
          var o = [];
          return o.toString = function() {
            return this.map(function(A) {
              var d = e(A, r);
              return A[2] ? "@media ".concat(A[2], " {").concat(d, "}") : d;
            }).join("");
          }, o.i = function(v, A, d) {
            typeof v == "string" && (v = [[null, v, ""]]);
            var m = {};
            if (d)
              for (var s = 0; s < this.length; s++) {
                var i = this[s][0];
                i != null && (m[i] = !0);
              }
            for (var u = 0; u < v.length; u++) {
              var l = [].concat(v[u]);
              d && m[l[0]] || (A && (l[2] ? l[2] = "".concat(A, " and ").concat(l[2]) : l[2] = A), o.push(l));
            }
          }, o;
        };
        function e(r, o) {
          var v = r[1] || "", A = r[3];
          if (!A)
            return v;
          if (o && typeof btoa == "function") {
            var d = a(A), m = A.sources.map(function(s) {
              return "/*# sourceURL=".concat(A.sourceRoot || "").concat(s, " */");
            });
            return [v].concat(m).concat([d]).join(`
`);
          }
          return [v].join(`
`);
        }
        function a(r) {
          var o = btoa(unescape(encodeURIComponent(JSON.stringify(r)))), v = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o);
          return "/*# ".concat(v, " */");
        }
      },
      function(f, n, t) {
        var e = t(14), a = t(11), r = t(16), o = Object.defineProperty, v = {}, A = function(d) {
          throw d;
        };
        f.exports = function(d, m) {
          if (r(v, d))
            return v[d];
          m || (m = {});
          var s = [][d], i = r(m, "ACCESSORS") ? m.ACCESSORS : !1, u = r(m, 0) ? m[0] : A, l = r(m, 1) ? m[1] : void 0;
          return v[d] = !!s && !a(function() {
            if (i && !e)
              return !0;
            var p = { length: -1 };
            i ? o(p, 1, { enumerable: !0, get: A }) : p[1] = 1, s.call(p, u, l);
          });
        };
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(95)), v = function(A) {
          r.__extends(d, A);
          function d(m, s) {
            return A.call(this, m, s) || this;
          }
          return d;
        }(o.default);
        n.default = v;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4)), o = e(t(46));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var v = t(2), A = v.__importDefault(t(3)), d = v.__importDefault(t(95)), m = v.__importDefault(t(134)), s = function(i) {
          v.__extends(u, i);
          function u(l, p, c) {
            var h = i.call(this, l, p) || this;
            c.title = p.i18next.t("menus.dropListMenu." + c.title);
            var y = p.config.lang === "zh-CN" ? "" : "w-e-drop-list-tl";
            if (y !== "" && c.type === "list") {
              var g;
              (0, r.default)(g = c.list).call(g, function(S) {
                var T = S.$elem, P = A.default(T.children());
                if (P.length > 0) {
                  var C = P == null ? void 0 : P.getNodeName();
                  C && C === "I" && T.addClass(y);
                }
              });
            }
            var x = new m.default(h, c);
            return h.dropList = x, l.on("click", function() {
              var S;
              p.selection.getRange() != null && (l.css("z-index", p.zIndex.get("menu")), (0, r.default)(S = p.txt.eventHooks.dropListMenuHoverEvents).call(S, function(T) {
                return T();
              }), x.show());
            }).on("mouseleave", function() {
              l.css("z-index", "auto"), x.hideTimeoutId = (0, o.default)(function() {
                x.hide();
              });
            }), h;
          }
          return u;
        }(d.default);
        n.default = s;
      },
      function(f, n, t) {
        var e = t(13);
        f.exports = function(a) {
          if (!e(a))
            throw TypeError(String(a) + " is not an object");
          return a;
        };
      },
      function(f, n, t) {
        f.exports = t(188);
      },
      function(f, n, t) {
        f.exports = t(201);
      },
      function(f, n, t) {
        f.exports = t(213);
      },
      function(f, n, t) {
        f.exports = t(283);
      },
      function(f, n, t) {
        var e = t(72), a = t(49);
        f.exports = function(r) {
          return e(a(r));
        };
      },
      function(f, n, t) {
        var e = t(49);
        f.exports = function(a) {
          return Object(e(a));
        };
      },
      function(f, n, t) {
        var e = t(40), a = t(72), r = t(31), o = t(35), v = t(88), A = [].push, d = function(m) {
          var s = m == 1, i = m == 2, u = m == 3, l = m == 4, p = m == 6, c = m == 5 || p;
          return function(h, y, g, x) {
            for (var S = r(h), T = a(S), P = e(y, g, 3), C = o(T.length), E = 0, D = x || v, R = s ? D(h, C) : i ? D(h, 0) : void 0, M, I; C > E; E++)
              if ((c || E in T) && (M = T[E], I = P(M, E, S), m)) {
                if (s)
                  R[E] = I;
                else if (I)
                  switch (m) {
                    case 3:
                      return !0;
                    case 5:
                      return M;
                    case 6:
                      return E;
                    case 2:
                      A.call(R, M);
                  }
                else if (l)
                  return !1;
              }
            return p ? -1 : u || l ? l : R;
          };
        };
        f.exports = {
          forEach: d(0),
          map: d(1),
          filter: d(2),
          some: d(3),
          every: d(4),
          find: d(5),
          findIndex: d(6)
        };
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4)), o = e(t(29)), v = e(t(132));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var A = t(2), d = A.__importDefault(t(3)), m = t(7), s = function() {
          function i(u, l) {
            this.menu = u, this.conf = l, this.$container = d.default('<div class="w-e-panel-container"></div>');
            var p = u.editor;
            p.txt.eventHooks.clickEvents.push(i.hideCurAllPanels), p.txt.eventHooks.toolbarClickEvents.push(i.hideCurAllPanels), p.txt.eventHooks.dropListMenuHoverEvents.push(i.hideCurAllPanels);
          }
          return i.prototype.create = function() {
            var u = this, l = this.menu;
            if (!i.createdMenus.has(l)) {
              var p = this.conf, c = this.$container, h = p.width || 300, y = l.editor.$toolbarElem.getBoundingClientRect(), g = l.$elem.getBoundingClientRect(), x = y.height + y.top - g.top, S = (y.width - h) / 2 + y.left - g.left, T = 300;
              Math.abs(S) > T && (g.left < document.documentElement.clientWidth / 2 ? S = -g.width / 2 : S = -h + g.width / 2), c.css("width", h + "px").css("margin-top", x + "px").css("margin-left", S + "px").css("z-index", l.editor.zIndex.get("panel"));
              var P = d.default('<i class="w-e-icon-close w-e-panel-close"></i>');
              c.append(P), P.on("click", function() {
                u.remove();
              });
              var C = d.default('<ul class="w-e-panel-tab-title"></ul>'), E = d.default('<div class="w-e-panel-tab-content"></div>');
              c.append(C).append(E);
              var D = p.height;
              D && E.css("height", D + "px").css("overflow-y", "auto");
              var R = p.tabs || [], M = [], I = [];
              (0, r.default)(R).call(R, function(B, F) {
                if (B) {
                  var O = B.title || "", H = B.tpl || "", L = d.default('<li class="w-e-item">' + O + "</li>");
                  C.append(L);
                  var U = d.default(H);
                  E.append(U), M.push(L), I.push(U), F === 0 ? (L.data("active", !0), L.addClass("w-e-active")) : U.hide(), L.on("click", function() {
                    L.data("active") || ((0, r.default)(M).call(M, function(z) {
                      z.data("active", !1), z.removeClass("w-e-active");
                    }), (0, r.default)(I).call(I, function(z) {
                      z.hide();
                    }), L.data("active", !0), L.addClass("w-e-active"), U.show());
                  });
                }
              }), c.on("click", function(B) {
                B.stopPropagation();
              }), l.$elem.append(c), p.setLinkValue && p.setLinkValue(c, "text"), p.setLinkValue && p.setLinkValue(c, "link"), (0, r.default)(R).call(R, function(B, F) {
                if (B) {
                  var O = B.events || [];
                  (0, r.default)(O).call(O, function(H) {
                    var L, U = H.selector, z = H.type, j = H.fn || m.EMPTY_FN, K = I[F], V = (L = H.bindEnter) !== null && L !== void 0 ? L : !1, Q = function(G) {
                      return A.__awaiter(u, void 0, void 0, function() {
                        var X;
                        return A.__generator(this, function(tt) {
                          switch (tt.label) {
                            case 0:
                              return G.stopPropagation(), [
                                4,
                                j(G)
                              ];
                            case 1:
                              return X = tt.sent(), X && this.remove(), [
                                2
                              ];
                          }
                        });
                      });
                    };
                    (0, o.default)(K).call(K, U).on(z, Q), V && z === "click" && K.on("keyup", function(w) {
                      w.keyCode == 13 && Q(w);
                    });
                  });
                }
              });
              var N = (0, o.default)(c).call(c, "input[type=text],textarea");
              N.length && N.get(0).focus(), i.hideCurAllPanels(), l.setPanel(this), i.createdMenus.add(l);
            }
          }, i.prototype.remove = function() {
            var u = this.menu, l = this.$container;
            l && l.remove(), i.createdMenus.delete(u);
          }, i.hideCurAllPanels = function() {
            var u;
            i.createdMenus.size !== 0 && (0, r.default)(u = i.createdMenus).call(u, function(l) {
              var p = l.panel;
              p && p.remove();
            });
          }, i.createdMenus = new v.default(), i;
        }();
        n.default = s;
      },
      function(f, n) {
        var t = {}.toString;
        f.exports = function(e) {
          return t.call(e).slice(8, -1);
        };
      },
      function(f, n, t) {
        var e = t(62), a = Math.min;
        f.exports = function(r) {
          return r > 0 ? a(e(r), 9007199254740991) : 0;
        };
      },
      function(f, n, t) {
        var e = t(9), a = t(8), r = function(o) {
          return typeof o == "function" ? o : void 0;
        };
        f.exports = function(o, v) {
          return arguments.length < 2 ? r(e[o]) || r(a[o]) : e[o] && e[o][v] || a[o] && a[o][v];
        };
      },
      function(f, n, t) {
        var e = t(81), a = t(18).f, r = t(19), o = t(16), v = t(170), A = t(10), d = A("toStringTag");
        f.exports = function(m, s, i, u) {
          if (m) {
            var l = i ? m : m.prototype;
            o(l, d) || a(l, d, { configurable: !0, value: s }), u && !e && r(l, "toString", v);
          }
        };
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(95)), v = function(A) {
          r.__extends(d, A);
          function d(m, s) {
            return A.call(this, m, s) || this;
          }
          return d.prototype.setPanel = function(m) {
            this.panel = m;
          }, d;
        }(o.default);
        n.default = v;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4)), o = e(t(57));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var v = t(2), A = v.__importDefault(t(3)), d = function() {
          function m(s, i, u) {
            this.editor = s, this.$targetElem = i, this.conf = u, this._show = !1, this._isInsertTextContainer = !1;
            var l = A.default("<div></div>");
            l.addClass("w-e-tooltip"), this.$container = l;
          }
          return m.prototype.getPositionData = function() {
            var s = this.$container, i = 0, u = 0, l = 20, p = document.documentElement.scrollTop, c = this.$targetElem.getBoundingClientRect(), h = this.editor.$textElem.getBoundingClientRect(), y = this.$targetElem.getOffsetData(), g = A.default(y.parent), x = this.editor.$textElem.elems[0].scrollTop;
            if (this._isInsertTextContainer = g.equal(this.editor.$textContainerElem), this._isInsertTextContainer) {
              var S = g.getBoundingClientRect().height, T = y.top, P = y.left, C = y.height, E = T - x;
              E > l + 5 ? (i = E - l - 15, s.addClass("w-e-tooltip-up")) : E + C + l < S ? (i = E + C + 10, s.addClass("w-e-tooltip-down")) : (i = (E > 0 ? E : 0) + l + 10, s.addClass("w-e-tooltip-down")), P < 0 ? u = 0 : u = P;
            } else
              c.top < l || c.top - h.top < l ? (i = c.bottom + p + 5, s.addClass("w-e-tooltip-down")) : (i = c.top + p - l - 15, s.addClass("w-e-tooltip-up")), c.left < 0 ? u = 0 : u = c.left;
            return {
              top: i,
              left: u
            };
          }, m.prototype.appendMenus = function() {
            var s = this, i = this.conf, u = this.editor, l = this.$targetElem, p = this.$container;
            (0, r.default)(i).call(i, function(c, h) {
              var y = c.$elem, g = A.default("<div></div>");
              g.addClass("w-e-tooltip-item-wrapper "), g.append(y), p.append(g), y.on("click", function(x) {
                x.preventDefault();
                var S = c.onClick(u, l);
                S && s.remove();
              });
            });
          }, m.prototype.create = function() {
            var s, i, u = this.editor, l = this.$container;
            this.appendMenus();
            var p = this.getPositionData(), c = p.top, h = p.left;
            l.css("top", c + "px"), l.css("left", h + "px"), l.css("z-index", u.zIndex.get("tooltip")), this._isInsertTextContainer ? this.editor.$textContainerElem.append(l) : A.default("body").append(l), this._show = !0, u.beforeDestroy((0, o.default)(s = this.remove).call(s, this)), u.txt.eventHooks.onBlurEvents.push((0, o.default)(i = this.remove).call(i, this));
          }, m.prototype.remove = function() {
            this.$container.remove(), this._show = !1;
          }, (0, a.default)(m.prototype, "isShow", {
            get: function() {
              return this._show;
            },
            enumerable: !1,
            configurable: !0
          }), m;
        }();
        n.default = d;
      },
      function(f, n, t) {
        var e = t(41);
        f.exports = function(a, r, o) {
          if (e(a), r === void 0)
            return a;
          switch (o) {
            case 0:
              return function() {
                return a.call(r);
              };
            case 1:
              return function(v) {
                return a.call(r, v);
              };
            case 2:
              return function(v, A) {
                return a.call(r, v, A);
              };
            case 3:
              return function(v, A, d) {
                return a.call(r, v, A, d);
              };
          }
          return function() {
            return a.apply(r, arguments);
          };
        };
      },
      function(f, n) {
        f.exports = function(t) {
          if (typeof t != "function")
            throw TypeError(String(t) + " is not a function");
          return t;
        };
      },
      function(f, n, t) {
        var e = t(165), a = t(8), r = t(13), o = t(19), v = t(16), A = t(63), d = t(51), m = a.WeakMap, s, i, u, l = function(S) {
          return u(S) ? i(S) : s(S, {});
        }, p = function(S) {
          return function(T) {
            var P;
            if (!r(T) || (P = i(T)).type !== S)
              throw TypeError("Incompatible receiver, " + S + " required");
            return P;
          };
        };
        if (e) {
          var c = new m(), h = c.get, y = c.has, g = c.set;
          s = function(S, T) {
            return g.call(c, S, T), T;
          }, i = function(S) {
            return h.call(c, S) || {};
          }, u = function(S) {
            return y.call(c, S);
          };
        } else {
          var x = A("state");
          d[x] = !0, s = function(S, T) {
            return o(S, x, T), T;
          }, i = function(S) {
            return v(S, x) ? S[x] : {};
          }, u = function(S) {
            return v(S, x);
          };
        }
        f.exports = {
          set: s,
          get: i,
          has: u,
          enforce: l,
          getterFor: p
        };
      },
      function(f, n) {
        f.exports = !0;
      },
      function(f, n) {
        f.exports = {};
      },
      function(f, n, t) {
        f.exports = t(261);
      },
      function(f, n, t) {
        f.exports = t(265);
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.createElementFragment = n.createDocumentFragment = n.createElement = n.insertBefore = n.getEndPoint = n.getStartPoint = n.updateRange = n.filterSelectionNodes = void 0;
        var o = t(2), v = t(137), A = o.__importDefault(t(3));
        function d(h) {
          var y = [];
          return (0, r.default)(h).call(h, function(g) {
            var x = g.getNodeName();
            if (x !== v.ListType.OrderedList && x !== v.ListType.UnorderedList)
              y.push(g);
            else if (g.prior)
              y.push(g.prior);
            else {
              var S = g.children();
              S == null || (0, r.default)(S).call(S, function(T) {
                y.push(A.default(T));
              });
            }
          }), y;
        }
        n.filterSelectionNodes = d;
        function m(h, y, g) {
          var x = h.selection, S = document.createRange();
          y.length > 1 ? (S.setStart(y.elems[0], 0), S.setEnd(y.elems[y.length - 1], y.elems[y.length - 1].childNodes.length)) : S.selectNodeContents(y.elems[0]), g && S.collapse(!1), x.saveRange(S), x.restoreSelection();
        }
        n.updateRange = m;
        function s(h) {
          var y;
          return h.prior ? h.prior : A.default((y = h.children()) === null || y === void 0 ? void 0 : y.elems[0]);
        }
        n.getStartPoint = s;
        function i(h) {
          var y;
          return h.prior ? h.prior : A.default((y = h.children()) === null || y === void 0 ? void 0 : y.last().elems[0]);
        }
        n.getEndPoint = i;
        function u(h, y, g) {
          g === void 0 && (g = null), h.parent().elems[0].insertBefore(y, g);
        }
        n.insertBefore = u;
        function l(h) {
          return document.createElement(h);
        }
        n.createElement = l;
        function p() {
          return document.createDocumentFragment();
        }
        n.createDocumentFragment = p;
        function c(h, y, g) {
          return g === void 0 && (g = "li"), (0, r.default)(h).call(h, function(x) {
            var S = l(g);
            S.innerHTML = x.html(), y.appendChild(S), x.remove();
          }), y;
        }
        n.createElementFragment = c;
      },
      function(f, n) {
        f.exports = function(t, e) {
          return {
            enumerable: !(t & 1),
            configurable: !(t & 2),
            writable: !(t & 4),
            value: e
          };
        };
      },
      function(f, n) {
        f.exports = function(t) {
          if (t == null)
            throw TypeError("Can't call method on " + t);
          return t;
        };
      },
      function(f, n, t) {
        var e = t(164).charAt, a = t(42), r = t(75), o = "String Iterator", v = a.set, A = a.getterFor(o);
        r(String, "String", function(d) {
          v(this, {
            type: o,
            string: String(d),
            index: 0
          });
        }, function() {
          var m = A(this), s = m.string, i = m.index, u;
          return i >= s.length ? { value: void 0, done: !0 } : (u = e(s, i), m.index += u.length, { value: u, done: !1 });
        });
      },
      function(f, n) {
        f.exports = {};
      },
      function(f, n, t) {
        var e = t(107), a = t(80);
        f.exports = Object.keys || function(o) {
          return e(o, a);
        };
      },
      function(f, n, t) {
        var e = t(19);
        f.exports = function(a, r, o, v) {
          v && v.enumerable ? a[r] = o : e(a, r, o);
        };
      },
      function(f, n, t) {
        t(173);
        var e = t(174), a = t(8), r = t(65), o = t(19), v = t(44), A = t(10), d = A("toStringTag");
        for (var m in e) {
          var s = a[m], i = s && s.prototype;
          i && r(i) !== d && o(i, d, m), v[m] = v.Array;
        }
      },
      function(f, n, t) {
        var e = t(34);
        f.exports = Array.isArray || function(r) {
          return e(r) == "Array";
        };
      },
      function(f, n, t) {
        var e = t(11), a = t(10), r = t(86), o = a("species");
        f.exports = function(v) {
          return r >= 51 || !e(function() {
            var A = [], d = A.constructor = {};
            return d[o] = function() {
              return { foo: 1 };
            }, A[v](Boolean).foo !== 1;
          });
        };
      },
      function(f, n, t) {
        f.exports = t(222);
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.ListHandle = void 0;
        var r = t(2), o = r.__importDefault(t(373)), v = function() {
          function A(d) {
            this.options = d, this.selectionRangeElem = new o.default();
          }
          return A;
        }();
        n.ListHandle = v;
      },
      function(f, n, t) {
        var e = {}.propertyIsEnumerable, a = Object.getOwnPropertyDescriptor, r = a && !e.call({ 1: 2 }, 1);
        n.f = r ? function(v) {
          var A = a(this, v);
          return !!A && A.enumerable;
        } : e;
      },
      function(f, n, t) {
        var e = t(13);
        f.exports = function(a, r) {
          if (!e(a))
            return a;
          var o, v;
          if (r && typeof (o = a.toString) == "function" && !e(v = o.call(a)) || typeof (o = a.valueOf) == "function" && !e(v = o.call(a)) || !r && typeof (o = a.toString) == "function" && !e(v = o.call(a)))
            return v;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      function(f, n) {
      },
      function(f, n) {
        var t = Math.ceil, e = Math.floor;
        f.exports = function(a) {
          return isNaN(a = +a) ? 0 : (a > 0 ? e : t)(a);
        };
      },
      function(f, n, t) {
        var e = t(74), a = t(64), r = e("keys");
        f.exports = function(o) {
          return r[o] || (r[o] = a(o));
        };
      },
      function(f, n) {
        var t = 0, e = Math.random();
        f.exports = function(a) {
          return "Symbol(" + String(a === void 0 ? "" : a) + ")_" + (++t + e).toString(36);
        };
      },
      function(f, n, t) {
        var e = t(81), a = t(34), r = t(10), o = r("toStringTag"), v = a(function() {
          return arguments;
        }()) == "Arguments", A = function(d, m) {
          try {
            return d[m];
          } catch {
          }
        };
        f.exports = e ? a : function(d) {
          var m, s, i;
          return d === void 0 ? "Undefined" : d === null ? "Null" : typeof (s = A(m = Object(d), o)) == "string" ? s : v ? a(m) : (i = a(m)) == "Object" && typeof m.callee == "function" ? "Arguments" : i;
        };
      },
      function(f, n, t) {
        var e = t(25), a = t(112), r = t(35), o = t(40), v = t(113), A = t(114), d = function(s, i) {
          this.stopped = s, this.result = i;
        }, m = f.exports = function(s, i, u, l, p) {
          var c = o(i, u, l ? 2 : 1), h, y, g, x, S, T, P;
          if (p)
            h = s;
          else {
            if (y = v(s), typeof y != "function")
              throw TypeError("Target is not iterable");
            if (a(y)) {
              for (g = 0, x = r(s.length); x > g; g++)
                if (S = l ? c(e(P = s[g])[0], P[1]) : c(s[g]), S && S instanceof d)
                  return S;
              return new d(!1);
            }
            h = y.call(s);
          }
          for (T = h.next; !(P = T.call(h)).done; )
            if (S = A(h, c, P.value, l), typeof S == "object" && S && S instanceof d)
              return S;
          return new d(!1);
        };
        m.stop = function(s) {
          return new d(!0, s);
        };
      },
      function(f, n, t) {
        var e = t(11);
        f.exports = function(a, r) {
          var o = [][a];
          return !!o && e(function() {
            o.call(null, r || function() {
              throw 1;
            }, 1);
          });
        };
      },
      function(f, n) {
        f.exports = `	
\v\f\r                　\u2028\u2029\uFEFF`;
      },
      function(f, n, t) {
        var e = t(60), a = t(18), r = t(48);
        f.exports = function(o, v, A) {
          var d = e(v);
          d in o ? a.f(o, d, r(0, A)) : o[d] = A;
        };
      },
      function(f, n, t) {
        f.exports = t(209);
      },
      function(f, n, t) {
        var e = t(14), a = t(59), r = t(48), o = t(30), v = t(60), A = t(16), d = t(100), m = Object.getOwnPropertyDescriptor;
        n.f = e ? m : function(i, u) {
          if (i = o(i), u = v(u, !0), d)
            try {
              return m(i, u);
            } catch {
            }
          if (A(i, u))
            return r(!a.f.call(i, u), i[u]);
        };
      },
      function(f, n, t) {
        var e = t(11), a = t(34), r = "".split;
        f.exports = e(function() {
          return !Object("z").propertyIsEnumerable(0);
        }) ? function(o) {
          return a(o) == "String" ? r.call(o, "") : Object(o);
        } : Object;
      },
      function(f, n, t) {
        var e = t(8), a = t(13), r = e.document, o = a(r) && a(r.createElement);
        f.exports = function(v) {
          return o ? r.createElement(v) : {};
        };
      },
      function(f, n, t) {
        var e = t(43), a = t(103);
        (f.exports = function(r, o) {
          return a[r] || (a[r] = o !== void 0 ? o : {});
        })("versions", []).push({
          version: "3.6.4",
          mode: e ? "pure" : "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        });
      },
      function(f, n, t) {
        var e = t(5), a = t(167), r = t(105), o = t(171), v = t(37), A = t(19), d = t(53), m = t(10), s = t(43), i = t(44), u = t(104), l = u.IteratorPrototype, p = u.BUGGY_SAFARI_ITERATORS, c = m("iterator"), h = "keys", y = "values", g = "entries", x = function() {
          return this;
        };
        f.exports = function(S, T, P, C, E, D, R) {
          a(P, T, C);
          var M = function(j) {
            if (j === E && O)
              return O;
            if (!p && j in B)
              return B[j];
            switch (j) {
              case h:
                return function() {
                  return new P(this, j);
                };
              case y:
                return function() {
                  return new P(this, j);
                };
              case g:
                return function() {
                  return new P(this, j);
                };
            }
            return function() {
              return new P(this);
            };
          }, I = T + " Iterator", N = !1, B = S.prototype, F = B[c] || B["@@iterator"] || E && B[E], O = !p && F || M(E), H = T == "Array" && B.entries || F, L, U, z;
          if (H && (L = r(H.call(new S())), l !== Object.prototype && L.next && (!s && r(L) !== l && (o ? o(L, l) : typeof L[c] != "function" && A(L, c, x)), v(L, I, !0, !0), s && (i[I] = x))), E == y && F && F.name !== y && (N = !0, O = function() {
            return F.call(this);
          }), (!s || R) && B[c] !== O && A(B, c, O), i[T] = O, E)
            if (U = {
              values: M(y),
              keys: D ? O : M(h),
              entries: M(g)
            }, R)
              for (z in U)
                (p || N || !(z in B)) && d(B, z, U[z]);
            else
              e({ target: T, proto: !0, forced: p || N }, U);
          return U;
        };
      },
      function(f, n, t) {
        var e = t(11);
        f.exports = !!Object.getOwnPropertySymbols && !e(function() {
          return !String(Symbol());
        });
      },
      function(f, n, t) {
        var e = t(25), a = t(169), r = t(80), o = t(51), v = t(108), A = t(73), d = t(63), m = ">", s = "<", i = "prototype", u = "script", l = d("IE_PROTO"), p = function() {
        }, c = function(S) {
          return s + u + m + S + s + "/" + u + m;
        }, h = function(S) {
          S.write(c("")), S.close();
          var T = S.parentWindow.Object;
          return S = null, T;
        }, y = function() {
          var S = A("iframe"), T = "java" + u + ":", P;
          return S.style.display = "none", v.appendChild(S), S.src = String(T), P = S.contentWindow.document, P.open(), P.write(c("document.F=Object")), P.close(), P.F;
        }, g, x = function() {
          try {
            g = document.domain && new ActiveXObject("htmlfile");
          } catch {
          }
          x = g ? h(g) : y();
          for (var S = r.length; S--; )
            delete x[i][r[S]];
          return x();
        };
        o[l] = !0, f.exports = Object.create || function(T, P) {
          var C;
          return T !== null ? (p[i] = e(T), C = new p(), p[i] = null, C[l] = T) : C = x(), P === void 0 ? C : a(C, P);
        };
      },
      function(f, n, t) {
        var e = t(30), a = t(35), r = t(79), o = function(v) {
          return function(A, d, m) {
            var s = e(A), i = a(s.length), u = r(m, i), l;
            if (v && d != d) {
              for (; i > u; )
                if (l = s[u++], l != l)
                  return !0;
            } else
              for (; i > u; u++)
                if ((v || u in s) && s[u] === d)
                  return v || u || 0;
            return !v && -1;
          };
        };
        f.exports = {
          includes: o(!0),
          indexOf: o(!1)
        };
      },
      function(f, n, t) {
        var e = t(62), a = Math.max, r = Math.min;
        f.exports = function(o, v) {
          var A = e(o);
          return A < 0 ? a(A + v, 0) : r(A, v);
        };
      },
      function(f, n) {
        f.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf"
        ];
      },
      function(f, n, t) {
        var e = t(10), a = e("toStringTag"), r = {};
        r[a] = "z", f.exports = String(r) === "[object z]";
      },
      function(f, n) {
        f.exports = function() {
        };
      },
      function(f, n) {
        f.exports = function(t, e, a) {
          if (!(t instanceof e))
            throw TypeError("Incorrect " + (a ? a + " " : "") + "invocation");
          return t;
        };
      },
      function(f, n, t) {
        var e = t(36);
        f.exports = e("navigator", "userAgent") || "";
      },
      function(f, n, t) {
        var e = t(41), a = function(r) {
          var o, v;
          this.promise = new r(function(A, d) {
            if (o !== void 0 || v !== void 0)
              throw TypeError("Bad Promise constructor");
            o = A, v = d;
          }), this.resolve = e(o), this.reject = e(v);
        };
        f.exports.f = function(r) {
          return new a(r);
        };
      },
      function(f, n, t) {
        var e = t(8), a = t(84), r = e.process, o = r && r.versions, v = o && o.v8, A, d;
        v ? (A = v.split("."), d = A[0] + A[1]) : a && (A = a.match(/Edge\/(\d+)/), (!A || A[1] >= 74) && (A = a.match(/Chrome\/(\d+)/), A && (d = A[1]))), f.exports = d && +d;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(3)), A = t(6), d = o.__importDefault(t(267)), m = o.__importDefault(t(280)), s = o.__importDefault(t(281)), i = o.__importDefault(t(282)), u = o.__importDefault(t(301)), l = o.__importStar(t(416)), p = o.__importDefault(t(417)), c = o.__importDefault(t(418)), h = o.__importDefault(t(419)), y = o.__importStar(t(420)), g = o.__importDefault(t(423)), x = o.__importDefault(t(424)), S = o.__importDefault(t(425)), T = o.__importDefault(t(427)), P = o.__importDefault(t(437)), C = o.__importDefault(t(440)), E = o.__importStar(t(441)), D = o.__importDefault(t(23)), R = o.__importDefault(t(134)), M = o.__importDefault(t(24)), I = o.__importDefault(t(33)), N = o.__importDefault(t(38)), B = o.__importDefault(t(39)), F = 1, O = function() {
          function H(L, U) {
            this.pluginsFunctionList = {}, this.beforeDestroyHooks = [], this.id = "wangEditor-" + F++, this.toolbarSelector = L, this.textSelector = U, l.selectorValidator(this), this.config = A.deepClone(d.default), this.$toolbarElem = v.default("<div></div>"), this.$textContainerElem = v.default("<div></div>"), this.$textElem = v.default("<div></div>"), this.toolbarElemId = "", this.textElemId = "", this.isFocus = !1, this.isComposing = !1, this.isCompatibleMode = !1, this.selection = new m.default(this), this.cmd = new s.default(this), this.txt = new i.default(this), this.menus = new u.default(this), this.zIndex = new x.default(), this.change = new S.default(this), this.history = new T.default(this), this.onSelectionChange = new C.default(this);
            var z = P.default(this), j = z.disable, K = z.enable;
            this.disable = j, this.enable = K, this.isEnable = !0;
          }
          return H.prototype.initSelection = function(L) {
            p.default(this, L);
          }, H.prototype.create = function() {
            this.zIndex.init(this), this.isCompatibleMode = this.config.compatibleMode(), this.isCompatibleMode || (this.config.onchangeTimeout = 30), h.default(this), l.default(this), this.txt.init(), this.menus.init(), y.default(this), this.initSelection(!0), c.default(this), this.change.observe(), this.history.observe(), E.default(this);
          }, H.prototype.beforeDestroy = function(L) {
            return this.beforeDestroyHooks.push(L), this;
          }, H.prototype.destroy = function() {
            var L, U = this;
            (0, r.default)(L = this.beforeDestroyHooks).call(L, function(z) {
              return z.call(U);
            }), this.$toolbarElem.remove(), this.$textContainerElem.remove();
          }, H.prototype.fullScreen = function() {
            y.setFullScreen(this);
          }, H.prototype.unFullScreen = function() {
            y.setUnFullScreen(this);
          }, H.prototype.scrollToHead = function(L) {
            g.default(this, L);
          }, H.registerMenu = function(L, U) {
            !U || typeof U != "function" || (H.globalCustomMenuConstructorList[L] = U);
          }, H.prototype.registerPlugin = function(L, U) {
            E.registerPlugin(L, U, this.pluginsFunctionList);
          }, H.registerPlugin = function(L, U) {
            E.registerPlugin(L, U, H.globalPluginsFunctionList);
          }, H.$ = v.default, H.BtnMenu = D.default, H.DropList = R.default, H.DropListMenu = M.default, H.Panel = I.default, H.PanelMenu = N.default, H.Tooltip = B.default, H.globalCustomMenuConstructorList = {}, H.globalPluginsFunctionList = {}, H;
        }();
        n.default = O;
      },
      function(f, n, t) {
        var e = t(13), a = t(55), r = t(10), o = r("species");
        f.exports = function(v, A) {
          var d;
          return a(v) && (d = v.constructor, typeof d == "function" && (d === Array || a(d.prototype)) ? d = void 0 : e(d) && (d = d[o], d === null && (d = void 0))), new (d === void 0 ? Array : d)(A === 0 ? 0 : A);
        };
      },
      function(f, n, t) {
        f.exports = t(185);
      },
      function(f, n, t) {
        var e = t(49), a = t(68), r = "[" + a + "]", o = RegExp("^" + r + r + "*"), v = RegExp(r + r + "*$"), A = function(d) {
          return function(m) {
            var s = String(e(m));
            return d & 1 && (s = s.replace(o, "")), d & 2 && (s = s.replace(v, "")), s;
          };
        };
        f.exports = {
          start: A(1),
          end: A(2),
          trim: A(3)
        };
      },
      function(f, n, t) {
        f.exports = t(205);
      },
      function(f, n, t) {
        var e = t(227), a = t(230);
        function r(o) {
          return typeof a == "function" && typeof e == "symbol" ? f.exports = r = function(A) {
            return typeof A;
          } : f.exports = r = function(A) {
            return A && typeof a == "function" && A.constructor === a && A !== a.prototype ? "symbol" : typeof A;
          }, r(o);
        }
        f.exports = r;
      },
      function(f, n, t) {
        var e = t(10);
        n.f = e;
      },
      function(f, n, t) {
        f.exports = t(306);
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(33)), A = function() {
          function d(m, s) {
            var i = this;
            this.$elem = m, this.editor = s, this._active = !1, m.on("click", function(u) {
              var l;
              v.default.hideCurAllPanels(), (0, r.default)(l = s.txt.eventHooks.menuClickEvents).call(l, function(p) {
                return p();
              }), u.stopPropagation(), s.selection.getRange() != null && i.clickHandler(u);
            });
          }
          return d.prototype.clickHandler = function(m) {
          }, d.prototype.active = function() {
            this._active = !0, this.$elem.addClass("w-e-active");
          }, d.prototype.unActive = function() {
            this._active = !1, this.$elem.removeClass("w-e-active");
          }, (0, a.default)(d.prototype, "isActive", {
            get: function() {
              return this._active;
            },
            enumerable: !1,
            configurable: !0
          }), d;
        }();
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(28));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.getParentNodeA = n.EXTRA_TAG = void 0, n.EXTRA_TAG = ["B", "FONT", "I", "STRIKE"];
        function o(A) {
          for (var d = A.elems[0]; d && (0, r.default)(m = n.EXTRA_TAG).call(m, d.nodeName); ) {
            var m;
            if (d = d.parentElement, d.nodeName === "A")
              return d;
          }
        }
        n.getParentNodeA = o;
        function v(A) {
          var d, m = A.selection.getSelectionContainerElem();
          if (!(!((d = m == null ? void 0 : m.elems) === null || d === void 0) && d.length))
            return !1;
          if (m.getNodeName() === "A")
            return !0;
          var s = o(m);
          return !!(s && s.nodeName === "A");
        }
        n.default = v;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(57)), o = e(t(4)), v = e(t(27));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var A = t(2), d = t(6), m = A.__importDefault(t(135)), s = A.__importDefault(t(136)), i = function() {
          function u(l) {
            this.editor = l;
          }
          return u.prototype.insertImg = function(l, p, c) {
            var h = this.editor, y = h.config, g = "validate.", x = function(D, R) {
              return R === void 0 && (R = g), h.i18next.t(R + D);
            }, S = l.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            S = S.replace("'", '"');
            var T = "";
            c && (T = c.replace("'", '"'), T = "data-href='" + encodeURIComponent(T) + "' ");
            var P = "";
            p && (P = p.replace(/</g, "&lt;").replace(/>/g, "&gt;"), P = P.replace("'", '"'), P = "alt='" + P + "' "), h.cmd.do("insertHTML", "<img src='" + S + "' " + P + T + 'style="max-width:100%;" contenteditable="false"/>'), y.linkImgCallback(l, p, c);
            var C = document.createElement("img");
            C.onload = function() {
              C = null;
            }, C.onerror = function() {
              y.customAlert(x("插入图片错误"), "error", "wangEditor: " + x("插入图片错误") + "，" + x("图片链接") + ' "' + l + '"，' + x("下载链接失败")), C = null;
            }, C.onabort = function() {
              return C = null;
            }, C.src = l;
          }, u.prototype.uploadImg = function(l) {
            var p = this;
            if (l.length) {
              var c = this.editor, h = c.config, y = "validate.", g = function(Q) {
                return c.i18next.t(y + Q);
              }, x = h.uploadImgServer, S = h.uploadImgShowBase64, T = h.uploadImgMaxSize, P = T / 1024 / 1024, C = h.uploadImgMaxLength, E = h.uploadFileName, D = h.uploadImgParams, R = h.uploadImgParamsWithUrl, M = h.uploadImgHeaders, I = h.uploadImgHooks, N = h.uploadImgTimeout, B = h.withCredentials, F = h.customUploadImg;
              if (!(!F && !x && !S)) {
                var O = [], H = [];
                if (d.arrForEach(l, function(V) {
                  if (V) {
                    var Q = V.name || V.type.replace("/", "."), w = V.size;
                    if (!(!Q || !w)) {
                      var G = c.config.uploadImgAccept.join("|"), X = ".(" + G + ")$", tt = new RegExp(X, "i");
                      if (tt.test(Q) === !1) {
                        H.push("【" + Q + "】" + g("不是图片"));
                        return;
                      }
                      if (T < w) {
                        H.push("【" + Q + "】" + g("大于") + " " + P + "M");
                        return;
                      }
                      O.push(V);
                    }
                  }
                }), H.length) {
                  h.customAlert(g("图片验证未通过") + `: 
` + H.join(`
`), "warning");
                  return;
                }
                if (O.length === 0) {
                  h.customAlert(g("传入的文件不合法"), "warning");
                  return;
                }
                if (O.length > C) {
                  h.customAlert(g("一次最多上传") + C + g("张图片"), "warning");
                  return;
                }
                if (F && typeof F == "function") {
                  var L;
                  F(O, (0, r.default)(L = this.insertImg).call(L, this));
                  return;
                }
                var U = new FormData();
                if ((0, o.default)(O).call(O, function(V, Q) {
                  var w = E || V.name;
                  O.length > 1 && (w = w + (Q + 1)), U.append(w, V);
                }), x) {
                  var z = x.split("#");
                  x = z[0];
                  var j = z[1] || "";
                  (0, o.default)(d).call(d, D, function(V, Q) {
                    R && ((0, v.default)(x).call(x, "?") > 0 ? x += "&" : x += "?", x = x + V + "=" + Q), U.append(V, Q);
                  }), j && (x += "#" + j);
                  var K = m.default(x, {
                    timeout: N,
                    formData: U,
                    headers: M,
                    withCredentials: !!B,
                    beforeSend: function(Q) {
                      if (I.before)
                        return I.before(Q, c, O);
                    },
                    onTimeout: function(Q) {
                      h.customAlert(g("上传图片超时"), "error"), I.timeout && I.timeout(Q, c);
                    },
                    onProgress: function(Q, w) {
                      var G = new s.default(c);
                      w.lengthComputable && (Q = w.loaded / w.total, G.show(Q));
                    },
                    onError: function(Q) {
                      h.customAlert(g("上传图片错误"), "error", g("上传图片错误") + "，" + g("服务器返回状态") + ": " + Q.status), I.error && I.error(Q, c);
                    },
                    onFail: function(Q, w) {
                      h.customAlert(g("上传图片失败"), "error", g("上传图片返回结果错误") + ("，" + g("返回结果") + ": ") + w), I.fail && I.fail(Q, c, w);
                    },
                    onSuccess: function(Q, w) {
                      if (I.customInsert) {
                        var G;
                        I.customInsert((0, r.default)(G = p.insertImg).call(G, p), w, c);
                        return;
                      }
                      if (w.errno != "0") {
                        h.customAlert(g("上传图片失败"), "error", g("上传图片返回结果错误") + "，" + g("返回结果") + " errno=" + w.errno), I.fail && I.fail(Q, c, w);
                        return;
                      }
                      var X = w.data;
                      (0, o.default)(X).call(X, function(tt) {
                        typeof tt == "string" ? p.insertImg(tt) : p.insertImg(tt.url, tt.alt, tt.href);
                      }), I.success && I.success(Q, c, w);
                    }
                  });
                  typeof K == "string" && h.customAlert(K, "error");
                  return;
                }
                S && d.arrForEach(l, function(V) {
                  var Q = p, w = new FileReader();
                  w.readAsDataURL(V), w.onload = function() {
                    if (this.result) {
                      var G = this.result.toString();
                      Q.insertImg(G, G);
                    }
                  };
                });
              }
            }
          }, u;
        }();
        n.default = i;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(410)), o = e(t(4)), v = e(t(45));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.dealTextNode = n.isAllTodo = n.isTodo = n.getCursorNextNode = void 0;
        function A(u) {
          return u.length ? u.attr("class") === "w-e-todo" : !1;
        }
        n.isTodo = A;
        function d(u) {
          var l = u.selection.getSelectionRangeTopNodes();
          if (l.length !== 0)
            return (0, r.default)(l).call(l, function(p) {
              return A(p);
            });
        }
        n.isAllTodo = d;
        function m(u, l, p) {
          var c;
          if (u.hasChildNodes()) {
            var h = u.cloneNode(), y = !1;
            l.nodeValue === "" && (y = !0);
            var g = [];
            return (0, o.default)(c = u.childNodes).call(c, function(x) {
              if (!s(x, l) && y && (h.appendChild(x.cloneNode(!0)), x.nodeName !== "BR" && g.push(x)), s(x, l)) {
                if (x.nodeType === 1) {
                  var S = m(x, l, p);
                  S && S.textContent !== "" && (h == null || h.appendChild(S));
                }
                if (x.nodeType === 3 && l.isEqualNode(x)) {
                  var T = i(x, p);
                  h.textContent = T;
                }
                y = !0;
              }
            }), (0, o.default)(g).call(g, function(x) {
              var S = x;
              S.remove();
            }), h;
          }
        }
        n.getCursorNextNode = m;
        function s(u, l) {
          return u.nodeType === 3 ? u.nodeValue === l.nodeValue : u.contains(l);
        }
        function i(u, l, p) {
          p === void 0 && (p = !0);
          var c = u.nodeValue, h = c == null ? void 0 : (0, v.default)(c).call(c, 0, l);
          if (c = c == null ? void 0 : (0, v.default)(c).call(c, l), !p) {
            var y = c;
            c = h, h = y;
          }
          return u.nodeValue = h, c;
        }
        n.dealTextNode = i;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(430), o = function() {
          function v(A) {
            this.maxSize = A, this.isRe = !1, this.data = new r.CeilStack(A), this.revokeData = new r.CeilStack(A);
          }
          return (0, a.default)(v.prototype, "size", {
            get: function() {
              return [this.data.size, this.revokeData.size];
            },
            enumerable: !1,
            configurable: !0
          }), v.prototype.resetMaxSize = function(A) {
            this.data.resetMax(A), this.revokeData.resetMax(A);
          }, v.prototype.save = function(A) {
            return this.isRe && (this.revokeData.clear(), this.isRe = !1), this.data.instack(A), this;
          }, v.prototype.revoke = function(A) {
            !this.isRe && (this.isRe = !0);
            var d = this.data.outstack();
            return d ? (this.revokeData.instack(d), A(d), !0) : !1;
          }, v.prototype.restore = function(A) {
            !this.isRe && (this.isRe = !0);
            var d = this.revokeData.outstack();
            return d ? (this.data.instack(d), A(d), !0) : !1;
          }, v;
        }();
        n.default = o;
      },
      function(f, n, t) {
        var e = t(14), a = t(11), r = t(73);
        f.exports = !e && !a(function() {
          return Object.defineProperty(r("div"), "a", {
            get: function() {
              return 7;
            }
          }).a != 7;
        });
      },
      function(f, n, t) {
        var e = t(11), a = /#|\.prototype\./, r = function(m, s) {
          var i = v[o(m)];
          return i == d ? !0 : i == A ? !1 : typeof s == "function" ? e(s) : !!s;
        }, o = r.normalize = function(m) {
          return String(m).replace(a, ".").toLowerCase();
        }, v = r.data = {}, A = r.NATIVE = "N", d = r.POLYFILL = "P";
        f.exports = r;
      },
      function(f, n, t) {
        var e = t(103), a = Function.toString;
        typeof e.inspectSource != "function" && (e.inspectSource = function(r) {
          return a.call(r);
        }), f.exports = e.inspectSource;
      },
      function(f, n, t) {
        var e = t(8), a = t(166), r = "__core-js_shared__", o = e[r] || a(r, {});
        f.exports = o;
      },
      function(f, n, t) {
        var e = t(105), a = t(19), r = t(16), o = t(10), v = t(43), A = o("iterator"), d = !1, m = function() {
          return this;
        }, s, i, u;
        [].keys && (u = [].keys(), "next" in u ? (i = e(e(u)), i !== Object.prototype && (s = i)) : d = !0), s == null && (s = {}), !v && !r(s, A) && a(s, A, m), f.exports = {
          IteratorPrototype: s,
          BUGGY_SAFARI_ITERATORS: d
        };
      },
      function(f, n, t) {
        var e = t(16), a = t(31), r = t(63), o = t(168), v = r("IE_PROTO"), A = Object.prototype;
        f.exports = o ? Object.getPrototypeOf : function(d) {
          return d = a(d), e(d, v) ? d[v] : typeof d.constructor == "function" && d instanceof d.constructor ? d.constructor.prototype : d instanceof Object ? A : null;
        };
      },
      function(f, n, t) {
        var e = t(76);
        f.exports = e && !Symbol.sham && typeof Symbol.iterator == "symbol";
      },
      function(f, n, t) {
        var e = t(16), a = t(30), r = t(78).indexOf, o = t(51);
        f.exports = function(v, A) {
          var d = a(v), m = 0, s = [], i;
          for (i in d)
            !e(o, i) && e(d, i) && s.push(i);
          for (; A.length > m; )
            e(d, i = A[m++]) && (~r(s, i) || s.push(i));
          return s;
        };
      },
      function(f, n, t) {
        var e = t(36);
        f.exports = e("document", "documentElement");
      },
      function(f, n, t) {
        var e = t(8);
        f.exports = e.Promise;
      },
      function(f, n, t) {
        var e = t(53);
        f.exports = function(a, r, o) {
          for (var v in r)
            o && o.unsafe && a[v] ? a[v] = r[v] : e(a, v, r[v], o);
          return a;
        };
      },
      function(f, n, t) {
        var e = t(36), a = t(18), r = t(10), o = t(14), v = r("species");
        f.exports = function(A) {
          var d = e(A), m = a.f;
          o && d && !d[v] && m(d, v, {
            configurable: !0,
            get: function() {
              return this;
            }
          });
        };
      },
      function(f, n, t) {
        var e = t(10), a = t(44), r = e("iterator"), o = Array.prototype;
        f.exports = function(v) {
          return v !== void 0 && (a.Array === v || o[r] === v);
        };
      },
      function(f, n, t) {
        var e = t(65), a = t(44), r = t(10), o = r("iterator");
        f.exports = function(v) {
          if (v != null)
            return v[o] || v["@@iterator"] || a[e(v)];
        };
      },
      function(f, n, t) {
        var e = t(25);
        f.exports = function(a, r, o, v) {
          try {
            return v ? r(e(o)[0], o[1]) : r(o);
          } catch (d) {
            var A = a.return;
            throw A !== void 0 && e(A.call(a)), d;
          }
        };
      },
      function(f, n, t) {
        var e = t(10), a = e("iterator"), r = !1;
        try {
          var o = 0, v = {
            next: function() {
              return { done: !!o++ };
            },
            return: function() {
              r = !0;
            }
          };
          v[a] = function() {
            return this;
          }, Array.from(v, function() {
            throw 2;
          });
        } catch {
        }
        f.exports = function(A, d) {
          if (!d && !r)
            return !1;
          var m = !1;
          try {
            var s = {};
            s[a] = function() {
              return {
                next: function() {
                  return { done: m = !0 };
                }
              };
            }, A(s);
          } catch {
          }
          return m;
        };
      },
      function(f, n, t) {
        var e = t(25), a = t(41), r = t(10), o = r("species");
        f.exports = function(v, A) {
          var d = e(v).constructor, m;
          return d === void 0 || (m = e(d)[o]) == null ? A : a(m);
        };
      },
      function(f, n, t) {
        var e = t(8), a = t(11), r = t(34), o = t(40), v = t(108), A = t(73), d = t(118), m = e.location, s = e.setImmediate, i = e.clearImmediate, u = e.process, l = e.MessageChannel, p = e.Dispatch, c = 0, h = {}, y = "onreadystatechange", g, x, S, T = function(D) {
          if (h.hasOwnProperty(D)) {
            var R = h[D];
            delete h[D], R();
          }
        }, P = function(D) {
          return function() {
            T(D);
          };
        }, C = function(D) {
          T(D.data);
        }, E = function(D) {
          e.postMessage(D + "", m.protocol + "//" + m.host);
        };
        (!s || !i) && (s = function(R) {
          for (var M = [], I = 1; arguments.length > I; )
            M.push(arguments[I++]);
          return h[++c] = function() {
            (typeof R == "function" ? R : Function(R)).apply(void 0, M);
          }, g(c), c;
        }, i = function(R) {
          delete h[R];
        }, r(u) == "process" ? g = function(D) {
          u.nextTick(P(D));
        } : p && p.now ? g = function(D) {
          p.now(P(D));
        } : l && !d ? (x = new l(), S = x.port2, x.port1.onmessage = C, g = o(S.postMessage, S, 1)) : e.addEventListener && typeof postMessage == "function" && !e.importScripts && !a(E) && m.protocol !== "file:" ? (g = E, e.addEventListener("message", C, !1)) : y in A("script") ? g = function(D) {
          v.appendChild(A("script"))[y] = function() {
            v.removeChild(this), T(D);
          };
        } : g = function(D) {
          setTimeout(P(D), 0);
        }), f.exports = {
          set: s,
          clear: i
        };
      },
      function(f, n, t) {
        var e = t(84);
        f.exports = /(iphone|ipod|ipad).*applewebkit/i.test(e);
      },
      function(f, n, t) {
        var e = t(25), a = t(13), r = t(85);
        f.exports = function(o, v) {
          if (e(o), a(v) && v.constructor === o)
            return v;
          var A = r.f(o), d = A.resolve;
          return d(v), A.promise;
        };
      },
      function(f, n) {
        f.exports = function(t) {
          try {
            return { error: !1, value: t() };
          } catch (e) {
            return { error: !0, value: e };
          }
        };
      },
      function(f, n, t) {
        f.exports = t(197);
      },
      function(f, n, t) {
        var e = t(5), a = t(8), r = t(123), o = t(11), v = t(19), A = t(66), d = t(83), m = t(13), s = t(37), i = t(18).f, u = t(32).forEach, l = t(14), p = t(42), c = p.set, h = p.getterFor;
        f.exports = function(y, g, x) {
          var S = y.indexOf("Map") !== -1, T = y.indexOf("Weak") !== -1, P = S ? "set" : "add", C = a[y], E = C && C.prototype, D = {}, R;
          if (!l || typeof C != "function" || !(T || E.forEach && !o(function() {
            new C().entries().next();
          })))
            R = x.getConstructor(g, y, S, P), r.REQUIRED = !0;
          else {
            R = g(function(I, N) {
              c(d(I, R, y), {
                type: y,
                collection: new C()
              }), N != null && A(N, I[P], I, S);
            });
            var M = h(y);
            u(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(I) {
              var N = I == "add" || I == "set";
              I in E && !(T && I == "clear") && v(R.prototype, I, function(B, F) {
                var O = M(this).collection;
                if (!N && T && !m(B))
                  return I == "get" ? void 0 : !1;
                var H = O[I](B === 0 ? 0 : B, F);
                return N ? this : H;
              });
            }), T || i(R.prototype, "size", {
              configurable: !0,
              get: function() {
                return M(this).collection.size;
              }
            });
          }
          return s(R, y, !1, !0), D[y] = R, e({ global: !0, forced: !0 }, D), T || x.setStrong(R, y, S), R;
        };
      },
      function(f, n, t) {
        var e = t(51), a = t(13), r = t(16), o = t(18).f, v = t(64), A = t(200), d = v("meta"), m = 0, s = Object.isExtensible || function() {
          return !0;
        }, i = function(h) {
          o(h, d, { value: {
            objectID: "O" + ++m,
            weakData: {}
          } });
        }, u = function(h, y) {
          if (!a(h))
            return typeof h == "symbol" ? h : (typeof h == "string" ? "S" : "P") + h;
          if (!r(h, d)) {
            if (!s(h))
              return "F";
            if (!y)
              return "E";
            i(h);
          }
          return h[d].objectID;
        }, l = function(h, y) {
          if (!r(h, d)) {
            if (!s(h))
              return !0;
            if (!y)
              return !1;
            i(h);
          }
          return h[d].weakData;
        }, p = function(h) {
          return A && c.REQUIRED && s(h) && !r(h, d) && i(h), h;
        }, c = f.exports = {
          REQUIRED: !1,
          fastKey: u,
          getWeakData: l,
          onFreeze: p
        };
        e[d] = !0;
      },
      function(f, n, t) {
        var e = t(18).f, a = t(77), r = t(110), o = t(40), v = t(83), A = t(66), d = t(75), m = t(111), s = t(14), i = t(123).fastKey, u = t(42), l = u.set, p = u.getterFor;
        f.exports = {
          getConstructor: function(c, h, y, g) {
            var x = c(function(C, E) {
              v(C, x, h), l(C, {
                type: h,
                index: a(null),
                first: void 0,
                last: void 0,
                size: 0
              }), s || (C.size = 0), E != null && A(E, C[g], C, y);
            }), S = p(h), T = function(C, E, D) {
              var R = S(C), M = P(C, E), I, N;
              return M ? M.value = D : (R.last = M = {
                index: N = i(E, !0),
                key: E,
                value: D,
                previous: I = R.last,
                next: void 0,
                removed: !1
              }, R.first || (R.first = M), I && (I.next = M), s ? R.size++ : C.size++, N !== "F" && (R.index[N] = M)), C;
            }, P = function(C, E) {
              var D = S(C), R = i(E), M;
              if (R !== "F")
                return D.index[R];
              for (M = D.first; M; M = M.next)
                if (M.key == E)
                  return M;
            };
            return r(x.prototype, {
              clear: function() {
                for (var E = this, D = S(E), R = D.index, M = D.first; M; )
                  M.removed = !0, M.previous && (M.previous = M.previous.next = void 0), delete R[M.index], M = M.next;
                D.first = D.last = void 0, s ? D.size = 0 : E.size = 0;
              },
              delete: function(C) {
                var E = this, D = S(E), R = P(E, C);
                if (R) {
                  var M = R.next, I = R.previous;
                  delete D.index[R.index], R.removed = !0, I && (I.next = M), M && (M.previous = I), D.first == R && (D.first = M), D.last == R && (D.last = I), s ? D.size-- : E.size--;
                }
                return !!R;
              },
              forEach: function(E) {
                for (var D = S(this), R = o(E, arguments.length > 1 ? arguments[1] : void 0, 3), M; M = M ? M.next : D.first; )
                  for (R(M.value, M.key, this); M && M.removed; )
                    M = M.previous;
              },
              has: function(E) {
                return !!P(this, E);
              }
            }), r(x.prototype, y ? {
              get: function(E) {
                var D = P(this, E);
                return D && D.value;
              },
              set: function(E, D) {
                return T(this, E === 0 ? 0 : E, D);
              }
            } : {
              add: function(E) {
                return T(this, E = E === 0 ? 0 : E, E);
              }
            }), s && e(x.prototype, "size", {
              get: function() {
                return S(this).size;
              }
            }), x;
          },
          setStrong: function(c, h, y) {
            var g = h + " Iterator", x = p(h), S = p(g);
            d(c, h, function(T, P) {
              l(this, {
                type: g,
                target: T,
                state: x(T),
                kind: P,
                last: void 0
              });
            }, function() {
              for (var T = S(this), P = T.kind, C = T.last; C && C.removed; )
                C = C.previous;
              return !T.target || !(T.last = C = C ? C.next : T.state.first) ? (T.target = void 0, { value: void 0, done: !0 }) : P == "keys" ? { value: C.key, done: !1 } : P == "values" ? { value: C.value, done: !1 } : { value: [C.key, C.value], done: !1 };
            }, y ? "entries" : "values", !y, !0), m(h);
          }
        };
      },
      function(f, n, t) {
        var e = t(12);
        e("iterator");
      },
      function(f, n, t) {
        var e = t(107), a = t(80), r = a.concat("length", "prototype");
        n.f = Object.getOwnPropertyNames || function(v) {
          return e(v, r);
        };
      },
      function(f, n) {
        n.f = Object.getOwnPropertySymbols;
      },
      function(f, n, t) {
        f.exports = t(268);
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.default = {
          zIndex: 1e4
        };
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.default = {
          focus: !0,
          height: 300,
          placeholder: "请输入正文",
          zIndexFullScreen: 10002,
          showFullScreen: !0
        };
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.getPasteImgs = n.getPasteHtml = n.getPasteText = void 0;
        var o = t(2), v = t(6), A = o.__importDefault(t(292));
        function d(i) {
          var u = i.clipboardData, l = "";
          return u == null ? l = window.clipboardData && window.clipboardData.getData("text") : l = u.getData("text/plain"), v.replaceHtmlSymbol(l);
        }
        n.getPasteText = d;
        function m(i, u, l) {
          u === void 0 && (u = !0), l === void 0 && (l = !1);
          var p = i.clipboardData, c = "";
          if (p && (c = p.getData("text/html")), !c) {
            var h = d(i);
            if (!h)
              return "";
            c = "<p>" + h + "</p>";
          }
          return c = c.replace(/<(\d)/gm, function(y, g) {
            return "&lt;" + g;
          }), c = c.replace(/<(\/?meta.*?)>/gim, ""), c = A.default(c, u, l), c;
        }
        n.getPasteHtml = m;
        function s(i) {
          var u, l = [], p = d(i);
          if (p)
            return l;
          var c = (u = i.clipboardData) === null || u === void 0 ? void 0 : u.items;
          return c && (0, r.default)(v).call(v, c, function(h, y) {
            var g = y.type;
            /image/i.test(g) && l.push(y.getAsFile());
          }), l;
        }
        n.getPasteImgs = s;
      },
      function(f, n, t) {
        f.exports = t(294);
      },
      function(f, n, t) {
        f.exports = t(310);
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4)), o = e(t(46));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var v = t(2), A = v.__importDefault(t(3)), d = t(7), m = function() {
          function s(i, u) {
            var l = this;
            this.hideTimeoutId = 0, this.menu = i, this.conf = u;
            var p = A.default('<div class="w-e-droplist"></div>'), c = A.default("<p>" + u.title + "</p>");
            c.addClass("w-e-dp-title"), p.append(c);
            var h = u.list || [], y = u.type || "list", g = u.clickHandler || d.EMPTY_FN, x = A.default('<ul class="' + (y === "list" ? "w-e-list" : "w-e-block") + '"></ul>');
            (0, r.default)(h).call(h, function(S) {
              var T = S.$elem, P = S.value, C = A.default('<li class="w-e-item"></li>');
              T && (C.append(T), x.append(C), C.on("click", function(E) {
                g(P), E.stopPropagation(), l.hideTimeoutId = (0, o.default)(function() {
                  l.hide();
                });
              }));
            }), p.append(x), p.on("mouseleave", function() {
              l.hideTimeoutId = (0, o.default)(function() {
                l.hide();
              });
            }), this.$container = p, this.rendered = !1, this._show = !1;
          }
          return s.prototype.show = function() {
            this.hideTimeoutId && clearTimeout(this.hideTimeoutId);
            var i = this.menu, u = i.$elem, l = this.$container;
            if (!this._show) {
              if (this.rendered)
                l.show();
              else {
                var p = u.getBoundingClientRect().height || 0, c = this.conf.width || 100;
                l.css("margin-top", p + "px").css("width", c + "px"), u.append(l), this.rendered = !0;
              }
              this._show = !0;
            }
          }, s.prototype.hide = function() {
            var i = this.$container;
            this._show && (i.hide(), this._show = !1);
          }, (0, a.default)(s.prototype, "isShow", {
            get: function() {
              return this._show;
            },
            enumerable: !1,
            configurable: !0
          }), s;
        }();
        n.default = m;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(92)), r = e(t(1)), o = e(t(4));
        (0, r.default)(n, "__esModule", {
          value: !0
        });
        var v = t(6);
        function A(d, m) {
          var s = new XMLHttpRequest();
          if (s.open("POST", d), s.timeout = m.timeout || 10 * 1e3, s.ontimeout = function() {
            console.error("wangEditor - 请求超时"), m.onTimeout && m.onTimeout(s);
          }, s.upload && (s.upload.onprogress = function(u) {
            var l = u.loaded / u.total;
            m.onProgress && m.onProgress(l, u);
          }), m.headers && (0, o.default)(v).call(v, m.headers, function(u, l) {
            s.setRequestHeader(u, l);
          }), s.withCredentials = !!m.withCredentials, m.beforeSend) {
            var i = m.beforeSend(s);
            if (i && (0, a.default)(i) === "object" && i.prevent)
              return i.msg;
          }
          return s.onreadystatechange = function() {
            if (s.readyState === 4) {
              var u = s.status;
              if (!(u < 200) && !(u >= 300 && u < 400)) {
                if (u >= 400) {
                  console.error("wangEditor - XHR 报错，状态码 " + u), m.onError && m.onError(s);
                  return;
                }
                var l = s.responseText, p;
                if ((0, a.default)(l) !== "object")
                  try {
                    p = JSON.parse(l);
                  } catch {
                    console.error("wangEditor - 返回结果不是 JSON 格式", l), m.onFail && m.onFail(s, l);
                    return;
                  }
                else
                  p = l;
                m.onSuccess(s, p);
              }
            }
          }, s.send(m.formData || null), s;
        }
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(342)), o = e(t(46));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var v = t(2), A = v.__importDefault(t(3)), d = function() {
          function m(s) {
            this.editor = s, this.$textContainer = s.$textContainerElem, this.$bar = A.default('<div class="w-e-progress"></div>'), this.isShow = !1, this.time = 0, this.timeoutId = 0;
          }
          return m.prototype.show = function(s) {
            var i = this;
            if (!this.isShow) {
              this.isShow = !0;
              var u = this.$bar, l = this.$textContainer;
              l.append(u), (0, r.default)() - this.time > 100 && s <= 1 && (u.css("width", s * 100 + "%"), this.time = (0, r.default)());
              var p = this.timeoutId;
              p && clearTimeout(p), this.timeoutId = (0, o.default)(function() {
                i.hide();
              }, 500);
            }
          }, m.prototype.hide = function() {
            var s = this.$bar;
            s.remove(), this.isShow = !1, this.time = 0, this.timeoutId = 0;
          }, m;
        }();
        n.default = d;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.ListType = void 0;
        var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(24)), A = t(47), d = r.__importStar(t(371)), m;
        (function(i) {
          i.OrderedList = "OL", i.UnorderedList = "UL";
        })(m = n.ListType || (n.ListType = {}));
        var s = function(i) {
          r.__extends(u, i);
          function u(l) {
            var p = this, c = o.default(`<div class="w-e-menu" data-title="序列">
                <i class="w-e-icon-list2"></i>
            </div>`), h = {
              width: 130,
              title: "序列",
              type: "list",
              list: [{
                $elem: o.default(`
                        <p>
                            <i class="w-e-icon-list2 w-e-drop-list-item"></i>
                            ` + l.i18next.t("menus.dropListMenu.list.无序列表") + `
                        <p>`),
                value: m.UnorderedList
              }, {
                $elem: o.default(`<p>
                            <i class="w-e-icon-list-numbered w-e-drop-list-item"></i>
                            ` + l.i18next.t("menus.dropListMenu.list.有序列表") + `
                        <p>`),
                value: m.OrderedList
              }],
              clickHandler: function(g) {
                p.command(g);
              }
            };
            return p = i.call(this, c, l, h) || this, p;
          }
          return u.prototype.command = function(l) {
            var p = this.editor, c = p.selection.getSelectionContainerElem();
            c !== void 0 && (this.handleSelectionRangeNodes(l), this.tryChangeActive());
          }, u.prototype.validator = function(l, p, c) {
            return !(!l.length || !p.length || c.equal(l) || c.equal(p));
          }, u.prototype.handleSelectionRangeNodes = function(l) {
            var p = this.editor, c = p.selection, h = l.toLowerCase(), y = c.getSelectionContainerElem(), g = c.getSelectionStartElem().getNodeTop(p), x = c.getSelectionEndElem().getNodeTop(p);
            if (this.validator(g, x, p.$textElem)) {
              var S = c.getRange(), T = S == null ? void 0 : S.collapsed;
              p.$textElem.equal(y) || (y = y.getNodeTop(p));
              var P = {
                editor: p,
                listType: l,
                listTarget: h,
                $selectionElem: y,
                $startElem: g,
                $endElem: x
              }, C;
              this.isOrderElem(y) ? C = d.ClassType.Wrap : this.isOrderElem(g) && this.isOrderElem(x) ? C = d.ClassType.Join : this.isOrderElem(g) ? C = d.ClassType.StartJoin : this.isOrderElem(x) ? C = d.ClassType.EndJoin : C = d.ClassType.Other;
              var E = new d.default(d.createListHandle(C, P, S));
              A.updateRange(p, E.getSelectionRangeElem(), !!T);
            }
          }, u.prototype.isOrderElem = function(l) {
            var p = l.getNodeName();
            return p === m.OrderedList || p === m.UnorderedList;
          }, u.prototype.tryChangeActive = function() {
          }, u;
        }(v.default);
        n.default = s;
      },
      function(f, n, t) {
        f.exports = t(395);
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        function r(o) {
          var v = o.selection.getSelectionContainerElem();
          return v != null && v.length ? !!(v.getNodeName() == "CODE" || v.getNodeName() == "PRE" || v.parent().getNodeName() == "CODE" || v.parent().getNodeName() == "PRE" || /hljs/.test(v.parent().attr("class"))) : !1;
        }
        n.default = r;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(29));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.todo = void 0;
        var o = t(2), v = o.__importDefault(t(3)), A = function() {
          function m(s) {
            var i;
            this.template = '<ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span></li></ul>', this.checked = !1, this.$todo = v.default(this.template), this.$child = (i = s == null ? void 0 : s.childNodes()) === null || i === void 0 ? void 0 : i.clone(!0);
          }
          return m.prototype.init = function() {
            var s = this.$child, i = this.getInputContainer();
            s && s.insertAfter(i);
          }, m.prototype.getInput = function() {
            var s = this.$todo, i = (0, r.default)(s).call(s, "input");
            return i;
          }, m.prototype.getInputContainer = function() {
            var s = this.getInput().parent();
            return s;
          }, m.prototype.getTodo = function() {
            return this.$todo;
          }, m;
        }();
        n.todo = A;
        function d(m) {
          var s = new A(m);
          return s.init(), s;
        }
        n.default = d;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2);
        t(146), t(148), t(152), t(154), t(156), t(158), t(160);
        var o = r.__importDefault(t(87));
        r.__exportStar(t(442), n);
        try {
        } catch {
          throw new Error("请在浏览器环境下运行");
        }
        n.default = o.default;
      },
      function(f, n, t) {
        var e = t(143);
        f.exports = e;
      },
      function(f, n, t) {
        t(144);
        var e = t(9), a = e.Object, r = f.exports = function(v, A, d) {
          return a.defineProperty(v, A, d);
        };
        a.defineProperty.sham && (r.sham = !0);
      },
      function(f, n, t) {
        var e = t(5), a = t(14), r = t(18);
        e({ target: "Object", stat: !0, forced: !a, sham: !a }, {
          defineProperty: r.f
        });
      },
      function(f, n) {
        var t;
        t = function() {
          return this;
        }();
        try {
          t = t || new Function("return this")();
        } catch {
          typeof window == "object" && (t = window);
        }
        f.exports = t;
      },
      function(f, n, t) {
        var e = t(20), a = t(147);
        a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[f.i, a, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(a, r), f.exports = a.locals || {};
      },
      function(f, n, t) {
        var e = t(21);
        n = e(!1), n.push([f.i, `.w-e-toolbar,
.w-e-text-container,
.w-e-menu-panel {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
  /*表情菜单样式*/
  /*分割线样式*/
}
.w-e-toolbar h1,
.w-e-text-container h1,
.w-e-menu-panel h1 {
  font-size: 32px !important;
}
.w-e-toolbar h2,
.w-e-text-container h2,
.w-e-menu-panel h2 {
  font-size: 24px !important;
}
.w-e-toolbar h3,
.w-e-text-container h3,
.w-e-menu-panel h3 {
  font-size: 18.72px !important;
}
.w-e-toolbar h4,
.w-e-text-container h4,
.w-e-menu-panel h4 {
  font-size: 16px !important;
}
.w-e-toolbar h5,
.w-e-text-container h5,
.w-e-menu-panel h5 {
  font-size: 13.28px !important;
}
.w-e-toolbar p,
.w-e-text-container p,
.w-e-menu-panel p {
  font-size: 16px !important;
}
.w-e-toolbar .eleImg,
.w-e-text-container .eleImg,
.w-e-menu-panel .eleImg {
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  padding: 0 3px;
}
.w-e-toolbar *,
.w-e-text-container *,
.w-e-menu-panel * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.w-e-toolbar hr,
.w-e-text-container hr,
.w-e-menu-panel hr {
  cursor: pointer;
  display: block;
  height: 0px;
  border: 0;
  border-top: 3px solid #ccc;
  margin: 20px 0;
}
.w-e-clear-fix:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-drop-list-item {
  position: relative;
  top: 1px;
  padding-right: 7px;
  color: #333 !important;
}
.w-e-drop-list-tl {
  padding-left: 10px;
  text-align: left;
}
`, ""]), f.exports = n;
      },
      function(f, n, t) {
        var e = t(20), a = t(149);
        a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[f.i, a, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(a, r), f.exports = a.locals || {};
      },
      function(f, n, t) {
        var e = t(21), a = t(150), r = t(151);
        n = e(!1);
        var o = a(r);
        n.push([f.i, `@font-face {
  font-family: 'w-e-icon';
  src: url(` + o + `) format('truetype');
  font-weight: normal;
  font-style: normal;
}
[class^="w-e-icon-"],
[class*=" w-e-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'w-e-icon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.w-e-icon-close:before {
  content: "\\f00d";
}
.w-e-icon-upload2:before {
  content: "\\e9c6";
}
.w-e-icon-trash-o:before {
  content: "\\f014";
}
.w-e-icon-header:before {
  content: "\\f1dc";
}
.w-e-icon-pencil2:before {
  content: "\\e906";
}
.w-e-icon-paint-brush:before {
  content: "\\f1fc";
}
.w-e-icon-image:before {
  content: "\\e90d";
}
.w-e-icon-play:before {
  content: "\\e912";
}
.w-e-icon-location:before {
  content: "\\e947";
}
.w-e-icon-undo:before {
  content: "\\e965";
}
.w-e-icon-redo:before {
  content: "\\e966";
}
.w-e-icon-quotes-left:before {
  content: "\\e977";
}
.w-e-icon-list-numbered:before {
  content: "\\e9b9";
}
.w-e-icon-list2:before {
  content: "\\e9bb";
}
.w-e-icon-link:before {
  content: "\\e9cb";
}
.w-e-icon-happy:before {
  content: "\\e9df";
}
.w-e-icon-bold:before {
  content: "\\ea62";
}
.w-e-icon-underline:before {
  content: "\\ea63";
}
.w-e-icon-italic:before {
  content: "\\ea64";
}
.w-e-icon-strikethrough:before {
  content: "\\ea65";
}
.w-e-icon-table2:before {
  content: "\\ea71";
}
.w-e-icon-paragraph-left:before {
  content: "\\ea77";
}
.w-e-icon-paragraph-center:before {
  content: "\\ea78";
}
.w-e-icon-paragraph-right:before {
  content: "\\ea79";
}
.w-e-icon-paragraph-justify:before {
  content: "\\ea7a";
}
.w-e-icon-terminal:before {
  content: "\\f120";
}
.w-e-icon-page-break:before {
  content: "\\ea68";
}
.w-e-icon-cancel-circle:before {
  content: "\\ea0d";
}
.w-e-icon-font:before {
  content: "\\ea5c";
}
.w-e-icon-text-heigh:before {
  content: "\\ea5f";
}
.w-e-icon-paint-format:before {
  content: "\\e90c";
}
.w-e-icon-indent-increase:before {
  content: "\\ea7b";
}
.w-e-icon-indent-decrease:before {
  content: "\\ea7c";
}
.w-e-icon-row-height:before {
  content: "\\e9be";
}
.w-e-icon-fullscreen_exit:before {
  content: "\\e900";
}
.w-e-icon-fullscreen:before {
  content: "\\e901";
}
.w-e-icon-split-line:before {
  content: "\\ea0b";
}
.w-e-icon-checkbox-checked:before {
  content: "\\ea52";
}
`, ""]), f.exports = n;
      },
      function(f, n, t) {
        f.exports = function(e, a) {
          return a || (a = {}), e = e && e.__esModule ? e.default : e, typeof e != "string" ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), a.hash && (e += a.hash), /["'() \t\n]/.test(e) || a.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e);
        };
      },
      function(f, n, t) {
        t.r(n), n.default = "data:font/woff;base64,d09GRgABAAAAABskAAsAAAAAGtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPFWNtYXAAAAFoAAABHAAAARz2mfAgZ2FzcAAAAoQAAAAIAAAACAAAABBnbHlmAAACjAAAFXwAABV8IH7+mGhlYWQAABgIAAAANgAAADYb6gumaGhlYQAAGEAAAAAkAAAAJAkjBWlobXR4AAAYZAAAAKQAAACkmYcEbmxvY2EAABkIAAAAVAAAAFReAmKYbWF4cAAAGVwAAAAgAAAAIAA0ALZuYW1lAAAZfAAAAYYAAAGGmUoJ+3Bvc3QAABsEAAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAQAAAAA8ACAABAAcAAEAIOkB6QbpDekS6UfpZul36bnpu+m+6cbpy+nf6gvqDepS6lzqX+pl6nHqfPAN8BTxIPHc8fz//f//AAAAAAAg6QDpBukM6RLpR+ll6Xfpuem76b7pxunL6d/qC+oN6lLqXOpf6mLqcep38A3wFPEg8dzx/P/9//8AAf/jFwQXABb7FvcWwxamFpYWVRZUFlIWSxZHFjQWCRYIFcQVuxW5FbcVrBWnEBcQEQ8GDksOLAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAEEAAQO/A38ABQALABEAFwAAATMVIREzAxEhFSMVATUzESE1ETUhESM1Av/A/sJ+fgE+wP4Cfv7CAT5+Ar9+AT78ggE+fsACvsD+wn7+An7+wsAAAAAABABBAAEDvwN/AAUACwARABcAAAEhESM1IxM1MxEhNQERIRUjFREVMxUhEQKBAT5+wMB+/sL9wAE+wMD+wgN//sLA/X7A/sJ+AcIBPn7A/v7AfgE+AAAAAAIAAP/ABAADwAAEABMAAAE3AScBAy4BJxM3ASMBAyUBNQEHAYCAAcBA/kCfFzsyY4ABgMD+gMACgAGA/oBOAUBAAcBA/kD+nTI7FwERTgGA/oD9gMABgMD+gIAAAgAA/8AEAAOAACkALQAAAREjNTQmIyEiBh0BFBYzITI2PQEzESEVIyIGFREUFjsBMjY1ETQmKwE1ASE1IQQAwCYa/UAaJiYaAsAaJoD9wCANExMNgA0TEw0gAUD9QALAAYABgEAaJiYawBomJhpA/wCAEw3+wA0TEw0BQA0TQAGAQAAABAAAAAAEAAOAABAAIQAtADQAAAE4ATEROAExITgBMRE4ATEhNSEiBhURFBYzITI2NRE0JiMHFAYjIiY1NDYzMhYTITUTATM3A8D8gAOA/IAaJiYaA4AaJiYagDgoKDg4KCg4QP0A4AEAQOADQP0AAwBAJhr9ABomJhoDABom4Cg4OCgoODj9uIABgP7AwAAAAgAAAEAEAANAADgAPAAAASYnLgEnJiMiBw4BBwYHBgcOAQcGFRQXHgEXFhcWFx4BFxYzMjc+ATc2NzY3PgE3NjU0Jy4BJyYnARENAQPVNjg5djw9Pz89PHY5ODYLBwgLAwMDAwsIBws2ODl2PD0/Pz08djk4NgsHCAsDAwMDCwgHC/2rAUD+wAMgCAYGCAICAgIIBgYIKSoqWS0uLy8uLVkqKikIBgYIAgICAggGBggpKipZLS4vLy4tWSoqKf3gAYDAwAAAAAACAMD/wANAA8AAGwAnAAABIgcOAQcGFRQXHgEXFjEwNz4BNzY1NCcuAScmAyImNTQ2MzIWFRQGAgBCOzpXGRkyMngyMjIyeDIyGRlXOjtCUHBwUFBwcAPAGRlXOjtCeH19zEFBQUHMfX14Qjs6VxkZ/gBwUFBwcFBQcAAAAQAAAAAEAAOAACsAAAEiBw4BBwYHJxEhJz4BMzIXHgEXFhUUBw4BBwYHFzY3PgE3NjU0Jy4BJyYjAgA1MjJcKSkjlgGAkDWLUFBFRmkeHgkJIhgYHlUoICAtDAwoKIteXWoDgAoLJxscI5b+gJA0PB4eaUZFUCsoKUkgIRpgIysrYjY2OWpdXosoKAABAAAAAAQAA4AAKgAAExQXHgEXFhc3JicuAScmNTQ3PgE3NjMyFhcHIREHJicuAScmIyIHDgEHBgAMDC0gIChVHhgYIgkJHh5pRkVQUIs1kAGAliMpKVwyMjVqXV6LKCgBgDk2NmIrKyNgGiEgSSkoK1BFRmkeHjw0kAGAliMcGycLCigoi15dAAAAAAIAAABABAEDAAAmAE0AABMyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+ASEyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+AeEuKSk9ERISET0pKS4uKSk9ERIBIyN6UlFdQHUtCRAHCBICSS4pKT0REhIRPSkpLi4pKT0REgEjI3pSUV1AdS0JEAcIEgIAEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBAAAGAED/wAQAA8AAAwAHAAsAEQAdACkAACUhFSERIRUhESEVIScRIzUjNRMVMxUjNTc1IzUzFRURIzUzNSM1MzUjNQGAAoD9gAKA/YACgP2AwEBAQIDAgIDAwICAgICAgAIAgAIAgMD/AMBA/fIyQJI8MkCS7v7AQEBAQEAABgAA/8AEAAPAAAMABwALABcAIwAvAAABIRUhESEVIREhFSEBNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYBgAKA/YACgP2AAoD9gP6ASzU1S0s1NUtLNTVLSzU1S0s1NUtLNTVLA4CA/wCA/wCAA0A1S0s1NUtL/rU1S0s1NUtL/rU1S0s1NUtLAAUAAABABWADAAADAAcACwAOABEAABMhFSEVIRUhFSEVIQEXNzUnBwADgPyAA4D8gAOA/IAD4MDAwMADAMBAwEDAAUDAwEDAwAAAAAADAAAAAAQAA6AAAwANABQAADchFSElFSE1EyEVITUhJQkBIxEjEQAEAPwABAD8AIABAAEAAQD9YAEgASDggEBAwEBAAQCAgMABIP7g/wABAAAAAAACAB7/zAPiA7QAMwBkAAABIiYnJicmNDc2PwE+ATMyFhcWFxYUBwYPAQYiJyY0PwE2NCcuASMiBg8BBhQXFhQHDgEjAyImJyYnJjQ3Nj8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFxYUBwYPAQ4BIwG4ChMIIxISEhIjwCNZMTFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PCBMKuDFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PDysQIxISEhIjwCNZMQFECAckLS1eLS0kwCIlJSIkLS1eLS0kVxAQDysPWCl0KRQVFRTAKXQpDysQBwj+iCUiJC0tXi0tJFcQEA8rD1gpdCkUFRUUwCl0KQ8rEA8PJC0tXi0tJMAiJQAAAAAFAAD/wAQAA8AAGwA3AFMAXwBrAAAFMjc+ATc2NTQnLgEnJiMiBw4BBwYVFBceARcWEzIXHgEXFhUUBw4BBwYjIicuAScmNTQ3PgE3NhMyNz4BNzY3BgcOAQcGIyInLgEnJicWFx4BFxYnNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYCAGpdXosoKCgoi15dampdXosoKCgoi15dalZMTHEgISEgcUxMVlZMTHEgISEgcUxMVisrKlEmJiMFHBtWODc/Pzc4VhscBSMmJlEqK9UlGxslJRsbJQGAJRsbJSUbGyVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoA6AhIHFMTFZWTExxICEhIHFMTFZWTExxICH+CQYGFRAQFEM6OlYYGRkYVjo6QxQQEBUGBvcoODgoKDg4KCg4OCgoODgAAAEAAAFABAACQAAPAAATFRQWMyEyNj0BNCYjISIGABMNA8ANExMN/EANEwIgwA0TEw3ADRMTAAAAAwAA/8AEAAPAABsANwBDAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBhMHJwcXBxc3FzcnNwIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTExKoKBgoKBgoKBgoKADwCgoi15dampdXosoKCgoi15dampdXosoKPxgISBxTExWVkxMcSAhISBxTExWVkxMcSAhAqCgoGCgoGCgoGCgoAACAAD/wAQAA8AADwAVAAABISIGFREUFjMhMjY1ETQmASc3FwEXA4D9ADVLSzUDADVLS/4L7VqTATNaA8BLNf0ANUtLNQMANUv85e5akgEyWgAAAAABAGX/wAObA8AAKQAAASImIyIHDgEHBhUUFjMuATU0NjcwBwYCBwYHFSETMzcjNx4BMzI2Nw4BAyBEaEZxU1RtGhtJSAYNZUoQEEs8PFkBPWzGLNc0LVUmLlAYHT0DsBAeHWE+P0FNOwsmN5lvA31+/sWPkCMZAgCA9gkPN2sJBwAAAAACAAAAAAQAA4AACQAXAAAlMwcnMxEjNxcjJREnIxEzFSE1MxEjBxEDgICgoICAoKCA/wBAwID+gIDAQMDAwAIAwMDA/wCA/UBAQALAgAEAAAMAwAAAA0ADgAAWAB8AKAAAAT4BNTQnLgEnJiMhESEyNz4BNzY1NCYBMzIWFRQGKwETIxEzMhYVFAYCxBwgFBRGLi81/sABgDUvLkYUFET+hGUqPDwpZp+fnyw+PgHbIlQvNS8uRhQU/IAUFEYuLzVGdAFGSzU1S/6AAQBLNTVLAAAAAAIAwAAAA0ADgAAfACMAAAEzERQHDgEHBiMiJy4BJyY1ETMRFBYXHgEzMjY3PgE1ASEVIQLAgBkZVzo7QkI7OlcZGYAbGBxJKChJHBgb/gACgP2AA4D+YDw0NU4WFxcWTjU0PAGg/mAeOBcYGxsYFzge/qCAAAAAAAEAgAAAA4ADgAALAAABFSMBMxUhNTMBIzUDgID+wID+QIABQIADgED9AEBAAwBAAAEAAAAABAADgAA9AAABFSMeARUUBgcOASMiJicuATUzFBYzMjY1NCYjITUhLgEnLgE1NDY3PgEzMhYXHgEVIzQmIyIGFRQWMzIWFwQA6xUWNTAscT4+cSwwNYByTk5yck7+AAEsAgQBMDU1MCxxPj5xLDA1gHJOTnJyTjtuKwHAQB1BIjViJCEkJCEkYjU0TEw0NExAAQMBJGI1NWIkISQkISRiNTRMTDQ0TCEfAAAACgAAAAAEAAOAAAMABwALAA8AEwAXABsAHwAjACcAABMRIREBNSEVHQEhNQEVITUjFSE1ESEVISUhFSERNSEVASEVISE1IRUABAD9gAEA/wABAP8AQP8AAQD/AAKAAQD/AAEA/IABAP8AAoABAAOA/IADgP3AwMBAwMACAMDAwMD/AMDAwAEAwMD+wMDAwAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIRUhFSERIRUhESEVIREhFSEABAD8AAKA/YACgP2ABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFyEVIREhFSEDIRUhESEVIQAEAPwAwAKA/YACgP2AwAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEFIRUhESEVIQEhFSERIRUhAAQA/AABgAKA/YACgP2A/oAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEVIRUhFSEVIRUhFSEVIRUhAAQA/AAEAPwABAD8AAQA/AAEAPwAA4CAQIBAgECAQIAAAAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhGQEFAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEAA4CAQIBAgECAQIABAAGAwAAAAAYAAAAABAADgAADAAcACwAPABMAFgAAEyEVIQUhFSEVIRUhFSEVIQUhFSEBESUABAD8AAGAAoD9gAKA/YACgP2A/oAEAPwAAQD/AAOAgECAQIBAgECAAoD+gMAAAQA/AD8C5gLmACwAACUUDwEGIyIvAQcGIyIvASY1ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFQLmEE4QFxcQqKgQFxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQwxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQEE4QFxcQqKgQFwAAAAYAAAAAAyUDbgAUACgAPABNAFUAggAAAREUBwYrASInJjURNDc2OwEyFxYVMxEUBwYrASInJjURNDc2OwEyFxYXERQHBisBIicmNRE0NzY7ATIXFhMRIREUFxYXFjMhMjc2NzY1ASEnJicjBgcFFRQHBisBERQHBiMhIicmNREjIicmPQE0NzY7ATc2NzY7ATIXFh8BMzIXFhUBJQYFCCQIBQYGBQgkCAUGkgUFCCUIBQUFBQglCAUFkgUFCCUIBQUFBQglCAUFSf4ABAQFBAIB2wIEBAQE/oABABsEBrUGBAH3BgUINxobJv4lJhsbNwgFBQUFCLEoCBcWF7cXFhYJKLAIBQYCEv63CAUFBQUIAUkIBQYGBQj+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYF/lsCHf3jDQsKBQUFBQoLDQJmQwUCAgVVJAgGBf3jMCIjISIvAiAFBggkCAUFYBUPDw8PFWAFBQgAAgAHAEkDtwKvABoALgAACQEGIyIvASY1ND8BJyY1ND8BNjMyFwEWFRQHARUUBwYjISInJj0BNDc2MyEyFxYBTv72BgcIBR0GBuHhBgYdBQgHBgEKBgYCaQUFCP3bCAUFBQUIAiUIBQUBhf72BgYcBggHBuDhBgcHBh0FBf71BQgHBv77JQgFBQUFCCUIBQUFBQAAAAEAIwAAA90DbgCzAAAlIicmIyIHBiMiJyY1NDc2NzY3Njc2PQE0JyYjISIHBh0BFBcWFxYzFhcWFRQHBiMiJyYjIgcGIyInJjU0NzY3Njc2NzY9ARE0NTQ1NCc0JyYnJicmJyYnJiMiJyY1NDc2MzIXFjMyNzYzMhcWFRQHBiMGBwYHBh0BFBcWMyEyNzY9ATQnJicmJyY1NDc2MzIXFjMyNzYzMhcWFRQHBgciBwYHBhURFBcWFxYXMhcWFRQHBiMDwRkzMhoZMjMZDQgHCQoNDBEQChIBBxX+fhYHARUJEhMODgwLBwcOGzU1GhgxMRgNBwcJCQsMEA8JEgECAQIDBAQFCBIRDQ0KCwcHDho1NRoYMDEYDgcHCQoMDRAQCBQBBw8BkA4HARQKFxcPDgcHDhkzMhkZMTEZDgcHCgoNDRARCBQUCRERDg0KCwcHDgACAgICDAsPEQkJAQEDAwUMROAMBQMDBQzUUQ0GAQIBCAgSDwwNAgICAgwMDhEICQECAwMFDUUhAdACDQ0ICA4OCgoLCwcHAwYBAQgIEg8MDQICAgINDA8RCAgBAgEGDFC2DAcBAQcMtlAMBgEBBgcWDwwNAgICAg0MDxEICAEBAgYNT/3mRAwGAgIBCQgRDwwNAAACAAD/twP/A7cAEwA5AAABMhcWFRQHAgcGIyInJjU0NwE2MwEWFxYfARYHBiMiJyYnJicmNRYXFhcWFxYzMjc2NzY3Njc2NzY3A5soHh4avkw3RUg0NDUBbSEp/fgXJicvAQJMTHtHNjYhIRARBBMUEBASEQkXCA8SExUVHR0eHikDtxsaKCQz/plGNDU0SUkwAUsf/bErHx8NKHpNTBobLi86OkQDDw4LCwoKFiUbGhERCgsEBAIAAQAAAAAAAIWwaoFfDzz1AAsEAAAAAADbteOZAAAAANu145kAAP+3BWADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAFgAAA//8FYAABAAAAAAAAAAAAAAAAAAAAKQQAAAAAAAAAAAAAAAIAAAAEAABBBAAAQQQAAAAEAAAABAAAAAQAAAAEAADABAAAAAQAAAAEAAAABAAAQAQAAAAFgAAABAAAAAQAAB4EAAAABAAAAAQAAAAEAAAABAAAZQQAAAAEAADABAAAwAQAAIAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAMlAD8DJQAAA74ABwQAACMD/wAAAAAAAAAKABQAHgBKAHYApADmAS4BkgHQAhYCXALQAw4DWAN+A6gEPgTeBPoFZAWOBdAF+AY6BnYGjgbmBy4HVgd+B6gHzgf8CCoIbgkmCXAKYgq+AAEAAAApALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
      },
      function(f, n, t) {
        var e = t(20), a = t(153);
        a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[f.i, a, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(a, r), f.exports = a.locals || {};
      },
      function(f, n, t) {
        var e = t(21);
        n = e(!1), n.push([f.i, `.w-e-toolbar {
  display: flex;
  padding: 0 6px;
  flex-wrap: wrap;
  position: relative;
  /* 单个菜单 */
}
.w-e-toolbar .w-e-menu {
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}
.w-e-toolbar .w-e-menu i {
  color: #999;
}
.w-e-toolbar .w-e-menu:hover {
  background-color: #F6F6F6;
}
.w-e-toolbar .w-e-menu:hover i {
  color: #333;
}
.w-e-toolbar .w-e-active i {
  color: #1e88e5;
}
.w-e-toolbar .w-e-active:hover i {
  color: #1e88e5;
}
.w-e-menu-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-menu-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-item-wrapper {
  font-size: 14px;
  margin: 0 5px;
}
`, ""]), f.exports = n;
      },
      function(f, n, t) {
        var e = t(20), a = t(155);
        a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[f.i, a, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(a, r), f.exports = a.locals || {};
      },
      function(f, n, t) {
        var e = t(21);
        n = e(!1), n.push([f.i, `.w-e-text-container {
  position: relative;
  height: 100%;
}
.w-e-text-container .w-e-progress {
  position: absolute;
  background-color: #1e88e5;
  top: 0;
  left: 0;
  height: 1px;
}
.w-e-text-container .placeholder {
  color: #D4D4D4;
  position: absolute;
  font-size: 11pt;
  line-height: 22px;
  left: 10px;
  top: 10px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: -1;
}
.w-e-text {
  padding: 0 10px;
  overflow-y: auto;
}
.w-e-text p,
.w-e-text h1,
.w-e-text h2,
.w-e-text h3,
.w-e-text h4,
.w-e-text h5,
.w-e-text table,
.w-e-text pre {
  margin: 10px 0;
  line-height: 1.5;
}
.w-e-text ul,
.w-e-text ol {
  margin: 10px 0 10px 20px;
}
.w-e-text blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}
.w-e-text code {
  display: inline-block;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
.w-e-text pre code {
  display: block;
}
.w-e-text table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.w-e-text table td,
.w-e-text table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
  min-height: 30px;
  height: 30px;
}
.w-e-text table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
  background-color: #f1f1f1;
}
.w-e-text:focus {
  outline: none;
}
.w-e-text img {
  cursor: pointer;
}
.w-e-text img:hover {
  box-shadow: 0 0 5px #333;
}
.w-e-text .w-e-todo {
  margin: 0 0 0 20px;
}
.w-e-text .w-e-todo li {
  list-style: none;
  font-size: 1em;
}
.w-e-text .w-e-todo li span:nth-child(1) {
  position: relative;
  left: -18px;
}
.w-e-text .w-e-todo li span:nth-child(1) input {
  position: absolute;
  margin-right: 3px;
}
.w-e-text .w-e-todo li span:nth-child(1) input[type=checkbox] {
  top: 50%;
  margin-top: -6px;
}
.w-e-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-item-wrapper {
  cursor: pointer;
  font-size: 14px;
  margin: 0 5px;
}
.w-e-tooltip-item-wrapper:hover {
  color: #ccc;
  text-decoration: underline;
}
`, ""]), f.exports = n;
      },
      function(f, n, t) {
        var e = t(20), a = t(157);
        a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[f.i, a, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(a, r), f.exports = a.locals || {};
      },
      function(f, n, t) {
        var e = t(21);
        n = e(!1), n.push([f.i, `.w-e-menu .w-e-panel-container {
  position: absolute;
  top: 0;
  left: 50%;
  border: 1px solid #ccc;
  border-top: 0;
  box-shadow: 1px 1px 2px #ccc;
  color: #333;
  background-color: #fff;
  text-align: left;
  /* 为 emotion panel 定制的样式 */
  /* 上传图片、上传视频的 panel 定制样式 */
}
.w-e-menu .w-e-panel-container .w-e-panel-close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
  margin: 2px 5px 0 0;
  cursor: pointer;
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-close:hover {
  color: #333;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title {
  list-style: none;
  display: flex;
  font-size: 14px;
  margin: 2px 10px 0 10px;
  border-bottom: 1px solid #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-item {
  padding: 3px 5px;
  color: #999;
  cursor: pointer;
  margin: 0 3px;
  position: relative;
  top: 1px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-active {
  color: #333;
  border-bottom: 1px solid #333;
  cursor: default;
  font-weight: 700;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content {
  padding: 10px 15px 10px 15px;
  font-size: 16px;
  /* 输入框的样式 */
  /* 按钮的样式 */
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content button:focus {
  outline: none;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea {
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px;
  margin-top: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus {
  border-color: #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text] {
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  height: 20px;
  color: #333;
  text-align: left;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].small {
  width: 30px;
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].block {
  display: block;
  width: 100%;
  margin: 10px 0;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {
  border-bottom: 2px solid #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {
  font-size: 14px;
  color: #1e88e5;
  border: none;
  padding: 5px 10px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 3px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {
  float: left;
  margin-right: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {
  float: right;
  margin-left: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {
  color: #c24f4a;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {
  background-color: #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-menu .w-e-panel-container .w-e-emoticon-container .w-e-item {
  cursor: pointer;
  font-size: 18px;
  padding: 0 3px;
  display: inline-block;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container,
.w-e-menu .w-e-panel-container .w-e-up-video-container {
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn {
  display: inline-block;
  color: #999;
  cursor: pointer;
  font-size: 60px;
  line-height: 1;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn:hover {
  color: #333;
}
`, ""]), f.exports = n;
      },
      function(f, n, t) {
        var e = t(20), a = t(159);
        a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[f.i, a, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(a, r), f.exports = a.locals || {};
      },
      function(f, n, t) {
        var e = t(21);
        n = e(!1), n.push([f.i, `.w-e-toolbar .w-e-droplist {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-right-color: #ccc;
  border-bottom-color: #ccc;
}
.w-e-toolbar .w-e-droplist .w-e-dp-title {
  text-align: center;
  color: #999;
  line-height: 2;
  border-bottom: 1px solid #f1f1f1;
  font-size: 13px;
}
.w-e-toolbar .w-e-droplist ul.w-e-list {
  list-style: none;
  line-height: 1;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {
  color: #333;
  padding: 5px 0;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {
  background-color: #f1f1f1;
}
.w-e-toolbar .w-e-droplist ul.w-e-block {
  list-style: none;
  text-align: left;
  padding: 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {
  display: inline-block;
  padding: 3px 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {
  background-color: #f1f1f1;
}
`, ""]), f.exports = n;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(161));
        Element.prototype.matches || (Element.prototype.matches = function(r) {
          var o = this.ownerDocument.querySelectorAll(r), v = o.length;
          for (v; v >= 0 && o.item(v) !== this; v--)
            ;
          return v > -1;
        }), a.default || (window.Promise = a.default);
      },
      function(f, n, t) {
        f.exports = t(162);
      },
      function(f, n, t) {
        var e = t(163);
        f.exports = e;
      },
      function(f, n, t) {
        t(61), t(50), t(54), t(175), t(178), t(179);
        var e = t(9);
        f.exports = e.Promise;
      },
      function(f, n, t) {
        var e = t(62), a = t(49), r = function(o) {
          return function(v, A) {
            var d = String(a(v)), m = e(A), s = d.length, i, u;
            return m < 0 || m >= s ? o ? "" : void 0 : (i = d.charCodeAt(m), i < 55296 || i > 56319 || m + 1 === s || (u = d.charCodeAt(m + 1)) < 56320 || u > 57343 ? o ? d.charAt(m) : i : o ? d.slice(m, m + 2) : (i - 55296 << 10) + (u - 56320) + 65536);
          };
        };
        f.exports = {
          codeAt: r(!1),
          charAt: r(!0)
        };
      },
      function(f, n, t) {
        var e = t(8), a = t(102), r = e.WeakMap;
        f.exports = typeof r == "function" && /native code/.test(a(r));
      },
      function(f, n, t) {
        var e = t(8), a = t(19);
        f.exports = function(r, o) {
          try {
            a(e, r, o);
          } catch {
            e[r] = o;
          }
          return o;
        };
      },
      function(f, n, t) {
        var e = t(104).IteratorPrototype, a = t(77), r = t(48), o = t(37), v = t(44), A = function() {
          return this;
        };
        f.exports = function(d, m, s) {
          var i = m + " Iterator";
          return d.prototype = a(e, { next: r(1, s) }), o(d, i, !1, !0), v[i] = A, d;
        };
      },
      function(f, n, t) {
        var e = t(11);
        f.exports = !e(function() {
          function a() {
          }
          return a.prototype.constructor = null, Object.getPrototypeOf(new a()) !== a.prototype;
        });
      },
      function(f, n, t) {
        var e = t(14), a = t(18), r = t(25), o = t(52);
        f.exports = e ? Object.defineProperties : function(A, d) {
          r(A);
          for (var m = o(d), s = m.length, i = 0, u; s > i; )
            a.f(A, u = m[i++], d[u]);
          return A;
        };
      },
      function(f, n, t) {
        var e = t(81), a = t(65);
        f.exports = e ? {}.toString : function() {
          return "[object " + a(this) + "]";
        };
      },
      function(f, n, t) {
        var e = t(25), a = t(172);
        f.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
          var r = !1, o = {}, v;
          try {
            v = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, v.call(o, []), r = o instanceof Array;
          } catch {
          }
          return function(d, m) {
            return e(d), a(m), r ? v.call(d, m) : d.__proto__ = m, d;
          };
        }() : void 0);
      },
      function(f, n, t) {
        var e = t(13);
        f.exports = function(a) {
          if (!e(a) && a !== null)
            throw TypeError("Can't set " + String(a) + " as a prototype");
          return a;
        };
      },
      function(f, n, t) {
        var e = t(30), a = t(82), r = t(44), o = t(42), v = t(75), A = "Array Iterator", d = o.set, m = o.getterFor(A);
        f.exports = v(Array, "Array", function(s, i) {
          d(this, {
            type: A,
            target: e(s),
            index: 0,
            kind: i
          });
        }, function() {
          var s = m(this), i = s.target, u = s.kind, l = s.index++;
          return !i || l >= i.length ? (s.target = void 0, { value: void 0, done: !0 }) : u == "keys" ? { value: l, done: !1 } : u == "values" ? { value: i[l], done: !1 } : { value: [l, i[l]], done: !1 };
        }, "values"), r.Arguments = r.Array, a("keys"), a("values"), a("entries");
      },
      function(f, n) {
        f.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0
        };
      },
      function(f, n, t) {
        var e = t(5), a = t(43), r = t(8), o = t(36), v = t(109), A = t(53), d = t(110), m = t(37), s = t(111), i = t(13), u = t(41), l = t(83), p = t(34), c = t(102), h = t(66), y = t(115), g = t(116), x = t(117).set, S = t(176), T = t(119), P = t(177), C = t(85), E = t(120), D = t(42), R = t(101), M = t(10), I = t(86), N = M("species"), B = "Promise", F = D.get, O = D.set, H = D.getterFor(B), L = v, U = r.TypeError, z = r.document, j = r.process, K = o("fetch"), V = C.f, Q = V, w = p(j) == "process", G = !!(z && z.createEvent && r.dispatchEvent), X = "unhandledrejection", tt = "rejectionhandled", et = 0, ut = 1, Mt = 2, at = 1, Tt = 2, At, it, dt, yt, ct = R(B, function() {
          var J = c(L) !== String(L);
          if (!J && (I === 66 || !w && typeof PromiseRejectionEvent != "function") || a && !L.prototype.finally)
            return !0;
          if (I >= 51 && /native code/.test(L))
            return !1;
          var $ = L.resolve(1), Z = function(Y) {
            Y(function() {
            }, function() {
            });
          }, q = $.constructor = {};
          return q[N] = Z, !($.then(function() {
          }) instanceof Z);
        }), Ht = ct || !y(function(J) {
          L.all(J).catch(function() {
          });
        }), Et = function(J) {
          var $;
          return i(J) && typeof ($ = J.then) == "function" ? $ : !1;
        }, mt = function(J, $, Z) {
          if (!$.notified) {
            $.notified = !0;
            var q = $.reactions;
            S(function() {
              for (var Y = $.value, b = $.state == ut, W = 0; q.length > W; ) {
                var k = q[W++], _ = b ? k.ok : k.fail, nt = k.resolve, lt = k.reject, ft = k.domain, ot, Rt, Nt;
                try {
                  _ ? (b || ($.rejection === Tt && Ct(J, $), $.rejection = at), _ === !0 ? ot = Y : (ft && ft.enter(), ot = _(Y), ft && (ft.exit(), Nt = !0)), ot === k.promise ? lt(U("Promise-chain cycle")) : (Rt = Et(ot)) ? Rt.call(ot, nt, lt) : nt(ot)) : lt(Y);
                } catch (bt) {
                  ft && !Nt && ft.exit(), lt(bt);
                }
              }
              $.reactions = [], $.notified = !1, Z && !$.rejection && Pt(J, $);
            });
          }
        }, xt = function(J, $, Z) {
          var q, Y;
          G ? (q = z.createEvent("Event"), q.promise = $, q.reason = Z, q.initEvent(J, !1, !0), r.dispatchEvent(q)) : q = { promise: $, reason: Z }, (Y = r["on" + J]) ? Y(q) : J === X && P("Unhandled promise rejection", Z);
        }, Pt = function(J, $) {
          x.call(r, function() {
            var Z = $.value, q = St($), Y;
            if (q && (Y = E(function() {
              w ? j.emit("unhandledRejection", Z, J) : xt(X, J, Z);
            }), $.rejection = w || St($) ? Tt : at, Y.error))
              throw Y.value;
          });
        }, St = function(J) {
          return J.rejection !== at && !J.parent;
        }, Ct = function(J, $) {
          x.call(r, function() {
            w ? j.emit("rejectionHandled", J) : xt(tt, J, $.value);
          });
        }, vt = function(J, $, Z, q) {
          return function(Y) {
            J($, Z, Y, q);
          };
        }, pt = function(J, $, Z, q) {
          $.done || ($.done = !0, q && ($ = q), $.value = Z, $.state = Mt, mt(J, $, !0));
        }, ht = function(J, $, Z, q) {
          if (!$.done) {
            $.done = !0, q && ($ = q);
            try {
              if (J === Z)
                throw U("Promise can't be resolved itself");
              var Y = Et(Z);
              Y ? S(function() {
                var b = { done: !1 };
                try {
                  Y.call(
                    Z,
                    vt(ht, J, b, $),
                    vt(pt, J, b, $)
                  );
                } catch (W) {
                  pt(J, b, W, $);
                }
              }) : ($.value = Z, $.state = ut, mt(J, $, !1));
            } catch (b) {
              pt(J, { done: !1 }, b, $);
            }
          }
        };
        ct && (L = function($) {
          l(this, L, B), u($), At.call(this);
          var Z = F(this);
          try {
            $(vt(ht, this, Z), vt(pt, this, Z));
          } catch (q) {
            pt(this, Z, q);
          }
        }, At = function($) {
          O(this, {
            type: B,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: et,
            value: void 0
          });
        }, At.prototype = d(L.prototype, {
          then: function($, Z) {
            var q = H(this), Y = V(g(this, L));
            return Y.ok = typeof $ == "function" ? $ : !0, Y.fail = typeof Z == "function" && Z, Y.domain = w ? j.domain : void 0, q.parent = !0, q.reactions.push(Y), q.state != et && mt(this, q, !1), Y.promise;
          },
          catch: function(J) {
            return this.then(void 0, J);
          }
        }), it = function() {
          var J = new At(), $ = F(J);
          this.promise = J, this.resolve = vt(ht, J, $), this.reject = vt(pt, J, $);
        }, C.f = V = function(J) {
          return J === L || J === dt ? new it(J) : Q(J);
        }, !a && typeof v == "function" && (yt = v.prototype.then, A(v.prototype, "then", function($, Z) {
          var q = this;
          return new L(function(Y, b) {
            yt.call(q, Y, b);
          }).then($, Z);
        }, { unsafe: !0 }), typeof K == "function" && e({ global: !0, enumerable: !0, forced: !0 }, {
          fetch: function($) {
            return T(L, K.apply(r, arguments));
          }
        }))), e({ global: !0, wrap: !0, forced: ct }, {
          Promise: L
        }), m(L, B, !1, !0), s(B), dt = o(B), e({ target: B, stat: !0, forced: ct }, {
          reject: function($) {
            var Z = V(this);
            return Z.reject.call(void 0, $), Z.promise;
          }
        }), e({ target: B, stat: !0, forced: a || ct }, {
          resolve: function($) {
            return T(a && this === dt ? L : this, $);
          }
        }), e({ target: B, stat: !0, forced: Ht }, {
          all: function($) {
            var Z = this, q = V(Z), Y = q.resolve, b = q.reject, W = E(function() {
              var k = u(Z.resolve), _ = [], nt = 0, lt = 1;
              h($, function(ft) {
                var ot = nt++, Rt = !1;
                _.push(void 0), lt++, k.call(Z, ft).then(function(Nt) {
                  Rt || (Rt = !0, _[ot] = Nt, --lt || Y(_));
                }, b);
              }), --lt || Y(_);
            });
            return W.error && b(W.value), q.promise;
          },
          race: function($) {
            var Z = this, q = V(Z), Y = q.reject, b = E(function() {
              var W = u(Z.resolve);
              h($, function(k) {
                W.call(Z, k).then(q.resolve, Y);
              });
            });
            return b.error && Y(b.value), q.promise;
          }
        });
      },
      function(f, n, t) {
        var e = t(8), a = t(71).f, r = t(34), o = t(117).set, v = t(118), A = e.MutationObserver || e.WebKitMutationObserver, d = e.process, m = e.Promise, s = r(d) == "process", i = a(e, "queueMicrotask"), u = i && i.value, l, p, c, h, y, g, x, S;
        u || (l = function() {
          var T, P;
          for (s && (T = d.domain) && T.exit(); p; ) {
            P = p.fn, p = p.next;
            try {
              P();
            } catch (C) {
              throw p ? h() : c = void 0, C;
            }
          }
          c = void 0, T && T.enter();
        }, s ? h = function() {
          d.nextTick(l);
        } : A && !v ? (y = !0, g = document.createTextNode(""), new A(l).observe(g, { characterData: !0 }), h = function() {
          g.data = y = !y;
        }) : m && m.resolve ? (x = m.resolve(void 0), S = x.then, h = function() {
          S.call(x, l);
        }) : h = function() {
          o.call(e, l);
        }), f.exports = u || function(T) {
          var P = { fn: T, next: void 0 };
          c && (c.next = P), p || (p = P, h()), c = P;
        };
      },
      function(f, n, t) {
        var e = t(8);
        f.exports = function(a, r) {
          var o = e.console;
          o && o.error && (arguments.length === 1 ? o.error(a) : o.error(a, r));
        };
      },
      function(f, n, t) {
        var e = t(5), a = t(41), r = t(85), o = t(120), v = t(66);
        e({ target: "Promise", stat: !0 }, {
          allSettled: function(d) {
            var m = this, s = r.f(m), i = s.resolve, u = s.reject, l = o(function() {
              var p = a(m.resolve), c = [], h = 0, y = 1;
              v(d, function(g) {
                var x = h++, S = !1;
                c.push(void 0), y++, p.call(m, g).then(function(T) {
                  S || (S = !0, c[x] = { status: "fulfilled", value: T }, --y || i(c));
                }, function(T) {
                  S || (S = !0, c[x] = { status: "rejected", reason: T }, --y || i(c));
                });
              }), --y || i(c);
            });
            return l.error && u(l.value), s.promise;
          }
        });
      },
      function(f, n, t) {
        var e = t(5), a = t(43), r = t(109), o = t(11), v = t(36), A = t(116), d = t(119), m = t(53), s = !!r && o(function() {
          r.prototype.finally.call({ then: function() {
          } }, function() {
          });
        });
        e({ target: "Promise", proto: !0, real: !0, forced: s }, {
          finally: function(i) {
            var u = A(this, v("Promise")), l = typeof i == "function";
            return this.then(
              l ? function(p) {
                return d(u, i()).then(function() {
                  return p;
                });
              } : i,
              l ? function(p) {
                return d(u, i()).then(function() {
                  throw p;
                });
              } : i
            );
          }
        }), !a && typeof r == "function" && !r.prototype.finally && m(r.prototype, "finally", v("Promise").prototype.finally);
      },
      function(f, n, t) {
        t(54);
        var e = t(181), a = t(65), r = Array.prototype, o = {
          DOMTokenList: !0,
          NodeList: !0
        };
        f.exports = function(v) {
          var A = v.forEach;
          return v === r || v instanceof Array && A === r.forEach || o.hasOwnProperty(a(v)) ? e : A;
        };
      },
      function(f, n, t) {
        var e = t(182);
        f.exports = e;
      },
      function(f, n, t) {
        t(183);
        var e = t(15);
        f.exports = e("Array").forEach;
      },
      function(f, n, t) {
        var e = t(5), a = t(184);
        e({ target: "Array", proto: !0, forced: [].forEach != a }, {
          forEach: a
        });
      },
      function(f, n, t) {
        var e = t(32).forEach, a = t(67), r = t(22), o = a("forEach"), v = r("forEach");
        f.exports = !o || !v ? function(d) {
          return e(this, d, arguments.length > 1 ? arguments[1] : void 0);
        } : [].forEach;
      },
      function(f, n, t) {
        var e = t(186);
        f.exports = e;
      },
      function(f, n, t) {
        t(187);
        var e = t(9);
        f.exports = e.Array.isArray;
      },
      function(f, n, t) {
        var e = t(5), a = t(55);
        e({ target: "Array", stat: !0 }, {
          isArray: a
        });
      },
      function(f, n, t) {
        var e = t(189);
        f.exports = e;
      },
      function(f, n, t) {
        var e = t(190), a = Array.prototype;
        f.exports = function(r) {
          var o = r.map;
          return r === a || r instanceof Array && o === a.map ? e : o;
        };
      },
      function(f, n, t) {
        t(191);
        var e = t(15);
        f.exports = e("Array").map;
      },
      function(f, n, t) {
        var e = t(5), a = t(32).map, r = t(56), o = t(22), v = r("map"), A = o("map");
        e({ target: "Array", proto: !0, forced: !v || !A }, {
          map: function(m) {
            return a(this, m, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(f, n, t) {
        var e = t(193);
        f.exports = e;
      },
      function(f, n, t) {
        var e = t(194), a = String.prototype;
        f.exports = function(r) {
          var o = r.trim;
          return typeof r == "string" || r === a || r instanceof String && o === a.trim ? e : o;
        };
      },
      function(f, n, t) {
        t(195);
        var e = t(15);
        f.exports = e("String").trim;
      },
      function(f, n, t) {
        var e = t(5), a = t(90).trim, r = t(196);
        e({ target: "String", proto: !0, forced: r("trim") }, {
          trim: function() {
            return a(this);
          }
        });
      },
      function(f, n, t) {
        var e = t(11), a = t(68), r = "​᠎";
        f.exports = function(o) {
          return e(function() {
            return !!a[o]() || r[o]() != r || a[o].name !== o;
          });
        };
      },
      function(f, n, t) {
        var e = t(198);
        f.exports = e;
      },
      function(f, n, t) {
        t(199), t(61), t(50), t(54);
        var e = t(9);
        f.exports = e.Map;
      },
      function(f, n, t) {
        var e = t(122), a = t(124);
        f.exports = e("Map", function(r) {
          return function() {
            return r(this, arguments.length ? arguments[0] : void 0);
          };
        }, a);
      },
      function(f, n, t) {
        var e = t(11);
        f.exports = !e(function() {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      },
      function(f, n, t) {
        var e = t(202);
        f.exports = e;
      },
      function(f, n, t) {
        var e = t(203), a = Array.prototype;
        f.exports = function(r) {
          var o = r.indexOf;
          return r === a || r instanceof Array && o === a.indexOf ? e : o;
        };
      },
      function(f, n, t) {
        t(204);
        var e = t(15);
        f.exports = e("Array").indexOf;
      },
      function(f, n, t) {
        var e = t(5), a = t(78).indexOf, r = t(67), o = t(22), v = [].indexOf, A = !!v && 1 / [1].indexOf(1, -0) < 0, d = r("indexOf"), m = o("indexOf", { ACCESSORS: !0, 1: 0 });
        e({ target: "Array", proto: !0, forced: A || !d || !m }, {
          indexOf: function(i) {
            return A ? v.apply(this, arguments) || 0 : a(this, i, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(f, n, t) {
        var e = t(206);
        f.exports = e;
      },
      function(f, n, t) {
        var e = t(207), a = Array.prototype;
        f.exports = function(r) {
          var o = r.splice;
          return r === a || r instanceof Array && o === a.splice ? e : o;
        };
      },
      function(f, n, t) {
        t(208);
        var e = t(15);
        f.exports = e("Array").splice;
      },
      function(f, n, t) {
        var e = t(5), a = t(79), r = t(62), o = t(35), v = t(31), A = t(88), d = t(69), m = t(56), s = t(22), i = m("splice"), u = s("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), l = Math.max, p = Math.min, c = 9007199254740991, h = "Maximum allowed length exceeded";
        e({ target: "Array", proto: !0, forced: !i || !u }, {
          splice: function(g, x) {
            var S = v(this), T = o(S.length), P = a(g, T), C = arguments.length, E, D, R, M, I, N;
            if (C === 0 ? E = D = 0 : C === 1 ? (E = 0, D = T - P) : (E = C - 2, D = p(l(r(x), 0), T - P)), T + E - D > c)
              throw TypeError(h);
            for (R = A(S, D), M = 0; M < D; M++)
              I = P + M, I in S && d(R, M, S[I]);
            if (R.length = D, E < D) {
              for (M = P; M < T - D; M++)
                I = M + D, N = M + E, I in S ? S[N] = S[I] : delete S[N];
              for (M = T; M > T - D + E; M--)
                delete S[M - 1];
            } else if (E > D)
              for (M = T - D; M > P; M--)
                I = M + D - 1, N = M + E - 1, I in S ? S[N] = S[I] : delete S[N];
            for (M = 0; M < E; M++)
              S[M + P] = arguments[M + 2];
            return S.length = T - D + E, R;
          }
        });
      },
      function(f, n, t) {
        var e = t(210);
        f.exports = e;
      },
      function(f, n, t) {
        var e = t(211), a = Array.prototype;
        f.exports = function(r) {
          var o = r.filter;
          return r === a || r instanceof Array && o === a.filter ? e : o;
        };
      },
      function(f, n, t) {
        t(212);
        var e = t(15);
        f.exports = e("Array").filter;
      },
      function(f, n, t) {
        var e = t(5), a = t(32).filter, r = t(56), o = t(22), v = r("filter"), A = o("filter");
        e({ target: "Array", proto: !0, forced: !v || !A }, {
          filter: function(m) {
            return a(this, m, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(f, n, t) {
        var e = t(214);
        f.exports = e;
      },
      function(f, n, t) {
        var e = t(215), a = t(217), r = Array.prototype, o = String.prototype;
        f.exports = function(v) {
          var A = v.includes;
          return v === r || v instanceof Array && A === r.includes ? e : typeof v == "string" || v === o || v instanceof String && A === o.includes ? a : A;
        };
      },
      function(f, n, t) {
        t(216);
        var e = t(15);
        f.exports = e("Array").includes;
      },
      function(f, n, t) {
        var e = t(5), a = t(78).includes, r = t(82), o = t(22), v = o("indexOf", { ACCESSORS: !0, 1: 0 });
        e({ target: "Array", proto: !0, forced: !v }, {
          includes: function(d) {
            return a(this, d, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), r("includes");
      },
      function(f, n, t) {
        t(218);
        var e = t(15);
        f.exports = e("String").includes;
      },
      function(f, n, t) {
        var e = t(5), a = t(219), r = t(49), o = t(221);
        e({ target: "String", proto: !0, forced: !o("includes") }, {
          includes: function(A) {
            return !!~String(r(this)).indexOf(a(A), arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(f, n, t) {
        var e = t(220);
        f.exports = function(a) {
          if (e(a))
            throw TypeError("The method doesn't accept regular expressions");
          return a;
        };
      },
      function(f, n, t) {
        var e = t(13), a = t(34), r = t(10), o = r("match");
        f.exports = function(v) {
          var A;
          return e(v) && ((A = v[o]) !== void 0 ? !!A : a(v) == "RegExp");
        };
      },
      function(f, n, t) {
        var e = t(10), a = e("match");
        f.exports = function(r) {
          var o = /./;
          try {
            "/./"[r](o);
          } catch {
            try {
              return o[a] = !1, "/./"[r](o);
            } catch {
            }
          }
          return !1;
        };
      },
      function(f, n, t) {
        var e = t(223);
        f.exports = e;
      },
      function(f, n, t) {
        var e = t(224), a = Function.prototype;
        f.exports = function(r) {
          var o = r.bind;
          return r === a || r instanceof Function && o === a.bind ? e : o;
        };
      },
      function(f, n, t) {
        t(225);
        var e = t(15);
        f.exports = e("Function").bind;
      },
      function(f, n, t) {
        var e = t(5), a = t(226);
        e({ target: "Function", proto: !0 }, {
          bind: a
        });
      },
      function(f, n, t) {
        var e = t(41), a = t(13), r = [].slice, o = {}, v = function(A, d, m) {
          if (!(d in o)) {
            for (var s = [], i = 0; i < d; i++)
              s[i] = "a[" + i + "]";
            o[d] = Function("C,a", "return new C(" + s.join(",") + ")");
          }
          return o[d](A, m);
        };
        f.exports = Function.bind || function(d) {
          var m = e(this), s = r.call(arguments, 1), i = function() {
            var l = s.concat(r.call(arguments));
            return this instanceof i ? v(m, l.length, l) : m.apply(d, l);
          };
          return a(m.prototype) && (i.prototype = m.prototype), i;
        };
      },
      function(f, n, t) {
        f.exports = t(228);
      },
      function(f, n, t) {
        var e = t(229);
        f.exports = e;
      },
      function(f, n, t) {
        t(125), t(50), t(54);
        var e = t(93);
        f.exports = e.f("iterator");
      },
      function(f, n, t) {
        f.exports = t(231);
      },
      function(f, n, t) {
        var e = t(232);
        t(251), t(252), t(253), t(254), t(255), f.exports = e;
      },
      function(f, n, t) {
        t(233), t(61), t(234), t(236), t(237), t(238), t(239), t(125), t(240), t(241), t(242), t(243), t(244), t(245), t(246), t(247), t(248), t(249), t(250);
        var e = t(9);
        f.exports = e.Symbol;
      },
      function(f, n, t) {
        var e = t(5), a = t(11), r = t(55), o = t(13), v = t(31), A = t(35), d = t(69), m = t(88), s = t(56), i = t(10), u = t(86), l = i("isConcatSpreadable"), p = 9007199254740991, c = "Maximum allowed index exceeded", h = u >= 51 || !a(function() {
          var S = [];
          return S[l] = !1, S.concat()[0] !== S;
        }), y = s("concat"), g = function(S) {
          if (!o(S))
            return !1;
          var T = S[l];
          return T !== void 0 ? !!T : r(S);
        }, x = !h || !y;
        e({ target: "Array", proto: !0, forced: x }, {
          concat: function(T) {
            var P = v(this), C = m(P, 0), E = 0, D, R, M, I, N;
            for (D = -1, M = arguments.length; D < M; D++)
              if (N = D === -1 ? P : arguments[D], g(N)) {
                if (I = A(N.length), E + I > p)
                  throw TypeError(c);
                for (R = 0; R < I; R++, E++)
                  R in N && d(C, E, N[R]);
              } else {
                if (E >= p)
                  throw TypeError(c);
                d(C, E++, N);
              }
            return C.length = E, C;
          }
        });
      },
      function(f, n, t) {
        var e = t(5), a = t(8), r = t(36), o = t(43), v = t(14), A = t(76), d = t(106), m = t(11), s = t(16), i = t(55), u = t(13), l = t(25), p = t(31), c = t(30), h = t(60), y = t(48), g = t(77), x = t(52), S = t(126), T = t(235), P = t(127), C = t(71), E = t(18), D = t(59), R = t(19), M = t(53), I = t(74), N = t(63), B = t(51), F = t(64), O = t(10), H = t(93), L = t(12), U = t(37), z = t(42), j = t(32).forEach, K = N("hidden"), V = "Symbol", Q = "prototype", w = O("toPrimitive"), G = z.set, X = z.getterFor(V), tt = Object[Q], et = a.Symbol, ut = r("JSON", "stringify"), Mt = C.f, at = E.f, Tt = T.f, At = D.f, it = I("symbols"), dt = I("op-symbols"), yt = I("string-to-symbol-registry"), ct = I("symbol-to-string-registry"), Ht = I("wks"), Et = a.QObject, mt = !Et || !Et[Q] || !Et[Q].findChild, xt = v && m(function() {
          return g(at({}, "a", {
            get: function() {
              return at(this, "a", { value: 7 }).a;
            }
          })).a != 7;
        }) ? function(Y, b, W) {
          var k = Mt(tt, b);
          k && delete tt[b], at(Y, b, W), k && Y !== tt && at(tt, b, k);
        } : at, Pt = function(Y, b) {
          var W = it[Y] = g(et[Q]);
          return G(W, {
            type: V,
            tag: Y,
            description: b
          }), v || (W.description = b), W;
        }, St = d ? function(Y) {
          return typeof Y == "symbol";
        } : function(Y) {
          return Object(Y) instanceof et;
        }, Ct = function(b, W, k) {
          b === tt && Ct(dt, W, k), l(b);
          var _ = h(W, !0);
          return l(k), s(it, _) ? (k.enumerable ? (s(b, K) && b[K][_] && (b[K][_] = !1), k = g(k, { enumerable: y(0, !1) })) : (s(b, K) || at(b, K, y(1, {})), b[K][_] = !0), xt(b, _, k)) : at(b, _, k);
        }, vt = function(b, W) {
          l(b);
          var k = c(W), _ = x(k).concat(Z(k));
          return j(_, function(nt) {
            (!v || ht.call(k, nt)) && Ct(b, nt, k[nt]);
          }), b;
        }, pt = function(b, W) {
          return W === void 0 ? g(b) : vt(g(b), W);
        }, ht = function(b) {
          var W = h(b, !0), k = At.call(this, W);
          return this === tt && s(it, W) && !s(dt, W) ? !1 : k || !s(this, W) || !s(it, W) || s(this, K) && this[K][W] ? k : !0;
        }, J = function(b, W) {
          var k = c(b), _ = h(W, !0);
          if (!(k === tt && s(it, _) && !s(dt, _))) {
            var nt = Mt(k, _);
            return nt && s(it, _) && !(s(k, K) && k[K][_]) && (nt.enumerable = !0), nt;
          }
        }, $ = function(b) {
          var W = Tt(c(b)), k = [];
          return j(W, function(_) {
            !s(it, _) && !s(B, _) && k.push(_);
          }), k;
        }, Z = function(b) {
          var W = b === tt, k = Tt(W ? dt : c(b)), _ = [];
          return j(k, function(nt) {
            s(it, nt) && (!W || s(tt, nt)) && _.push(it[nt]);
          }), _;
        };
        if (A || (et = function() {
          if (this instanceof et)
            throw TypeError("Symbol is not a constructor");
          var b = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), W = F(b), k = function(_) {
            this === tt && k.call(dt, _), s(this, K) && s(this[K], W) && (this[K][W] = !1), xt(this, W, y(1, _));
          };
          return v && mt && xt(tt, W, { configurable: !0, set: k }), Pt(W, b);
        }, M(et[Q], "toString", function() {
          return X(this).tag;
        }), M(et, "withoutSetter", function(Y) {
          return Pt(F(Y), Y);
        }), D.f = ht, E.f = Ct, C.f = J, S.f = T.f = $, P.f = Z, H.f = function(Y) {
          return Pt(O(Y), Y);
        }, v && (at(et[Q], "description", {
          configurable: !0,
          get: function() {
            return X(this).description;
          }
        }), o || M(tt, "propertyIsEnumerable", ht, { unsafe: !0 }))), e({ global: !0, wrap: !0, forced: !A, sham: !A }, {
          Symbol: et
        }), j(x(Ht), function(Y) {
          L(Y);
        }), e({ target: V, stat: !0, forced: !A }, {
          for: function(Y) {
            var b = String(Y);
            if (s(yt, b))
              return yt[b];
            var W = et(b);
            return yt[b] = W, ct[W] = b, W;
          },
          keyFor: function(b) {
            if (!St(b))
              throw TypeError(b + " is not a symbol");
            if (s(ct, b))
              return ct[b];
          },
          useSetter: function() {
            mt = !0;
          },
          useSimple: function() {
            mt = !1;
          }
        }), e({ target: "Object", stat: !0, forced: !A, sham: !v }, {
          create: pt,
          defineProperty: Ct,
          defineProperties: vt,
          getOwnPropertyDescriptor: J
        }), e({ target: "Object", stat: !0, forced: !A }, {
          getOwnPropertyNames: $,
          getOwnPropertySymbols: Z
        }), e({ target: "Object", stat: !0, forced: m(function() {
          P.f(1);
        }) }, {
          getOwnPropertySymbols: function(b) {
            return P.f(p(b));
          }
        }), ut) {
          var q = !A || m(function() {
            var Y = et();
            return ut([Y]) != "[null]" || ut({ a: Y }) != "{}" || ut(Object(Y)) != "{}";
          });
          e({ target: "JSON", stat: !0, forced: q }, {
            stringify: function(b, W, k) {
              for (var _ = [b], nt = 1, lt; arguments.length > nt; )
                _.push(arguments[nt++]);
              if (lt = W, !(!u(W) && b === void 0 || St(b)))
                return i(W) || (W = function(ft, ot) {
                  if (typeof lt == "function" && (ot = lt.call(this, ft, ot)), !St(ot))
                    return ot;
                }), _[1] = W, ut.apply(null, _);
            }
          });
        }
        et[Q][w] || R(et[Q], w, et[Q].valueOf), U(et, V), B[K] = !0;
      },
      function(f, n, t) {
        var e = t(30), a = t(126).f, r = {}.toString, o = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], v = function(A) {
          try {
            return a(A);
          } catch {
            return o.slice();
          }
        };
        f.exports.f = function(d) {
          return o && r.call(d) == "[object Window]" ? v(d) : a(e(d));
        };
      },
      function(f, n, t) {
        var e = t(12);
        e("asyncIterator");
      },
      function(f, n) {
      },
      function(f, n, t) {
        var e = t(12);
        e("hasInstance");
      },
      function(f, n, t) {
        var e = t(12);
        e("isConcatSpreadable");
      },
      function(f, n, t) {
        var e = t(12);
        e("match");
      },
      function(f, n, t) {
        var e = t(12);
        e("matchAll");
      },
      function(f, n, t) {
        var e = t(12);
        e("replace");
      },
      function(f, n, t) {
        var e = t(12);
        e("search");
      },
      function(f, n, t) {
        var e = t(12);
        e("species");
      },
      function(f, n, t) {
        var e = t(12);
        e("split");
      },
      function(f, n, t) {
        var e = t(12);
        e("toPrimitive");
      },
      function(f, n, t) {
        var e = t(12);
        e("toStringTag");
      },
      function(f, n, t) {
        var e = t(12);
        e("unscopables");
      },
      function(f, n, t) {
        var e = t(37);
        e(Math, "Math", !0);
      },
      function(f, n, t) {
        var e = t(8), a = t(37);
        a(e.JSON, "JSON", !0);
      },
      function(f, n, t) {
        var e = t(12);
        e("asyncDispose");
      },
      function(f, n, t) {
        var e = t(12);
        e("dispose");
      },
      function(f, n, t) {
        var e = t(12);
        e("observable");
      },
      function(f, n, t) {
        var e = t(12);
        e("patternMatch");
      },
      function(f, n, t) {
        var e = t(12);
        e("replaceAll");
      },
      function(f, n, t) {
        f.exports = t(257);
      },
      function(f, n, t) {
        var e = t(258);
        f.exports = e;
      },
      function(f, n, t) {
        t(259);
        var e = t(9);
        f.exports = e.parseInt;
      },
      function(f, n, t) {
        var e = t(5), a = t(260);
        e({ global: !0, forced: parseInt != a }, {
          parseInt: a
        });
      },
      function(f, n, t) {
        var e = t(8), a = t(90).trim, r = t(68), o = e.parseInt, v = /^[+-]?0[Xx]/, A = o(r + "08") !== 8 || o(r + "0x16") !== 22;
        f.exports = A ? function(m, s) {
          var i = a(String(m));
          return o(i, s >>> 0 || (v.test(i) ? 16 : 10));
        } : o;
      },
      function(f, n, t) {
        var e = t(262);
        f.exports = e;
      },
      function(f, n, t) {
        var e = t(263), a = Array.prototype;
        f.exports = function(r) {
          var o = r.slice;
          return r === a || r instanceof Array && o === a.slice ? e : o;
        };
      },
      function(f, n, t) {
        t(264);
        var e = t(15);
        f.exports = e("Array").slice;
      },
      function(f, n, t) {
        var e = t(5), a = t(13), r = t(55), o = t(79), v = t(35), A = t(30), d = t(69), m = t(10), s = t(56), i = t(22), u = s("slice"), l = i("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), p = m("species"), c = [].slice, h = Math.max;
        e({ target: "Array", proto: !0, forced: !u || !l }, {
          slice: function(g, x) {
            var S = A(this), T = v(S.length), P = o(g, T), C = o(x === void 0 ? T : x, T), E, D, R;
            if (r(S) && (E = S.constructor, typeof E == "function" && (E === Array || r(E.prototype)) ? E = void 0 : a(E) && (E = E[p], E === null && (E = void 0)), E === Array || E === void 0))
              return c.call(S, P, C);
            for (D = new (E === void 0 ? Array : E)(h(C - P, 0)), R = 0; P < C; P++, R++)
              P in S && d(D, R, S[P]);
            return D.length = R, D;
          }
        });
      },
      function(f, n, t) {
        t(266);
        var e = t(9);
        f.exports = e.setTimeout;
      },
      function(f, n, t) {
        var e = t(5), a = t(8), r = t(84), o = [].slice, v = /MSIE .\./.test(r), A = function(d) {
          return function(m, s) {
            var i = arguments.length > 2, u = i ? o.call(arguments, 2) : void 0;
            return d(i ? function() {
              (typeof m == "function" ? m : Function(m)).apply(this, u);
            } : m, s);
          };
        };
        e({ global: !0, bind: !0, forced: v }, {
          setTimeout: A(a.setTimeout),
          setInterval: A(a.setInterval)
        });
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(128));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(272)), A = o.__importDefault(t(273)), d = o.__importDefault(t(129)), m = o.__importDefault(t(274)), s = o.__importDefault(t(275)), i = o.__importDefault(t(276)), u = o.__importDefault(t(130)), l = o.__importDefault(t(277)), p = o.__importDefault(t(278)), c = o.__importDefault(t(279)), h = (0, r.default)(
          {},
          v.default,
          A.default,
          d.default,
          s.default,
          m.default,
          i.default,
          u.default,
          l.default,
          p.default,
          c.default,
          {
            linkCheck: function(g, x) {
              return !0;
            }
          }
        );
        n.default = h;
      },
      function(f, n, t) {
        var e = t(269);
        f.exports = e;
      },
      function(f, n, t) {
        t(270);
        var e = t(9);
        f.exports = e.Object.assign;
      },
      function(f, n, t) {
        var e = t(5), a = t(271);
        e({ target: "Object", stat: !0, forced: Object.assign !== a }, {
          assign: a
        });
      },
      function(f, n, t) {
        var e = t(14), a = t(11), r = t(52), o = t(127), v = t(59), A = t(31), d = t(72), m = Object.assign, s = Object.defineProperty;
        f.exports = !m || a(function() {
          if (e && m({ b: 1 }, m(s({}, "a", {
            enumerable: !0,
            get: function() {
              s(this, "b", {
                value: 3,
                enumerable: !1
              });
            }
          }), { b: 2 })).b !== 1)
            return !0;
          var i = {}, u = {}, l = Symbol(), p = "abcdefghijklmnopqrst";
          return i[l] = 7, p.split("").forEach(function(c) {
            u[c] = c;
          }), m({}, i)[l] != 7 || r(m({}, u)).join("") != p;
        }) ? function(u, l) {
          for (var p = A(u), c = arguments.length, h = 1, y = o.f, g = v.f; c > h; )
            for (var x = d(arguments[h++]), S = y ? r(x).concat(y(x)) : r(x), T = S.length, P = 0, C; T > P; )
              C = S[P++], (!e || g.call(x, C)) && (p[C] = x[C]);
          return p;
        } : m;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.default = {
          menus: [
            "head",
            "bold",
            "fontSize",
            "fontName",
            "italic",
            "underline",
            "strikeThrough",
            "indent",
            "lineHeight",
            "foreColor",
            "backColor",
            "link",
            "list",
            "todo",
            "justify",
            "quote",
            "emoticon",
            "image",
            "video",
            "table",
            "code",
            "splitLine",
            "undo",
            "redo"
          ],
          fontNames: ["黑体", "仿宋", "楷体", "标楷体", "华文仿宋", "华文楷体", "宋体", "微软雅黑", "Arial", "Tahoma", "Verdana", "Times New Roman", "Courier New"],
          fontSizes: {
            "x-small": {
              name: "10px",
              value: "1"
            },
            small: {
              name: "13px",
              value: "2"
            },
            normal: {
              name: "16px",
              value: "3"
            },
            large: {
              name: "18px",
              value: "4"
            },
            "x-large": {
              name: "24px",
              value: "5"
            },
            "xx-large": {
              name: "32px",
              value: "6"
            },
            "xxx-large": {
              name: "48px",
              value: "7"
            }
          },
          colors: ["#000000", "#ffffff", "#eeece0", "#1c487f", "#4d80bf", "#c24f4a", "#8baa4a", "#7b5ba1", "#46acc8", "#f9963b"],
          languageType: ["Bash", "C", "C#", "C++", "CSS", "Java", "JavaScript", "JSON", "TypeScript", "Plain text", "Html", "XML", "SQL", "Go", "Kotlin", "Lua", "Markdown", "PHP", "Python", "Shell Session", "Ruby"],
          languageTab: "　　　　",
          emotions: [{
            title: "表情",
            type: "emoji",
            content: "😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😛 😝 😜 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😢 😭 😤 😠 😡 😳 😱 😨 🤗 🤔 😶 😑 😬 🙄 😯 😴 😷 🤑 😈 🤡 💩 👻 💀 👀 👣".split(/\s/)
          }, {
            title: "手势",
            type: "emoji",
            content: "👐 🙌 👏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🙏".split(/\s/)
          }],
          lineHeights: ["1", "1.15", "1.6", "2", "2.5", "3"],
          undoLimit: 20,
          indentation: "2em",
          showMenuTooltips: !0,
          menuTooltipPosition: "up"
        };
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(7);
        function o(v, A, d) {
          window.alert(v), d && console.error("wangEditor: " + d);
        }
        n.default = {
          onchangeTimeout: 200,
          onchange: null,
          onfocus: r.EMPTY_FN,
          onblur: r.EMPTY_FN,
          onCatalogChange: null,
          customAlert: o
        };
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.default = {
          pasteFilterStyle: !0,
          pasteIgnoreImg: !1,
          pasteTextHandle: function(o) {
            return o;
          }
        };
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.default = {
          styleWithCSS: !1
        };
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(7);
        n.default = {
          linkImgCheck: function(v, A, d) {
            return !0;
          },
          showLinkImg: !0,
          showLinkImgAlt: !0,
          showLinkImgHref: !0,
          linkImgCallback: r.EMPTY_FN,
          uploadImgAccept: ["jpg", "jpeg", "png", "gif", "bmp"],
          uploadImgServer: "",
          uploadImgShowBase64: !1,
          uploadImgMaxSize: 5 * 1024 * 1024,
          uploadImgMaxLength: 100,
          uploadFileName: "",
          uploadImgParams: {},
          uploadImgParamsWithUrl: !1,
          uploadImgHeaders: {},
          uploadImgHooks: {},
          uploadImgTimeout: 10 * 1e3,
          withCredentials: !1,
          customUploadImg: null,
          uploadImgFromMedia: null
        };
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.default = {
          lang: "zh-CN",
          languages: {
            "zh-CN": {
              wangEditor: {
                重置: "重置",
                插入: "插入",
                默认: "默认",
                创建: "创建",
                修改: "修改",
                如: "如",
                请输入正文: "请输入正文",
                menus: {
                  title: {
                    标题: "标题",
                    加粗: "加粗",
                    字号: "字号",
                    字体: "字体",
                    斜体: "斜体",
                    下划线: "下划线",
                    删除线: "删除线",
                    缩进: "缩进",
                    行高: "行高",
                    文字颜色: "文字颜色",
                    背景色: "背景色",
                    链接: "链接",
                    序列: "序列",
                    对齐: "对齐",
                    引用: "引用",
                    表情: "表情",
                    图片: "图片",
                    视频: "视频",
                    表格: "表格",
                    代码: "代码",
                    分割线: "分割线",
                    恢复: "恢复",
                    撤销: "撤销",
                    全屏: "全屏",
                    取消全屏: "取消全屏",
                    待办事项: "待办事项"
                  },
                  dropListMenu: {
                    设置标题: "设置标题",
                    背景颜色: "背景颜色",
                    文字颜色: "文字颜色",
                    设置字号: "设置字号",
                    设置字体: "设置字体",
                    设置缩进: "设置缩进",
                    对齐方式: "对齐方式",
                    设置行高: "设置行高",
                    序列: "序列",
                    head: {
                      正文: "正文"
                    },
                    indent: {
                      增加缩进: "增加缩进",
                      减少缩进: "减少缩进"
                    },
                    justify: {
                      靠左: "靠左",
                      居中: "居中",
                      靠右: "靠右",
                      两端: "两端"
                    },
                    list: {
                      无序列表: "无序列表",
                      有序列表: "有序列表"
                    }
                  },
                  panelMenus: {
                    emoticon: {
                      默认: "默认",
                      新浪: "新浪",
                      emoji: "emoji",
                      手势: "手势"
                    },
                    image: {
                      上传图片: "上传图片",
                      网络图片: "网络图片",
                      图片地址: "图片地址",
                      图片文字说明: "图片文字说明",
                      跳转链接: "跳转链接"
                    },
                    link: {
                      链接: "链接",
                      链接文字: "链接文字",
                      取消链接: "取消链接",
                      查看链接: "查看链接"
                    },
                    video: {
                      插入视频: "插入视频",
                      上传视频: "上传视频"
                    },
                    table: {
                      行: "行",
                      列: "列",
                      的: "的",
                      表格: "表格",
                      添加行: "添加行",
                      删除行: "删除行",
                      添加列: "添加列",
                      删除列: "删除列",
                      设置表头: "设置表头",
                      取消表头: "取消表头",
                      插入表格: "插入表格",
                      删除表格: "删除表格"
                    },
                    code: {
                      删除代码: "删除代码",
                      修改代码: "修改代码",
                      插入代码: "插入代码"
                    }
                  }
                },
                validate: {
                  张图片: "张图片",
                  大于: "大于",
                  图片链接: "图片链接",
                  不是图片: "不是图片",
                  返回结果: "返回结果",
                  上传图片超时: "上传图片超时",
                  上传图片错误: "上传图片错误",
                  上传图片失败: "上传图片失败",
                  插入图片错误: "插入图片错误",
                  一次最多上传: "一次最多上传",
                  下载链接失败: "下载链接失败",
                  图片验证未通过: "图片验证未通过",
                  服务器返回状态: "服务器返回状态",
                  上传图片返回结果错误: "上传图片返回结果错误",
                  请替换为支持的图片类型: "请替换为支持的图片类型",
                  您插入的网络图片无法识别: "您插入的网络图片无法识别",
                  您刚才插入的图片链接未通过编辑器校验: "您刚才插入的图片链接未通过编辑器校验",
                  插入视频错误: "插入视频错误",
                  视频链接: "视频链接",
                  不是视频: "不是视频",
                  视频验证未通过: "视频验证未通过",
                  个视频: "个视频",
                  上传视频超时: "上传视频超时",
                  上传视频错误: "上传视频错误",
                  上传视频失败: "上传视频失败",
                  上传视频返回结果错误: "上传视频返回结果错误"
                }
              }
            },
            en: {
              wangEditor: {
                重置: "reset",
                插入: "insert",
                默认: "default",
                创建: "create",
                修改: "edit",
                如: "like",
                请输入正文: "please enter the text",
                menus: {
                  title: {
                    标题: "head",
                    加粗: "bold",
                    字号: "font size",
                    字体: "font family",
                    斜体: "italic",
                    下划线: "underline",
                    删除线: "strikethrough",
                    缩进: "indent",
                    行高: "line heihgt",
                    文字颜色: "font color",
                    背景色: "background",
                    链接: "link",
                    序列: "numbered list",
                    对齐: "align",
                    引用: "quote",
                    表情: "emoticons",
                    图片: "image",
                    视频: "media",
                    表格: "table",
                    代码: "code",
                    分割线: "split line",
                    恢复: "redo",
                    撤销: "undo",
                    全屏: "fullscreen",
                    取消全屏: "cancel fullscreen",
                    待办事项: "todo"
                  },
                  dropListMenu: {
                    设置标题: "title",
                    背景颜色: "background",
                    文字颜色: "font color",
                    设置字号: "font size",
                    设置字体: "font family",
                    设置缩进: "indent",
                    对齐方式: "align",
                    设置行高: "line heihgt",
                    序列: "list",
                    head: {
                      正文: "text"
                    },
                    indent: {
                      增加缩进: "indent",
                      减少缩进: "outdent"
                    },
                    justify: {
                      靠左: "left",
                      居中: "center",
                      靠右: "right",
                      两端: "justify"
                    },
                    list: {
                      无序列表: "unordered",
                      有序列表: "ordered"
                    }
                  },
                  panelMenus: {
                    emoticon: {
                      表情: "emoji",
                      手势: "gesture"
                    },
                    image: {
                      上传图片: "upload image",
                      网络图片: "network image",
                      图片地址: "image link",
                      图片文字说明: "image alt",
                      跳转链接: "hyperlink"
                    },
                    link: {
                      链接: "link",
                      链接文字: "link text",
                      取消链接: "unlink",
                      查看链接: "view links"
                    },
                    video: {
                      插入视频: "insert video",
                      上传视频: "upload local video"
                    },
                    table: {
                      行: "rows",
                      列: "columns",
                      的: " ",
                      表格: "table",
                      添加行: "insert row",
                      删除行: "delete row",
                      添加列: "insert column",
                      删除列: "delete column",
                      设置表头: "set header",
                      取消表头: "cancel header",
                      插入表格: "insert table",
                      删除表格: "delete table"
                    },
                    code: {
                      删除代码: "delete code",
                      修改代码: "edit code",
                      插入代码: "insert code"
                    }
                  }
                },
                validate: {
                  张图片: "images",
                  大于: "greater than",
                  图片链接: "image link",
                  不是图片: "is not image",
                  返回结果: "return results",
                  上传图片超时: "upload image timeout",
                  上传图片错误: "upload image error",
                  上传图片失败: "upload image failed",
                  插入图片错误: "insert image error",
                  一次最多上传: "once most at upload",
                  下载链接失败: "download link failed",
                  图片验证未通过: "image validate failed",
                  服务器返回状态: "server return status",
                  上传图片返回结果错误: "upload image return results error",
                  请替换为支持的图片类型: "please replace with a supported image type",
                  您插入的网络图片无法识别: "the network picture you inserted is not recognized",
                  您刚才插入的图片链接未通过编辑器校验: "the image link you just inserted did not pass the editor verification",
                  插入视频错误: "insert video error",
                  视频链接: "video link",
                  不是视频: "is not video",
                  视频验证未通过: "video validate failed",
                  个视频: "videos",
                  上传视频超时: "upload video timeout",
                  上传视频错误: "upload video error",
                  上传视频失败: "upload video failed",
                  上传视频返回结果错误: "upload video return results error"
                }
              }
            }
          }
        };
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(6);
        function o() {
          return !!(r.UA.isIE() || r.UA.isOldEdge);
        }
        n.default = {
          compatibleMode: o,
          historyMaxSize: 30
        };
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(7);
        n.default = {
          onlineVideoCheck: function(v) {
            return !0;
          },
          onlineVideoCallback: r.EMPTY_FN,
          showLinkVideo: !0,
          uploadVideoAccept: ["mp4"],
          uploadVideoServer: "",
          uploadVideoMaxSize: 1 * 1024 * 1024 * 1024,
          uploadVideoName: "",
          uploadVideoParams: {},
          uploadVideoParamsWithUrl: !1,
          uploadVideoHeaders: {},
          uploadVideoHooks: {},
          uploadVideoTimeout: 1e3 * 60 * 60 * 2,
          withVideoCredentials: !1,
          customUploadVideo: null,
          customInsertVideo: null
        };
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(17));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(3)), A = t(6), d = t(7), m = function() {
          function s(i) {
            this._currentRange = null, this.editor = i;
          }
          return s.prototype.getRange = function() {
            return this._currentRange;
          }, s.prototype.saveRange = function(i) {
            if (i) {
              this._currentRange = i;
              return;
            }
            var u = window.getSelection();
            if (u.rangeCount !== 0) {
              var l = u.getRangeAt(0), p = this.getSelectionContainerElem(l);
              if (p != null && p.length && !(p.attr("contenteditable") === "false" || p.parentUntil("[contenteditable=false]"))) {
                var c = this.editor, h = c.$textElem;
                if (h.isContain(p)) {
                  if (h.elems[0] === p.elems[0]) {
                    var y;
                    if ((0, r.default)(y = h.html()).call(y) === d.EMPTY_P) {
                      var g = h.children(), x = g == null ? void 0 : g.last();
                      c.selection.createRangeByElem(x, !0, !0), c.selection.restoreSelection();
                    }
                  }
                  this._currentRange = l;
                }
              }
            }
          }, s.prototype.collapseRange = function(i) {
            i === void 0 && (i = !1);
            var u = this._currentRange;
            u && u.collapse(i);
          }, s.prototype.getSelectionText = function() {
            var i = this._currentRange;
            return i ? i.toString() : "";
          }, s.prototype.getSelectionContainerElem = function(i) {
            var u;
            u = i || this._currentRange;
            var l;
            if (u)
              return l = u.commonAncestorContainer, v.default(l.nodeType === 1 ? l : l.parentNode);
          }, s.prototype.getSelectionStartElem = function(i) {
            var u;
            u = i || this._currentRange;
            var l;
            if (u)
              return l = u.startContainer, v.default(l.nodeType === 1 ? l : l.parentNode);
          }, s.prototype.getSelectionEndElem = function(i) {
            var u;
            u = i || this._currentRange;
            var l;
            if (u)
              return l = u.endContainer, v.default(l.nodeType === 1 ? l : l.parentNode);
          }, s.prototype.isSelectionEmpty = function() {
            var i = this._currentRange;
            return !!(i && i.startContainer && i.startContainer === i.endContainer && i.startOffset === i.endOffset);
          }, s.prototype.restoreSelection = function() {
            var i = window.getSelection(), u = this._currentRange;
            i && u && (i.removeAllRanges(), i.addRange(u));
          }, s.prototype.createEmptyRange = function() {
            var i = this.editor, u = this.getRange(), l;
            if (u && this.isSelectionEmpty())
              try {
                A.UA.isWebkit() ? (i.cmd.do("insertHTML", "&#8203;"), u.setEnd(u.endContainer, u.endOffset + 1), this.saveRange(u)) : (l = v.default("<strong>&#8203;</strong>"), i.cmd.do("insertElem", l), this.createRangeByElem(l, !0));
              } catch {
              }
          }, s.prototype.createRangeByElems = function(i, u) {
            var l = window.getSelection ? window.getSelection() : document.getSelection();
            l == null || l.removeAllRanges();
            var p = document.createRange();
            p.setStart(i, 0), p.setEnd(u, u.childNodes.length || 1), this.saveRange(p), this.restoreSelection();
          }, s.prototype.createRangeByElem = function(i, u, l) {
            if (i.length) {
              var p = i.elems[0], c = document.createRange();
              l ? c.selectNodeContents(p) : c.selectNode(p), u != null && (c.collapse(u), u || (this.saveRange(c), this.editor.selection.moveCursor(p))), this.saveRange(c);
            }
          }, s.prototype.getSelectionRangeTopNodes = function() {
            var i, u, l, p = (i = this.getSelectionStartElem()) === null || i === void 0 ? void 0 : i.getNodeTop(this.editor), c = (u = this.getSelectionEndElem()) === null || u === void 0 ? void 0 : u.getNodeTop(this.editor);
            return l = this.recordSelectionNodes(v.default(p), v.default(c)), l;
          }, s.prototype.moveCursor = function(i, u) {
            var l, p = this.getRange(), c = i.nodeType === 3 ? (l = i.nodeValue) === null || l === void 0 ? void 0 : l.length : i.childNodes.length;
            (A.UA.isFirefox || A.UA.isIE()) && c !== 0 && (i.nodeType === 3 || i.childNodes[c - 1].nodeName === "BR") && (c = c - 1);
            var h = u ?? c;
            p && i && (p.setStart(i, h), p.setEnd(i, h), this.restoreSelection());
          }, s.prototype.getCursorPos = function() {
            var i = window.getSelection();
            return i == null ? void 0 : i.anchorOffset;
          }, s.prototype.clearWindowSelectionRange = function() {
            var i = window.getSelection();
            i && i.removeAllRanges();
          }, s.prototype.recordSelectionNodes = function(i, u) {
            var l = [], p = !0;
            try {
              for (var c = i, h = this.editor.$textElem; p; ) {
                var y = c == null ? void 0 : c.getNodeTop(this.editor);
                y.getNodeName() === "BODY" && (p = !1), y.length > 0 && (l.push(v.default(c)), u != null && u.equal(y) || h.equal(y) ? p = !1 : c = y.getNextSibling());
              }
            } catch {
              p = !1;
            }
            return l;
          }, s.prototype.setRangeToElem = function(i) {
            var u = this.getRange();
            u == null || u.setStart(i, 0), u == null || u.setEnd(i, 0);
          }, s;
        }();
        n.default = m;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(3)), v = function() {
          function A(d) {
            this.editor = d;
          }
          return A.prototype.do = function(d, m) {
            var s = this.editor;
            s.config.styleWithCSS && document.execCommand("styleWithCSS", !1, "true");
            var i = s.selection;
            if (i.getRange()) {
              switch (i.restoreSelection(), d) {
                case "insertHTML":
                  this.insertHTML(m);
                  break;
                case "insertElem":
                  this.insertElem(m);
                  break;
                default:
                  this.execCommand(d, m);
                  break;
              }
              s.menus.changeActive(), i.saveRange(), i.restoreSelection();
            }
          }, A.prototype.insertHTML = function(d) {
            var m = this.editor, s = m.selection.getRange();
            if (s != null) {
              if (this.queryCommandSupported("insertHTML"))
                this.execCommand("insertHTML", d);
              else if (s.insertNode) {
                if (s.deleteContents(), o.default(d).elems.length > 0)
                  s.insertNode(o.default(d).elems[0]);
                else {
                  var i = document.createElement("p");
                  i.appendChild(document.createTextNode(d)), s.insertNode(i);
                }
                m.selection.collapseRange();
              }
            }
          }, A.prototype.insertElem = function(d) {
            var m = this.editor, s = m.selection.getRange();
            s != null && s.insertNode && (s.deleteContents(), s.insertNode(d.elems[0]));
          }, A.prototype.execCommand = function(d, m) {
            document.execCommand(d, !1, m);
          }, A.prototype.queryCommandValue = function(d) {
            return document.queryCommandValue(d);
          }, A.prototype.queryCommandState = function(d) {
            return document.queryCommandState(d);
          }, A.prototype.queryCommandSupported = function(d) {
            return document.queryCommandSupported(d);
          }, A;
        }();
        n.default = v;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(29)), o = e(t(4)), v = e(t(17)), A = e(t(27)), d = e(t(46));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var m = t(2), s = m.__importDefault(t(3)), i = m.__importDefault(t(287)), u = t(6), l = m.__importDefault(t(299)), p = m.__importDefault(t(300)), c = t(7), h = function() {
          function y(g) {
            this.editor = g, this.eventHooks = {
              onBlurEvents: [],
              changeEvents: [],
              dropEvents: [],
              clickEvents: [],
              keydownEvents: [],
              keyupEvents: [],
              tabUpEvents: [],
              tabDownEvents: [],
              enterUpEvents: [],
              enterDownEvents: [],
              deleteUpEvents: [],
              deleteDownEvents: [],
              pasteEvents: [],
              linkClickEvents: [],
              codeClickEvents: [],
              textScrollEvents: [],
              toolbarClickEvents: [],
              imgClickEvents: [],
              imgDragBarMouseDownEvents: [],
              tableClickEvents: [],
              menuClickEvents: [],
              dropListMenuHoverEvents: [],
              splitLineEvents: [],
              videoClickEvents: []
            };
          }
          return y.prototype.init = function() {
            this._saveRange(), this._bindEventHooks(), i.default(this);
          }, y.prototype.togglePlaceholder = function() {
            var g, x = this.html(), S = (0, r.default)(g = this.editor.$textContainerElem).call(g, ".placeholder");
            S.hide(), !this.editor.isComposing && (!x || x === " ") && S.show();
          }, y.prototype.clear = function() {
            this.html(c.EMPTY_P);
          }, y.prototype.html = function(g) {
            var x = this.editor, S = x.$textElem;
            if (g == null) {
              var T = S.html();
              T = T.replace(/\u200b/gm, ""), T = T.replace(/<p><\/p>/gim, ""), T = T.replace(c.EMPTY_P_LAST_REGEX, ""), T = T.replace(c.EMPTY_P_REGEX, "<p>");
              var P = T.match(/<(img|br|hr|input)[^>]*>/gi);
              return P !== null && (0, o.default)(P).call(P, function(C) {
                C.match(/\/>/) || (T = T.replace(C, C.substring(0, C.length - 1) + "/>"));
              }), T;
            }
            g = (0, v.default)(g).call(g), g === "" && (g = c.EMPTY_P), (0, A.default)(g).call(g, "<") !== 0 && (g = "<p>" + g + "</p>"), S.html(g), x.initSelection();
          }, y.prototype.setJSON = function(g) {
            var x = p.default(g).children(), S = this.editor, T = S.$textElem;
            x && T.replaceChildAll(x);
          }, y.prototype.getJSON = function() {
            var g = this.editor, x = g.$textElem;
            return l.default(x);
          }, y.prototype.text = function(g) {
            var x = this.editor, S = x.$textElem;
            if (g == null) {
              var T = S.text();
              return T = T.replace(/\u200b/gm, ""), T;
            }
            S.text("<p>" + g + "</p>"), x.initSelection();
          }, y.prototype.append = function(g) {
            var x = this.editor;
            (0, A.default)(g).call(g, "<") !== 0 && (g = "<p>" + g + "</p>"), this.html(this.html() + g), x.initSelection();
          }, y.prototype._saveRange = function() {
            var g = this.editor, x = g.$textElem, S = s.default(document);
            function T() {
              g.selection.saveRange(), g.menus.changeActive();
            }
            x.on("keyup", T);
            function P() {
              T(), x.off("click", P);
            }
            x.on("click", P);
            function C() {
              T(), S.off("mouseup", C);
            }
            function E() {
              S.on("mouseup", C), x.off("mouseleave", E);
            }
            x.on("mousedown", function() {
              x.on("mouseleave", E);
            }), x.on("mouseup", function(D) {
              x.off("mouseleave", E), (0, d.default)(function() {
                var R = g.selection, M = R.getRange();
                M !== null && T();
              }, 0);
            });
          }, y.prototype._bindEventHooks = function() {
            var g = this.editor, x = g.$textElem, S = this.eventHooks;
            x.on("click", function(P) {
              var C = S.clickEvents;
              (0, o.default)(C).call(C, function(E) {
                return E(P);
              });
            }), x.on("keyup", function(P) {
              if (P.keyCode === 13) {
                var C = S.enterUpEvents;
                (0, o.default)(C).call(C, function(E) {
                  return E(P);
                });
              }
            }), x.on("keyup", function(P) {
              var C = S.keyupEvents;
              (0, o.default)(C).call(C, function(E) {
                return E(P);
              });
            }), x.on("keydown", function(P) {
              var C = S.keydownEvents;
              (0, o.default)(C).call(C, function(E) {
                return E(P);
              });
            }), x.on("keyup", function(P) {
              if (!(P.keyCode !== 8 && P.keyCode !== 46)) {
                var C = S.deleteUpEvents;
                (0, o.default)(C).call(C, function(E) {
                  return E(P);
                });
              }
            }), x.on("keydown", function(P) {
              if (!(P.keyCode !== 8 && P.keyCode !== 46)) {
                var C = S.deleteDownEvents;
                (0, o.default)(C).call(C, function(E) {
                  return E(P);
                });
              }
            }), x.on("paste", function(P) {
              if (!u.UA.isIE()) {
                P.preventDefault();
                var C = S.pasteEvents;
                (0, o.default)(C).call(C, function(E) {
                  return E(P);
                });
              }
            }), x.on("keydown", function(P) {
              (g.isFocus || g.isCompatibleMode) && (P.ctrlKey || P.metaKey) && P.keyCode === 90 && (P.preventDefault(), P.shiftKey ? g.history.restore() : g.history.revoke());
            }), x.on("keyup", function(P) {
              if (P.keyCode === 9) {
                P.preventDefault();
                var C = S.tabUpEvents;
                (0, o.default)(C).call(C, function(E) {
                  return E(P);
                });
              }
            }), x.on("keydown", function(P) {
              if (P.keyCode === 9) {
                P.preventDefault();
                var C = S.tabDownEvents;
                (0, o.default)(C).call(C, function(E) {
                  return E(P);
                });
              }
            }), x.on(
              "scroll",
              u.throttle(function(P) {
                var C = S.textScrollEvents;
                (0, o.default)(C).call(C, function(E) {
                  return E(P);
                });
              }, 100)
            );
            function T(P) {
              P.preventDefault();
            }
            s.default(document).on("dragleave", T).on("drop", T).on("dragenter", T).on("dragover", T), g.beforeDestroy(function() {
              s.default(document).off("dragleave", T).off("drop", T).off("dragenter", T).off("dragover", T);
            }), x.on("drop", function(P) {
              P.preventDefault();
              var C = S.dropEvents;
              (0, o.default)(C).call(C, function(E) {
                return E(P);
              });
            }), x.on("click", function(P) {
              var C = null, E = P.target, D = s.default(E);
              if (D.getNodeName() === "A")
                C = D;
              else {
                var R = D.parentUntil("a");
                R != null && (C = R);
              }
              if (C) {
                var M = S.linkClickEvents;
                (0, o.default)(M).call(M, function(I) {
                  return I(C);
                });
              }
            }), x.on("click", function(P) {
              var C = null, E = P.target, D = s.default(E);
              if (D.getNodeName() === "IMG" && !D.elems[0].getAttribute("data-emoji") && (P.stopPropagation(), C = D), !!C) {
                var R = S.imgClickEvents;
                (0, o.default)(R).call(R, function(M) {
                  return M(C);
                });
              }
            }), x.on("click", function(P) {
              var C = null, E = P.target, D = s.default(E);
              if (D.getNodeName() === "PRE")
                C = D;
              else {
                var R = D.parentUntil("pre");
                R !== null && (C = R);
              }
              if (C) {
                var M = S.codeClickEvents;
                (0, o.default)(M).call(M, function(I) {
                  return I(C);
                });
              }
            }), x.on("click", function(P) {
              var C = null, E = P.target, D = s.default(E);
              if (D.getNodeName() === "HR" && (C = D), !!C) {
                g.selection.createRangeByElem(C), g.selection.restoreSelection();
                var R = S.splitLineEvents;
                (0, o.default)(R).call(R, function(M) {
                  return M(C);
                });
              }
            }), g.$toolbarElem.on("click", function(P) {
              var C = S.toolbarClickEvents;
              (0, o.default)(C).call(C, function(E) {
                return E(P);
              });
            }), g.$textContainerElem.on("mousedown", function(P) {
              var C = P.target, E = s.default(C);
              if (E.hasClass("w-e-img-drag-rb")) {
                var D = S.imgDragBarMouseDownEvents;
                (0, o.default)(D).call(D, function(R) {
                  return R();
                });
              }
            }), x.on("click", function(P) {
              var C = null, E = P.target;
              if (C = s.default(E).parentUntilEditor("TABLE", g, E), !!C) {
                var D = S.tableClickEvents;
                (0, o.default)(D).call(D, function(R) {
                  return R(C, P);
                });
              }
            }), x.on("keydown", function(P) {
              if (P.keyCode === 13) {
                var C = S.enterDownEvents;
                (0, o.default)(C).call(C, function(E) {
                  return E(P);
                });
              }
            }), x.on("click", function(P) {
              var C = null, E = P.target, D = s.default(E);
              if (D.getNodeName() === "VIDEO" && (P.stopPropagation(), C = D), !!C) {
                var R = S.videoClickEvents;
                (0, o.default)(R).call(R, function(M) {
                  return M(C);
                });
              }
            });
          }, y;
        }();
        n.default = h;
      },
      function(f, n, t) {
        var e = t(284);
        f.exports = e;
      },
      function(f, n, t) {
        var e = t(285), a = Array.prototype;
        f.exports = function(r) {
          var o = r.find;
          return r === a || r instanceof Array && o === a.find ? e : o;
        };
      },
      function(f, n, t) {
        t(286);
        var e = t(15);
        f.exports = e("Array").find;
      },
      function(f, n, t) {
        var e = t(5), a = t(32).find, r = t(82), o = t(22), v = "find", A = !0, d = o(v);
        v in [] && Array(1)[v](function() {
          A = !1;
        }), e({ target: "Array", proto: !0, forced: A || !d }, {
          find: function(s) {
            return a(this, s, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), r(v);
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(288)), v = r.__importStar(t(289)), A = r.__importDefault(t(290)), d = r.__importDefault(t(291)), m = r.__importDefault(t(298));
        function s(i) {
          var u = i.editor, l = i.eventHooks;
          o.default(u, l.enterUpEvents, l.enterDownEvents), v.default(u, l.deleteUpEvents, l.deleteDownEvents), v.cutToKeepP(u, l.keyupEvents), A.default(u, l.tabDownEvents), d.default(u, l.pasteEvents), m.default(u, l.imgClickEvents);
        }
        n.default = s;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(27));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = t(7), A = o.__importDefault(t(3));
        function d(m, s, i) {
          function u(c) {
            var h, y = A.default(v.EMPTY_P);
            if (y.insertBefore(c), (0, r.default)(h = c.html()).call(h, "<img") >= 0) {
              y.remove();
              return;
            }
            m.selection.createRangeByElem(y, !0, !0), m.selection.restoreSelection(), c.remove();
          }
          function l() {
            var c = m.$textElem, h = m.selection.getSelectionContainerElem(), y = h.parent();
            if (y.html() === "<code><br></code>") {
              u(y);
              return;
            }
            if (h.getNodeName() === "FONT" && h.text() === "" && h.attr("face") === "monospace") {
              u(y);
              return;
            }
            if (y.equal(c)) {
              var g = h.getNodeName();
              g === "P" && h.attr("data-we-empty-p") === null || h.text() || u(h);
            }
          }
          s.push(l);
          function p(c) {
            var h;
            m.selection.saveRange((h = getSelection()) === null || h === void 0 ? void 0 : h.getRangeAt(0));
            var y = m.selection.getSelectionContainerElem();
            y.id === m.textElemId && (c.preventDefault(), m.cmd.do("insertHTML", "<p><br></p>"));
          }
          i.push(p);
        }
        n.default = d;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(17)), o = e(t(28));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.cutToKeepP = void 0;
        var v = t(2), A = t(7), d = v.__importDefault(t(3));
        function m(i, u, l) {
          function p() {
            var h = i.$textElem, y = i.$textElem.html(), g = i.$textElem.text(), x = (0, r.default)(y).call(y), S = ["<p><br></p>", "<br>", '<p data-we-empty-p=""></p>', A.EMPTY_P];
            if (/^\s*$/.test(g) && (!x || (0, o.default)(S).call(S, x))) {
              h.html(A.EMPTY_P);
              var T = h.getNode();
              i.selection.createRangeByElems(T.childNodes[0], T.childNodes[0]);
              var P = i.selection.getSelectionContainerElem();
              i.selection.restoreSelection(), i.selection.moveCursor(P.getNode(), 0);
            }
          }
          u.push(p);
          function c(h) {
            var y, g = i.$textElem, x = (0, r.default)(y = g.html().toLowerCase()).call(y);
            if (x === A.EMPTY_P) {
              h.preventDefault();
              return;
            }
          }
          l.push(c);
        }
        function s(i, u) {
          function l(p) {
            var c;
            if (p.keyCode === 88) {
              var h = i.$textElem, y = (0, r.default)(c = h.html().toLowerCase()).call(c);
              if (!y || y === "<br>") {
                var g = d.default(A.EMPTY_P);
                h.html(" "), h.append(g), i.selection.createRangeByElem(g, !1, !0), i.selection.restoreSelection(), i.selection.moveCursor(g.getNode(), 0);
              }
            }
          }
          u.push(l);
        }
        n.cutToKeepP = s, n.default = m;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        function r(o, v) {
          function A() {
            if (o.cmd.queryCommandSupported("insertHTML")) {
              var d = o.selection.getSelectionContainerElem();
              if (d) {
                var m = d.parent(), s = d.getNodeName(), i = m.getNodeName();
                s == "CODE" || i === "CODE" || i === "PRE" || /hljs/.test(i) ? o.cmd.do("insertHTML", o.config.languageTab) : o.cmd.do("insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
              }
            }
          }
          v.push(A);
        }
        n.default = r;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(17)), o = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var v = t(131), A = t(6), d = t(7);
        function m(p) {
          var c, h = (0, r.default)(c = p.replace(/<div>/gim, "<p>").replace(/<\/div>/gim, "</p>")).call(c), y = document.createElement("div");
          return y.innerHTML = h, y.innerHTML.replace(/<p><\/p>/gim, "");
        }
        function s(p) {
          var c = p.replace(/<br>|<br\/>/gm, `
`).replace(/<[^>]+>/gm, "");
          return c;
        }
        function i(p) {
          var c;
          if (p === "")
            return !1;
          var h = document.createElement("div");
          return h.innerHTML = p, ((c = h.firstChild) === null || c === void 0 ? void 0 : c.nodeName) === "P";
        }
        function u(p) {
          if (!(p != null && p.length))
            return !1;
          var c = p.elems[0];
          return c.nodeName === "P" && c.innerHTML === "<br>";
        }
        function l(p, c) {
          function h(y) {
            var g = p.config, x = g.pasteFilterStyle, S = g.pasteIgnoreImg, T = g.pasteTextHandle, P = v.getPasteHtml(y, x, S), C = v.getPasteText(y);
            C = C.replace(/\n/gm, "<br>");
            var E = p.selection.getSelectionContainerElem();
            if (E) {
              var D = E == null ? void 0 : E.getNodeName(), R = E == null ? void 0 : E.getNodeTop(p), M = "";
              if (R.elems[0] && (M = R == null ? void 0 : R.getNodeName()), D === "CODE" || M === "PRE") {
                T && A.isFunction(T) && (C = "" + (T(C) || "")), p.cmd.do("insertHTML", s(C));
                return;
              }
              if (d.urlRegex.test(C) && x) {
                T && A.isFunction(T) && (C = "" + (T(C) || ""));
                var I = C.replace(d.urlRegex, function(z) {
                  return '<a href="' + z + '" target="_blank">' + z + "</a>";
                }), N = p.selection.getRange(), B = document.createElement("div"), F = document.createDocumentFragment();
                if (B.innerHTML = I, N == null)
                  return;
                for (; B.childNodes.length; )
                  F.append(B.childNodes[0]);
                var O = F.querySelectorAll("a");
                (0, o.default)(O).call(O, function(z) {
                  z.innerText = z.href;
                }), N.insertNode && (N.deleteContents(), N.insertNode(F)), p.selection.clearWindowSelectionRange();
                return;
              }
              if (P)
                try {
                  T && A.isFunction(T) && (P = "" + (T(P) || ""));
                  var H = /[\.\#\@]?\w+[ ]+\{[^}]*\}/.test(P);
                  if (H && x)
                    p.cmd.do("insertHTML", "" + m(C));
                  else {
                    var L = m(P);
                    if (i(L)) {
                      var U = p.$textElem;
                      if (p.cmd.do("insertHTML", L), U.equal(E)) {
                        p.selection.createEmptyRange();
                        return;
                      }
                      u(R) && R.remove();
                    } else
                      p.cmd.do("insertHTML", L);
                  }
                } catch {
                  T && A.isFunction(T) && (C = "" + (T(C) || "")), p.cmd.do("insertHTML", "" + m(C));
                }
            }
          }
          c.push(h);
        }
        n.default = l;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(17)), o = e(t(4)), v = e(t(28));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var A = t(2), d = t(293), m = A.__importDefault(t(297));
        function s(c) {
          var h = /<span>.*?<\/span>/gi, y = /<span>(.*?)<\/span>/;
          return c.replace(h, function(g) {
            var x = g.match(y);
            return x == null ? "" : x[1];
          });
        }
        function i(c, h) {
          var y;
          return c = (0, r.default)(y = c.toLowerCase()).call(y), !!(d.IGNORE_TAGS.has(c) || h && c === "img");
        }
        function u(c, h) {
          var y = "";
          y = "<" + c;
          var g = [];
          (0, o.default)(h).call(h, function(S) {
            g.push(S.name + '="' + S.value + '"');
          }), g.length > 0 && (y = y + " " + g.join(" "));
          var x = d.EMPTY_TAGS.has(c);
          return y = y + (x ? "/" : "") + ">", y;
        }
        function l(c) {
          return "</" + c + ">";
        }
        function p(c, h, y) {
          h === void 0 && (h = !0), y === void 0 && (y = !1);
          var g = [], x = "";
          function S(E) {
            E = (0, r.default)(E).call(E), E && (d.EMPTY_TAGS.has(E) || (x = E));
          }
          function T() {
            x = "";
          }
          var P = new m.default();
          P.parse(c, {
            startElement: function(D, R) {
              if (S(D), !i(D, y)) {
                var M = d.NECESSARY_ATTRS.get(D) || [], I = [];
                (0, o.default)(R).call(R, function(B) {
                  var F = B.name;
                  if (F === "style") {
                    h || I.push(B);
                    return;
                  }
                  (0, v.default)(M).call(M, F) !== !1 && I.push(B);
                });
                var N = u(D, I);
                g.push(N);
              }
            },
            characters: function(D) {
              D && (i(x, y) || g.push(D));
            },
            endElement: function(D) {
              if (!i(D, y)) {
                var R = l(D);
                g.push(R), T();
              }
            },
            comment: function(D) {
              S(D);
            }
          });
          var C = g.join("");
          return C = s(C), C;
        }
        n.default = p;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(132)), o = e(t(121));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.TOP_LEVEL_TAGS = n.EMPTY_TAGS = n.NECESSARY_ATTRS = n.IGNORE_TAGS = void 0, n.IGNORE_TAGS = new r.default(["doctype", "!doctype", "html", "head", "meta", "body", "script", "style", "link", "frame", "iframe", "title", "svg", "center", "o:p"]), n.NECESSARY_ATTRS = new o.default([["img", ["src", "alt"]], ["a", ["href", "target"]], ["td", ["colspan", "rowspan"]], ["th", ["colspan", "rowspan"]]]), n.EMPTY_TAGS = new r.default(["area", "base", "basefont", "br", "col", "hr", "img", "input", "isindex", "embed"]), n.TOP_LEVEL_TAGS = new r.default(["h1", "h2", "h3", "h4", "h5", "p", "ul", "ol", "table", "blockquote", "pre", "hr", "form"]);
      },
      function(f, n, t) {
        var e = t(295);
        f.exports = e;
      },
      function(f, n, t) {
        t(296), t(61), t(50), t(54);
        var e = t(9);
        f.exports = e.Set;
      },
      function(f, n, t) {
        var e = t(122), a = t(124);
        f.exports = e("Set", function(r) {
          return function() {
            return r(this, arguments.length ? arguments[0] : void 0);
          };
        }, a);
      },
      function(f, n) {
        function t() {
        }
        t.prototype = {
          handler: null,
          startTagRe: /^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,
          endTagRe: /^<\/([^>\s]+)[^>]*>/m,
          attrRe: /([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,
          parse: function(e, a) {
            a && (this.contentHandler = a);
            for (var r, o, v, A = !1, d = this; e.length > 0; )
              e.substring(0, 4) == "<!--" ? (v = e.indexOf("-->"), v != -1 ? (this.contentHandler.comment(e.substring(4, v)), e = e.substring(v + 3), A = !1) : A = !0) : e.substring(0, 2) == "</" ? this.endTagRe.test(e) ? (r = RegExp.lastMatch, o = RegExp.rightContext, r.replace(this.endTagRe, function() {
                return d.parseEndTag.apply(d, arguments);
              }), e = o, A = !1) : A = !0 : e.charAt(0) == "<" && (this.startTagRe.test(e) ? (r = RegExp.lastMatch, o = RegExp.rightContext, r.replace(this.startTagRe, function() {
                return d.parseStartTag.apply(d, arguments);
              }), e = o, A = !1) : A = !0), A && (v = e.indexOf("<"), v == -1 ? (this.contentHandler.characters(e), e = "") : (this.contentHandler.characters(e.substring(0, v)), e = e.substring(v))), A = !0;
          },
          parseStartTag: function(e, a, r) {
            var o = this.parseAttributes(a, r);
            this.contentHandler.startElement(a, o);
          },
          parseEndTag: function(e, a) {
            this.contentHandler.endElement(a);
          },
          parseAttributes: function(e, a) {
            var r = this, o = [];
            return a.replace(this.attrRe, function(v, A, d, m, s, i, u, l) {
              o.push(r.parseAttribute(e, v, A, d, m, s, i, u, l));
            }), o;
          },
          parseAttribute: function(e, a, r) {
            var o = "";
            arguments[7] ? o = arguments[8] : arguments[5] ? o = arguments[6] : arguments[3] && (o = arguments[4]);
            var v = !o && !arguments[3];
            return { name: r, value: v ? null : o };
          }
        }, f.exports = t;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        function r(o, v) {
          function A(d) {
            o.selection.createRangeByElem(d), o.selection.restoreSelection();
          }
          v.push(A);
        }
        n.default = r;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = t(6), A = o.__importDefault(t(3));
        function d(m) {
          var s = [], i = m.childNodes() || [];
          return (0, r.default)(i).call(i, function(u) {
            var l, p = u.nodeType;
            if (p === 3 && (l = u.textContent || "", l = v.replaceHtmlSymbol(l)), p === 1) {
              l = {}, l = l, l.tag = u.nodeName.toLowerCase();
              for (var c = [], h = u.attributes, y = h.length || 0, g = 0; g < y; g++) {
                var x = h[g];
                c.push({
                  name: x.name,
                  value: x.value
                });
              }
              l.attrs = c, l.children = d(A.default(u));
            }
            l && s.push(l);
          }), s;
        }
        n.default = d;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(92)), r = e(t(1)), o = e(t(4));
        (0, r.default)(n, "__esModule", {
          value: !0
        });
        var v = t(2), A = v.__importDefault(t(3));
        function d(m, s) {
          s === void 0 && (s = document.createElement("div"));
          var i = s;
          return (0, o.default)(m).call(m, function(u) {
            var l;
            if (typeof u == "string" && (l = document.createTextNode(u)), (0, a.default)(u) === "object") {
              var p;
              l = document.createElement(u.tag), (0, o.default)(p = u.attrs).call(p, function(c) {
                A.default(l).attr(c.name, c.value);
              }), u.children && u.children.length > 0 && d(u.children, l.getRootNode());
            }
            l && i.appendChild(l);
          }), A.default(i);
        }
        n.default = d;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(89)), o = e(t(70)), v = e(t(28)), A = e(t(302)), d = e(t(4)), m = e(t(94)), s = e(t(133)), i = e(t(46)), u = e(t(57));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var l = t(2), p = l.__importDefault(t(87)), c = l.__importDefault(t(314)), h = l.__importDefault(t(3)), y = function() {
          function g(x) {
            this.editor = x, this.menuList = [], this.constructorList = c.default;
          }
          return g.prototype.extend = function(x, S) {
            !S || typeof S != "function" || (this.constructorList[x] = S);
          }, g.prototype.init = function() {
            var x, S, T = this, P = this.editor.config, C = P.excludeMenus;
            (0, r.default)(C) === !1 && (C = []), P.menus = (0, o.default)(x = P.menus).call(x, function(F) {
              return (0, v.default)(C).call(C, F) === !1;
            });
            var E = (0, A.default)(p.default.globalCustomMenuConstructorList);
            E = (0, o.default)(E).call(E, function(F) {
              return (0, v.default)(C).call(C, F);
            }), (0, d.default)(E).call(E, function(F) {
              delete p.default.globalCustomMenuConstructorList[F];
            }), (0, d.default)(S = P.menus).call(S, function(F) {
              var O = T.constructorList[F];
              T._initMenuList(F, O);
            });
            for (var D = 0, R = (0, m.default)(p.default.globalCustomMenuConstructorList); D < R.length; D++) {
              var M = R[D], I = M[0], N = M[1], B = N;
              this._initMenuList(I, B);
            }
            this._addToToolbar(), P.showMenuTooltips && this._bindMenuTooltips();
          }, g.prototype._initMenuList = function(x, S) {
            var T;
            if (!(S == null || typeof S != "function"))
              if ((0, s.default)(T = this.menuList).call(T, function(C) {
                return C.key === x;
              }))
                console.warn("菜单名称重复:" + x);
              else {
                var P = new S(this.editor);
                P.key = x, this.menuList.push(P);
              }
          }, g.prototype._bindMenuTooltips = function() {
            var x = this.editor, S = x.$toolbarElem, T = x.config, P = T.menuTooltipPosition, C = h.default('<div class="w-e-menu-tooltip w-e-menu-tooltip-' + P + `">
            <div class="w-e-menu-tooltip-item-wrapper">
              <div></div>
            </div>
          </div>`);
            C.css("visibility", "hidden"), S.append(C), C.css("z-index", x.zIndex.get("tooltip"));
            var E = 0;
            function D() {
              E && clearTimeout(E);
            }
            function R() {
              D(), C.css("visibility", "hidden");
            }
            S.on("mouseover", function(M) {
              var I = M.target, N = h.default(I), B, F;
              if (N.isContain(S)) {
                R();
                return;
              }
              if (N.parentUntil(".w-e-droplist") != null)
                R();
              else if (N.attr("data-title"))
                B = N.attr("data-title"), F = N;
              else {
                var O = N.parentUntil(".w-e-menu");
                O != null && (B = O.attr("data-title"), F = O);
              }
              if (B && F) {
                D();
                var H = F.getOffsetData();
                C.text(x.i18next.t("menus.title." + B));
                var L = C.getOffsetData(), U = H.left + H.width / 2 - L.width / 2;
                C.css("left", U + "px"), P === "up" ? C.css("top", H.top - L.height - 8 + "px") : P === "down" && C.css("top", H.top + H.height + 8 + "px"), E = (0, i.default)(function() {
                  C.css("visibility", "visible");
                }, 200);
              } else
                R();
            }).on("mouseleave", function() {
              R();
            });
          }, g.prototype._addToToolbar = function() {
            var x, S = this.editor, T = S.$toolbarElem;
            (0, d.default)(x = this.menuList).call(x, function(P) {
              var C = P.$elem;
              C && T.append(C);
            });
          }, g.prototype.menuFind = function(x) {
            for (var S = this.menuList, T = 0, P = S.length; T < P; T++)
              if (S[T].key === x)
                return S[T];
            return S[0];
          }, g.prototype.changeActive = function() {
            var x;
            (0, d.default)(x = this.menuList).call(x, function(S) {
              var T;
              (0, i.default)((0, u.default)(T = S.tryChangeActive).call(T, S), 100);
            });
          }, g;
        }();
        n.default = y;
      },
      function(f, n, t) {
        f.exports = t(303);
      },
      function(f, n, t) {
        var e = t(304);
        f.exports = e;
      },
      function(f, n, t) {
        t(305);
        var e = t(9);
        f.exports = e.Object.keys;
      },
      function(f, n, t) {
        var e = t(5), a = t(31), r = t(52), o = t(11), v = o(function() {
          r(1);
        });
        e({ target: "Object", stat: !0, forced: v }, {
          keys: function(d) {
            return r(a(d));
          }
        });
      },
      function(f, n, t) {
        var e = t(307);
        f.exports = e;
      },
      function(f, n, t) {
        t(308);
        var e = t(9);
        f.exports = e.Object.entries;
      },
      function(f, n, t) {
        var e = t(5), a = t(309).entries;
        e({ target: "Object", stat: !0 }, {
          entries: function(o) {
            return a(o);
          }
        });
      },
      function(f, n, t) {
        var e = t(14), a = t(52), r = t(30), o = t(59).f, v = function(A) {
          return function(d) {
            for (var m = r(d), s = a(m), i = s.length, u = 0, l = [], p; i > u; )
              p = s[u++], (!e || o.call(m, p)) && l.push(A ? [p, m[p]] : m[p]);
            return l;
          };
        };
        f.exports = {
          entries: v(!0),
          values: v(!1)
        };
      },
      function(f, n, t) {
        var e = t(311);
        f.exports = e;
      },
      function(f, n, t) {
        var e = t(312), a = Array.prototype;
        f.exports = function(r) {
          var o = r.some;
          return r === a || r instanceof Array && o === a.some ? e : o;
        };
      },
      function(f, n, t) {
        t(313);
        var e = t(15);
        f.exports = e("Array").some;
      },
      function(f, n, t) {
        var e = t(5), a = t(32).some, r = t(67), o = t(22), v = r("some"), A = o("some");
        e({ target: "Array", proto: !0, forced: !v || !A }, {
          some: function(m) {
            return a(this, m, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(315)), v = r.__importDefault(t(316)), A = r.__importDefault(t(321)), d = r.__importDefault(t(326)), m = r.__importDefault(t(327)), s = r.__importDefault(t(328)), i = r.__importDefault(t(329)), u = r.__importDefault(t(331)), l = r.__importDefault(t(333)), p = r.__importDefault(t(334)), c = r.__importDefault(t(337)), h = r.__importDefault(t(338)), y = r.__importDefault(t(339)), g = r.__importDefault(t(350)), x = r.__importDefault(t(365)), S = r.__importDefault(t(369)), T = r.__importDefault(t(137)), P = r.__importDefault(t(378)), C = r.__importDefault(t(380)), E = r.__importDefault(t(381)), D = r.__importDefault(t(382)), R = r.__importDefault(t(401)), M = r.__importDefault(t(406)), I = r.__importDefault(t(409));
        n.default = {
          bold: o.default,
          head: v.default,
          italic: d.default,
          link: A.default,
          underline: m.default,
          strikeThrough: s.default,
          fontName: i.default,
          fontSize: u.default,
          justify: l.default,
          quote: p.default,
          backColor: c.default,
          foreColor: h.default,
          video: y.default,
          image: g.default,
          indent: x.default,
          emoticon: S.default,
          list: T.default,
          lineHeight: P.default,
          undo: C.default,
          redo: E.default,
          table: D.default,
          code: R.default,
          splitLine: M.default,
          todo: I.default
        };
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(23)), v = r.__importDefault(t(3)), A = function(d) {
          r.__extends(m, d);
          function m(s) {
            var i = this, u = v.default(`<div class="w-e-menu" data-title="加粗">
                <i class="w-e-icon-bold"></i>
            </div>`);
            return i = d.call(this, u, s) || this, i;
          }
          return m.prototype.clickHandler = function() {
            var s = this.editor, i = s.selection.isSelectionEmpty();
            i && s.selection.createEmptyRange(), s.cmd.do("bold"), i && (s.selection.collapseRange(), s.selection.restoreSelection());
          }, m.prototype.tryChangeActive = function() {
            var s = this.editor;
            s.cmd.queryCommandState("bold") ? this.active() : this.unActive();
          }, m;
        }(o.default);
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(27)), o = e(t(29)), v = e(t(4)), A = e(t(317)), d = e(t(28));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var m = t(2), s = m.__importDefault(t(24)), i = m.__importDefault(t(3)), u = t(6), l = t(7), p = function(c) {
          m.__extends(h, c);
          function h(y) {
            var g = this, x = i.default('<div class="w-e-menu" data-title="标题"><i class="w-e-icon-header"></i></div>'), S = {
              width: 100,
              title: "设置标题",
              type: "list",
              list: [{
                $elem: i.default("<h1>H1</h1>"),
                value: "<h1>"
              }, {
                $elem: i.default("<h2>H2</h2>"),
                value: "<h2>"
              }, {
                $elem: i.default("<h3>H3</h3>"),
                value: "<h3>"
              }, {
                $elem: i.default("<h4>H4</h4>"),
                value: "<h4>"
              }, {
                $elem: i.default("<h5>H5</h5>"),
                value: "<h5>"
              }, {
                $elem: i.default("<p>" + y.i18next.t("menus.dropListMenu.head.正文") + "</p>"),
                value: "<p>"
              }],
              clickHandler: function(C) {
                g.command(C);
              }
            };
            g = c.call(this, x, y, S) || this;
            var T = y.config.onCatalogChange;
            return T && (g.oldCatalogs = [], g.addListenerCatalog(), g.getCatalogs()), g;
          }
          return h.prototype.command = function(y) {
            var g = this.editor, x = g.selection.getSelectionContainerElem();
            if (x && g.$textElem.equal(x))
              this.setMultilineHead(y);
            else {
              var S;
              if ((0, r.default)(S = ["OL", "UL", "LI", "TABLE", "TH", "TR", "CODE", "HR"]).call(S, i.default(x).getNodeName()) > -1)
                return;
              g.cmd.do("formatBlock", y);
            }
            y !== "<p>" && this.addUidForSelectionElem();
          }, h.prototype.addUidForSelectionElem = function() {
            var y = this.editor, g = y.selection.getSelectionContainerElem(), x = u.getRandomCode();
            i.default(g).attr("id", x);
          }, h.prototype.addListenerCatalog = function() {
            var y = this, g = this.editor;
            g.txt.eventHooks.changeEvents.push(function() {
              y.getCatalogs();
            });
          }, h.prototype.getCatalogs = function() {
            var y = this.editor, g = this.editor.$textElem, x = y.config.onCatalogChange, S = (0, o.default)(g).call(g, "h1,h2,h3,h4,h5"), T = [];
            (0, v.default)(S).call(S, function(P, C) {
              var E = i.default(P), D = E.attr("id"), R = E.getNodeName(), M = E.text();
              D || (D = u.getRandomCode(), E.attr("id", D)), M && T.push({
                tag: R,
                id: D,
                text: M
              });
            }), (0, A.default)(this.oldCatalogs) !== (0, A.default)(T) && (this.oldCatalogs = T, x && x(T));
          }, h.prototype.setMultilineHead = function(y) {
            var g = this, x, S, T = this.editor, P = T.selection, C = (x = P.getSelectionContainerElem()) === null || x === void 0 ? void 0 : x.elems[0], E = ["IMG", "VIDEO", "TABLE", "TH", "TR", "UL", "OL", "PRE", "HR", "BLOCKQUOTE"], D = i.default(P.getSelectionStartElem()), R = i.default(P.getSelectionEndElem());
            R.elems[0].outerHTML === i.default(l.EMPTY_P).elems[0].outerHTML && !R.elems[0].nextSibling && (R = R.prev());
            var M = [];
            M.push(D.getNodeTop(T));
            var I = [], N = (S = P.getRange()) === null || S === void 0 ? void 0 : S.commonAncestorContainer.childNodes;
            N == null || (0, v.default)(N).call(N, function(O, H) {
              O === M[0].getNode() && I.push(H), O === R.getNodeTop(T).getNode() && I.push(H);
            });
            for (var B = 0; M[B].getNode() !== R.getNodeTop(T).getNode(); ) {
              if (!M[B].elems[0])
                return;
              var F = i.default(M[B].next().getNode());
              M.push(F), B++;
            }
            M == null || (0, v.default)(M).call(M, function(O, H) {
              if (!g.hasTag(O, E)) {
                var L = i.default(y), U = O.parent().getNode();
                L.html("" + O.html()), U.insertBefore(L.getNode(), O.getNode()), O.remove();
              }
            }), P.createRangeByElems(C.children[I[0]], C.children[I[1]]);
          }, h.prototype.hasTag = function(y, g) {
            var x = this, S;
            if (!y)
              return !1;
            if ((0, d.default)(g).call(g, y == null ? void 0 : y.getNodeName()))
              return !0;
            var T = !1;
            return (S = y.children()) === null || S === void 0 || (0, v.default)(S).call(S, function(P) {
              T = x.hasTag(i.default(P), g);
            }), T;
          }, h.prototype.tryChangeActive = function() {
            var y = this.editor, g = /^h/i, x = y.cmd.queryCommandValue("formatBlock");
            g.test(x) ? this.active() : this.unActive();
          }, h;
        }(s.default);
        n.default = p;
      },
      function(f, n, t) {
        f.exports = t(318);
      },
      function(f, n, t) {
        var e = t(319);
        f.exports = e;
      },
      function(f, n, t) {
        t(320);
        var e = t(9);
        e.JSON || (e.JSON = { stringify: JSON.stringify }), f.exports = function(r, o, v) {
          return e.JSON.stringify.apply(null, arguments);
        };
      },
      function(f, n, t) {
        var e = t(5), a = t(36), r = t(11), o = a("JSON", "stringify"), v = /[\uD800-\uDFFF]/g, A = /^[\uD800-\uDBFF]$/, d = /^[\uDC00-\uDFFF]$/, m = function(i, u, l) {
          var p = l.charAt(u - 1), c = l.charAt(u + 1);
          return A.test(i) && !d.test(c) || d.test(i) && !A.test(p) ? "\\u" + i.charCodeAt(0).toString(16) : i;
        }, s = r(function() {
          return o("\uDF06\uD834") !== '"\\udf06\\ud834"' || o("\uDEAD") !== '"\\udead"';
        });
        o && e({ target: "JSON", stat: !0, forced: s }, {
          stringify: function(u, l, p) {
            var c = o.apply(null, arguments);
            return typeof c == "string" ? c.replace(v, m) : c;
          }
        });
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(17));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(38)), A = o.__importDefault(t(3)), d = o.__importDefault(t(322)), m = o.__importStar(t(96)), s = o.__importDefault(t(33)), i = o.__importDefault(t(324)), u = t(7), l = function(p) {
          o.__extends(c, p);
          function c(h) {
            var y = this, g = A.default('<div class="w-e-menu" data-title="链接"><i class="w-e-icon-link"></i></div>');
            return y = p.call(this, g, h) || this, i.default(h), y;
          }
          return c.prototype.clickHandler = function() {
            var h = this.editor, y, g = h.selection.getSelectionContainerElem(), x = h.$textElem, S = x.html(), T = (0, r.default)(S).call(S);
            if (T === u.EMPTY_P) {
              var P = x.children();
              h.selection.createRangeByElem(P, !0, !0), g = h.selection.getSelectionContainerElem();
            }
            if (!(g && h.$textElem.equal(g)))
              if (this.isActive) {
                var C = "", E = "";
                if (y = h.selection.getSelectionContainerElem(), !y)
                  return;
                if (y.getNodeName() !== "A") {
                  var D = m.getParentNodeA(y);
                  y = A.default(D);
                }
                C = y.elems[0].innerText, E = y.attr("href"), this.createPanel(C, E);
              } else
                h.selection.isSelectionEmpty() ? this.createPanel("", "") : this.createPanel(h.selection.getSelectionText(), "");
          }, c.prototype.createPanel = function(h, y) {
            var g = d.default(this.editor, h, y), x = new s.default(this, g);
            x.create();
          }, c.prototype.tryChangeActive = function() {
            var h = this.editor;
            m.default(h) ? this.active() : this.unActive();
          }, c;
        }(v.default);
        n.default = l;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(28)), o = e(t(17)), v = e(t(29));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var A = t(2), d = t(6), m = A.__importDefault(t(3)), s = A.__importStar(t(96)), i = t(323);
        function u(l, p, c) {
          var h = d.getRandom("input-link"), y = d.getRandom("input-text"), g = d.getRandom("btn-ok"), x = d.getRandom("btn-del"), S = s.default(l) ? "inline-block" : "none", T;
          function P() {
            if (s.default(l)) {
              var M = l.selection.getSelectionContainerElem();
              M && (l.selection.createRangeByElem(M), l.selection.restoreSelection(), T = M);
            }
          }
          function C(M, I) {
            var N = M.replace(/</g, "&lt;").replace(/>/g, "&gt;"), B = m.default('<a target="_blank">' + N + "</a>"), F = B.elems[0];
            F.innerText = M, F.href = I, s.default(l) && P(), l.cmd.do("insertElem", B);
          }
          function E() {
            if (s.default(l))
              if (P(), T.getNodeName() === "A") {
                var M, I = T.elems[0], N = I.parentElement;
                N && (0, r.default)(M = s.EXTRA_TAG).call(M, N.nodeName) ? N.innerHTML = I.innerHTML : l.cmd.do("insertHTML", "<span>" + I.innerHTML + "</span>");
              } else {
                var B = s.getParentNodeA(T), F = B.innerHTML;
                l.cmd.do("insertHTML", "<span>" + F + "</span>");
              }
          }
          function D(M, I) {
            var N = l.config.linkCheck(M, I);
            if (N !== void 0) {
              if (N === !0)
                return !0;
              l.config.customAlert(N, "warning");
            }
            return !1;
          }
          var R = {
            width: 300,
            height: 0,
            tabs: [{
              title: l.i18next.t("menus.panelMenus.link.链接"),
              tpl: `<div>
                        <input
                            id="` + y + `"
                            type="text"
                            class="block"
                            placeholder="` + l.i18next.t("menus.panelMenus.link.链接文字") + `"/>
                        </td>
                        <input
                            id="` + h + `"
                            type="text"
                            class="block"
                            placeholder="` + l.i18next.t("如") + ` https://..."/>
                        </td>
                        <div class="w-e-button-container">
                            <button type="button" id="` + g + `" class="right">
                                ` + l.i18next.t("插入") + `
                            </button>
                            <button type="button" id="` + x + '" class="gray right" style="display:' + S + `">
                                ` + l.i18next.t("menus.panelMenus.link.取消链接") + `
                            </button>
                        </div>
                    </div>`,
              events: [
                {
                  selector: "#" + g,
                  type: "click",
                  fn: function() {
                    var I, N, B, F, O, H = l.selection.getSelectionContainerElem(), L = H == null ? void 0 : H.elems[0];
                    l.selection.restoreSelection();
                    var U = l.selection.getSelectionRangeTopNodes()[0].getNode(), z = window.getSelection(), j = m.default("#" + h), K = m.default("#" + y), V = (0, o.default)(I = j.val()).call(I), Q = (0, o.default)(N = K.val()).call(N), w = "";
                    z && !(z != null && z.isCollapsed) && (w = (F = i.insertHtml(z, U)) === null || F === void 0 ? void 0 : (0, o.default)(F).call(F));
                    var G = w == null ? void 0 : w.replace(/<.*?>/g, ""), X = (O = G == null ? void 0 : G.length) !== null && O !== void 0 ? O : 0;
                    if (X <= Q.length) {
                      var tt = Q.substring(0, X), et = Q.substring(X);
                      G === tt && (Q = G + et);
                    }
                    if (V && (Q || (Q = V), !!D(Q, V))) {
                      if ((L == null ? void 0 : L.nodeName) === "A")
                        return L.setAttribute("href", V), L.innerText = Q, !0;
                      if ((L == null ? void 0 : L.nodeName) !== "A" && (0, r.default)(B = s.EXTRA_TAG).call(B, L.nodeName)) {
                        var ut = s.getParentNodeA(H);
                        if (ut)
                          return ut.setAttribute("href", V), L.innerText = Q, !0;
                      }
                      return C(Q, V), !0;
                    }
                  },
                  bindEnter: !0
                },
                {
                  selector: "#" + x,
                  type: "click",
                  fn: function() {
                    return E(), !0;
                  }
                }
              ]
            }],
            setLinkValue: function(I, N) {
              var B = "", F = "", O;
              N === "text" && (B = "#" + y, F = p), N === "link" && (B = "#" + h, F = c), O = (0, v.default)(I).call(I, B).elems[0], O.value = F;
            }
          };
          return R;
        }
        n.default = u;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.insertHtml = n.createPartHtml = n.makeHtmlString = n.getTopNode = void 0;
        function o(i, u) {
          var l = i, p = i;
          do {
            if (l.textContent === u)
              break;
            p = l, l.parentNode && (l = l == null ? void 0 : l.parentNode);
          } while ((l == null ? void 0 : l.nodeName) !== "P");
          return p;
        }
        n.getTopNode = o;
        function v(i, u) {
          var l = i.nodeName, p = "";
          if (i.nodeType === 3 || /^(h|H)[1-6]$/.test(l))
            return u;
          if (i.nodeType === 1) {
            var c = i.getAttribute("style"), h = i.getAttribute("face"), y = i.getAttribute("color");
            c && (p = p + (' style="' + c + '"')), h && (p = p + (' face="' + h + '"')), y && (p = p + (' color="' + y + '"'));
          }
          return l = l.toLowerCase(), "<" + l + p + ">" + u + "</" + l + ">";
        }
        n.makeHtmlString = v;
        function A(i, u, l, p) {
          var c, h = (c = u.textContent) === null || c === void 0 ? void 0 : c.substring(l, p), y = u, g = "";
          do
            g = v(y, h ?? ""), h = g, y = y == null ? void 0 : y.parentElement;
          while (y && y.textContent !== i);
          return g;
        }
        n.createPartHtml = A;
        function d(i, u) {
          var l, p, c, h, y, g = i.anchorNode, x = i.focusNode, S = i.anchorOffset, T = i.focusOffset, P = (l = u.textContent) !== null && l !== void 0 ? l : "", C = m(u), E = "", D = "", R = "", M = "", I = g, N = x, B = g;
          if (g != null && g.isEqualNode(x ?? null)) {
            var F = A(P, g, S, T);
            return F = s(C, F), F;
          }
          for (g && (D = A(P, g, S ?? 0)), x && (M = A(P, x, 0, T)), g && (I = o(g, P)), x && (N = o(x, P)), B = (p = I == null ? void 0 : I.nextSibling) !== null && p !== void 0 ? p : g; !(B != null && B.isEqualNode(N ?? null)); ) {
            var O = B == null ? void 0 : B.nodeName;
            if (O === "#text")
              R = R + (B == null ? void 0 : B.textContent);
            else {
              var H = (h = (c = B == null ? void 0 : B.firstChild) === null || c === void 0 ? void 0 : c.parentElement) === null || h === void 0 ? void 0 : h.innerHTML;
              B && (R = R + v(B, H ?? ""));
            }
            var L = (y = B == null ? void 0 : B.nextSibling) !== null && y !== void 0 ? y : B;
            if (L === B)
              break;
            B = L;
          }
          return E = "" + D + R + M, E = s(C, E), E;
        }
        n.insertHtml = d;
        function m(i) {
          for (var u, l = (u = i.textContent) !== null && u !== void 0 ? u : "", p = []; (i == null ? void 0 : i.textContent) === l; )
            i.nodeName !== "P" && i.nodeName !== "TABLE" && p.push(i), i = i.childNodes[0];
          return p;
        }
        function s(i, u) {
          return (0, r.default)(i).call(i, function(l) {
            u = v(l, u);
          }), u;
        }
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(325));
        function v(A) {
          o.default(A);
        }
        n.default = v;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(28));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(3)), A = o.__importDefault(t(39)), d = t(96);
        function m(i) {
          var u;
          function l(c) {
            var h = [{
              $elem: v.default("<span>" + i.i18next.t("menus.panelMenus.link.查看链接") + "</span>"),
              onClick: function(g, x) {
                var S = x.attr("href");
                return window.open(S, "_target"), !0;
              }
            }, {
              $elem: v.default("<span>" + i.i18next.t("menus.panelMenus.link.取消链接") + "</span>"),
              onClick: function(g, x) {
                var S, T;
                g.selection.createRangeByElem(x), g.selection.restoreSelection();
                var P = x.childNodes();
                if ((P == null ? void 0 : P.getNodeName()) === "IMG") {
                  var C = (T = (S = g.selection.getSelectionContainerElem()) === null || S === void 0 ? void 0 : S.children()) === null || T === void 0 ? void 0 : T.elems[0].children[0];
                  g.cmd.do("insertHTML", `<img 
                                src=` + (C == null ? void 0 : C.getAttribute("src")) + ` 
                                style=` + (C == null ? void 0 : C.getAttribute("style")) + ">");
                } else {
                  var E, D = x.elems[0], R = D.innerHTML, M = D.parentElement;
                  M && (0, r.default)(E = d.EXTRA_TAG).call(E, M.nodeName) ? M.innerHTML = R : g.cmd.do("insertHTML", "<span>" + R + "</span>");
                }
                return !0;
              }
            }];
            u = new A.default(i, c, h), u.create();
          }
          function p() {
            u && (u.remove(), u = null);
          }
          return {
            showLinkTooltip: l,
            hideLinkTooltip: p
          };
        }
        function s(i) {
          var u = m(i), l = u.showLinkTooltip, p = u.hideLinkTooltip;
          i.txt.eventHooks.linkClickEvents.push(l), i.txt.eventHooks.clickEvents.push(p), i.txt.eventHooks.keyupEvents.push(p), i.txt.eventHooks.toolbarClickEvents.push(p), i.txt.eventHooks.menuClickEvents.push(p), i.txt.eventHooks.textScrollEvents.push(p);
        }
        n.default = s;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(23)), v = r.__importDefault(t(3)), A = function(d) {
          r.__extends(m, d);
          function m(s) {
            var i = this, u = v.default(`<div class="w-e-menu" data-title="斜体">
                <i class="w-e-icon-italic"></i>
            </div>`);
            return i = d.call(this, u, s) || this, i;
          }
          return m.prototype.clickHandler = function() {
            var s = this.editor, i = s.selection.isSelectionEmpty();
            i && s.selection.createEmptyRange(), s.cmd.do("italic"), i && (s.selection.collapseRange(), s.selection.restoreSelection());
          }, m.prototype.tryChangeActive = function() {
            var s = this.editor;
            s.cmd.queryCommandState("italic") ? this.active() : this.unActive();
          }, m;
        }(o.default);
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(23)), v = r.__importDefault(t(3)), A = function(d) {
          r.__extends(m, d);
          function m(s) {
            var i = this, u = v.default(`<div class="w-e-menu" data-title="下划线">
                <i class="w-e-icon-underline"></i>
            </div>`);
            return i = d.call(this, u, s) || this, i;
          }
          return m.prototype.clickHandler = function() {
            var s = this.editor, i = s.selection.isSelectionEmpty();
            i && s.selection.createEmptyRange(), s.cmd.do("underline"), i && (s.selection.collapseRange(), s.selection.restoreSelection());
          }, m.prototype.tryChangeActive = function() {
            var s = this.editor;
            s.cmd.queryCommandState("underline") ? this.active() : this.unActive();
          }, m;
        }(o.default);
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(23)), v = r.__importDefault(t(3)), A = function(d) {
          r.__extends(m, d);
          function m(s) {
            var i = this, u = v.default(`<div class="w-e-menu" data-title="删除线">
                <i class="w-e-icon-strikethrough"></i>
            </div>`);
            return i = d.call(this, u, s) || this, i;
          }
          return m.prototype.clickHandler = function() {
            var s = this.editor, i = s.selection.isSelectionEmpty();
            i && s.selection.createEmptyRange(), s.cmd.do("strikeThrough"), i && (s.selection.collapseRange(), s.selection.restoreSelection());
          }, m.prototype.tryChangeActive = function() {
            var s = this.editor;
            s.cmd.queryCommandState("strikeThrough") ? this.active() : this.unActive();
          }, m;
        }(o.default);
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(24)), v = r.__importDefault(t(3)), A = r.__importDefault(t(330)), d = function(m) {
          r.__extends(s, m);
          function s(i) {
            var u = this, l = v.default(`<div class="w-e-menu" data-title="字体">
                <i class="w-e-icon-font"></i>
            </div>`), p = new A.default(i.config.fontNames), c = {
              width: 100,
              title: "设置字体",
              type: "list",
              list: p.getItemList(),
              clickHandler: function(y) {
                u.command(y);
              }
            };
            return u = m.call(this, l, i, c) || this, u;
          }
          return s.prototype.command = function(i) {
            var u, l = this.editor, p = l.selection.isSelectionEmpty(), c = (u = l.selection.getSelectionContainerElem()) === null || u === void 0 ? void 0 : u.elems[0];
            if (c != null) {
              var h = (c == null ? void 0 : c.nodeName.toLowerCase()) !== "p", y = (c == null ? void 0 : c.getAttribute("face")) === i;
              if (p) {
                if (h && !y) {
                  var g = l.selection.getSelectionRangeTopNodes();
                  l.selection.createRangeByElem(g[0]), l.selection.moveCursor(g[0].elems[0]);
                }
                l.selection.setRangeToElem(c), l.selection.createEmptyRange();
              }
              l.cmd.do("fontName", i), p && (l.selection.collapseRange(), l.selection.restoreSelection());
            }
          }, s.prototype.tryChangeActive = function() {
          }, s;
        }(o.default);
        n.default = d;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(3)), A = function() {
          function d(m) {
            var s = this;
            this.itemList = [], (0, r.default)(m).call(m, function(i) {
              var u = typeof i == "string" ? i : i.value, l = typeof i == "string" ? i : i.name;
              s.itemList.push({
                $elem: v.default(`<p style="font-family:'` + u + `'">` + l + "</p>"),
                value: l
              });
            });
          }
          return d.prototype.getItemList = function() {
            return this.itemList;
          }, d;
        }();
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(24)), v = r.__importDefault(t(3)), A = r.__importDefault(t(332)), d = function(m) {
          r.__extends(s, m);
          function s(i) {
            var u = this, l = v.default(`<div class="w-e-menu" data-title="字号">
                <i class="w-e-icon-text-heigh"></i>
            </div>`), p = new A.default(i.config.fontSizes), c = {
              width: 160,
              title: "设置字号",
              type: "list",
              list: p.getItemList(),
              clickHandler: function(y) {
                u.command(y);
              }
            };
            return u = m.call(this, l, i, c) || this, u;
          }
          return s.prototype.command = function(i) {
            var u, l = this.editor, p = l.selection.isSelectionEmpty(), c = (u = l.selection.getSelectionContainerElem()) === null || u === void 0 ? void 0 : u.elems[0];
            c != null && (l.cmd.do("fontSize", i), p && (l.selection.collapseRange(), l.selection.restoreSelection()));
          }, s.prototype.tryChangeActive = function() {
          }, s;
        }(o.default);
        n.default = d;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(3)), v = function() {
          function A(d) {
            this.itemList = [];
            for (var m in d) {
              var s = d[m];
              this.itemList.push({
                $elem: o.default('<p style="font-size:' + m + '">' + s.name + "</p>"),
                value: s.value
              });
            }
          }
          return A.prototype.getItemList = function() {
            return this.itemList;
          }, A;
        }();
        n.default = v;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4)), o = e(t(27));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var v = t(2), A = v.__importDefault(t(24)), d = v.__importDefault(t(3)), m = ["LI"], s = ["BLOCKQUOTE"], i = function(u) {
          v.__extends(l, u);
          function l(p) {
            var c = this, h = d.default('<div class="w-e-menu" data-title="对齐"><i class="w-e-icon-paragraph-left"></i></div>'), y = {
              width: 100,
              title: "对齐方式",
              type: "list",
              list: [{
                $elem: d.default(`<p>
                            <i class="w-e-icon-paragraph-left w-e-drop-list-item"></i>
                            ` + p.i18next.t("menus.dropListMenu.justify.靠左") + `
                        </p>`),
                value: "left"
              }, {
                $elem: d.default(`<p>
                            <i class="w-e-icon-paragraph-center w-e-drop-list-item"></i>
                            ` + p.i18next.t("menus.dropListMenu.justify.居中") + `
                        </p>`),
                value: "center"
              }, {
                $elem: d.default(`<p>
                            <i class="w-e-icon-paragraph-right w-e-drop-list-item"></i>
                            ` + p.i18next.t("menus.dropListMenu.justify.靠右") + `
                        </p>`),
                value: "right"
              }, {
                $elem: d.default(`<p>
                            <i class="w-e-icon-paragraph-justify w-e-drop-list-item"></i>
                            ` + p.i18next.t("menus.dropListMenu.justify.两端") + `
                        </p>`),
                value: "justify"
              }],
              clickHandler: function(x) {
                c.command(x);
              }
            };
            return c = u.call(this, h, p, y) || this, c;
          }
          return l.prototype.command = function(p) {
            var c = this.editor, h = c.selection, y = h.getSelectionContainerElem();
            h.saveRange();
            var g = c.selection.getSelectionRangeTopNodes();
            if (y != null && y.length)
              if (this.isSpecialNode(y, g[0]) || this.isSpecialTopNode(g[0])) {
                var x = this.getSpecialNodeUntilTop(y, g[0]);
                if (x == null)
                  return;
                d.default(x).css("text-align", p);
              } else
                (0, r.default)(g).call(g, function(S) {
                  S.css("text-align", p);
                });
            h.restoreSelection();
          }, l.prototype.getSpecialNodeUntilTop = function(p, c) {
            for (var h = p.elems[0], y = c.elems[0]; h != null; ) {
              if ((0, o.default)(m).call(m, h == null ? void 0 : h.nodeName) !== -1 || h.parentNode === y)
                return h;
              h = h.parentNode;
            }
            return h;
          }, l.prototype.isSpecialNode = function(p, c) {
            var h = this.getSpecialNodeUntilTop(p, c);
            return h == null ? !1 : (0, o.default)(m).call(m, h.nodeName) !== -1;
          }, l.prototype.isSpecialTopNode = function(p) {
            var c;
            return p == null ? !1 : (0, o.default)(s).call(s, (c = p.elems[0]) === null || c === void 0 ? void 0 : c.nodeName) !== -1;
          }, l.prototype.tryChangeActive = function() {
          }, l;
        }(A.default);
        n.default = i;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(3)), A = o.__importDefault(t(23)), d = o.__importDefault(t(335)), m = o.__importDefault(t(336)), s = t(7), i = function(u) {
          o.__extends(l, u);
          function l(p) {
            var c = this, h = v.default(`<div class="w-e-menu" data-title="引用">
                <i class="w-e-icon-quotes-left"></i>
            </div>`);
            return c = u.call(this, h, p) || this, d.default(p), c;
          }
          return l.prototype.clickHandler = function() {
            var p, c, h = this.editor, y = h.selection.isSelectionEmpty(), g = h.selection.getSelectionRangeTopNodes(), x = g[g.length - 1], S = this.getTopNodeName();
            if (S === "BLOCKQUOTE") {
              var T = v.default(x.childNodes()), P = T.length, C = x;
              (0, r.default)(T).call(T, function(M) {
                var I = v.default(M);
                I.insertAfter(C), C = I;
              }), x.remove(), h.selection.moveCursor(T.elems[P - 1]), this.tryChangeActive();
            } else {
              var E = m.default(g);
              if (h.$textElem.equal(x)) {
                var D = (p = h.selection.getSelectionContainerElem()) === null || p === void 0 ? void 0 : p.elems[0];
                h.selection.createRangeByElems(D.children[0], D.children[0]), g = h.selection.getSelectionRangeTopNodes(), E = m.default(g), x.append(E);
              } else
                E.insertAfter(x);
              this.delSelectNode(g);
              var R = (c = E.childNodes()) === null || c === void 0 ? void 0 : c.last().getNode();
              if (R == null)
                return;
              R.textContent ? h.selection.moveCursor(R) : h.selection.moveCursor(R, 0), this.tryChangeActive(), v.default(s.EMPTY_P).insertAfter(E);
              return;
            }
            y && (h.selection.collapseRange(), h.selection.restoreSelection());
          }, l.prototype.tryChangeActive = function() {
            var p, c = this.editor, h = (p = c.selection.getSelectionRangeTopNodes()[0]) === null || p === void 0 ? void 0 : p.getNodeName();
            h === "BLOCKQUOTE" ? this.active() : this.unActive();
          }, l.prototype.getTopNodeName = function() {
            var p = this.editor, c = p.selection.getSelectionRangeTopNodes()[0], h = c == null ? void 0 : c.getNodeName();
            return h;
          }, l.prototype.delSelectNode = function(p) {
            (0, r.default)(p).call(p, function(c) {
              c.remove();
            });
          }, l;
        }(A.default);
        n.default = i;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = t(7), v = r.__importDefault(t(3));
        function A(d) {
          function m(s) {
            var i, u = d.selection.getSelectionContainerElem(), l = d.selection.getSelectionRangeTopNodes()[0];
            if ((l == null ? void 0 : l.getNodeName()) === "BLOCKQUOTE") {
              if (u.getNodeName() === "BLOCKQUOTE") {
                var p = (i = u.childNodes()) === null || i === void 0 ? void 0 : i.getNode();
                d.selection.moveCursor(p);
              }
              if (u.text() === "") {
                s.preventDefault(), u.remove();
                var c = v.default(o.EMPTY_P);
                c.insertAfter(l), d.selection.moveCursor(c.getNode(), 0);
              }
              l.text() === "" && l.remove();
            }
          }
          d.txt.eventHooks.enterDownEvents.push(m);
        }
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(3));
        function A(d) {
          var m = v.default("<blockquote></blockquote>");
          return (0, r.default)(d).call(d, function(s) {
            m.append(s.clone(!0));
          }), m;
        }
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(26));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(24)), A = o.__importDefault(t(3)), d = t(6), m = function(s) {
          o.__extends(i, s);
          function i(u) {
            var l, p = this, c = A.default(`<div class="w-e-menu" data-title="背景色">
                <i class="w-e-icon-paint-brush"></i>
            </div>`), h = {
              width: 120,
              title: "背景颜色",
              type: "inline-block",
              list: (0, r.default)(l = u.config.colors).call(l, function(y) {
                return {
                  $elem: A.default('<i style="color:' + y + ';" class="w-e-icon-paint-brush"></i>'),
                  value: y
                };
              }),
              clickHandler: function(g) {
                p.command(g);
              }
            };
            return p = s.call(this, c, u, h) || this, p;
          }
          return i.prototype.command = function(u) {
            var l, p = this.editor, c = p.selection.isSelectionEmpty(), h = (l = p.selection.getSelectionContainerElem()) === null || l === void 0 ? void 0 : l.elems[0];
            if (h != null) {
              var y = (h == null ? void 0 : h.nodeName.toLowerCase()) !== "p", g = h == null ? void 0 : h.style.backgroundColor, x = d.hexToRgb(u) === g;
              if (c) {
                if (y && !x) {
                  var S = p.selection.getSelectionRangeTopNodes();
                  p.selection.createRangeByElem(S[0]), p.selection.moveCursor(S[0].elems[0]);
                }
                p.selection.createEmptyRange();
              }
              p.cmd.do("backColor", u), c && (p.selection.collapseRange(), p.selection.restoreSelection());
            }
          }, i.prototype.tryChangeActive = function() {
          }, i;
        }(v.default);
        n.default = m;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(26));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(24)), A = o.__importDefault(t(3)), d = function(m) {
          o.__extends(s, m);
          function s(i) {
            var u, l = this, p = A.default(`<div class="w-e-menu" data-title="文字颜色">
                <i class="w-e-icon-pencil2"></i>
            </div>`), c = {
              width: 120,
              title: "文字颜色",
              type: "inline-block",
              list: (0, r.default)(u = i.config.colors).call(u, function(h) {
                return {
                  $elem: A.default('<i style="color:' + h + ';" class="w-e-icon-pencil2"></i>'),
                  value: h
                };
              }),
              clickHandler: function(y) {
                l.command(y);
              }
            };
            return l = m.call(this, p, i, c) || this, l;
          }
          return s.prototype.command = function(i) {
            var u, l = this.editor, p = l.selection.isSelectionEmpty(), c = (u = l.selection.getSelectionContainerElem()) === null || u === void 0 ? void 0 : u.elems[0];
            if (c != null) {
              var h = l.selection.getSelectionText();
              if (c.nodeName === "A" && c.textContent === h) {
                var y = A.default("<span>&#8203;</span>").getNode();
                c.appendChild(y);
              }
              l.cmd.do("foreColor", i), p && (l.selection.collapseRange(), l.selection.restoreSelection());
            }
          }, s.prototype.tryChangeActive = function() {
          }, s;
        }(v.default);
        n.default = d;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(33)), A = r.__importDefault(t(38)), d = r.__importDefault(t(340)), m = r.__importDefault(t(346)), s = function(i) {
          r.__extends(u, i);
          function u(l) {
            var p = this, c = o.default(`<div class="w-e-menu" data-title="视频">
                <i class="w-e-icon-play"></i>
            </div>`);
            return p = i.call(this, c, l) || this, m.default(l), p;
          }
          return u.prototype.clickHandler = function() {
            this.createPanel("");
          }, u.prototype.createPanel = function(l) {
            var p = d.default(this.editor, l), c = new v.default(this, p);
            c.create();
          }, u.prototype.tryChangeActive = function() {
          }, u;
        }(A.default);
        n.default = s;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(17));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = t(6), A = o.__importDefault(t(3)), d = o.__importDefault(t(341)), m = t(7);
        function s(i, u) {
          var l = i.config, p = new d.default(i), c = v.getRandom("input-iframe"), h = v.getRandom("btn-ok"), y = v.getRandom("input-upload"), g = v.getRandom("btn-local-ok");
          function x(C) {
            i.cmd.do("insertHTML", C + m.EMPTY_P), i.config.onlineVideoCallback(C);
          }
          function S(C) {
            var E = i.config.onlineVideoCheck(C);
            return E === !0 ? !0 : (typeof E == "string" && i.config.customAlert(E, "error"), !1);
          }
          var T = [{
            title: i.i18next.t("menus.panelMenus.video.上传视频"),
            tpl: `<div class="w-e-up-video-container">
                    <div id="` + g + `" class="w-e-up-btn">
                        <i class="w-e-icon-upload2"></i>
                    </div>
                    <div style="display:none;">
                        <input id="` + y + `" type="file" accept="video/*"/>
                    </div>
                 </div>`,
            events: [
              {
                selector: "#" + g,
                type: "click",
                fn: function() {
                  var E = A.default("#" + y), D = E.elems[0];
                  if (D)
                    D.click();
                  else
                    return !0;
                }
              },
              {
                selector: "#" + y,
                type: "change",
                fn: function() {
                  var E = A.default("#" + y), D = E.elems[0];
                  if (!D)
                    return !0;
                  var R = D.files;
                  return R.length && p.uploadVideo(R), !0;
                }
              }
            ]
          }, {
            title: i.i18next.t("menus.panelMenus.video.插入视频"),
            tpl: `<div>
                    <input 
                        id="` + c + `" 
                        type="text" 
                        class="block" 
                        placeholder="` + i.i18next.t("如") + `：<iframe src=... ></iframe>"/>
                    </td>
                    <div class="w-e-button-container">
                        <button type="button" id="` + h + `" class="right">
                            ` + i.i18next.t("插入") + `
                        </button>
                    </div>
                </div>`,
            events: [
              {
                selector: "#" + h,
                type: "click",
                fn: function() {
                  var E, D = A.default("#" + c), R = (0, r.default)(E = D.val()).call(E);
                  if (R && S(R))
                    return x(R), !0;
                },
                bindEnter: !0
              }
            ]
          }], P = {
            width: 300,
            height: 0,
            tabs: []
          };
          return window.FileReader && (l.uploadVideoServer || l.customUploadVideo) && P.tabs.push(T[0]), l.showLinkVideo && P.tabs.push(T[1]), P;
        }
        n.default = s;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(133)), o = e(t(57)), v = e(t(4)), A = e(t(27));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var d = t(2), m = t(6), s = d.__importDefault(t(135)), i = d.__importDefault(t(136)), u = t(7), l = t(6), p = function() {
          function c(h) {
            this.editor = h;
          }
          return c.prototype.uploadVideo = function(h) {
            var y = this;
            if (h.length) {
              var g = this.editor, x = g.config, S = "validate.", T = function(G) {
                return g.i18next.t(S + G);
              }, P = x.uploadVideoServer, C = x.uploadVideoMaxSize, E = C / 1024, D = x.uploadVideoName, R = x.uploadVideoParams, M = x.uploadVideoParamsWithUrl, I = x.uploadVideoHeaders, N = x.uploadVideoHooks, B = x.uploadVideoTimeout, F = x.withVideoCredentials, O = x.customUploadVideo, H = x.uploadVideoAccept, L = [], U = [];
              if (m.arrForEach(h, function(w) {
                var G = w.name, X = w.size / 1024 / 1024;
                if (!(!G || !X)) {
                  if (!(H instanceof Array)) {
                    U.push("【" + H + "】" + T("uploadVideoAccept 不是Array"));
                    return;
                  }
                  if (!(0, r.default)(H).call(H, function(tt) {
                    return tt === G.split(".")[G.split(".").length - 1];
                  })) {
                    U.push("【" + G + "】" + T("不是视频"));
                    return;
                  }
                  if (E < X) {
                    U.push("【" + G + "】" + T("大于") + " " + E + "M");
                    return;
                  }
                  L.push(w);
                }
              }), U.length) {
                x.customAlert(T("视频验证未通过") + `: 
` + U.join(`
`), "warning");
                return;
              }
              if (L.length === 0) {
                x.customAlert(T("传入的文件不合法"), "warning");
                return;
              }
              if (O && typeof O == "function") {
                var z;
                O(L, (0, o.default)(z = this.insertVideo).call(z, this));
                return;
              }
              var j = new FormData();
              if ((0, v.default)(L).call(L, function(w, G) {
                var X = D || w.name;
                L.length > 1 && (X = X + (G + 1)), j.append(X, w);
              }), P) {
                var K = P.split("#");
                P = K[0];
                var V = K[1] || "";
                (0, v.default)(m).call(m, R, function(w, G) {
                  M && ((0, A.default)(P).call(P, "?") > 0 ? P += "&" : P += "?", P = P + w + "=" + G), j.append(w, G);
                }), V && (P += "#" + V);
                var Q = s.default(P, {
                  timeout: B,
                  formData: j,
                  headers: I,
                  withCredentials: !!F,
                  beforeSend: function(G) {
                    if (N.before)
                      return N.before(G, g, L);
                  },
                  onTimeout: function(G) {
                    x.customAlert(T("上传视频超时"), "error"), N.timeout && N.timeout(G, g);
                  },
                  onProgress: function(G, X) {
                    var tt = new i.default(g);
                    X.lengthComputable && (G = X.loaded / X.total, tt.show(G));
                  },
                  onError: function(G) {
                    x.customAlert(T("上传视频错误"), "error", T("上传视频错误") + "，" + T("服务器返回状态") + ": " + G.status), N.error && N.error(G, g);
                  },
                  onFail: function(G, X) {
                    x.customAlert(T("上传视频失败"), "error", T("上传视频返回结果错误") + ("，" + T("返回结果") + ": ") + X), N.fail && N.fail(G, g, X);
                  },
                  onSuccess: function(G, X) {
                    if (N.customInsert) {
                      var tt;
                      N.customInsert((0, o.default)(tt = y.insertVideo).call(tt, y), X, g);
                      return;
                    }
                    if (X.errno != "0") {
                      x.customAlert(T("上传视频失败"), "error", T("上传视频返回结果错误") + "，" + T("返回结果") + " errno=" + X.errno), N.fail && N.fail(G, g, X);
                      return;
                    }
                    var et = X.data;
                    y.insertVideo(et.url), N.success && N.success(G, g, X);
                  }
                });
                typeof Q == "string" && x.customAlert(Q, "error");
              }
            }
          }, c.prototype.insertVideo = function(h) {
            var y = this.editor, g = y.config, x = "validate.", S = function(C, E) {
              return E === void 0 && (E = x), y.i18next.t(E + C);
            };
            if (!g.customInsertVideo)
              l.UA.isFirefox ? y.cmd.do("insertHTML", '<p data-we-video-p="true"><video src="' + h + '" controls="controls" style="max-width:100%"></video></p><p>&#8203</p>') : y.cmd.do("insertHTML", '<video src="' + h + '" controls="controls" style="max-width:100%"></video>' + u.EMPTY_P);
            else {
              g.customInsertVideo(h);
              return;
            }
            var T = document.createElement("video");
            T.onload = function() {
              T = null;
            }, T.onerror = function() {
              g.customAlert(S("插入视频错误"), "error", "wangEditor: " + S("插入视频错误") + "，" + S("视频链接") + ' "' + h + '"，' + S("下载链接失败")), T = null;
            }, T.onabort = function() {
              return T = null;
            }, T.src = h;
          }, c;
        }();
        n.default = p;
      },
      function(f, n, t) {
        f.exports = t(343);
      },
      function(f, n, t) {
        var e = t(344);
        f.exports = e;
      },
      function(f, n, t) {
        t(345);
        var e = t(9);
        f.exports = e.Date.now;
      },
      function(f, n, t) {
        var e = t(5);
        e({ target: "Date", stat: !0 }, {
          now: function() {
            return new Date().getTime();
          }
        });
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(347)), v = r.__importDefault(t(349));
        function A(d) {
          o.default(d), v.default(d);
        }
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.createShowHideFn = void 0;
        var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(39)), A = r.__importDefault(t(348));
        function d(s) {
          var i, u = function(h, y) {
            return y === void 0 && (y = ""), s.i18next.t(y + h);
          };
          function l(c) {
            var h = [{
              $elem: o.default("<span class='w-e-icon-trash-o'></span>"),
              onClick: function(g, x) {
                return x.remove(), !0;
              }
            }, {
              $elem: o.default("<span>100%</span>"),
              onClick: function(g, x) {
                return x.attr("width", "100%"), x.removeAttr("height"), !0;
              }
            }, {
              $elem: o.default("<span>50%</span>"),
              onClick: function(g, x) {
                return x.attr("width", "50%"), x.removeAttr("height"), !0;
              }
            }, {
              $elem: o.default("<span>30%</span>"),
              onClick: function(g, x) {
                return x.attr("width", "30%"), x.removeAttr("height"), !0;
              }
            }, {
              $elem: o.default("<span>" + u("重置") + "</span>"),
              onClick: function(g, x) {
                return x.removeAttr("width"), x.removeAttr("height"), !0;
              }
            }, {
              $elem: o.default("<span>" + u("menus.justify.靠左") + "</span>"),
              onClick: function(g, x) {
                return A.default(x, "left"), !0;
              }
            }, {
              $elem: o.default("<span>" + u("menus.justify.居中") + "</span>"),
              onClick: function(g, x) {
                return A.default(x, "center"), !0;
              }
            }, {
              $elem: o.default("<span>" + u("menus.justify.靠右") + "</span>"),
              onClick: function(g, x) {
                return A.default(x, "right"), !0;
              }
            }];
            i = new v.default(s, c, h), i.create();
          }
          function p() {
            i && (i.remove(), i = null);
          }
          return {
            showVideoTooltip: l,
            hideVideoTooltip: p
          };
        }
        n.createShowHideFn = d;
        function m(s) {
          var i = d(s), u = i.showVideoTooltip, l = i.hideVideoTooltip;
          s.txt.eventHooks.videoClickEvents.push(u), s.txt.eventHooks.clickEvents.push(l), s.txt.eventHooks.keyupEvents.push(l), s.txt.eventHooks.toolbarClickEvents.push(l), s.txt.eventHooks.menuClickEvents.push(l), s.txt.eventHooks.textScrollEvents.push(l), s.txt.eventHooks.changeEvents.push(l);
        }
        n.default = m;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(28));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(3));
        function A(m, s) {
          var i = ["P"], u = d(m, i);
          u && v.default(u).css("text-align", s);
        }
        n.default = A;
        function d(m, s) {
          for (var i, u = m.elems[0]; u != null; ) {
            if ((0, r.default)(s).call(s, u == null ? void 0 : u.nodeName))
              return u;
            if (((i = u == null ? void 0 : u.parentNode) === null || i === void 0 ? void 0 : i.nodeName) === "BODY")
              return null;
            u = u.parentNode;
          }
          return u;
        }
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(6);
        function o(v) {
          if (r.UA.isFirefox) {
            var A = v.txt, d = v.selection, m = A.eventHooks.keydownEvents;
            m.push(function(s) {
              var i = d.getSelectionContainerElem();
              if (i) {
                var u = i.getNodeTop(v), l = u.length && u.prev().length ? u.prev() : null;
                l && l.attr("data-we-video-p") && d.getCursorPos() === 0 && s.keyCode === 8 && l.remove();
              }
            });
          }
        }
        n.default = o;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(26));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = t(7), A = o.__importDefault(t(3)), d = o.__importDefault(t(33)), m = o.__importDefault(t(38)), s = o.__importDefault(t(351)), i = o.__importDefault(t(364)), u = function(l) {
          o.__extends(p, l);
          function p(c) {
            var h = this, y = A.default('<div class="w-e-menu" data-title="图片"><i class="w-e-icon-image"></i></div>'), g = i.default(c);
            if (g.onlyUploadConf) {
              var x;
              y = g.onlyUploadConf.$elem, (0, r.default)(x = g.onlyUploadConf.events).call(x, function(S) {
                var T = S.type, P = S.fn || v.EMPTY_FN;
                y.on(T, function(C) {
                  C.stopPropagation(), P(C);
                });
              });
            }
            return h = l.call(this, y, c) || this, h.imgPanelConfig = g, s.default(c), h;
          }
          return p.prototype.clickHandler = function() {
            this.imgPanelConfig.onlyUploadConf || this.createPanel();
          }, p.prototype.createPanel = function() {
            var c = this.imgPanelConfig, h = new d.default(this, c);
            this.setPanel(h), h.create();
          }, p.prototype.tryChangeActive = function() {
          }, p;
        }(m.default);
        n.default = u;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(352)), v = r.__importDefault(t(353)), A = r.__importDefault(t(354)), d = r.__importDefault(t(362)), m = r.__importDefault(t(363));
        function s(i) {
          o.default(i), v.default(i), A.default(i), d.default(i), m.default(i);
        }
        n.default = s;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = t(131), v = r.__importDefault(t(97));
        function A(i, u) {
          var l = i.config, p = l.pasteFilterStyle, c = l.pasteIgnoreImg, h = o.getPasteHtml(u, p, c);
          if (h)
            return !0;
          var y = o.getPasteText(u);
          return !!y;
        }
        function d(i, u) {
          for (var l, p = ((l = u.clipboardData) === null || l === void 0 ? void 0 : l.types) || [], c = 0; c < p.length; c++) {
            var h = p[c];
            if (h === "Files")
              return !0;
          }
          return !1;
        }
        function m(i, u) {
          if (!(!d(u, i) && A(u, i))) {
            var l = o.getPasteImgs(i);
            if (l.length) {
              var p = new v.default(u);
              p.uploadImg(l);
            }
          }
        }
        function s(i) {
          i.txt.eventHooks.pasteEvents.unshift(function(u) {
            m(u, i);
          });
        }
        n.default = s;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(97));
        function v(A) {
          function d(m) {
            var s = m.dataTransfer && m.dataTransfer.files;
            if (!(!s || !s.length)) {
              var i = new o.default(A);
              i.uploadImg(s);
            }
          }
          A.txt.eventHooks.dropEvents.push(d);
        }
        n.default = v;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(29)), o = e(t(355));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.createShowHideFn = void 0;
        var v = t(2), A = v.__importDefault(t(3));
        t(360);
        var d = t(6);
        function m(p, c, h, y, g) {
          p.attr("style", "width:" + c + "px; height:" + h + "px; left:" + y + "px; top:" + g + "px;");
        }
        function s(p, c) {
          var h = A.default(`<div class="w-e-img-drag-mask">
            <div class="w-e-img-drag-show-size"></div>
            <div class="w-e-img-drag-rb"></div>
         </div>`);
          return h.hide(), c.append(h), h;
        }
        function i(p, c, h) {
          var y = p.getBoundingClientRect(), g = h.getBoundingClientRect(), x = g.width.toFixed(2), S = g.height.toFixed(2);
          (0, r.default)(c).call(c, ".w-e-img-drag-show-size").text(x + "px * " + S + "px"), m(c, (0, o.default)(x), (0, o.default)(S), g.left - y.left, g.top - y.top), c.show();
        }
        function u(p) {
          var c = p.$textContainerElem, h, y = s(p, c);
          function g(T, P) {
            T.on("click", function(C) {
              C.stopPropagation();
            }), T.on("mousedown", ".w-e-img-drag-rb", function(C) {
              if (C.preventDefault(), !h)
                return;
              var E = C.clientX, D = C.clientY, R = P.getBoundingClientRect(), M = h.getBoundingClientRect(), I = M.width, N = M.height, B = M.left - R.left, F = M.top - R.top, O = I / N, H = I, L = N, U = A.default(document);
              function z() {
                U.off("mousemove", j), U.off("mouseup", K);
              }
              function j(V) {
                V.stopPropagation(), V.preventDefault(), H = I + (V.clientX - E), L = N + (V.clientY - D), H / L != O && (L = H / O), H = (0, o.default)(H.toFixed(2)), L = (0, o.default)(L.toFixed(2)), (0, r.default)(T).call(T, ".w-e-img-drag-show-size").text(H.toFixed(2).replace(".00", "") + "px * " + L.toFixed(2).replace(".00", "") + "px"), m(T, H, L, B, F);
              }
              U.on("mousemove", j);
              function K() {
                h.attr("width", H + ""), h.attr("height", L + "");
                var V = h.getBoundingClientRect();
                m(T, H, L, V.left - R.left, V.top - R.top), z();
              }
              U.on("mouseup", K), U.on("mouseleave", z);
            });
          }
          function x(T) {
            if (d.UA.isIE())
              return !1;
            T && (h = T, i(c, y, h));
          }
          function S() {
            (0, r.default)(c).call(c, ".w-e-img-drag-mask").hide();
          }
          return g(y, c), A.default(document).on("click", S), p.beforeDestroy(function() {
            A.default(document).off("click", S);
          }), {
            showDrag: x,
            hideDrag: S
          };
        }
        n.createShowHideFn = u;
        function l(p) {
          var c = u(p), h = c.showDrag, y = c.hideDrag;
          p.txt.eventHooks.imgClickEvents.push(h), p.txt.eventHooks.textScrollEvents.push(y), p.txt.eventHooks.keyupEvents.push(y), p.txt.eventHooks.toolbarClickEvents.push(y), p.txt.eventHooks.menuClickEvents.push(y), p.txt.eventHooks.changeEvents.push(y);
        }
        n.default = l;
      },
      function(f, n, t) {
        f.exports = t(356);
      },
      function(f, n, t) {
        var e = t(357);
        f.exports = e;
      },
      function(f, n, t) {
        t(358);
        var e = t(9);
        f.exports = e.parseFloat;
      },
      function(f, n, t) {
        var e = t(5), a = t(359);
        e({ global: !0, forced: parseFloat != a }, {
          parseFloat: a
        });
      },
      function(f, n, t) {
        var e = t(8), a = t(90).trim, r = t(68), o = e.parseFloat, v = 1 / o(r + "-0") !== -1 / 0;
        f.exports = v ? function(d) {
          var m = a(String(d)), s = o(m);
          return s === 0 && m.charAt(0) == "-" ? -0 : s;
        } : o;
      },
      function(f, n, t) {
        var e = t(20), a = t(361);
        a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[f.i, a, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(a, r), f.exports = a.locals || {};
      },
      function(f, n, t) {
        var e = t(21);
        n = e(!1), n.push([f.i, `.w-e-text-container {
  overflow: hidden;
}
.w-e-img-drag-mask {
  position: absolute;
  z-index: 1;
  border: 1px dashed #ccc;
  box-sizing: border-box;
}
.w-e-img-drag-mask .w-e-img-drag-rb {
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ccc;
  cursor: se-resize;
}
.w-e-img-drag-mask .w-e-img-drag-show-size {
  min-width: 110px;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  color: #999;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #999;
  color: #fff;
  border-radius: 2px;
  padding: 0 5px;
}
`, ""]), f.exports = n;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.createShowHideFn = void 0;
        var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(39));
        function A(m) {
          var s, i = function(c, h) {
            return h === void 0 && (h = ""), m.i18next.t(h + c);
          };
          function u(p) {
            var c = [{
              $elem: o.default("<span class='w-e-icon-trash-o'></span>"),
              onClick: function(y, g) {
                return y.selection.createRangeByElem(g), y.selection.restoreSelection(), y.cmd.do("delete"), !0;
              }
            }, {
              $elem: o.default("<span>30%</span>"),
              onClick: function(y, g) {
                return g.attr("width", "30%"), g.removeAttr("height"), !0;
              }
            }, {
              $elem: o.default("<span>50%</span>"),
              onClick: function(y, g) {
                return g.attr("width", "50%"), g.removeAttr("height"), !0;
              }
            }, {
              $elem: o.default("<span>100%</span>"),
              onClick: function(y, g) {
                return g.attr("width", "100%"), g.removeAttr("height"), !0;
              }
            }];
            c.push({
              $elem: o.default("<span>" + i("重置") + "</span>"),
              onClick: function(y, g) {
                return g.removeAttr("width"), g.removeAttr("height"), !0;
              }
            }), p.attr("data-href") && c.push({
              $elem: o.default("<span>" + i("查看链接") + "</span>"),
              onClick: function(y, g) {
                var x = g.attr("data-href");
                return x && (x = decodeURIComponent(x), window.open(x, "_target")), !0;
              }
            }), s = new v.default(m, p, c), s.create();
          }
          function l() {
            s && (s.remove(), s = null);
          }
          return {
            showImgTooltip: u,
            hideImgTooltip: l
          };
        }
        n.createShowHideFn = A;
        function d(m) {
          var s = A(m), i = s.showImgTooltip, u = s.hideImgTooltip;
          m.txt.eventHooks.imgClickEvents.push(i), m.txt.eventHooks.clickEvents.push(u), m.txt.eventHooks.keyupEvents.push(u), m.txt.eventHooks.toolbarClickEvents.push(u), m.txt.eventHooks.menuClickEvents.push(u), m.txt.eventHooks.textScrollEvents.push(u), m.txt.eventHooks.imgDragBarMouseDownEvents.push(u), m.txt.eventHooks.changeEvents.push(u);
        }
        n.default = d;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        function r(o) {
          var v = o.txt, A = o.selection, d = v.eventHooks.keydownEvents;
          d.push(function(m) {
            var s = A.getSelectionContainerElem(), i = A.getRange();
            if (!(!i || !s || m.keyCode !== 8 || !A.isSelectionEmpty())) {
              var u = i.startContainer, l = i.startOffset, p = null;
              if (l === 0)
                for (; u !== s.elems[0] && s.elems[0].contains(u) && u.parentNode && !p; ) {
                  if (u.previousSibling) {
                    p = u.previousSibling;
                    break;
                  }
                  u = u.parentNode;
                }
              else
                u.nodeType !== 3 && (p = u.childNodes[l - 1]);
              if (p) {
                for (var c = p; c.childNodes.length; )
                  c = c.childNodes[c.childNodes.length - 1];
                c instanceof HTMLElement && c.tagName === "IMG" && (c.remove(), m.preventDefault());
              }
            }
          });
        }
        n.default = r;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(26)), o = e(t(17));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var v = t(2), A = v.__importDefault(t(3)), d = t(6), m = v.__importDefault(t(97));
        function s(i) {
          var u, l = i.config, p = new m.default(i), c = d.getRandom("up-trigger-id"), h = d.getRandom("up-file-id"), y = d.getRandom("input-link-url"), g = d.getRandom("input-link-url-alt"), x = d.getRandom("input-link-url-href"), S = d.getRandom("btn-link"), T = "menus.panelMenus.image.", P = function(O, H) {
            return H === void 0 && (H = T), i.i18next.t(H + O);
          };
          function C(F, O, H) {
            var L = l.linkImgCheck(F);
            return L === !0 ? !0 : (typeof L == "string" && l.customAlert(L, "error"), !1);
          }
          var E = l.uploadImgMaxLength === 1 ? "" : 'multiple="multiple"', D = (0, r.default)(u = l.uploadImgAccept).call(u, function(F) {
            return "image/" + F;
          }).join(","), R = function(O, H, L) {
            return '<div class="' + O + '" data-title="' + L + `">
            <div id="` + c + `" class="w-e-up-btn">
                <i class="` + H + `"></i>
            </div>
            <div style="display:none;">
                <input id="` + h + '" type="file" ' + E + ' accept="' + D + `"/>
            </div>
        </div>`;
          }, M = [
            {
              selector: "#" + c,
              type: "click",
              fn: function() {
                var O = l.uploadImgFromMedia;
                if (O && typeof O == "function")
                  return O(), !0;
                var H = A.default("#" + h), L = H.elems[0];
                if (L)
                  L.click();
                else
                  return !0;
              }
            },
            {
              selector: "#" + h,
              type: "change",
              fn: function() {
                var O = A.default("#" + h), H = O.elems[0];
                if (!H)
                  return !0;
                var L = H.files;
                return L != null && L.length && p.uploadImg(L), H && (H.value = ""), !0;
              }
            }
          ], I = [`<input
            id="` + y + `"
            type="text"
            class="block"
            placeholder="` + P("图片地址") + '"/>'];
          l.showLinkImgAlt && I.push(`
        <input
            id="` + g + `"
            type="text"
            class="block"
            placeholder="` + P("图片文字说明") + '"/>'), l.showLinkImgHref && I.push(`
        <input
            id="` + x + `"
            type="text"
            class="block"
            placeholder="` + P("跳转链接") + '"/>');
          var N = [
            {
              title: P("上传图片"),
              tpl: R("w-e-up-img-container", "w-e-icon-upload2", ""),
              events: M
            },
            {
              title: P("网络图片"),
              tpl: `<div>
                    ` + I.join("") + `
                    <div class="w-e-button-container">
                        <button type="button" id="` + S + '" class="right">' + P("插入", "") + `</button>
                    </div>
                </div>`,
              events: [{
                selector: "#" + S,
                type: "click",
                fn: function() {
                  var O, H = A.default("#" + y), L = (0, o.default)(O = H.val()).call(O);
                  if (L) {
                    var U;
                    if (l.showLinkImgAlt) {
                      var z;
                      U = (0, o.default)(z = A.default("#" + g).val()).call(z);
                    }
                    var j;
                    if (l.showLinkImgHref) {
                      var K;
                      j = (0, o.default)(K = A.default("#" + x).val()).call(K);
                    }
                    if (C(L))
                      return p.insertImg(L, U, j), !0;
                  }
                },
                bindEnter: !0
              }]
            }
          ], B = {
            width: 300,
            height: 0,
            tabs: [],
            onlyUploadConf: {
              $elem: A.default(R("w-e-menu", "w-e-icon-image", "图片")),
              events: M
            }
          };
          return window.FileReader && (l.uploadImgShowBase64 || l.uploadImgServer || l.customUploadImg || l.uploadImgFromMedia) && B.tabs.push(N[0]), l.showLinkImg && (B.tabs.push(N[1]), B.onlyUploadConf = void 0), B;
        }
        n.default = s;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(3)), A = o.__importDefault(t(24)), d = o.__importDefault(t(366)), m = function(s) {
          o.__extends(i, s);
          function i(u) {
            var l = this, p = v.default(`<div class="w-e-menu" data-title="缩进">
                <i class="w-e-icon-indent-increase"></i>
            </div>`), c = {
              width: 130,
              title: "设置缩进",
              type: "list",
              list: [{
                $elem: v.default(`<p>
                            <i class="w-e-icon-indent-increase w-e-drop-list-item"></i>
                            ` + u.i18next.t("menus.dropListMenu.indent.增加缩进") + `
                        <p>`),
                value: "increase"
              }, {
                $elem: v.default(`<p>
                            <i class="w-e-icon-indent-decrease w-e-drop-list-item"></i>
                            ` + u.i18next.t("menus.dropListMenu.indent.减少缩进") + `
                        <p>`),
                value: "decrease"
              }],
              clickHandler: function(y) {
                l.command(y);
              }
            };
            return l = s.call(this, p, u, c) || this, l;
          }
          return i.prototype.command = function(u) {
            var l = this.editor, p = l.selection.getSelectionContainerElem();
            if (p && l.$textElem.equal(p)) {
              var c = l.selection.getSelectionRangeTopNodes();
              c.length > 0 && (0, r.default)(c).call(c, function(h) {
                d.default(v.default(h), u, l);
              });
            } else
              p && p.length > 0 && (0, r.default)(p).call(p, function(h) {
                d.default(v.default(h), u, l);
              });
            l.selection.restoreSelection(), this.tryChangeActive();
          }, i.prototype.tryChangeActive = function() {
            var u = this.editor, l = u.selection.getSelectionStartElem(), p = v.default(l).getNodeTop(u);
            p.length <= 0 || (p.elems[0].style.paddingLeft != "" ? this.active() : this.unActive());
          }, i;
        }(A.default);
        n.default = m;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(45)), o = e(t(17));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var v = t(2), A = v.__importDefault(t(367)), d = v.__importDefault(t(368)), m = /^(\d+)(\w+)$/, s = /^(\d+)%$/;
        function i(l) {
          var p = l.config.indentation;
          if (typeof p == "string") {
            if (m.test(p)) {
              var c, h = (0, r.default)(c = (0, o.default)(p).call(p).match(m)).call(c, 1, 3), y = h[0], g = h[1];
              return {
                value: Number(y),
                unit: g
              };
            } else if (s.test(p))
              return {
                value: Number((0, o.default)(p).call(p).match(s)[1]),
                unit: "%"
              };
          } else if (p.value !== void 0 && p.unit)
            return p;
          return {
            value: 2,
            unit: "em"
          };
        }
        function u(l, p, c) {
          var h = l.getNodeTop(c), y = /^(P|H[0-9]*)$/;
          y.test(h.getNodeName()) && (p === "increase" ? A.default(h, i(c)) : p === "decrease" && d.default(h, i(c)));
        }
        n.default = u;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(45));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        function o(v, A) {
          var d = v.elems[0];
          if (d.style.paddingLeft === "")
            v.css("padding-left", A.value + A.unit);
          else {
            var m = d.style.paddingLeft, s = (0, r.default)(m).call(m, 0, m.length - A.unit.length), i = Number(s) + A.value;
            v.css("padding-left", "" + i + A.unit);
          }
        }
        n.default = o;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(45));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        function o(v, A) {
          var d = v.elems[0];
          if (d.style.paddingLeft !== "") {
            var m = d.style.paddingLeft, s = (0, r.default)(m).call(m, 0, m.length - A.unit.length), i = Number(s) - A.value;
            i > 0 ? v.css("padding-left", "" + i + A.unit) : v.css("padding-left", "");
          }
        }
        n.default = o;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(38)), A = r.__importDefault(t(33)), d = r.__importDefault(t(370)), m = function(s) {
          r.__extends(i, s);
          function i(u) {
            var l = this, p = o.default(`<div class="w-e-menu" data-title="表情">
                <i class="w-e-icon-happy"></i>
            </div>`);
            return l = s.call(this, p, u) || this, l;
          }
          return i.prototype.createPanel = function() {
            var u = d.default(this.editor), l = new A.default(this, u);
            l.create();
          }, i.prototype.clickHandler = function() {
            this.createPanel();
          }, i.prototype.tryChangeActive = function() {
          }, i;
        }(v.default);
        n.default = m;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(26)), o = e(t(70)), v = e(t(17));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var A = t(2), d = A.__importDefault(t(3));
        function m(s) {
          var i = s.config.emotions;
          function u(c) {
            var h = [];
            if (c.type == "image") {
              var y;
              h = (0, r.default)(y = c.content).call(y, function(x) {
                return typeof x == "string" ? "" : '<span  title="' + x.alt + `">
                    <img class="eleImg" data-emoji="` + x.alt + '" style src="' + x.src + '" alt="[' + x.alt + `]">
                </span>`;
              }), h = (0, o.default)(h).call(h, function(x) {
                return x !== "";
              });
            } else {
              var g;
              h = (0, r.default)(g = c.content).call(g, function(x) {
                return '<span class="eleImg" title="' + x + '">' + x + "</span>";
              });
            }
            return h.join("").replace(/&nbsp;/g, "");
          }
          var l = (0, r.default)(i).call(i, function(c) {
            return {
              title: s.i18next.t("menus.panelMenus.emoticon." + c.title),
              tpl: "<div>" + u(c) + "</div>",
              events: [{
                selector: ".eleImg",
                type: "click",
                fn: function(y) {
                  var g = d.default(y.target), x = g.getNodeName(), S;
                  if (x === "IMG") {
                    var T;
                    S = (0, v.default)(T = g.parent().html()).call(T);
                  } else
                    S = "<span>" + g.html() + "</span>";
                  return s.cmd.do("insertHTML", S), !0;
                }
              }]
            };
          }), p = {
            width: 300,
            height: 230,
            tabs: l
          };
          return p;
        }
        n.default = m;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.createListHandle = n.ClassType = void 0;
        var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(372)), A = r.__importDefault(t(374)), d = r.__importDefault(t(375)), m = r.__importDefault(t(376)), s = r.__importDefault(t(377)), i;
        (function(c) {
          c.Wrap = "WrapListHandle", c.Join = "JoinListHandle", c.StartJoin = "StartJoinListHandle", c.EndJoin = "EndJoinListHandle", c.Other = "OtherListHandle";
        })(i = n.ClassType || (n.ClassType = {}));
        var u = {
          WrapListHandle: v.default,
          JoinListHandle: A.default,
          StartJoinListHandle: d.default,
          EndJoinListHandle: m.default,
          OtherListHandle: s.default
        };
        function l(c, h, y) {
          if (c === i.Other && y === void 0)
            throw new Error("other 类需要传入 range");
          return c !== i.Other ? new u[c](h) : new u[c](h, y);
        }
        n.createListHandle = l;
        var p = function() {
          function c(h) {
            this.handle = h, this.handle.exec();
          }
          return c.prototype.getSelectionRangeElem = function() {
            return o.default(this.handle.selectionRangeElem.get());
          }, c;
        }();
        n.default = p;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(3)), A = t(58), d = t(47), m = function(s) {
          o.__extends(i, s);
          function i(u) {
            return s.call(this, u) || this;
          }
          return i.prototype.exec = function() {
            var u = this.options, l = u.listType, p = u.listTarget, c = u.$selectionElem, h = u.$startElem, y = u.$endElem, g, x = [], S = c == null ? void 0 : c.getNodeName(), T = h.prior, P = y.prior;
            if (!h.prior && !y.prior || !(T != null && T.prev().length) && !(P != null && P.next().length)) {
              var C;
              (0, r.default)(C = c == null ? void 0 : c.children()).call(C, function(B) {
                x.push(v.default(B));
              }), S === l ? g = d.createElementFragment(
                x,
                d.createDocumentFragment(),
                "p"
              ) : (g = d.createElement(p), (0, r.default)(x).call(x, function(B) {
                g.appendChild(B.elems[0]);
              })), this.selectionRangeElem.set(g), d.insertBefore(c, g, c.elems[0]), c.remove();
            } else {
              for (var E = T; E.length; )
                x.push(E), P != null && P.equal(E) ? E = v.default(void 0) : E = E.next();
              var D = T.prev(), R = P.next();
              if (S === l ? g = d.createElementFragment(
                x,
                d.createDocumentFragment(),
                "p"
              ) : (g = d.createElement(p), (0, r.default)(x).call(x, function(B) {
                g.append(B.elems[0]);
              })), D.length && R.length) {
                for (var M = []; R.length; )
                  M.push(R), R = R.next();
                var I = d.createElement(S);
                (0, r.default)(M).call(M, function(B) {
                  I.append(B.elems[0]);
                }), v.default(I).insertAfter(c), this.selectionRangeElem.set(g);
                var N = c.next();
                N.length ? d.insertBefore(c, g, N.elems[0]) : c.parent().elems[0].append(g);
              } else if (!D.length)
                this.selectionRangeElem.set(g), d.insertBefore(c, g, c.elems[0]);
              else {
                this.selectionRangeElem.set(g);
                var N = c.next();
                N.length ? d.insertBefore(c, g, N.elems[0]) : c.parent().elems[0].append(g);
              }
            }
          }, i;
        }(A.ListHandle);
        n.default = m;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = function() {
          function v() {
            this._element = null;
          }
          return v.prototype.set = function(A) {
            if (A instanceof DocumentFragment) {
              var d, m = [];
              (0, r.default)(d = A.childNodes).call(d, function(s) {
                m.push(s);
              }), A = m;
            }
            this._element = A;
          }, v.prototype.get = function() {
            return this._element;
          }, v.prototype.clear = function() {
            this._element = null;
          }, v;
        }();
        n.default = o;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(3)), A = t(58), d = t(47), m = function(s) {
          o.__extends(i, s);
          function i(u) {
            return s.call(this, u) || this;
          }
          return i.prototype.exec = function() {
            var u, l, p, c, h, y, g, x = this.options, S = x.editor, T = x.listType, P = x.listTarget, C = x.$startElem, E = x.$endElem, D, R = S.selection.getSelectionRangeTopNodes(), M = C == null ? void 0 : C.getNodeName(), I = E == null ? void 0 : E.getNodeName();
            if (M === I)
              if (R.length > 2)
                if (R.shift(), R.pop(), D = d.createElementFragment(
                  d.filterSelectionNodes(R),
                  d.createDocumentFragment()
                ), M === T)
                  (u = E.children()) === null || u === void 0 || (0, r.default)(u).call(u, function(V) {
                    D.append(V);
                  }), E.remove(), this.selectionRangeElem.set(D), C.elems[0].append(D);
                else {
                  for (var N = document.createDocumentFragment(), B = document.createDocumentFragment(), F = d.getStartPoint(C); F.length; ) {
                    var O = F.elems[0];
                    F = F.next(), N.append(O);
                  }
                  for (var H = d.getEndPoint(E), L = []; H.length; )
                    L.unshift(H.elems[0]), H = H.prev();
                  (0, r.default)(L).call(L, function(V) {
                    B.append(V);
                  });
                  var U = d.createElement(P);
                  U.append(N), U.append(D), U.append(B), D = U, this.selectionRangeElem.set(D), v.default(U).insertAfter(C), !(!((l = C.children()) === null || l === void 0) && l.length) && C.remove(), !(!((p = E.children()) === null || p === void 0) && p.length) && E.remove();
                }
              else {
                R.length = 0;
                for (var F = d.getStartPoint(C); F.length; )
                  R.push(F), F = F.next();
                for (var H = d.getEndPoint(E), L = []; H.length; )
                  L.unshift(H), H = H.prev();
                R.push.apply(R, L), M === T ? (D = d.createElementFragment(R, d.createDocumentFragment(), "p"), this.selectionRangeElem.set(D), d.insertBefore(C, D, E.elems[0])) : (D = d.createElement(P), (0, r.default)(R).call(R, function(G) {
                  D.append(G.elems[0]);
                }), this.selectionRangeElem.set(D), v.default(D).insertAfter(C)), !(!((c = C.children()) === null || c === void 0) && c.length) && E.remove(), !(!((h = E.children()) === null || h === void 0) && h.length) && E.remove();
              }
            else {
              for (var z = [], H = d.getEndPoint(E); H.length; )
                z.unshift(H), H = H.prev();
              for (var j = [], F = d.getStartPoint(C); F.length; )
                j.push(F), F = F.next();
              if (D = d.createDocumentFragment(), R.shift(), R.pop(), (0, r.default)(j).call(j, function(w) {
                return D.append(w.elems[0]);
              }), D = d.createElementFragment(
                d.filterSelectionNodes(R),
                D
              ), (0, r.default)(z).call(z, function(w) {
                return D.append(w.elems[0]);
              }), this.selectionRangeElem.set(D), M === T)
                C.elems[0].append(D), !(!((y = E.children()) === null || y === void 0) && y.length) && E.remove();
              else if (!((g = E.children()) === null || g === void 0) && g.length) {
                var K = E.children();
                d.insertBefore(K, D, K.elems[0]);
              } else
                E.elems[0].append(D);
            }
          }, i;
        }(A.ListHandle);
        n.default = m;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(3)), A = t(58), d = t(47), m = function(s) {
          o.__extends(i, s);
          function i(u) {
            return s.call(this, u) || this;
          }
          return i.prototype.exec = function() {
            var u, l = this.options, p = l.editor, c = l.listType, h = l.listTarget, y = l.$startElem, g, x = p.selection.getSelectionRangeTopNodes(), S = y == null ? void 0 : y.getNodeName();
            x.shift();
            for (var T = [], P = d.getStartPoint(y); P.length; )
              T.push(P), P = P.next();
            S === c ? (g = d.createDocumentFragment(), (0, r.default)(T).call(T, function(C) {
              return g.append(C.elems[0]);
            }), g = d.createElementFragment(
              d.filterSelectionNodes(x),
              g
            ), this.selectionRangeElem.set(g), y.elems[0].append(g)) : (g = d.createElement(h), (0, r.default)(T).call(T, function(C) {
              return g.append(C.elems[0]);
            }), g = d.createElementFragment(
              d.filterSelectionNodes(x),
              g
            ), this.selectionRangeElem.set(g), v.default(g).insertAfter(y), !(!((u = y.children()) === null || u === void 0) && u.length) && y.remove());
          }, i;
        }(A.ListHandle);
        n.default = m;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(3)), A = t(58), d = t(47), m = function(s) {
          o.__extends(i, s);
          function i(u) {
            return s.call(this, u) || this;
          }
          return i.prototype.exec = function() {
            var u, l, p = this.options, c = p.editor, h = p.listType, y = p.listTarget, g = p.$endElem, x, S = c.selection.getSelectionRangeTopNodes(), T = g == null ? void 0 : g.getNodeName();
            S.pop();
            for (var P = [], C = d.getEndPoint(g); C.length; )
              P.unshift(C), C = C.prev();
            if (T === h)
              if (x = d.createElementFragment(
                d.filterSelectionNodes(S),
                d.createDocumentFragment()
              ), (0, r.default)(P).call(P, function(R) {
                return x.append(R.elems[0]);
              }), this.selectionRangeElem.set(x), !((u = g.children()) === null || u === void 0) && u.length) {
                var E = g.children();
                d.insertBefore(E, x, E.elems[0]);
              } else
                g.elems[0].append(x);
            else {
              var D = d.filterSelectionNodes(S);
              D.push.apply(D, P), x = d.createElementFragment(
                D,
                d.createElement(y)
              ), this.selectionRangeElem.set(x), v.default(x).insertBefore(g), !(!((l = g.children()) === null || l === void 0) && l.length) && g.remove();
            }
          }, i;
        }(A.ListHandle);
        n.default = m;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = t(58), v = t(47), A = function(d) {
          r.__extends(m, d);
          function m(s, i) {
            var u = d.call(this, s) || this;
            return u.range = i, u;
          }
          return m.prototype.exec = function() {
            var s = this.options, i = s.editor, u = s.listTarget, l = i.selection.getSelectionRangeTopNodes(), p = v.createElementFragment(
              v.filterSelectionNodes(l),
              v.createElement(u)
            );
            this.selectionRangeElem.set(p), this.range.insertNode(p);
          }, m;
        }(o.ListHandle);
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4)), o = e(t(27));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var v = t(2), A = v.__importDefault(t(24)), d = v.__importDefault(t(3)), m = v.__importDefault(t(379)), s = function(i) {
          v.__extends(u, i);
          function u(l) {
            var p = this, c = d.default(`<div class="w-e-menu" data-title="行高">
                    <i class="w-e-icon-row-height"></i>
                </div>`), h = new m.default(l, l.config.lineHeights), y = {
              width: 100,
              title: "设置行高",
              type: "list",
              list: h.getItemList(),
              clickHandler: function(x) {
                l.selection.saveRange(), p.command(x);
              }
            };
            return p = i.call(this, c, l, y) || this, p;
          }
          return u.prototype.command = function(l) {
            var p = this.editor;
            p.selection.restoreSelection();
            var c = d.default(p.selection.getSelectionContainerElem());
            if (c.elems.length) {
              if (c && p.$textElem.equal(c)) {
                for (var h = !1, y = d.default(p.selection.getSelectionStartElem()).elems[0], g = d.default(p.selection.getSelectionEndElem()).elems[0], x = this.getDom(y), S = this.getDom(g), T = c.elems[0].children, P = 0; P < T.length; P++) {
                  var C = T[P];
                  if (d.default(C).getNodeName() === "P" && (C === x && (h = !0), h && (d.default(C).css("line-height", l), C === S))) {
                    h = !1;
                    return;
                  }
                }
                p.selection.createRangeByElems(y, g);
                return;
              }
              var E = c.elems[0], D = this.getDom(E);
              d.default(D).getNodeName() === "P" && (d.default(D).css("line-height", l), p.selection.createRangeByElems(D, D));
            }
          }, u.prototype.getDom = function(l) {
            var p = d.default(l).elems[0];
            if (!p.parentNode)
              return p;
            function c(h, y) {
              var g = d.default(h.parentNode);
              return y.$textElem.equal(g) ? h : c(g.elems[0], y);
            }
            return p = c(p, this.editor), p;
          }, u.prototype.styleProcessing = function(l) {
            var p = "";
            return (0, r.default)(l).call(l, function(c) {
              c !== "" && (0, o.default)(c).call(c, "line-height") === -1 && (p = p + c + ";");
            }), p;
          }, u.prototype.setRange = function(l, p) {
            var c = this.editor, h = window.getSelection ? window.getSelection() : document.getSelection();
            h == null || h.removeAllRanges();
            var y = document.createRange(), g = l, x = p;
            y.setStart(g, 0), y.setEnd(x, 1), h == null || h.addRange(y), c.selection.saveRange(), h == null || h.removeAllRanges(), c.selection.restoreSelection();
          }, u.prototype.tryChangeActive = function() {
            var l = this.editor, p = l.selection.getSelectionContainerElem();
            if (!(p && l.$textElem.equal(p))) {
              var c = d.default(l.selection.getSelectionStartElem());
              if (c.length !== 0) {
                c = this.getDom(c.elems[0]);
                var h = c.getAttribute("style") ? c.getAttribute("style") : "";
                h && (0, o.default)(h).call(h, "line-height") !== -1 ? this.active() : this.unActive();
              }
            }
          }, u;
        }(A.default);
        n.default = s;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(3)), A = function() {
          function d(m, s) {
            var i = this;
            this.itemList = [{
              $elem: v.default("<span>" + m.i18next.t("默认") + "</span>"),
              value: ""
            }], (0, r.default)(s).call(s, function(u) {
              i.itemList.push({
                $elem: v.default("<span>" + u + "</span>"),
                value: u
              });
            });
          }
          return d.prototype.getItemList = function() {
            return this.itemList;
          }, d;
        }();
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(23)), A = function(d) {
          r.__extends(m, d);
          function m(s) {
            var i = this, u = o.default(`<div class="w-e-menu" data-title="撤销">
                <i class="w-e-icon-undo"></i>
            </div>`);
            return i = d.call(this, u, s) || this, i;
          }
          return m.prototype.clickHandler = function() {
            var s = this.editor;
            s.history.revoke();
            var i = s.$textElem.children();
            if (i != null && i.length) {
              var u = i.last();
              s.selection.createRangeByElem(u, !1, !0), s.selection.restoreSelection();
            }
          }, m.prototype.tryChangeActive = function() {
            this.editor.isCompatibleMode || (this.editor.history.size[0] ? this.active() : this.unActive());
          }, m;
        }(v.default);
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(23)), A = function(d) {
          r.__extends(m, d);
          function m(s) {
            var i = this, u = o.default(`<div class="w-e-menu" data-title="恢复">
                <i class="w-e-icon-redo"></i>
            </div>`);
            return i = d.call(this, u, s) || this, i;
          }
          return m.prototype.clickHandler = function() {
            var s = this.editor;
            s.history.restore();
            var i = s.$textElem.children();
            if (i != null && i.length) {
              var u = i.last();
              s.selection.createRangeByElem(u, !1, !0), s.selection.restoreSelection();
            }
          }, m.prototype.tryChangeActive = function() {
            this.editor.isCompatibleMode || (this.editor.history.size[1] ? this.active() : this.unActive());
          }, m;
        }(v.default);
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(38)), v = r.__importDefault(t(3)), A = r.__importDefault(t(383)), d = r.__importDefault(t(33)), m = r.__importDefault(t(392)), s = function(i) {
          r.__extends(u, i);
          function u(l) {
            var p = this, c = v.default('<div class="w-e-menu" data-title="表格"><i class="w-e-icon-table2"></i></div>');
            return p = i.call(this, c, l) || this, m.default(l), p;
          }
          return u.prototype.clickHandler = function() {
            this.createPanel();
          }, u.prototype.createPanel = function() {
            var l = A.default(this.editor), p = new d.default(this, l);
            p.create();
          }, u.prototype.tryChangeActive = function() {
          }, u;
        }(o.default);
        n.default = s;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(384));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = t(6), A = o.__importDefault(t(3));
        t(389);
        var d = o.__importDefault(t(391));
        function m(i) {
          return i > 0 && (0, r.default)(i);
        }
        function s(i) {
          var u = new d.default(i), l = v.getRandom("w-col-id"), p = v.getRandom("w-row-id"), c = v.getRandom("btn-link"), h = "menus.panelMenus.table.", y = function(T) {
            return i.i18next.t(T);
          }, g = [{
            title: y(h + "插入表格"),
            tpl: `<div>
                    <div class="w-e-table">
                        <span>` + y("创建") + `</span>
                        <input id="` + p + `"  type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + y(h + "行") + `</span>
                        <input id="` + l + `" type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + (y(h + "列") + y(h + "的") + y(h + "表格")) + `</span>
                    </div>
                    <div class="w-e-button-container">
                        <button type="button" id="` + c + '" class="right">' + y("插入") + `</button>
                    </div>
                </div>`,
            events: [{
              selector: "#" + c,
              type: "click",
              fn: function() {
                var T = Number(A.default("#" + l).val()), P = Number(A.default("#" + p).val());
                return m(P) && m(T) ? (u.createAction(P, T), !0) : (i.config.customAlert("表格行列请输入正整数", "warning"), !1);
              },
              bindEnter: !0
            }]
          }], x = {
            width: 330,
            height: 0,
            tabs: []
          };
          return x.tabs.push(g[0]), x;
        }
        n.default = s;
      },
      function(f, n, t) {
        f.exports = t(385);
      },
      function(f, n, t) {
        var e = t(386);
        f.exports = e;
      },
      function(f, n, t) {
        t(387);
        var e = t(9);
        f.exports = e.Number.isInteger;
      },
      function(f, n, t) {
        var e = t(5), a = t(388);
        e({ target: "Number", stat: !0 }, {
          isInteger: a
        });
      },
      function(f, n, t) {
        var e = t(13), a = Math.floor;
        f.exports = function(o) {
          return !e(o) && isFinite(o) && a(o) === o;
        };
      },
      function(f, n, t) {
        var e = t(20), a = t(390);
        a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[f.i, a, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(a, r), f.exports = a.locals || {};
      },
      function(f, n, t) {
        var e = t(21);
        n = e(!1), n.push([f.i, `.w-e-table {
  display: flex;
}
.w-e-table .w-e-table-input {
  width: 40px;
  text-align: center!important;
  margin: 0 5px;
}
`, ""]), f.exports = n;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = t(7), v = r.__importDefault(t(3)), A = function() {
          function d(m) {
            this.editor = m;
          }
          return d.prototype.createAction = function(m, s) {
            var i = this.editor, u = v.default(i.selection.getSelectionContainerElem()), l = v.default(u.elems[0]).parentUntilEditor("UL", i), p = v.default(u.elems[0]).parentUntilEditor("OL", i);
            if (!(l || p)) {
              var c = this.createTableHtml(m, s);
              i.cmd.do("insertHTML", c);
            }
          }, d.prototype.createTableHtml = function(m, s) {
            for (var i = "", u = "", l = 0; l < m; l++) {
              u = "";
              for (var p = 0; p < s; p++)
                l === 0 ? u = u + "<th></th>" : u = u + "<td></td>";
              i = i + "<tr>" + u + "</tr>";
            }
            var c = '<table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody>' + i + ("</tbody></table>" + o.EMPTY_P);
            return c;
          }, d;
        }();
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(393)), v = t(400);
        function A(d) {
          o.default(d), v.bindEventKeyboardEvent(d), v.bindClickEvent(d);
        }
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(39)), A = r.__importDefault(t(394)), d = r.__importDefault(t(399)), m = t(7);
        function s(p) {
          var c;
          function h(g) {
            var x = new d.default(p), S = "menus.panelMenus.table.", T = function(E, D) {
              return D === void 0 && (D = S), p.i18next.t(D + E);
            }, P = [{
              $elem: o.default("<span>" + T("删除表格") + "</span>"),
              onClick: function(E, D) {
                return E.selection.createRangeByElem(D), E.selection.restoreSelection(), E.cmd.do("insertHTML", m.EMPTY_P), !0;
              }
            }, {
              $elem: o.default("<span>" + T("添加行") + "</span>"),
              onClick: function(E, D) {
                var R = i(E);
                if (R)
                  return !0;
                var M = o.default(E.selection.getSelectionStartElem()), I = x.getRowNode(M.elems[0]);
                if (!I)
                  return !0;
                var N = Number(x.getCurrentRowIndex(D.elems[0], I)), B = x.getTableHtml(D.elems[0]), F = x.getTableHtml(A.default.ProcessingRow(o.default(B), N).elems[0]);
                return F = l(D, F), E.selection.createRangeByElem(D), E.selection.restoreSelection(), E.cmd.do("insertHTML", F), !0;
              }
            }, {
              $elem: o.default("<span>" + T("删除行") + "</span>"),
              onClick: function(E, D) {
                var R = i(E);
                if (R)
                  return !0;
                var M = o.default(E.selection.getSelectionStartElem()), I = x.getRowNode(M.elems[0]);
                if (!I)
                  return !0;
                var N = Number(x.getCurrentRowIndex(D.elems[0], I)), B = x.getTableHtml(D.elems[0]), F = A.default.DeleteRow(o.default(B), N).elems[0].children[0].children.length, O = "";
                return E.selection.createRangeByElem(D), E.selection.restoreSelection(), F === 0 ? O = m.EMPTY_P : O = x.getTableHtml(A.default.DeleteRow(o.default(B), N).elems[0]), O = l(D, O), E.cmd.do("insertHTML", O), !0;
              }
            }, {
              $elem: o.default("<span>" + T("添加列") + "</span>"),
              onClick: function(E, D) {
                var R = i(E);
                if (R)
                  return !0;
                var M = o.default(E.selection.getSelectionStartElem()), I = x.getCurrentColIndex(M.elems[0]), N = x.getTableHtml(D.elems[0]), B = x.getTableHtml(A.default.ProcessingCol(o.default(N), I).elems[0]);
                return B = l(D, B), E.selection.createRangeByElem(D), E.selection.restoreSelection(), E.cmd.do("insertHTML", B), !0;
              }
            }, {
              $elem: o.default("<span>" + T("删除列") + "</span>"),
              onClick: function(E, D) {
                var R = i(E);
                if (R)
                  return !0;
                var M = o.default(E.selection.getSelectionStartElem()), I = x.getCurrentColIndex(M.elems[0]), N = x.getTableHtml(D.elems[0]), B = A.default.DeleteCol(o.default(N), I), F = B.elems[0].children[0].children[0].children.length, O = "";
                return E.selection.createRangeByElem(D), E.selection.restoreSelection(), F === 0 ? O = m.EMPTY_P : O = x.getTableHtml(B.elems[0]), O = l(D, O), E.cmd.do("insertHTML", O), !0;
              }
            }, {
              $elem: o.default("<span>" + T("设置表头") + "</span>"),
              onClick: function(E, D) {
                var R = i(E);
                if (R)
                  return !0;
                var M = o.default(E.selection.getSelectionStartElem()), I = x.getRowNode(M.elems[0]);
                if (!I)
                  return !0;
                var N = Number(x.getCurrentRowIndex(D.elems[0], I));
                N !== 0 && (N = 0);
                var B = x.getTableHtml(D.elems[0]), F = x.getTableHtml(A.default.setTheHeader(o.default(B), N, "th").elems[0]);
                return F = l(D, F), E.selection.createRangeByElem(D), E.selection.restoreSelection(), E.cmd.do("insertHTML", F), !0;
              }
            }, {
              $elem: o.default("<span>" + T("取消表头") + "</span>"),
              onClick: function(E, D) {
                var R = o.default(E.selection.getSelectionStartElem()), M = x.getRowNode(R.elems[0]);
                if (!M)
                  return !0;
                var I = Number(x.getCurrentRowIndex(D.elems[0], M));
                I !== 0 && (I = 0);
                var N = x.getTableHtml(D.elems[0]), B = x.getTableHtml(A.default.setTheHeader(o.default(N), I, "td").elems[0]);
                return B = l(D, B), E.selection.createRangeByElem(D), E.selection.restoreSelection(), E.cmd.do("insertHTML", B), !0;
              }
            }];
            c = new v.default(p, g, P), c.create();
          }
          function y() {
            c && (c.remove(), c = null);
          }
          return {
            showTableTooltip: h,
            hideTableTooltip: y
          };
        }
        function i(p) {
          var c = p.selection.getSelectionStartElem(), h = p.selection.getSelectionEndElem();
          return (c == null ? void 0 : c.elems[0]) !== (h == null ? void 0 : h.elems[0]);
        }
        function u(p) {
          var c = s(p), h = c.showTableTooltip, y = c.hideTableTooltip;
          p.txt.eventHooks.tableClickEvents.push(h), p.txt.eventHooks.clickEvents.push(y), p.txt.eventHooks.keyupEvents.push(y), p.txt.eventHooks.toolbarClickEvents.push(y), p.txt.eventHooks.menuClickEvents.push(y), p.txt.eventHooks.textScrollEvents.push(y);
        }
        n.default = u;
        function l(p, c) {
          var h = p.elems[0].nextSibling;
          return (!h || h.innerHTML === "<br>") && (c += "" + m.EMPTY_P), c;
        }
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(45)), o = e(t(91)), v = e(t(4)), A = e(t(138));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var d = t(2), m = d.__importDefault(t(3));
        function s(y, g) {
          for (var x = h(y), S = (0, r.default)(Array.prototype).apply(x.children), T = S[0].children.length, P = document.createElement("tr"), C = 0; C < T; C++) {
            var E = document.createElement("td");
            P.appendChild(E);
          }
          return (0, o.default)(S).call(S, g + 1, 0, P), c(x, S), m.default(x.parentNode);
        }
        function i(y, g) {
          for (var x = h(y), S = (0, r.default)(Array.prototype).apply(x.children), T = function(E) {
            var D, R = [];
            for ((0, v.default)(D = (0, A.default)(S[E].children)).call(D, function(N) {
              R.push(N);
            }); S[E].children.length !== 0; )
              S[E].removeChild(S[E].children[0]);
            var M = m.default(R[0]).getNodeName() !== "TH" ? document.createElement("td") : document.createElement("th");
            (0, o.default)(R).call(R, g + 1, 0, M);
            for (var I = 0; I < R.length; I++)
              S[E].appendChild(R[I]);
          }, P = 0; P < S.length; P++)
            T(P);
          return c(x, S), m.default(x.parentNode);
        }
        function u(y, g) {
          var x = h(y), S = (0, r.default)(Array.prototype).apply(x.children);
          return (0, o.default)(S).call(S, g, 1), c(x, S), m.default(x.parentNode);
        }
        function l(y, g) {
          for (var x = h(y), S = (0, r.default)(Array.prototype).apply(x.children), T = function(E) {
            var D, R = [];
            for ((0, v.default)(D = (0, A.default)(S[E].children)).call(D, function(I) {
              R.push(I);
            }); S[E].children.length !== 0; )
              S[E].removeChild(S[E].children[0]);
            (0, o.default)(R).call(R, g, 1);
            for (var M = 0; M < R.length; M++)
              S[E].appendChild(R[M]);
          }, P = 0; P < S.length; P++)
            T(P);
          return c(x, S), m.default(x.parentNode);
        }
        function p(y, g, x) {
          for (var S = h(y), T = (0, r.default)(Array.prototype).apply(S.children), P = T[g].children, C = document.createElement("tr"), E = function(M) {
            var I, N = document.createElement(x), B = P[M];
            (0, v.default)(I = (0, A.default)(B.childNodes)).call(I, function(F) {
              N.appendChild(F);
            }), C.appendChild(N);
          }, D = 0; D < P.length; D++)
            E(D);
          return (0, o.default)(T).call(T, g, 1, C), c(S, T), m.default(S.parentNode);
        }
        function c(y, g) {
          for (; y.children.length !== 0; )
            y.removeChild(y.children[0]);
          for (var x = 0; x < g.length; x++)
            y.appendChild(g[x]);
        }
        function h(y) {
          var g = y.elems[0].children[0];
          return g.nodeName === "COLGROUP" && (g = y.elems[0].children[y.elems[0].children.length - 1]), g;
        }
        n.default = {
          ProcessingRow: s,
          ProcessingCol: i,
          DeleteRow: u,
          DeleteCol: l,
          setTheHeader: p
        };
      },
      function(f, n, t) {
        var e = t(396);
        f.exports = e;
      },
      function(f, n, t) {
        t(50), t(397);
        var e = t(9);
        f.exports = e.Array.from;
      },
      function(f, n, t) {
        var e = t(5), a = t(398), r = t(115), o = !r(function(v) {
          Array.from(v);
        });
        e({ target: "Array", stat: !0, forced: o }, {
          from: a
        });
      },
      function(f, n, t) {
        var e = t(40), a = t(31), r = t(114), o = t(112), v = t(35), A = t(69), d = t(113);
        f.exports = function(s) {
          var i = a(s), u = typeof this == "function" ? this : Array, l = arguments.length, p = l > 1 ? arguments[1] : void 0, c = p !== void 0, h = d(i), y = 0, g, x, S, T, P, C;
          if (c && (p = e(p, l > 2 ? arguments[2] : void 0, 2)), h != null && !(u == Array && o(h)))
            for (T = h.call(i), P = T.next, x = new u(); !(S = P.call(T)).done; y++)
              C = c ? r(T, p, [S.value, y], !0) : S.value, A(x, y, C);
          else
            for (g = v(i.length), x = new u(g); g > y; y++)
              C = c ? p(i[y], y) : i[y], A(x, y, C);
          return x.length = y, x;
        };
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4)), o = e(t(138));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var v = t(2), A = v.__importDefault(t(3)), d = function() {
          function m(s) {
            this.editor = s;
          }
          return m.prototype.getRowNode = function(s) {
            var i, u = A.default(s).elems[0];
            return u.parentNode && (u = (i = A.default(u).parentUntil("TR", u)) === null || i === void 0 ? void 0 : i.elems[0]), u;
          }, m.prototype.getCurrentRowIndex = function(s, i) {
            var u, l = 0, p = s.children[0];
            return p.nodeName === "COLGROUP" && (p = s.children[s.children.length - 1]), (0, r.default)(u = (0, o.default)(p.children)).call(u, function(c, h) {
              c === i && (l = h);
            }), l;
          }, m.prototype.getCurrentColIndex = function(s) {
            var i, u, l = 0, p = A.default(s).getNodeName() === "TD" || A.default(s).getNodeName() === "TH" ? s : (u = A.default(s).parentUntil("TD", s)) === null || u === void 0 ? void 0 : u.elems[0], c = A.default(p).parent();
            return (0, r.default)(i = (0, o.default)(c.elems[0].children)).call(i, function(h, y) {
              h === p && (l = y);
            }), l;
          }, m.prototype.getTableHtml = function(s) {
            var i = '<table border="0" width="100%" cellpadding="0" cellspacing="0">' + A.default(s).html() + "</table>";
            return i;
          }, m;
        }();
        n.default = d;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.bindEventKeyboardEvent = n.bindClickEvent = void 0;
        var r = t(2), o = r.__importDefault(t(3));
        function v(m) {
          if (!m.length)
            return !1;
          var s = m.elems[0];
          return s.nodeName === "P" && s.innerHTML === "<br>";
        }
        function A(m) {
          function s(i, u) {
            if (u.detail >= 3) {
              var l = window.getSelection();
              if (l) {
                var p = l.focusNode, c = l.anchorNode, h = o.default(c == null ? void 0 : c.parentElement);
                if (!i.isContain(o.default(p))) {
                  var y = h.elems[0].tagName === "TD" ? h : h.parentUntilEditor("td", m);
                  if (y) {
                    var g = m.selection.getRange();
                    g == null || g.setEnd(y.elems[0], y.elems[0].childNodes.length), m.selection.restoreSelection();
                  }
                }
              }
            }
          }
          m.txt.eventHooks.tableClickEvents.push(s);
        }
        n.bindClickEvent = A;
        function d(m) {
          var s = m.txt, i = m.selection, u = s.eventHooks.keydownEvents;
          u.push(function(l) {
            m.selection.saveRange();
            var p = i.getSelectionContainerElem();
            if (p) {
              var c = p.getNodeTop(m), h = c.length && c.prev().length ? c.prev() : null;
              if (h && h.getNodeName() === "TABLE" && i.isSelectionEmpty() && i.getCursorPos() === 0 && l.keyCode === 8) {
                var y = c.next(), g = !!y.length;
                g && v(c) && (c.remove(), m.selection.setRangeToElem(y.elems[0])), l.preventDefault();
              }
            }
          });
        }
        n.bindEventKeyboardEvent = d;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(26));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.formatCodeHtml = void 0;
        var o = t(2), v = o.__importDefault(t(38)), A = o.__importDefault(t(3)), d = t(6), m = o.__importDefault(t(402)), s = o.__importDefault(t(139)), i = o.__importDefault(t(33)), u = o.__importDefault(t(403));
        function l(c, h) {
          if (!h)
            return h;
          return h = g(h), h = y(h), h = d.replaceSpecialSymbol(h), h;
          function y(x) {
            var S = x.match(/<pre[\s|\S]+?\/pre>/g);
            return S === null || (0, r.default)(S).call(S, function(T) {
              x = x.replace(T, T.replace(/<\/code><code>/g, `
`).replace(/<br>/g, ""));
            }), x;
          }
          function g(x) {
            var S, T = x.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm);
            if (!T || !T.length)
              return x;
            for (var P = (0, r.default)(S = d.deepClone(T)).call(S, function(E) {
              return E = E.replace(/<span\sclass="hljs[^>]+>/, ""), E.replace(/<\/span>/, "");
            }), C = 0; C < T.length; C++)
              x = x.replace(T[C], P[C]);
            return g(x);
          }
        }
        n.formatCodeHtml = l;
        var p = function(c) {
          o.__extends(h, c);
          function h(y) {
            var g = this, x = A.default('<div class="w-e-menu" data-title="代码"><i class="w-e-icon-terminal"></i></div>');
            return g = c.call(this, x, y) || this, u.default(y), g;
          }
          return h.prototype.insertLineCode = function(y) {
            var g = this.editor, x = A.default("<code>" + y + "</code>");
            g.cmd.do("insertElem", x), g.selection.createRangeByElem(x, !1), g.selection.restoreSelection();
          }, h.prototype.clickHandler = function() {
            var y = this.editor, g = y.selection.getSelectionText();
            this.isActive || (y.selection.isSelectionEmpty() ? this.createPanel("", "") : this.insertLineCode(g));
          }, h.prototype.createPanel = function(y, g) {
            var x = m.default(this.editor, y, g), S = new i.default(this, x);
            S.create();
          }, h.prototype.tryChangeActive = function() {
            var y = this.editor;
            s.default(y) ? this.active() : this.unActive();
          }, h;
        }(v.default);
        n.default = p;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(26));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = t(6), A = o.__importDefault(t(3)), d = o.__importDefault(t(139)), m = t(7);
        function s(i, u, l) {
          var p, c = v.getRandom("input-iframe"), h = v.getRandom("select"), y = v.getRandom("btn-ok");
          function g(P, C) {
            var E, D = d.default(i);
            D && x();
            var R = (E = i.selection.getSelectionStartElem()) === null || E === void 0 ? void 0 : E.elems[0].innerHTML;
            R && i.cmd.do("insertHTML", m.EMPTY_P);
            var M = C.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            i.highlight && (M = i.highlight.highlightAuto(M).value), i.cmd.do("insertHTML", '<pre><code class="' + P + '">' + M + "</code></pre>");
            var I = i.selection.getSelectionStartElem(), N = I == null ? void 0 : I.getNodeTop(i);
            (N == null ? void 0 : N.getNextSibling().elems.length) === 0 && A.default(m.EMPTY_P).insertAfter(N);
          }
          function x() {
            if (d.default(i)) {
              var P = i.selection.getSelectionStartElem(), C = P == null ? void 0 : P.getNodeTop(i);
              C && (i.selection.createRangeByElem(C), i.selection.restoreSelection());
            }
          }
          var S = function(C) {
            return i.i18next.t(C);
          }, T = {
            width: 500,
            height: 0,
            tabs: [{
              title: S("menus.panelMenus.code.插入代码"),
              tpl: `<div>
                        <select name="" id="` + h + `">
                            ` + (0, r.default)(p = i.config.languageType).call(p, function(P) {
                return "<option " + (l == P ? "selected" : "") + ' value ="' + P + '">' + P + "</option>";
              }) + `
                        </select>
                        <textarea id="` + c + '" type="text" class="wang-code-textarea" placeholder="" style="height: 160px">' + u.replace(/&quot;/g, '"') + `</textarea>
                        <div class="w-e-button-container">
                            <button type="button" id="` + y + '" class="right">' + (d.default(i) ? S("修改") : S("插入")) + `</button>
                        </div>
                    </div>`,
              events: [
                {
                  selector: "#" + y,
                  type: "click",
                  fn: function() {
                    var C = document.getElementById(c), E = A.default("#" + h), D = E.val(), R = C.value;
                    if (R)
                      return d.default(i) ? !1 : (g(D, R), !0);
                  }
                }
              ]
            }]
          };
          return T;
        }
        n.default = s;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(404)), v = r.__importDefault(t(405));
        function A(d) {
          o.default(d), v.default(d);
        }
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.createShowHideFn = void 0;
        var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(39));
        function A(m) {
          var s;
          function i(l) {
            var p = "menus.panelMenus.code.", c = function(g, x) {
              return x === void 0 && (x = p), m.i18next.t(x + g);
            }, h = [{
              $elem: o.default("<span>" + c("删除代码") + "</span>"),
              onClick: function(g, x) {
                return x.remove(), !0;
              }
            }];
            s = new v.default(m, l, h), s.create();
          }
          function u() {
            s && (s.remove(), s = null);
          }
          return {
            showCodeTooltip: i,
            hideCodeTooltip: u
          };
        }
        n.createShowHideFn = A;
        function d(m) {
          var s = A(m), i = s.showCodeTooltip, u = s.hideCodeTooltip;
          m.txt.eventHooks.codeClickEvents.push(i), m.txt.eventHooks.clickEvents.push(u), m.txt.eventHooks.toolbarClickEvents.push(u), m.txt.eventHooks.menuClickEvents.push(u), m.txt.eventHooks.textScrollEvents.push(u);
        }
        n.default = d;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = t(7), v = r.__importDefault(t(3));
        function A(d) {
          var m = d.$textElem, s = d.selection, i = d.txt, u = i.eventHooks.keydownEvents;
          u.push(function(l) {
            var p;
            if (l.keyCode === 40) {
              var c = s.getSelectionContainerElem(), h = (p = m.children()) === null || p === void 0 ? void 0 : p.last();
              if ((c == null ? void 0 : c.elems[0].tagName) === "XMP" && (h == null ? void 0 : h.elems[0].tagName) === "PRE") {
                var y = v.default(o.EMPTY_P);
                m.append(y);
              }
            }
          }), u.push(function(l) {
            d.selection.saveRange();
            var p = s.getSelectionContainerElem();
            if (p) {
              var c = p.getNodeTop(d), h = c == null ? void 0 : c.prev(), y = c == null ? void 0 : c.getNextSibling();
              if (h.length && (h == null ? void 0 : h.getNodeName()) === "PRE" && y.length === 0 && s.getCursorPos() === 0 && l.keyCode === 8) {
                var g = v.default(o.EMPTY_P);
                m.append(g);
              }
            }
          });
        }
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(23)), v = r.__importDefault(t(3)), A = r.__importDefault(t(407)), d = t(6), m = t(7), s = function(i) {
          r.__extends(u, i);
          function u(l) {
            var p = this, c = v.default('<div class="w-e-menu" data-title="分割线"><i class="w-e-icon-split-line"></i></div>');
            return p = i.call(this, c, l) || this, A.default(l), p;
          }
          return u.prototype.clickHandler = function() {
            var l = this.editor, p = l.selection.getRange(), c = l.selection.getSelectionContainerElem();
            if (c != null && c.length) {
              var h = v.default(c.elems[0]), y = h.parentUntil("TABLE", c.elems[0]), g = h.children();
              h.getNodeName() !== "CODE" && (y && v.default(y.elems[0]).getNodeName() === "TABLE" || g && g.length !== 0 && v.default(g.elems[0]).getNodeName() === "IMG" && !(p != null && p.collapsed) || this.createSplitLine());
            }
          }, u.prototype.createSplitLine = function() {
            var l = "<hr/>" + m.EMPTY_P;
            d.UA.isFirefox && (l = "<hr/><p></p>"), this.editor.cmd.do("insertHTML", l);
          }, u.prototype.tryChangeActive = function() {
          }, u;
        }(o.default);
        n.default = s;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(408));
        function v(A) {
          o.default(A);
        }
        n.default = v;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(3)), v = r.__importDefault(t(39));
        function A(m) {
          var s;
          function i(l) {
            var p = [{
              $elem: o.default("<span>" + m.i18next.t("menus.panelMenus.删除") + "</span>"),
              onClick: function(h, y) {
                return h.selection.createRangeByElem(y), h.selection.restoreSelection(), h.cmd.do("delete"), !0;
              }
            }];
            s = new v.default(m, l, p), s.create();
          }
          function u() {
            s && (s.remove(), s = null);
          }
          return {
            showSplitLineTooltip: i,
            hideSplitLineTooltip: u
          };
        }
        function d(m) {
          var s = A(m), i = s.showSplitLineTooltip, u = s.hideSplitLineTooltip;
          m.txt.eventHooks.splitLineEvents.push(i), m.txt.eventHooks.clickEvents.push(u), m.txt.eventHooks.keyupEvents.push(u), m.txt.eventHooks.toolbarClickEvents.push(u), m.txt.eventHooks.menuClickEvents.push(u), m.txt.eventHooks.textScrollEvents.push(u);
        }
        n.default = d;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(3)), A = o.__importDefault(t(23)), d = t(98), m = o.__importDefault(t(415)), s = o.__importDefault(t(140)), i = function(u) {
          o.__extends(l, u);
          function l(p) {
            var c = this, h = v.default(`<div class="w-e-menu" data-title="待办事项">
                    <i class="w-e-icon-checkbox-checked"></i>
                </div>`);
            return c = u.call(this, h, p) || this, m.default(p), c;
          }
          return l.prototype.clickHandler = function() {
            var p = this.editor;
            d.isAllTodo(p) ? (this.cancelTodo(), this.tryChangeActive()) : this.setTodo();
          }, l.prototype.tryChangeActive = function() {
            d.isAllTodo(this.editor) ? this.active() : this.unActive();
          }, l.prototype.setTodo = function() {
            var p = this.editor, c = p.selection.getSelectionRangeTopNodes();
            (0, r.default)(c).call(c, function(h) {
              var y, g = h == null ? void 0 : h.getNodeName();
              if (g === "P") {
                var x = s.default(h), S = x.getTodo(), T = (y = S.children()) === null || y === void 0 ? void 0 : y.getNode();
                S.insertAfter(h), p.selection.moveCursor(T), h.remove();
              }
            }), this.tryChangeActive();
          }, l.prototype.cancelTodo = function() {
            var p = this.editor, c = p.selection.getSelectionRangeTopNodes();
            (0, r.default)(c).call(c, function(h) {
              var y, g, x, S = (g = (y = h.childNodes()) === null || y === void 0 ? void 0 : y.childNodes()) === null || g === void 0 ? void 0 : g.clone(!0), T = v.default("<p></p>");
              T.append(S), T.insertAfter(h), (x = T.childNodes()) === null || x === void 0 || x.get(0).remove(), p.selection.moveCursor(T.getNode()), h.remove();
            });
          }, l;
        }(A.default);
        n.default = i;
      },
      function(f, n, t) {
        f.exports = t(411);
      },
      function(f, n, t) {
        var e = t(412);
        f.exports = e;
      },
      function(f, n, t) {
        var e = t(413), a = Array.prototype;
        f.exports = function(r) {
          var o = r.every;
          return r === a || r instanceof Array && o === a.every ? e : o;
        };
      },
      function(f, n, t) {
        t(414);
        var e = t(15);
        f.exports = e("Array").every;
      },
      function(f, n, t) {
        var e = t(5), a = t(32).every, r = t(67), o = t(22), v = r("every"), A = o("every");
        e({ target: "Array", proto: !0, forced: !v || !A }, {
          every: function(m) {
            return a(this, m, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(3)), A = t(98), d = o.__importDefault(t(140)), m = t(98), s = t(7);
        function i(u) {
          function l(y) {
            var g, x;
            if (A.isAllTodo(u)) {
              y.preventDefault();
              var S = u.selection, T = S.getSelectionRangeTopNodes()[0], P = (g = T.childNodes()) === null || g === void 0 ? void 0 : g.get(0), C = (x = window.getSelection()) === null || x === void 0 ? void 0 : x.anchorNode, E = S.getRange();
              if (!(E != null && E.collapsed)) {
                var D = E == null ? void 0 : E.commonAncestorContainer.childNodes, R = E == null ? void 0 : E.startContainer, M = E == null ? void 0 : E.endContainer, I = E == null ? void 0 : E.startOffset, N = E == null ? void 0 : E.endOffset, B = 0, F = 0, O = [];
                D == null || (0, r.default)(D).call(D, function(G, X) {
                  G.contains(R) && (B = X), G.contains(M) && (F = X);
                }), F - B > 1 && (D == null || (0, r.default)(D).call(D, function(G, X) {
                  X <= B || X >= F || O.push(G);
                }), (0, r.default)(O).call(O, function(G) {
                  G.remove();
                })), m.dealTextNode(R, I), m.dealTextNode(M, N, !1), u.selection.moveCursor(M, 0);
              }
              if (T.text() === "") {
                var H = v.default(s.EMPTY_P);
                H.insertAfter(T), S.moveCursor(H.getNode()), T.remove();
                return;
              }
              var L = S.getCursorPos(), U = A.getCursorNextNode(P == null ? void 0 : P.getNode(), C, L), z = d.default(v.default(U)), j = z.getInputContainer(), K = j.parent().getNode(), V = z.getTodo(), Q = j.getNode().nextSibling;
              if ((P == null ? void 0 : P.text()) === "" && (P == null || P.append(v.default("<br>"))), V.insertAfter(T), !Q || (Q == null ? void 0 : Q.textContent) === "") {
                if ((Q == null ? void 0 : Q.nodeName) !== "BR") {
                  var w = v.default("<br>");
                  w.insertAfter(j);
                }
                S.moveCursor(K, 1);
              } else
                S.moveCursor(K);
            }
          }
          function p(y) {
            var g, x;
            if (A.isAllTodo(u)) {
              var S = u.selection, T = S.getSelectionRangeTopNodes()[0], P = (g = T.childNodes()) === null || g === void 0 ? void 0 : g.getNode(), C = v.default("<p></p>"), E = C.getNode(), D = (x = window.getSelection()) === null || x === void 0 ? void 0 : x.anchorNode, R = S.getCursorPos(), M = D.previousSibling;
              if (T.text() === "") {
                y.preventDefault();
                var I = v.default(s.EMPTY_P);
                I.insertAfter(T), T.remove(), S.moveCursor(I.getNode(), 0);
                return;
              }
              if ((M == null ? void 0 : M.nodeName) === "SPAN" && M.childNodes[0].nodeName === "INPUT" && R === 0) {
                var N;
                y.preventDefault(), P == null || (0, r.default)(N = P.childNodes).call(N, function(B, F) {
                  F !== 0 && E.appendChild(B.cloneNode(!0));
                }), C.insertAfter(T), T.remove();
              }
            }
          }
          function c() {
            var y = u.selection, g = y.getSelectionRangeTopNodes()[0];
            g && m.isTodo(g) && g.text() === "" && (v.default(s.EMPTY_P).insertAfter(g), g.remove());
          }
          function h(y) {
            y && y.target instanceof HTMLInputElement && y.target.type === "checkbox" && (y.target.checked ? y.target.setAttribute("checked", "true") : y.target.removeAttribute("checked"));
          }
          u.txt.eventHooks.enterDownEvents.push(l), u.txt.eventHooks.deleteUpEvents.push(c), u.txt.eventHooks.deleteDownEvents.push(p), u.txt.eventHooks.clickEvents.push(h);
        }
        n.default = i;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.selectorValidator = void 0;
        var r = t(2), o = r.__importDefault(t(3)), v = t(6), A = t(7), d = r.__importDefault(t(130)), m = {
          border: "1px solid #c9d8db",
          toolbarBgColor: "#FFF",
          toolbarBottomBorder: "1px solid #EEE"
        };
        function s(u) {
          var l = u.toolbarSelector, p = o.default(l), c = u.textSelector, h = u.config, y = h.height, g = u.i18next, x = o.default("<div></div>"), S = o.default("<div></div>"), T, P, C = null;
          c == null ? (P = p.children(), p.append(x).append(S), x.css("background-color", m.toolbarBgColor).css("border", m.border).css("border-bottom", m.toolbarBottomBorder), S.css("border", m.border).css("border-top", "none").css("height", y + "px")) : (p.append(x), C = o.default(c).children(), o.default(c).append(S), P = S.children()), T = o.default("<div></div>"), T.attr("contenteditable", "true").css("width", "100%").css("height", "100%");
          var E, D = u.config.placeholder;
          D !== d.default.placeholder ? E = o.default("<div>" + D + "</div>") : E = o.default("<div>" + g.t(D) + "</div>"), E.addClass("placeholder"), P && P.length ? (T.append(P), E.hide()) : T.append(o.default(A.EMPTY_P)), C && C.length && (T.append(C), E.hide()), S.append(T), S.append(E), x.addClass("w-e-toolbar").css("z-index", u.zIndex.get("toolbar")), S.addClass("w-e-text-container"), S.css("z-index", u.zIndex.get()), T.addClass("w-e-text");
          var R = v.getRandom("toolbar-elem");
          x.attr("id", R);
          var M = v.getRandom("text-elem");
          T.attr("id", M);
          var I = S.getBoundingClientRect().height, N = T.getBoundingClientRect().height;
          I !== N && T.css("min-height", I + "px"), u.$toolbarElem = x, u.$textContainerElem = S, u.$textElem = T, u.toolbarElemId = R, u.textElemId = M;
        }
        n.default = s;
        function i(u) {
          var l = "data-we-id", p = /^wangEditor-\d+$/, c = u.textSelector, h = u.toolbarSelector, y = {
            bar: o.default("<div></div>"),
            text: o.default("<div></div>")
          };
          if (h == null)
            throw new Error("错误：初始化编辑器时候未传入任何参数，请查阅文档");
          if (y.bar = o.default(h), !y.bar.elems.length)
            throw new Error("无效的节点选择器：" + h);
          if (p.test(y.bar.attr(l)))
            throw new Error("初始化节点已存在编辑器实例，无法重复创建编辑器");
          if (c) {
            if (y.text = o.default(c), !y.text.elems.length)
              throw new Error("无效的节点选择器：" + c);
            if (p.test(y.text.attr(l)))
              throw new Error("初始化节点已存在编辑器实例，无法重复创建编辑器");
          }
          y.bar.attr(l, u.id), y.text.attr(l, u.id), u.beforeDestroy(function() {
            y.bar.removeAttr(l), y.text.removeAttr(l);
          });
        }
        n.selectorValidator = i;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(3)), v = t(7);
        function A(d, m) {
          var s = d.$textElem, i = s.children();
          if (!i || !i.length) {
            s.append(o.default(v.EMPTY_P)), A(d);
            return;
          }
          var u = i.last();
          if (m) {
            var l = u.html().toLowerCase(), p = u.getNodeName();
            if (l !== "<br>" && l !== "<br/>" || p !== "P") {
              s.append(o.default(v.EMPTY_P)), A(d);
              return;
            }
          }
          d.selection.createRangeByElem(u, !1, !0), d.config.focus ? d.selection.restoreSelection() : d.selection.clearWindowSelectionRange();
        }
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(3));
        function A(l) {
          d(l), m(l), s(l);
        }
        function d(l) {
          l.txt.eventHooks.changeEvents.push(function() {
            var p = l.config.onchange;
            if (p) {
              var c = l.txt.html() || "";
              l.isFocus = !0, p(c);
            }
            l.txt.togglePlaceholder();
          });
        }
        function m(l) {
          l.isFocus = !1;
          function p(c) {
            var h = c.target, y = v.default(h), g = l.$textElem, x = l.$toolbarElem, S = g.isContain(y), T = x.isContain(y), P = x.elems[0] == c.target;
            if (S)
              l.isFocus || u(l), l.isFocus = !0;
            else {
              if (T && !P || !l.isFocus)
                return;
              i(l), l.isFocus = !1;
            }
          }
          document.activeElement === l.$textElem.elems[0] && l.config.focus && (u(l), l.isFocus = !0), v.default(document).on("click", p), l.beforeDestroy(function() {
            v.default(document).off("click", p);
          });
        }
        function s(l) {
          l.$textElem.on("compositionstart", function() {
            l.isComposing = !0, l.txt.togglePlaceholder();
          }).on("compositionend", function() {
            l.isComposing = !1, l.txt.togglePlaceholder();
          });
        }
        function i(l) {
          var p, c = l.config, h = c.onblur, y = l.txt.html() || "";
          (0, r.default)(p = l.txt.eventHooks.onBlurEvents).call(p, function(g) {
            return g();
          }), h(y);
        }
        function u(l) {
          var p = l.config, c = p.onfocus, h = l.txt.html() || "";
          c(h);
        }
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        function r(o) {
          var v = o.config, A = v.lang, d = v.languages;
          if (o.i18next != null) {
            try {
              o.i18next.init({
                ns: "wangEditor",
                lng: A,
                defaultNS: "wangEditor",
                resources: d
              });
            } catch (m) {
              throw new Error("i18next:" + m);
            }
            return;
          }
          o.i18next = {
            t: function(s) {
              var i = s.split(".");
              return i[i.length - 1];
            }
          };
        }
        n.default = r;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(29));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.setUnFullScreen = n.setFullScreen = void 0;
        var o = t(2), v = o.__importDefault(t(3));
        t(421);
        var A = "w-e-icon-fullscreen", d = "w-e-icon-fullscreen_exit", m = "w-e-full-screen-editor";
        n.setFullScreen = function(i) {
          var u = v.default(i.toolbarSelector), l = i.$textContainerElem, p = i.$toolbarElem, c = (0, r.default)(p).call(p, "i." + A), h = i.config;
          c.removeClass(A), c.addClass(d), u.addClass(m), u.css("z-index", h.zIndexFullScreen);
          var y = p.getBoundingClientRect();
          l.css("height", "calc(100% - " + y.height + "px)");
        }, n.setUnFullScreen = function(i) {
          var u = v.default(i.toolbarSelector), l = i.$textContainerElem, p = i.$toolbarElem, c = (0, r.default)(p).call(p, "i." + d), h = i.config;
          c.removeClass(d), c.addClass(A), u.removeClass(m), u.css("z-index", "auto"), l.css("height", h.height + "px");
        };
        var s = function(u) {
          if (!u.textSelector && u.config.showFullScreen) {
            var l = u.$toolbarElem, p = v.default(`<div class="w-e-menu" data-title="全屏">
            <i class="` + A + `"></i>
        </div>`);
            p.on("click", function(c) {
              var h, y = (0, r.default)(h = v.default(c.currentTarget)).call(h, "i");
              y.hasClass(A) ? (p.attr("data-title", "取消全屏"), n.setFullScreen(u)) : (p.attr("data-title", "全屏"), n.setUnFullScreen(u));
            }), l.append(p);
          }
        };
        n.default = s;
      },
      function(f, n, t) {
        var e = t(20), a = t(422);
        a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[f.i, a, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(a, r), f.exports = a.locals || {};
      },
      function(f, n, t) {
        var e = t(21);
        n = e(!1), n.push([f.i, `.w-e-full-screen-editor {
  position: fixed;
  width: 100%!important;
  height: 100%!important;
  left: 0;
  top: 0;
}
`, ""]), f.exports = n;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(29));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = function(A, d) {
          var m, s = A.isEnable ? A.$textElem : (0, r.default)(m = A.$textContainerElem).call(m, ".w-e-content-mantle"), i = (0, r.default)(s).call(s, "[id='" + d + "']"), u = i.getOffsetData().top;
          s.scrollTop(u);
        };
        n.default = o;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(129)), v = {
          menu: 2,
          panel: 2,
          toolbar: 1,
          tooltip: 1,
          textContainer: 1
        }, A = function() {
          function d() {
            this.tier = v, this.baseZIndex = o.default.zIndex;
          }
          return d.prototype.get = function(m) {
            return m && this.tier[m] ? this.baseZIndex + this.tier[m] : this.baseZIndex;
          }, d.prototype.init = function(m) {
            this.baseZIndex == o.default.zIndex && (this.baseZIndex = m.config.zIndex);
          }, d;
        }();
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(70)), o = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var v = t(2), A = v.__importDefault(t(426)), d = t(6), m = t(7);
        function s(u, l) {
          return (0, r.default)(u).call(u, function(p) {
            var c = p.type, h = p.target, y = p.attributeName;
            return c != "attributes" || c == "attributes" && (y == "contenteditable" || h != l);
          });
        }
        var i = function(u) {
          v.__extends(l, u);
          function l(p) {
            var c = u.call(this, function(h, y) {
              var g;
              if (h = s(h, y.target), (g = c.data).push.apply(g, h), p.isCompatibleMode)
                c.asyncSave();
              else if (!p.isComposing)
                return c.asyncSave();
            }) || this;
            return c.editor = p, c.data = [], c.asyncSave = m.EMPTY_FN, c;
          }
          return l.prototype.save = function() {
            this.data.length && (this.editor.history.save(this.data), this.data.length = 0, this.emit());
          }, l.prototype.emit = function() {
            var p;
            (0, o.default)(p = this.editor.txt.eventHooks.changeEvents).call(p, function(c) {
              return c();
            });
          }, l.prototype.observe = function() {
            var p = this;
            u.prototype.observe.call(this, this.editor.$textElem.elems[0]);
            var c = this.editor.config.onchangeTimeout;
            this.asyncSave = d.debounce(function() {
              p.save();
            }, c), this.editor.isCompatibleMode || this.editor.$textElem.on("compositionend", function() {
              p.asyncSave();
            });
          }, l;
        }(A.default);
        n.default = i;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = function() {
          function o(v, A) {
            var d = this;
            this.options = {
              subtree: !0,
              childList: !0,
              attributes: !0,
              attributeOldValue: !0,
              characterData: !0,
              characterDataOldValue: !0
            }, this.callback = function(m) {
              v(m, d);
            }, this.observer = new MutationObserver(this.callback), A && (this.options = A);
          }
          return (0, a.default)(o.prototype, "target", {
            get: function() {
              return this.node;
            },
            enumerable: !1,
            configurable: !0
          }), o.prototype.observe = function(v) {
            this.node instanceof Node || (this.node = v, this.connect());
          }, o.prototype.connect = function() {
            if (this.node)
              return this.observer.observe(this.node, this.options), this;
            throw new Error("还未初始化绑定，请您先绑定有效的 Node 节点");
          }, o.prototype.disconnect = function() {
            var v = this.observer.takeRecords();
            v.length && this.callback(v), this.observer.disconnect();
          }, o;
        }();
        n.default = r;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(428)), v = r.__importDefault(t(435)), A = r.__importDefault(t(436)), d = function() {
          function m(s) {
            this.editor = s, this.content = new o.default(s), this.scroll = new v.default(s), this.range = new A.default(s);
          }
          return (0, a.default)(m.prototype, "size", {
            get: function() {
              return this.scroll.size;
            },
            enumerable: !1,
            configurable: !0
          }), m.prototype.observe = function() {
            this.content.observe(), this.scroll.observe(), !this.editor.isCompatibleMode && this.range.observe();
          }, m.prototype.save = function(s) {
            s.length && (this.content.save(s), this.scroll.save(), !this.editor.isCompatibleMode && this.range.save());
          }, m.prototype.revoke = function() {
            this.editor.change.disconnect();
            var s = this.content.revoke();
            s && (this.scroll.revoke(), this.editor.isCompatibleMode || (this.range.revoke(), this.editor.$textElem.focus())), this.editor.change.connect(), s && this.editor.change.emit();
          }, m.prototype.restore = function() {
            this.editor.change.disconnect();
            var s = this.content.restore();
            s && (this.scroll.restore(), this.editor.isCompatibleMode || (this.range.restore(), this.editor.$textElem.focus())), this.editor.change.connect(), s && this.editor.change.emit();
          }, m;
        }();
        n.default = d;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(429)), v = r.__importDefault(t(433)), A = function() {
          function d(m) {
            this.editor = m;
          }
          return d.prototype.observe = function() {
            this.editor.isCompatibleMode ? this.cache = new v.default(this.editor) : this.cache = new o.default(this.editor), this.cache.observe();
          }, d.prototype.save = function(m) {
            this.editor.isCompatibleMode ? this.cache.save() : this.cache.compile(m);
          }, d.prototype.revoke = function() {
            var m;
            return (m = this.cache) === null || m === void 0 ? void 0 : m.revoke();
          }, d.prototype.restore = function() {
            var m;
            return (m = this.cache) === null || m === void 0 ? void 0 : m.restore();
          }, d;
        }();
        n.default = A;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(99)), v = r.__importDefault(t(431)), A = t(432), d = function(m) {
          r.__extends(s, m);
          function s(i) {
            var u = m.call(this, i.config.historyMaxSize) || this;
            return u.editor = i, u;
          }
          return s.prototype.observe = function() {
            this.resetMaxSize(this.editor.config.historyMaxSize);
          }, s.prototype.compile = function(i) {
            return this.save(v.default(i)), this;
          }, s.prototype.revoke = function() {
            return m.prototype.revoke.call(this, function(i) {
              A.revoke(i);
            });
          }, s.prototype.restore = function() {
            return m.prototype.restore.call(this, function(i) {
              A.restore(i);
            });
          }, s;
        }(o.default);
        n.default = d;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.CeilStack = void 0;
        var r = function() {
          function o(v) {
            v === void 0 && (v = 0), this.data = [], this.max = 0, this.reset = !1, v = Math.abs(v), v && (this.max = v);
          }
          return o.prototype.resetMax = function(v) {
            v = Math.abs(v), !this.reset && !isNaN(v) && (this.max = v, this.reset = !0);
          }, (0, a.default)(o.prototype, "size", {
            get: function() {
              return this.data.length;
            },
            enumerable: !1,
            configurable: !0
          }), o.prototype.instack = function(v) {
            return this.data.unshift(v), this.max && this.size > this.max && (this.data.length = this.max), this;
          }, o.prototype.outstack = function() {
            return this.data.shift();
          }, o.prototype.clear = function() {
            return this.data.length = 0, this;
          }, o;
        }();
        n.CeilStack = r;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4)), o = e(t(27));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.compliePosition = n.complieNodes = n.compileValue = n.compileType = void 0;
        var v = t(6);
        function A(p) {
          switch (p) {
            case "childList":
              return "node";
            case "attributes":
              return "attr";
            default:
              return "text";
          }
        }
        n.compileType = A;
        function d(p) {
          switch (p.type) {
            case "attributes":
              return p.target.getAttribute(p.attributeName) || "";
            case "characterData":
              return p.target.textContent;
            default:
              return "";
          }
        }
        n.compileValue = d;
        function m(p) {
          var c = {};
          return p.addedNodes.length && (c.add = v.toArray(p.addedNodes)), p.removedNodes.length && (c.remove = v.toArray(p.removedNodes)), c;
        }
        n.complieNodes = m;
        function s(p) {
          var c;
          return p.previousSibling ? c = {
            type: "before",
            target: p.previousSibling
          } : p.nextSibling ? c = {
            type: "after",
            target: p.nextSibling
          } : c = {
            type: "parent",
            target: p.target
          }, c;
        }
        n.compliePosition = s;
        var i = ["UL", "OL", "H1", "H2", "H3", "H4", "H5", "H6"];
        function u(p) {
          var c = [], h = !1, y = [];
          return (0, r.default)(p).call(p, function(g, x) {
            var S = {
              type: A(g.type),
              target: g.target,
              attr: g.attributeName || "",
              value: d(g) || "",
              oldValue: g.oldValue || "",
              nodes: m(g),
              position: s(g)
            };
            if (c.push(S), !!v.UA.isFirefox) {
              if (h && g.addedNodes.length && g.addedNodes[0].nodeType == 1) {
                var T = g.addedNodes[0], P = {
                  type: "node",
                  target: T,
                  attr: "",
                  value: "",
                  oldValue: "",
                  nodes: {
                    add: [h]
                  },
                  position: {
                    type: "parent",
                    target: T
                  }
                };
                (0, o.default)(i).call(i, T.nodeName) != -1 ? (P.nodes.add = v.toArray(T.childNodes), c.push(P)) : h.nodeType == 3 ? (l(T, y) && (P.nodes.add = v.toArray(T.childNodes)), c.push(P)) : (0, o.default)(i).call(i, g.target.nodeName) == -1 && l(T, y) && (P.nodes.add = v.toArray(T.childNodes), c.push(P));
              }
              S.type == "node" && g.removedNodes.length == 1 ? (h = g.removedNodes[0], y.push(h)) : (h = !1, y.length = 0);
            }
          }), c;
        }
        n.default = u;
        function l(p, c) {
          for (var h = 0, y = c.length - 1; y > 0 && p.contains(c[y]); y--)
            h++;
          return h;
        }
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4)), o = e(t(94));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.restore = n.revoke = void 0;
        function v(y, g) {
          var x = y.position.target;
          switch (y.position.type) {
            case "before":
              x.nextSibling ? (x = x.nextSibling, (0, r.default)(g).call(g, function(S) {
                y.target.insertBefore(S, x);
              })) : (0, r.default)(g).call(g, function(S) {
                y.target.appendChild(S);
              });
              break;
            case "after":
              (0, r.default)(g).call(g, function(S) {
                y.target.insertBefore(S, x);
              });
              break;
            default:
              (0, r.default)(g).call(g, function(S) {
                x.appendChild(S);
              });
              break;
          }
        }
        function A(y) {
          for (var g = 0, x = (0, o.default)(y.nodes); g < x.length; g++) {
            var S = x[g], T = S[0], P = S[1];
            switch (T) {
              case "add":
                (0, r.default)(P).call(P, function(C) {
                  y.target.removeChild(C);
                });
                break;
              default: {
                v(y, P);
                break;
              }
            }
          }
        }
        function d(y) {
          var g = y.target;
          y.oldValue == null ? g.removeAttribute(y.attr) : g.setAttribute(y.attr, y.oldValue);
        }
        function m(y) {
          y.target.textContent = y.oldValue;
        }
        var s = {
          node: A,
          text: m,
          attr: d
        };
        function i(y) {
          for (var g = y.length - 1; g > -1; g--) {
            var x = y[g];
            s[x.type](x);
          }
        }
        n.revoke = i;
        function u(y) {
          for (var g = 0, x = (0, o.default)(y.nodes); g < x.length; g++) {
            var S = x[g], T = S[0], P = S[1];
            switch (T) {
              case "add": {
                v(y, P);
                break;
              }
              default: {
                (0, r.default)(P).call(P, function(C) {
                  C.parentNode.removeChild(C);
                });
                break;
              }
            }
          }
        }
        function l(y) {
          y.target.textContent = y.value;
        }
        function p(y) {
          y.target.setAttribute(y.attr, y.value);
        }
        var c = {
          node: u,
          text: l,
          attr: p
        };
        function h(y) {
          for (var g = 0, x = y; g < x.length; g++) {
            var S = x[g];
            c[S.type](S);
          }
        }
        n.restore = h;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(434), o = function() {
          function v(A) {
            this.editor = A, this.data = new r.TailChain();
          }
          return v.prototype.observe = function() {
            this.data.resetMax(this.editor.config.historyMaxSize), this.data.insertLast(this.editor.$textElem.html());
          }, v.prototype.save = function() {
            return this.data.insertLast(this.editor.$textElem.html()), this;
          }, v.prototype.revoke = function() {
            var A = this.data.prev();
            return A ? (this.editor.$textElem.html(A), !0) : !1;
          }, v.prototype.restore = function() {
            var A = this.data.next();
            return A ? (this.editor.$textElem.html(A), !0) : !1;
          }, v;
        }();
        n.default = o;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(91));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.TailChain = void 0;
        var o = function() {
          function v() {
            this.data = [], this.max = 0, this.point = 0, this.isRe = !1;
          }
          return v.prototype.resetMax = function(A) {
            A = Math.abs(A), A && (this.max = A);
          }, (0, a.default)(v.prototype, "size", {
            get: function() {
              return this.data.length;
            },
            enumerable: !1,
            configurable: !0
          }), v.prototype.insertLast = function(A) {
            if (this.isRe) {
              var d;
              (0, r.default)(d = this.data).call(d, this.point + 1), this.isRe = !1;
            }
            for (this.data.push(A); this.max && this.size > this.max; )
              this.data.shift();
            return this.point = this.size - 1, this;
          }, v.prototype.current = function() {
            return this.data[this.point];
          }, v.prototype.prev = function() {
            if (!this.isRe && (this.isRe = !0), this.point--, this.point < 0) {
              this.point = 0;
              return;
            }
            return this.current();
          }, v.prototype.next = function() {
            if (!this.isRe && (this.isRe = !0), this.point++, this.point >= this.size) {
              this.point = this.size - 1;
              return;
            }
            return this.current();
          }, v;
        }();
        n.TailChain = o;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(99)), v = function(A) {
          r.__extends(d, A);
          function d(m) {
            var s = A.call(this, m.config.historyMaxSize) || this;
            return s.editor = m, s.last = 0, s.target = m.$textElem.elems[0], s;
          }
          return d.prototype.observe = function() {
            var m = this;
            this.target = this.editor.$textElem.elems[0], this.editor.$textElem.on("scroll", function() {
              m.last = m.target.scrollTop;
            }), this.resetMaxSize(this.editor.config.historyMaxSize);
          }, d.prototype.save = function() {
            return A.prototype.save.call(this, [this.last, this.target.scrollTop]), this;
          }, d.prototype.revoke = function() {
            var m = this;
            return A.prototype.revoke.call(this, function(s) {
              m.target.scrollTop = s[0];
            });
          }, d.prototype.restore = function() {
            var m = this;
            return A.prototype.restore.call(this, function(s) {
              m.target.scrollTop = s[1];
            });
          }, d;
        }(o.default);
        n.default = v;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), o = r.__importDefault(t(99)), v = r.__importDefault(t(3)), A = t(6);
        function d(s) {
          return {
            start: [s.startContainer, s.startOffset],
            end: [s.endContainer, s.endOffset],
            root: s.commonAncestorContainer,
            collapsed: s.collapsed
          };
        }
        var m = function(s) {
          r.__extends(i, s);
          function i(u) {
            var l = s.call(this, u.config.historyMaxSize) || this;
            return l.editor = u, l.lastRange = d(document.createRange()), l.root = u.$textElem.elems[0], l.updateLastRange = A.debounce(function() {
              l.lastRange = d(l.rangeHandle);
            }, u.config.onchangeTimeout), l;
          }
          return (0, a.default)(i.prototype, "rangeHandle", {
            get: function() {
              var l = document.getSelection();
              return l && l.rangeCount ? l.getRangeAt(0) : document.createRange();
            },
            enumerable: !1,
            configurable: !0
          }), i.prototype.observe = function() {
            var u = this;
            this.root = this.editor.$textElem.elems[0], this.resetMaxSize(this.editor.config.historyMaxSize);
            function l() {
              var c = u.rangeHandle;
              (u.root === c.commonAncestorContainer || u.root.contains(c.commonAncestorContainer)) && (u.editor.isComposing || u.updateLastRange());
            }
            function p(c) {
              (c.key == "Backspace" || c.key == "Delete") && u.updateLastRange();
            }
            v.default(document).on("selectionchange", l), this.editor.beforeDestroy(function() {
              v.default(document).off("selectionchange", l);
            }), u.editor.$textElem.on("keydown", p);
          }, i.prototype.save = function() {
            var u = d(this.rangeHandle);
            return s.prototype.save.call(this, [this.lastRange, u]), this.lastRange = u, this;
          }, i.prototype.set = function(u) {
            try {
              if (u) {
                var l = this.rangeHandle;
                return l.setStart.apply(l, u.start), l.setEnd.apply(l, u.end), this.editor.menus.changeActive(), !0;
              }
            } catch {
              return !1;
            }
            return !1;
          }, i.prototype.revoke = function() {
            var u = this;
            return s.prototype.revoke.call(this, function(l) {
              u.set(l[0]);
            });
          }, i.prototype.restore = function() {
            var u = this;
            return s.prototype.restore.call(this, function(l) {
              u.set(l[1]);
            });
          }, i;
        }(o.default);
        n.default = m;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(29));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var o = t(2), v = o.__importDefault(t(3));
        t(438);
        function A(d) {
          var m = !1, s, i;
          d.txt.eventHooks.changeEvents.push(function() {
            m && (0, r.default)(s).call(s, ".w-e-content-preview").html(d.$textElem.html());
          });
          function u() {
            if (!m) {
              d.$textElem.hide();
              var p = d.zIndex.get("textContainer"), c = d.txt.html();
              s = v.default('<div class="w-e-content-mantle" style="z-index:' + p + `">
                <div class="w-e-content-preview w-e-text">` + c + `</div>
            </div>`), d.$textContainerElem.append(s);
              var h = d.zIndex.get("menu");
              i = v.default('<div class="w-e-menue-mantle" style="z-index:' + h + '"></div>'), d.$toolbarElem.append(i), m = !0, d.isEnable = !1;
            }
          }
          function l() {
            m && (s.remove(), i.remove(), d.$textElem.show(), m = !1, d.isEnable = !0);
          }
          return {
            disable: u,
            enable: l
          };
        }
        n.default = A;
      },
      function(f, n, t) {
        var e = t(20), a = t(439);
        a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[f.i, a, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(a, r), f.exports = a.locals || {};
      },
      function(f, n, t) {
        var e = t(21);
        n = e(!1), n.push([f.i, `.w-e-content-mantle {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.w-e-content-mantle .w-e-content-preview {
  width: 100%;
  min-height: 100%;
  padding: 0 10px;
  line-height: 1.5;
}
.w-e-content-mantle .w-e-content-preview img {
  cursor: default;
}
.w-e-content-mantle .w-e-content-preview img:hover {
  box-shadow: none;
}
.w-e-menue-mantle {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
`, ""]), f.exports = n;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = function() {
          function o(v) {
            var A = this;
            this.editor = v;
            var d = function() {
              var s = document.activeElement;
              s === v.$textElem.elems[0] && A.emit();
            };
            window.document.addEventListener("selectionchange", d), this.editor.beforeDestroy(function() {
              window.document.removeEventListener("selectionchange", d);
            });
          }
          return o.prototype.emit = function() {
            var v, A = this.editor.config.onSelectionChange;
            if (A) {
              var d = this.editor.selection;
              d.saveRange(), d.isSelectionEmpty() || A({
                text: d.getSelectionText(),
                html: (v = d.getSelectionContainerElem()) === null || v === void 0 ? void 0 : v.elems[0].innerHTML,
                selection: d
              });
            }
          }, o;
        }();
        n.default = r;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(128)), o = e(t(94)), v = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.registerPlugin = void 0;
        var A = t(2), d = A.__importDefault(t(87)), m = t(6);
        function s(u, l, p) {
          if (!u)
            throw new TypeError("name is not define");
          if (!l)
            throw new TypeError("options is not define");
          if (!l.intention)
            throw new TypeError("options.intention is not define");
          if (l.intention && typeof l.intention != "function")
            throw new TypeError("options.intention is not function");
          p[u] && console.warn("plugin " + u + " 已存在，已覆盖。"), p[u] = l;
        }
        n.registerPlugin = s;
        function i(u) {
          var l = (0, r.default)({}, m.deepClone(d.default.globalPluginsFunctionList), m.deepClone(u.pluginsFunctionList)), p = (0, o.default)(l);
          (0, v.default)(p).call(p, function(c) {
            var h = c[0], y = c[1];
            console.info("plugin " + h + " initializing");
            var g = y.intention, x = y.config;
            g(u, x), console.info("plugin " + h + " initialization complete");
          });
        }
        n.default = i;
      },
      function(f, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
      }
    ]).default;
  });
})(wt);
const Jt = /* @__PURE__ */ Kt(wt.exports), Wt = {
  key: 1,
  id: "editor"
}, Xt = /* @__PURE__ */ Yt({
  __name: "index",
  props: {
    options: {
      type: Array,
      required: !0
    },
    httpRequest: {
      type: Function
    }
  },
  emits: ["on-preview", "on-remove", "on-success", "on-error", "on-progress", "on-change", "on-exceed", "before-upload", "before-remove"],
  setup(rt, { expose: Qt, emit: f }) {
    const n = rt, t = Bt({}), e = Bt({}), a = Bt(), r = Bt(), o = () => {
      n.options.forEach((g) => {
        t.value[g.prop] = g.value, e.value[g.prop] = g.rules, g.type === "editor" && Gt(() => {
          const x = new Jt("#editor");
          x.config.placeholder = g.placeholder || "请输入", x.create(), x.txt.html(g.value), x.config.onchange = (S) => {
            t.value[g.prop] = S;
          }, r.value = x;
        });
      });
    }, v = (g) => {
      f("on-preview", g);
    }, A = (g, x) => {
      f("on-remove", { file: g, fileList: x });
    }, d = (g, x, S) => {
      const T = n.options.find((P) => P.type === "upload");
      t.value[T.prop] = { response: g, file: x, fileList: S }, f("on-success", { response: g, file: x, fileList: S });
    }, m = (g, x, S) => {
      f("on-error", { err: g, file: x, fileList: S });
    }, s = (g, x, S) => {
      f("on-progress", { event: g, file: x, fileList: S });
    }, i = (g, x) => {
      f("on-change", { file: g, fileList: x });
    }, u = (g, x) => {
      f("on-exceed", { files: g, uploadFiles: x });
    }, l = (g) => {
      f("before-upload", g);
    }, p = (g, x) => {
      f("before-remove", { file: g, fileList: x });
    };
    return Qt({
      resetFields: () => {
        a.value.resetFields();
        const g = n.options.find((x) => x.type === "editor");
        g && r.value.txt.html(g.value);
      },
      validate: () => a.value.validate,
      getFormData: () => t.value
    }), zt(() => {
      o();
    }), (g, x) => {
      const S = Lt("el-form-item"), T = Lt("el-upload"), P = Lt("el-form");
      return st(), gt(P, It({
        ref_key: "form",
        ref: a,
        model: t.value,
        rules: e.value,
        "validate-on-rule-change": !1
      }, g.$attrs), {
        default: Dt(() => [
          (st(!0), Ft(Ot, null, $t(rt.options, (C, E) => (st(), Ft(Ot, { key: E }, [
            C.children && C.children.length ? (st(), gt(S, {
              key: 0,
              label: C.label,
              prop: C.prop
            }, {
              default: Dt(() => [
                (st(), gt(Ut(`el-${C.type}`), It({
                  modelValue: t.value[C.prop],
                  "onUpdate:modelValue": (D) => t.value[C.prop] = D,
                  placeholder: C.placeholder
                }, C.attrs), {
                  default: Dt(() => [
                    (st(!0), Ft(Ot, null, $t(C.children, (D, R) => (st(), gt(Ut(`el-${D.type}`), It({
                      key: R,
                      label: D.label,
                      value: D.value
                    }, C.attrs), null, 16, ["label", "value"]))), 128))
                  ]),
                  _: 2
                }, 1040, ["modelValue", "onUpdate:modelValue", "placeholder"]))
              ]),
              _: 2
            }, 1032, ["label", "prop"])) : (st(), gt(S, {
              key: 1,
              label: C.label,
              prop: C.prop
            }, {
              default: Dt(() => [
                C.type === "upload" ? (st(), gt(T, It({ key: 0 }, C.uploadAttrs, {
                  "on-preview": v,
                  "on-remove": A,
                  "on-success": d,
                  "on-error": m,
                  "on-progress": s,
                  "on-change": i,
                  "on-exceed": u,
                  "before-upload": l,
                  "before-remove": p,
                  "http-request": rt.httpRequest
                }), {
                  default: Dt(() => [
                    jt(g.$slots, "uploadArea"),
                    jt(g.$slots, "uploadTip")
                  ]),
                  _: 2
                }, 1040, ["http-request"])) : C.type === "editor" ? (st(), Ft("div", Wt)) : (st(), gt(Ut(`el-${C.type}`), It({
                  key: 2,
                  modelValue: t.value[C.prop],
                  "onUpdate:modelValue": (D) => t.value[C.prop] = D,
                  placeholder: C.placeholder
                }, C.attrs), null, 16, ["modelValue", "onUpdate:modelValue", "placeholder"]))
              ]),
              _: 2
            }, 1032, ["label", "prop"]))
          ], 64))), 128)),
          Vt(S, null, {
            default: Dt(() => [
              jt(g.$slots, "action", {
                form: a.value,
                model: t.value
              })
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 16, ["model", "rules"]);
    };
  }
}), kt = {
  install(rt) {
    rt.component("m-form", Xt);
  }
};
export {
  kt as default
};
