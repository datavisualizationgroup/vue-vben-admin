var e=Object.assign;import{d as t,r as i,a as r,aD as o,cp as n,cq as s,h as p,o as d,i as a,bw as m,j,a3 as c,b8 as f,k as l}from"./index.2939fdc1.js";import{S as u}from"./index.68e26a8c.js";import b from"./Step1.89a3a252.js";import x from"./Step2.17766075.js";import S from"./Step3.5300b568.js";import{_ as v}from"./index.8f10bbc5.js";import"./vendor.3b1829c7.js";import"./CheckOutlined.879a0e22.js";import"./index.d3f62ecf.js";import"./SearchOutlined.a4238ff7.js";import"./DownOutlined.b142b9ae.js";import"./index.d3fee03a.js";import"./EyeOutlined.0b471496.js";import"./index.c0c02d13.js";import"./index.545e10eb.js";import"./index.bb224cf1.js";import"./index.335dc48f.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.d5328751.js";import"./isEqual.865c106c.js";import"./get.be602999.js";import"./_baseProperty.74f89655.js";import"./toInteger.678f8ea5.js";import"./index.e95659c3.js";import"./index.fcae8810.js";import"./index.138b5d82.js";import"./UpOutlined.f199eda6.js";import"./index.5ad3be94.js";import"./RightOutlined.2baba5d6.js";import"./RedoOutlined.bdb3ffcd.js";import"./index.e44b060d.js";import"./EllipsisOutlined.1ba3ea7d.js";import"./types.4b223edf.js";import"./Tree.e91258be.js";import"./util.fcad97a6.js";/* empty css              */import"./uuid.f9a99d1d.js";import"./index.91e79029.js";import"./DeleteOutlined.02b57901.js";import"./index.15812e91.js";import"./index.8b3a39b7.js";import"./useTimeout.67ceb28f.js";import"./useWindowSizeFn.1fc4fbb8.js";import"./index.986dc53b.js";import"./index.349f17b8.js";import"./domUtils.23ad72a3.js";import"./_stringToArray.a799229e.js";import"./useScrollTo.2b58c1f3.js";import"./animation.099f7e3e.js";import"./FullscreenOutlined.d1ef784c.js";import"./index.77d6519d.js";import"./index.f44a89fc.js";import"./LeftOutlined.64970367.js";import"./download.b4c30f38.js";import"./data.2505cb7f.js";import"./useForm.8adff8f8.js";import"./index.9f78dd61.js";import"./index.1cc6f976.js";import"./index.caf3d66c.js";import"./index.02d5f2ed.js";import"./usePageContext.b24584e1.js";import"./transButton.093b686d.js";import"./ArrowLeftOutlined.43b2ccc8.js";var O=t({components:{Step1:b,Step2:x,Step3:S,PageWrapper:v,[u.name]:u,[u.Step.name]:u.Step},setup(){const t=i(0),n=r({initSetp2:!1,initSetp3:!1});return e({current:t,handleStep1Next:function(e){t.value++,n.initSetp2=!0},handleStep2Next:function(e){t.value++,n.initSetp3=!0},handleRedo:function(){t.value=0,n.initSetp2=!1,n.initSetp3=!1},handleStepPrev:function(){t.value--}},o(n))}});const h=m("data-v-53523f72");n("data-v-53523f72");const g={class:"step-form-form"},N={class:"mt-5"};s();const P=h(((e,t,i,r,o,n)=>{const s=p("a-step"),m=p("a-steps"),u=p("Step1"),b=p("Step2"),x=p("Step3"),S=p("PageWrapper");return d(),a(S,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:h((()=>[j("div",g,[j(m,{current:e.current},{default:h((()=>[j(s,{title:"填写转账信息"}),j(s,{title:"确认转账信息"}),j(s,{title:"完成"})])),_:1},8,["current"])]),j("div",N,[c(j(u,{onNext:e.handleStep1Next},null,8,["onNext"]),[[f,0===e.current]]),e.initSetp2?c((d(),a(b,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[f,1===e.current]]):l("",!0),e.initSetp3?c((d(),a(x,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[f,2===e.current]]):l("",!0)])])),_:1})}));O.render=P,O.__scopeId="data-v-53523f72";export default O;
