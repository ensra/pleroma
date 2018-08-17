webpackJsonp([18],{275:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var o,i,r=n(2),s=n.n(r),a=n(1),c=n.n(a),l=n(3),d=n.n(l),u=n(4),h=n.n(u),p=n(0),f=n.n(p),g=n(7),b=(i=o=function(e){function t(){return c()(this,t),d()(this,e.apply(this,arguments))}return h()(t,e),t.prototype.render=function(){var e=this.props,t=e.disabled,n=e.visible;return s()("button",{className:"load-more",disabled:t||!n,style:{visibility:n?"visible":"hidden"},onClick:this.props.onClick},void 0,s()(g.b,{id:"status.load_more",defaultMessage:"Load more"}))},t}(f.a.PureComponent),o.defaultProps={visible:!0},i)},277:function(e,t,n){"use strict";var o=n(2),i=n.n(o),r=n(0),s=(n.n(r),n(9)),a=n(158),c=n(67),l=n(17),d=n(68),u=n(22),h=n(69),p=n(90),f=n(157),g=n(26),b=n(7),v=n(13),m=n(33),y=Object(b.f)({deleteConfirm:{id:"confirmations.delete.confirm",defaultMessage:"Delete"},deleteMessage:{id:"confirmations.delete.message",defaultMessage:"Are you sure you want to delete this status?"},redraftConfirm:{id:"confirmations.redraft.confirm",defaultMessage:"Delete & redraft"},redraftMessage:{id:"confirmations.redraft.message",defaultMessage:"Are you sure you want to delete this status and re-draft it? You will lose all replies, boosts and favourites to it."},blockConfirm:{id:"confirmations.block.confirm",defaultMessage:"Block"}}),O=function(){var e=Object(c.e)();return function(t,n){return{status:e(t,n.id)}}},M=function(e,t){var n=t.intl;return{onReply:function(t,n){e(Object(l.T)(t,n))},onModalReblog:function(t){e(Object(d.o)(t))},onReblog:function(t,n){t.get("reblogged")?e(Object(d.r)(t)):n.shiftKey||!v.b?this.onModalReblog(t):e(Object(g.d)("BOOST",{status:t,onReblog:this.onModalReblog}))},onFavourite:function(t){e(t.get("favourited")?Object(d.p)(t):Object(d.k)(t))},onPin:function(t){e(t.get("pinned")?Object(d.q)(t):Object(d.n)(t))},onEmbed:function(t){e(Object(g.d)("EMBED",{url:t.get("url"),onError:function(t){return e(Object(m.e)(t))}}))},onDelete:function(t){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e(v.d?Object(g.d)("CONFIRM",{message:n.formatMessage(o?y.redraftMessage:y.deleteMessage),confirm:n.formatMessage(o?y.redraftConfirm:y.deleteConfirm),onConfirm:function(){return e(Object(h.g)(t.get("id"),o))}}):Object(h.g)(t.get("id"),o))},onDirect:function(t,n){e(Object(l.N)(t,n))},onMention:function(t,n){e(Object(l.R)(t,n))},onOpenMedia:function(t,n){e(Object(g.d)("MEDIA",{media:t,index:n}))},onOpenVideo:function(t,n){e(Object(g.d)("VIDEO",{media:t,time:n}))},onBlock:function(t){e(Object(g.d)("CONFIRM",{message:i()(b.b,{id:"confirmations.block.message",defaultMessage:"Are you sure you want to block {name}?",values:{name:i()("strong",{},void 0,"@",t.get("acct"))}}),confirm:n.formatMessage(y.blockConfirm),onConfirm:function(){return e(Object(u.q)(t.get("id")))}}))},onReport:function(t){e(Object(f.k)(t.get("account"),t))},onMute:function(t){e(Object(p.g)(t))},onMuteConversation:function(t){e(t.get("muted")?Object(h.l)(t.get("id")):Object(h.j)(t.get("id")))},onToggleHidden:function(t){e(t.get("hidden")?Object(h.k)(t.get("id")):Object(h.i)(t.get("id")))}}};t.a=Object(b.g)(Object(s.connect)(O,M)(a.a))},278:function(e,t,n){"use strict";n.d(t,"a",function(){return L});var o,i,r=n(2),s=n.n(r),a=n(1),c=n.n(a),l=n(3),d=n.n(l),u=n(4),h=n.n(u),p=n(93),f=n.n(p),g=n(0),b=n.n(g),v=n(156),m=n(5),y=n.n(m),O=n(279),M=n(275),I=n(284),j=n(8),C=(n.n(j),n(10)),S=n.n(C),k=n(159),L=(i=o=function(e){function t(){var n,o,i;c()(this,t);for(var r=arguments.length,s=Array(r),a=0;a<r;a++)s[a]=arguments[a];return n=o=d()(this,e.call.apply(e,[this].concat(s))),o.state={fullscreen:null},o.intersectionObserverWrapper=new I.a,o.handleScroll=f()(function(){if(o.node){var e=o.node,t=e.scrollTop;400>e.scrollHeight-t-e.clientHeight&&o.props.onLoadMore&&!o.props.isLoading&&o.props.onLoadMore(),t<100&&o.props.onScrollToTop?o.props.onScrollToTop():o.props.onScroll&&o.props.onScroll()}},150,{trailing:!0}),o.onFullScreenChange=function(){o.setState({fullscreen:Object(k.d)()})},o.setRef=function(e){o.node=e},o.handleLoadMore=function(e){e.preventDefault(),o.props.onLoadMore()},i=n,d()(o,i)}return h()(t,e),t.prototype.componentDidMount=function(){this.attachScrollListener(),this.attachIntersectionObserver(),Object(k.a)(this.onFullScreenChange),this.handleScroll()},t.prototype.getSnapshotBeforeUpdate=function(e){return b.a.Children.count(e.children)>0&&b.a.Children.count(e.children)<b.a.Children.count(this.props.children)&&this.getFirstChildKey(e)!==this.getFirstChildKey(this.props)&&this.node.scrollTop>0?this.node.scrollHeight-this.node.scrollTop:null},t.prototype.componentDidUpdate=function(e,t,n){if(null!==n){var o=this.node.scrollHeight-n;this.node.scrollTop!==o&&(this.node.scrollTop=o)}},t.prototype.componentWillUnmount=function(){this.detachScrollListener(),this.detachIntersectionObserver(),Object(k.b)(this.onFullScreenChange)},t.prototype.attachIntersectionObserver=function(){this.intersectionObserverWrapper.connect({root:this.node,rootMargin:"300% 0px"})},t.prototype.detachIntersectionObserver=function(){this.intersectionObserverWrapper.disconnect()},t.prototype.attachScrollListener=function(){this.node.addEventListener("scroll",this.handleScroll)},t.prototype.detachScrollListener=function(){this.node.removeEventListener("scroll",this.handleScroll)},t.prototype.getFirstChildKey=function(e){var t=e.children,n=t;return t instanceof j.List?n=t.get(0):Array.isArray(t)&&(n=t[0]),n&&n.key},t.prototype.render=function(){var e=this,t=this.props,n=t.children,o=t.scrollKey,i=t.trackScroll,r=t.shouldUpdateScroll,a=t.isLoading,c=t.hasMore,l=t.prepend,d=t.alwaysPrepend,u=t.emptyMessage,h=t.onLoadMore,p=this.state.fullscreen,f=b.a.Children.count(n),g=c&&f>0&&h?s()(M.a,{visible:!a,onClick:this.handleLoadMore}):null,m=null;return m=a||f>0||!u?b.a.createElement("div",{className:S()("scrollable",{fullscreen:p}),ref:this.setRef},s()("div",{role:"feed",className:"item-list"},void 0,l,b.a.Children.map(this.props.children,function(t,n){return s()(O.a,{id:t.key,index:n,listLength:f,intersectionObserverWrapper:e.intersectionObserverWrapper,saveHeightKey:i?e.context.router.route.location.key+":"+o:null},t.key,t)}),g)):s()("div",{style:{flex:"1 1 auto",display:"flex",flexDirection:"column"}},void 0,d&&l,b.a.createElement("div",{className:"empty-column-indicator",ref:this.setRef},u)),i?s()(v.a,{scrollKey:o,shouldUpdateScroll:r},void 0,m):m},t}(g.PureComponent),o.contextTypes={router:y.a.object},o.defaultProps={trackScroll:!0},i)},279:function(e,t,n){"use strict";var o=n(9),i=n(280),r=n(94),s=function(e,t){return{cachedHeight:e.getIn(["height_cache",t.saveHeightKey,t.id])}},a=function(e){return{onHeightChange:function(t,n,o){e(Object(r.d)(t,n,o))}}};t.a=Object(o.connect)(s,a)(i.a)},280:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var o=n(1),i=n.n(o),r=n(3),s=n.n(r),a=n(4),c=n.n(a),l=n(0),d=n.n(l),u=n(281),h=n(283),p=n(8),f=(n.n(p),["id","index","listLength"]),g=["id","index","listLength","cachedHeight"],b=function(e){function t(){var n,o,r;i()(this,t);for(var a=arguments.length,c=Array(a),l=0;l<a;l++)c[l]=arguments[l];return n=o=s()(this,e.call.apply(e,[this].concat(c))),o.state={isHidden:!1},o.handleIntersection=function(e){o.entry=e,Object(u.a)(o.calculateHeight),o.setState(o.updateStateAfterIntersection)},o.updateStateAfterIntersection=function(e){return e.isIntersecting&&!o.entry.isIntersecting&&Object(u.a)(o.hideIfNotIntersecting),{isIntersecting:o.entry.isIntersecting,isHidden:!1}},o.calculateHeight=function(){var e=o.props,t=e.onHeightChange,n=e.saveHeightKey,i=e.id;o.height=Object(h.a)(o.entry).height,t&&n&&t(n,i,o.height)},o.hideIfNotIntersecting=function(){o.componentMounted&&o.setState(function(e){return{isHidden:!e.isIntersecting}})},o.handleRef=function(e){o.node=e},r=n,s()(o,r)}return c()(t,e),t.prototype.shouldComponentUpdate=function(e,t){var n=this,o=!this.state.isIntersecting&&(this.state.isHidden||this.props.cachedHeight);return!!o!=!(t.isIntersecting||!t.isHidden&&!e.cachedHeight)||!(o?g:f).every(function(t){return Object(p.is)(e[t],n.props[t])})},t.prototype.componentDidMount=function(){var e=this.props,t=e.intersectionObserverWrapper,n=e.id;t.observe(n,this.node,this.handleIntersection),this.componentMounted=!0},t.prototype.componentWillUnmount=function(){var e=this.props,t=e.intersectionObserverWrapper,n=e.id;t.unobserve(n,this.node),this.componentMounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.id,o=e.index,i=e.listLength,r=e.cachedHeight,s=this.state,a=s.isIntersecting,c=s.isHidden;return a||!c&&!r?d.a.createElement("article",{ref:this.handleRef,"aria-posinset":o,"aria-setsize":i,"data-id":n,tabIndex:"0"},t&&d.a.cloneElement(t,{hidden:!1})):d.a.createElement("article",{ref:this.handleRef,"aria-posinset":o,"aria-setsize":i,style:{height:(this.height||r)+"px",opacity:0,overflow:"hidden"},"data-id":n,tabIndex:"0"},t&&d.a.cloneElement(t,{hidden:!0}))},t}(d.a.Component)},281:function(e,t,n){"use strict";function o(e){for(;a.length&&e.timeRemaining()>0;)a.shift()();a.length?requestIdleCallback(o):c=!1}function i(e){a.push(e),c||(c=!0,requestIdleCallback(o))}var r=n(282),s=n.n(r),a=new s.a,c=!1;t.a=i},282:function(e,t,n){"use strict";function o(){this.length=0}o.prototype.push=function(e){var t={item:e};this.last?this.last=this.last.next=t:this.last=this.first=t,this.length++},o.prototype.shift=function(){var e=this.first;if(e)return this.first=e.next,--this.length||(this.last=void 0),e.item},o.prototype.slice=function(e,t){e=void 0===e?0:e,t=void 0===t?1/0:t;for(var n=[],o=0,i=this.first;i&&!(--t<0);i=i.next)++o>e&&n.push(i.item);return n},e.exports=o},283:function(e,t,n){"use strict";function o(e){if("boolean"!=typeof i){var t=e.target.getBoundingClientRect(),n=e.boundingClientRect;i=t.height!==n.height||t.top!==n.top||t.width!==n.width||t.bottom!==n.bottom||t.left!==n.left||t.right!==n.right}return i?e.target.getBoundingClientRect():e.boundingClientRect}var i=void 0;t.a=o},284:function(e,t,n){"use strict";var o=n(1),i=n.n(o),r=function(){function e(){i()(this,e),this.callbacks={},this.observerBacklog=[],this.observer=null}return e.prototype.connect=function(e){var t=this,n=function(e){e.forEach(function(e){var n=e.target.getAttribute("data-id");t.callbacks[n]&&t.callbacks[n](e)})};this.observer=new IntersectionObserver(n,e),this.observerBacklog.forEach(function(e){var n=e[0],o=e[1],i=e[2];t.observe(n,o,i)}),this.observerBacklog=null},e.prototype.observe=function(e,t,n){this.observer?(this.callbacks[e]=n,this.observer.observe(t)):this.observerBacklog.push([e,t,n])},e.prototype.unobserve=function(e,t){this.observer&&(delete this.callbacks[e],this.observer.unobserve(t))},e.prototype.disconnect=function(){this.observer&&(this.callbacks={},this.observer.disconnect(),this.observer=null)},e}();t.a=r},285:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var o,i=n(2),r=n.n(i),s=n(1),a=n.n(s),c=n(3),l=n.n(c),d=n(4),u=n.n(d),h=n(0),p=n.n(h),f=n(7),g=Object(f.f)({load_more:{id:"status.load_more",defaultMessage:"Load more"}}),b=Object(f.g)(o=function(e){function t(){var n,o,i;a()(this,t);for(var r=arguments.length,s=Array(r),c=0;c<r;c++)s[c]=arguments[c];return n=o=l()(this,e.call.apply(e,[this].concat(s))),o.handleClick=function(){o.props.onClick(o.props.maxId)},i=n,l()(o,i)}return u()(t,e),t.prototype.render=function(){var e=this.props,t=e.disabled,n=e.intl;return r()("button",{className:"load-more load-gap",disabled:t,onClick:this.handleClick,"aria-label":n.formatMessage(g.load_more)},void 0,r()("i",{className:"fa fa-ellipsis-h"}))},t}(p.a.PureComponent))||o},286:function(e,t,n){"use strict";n.d(t,"a",function(){return H});var o,i,r=n(34),s=n.n(r),a=n(2),c=n.n(a),l=n(55),d=n.n(l),u=n(1),h=n.n(u),p=n(3),f=n.n(p),g=n(4),b=n.n(g),v=n(32),m=n.n(v),y=n(0),O=n.n(y),M=n(14),I=n.n(M),j=n(5),C=n.n(j),S=n(277),k=n(12),L=n.n(k),_=n(285),x=n(278),R=n(7),H=(i=o=function(e){function t(){var n,o,i;h()(this,t);for(var r=arguments.length,s=Array(r),a=0;a<r;a++)s[a]=arguments[a];return n=o=f()(this,e.call.apply(e,[this].concat(s))),o.getFeaturedStatusCount=function(){return o.props.featuredStatusIds?o.props.featuredStatusIds.size:0},o.getCurrentStatusIndex=function(e,t){return t?o.props.featuredStatusIds.indexOf(e):o.props.statusIds.indexOf(e)+o.getFeaturedStatusCount()},o.handleMoveUp=function(e,t){var n=o.getCurrentStatusIndex(e,t)-1;o._selectChild(n)},o.handleMoveDown=function(e,t){var n=o.getCurrentStatusIndex(e,t)+1;o._selectChild(n)},o.handleLoadOlder=m()(function(){o.props.onLoadMore(o.props.statusIds.last())},300,{leading:!0}),o.setRef=function(e){o.node=e},i=n,f()(o,i)}return b()(t,e),t.prototype._selectChild=function(e){var t=this.node.node.querySelector("article:nth-of-type("+(e+1)+") .focusable");t&&t.focus()},t.prototype.render=function(){var e=this,t=this.props,n=t.statusIds,o=t.featuredStatusIds,i=t.onLoadMore,r=d()(t,["statusIds","featuredStatusIds","onLoadMore"]),a=r.isLoading;if(r.isPartial)return c()("div",{className:"regeneration-indicator"},void 0,c()("div",{},void 0,c()("div",{className:"regeneration-indicator__figure"}),c()("div",{className:"regeneration-indicator__label"},void 0,c()(R.b,{id:"regeneration_indicator.label",tagName:"strong",defaultMessage:"Loading…"}),c()(R.b,{id:"regeneration_indicator.sublabel",defaultMessage:"Your home feed is being prepared!"}))));var l=a||n.size>0?n.map(function(t,o){return null===t?c()(_.a,{disabled:a,maxId:o>0?n.get(o-1):null,onClick:i},"gap:"+n.get(o+1)):c()(S.a,{id:t,onMoveUp:e.handleMoveUp,onMoveDown:e.handleMoveDown},t)}):null;return l&&o&&(l=o.map(function(t){return c()(S.a,{id:t,featured:!0,onMoveUp:e.handleMoveUp,onMoveDown:e.handleMoveDown},"f-"+t)}).concat(l)),O.a.createElement(x.a,s()({},r,{onLoadMore:i&&this.handleLoadOlder,ref:this.setRef}),l)},t}(L.a),o.propTypes={scrollKey:C.a.string.isRequired,statusIds:I.a.list.isRequired,featuredStatusIds:I.a.list,onLoadMore:C.a.func,onScrollToTop:C.a.func,onScroll:C.a.func,trackScroll:C.a.bool,shouldUpdateScroll:C.a.func,isLoading:C.a.bool,isPartial:C.a.bool,hasMore:C.a.bool,prepend:C.a.node,emptyMessage:C.a.node,alwaysPrepend:C.a.bool},o.defaultProps={trackScroll:!0},i)},815:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return C});var o,i,r=n(2),s=n.n(r),a=n(1),c=n.n(a),l=n(3),d=n.n(l),u=n(4),h=n.n(u),p=n(0),f=n.n(p),g=n(9),b=n(92),v=n(71),m=n(70),y=n(19),O=n(290),M=n(7),I=n(72),j=function(e,t){return{hasUnread:e.getIn(["timelines","hashtag:"+t.params.id,"unread"])>0}},C=(o=Object(g.connect)(j))(i=function(e){function t(){var n,o,i;c()(this,t);for(var r=arguments.length,s=Array(r),a=0;a<r;a++)s[a]=arguments[a];return n=o=d()(this,e.call.apply(e,[this].concat(s))),o.handlePin=function(){var e=o.props,t=e.columnId,n=e.dispatch;n(t?Object(O.h)(t):Object(O.e)("HASHTAG",{id:o.props.params.id}))},o.handleMove=function(e){var t=o.props,n=t.columnId;(0,t.dispatch)(Object(O.g)(n,e))},o.handleHeaderClick=function(){o.column.scrollTop()},o.setRef=function(e){o.column=e},o.handleLoadMore=function(e){o.props.dispatch(Object(y.o)(o.props.params.id,{maxId:e}))},i=n,d()(o,i)}return h()(t,e),t.prototype._subscribe=function(e,t){this.disconnect=e(Object(I.c)(t))},t.prototype._unsubscribe=function(){this.disconnect&&(this.disconnect(),this.disconnect=null)},t.prototype.componentDidMount=function(){var e=this.props.dispatch,t=this.props.params.id;e(Object(y.o)(t)),this._subscribe(e,t)},t.prototype.componentWillReceiveProps=function(e){e.params.id!==this.props.params.id&&(this.props.dispatch(Object(y.o)(e.params.id)),this._unsubscribe(),this._subscribe(this.props.dispatch,e.params.id))},t.prototype.componentWillUnmount=function(){this._unsubscribe()},t.prototype.render=function(){var e=this.props,t=e.hasUnread,n=e.columnId,o=e.multiColumn,i=this.props.params.id,r=!!n;return f.a.createElement(v.a,{ref:this.setRef},s()(m.a,{icon:"hashtag",active:t,title:i,onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:r,multiColumn:o,showBackButton:!0}),s()(b.a,{trackScroll:!r,scrollKey:"hashtag_timeline-"+n,timelineId:"hashtag:"+i,onLoadMore:this.handleLoadMore,emptyMessage:s()(M.b,{id:"empty_column.hashtag",defaultMessage:"There is nothing in this hashtag yet."})}))},t}(f.a.PureComponent))||i},92:function(e,t,n){"use strict";var o=n(32),i=n.n(o),r=n(9),s=n(286),a=n(19),c=n(8),l=(n.n(c),n(95)),d=(n.n(l),n(13)),u=function(){return Object(l.createSelector)([function(e,t){var n=t.type;return e.getIn(["settings",n],Object(c.Map)())},function(e,t){var n=t.type;return e.getIn(["timelines",n,"items"],Object(c.List)())},function(e){return e.get("statuses")}],function(e,t,n){var o=e.getIn(["regex","body"],"").trim(),i=null;try{i=o&&new RegExp(o,"i")}catch(e){}return t.filter(function(t){if(null===t)return!0;var o=n.get(t),r=!0;if(!1===e.getIn(["shows","reblog"])&&(r=r&&null===o.get("reblog")),!1===e.getIn(["shows","reply"])&&(r=r&&(null===o.get("in_reply_to_id")||o.get("in_reply_to_account_id")===d.i)),r&&i&&o.get("account")!==d.i){var s=o.get("reblog")?n.getIn([o.get("reblog"),"search_index"]):o.get("search_index");r=!i.test(s)}return r})})},h=function(){var e=u();return function(t,n){var o=n.timelineId;return{statusIds:e(t,{type:o}),isLoading:t.getIn(["timelines",o,"isLoading"],!0),isPartial:t.getIn(["timelines",o,"isPartial"],!1),hasMore:t.getIn(["timelines",o,"hasMore"])}}},p=function(e,t){var n=t.timelineId;return{onScrollToTop:i()(function(){e(Object(a.s)(n,!0))},100),onScroll:i()(function(){e(Object(a.s)(n,!1))},100)}};t.a=Object(r.connect)(h,p)(s.a)}});
//# sourceMappingURL=hashtag_timeline.js.map