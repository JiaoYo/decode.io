import{d as x,o as k,c as M,w as o,g as e,h as b,t as S,i as r,$ as t,B as N,E as $,D as j,aa as v,a0 as z,j as w,e as E,ae as P,S as V,F}from"./index-D04JbMW3.js";import{f as T}from"./system-log-CJexK_pI.js";import{u as A}from"./table-rw5TWla2.js";import{_ as G}from"./round-search-4GzPbRV1.js";import{_ as L}from"./FormItemGridItem-C_Tdnpx2.js";import{_ as O}from"./Grid-CClg_PJ_.js";import{_ as U}from"./DataTable-D6P8SjIN.js";import"./Forward-CLXh4amU.js";const W=x({name:"ErrorSearch",__name:"errorlog-search",emits:["search"],setup(s,{emit:c}){const n=c;function l(){n("search")}return(f,C)=>{const p=G,m=N,_=$,u=L,h=O,y=j,g=v;return k(),M(g,{bordered:!1,size:"small",class:"card-wrapper"},{default:o(()=>[e(y,{"label-placement":"left","label-width":80,"show-feedback":!1},{default:o(()=>[e(h,{responsive:"screen","item-responsive":""},{default:o(()=>[e(u,{span:"24 s:12 m:6"},{default:o(()=>[e(_,{class:"w-full"},{default:o(()=>[e(m,{type:"primary",ghost:"",onClick:l},{icon:o(()=>[e(p,{class:"text-icon"})]),default:o(()=>[b(" "+S(r(t)("common.search")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),H={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function J(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!P(s)}const oe=x({name:"logmanage_errorlog",__name:"index",setup(s){const c=z(),n=w(!1),l=w({errorInfo:""}),{columns:f,columnChecks:C,data:p,getData:m,loading:_,pagination:u,searchParams:h,resetSearchParams:y}=A({apiFn:T,immediate:!0,apiParams:{page:1,pageSize:20,limit:20,_t:new Date().getTime()},columns:()=>[{key:"requestUri",title:t("page.systemlog.error.requestUri"),width:160,align:"center",ellipsis:{tooltip:!0}},{key:"requestMethod",title:t("page.systemlog.error.requestMethod"),width:100,align:"center"},{key:"requestParams",title:t("page.systemlog.error.requestParams"),width:140,align:"center",ellipsis:{tooltip:!0}},{key:"ip",title:t("page.systemlog.error.ip"),width:160,align:"center"},{key:"userAgent",title:t("page.systemlog.error.userAgent"),minWidth:240,align:"center",ellipsis:{tooltip:!0}},{key:"createDate",title:t("page.systemlog.error.createDate"),width:160,align:"center"},{key:"operate",title:t("common.operate"),align:"center",width:130,render:i=>{let a;return e("div",{class:"flex-center gap-8px"},[e(N,{type:"primary",ghost:!0,size:"small",onClick:()=>g(i)},J(a=t("page.systemlog.error.errorMsg"))?a:{default:()=>[a]})])}}]});function g(i){l.value.errorInfo=i.errorInfo,n.value=!0}return(i,a)=>{const D=U,I=v,q=V,B=F;return k(),E("div",H,[e(W,{onSearch:r(m)},null,8,["onSearch"]),e(I,{title:r(t)("page.systemlog.error.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper"},{default:o(()=>[e(D,{columns:r(f),data:r(p),size:"small","flex-height":!r(c).isMobile,"scroll-x":702,loading:r(_),remote:"","row-key":d=>d.id,pagination:r(u),class:"sm:h-full"},null,8,["columns","data","flex-height","loading","row-key","pagination"])]),_:1},8,["title"]),e(B,{show:n.value,"onUpdate:show":a[0]||(a[0]=d=>n.value=d),title:r(t)("page.systemlog.error.errorMsg"),preset:"card",class:"w-800px"},{default:o(()=>[e(q,{class:"h-480px pr-20px"},{default:o(()=>[b(S(l.value.errorInfo),1)]),_:1})]),_:1},8,["show","title"])])}}});export{oe as default};