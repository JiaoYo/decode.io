import{_ as ie}from"./table-header-operation.vue_vue_type_script_setup_true_lang-CDDQUP4x.js";import{d as E,q as A,s as Y,v as J,x as re,b as se,r as pe,y as ce,L as M,o as K,c as Q,w as n,g as t,h as O,t as F,i as a,$ as f,N as X,M as V,V as Z,ao as j,ap as H,A as ee,C as ue,Y as te,D as oe,B as q,E as G,ab as de,ac as me,aa as ae,a0 as _e,an as fe,j as ve,K as ye,e as ge,ad as B,ae as he}from"./index-D04JbMW3.js";import{u as be,a as we}from"./table-rw5TWla2.js";import{e as Ne,g as ke,h as De,i as Se,j as xe}from"./Collection-DxhgSdWm.js";import{b as le,T as Ce}from"./collection-C2jT5FyC.js";import{_ as Pe}from"./round-search-4GzPbRV1.js";import{_ as Ie}from"./round-refresh-Cksy35cT.js";import{_ as Te}from"./FormItemGridItem-C_Tdnpx2.js";import{_ as Re}from"./Grid-CClg_PJ_.js";import{h as W}from"./permission-s6JZ8sUF.js";import{_ as ze}from"./Popconfirm-BAazq7Q5.js";import{_ as Ue}from"./DataTable-D6P8SjIN.js";import"./table-column-setting.vue_vue_type_script_setup_true_lang-C-XAbW43.js";import"./setting-outlined-COG0XQfY.js";import"./export-xohM9oOk.js";import"./refresh-CYax9t1N.js";import"./round-delete-DnoxFC76.js";import"./round-plus-D-iVRuvp.js";import"./Upload-DxR1HQU_.js";import"./Progress-CUUUKddI.js";import"./Forward-CLXh4amU.js";const $e=E({name:"OperateDrawer",__name:"operate-drawer",props:A({operateType:{},rowData:{},tTypeList:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:A(["submitted"],["update:visible"]),setup(g,{emit:T}){const u=g,b=T,v=Y(g,"visible"),{formRef:p,validate:P,restoreValidation:R}=J(),{createConfirmPwdRule:S,defaultRequiredRule:z,patternRules:x}=re(),w=se(()=>({add:"新增策略",edit:"编辑策略"})[u.operateType]),e=pe(N());function N(){return{id:void 0,pname:"",llevel:[],etype:[],oriip:"",aimip:"",cdesc:""}}const U={pname:z,oriip:{type:"string",required:!0,validator:(h,o)=>!j(o[0])||!j(o[1])?new Error("请输入正确的IP"):!0,trigger:["input","blur"]},aimip:{type:"string",required:!0,validator:(h,o)=>!j(o[0])||!j(o[1])?new Error("请输入正确的IP"):!0,trigger:["input","blur"]},llevel:{type:"array",required:!0,trigger:["blur","change"],message:"请选择日志级别"},etype:{type:"array",required:!0,trigger:["blur","change"],message:"请选择事件类型"}};function y(){Object.assign(e,N()),u.operateType==="edit"&&u.rowData&&(Object.assign(e,u.rowData),e.oriip=e.oriip.split("-"),e.aimip=e.aimip.split("-"),e.llevel=e.llevel.split(",").map(Number),e.etype=e.etype.split(",").map(Number))}function k(){v.value=!1}async function I(){var h,o,m,d;if(await P(),H(e.oriip[0],e.oriip[1])!=-1)return(h=window.$message)==null?void 0:h.error("源起始IP不能大于源结束IP");if(H(e.aimip[0],e.aimip[1])!=-1)return(o=window.$message)==null?void 0:o.error("目的起始IP不能大于目的结束IP");if(e.oriip=e.oriip.join("-"),e.aimip=e.aimip.join("-"),e.llevel=e.llevel.join(","),e.etype=e.etype.join(","),u.operateType==="add"){const{data:D,error:_}=await Ne([e]);_||((m=window.$message)==null||m.success(f("common.addSuccess")),k(),b("submitted"))}else{const{data:D,error:_}=await ke([e]);_||((d=window.$message)==null||d.success(f("common.updateSuccess")),k(),b("submitted"))}}return ce(v,()=>{v.value&&(y(),R())}),(h,o)=>{const m=ee,d=ue,D=te,_=oe,$=q,r=G,l=de,c=me,C=M("no-space");return K(),Q(c,{show:v.value,"onUpdate:show":o[6]||(o[6]=i=>v.value=i),"display-directive":"show",width:360},{default:n(()=>[t(l,{title:w.value,"native-scrollbar":!1,closable:""},{footer:n(()=>[t(r,{size:16},{default:n(()=>[t($,{onClick:k},{default:n(()=>[O(F(a(f)("common.cancel")),1)]),_:1}),t($,{type:"primary",onClick:I},{default:n(()=>[O(F(a(f)("common.confirm")),1)]),_:1})]),_:1})]),default:n(()=>[t(_,{ref_key:"formRef",ref:p,model:e,rules:U,onKeyup:X(I,["enter"])},{default:n(()=>[t(d,{label:"策略名称",path:"pname"},{default:n(()=>[V(t(m,{value:e.pname,"onUpdate:value":o[0]||(o[0]=i=>e.pname=i),placeholder:"请输入策略名称",clearable:""},null,8,["value"]),[[C]])]),_:1}),t(d,{label:"日志级别",path:"llevel"},{default:n(()=>[t(D,{value:e.llevel,"onUpdate:value":o[1]||(o[1]=i=>e.llevel=i),multiple:"",placeholder:"请选择日志级别",options:a(Z)(a(le))},null,8,["value","options"])]),_:1}),t(d,{label:"事件类型",path:"etype"},{default:n(()=>[t(D,{value:e.etype,"onUpdate:value":o[2]||(o[2]=i=>e.etype=i),multiple:"",placeholder:"请选择日志级别","value-field":"id","label-field":"pname",options:u.tTypeList},null,8,["value","options"])]),_:1}),t(d,{label:"源IP",path:"oriip"},{default:n(()=>[t(m,{pair:"",separator:"-",value:e.oriip,"onUpdate:value":o[3]||(o[3]=i=>e.oriip=i),placeholder:["源起始IP","源终止IP"],clearable:""},null,8,["value"])]),_:1}),t(d,{label:"目的IP",path:"aimip"},{default:n(()=>[t(m,{pair:"",separator:"-",value:e.aimip,"onUpdate:value":o[4]||(o[4]=i=>e.aimip=i),placeholder:["目的起始IP","目的终止IP"],clearable:""},null,8,["value"])]),_:1}),t(d,{label:"描述",path:"cdesc"},{default:n(()=>[t(m,{type:"textarea",value:e.cdesc,"onUpdate:value":o[5]||(o[5]=i=>e.cdesc=i),placeholder:"请输入描述",clearable:""},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])]),_:1},8,["show"])}}}),je=E({name:"FormSearch",__name:"form-search",props:{model:{required:!0},modelModifiers:{}},emits:A(["reset","search"],["update:model"]),setup(g,{emit:T}){const u=T,{formRef:b,restoreValidation:v}=J(),p=Y(g,"model");function P(){p.value.fuzzy="",u("search")}async function R(){await v(),u("reset")}async function S(){u("search")}function z(x){p.value.llevel=x,u("search")}return(x,w)=>{const e=ee,N=Te,U=te,y=Ie,k=q,I=Pe,h=G,o=Re,m=oe,d=ae,D=M("no-space");return K(),Q(d,{bordered:!1,size:"small",class:"card-wrapper"},{default:n(()=>[t(m,{ref_key:"formRef",ref:b,model:p.value,"label-placement":"left","label-width":100,"show-feedback":!1,onKeyup:X(S,["enter"])},{default:n(()=>[t(o,{responsive:"screen","item-responsive":""},{default:n(()=>[t(N,{span:"24 s:12 m:6",label:"策略名称",path:"fuzzy",class:"pr-24px"},{default:n(()=>[V(t(e,{clearable:"",value:p.value.fuzzy,"onUpdate:value":w[0]||(w[0]=_=>p.value.fuzzy=_),placeholder:"请输入策略名称",onClear:P},null,8,["value"]),[[D]])]),_:1}),t(N,{span:"24 s:12 m:6",label:"日志级别",path:"llevel",class:"pr-24px"},{default:n(()=>[t(U,{clearable:"",filterable:"",value:p.value.llevel,"onUpdate:value":w[1]||(w[1]=_=>p.value.llevel=_),placeholder:"请选择日志级别",options:a(Z)(a(le)),onUpdateValue:z,style:{width:"100%"}},null,8,["value","options"])]),_:1}),t(N,{span:"24 m:12",class:"pr-24px"},{default:n(()=>[t(h,{class:"w-full"},{default:n(()=>[t(k,{onClick:R},{icon:n(()=>[t(y,{class:"text-icon"})]),default:n(()=>[O(" "+F(a(f)("common.reset")),1)]),_:1}),t(k,{type:"primary",ghost:"",onClick:S},{icon:n(()=>[t(I,{class:"text-icon"})]),default:n(()=>[O(" "+F(a(f)("common.search")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})}}}),Be={class:"min-h-500px flex-col-stretch gap-16px overflow-auto lt-sm:overflow-auto"};function L(g){return typeof g=="function"||Object.prototype.toString.call(g)==="[object Object]"&&!he(g)}const lt=E({name:"collectionmanagement_collectionpolicy",__name:"index",setup(g){const T=_e(),{columns:u,columnChecks:b,data:v,getData:p,loading:P,mobilePagination:R,searchParams:S,resetSearchParams:z}=be({apiFn:De,apiParams:{page:1,pageSize:20,limit:20,fuzzy:null,llevel:null,_t:new Date().getTime()},immediate:!0,columns:()=>[{type:"selection",align:"center",width:48},{key:"pname",title:"策略名称",align:"center",width:140},{key:"llevel",title:"日志级别",align:"center",width:300,render:r=>{let l;const c=r.llevel.split(",").map(Number),C={0:"default",1:"success",2:"info",3:"warning",4:"error"};return t(G,{justify:"center"},L(l=c.map(i=>{const s=f(Ce[i]);return t(fe,{type:C[i]},L(s)?s:{default:()=>[s]})}))?l:{default:()=>[l]})}},{key:"etype",title:"事件类型",align:"center",render:r=>{const l=r.etype.split(",").map(Number);return t("span",null,[l.map((c,C)=>{var s;const i=(s=o.value.find(ne=>ne.id===c))==null?void 0:s.pname;return i?`${i}${C!==l.length-1?"，":""}`:""})])},ellipsis:{tooltip:!0,tooltipPlacement:"top"}},{key:"oriip",title:"源IP",align:"center"},{key:"aimip",title:"目的IP",align:"center"},{key:"cdesc",title:"描述",align:"center",minWidth:200},{key:"operate",title:f("common.operate"),align:"center",width:130,render:r=>{let l;return t("div",{class:"flex-center gap-8px"},[V(t(q,{type:"primary",ghost:!0,size:"small",onClick:()=>_(r.id)},L(l=f("common.edit"))?l:{default:()=>[l]}),[[M("no-auth"),"sys.collection.policy.update"]]),t(ze,{onPositiveClick:()=>D(r.id)},{default:()=>f("common.confirmDelete"),trigger:()=>{let c;return V(t(q,{type:"error",ghost:!0,size:"small"},L(c=f("common.delete"))?c:{default:()=>[c]}),[[M("no-auth"),"sys.collection.policy.delete"]])}})])}}]}),{drawerVisible:x,operateType:w,editingData:e,handleAdd:N,handleEdit:U,checkedRowKeys:y,onBatchDeleted:k,onDeleted:I,closeDrawer:h}=we(v,p),o=ve([]),m=async()=>{const{data:r,error:l}=await xe();o.value=r};async function d(){console.log(y.value),$(y.value.join(","),r=>{k()})}function D(r){console.log(r),$(r,l=>{I()})}function _(r){U(r)}async function $(r,l){const c=await Se(r);console.log("data",c),l&&l(c)}return ye(()=>{m()}),(r,l)=>{const c=ie,C=Ue,i=ae;return K(),ge("div",Be,[t(je,{model:a(S),"onUpdate:model":l[0]||(l[0]=s=>B(S)?S.value=s:null),onReset:a(z),onSearch:a(p)},null,8,["model","onReset","onSearch"]),t(i,{title:"采集过滤策略",bordered:!1,size:"small",class:"sm:flex-1-hidden"},{"header-extra":n(()=>[t(c,{columns:a(b),"onUpdate:columns":l[1]||(l[1]=s=>B(b)?b.value=s:null),"disabled-delete":a(y).length===0,"is-view-add-button":a(W)("sys.collection.policy.insert"),"is-view-delete-button":a(W)("sys.collection.policy.delete"),loading:a(P),onAdd:a(N),onDelete:d,onRefresh:a(p)},null,8,["columns","disabled-delete","is-view-add-button","is-view-delete-button","loading","onAdd","onRefresh"])]),default:n(()=>[t(C,{"checked-row-keys":a(y),"onUpdate:checkedRowKeys":l[2]||(l[2]=s=>B(y)?y.value=s:null),columns:a(u),data:a(v),size:"small","flex-height":!a(T).isMobile,"scroll-x":962,loading:a(P),remote:"","row-key":s=>s.id,pagination:a(R),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"]),t($e,{visible:a(x),"onUpdate:visible":l[3]||(l[3]=s=>B(x)?x.value=s:null),"operate-type":a(w),"row-data":a(e),tTypeList:o.value,onSubmitted:a(p)},null,8,["visible","operate-type","row-data","tTypeList","onSubmitted"])]),_:1})])}}});export{lt as default};