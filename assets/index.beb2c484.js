import{M as e}from"./index.36d317fa.js";import{_ as t}from"./index.d3ad540a.js";import{d as n,r as a,e as o,h as r,o as i,i as s,w as d,j as m,m as l}from"./index.e5cea104.js";import"./index.b849a135.js";import"./index.99a56753.js";import"./RightOutlined.63cc3316.js";import"./EllipsisOutlined.9bd10310.js";import"./types.3e3d7f7c.js";import"./isEqual.ada18de9.js";import"./toInteger.dac4ce3f.js";import"./DownOutlined.835763f0.js";import"./index.95c10fda.js";import"./index.cf091346.js";import"./usePageContext.32d49c7d.js";import"./transButton.3169e759.js";import"./ArrowLeftOutlined.36c69fe8.js";import"./vendor.3b1829c7.js";var p=n({components:{MarkDown:e,PageWrapper:t},setup(){const e=a(null),t=a("\n# title\n\n# content\n");return{value:t,toggleTheme:function(){const t=o(e);if(!t)return;t.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){t.value=e}}}});const u=l("黑暗主题");p.render=function(e,t,n,a,o,l){const p=r("a-button"),c=r("MarkDown"),f=r("PageWrapper");return i(),s(f,{title:"MarkDown组件示例"},{default:d((()=>[m(p,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:d((()=>[u])),_:1},8,["onClick"]),m(c,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default p;
