import{_ as H}from"./table-column-setting.vue_vue_type_script_setup_true_lang-C-XAbW43.js";import{_ as J}from"./refresh-CYax9t1N.js";import{d as I,q as Q,a0 as K,v as X,s as Z,L as N,o as D,c as U,w as a,g as e,M as b,i as t,$ as p,V as ee,h as i,t as j,N as te,A as ae,Y as se,B as f,E as G,D as oe,aa as q,an as ne,e as le,ad as T,b9 as re,ae as ie}from"./index-D04JbMW3.js";import{h as ce,i as me,j as ue}from"./common-D0gLO6r9.js";import{u as de,a as pe}from"./table-rw5TWla2.js";import{_ as _e}from"./round-search-4GzPbRV1.js";import{_ as fe}from"./round-refresh-Cksy35cT.js";import{C as ge,a as he}from"./common-CFFPx2-A.js";import{_ as ye}from"./FormItemGridItem-C_Tdnpx2.js";import{_ as ve}from"./Grid-CClg_PJ_.js";import{_ as S}from"./Popconfirm-BAazq7Q5.js";import{_ as we}from"./DataTable-D6P8SjIN.js";import"./setting-outlined-COG0XQfY.js";import"./Forward-CLXh4amU.js";const be=I({name:"FormSearch",__name:"form-search",props:{model:{required:!0},modelModifiers:{}},emits:Q(["reset","search"],["update:model"]),setup(_,{emit:$}){const g=$,h=K(),{formRef:k,restoreValidation:c}=X(),l=Z(_,"model");function A(){l.value.fuzzy=void 0,g("search")}async function y(){await c(),g("reset")}async function v(){g("search")}return(L,w)=>{const F=ae,x=ye,M=se,o=fe,R=f,V=_e,O=G,B=ve,z=oe,P=q,C=N("no-space");return D(),U(P,{bordered:!1,size:"small",class:"card-wrapper"},{default:a(()=>[e(z,{ref_key:"formRef",ref:k,model:l.value,"label-placement":"left","label-width":t(h).locale=="en-US"?120:100,"show-feedback":!1,onKeyup:te(v,["enter"])},{default:a(()=>[e(B,{responsive:"screen","item-responsive":""},{default:a(()=>[e(x,{span:"24 s:12 m:6",label:"告警名称",path:"fuzzy",class:"pr-24px"},{default:a(()=>[b(e(F,{autofocus:"",value:l.value.fuzzy,"onUpdate:value":w[0]||(w[0]=s=>l.value.fuzzy=s),placeholder:"请输入告警名称",clearable:"",onClear:A},null,8,["value"]),[[C]])]),_:1}),e(x,{span:"24 s:12 m:6",label:"告警状态",path:"status",class:"pr-24px"},{default:a(()=>[e(M,{filterable:"",clearable:"",placeholder:t(p)("page.manage.alarm.form.status"),value:l.value.status,"onUpdate:value":[w[1]||(w[1]=s=>l.value.status=s),v],options:t(ee)(t(ge))},null,8,["placeholder","value","options"])]),_:1}),e(x,{span:"24 s:12 m:6",class:"pr-24px"},{default:a(()=>[e(O,{class:"w-full flex items-center"},{default:a(()=>[e(R,{onClick:y},{icon:a(()=>[e(o,{class:"text-icon"})]),default:a(()=>[i(" "+j(t(p)("common.reset")),1)]),_:1}),e(R,{type:"primary",ghost:"",onClick:v},{icon:a(()=>[e(V,{class:"text-icon"})]),default:a(()=>[i(" "+j(t(p)("common.search")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model","label-width"])]),_:1})}}}),ke={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function xe(_){return typeof _=="function"||Object.prototype.toString.call(_)==="[object Object]"&&!ie(_)}const Me=I({name:"platformalarm_systemalarm",__name:"index",setup(_){const $=K(),{columns:g,columnChecks:h,data:k,getData:c,loading:l,mobilePagination:A,searchParams:y,resetSearchParams:v}=de({apiFn:ce,immediate:!0,apiParams:{page:1,limit:20,status:null,fuzzy:null,_t:new Date().getTime()},columns:()=>[{type:"selection",align:"center",width:48,fixed:"left"},{key:"aname",title:"告警名称",align:"center",minWidth:120,ellipsis:{tooltip:!0}},{key:"uname",title:"用户",align:"center",width:100,render:s=>"系统"},{key:"status",title:p("page.manage.alarm.status"),align:"center",width:120,render:s=>{(s.status===void 0||s.status===null)&&(s.status=0);const n={0:"error",1:"success"},r=p(he[s.status]);return e(ne,{size:"small",type:n[s.status]},xe(r)?r:{default:()=>[r]})}},{key:"dbtime",title:"发生时间",align:"center",width:180},{key:"adec",title:"告警描述",align:"center",minWidth:160,ellipsis:{tooltip:!0}},{key:"operate",title:p("common.operate"),align:"center",width:130,fixed:"right",render:s=>e("div",{class:"flex-center gap-8px"},[s.status==0&&e(S,{onPositiveClick:()=>z(s.id+"")},{default:()=>"确定要确认该告警数据吗？",trigger:()=>b(e(f,{type:"primary",ghost:!0,size:"small"},{default:()=>[i("确认")]}),[[N("no-auth"),"sys.system.alarm.update"]])}),e(S,{onPositiveClick:()=>C(s.id+"")},{default:()=>"确定要删除该告警数据吗？",trigger:()=>b(e(f,{type:"error",ghost:!0,size:"small"},{default:()=>[i("删除")]}),[[N("no-auth"),"sys.system.alarm.delete"]])})])}]}),{drawerVisible:L,operateType:w,editingData:F,handleAdd:x,handleEdit:M,checkedRowKeys:o,onBatchDeleted:R,onDeleted:V,closeDrawer:O}=pe(k,c),B=()=>{z(o.value.join(","))},z=async s=>{var m,u;const{data:n,error:r}=await me({ids:s});r||(c(),(m=window.$message)==null||m.destroyAll(),(u=window.$message)==null||u.success("确认成功"),o.value=[])},P=()=>{C(o.value.join(","))},C=async s=>{var m,u;const{data:n,error:r}=await ue({ids:s});r||(c(),(m=window.$message)==null||m.destroyAll(),(u=window.$message)==null||u.success("删除成功"))};return(s,n)=>{const r=J,m=H,u=G,W=we,Y=q,E=N("no-auth");return D(),le("div",ke,[e(be,{model:t(y),"onUpdate:model":n[0]||(n[0]=d=>T(y)?y.value=d:null),onReset:t(v),onSearch:t(c)},null,8,["model","onReset","onSearch"]),e(Y,{title:"系统告警",bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper"},{"header-extra":a(()=>[e(u,null,{default:a(()=>[e(t(S),{onPositiveClick:B},{trigger:a(()=>[b((D(),U(t(f),{size:"small",ghost:"",type:"primary",disabled:t(o).length===0},{default:a(()=>[i(" 批量确认 ")]),_:1},8,["disabled"])),[[E,"sys.system.alarm.update"]])]),default:a(()=>[i(" 确定要确认选中的数据吗？ ")]),_:1}),e(t(S),{onPositiveClick:P},{trigger:a(()=>[b((D(),U(t(f),{size:"small",ghost:"",type:"error",disabled:t(o).length===0},{default:a(()=>[i(" 批量删除 ")]),_:1},8,["disabled"])),[[E,"sys.system.alarm.delete"]])]),default:a(()=>[i(" 确定要删除选中的数据吗？ ")]),_:1}),e(t(f),{size:"small",onClick:t(c)},{icon:a(()=>[e(r,{class:re(["text-icon",{"animate-spin":t(l)}])},null,8,["class"])]),default:a(()=>[i(" "+j(t(p)("common.refresh")),1)]),_:1},8,["onClick"]),e(m,{columns:t(h),"onUpdate:columns":n[1]||(n[1]=d=>T(h)?h.value=d:null)},null,8,["columns"])]),_:1})]),default:a(()=>[e(W,{"checked-row-keys":t(o),"onUpdate:checkedRowKeys":n[2]||(n[2]=d=>T(o)?o.value=d:null),columns:t(g),data:t(k),size:"small","flex-height":!t($).isMobile,"scroll-x":702,loading:t(l),remote:"","row-key":d=>d.id,pagination:t(A),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"])]),_:1})])}}});export{Me as default};