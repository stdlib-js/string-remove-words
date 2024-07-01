// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function r(e){return"number"==typeof e}function n(e){var t,r="";for(t=0;t<e;t++)r+="0";return r}function o(e,t,r){var o=!1,i=t-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=r?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function l(e){var t,n,l;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=e.arg,l=parseInt(n,10),!isFinite(l)){if(!r(n))throw new Error("invalid integer. Value: "+n);l=0}return l<0&&("u"===e.specifier||10!==t)&&(l=4294967295+l+1),l<0?(n=(-l).toString(t),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=l.toString(t),l||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===t&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===t&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var s=Math.abs,h=String.prototype.toLowerCase,u=String.prototype.toUpperCase,c=String.prototype.replace,d=/e\+(\d)$/,v=/e-(\d)$/,p=/^(\d+)$/,f=/^(\d+)e/,w=/\.0$/,g=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var t,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!r(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":s(o)<1e-4?((t=e.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(e.precision),e.alternate||(n=c.call(n,y,"$1e"),n=c.call(n,g,"e"),n=c.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=c.call(n,d,"e+0$1"),n=c.call(n,v,"e-0$1"),e.alternate&&(n=c.call(n,p,"$1."),n=c.call(n,f,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===u.call(e.specifier)?u.call(n):h.call(n)}function b(e){var t,r="";for(t=0;t<e;t++)r+=" ";return r}var S=String.fromCharCode,_=isNaN,I=Array.isArray;function C(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function A(e){var t,r,n,i,a,s,h,u,c,d,v,p,f;if(!I(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",h=1,u=0;u<e.length;u++)if("string"==typeof(n=e[u]))s+=n;else{if(t=void 0!==n.precision,!(n=C(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(h=n.mapping),r=n.flags,c=0;c<r.length;c++)switch(i=r.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[h],10),h+=1,_(n.width))throw new TypeError("the argument for * width at position "+h+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[h],10),h+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+h+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[h],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=l(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(d=n.arg,v=n.width,p=n.padRight,f=void 0,(f=v-d.length)<0?d:d=p?d+b(f):b(f)+d)),s+=n.arg||"",h+=1}return s}var D=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function E(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function M(e){var t,r,n,o;for(r=[],o=0,n=D.exec(e);n;)(t=e.slice(o,D.lastIndex-n[0].length)).length&&r.push(t),r.push(E(n)),o=D.lastIndex,n=D.exec(e);return(t=e.slice(o)).length&&r.push(t),r}function T(e){var t,r;if("string"!=typeof e)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=[M(e)],r=1;r<arguments.length;r++)t.push(arguments[r]);return A.apply(null,t)}var k=Object.prototype,O=k.toString,P=k.__defineGetter__,j=k.__defineSetter__,x=k.__lookupGetter__,V=k.__lookupSetter__,N=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,r){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((o="value"in r)&&(x.call(e,t)||V.call(e,t)?(n=e.__proto__,e.__proto__=k,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&P&&P.call(e,t,r.get),a&&j&&j.call(e,t,r.set),e};function Y(e,t,r){N(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function F(){return W&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString,R=Object.prototype.hasOwnProperty;function G(e,t){return null!=e&&R.call(e,t)}var J="function"==typeof Symbol?Symbol:void 0,$="function"==typeof J?J.toStringTag:"",L=F()?function(e){var t,r,n;if(null==e)return B.call(e);r=e[$],t=G(e,$);try{e[$]=void 0}catch(t){return B.call(e)}return n=B.call(e),t?e[$]=r:delete e[$],n}:function(e){return B.call(e)},K=Array.isArray?Array.isArray:function(e){return"[object Array]"===L(e)};function Z(e){if("function"!=typeof e)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",e));return function(t){var r,n;if(!K(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}function H(e){return"string"==typeof e}var U=String.prototype.valueOf,z=F();function X(e){return"object"==typeof e&&(e instanceof String||(z?function(e){try{return U.call(e),!0}catch(e){return!1}}(e):"[object String]"===L(e)))}function q(e){return H(e)||X(e)}Y(q,"isPrimitive",H),Y(q,"isObject",X);var Q=Z(q.isPrimitive),ee=Z(q.isObject),te=Z(q);function re(e){if(!H(e))throw new TypeError(T("invalid argument. Must provide a string. Value: `%s`.",e));return e.toUpperCase()}function ne(e){return"boolean"==typeof e}Y(te,"primitives",Q),Y(te,"objects",ee);var oe=Boolean,ie=Boolean.prototype.toString,ae=F();function le(e){return"object"==typeof e&&(e instanceof oe||(ae?function(e){try{return ie.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===L(e)))}function se(e){return ne(e)||le(e)}Y(se,"isPrimitive",ne),Y(se,"isObject",le);var he={"i.e.":["i.e."],"I.e.":["I.e."],"I.E.":["I.E."],"e.g.":["e.g."],"E.g.":["E.g."],"E.G.":["E.G."],"et al.":["et al."],"etc.":["etc."],"vs.":["vs."],"A.S.A.P":["A.S.A.P"],"E.T.A.":["E.T.A."],"D.I.Y":["D.I.Y"],"R.S.V.P":["R.S.V.P"],"P.S.":["P.S."],"B.Y.O.B":["B.Y.O.B"],"Ms.":["Ms."],"Mr.":["Mr."],"Dr.":["Dr."],"Prof.":["Prof."],"Mrs.":["Mrs."],"Messrs.":["Messrs."],"Gov.":["Gov."],"Gen.":["Gen."],"Lt.":["Lt."],"Col.":["Col."],"Mt.":["Mt."],"Bros.":["Bros."],"Corp.":["Corp."],"Co.":["Co."],"co.":["co."],"Inc.":["Inc."],"Ltd.":["Ltd."],"Rep.":["Rep."],"Sen.":["Sen."],"Jr.":["Jr."],"Sr.":["Sr."],"Ph.D.":["Ph.D."],"J.D.":["J.D."],"M.D.":["M.D."],"Rev.":["Rev."],"Adm.":["Adm."],"St.":["St."],"a.m.":["a.m."],"p.m.":["p.m."],"b.c.":["b.c."],"B.C.":["B.C."],"a.d.":["a.d."],"A.D.":["A.D."],"b.c.e.":["b.c.e."],"B.C.E.":["B.C.E."],"Jan.":["Jan."],"Feb.":["Feb."],"Mar.":["Mar."],"Apr.":["Apr."],"May.":["May."],"Jun.":["Jun."],"Jul.":["Jul."],"Aug.":["Aug."],"Sep.":["Sep."],"Sept.":["Sept."],"Oct.":["Oct."],"Nov.":["Nov."],"Dec.":["Dec."],"Ala.":["Ala."],"Ariz.":["Ariz."],"Ark.":["Ark."],"Calif.":["Calif."],"Colo.":["Colo."],"Conn.":["Conn."],"Del.":["Del."],"D.C.":["D.C."],"Fla.":["Fla."],"Ga.":["Ga."],"Ill.":["Ill."],"Ind.":["Ind."],"Kans.":["Kans."],"Kan.":["Kan."],"Ky.":["Ky."],"La.":["La."],"Md.":["Md."],"Mass.":["Mass."],"Mich.":["Mich."],"Minn.":["Minn."],"Miss.":["Miss."],"Mo.":["Mo."],"Mont.":["Mont."],"Nebr.":["Nebr."],"Neb.":["Neb."],"Nev.":["Nev."],"N.H.":["N.H."],"N.J.":["N.J."],"N.M.":["N.M."],"N.Y.":["N.Y."],"N.C.":["N.C."],"N.D.":["N.D."],"Okla.":["Okla."],"Ore.":["Ore."],"Pa.":["Pa."],"Tenn.":["Tenn."],"Va.":["Va."],"Wash.":["Wash."],"Wis.":["Wis."]},ue={"^_^":["^_^"],"=D":["=D"],";-p":[";-p"],":O":[":O"],":-/":[":-/"],xD:["xD"],V_V:["V_V"],";(":[";("],"(:":["(:"],'")':['")'],":Y":[":Y"],":]":[":]"],":3":[":3"],":(":[":("],":-)":[":-)"],"=3":["=3"],":))":[":))"],":>":[":>"],";p":[";p"],":p":[":p"],"=[[":["=[["],xDD:["xDD"],"<333":["<333"],"<33":["<33"],":P":[":P"],"o.O":["o.O"],"<3":["<3"],";-)":[";-)"],":)":[":)"],"-_-":["-_-"],":')":[":')"],o_O:["o_O"],";)":[";)"],"=]":["=]"],"(=":["(="],"-__-":["-__-"],":/":[":/"],":0":[":0"],"(^_^)":["(^_^)"],";D":[";D"],o_o:["o_o"],":((":[":(("],"=)":["=)"]},ce={"'s":["'s"],"'S":["'S"],"ain't":["ai","n't"],aint:["ai","nt"],"Ain't":["Ai","n't"],"aren't":["are","n't"],arent:["are","nt"],"Aren't":["Are","n't"],"can't":["ca","n't"],cant:["ca","nt"],"Can't":["Ca","n't"],"can't've":["ca","n't","'ve"],"'cause":["'cause'"],cannot:["can","not"],Cannot:["Can","not"],"could've":["could","'ve"],couldve:["could","ve"],"Could've":["Could","'ve"],"couldn't":["could","n't"],couldnt:["could","nt"],"Couldn't":["Could","n't"],"couldn't've":["could","n't","'ve"],couldntve:["could","nt","ve"],"Couldn't've":["Could","n't","'ve"],"didn't":["did","n't"],didnt:["did","nt"],"Didn't":["Did","n't"],"doesn't":["does","n't"],doesnt:["does","nt"],"Doesn't":["Does","n't"],"don't":["do","n't"],dont:["do","nt"],"Don't":["Do","n't"],"hadn't":["had","n't"],hadnt:["had","nt"],"Hadn't":["Had","n't"],"hadn't've":["had","n't","'ve"],"hasn't":["has","n't"],hasnt:["has","nt"],"haven't":["have","n't"],havent:["have","nt"],"he'd":["he","'d"],hed:["he","d"],"he'd've":["he","'d","'ve"],hedve:["he","d","ve"],"he'll":["he","'ll"],"he'll've":["he","'ll","'ve"],"he's":["he","'s"],hes:["he","s"],"how'd":["how","'d"],howd:["how","d"],"how'd'y":["how","'d","'y"],"how'll":["how","'ll"],howll:["how","ll"],"how's":["how","'s"],hows:["how","s"],"I'd":["I","'d"],"I'd've":["I","'d","'ve"],"I'll":["I","'ll"],"i'll":["i","'ll"],"I'll've":["I","'ll","'ve"],"i'll've":["i","'ll","'ve"],"I'm":["I","'m"],"i'm":["i","'m"],Im:["I","m"],im:["i","m"],"I'ma":["I","'ma"],"i'ma":["i","'ma"],"I've":["I","'ve"],"i've":["i","'ve"],"isn't":["is","n't"],isnt:["is","nt"],"Isn't":["Is","n't"],"It'd":["It","'d"],"it'd":["it","'d"],"it'd've":["it","'d","'ve"],"it'll've":["it","'ll","'ve"],"it'll":["it","'ll"],itll:["it","ll"],"it's":["it","'s"],"let's":["let","'s"],lets:["let","s"],"ma'am":["ma'am"],"mayn't":["may","n't"],"mightn't":["might","n't"],"mightn't've":["might","n't","'ve"],"might've":["might","'ve"],"mustn't":["must","n't"],"mustn't've":["must","n't","'ve"],"must've":["must","'ve"],"needn't":["need","n't"],"needn't've":["need","n't","'ve"],"not've":["not","'ve"],"o'clock":["o'clock"],"oughtn't":["ought","n't"],"oughtn't've":["ought","n't","'ve"],"so've":["so","'ve"],"so's":["so","'s"],"shan't":["sha","n't"],"sha'n't":["sha'","n't"],"shan't've":["sha","n't","'ve"],"she'd":["she","'d"],"she'd've":["she","'d","'ve"],"she'll":["she","'ll"],"she'll've":["she","'ll","'ve"],"she's":["she","'s"],"should've":["should","'ve"],"shouldn't":["should","n't"],"shouldn't've":["should","n't","'ve"],"that'd":["that","'d"],"that'd've":["that","'d","'ve"],"that's":["that","'s"],thats:["that","s"],"there'd":["there","'d"],"there'd've":["there","'d","'ve"],"there's":["there","'s"],"they'd":["they","'d"],"They'd":["They","'d"],"they'd've":["they","'d","'ve"],"They'd've":["They","'d","'ve"],"they'll":["they","'ll"],"They'll":["They","'ll"],"they'll've":["they","'ll","'ve"],"They'll've":["They","'ll","'ve"],"they're":["they","'re"],"They're":["They","'re"],"they've":["they","'ve"],"They've":["They","'ve"],"to've":["to","'ve"],"wasn't":["was","n't"],"we'd":["we","'d"],"We'd":["We","'d"],"we'd've":["we","'d","'ve"],"we'll":["we","'ll"],"We'll":["We","'ll"],"we'll've":["we","'ll","'ve"],"We'll've":["We","'ll","'ve"],"we're":["we","'re"],"We're":["We","'re"],"we've":["we","'ve"],"We've":["We","'ve"],"weren't":["were","n't"],"what'll":["what","'ll"],"what'll've":["what","'ll","'ve"],"what're":["what","'re"],"what's":["what","'s"],"what've":["what","'ve"],"when's":["when","'s"],"when've":["when","'ve"],"where'd":["where","'d"],"where's":["where","'s"],"where've":["where","'ve"],"who'd":["who","'d"],"who'll":["who","'ll"],"who'll've":["who","'ll'","'ve'"],"who're":["who","'re"],"who's":["who","'s"],"who've":["who","'ve"],"why've":["why","'ve"],"why'll":["why","'ll"],"why're":["why","'re"],"why's":["why","'s"],"will've":["will","'ve"],"won't":["wo","n't"],wont:["wo","nt"],"won't've":["wo","n't","'ve"],"would've":["would","'ve"],"wouldn't":["would","n't"],"wouldn't've":["would","n't","'ve"],"y'all":["y'","all"],"y'all'd":["y'","all","'d"],"y'all'd've":["y'","all","'d","'ve"],"y'all're":["y'","all","'re'"],"y'all've":["y'","all","ve"],"you'd":["you","'d"],"You'd":["You","'d"],"you'd've":["you","'d","'ve"],"You'd've":["You","'d","'ve"],"you'll":["you","'ll"],"You'll":["You","'ll"],"you'll've":["you","'ll","'ve"],"You'll've":["You","'ll","'ve"],"you're":["you","'re"],"You're":["You","'re"],"you've":["you","'ve"],"You've":["You","'ve"]},de=/^([,([{*<"“'`‘]|\.{1,3})/gi,ve=/([,.!?%*>:;"'”`)\]}]|\.\.\.)$/gi;function pe(e,t){var r;for(r=0;r<t.length;r++)e.push(t[r]);return e}function fe(e){var t,r,n,o=[],i=[];do{ue[e]||he[e]||ce[e]?r=!0:(t=e.split(de)).length>1?(o.push(t[1]),e=t[2]):(t=e.split(ve)).length>1?(e=t[0],i.unshift(t[1])):r=!0}while(!r);return n=o,e&&n.push(e),"..."===i[i.length-1]&&(i.pop(),i.unshift("...")),pe(n,i),n}function we(){var e,t=arguments,r="https://stdlib.io/e/"+t[0]+"?";for(e=1;e<t.length;e++)r+="&arg[]="+encodeURIComponent(t[e]);return r}return function(e,t,r){var n,o,i,a,l,s,h,u;if(!H(e))throw new TypeError(we("1PF3F",e));if(!te(t))throw new TypeError(we("1PFAS",t));if(arguments.length>2&&!ne(r))throw new TypeError(we("1PFAL",r));if(n=function(e,t){var r,n,o,i,a,l;if(!H(e))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1&&!ne(t))throw new TypeError(T("invalid argument. Second argument must be a boolean. Value: `%s`.",t));if(!e)return[];for(n=t?e.split(/(\s+)/):e.split(/\s+/),a={},o=[],l=0;l<n.length;l++)G(a,i=n[l])?pe(o,a[i]):(pe(o,r=fe(i)),a[i]=r);return o}(e,!0),s=t.length,l=[],r){for(i=t.slice(),h=0;h<s;h++)i[h]=re(i[h]);for(h=0;h<n.length;h++){for(a=!0,o=re(n[h]),u=0;u<s;u++)if(i[u]===o){a=!1;break}a&&l.push(n[h])}return l.join("")}for(h=0;h<n.length;h++){for(o=n[h],a=!0,u=0;u<s;u++)if(t[u]===o){a=!1;break}a&&l.push(o)}return l.join("")}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).removeWords=t();
//# sourceMappingURL=index.js.map
