import{bx as V,d4 as F,a as S,i as N,aZ as H,bB as U,d as T,bC as z,co as Y,bK as x,aA as E,cH as Z,aU as J,bH as B,s as W,bQ as K,aX as k,bG as ee,bn as j,c$ as te,cm as se,d5 as ne,d6 as ie,d7 as O}from"./index-m_y7kY8i.js";function re(e){if(typeof e=="number")return{"":e.toString()};const t={};return e.split(/ +/).forEach(i=>{if(i==="")return;const[n,s]=i.split(":");s===void 0?t[""]=n:t[n]=s}),t}function w(e,t){var i;if(e==null)return;const n=re(e);if(t===void 0)return n[""];if(typeof t=="string")return(i=n[t])!==null&&i!==void 0?i:n[""];if(Array.isArray(t)){for(let s=t.length-1;s>=0;--s){const r=t[s];if(r in n)return n[r]}return n[""]}else{let s,r=-1;return Object.keys(n).forEach(a=>{const l=Number(a);!Number.isNaN(l)&&t>=l&&l>=r&&(r=l,s=n[a])}),s}}function oe(e){var t;const i=(t=e.dirs)===null||t===void 0?void 0:t.find(({dir:n})=>n===V);return!!(i&&i.value===!1)}const ae={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function le(e){return`(min-width: ${e}px)`}const G={};function fe(e=ae){if(!F)return S(()=>[]);if(typeof window.matchMedia!="function")return S(()=>[]);const t=N({}),i=Object.keys(e),n=(s,r)=>{s.matches?t.value[r]=!0:t.value[r]=!1};return i.forEach(s=>{const r=e[s];let a,l;G[r]===void 0?(a=window.matchMedia(le(r)),a.addEventListener?a.addEventListener("change",d=>{l.forEach(f=>{f(d,s)})}):a.addListener&&a.addListener(d=>{l.forEach(f=>{f(d,s)})}),l=new Set,G[r]={mql:a,cbs:l}):(a=G[r].mql,l=G[r].cbs),l.add(n),a.matches&&l.forEach(d=>{d(a,s)})}),H(()=>{i.forEach(s=>{const{cbs:r}=G[e[s]];r.has(n)&&r.delete(n)})}),S(()=>{const{value:s}=t;return i.filter(r=>s[r])})}const P=1,L=U("n-grid"),Q=1,X={span:{type:[Number,String],default:Q},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},ce=Z(X),ve=T({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:X,setup(){const{isSsrRef:e,xGapRef:t,itemStyleRef:i,overflowRef:n,layoutShiftDisabledRef:s}=z(L),r=Y();return{overflow:n,itemStyle:i,layoutShiftDisabled:s,mergedXGap:S(()=>x(t.value||0)),deriveStyle:()=>{e.value;const{privateSpan:a=Q,privateShow:l=!0,privateColStart:d=void 0,privateOffset:f=0}=r.vnode.props,{value:$}=t,b=x($||0);return{display:l?"":"none",gridColumn:`${d??`span ${a}`} / span ${a}`,marginLeft:f?`calc((100% - (${a} - 1) * ${b}) / ${a} * ${f} + ${b} * ${f})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:i,offset:n,mergedXGap:s}=this;return E("div",{style:{gridColumn:`span ${i} / span ${i}`,marginLeft:n?`calc((100% - (${i} - 1) * ${s}) / ${i} * ${n} + ${s} * ${n})`:""}},this.$slots)}return E("div",{style:[this.itemStyle,this.deriveStyle()]},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e,{overflow:this.overflow}))}}),ue={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},q=24,A="__ssr__",de={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:q},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},he=T({name:"Grid",inheritAttrs:!1,props:de,setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:i}=J(e),n=/^\d+$/,s=N(void 0),r=fe((i==null?void 0:i.value)||ue),a=B(()=>!!(e.itemResponsive||!n.test(e.cols.toString())||!n.test(e.xGap.toString())||!n.test(e.yGap.toString()))),l=S(()=>{if(a.value)return e.responsive==="self"?s.value:r.value}),d=B(()=>{var u;return(u=Number(w(e.cols.toString(),l.value)))!==null&&u!==void 0?u:q}),f=B(()=>w(e.xGap.toString(),l.value)),$=B(()=>w(e.yGap.toString(),l.value)),b=u=>{s.value=u.contentRect.width},v=u=>{se(b,u)},g=N(!1),y=S(()=>{if(e.responsive==="self")return v}),p=N(!1),h=N();return W(()=>{const{value:u}=h;u&&u.hasAttribute(A)&&(u.removeAttribute(A),p.value=!0)}),K(L,{layoutShiftDisabledRef:k(e,"layoutShiftDisabled"),isSsrRef:p,itemStyleRef:k(e,"itemStyle"),xGapRef:f,overflowRef:g}),{isSsr:!ee,contentEl:h,mergedClsPrefix:t,style:S(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:x(e.xGap),rowGap:x(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${d.value}, minmax(0, 1fr))`,columnGap:x(f.value),rowGap:x($.value)}),isResponsive:a,responsiveQuery:l,responsiveCols:d,handleResize:y,overflow:g}},render(){if(this.layoutShiftDisabled)return E("div",j({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var t,i,n,s,r,a,l;this.overflow=!1;const d=ne(ie(this)),f=[],{collapsed:$,collapsedRows:b,responsiveCols:v,responsiveQuery:g}=this;d.forEach(o=>{var C,m,c,R,D;if(((C=o==null?void 0:o.type)===null||C===void 0?void 0:C.__GRID_ITEM__)!==!0)return;if(oe(o)){const _=O(o);_.props?_.props.privateShow=!1:_.props={privateShow:!1},f.push({child:_,rawChildSpan:0});return}o.dirs=((m=o.dirs)===null||m===void 0?void 0:m.filter(({dir:_})=>_!==V))||null,((c=o.dirs)===null||c===void 0?void 0:c.length)===0&&(o.dirs=null);const I=O(o),M=Number((D=w((R=I.props)===null||R===void 0?void 0:R.span,g))!==null&&D!==void 0?D:P);M!==0&&f.push({child:I,rawChildSpan:M})});let y=0;const p=(t=f[f.length-1])===null||t===void 0?void 0:t.child;if(p!=null&&p.props){const o=(i=p.props)===null||i===void 0?void 0:i.suffix;o!==void 0&&o!==!1&&(y=Number((s=w((n=p.props)===null||n===void 0?void 0:n.span,g))!==null&&s!==void 0?s:P),p.props.privateSpan=y,p.props.privateColStart=v+1-y,p.props.privateShow=(r=p.props.privateShow)!==null&&r!==void 0?r:!0)}let h=0,u=!1;for(const{child:o,rawChildSpan:C}of f){if(u&&(this.overflow=!0),!u){const m=Number((l=w((a=o.props)===null||a===void 0?void 0:a.offset,g))!==null&&l!==void 0?l:0),c=Math.min(C+m,v);if(o.props?(o.props.privateSpan=c,o.props.privateOffset=m):o.props={privateSpan:c,privateOffset:m},$){const R=h%v;c+R>v&&(h+=v-R),c+h+y>b*v?u=!0:h+=c}}u&&(o.props?o.props.privateShow!==!0&&(o.props.privateShow=!1):o.props={privateShow:!1})}return E("div",j({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[A]:this.isSsr||void 0},this.$attrs),f.map(({child:o})=>o))};return this.isResponsive&&this.responsive==="self"?E(te,{onResize:this.handleResize},{default:e}):e()}});export{he as _,ve as a,ce as b,X as g};