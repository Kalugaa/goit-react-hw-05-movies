"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{237:function(e,n,t){t.d(n,{Hg:function(){return f},Jh:function(){return s},Rw:function(){return d},vq:function(){return i},zv:function(){return o}});var r=t(861),c=t(757),a=t.n(c),u=t(340),f=function(){var e=(0,r.Z)(a().mark((function e(){var n,t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"10dfd75432fed76cb010e40fe6cfce74",e.next=3,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("10dfd75432fed76cb010e40fe6cfce74"));case 3:return n=e.sent,t=n.data,r=t.results,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"10dfd75432fed76cb010e40fe6cfce74",e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US&api_key=").concat("10dfd75432fed76cb010e40fe6cfce74"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"10dfd75432fed76cb010e40fe6cfce74",e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat("10dfd75432fed76cb010e40fe6cfce74"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"10dfd75432fed76cb010e40fe6cfce74",e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat("10dfd75432fed76cb010e40fe6cfce74"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"10dfd75432fed76cb010e40fe6cfce74",e.next=3,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&api_key=").concat("10dfd75432fed76cb010e40fe6cfce74"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},47:function(e,n,t){t.d(n,{Z:function(){return d}});t(791);var r,c,a=t(168),u=t(87),f=t(867),i=(0,f.default)(u.rU)(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  text-decoration: none;\n"]))),o=f.default.ul(c||(c=(0,a.Z)(["\n  padding-left: 15px;\n"]))),s=t(184),d=function(e){return(0,s.jsx)(o,{children:e.films.length>0&&e.films.map((function(n){return(0,s.jsx)(i,{to:"/movies/".concat(n.id),state:{from:e.location},children:n.title},n.id)}))})}},304:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r,c,a=t(861),u=t(439),f=t(757),i=t.n(f),o=t(791),s=t(237),d=t(689),p=t(168),l=t(87),v=t(867),h=((0,v.default)(l.rU)(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  text-decoration: none;\n"]))),v.default.h2(c||(c=(0,p.Z)(["\n  margin-left: 30px;\n"])))),m=t(47),x=t(184),g=function(){var e=(0,o.useState)([]),n=(0,u.Z)(e,2),t=n[0],r=n[1],c=(0,d.TH)();return(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Hg)();case 3:n=e.sent,r(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,x.jsxs)("div",{children:[(0,x.jsx)(h,{children:"Trending Today"}),t.length>0&&(0,x.jsx)(m.Z,{films:t,location:c})]})}}}]);
//# sourceMappingURL=304.1deb33ab.chunk.js.map