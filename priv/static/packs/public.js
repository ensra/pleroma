webpackJsonp([85],{682:function(e,t,n){"use strict";function o(){var e=n(99),t=e.length,o=n(76).default,a=n(152),r=a.delegate,u=n(73).default,i=n(6),d=i.getLocale,m=d(),s=m.localeData,f=(n(0),n(20));s.forEach(o.__addLocaleData),Object(l.default)(function(){var e=document.documentElement.lang,t=new Intl.DateTimeFormat(e,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"}),a=new o(e);[].forEach.call(document.querySelectorAll(".emojify"),function(e){e.innerHTML=u(e.innerHTML)}),[].forEach.call(document.querySelectorAll("time.formatted"),function(e){var n=new Date(e.getAttribute("datetime")),o=t.format(n);e.title=o,e.textContent=o}),[].forEach.call(document.querySelectorAll("time.time-ago"),function(e){var n=new Date(e.getAttribute("datetime"));e.title=t.format(n),e.textContent=a.format(n)}),[].forEach.call(document.querySelectorAll(".logo-button"),function(e){e.addEventListener("click",function(e){e.preventDefault(),window.open(e.target.href,"mastodon-intent","width=400,height=400,resizable=no,menubar=no,status=no,scrollbars=yes")})});var r=document.querySelectorAll("[data-component]");r.length>0&&n.e(34).then(n.bind(null,840)).then(function(t){var n=t.default,o=document.createElement("div");f.render(c()(n,{locale:e,components:r}),o),document.body.appendChild(o)}).catch(function(e){return console.error(e)})}),r(document,".webapp-btn","click",function(e){var t=e.target;return 0!==e.button||(window.location.href=t.href,!1)}),r(document,".status__content__spoiler-link","click",function(e){var t=e.target,n=t.parentNode.parentNode.querySelector(".e-content");return"block"===n.style.display?(n.style.display="none",t.parentNode.style.marginBottom=0):(n.style.display="block",t.parentNode.style.marginBottom=null),!1}),r(document,".account_display_name","input",function(e){var n=e.target,o=document.querySelector(".name-counter");o&&(o.textContent=30-t(n.value))}),r(document,".account_note","input",function(e){var n=e.target,o=document.querySelector(".note-counter");o&&(o.textContent=160-t(n.value))}),r(document,"#account_avatar","change",function(e){var t=e.target,n=document.querySelector(".card.compact .avatar img"),o=t.files||[],a=o[0],c=a?URL.createObjectURL(a):n.dataset.originalSrc;n.src=c}),r(document,"#account_header","change",function(e){var t=e.target,n=document.querySelector(".card.compact"),o=t.files||[],a=o[0],c=a?URL.createObjectURL(a):n.dataset.originalSrc;n.style.backgroundImage="url("+c+")"})}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),c=n.n(a),r=n(77),l=n(89);window.addEventListener("message",function(e){var t=e.data||{};window.parent&&"setHeight"===t.type&&Object(l.default)(function(){window.parent.postMessage({type:"setHeight",id:t.id,height:document.getElementsByTagName("html")[0].scrollHeight},"*")})}),Object(r.a)().then(o).catch(function(e){console.error(e)})}},[682]);
//# sourceMappingURL=public.js.map