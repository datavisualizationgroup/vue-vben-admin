import{d as t,aK as e,K as i,o as s,i as o,l as r,k as n}from"./index.2939fdc1.js";import{c as a}from"./index.ea70fd08.js";import"./vendor.3b1829c7.js";import"./isNumeric.2bec345d.js";import"./RightOutlined.2baba5d6.js";import"./LeftOutlined.64970367.js";import"./index.e44b060d.js";import"./EllipsisOutlined.1ba3ea7d.js";import"./types.4b223edf.js";import"./isEqual.865c106c.js";import"./toInteger.678f8ea5.js";/* empty css              */import"./useTimeout.67ceb28f.js";import"./useHeaderSetting.e704d7a6.js";import"./domUtils.23ad72a3.js";import"./_stringToArray.a799229e.js";import"./useSortable.5e574711.js";import"./index.986dc53b.js";import"./index.349f17b8.js";import"./useScrollTo.2b58c1f3.js";import"./animation.099f7e3e.js";import"./index.e161a3e5.js";import"./useWindowSizeFn.1fc4fbb8.js";import"./usePageContext.b24584e1.js";import"./index.0455394f.js";import"./clickOutside.c80b1148.js";import"./index.11118663.js";import"./UpOutlined.f199eda6.js";import"./DownOutlined.b142b9ae.js";import"./PlusOutlined.56edf2b7.js";import"./index.77d6519d.js";var m=t({name:"MenuItemTag",props:a,setup(t){const{prefixCls:s}=e("basic-menu-item-tag"),o=i((()=>{const{item:e,showTitle:i,isHorizontal:s}=t;if(!e||i||s)return!1;const{tag:o}=e;if(!o)return!1;const{dot:r,content:n}=o;return!(!r&&!n)})),r=i((()=>{if(!o.value)return"";const{item:e}=t,{tag:i}=e,{dot:s,content:r}=i;return s?"":r})),n=i((()=>{const{item:e}=t,{tag:i={}}=e||{},{dot:o,type:r="error"}=i;return[s,[`${s}--${r}`],{[`${s}--dot`]:o}]}));return{prefixCls:s,getTagClass:n,getShowTag:o,getContent:r}}});m.render=function(t,e,i,a,m,d){return t.getShowTag?(s(),o("span",{key:0,class:t.getTagClass},r(t.getContent),3)):n("",!0)};export default m;
