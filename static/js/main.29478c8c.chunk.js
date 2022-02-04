(this.webpackJsonpmodal=this.webpackJsonpmodal||[]).push([[0],{85:function(n,e,t){"use strict";t.r(e);var i,r,o,a,c,s,d,l,b,f,j=t(1),m=t.n(j),u=t(24),h=t.n(u),p=t(9),g=t(10),x=t(11),O=t.p+"static/media/rubik_light.0a541fbd.woff",w=t.p+"static/media/rubik_light.3e208058.woff2",v=Object(x.a)(i||(i=Object(g.a)(["\n    @font-face {\n        font-family: 'Rubik Light';\n        src: local('Rubik Light'), local('RubikLight'),\n        url(",") format('woff2'),\n        url(",") format('woff');\n        font-weight: 300;\n        font-style: normal;\n    }\n"])),w,O),y=Object(x.a)(r||(r=Object(g.a)(["\n    * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n    }\n\n    html {\n        font-family: 'Rubik Light', sans-serif;\n        font-size: 100%;\n    }\n"]))),k=t(55),B=t.n(k),C=function(n,e){var t=Object(j.useState)({items:[],loading:!0}),i=Object(p.a)(t,2),r=i[0],o=i[1];return Object(j.useEffect)((function(){B.a.get(n,{headers:{Authorization:"Token token=".concat(e)}}).then((function(n){console.log("res data",n.data),o({items:n.data,loading:!1})})).catch((function(n){console.log(n)}))}),[n]),[r.items,r.loading]},z=t(2),F=x.b.div(o||(o=Object(g.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),S=x.b.svg(a||(a=Object(g.a)(["\n        animation: Spin 2s infinite linear;\n\n        circle {\n            fill: #000;\n        }\n        \n        path {\n            animation: PacMan 5s infinite;\n            fill: none;\n            stroke: #FBB117;\n            stroke-width: 25;\n        }\n\n        @keyframes PacMan {\n        0% {\n            stroke-dasharray: 79px 79;\n        }\n        50% {\n            stroke-dasharray: 1px 79;\n        }\n        100% {\n            stroke-dasharray: 79px 79;\n        }\n        }\n\n        @keyframes Spin {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n        }\n"]))),E=function(){return Object(z.jsx)(F,{children:Object(z.jsxs)(S,{width:"150",height:"150",viewBox:"0 0 100 100",children:[Object(z.jsx)("circle",{r:"24",cx:"50",cy:"50"}),Object(z.jsx)("path",{d:"M 37.5,50 C 37.5,43.096441 43.096441,37.5 50,37.5 C 56.903559,37.5 62.5,43.096441 62.5,50 C 62.5,56.903559 56.903559,62.5 50,62.5 C 43.096441,62.5 37.5,56.903559 37.5,50"})]})})},L=t(38),M=t(87),R=t(57),P=x.b.div(c||(c=Object(g.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 10;\n    display: flex;\n    justify-content: center;\n    align-items: start;   \n    overflow-x: hidden; \n    overflow-y: auto;\n    background: rgba(0, 0, 0, .8);\n\n    @media (min-width: 768px) {\n        align-items: center;\n    }\n"]))),_=x.b.div(s||(s=Object(g.a)(["\n    position: relative;\n    z-index: 20;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    max-width: 800px;\n    box-shadow: 0 5px 16px rgba(0, 0, 0, .2);\n    border-radius: 10px;\n    background-color: rgba(0, 0, 0, .9);\n    color: #000;\n"]))),I=x.b.div(d||(d=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 4rem;\n    font-family: 'Rubik Light', sans-serif;\n    line-height: 1.8;\n    color: #fff;\n\n    img {\n        margin-bottom: 2rem;\n        border-radius: 50%;\n        border: 4px solid #FBB117;\n    }\n\n    p {\n        margin-bottom: 2rem;\n    }\n\n    h2 {\n        margin-bottom: 0.5rem;\n        font-size: 1rem;\n    }\n\n    a {\n        margin-right: 1rem;\n    }\n\n    .icon {\n        color: #fff;\n        font-size: 1.25rem;\n        transition: color 400ms ease;\n\n        &:hover {\n            color: #FBB117;\n        }\n    }\n\n    footer {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: space-around;\n        align-content: space-around;\n        width: 100%;\n\n        div:first-child {\n            padding-bottom: 2rem;\n        }\n\n        @media (min-width: 768px){\n            flex-wrap: nowrap;\n            justify-content: space-between;\n\n            div:first-child {\n                padding-bottom: 0;\n            }\n        }\n    }\n"]))),T=Object(x.b)(R.a)(l||(l=Object(g.a)(["\n    cursor: pointer;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    width: 32px;\n    height: 32px;\n    padding: 0;\n    z-index: 10;\n    color: #fff;\n"]))),J=Object(j.forwardRef)((function(n,e){var t=n.showModal,i=n.setShowModal,r=n.selectedEpisode,o=n.onClose,a=document.getElementById("modal-root"),c=Object(L.useSpring)({config:{duration:250},opacity:t?1:0,transform:t?"translateY(0%)":"translateY(-100%)"}),s=Object(j.useCallback)((function(n){"Escape"===n.key&&t&&i(!1)}),[t,i]),d=function(){var n=C("https://www.buzzsprout.com/api/1219346/episodes.json","59558f37aaed3f51b4d4a5c90d491f6c"),e=Object(p.a)(n,2),t=e[0],i=e[1],o=t[r];return i?Object(z.jsx)(E,{}):null!==r?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("header",{children:Object(z.jsx)("h1",{children:o.title})}),Object(z.jsx)("img",{width:"200",src:o.photo,alt:o.photo_alt}),Object(z.jsx)("p",{dangerouslySetInnerHTML:{__html:o.description}})]}):void 0};return Object(j.useEffect)((function(){return document.addEventListener("keydown",s),function(){return document.removeEventListener("keydown",s)}}),[s]),Object(u.createPortal)(Object(z.jsx)(z.Fragment,{children:t&&Object(z.jsx)(P,{ref:e,onClick:o,children:Object(z.jsx)(M.animated.div,{style:c,children:Object(z.jsxs)(_,{children:[Object(z.jsx)(I,{children:Object(z.jsx)(d,{})}),Object(z.jsx)(T,{"aria-label":"Close modal",onClick:function(){return i((function(n){return!n}))}})]})})})}),a)})),Y=x.b.div(b||(b=Object(g.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  grid-gap: 1em;\n"]))),A=x.b.figure(f||(f=Object(g.a)(["\n  position: relative;\n  z-index: 1;\n  padding: 2rem;\n  border: 4px solid #000;\n  margin: 1.5rem;\n  cursor: pointer;\n\n  .img-wrapper {\n    overflow: hidden;\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 4px solid #000;\n    transition: border 400ms ease;\n  }\n\n  img {\n    width: 100%;\n\n    display:block;\n    transition: transform 800ms ease;\n  }\n\n  figcaption {\n      h2 {\n        position: relative;\n        transition: color 1s;\n\n        &::after {\n          content : '';\n          position: absolute;\n          bottom: -10px;\n          left: 0;\n          width: 100%;\n          height: 4px;\n          background-color: #000;\n        }\n      }\n\n      h3 {\n        margin-top: 0.85rem;\n        transition: color 400ms ease;\n      }\n  }\n\n  &:hover .img-wrapper {\n    border-color: #FBB117;\n  }\n\n  &:hover img {\n    transform: scale(1.45);\n  }\n\n  &:hover h2,\n  &:hover h3 {\n    color: #FBB117;\n  }\n"])));var D=function(){var n=Object(j.useRef)(null),e=Object(j.useState)(!1),t=Object(p.a)(e,2),i=t[0],r=t[1],o=Object(j.useState)(null),a=Object(p.a)(o,2),c=a[0],s=a[1],d=function(){var n=C("https://www.buzzsprout.com/api/1219346/episodes.json","59558f37aaed3f51b4d4a5c90d491f6c"),e=Object(p.a)(n,2),t=e[0];return e[1]?Object(z.jsx)(E,{}):Object(z.jsx)(z.Fragment,{children:t.map((function(n,e){return Object(z.jsxs)(A,{onClick:function(){return function(n){r((function(n){return!n})),s((function(e){return n}))}(e)},children:[Object(z.jsx)("div",{className:"img-wrapper",children:Object(z.jsx)("img",{src:n.artwork_url,alt:"Vignette Boarderless Podcast ".concat(n.title)})}),Object(z.jsxs)("figcaption",{children:[Object(z.jsx)("h2",{children:n.title}),Object(z.jsx)("h3",{children:n.subtitle})]})]},n.id)}))})};return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(v,{}),Object(z.jsx)(y,{}),Object(z.jsxs)(Y,{children:[Object(z.jsx)(d,{}),Object(z.jsx)(J,{ref:n,showModal:i,setShowModal:r,selectedEpisode:c,setSelectedEpisode:s,onClose:function(e){n.current===e.target&&r(!1)}})]})]})},H=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,88)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;t(n),i(n),r(n),o(n),a(n)}))};h.a.render(Object(z.jsx)(m.a.StrictMode,{children:Object(z.jsx)(D,{})}),document.getElementById("root")),H()}},[[85,1,2]]]);
//# sourceMappingURL=main.29478c8c.chunk.js.map