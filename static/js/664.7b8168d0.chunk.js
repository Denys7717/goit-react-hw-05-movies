"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[664],{240:function(n,t,e){e.d(t,{Ku:function(){return v},Pg:function(){return f},Pt:function(){return p},cI:function(){return s},fI:function(){return l}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="cdfc08b3296f0164149119b33e9bcc21",o=u.Z.create({baseURL:"https://api.themoviedb.org/3"}),s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},664:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(861),a=e(439),c=e(757),u=e.n(c),i=e(791),o=e(689),s=e(240),p=e(184),f=function(){var n=(0,o.UO)().id,t=(0,i.useState)([]),e=(0,a.Z)(t,2),c=e[0],f=e[1];(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.Ku)(n);case 3:e=t.sent,f(e.cast),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]);var v=c.map((function(n){var t=n.id,e=n.name,r=n.profile_path;return(0,p.jsxs)("li",{children:[(0,p.jsx)("div",{className:"profile_img",children:(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:e})}),(0,p.jsx)("p",{children:e})]},t)}));return(0,p.jsx)("ul",{children:v})}}}]);
//# sourceMappingURL=664.7b8168d0.chunk.js.map