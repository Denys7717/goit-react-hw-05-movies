"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[417],{240:function(e,n,t){t.d(n,{Ku:function(){return l},Pg:function(){return p},Pt:function(){return f},cI:function(){return i},fI:function(){return v}});var r=t(861),a=t(757),c=t.n(a),u=t(243),s="cdfc08b3296f0164149119b33e9bcc21",o=u.Z.create({baseURL:"https://api.themoviedb.org/3"}),i=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/trending/movie/day?api_key=".concat(s));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},417:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(861),a=t(439),c=t(757),u=t.n(c),s=t(240),o=t(791),i=t(689),f=t(87),p=t(184),l=function(){var e=(0,o.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],l=(0,i.TH)();return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.cI)();case 3:n=e.sent,c(n.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),console.log(t),(0,p.jsxs)("ol",{className:"trending_list",children:[(0,p.jsx)("h2",{children:"Trending today"}),t.map((function(e){var n=e.id,t=e.title,r=e.name;return(0,p.jsx)("li",{className:"item",children:(0,p.jsx)(f.rU,{to:"movies/".concat(n),state:{from:l},className:"item",children:t||r})},n)}))]})},v=function(){return(0,p.jsx)(l,{})}}}]);
//# sourceMappingURL=417.fd748e12.chunk.js.map