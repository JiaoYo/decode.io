import{d,u as _,r as f,a as x,b as h,o as v,e as B,f as g,g as o,w as y,h as k,t as N,i as s,$ as S,_ as U,B as $}from"./index-CTzTZfFu.js";const b={class:"size-full min-h-520px flex-col-center gap-24px overflow-hidden"},w={class:"flex text-400px text-primary"},R=d({name:"ExceptionBase",__name:"exception-base",props:{type:{}},setup(n){const r=_(),c=n,a=f({redirectUrl:(()=>{var e;return(e=r.userInfo.homePath)==null?void 0:e.replace("/","")})()}),{routerPush:i}=x(),p={403:"no-permission",404:"not-found",500:"service-error"},l=h(()=>p[c.type]);return(e,t)=>{const u=U,m=$;return v(),B("div",b,[g("div",w,[o(u,{"local-icon":l.value},null,8,["local-icon"])]),o(m,{type:"primary",onClick:t[0]||(t[0]=I=>s(i)("/"+a.redirectUrl||"/home"))},{default:y(()=>[k(N(s(S)("common.backToHome")),1)]),_:1})])}}});export{R as _};