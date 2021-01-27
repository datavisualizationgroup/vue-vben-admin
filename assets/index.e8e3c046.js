import{d as e,h as i,o as t,i as r,bw as o,j as s}from"./index.e5cea104.js";import{D as a}from"./index.9dcfd344.js";import{D as d}from"./index.b3c52057.js";import{_ as m}from"./index.afe6bfe0.js";import{_ as n}from"./index.d3ad540a.js";import{refundSchema as p,refundData as c,personSchema as j,personData as l,refundTableData as u,refundTableSchema as f,refundTimeTableSchema as b,refundTimeTableData as x}from"./data.364cb97c.js";import{u as g}from"./useTable.e4a522b5.js";import"./vendor.3b1829c7.js";import"./index.05c84fb1.js";import"./responsiveObserve.c545f1cc.js";import"./index.e918eef3.js";import"./index.89c258d7.js";import"./domUtils.ddc9ae66.js";import"./_stringToArray.553093ef.js";import"./RightOutlined.63cc3316.js";import"./index.95c10fda.js";import"./useTimeout.8ab5f977.js";import"./useScrollTo.e484cebb.js";import"./animation.7591f702.js";import"./index.49f6d8c8.js";import"./SearchOutlined.874b7e0b.js";import"./CheckOutlined.bd11f80d.js";import"./DownOutlined.835763f0.js";import"./index.32c75ba1.js";import"./index.bf329a73.js";import"./index.e908b408.js";import"./findIndex.f8cb4e98.js";import"./isEqual.ada18de9.js";import"./_baseProperty.74f89655.js";import"./toInteger.dac4ce3f.js";import"./index.963edebb.js";import"./index.749776b8.js";import"./index.0e9635a5.js";import"./UpOutlined.aee13fa3.js";import"./index.b44f38c4.js";import"./EyeOutlined.6de6da94.js";import"./index.c16a3a36.js";import"./colors.ebbba271.js";import"./RedoOutlined.101739ca.js";import"./index.99a56753.js";import"./EllipsisOutlined.9bd10310.js";import"./types.3e3d7f7c.js";import"./Tree.d0424ea2.js";import"./util.5e4e3845.js";import"./useAttrs.72cac050.js";import"./index.aae62fa3.js";import"./uuid.ae30f5ed.js";import"./index.c01160de.js";import"./DeleteOutlined.7972fc34.js";import"./index.ab16b779.js";import"./useWindowSizeFn.72a9ad65.js";import"./FullscreenOutlined.4b07a752.js";import"./index.03cc0e18.js";import"./index.98a232e0.js";import"./LeftOutlined.0d50da53.js";import"./download.c8a751c0.js";import"./index.47e10f1b.js";import"./DoubleLeftOutlined.3b854037.js";import"./DoubleRightOutlined.177ad5e8.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.3169e759.js";import"./CaretDownFilled.f8724d3e.js";import"./clickOutside.f7af08fb.js";import"./useSortable.3b239089.js";import"./SettingOutlined.97985744.js";import"./useExpose.c4fc10e5.js";import"./useForm.12972363.js";import"./index.b849a135.js";import"./index.cf091346.js";import"./usePageContext.32d49c7d.js";import"./ArrowLeftOutlined.36c69fe8.js";import"./index.4579ebfb.js";import"./isNumeric.2bec345d.js";var h=e({components:{Description:d,BasicTable:m,PageWrapper:n,[a.name]:a},setup(){const[e]=g({title:"退货商品",dataSource:u,columns:f,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let i=0,t=0;return e.forEach((e=>{i+=e.t5,t+=e.t6})),[{t1:"总计",t5:i,t6:t}]}}),[i]=g({title:"退货进度",columns:b,pagination:!1,dataSource:x,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:i,refundSchema:p,refundData:c,personSchema:j,personData:l}}});const O=o("data-v-ada482fc"),T=O(((e,o,a,d,m,n)=>{const p=i("Description"),c=i("a-divider"),j=i("BasicTable"),l=i("PageWrapper");return t(),r(l,{title:"基础详情页",contentBackground:""},{default:O((()=>[s(p,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),s(c),s(p,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),s(c),s(j,{onRegister:e.registerRefundTable},null,8,["onRegister"]),s(c),s(j,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=T,h.__scopeId="data-v-ada482fc";export default h;
