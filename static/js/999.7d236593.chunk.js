"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[999],{854:function(e,t,n){var r=n(184);t.Z=function(){return(0,r.jsx)("div",{children:"Loading..."})}},875:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(689),a=n(87),c=n(184),u=function(e){var t=e.list,n=e.movie,u=(0,r.TH)();return(0,c.jsx)("ol",{className:"trending_list",children:t.map((function(e){var t=e.id,r=e.title,s=e.name;return(0,c.jsx)("li",{className:"item",children:(0,c.jsx)(a.rU,{to:n?"".concat(t):"movies/".concat(t),state:{from:u},className:"item",children:r||s})},t)}))})}},240:function(e,t,n){n.d(t,{Ku:function(){return l},Pg:function(){return p},Pt:function(){return f},cI:function(){return o},fI:function(){return v}});var r=n(861),a=n(757),c=n.n(a),u=n(243),s="cdfc08b3296f0164149119b33e9bcc21",i=u.Z.create({baseURL:"https://api.themoviedb.org/3"}),o=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},999:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),i=n(240),o=n(87),f=n(184),p=function(e){var t=e.getMovie,n=(0,o.lr)(),r=(0,a.Z)(n,2),c=r[0],u=r[1],s=c.get("search");return(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=c.get("search");t(n)},className:"search_form",children:[(0,f.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;u(t?{search:t}:{})},value:s||""}),(0,f.jsx)("button",{type:"submit",children:"search"})]})},l=n(875),v=n(854),h=function(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),n=t[0],c=t[1],o=(0,s.useState)([]),h=(0,a.Z)(o,2),d=h[0],m=h[1],g=(0,s.useState)(!1),x=(0,a.Z)(g,2),w=x[0],k=x[1],Z=(0,s.useState)(null),b=(0,a.Z)(Z,2),y=b[0],j=b[1],_=(0,s.useState)(!1),S=(0,a.Z)(_,2),N=S[0],U=S[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,(0,i.Pt)(n);case 4:0===(t=e.sent).results.length?U(!0):(U(!1),m(t.results)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),j(!0);case 11:return e.prev=11,k(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();n&&e()}),[n]),(0,f.jsxs)("div",{className:"container movies",children:[(0,f.jsx)(p,{getMovie:function(e){c(e)}}),w&&(0,f.jsx)(v.Z,{}),y&&(0,f.jsx)("p",{children:"Something went wrong.."}),N&&(0,f.jsx)("h2",{children:"Nothing found..."}),d.length>0&&(0,f.jsx)(l.Z,{list:d,movie:!0})]})}}}]);
//# sourceMappingURL=999.7d236593.chunk.js.map