import{_ as Ae}from"./table-header-operation.vue_vue_type_script_setup_true_lang-DY5cuPhv.js";import{d as ae,q as ee,s as ue,v as pe,x as Re,b as $e,r as oe,j as me,y as se,L as W,o as g,c as y,w as l,g as e,h as v,t as X,i as o,$ as S,M as Y,V as J,O as T,N as fe,as as Pe,bi as Te,A as _e,Y as ve,ak as ze,E as Q,D as ge,B as Z,F as Fe,f as Ve,e as be,aj as Oe,aa as he,a0 as je,aX as re,ad as K,ae as Be}from"./index-CTzTZfFu.js";import{u as Me,a as qe}from"./table-Dlv0hVil.js";import{a as Ee,h as Ge,k as Ie,l as ye,m as Le,n as He,o as Ke,p as We}from"./Collection-m-C7K1BQ.js";import{C as Xe,c as we,d as Ye,e as Je}from"./collection-Dt2TE87Y.js";import{r as Qe}from"./asset-CERF-o50.js";import{u as ie}from"./usePageData-qotc6-Vn.js";import{_ as ke}from"./FormItemGridItem-DSd0iFgR.js";import{_ as Ze}from"./Cascader-DKVZwkLC.js";import{b as ea,a as aa,_ as ta}from"./DataTable-Qi7xROJl.js";import{_ as Ce}from"./Grid-CGDLxETU.js";import{_ as la,a as na}from"./arrow-open-up-D-qyxWqB.js";import{_ as oa}from"./round-search-CB6VChpV.js";import{_ as sa}from"./round-refresh-BwksxvhV.js";import{h as ce}from"./permission-CrwTy4SQ.js";import{_ as ra}from"./Popconfirm-C48d9vHf.js";import"./table-column-setting.vue_vue_type_script_setup_true_lang-DKpFVCZ-.js";import"./setting-outlined-cAol2PY7.js";import"./round-delete-CSPAXlOf.js";import"./refresh-Cjb3qb18.js";import"./round-plus-Ng3HqKep.js";import"./Upload-fmYZXUgi.js";import"./Progress-D49FFybN.js";import"./Forward-CDNatGEL.js";const ia=ae({name:"CollectorModal",__name:"collector_modal",props:ee({operateType:{},rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:ee(["submitted"],["update:visible"]),setup(w,{emit:O}){const m=w,N=O,b=ue(w,"visible"),{formRef:c,validate:k,restoreValidation:j}=pe(),{createConfirmPwdRule:z,defaultRequiredRule:D,patternRules:I}=Re(),B=$e(()=>({add:"新增采集器",edit:"编辑采集器"})[m.operateType]),a=oe(C());function C(){return{id:void 0,cname:"",cencode:0,accmed:1,proser:void 0,caddr:"",logsoudev:void 0,filterpro:void 0,cdesc:"",proper:0,enable:0,rev:void 0,port:void 0,uname:void 0,pswd:void 0,fpath:void 0}}const f={cname:D,caddr:[{required:!0,message:"请输入采集器地址",trigger:["blur","input"]},{required:!0,validator:Pe,trigger:["blur","input"]}],rev:D,port:{required:!0,trigger:["blur","input"],validator:(r,t,_)=>t?Te(t)?!0:new Error("请输入在0-65535之间的数字"):new Error("请输入端口号")},uname:D,pswd:D,cencode:{type:"number",required:!0,trigger:["blur","change"],message:"请选择编码格式"},accmed:{type:"number",required:!0,trigger:["blur","change"],message:"请选择接入方式"},logsoudev:{type:"number",required:!0,trigger:["blur","change"],message:"请选择日志源设备"}},{pageData:U,getData:x,nextPage:h}=ie(Ee),F=async r=>{const t=r.currentTarget;t.scrollTop+t.offsetHeight>=t.scrollHeight&&U.data.length<U.total&&h()},{pageData:A,getData:L,nextPage:M}=ie(Ge),q=async r=>{const t=r.currentTarget;t.scrollTop+t.offsetHeight>=t.scrollHeight&&A.data.length<A.total&&M()},R=me(),V=async()=>{const{data:r,error:t}=await Le();R.value=r.map(_=>({..._,id:"-"+_.id,type:_.cname}))};function n(){x(),V(),L(),Object.assign(a,C()),m.operateType==="edit"&&m.rowData&&(Object.assign(a,m.rowData),d.clickNums=1)}function s(){b.value=!1}const d=oe({clickNums:0,isLoading:!1});async function u(){var r,t,_,p,$;if(await k(),m.operateType==="add"){const{data:H,error:G}=await Ie([a]);if(!G&&((r=window.$message)==null||r.success("采集器添加成功"),s(),N("submitted"),a.proper==0)){const P=await Qe([{aname:a.cname,aip:a.caddr,tid:36,cid:H}]);P.error&&((t=P.error.response)==null?void 0:t.data.msg)=="数据库中已存在该记录"&&((_=window.$message)==null||_.destroyAll(),(p=window.$message)==null||p.error("资产添加失败,请前往资产管理进行修改"))}}else{const{data:H,error:G}=await ye([a]);G||(($=window.$message)==null||$.success(S("common.updateSuccess")),s(),N("submitted"))}}const E=r=>{Object.assign(a,{logsoudev:void 0,rev:void 0,port:void 0,uname:void 0,pswd:void 0}),r==4&&(a.logsoudev=53),a.port=r==5?22:null};return se(b,()=>{b.value&&(n(),j())}),se(()=>a.caddr,()=>{d.clickNums=0}),(r,t)=>{const _=_e,p=ke,$=ve,H=Ze,G=ze,P=ea,te=Q,le=aa,xe=Ce,Se=ge,ne=Z,Ne=Q,De=Fe,Ue=W("no-space");return g(),y(De,{show:b.value,"onUpdate:show":t[14]||(t[14]=i=>b.value=i),title:B.value,preset:"card",class:"w-850px"},{footer:l(()=>[e(Ne,{size:16,justify:"end"},{default:l(()=>[e(ne,{onClick:s},{default:l(()=>[v(X(o(S)("common.cancel")),1)]),_:1}),e(ne,{type:"primary",onClick:u},{default:l(()=>[v(X(o(S)("common.confirm")),1)]),_:1})]),_:1})]),default:l(()=>[e(Se,{ref_key:"formRef",ref:c,model:a,rules:f,"label-placement":"left","label-width":120,onKeyup:fe(u,["enter"])},{default:l(()=>[e(xe,{responsive:"screen","item-responsive":"","x-gap":20},{default:l(()=>[e(p,{span:"24 s:12 m:12",label:"采集器名称",path:"cname"},{default:l(()=>[Y(e(_,{value:a.cname,"onUpdate:value":t[0]||(t[0]=i=>a.cname=i),placeholder:"请输入采集器名称",clearable:""},null,8,["value"]),[[Ue]])]),_:1}),e(p,{span:"24 s:12 m:12",label:"编码格式",path:"cencode"},{default:l(()=>[e($,{value:a.cencode,"onUpdate:value":t[1]||(t[1]=i=>a.cencode=i),placeholder:"请选择编码格式",filterable:"",clearable:"",options:o(J)(o(Xe))},null,8,["value","options"])]),_:1}),e(p,{span:"24 s:12 m:12",label:"接入方式",path:"accmed"},{default:l(()=>[e($,{value:a.accmed,"onUpdate:value":[t[2]||(t[2]=i=>a.accmed=i),E],placeholder:"请选择接入方式",filterable:"",clearable:"",disabled:r.operateType==="edit",options:o(J)(o(we))},null,8,["value","disabled","options"])]),_:1}),e(p,{span:"24 s:12 m:12",label:"代理服务器",path:"proser"},{default:l(()=>[e($,{value:a.proser,"onUpdate:value":t[3]||(t[3]=i=>a.proser=i),placeholder:"请选择代理服务器",clearable:"",filterable:"","value-field":"id","label-field":"pip",options:o(U).data,"reset-menu-on-options-change":!1,onScroll:F},null,8,["value","options"])]),_:1}),e(p,{span:"24 s:12 m:12",label:"采集地址",path:"caddr"},{default:l(()=>[e(_,{value:a.caddr,"onUpdate:value":t[4]||(t[4]=i=>a.caddr=i),placeholder:"请输入采集地址",clearable:""},null,8,["value"])]),_:1}),[0,1,4,5,7,8].includes(a.accmed)?(g(),y(p,{key:0,span:"24 s:12 m:12",label:"日志源设备",path:"logsoudev"},{default:l(()=>[e(H,{value:a.logsoudev,"onUpdate:value":t[5]||(t[5]=i=>a.logsoudev=i),placeholder:"请选择日志源设备",options:R.value,"check-strategy":"child","children-field":"data","value-field":"id","label-field":"type",clearable:"","show-path":!1},null,8,["value","options"])]),_:1})):T("",!0),e(p,{span:"24 s:12 m:12",label:"过滤策略",path:"filterpro"},{default:l(()=>[e($,{clearable:"",filterable:"",value:a.filterpro,"onUpdate:value":t[6]||(t[6]=i=>a.filterpro=i),placeholder:"请选择过滤策略",options:o(A).data,"value-field":"id","label-field":"pname","reset-menu-on-options-change":!1,onScroll:q},null,8,["value","options"])]),_:1}),[3,7,8].includes(a.accmed)?(g(),y(p,{key:1,span:"24 s:12 m:12",label:a.accmed==3?"数据库名称":a.accmed==4?"域名":(a.accmed==7,"目录"),path:"rev"},{default:l(()=>[e(_,{value:a.rev,"onUpdate:value":t[7]||(t[7]=i=>a.rev=i),placeholder:"请输入",clearable:""},null,8,["value"])]),_:1},8,["label"])):T("",!0),[3,4,5,7,8].includes(a.accmed)?(g(),y(p,{key:2,span:"24 s:12 m:12",label:"端口",path:"port"},{default:l(()=>[e(G,{value:a.port,"onUpdate:value":t[8]||(t[8]=i=>a.port=i),placeholder:"请输入端口",clearable:"",style:{width:"100%"}},null,8,["value"])]),_:1})):T("",!0),[3,4,5,7,8,9].includes(a.accmed)?(g(),y(p,{key:3,span:"24 s:12 m:12",label:"用户名",path:"uname"},{default:l(()=>[e(_,{value:a.uname,"onUpdate:value":t[9]||(t[9]=i=>a.uname=i),placeholder:"请输入用户名",clearable:""},null,8,["value"])]),_:1})):T("",!0),[3,4,5,7,8,9].includes(a.accmed)?(g(),y(p,{key:4,span:"24 s:12 m:12",label:"密码",path:"pswd"},{default:l(()=>[e(_,{type:"password","show-password-on":"click",value:a.pswd,"onUpdate:value":t[10]||(t[10]=i=>a.pswd=i),placeholder:"请输入密码",clearable:""},null,8,["value"])]),_:1})):T("",!0),r.operateType=="add"?(g(),y(p,{key:5,span:"24 s:12 m:12",label:"生成资产",path:"proper"},{default:l(()=>[e(le,{value:a.proper,"onUpdate:value":t[11]||(t[11]=i=>a.proper=i),name:"radiogroup"},{default:l(()=>[e(te,null,{default:l(()=>[e(P,{value:0},{default:l(()=>[v("是")]),_:1}),e(P,{value:1},{default:l(()=>[v("否")]),_:1})]),_:1})]),_:1},8,["value"])]),_:1})):T("",!0),e(p,{span:"24 s:12 m:12",label:"是否启用",path:"enable"},{default:l(()=>[e(le,{value:a.enable,"onUpdate:value":t[12]||(t[12]=i=>a.enable=i),name:"radiogroup",disabled:r.operateType=="edit"},{default:l(()=>[e(te,null,{default:l(()=>[e(P,{value:0},{default:l(()=>[v("是")]),_:1}),e(P,{value:1},{default:l(()=>[v("否")]),_:1})]),_:1})]),_:1},8,["value","disabled"])]),_:1}),e(p,{span:"24 s:24 m:24",label:"描述",path:"cdesc"},{default:l(()=>[e(_,{type:"textarea",value:a.cdesc,"onUpdate:value":t[13]||(t[13]=i=>a.cdesc=i),placeholder:"请输入描述",clearable:""},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["show","title"])}}}),ca=ae({name:"FormSearch",__name:"form-search",props:{model:{required:!0},modelModifiers:{}},emits:ee(["reset","search"],["update:model"]),setup(w,{emit:O}){const m=O,{formRef:N,restoreValidation:b}=pe(),c=ue(w,"model"),k=me(!1);function j(C){c.value.enable=C,m("search")}function z(C){c.value.accmed=C,m("search")}function D(){c.value.fuzzy=void 0,m("search")}function I(){c.value.caddr=void 0,m("search")}async function B(){await b(),m("reset")}async function a(){m("search")}return(C,f)=>{const U=_e,x=ke,h=sa,F=Z,A=oa,L=la,M=na,q=Q,R=ve,V=Ce,n=ge,s=he,d=W("no-space");return g(),y(s,{bordered:!1,size:"small",class:"card-wrapper"},{default:l(()=>[e(n,{ref_key:"formRef",ref:N,model:c.value,"label-placement":"left","label-width":100,"show-feedback":!1,onKeyup:fe(a,["enter"])},{default:l(()=>[e(V,{responsive:"screen","item-responsive":""},{default:l(()=>[e(x,{span:"24 s:12 m:6",label:"采集器名称",path:"fuzzy",class:"pr-24px"},{default:l(()=>[Y(e(U,{clearable:"",value:c.value.fuzzy,"onUpdate:value":f[0]||(f[0]=u=>c.value.fuzzy=u),placeholder:"请输入采集器名称",onClear:D},null,8,["value"]),[[d]])]),_:1}),e(x,{span:"24 s:12 m:6",label:"采集地址",path:"caddr",class:"pr-24px"},{default:l(()=>[e(U,{clearable:"",value:c.value.caddr,"onUpdate:value":f[1]||(f[1]=u=>c.value.caddr=u),onClear:I,placeholder:"请输入采集地址"},null,8,["value"])]),_:1}),e(x,{span:"24 m:12",class:"pr-24px"},{default:l(()=>[e(q,{class:"w-full",align:"center"},{default:l(()=>[e(F,{onClick:B},{icon:l(()=>[e(h,{class:"text-icon"})]),default:l(()=>[v(" "+X(o(S)("common.reset")),1)]),_:1}),e(F,{type:"primary",ghost:"",onClick:a},{icon:l(()=>[e(A,{class:"text-icon"})]),default:l(()=>[v(" "+X(o(S)("common.search")),1)]),_:1}),Ve("div",{class:"cursor-pointer",title:"精准查询",onClick:f[2]||(f[2]=u=>k.value=!k.value)},[k.value?(g(),y(L,{key:0,class:"text-icon"})):(g(),y(M,{key:1,class:"text-icon"}))])]),_:1})]),_:1}),k.value?(g(),be(Oe,{key:0},[e(x,{span:"24 s:12 m:6",label:"接入方式",path:"accmed",class:"pr-24px mt-20px"},{default:l(()=>[e(R,{clearable:"",filterable:"",value:c.value.accmed,"onUpdate:value":f[3]||(f[3]=u=>c.value.accmed=u),placeholder:"请选择接入方式",options:o(J)(o(we)),onUpdateValue:z,style:{width:"100%"}},null,8,["value","options"])]),_:1}),e(x,{span:"24 s:12 m:6",label:"状态",path:"enable",class:"pr-24px mt-20px"},{default:l(()=>[e(R,{clearable:"",filterable:"",value:c.value.enable,"onUpdate:value":f[4]||(f[4]=u=>c.value.enable=u),placeholder:"请选择状态",options:o(J)(o(Ye)),onUpdateValue:j,style:{width:"100%"}},null,8,["value","options"])]),_:1})],64)):T("",!0)]),_:1})]),_:1},8,["model"])]),_:1})}}}),da={class:"min-h-500px flex-col-stretch gap-16px overflow-auto lt-sm:overflow-auto"};function de(w){return typeof w=="function"||Object.prototype.toString.call(w)==="[object Object]"&&!Be(w)}const Fa=ae({name:"collectionmanagement_collector",__name:"index",setup(w){const O=je(),{columns:m,columnChecks:N,data:b,getData:c,loading:k,mobilePagination:j,searchParams:z,resetSearchParams:D}=Me({apiFn:He,apiParams:{page:1,pageSize:20,limit:20,fuzzy:null,caddr:null,enable:null,accmed:null,_t:new Date().getTime()},immediate:!0,columns:()=>[{type:"selection",align:"center",width:48},{key:"cname",title:"采集器名称",align:"center",width:200},{key:"caddr",title:"采集地址",align:"center",width:200},{key:"accmed",title:"接入方式",align:"center",width:160,render:n=>{const s=Je;return e("span",null,[v(" "),s[n.accmed]])}},{key:"pname",title:"过滤策略",align:"center",width:200},{key:"pip",title:"代理服务器",align:"center",width:200},{key:"type",title:"日志源设备",align:"center",width:200},{key:"enable",title:"状态",align:"center",width:160,render:n=>e(Q,{justify:"center"},{default:()=>[n.accmed==4?e(re,{value:n.enable,"onUpdate:value":[s=>n.enable=s,()=>I(n)],checkedValue:0,uncheckedValue:1},{checked:()=>e("span",null,[v("启用")]),unchecked:()=>e("span",null,[v("禁用")])}):e(re,{value:n.enable,"onUpdate:value":[s=>n.enable=s,()=>B(n)],checkedValue:0,uncheckedValue:1},{checked:()=>e("span",null,[v("启用")]),unchecked:()=>e("span",null,[v("禁用")])})]})},{key:"operate",title:S("common.operate"),align:"center",width:130,fixed:"right",render:n=>{let s;return e("div",{class:"flex-center gap-8px"},[Y(e(Z,{type:"primary",ghost:!0,size:"small",onClick:()=>R(n.id)},de(s=S("common.edit"))?s:{default:()=>[s]}),[[W("no-auth"),"sys.collection.mengement.update"]]),e(ra,{onPositiveClick:()=>q(n.id)},{default:()=>S("common.confirmDelete"),trigger:()=>{let d;return Y(e(Z,{type:"error",ghost:!0,size:"small"},de(d=S("common.delete"))?d:{default:()=>[d]}),[[W("no-auth"),"sys.collection.mengement.delete"]])}})])}}]}),I=async n=>{var d;const s={id:n.id,enable:n.enable,ip:n.enable==1?n.caddr:void 0};try{const{data:u,error:E}=await Ke(s);E||((d=window.$message)==null||d.success(n.enable==1?"禁用成功":"启用成功"),c())}catch{n.enable=n.enable==1?0:1}},B=async n=>{var s;try{const{data:d,error:u}=await ye([n]);u||((s=window.$message)==null||s.success(n.enable==1?"禁用成功":"启用成功"),c())}catch{n.enable=n.enable==1?0:1}},{drawerVisible:a,operateType:C,editingData:f,handleAdd:U,handleEdit:x,checkedRowKeys:h,onBatchDeleted:F,onDeleted:A,closeDrawer:L}=qe(b,c);async function M(){console.log(h.value),V(h.value.join(","),n=>{F()})}function q(n){V(n,s=>{A()})}function R(n){x(n)}async function V(n,s){const d=await We(n,1);console.log("data",d),s&&s(d)}return(n,s)=>{const d=Ae,u=ta,E=he;return g(),be("div",da,[e(ca,{model:o(z),"onUpdate:model":s[0]||(s[0]=r=>K(z)?z.value=r:null),onReset:o(D),onSearch:o(c)},null,8,["model","onReset","onSearch"]),e(E,{title:"采集器管理",bordered:!1,size:"small",class:"sm:flex-1-hidden"},{"header-extra":l(()=>[e(d,{columns:o(N),"onUpdate:columns":s[1]||(s[1]=r=>K(N)?N.value=r:null),"disabled-delete":o(h).length===0,"is-view-add-button":o(ce)("sys.collection.mengement.insert"),"is-view-delete-button":o(ce)("sys.collection.mengement.delete"),loading:o(k),onAdd:o(U),onDelete:M,onRefresh:o(c)},null,8,["columns","disabled-delete","is-view-add-button","is-view-delete-button","loading","onAdd","onRefresh"])]),default:l(()=>[e(u,{"checked-row-keys":o(h),"onUpdate:checkedRowKeys":s[2]||(s[2]=r=>K(h)?h.value=r:null),columns:o(m),data:o(b),size:"small","flex-height":!o(O).isMobile,"scroll-x":o(m).reduce((r,t)=>r+t.width,0),loading:o(k),remote:"","row-key":r=>r.id,pagination:o(j),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","scroll-x","loading","row-key","pagination"]),e(ia,{visible:o(a),"onUpdate:visible":s[3]||(s[3]=r=>K(a)?a.value=r:null),"operate-type":o(C),"row-data":o(f),onSubmitted:o(c)},null,8,["visible","operate-type","row-data","onSubmitted"])]),_:1})])}}});export{Fa as default};