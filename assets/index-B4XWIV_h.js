import{d as k,Z as w,j as S,y as N,J as P,cn as z,o as b,c as T,w as o,f as I,a9 as C,ay as A,b as E,r as R,$ as M,g as a,am as O,i,ac as j,ad as B,E as G}from"./index-Ddi2sB0k.js";import{u as V,a as $}from"./table-BPjc3v9J.js";import{u as H}from"./echarts-DLUmu0SJ.js";import{f as K}from"./events-vrbyYCRz.js";import{T as U}from"./basicconf-D0s9pPRU.js";import{a as F,_ as J}from"./Grid-BNlat6r7.js";import{_ as W}from"./DataTable-C6XgD3bf.js";import"./installCanvasRenderer-iCPGNWhM.js";import"./Forward-CbtUBMk5.js";const Z=k({name:"LineChart",__name:"line-chart",setup(r){const f=w(),l=S(null),{domRef:m,updateOptions:u}=H(()=>({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{show:!1,icon:"circle",textStyle:{color:"#fff"},data:["紧急","重要","次要","一般","告知"]},grid:{left:0,right:"3%",bottom:"10%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{type:"value",axisLine:{lineStyle:{color:"#fff"}}},series:[{color:"#ff0000",name:"紧急",type:"line",smooth:!0,stack:"Total",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.25,color:"#ff0000"},{offset:1,color:"#fff"}]}},emphasis:{focus:"series"},data:[]},{color:"#ff9874",name:"重要",type:"line",smooth:!0,stack:"Total",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.25,color:"#ff9874"},{offset:1,color:"#fff"}]}},emphasis:{focus:"series"},data:[]},{color:"#fedc69",name:"次要",type:"line",smooth:!0,stack:"Total",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.25,color:"#fedc69"},{offset:1,color:"#fff"}]}},emphasis:{focus:"series"},data:[]},{color:"#5da8ff",name:"一般",type:"line",smooth:!0,stack:"Total",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.25,color:"#5da8ff"},{offset:1,color:"#fff"}]}},emphasis:{focus:"series"},data:[]},{color:"#8e9dff",name:"告知",type:"line",smooth:!0,stack:"Total",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.25,color:"#8e9dff"},{offset:1,color:"#fff"}]}},emphasis:{focus:"series"},data:[]}]}));async function p(){await new Promise(e=>{setTimeout(e,1e3)}),u(e=>(e.xAxis.data=["06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","24:00"],e.series[0].data=[4623,6145,6268,6411,1890,4251,2978,3880,3606,4311],e.series[1].data=[2208,2016,2916,4512,8281,2008,1963,2367,2956,678],e.series[2].data=[2208,2016,2916,4512,8281,2008,1963,2367,2956,678],e.series[3].data=[2208,2016,2916,4512,8281,2008,1963,2367,2956,678],e.series[4].data=[2208,2016,2916,4512,8281,2008,1963,2367,2956,678],e))}function _(){u((e,g)=>{const t=g();return e.legend.data=t.legend.data,e.series[0].name=t.series[0].name,e.series[1].name=t.series[1].name,e.series[2].name=t.series[2].name,e.series[3].name=t.series[3].name,e.series[4].name=t.series[4].name,e})}async function y(){p()}return N(()=>f.locale,()=>{_()}),y(),P(()=>{l.value=window.setInterval(()=>{console.log("mainHomeLineChart timer")},1e3*60*5)}),z(()=>{l.value!==null&&(clearInterval(l.value),l.value=null)}),(e,g)=>{const t=C;return b(),T(t,{title:"实时日志趋势（2min）",bordered:!0,class:"card-wrapper"},{default:o(()=>[I("div",{ref_key:"domRef",ref:m,class:"w-100% h-300px overflow-auto"},null,512)]),_:1})}}}),q=A(Z,[["__scopeId","data-v-43162592"]]),Q={class:"min-h-450px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function X(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!B(r)}const ye=k({name:"logretrieval_realtimemonitor",__name:"index",setup(r){const f=w(),l=E(()=>f.isMobile?0:16);S(!1),R({securityEvenDetailInfo:{}});const{columns:m,columnChecks:u,data:p,getData:_,loading:y,mobilePagination:e,searchParams:g,resetSearchParams:t}=V({apiFn:K,immediate:!1,apiParams:{page:1,pageSize:20,limit:20,lsid:null,etype:null,ectgr:null,elevel:null,startSIp:null,endSIp:null,startSourceIp:null,endSourceIp:null,startAimIp:null,endAimIp:null,startTime:null,endTime:null,fuzzy:null,_t:new Date().getTime()},columns:()=>[{type:"selection",align:"center",width:48,fixed:"left"},{key:"ename",title:"源IP",align:"center",width:180,ellipsis:{tooltip:!0}},{key:"pname1",title:"源端口",align:"center",width:160,ellipsis:{tooltip:!0}},{key:"aggrestarttime",title:"目的IP",align:"center",width:180,ellipsis:{tooltip:!0}},{key:"pname2",title:"目的端口",align:"center",width:160,ellipsis:{tooltip:!0}},{key:"type",title:"日志名称",align:"center",minWidth:200,ellipsis:{tooltip:!0}},{key:"aggre",title:"设备类型",align:"center",width:160,ellipsis:{tooltip:!0}},{key:"sip",title:"接收时间",align:"center",width:160,ellipsis:{tooltip:!0}},{key:"aggreendtime",title:"日志源IP",align:"center",width:180,ellipsis:{tooltip:!0}},{key:"elevel",title:"事件等级",align:"center",width:140,render:s=>{(s.elevel===void 0||s.elevel===null)&&(s.elevel=1);const c={0:"#8e9dff",1:"#5da8ff",2:"#fedc69",3:"#ff9874",4:"#ff0000"},n=M(U[s.elevel]);let d={color:c[s.elevel],textColor:"#ffffff",borderColor:c[s.elevel]};return a(O,{size:"small",color:d},X(n)?n:{default:()=>[n]})}}]}),{drawerVisible:Y,operateType:ee,editingData:te,handleAdd:ae,handleEdit:oe,checkedRowKeys:h,onBatchDeleted:le,onDeleted:se,closeDrawer:ne}=$(p,_);return(s,c)=>{const n=F,d=J,v=G,D=W,L=C;return b(),T(v,{vertical:""},{default:o(()=>[a(d,{"x-gap":l.value,responsive:"screen","item-responsive":""},{default:o(()=>[a(n,{span:"24 s:24 m:24"},{default:o(()=>[a(v,{vertical:"",size:[0,16]},{default:o(()=>[a(d,{"x-gap":l.value,responsive:"screen","item-responsive":""},{default:o(()=>[a(n,{span:"24 s:24 m:24"},{default:o(()=>[a(q)]),_:1})]),_:1},8,["x-gap"])]),_:1})]),_:1})]),_:1},8,["x-gap"]),I("div",Q,[a(L,{bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper"},{default:o(()=>[a(D,{"checked-row-keys":i(h),"onUpdate:checkedRowKeys":c[0]||(c[0]=x=>j(h)?h.value=x:null),columns:i(m),data:i(p),size:"small","flex-height":!i(f).isMobile,"scroll-x":702,loading:i(y),remote:"","row-key":x=>x.id,pagination:i(e),class:"sm:h-full md:h-420px"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"])]),_:1})])]),_:1})}}});export{ye as default};