import{_ as W}from"./table-header-operation.vue_vue_type_script_setup_true_lang-CDDQUP4x.js";import{d as P,q as U,s as I,v as K,x as X,b as Y,r as Z,y as ee,L,o as A,c as O,w as o,g as e,h as N,t as B,i as t,$ as k,N as V,M as G,A as j,C as oe,E as q,D as E,B as H,ab as te,ac as ae,aa as J,a0 as ne,e as se,ad as T}from"./index-D04JbMW3.js";import{u as le,a as re}from"./table-rw5TWla2.js";import{k as ie,l as ce,m as ue,n as me}from"./log-4mypCp_H.js";import{b as de,a as pe,_ as _e}from"./DataTable-D6P8SjIN.js";import{_ as fe}from"./round-search-4GzPbRV1.js";import{_ as ve}from"./round-refresh-Cksy35cT.js";import{_ as ge}from"./FormItemGridItem-C_Tdnpx2.js";import{_ as he}from"./Grid-CClg_PJ_.js";import"./table-column-setting.vue_vue_type_script_setup_true_lang-C-XAbW43.js";import"./setting-outlined-COG0XQfY.js";import"./export-xohM9oOk.js";import"./refresh-CYax9t1N.js";import"./round-delete-DnoxFC76.js";import"./round-plus-D-iVRuvp.js";import"./Upload-DxR1HQU_.js";import"./Progress-CUUUKddI.js";import"./Popconfirm-BAazq7Q5.js";import"./Forward-CLXh4amU.js";const we=P({name:"OperateDrawer",__name:"operate-drawer",props:U({operateType:{},rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:U(["submitted"],["update:visible"]),setup(x,{emit:R}){const l=x,d=R,u=I(x,"visible"),{formRef:r,validate:g,restoreValidation:z}=K(),{defaultRequiredRule:p}=X(),M=Y(()=>({add:"新增日志模块",edit:"编辑日志模块"})[l.operateType]),a=Z(h());function h(){return{id:void 0,llevel:"",sysparam:0}}const w={llevel:p};function C(){Object.assign(a,h()),l.operateType==="edit"&&l.rowData&&Object.assign(a,l.rowData)}function v(){u.value=!1}async function i(){var _,s;if(await g(),l.operateType==="add"){const{data:y,error:m}=await ie([a]);m||((_=window.$message)==null||_.success(k("common.addSuccess")),v(),d("submitted"))}else{const{data:y,error:m}=await ce([a]);m||((s=window.$message)==null||s.success(k("common.updateSuccess")),v(),d("submitted"))}}return ee(u,()=>{u.value&&(C(),z())}),(_,s)=>{const y=j,m=oe,b=de,f=q,n=pe,S=E,D=H,F=te,c=ae,Q=L("no-space");return A(),O(c,{show:u.value,"onUpdate:show":s[2]||(s[2]=$=>u.value=$),"display-directive":"show",width:360},{default:o(()=>[e(F,{title:M.value,"native-scrollbar":!1,closable:""},{footer:o(()=>[e(f,{size:16},{default:o(()=>[e(D,{onClick:v},{default:o(()=>[N(B(t(k)("common.cancel")),1)]),_:1}),e(D,{type:"primary",onClick:i},{default:o(()=>[N(B(t(k)("common.confirm")),1)]),_:1})]),_:1})]),default:o(()=>[e(S,{ref_key:"formRef",ref:r,model:a,rules:w,onKeyup:V(i,["enter"])},{default:o(()=>[e(m,{label:"名称",path:"llevel"},{default:o(()=>[G(e(y,{clearable:"",value:a.llevel,"onUpdate:value":s[0]||(s[0]=$=>a.llevel=$),placeholder:"请输入名称"},null,8,["value"]),[[Q]])]),_:1}),e(m,{label:"是否是系统参数"},{default:o(()=>[e(n,{value:a.sysparam,"onUpdate:value":s[1]||(s[1]=$=>a.sysparam=$),name:"radiogroup"},{default:o(()=>[e(f,null,{default:o(()=>[e(b,{value:0},{default:o(()=>[N("是")]),_:1}),e(b,{value:1},{default:o(()=>[N("否")]),_:1})]),_:1})]),_:1},8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])]),_:1},8,["show"])}}}),ye=P({name:"FormSearch",__name:"form-search",props:{model:{required:!0},modelModifiers:{}},emits:U(["reset","search"],["update:model"]),setup(x,{emit:R}){const l=R,{formRef:d,restoreValidation:u}=K(),r=I(x,"model");function g(){r.value.fuzzy=void 0,l("search")}async function z(){await u(),l("reset")}async function p(){l("search")}return(M,a)=>{const h=j,w=ge,C=ve,v=H,i=fe,_=q,s=he,y=E,m=J,b=L("no-space");return A(),O(m,{bordered:!1,size:"small",class:"card-wrapper"},{default:o(()=>[e(y,{ref_key:"formRef",ref:d,model:r.value,"label-placement":"left","label-width":80,"show-feedback":!1,onKeyup:V(p,["enter"])},{default:o(()=>[e(s,{responsive:"screen","item-responsive":""},{default:o(()=>[e(w,{span:"24 s:12 m:6",label:"名称",path:"fuzzy",class:"pr-24px"},{default:o(()=>[G(e(h,{clearable:"",value:r.value.fuzzy,"onUpdate:value":a[0]||(a[0]=f=>r.value.fuzzy=f),placeholder:"请输入名称关键字",onClear:g},null,8,["value"]),[[b]])]),_:1}),e(w,{span:"24  s:12 m:6",class:"pr-24px"},{default:o(()=>[e(_,{class:"w-full"},{default:o(()=>[e(v,{onClick:z},{icon:o(()=>[e(C,{class:"text-icon"})]),default:o(()=>[N(" "+B(t(k)("common.reset")),1)]),_:1}),e(v,{type:"primary",ghost:"",onClick:p},{icon:o(()=>[e(i,{class:"text-icon"})]),default:o(()=>[N(" "+B(t(k)("common.search")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})}}}),be={class:"min-h-500px flex-col-stretch gap-16px overflow-auto lt-sm:overflow-auto"},Oe=P({name:"logretrieval_logmodule",__name:"index",setup(x){const R=ne(),{columns:l,columnChecks:d,data:u,getData:r,loading:g,mobilePagination:z,searchParams:p,resetSearchParams:M}=le({apiFn:ue,immediate:!0,apiParams:{page:1,pageSize:20,limit:20,fuzzy:null,_t:new Date().getTime()},columns:()=>[{key:"llevel",title:"名称",align:"center"}]}),{drawerVisible:a,operateType:h,editingData:w,handleAdd:C,handleEdit:v,checkedRowKeys:i,onBatchDeleted:_,onDeleted:s,closeDrawer:y}=re(u,r);async function m(){console.log(i.value),b(i.value.join(","),f=>{_()})}async function b(f,n){const{data:S,error:D}=await me(f);if(!D)n&&n(S);else return!1}return(f,n)=>{const S=W,D=_e,F=J;return A(),se("div",be,[e(ye,{model:t(p),"onUpdate:model":n[0]||(n[0]=c=>T(p)?p.value=c:null),onReset:t(M),onSearch:t(r)},null,8,["model","onReset","onSearch"]),e(F,{title:"日志模块",bordered:!1,size:"small",class:"sm:flex-1-hidden"},{"header-extra":o(()=>[e(S,{columns:t(d),"onUpdate:columns":n[1]||(n[1]=c=>T(d)?d.value=c:null),"disabled-delete":t(i).length===0,loading:t(g),onAdd:t(C),onDelete:m,onRefresh:t(r)},null,8,["columns","disabled-delete","loading","onAdd","onRefresh"])]),default:o(()=>[e(D,{"checked-row-keys":t(i),"onUpdate:checkedRowKeys":n[2]||(n[2]=c=>T(i)?i.value=c:null),columns:t(l),data:t(u),size:"small","flex-height":!t(R).isMobile,"scroll-x":962,loading:t(g),remote:"","row-key":c=>c.id,pagination:t(z),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"]),e(we,{visible:t(a),"onUpdate:visible":n[3]||(n[3]=c=>T(a)?a.value=c:null),"operate-type":t(h),"row-data":t(w),onSubmitted:t(r)},null,8,["visible","operate-type","row-data","onSubmitted"])]),_:1})])}}});export{Oe as default};