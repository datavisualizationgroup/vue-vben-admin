import{_ as e,a as i}from"./index.ec59cfd6.js";import{_ as t}from"./index.32c75ba1.js";import{d as s,h as r,o,i as d,w as n,j as a,T as p}from"./index.e5cea104.js";import{u as m}from"./useForm.12972363.js";import"./index.f0c93d10.js";import"./index.e918eef3.js";import"./index.89c258d7.js";import"./domUtils.ddc9ae66.js";import"./_stringToArray.553093ef.js";import"./RightOutlined.63cc3316.js";import"./index.95c10fda.js";import"./useTimeout.8ab5f977.js";import"./useScrollTo.e484cebb.js";import"./animation.7591f702.js";import"./ArrowLeftOutlined.36c69fe8.js";import"./useAttrs.72cac050.js";import"./isEqual.ada18de9.js";import"./index.bf329a73.js";import"./responsiveObserve.c545f1cc.js";import"./index.e908b408.js";import"./vendor.3b1829c7.js";import"./findIndex.f8cb4e98.js";import"./_baseProperty.74f89655.js";import"./toInteger.dac4ce3f.js";import"./index.963edebb.js";import"./index.49f6d8c8.js";import"./SearchOutlined.874b7e0b.js";import"./CheckOutlined.bd11f80d.js";import"./DownOutlined.835763f0.js";import"./index.749776b8.js";import"./index.0e9635a5.js";import"./UpOutlined.aee13fa3.js";import"./index.b44f38c4.js";import"./EyeOutlined.6de6da94.js";import"./index.c16a3a36.js";import"./colors.ebbba271.js";import"./RedoOutlined.101739ca.js";import"./index.99a56753.js";import"./EllipsisOutlined.9bd10310.js";import"./types.3e3d7f7c.js";import"./Tree.d0424ea2.js";import"./util.5e4e3845.js";import"./index.aae62fa3.js";import"./uuid.ae30f5ed.js";import"./index.c01160de.js";import"./DeleteOutlined.7972fc34.js";import"./index.ab16b779.js";import"./useWindowSizeFn.72a9ad65.js";import"./FullscreenOutlined.4b07a752.js";import"./index.9dcfd344.js";import"./index.03cc0e18.js";import"./index.98a232e0.js";import"./LeftOutlined.0d50da53.js";import"./download.c8a751c0.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var j=s({components:{BasicDrawer:e,BasicForm:t},setup(){const[e,{setFieldsValue:t}]=m({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=i((e=>{t({field2:e.data,field1:e.info})}));return{register:s,schemas:c,registerForm:e}}});j.render=function(e,i,t,s,m,c){const j=r("BasicForm"),l=r("BasicDrawer");return o(),d(l,p(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:n((()=>[a("div",null,[a(j,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default j;
