(function(e,t){typeof exports=="object"&&typeof module<"u"?module.exports=t(require("vue")):typeof define=="function"&&define.amd?define(["vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,e.index=t(e.Vue))})(this,function(e){"use strict";const t=e.defineComponent({__name:"index",props:{visible:{type:Boolean,default:!1},options:{type:Array,required:!0}},emits:["update:visible"],setup(n,{emit:d}){const l=n,i=e.ref(l.visible),r=e.ref();return e.watch(()=>l.visible,o=>{i.value=o}),e.watch(()=>i.value,o=>{d("update:visible",o)}),(o,s)=>{const p=e.resolveComponent("m-form"),a=e.resolveComponent("el-dialog");return e.openBlock(),e.createBlock(a,e.mergeProps({modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=f=>i.value=f)},o.$attrs),{default:e.withCtx(()=>[e.createVNode(p,{ref_key:"form",ref:r,options:n.options},{uploadArea:e.withCtx(()=>[e.renderSlot(o.$slots,"uploadArea")]),uploadTip:e.withCtx(()=>[e.renderSlot(o.$slots,"uploadTip")]),_:3},8,["options"])]),footer:e.withCtx(()=>[e.renderSlot(o.$slots,"footer",{form:r.value})]),_:3},16,["modelValue"])}}});return{install(n){n.component("modal-form",t)}}});