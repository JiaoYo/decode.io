import{_ as q}from"./table-header-operation.vue_vue_type_script_setup_true_lang-CDDQUP4x.js";import{d as E,q as L,v as O,s as j,L as H,o as F,c as J,w as e,g as t,M as $,h as a,t as r,i as n,$ as C,N as Q,A as X,B as M,E as Y,D as Z,aa as U,a0 as ee,j as te,r as ae,e as le,ad as I,f as oe,S as ne,F as se}from"./index-D04JbMW3.js";import{u as ie,a as re}from"./table-rw5TWla2.js";import{b as ce,c as pe}from"./vulnerability-BnIsQDxZ.js";import{_ as me}from"./round-search-4GzPbRV1.js";import{_ as ue}from"./round-refresh-Cksy35cT.js";import{_ as de}from"./FormItemGridItem-C_Tdnpx2.js";import{_ as _e}from"./Grid-CClg_PJ_.js";import{_ as fe}from"./DataTable-D6P8SjIN.js";import{_ as he,a as ye}from"./DescriptionsItem-CEEn3L9n.js";import"./table-column-setting.vue_vue_type_script_setup_true_lang-C-XAbW43.js";import"./setting-outlined-COG0XQfY.js";import"./export-xohM9oOk.js";import"./refresh-CYax9t1N.js";import"./round-delete-DnoxFC76.js";import"./round-plus-D-iVRuvp.js";import"./Upload-DxR1HQU_.js";import"./Progress-CUUUKddI.js";import"./Popconfirm-BAazq7Q5.js";import"./Forward-CLXh4amU.js";const ge=E({name:"FormSearch",__name:"form-search",props:{model:{required:!0},modelModifiers:{}},emits:L(["reset","search"],["update:model"]),setup(D,{emit:b}){const c=b,{formRef:l,restoreValidation:w}=O(),s=j(D,"model");function f(){s.value.fuzzy="",c("search")}function _(){s.value.leakTypeId=void 0,c("search")}async function h(){await w(),c("reset")}async function y(){c("search")}return(g,u)=>{const x=X,k=de,z=ue,N=M,S=me,d=Y,V=_e,B=Z,R=U,v=H("no-space");return F(),J(R,{bordered:!1,size:"small",class:"card-wrapper"},{default:e(()=>[t(B,{ref_key:"formRef",ref:l,model:s.value,"label-placement":"left","label-width":100,"show-feedback":!1,onKeyup:Q(y,["enter"])},{default:e(()=>[t(V,{responsive:"screen","item-responsive":""},{default:e(()=>[t(k,{span:"24 s:12 m:6",label:"漏洞编号",path:"fuzzy",class:"pr-24px"},{default:e(()=>[$(t(x,{clearable:"",value:s.value.fuzzy,"onUpdate:value":u[0]||(u[0]=p=>s.value.fuzzy=p),placeholder:"请输入漏洞编号",onClear:f},null,8,["value"]),[[v]])]),_:1}),t(k,{span:"24 s:12 m:6",label:"漏洞类型编号",path:"leakTypeId",class:"pr-24px"},{default:e(()=>[$(t(x,{clearable:"",value:s.value.leakTypeId,"onUpdate:value":u[1]||(u[1]=p=>s.value.leakTypeId=p),placeholder:"请输入漏洞类型编号",onClear:_},null,8,["value"]),[[v]])]),_:1}),t(k,{span:"24 m:6",class:"pr-24px"},{default:e(()=>[t(d,{class:"w-full"},{default:e(()=>[t(N,{onClick:h},{icon:e(()=>[t(z,{class:"text-icon"})]),default:e(()=>[a(" "+r(n(C)("common.reset")),1)]),_:1}),t(N,{type:"primary",ghost:"",onClick:y},{icon:e(()=>[t(S,{class:"text-icon"})]),default:e(()=>[a(" "+r(n(C)("common.search")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})}}}),ke={class:"min-h-500px flex-col-stretch gap-16px overflow-auto lt-sm:overflow-auto"},ve=oe("hr",{style:{"border-color":"#ccc","margin-bottom":"20px"}},null,-1),Ke=E({name:"knowledgebase_cvevulnerabilitydatabase",__name:"index",setup(D){const b=ee(),c=te(!1),l=ae({cveId:"",leakName:"",leakTypeId:"",leakTypeName:"",time:"",score:"",comment:""}),{columns:w,columnChecks:s,data:f,getData:_,loading:h,mobilePagination:y,searchParams:g,resetSearchParams:u}=ie({apiFn:ce,immediate:!0,apiParams:{page:1,pageSize:20,limit:20,leakTypeId:null,fuzzy:null,_t:new Date().getTime()},columns:()=>[{key:"cveId",title:"漏洞编号",align:"center",minWidth:180,fixed:"left",ellipsis:{tooltip:!0}},{key:"leakName",title:"漏洞名称",align:"center",minWidth:180,ellipsis:{tooltip:!0}},{key:"leakTypeId",title:"漏洞类型编号",align:"center",minWidth:180,ellipsis:{tooltip:!0}},{key:"leakTypeName",title:"漏洞类型名称",align:"center",minWidth:180,ellipsis:{tooltip:!0}},{key:"time",title:"披露时间",align:"center",minWidth:180,ellipsis:{tooltip:!0}},{key:"score",title:"评分",align:"center",minWidth:180,ellipsis:{tooltip:!0}},{key:"operate",title:C("common.operate"),align:"center",width:80,fixed:"right",render:p=>t("div",{class:"flex-center gap-8px"},[t(M,{type:"primary",ghost:!0,size:"small",onClick:()=>v(p)},{default:()=>[a("详情")]})])}]}),{drawerVisible:x,operateType:k,editingData:z,handleAdd:N,handleEdit:S,checkedRowKeys:d,onBatchDeleted:V,onDeleted:B,closeDrawer:R}=re(f,_);async function v(p){const{data:o,error:T}=await pe({id:p.id});T||(l.cveId=o.cveId,l.leakName=o.leakName,l.leakTypeId=o.leakTypeId,l.leakTypeName=o.leakTypeName,l.time=o.time,l.score=o.score,l.comment=o.comment,c.value=!0)}return(p,o)=>{const T=q,W=fe,G=U,m=he,K=ye,P=ne,A=se;return F(),le("div",ke,[t(ge,{model:n(g),"onUpdate:model":o[0]||(o[0]=i=>I(g)?g.value=i:null),onReset:n(u),onSearch:n(_)},null,8,["model","onReset","onSearch"]),t(G,{title:"CVE漏洞库",bordered:!1,size:"small",class:"sm:flex-1-hidden"},{"header-extra":e(()=>[t(T,{columns:n(s),"onUpdate:columns":o[1]||(o[1]=i=>I(s)?s.value=i:null),"disabled-delete":n(d).length===0,loading:n(h),onRefresh:n(_)},null,8,["columns","disabled-delete","loading","onRefresh"])]),default:e(()=>[t(W,{"checked-row-keys":n(d),"onUpdate:checkedRowKeys":o[2]||(o[2]=i=>I(d)?d.value=i:null),columns:n(w),data:n(f),size:"small","flex-height":!n(b).isMobile,"scroll-x":962,loading:n(h),remote:"","row-key":i=>i.id,pagination:n(y),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"])]),_:1}),t(A,{show:c.value,"onUpdate:show":o[3]||(o[3]=i=>c.value=i),title:"CVE漏洞库详情",preset:"card",class:"w-800px"},{default:e(()=>[ve,t(P,{class:"h-480px pr-20px"},{default:e(()=>[t(K,{"label-placement":"left",bordered:"",column:1,"label-style":{width:"120px"}},{default:e(()=>[t(m,null,{label:e(()=>[a(" 漏洞编号 ")]),default:e(()=>[a(" "+r(l.cveId),1)]),_:1}),t(m,null,{label:e(()=>[a(" 漏洞名称 ")]),default:e(()=>[a(" "+r(l.leakName),1)]),_:1}),t(m,null,{label:e(()=>[a(" 漏洞类型编号 ")]),default:e(()=>[a(" "+r(l.leakTypeId),1)]),_:1}),t(m,null,{label:e(()=>[a(" 漏洞类型名称 ")]),default:e(()=>[a(" "+r(l.leakTypeName),1)]),_:1}),t(m,null,{label:e(()=>[a(" 披露时间 ")]),default:e(()=>[a(" "+r(l.time),1)]),_:1}),t(m,null,{label:e(()=>[a(" 评分 ")]),default:e(()=>[a(" "+r(l.score),1)]),_:1}),t(m,null,{label:e(()=>[a(" 描述 ")]),default:e(()=>[a(" "+r(l.comment),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])])}}});export{Ke as default};