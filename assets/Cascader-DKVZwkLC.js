import{aA as A,bJ as pt,d as re,a_ as bt,aH as V,j as C,bK as yt,aL as u,a5 as Ce,bc as wt,bd as Me,b as m,b9 as ce,Q as kt,bL as Rt,bF as ze,bM as xt,bG as St,bN as Oe,aO as he,bO as Ct,bP as Mt,bQ as Tt,M as qe,bR as We,aM as Ge,bD as Nt,bS as Pt,bT as Ft,bU as Je,bV as _t,bW as Ot,aD as fe,b1 as je,aC as Re,aB as E,aF as Kt,aG as Qe,bX as Lt,aJ as De,bY as Bt,bZ as Se,b_ as It,y as Ue,ax as At,ba as Vt,b$ as $t,c0 as zt,aK as jt,c1 as Dt,c2 as Ut,c3 as Et,c4 as Ee,c5 as Ht,c6 as qt,c7 as Wt,c8 as Gt,aP as Z}from"./index-CTzTZfFu.js";const Jt=A("base-menu-mask",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 text-align: center;
 padding: 14px;
 overflow: hidden;
`,[pt()]),Qt=re({name:"BaseMenuMask",props:{clsPrefix:{type:String,required:!0}},setup(t){bt("-base-menu-mask",Jt,V(t,"clsPrefix"));const r=C(null);let l=null;const a=C(!1);return yt(()=>{l!==null&&window.clearTimeout(l)}),Object.assign({message:r,show:a},{showOnce(g,w=1500){l&&window.clearTimeout(l),a.value=!0,r.value=g,l=window.setTimeout(()=>{a.value=!1,r.value=null},w)}})},render(){return u(Ce,{name:"fade-in-transition"},{default:()=>this.show?u("div",{class:`${this.clsPrefix}-base-menu-mask`},this.message):null})}});function xe(t){return t?t.map(r=>r.rawNode):null}function Xt(t,r,l,a){const h=[],g=[];function w(v){for(const b of v){if(b.disabled)continue;const{rawNode:_}=b;g.push(_),(b.isLeaf||!r)&&h.push({label:Ke(b,a,l),value:b.key,rawNode:b.rawNode,path:Array.from(g)}),!b.isLeaf&&b.children&&w(b.children),g.pop()}}return w(t),h}function Ke(t,r,l){const a=[];for(;t;)a.push(t.rawNode[l]),t=t.parent;return a.reverse().join(r)}const ve=wt("n-cascader"),He=re({name:"NCascaderOption",props:{tmNode:{type:Object,required:!0}},setup(t){const{expandTriggerRef:r,remoteRef:l,multipleRef:a,mergedValueRef:h,checkedKeysRef:g,indeterminateKeysRef:w,hoverKeyPathRef:v,keyboardKeyRef:b,loadingKeySetRef:_,cascadeRef:x,mergedCheckStrategyRef:L,onLoadRef:$,mergedClsPrefixRef:B,mergedThemeRef:H,labelFieldRef:q,showCheckboxRef:ee,renderPrefixRef:p,renderSuffixRef:S,updateHoverKey:N,updateKeyboardKey:M,addLoadingKey:I,deleteLoadingKey:j,closeMenu:te,doCheck:Q,doUncheck:me,renderLabelRef:d}=Me(ve),y=m(()=>t.tmNode.key),P=m(()=>{const{value:T}=r,{value:U}=l;return!U&&T==="hover"}),O=m(()=>{if(P.value)return se}),W=m(()=>{if(P.value)return ue}),D=ce(()=>{const{value:T}=a;return T?g.value.includes(y.value):h.value===y.value}),ne=ce(()=>a.value?w.value.includes(y.value):!1),Te=ce(()=>v.value.includes(y.value)),Ne=ce(()=>{const{value:T}=b;return T===null?!1:T===y.value}),G=ce(()=>l.value?_.value.has(y.value):!1),le=m(()=>t.tmNode.isLeaf),z=m(()=>t.tmNode.disabled),J=m(()=>t.tmNode.rawNode[q.value]),X=m(()=>t.tmNode.shallowLoaded);function ie(T){if(z.value)return;const{value:U}=l,{value:K}=_,{value:pe}=$,{value:F}=y,{value:be}=le,{value:ye}=X;Oe(T,"checkbox")||(U&&!ye&&!K.has(F)&&pe&&(I(F),pe(t.tmNode.rawNode).then(()=>{j(F)}).catch(()=>{j(F)})),N(F),M(F)),be&&ge()}function se(){if(!P.value||z.value)return;const{value:T}=y;N(T),M(T)}function ue(){P.value&&se()}function Pe(){const{value:T}=le;T||ge()}function ge(){const{value:T}=a,{value:U}=y;T?ne.value||D.value?me(U):Q(U):(Q(U),te(!0))}return{checkStrategy:L,multiple:a,cascade:x,checked:D,indeterminate:ne,hoverPending:Te,keyboardPending:Ne,isLoading:G,showCheckbox:ee,isLeaf:le,disabled:z,label:J,mergedClsPrefix:B,mergedTheme:H,handleClick:ie,handleCheckboxUpdateValue:Pe,mergedHandleMouseEnter:O,mergedHandleMouseMove:W,renderLabel:d,renderPrefix:p,renderSuffix:S}},render(){const{mergedClsPrefix:t,showCheckbox:r,renderLabel:l,renderPrefix:a,renderSuffix:h}=this;let g=null;if(r||a){const b=this.showCheckbox?u(kt,{focusable:!1,"data-checkbox":!0,disabled:this.disabled,checked:this.checked,indeterminate:this.indeterminate,theme:this.mergedTheme.peers.Checkbox,themeOverrides:this.mergedTheme.peerOverrides.Checkbox,onUpdateChecked:this.handleCheckboxUpdateValue}):null;g=u("div",{class:`${t}-cascader-option__prefix`},a?a({option:this.tmNode.rawNode,checked:this.checked,node:b}):b)}let w=null;const v=u("div",{class:`${t}-cascader-option-icon-placeholder`},this.isLeaf?this.checkStrategy==="child"&&!(this.multiple&&this.cascade)?u(Ce,{name:"fade-in-scale-up-transition"},{default:()=>this.checked?u(ze,{clsPrefix:t,class:`${t}-cascader-option-icon ${t}-cascader-option-icon--checkmark`},{default:()=>u(St,null)}):null}):null:u(Rt,{clsPrefix:t,scale:.85,strokeWidth:24,show:this.isLoading,class:`${t}-cascader-option-icon`},{default:()=>u(ze,{clsPrefix:t,key:"arrow",class:`${t}-cascader-option-icon ${t}-cascader-option-icon--arrow`},{default:()=>u(xt,null)})}));return w=u("div",{class:`${t}-cascader-option__suffix`},h?h({option:this.tmNode.rawNode,checked:this.checked,node:v}):v),u("div",{class:[`${t}-cascader-option`,this.keyboardPending||this.hoverPending&&`${t}-cascader-option--pending`,this.disabled&&`${t}-cascader-option--disabled`,this.showCheckbox&&`${t}-cascader-option--show-prefix`],onMouseenter:this.mergedHandleMouseEnter,onMousemove:this.mergedHandleMouseMove,onClick:this.handleClick},g,u("span",{class:`${t}-cascader-option__label`},l?l(this.tmNode.rawNode,this.checked):this.label),w)}}),Yt=re({name:"CascaderSubmenu",props:{depth:{type:Number,required:!0},tmNodes:{type:Array,required:!0}},setup(){const{virtualScrollRef:t,mergedClsPrefixRef:r,mergedThemeRef:l,optionHeightRef:a}=Me(ve),h=C(null),g=C(null),w={scroll(v,b){var _,x;t.value?(_=g.value)===null||_===void 0||_.scrollTo({index:v}):(x=h.value)===null||x===void 0||x.scrollTo({index:v,elSize:b})}};return Object.assign({mergedClsPrefix:r,mergedTheme:l,scrollbarInstRef:h,vlInstRef:g,virtualScroll:t,itemSize:m(()=>he(a.value)),handleVlScroll:()=>{var v;(v=h.value)===null||v===void 0||v.sync()},getVlContainer:()=>{var v;return(v=g.value)===null||v===void 0?void 0:v.listElRef},getVlContent:()=>{var v;return(v=g.value)===null||v===void 0?void 0:v.itemsElRef}},w)},render(){const{mergedClsPrefix:t,mergedTheme:r,virtualScroll:l}=this;return u("div",{class:[l&&`${t}-cascader-submenu--virtual`,`${t}-cascader-submenu`]},u(Ct,{ref:"scrollbarInstRef",theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,container:l?this.getVlContainer:void 0,content:l?this.getVlContent:void 0},{default:()=>l?u(Mt,{items:this.tmNodes,itemSize:this.itemSize,onScroll:this.handleVlScroll,showScrollbar:!1,ref:"vlInstRef"},{default:({item:a})=>u(He,{key:a.key,tmNode:a})}):this.tmNodes.map(a=>u(He,{key:a.key,tmNode:a}))}))}}),Zt=re({name:"NCascaderMenu",props:{value:[String,Number,Array],placement:{type:String,default:"bottom-start"},show:Boolean,menuModel:{type:Array,required:!0},loading:Boolean,onFocus:{type:Function,required:!0},onBlur:{type:Function,required:!0},onKeydown:{type:Function,required:!0},onMousedown:{type:Function,required:!0},onTabout:{type:Function,required:!0}},setup(t){const{localeRef:r,isMountedRef:l,mergedClsPrefixRef:a,syncCascaderMenuPosition:h,handleCascaderMenuClickOutside:g,mergedThemeRef:w,getColumnStyleRef:v}=Me(ve),b=[],_=C(null),x=C(null);function L(){h()}Tt(x,L);function $(p){var S;const{value:{loadingRequiredMessage:N}}=r;(S=_.value)===null||S===void 0||S.showOnce(N(p))}function B(p){g(p)}function H(p){const{value:S}=x;S&&(S.contains(p.relatedTarget)||t.onFocus(p))}function q(p){const{value:S}=x;S&&(S.contains(p.relatedTarget)||t.onBlur(p))}return Object.assign({isMounted:l,mergedClsPrefix:a,selfElRef:x,submenuInstRefs:b,maskInstRef:_,mergedTheme:w,getColumnStyle:v,handleFocusin:H,handleFocusout:q,handleClickOutside:B},{scroll(p,S,N){const M=b[p];M&&M.scroll(S,N)},showErrorMessage:$})},render(){const{submenuInstRefs:t,mergedClsPrefix:r,mergedTheme:l}=this;return u(Ce,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.show?qe(u("div",{tabindex:"0",ref:"selfElRef",class:`${r}-cascader-menu`,onMousedown:this.onMousedown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeydown:this.onKeydown},this.menuModel[0].length?u("div",{class:`${r}-cascader-submenu-wrapper`},this.menuModel.map((a,h)=>{var g;return u(Yt,{style:(g=this.getColumnStyle)===null||g===void 0?void 0:g.call(this,{level:h}),ref:w=>{w&&(t[h]=w)},key:h,tmNodes:a,depth:h+1})}),u(Qt,{clsPrefix:r,ref:"maskInstRef"})):u("div",{class:`${r}-cascader-menu__empty`},Ge(this.$slots.empty,()=>[u(Ft,{theme:l.peers.Empty,themeOverrides:l.peerOverrides.Empty})])),Nt(this.$slots.action,a=>a&&u("div",{class:`${r}-cascader-menu-action`,"data-action":!0},a)),u(Pt,{onFocus:this.onTabout})),[[We,this.handleClickOutside,void 0,{capture:!0}]]):null})}}),en=re({name:"NCascaderSelectMenu",props:{value:{type:[String,Number,Array],default:null},show:Boolean,pattern:{type:String,default:""},multiple:Boolean,tmNodes:{type:Array,default:()=>[]},filter:Function,labelField:{type:String,required:!0},separator:{type:String,required:!0}},setup(t){const{isMountedRef:r,mergedValueRef:l,mergedClsPrefixRef:a,mergedThemeRef:h,mergedCheckStrategyRef:g,slots:w,syncSelectMenuPosition:v,closeMenu:b,handleSelectMenuClickOutside:_,doUncheck:x,doCheck:L,clearPattern:$}=Me(ve),B=C(null),H=m(()=>Xt(t.tmNodes,g.value==="child",t.labelField,t.separator)),q=m(()=>{const{filter:d}=t;if(d)return d;const{labelField:y}=t;return(P,O,W)=>W.some(D=>D[y]&&~D[y].indexOf(P))}),ee=m(()=>{const{pattern:d}=t,{value:y}=q;return(d?H.value.filter(P=>y(d,P.rawNode,P.path)):H.value).map(P=>({value:P.value,label:P.label}))}),p=m(()=>Je(ee.value,Ot("value","children")));function S(){v()}function N(d){M(d)}function M(d){if(t.multiple){const{value:y}=l;Array.isArray(y)?y.includes(d.key)?x(d.key):L(d.key):y===null&&L(d.key),$()}else L(d.key),b(!0)}function I(){var d;(d=B.value)===null||d===void 0||d.prev()}function j(){var d;(d=B.value)===null||d===void 0||d.next()}function te(){var d;if(B){const y=(d=B.value)===null||d===void 0?void 0:d.getPendingTmNode();return y&&M(y),!0}return!1}function Q(d){_(d)}return Object.assign({isMounted:r,mergedTheme:h,mergedClsPrefix:a,menuInstRef:B,selectTreeMate:p,handleResize:S,handleToggle:N,handleClickOutside:Q,cascaderSlots:w},{prev:I,next:j,enter:te})},render(){const{mergedClsPrefix:t,isMounted:r,mergedTheme:l,cascaderSlots:a}=this;return u(Ce,{name:"fade-in-scale-up-transition",appear:r},{default:()=>this.show?qe(u(_t,{ref:"menuInstRef",onResize:this.handleResize,clsPrefix:t,class:`${t}-cascader-menu`,autoPending:!0,themeOverrides:l.peerOverrides.InternalSelectMenu,theme:l.peers.InternalSelectMenu,treeMate:this.selectTreeMate,multiple:this.multiple,value:this.value,onToggle:this.handleToggle},{empty:()=>Ge(a["not-found"],()=>[])}),[[We,this.handleClickOutside,void 0,{capture:!0}]]):null})}}),tn=fe([A("cascader-menu",`
 outline: none;
 position: relative;
 margin: 4px 0;
 display: flex;
 flex-flow: column nowrap;
 border-radius: var(--n-menu-border-radius);
 overflow: hidden;
 box-shadow: var(--n-menu-box-shadow);
 color: var(--n-option-text-color);
 background-color: var(--n-menu-color);
 `,[je({transformOrigin:"inherit",duration:"0.2s"}),Re("empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),A("scrollbar",`
 width: 100%;
 `),A("base-menu-mask",`
 background-color: var(--n-menu-mask-color);
 `),A("base-loading",`
 color: var(--n-loading-color);
 `),A("cascader-submenu-wrapper",`
 position: relative;
 display: flex;
 flex-wrap: nowrap;
 `),A("cascader-submenu",`
 height: var(--n-menu-height);
 min-width: var(--n-column-width);
 position: relative;
 `,[E("virtual",`
 width: var(--n-column-width);
 `),A("scrollbar-content",`
 position: relative;
 `),fe("&:first-child",`
 border-top-left-radius: var(--n-menu-border-radius);
 border-bottom-left-radius: var(--n-menu-border-radius);
 `),fe("&:last-child",`
 border-top-right-radius: var(--n-menu-border-radius);
 border-bottom-right-radius: var(--n-menu-border-radius);
 `),fe("&:not(:first-child)",`
 border-left: 1px solid var(--n-menu-divider-color);
 `)]),A("cascader-menu-action",`
 box-sizing: border-box;
 padding: 8px;
 border-top: 1px solid var(--n-menu-divider-color);
 `),A("cascader-option",`
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 padding: 0 0 0 18px;
 box-sizing: border-box;
 min-width: 182px;
 background-color: #0000;
 display: flex;
 align-items: center;
 white-space: nowrap;
 position: relative;
 cursor: pointer;
 transition:
 background-color .2s var(--n-bezier),
 color 0.2s var(--n-bezier);
 `,[E("show-prefix",`
 padding-left: 0;
 `),Re("label",`
 flex: 1 0 0;
 overflow: hidden;
 text-overflow: ellipsis;
 `),Re("prefix",`
 min-width: 32px;
 display: flex;
 align-items: center;
 justify-content: center;
 `),Re("suffix",`
 min-width: 32px;
 display: flex;
 align-items: center;
 justify-content: center;
 `),A("cascader-option-icon-placeholder",`
 line-height: 0;
 position: relative;
 width: 16px;
 height: 16px;
 font-size: 16px;
 `,[A("cascader-option-icon",[E("checkmark",`
 color: var(--n-option-check-mark-color);
 `,[je({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})]),E("arrow",`
 color: var(--n-option-arrow-color);
 `)])]),E("selected",`
 color: var(--n-option-text-color-active);
 `),E("active",`
 color: var(--n-option-text-color-active);
 background-color: var(--n-option-color-hover);
 `),E("pending",`
 background-color: var(--n-option-color-hover);
 `),fe("&:hover",`
 background-color: var(--n-option-color-hover);
 `),E("disabled",`
 color: var(--n-option-text-color-disabled);
 background-color: #0000;
 cursor: not-allowed;
 `,[A("cascader-option-icon",[E("arrow",`
 color: var(--n-option-text-color-disabled);
 `)])])])]),A("cascader",`
 z-index: auto;
 position: relative;
 width: 100%;
 `)]),nn=Object.assign(Object.assign({},Qe.props),{allowCheckingNotLoaded:Boolean,to:Se.propTo,bordered:{type:Boolean,default:void 0},options:{type:Array,default:()=>[]},value:[String,Number,Array],defaultValue:{type:[String,Number,Array],default:null},placeholder:String,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},disabledField:{type:String,default:"disabled"},expandTrigger:{type:String,default:"click"},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},remote:Boolean,onLoad:Function,separator:{type:String,default:" / "},filter:Function,placement:{type:String,default:"bottom-start"},cascade:{type:Boolean,default:!0},leafOnly:Boolean,showPath:{type:Boolean,default:!0},show:{type:Boolean,default:void 0},maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,menuProps:Object,filterMenuProps:Object,virtualScroll:{type:Boolean,default:!0},checkStrategy:{type:String,default:"all"},valueField:{type:String,default:"value"},labelField:{type:String,default:"label"},childrenField:{type:String,default:"children"},renderLabel:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onBlur:Function,onFocus:Function,getColumnStyle:Function,renderPrefix:Function,renderSuffix:Function,onChange:[Function,Array]}),an=re({name:"Cascader",props:nn,setup(t,{slots:r}){const{mergedBorderedRef:l,mergedClsPrefixRef:a,namespaceRef:h,inlineThemeDisabled:g}=Kt(t),w=Qe("Cascader","-cascader",tn,Ht,t,a),{localeRef:v}=Lt("Cascader"),b=C(t.defaultValue),_=m(()=>t.value),x=De(_,b),L=m(()=>t.leafOnly?"child":t.checkStrategy),$=C(""),B=Bt(t),{mergedSizeRef:H,mergedDisabledRef:q,mergedStatusRef:ee}=B,p=C(null),S=C(null),N=C(null),M=C(null),I=C(null),j=C(new Set),te=C(null),Q=C(null),me=Se(t),d=C(!1),y=e=>{j.value.add(e)},P=e=>{j.value.delete(e)},O=m(()=>{const{valueField:e,childrenField:n,disabledField:o}=t;return Je(t.options,{getDisabled(c){return c[o]},getKey(c){return c[e]},getChildren(c){return c[n]}})}),W=m(()=>{const{cascade:e,multiple:n}=t;return n&&Array.isArray(x.value)?O.value.getCheckedKeys(x.value,{cascade:e,allowNotLoaded:t.allowCheckingNotLoaded}):{checkedKeys:[],indeterminateKeys:[]}}),D=m(()=>W.value.checkedKeys),ne=m(()=>W.value.indeterminateKeys),Te=m(()=>{const{treeNodePath:e,treeNode:n}=O.value.getPath(I.value);let o;return n===null?o=[O.value.treeNodes]:(o=e.map(c=>c.siblings),!n.isLeaf&&!j.value.has(n.key)&&n.children&&o.push(n.children)),o}),Ne=m(()=>{const{keyPath:e}=O.value.getPath(I.value);return e}),G=m(()=>w.value.self.optionHeight);It(t.options)&&Ue(t.options,(e,n)=>{e!==n&&(I.value=null,M.value=null)});function le(e){const{onUpdateShow:n,"onUpdate:show":o}=t;n&&Z(n,e),o&&Z(o,e),T.value=e}function z(e,n,o){const{onUpdateValue:c,"onUpdate:value":i,onChange:k}=t,{nTriggerFormInput:s,nTriggerFormChange:R}=B;c&&Z(c,e,n,o),i&&Z(i,e,n,o),k&&Z(k,e,n,o),b.value=e,s(),R()}function J(e){M.value=e}function X(e){I.value=e}function ie(e){const{value:{getNode:n}}=O;return e.map(o=>{var c;return((c=n(o))===null||c===void 0?void 0:c.rawNode)||null})}function se(e){var n;const{cascade:o,multiple:c,filterable:i}=t,{value:{check:k,getNode:s,getPath:R}}=O;if(c)try{const{checkedKeys:f}=k(e,W.value.checkedKeys,{cascade:o,checkStrategy:L.value,allowNotLoaded:t.allowCheckingNotLoaded});z(f,ie(f),f.map(oe=>{var de;return xe((de=R(oe))===null||de===void 0?void 0:de.treeNodePath)})),i&&Fe(),M.value=e,I.value=e}catch(f){if(f instanceof qt){if(p.value){const oe=s(e);oe!==null&&p.value.showErrorMessage(oe.rawNode[t.labelField])}}else throw f}else if(L.value==="child"){const f=s(e);if(f!=null&&f.isLeaf)z(e,f.rawNode,xe(R(e).treeNodePath));else return!1}else{const f=s(e);z(e,(f==null?void 0:f.rawNode)||null,xe((n=R(e))===null||n===void 0?void 0:n.treeNodePath))}return!0}function ue(e){const{cascade:n,multiple:o}=t;if(o){const{value:{uncheck:c,getNode:i,getPath:k}}=O,{checkedKeys:s}=c(e,W.value.checkedKeys,{cascade:n,checkStrategy:L.value,allowNotLoaded:t.allowCheckingNotLoaded});z(s,s.map(R=>{var f;return((f=i(R))===null||f===void 0?void 0:f.rawNode)||null}),s.map(R=>{var f;return xe((f=k(R))===null||f===void 0?void 0:f.treeNodePath)})),M.value=e,I.value=e}}const Pe=m(()=>{if(t.multiple){const{showPath:e,separator:n,labelField:o,cascade:c}=t,{getCheckedKeys:i,getNode:k}=O.value;return i(D.value,{cascade:c,checkStrategy:L.value,allowNotLoaded:t.allowCheckingNotLoaded}).checkedKeys.map(R=>{const f=k(R);return f===null?{label:String(R),value:R}:{label:e?Ke(f,n,o):f.rawNode[o],value:f.key}})}else return[]}),ge=m(()=>{const{multiple:e,showPath:n,separator:o,labelField:c}=t,{value:i}=x;if(!e&&!Array.isArray(i)){const{getNode:k}=O.value;if(i===null)return null;const s=k(i);return s===null?{label:String(i),value:i}:{label:n?Ke(s,o,c):s.rawNode[c],value:s.key}}else return null}),T=C(!1),U=V(t,"show"),K=De(U,T),pe=m(()=>{const{placeholder:e}=t;return e!==void 0?e:v.value.placeholder}),F=m(()=>!!(t.filterable&&$.value));Ue(K,e=>{if(!e||t.multiple)return;const{value:n}=x;!Array.isArray(n)&&n!==null?(M.value=n,I.value=n,At(()=>{var o;if(!K.value)return;const{value:c}=I;if(x.value!==null){const i=O.value.getNode(c);i&&((o=p.value)===null||o===void 0||o.scroll(i.level,i.index,he(G.value)))}})):(M.value=null,I.value=null)},{immediate:!0});function be(e){const{onBlur:n}=t,{nTriggerFormBlur:o}=B;n&&Z(n,e),o()}function ye(e){const{onFocus:n}=t,{nTriggerFormFocus:o}=B;n&&Z(n,e),o()}function Fe(){var e;(e=N.value)===null||e===void 0||e.focusInput()}function Xe(){var e;(e=N.value)===null||e===void 0||e.focus()}function we(){q.value||($.value="",le(!0),t.filterable&&Fe())}function Y(e=!1){e&&Xe(),le(!1),$.value=""}function Le(e){var n;F.value||K.value&&(!((n=N.value)===null||n===void 0)&&n.$el.contains(Wt(e))||Y())}function Ye(e){F.value&&Le(e)}function Be(){t.clearFilterAfterSelect&&($.value="")}function ke(e){var n,o,c;const{value:i}=M,{value:k}=O;switch(e){case"prev":if(i!==null){const s=k.getPrev(i,{loop:!0});s!==null&&(J(s.key),(n=p.value)===null||n===void 0||n.scroll(s.level,s.index,he(G.value)))}break;case"next":if(i===null){const s=k.getFirstAvailableNode();s!==null&&(J(s.key),(o=p.value)===null||o===void 0||o.scroll(s.level,s.index,he(G.value)))}else{const s=k.getNext(i,{loop:!0});s!==null&&(J(s.key),(c=p.value)===null||c===void 0||c.scroll(s.level,s.index,he(G.value)))}break;case"child":if(i!==null){const s=k.getNode(i);if(s!==null)if(s.shallowLoaded){const R=k.getChild(i);R!==null&&(X(i),J(R.key))}else{const{value:R}=j;if(!R.has(i)){y(i),X(i);const{onLoad:f}=t;f&&f(s.rawNode).then(()=>{P(i)}).catch(()=>{P(i)})}}}break;case"parent":if(i!==null){const s=k.getParent(i);if(s!==null){J(s.key);const R=s.getParent();X(R===null?null:R.key)}}break}}function Ie(e){var n,o;switch(e.key){case" ":case"ArrowDown":case"ArrowUp":if(t.filterable&&K.value)break;e.preventDefault();break}if(!Oe(e,"action"))switch(e.key){case" ":if(t.filterable)return;case"Enter":if(!K.value)we();else{const{value:c}=F,{value:i}=M;if(c)S.value&&S.value.enter()&&Be();else if(i!==null)if(D.value.includes(i)||ne.value.includes(i))ue(i);else{const k=se(i);!t.multiple&&k&&Y(!0)}}break;case"ArrowUp":e.preventDefault(),K.value&&(F.value?(n=S.value)===null||n===void 0||n.prev():ke("prev"));break;case"ArrowDown":e.preventDefault(),K.value?F.value?(o=S.value)===null||o===void 0||o.next():ke("next"):we();break;case"ArrowLeft":e.preventDefault(),K.value&&!F.value&&ke("parent");break;case"ArrowRight":e.preventDefault(),K.value&&!F.value&&ke("child");break;case"Escape":K.value&&(Gt(e),Y(!0))}}function Ze(e){Ie(e)}function et(e){e.stopPropagation(),t.multiple?z([],[],[]):z(null,null,null)}function tt(e){var n;!((n=p.value)===null||n===void 0)&&n.$el.contains(e.relatedTarget)||(d.value=!0,ye(e))}function nt(e){var n;!((n=p.value)===null||n===void 0)&&n.$el.contains(e.relatedTarget)||(d.value=!1,be(e),Y())}function lt(e){var n;!((n=N.value)===null||n===void 0)&&n.$el.contains(e.relatedTarget)||(d.value=!0,ye(e))}function at(e){var n;!((n=N.value)===null||n===void 0)&&n.$el.contains(e.relatedTarget)||(d.value=!1,be(e))}function ot(e){Oe(e,"action")||t.multiple&&t.filter&&(e.preventDefault(),Fe())}function rt(){Y(!0)}function it(){t.filterable?we():K.value?Y(!0):we()}function st(e){$.value=e.target.value}function ut(e){const{multiple:n}=t,{value:o}=x;n&&Array.isArray(o)&&e.value!==void 0?ue(e.value):z(null,null,null)}function Ae(){var e;(e=te.value)===null||e===void 0||e.syncPosition()}function Ve(){var e;(e=Q.value)===null||e===void 0||e.syncPosition()}function dt(){K.value&&(F.value?Ae():Ve())}const _e=m(()=>!!(t.multiple&&t.cascade||L.value!=="child"));Vt(ve,{slots:r,mergedClsPrefixRef:a,mergedThemeRef:w,mergedValueRef:x,checkedKeysRef:D,indeterminateKeysRef:ne,hoverKeyPathRef:Ne,mergedCheckStrategyRef:L,showCheckboxRef:_e,cascadeRef:V(t,"cascade"),multipleRef:V(t,"multiple"),keyboardKeyRef:M,hoverKeyRef:I,remoteRef:V(t,"remote"),loadingKeySetRef:j,expandTriggerRef:V(t,"expandTrigger"),isMountedRef:$t(),onLoadRef:V(t,"onLoad"),virtualScrollRef:V(t,"virtualScroll"),optionHeightRef:G,localeRef:v,labelFieldRef:V(t,"labelField"),renderLabelRef:V(t,"renderLabel"),getColumnStyleRef:V(t,"getColumnStyle"),renderPrefixRef:V(t,"renderPrefix"),renderSuffixRef:V(t,"renderSuffix"),syncCascaderMenuPosition:Ve,syncSelectMenuPosition:Ae,updateKeyboardKey:J,updateHoverKey:X,addLoadingKey:y,deleteLoadingKey:P,doCheck:se,doUncheck:ue,closeMenu:Y,handleSelectMenuClickOutside:Ye,handleCascaderMenuClickOutside:Le,clearPattern:Be});const ct={focus:()=>{var e;(e=N.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=N.value)===null||e===void 0||e.blur()},getCheckedData:()=>{if(_e.value){const e=D.value;return{keys:e,options:ie(e)}}return{keys:[],options:[]}},getIndeterminateData:()=>{if(_e.value){const e=ne.value;return{keys:e,options:ie(e)}}return{keys:[],options:[]}}},$e=m(()=>{const{self:{optionArrowColor:e,optionTextColor:n,optionTextColorActive:o,optionTextColorDisabled:c,optionCheckMarkColor:i,menuColor:k,menuBoxShadow:s,menuDividerColor:R,menuBorderRadius:f,menuHeight:oe,optionColorHover:de,optionHeight:ft,optionFontSize:ht,loadingColor:vt,columnWidth:mt},common:{cubicBezierEaseInOut:gt}}=w.value;return{"--n-bezier":gt,"--n-menu-border-radius":f,"--n-menu-box-shadow":s,"--n-menu-height":oe,"--n-column-width":mt,"--n-menu-color":k,"--n-menu-divider-color":R,"--n-option-height":ft,"--n-option-font-size":ht,"--n-option-text-color":n,"--n-option-text-color-disabled":c,"--n-option-text-color-active":o,"--n-option-color-hover":de,"--n-option-check-mark-color":i,"--n-option-arrow-color":e,"--n-menu-mask-color":zt(k,{alpha:.75}),"--n-loading-color":vt}}),ae=g?jt("cascader",void 0,$e,t):void 0;return Object.assign(Object.assign({},ct),{handleTriggerResize:dt,mergedStatus:ee,selectMenuFollowerRef:te,cascaderMenuFollowerRef:Q,triggerInstRef:N,selectMenuInstRef:S,cascaderMenuInstRef:p,mergedBordered:l,mergedClsPrefix:a,namespace:h,mergedValue:x,mergedShow:K,showSelectMenu:F,pattern:$,treeMate:O,mergedSize:H,mergedDisabled:q,localizedPlaceholder:pe,selectedOption:ge,selectedOptions:Pe,adjustedTo:me,menuModel:Te,handleMenuTabout:rt,handleMenuFocus:lt,handleMenuBlur:at,handleMenuKeydown:Ze,handleMenuMousedown:ot,handleTriggerFocus:tt,handleTriggerBlur:nt,handleTriggerClick:it,handleClear:et,handleDeleteOption:ut,handlePatternInput:st,handleKeydown:Ie,focused:d,optionHeight:G,mergedTheme:w,cssVars:g?void 0:$e,themeClass:ae==null?void 0:ae.themeClass,onRender:ae==null?void 0:ae.onRender})},render(){const{mergedClsPrefix:t}=this;return u("div",{class:`${t}-cascader`},u(Dt,null,{default:()=>[u(Ut,null,{default:()=>u(Et,{onResize:this.handleTriggerResize,ref:"triggerInstRef",status:this.mergedStatus,clsPrefix:t,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,active:this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,focused:this.focused,onFocus:this.handleTriggerFocus,onBlur:this.handleTriggerBlur,onClick:this.handleTriggerClick,onClear:this.handleClear,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onKeydown:this.handleKeydown},{arrow:()=>{var r,l;return(l=(r=this.$slots).arrow)===null||l===void 0?void 0:l.call(r)}})}),u(Ee,{key:"cascaderMenu",ref:"cascaderMenuFollowerRef",show:this.mergedShow&&!this.showSelectMenu,containerClass:this.namespace,placement:this.placement,width:this.options.length?void 0:"target",teleportDisabled:this.adjustedTo===Se.tdkey,to:this.adjustedTo},{default:()=>{var r;(r=this.onRender)===null||r===void 0||r.call(this);const{menuProps:l}=this;return u(Zt,Object.assign({},l,{ref:"cascaderMenuInstRef",class:[this.themeClass,l==null?void 0:l.class],value:this.mergedValue,show:this.mergedShow&&!this.showSelectMenu,menuModel:this.menuModel,style:[this.cssVars,l==null?void 0:l.style],onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onMousedown:this.handleMenuMousedown,onTabout:this.handleMenuTabout}),{action:()=>{var a,h;return(h=(a=this.$slots).action)===null||h===void 0?void 0:h.call(a)},empty:()=>{var a,h;return(h=(a=this.$slots).empty)===null||h===void 0?void 0:h.call(a)}})}}),u(Ee,{key:"selectMenu",ref:"selectMenuFollowerRef",show:this.mergedShow&&this.showSelectMenu,containerClass:this.namespace,width:"target",placement:this.placement,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Se.tdkey},{default:()=>{var r;(r=this.onRender)===null||r===void 0||r.call(this);const{filterMenuProps:l}=this;return u(en,Object.assign({},l,{ref:"selectMenuInstRef",class:[this.themeClass,l==null?void 0:l.class],value:this.mergedValue,show:this.mergedShow&&this.showSelectMenu,pattern:this.pattern,multiple:this.multiple,tmNodes:this.treeMate.treeNodes,filter:this.filter,labelField:this.labelField,separator:this.separator,style:[this.cssVars,l==null?void 0:l.style]}))}})]}))}});export{an as _};