import{r as l}from"./index.CVf8TyFT.js";var u={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=l,f=Symbol.for("react.element"),h=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,_=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,a){var r,o={},n=null,s=null;a!==void 0&&(n=""+a),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)m.call(e,r)&&!x.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:f,type:t,key:n,ref:s,props:o,_owner:_.current}}i.Fragment=h;i.jsx=c;i.jsxs=c;u.exports=i;var k=u.exports;function y({recipeId:t,initialCount:e}){const[a,r]=l.useState(e),o=async()=>{const n={title:document.title,text:"Bekijk dit heerlijke ijsrecept!",url:window.location.href};try{navigator.share?(await navigator.share(n),fetch(`https://backend-ninja-creami.maxhendriks.workers.dev/api/share/${t}`,{method:"POST"}),r(d=>d+1)):alert("Delen wordt niet ondersteund door je browser. Kopieer de link handmatig.")}catch(s){console.error("Error sharing:",s)}};return k.jsxs("button",{onClick:o,className:"font-bold text-ice-green hover:underline",children:["Delen (",a,")"]})}export{y as default};
