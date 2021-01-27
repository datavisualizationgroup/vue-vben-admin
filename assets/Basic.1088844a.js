import{_ as e}from"./index.afe6bfe0.js";import{getBasicColumns as i,getBasicData as t}from"./tableData.7aa0192c.js";import{_ as o}from"./index.d3ad540a.js";import{d as r,r as s,h as a,o as d,i as n,j as p,w as m,m as l,l as c}from"./index.e5cea104.js";import"./index.49f6d8c8.js";import"./SearchOutlined.874b7e0b.js";import"./CheckOutlined.bd11f80d.js";import"./DownOutlined.835763f0.js";import"./index.32c75ba1.js";import"./index.bf329a73.js";import"./responsiveObserve.c545f1cc.js";import"./index.e908b408.js";import"./vendor.3b1829c7.js";import"./findIndex.f8cb4e98.js";import"./isEqual.ada18de9.js";import"./_baseProperty.74f89655.js";import"./toInteger.dac4ce3f.js";import"./index.963edebb.js";import"./index.749776b8.js";import"./index.0e9635a5.js";import"./UpOutlined.aee13fa3.js";import"./index.b44f38c4.js";import"./EyeOutlined.6de6da94.js";import"./index.c16a3a36.js";import"./colors.ebbba271.js";import"./RightOutlined.63cc3316.js";import"./RedoOutlined.101739ca.js";import"./index.99a56753.js";import"./EllipsisOutlined.9bd10310.js";import"./types.3e3d7f7c.js";import"./Tree.d0424ea2.js";import"./util.5e4e3845.js";import"./useAttrs.72cac050.js";import"./index.95c10fda.js";import"./index.aae62fa3.js";import"./uuid.ae30f5ed.js";import"./index.c01160de.js";import"./DeleteOutlined.7972fc34.js";import"./index.ab16b779.js";import"./useTimeout.8ab5f977.js";import"./useWindowSizeFn.72a9ad65.js";import"./index.e918eef3.js";import"./index.89c258d7.js";import"./domUtils.ddc9ae66.js";import"./_stringToArray.553093ef.js";import"./useScrollTo.e484cebb.js";import"./animation.7591f702.js";import"./FullscreenOutlined.4b07a752.js";import"./index.9dcfd344.js";import"./index.03cc0e18.js";import"./index.98a232e0.js";import"./LeftOutlined.0d50da53.js";import"./download.c8a751c0.js";import"./index.47e10f1b.js";import"./DoubleLeftOutlined.3b854037.js";import"./DoubleRightOutlined.177ad5e8.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.3169e759.js";import"./CaretDownFilled.f8724d3e.js";import"./clickOutside.f7af08fb.js";import"./useSortable.3b239089.js";import"./SettingOutlined.97985744.js";import"./useExpose.c4fc10e5.js";import"./useForm.12972363.js";import"./index.b849a135.js";import"./index.cf091346.js";import"./usePageContext.32d49c7d.js";import"./ArrowLeftOutlined.36c69fe8.js";var j=r({components:{BasicTable:e,PageWrapper:o},setup(){const e=s(!1),o=s(!1),r=s(!0),a=s(!0),d=s(!1);return{columns:i(),data:t(),canResize:e,loading:o,striped:r,border:a,toggleStriped:function(){r.value=!r.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){o.value=!0,setTimeout((()=>{o.value=!1,d.value={pageSize:20}}),3e3)},toggleBorder:function(){a.value=!a.value},pagination:d}}});const u={class:"p-4"},f=l(" 开启loading ");j.render=function(e,i,t,o,r,s){const j=a("a-button"),b=a("BasicTable");return d(),n("div",u,[p(b,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination},{toolbar:m((()=>[p(j,{type:"primary",onClick:e.toggleCanResize},{default:m((()=>[l(c(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),p(j,{type:"primary",onClick:e.toggleBorder},{default:m((()=>[l(c(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),p(j,{type:"primary",onClick:e.toggleLoading},{default:m((()=>[f])),_:1},8,["onClick"]),p(j,{type:"primary",onClick:e.toggleStriped},{default:m((()=>[l(c(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])};export default j;
