import{bu as e,bY as n,bZ as t}from"./index.e5cea104.js";function i(i,s=150,r){let o=()=>{i()};const[a,d]=e(o,s,r);o=a;const m=()=>{r&&r.immediate&&o(),window.addEventListener("resize",o)},c=()=>{window.removeEventListener("resize",o),d()};return n((()=>{m()})),t((()=>{c()})),[m,c]}export{i as u};
