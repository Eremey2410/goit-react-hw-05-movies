"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[840],{245:function(e,n,t){t.d(n,{a:function(){return u}});var r,a=t(966),c=t(168),s=t(921).Z.div(r||(r=(0,c.Z)(["\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n"]))),i=t(184),o=(0,i.jsx)(a.g4,{height:"80",width:"80",radius:"9",color:"#3f51b5",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}),u=function(){return(0,i.jsx)(s,{children:o})}},738:function(e,n,t){t.d(n,{Bt:function(){return g},DD:function(){return d},d5:function(){return v},on:function(){return p},vw:function(){return u}});var r=t(861),a=t(687),c=t.n(a),s=t(44),i="https://api.themoviedb.org",o="4c33f26efea47de01ecb916551cbf5ca";function u(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.ZP)("".concat(i,"/3/trending/all/day?api_key=").concat(o));case 3:return n=e.sent,t=n.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.ZP)("".concat(i,"/3/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.ZP)("".concat(i,"/3/movie/").concat(n,"?api_key=").concat(o,"&language=en-US"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.ZP)("".concat(i,"/3/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function g(e){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.ZP)("".concat(i,"/3/movie//").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},840:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r,a=t(861),c=t(885),s=t(687),i=t.n(s),o=t(738),u=t(168),l=t(921).Z.div(r||(r=(0,u.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),p=t(245),h=t(731),d=t(689),f=t(791),v=t(184),x=function(){var e,n,t=(0,d.UO)().movieId,r=(0,f.useState)(null),s=(0,c.Z)(r,2),u=s[0],x=s[1],g=(0,f.useState)(!1),j=(0,c.Z)(g,2),m=j[0],w=j[1],y=(0,f.useState)(null),k=(0,c.Z)(y,2),Z=k[0],b=k[1],_=null!==(e=null===(n=(0,d.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";if((0,f.useEffect)((function(){function e(){return(e=(0,a.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,(0,o.DD)(t);case 4:n=e.sent,x(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),b({error:e.t0});case 11:return e.prev=11,w(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),!u)return null;var S=u.poster_path,U=u.title,C=u.overview,P=u.genres,D=u.release_date,O=u.vote_average;return(0,v.jsxs)("div",{children:[m&&(0,v.jsx)(p.a,{}),Z&&(0,v.jsx)("p",{children:"Whoops, something went wrong"}),(0,v.jsx)("section",{children:(0,v.jsx)(h.OL,{to:_,children:"Go back"})}),(0,v.jsxs)(l,{children:[(0,v.jsx)("div",{children:S?(0,v.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w300").concat(S),alt:U}):(0,v.jsx)("img",{src:"".concat("https://quotationexpo.com/assets/images/product/avatar.jpg"),alt:U,width:"300"})}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("h1",{children:[U," (",D.slice(0,4),")"]}),(0,v.jsxs)("p",{children:["User score ",Math.round(10*O),"%"]}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:C}),(0,v.jsx)("h2",{children:"Genres"}),(0,v.jsx)("div",{children:P.map((function(e){var n=e.name,t=e.id;return(0,v.jsx)("p",{children:n},t)}))})]})]}),(0,v.jsxs)("section",{children:[(0,v.jsx)("h2",{children:"Additional Information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(h.rU,{to:"Cast",state:{from:_},children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(h.rU,{to:"Reviews",state:{from:_},children:"Reviews"})})]})]}),(0,v.jsx)(d.j3,{})]})}}}]);
//# sourceMappingURL=840.684e5e02.chunk.js.map