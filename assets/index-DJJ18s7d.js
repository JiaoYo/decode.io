import{_ as Q}from"./table-header-operation.vue_vue_type_script_setup_true_lang-3WFkccas.js";import{d as P,q as j,s as E,v as G,x as X,b as Y,$ as o,r as ee,y as te,K as F,o as V,c as L,w as n,g as t,h as I,t as M,i as e,L as B,A as W,C as ae,aj as oe,D as H,B as O,E as Z,aa as ne,ab as se,M as le,a9 as J,Z as ie,e as re,ac as A,ad as pe}from"./index-Ddi2sB0k.js";import{p as ce,q as de,f as ue,r as me}from"./audit-events-BFXovt4i.js";import{u as _e,a as fe}from"./table-BPjc3v9J.js";import{_ as ye}from"./round-search-C_65O74k.js";import{_ as he}from"./round-refresh-yoRg4w0p.js";import{_ as ge}from"./FormItemGridItem-Doopd_q6.js";import{_ as ve}from"./Grid-BNlat6r7.js";import{h as K}from"./permission-Dn1j-x2l.js";import{_ as be}from"./Popconfirm-DSMr_7Fc.js";import{_ as we}from"./DataTable-C6XgD3bf.js";import"./table-column-setting.vue_vue_type_script_setup_true_lang-DNcfHKva.js";import"./setting-outlined-Cy2HY943.js";import"./round-delete-CvMTF8iX.js";import"./refresh-UThiTZoh.js";import"./round-plus-BCEww8i6.js";import"./Upload-CeGwRy84.js";import"./Progress-BrPKcu_X.js";import"./Forward-CbtUBMk5.js";const De=P({name:"OperateDrawer",__name:"operate-drawer",props:j({operateType:{},rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:j(["submitted"],["update:visible"]),setup(m,{emit:z}){const r=m,h=z,d=E(m,"visible"),{formRef:p,validate:D,restoreValidation:S}=G(),{defaultRequiredRule:g}=X(),U=Y(()=>({add:o("page.audit.type.addTitle"),edit:o("page.audit.type.editTitle")})[r.operateType]),a=ee(k());function k(){return{atypename:"",typedesc:"",asort:0,syspara:1}}const x={atypename:g};function C(){Object.assign(a,k()),r.operateType==="edit"&&r.rowData&&Object.assign(a,r.rowData)}function v(){d.value=!1}async function u(){var b,l;if(await D(),r.operateType==="add"){const{data:w,error:c}=await ce([{atypename:a.atypename,typedesc:a.typedesc,asort:a.asort,syspara:a.syspara}]);c||((b=window.$message)==null||b.success(o("common.addSuccess")),v(),h("submitted"))}else{const{data:w,error:c}=await de([{id:r.rowData.id,atypename:a.atypename,typedesc:a.typedesc,asort:a.asort,syspara:a.syspara}]);c||((l=window.$message)==null||l.success(o("common.updateSuccess")),v(),h("submitted"))}}return te(d,()=>{d.value&&(C(),S())}),(b,l)=>{const w=W,c=ae,T=oe,R=H,$=O,i=Z,s=ne,_=se,N=F("no-space");return V(),L(_,{show:d.value,"onUpdate:show":l[3]||(l[3]=f=>d.value=f),"display-directive":"show",width:360},{default:n(()=>[t(s,{title:U.value,"native-scrollbar":!1,closable:""},{footer:n(()=>[t(i,{size:16},{default:n(()=>[t($,{onClick:v},{default:n(()=>[I(M(e(o)("common.cancel")),1)]),_:1}),t($,{type:"primary",onClick:u},{default:n(()=>[I(M(e(o)("common.confirm")),1)]),_:1})]),_:1})]),default:n(()=>[t(R,{ref_key:"formRef",ref:p,model:a,rules:x},{default:n(()=>[t(c,{label:e(o)("page.audit.type.name"),path:"atypename"},{default:n(()=>[B(t(w,{clearable:"",value:a.atypename,"onUpdate:value":l[0]||(l[0]=f=>a.atypename=f),placeholder:e(o)("page.audit.type.form.name")},null,8,["value","placeholder"]),[[N]])]),_:1},8,["label"]),t(c,{label:e(o)("page.audit.type.describe"),path:"typedesc"},{default:n(()=>[B(t(w,{clearable:"",value:a.typedesc,"onUpdate:value":l[1]||(l[1]=f=>a.typedesc=f),placeholder:e(o)("page.audit.type.form.describe"),type:"textarea"},null,8,["value","placeholder"]),[[N]])]),_:1},8,["label"]),t(c,{label:e(o)("page.audit.type.sort"),path:"asort"},{default:n(()=>[t(T,{min:0,value:a.asort,"onUpdate:value":l[2]||(l[2]=f=>a.asort=f),placeholder:e(o)("page.audit.type.form.sort"),style:{width:"100%"}},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["title"])]),_:1},8,["show"])}}}),ke=P({name:"FormSearch",__name:"form-search",props:{model:{required:!0},modelModifiers:{}},emits:j(["reset","search"],["update:model"]),setup(m,{emit:z}){const r=z,{formRef:h,restoreValidation:d}=G(),p=E(m,"model");function D(){p.value.fuzzy="",r("search")}async function S(){await d(),r("reset")}async function g(){r("search")}return(U,a)=>{const k=W,x=ge,C=he,v=O,u=ye,b=Z,l=ve,w=H,c=J,T=F("no-space");return V(),L(c,{bordered:!1,size:"small",class:"card-wrapper"},{default:n(()=>[t(w,{ref_key:"formRef",ref:h,model:p.value,"label-placement":"left","label-width":100,"show-feedback":!1,onKeyup:le(g,["enter"])},{default:n(()=>[t(l,{responsive:"screen","item-responsive":""},{default:n(()=>[t(x,{span:"24 s:12 m:6",label:e(o)("page.audit.type.name"),path:"fuzzy",class:"pr-24px"},{default:n(()=>[B(t(k,{clearable:"",value:p.value.fuzzy,"onUpdate:value":a[0]||(a[0]=R=>p.value.fuzzy=R),placeholder:e(o)("page.audit.type.form.name"),onClear:D},null,8,["value","placeholder"]),[[T]])]),_:1},8,["label"]),t(x,{span:"24 m:12",class:"pr-24px"},{default:n(()=>[t(b,{class:"w-full"},{default:n(()=>[t(v,{onClick:S},{icon:n(()=>[t(C,{class:"text-icon"})]),default:n(()=>[I(" "+M(e(o)("common.reset")),1)]),_:1}),t(v,{type:"primary",ghost:"",onClick:g},{icon:n(()=>[t(u,{class:"text-icon"})]),default:n(()=>[I(" "+M(e(o)("common.search")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})}}}),xe={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function q(m){return typeof m=="function"||Object.prototype.toString.call(m)==="[object Object]"&&!pe(m)}const Ee=P({name:"audit_type",__name:"index",setup(m){const z=ie(),{columns:r,columnChecks:h,data:d,getData:p,loading:D,mobilePagination:S,searchParams:g,resetSearchParams:U}=_e({apiFn:ue,immediate:!0,apiParams:{page:1,pageSize:20,limit:20,fuzzy:null,_t:new Date().getTime()},columns:()=>[{type:"selection",align:"center",width:48},{key:"atypename",title:o("page.audit.type.name"),align:"center",minWidth:160,ellipsis:{tooltip:!0}},{key:"typedesc",title:o("page.audit.type.describe"),align:"center",minWidth:160,ellipsis:{tooltip:!0}},{key:"asort",title:o("page.audit.type.sort"),align:"center",width:120},{key:"operate",title:o("common.operate"),align:"center",width:130,render:i=>{let s;return i.syspara!=0?t("div",{class:"flex-center gap-8px"},[B(t(O,{type:"primary",ghost:!0,size:"small",onClick:()=>R(i.id)},q(s=o("common.edit"))?s:{default:()=>[s]}),[[F("no-auth"),"sys.audit.type.update"]]),t(be,{onPositiveClick:()=>T(i.id)},{default:()=>o("common.confirmDelete"),trigger:()=>{let _;return B(t(O,{type:"error",ghost:!0,size:"small"},q(_=o("common.delete"))?_:{default:()=>[_]}),[[F("no-auth"),"sys.audit.type.delete"]])}})]):null}}]}),{drawerVisible:a,operateType:k,editingData:x,handleAdd:C,handleEdit:v,checkedRowKeys:u,onBatchDeleted:b,onDeleted:l,closeDrawer:w}=fe(d,p);async function c(){console.log(u.value),$(u.value,i=>{b()})}function T(i){console.log(i),$([i],s=>{l()})}function R(i){v(i)}async function $(i,s){const{data:_,error:N}=await me(i);if(!N)s&&s(_);else return!1}return(i,s)=>{const _=Q,N=we,f=J;return V(),re("div",xe,[t(ke,{model:e(g),"onUpdate:model":s[0]||(s[0]=y=>A(g)?g.value=y:null),onReset:e(U),onSearch:e(p)},null,8,["model","onReset","onSearch"]),t(f,{title:e(o)("page.audit.type.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper"},{"header-extra":n(()=>[t(_,{columns:e(h),"onUpdate:columns":s[1]||(s[1]=y=>A(h)?h.value=y:null),"disabled-delete":e(u).length===0,loading:e(D),onAdd:e(C),onDelete:c,onRefresh:e(p),"is-view-delete-button":e(K)("sys.audit.type.delete"),"is-view-add-button":e(K)("sys.audit.type.insert")},null,8,["columns","disabled-delete","loading","onAdd","onRefresh","is-view-delete-button","is-view-add-button"])]),default:n(()=>[t(N,{"checked-row-keys":e(u),"onUpdate:checkedRowKeys":s[2]||(s[2]=y=>A(u)?u.value=y:null),columns:e(r),data:e(d),size:"small","flex-height":!e(z).isMobile,"scroll-x":962,loading:e(D),remote:"","row-key":y=>y.id,pagination:e(S),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"]),t(De,{visible:e(a),"onUpdate:visible":s[3]||(s[3]=y=>A(a)?a.value=y:null),"operate-type":e(k),"row-data":e(x),onSubmitted:e(p)},null,8,["visible","operate-type","row-data","onSubmitted"])]),_:1},8,["title"])])}}});export{Ee as default};