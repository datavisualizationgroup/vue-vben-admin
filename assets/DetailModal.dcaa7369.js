import{_ as e}from"./index.ab16b779.js";import{D as s}from"./index.b3c52057.js";import{u as t}from"./useDescription.6401b6c0.js";import{d as i,u as o,h as r,o as a,i as n,w as c,j as m,T as d}from"./index.e5cea104.js";import{getDescSchema as p}from"./data.dc2f6e85.js";import"./useTimeout.8ab5f977.js";import"./useAttrs.72cac050.js";import"./useWindowSizeFn.72a9ad65.js";import"./index.e918eef3.js";import"./index.89c258d7.js";import"./domUtils.ddc9ae66.js";import"./_stringToArray.553093ef.js";import"./RightOutlined.63cc3316.js";import"./index.95c10fda.js";import"./useScrollTo.e484cebb.js";import"./animation.7591f702.js";import"./FullscreenOutlined.4b07a752.js";import"./isEqual.ada18de9.js";import"./index.05c84fb1.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./index.c16a3a36.js";import"./colors.ebbba271.js";var j=i({name:"ErrorLogDetailModal",components:{BasicModal:e,Description:s},props:{info:{type:Object,default:null}},setup(){const{t:e}=o(),[s]=t({column:2,schema:p()});return{register:s,useI18n:o,t:e}}});j.render=function(e,s,t,i,o,p){const j=r("Description"),l=r("BasicModal");return a(),n(l,d({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:c((()=>[m(j,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default j;
