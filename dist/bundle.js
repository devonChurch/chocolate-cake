!function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)r.d(n,u,function(t){return e[t]}.bind(null,u));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var u in t=arguments[r])Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var u={0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine"},o=n({},u,{10:"ten",11:"eleven",12:"twelve",14:"fourteen"}),i=n({},u,{2:"twen",3:"thir",4:"for",5:"fif",8:"eigh"}),f=function(e){var t=o[e];if(t)return t;var r=Math.floor(e/10),n=e%10;return 1===r?i[n]+"teen":""+(i[r]+"ty")+(n?" "+o[n]:"")},a={10:function(e){return"and "+f(e)},100:function(e){return f(e)+" hundred"}},c=Object.entries(a).sort(function(e,t){return e[0]<t[0]?1:-1}),l=function(e){var t={text:"",number:e};return c.reduce(function(e,t){var r=t[0],u=t[1];return function(e){var t=e.text,r=e.number,n=e.increment,u=e.append;if(0===r)return{text:t,number:0};if(10===n)return{text:t+" "+u(r),number:0};if(n>r)return{text:t,number:r};var o=Math.floor(r/n),i=r%n;return i>0?{text:t+" "+u(o),number:i}:{text:t+" "+u(o),number:0}}(n({},e,{increment:Number(r),append:u}))},t).text.replace(/^\s*/,"").replace(/^(and)(\s*)/,"")};t.default=function(e){return e?l(e):o[e]}}]);
//# sourceMappingURL=bundle.js.map