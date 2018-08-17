webpackJsonp([12],{1005:function(t,e,n){"use strict";var o=n(2),i=n.n(o),r=n(1006),a=n.n(r),s=n(0),c=(n.n(s),n(9)),l=n(160),u=n(7),d=n(1007),h=n(26),p=Object(u.f)({blockDomainConfirm:{id:"confirmations.domain_block.confirm",defaultMessage:"Hide entire domain"}}),f=function(){return function(t,e){return a()(e),{}}},b=function(t,e){var n=e.intl;return{onBlockDomain:function(e){t(Object(h.d)("CONFIRM",{message:i()(u.b,{id:"confirmations.domain_block.message",defaultMessage:"Are you really, really sure you want to block the entire {domain}? In most cases a few targeted blocks or mutes are sufficient and preferable.",values:{domain:i()("strong",{},void 0,e)}}),confirm:n.formatMessage(p.blockDomainConfirm),onConfirm:function(){return t(Object(l.e)(e))}}))},onUnblockDomain:function(e){t(Object(l.h)(e))}}};e.a=Object(u.g)(Object(c.connect)(f,b)(d.a))},1006:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){if(null==t)throw new TypeError("Cannot destructure undefined")}},1007:function(t,e,n){"use strict";n.d(e,"a",function(){return O});var o,i,r,a=n(2),s=n.n(a),c=n(1),l=n.n(c),u=n(3),d=n.n(u),h=n(4),p=n.n(h),f=n(0),b=(n.n(f),n(5)),v=n.n(b),m=n(23),g=n(7),y=n(12),k=n.n(y),C=Object(g.f)({unblockDomain:{id:"account.unblock_domain",defaultMessage:"Unhide {domain}"}}),O=Object(g.g)((r=i=function(t){function e(){var n,o,i;l()(this,e);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return n=o=d()(this,t.call.apply(t,[this].concat(a))),o.handleDomainUnblock=function(){o.props.onUnblockDomain(o.props.domain)},i=n,d()(o,i)}return p()(e,t),e.prototype.render=function(){var t=this.props,e=t.domain,n=t.intl;return s()("div",{className:"domain"},void 0,s()("div",{className:"domain__wrapper"},void 0,s()("span",{className:"domain__domain-name"},void 0,s()("strong",{},void 0,e)),s()("div",{className:"domain__buttons"},void 0,s()(m.a,{active:!0,icon:"unlock-alt",title:n.formatMessage(C.unblockDomain,{domain:e}),onClick:this.handleDomainUnblock}))))},e}(k.a),i.propTypes={domain:v.a.string,onUnblockDomain:v.a.func.isRequired,intl:v.a.object.isRequired},o=r))||o},155:function(t,e,n){"use strict";n.d(e,"a",function(){return b});var o=n(2),i=n.n(o),r=n(1),a=n.n(r),s=n(3),c=n.n(s),l=n(4),u=n.n(l),d=n(0),h=n.n(d),p=n(10),f=n.n(p),b=function(t){function e(){var n,o,i;a()(this,e);for(var r=arguments.length,s=Array(r),l=0;l<r;l++)s[l]=arguments[l];return n=o=c()(this,t.call.apply(t,[this].concat(s))),o.handleClick=function(){o.props.onClick()},i=n,c()(o,i)}return u()(e,t),e.prototype.render=function(){var t=this.props,e=t.icon,n=t.type,o=t.active,r=t.columnHeaderId,a="";return e&&(a=i()("i",{className:"fa fa-fw fa-"+e+" column-header__icon"})),i()("h1",{className:f()("column-header",{active:o}),id:r||null},void 0,i()("button",{onClick:this.handleClick},void 0,a,n))},e}(h.a.PureComponent)},274:function(t,e,n){"use strict";n.d(e,"a",function(){return g});var o=n(2),i=n.n(o),r=n(1),a=n.n(r),s=n(3),c=n.n(s),l=n(4),u=n.n(l),d=n(32),h=n.n(d),p=n(0),f=n.n(p),b=n(155),v=n(91),m=n(43),g=function(t){function e(){var n,o,i;a()(this,e);for(var r=arguments.length,s=Array(r),l=0;l<r;l++)s[l]=arguments[l];return n=o=c()(this,t.call.apply(t,[this].concat(s))),o.handleHeaderClick=function(){var t=o.node.querySelector(".scrollable");t&&(o._interruptScrollAnimation=Object(v.b)(t))},o.handleScroll=h()(function(){void 0!==o._interruptScrollAnimation&&o._interruptScrollAnimation()},200),o.setRef=function(t){o.node=t},i=n,c()(o,i)}return u()(e,t),e.prototype.scrollTop=function(){var t=this.node.querySelector(".scrollable");t&&(this._interruptScrollAnimation=Object(v.b)(t))},e.prototype.render=function(){var t=this.props,e=t.heading,n=t.icon,o=t.children,r=t.active,a=t.hideHeadingOnMobile,s=e&&(!a||a&&!Object(m.b)(window.innerWidth)),c=s&&e.replace(/ /g,"-"),l=s&&i()(b.a,{icon:n,active:r,type:e,onClick:this.handleHeaderClick,columnHeaderId:c});return f.a.createElement("div",{ref:this.setRef,role:"region","aria-labelledby":c,className:"column",onScroll:this.handleScroll},l,o)},e}(f.a.PureComponent)},275:function(t,e,n){"use strict";n.d(e,"a",function(){return v});var o,i,r=n(2),a=n.n(r),s=n(1),c=n.n(s),l=n(3),u=n.n(l),d=n(4),h=n.n(d),p=n(0),f=n.n(p),b=n(7),v=(i=o=function(t){function e(){return c()(this,e),u()(this,t.apply(this,arguments))}return h()(e,t),e.prototype.render=function(){var t=this.props,e=t.disabled,n=t.visible;return a()("button",{className:"load-more",disabled:e||!n,style:{visibility:n?"visible":"hidden"},onClick:this.props.onClick},void 0,a()(b.b,{id:"status.load_more",defaultMessage:"Load more"}))},e}(f.a.PureComponent),o.defaultProps={visible:!0},i)},276:function(t,e,n){"use strict";n.d(e,"a",function(){return g});var o,i,r=n(2),a=n.n(r),s=n(1),c=n.n(s),l=n(3),u=n.n(l),d=n(4),h=n.n(d),p=n(0),f=n.n(p),b=n(7),v=n(5),m=n.n(v),g=(i=o=function(t){function e(){var n,o,i;c()(this,e);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return n=o=u()(this,t.call.apply(t,[this].concat(a))),o.handleClick=function(){window.history&&1===window.history.length?o.context.router.history.push("/"):o.context.router.history.goBack()},i=n,u()(o,i)}return h()(e,t),e.prototype.render=function(){return a()("button",{onClick:this.handleClick,className:"column-back-button"},void 0,a()("i",{className:"fa fa-fw fa-chevron-left column-back-button__icon"}),a()(b.b,{id:"column_back_button.label",defaultMessage:"Back"}))},e}(f.a.PureComponent),o.contextTypes={router:m.a.object},i)},278:function(t,e,n){"use strict";n.d(e,"a",function(){return j});var o,i,r=n(2),a=n.n(r),s=n(1),c=n.n(s),l=n(3),u=n.n(l),d=n(4),h=n.n(d),p=n(93),f=n.n(p),b=n(0),v=n.n(b),m=n(156),g=n(5),y=n.n(g),k=n(279),C=n(275),O=n(284),S=n(8),M=(n.n(S),n(10)),_=n.n(M),I=n(159),j=(i=o=function(t){function e(){var n,o,i;c()(this,e);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return n=o=u()(this,t.call.apply(t,[this].concat(a))),o.state={fullscreen:null},o.intersectionObserverWrapper=new O.a,o.handleScroll=f()(function(){if(o.node){var t=o.node,e=t.scrollTop;400>t.scrollHeight-e-t.clientHeight&&o.props.onLoadMore&&!o.props.isLoading&&o.props.onLoadMore(),e<100&&o.props.onScrollToTop?o.props.onScrollToTop():o.props.onScroll&&o.props.onScroll()}},150,{trailing:!0}),o.onFullScreenChange=function(){o.setState({fullscreen:Object(I.d)()})},o.setRef=function(t){o.node=t},o.handleLoadMore=function(t){t.preventDefault(),o.props.onLoadMore()},i=n,u()(o,i)}return h()(e,t),e.prototype.componentDidMount=function(){this.attachScrollListener(),this.attachIntersectionObserver(),Object(I.a)(this.onFullScreenChange),this.handleScroll()},e.prototype.getSnapshotBeforeUpdate=function(t){return v.a.Children.count(t.children)>0&&v.a.Children.count(t.children)<v.a.Children.count(this.props.children)&&this.getFirstChildKey(t)!==this.getFirstChildKey(this.props)&&this.node.scrollTop>0?this.node.scrollHeight-this.node.scrollTop:null},e.prototype.componentDidUpdate=function(t,e,n){if(null!==n){var o=this.node.scrollHeight-n;this.node.scrollTop!==o&&(this.node.scrollTop=o)}},e.prototype.componentWillUnmount=function(){this.detachScrollListener(),this.detachIntersectionObserver(),Object(I.b)(this.onFullScreenChange)},e.prototype.attachIntersectionObserver=function(){this.intersectionObserverWrapper.connect({root:this.node,rootMargin:"300% 0px"})},e.prototype.detachIntersectionObserver=function(){this.intersectionObserverWrapper.disconnect()},e.prototype.attachScrollListener=function(){this.node.addEventListener("scroll",this.handleScroll)},e.prototype.detachScrollListener=function(){this.node.removeEventListener("scroll",this.handleScroll)},e.prototype.getFirstChildKey=function(t){var e=t.children,n=e;return e instanceof S.List?n=e.get(0):Array.isArray(e)&&(n=e[0]),n&&n.key},e.prototype.render=function(){var t=this,e=this.props,n=e.children,o=e.scrollKey,i=e.trackScroll,r=e.shouldUpdateScroll,s=e.isLoading,c=e.hasMore,l=e.prepend,u=e.alwaysPrepend,d=e.emptyMessage,h=e.onLoadMore,p=this.state.fullscreen,f=v.a.Children.count(n),b=c&&f>0&&h?a()(C.a,{visible:!s,onClick:this.handleLoadMore}):null,g=null;return g=s||f>0||!d?v.a.createElement("div",{className:_()("scrollable",{fullscreen:p}),ref:this.setRef},a()("div",{role:"feed",className:"item-list"},void 0,l,v.a.Children.map(this.props.children,function(e,n){return a()(k.a,{id:e.key,index:n,listLength:f,intersectionObserverWrapper:t.intersectionObserverWrapper,saveHeightKey:i?t.context.router.route.location.key+":"+o:null},e.key,e)}),b)):a()("div",{style:{flex:"1 1 auto",display:"flex",flexDirection:"column"}},void 0,u&&l,v.a.createElement("div",{className:"empty-column-indicator",ref:this.setRef},d)),i?a()(m.a,{scrollKey:o,shouldUpdateScroll:r},void 0,g):g},e}(b.PureComponent),o.contextTypes={router:y.a.object},o.defaultProps={trackScroll:!0},i)},279:function(t,e,n){"use strict";var o=n(9),i=n(280),r=n(94),a=function(t,e){return{cachedHeight:t.getIn(["height_cache",e.saveHeightKey,e.id])}},s=function(t){return{onHeightChange:function(e,n,o){t(Object(r.d)(e,n,o))}}};e.a=Object(o.connect)(a,s)(i.a)},280:function(t,e,n){"use strict";n.d(e,"a",function(){return v});var o=n(1),i=n.n(o),r=n(3),a=n.n(r),s=n(4),c=n.n(s),l=n(0),u=n.n(l),d=n(281),h=n(283),p=n(8),f=(n.n(p),["id","index","listLength"]),b=["id","index","listLength","cachedHeight"],v=function(t){function e(){var n,o,r;i()(this,e);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return n=o=a()(this,t.call.apply(t,[this].concat(c))),o.state={isHidden:!1},o.handleIntersection=function(t){o.entry=t,Object(d.a)(o.calculateHeight),o.setState(o.updateStateAfterIntersection)},o.updateStateAfterIntersection=function(t){return t.isIntersecting&&!o.entry.isIntersecting&&Object(d.a)(o.hideIfNotIntersecting),{isIntersecting:o.entry.isIntersecting,isHidden:!1}},o.calculateHeight=function(){var t=o.props,e=t.onHeightChange,n=t.saveHeightKey,i=t.id;o.height=Object(h.a)(o.entry).height,e&&n&&e(n,i,o.height)},o.hideIfNotIntersecting=function(){o.componentMounted&&o.setState(function(t){return{isHidden:!t.isIntersecting}})},o.handleRef=function(t){o.node=t},r=n,a()(o,r)}return c()(e,t),e.prototype.shouldComponentUpdate=function(t,e){var n=this,o=!this.state.isIntersecting&&(this.state.isHidden||this.props.cachedHeight);return!!o!=!(e.isIntersecting||!e.isHidden&&!t.cachedHeight)||!(o?b:f).every(function(e){return Object(p.is)(t[e],n.props[e])})},e.prototype.componentDidMount=function(){var t=this.props,e=t.intersectionObserverWrapper,n=t.id;e.observe(n,this.node,this.handleIntersection),this.componentMounted=!0},e.prototype.componentWillUnmount=function(){var t=this.props,e=t.intersectionObserverWrapper,n=t.id;e.unobserve(n,this.node),this.componentMounted=!1},e.prototype.render=function(){var t=this.props,e=t.children,n=t.id,o=t.index,i=t.listLength,r=t.cachedHeight,a=this.state,s=a.isIntersecting,c=a.isHidden;return s||!c&&!r?u.a.createElement("article",{ref:this.handleRef,"aria-posinset":o,"aria-setsize":i,"data-id":n,tabIndex:"0"},e&&u.a.cloneElement(e,{hidden:!1})):u.a.createElement("article",{ref:this.handleRef,"aria-posinset":o,"aria-setsize":i,style:{height:(this.height||r)+"px",opacity:0,overflow:"hidden"},"data-id":n,tabIndex:"0"},e&&u.a.cloneElement(e,{hidden:!0}))},e}(u.a.Component)},281:function(t,e,n){"use strict";function o(t){for(;s.length&&t.timeRemaining()>0;)s.shift()();s.length?requestIdleCallback(o):c=!1}function i(t){s.push(t),c||(c=!0,requestIdleCallback(o))}var r=n(282),a=n.n(r),s=new a.a,c=!1;e.a=i},282:function(t,e,n){"use strict";function o(){this.length=0}o.prototype.push=function(t){var e={item:t};this.last?this.last=this.last.next=e:this.last=this.first=e,this.length++},o.prototype.shift=function(){var t=this.first;if(t)return this.first=t.next,--this.length||(this.last=void 0),t.item},o.prototype.slice=function(t,e){t=void 0===t?0:t,e=void 0===e?1/0:e;for(var n=[],o=0,i=this.first;i&&!(--e<0);i=i.next)++o>t&&n.push(i.item);return n},t.exports=o},283:function(t,e,n){"use strict";function o(t){if("boolean"!=typeof i){var e=t.target.getBoundingClientRect(),n=t.boundingClientRect;i=e.height!==n.height||e.top!==n.top||e.width!==n.width||e.bottom!==n.bottom||e.left!==n.left||e.right!==n.right}return i?t.target.getBoundingClientRect():t.boundingClientRect}var i=void 0;e.a=o},284:function(t,e,n){"use strict";var o=n(1),i=n.n(o),r=function(){function t(){i()(this,t),this.callbacks={},this.observerBacklog=[],this.observer=null}return t.prototype.connect=function(t){var e=this,n=function(t){t.forEach(function(t){var n=t.target.getAttribute("data-id");e.callbacks[n]&&e.callbacks[n](t)})};this.observer=new IntersectionObserver(n,t),this.observerBacklog.forEach(function(t){var n=t[0],o=t[1],i=t[2];e.observe(n,o,i)}),this.observerBacklog=null},t.prototype.observe=function(t,e,n){this.observer?(this.callbacks[t]=n,this.observer.observe(e)):this.observerBacklog.push([t,e,n])},t.prototype.unobserve=function(t,e){this.observer&&(delete this.callbacks[t],this.observer.unobserve(e))},t.prototype.disconnect=function(){this.observer&&(this.callbacks={},this.observer.disconnect(),this.observer=null)},t}();e.a=r},288:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var o=n(2),i=n.n(o),r=n(1),a=n.n(r),s=n(3),c=n.n(s),l=n(4),u=n.n(l),d=n(0),h=(n.n(d),n(7)),p=n(276),f=function(t){function e(){return a()(this,e),c()(this,t.apply(this,arguments))}return u()(e,t),e.prototype.render=function(){return i()("div",{className:"column-back-button--slim"},void 0,i()("div",{role:"button",tabIndex:"0",onClick:this.handleClick,className:"column-back-button column-back-button--slim-button"},void 0,i()("i",{className:"fa fa-fw fa-chevron-left column-back-button__icon"}),i()(h.b,{id:"column_back_button.label",defaultMessage:"Back"})))},e}(p.a)},833:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return A});var o,i,r,a,s=n(2),c=n.n(s),l=n(1),u=n.n(l),d=n(3),h=n.n(d),p=n(4),f=n.n(p),b=n(32),v=n.n(b),m=n(0),g=(n.n(m),n(9)),y=n(14),k=n.n(y),C=n(5),O=n.n(C),S=n(289),M=n(274),_=n(288),I=n(1005),j=n(160),H=n(7),L=n(12),w=n.n(L),x=n(278),N=Object(H.f)({heading:{id:"column.domain_blocks",defaultMessage:"Hidden domains"},unblockDomain:{id:"account.unblock_domain",defaultMessage:"Unhide {domain}"}}),R=function(t){return{domains:t.getIn(["domain_lists","blocks","items"])}},A=(o=Object(g.connect)(R))(i=Object(H.g)((a=r=function(t){function e(){var n,o,i;u()(this,e);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return n=o=h()(this,t.call.apply(t,[this].concat(a))),o.handleLoadMore=v()(function(){o.props.dispatch(Object(j.f)())},300,{leading:!0}),i=n,h()(o,i)}return f()(e,t),e.prototype.componentWillMount=function(){this.props.dispatch(Object(j.g)())},e.prototype.render=function(){var t=this.props,e=t.intl,n=t.domains;return n?c()(M.a,{icon:"minus-circle",heading:e.formatMessage(N.heading)},void 0,c()(_.a,{}),c()(x.a,{scrollKey:"domain_blocks",onLoadMore:this.handleLoadMore},void 0,n.map(function(t){return c()(I.a,{domain:t},t)}))):c()(M.a,{},void 0,c()(S.a,{}))},e}(w.a),r.propTypes={params:O.a.object.isRequired,dispatch:O.a.func.isRequired,domains:k.a.orderedSet,intl:O.a.object.isRequired},i=a))||i)||i}});
//# sourceMappingURL=domain_blocks.js.map