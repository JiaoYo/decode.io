import{_ as z}from"./twotone-add-circle-outline-BF3nRW_9.js";import{d as F,Z as A,a1 as K,N as M,p as G,a0 as L,i as q,bq as r,o as U,c as I,w as t,f as e,g as E,t as B,h as a,$ as O,y as j,B as X,E as Z,F as H,X as V,s as J,bj as Q,b as W,a9 as R,e as Y,aA as ee}from"./index-BMYn0QvM.js";import{_ as te,f as ae}from"./outline-data-exploration-C6I5ArCQ.js";import{u as ne,a as oe}from"./table-CnhV1qOX.js";import{e as se}from"./exportExcel-Bv4G4H50.js";import{_ as le}from"./round-search-CMO8sK7V.js";import{_ as re}from"./DatePicker-16epLFhf.js";import{_ as ie}from"./FormItemGridItem-C9NhCsep.js";import{_ as ce}from"./Grid-DX9ypkSG.js";import{_ as de}from"./DataTable-CvQhns6s.js";import"./Forward-CKlitZqf.js";import"./RadioGroup-HkP3qHRJ.js";const me=F({name:"AlarmSearch",__name:"uploadevents-search",props:{model:{required:!0},modelModifiers:{}},emits:A(["reset","search","exportData"],["update:model"]),setup(b,{emit:_}){K({1:"电场1",2:"电场2",3:"电场3"});const m=_,k=M(),{formRef:p,restoreValidation:f}=G(),n=L(b,"model");n.value.time=q([Number(r(5,Date.now()-864e5*6)),Number(r(5,Date.now()+864e5))]),n.value.startTime=r(0,Date.now()-864e5*6),n.value.endTime=r(0,Date.now()+864e5);async function h(s,i){n.value.startTime=s[0],n.value.endTime=s[1]}async function o(){m("search")}const g=()=>{m("exportData")};return(s,i)=>{const D=re,w=ie,N=le,y=X,S=te,c=Z,T=ce,C=H,u=V;return U(),I(u,{bordered:!1,size:"small",class:"card-wrapper"},{default:t(()=>[e(C,{ref_key:"formRef",ref:p,model:n.value,"label-placement":"left","label-width":a(k).locale=="en-US"?120:80,"show-feedback":!1,onKeyup:j(o,["enter"])},{default:t(()=>[e(T,{"y-gap":16,responsive:"screen","item-responsive":""},{default:t(()=>[e(w,{span:"24 s:12 m:6",label:"时间",path:"time",class:"pr-24px"},{default:t(()=>[e(D,{value:n.value.time,"onUpdate:value":i[0]||(i[0]=v=>n.value.time=v),type:"daterange","value-format":"yyyy-MM-dd",style:{width:"100%"},"onUpdate:formattedValue":h},null,8,["value"])]),_:1}),e(w,{span:"24 s:12 m:6",class:"pl-24px"},{default:t(()=>[e(c,{class:"w-full"},{default:t(()=>[e(y,{type:"primary",ghost:"",onClick:o},{icon:t(()=>[e(N,{class:"text-icon"})]),default:t(()=>[E(" "+B(a(O)("common.search")),1)]),_:1}),e(y,{onClick:g},{icon:t(()=>[e(S,{class:"text-icon"})]),default:t(()=>[E(" "+B("导出"))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model","label-width"])]),_:1})}}}),pe={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"},ue=Y("span",null,"上报文件信息列表",-1),Se=F({name:"statisticalanalysis_uploadandsubmitfiles",__name:"index",setup(b){const _=M(),{columns:m,columnChecks:k,data:p,getData:f,loading:n,mobilePagination:h,searchParams:o,resetSearchParams:g}=ne({apiFn:ae,apiParams:{page:1,pageSize:20,limit:20,startTime:r(0,Date.now()-864e5*6),endTime:r(0,Date.now()+864e5),level:null,devtype:null,status:null,_t:new Date().getTime()},immediate:!1,showTotal:!0,columns:()=>[{title:"",key:"index",width:50,align:"center",render:(x,l)=>`${l+1}`},{key:"describe",title:"上报对象名称",align:"center",width:100},{key:"statrttime",title:"上报对象编号",align:"center",width:240},{key:"content",title:"上报文件类型",align:"center",width:240},{key:"statrttime",title:"上报文集字符集",align:"center",width:240},{key:"devname",title:"上报协议",align:"center",width:240},{key:"dtype",title:"上报对象备注",align:"center",width:140}]}),s=[{id:"1",describe:"中控new",statrttime:"UTF-8",devname:"sftp",dtype:"--",subdtype:"46%",reoetits:"123",content:"短期，超短期，气象站"}],i=()=>{se(s,{timeFrame:"时间范围",describe:"描述",statrttime:"开机容量",devname:"实发功率",dtype:"预测功率",subdtype:"均方根误差",reoetits:"平均绝对误差",content:"相关性系数"},"短期预测日报","sheet1")},{drawerVisible:D,operateType:w,editingData:N,handleAdd:y,handleEdit:S,checkedRowKeys:c,onBatchDeleted:T,onDeleted:C}=oe(p,f),u=x=>{x.detail.key};J(()=>{window.addEventListener("localStorageChanged",u)}),Q(()=>{window.removeEventListener("localStorageChanged",u)});const v=()=>ee(e(z,null,null));return(x,l)=>{const $=de,P=V;return U(),W("div",pe,[e(me,{model:a(o),"onUpdate:model":l[0]||(l[0]=d=>R(o)?o.value=d:null),onReset:a(g),onSearch:a(f),onExportData:i},null,8,["model","onReset","onSearch"]),e(P,{bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper"},{header:t(()=>[ue]),default:t(()=>[e($,{bordered:!1,"render-expand-icon":v,"single-line":!1,"checked-row-keys":a(c),"onUpdate:checkedRowKeys":l[1]||(l[1]=d=>R(c)?c.value=d:null),columns:a(m),data:s,size:"small","flex-height":!a(_).isMobile,"scroll-x":702,loading:a(n),remote:"","row-key":d=>d.id,pagination:a(p).length?a(h):void 0,class:"sm:h-full"},null,8,["checked-row-keys","columns","flex-height","loading","row-key","pagination"])]),_:1})])}}});export{Se as default};