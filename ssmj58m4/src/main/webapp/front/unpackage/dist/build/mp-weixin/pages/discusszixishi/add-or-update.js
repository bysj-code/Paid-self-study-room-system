(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/discusszixishi/add-or-update"],{1460:function(e,t,r){"use strict";r.r(t);var n=r("269e"),a=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);t["default"]=a.a},"269e":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r,n,a,i,u){try{var s=e[i](u),c=s.value}catch(o){return void r(o)}s.done?t(c):Promise.resolve(c).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var u=e.apply(t,r);function s(e){i(u,n,a,s,c,"next",e)}function c(e){i(u,n,a,s,c,"throw",e)}s(void 0)}))}}var s=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("18fb"))}.bind(null,r)).catch(r.oe)},c={data:function(){return{cross:"",ruleForm:{refid:"",userid:"",nickname:"",content:"",reply:""},user:{},ro:{refid:!1,userid:!1,nickname:!1,content:!1,reply:!1}}},components:{wPicker:s},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var r=this;return u(n.default.mark((function a(){var i,u,s,c;return n.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.getStorageSync("nowTable"),a.next=3,r.$api.session(i);case 3:if(u=a.sent,r.user=u.data,r.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(r.ruleForm.refid=t.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){a.next=13;break}return r.ruleForm.id=t.id,a.next=11,r.$api.info("discusszixishi",r.ruleForm.id);case 11:u=a.sent,r.ruleForm=u.data;case 13:if(r.cross=t.cross,!t.cross){a.next=41;break}s=e.getStorageSync("crossObj"),a.t0=n.default.keys(s);case 17:if((a.t1=a.t0()).done){a.next=41;break}if(c=a.t1.value,"refid"!=c){a.next=23;break}return r.ruleForm.refid=s[c],r.ro.refid=!0,a.abrupt("continue",17);case 23:if("userid"!=c){a.next=27;break}return r.ruleForm.userid=s[c],r.ro.userid=!0,a.abrupt("continue",17);case 27:if("nickname"!=c){a.next=31;break}return r.ruleForm.nickname=s[c],r.ro.nickname=!0,a.abrupt("continue",17);case 31:if("content"!=c){a.next=35;break}return r.ruleForm.content=s[c],r.ro.content=!0,a.abrupt("continue",17);case 35:if("reply"!=c){a.next=39;break}return r.ruleForm.reply=s[c],r.ro.reply=!0,a.abrupt("continue",17);case 39:a.next=17;break;case 41:r.styleChange();case 42:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=this;return u(n.default.mark((function r(){var a,i,u,s,c,o,f,l,d,m;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.ruleForm.refid){r.next=3;break}return t.$utils.msg("关联表id不能为空"),r.abrupt("return");case 3:if(t.ruleForm.userid){r.next=6;break}return t.$utils.msg("用户id不能为空"),r.abrupt("return");case 6:if(t.ruleForm.content){r.next=9;break}return t.$utils.msg("评论内容不能为空"),r.abrupt("return");case 9:if(!t.cross){r.next=25;break}if(s=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==s){r.next=25;break}if(o=e.getStorageSync("crossObj"),s.startsWith("[")){r.next=21;break}for(f in o)f==s&&(o[f]=c);return l=e.getStorageSync("crossTable"),r.next=19,t.$api.update("".concat(l),o);case 19:r.next=25;break;case 21:a=Number(e.getStorageSync("userid")),i=o["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 25:if(!i||!a){r.next=48;break}return t.ruleForm.crossuserid=a,t.ruleForm.crossrefid=i,d={page:1,limit:10,crossuserid:a,crossrefid:i},r.next=31,t.$api.list("discusszixishi",d);case 31:if(m=r.sent,!(m.data.total>=u)){r.next=37;break}return t.$utils.msg(e.getStorageSync("tips")),r.abrupt("return",!1);case 37:if(!t.ruleForm.id){r.next=42;break}return r.next=40,t.$api.update("discusszixishi",t.ruleForm);case 40:r.next=44;break;case 42:return r.next=44,t.$api.add("discusszixishi",t.ruleForm);case 44:e.setStorageSync("discusszixishiCleanType",!0),t.$utils.msgBack("提交成功");case 46:r.next=57;break;case 48:if(!t.ruleForm.id){r.next=53;break}return r.next=51,t.$api.update("discusszixishi",t.ruleForm);case 51:r.next=55;break;case 53:return r.next=55,t.$api.add("discusszixishi",t.ruleForm);case 55:e.setStorageSync("discusszixishiCleanType",!0),t.$utils.msgBack("提交成功");case 57:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(r,"-").concat(n,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,r("543d")["default"])},"89c1":function(e,t,r){"use strict";(function(e){r("408c");n(r("66fd"));var t=n(r("9a62"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},9298:function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement;e._self._c},i=[]},"9a62":function(e,t,r){"use strict";r.r(t);var n=r("9298"),a=r("1460");for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);r("cfcf");var u,s=r("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"3b55c6b2",null,!1,n["a"],u);t["default"]=c.exports},a768:function(e,t,r){},cfcf:function(e,t,r){"use strict";var n=r("a768"),a=r.n(n);a.a}},[["89c1","common/runtime","common/vendor"]]]);