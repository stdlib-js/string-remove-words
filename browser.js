// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function r(e){return"number"==typeof e}function n(e){var t,r="";for(t=0;t<e;t++)r+="0";return r}function o(e,t,r){var o=!1,i=t-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=r?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function l(e){var t,n,l;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=e.arg,l=parseInt(n,10),!isFinite(l)){if(!r(n))throw new Error("invalid integer. Value: "+n);l=0}return l<0&&("u"===e.specifier||10!==t)&&(l=4294967295+l+1),l<0?(n=(-l).toString(t),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=l.toString(t),l||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===t&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===t&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function s(e){return"string"==typeof e}var h=Math.abs,u=String.prototype.toLowerCase,c=String.prototype.toUpperCase,d=String.prototype.replace,v=/e\+(\d)$/,p=/e-(\d)$/,f=/^(\d+)$/,w=/^(\d+)e/,g=/\.0$/,y=/\.0*e/,m=/(\..*[^0])0*e/;function b(e){var t,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!r(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":h(o)<1e-4?((t=e.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(e.precision),e.alternate||(n=d.call(n,m,"$1e"),n=d.call(n,y,"e"),n=d.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=d.call(n,v,"e+0$1"),n=d.call(n,p,"e-0$1"),e.alternate&&(n=d.call(n,f,"$1."),n=d.call(n,w,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===c.call(e.specifier)?c.call(n):u.call(n)}function S(e){var t,r="";for(t=0;t<e;t++)r+=" ";return r}function _(e,t,r){var n=t-e.length;return n<0?e:e=r?e+S(n):S(n)+e}var I=String.fromCharCode,A=isNaN,C=Array.isArray;function D(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function E(e){var t,r,n,i,a,h,u,c,d;if(!C(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(h="",u=1,c=0;c<e.length;c++)if(s(n=e[c]))h+=n;else{if(t=void 0!==n.precision,!(n=D(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),r=n.flags,d=0;d<r.length;d++)switch(i=r.charAt(d)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,A(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=l(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):I(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),h+=n.arg||"",u+=1}return h}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function k(e){var t,r,n,o;for(r=[],o=0,n=M.exec(e);n;)(t=e.slice(o,M.lastIndex-n[0].length)).length&&r.push(t),r.push(T(n)),o=M.lastIndex,n=M.exec(e);return(t=e.slice(o)).length&&r.push(t),r}function O(e){return"string"==typeof e}function P(e){var t,r,n;if(!O(e))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=k(e),(r=new Array(arguments.length))[0]=t,n=1;n<r.length;n++)r[n]=arguments[n];return E.apply(null,r)}var j=Object.prototype,x=j.toString,V=j.__defineGetter__,N=j.__defineSetter__,Y=j.__lookupGetter__,W=j.__lookupSetter__,F=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,r){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===x.call(e))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof r||null===r||"[object Array]"===x.call(r))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((o="value"in r)&&(Y.call(e,t)||W.call(e,t)?(n=e.__proto__,e.__proto__=j,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&V&&V.call(e,t,r.get),a&&N&&N.call(e,t,r.set),e};function B(e,t,r){F(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function R(){return J&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString,$=Object.prototype.hasOwnProperty;function L(e,t){return null!=e&&$.call(e,t)}var K="function"==typeof Symbol?Symbol:void 0,Z="function"==typeof K?K.toStringTag:"",H=R()?function(e){var t,r,n;if(null==e)return G.call(e);r=e[Z],t=L(e,Z);try{e[Z]=void 0}catch(t){return G.call(e)}return n=G.call(e),t?e[Z]=r:delete e[Z],n}:function(e){return G.call(e)},U=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function z(e){if("function"!=typeof e)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",e));return function(t){var r,n;if(!U(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}function X(e){return"string"==typeof e}var q=String.prototype.valueOf,Q=R();function ee(e){return"object"==typeof e&&(e instanceof String||(Q?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object String]"===H(e)))}function te(e){return X(e)||ee(e)}B(te,"isPrimitive",X),B(te,"isObject",ee);var re=z(te.isPrimitive),ne=z(te.isObject),oe=z(te);function ie(e){if(!X(e))throw new TypeError(P("invalid argument. Must provide a string. Value: `%s`.",e));return e.toUpperCase()}function ae(e){return"boolean"==typeof e}B(oe,"primitives",re),B(oe,"objects",ne);var le=Boolean,se=Boolean.prototype.toString,he=R();function ue(e){return"object"==typeof e&&(e instanceof le||(he?function(e){try{return se.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function ce(e){return ae(e)||ue(e)}B(ce,"isPrimitive",ae),B(ce,"isObject",ue);var de={"i.e.":["i.e."],"I.e.":["I.e."],"I.E.":["I.E."],"e.g.":["e.g."],"E.g.":["E.g."],"E.G.":["E.G."],"et al.":["et al."],"etc.":["etc."],"vs.":["vs."],"A.S.A.P":["A.S.A.P"],"E.T.A.":["E.T.A."],"D.I.Y":["D.I.Y"],"R.S.V.P":["R.S.V.P"],"P.S.":["P.S."],"B.Y.O.B":["B.Y.O.B"],"Ms.":["Ms."],"Mr.":["Mr."],"Dr.":["Dr."],"Prof.":["Prof."],"Mrs.":["Mrs."],"Messrs.":["Messrs."],"Gov.":["Gov."],"Gen.":["Gen."],"Lt.":["Lt."],"Col.":["Col."],"Mt.":["Mt."],"Bros.":["Bros."],"Corp.":["Corp."],"Co.":["Co."],"co.":["co."],"Inc.":["Inc."],"Ltd.":["Ltd."],"Rep.":["Rep."],"Sen.":["Sen."],"Jr.":["Jr."],"Sr.":["Sr."],"Ph.D.":["Ph.D."],"J.D.":["J.D."],"M.D.":["M.D."],"Rev.":["Rev."],"Adm.":["Adm."],"St.":["St."],"a.m.":["a.m."],"p.m.":["p.m."],"b.c.":["b.c."],"B.C.":["B.C."],"a.d.":["a.d."],"A.D.":["A.D."],"b.c.e.":["b.c.e."],"B.C.E.":["B.C.E."],"Jan.":["Jan."],"Feb.":["Feb."],"Mar.":["Mar."],"Apr.":["Apr."],"May.":["May."],"Jun.":["Jun."],"Jul.":["Jul."],"Aug.":["Aug."],"Sep.":["Sep."],"Sept.":["Sept."],"Oct.":["Oct."],"Nov.":["Nov."],"Dec.":["Dec."],"Ala.":["Ala."],"Ariz.":["Ariz."],"Ark.":["Ark."],"Calif.":["Calif."],"Colo.":["Colo."],"Conn.":["Conn."],"Del.":["Del."],"D.C.":["D.C."],"Fla.":["Fla."],"Ga.":["Ga."],"Ill.":["Ill."],"Ind.":["Ind."],"Kans.":["Kans."],"Kan.":["Kan."],"Ky.":["Ky."],"La.":["La."],"Md.":["Md."],"Mass.":["Mass."],"Mich.":["Mich."],"Minn.":["Minn."],"Miss.":["Miss."],"Mo.":["Mo."],"Mont.":["Mont."],"Nebr.":["Nebr."],"Neb.":["Neb."],"Nev.":["Nev."],"N.H.":["N.H."],"N.J.":["N.J."],"N.M.":["N.M."],"N.Y.":["N.Y."],"N.C.":["N.C."],"N.D.":["N.D."],"Okla.":["Okla."],"Ore.":["Ore."],"Pa.":["Pa."],"Tenn.":["Tenn."],"Va.":["Va."],"Wash.":["Wash."],"Wis.":["Wis."]},ve={"^_^":["^_^"],"=D":["=D"],";-p":[";-p"],":O":[":O"],":-/":[":-/"],xD:["xD"],V_V:["V_V"],";(":[";("],"(:":["(:"],'")':['")'],":Y":[":Y"],":]":[":]"],":3":[":3"],":(":[":("],":-)":[":-)"],"=3":["=3"],":))":[":))"],":>":[":>"],";p":[";p"],":p":[":p"],"=[[":["=[["],xDD:["xDD"],"<333":["<333"],"<33":["<33"],":P":[":P"],"o.O":["o.O"],"<3":["<3"],";-)":[";-)"],":)":[":)"],"-_-":["-_-"],":')":[":')"],o_O:["o_O"],";)":[";)"],"=]":["=]"],"(=":["(="],"-__-":["-__-"],":/":[":/"],":0":[":0"],"(^_^)":["(^_^)"],";D":[";D"],o_o:["o_o"],":((":[":(("],"=)":["=)"]},pe={"'s":["'s"],"'S":["'S"],"ain't":["ai","n't"],aint:["ai","nt"],"Ain't":["Ai","n't"],"aren't":["are","n't"],arent:["are","nt"],"Aren't":["Are","n't"],"can't":["ca","n't"],cant:["ca","nt"],"Can't":["Ca","n't"],"can't've":["ca","n't","'ve"],"'cause":["'cause'"],cannot:["can","not"],Cannot:["Can","not"],"could've":["could","'ve"],couldve:["could","ve"],"Could've":["Could","'ve"],"couldn't":["could","n't"],couldnt:["could","nt"],"Couldn't":["Could","n't"],"couldn't've":["could","n't","'ve"],couldntve:["could","nt","ve"],"Couldn't've":["Could","n't","'ve"],"didn't":["did","n't"],didnt:["did","nt"],"Didn't":["Did","n't"],"doesn't":["does","n't"],doesnt:["does","nt"],"Doesn't":["Does","n't"],"don't":["do","n't"],dont:["do","nt"],"Don't":["Do","n't"],"hadn't":["had","n't"],hadnt:["had","nt"],"Hadn't":["Had","n't"],"hadn't've":["had","n't","'ve"],"hasn't":["has","n't"],hasnt:["has","nt"],"haven't":["have","n't"],havent:["have","nt"],"he'd":["he","'d"],hed:["he","d"],"he'd've":["he","'d","'ve"],hedve:["he","d","ve"],"he'll":["he","'ll"],"he'll've":["he","'ll","'ve"],"he's":["he","'s"],hes:["he","s"],"how'd":["how","'d"],howd:["how","d"],"how'd'y":["how","'d","'y"],"how'll":["how","'ll"],howll:["how","ll"],"how's":["how","'s"],hows:["how","s"],"I'd":["I","'d"],"I'd've":["I","'d","'ve"],"I'll":["I","'ll"],"i'll":["i","'ll"],"I'll've":["I","'ll","'ve"],"i'll've":["i","'ll","'ve"],"I'm":["I","'m"],"i'm":["i","'m"],Im:["I","m"],im:["i","m"],"I'ma":["I","'ma"],"i'ma":["i","'ma"],"I've":["I","'ve"],"i've":["i","'ve"],"isn't":["is","n't"],isnt:["is","nt"],"Isn't":["Is","n't"],"It'd":["It","'d"],"it'd":["it","'d"],"it'd've":["it","'d","'ve"],"it'll've":["it","'ll","'ve"],"it'll":["it","'ll"],itll:["it","ll"],"it's":["it","'s"],"let's":["let","'s"],lets:["let","s"],"ma'am":["ma'am"],"mayn't":["may","n't"],"mightn't":["might","n't"],"mightn't've":["might","n't","'ve"],"might've":["might","'ve"],"mustn't":["must","n't"],"mustn't've":["must","n't","'ve"],"must've":["must","'ve"],"needn't":["need","n't"],"needn't've":["need","n't","'ve"],"not've":["not","'ve"],"o'clock":["o'clock"],"oughtn't":["ought","n't"],"oughtn't've":["ought","n't","'ve"],"so've":["so","'ve"],"so's":["so","'s"],"shan't":["sha","n't"],"sha'n't":["sha'","n't"],"shan't've":["sha","n't","'ve"],"she'd":["she","'d"],"she'd've":["she","'d","'ve"],"she'll":["she","'ll"],"she'll've":["she","'ll","'ve"],"she's":["she","'s"],"should've":["should","'ve"],"shouldn't":["should","n't"],"shouldn't've":["should","n't","'ve"],"that'd":["that","'d"],"that'd've":["that","'d","'ve"],"that's":["that","'s"],thats:["that","s"],"there'd":["there","'d"],"there'd've":["there","'d","'ve"],"there's":["there","'s"],"they'd":["they","'d"],"They'd":["They","'d"],"they'd've":["they","'d","'ve"],"They'd've":["They","'d","'ve"],"they'll":["they","'ll"],"They'll":["They","'ll"],"they'll've":["they","'ll","'ve"],"They'll've":["They","'ll","'ve"],"they're":["they","'re"],"They're":["They","'re"],"they've":["they","'ve"],"They've":["They","'ve"],"to've":["to","'ve"],"wasn't":["was","n't"],"we'd":["we","'d"],"We'd":["We","'d"],"we'd've":["we","'d","'ve"],"we'll":["we","'ll"],"We'll":["We","'ll"],"we'll've":["we","'ll","'ve"],"We'll've":["We","'ll","'ve"],"we're":["we","'re"],"We're":["We","'re"],"we've":["we","'ve"],"We've":["We","'ve"],"weren't":["were","n't"],"what'll":["what","'ll"],"what'll've":["what","'ll","'ve"],"what're":["what","'re"],"what's":["what","'s"],"what've":["what","'ve"],"when's":["when","'s"],"when've":["when","'ve"],"where'd":["where","'d"],"where's":["where","'s"],"where've":["where","'ve"],"who'd":["who","'d"],"who'll":["who","'ll"],"who'll've":["who","'ll'","'ve'"],"who're":["who","'re"],"who's":["who","'s"],"who've":["who","'ve"],"why've":["why","'ve"],"why'll":["why","'ll"],"why're":["why","'re"],"why's":["why","'s"],"will've":["will","'ve"],"won't":["wo","n't"],wont:["wo","nt"],"won't've":["wo","n't","'ve"],"would've":["would","'ve"],"wouldn't":["would","n't"],"wouldn't've":["would","n't","'ve"],"y'all":["y'","all"],"y'all'd":["y'","all","'d"],"y'all'd've":["y'","all","'d","'ve"],"y'all're":["y'","all","'re'"],"y'all've":["y'","all","ve"],"you'd":["you","'d"],"You'd":["You","'d"],"you'd've":["you","'d","'ve"],"You'd've":["You","'d","'ve"],"you'll":["you","'ll"],"You'll":["You","'ll"],"you'll've":["you","'ll","'ve"],"You'll've":["You","'ll","'ve"],"you're":["you","'re"],"You're":["You","'re"],"you've":["you","'ve"],"You've":["You","'ve"]},fe=/^([,([{*<"“'`‘]|\.{1,3})/gi,we=/([,.!?%*>:;"'”`)\]}]|\.\.\.)$/gi;function ge(e,t){var r;for(r=0;r<t.length;r++)e.push(t[r]);return e}function ye(e){var t,r,n,o=[],i=[];do{ve[e]||de[e]||pe[e]?r=!0:(t=e.split(fe)).length>1?(o.push(t[1]),e=t[2]):(t=e.split(we)).length>1?(e=t[0],i.unshift(t[1])):r=!0}while(!r);return n=o,e&&n.push(e),"..."===i[i.length-1]&&(i.pop(),i.unshift("...")),ge(n,i),n}function me(e,t){var r,n,o,i,a,l;if(!X(e))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1&&!ae(t))throw new TypeError(P("invalid argument. Second argument must be a boolean. Value: `%s`.",t));if(!e)return[];for(n=t?e.split(/(\s+)/):e.split(/\s+/),a={},o=[],l=0;l<n.length;l++)L(a,i=n[l])?ge(o,a[i]):(ge(o,r=ye(i)),a[i]=r);return o}function be(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}return function(e,t,r){var n,o,i,a,l,s,h,u;if(!X(e))throw new TypeError(be("1PF3F,Ex",e));if(!oe(t))throw new TypeError(be("1PFAS,Jd",t));if(arguments.length>2&&!ae(r))throw new TypeError(be("1PFAL,M9",r));if(n=me(e,!0),s=t.length,l=[],r){for(i=t.slice(),h=0;h<s;h++)i[h]=ie(i[h]);for(h=0;h<n.length;h++){for(a=!0,o=ie(n[h]),u=0;u<s;u++)if(i[u]===o){a=!1;break}a&&l.push(n[h])}return l.join("")}for(h=0;h<n.length;h++){for(o=n[h],a=!0,u=0;u<s;u++)if(t[u]===o){a=!1;break}a&&l.push(o)}return l.join("")}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).removeWords=t();
//# sourceMappingURL=browser.js.map
