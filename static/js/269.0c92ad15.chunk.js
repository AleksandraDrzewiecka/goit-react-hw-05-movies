"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[269],{269:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var s=n(861),c=n(439),a=n(757),i=n.n(a),r=n(243),o="FilmDetails_wrapper__87vW+",u="FilmDetails_title__TtGJ1",l="FilmDetails_image__1GZV8",d="FilmDetails_background__l8n57",h=n(791),v=n(184),f=n(87),p=f.useParams,_=f.useNavigate,m=f.useLocation,x=(f.Link,function(){var e=p().filmId,t=(0,h.useState)(e),n=(0,c.Z)(t,1)[0],a=(0,h.useState)({}),f=(0,c.Z)(a,2),x=f[0],j=f[1],b=_();m();(0,h.useEffect)((function(){var e=function(){var e=(0,s.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"76df6c5653ddfcebddeb9411f9024556",e.prev=1,e.next=4,r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat("76df6c5653ddfcebddeb9411f9024556"));case 4:t=e.sent,j(t.data),console.log(t.data),e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);return(0,v.jsxs)("div",{className:d,children:[(0,v.jsx)("button",{onClick:function(){b(-1)},children:"Go back"}),(0,v.jsxs)("div",{className:o,children:[(0,v.jsx)("div",{children:(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(x.poster_path),alt:"".concat(x.title," poster"),width:"300",height:"400",className:l})}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{className:u,children:x.title}),(0,v.jsx)("p",{children:x.overview}),(0,v.jsxs)("p",{children:["Status: ",x.status]}),(0,v.jsxs)("p",{children:["Average vote: ",Math.round(x.vote_average),"/10",(0,v.jsx)("br",{}),"Vote count: ",x.vote_count]})]})]}),(0,v.jsx)("button",{onClick:function(){b("/movies/".concat(n,"/cast"))},children:"Show cast"}),(0,v.jsx)("button",{onClick:function(){b("/movies/".concat(n,"/reviews"))},children:"Reviews"})]})}),j=n(689),b=function(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(x,{}),(0,v.jsx)(j.j3,{})]})}}}]);
//# sourceMappingURL=269.0c92ad15.chunk.js.map