"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[664],{600:function(n,e,t){t.d(e,{Ku:function(){return l},Pg:function(){return f},Pt:function(){return p},cI:function(){return o},fI:function(){return v}});var r=t(861),a=t(757),c=t.n(a),u=t(243),i="cdfc08b3296f0164149119b33e9bcc21",s=u.Z.create({baseURL:"https://api.themoviedb.org/3"}),o=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},854:function(n,e,t){var r=t(184);e.Z=function(){return(0,r.jsx)("div",{children:"Loading..."})}},664:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r=t(861),a=t(439),c=t(757),u=t.n(c),i=t(791),s=t(689),o=t(600),p=t(854),f=t(184),l=function(){var n=(0,s.UO)().id,e=(0,i.useState)([]),t=(0,a.Z)(e,2),c=t[0],l=t[1],v=(0,i.useState)(!1),d=(0,a.Z)(v,2),h=d[0],g=d[1],m=(0,i.useState)(null),x=(0,a.Z)(m,2),w=x[0],k=x[1];(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,(0,o.Ku)(n);case 4:t=e.sent,l(t.cast),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),k(!0);case 11:return e.prev=11,g(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]);var b=c.map((function(n){var e=n.id,t=n.name,r=n.profile_path;return(0,f.jsxs)("li",{children:[(0,f.jsx)("div",{className:"profile_img",children:(0,f.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:t})}),(0,f.jsx)("p",{children:t})]},e)}));return(0,f.jsxs)(f.Fragment,{children:[h&&(0,f.jsx)(p.Z,{}),w&&(0,f.jsx)("p",{children:"Something went wrong.."}),c.length>0&&(0,f.jsx)("ul",{children:b})]})}}}]);
//# sourceMappingURL=664.62ab77b0.chunk.js.map