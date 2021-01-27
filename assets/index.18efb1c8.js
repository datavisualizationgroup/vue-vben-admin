import{d as e,h as r,o as i,i as o,w as t,j as s,m as a}from"./index.e5cea104.js";import{A as n}from"./index.aae62fa3.js";import{u as p}from"./index.ec59cfd6.js";import d from"./Drawer1.981f346c.js";import m from"./Drawer2.5665e30d.js";import c from"./Drawer3.f0aaf616.js";import j from"./Drawer4.3465d42d.js";import l from"./Drawer5.82acf057.js";import{_ as f}from"./index.d3ad540a.js";import"./vendor.3b1829c7.js";import"./index.f0c93d10.js";import"./index.e918eef3.js";import"./index.89c258d7.js";import"./domUtils.ddc9ae66.js";import"./_stringToArray.553093ef.js";import"./RightOutlined.63cc3316.js";import"./index.95c10fda.js";import"./useTimeout.8ab5f977.js";import"./useScrollTo.e484cebb.js";import"./animation.7591f702.js";import"./ArrowLeftOutlined.36c69fe8.js";import"./useAttrs.72cac050.js";import"./isEqual.ada18de9.js";import"./index.32c75ba1.js";import"./index.bf329a73.js";import"./responsiveObserve.c545f1cc.js";import"./index.e908b408.js";import"./findIndex.f8cb4e98.js";import"./_baseProperty.74f89655.js";import"./toInteger.dac4ce3f.js";import"./index.963edebb.js";import"./index.49f6d8c8.js";import"./SearchOutlined.874b7e0b.js";import"./CheckOutlined.bd11f80d.js";import"./DownOutlined.835763f0.js";import"./index.749776b8.js";import"./index.0e9635a5.js";import"./UpOutlined.aee13fa3.js";import"./index.b44f38c4.js";import"./EyeOutlined.6de6da94.js";import"./index.c16a3a36.js";import"./colors.ebbba271.js";import"./RedoOutlined.101739ca.js";import"./index.99a56753.js";import"./EllipsisOutlined.9bd10310.js";import"./types.3e3d7f7c.js";import"./Tree.d0424ea2.js";import"./util.5e4e3845.js";import"./uuid.ae30f5ed.js";import"./index.c01160de.js";import"./DeleteOutlined.7972fc34.js";import"./index.ab16b779.js";import"./useWindowSizeFn.72a9ad65.js";import"./FullscreenOutlined.4b07a752.js";import"./index.9dcfd344.js";import"./index.03cc0e18.js";import"./index.98a232e0.js";import"./LeftOutlined.0d50da53.js";import"./download.c8a751c0.js";import"./useForm.12972363.js";import"./index.b849a135.js";import"./index.cf091346.js";import"./usePageContext.32d49c7d.js";import"./transButton.3169e759.js";var u=e({components:{Alert:n,PageWrapper:f,Drawer1:d,Drawer2:m,Drawer3:c,Drawer4:j,Drawer5:l},setup(){const[e,{openDrawer:r,setDrawerProps:i}]=p(),[o,{openDrawer:t}]=p(),[s,{openDrawer:a}]=p(),[n,{openDrawer:d}]=p(),[m,{openDrawer:c}]=p();return{register1:e,openDrawer1:r,register2:o,openDrawer2:t,register3:s,openDrawer3:a,register4:n,register5:m,openDrawer5:c,send:function(){d(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const w=a("打开Drawer"),D=a("打开Drawer"),g=a("打开Drawer"),x=a("打开Drawer并传递数据"),b=a("打开详情Drawer");u.render=function(e,a,n,p,d,m){const c=r("Alert"),j=r("a-button"),l=r("Drawer1"),f=r("Drawer2"),u=r("Drawer3"),y=r("Drawer4"),O=r("Drawer5"),R=r("PageWrapper");return i(),o(R,{title:"抽屉组件使用示例"},{default:t((()=>[s(c,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:t((()=>[w])),_:1},8,["onClick"]),s(c,{message:"内外同时控制显示隐藏","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[1]||(a[1]=r=>e.openDrawer2(!0))},{default:t((()=>[D])),_:1}),s(c,{message:"自适应高度/显示footer","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[2]||(a[2]=r=>e.openDrawer3(!0))},{default:t((()=>[g])),_:1}),s(c,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[x])),_:1},8,["onClick"]),s(c,{message:"详情页模式","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[3]||(a[3]=r=>e.openDrawer5(!0))},{default:t((()=>[b])),_:1}),s(l,{onRegister:e.register1},null,8,["onRegister"]),s(f,{onRegister:e.register2},null,8,["onRegister"]),s(u,{onRegister:e.register3},null,8,["onRegister"]),s(y,{onRegister:e.register4},null,8,["onRegister"]),s(O,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default u;
