(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("vue")):typeof define=="function"&&define.amd?define(["vue"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.index=n(e.Vue))})(this,function(e){"use strict";const n=t=>t.replace(/(A-Z)/g,"$1").toLocaleLowerCase(),o=e.defineComponent({__name:"index",props:{icon:{type:String,default:"Bell"},value:{type:[String,Number],default:""},max:{type:Number},isDot:{type:Boolean,default:!1}},setup(t){return(i,a)=>{const l=e.resolveComponent("el-badge"),c=e.resolveComponent("el-popover");return e.openBlock(),e.createBlock(c,{placement:"bottom",width:300,trigger:"click"},{default:e.withCtx(()=>[e.renderSlot(i.$slots,"default")]),reference:e.withCtx(()=>[e.createVNode(l,{value:t.value,max:t.max,"is-dot":t.isDot,style:{cursor:"pointer"}},{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(`el-icon-${e.unref(n)(t.icon)}`)))]),_:1},8,["value","max","is-dot"])]),_:3})}}});return{install(t){t.component("notification",o)}}});
