!function(a){function e(e){for(var t,n,r=e[0],o=e[1],i=e[2],l=0,u=[];l<r.length;l++)n=r[l],f[n]&&u.push(f[n][0]),f[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(a[t]=o[t]);for(s&&s(e);u.length;)u.shift()();return d.push.apply(d,i||[]),c()}function c(){for(var e,t=0;t<d.length;t++){for(var n=d[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==f[i]&&(r=!1)}r&&(d.splice(t--,1),e=l(l.s=n[0]))}return e}var n={},f={1:0},d=[];function l(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=a,l.c=n,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var s=r;d.push([8,0]),c()}({8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),l=function(i,l,u,a){return new(u||(u=Promise))(function(e,t){function n(e){try{o(a.next(e))}catch(e){t(e)}}function r(e){try{o(a.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new u(function(e){e(t.value)}).then(n,r)}o((a=a.apply(i,l||[])).next())})},u=function(n,r){var o,i,l,e,u={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,i&&(l=2&t[0]?i.return:t[0]?i.throw||((l=i.return)&&l.call(i),0):i.next)&&!(l=l.call(i,t[1])).done)return l;switch(i=0,l&&(t=[2&t[0],l.value]),t[0]){case 0:case 1:l=t;break;case 4:return u.label++,{value:t[1],done:!1};case 5:u.label++,i=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;default:if(!(l=0<(l=u.trys).length&&l[l.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(!l||t[1]>l[0]&&t[1]<l[3])){u.label=t[1];break}if(6===t[0]&&u.label<l[1]){u.label=l[1],l=t;break}if(l&&u.label<l[2]){u.label=l[2],u.ops.push(t);break}l[2]&&u.ops.pop(),u.trys.pop();continue}t=r.call(n,u)}catch(e){t=[6,e],i=0}finally{o=l=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};(function(){function o(){}return o.main=function(){return l(this,void 0,void 0,function(){var t;return u(this,function(e){switch(e.label){case 0:return t=o,[4,i.a.get("./data.json")];case 1:return t._data=e.sent().data,o._liveSelect=document.getElementById("live"),o._difficultySelect=document.getElementById("difficulty"),o._goButton=document.getElementById("go"),o._addEventListener(),o._render(),[2]}})})},o._render=function(){for(var n=Object.keys(o._data.list),e=function(t){var e=document.createElement("option");e.value=n[t],o._data.default.id===Number(n[t])&&(e.selected=!0,o._refreshDifficulty(n[t])),e.innerHTML=o._data.music.find(function(e){return e.id===Number(n[t])}).name,o._liveSelect.appendChild(e)},t=0;t<n.length;t++)e(t)},o._addEventListener=function(){o._goButton.addEventListener("click",function(){window.location.href=window.location.protocol+"//"+window.location.host+window.location.pathname+"score.html"+(o._liveSelect.value&&o._difficultySelect.value?"?id="+o._liveSelect.value+"&difficulty="+o._difficultySelect.value:"")},!1),o._liveSelect.addEventListener("change",function(e){console.log(e.target.value),o._refreshDifficulty(e.target.value)}),o._difficultySelect.addEventListener("change",function(e){console.log(e.target.value)})},o._refreshDifficulty=function(e){for(;o._difficultySelect.hasChildNodes();)o._difficultySelect.removeChild(o._difficultySelect.firstChild);for(var t=0;t<o._data.list[e].length;t++){var n=document.createElement("option"),r=o._data.list[e][t].toString();n.value=r,n.innerHTML=o._difficultyMap[r],"4"===r&&(n.selected=!0),o._difficultySelect.appendChild(n)}},o._difficultyMap={1:"Debut",2:"Regular",3:"Pro",4:"Master",5:"Master+"},o})().main()}});