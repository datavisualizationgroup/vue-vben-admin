import{_ as s,a as e}from"./index.8b3a39b7.js";import{d as o,h as t,o as i,i as a,w as r,j as l,a7 as d,m as n}from"./index.2939fdc1.js";import"./useTimeout.67ceb28f.js";import"./useWindowSizeFn.1fc4fbb8.js";import"./index.986dc53b.js";import"./index.349f17b8.js";import"./domUtils.23ad72a3.js";import"./_stringToArray.a799229e.js";import"./RightOutlined.2baba5d6.js";/* empty css              */import"./useScrollTo.2b58c1f3.js";import"./animation.099f7e3e.js";import"./FullscreenOutlined.d1ef784c.js";import"./isEqual.865c106c.js";import"./vendor.3b1829c7.js";var c=o({components:{BasicModal:s},setup(){const[s,{closeModal:o,setModalProps:t}]=e();return{register:s,closeModal:o,setModalProps:()=>{t({title:"Modal New Title"})}}}});const p=n(" 从内部关闭弹窗 "),m=n(" 从内部修改title ");c.render=function(s,e,o,n,c,u){const f=t("a-button"),j=t("BasicModal");return i(),a(j,d(s.$attrs,{onRegister:s.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:r((()=>[l(f,{type:"primary",onClick:s.closeModal,class:"mr-2"},{default:r((()=>[p])),_:1},8,["onClick"]),l(f,{type:"primary",onClick:s.setModalProps},{default:r((()=>[m])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default c;
