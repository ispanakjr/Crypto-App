(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(10),r=a.n(c),s=a(36),i=a(35),o=a(11),j=(a(87),a(37)),d=a.n(j),l=a(14),p=a(45),x=a(21),b=a(150),h=a(152),u=a(153),m=a(154),O=a(43),g=a(155),f=a(156),v=a(160),k=a(157),y=a(148),N=a(20),w=a(70),C=a.n(w),I=a(47),S=a.n(I),B=a(4),H=Object(y.a)((function(e){return{pokodexContainer:{paddingTop:"20px",paddingLeft:"50px",paddingRight:"50px"},cardMedia:{margin:"auto"},cardContent:{textAlign:"center"},searchContainer:{display:"flex",backgroundColor:Object(N.b)(e.palette.common.white,.15),paddingLeft:"20px",paddingRight:"20px",paddingTop:"0",paddingButtom:"0"},searchIcon:{alignSelf:"flex-end",marginBottom:"5px"},searchInput:{width:"200px",margin:"5px"}}})),P=function(e){var t=H(),a=e.history,c=Object(n.useState)({}),r=Object(x.a)(c,2),i=r[0],o=r[1],j=Object(n.useState)(""),y=Object(x.a)(j,2),N=y[0],w=y[1];Object(n.useEffect)((function(){(function(){var e=Object(p.a)(d.a.mark((function e(){var t,a,n,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=200");case 3:t=e.sent,a=t.data,n=a.results,console.log(t),c=function(e,t,a){var n={id:a+1,name:t.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(a+1,".png")};return Object(s.a)(Object(s.a)({},e),{},Object(l.a)({},a+1,n))},r=n.reduce(c,{}),o(r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),o(!1);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(g.a,{position:"static",children:Object(B.jsx)(f.a,{children:Object(B.jsxs)("div",{className:t.searchContainer,children:[Object(B.jsx)(C.a,{className:t.searchIcon}),Object(B.jsx)(v.a,{onChange:function(e){w(e.target.value)},className:t.searchInput,label:"Search Pokemon"})]})})}),i?Object(B.jsx)(b.a,{container:!0,spacing:3,className:t.pokodexContainer,children:Object.keys(i).map((function(e){return i[e].name.includes(N)&&function(e){var n=i[e],c=n.id,r=n.name,s=n.sprite;return Object(B.jsx)(b.a,{item:!0,xs:12,sm:4,children:Object(B.jsxs)(h.a,{onClick:function(){return a.push("/".concat(e))},children:[Object(B.jsx)(u.a,{className:t.cardMedia,image:s,style:{width:"130px",height:"130px"}}),Object(B.jsx)(m.a,{className:t.cardContent,children:Object(B.jsx)(O.a,{children:"".concat(c,".").concat(r)})})]})})}(e)}))}):Object(B.jsx)(k.a,{})]})},T=a(161),E=a(158),A=a(163),R=a(159),W=a(162),F=a(50),J=Object(y.a)({card:{maxWidth:"500px",margin:"25px auto",borderRadius:"40px"},header:{textAlign:"center",textTransform:"capitalize"},image:{height:"220px",width:"220px",margin:"auto"},recep:{alignSelf:"center"},avatar:{backgroundColor:F.a[500],margin:0},cardHeader:{padding:"30px 35px 25px 35px"},cagri:{margin:0},bolder:{fontWeight:"bold"},types:{textTransform:"uppercase"},pokeHeader:{margin:"10px auto 20px"}}),L=function(e){e.history;var t=Object(o.f)().pokemonId;console.log(t);var a=Object(n.useState)(void 0),c=Object(x.a)(a,2),r=c[0],s=c[1],j=J();Object(n.useEffect)((function(){(function(){var e=Object(p.a)(d.a.mark((function e(){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t,"/"));case 3:a=e.sent,n=a.data,s(n),console.log(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0,"Error");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[t]);return Object(B.jsxs)(B.Fragment,{children:[void 0===r&&Object(B.jsx)(k.a,{}),void 0!==r&&r&&function(){var e=r.name,t=r.id,a=r.species,n=r.weight,c=r.height,s=r.types,o=(r.sprites,"https://pokeres.bastionbot.org/images/pokemon/".concat(t,".png"));return Object(B.jsx)("div",{className:j.pokeContainer,children:Object(B.jsx)(T.a,{boxShadow:24,className:j.card,children:Object(B.jsxs)(h.a,{variant:"outlined",className:j.card,children:[Object(B.jsx)(E.a,{className:j.cardHeader,avatar:Object(B.jsxs)(A.a,{className:j.avatar,children:[" ","".concat(t)," "]}),classes:{action:j.recep,avatar:j.cagri},action:Object(B.jsx)(R.a,{underline:"none",component:i.b,to:"/",children:Object(B.jsx)(W.a,{variant:"contained",color:"secondary",children:"Back Index"})}),title:Object(B.jsx)(O.a,{className:j.header,variant:"h3",children:e})}),Object(B.jsx)(u.a,{className:j.image,image:o,title:"pokemon"}),Object(B.jsxs)(m.a,{className:j.content,children:[Object(B.jsx)(O.a,{align:"center",variant:"h4",className:j.pokeHeader,children:"Pokemon Info"}),Object(B.jsx)(T.a,{mx:3,children:Object(B.jsxs)(b.a,{container:!0,children:[Object(B.jsxs)(b.a,{item:!0,xs:3,children:[Object(B.jsx)(O.a,{className:j.bolder,children:"Species: "}),Object(B.jsx)(O.a,{className:j.bolder,children:"Height:"}),Object(B.jsx)(O.a,{className:j.bolder,children:"Weight:"})]}),Object(B.jsxs)(b.a,{item:!0,xs:9,children:[Object(B.jsx)(O.a,{children:Object(B.jsx)(R.a,{color:"inherit",href:a.url,children:a.name})}),Object(B.jsx)(O.a,{children:c}),Object(B.jsx)(O.a,{children:n})]})]})}),Object(B.jsx)(O.a,{variant:"h6",align:"center",children:" Types"}),Object(B.jsx)(b.a,{container:!0,justify:"space-evenly",children:s.map((function(e){var t=e.type;return Object(B.jsx)(b.a,{item:!0,children:Object(B.jsx)(O.a,{className:j.types,color:"secondary",display:"inline",align:"center",children:"".concat(t.name," ")},t.name)})}))})]})]})})})}(),!1===r&&Object(B.jsxs)(O.a,{children:["Pokemon not found! ",Object(B.jsx)(R.a,{component:i.b,to:"/",children:Object(B.jsx)(W.a,{variant:"contained",children:"Back Index"})})]})]})};var M=function(){return Object(B.jsx)(i.a,{children:Object(B.jsxs)(o.c,{children:[Object(B.jsx)(o.a,{exact:!0,path:"/",render:function(e){return Object(B.jsx)(P,Object(s.a)({},e))}}),Object(B.jsx)(o.a,{exact:!0,path:"/:pokemonId",render:function(e){return Object(B.jsx)(L,Object(s.a)({},e))}})]})})},z=a(16),q=Object(z.a)();r.a.render(Object(B.jsx)(o.b,{history:q,children:Object(B.jsx)(M,{})}),document.getElementById("root"))},87:function(e,t,a){}},[[121,1,2]]]);
//# sourceMappingURL=main.2f292fbf.chunk.js.map