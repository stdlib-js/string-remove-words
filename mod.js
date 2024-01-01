// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function r(e){return"number"==typeof e}function n(e){var t,r="";for(t=0;t<e;t++)r+="0";return r}function a(e,t,r){var a=!1,o=t-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=r?e+n(o):n(o)+e,a&&(e="-"+e)),e}var o=String.prototype.toLowerCase,i=String.prototype.toUpperCase;function l(e){var t,n,l;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=e.arg,l=parseInt(n,10),!isFinite(l)){if(!r(n))throw new Error("invalid integer. Value: "+n);l=0}return l<0&&("u"===e.specifier||10!==t)&&(l=4294967295+l+1),l<0?(n=(-l).toString(t),e.precision&&(n=a(n,e.precision,e.padRight)),n="-"+n):(n=l.toString(t),l||e.precision?e.precision&&(n=a(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===t&&(e.alternate&&(n="0x"+n),n=e.specifier===i.call(e.specifier)?i.call(n):o.call(n)),8===t&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function s(e){return"string"==typeof e}var h=Math.abs,u=String.prototype.toLowerCase,c=String.prototype.toUpperCase,d=String.prototype.replace,v=/e\+(\d)$/,p=/e-(\d)$/,f=/^(\d+)$/,w=/^(\d+)e/,g=/\.0$/,y=/\.0*e/,m=/(\..*[^0])0*e/;function b(e){var t,n,a=parseFloat(e.arg);if(!isFinite(a)){if(!r(e.arg))throw new Error("invalid floating-point number. Value: "+n);a=e.arg}switch(e.specifier){case"e":case"E":n=a.toExponential(e.precision);break;case"f":case"F":n=a.toFixed(e.precision);break;case"g":case"G":h(a)<1e-4?((t=e.precision)>0&&(t-=1),n=a.toExponential(t)):n=a.toPrecision(e.precision),e.alternate||(n=d.call(n,m,"$1e"),n=d.call(n,y,"e"),n=d.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=d.call(n,v,"e+0$1"),n=d.call(n,p,"e-0$1"),e.alternate&&(n=d.call(n,f,"$1."),n=d.call(n,w,"$1.e")),a>=0&&e.sign&&(n=e.sign+n),n=e.specifier===c.call(e.specifier)?c.call(n):u.call(n)}function S(e){var t,r="";for(t=0;t<e;t++)r+=" ";return r}function _(e,t,r){var n=t-e.length;return n<0?e:e=r?e+S(n):S(n)+e}var I=String.fromCharCode,C=isNaN,A=Array.isArray;function D(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function E(e){var t,r,n,o,i,h,u,c,d;if(!A(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(h="",u=1,c=0;c<e.length;c++)if(s(n=e[c]))h+=n;else{if(t=void 0!==n.precision,!(n=D(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),r=n.flags,d=0;d<r.length;d++)switch(o=r.charAt(d)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,C(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,C(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=l(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!C(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=C(i)?String(n.arg):I(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),h+=n.arg||"",u+=1}return h}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function k(e){var t,r,n,a;for(r=[],a=0,n=M.exec(e);n;)(t=e.slice(a,M.lastIndex-n[0].length)).length&&r.push(t),r.push(T(n)),a=M.lastIndex,n=M.exec(e);return(t=e.slice(a)).length&&r.push(t),r}function O(e){return"string"==typeof e}function V(e){var t,r,n;if(!O(e))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=k(e),(r=new Array(arguments.length))[0]=t,n=1;n<r.length;n++)r[n]=arguments[n];return E.apply(null,r)}var j=Object.prototype,P=j.toString,x=j.__defineGetter__,N=j.__defineSetter__,Y=j.__lookupGetter__,W=j.__lookupSetter__;var F=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,r){var n,a,o,i;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((a="value"in r)&&(Y.call(e,t)||W.call(e,t)?(n=e.__proto__,e.__proto__=j,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),o="get"in r,i="set"in r,a&&(o||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&x&&x.call(e,t,r.get),i&&N&&N.call(e,t,r.set),e};function B(e,t,r){F(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return G&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString;var $=Object.prototype.hasOwnProperty;function L(e,t){return null!=e&&$.call(e,t)}var K="function"==typeof Symbol?Symbol:void 0,Z="function"==typeof K?K.toStringTag:"";var H=J()?function(e){var t,r,n;if(null==e)return R.call(e);r=e[Z],t=L(e,Z);try{e[Z]=void 0}catch(t){return R.call(e)}return n=R.call(e),t?e[Z]=r:delete e[Z],n}:function(e){return R.call(e)};var z=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function U(e){if("function"!=typeof e)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",e));return function(t){var r,n;if(!z(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}function X(e){return"string"==typeof e}var q=String.prototype.valueOf;var Q=J();function ee(e){return"object"==typeof e&&(e instanceof String||(Q?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object String]"===H(e)))}function te(e){return X(e)||ee(e)}B(te,"isPrimitive",X),B(te,"isObject",ee);var re=U(te.isPrimitive),ne=U(te.isObject),ae=U(te);function oe(e){if(!X(e))throw new TypeError(V("invalid argument. Must provide a string. Value: `%s`.",e));return e.toUpperCase()}function ie(e){return"boolean"==typeof e}B(ae,"primitives",re),B(ae,"objects",ne);var le=Boolean,se=Boolean.prototype.toString;var he=J();function ue(e){return"object"==typeof e&&(e instanceof le||(he?function(e){try{return se.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function ce(e){return ie(e)||ue(e)}B(ce,"isPrimitive",ie),B(ce,"isObject",ue);var de={"i.e.":["i.e."],"I.e.":["I.e."],"I.E.":["I.E."],"e.g.":["e.g."],"E.g.":["E.g."],"E.G.":["E.G."],"et al.":["et al."],"etc.":["etc."],"vs.":["vs."],"A.S.A.P":["A.S.A.P"],"E.T.A.":["E.T.A."],"D.I.Y":["D.I.Y"],"R.S.V.P":["R.S.V.P"],"P.S.":["P.S."],"B.Y.O.B":["B.Y.O.B"],"Ms.":["Ms."],"Mr.":["Mr."],"Dr.":["Dr."],"Prof.":["Prof."],"Mrs.":["Mrs."],"Messrs.":["Messrs."],"Gov.":["Gov."],"Gen.":["Gen."],"Lt.":["Lt."],"Col.":["Col."],"Mt.":["Mt."],"Bros.":["Bros."],"Corp.":["Corp."],"Co.":["Co."],"co.":["co."],"Inc.":["Inc."],"Ltd.":["Ltd."],"Rep.":["Rep."],"Sen.":["Sen."],"Jr.":["Jr."],"Sr.":["Sr."],"Ph.D.":["Ph.D."],"J.D.":["J.D."],"M.D.":["M.D."],"Rev.":["Rev."],"Adm.":["Adm."],"St.":["St."],"a.m.":["a.m."],"p.m.":["p.m."],"b.c.":["b.c."],"B.C.":["B.C."],"a.d.":["a.d."],"A.D.":["A.D."],"b.c.e.":["b.c.e."],"B.C.E.":["B.C.E."],"Jan.":["Jan."],"Feb.":["Feb."],"Mar.":["Mar."],"Apr.":["Apr."],"May.":["May."],"Jun.":["Jun."],"Jul.":["Jul."],"Aug.":["Aug."],"Sep.":["Sep."],"Sept.":["Sept."],"Oct.":["Oct."],"Nov.":["Nov."],"Dec.":["Dec."],"Ala.":["Ala."],"Ariz.":["Ariz."],"Ark.":["Ark."],"Calif.":["Calif."],"Colo.":["Colo."],"Conn.":["Conn."],"Del.":["Del."],"D.C.":["D.C."],"Fla.":["Fla."],"Ga.":["Ga."],"Ill.":["Ill."],"Ind.":["Ind."],"Kans.":["Kans."],"Kan.":["Kan."],"Ky.":["Ky."],"La.":["La."],"Md.":["Md."],"Mass.":["Mass."],"Mich.":["Mich."],"Minn.":["Minn."],"Miss.":["Miss."],"Mo.":["Mo."],"Mont.":["Mont."],"Nebr.":["Nebr."],"Neb.":["Neb."],"Nev.":["Nev."],"N.H.":["N.H."],"N.J.":["N.J."],"N.M.":["N.M."],"N.Y.":["N.Y."],"N.C.":["N.C."],"N.D.":["N.D."],"Okla.":["Okla."],"Ore.":["Ore."],"Pa.":["Pa."],"Tenn.":["Tenn."],"Va.":["Va."],"Wash.":["Wash."],"Wis.":["Wis."]},ve={"^_^":["^_^"],"=D":["=D"],";-p":[";-p"],":O":[":O"],":-/":[":-/"],xD:["xD"],V_V:["V_V"],";(":[";("],"(:":["(:"],'")':['")'],":Y":[":Y"],":]":[":]"],":3":[":3"],":(":[":("],":-)":[":-)"],"=3":["=3"],":))":[":))"],":>":[":>"],";p":[";p"],":p":[":p"],"=[[":["=[["],xDD:["xDD"],"<333":["<333"],"<33":["<33"],":P":[":P"],"o.O":["o.O"],"<3":["<3"],";-)":[";-)"],":)":[":)"],"-_-":["-_-"],":')":[":')"],o_O:["o_O"],";)":[";)"],"=]":["=]"],"(=":["(="],"-__-":["-__-"],":/":[":/"],":0":[":0"],"(^_^)":["(^_^)"],";D":[";D"],o_o:["o_o"],":((":[":(("],"=)":["=)"]},pe={"'s":["'s"],"'S":["'S"],"ain't":["ai","n't"],aint:["ai","nt"],"Ain't":["Ai","n't"],"aren't":["are","n't"],arent:["are","nt"],"Aren't":["Are","n't"],"can't":["ca","n't"],cant:["ca","nt"],"Can't":["Ca","n't"],"can't've":["ca","n't","'ve"],"'cause":["'cause'"],cannot:["can","not"],Cannot:["Can","not"],"could've":["could","'ve"],couldve:["could","ve"],"Could've":["Could","'ve"],"couldn't":["could","n't"],couldnt:["could","nt"],"Couldn't":["Could","n't"],"couldn't've":["could","n't","'ve"],couldntve:["could","nt","ve"],"Couldn't've":["Could","n't","'ve"],"didn't":["did","n't"],didnt:["did","nt"],"Didn't":["Did","n't"],"doesn't":["does","n't"],doesnt:["does","nt"],"Doesn't":["Does","n't"],"don't":["do","n't"],dont:["do","nt"],"Don't":["Do","n't"],"hadn't":["had","n't"],hadnt:["had","nt"],"Hadn't":["Had","n't"],"hadn't've":["had","n't","'ve"],"hasn't":["has","n't"],hasnt:["has","nt"],"haven't":["have","n't"],havent:["have","nt"],"he'd":["he","'d"],hed:["he","d"],"he'd've":["he","'d","'ve"],hedve:["he","d","ve"],"he'll":["he","'ll"],"he'll've":["he","'ll","'ve"],"he's":["he","'s"],hes:["he","s"],"how'd":["how","'d"],howd:["how","d"],"how'd'y":["how","'d","'y"],"how'll":["how","'ll"],howll:["how","ll"],"how's":["how","'s"],hows:["how","s"],"I'd":["I","'d"],"I'd've":["I","'d","'ve"],"I'll":["I","'ll"],"i'll":["i","'ll"],"I'll've":["I","'ll","'ve"],"i'll've":["i","'ll","'ve"],"I'm":["I","'m"],"i'm":["i","'m"],Im:["I","m"],im:["i","m"],"I'ma":["I","'ma"],"i'ma":["i","'ma"],"I've":["I","'ve"],"i've":["i","'ve"],"isn't":["is","n't"],isnt:["is","nt"],"Isn't":["Is","n't"],"It'd":["It","'d"],"it'd":["it","'d"],"it'd've":["it","'d","'ve"],"it'll've":["it","'ll","'ve"],"it'll":["it","'ll"],itll:["it","ll"],"it's":["it","'s"],"let's":["let","'s"],lets:["let","s"],"ma'am":["ma'am"],"mayn't":["may","n't"],"mightn't":["might","n't"],"mightn't've":["might","n't","'ve"],"might've":["might","'ve"],"mustn't":["must","n't"],"mustn't've":["must","n't","'ve"],"must've":["must","'ve"],"needn't":["need","n't"],"needn't've":["need","n't","'ve"],"not've":["not","'ve"],"o'clock":["o'clock"],"oughtn't":["ought","n't"],"oughtn't've":["ought","n't","'ve"],"so've":["so","'ve"],"so's":["so","'s"],"shan't":["sha","n't"],"sha'n't":["sha'","n't"],"shan't've":["sha","n't","'ve"],"she'd":["she","'d"],"she'd've":["she","'d","'ve"],"she'll":["she","'ll"],"she'll've":["she","'ll","'ve"],"she's":["she","'s"],"should've":["should","'ve"],"shouldn't":["should","n't"],"shouldn't've":["should","n't","'ve"],"that'd":["that","'d"],"that'd've":["that","'d","'ve"],"that's":["that","'s"],thats:["that","s"],"there'd":["there","'d"],"there'd've":["there","'d","'ve"],"there's":["there","'s"],"they'd":["they","'d"],"They'd":["They","'d"],"they'd've":["they","'d","'ve"],"They'd've":["They","'d","'ve"],"they'll":["they","'ll"],"They'll":["They","'ll"],"they'll've":["they","'ll","'ve"],"They'll've":["They","'ll","'ve"],"they're":["they","'re"],"They're":["They","'re"],"they've":["they","'ve"],"They've":["They","'ve"],"to've":["to","'ve"],"wasn't":["was","n't"],"we'd":["we","'d"],"We'd":["We","'d"],"we'd've":["we","'d","'ve"],"we'll":["we","'ll"],"We'll":["We","'ll"],"we'll've":["we","'ll","'ve"],"We'll've":["We","'ll","'ve"],"we're":["we","'re"],"We're":["We","'re"],"we've":["we","'ve"],"We've":["We","'ve"],"weren't":["were","n't"],"what'll":["what","'ll"],"what'll've":["what","'ll","'ve"],"what're":["what","'re"],"what's":["what","'s"],"what've":["what","'ve"],"when's":["when","'s"],"when've":["when","'ve"],"where'd":["where","'d"],"where's":["where","'s"],"where've":["where","'ve"],"who'd":["who","'d"],"who'll":["who","'ll"],"who'll've":["who","'ll'","'ve'"],"who're":["who","'re"],"who's":["who","'s"],"who've":["who","'ve"],"why've":["why","'ve"],"why'll":["why","'ll"],"why're":["why","'re"],"why's":["why","'s"],"will've":["will","'ve"],"won't":["wo","n't"],wont:["wo","nt"],"won't've":["wo","n't","'ve"],"would've":["would","'ve"],"wouldn't":["would","n't"],"wouldn't've":["would","n't","'ve"],"y'all":["y'","all"],"y'all'd":["y'","all","'d"],"y'all'd've":["y'","all","'d","'ve"],"y'all're":["y'","all","'re'"],"y'all've":["y'","all","ve"],"you'd":["you","'d"],"You'd":["You","'d"],"you'd've":["you","'d","'ve"],"You'd've":["You","'d","'ve"],"you'll":["you","'ll"],"You'll":["You","'ll"],"you'll've":["you","'ll","'ve"],"You'll've":["You","'ll","'ve"],"you're":["you","'re"],"You're":["You","'re"],"you've":["you","'ve"],"You've":["You","'ve"]},fe=/^([,([{*<"“'`‘]|\.{1,3})/gi,we=/([,.!?%*>:;"'”`)\]}]|\.\.\.)$/gi;function ge(e,t){var r;for(r=0;r<t.length;r++)e.push(t[r]);return e}function ye(e){var t,r,n,a=[],o=[];do{ve[e]||de[e]||pe[e]?r=!0:(t=e.split(fe)).length>1?(a.push(t[1]),e=t[2]):(t=e.split(we)).length>1?(e=t[0],o.unshift(t[1])):r=!0}while(!r);return n=a,e&&n.push(e),"..."===o[o.length-1]&&(o.pop(),o.unshift("...")),ge(n,o),n}function me(e,t){var r,n,a,o,i,l;if(!X(e))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1&&!ie(t))throw new TypeError(V("invalid argument. Second argument must be a boolean. Value: `%s`.",t));if(!e)return[];for(n=t?e.split(/(\s+)/):e.split(/\s+/),i={},a=[],l=0;l<n.length;l++)L(i,o=n[l])?ge(a,i[o]):(ge(a,r=ye(o)),i[o]=r);return a}function be(e,t,r){var n,a,o,i,l,s,h,u;if(!X(e))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));if(!ae(t))throw new TypeError(V("invalid argument. Second argument must be an array of strings. Value: `%s`.",t));if(arguments.length>2&&!ie(r))throw new TypeError(V("invalid argument. Third argument must be a boolean. Value: `%s`.",r));if(n=me(e,!0),s=t.length,l=[],r){for(o=t.slice(),h=0;h<s;h++)o[h]=oe(o[h]);for(h=0;h<n.length;h++){for(i=!0,a=oe(n[h]),u=0;u<s;u++)if(o[u]===a){i=!1;break}i&&l.push(n[h])}return l.join("")}for(h=0;h<n.length;h++){for(a=n[h],i=!0,u=0;u<s;u++)if(t[u]===a){i=!1;break}i&&l.push(a)}return l.join("")}export{be as default};
//# sourceMappingURL=mod.js.map
