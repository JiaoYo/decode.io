import{Q as ge,p as fe,_ as he,a as we}from"./pako.esm-FnpM7ev7.js";import{_ as ye}from"./export-BGT-_7hz.js";import{d as W,a2 as Q,N as be,i as y,s as ve,bj as xe,o as b,b as ee,I as ae,bq as p,f as a,w as t,h as n,B as F,g as D,t as G,$ as Z,c as $,S as J,e as A,a9 as ke,F as Te,X as Pe,cu as De,bY as Se,E as Ce,bZ as Ne,a6 as $e,G as ze,H as Le}from"./index-BMYn0QvM.js";import{_ as Ie}from"./round-search-CMO8sK7V.js";import{c as Be,d as qe,e as Ee}from"./control_management-dO2oJYVL.js";import{u as X,a as Fe}from"./table-CnhV1qOX.js";import{e as Ge}from"./exportExcel-Bv4G4H50.js";import{u as Ae,L as Y}from"./echarts-jwBB9U5j.js";import{_ as Me}from"./DatePicker-16epLFhf.js";import{_ as Re}from"./FormItemGridItem-C9NhCsep.js";import{_ as Ue}from"./Grid-DX9ypkSG.js";import{_ as He}from"./DataTable-CvQhns6s.js";import"./Forward-CKlitZqf.js";import"./RadioGroup-HkP3qHRJ.js";const Oe=W({name:"LineChart",__name:"line-chart",props:{data:{type:Object,default:()=>({})}},setup(u){const _=u;Q(()=>_.data,async s=>{z(),L()});const M=be(),c=y(null),{domRef:v,updateOptions:x,showLoading:z,hideLoading:l}=Ae(()=>({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}},backgroundColor:"#6a7985",textStyle:{color:"rgb(224, 224, 224)"},valueFormatter:function(s){return(s+""!="undefined"?s:"--")+"mw"}},legend:{data:["实际功率","预测功率"]},grid:{left:"2%",right:"4%",bottom:"10%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{type:"value",axisLabel:{formatter:"{value} mw"}},series:[{color:"#e90445",name:"实际功率",type:"line",emphasis:{focus:"series"},lineStyle:{width:1},areaStyle:{color:new Y(0,0,0,1,[{offset:0,color:"rgba(233, 4, 69,0.3)"},{offset:1,color:"rgba(233, 4, 69,0)"}],!1),shadowColor:"rgba(233, 4, 69,0.9)",shadowBlur:20},data:[]},{color:"#009688",name:"预测功率",type:"line",emphasis:{focus:"series"},lineStyle:{width:1},areaStyle:{color:new Y(0,0,0,1,[{offset:0,color:"rgba(0, 150, 136,0.3)"},{offset:1,color:"rgba(0, 150, 136,0)"}],!1),shadowColor:"rgba(0, 150, 136,0.9)",shadowBlur:20},data:[]}],dataZoom:[{type:"inside",start:0,end:100},{start:0,end:100}]}));async function L(){await new Promise(s=>{setTimeout(s,1e3)}),x(s=>(s.xAxis.data=_.data.map(d=>d.dbtime),s.series[0].data=_.data.map(d=>d.power),s.series[1].data=_.data.map(d=>d.prePower),s))}function R(){x((s,d)=>{const S=d();return s.legend.data=S.legend.data,s.series[0].name=S.series[0].name,s.series[1].name=S.series[1].name,s})}async function U(){L()}return Q(()=>M.locale,()=>{R()}),U(),ve(()=>{c.value=window.setInterval(()=>{console.log("mainHomeLineChart timer")},1e3*60*5)}),xe(()=>{c.value!==null&&(clearInterval(c.value),c.value=null)}),(s,d)=>(b(),ee("div",{ref_key:"domRef",ref:v,class:"h-600px overflow-hidden"},null,512))}}),je=ae(Oe,[["__scopeId","data-v-edcb8878"]]),Ve=u=>(ze("data-v-9e488557"),u=u(),Le(),u),Ke={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"},Qe={class:"font-size-14px mb-10px"},Ze=Ve(()=>A("span",null,"二维码",-1)),Je=W({name:"realtimequery_powerquery",__name:"index",setup(u){const{columns:_,columnChecks:M,data:c,getData:v,loading:x,mobilePagination:z,searchParams:l,resetSearchParams:L}=X({apiFn:Be,apiParams:{page:1,pageSize:20,limit:20,startTime:p(1,Date.now()-864e5),endTime:p(1,Date.now()),_t:new Date().getTime()},immediate:!1,showTotal:!0,columns:()=>[{type:"selection",width:60},{key:"dbtime",title:"时间",align:"center",width:100},{key:"power",title:"实际功率",align:"center",width:140},{key:"prePower",title:"预测功率",align:"center",width:140},{key:"operate",title:"误差",align:"center",width:100,render(o){const e=o.prePower-o.power>=0?o.prePower-o.power:o.power-o.prePower;return a("span",null,[e?parseFloat(e.toFixed(6)):""])}}]}),{drawerVisible:R,operateType:U,editingData:s,handleAdd:d,handleEdit:S,checkedRowKeys:k,onBatchDeleted:Xe,onDeleted:Ye}=Fe(c,v),te=async()=>{T.value=="0"?await B():(await v(),c.value.length==0?O():f.value=[])},g=y([]),I=y(""),B=async()=>{const{data:o,error:e}=await Ee({startTime:l.startTime,endTime:l.endTime});e||(g.value=o.sort((r,h)=>new Date(r.dbtime).getTime()-new Date(h.dbtime).getTime()),g.value.length==0?O():f.value=[])},H=y([Date.now()-864e5*1,Date.now()]);async function ne(o,e){l.startTime=p(1,e[0]),l.endTime=p(1,e[1]),j.startTime=p(1,e[0]),j.endTime=p(1,e[1])}const oe=o=>{o=="1"?v():B()};B();const se=()=>{const o={dbtime:"时间",power:"实际功率",prePower:"预测功率",error:"误差"},e=[];c.value.forEach(r=>{k.value.includes(r.id)&&e.push({...r,error:r.prePower-r.power>=0?r.prePower-r.power:r.power-r.prePower||""})}),Ge(e,o,"预测数据")},T=y("0"),q=y(!1),re=()=>{var C,N;if(g.value.length==0)return(C=window.$message)==null?void 0:C.warning("暂无数据。请查询数据后重试。");if(g.value.length>96||p(0,l.startTime)!=p(0,l.endTime))return(N=window.$message)==null?void 0:N.warning("数据量过多。请缩小数据范围至一天内并重试。");const o=m=>{const w=new Date(m),P=w.getHours().toString().padStart(2,"0"),E=w.getMinutes().toString().padStart(2,"0");return`${P}:${E}`},e={data:g.value.map(m=>({t:o(m.dbtime),pP:m.prePower,p:m.power})),type:0,dateTime:p(0,l.startTime)},h=fe.gzip(JSON.stringify(e),{to:"string"}).reduce((m,w)=>m+String.fromCharCode(w),"");I.value=`https://dingiiot.com/powerPrediction/?${btoa(h)}`,console.log("编码",I.value),q.value=!0},le=()=>{var e;const o=document.getElementById("qrcode");if(o){const r=document.createElement("a");r.href=o.toDataURL("image/png"),r.download="qrcode.png",r.click(),(e=window.$message)==null||e.success("下载成功")}else console.error("无法找到二维码 canvas 元素")},{columns:ie,data:f,getData:O,loading:We,mobilePagination:ce,searchParams:j}=X({apiFn:qe,apiParams:{page:1,pageSize:20,limit:20,startTime:l.startTime,endTime:l.endTime,_t:new Date().getTime()},immediate:!1,showTotal:!0,columns:()=>[{key:"dbtime",title:"时间",align:"center",width:100},{key:"code",title:"错误码",align:"center",width:140},{key:"errormsg",title:"错误信息",align:"center",width:140}]});return(o,e)=>{const r=Me,h=Re,C=Ie,N=he,m=Ue,w=Te,P=Pe,E=De,V=He,K=Se,de=ye,me=Ce,pe=Ne,ue=we,_e=$e;return b(),ee("div",Ke,[a(P,{bordered:!1,size:"small"},{default:t(()=>[a(w,{ref:"formRef",model:n(l),"label-placement":"left","show-feedback":!1},{default:t(()=>[a(m,{"y-gap":16,responsive:"screen","item-responsive":""},{default:t(()=>[a(h,{span:"24 s:12 m:7",label:"起止时间",path:"startTime"},{default:t(()=>[a(r,{value:H.value,"onUpdate:value":e[0]||(e[0]=i=>H.value=i),type:"datetimerange","value-format":"yyyy-MM-dd hh:mm:ss","onUpdate:formattedValue":ne,"default-time":["00:00:00","23:59:59"]},null,8,["value"])]),_:1}),a(h,{span:"24 s:12 m:5",label:"",path:"endTime",class:"pr-24px"},{default:t(()=>[a(n(F),{type:"primary",ghost:"",onClick:te},{icon:t(()=>[a(C,{class:"text-icon"})]),default:t(()=>[D(" "+G(n(Z)("common.search")),1)]),_:1}),n(f).length==0&&T.value=="0"?(b(),$(n(F),{key:0,type:"primary",ghost:"",onClick:re,class:"ml-20px"},{icon:t(()=>[a(N,{class:"text-icon"})]),default:t(()=>[D(" "+G("生成二维码"))]),_:1})):J("",!0)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),n(f).length>0?(b(),$(P,{key:0,bordered:!1,size:"small","header-style":{paddingTop:"0px"},class:"sm:flex-1-hidden card-wrapper h-100%"},{header:t(()=>[A("div",Qe,[a(E,{class:"text-icon c-#e67e22"}),D(" 未查询到预测数据。详情请查看错误日志。 ")]),D(" 功率预测错误日志 ")]),default:t(()=>[a(V,{columns:n(ie),data:n(f),size:"small",loading:n(x),remote:"","row-key":i=>i.id,pagination:n(f).length?n(ce):void 0,class:"sm:h-full","flex-height":!0,"scroll-x":""},null,8,["columns","data","loading","row-key","pagination"])]),_:1})):(b(),$(P,{key:1,bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper"},{default:t(()=>[a(pe,{type:"card",animated:"",value:T.value,"onUpdate:value":[e[2]||(e[2]=i=>T.value=i),oe],class:"h-100%","tab-style":{height:"40px"},"pane-wrapper-style":{flex:1}},{suffix:t(()=>[T.value=="1"?(b(),$(me,{key:0,align:"center",wrap:"",justify:"end",class:"lt-sm:w-200px"},{default:t(()=>[a(n(F),{onClick:se,size:"small",disabled:n(k).length==0},{icon:t(()=>[a(de,{class:"text-icon"})]),default:t(()=>[D(" "+G(n(Z)("common.export")),1)]),_:1},8,["disabled"])]),_:1})):J("",!0)]),default:t(()=>[a(K,{name:"0",tab:"图表"},{default:t(()=>[a(je,{data:g.value},null,8,["data"])]),_:1}),a(K,{name:"1",tab:"表格",class:"h-100%"},{default:t(()=>[a(V,{"checked-row-keys":n(k),"onUpdate:checkedRowKeys":e[1]||(e[1]=i=>ke(k)?k.value=i:null),columns:n(_),data:n(c),size:"small",loading:n(x),remote:"","row-key":i=>i.id,pagination:n(c).length?n(z):void 0,class:"sm:h-full","flex-height":!0,"scroll-x":""},null,8,["checked-row-keys","columns","data","loading","row-key","pagination"])]),_:1})]),_:1},8,["value"])]),_:1})),a(_e,{show:q.value,"onUpdate:show":e[3]||(e[3]=i=>q.value=i),title:"",preset:"card",class:"w-auto"},{header:t(()=>[A("div",null,[Ze,a(ue,{class:"text-icon ml-20px font-size-24px",style:{cursor:"pointer"},onClick:le})])]),default:t(()=>[a(ge,{id:"qrcode",style:{margin:"0 auto"},value:I.value,margin:3,size:500,level:"H"},null,8,["value"])]),_:1},8,["show"])])}}}),_a=ae(Je,[["__scopeId","data-v-9e488557"]]);export{_a as default};