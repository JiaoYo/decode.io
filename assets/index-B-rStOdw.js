import{d as w,q as B,s as O,o as S,c as $,w as o,g as t,i as e,$ as a,V as M,dt as A,h as x,t as v,N as I,A as L,Y as V,B as j,E as F,D as G,aa as k,a0 as P,du as R,an as U,e as W,ad as q,ae as E}from"./index-D9ckJfvI.js";import{a as K}from"./system-log-DnB6iStH.js";import{u as Y}from"./table-BzK_yt5D.js";import{_ as H}from"./round-search-QS96-CAM.js";import{_ as J}from"./round-refresh-Blp56d1M.js";import{_ as Q}from"./FormItemGridItem-dtX_Nnt9.js";import{_ as X}from"./Grid-BFBI31I0.js";import{_ as Z}from"./DataTable-DpiD5dti.js";import"./Forward-TtYXo8W_.js";const ee=w({name:"LoginlogSearch",__name:"loginlog-search",props:{model:{required:!0},modelModifiers:{}},emits:B(["reset","search"],["update:model"]),setup(p,{emit:d}){const u=d,i=O(p,"model");function f(s){i.value.creatorName=s.replace(/\s/g,"")}function h(s){return!s.startsWith(" ")&&!s.endsWith(" ")}function _(){u("reset")}function g(){u("search")}return(s,m)=>{const l=L,n=Q,c=V,y=J,r=j,b=H,C=F,z=X,D=G,T=k;return S(),$(T,{bordered:!1,size:"small",class:"card-wrapper"},{default:o(()=>[t(D,{model:i.value,"label-placement":"left","label-width":80,"show-feedback":!1,onKeyup:I(g,["enter"])},{default:o(()=>[t(z,{responsive:"screen","item-responsive":""},{default:o(()=>[t(n,{span:"24 s:12 m:6",label:e(a)("page.systemlog.login.creatorName"),path:"creatorName",class:"pr-24px"},{default:o(()=>[t(l,{clearable:"",value:i.value.creatorName,"onUpdate:value":m[0]||(m[0]=N=>i.value.creatorName=N),placeholder:e(a)("page.systemlog.login.form.creatorName"),onInput:f,"allow-input":h,onClear:_},null,8,["value","placeholder"])]),_:1},8,["label"]),t(n,{span:"24 s:12 m:6",label:e(a)("page.systemlog.login.status"),path:"status",class:"pr-24px"},{default:o(()=>[t(c,{filterable:"",clearable:"",value:i.value.status,"onUpdate:value":[m[1]||(m[1]=N=>i.value.status=N),g],placeholder:e(a)("page.systemlog.login.form.status"),options:e(M)(e(A)),onClear:_},null,8,["value","placeholder","options"])]),_:1},8,["label"]),t(n,{span:"24 s:12 m:6"},{default:o(()=>[t(C,{class:"w-full"},{default:o(()=>[t(r,{onClick:_},{icon:o(()=>[t(y,{class:"text-icon"})]),default:o(()=>[x(" "+v(e(a)("common.reset")),1)]),_:1}),t(r,{type:"primary",ghost:"",onClick:g},{icon:o(()=>[t(b,{class:"text-icon"})]),default:o(()=>[x(" "+v(e(a)("common.search")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})}}}),te={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function ae(p){return typeof p=="function"||Object.prototype.toString.call(p)==="[object Object]"&&!E(p)}const ue=w({name:"logmanage_loginlog",__name:"index",setup(p){const d=P(),{columns:u,columnChecks:i,data:f,getData:h,loading:_,pagination:g,searchParams:s,resetSearchParams:m}=Y({apiFn:K,immediate:!0,apiParams:{page:1,pageSize:20,limit:20,creatorName:null,status:null,_t:new Date().getTime()},columns:()=>[{key:"creatorName",title:a("page.systemlog.login.creatorName"),align:"center",width:160,resizable:!0},{key:"operation",title:a("page.systemlog.login.operation"),width:140,align:"center",render:l=>{const n=l.operation==0?a("page.manage.common.loginStatus.login"):a("page.manage.common.loginStatus.logout");return t("span",null,[n])},resizable:!0},{key:"status",title:a("page.systemlog.login.status"),width:100,align:"center",render:l=>{l.status==null&&(l.status=0);const n={0:"error",1:"success",2:"info",3:"info",4:"info",5:"info"},c=a(R[l.status].label);return t(U,{size:"small",type:n[l.status]},ae(c)?c:{default:()=>[c]})},resizable:!0},{key:"ip",title:a("page.systemlog.login.ip"),width:160,align:"center",resizable:!0},{key:"userAgent",title:a("page.systemlog.login.userAgent"),minWidth:400,align:"center",ellipsis:{tooltip:!0},resizable:!0},{key:"createDate",title:a("page.systemlog.login.createDate"),width:160,align:"center"}]});return(l,n)=>{const c=Z,y=k;return S(),W("div",te,[t(ee,{model:e(s),"onUpdate:model":n[0]||(n[0]=r=>q(s)?s.value=r:null),onReset:e(m),onSearch:e(h)},null,8,["model","onReset","onSearch"]),t(y,{title:e(a)("page.systemlog.login.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper"},{default:o(()=>[t(c,{columns:e(u),data:e(f),size:"small","flex-height":!e(d).isMobile,"scroll-x":e(u).reduce((r,b)=>r+b.width,0),loading:e(_),remote:"","row-key":r=>r.id,pagination:e(g),class:"sm:h-full"},null,8,["columns","data","flex-height","scroll-x","loading","row-key","pagination"])]),_:1},8,["title"])])}}});export{ue as default};