import{d as I,i as w,a as M,bS as X,bT as J,a2 as T,o as b,b as N,t as C,ac as K,bU as Y,c as G,w as a,f as n,e as k,Q as Z,U as ee,h as H,bV as ae,aq as te,X as P,a8 as ne,_ as oe,I as $,a0 as se,N as z,s as A,bj as W,a7 as le,g as x,bW as re,bq as q,a4 as ie,E as de,G as ce,H as ue}from"./index-CikIHrS9.js";import{_ as F,a as R}from"./Grid-C_1VcKZu.js";import{u as E,L as B}from"./echarts-Gddy6lHw.js";import{G as pe,h as fe,a as me}from"./metar-qvbeV6WS.js";import{G as _e}from"./control_management-C1AUniiW.js";import{_ as ge,a as he}from"./DescriptionsItem-BGygXhFL.js";const ve="/assets/station-GwqcmkHc.jpeg",xe=I({name:"CountTo",__name:"count-to",props:{startValue:{default:0},endValue:{default:2021},duration:{default:1500},autoplay:{type:Boolean,default:!0},decimals:{default:0},prefix:{default:""},suffix:{default:""},separator:{default:","},decimal:{default:"."},useEasing:{type:Boolean,default:!0},transition:{default:"linear"}},setup(m){const t=m,_=w(t.startValue),s=M(()=>t.useEasing?X[t.transition]:void 0),y=J(_,{disabled:!1,duration:t.duration,transition:s.value}),p=M(()=>c(y.value));function c(u){const{decimals:o,decimal:e,separator:l,suffix:g,prefix:f}=t;let h=u.toFixed(o);h=String(h);const i=h.split(".");let d=i[0];const v=i.length>1?e+i[1]:"",L=/(\d+)(\d{3})/;if(l)for(;L.test(d);)d=d.replace(L,`$1${l}$2`);return f+d+v+g}async function r(){await K(),_.value=t.endValue}return T([()=>t.startValue,()=>t.endValue],()=>{t.autoplay&&r()},{immediate:!0}),(u,o)=>(b(),N("span",null,C(p.value),1))}}),ye={class:"ml-20px"},we={class:"text-14px"},be=I({name:"CardData",__name:"card-data",props:{MeteorologicalData:{type:Object}},setup(m){const t=m,_=M(()=>{var c,r,u,o,e,l;return[{key:"envT",title:"温度",value:((c=t.MeteorologicalData)==null?void 0:c.envT)||0,unit:"℃",color:{start:"#fdd819",end:"#e80505"},icon:"carbon:temperature-celsius"},{key:"envH",title:"湿度",value:((r=t.MeteorologicalData)==null?void 0:r.envH)||0,unit:"%",color:{start:"#97abff",end:"#123597"},icon:"lets-icons:humidity"},{key:"qy",title:"气压",value:((u=t.MeteorologicalData)==null?void 0:u.qy)||0,unit:"Pa",color:{start:"#70f570",end:"#49c628"},icon:"mdi:car-brake-low-pressure"},{key:"windS",title:"风速",value:((o=t.MeteorologicalData)==null?void 0:o.windS)||0,unit:"m/s",color:{start:"#ffe985",end:"#fa742b"},icon:"hugeicons:slow-winds"},{key:"windD",title:"风向",value:((e=t.MeteorologicalData)==null?void 0:e.windD)||0,unit:"°",color:{start:"#bbd2c5",end:"#536976"},icon:"mdi:windsock"},{key:"zfsdCount",title:"总辐射",value:((l=t.MeteorologicalData)==null?void 0:l.zfsd)||0,unit:"w/㎡",color:{start:"#ce9ffc",end:"#7367f0"},icon:"material-symbols:clear-day-rounded"}]}),[s,y]=Y();function p(c){return`linear-gradient(to bottom right, ${c.start}, ${c.end})`}return(c,r)=>{const u=oe,o=xe,e=R,l=F,g=P;return b(),G(g,{bordered:!1,size:"small",class:"card-wrapper h-100%","content-style":{padding:"20px 12px",display:"flex",flexDirection:"column",justifyContent:"center"}},{default:a(()=>[n(H(s),null,{default:a(({$slots:f,gradientColor:h})=>[k("div",{class:"rd-8px pl-15px pb-4px pt-8px text-white",style:ee({backgroundImage:h})},[(b(),G(Z(f.default)))],4)]),_:1}),n(l,{cols:"s:1 m:1 l:2",responsive:"screen","x-gap":10,"y-gap":12},{default:a(()=>[(b(!0),N(te,null,ae(_.value,(f,h)=>(b(),G(e,{key:f.key,class:ne("animated-fade-up-"+h)},{default:a(()=>[n(H(y),{"gradient-color":p(f.color),class:"flex-1 flex items-center h-100%",style:{"max-height":"75px !important"}},{default:a(()=>[n(u,{icon:f.icon,class:"text-32px"},null,8,["icon"]),k("div",ye,[k("h3",we,C(f.title),1),n(o,{suffix:f.unit,decimals:1,"start-value":1,"end-value":f.value,class:"text-16px text-white dark:text-dark"},null,8,["suffix","end-value"])])]),_:2},1032,["gradient-color"])]),_:2},1032,["class"]))),128))]),_:1})]),_:1})}}}),Ce=$(be,[["__scopeId","data-v-0061aecb"]]),De=I({name:"LineChart",__name:"line-chart",props:{data:{required:!0},dataModifiers:{}},emits:["update:data"],setup(m){const t=se(m,"data");T(()=>t.value,o=>{c()});const _=z(),s=w(null),{domRef:y,updateOptions:p}=E(()=>({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}},valueFormatter:function(o){return(o+""!="undefined"?o:"--")+"[兆瓦]"},backgroundColor:"#6a7985",textStyle:{color:"#fff"}},legend:{data:["预测功率","实际功率"]},grid:{left:"2%",right:"5%",bottom:"0%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{type:"value",axisLabel:{formatter:"{value} [兆瓦]"}},series:[{color:"rgba(108,80,243)",name:"预测功率",type:"line",emphasis:{focus:"series"},lineStyle:{width:1},showSymbol:!1,areaStyle:{color:new B(0,0,0,1,[{offset:0,color:"rgba(108,80,243,0.4)"},{offset:1,color:"rgba(108,80,243,0)"}],!1),shadowColor:"rgba(108,80,243,0.9)",shadowBlur:20},data:[]},{color:"rgba(0,202,149)",name:"实际功率",type:"line",emphasis:{focus:"series"},lineStyle:{width:1},showSymbol:!1,areaStyle:{color:new B(0,0,0,1,[{offset:0,color:"rgba(0,202,149,0.4)"},{offset:1,color:"rgba(0,202,149,0)"}],!1),shadowColor:"rgba(0,202,149,0.9)",shadowBlur:20},data:[]}]}));async function c(){await new Promise(o=>{setTimeout(o,1e3)}),p(o=>(t.value&&(o.xAxis.data=t.value.map(e=>e.dbtime),o.series[0].data=t.value.map(e=>e.prePower),o.series[1].data=t.value.map(e=>e.power)),o))}function r(){p((o,e)=>{const l=e();return o.legend.data=l.legend.data,o.series[0].name=l.series[0].name,o.series[1].name=l.series[1].name,o})}async function u(){c()}return T(()=>_.locale,()=>{r()}),u(),A(()=>{s.value=window.setInterval(()=>{console.log("mainHomeLineChart timer")},1e3*60*5)}),W(()=>{s.value!==null&&(clearInterval(s.value),s.value=null)}),(o,e)=>(b(),N("div",{ref_key:"domRef",ref:y,class:"h-100% overflow-hidden"},null,512))}}),Se=$(De,[["__scopeId","data-v-e730a501"]]),ke=I({name:"LineChart",__name:"weather-chart",props:{data:{type:Array,default:[]}},setup(m){const t=m,_=z(),s=w(null),{domRef:y,updateOptions:p,showLoading:c}=E(()=>({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}},valueFormatter:function(e){return(e||"--")+"°C"},backgroundColor:"#6a7985",textStyle:{color:"#fff"}},legend:{data:["环境温度","组件温度"]},grid:{left:"2%",right:"2%",bottom:"10%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{name:"温度(°C)",type:"value",axisLabel:{formatter:"{value} °C"},max:100,min:0},series:[{color:"#27ae60",name:"环境温度",type:"line",lineStyle:{width:1},showSymbol:!1,areaStyle:{color:new B(0,0,0,1,[{offset:0,color:"rgba(39, 174, 96,0.4)"},{offset:1,color:"rgba(39, 174, 96,0)"}],!1),shadowColor:"rgba(39, 174, 96,0.9)",shadowBlur:20},emphasis:{focus:"series"},data:[]},{color:"#c0392b",name:"组件温度",type:"line",lineStyle:{width:1},showSymbol:!1,areaStyle:{color:new B(0,0,0,1,[{offset:0,color:"rgba(192, 57, 43,0.3)"},{offset:1,color:"rgba(192, 57, 43,0)"}],!1),shadowColor:"rgba(192, 57, 43,0.9)",shadowBlur:20},emphasis:{focus:"series"},data:[]}]}));async function r(){await new Promise(e=>{setTimeout(e,1e3)}),p(e=>(t.data&&(e.xAxis.data=t.data.map(l=>l.dbtime),e.series[0].data=t.data.map(l=>l.envT),e.series[1].data=t.data.map(l=>l.moduleT)),e))}function u(){p((e,l)=>{const g=l();return e.legend.data=g.legend.data,e.series[0].name=g.series[0].name,e.series[1].name=g.series[1].name,e.series[2].name=g.series[2].name,e})}async function o(){r()}return T(()=>_.locale,()=>{u()}),T(()=>t.data,()=>{c(),r()}),o(),A(()=>{s.value=window.setInterval(()=>{console.log("mainHomeLineChart timer")},1e3*60*1)}),W(()=>{s.value!==null&&(clearInterval(s.value),s.value=null)}),(e,l)=>(b(),N("div",{ref_key:"domRef",ref:y,class:"h-100% overflow-hidden"},null,512))}}),Te=$(ke,[["__scopeId","data-v-719e2685"]]),O=m=>(ce("data-v-ead4fd35"),m=m(),ue(),m),Ie=O(()=>k("img",{src:ve,alt:"",style:{height:"140px",width:"100%","margin-bottom":"20px"}},null,-1)),Le={class:"flex items-center"},Ge=O(()=>k("div",{class:"w-80px font-size-14px text-right"},"气象站：",-1)),Me=I({name:"home",__name:"index",setup(m){le();const t=z(),_=M(()=>t.isMobile?0:16),s=w({pname:"",maxeqmt:void 0,realeqmt:void 0,longitude:void 0,latitude:void 0,gridtime:""}),y=async()=>{const{data:i,error:d}=await re({_t:new Date().getTime()});d||(s.value=i)},p=w(),c=async()=>{var v;const{data:i,error:d}=await pe();d||(p.value=i,p.value.length!=0&&(r.value=(v=i[0])==null?void 0:v.id,o()))},r=w(),u=w(),o=async()=>{const{data:i,error:d}=await fe({devId:r.value});d||(u.value=i)},e=i=>{r.value=i,o(),h()},l=w(),g=async()=>{const{data:i,error:d}=await _e({date:q(0,Date.now())});d||(l.value=i)},f=w(),h=async()=>{if(!r.value)return;const{data:i,error:d}=await me({id:r.value,type:1,startTime:q(0,Date.now())+" 00:00:00",endTime:q(1,Date.now())});f.value=i};return A(async()=>{await c(),await y(),await g(),await h()}),(i,d)=>{const v=ge,L=he,D=P,S=R,V=F,U=ie,j=de;return b(),G(j,{vertical:"",size:16,class:"h-100% home","item-style":{height:"100%"}},{default:a(()=>[n(V,{"y-gap":_.value,responsive:"screen",class:"h-100%","item-responsive":""},{default:a(()=>[n(S,{span:"24 s:24 m:24"},{default:a(()=>[n(D,{title:"",bordered:!1,class:"card-wrapper h-100% bg-transparent","content-style":{padding:"0px"}},{default:a(()=>[n(V,{"x-gap":_.value,responsive:"screen",class:"h-100%","item-responsive":""},{default:a(()=>[n(S,{span:"24 s:24 m:6"},{default:a(()=>[n(D,{title:"电场信息",bordered:!0,class:"card-wrapper h-100%","header-style":{padding:"12px"},"content-style":{padding:"12px",paddingTop:"0px",display:"flex",flexDirection:"column"}},{default:a(()=>[Ie,n(L,{bordered:"",column:1,"label-placement":"left",size:"small",class:"flex-1","content-style":{minWidth:"150px"}},{default:a(()=>[n(v,null,{label:a(()=>[x(" 电场名称 ")]),default:a(()=>[x(" "+C(s.value.pname),1)]),_:1}),n(v,null,{label:a(()=>[x(" 最大装机容量 ")]),default:a(()=>[x(" "+C(s.value.maxeqmt),1)]),_:1}),n(v,null,{label:a(()=>[x(" 实际装机容量 ")]),default:a(()=>[x(" "+C(s.value.realeqmt),1)]),_:1}),n(v,null,{label:a(()=>[x(" 地理坐标 ")]),default:a(()=>[x(" "+C(s.value.longitude&&s.value.latitude&&s.value.longitude+" , "+s.value.latitude),1)]),_:1}),n(v,null,{label:a(()=>[x(" 并网时间 ")]),default:a(()=>[x(" "+C(s.value.gridtime),1)]),_:1})]),_:1})]),_:1})]),_:1}),n(S,{span:"24 s:24 m:18"},{default:a(()=>[n(D,{title:"今日预测功率",bordered:!0,class:"card-wrapper h-100%","header-style":{padding:"10px 30px 0 30px"},"content-style":{padding:"10px",paddingTop:"0px"}},{default:a(()=>[n(Se,{data:l.value},null,8,["data"])]),_:1})]),_:1})]),_:1},8,["x-gap"])]),_:1})]),_:1}),n(S,{span:"24 s:24 m:24"},{default:a(()=>[n(D,{title:"",bordered:!0,class:"card-wrapper h-100%","content-style":{padding:"0px"}},{default:a(()=>[n(V,{"x-gap":_.value,responsive:"screen",class:"h-100%","item-responsive":""},{default:a(()=>[n(S,{span:"24 s:24 m:6"},{default:a(()=>[n(D,{title:"气象数据",bordered:!1,class:"card-wrapper h-100%","header-style":{padding:"12px",paddingBottom:"0px"},"content-style":{padding:"0px"}},{"header-extra":a(()=>[k("div",Le,[Ge,n(U,{filterable:"",placeholder:"请选择气象站",value:r.value,"onUpdate:value":d[0]||(d[0]=Q=>r.value=Q),options:p.value,"label-field":"sname","value-field":"id",style:{width:"140px"},onUpdateValue:e},null,8,["value","options"])])]),default:a(()=>[n(Ce,{MeteorologicalData:u.value},null,8,["MeteorologicalData"])]),_:1})]),_:1}),n(S,{span:"24 s:24 m:18"},{default:a(()=>[n(D,{title:"今日实时气象",bordered:!1,class:"card-wrapper h-100%","header-style":{padding:"10px 30px 0 30px"},"content-style":{padding:"0px",paddingTop:"0px"}},{default:a(()=>[n(Te,{data:f.value},null,8,["data"])]),_:1})]),_:1})]),_:1},8,["x-gap"])]),_:1})]),_:1})]),_:1},8,["y-gap"])]),_:1})}}}),Ae=$(Me,[["__scopeId","data-v-ead4fd35"]]);export{Ae as default};