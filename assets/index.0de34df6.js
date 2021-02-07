import{d as e,h as r,o as i,i as o,w as t,j as s,m as a}from"./index.2939fdc1.js";import{A as n}from"./index.15812e91.js";import{u as p}from"./index.97abb5f5.js";import m from"./Drawer1.3bc18991.js";import d from"./Drawer2.1d1758a1.js";import f from"./Drawer3.387b782f.js";import j from"./Drawer4.2b9b8621.js";import c from"./Drawer5.5e6987e1.js";import{_ as l}from"./index.8f10bbc5.js";import"./vendor.3b1829c7.js";import"./index.0455394f.js";import"./index.986dc53b.js";import"./index.349f17b8.js";import"./domUtils.23ad72a3.js";import"./_stringToArray.a799229e.js";import"./RightOutlined.2baba5d6.js";/* empty css              */import"./useTimeout.67ceb28f.js";import"./useScrollTo.2b58c1f3.js";import"./animation.099f7e3e.js";import"./ArrowLeftOutlined.43b2ccc8.js";import"./isEqual.865c106c.js";import"./index.545e10eb.js";import"./index.bb224cf1.js";import"./index.335dc48f.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.d5328751.js";import"./get.be602999.js";import"./_baseProperty.74f89655.js";import"./toInteger.678f8ea5.js";import"./index.e95659c3.js";import"./index.d3fee03a.js";import"./SearchOutlined.a4238ff7.js";import"./EyeOutlined.0b471496.js";import"./index.d3f62ecf.js";import"./CheckOutlined.879a0e22.js";import"./DownOutlined.b142b9ae.js";import"./index.fcae8810.js";import"./index.138b5d82.js";import"./UpOutlined.f199eda6.js";import"./index.5ad3be94.js";import"./RedoOutlined.bdb3ffcd.js";import"./index.e44b060d.js";import"./EllipsisOutlined.1ba3ea7d.js";import"./types.4b223edf.js";import"./Tree.e91258be.js";import"./util.fcad97a6.js";import"./uuid.f9a99d1d.js";import"./index.91e79029.js";import"./DeleteOutlined.02b57901.js";import"./index.8b3a39b7.js";import"./useWindowSizeFn.1fc4fbb8.js";import"./FullscreenOutlined.d1ef784c.js";import"./index.c0c02d13.js";import"./index.77d6519d.js";import"./index.f44a89fc.js";import"./LeftOutlined.64970367.js";import"./download.b4c30f38.js";import"./useForm.8adff8f8.js";import"./index.caf3d66c.js";import"./index.02d5f2ed.js";import"./usePageContext.b24584e1.js";import"./transButton.093b686d.js";var w=e({components:{Alert:n,PageWrapper:l,Drawer1:m,Drawer2:d,Drawer3:f,Drawer4:j,Drawer5:c},setup(){const[e,{openDrawer:r,setDrawerProps:i}]=p(),[o,{openDrawer:t}]=p(),[s,{openDrawer:a}]=p(),[n,{openDrawer:m}]=p(),[d,{openDrawer:f}]=p();return{register1:e,openDrawer1:r,register2:o,openDrawer2:t,register3:s,openDrawer3:a,register4:n,register5:d,openDrawer5:f,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const u=a(" 打开Drawer "),b=a(" 打开Drawer "),D=a(" 打开Drawer "),g=a(" 打开Drawer并传递数据 "),x=a(" 打开详情Drawer ");w.render=function(e,a,n,p,m,d){const f=r("Alert"),j=r("a-button"),c=r("Drawer1"),l=r("Drawer2"),w=r("Drawer3"),y=r("Drawer4"),O=r("Drawer5"),R=r("PageWrapper");return i(),o(R,{title:"抽屉组件使用示例"},{default:t((()=>[s(f,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:t((()=>[u])),_:1},8,["onClick"]),s(f,{message:"内外同时控制显示隐藏","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[1]||(a[1]=r=>e.openDrawer2(!0))},{default:t((()=>[b])),_:1}),s(f,{message:"自适应高度/显示footer","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[2]||(a[2]=r=>e.openDrawer3(!0))},{default:t((()=>[D])),_:1}),s(f,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[g])),_:1},8,["onClick"]),s(f,{message:"详情页模式","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[3]||(a[3]=r=>e.openDrawer5(!0))},{default:t((()=>[x])),_:1}),s(c,{onRegister:e.register1},null,8,["onRegister"]),s(l,{onRegister:e.register2},null,8,["onRegister"]),s(w,{onRegister:e.register3},null,8,["onRegister"]),s(y,{onRegister:e.register4},null,8,["onRegister"]),s(O,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default w;
