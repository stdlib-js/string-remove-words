"use strict";var p=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var h=p(function(E,g){
var q=require('@stdlib/assert-is-string-array/dist'),m=require('@stdlib/string-uppercase/dist'),b=require('@stdlib/assert-is-boolean/dist').isPrimitive,c=require('@stdlib/assert-is-string/dist').isPrimitive,k=require('@stdlib/nlp-tokenize/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist');function y(n,e,f){var a,u,s,t,o,v,r,i;if(!c(n))throw new TypeError(l('1PF3F',n));if(!q(e))throw new TypeError(l('1PFAS',e));if(arguments.length>2&&!b(f))throw new TypeError(l('1PFAL',f));if(a=k(n,!0),v=e.length,o=[],f){for(s=e.slice(),r=0;r<v;r++)s[r]=m(s[r]);for(r=0;r<a.length;r++){for(t=!0,u=m(a[r]),i=0;i<v;i++)if(s[i]===u){t=!1;break}t&&o.push(a[r])}return o.join("")}for(r=0;r<a.length;r++){for(u=a[r],t=!0,i=0;i<v;i++)if(e[i]===u){t=!1;break}t&&o.push(u)}return o.join("")}g.exports=y
});var T=h();module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map