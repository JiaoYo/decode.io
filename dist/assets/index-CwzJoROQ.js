import{o as x,b as $,e as U,d as O,Z as Y,N as W,p as ee,a0 as te,i as A,b8 as m,a3 as ne,c as oe,w as n,f as e,g as u,t as M,h as a,$ as ae,y as se,ac as B,a4 as le,B as V,E as H,F as ie,X as I,b$ as ce,aD as re,r as de,s as ue,c0 as me,c1 as pe,a9 as G}from"./index-m_y7kY8i.js";import{u as _e,a as fe}from"./table-BlvCRrlW.js";import{_ as he}from"./round-search-BLEh4X5h.js";import{c as ge}from"./common-CeEFUeLK.js";import{_ as ve}from"./FormItemGridItem-BpxcVmkE.js";import{_ as be}from"./DatePicker-lT1epB4_.js";import{_ as ye}from"./Grid-BKpTNXut.js";import{N as K}from"./Popconfirm-CZAU35va.js";import{_ as we}from"./DataTable-CqP-LMzm.js";import"./Forward-Ssfnwh7N.js";import"./RadioGroup-DAMrkZ7E.js";const ke={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},xe=U("path",{fill:"currentColor",d:"M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12.475q.425 0 .713.288t.287.712t-.288.713t-.712.287H5v14h14v-6.5q0-.425.288-.712T20 11.5t.713.288t.287.712V19q0 .825-.587 1.413T19 21zm6.525-6.8l8.5-8.5q.275-.275.675-.275t.7.275t.3.7t-.3.725L12.225 16.3q-.3.3-.7.3t-.7-.3l-4.25-4.25q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z"},null,-1),Te=[xe];function Ce(b,_){return x(),$("svg",ke,[...Te])}const Ne={name:"material-symbols-select-check-box-rounded",render:Ce},qe={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},ze=U("path",{fill:"currentColor",d:"m12.7 11.2l-1.45-1.425q-.275-.275-.687-.275t-.713.3q-.275.275-.275.7t.275.7L12 13.35q.3.3.7.3t.7-.3l4.25-4.25q.3-.3.288-.7t-.288-.7q-.3-.3-.712-.312t-.713.287zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22zM8 4v12z"},null,-1),De=[ze];function Se(b,_){return x(),$("svg",qe,[...De])}const Pe={name:"material-symbols-library-add-check-outline-rounded",render:Se},Be=O({name:"foreCastSearch",__name:"foreCastSearch",props:{model:{required:!0},modelModifiers:{}},emits:Y(["search"],["update:model"]),setup(b,{emit:_}){const f=_,E=W(),{formRef:y,restoreValidation:h}=ee(),o=te(b,"model");o.value.time=A([Number(m(5,Date.now()-864e5*3)),Number(m(5,Date.now()))]),o.value.startTime=m(1,Date.now()-864e5*3),o.value.endTime=m(1,Date.now());async function T(r,l){o.value.startTime=m(1,l[0]),o.value.endTime=m(1,l[1])}async function i(){f("search")}const C=r=>{o.value.code=r,r==8?(o.value.fcode=r,B(()=>{o.value.code=void 0})):o.value.fcode=void 0,B(()=>{f("search")})},N=A(ne(ge));N.value.splice(1,0,{label:"失败",value:8});const R=r=>{o.value.config=r,B(()=>{f("search")})};return(r,l)=>{const q=le,s=ve,F=be,L=he,d=V,w=H,z=ye,D=ie,S=I;return x(),oe(S,{bordered:!1,size:"small",class:"card-wrapper"},{default:n(()=>[e(D,{ref_key:"formRef",ref:y,model:o.value,"label-placement":"left","label-width":a(E).locale=="en-US"?120:100,"show-feedback":!1,onKeyup:se(i,["enter"])},{default:n(()=>[e(z,{"y-gap":16,responsive:"screen","item-responsive":""},{default:n(()=>[e(s,{span:"24 s:12 m:6",label:"状态码",path:"code",class:"pr-24px"},{default:n(()=>[e(q,{filterable:"",clearable:"",placeholder:"请选择状态码",value:o.value.code,"onUpdate:value":l[0]||(l[0]=c=>o.value.code=c),style:{width:"100%"},options:N.value,onUpdateValue:C},null,8,["value","options"])]),_:1}),e(s,{span:"24 s:12 m:4",label:"状态",path:"config",class:"pr-24px"},{default:n(()=>[e(q,{filterable:"",clearable:"",placeholder:"请选择状态",value:o.value.config,"onUpdate:value":l[1]||(l[1]=c=>o.value.config=c),style:{width:"100%"},options:[{label:"已确认",value:1},{label:"未确认",value:0}],onUpdateValue:R},null,8,["value"])]),_:1}),e(s,{span:"24 s:12 m:8",label:"起止时间",path:"time",class:"pr-24px"},{default:n(()=>[e(F,{value:o.value.time,"onUpdate:value":l[2]||(l[2]=c=>o.value.time=c),type:"datetimerange","value-format":"yyyy-MM-dd hh:mm:ss",style:{width:"100%"},"onUpdate:formattedValue":T},null,8,["value"])]),_:1}),e(s,{span:"24 s:12 m:6",class:"pr-24px"},{default:n(()=>[e(w,{class:"w-full"},{default:n(()=>[e(d,{type:"primary",ghost:"",onClick:i},{icon:n(()=>[e(L,{class:"text-icon"})]),default:n(()=>[u(" "+M(a(ae)("common.search")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model","label-width"])]),_:1})}}}),Me={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"},We=O({name:"logmanage_forecastlog",__name:"index",setup(b){const _=W(),{columns:f,columnChecks:E,data:y,getData:h,loading:o,pagination:T,searchParams:i,resetSearchParams:C}=_e({apiFn:ce,apiParams:{page:1,pageSize:20,limit:20,startTime:m(1,Date.now()-864e5*3),endTime:m(1,Date.now()),code:void 0,config:void 0,order:"1",_t:new Date().getTime()},columns:()=>[{type:"selection",width:50,align:"center",resizable:!0},{key:"errormsg",title:"详细说明",minWidth:140,align:"center",resizable:!0},{key:"dbtime",title:"时间",minWidth:140,align:"center",resizable:!0,sorter:!0},{key:"code",title:"状态码",width:120,align:"center",resizable:!0},{key:"config",title:"操作",minWidth:140,align:"center",render(t){return t.code===0?e("span",null,[u(" ")]):t.config!==0?e(re,{type:"success"},{default:()=>[u("已确认")]}):e(K,{onPositiveClick:()=>z(t)},{default:()=>"确认要执行该操作吗？",trigger:()=>e(V,{type:"info",ghost:!0,size:"small",disabled:t.config!==0||t.code===0},{default:()=>[u("确认")]})})}}]}),{drawerVisible:N,operateType:R,editingData:r,handleAdd:l,handleEdit:q,checkedRowKeys:s,onBatchDeleted:F,onDeleted:L}=fe(y,h);let d=de({total:0,uncfm:0});ue(()=>{w()});const w=async()=>{const{data:t,error:p}=await me();d.total=(t==null?void 0:t.total)||0,d.uncfm=(t==null?void 0:t.uncfm)||0},z=async t=>{c(t.id)},D=async()=>{const t=s.value.join(",");c(t),s.value=[]},S=async()=>{c()},c=async t=>{var g;const{data:p,error:P}=await pe(t?{ids:t}:void 0);if(!P){(g=window.$message)==null||g.success("确认成功"),h(),await w();const k=new CustomEvent("ErrorMsg",{detail:{uncfm:d.uncfm}});window.dispatchEvent(k)}},j=t=>{if(t.order=="ascend"){if(i.order==null)return;i.order=void 0}else i.order="1";h()};return(t,p)=>{const P=Pe,g=V,k=K,X=Ne,Z=H,J=we,Q=I;return x(),$("div",Me,[e(Be,{model:a(i),"onUpdate:model":p[0]||(p[0]=v=>G(i)?i.value=v:null),onReset:a(C),onSearch:a(h)},null,8,["model","onReset","onSearch"]),e(Q,{title:"预测日志",bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper"},{"header-extra":n(()=>[e(Z,null,{default:n(()=>[U("span",null," 未确认/全部： "+M(a(d).uncfm)+"/"+M(a(d).total),1),e(k,{onPositiveClick:D},{trigger:n(()=>[e(g,{size:"small",ghost:"",type:"info",disabled:a(s).length==0},{icon:n(()=>[e(P,{class:"text-icon"})]),default:n(()=>[u(" 批量确认 ")]),_:1},8,["disabled"])]),default:n(()=>[u(" 确认要确认选中的数据吗？ ")]),_:1}),e(k,{onPositiveClick:S},{trigger:n(()=>[e(g,{size:"small",ghost:"",type:"info",disabled:a(d).uncfm==0},{icon:n(()=>[e(X,{class:"text-icon"})]),default:n(()=>[u(" 全部确认 ")]),_:1},8,["disabled"])]),default:n(()=>[u(" 确认要确认全部的数据吗？ ")]),_:1})]),_:1})]),default:n(()=>[e(J,{"checked-row-keys":a(s),"onUpdate:checkedRowKeys":p[1]||(p[1]=v=>G(s)?s.value=v:null),columns:a(f),data:a(y),size:"small","flex-height":!a(_).isMobile,"scroll-x":"",loading:a(o),remote:"","row-key":v=>v.id,pagination:a(T),class:"sm:h-full","onUpdate:sorter":j},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"])]),_:1})])}}});export{We as default};