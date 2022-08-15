!function(){function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e,t,r,n,o,i,s){try{var l=e[i](s),a=l.value}catch(c){return void r(c)}l.done?t(a):Promise.resolve(a).then(n,o)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}(self.webpackChunkthemis_frontend=self.webpackChunkthemis_frontend||[]).push([[3122],{3122:function(n,i,s){"use strict";s.r(i),s.d(i,{ion_reorder:function(){return h},ion_reorder_group:function(){return u}});var l=s(3150),a=s(7585),c=s(2954),h=function(){function e(t){r(this,e),(0,l.r)(this,t)}return o(e,[{key:"onClick",value:function(e){var t=this.el.closest("ion-reorder-group");e.preventDefault(),t&&t.disabled||e.stopImmediatePropagation()}},{key:"render",value:function(){var e=(0,a.b)(this);return(0,l.h)(l.H,{class:e},(0,l.h)("slot",null,(0,l.h)("ion-icon",{name:"ios"===e?"reorder-three-outline":"reorder-two-sharp",lazy:!1,class:"reorder-icon",part:"icon"})))}},{key:"el",get:function(){return(0,l.i)(this)}}]),e}();h.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}"};var u=function(){function n(e){r(this,n),(0,l.r)(this,e),this.ionItemReorder=(0,l.e)(this,"ionItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}var i,h;return o(n,[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled)}},{key:"connectedCallback",value:(i=regeneratorRuntime.mark(function e(){var t,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.el.closest("ion-content"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,t.getScrollElement();case 5:this.scrollEl=e.sent;case 6:return e.next=8,Promise.resolve().then(s.bind(s,9461));case 8:this.gesture=e.sent.createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(e){return r.canStart(e)},onStart:function(e){return r.onStart(e)},onMove:function(e){return r.onMove(e)},onEnd:function(){return r.onEnd()}}),this.disabledChanged();case 10:case"end":return e.stop()}},e,this)}),h=function(){var e=this,r=arguments;return new Promise(function(n,o){var s=i.apply(e,r);function l(e){t(s,n,o,l,a,"next",e)}function a(e){t(s,n,o,l,a,"throw",e)}l(void 0)})},function(){return h.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"complete",value:function(e){return Promise.resolve(this.completeSync(e))}},{key:"canStart",value:function(e){if(this.selectedItemEl||0!==this.state)return!1;var t=e.event.target.closest("ion-reorder");if(!t)return!1;var r=f(t,this.el);return!!r&&(e.data=r,!0)}},{key:"onStart",value:function(e){e.event.preventDefault();var t=this.selectedItemEl=e.data,r=this.cachedHeights;r.length=0;var n=this.el,o=n.children;if(o&&0!==o.length){for(var i=0,s=0;s<o.length;s++){var l=o[s];i+=l.offsetHeight,r.push(i),l.$ionIndex=s}var a=n.getBoundingClientRect();if(this.containerTop=a.top,this.containerBottom=a.bottom,this.scrollEl){var h=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=h.top+v,this.scrollElBottom=h.bottom-v}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=d(t),this.selectedItemHeight=t.offsetHeight,this.state=1,t.classList.add(p),(0,c.a)()}}},{key:"onMove",value:function(e){var t=this.selectedItemEl;if(t){var r=this.autoscroll(e.currentY),n=this.containerTop-r,o=Math.max(n,Math.min(e.currentY,this.containerBottom-r)),i=r+o-e.startY,s=this.itemIndexForTop(o-n);if(s!==this.lastToIndex){var l=d(t);this.lastToIndex=s,(0,c.b)(),this.reorderMove(l,s)}t.style.transform="translateY(".concat(i,"px)")}}},{key:"onEnd",value:function(){var e=this.selectedItemEl;if(this.state=2,e){var t=this.lastToIndex,r=d(e);t===r?this.completeSync():this.ionItemReorder.emit({from:r,to:t,complete:this.completeSync.bind(this)}),(0,c.h)()}else this.state=0}},{key:"completeSync",value:function(e){var t=this.selectedItemEl;if(t&&2===this.state){var r=this.el.children,n=r.length,o=this.lastToIndex,i=d(t);o===i||void 0!==e&&!0!==e||this.el.insertBefore(t,i<o?r[o+1]:r[o]),Array.isArray(e)&&(e=b(e,i,o));for(var s=0;s<n;s++)r[s].style.transform="";t.style.transition="",t.classList.remove(p),this.selectedItemEl=void 0,this.state=0}return e}},{key:"itemIndexForTop",value:function(e){var t=this.cachedHeights,r=0;for(r=0;r<t.length&&!(t[r]>e);r++);return r}},{key:"reorderMove",value:function(e,t){for(var r=this.selectedItemHeight,n=this.el.children,o=0;o<n.length;o++){var i="";o>e&&o<=t?i="translateY(".concat(-r,"px)"):o<e&&o>=t&&(i="translateY(".concat(r,"px)")),n[o].style.transform=i}}},{key:"autoscroll",value:function(e){if(!this.scrollEl)return 0;var t=0;return e<this.scrollElTop?t=-m:e>this.scrollElBottom&&(t=m),0!==t&&this.scrollEl.scrollBy(0,t),this.scrollEl.scrollTop-this.scrollElInitial}},{key:"render",value:function(){var t,r=(0,a.b)(this);return(0,l.h)(l.H,{class:(t={},e(t,r,!0),e(t,"reorder-enabled",!this.disabled),e(t,"reorder-list-active",0!==this.state),t)})}},{key:"el",get:function(){return(0,l.i)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}}]),n}(),d=function(e){return e.$ionIndex},f=function(e,t){for(var r;e;){if((r=e.parentElement)===t)return e;e=r}},v=60,m=10,p="reorder-selected",b=function(e,t,r){var n=e[t];return e.splice(t,1),e.splice(r,0,n),e.slice()};u.style=".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}"}}])}();