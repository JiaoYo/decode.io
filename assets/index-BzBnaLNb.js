import{d as F,a0 as M,$ as _,g as n,M as h,L as v,B as d,h as g,J as P,I as A,dw as J,r as G,j as C,o as f,e as W,w as o,c as y,i as t,f as Y,t as x,bj as H,O as T,bk as K,bl as Q,bm as X,aa as Z,Y as ee,C as te,E as V,D as ae,F as ne}from"./index-CTzTZfFu.js";import{u as se}from"./table-Dlv0hVil.js";import{f as oe}from"./reportForm-ueebUWDx.js";import{d as ie,e as le}from"./log-WuNxLOwz.js";import{f as re}from"./scheduleTask-q76sK3cm.js";import{_ as ce}from"./DataTable-Qi7xROJl.js";import{_ as ue}from"./TimePicker-CLDnEWqT.js";import"./Forward-CDNatGEL.js";import"./defineProperty-eprFK7_z.js";const me={class:"min-h-500px flex-col-stretch gap-16px overflow-auto lt-sm:overflow-auto"},pe={class:"flex justify-center"},Ne=F({name:"logretrieval_logbackup",__name:"index",setup(de){const N=M(),{columns:B,columnChecks:ge,data:U,getData:fe,loading:E,mobilePagination:I,searchParams:_e,resetSearchParams:ye}=se({apiFn:ie,immediate:!0,apiParams:{page:1,pageSize:20,limit:20,_t:new Date().getTime()},columns:()=>[{key:"fname",title:"文件名称",align:"center",width:240},{key:"dbtime",title:"备份时间",align:"center",width:240},{key:"operate",title:_("common.operate"),align:"center",width:130,render:s=>n("div",{class:"flex-center gap-8px"},[h(n(d,{type:"primary",ghost:!0,size:"small",onClick:()=>S(s.fname)},{default:()=>[g("下载")]}),[[v("no-auth"),"sysmanger.logBackUps.download"]])])}]});async function S(s){P({url:`${A}/logBackUps/download.do`,method:"post",params:{fname:s},responseType:"blob",headers:{token:J()}}).then(async a=>{var m,c;if(a.data.type=="application/json"){const u=await a.data.text();var r=JSON.parse(u);if(r.code==500)return(m=window.$message)==null?void 0:m.error(r.data)}if(a.data){const u=window.URL.createObjectURL(new Blob([a.data])),l=document.createElement("a");l.href=u,l.setAttribute("download",s),document.body.appendChild(l),l.click()}(c=window.$message)==null||c.success("下载成功")})}const k=()=>({id:"",beanName:"",params:"",cronExpression:"",status:1,remark:""});let e=G({taskInfo:k(),setting:{settingCycle:void 0,settingCycleValue:void 0,settingTime:void 0}});const O={setting:{settingCycle:{type:"number",required:!0,message:"请选择设置周期",trigger:"blur"},settingCycleValue:{type:"number",required:!0,message:"请选择设置周期值",trigger:"blur"},settingTime:{required:!0,message:"请选择设置时间",trigger:"blur"}}},w=C(null),p=C(!1),$=async()=>{p.value=!0;const{data:s,error:a}=await le();if(!a){console.log(s);const r=Q(s.cronExpression);Object.assign(e.setting,r),e.taskInfo=s}},b=()=>{p.value=!1,e.taskInfo=k()},D=async()=>{var a,r,m,c;await((a=w.value)==null?void 0:a.validate());const s=X(e.setting.settingCycle==1?{dayOfWeek:e.setting.settingCycleValue,time:e.setting.settingTime}:null,e.setting.settingCycle==2?{dayOfMonth:e.setting.settingCycleValue,time:e.setting.settingTime}:null,e.setting.settingCycle==3?{time:e.setting.settingTime}:null);if((r=e.taskInfo)!=null&&r.id){const{data:u,error:l}=await re({beanName:e.taskInfo.beanName,cronExpression:s,id:e.taskInfo.id,params:e.taskInfo.params,status:e.taskInfo.status,remark:e.taskInfo.remark});l||(c=window.$message)==null||c.success("设置成功")}else{const{data:u,error:l}=await oe({beanName:"LogBackUpsTask",cronExpression:s,params:JSON.stringify({cron:s}),remark:""});l||(m=window.$message)==null||m.success("设置成功")}b()};return(s,a)=>{const r=ce,m=Z,c=ee,u=te,l=V,j=ue,L=ae,z=V,R=ne,q=v("no-auth");return f(),W("div",me,[n(m,{title:"日志备份",bordered:!1,size:"small",class:"sm:flex-1-hidden"},{"header-extra":o(()=>[h((f(),y(t(d),{type:"primary",ghost:"",onClick:$},{default:o(()=>[g("备份设置 ")]),_:1})),[[q,"sysmanger.logBackUps.task"]])]),default:o(()=>[n(r,{columns:t(B),data:t(U),size:"small","flex-height":!t(N).isMobile,"scroll-x":962,loading:t(E),remote:"","row-key":i=>i.id,pagination:t(I),class:"sm:h-full"},null,8,["columns","data","flex-height","loading","row-key","pagination"])]),_:1}),n(R,{show:p.value,"onUpdate:show":a[5]||(a[5]=i=>p.value=i),title:"日志备份设置",preset:"card",class:"w-400px"},{footer:o(()=>[Y("div",pe,[n(z,{justify:"end",size:16},{default:o(()=>[n(t(d),{onClick:b},{default:o(()=>[g(x(t(_)("common.cancel")),1)]),_:1}),n(t(d),{type:"primary",onClick:D},{default:o(()=>[g(x(t(_)("common.confirm")),1)]),_:1})]),_:1})])]),default:o(()=>[n(L,{ref_key:"formRef",ref:w,model:t(e),rules:O,"label-placement":"left","label-width":140,"require-mark-placement":"left"},{default:o(()=>[n(u,{label:"设置周期",path:"setting.settingCycle"},{default:o(()=>[n(l,{justify:"space-between"},{default:o(()=>[n(c,{value:t(e).setting.settingCycle,"onUpdate:value":[a[0]||(a[0]=i=>t(e).setting.settingCycle=i),a[1]||(a[1]=i=>t(e).setting.settingCycleValue=1)],options:[{label:"每周",value:1},{label:"每月",value:2},{label:"每日",value:3}],style:{width:"140px"}},null,8,["value"]),n(u,{label:"",path:"setting.settingCycleValue","show-feedback":!1},{default:o(()=>[t(e).setting.settingCycle==1?(f(),y(c,{key:0,value:t(e).setting.settingCycleValue,"onUpdate:value":a[2]||(a[2]=i=>t(e).setting.settingCycleValue=i),options:t(H)(),style:{width:"140px"}},null,8,["value","options"])):T("",!0),t(e).setting.settingCycle==2?(f(),y(c,{key:1,value:t(e).setting.settingCycleValue,"onUpdate:value":a[3]||(a[3]=i=>t(e).setting.settingCycleValue=i),options:t(K)(),style:{width:"140px"}},null,8,["value","options"])):T("",!0)]),_:1})]),_:1})]),_:1}),n(u,{label:"设置时间",path:"setting.settingTime"},{default:o(()=>[n(j,{"formatted-value":t(e).setting.settingTime,"onUpdate:formattedValue":a[4]||(a[4]=i=>t(e).setting.settingTime=i)},null,8,["formatted-value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["show"])])}}});export{Ne as default};