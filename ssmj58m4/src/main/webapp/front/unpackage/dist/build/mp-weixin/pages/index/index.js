(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0943":function(n,e,t){"use strict";var r=t("40db"),o=t.n(r);o.a},"25f8":function(n,e,t){"use strict";(function(n){t("408c");r(t("66fd"));var e=r(t("2efa"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"2efa":function(n,e,t){"use strict";t.r(e);var r=t("62f2"),o=t("e1e8");for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);t("0943");var a,u=t("f0c5"),c=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=c.exports},"40db":function(n,e,t){},"62f2":function(n,e,t){"use strict";var r;t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return r}));var o=function(){var n=this,e=n.$createElement,t=(n._self._c,n.__map(n.menuList,(function(e,t){var r=n.__get_orig(e),o=n.__map(e.frontMenu,(function(t,r){var o=n.__get_orig(t),i=n.role==e.roleName?n.__map(t.child,(function(e,t){var r=n.__get_orig(e),o=n.__map(e.buttons,(function(t,r){var o=n.__get_orig(t),i="查看"==t&&"yifahuodingdan"!=e.tableName&&"yituikuandingdan"!=e.tableName&&"yiquxiaodingdan"!=e.tableName&&"weizhifudingdan"!=e.tableName&&"yizhifudingdan"!=e.tableName&&"yiwanchengdingdan"!=e.tableName?e.menu.split("列表"):null;return{$orig:o,g0:i}}));return{$orig:r,l0:o}})):null;return{$orig:o,l1:i}}));return{$orig:r,l2:o}}))),r=n.__map(n.news,(function(e,t){var r=n.__get_orig(e),o=e.addtime.split(" ");return{$orig:r,g1:o}}));n.$mp.data=Object.assign({},{$root:{l3:t,l4:r}})},i=[]},"7aba":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(t("a34a")),o=i(t("b027"));function i(n){return n&&n.__esModule?n:{default:n}}function a(n,e){var t;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=u(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){t=n[Symbol.iterator]()},n:function(){var n=t.next();return a=n.done,n},e:function(n){c=!0,i=n},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw i}}}}function u(n,e){if(n){if("string"===typeof n)return c(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(n,e):void 0}}function c(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function l(n,e,t,r,o,i,a){try{var u=n[i](a),c=u.value}catch(l){return void t(l)}u.done?e(c):Promise.resolve(c).then(r,o)}function s(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function a(n){l(i,r,o,a,u,"next",n)}function u(n){l(i,r,o,a,u,"throw",n)}a(void 0)}))}}t("9021");var f=function(){Promise.all([t.e("common/vendor"),t.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(t("f62a"))}.bind(null,t)).catch(t.oe)},d={components:{uniIcons:f},data:function(){return{rows:2,column:4,iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"],role:"",menuList:[],swiperMenuList:[],user:{},tableName:"",btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"名称"}],queryIndex:0,searchForm:{zixishimingcheng:""},CustomBar:"0",autoplaySwiper:!0,intervalSwiper:5e3,swiperList:[],news:[]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=this;return s(r.default.mark((function t(){var i,a,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.role=n.getStorageSync("role"),i=n.getStorageSync("nowTable"),t.next=4,e.$api.session(i);case 4:a=t.sent,e.user=a.data,e.tableName=i,u=o.default.list(),e.menuList=u,e.menuList.forEach((function(n,t){e.role==n.roleName&&n.frontMenu.forEach((function(n,t){n.child[0].buttons.indexOf("查看")>-1&&e.swiperMenuList.push(n)}))}));case 10:case"end":return t.stop()}}),t)})))()},onShow:function(){var n=this;return s(r.default.mark((function e(){var t,o,i,u,c;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.btnColor=n.btnColor.sort((function(){return.5-Math.random()})),t=[],e.next=4,n.$api.page("config",{page:1,limit:5});case 4:o=e.sent,i=a(o.data.list);try{for(i.s();!(u=i.n()).done;)c=u.value,c.name.indexOf("picture")>=0&&c.value&&""!=c.value&&null!=c.value&&t.push({img:c.value,title:c.name})}catch(r){i.e(r)}finally{i.f()}return t&&(n.swiperList=t),e.next=10,n.$api.list("news",{page:1,limit:6});case 10:o=e.sent,n.news=o.data.list;case 12:case"end":return e.stop()}}),e)})))()},methods:{queryChange:function(n){this.queryIndex=n.detail.value,this.searchForm.zixishimingcheng=""},onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,e){this.$utils.jump("../".concat(n,"/detail?id=").concat(e))},onPageTap:function(e){0==this.queryIndex&&(n.setStorageSync("indexQueryCondition",this.searchForm.zixishimingcheng),this.searchForm.zixishimingcheng=""),n.navigateTo({url:"../".concat(e,"/list"),fail:function(){n.switchTab({url:"../".concat(e,"/list")})}})},onPageTap2:function(e){n.setStorageSync("useridTag",0),n.navigateTo({url:e,fail:function(){n.switchTab({url:e})}})}}};e.default=d}).call(this,t("543d")["default"])},e1e8:function(n,e,t){"use strict";t.r(e);var r=t("7aba"),o=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e["default"]=o.a}},[["25f8","common/runtime","common/vendor"]]]);