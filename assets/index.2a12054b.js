import{D as e}from"./index.4fc63b1e.js";import{u as t}from"./useDescription.6d761b9e.js";import{_ as s}from"./index.8f10bbc5.js";import{d as a,h as i,o as r,i as o,w as m,j as n}from"./index.2939fdc1.js";import"./index.9f78dd61.js";import"./responsiveObserve.c545f1cc.js";import"./index.986dc53b.js";import"./index.349f17b8.js";import"./domUtils.23ad72a3.js";import"./_stringToArray.a799229e.js";import"./RightOutlined.2baba5d6.js";/* empty css              */import"./useTimeout.67ceb28f.js";import"./useScrollTo.2b58c1f3.js";import"./animation.099f7e3e.js";import"./get.be602999.js";import"./index.caf3d66c.js";import"./index.e44b060d.js";import"./EllipsisOutlined.1ba3ea7d.js";import"./types.4b223edf.js";import"./isEqual.865c106c.js";import"./toInteger.678f8ea5.js";import"./DownOutlined.b142b9ae.js";import"./index.02d5f2ed.js";import"./usePageContext.b24584e1.js";import"./transButton.093b686d.js";import"./ArrowLeftOutlined.43b2ccc8.js";import"./vendor.3b1829c7.js";const l={username:"test",nickName:"VB",age:25,phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},d=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,t)=>`${t.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}];var p=a({components:{Description:e,PageWrapper:s},setup(){const[e]=t({title:"useDescription",data:l,schema:d}),[s]=t({title:"无边框",bordered:!1,data:l,schema:d});return{mockData:l,schema:d,register:e,register1:s}}});p.render=function(e,t,s,a,l,d){const p=i("Description"),c=i("PageWrapper");return r(),o(c,{title:"详情组件示例"},{default:m((()=>[n(p,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),n(p,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),n(p,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),n(p,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])])),_:1})};export default p;
