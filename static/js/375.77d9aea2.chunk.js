"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[375],{237:function(e,n,t){t.d(n,{Hg:function(){return o},Jh:function(){return d},Rw:function(){return f},vq:function(){return s},zv:function(){return u}});var r=t(861),c=t(757),a=t.n(c),i=t(340),o=function(){var e=(0,r.Z)(a().mark((function e(){var n,t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"10dfd75432fed76cb010e40fe6cfce74",e.next=3,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("10dfd75432fed76cb010e40fe6cfce74"));case 3:return n=e.sent,t=n.data,r=t.results,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"10dfd75432fed76cb010e40fe6cfce74",e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US&api_key=").concat("10dfd75432fed76cb010e40fe6cfce74"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"10dfd75432fed76cb010e40fe6cfce74",e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat("10dfd75432fed76cb010e40fe6cfce74"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"10dfd75432fed76cb010e40fe6cfce74",e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat("10dfd75432fed76cb010e40fe6cfce74"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"10dfd75432fed76cb010e40fe6cfce74",e.next=3,i.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&api_key=").concat("10dfd75432fed76cb010e40fe6cfce74"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},375:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var r,c,a,i,o,s,u,d,f=t(861),p=t(439),l=t(757),v=t.n(l),h=t(237),x=t(791),m=t(689),g=t(168),b=t(87),w=t(867).default,j=w.div(r||(r=(0,g.Z)(["\n  margin-top: 15px;\n  display: flex;\n  flex-direction: row;\n  gap: 25px;\n"]))),k=w.span(c||(c=(0,g.Z)(["\n  padding-right: 15px;\n"]))),Z=w.img(a||(a=(0,g.Z)(["\n  max-height: 350px;\n"]))),y=w.ul(i||(i=(0,g.Z)(["\n  display: flex;\n  gap: 10px;\n  padding-left: 0;\n"]))),_=w(b.rU)(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  text-decoration: none;\n"]))),U=w.div(s||(s=(0,g.Z)(["\n  padding-left: 15px;\n"]))),q=w(b.rU)(u||(u=(0,g.Z)(["\n  text-decoration: none;\n  color: chocolate;\n"]))),C=w.button(d||(d=(0,g.Z)(["\n  background-color: transparent;\n  border-radius: 5px;\n"]))),S=t(184),A=function(){var e,n,t,r,c=(0,m.UO)().movieID,a=(0,x.useState)({}),i=(0,p.Z)(a,2),o=i[0],s=i[1],u=(0,m.TH)(),d=(null===u||void 0===u||null===(e=u.state)||void 0===e||null===(n=e.from)||void 0===n||null===(t=n.state)||void 0===t?void 0:t.from)||(null===u||void 0===u||null===(r=u.state)||void 0===r?void 0:r.from)||"/";(0,x.useEffect)((function(){var e=function(){var e=(0,f.Z)(v().mark((function e(n){var t;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.vq)(n);case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}();e(c)}),[c]);return(0,S.jsxs)(U,{children:[(0,S.jsx)(C,{children:(0,S.jsx)(q,{to:d,children:"Go Back"})}),(0,S.jsxs)(j,{children:[(0,S.jsx)("div",{children:(0,S.jsx)(Z,{src:o.poster_path?"https://image.tmdb.org/t/p/w500/".concat(o.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:o.title})}),(0,S.jsxs)("div",{children:[(0,S.jsx)("h2",{children:o.title}),(0,S.jsxs)("p",{children:["User Score: ",o.vote_average,"%"]}),(0,S.jsx)("h3",{children:"Overview"}),(0,S.jsx)("p",{children:o.overview}),(0,S.jsx)("h3",{children:"Genres"}),(0,S.jsx)("p",{children:o.genres&&o.genres.map((function(e){return(0,S.jsx)(k,{children:e.name},e.id)}))})]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("p",{children:"Additional information"}),(0,S.jsxs)(y,{children:[(0,S.jsx)(_,{to:"cast",state:{from:u},children:"Cast"}),(0,S.jsx)(_,{to:"reviews",state:{from:u},children:"Reviews"})]})]}),(0,S.jsx)(m.j3,{})]})}}}]);
//# sourceMappingURL=375.77d9aea2.chunk.js.map