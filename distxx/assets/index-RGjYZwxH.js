import{d as N,p as j,r as z,bq as d,$ as t,i as f,o as M,c as G,w as i,f as n,h as l,a3 as k,a5 as u,g as T,t as W,bW as A,dw as E,dx as J,A as L,a4 as P,F as X,B as H,E as K,ax as Q,N as Y,cz as Z,b as tt,a9 as et,X as at}from"./index-OwKwL0YQ.js";import{_ as lt}from"./round-check-circle-BPxDuO4F.js";import{p as nt,a as ot}from"./station-MqwxEUs5.js";import{_ as it}from"./FormItemGridItem-XJmkGy_O.js";import{_ as st}from"./DatePicker-DvhJJ245.js";import{_ as pt}from"./Grid-BdHIGgCt.js";import"./Forward-BwSYcc1D.js";const rt=N({name:"StationinfoForm",__name:"station_info_form",props:{rowData:{}},emits:["submitted"],setup(B,{emit:g}){const{formRef:_,validate:c,restoreValidation:w}=j(),p=(r,a)=>({type:a,required:!0,trigger:["input","change","blur","password-input"],message:r}),e=z(v());function v(){return{id:void 0,pname:"光伏电站",ptoken:"",pwd:"",repname:"",code:"001",ptype:1,codeprv:"0",maxeqmt:5,realeqmt:5,longitude:0,latitude:0,altitude:0,wheel:0,transform:"",voltagelevel:"10",operationtime:d(0,new Date),location:null,land:0,status:0,gridtime:d(0,new Date),owner:"",compy:"",epc:"",re1:"",re2:"",re3:"",re4:""}}const b={pname:{required:!0,trigger:"blur",message:t("page.station.stationSetting.form.pname")},ptoken:{required:!0,trigger:"blur",message:t("page.station.stationSetting.form.ptoken")},pwd:{required:!0,trigger:"blur",message:t("page.station.stationSetting.form.pwd")},code:{type:"string",required:!0,trigger:"blur",message:t("page.station.stationSetting.form.code")},repname:p(t("page.station.stationSetting.form.repname")),ptype:p(t("page.station.stationSetting.form.ptype"),"number"),codeprv:p(t("page.station.stationSetting.form.codeprv")),maxeqmt:p(t("page.station.stationSetting.form.maxeqmt"),"number"),realeqmt:p(t("page.station.stationSetting.form.realeqmt"),"number"),longitude:p(t("page.station.stationSetting.form.longitude"),"number"),latitude:p(t("page.station.stationSetting.form.latitude"),"number"),altitude:p(t("page.station.stationSetting.form.altitude"),"number"),wheel:p(t("page.station.stationSetting.form.wheel"),"number"),transform:p(t("page.station.stationSetting.form.transform")),voltagelevel:p(t("page.station.stationSetting.form.voltagelevel")),operationtime:p(t("page.station.stationSetting.form.operationtime")),location:p(t("page.station.stationSetting.form.location")),land:p(t("page.station.stationSetting.form.land"),"number"),status:p(t("page.station.stationSetting.form.status"),"number"),gridtime:p(t("page.station.stationSetting.form.gridtime")),owner:p(t("page.station.stationSetting.form.owner")),compy:p(t("page.station.stationSetting.form.compy")),epc:p(t("page.station.stationSetting.form.epc"))},S=f({}),h=f(!1);async function y(){const{data:r}=await A({_t:new Date().getTime()});r.hasOwnProperty("ptoken")?(S.value=r,Object.assign(e,r),e.operationtime=d(0,e.operationtime),e.gridtime=d(0,e.gridtime)):h.value=!0}async function C(){var a;await c();const r=JSON.parse(JSON.stringify(e));r.operationtime=d(1,e.operationtime),r.gridtime=d(1,e.gridtime),h.value?await E([r]):await J([r]),(a=window.$message)==null||a.success("保存成功"),y(),h.value=!1}const D=r=>{S.value.realeqmt==S.value.maxeqmt&&(e.realeqmt=e.maxeqmt)};y();const x=r=>{if(r==0)return"0";if(r!==null){let a=r.toFixed(6);return a=a.replace(/(\.\d*?[1-9])0+$/,"$1"),a=a.replace(/\.$/,""),parseFloat(a)===Math.floor(parseFloat(a))?Math.floor(parseFloat(a)).toString():a+""}else return""};return(r,a)=>{const m=L,s=it,q=P,U=st,F=pt,$=X,O=lt,R=H,V=K,I=Q;return M(),G(I,{class:"h-480px pr-20px",style:{height:"calc(100%)"}},{default:i(()=>[n($,{ref_key:"formRef",ref:_,model:e,rules:b,"label-placement":"left","label-width":180,"require-mark-placement":"left"},{default:i(()=>[n(F,{responsive:"screen","item-responsive":""},{default:i(()=>[n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.pname"),path:"pname"},{default:i(()=>[n(m,{clearable:"",value:e.pname,"onUpdate:value":a[0]||(a[0]=o=>e.pname=o),placeholder:l(t)("page.station.stationSetting.form.pname")},null,8,["value","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.ptoken"),path:"ptoken"},{default:i(()=>[n(m,{clearable:"",value:e.ptoken,"onUpdate:value":a[1]||(a[1]=o=>e.ptoken=o),placeholder:l(t)("page.station.stationSetting.form.ptoken"),style:{width:"100%"}},null,8,["value","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.pwd"),path:"pwd"},{default:i(()=>[n(m,{clearable:"",value:e.pwd,"onUpdate:value":a[2]||(a[2]=o=>e.pwd=o),placeholder:l(t)("page.station.stationSetting.form.pwd"),style:{width:"100%"}},null,8,["value","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.repname"),path:"repname"},{default:i(()=>[n(m,{clearable:"",value:e.repname,"onUpdate:value":a[3]||(a[3]=o=>e.repname=o),placeholder:l(t)("page.station.stationSetting.form.repname"),style:{width:"100%"}},null,8,["value","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.code"),path:"code"},{default:i(()=>[n(m,{clearable:"",value:e.code,"onUpdate:value":a[4]||(a[4]=o=>e.code=o),placeholder:l(t)("page.station.stationSetting.form.code"),style:{width:"100%"}},null,8,["value","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.ptype"),path:"ptype"},{default:i(()=>[n(q,{class:"w-200px",placeholder:l(t)("page.station.stationSetting.form.ptype"),value:e.ptype,"onUpdate:value":a[5]||(a[5]=o=>e.ptype=o),options:l(k)(l(nt)),style:{width:"100%"}},null,8,["placeholder","value","options"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.codeprv"),path:"codeprv"},{default:i(()=>[n(m,{clearable:"",value:e.codeprv,"onUpdate:value":a[6]||(a[6]=o=>e.codeprv=o),placeholder:l(t)("page.station.stationSetting.form.codeprv"),style:{width:"100%"}},null,8,["value","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.maxeqmt")+"(MW)",path:"maxeqmt"},{default:i(()=>[n(l(u),{value:e.maxeqmt,"onUpdate:value":[a[7]||(a[7]=o=>e.maxeqmt=o),D],placeholder:l(t)("page.station.stationSetting.form.maxeqmt"),style:{width:"100%"}},null,8,["value","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.realeqmt")+"(MW)",path:"realeqmt"},{default:i(()=>[n(l(u),{clearable:"",value:e.realeqmt,"onUpdate:value":a[8]||(a[8]=o=>e.realeqmt=o),max:e.maxeqmt,style:{width:"100%"},placeholder:l(t)("page.station.stationSetting.form.realeqmt")},null,8,["value","max","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.longitude"),path:"longitude"},{default:i(()=>[n(l(u),{clearable:"",value:e.longitude,"onUpdate:value":a[9]||(a[9]=o=>e.longitude=o),format:x,"show-button":!1,placeholder:l(t)("page.station.stationSetting.form.longitude"),style:{width:"100%"}},null,8,["value","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.latitude"),path:"latitude"},{default:i(()=>[n(l(u),{clearable:"",value:e.latitude,"onUpdate:value":a[10]||(a[10]=o=>e.latitude=o),format:x,"show-button":!1,placeholder:l(t)("page.station.stationSetting.form.latitude"),style:{width:"100%"}},null,8,["value","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.altitude"),path:"altitude"},{default:i(()=>[n(l(u),{clearable:"",value:e.altitude,"onUpdate:value":a[11]||(a[11]=o=>e.altitude=o),placeholder:l(t)("page.station.stationSetting.form.altitude"),style:{width:"100%"}},null,8,["value","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.wheel"),path:"wheel"},{default:i(()=>[n(l(u),{clearable:"",value:e.wheel,"onUpdate:value":a[12]||(a[12]=o=>e.wheel=o),placeholder:l(t)("page.station.stationSetting.form.wheel"),style:{width:"100%"}},null,8,["value","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.transform"),path:"transform"},{default:i(()=>[n(m,{clearable:"",value:e.transform,"onUpdate:value":a[13]||(a[13]=o=>e.transform=o),placeholder:l(t)("page.station.stationSetting.form.transform"),style:{width:"100%"}},null,8,["value","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.voltagelevel")+"(kV)",path:"voltagelevel"},{default:i(()=>[n(m,{clearable:"",value:e.voltagelevel,"onUpdate:value":a[14]||(a[14]=o=>e.voltagelevel=o),placeholder:l(t)("page.station.stationSetting.form.voltagelevel"),style:{width:"100%"}},null,8,["value","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.operationtime"),path:"operationtime"},{default:i(()=>[n(U,{"formatted-value":e.operationtime,"onUpdate:formattedValue":a[15]||(a[15]=o=>e.operationtime=o),"value-format":"yyyy-MM-dd",type:"date",clearable:"",placeholder:l(t)("page.station.stationSetting.form.operationtime"),style:{width:"100%"}},null,8,["formatted-value","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.location"),path:"location"},{default:i(()=>[n(m,{clearable:"",value:e.location,"onUpdate:value":a[16]||(a[16]=o=>e.location=o),placeholder:l(t)("page.station.stationSetting.form.location"),style:{width:"100%"}},null,8,["value","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.land"),path:"land"},{default:i(()=>[n(l(u),{clearable:"",value:e.land,"onUpdate:value":a[17]||(a[17]=o=>e.land=o),placeholder:l(t)("page.station.stationSetting.form.land"),style:{width:"100%"}},null,8,["value","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.status"),path:"status"},{default:i(()=>[n(q,{class:"w-200px",value:e.status,"onUpdate:value":a[18]||(a[18]=o=>e.status=o),options:l(k)(l(ot)),placeholder:l(t)("page.station.stationSetting.form.status"),style:{width:"100%"}},null,8,["value","options","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.gridtime"),path:"gridtime"},{default:i(()=>[n(U,{"formatted-value":e.gridtime,"onUpdate:formattedValue":a[19]||(a[19]=o=>e.gridtime=o),"value-format":"yyyy-MM-dd",type:"date",clearable:"",style:{width:"100%"},placeholder:l(t)("page.station.stationSetting.form.gridtime")},null,8,["formatted-value","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.owner"),path:"owner"},{default:i(()=>[n(m,{clearable:"",value:e.owner,"onUpdate:value":a[20]||(a[20]=o=>e.owner=o),placeholder:l(t)("page.station.stationSetting.form.owner"),style:{width:"100%"}},null,8,["value","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.compy"),path:"compy"},{default:i(()=>[n(m,{clearable:"",value:e.compy,"onUpdate:value":a[21]||(a[21]=o=>e.compy=o),placeholder:l(t)("page.station.stationSetting.form.compy"),style:{width:"100%"}},null,8,["value","placeholder"])]),_:1},8,["label"]),n(s,{span:"24 m:8",label:l(t)("page.station.stationSetting.epc"),path:"epc"},{default:i(()=>[n(m,{clearable:"",value:e.epc,"onUpdate:value":a[22]||(a[22]=o=>e.epc=o),placeholder:l(t)("page.station.stationSetting.form.epc"),style:{width:"100%"}},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model"]),n(V,{size:16,justify:"center"},{default:i(()=>[n(R,{type:"primary",ghost:"",onClick:C,class:"w-100px"},{icon:i(()=>[n(O,{class:"text-icon"})]),default:i(()=>[T(" "+W(l(t)("page.manage.scencename.save")),1)]),_:1})]),_:1})]),_:1})}}}),bt=N({name:"stationmanagement_electricfieldsetting",__name:"index",setup(B){Y();const{bool:g,setTrue:_}=Z(),c=f(null),w=f(null);return(p,e)=>{const v=at;return M(),tt("div",{ref_key:"wrapperRef",ref:c,class:"flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"},[n(v,{bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper",title:"电场设置"},{default:i(()=>[n(rt,{visible:l(g),"onUpdate:visible":e[0]||(e[0]=b=>et(g)?g.value=b:null),"row-data":w.value},null,8,["visible","row-data"])]),_:1})],512)}}});export{bt as default};