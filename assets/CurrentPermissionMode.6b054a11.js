import{d as s,K as e,bH as o,dA as i,bG as n,h as r,o as t,i as d,j as a,w as m,m as c,l}from"./index.2939fdc1.js";import{D as p}from"./index.c0c02d13.js";import"./vendor.3b1829c7.js";var u=s({name:"CurrentPermissionMode",components:{Divider:p},setup(){const s=e((()=>n.getProjectConfig.permissionMode)),{togglePermissionMode:r}=i();return{permissionMode:s,PermissionModeEnum:o,togglePermissionMode:r}}});const M={class:"mt-2"},f=c(" 当前权限模式： "),g=c(" 切换权限模式 ");u.render=function(s,e,o,i,n,p){const u=r("a-button"),P=r("Divider");return t(),d("div",M,[f,a(u,{type:"link"},{default:m((()=>[c(l(s.permissionMode===s.PermissionModeEnum.BACK?"后台权限模式":"前端角色权限模式"),1)])),_:1}),a(u,{class:"ml-4",onClick:s.togglePermissionMode,type:"primary"},{default:m((()=>[g])),_:1},8,["onClick"]),a(P)])};export default u;
