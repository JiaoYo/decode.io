import{_ as X}from"./table-header-operation.vue_vue_type_script_setup_true_lang-3WFkccas.js";import{d as K,q as O,s as A,v as q,x as Y,b as ee,r as te,y as oe,K as B,o as P,c as E,w as o,g as e,h as F,t as I,i as t,$ as u,M as L,L as U,A as H,C as ne,D as W,B as G,E as Z,aa as ae,ab as se,a9 as J,Z as le,e as re,ac as $,ad as ie}from"./index-Ddi2sB0k.js";import{a as ce,b as me,f as ue,c as pe}from"./multipe-BvCg9pVr.js";import{u as de,a as _e}from"./table-BPjc3v9J.js";import{_ as fe}from"./round-search-C_65O74k.js";import{_ as he}from"./round-refresh-yoRg4w0p.js";import{_ as ye}from"./FormItemGridItem-Doopd_q6.js";import{_ as ge}from"./Grid-BNlat6r7.js";import{h as V}from"./permission-Dn1j-x2l.js";import{_ as ve}from"./Popconfirm-DSMr_7Fc.js";import{_ as we}from"./DataTable-C6XgD3bf.js";import"./table-column-setting.vue_vue_type_script_setup_true_lang-DNcfHKva.js";import"./setting-outlined-Cy2HY943.js";import"./round-delete-CvMTF8iX.js";import"./refresh-UThiTZoh.js";import"./round-plus-BCEww8i6.js";import"./Upload-CeGwRy84.js";import"./Progress-BrPKcu_X.js";import"./Forward-CbtUBMk5.js";const be=K({name:"OperateDrawer",__name:"operate-drawer",props:O({operateType:{},rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:O(["submitted"],["update:visible"]),setup(p,{emit:z}){const l=p,h=z,m=A(p,"visible"),{formRef:r,validate:b,restoreValidation:S}=q(),{defaultRequiredRule:y}=Y(),M=ee(()=>({add:"添加多元组",edit:"编辑多元组"})[l.operateType]),a=te(D());function D(){return{tname:"",sysparam:1}}const k={tname:y};function C(){Object.assign(a,D()),l.operateType==="edit"&&l.rowData&&Object.assign(a,l.rowData)}function g(){m.value=!1}async function i(){var v,c;if(await b(),l.operateType==="add"){const{data:x,error:d}=await ce([{tname:a.tname,sysparam:a.sysparam}]);d||((v=window.$message)==null||v.success(u("common.addSuccess")),g(),h("submitted"))}else{const{data:x,error:d}=await me([{id:l.rowData.id,tname:a.tname,sysparam:a.sysparam}]);d||((c=window.$message)==null||c.success(u("common.updateSuccess")),g(),h("submitted"))}}return oe(m,()=>{m.value&&(C(),S())}),(v,c)=>{const x=H,d=ne,R=W,N=G,T=Z,s=ae,n=se,_=B("no-space");return P(),E(n,{show:m.value,"onUpdate:show":c[1]||(c[1]=w=>m.value=w),"display-directive":"show",width:360},{default:o(()=>[e(s,{title:M.value,"native-scrollbar":!1,closable:""},{footer:o(()=>[e(T,{size:16},{default:o(()=>[e(N,{onClick:g},{default:o(()=>[F(I(t(u)("common.cancel")),1)]),_:1}),e(N,{type:"primary",onClick:i},{default:o(()=>[F(I(t(u)("common.confirm")),1)]),_:1})]),_:1})]),default:o(()=>[e(R,{ref_key:"formRef",ref:r,model:a,rules:k,onKeyup:L(i,["enter"])},{default:o(()=>[e(d,{label:"名称",path:"tname"},{default:o(()=>[U(e(x,{value:a.tname,"onUpdate:value":c[0]||(c[0]=w=>a.tname=w),placeholder:"请输入名称",clearable:""},null,8,["value"]),[[_]])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])]),_:1},8,["show"])}}}),De=K({name:"FormSearch",__name:"form-search",props:{model:{required:!0},modelModifiers:{}},emits:O(["reset","search"],["update:model"]),setup(p,{emit:z}){const l=z,{formRef:h,restoreValidation:m}=q(),r=A(p,"model");function b(){r.value.fuzzy="",l("search")}async function S(){await m(),l("reset")}async function y(){l("search")}return(M,a)=>{const D=H,k=ye,C=he,g=G,i=fe,v=Z,c=ge,x=W,d=J,R=B("no-space");return P(),E(d,{bordered:!1,size:"small",class:"card-wrapper"},{default:o(()=>[e(x,{ref_key:"formRef",ref:h,model:r.value,"label-placement":"left","label-width":100,"show-feedback":!1,onKeyup:L(y,["enter"])},{default:o(()=>[e(c,{responsive:"screen","item-responsive":""},{default:o(()=>[e(k,{span:"24 s:12 m:6",label:"名称",path:"fuzzy",class:"pr-24px"},{default:o(()=>[U(e(D,{clearable:"",value:r.value.fuzzy,"onUpdate:value":a[0]||(a[0]=N=>r.value.fuzzy=N),placeholder:"请输入名称",onClear:b},null,8,["value"]),[[R]])]),_:1}),e(k,{span:"24 m:12",class:"pr-24px"},{default:o(()=>[e(v,{class:"w-full"},{default:o(()=>[e(g,{onClick:S},{icon:o(()=>[e(C,{class:"text-icon"})]),default:o(()=>[F(" "+I(t(u)("common.reset")),1)]),_:1}),e(g,{type:"primary",ghost:"",onClick:y},{icon:o(()=>[e(i,{class:"text-icon"})]),default:o(()=>[F(" "+I(t(u)("common.search")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})}}}),ke={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function j(p){return typeof p=="function"||Object.prototype.toString.call(p)==="[object Object]"&&!ie(p)}const Ae=K({name:"manage_multipegroup",__name:"index",setup(p){const z=le(),{columns:l,columnChecks:h,data:m,getData:r,loading:b,mobilePagination:S,searchParams:y,resetSearchParams:M}=de({apiFn:ue,immediate:!0,apiParams:{page:1,pageSize:20,limit:20,fuzzy:null,_t:new Date().getTime()},columns:()=>[{type:"selection",align:"center",width:48,disabled:s=>s.sysparam==0},{key:"tname",title:"名称",align:"center",minWidth:160,ellipsis:{tooltip:!0}},{key:"operate",title:u("common.operate"),align:"center",width:160,render:s=>{let n;return s.sysparam!=0?e("div",{class:"flex-center gap-8px"},[U(e(G,{type:"primary",ghost:!0,size:"small",onClick:()=>N(s.id)},j(n=u("common.edit"))?n:{default:()=>[n]}),[[B("no-auth"),"sys.multiple.update"]]),e(ve,{onPositiveClick:()=>R(s.id)},{default:()=>u("common.confirmDelete"),trigger:()=>{let _;return U(e(G,{type:"error",ghost:!0,size:"small"},j(_=u("common.delete"))?_:{default:()=>[_]}),[[B("no-auth"),"sys.multiple.delete"]])}})]):null}}]}),{drawerVisible:a,operateType:D,editingData:k,handleAdd:C,handleEdit:g,checkedRowKeys:i,onBatchDeleted:v,onDeleted:c,closeDrawer:x}=_e(m,r);async function d(){console.log(i.value),T(i.value,s=>{v()})}function R(s){console.log(s),T([s],n=>{c()})}function N(s){g(s)}async function T(s,n){const{data:_,error:w}=await pe(s);if(!w)n&&n(_);else return!1}return(s,n)=>{const _=X,w=we,Q=J;return P(),re("div",ke,[e(De,{model:t(y),"onUpdate:model":n[0]||(n[0]=f=>$(y)?y.value=f:null),onReset:t(M),onSearch:t(r)},null,8,["model","onReset","onSearch"]),e(Q,{title:"多元组列表",bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper"},{"header-extra":o(()=>[e(_,{columns:t(h),"onUpdate:columns":n[1]||(n[1]=f=>$(h)?h.value=f:null),"disabled-delete":t(i).length===0,loading:t(b),onAdd:t(C),onDelete:d,onRefresh:t(r),"is-view-add-button":t(V)("sys.multiple.insert"),"is-view-delete-button":t(V)("sys.multiple.delete")},null,8,["columns","disabled-delete","loading","onAdd","onRefresh","is-view-add-button","is-view-delete-button"])]),default:o(()=>[e(w,{"checked-row-keys":t(i),"onUpdate:checkedRowKeys":n[2]||(n[2]=f=>$(i)?i.value=f:null),columns:t(l),data:t(m),size:"small","flex-height":!t(z).isMobile,"scroll-x":962,loading:t(b),remote:"","row-key":f=>f.id,pagination:t(S),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"]),e(be,{visible:t(a),"onUpdate:visible":n[3]||(n[3]=f=>$(a)?a.value=f:null),"operate-type":t(D),"row-data":t(k),onSubmitted:t(r)},null,8,["visible","operate-type","row-data","onSubmitted"])]),_:1})])}}});export{Ae as default};