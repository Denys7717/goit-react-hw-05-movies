"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{600:function(n,e,t){t.d(e,{Ku:function(){return l},Pg:function(){return p},Pt:function(){return f},cI:function(){return o},fI:function(){return v}});var r=t(861),a=t(757),c=t.n(a),u=t(243),i="cdfc08b3296f0164149119b33e9bcc21",s=u.Z.create({baseURL:"https://api.themoviedb.org/3"}),o=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},854:function(n,e,t){var r=t(184);e.Z=function(){return(0,r.jsx)("div",{children:"Loading..."})}},875:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(689),a=t(87),c=t(184),u=function(n){var e=n.list,t=(0,r.TH)();return(0,c.jsx)("ol",{className:"trending_list",children:e.map((function(n){var e=n.id,r=n.title,u=n.name;return(0,c.jsx)("li",{className:"item",children:(0,c.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:t},className:"item",children:r||u})},e)}))})}},544:function(n,e,t){t.r(e);var r=t(861),a=t(439),c=t(757),u=t.n(c),i=t(600),s=t(791),o=t(875),f=t(854),p=t(184);e.default=function(){var n=(0,s.useState)([]),e=(0,a.Z)(n,2),t=e[0],c=e[1],l=(0,s.useState)(!1),v=(0,a.Z)(l,2),d=v[0],h=v[1],m=(0,s.useState)(null),g=(0,a.Z)(m,2),x=g[0],w=g[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,(0,i.cI)();case 4:e=n.sent,c(e.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),w(!0);case 11:return n.prev=11,h(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{children:"Trending today"}),d&&(0,p.jsx)(f.Z,{}),x&&(0,p.jsx)("p",{children:"Something went wrong.."}),t.length>0&&(0,p.jsx)(o.Z,{list:t})]})}}}]);
//# sourceMappingURL=544.00e5bd3d.chunk.js.map