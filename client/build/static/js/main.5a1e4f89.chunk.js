(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,t){},126:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(64),s=a.n(o),i=a(2),l=a(6),u=a.p+"static/media/ice_cream_girl.d05f0f17.svg",m=a(19),d=a(4),f=a(5),g=a(17),p=a(61),h=function(e){var t=e.searchTerm,a=e.selectPlace,o=Object(r.useRef)(""),s=Object(r.useState)([]),i=Object(l.a)(s,2),u=i[0],m=i[1],d=Object(r.useRef)(!1),f=Object(r.useRef)();Object(r.useEffect)((function(){!function(e,t){var a=document.createElement("script");a.type="text/javascript",a.onload=t,document.head.appendChild(a),a.src=e}("https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyAwYvFJPPLX35upT8qE-c9GILuhkE0vAAc","&libraries=places"),(function(){return n=new window.google.maps.places.AutocompleteService,void(d.current=!0)}))}),[]),Object(r.useEffect)((function(){d&&t&&t!==o.current&&(o.current=t,n.getPlacePredictions({input:t,types:["(regions)"]},(function(e,t){m(e.map((function(e){return e.description}))||[])})))}),[t]);var g=Object(r.useCallback)((function(e){a(e),f.current=e}),[a]);return f.current===t?null:c.a.createElement(p.a,{items:u,updateSelection:g,last:c.a.createElement("img",{src:"data:image/png;base64,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",alt:"powered by Google",className:"float-right px-2 py-1 w-38"})})},b=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)(""),s=Object(l.a)(o,2),i=s[0],p=s[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"flex-1 p-4 md:px-6 bg-red text-gray-200 sm:rounded-lg sm:shadow-lg sm:max-w-lg md:m-2 lg:mr-6"},c.a.createElement("img",{className:"w-40",src:m.a,alt:"chew logo"}),c.a.createElement("p",{className:"font-display sm:text-lg leading-tight py-1"},"Chew is the easiest way to pick a restaurant with your friends and family. Simply create a session, share the link, and everyone can add restaurants that they're interested in and vote on each other's selections."),c.a.createElement(g.b,null,(function(e){return c.a.createElement("form",{onSubmit:function(t){return e.createSession(t,a,i)},className:"p-3 bg-gray-100 text-gray-600 rounded my-4 sm:mx-4 lg:mx-6 shadow"},c.a.createElement("h2",{className:"font-bold font-display text-xl text-gray-700 italic"},"Create a new session:"),c.a.createElement("hr",null),c.a.createElement("label",{className:"block my-3 mx-3"},c.a.createElement("span",{className:"uppercase font-bold text-sm"},"Your name:"),c.a.createElement("div",{className:"py-1 px-2 rounded border border-gray-300 bg-white focus-within:border-blue-light2 w-max-content"},c.a.createElement(d.a,{icon:f.D,className:"mr-2"}),c.a.createElement("input",{className:"px-2 focus:ring-0 border-0 border-l border-gray-300 bg-white focus:border-gray-300 py-0",type:"text",value:a,onChange:function(e){return n(e.target.value)},required:!0}))),c.a.createElement("label",{className:"block my-3 mx-3"},c.a.createElement("span",{className:"uppercase font-bold text-sm"},"Location:"),c.a.createElement("div",{className:"py-1 px-2 rounded border border-gray-300 focus:border-gray-300 bg-white focus-within:border-blue-light2 w-max-content "},c.a.createElement(d.a,{icon:f.r,className:"mr-2"}),c.a.createElement("input",{className:"px-2 focus:ring-0 border-0 border-l border-gray-300 bg-white focus:border-gray-300 py-0",type:"text",value:i,onChange:function(e){return p(e.target.value)},required:!0})),c.a.createElement(h,{searchTerm:i,selectPlace:function(e){return p(e)}})),c.a.createElement("div",{className:"text-gray-500 italic text-sm leading-none my-2 ml-4 flex items-center"},c.a.createElement(d.a,{icon:f.q,className:"pr-2 flex-none",size:"2x"}),c.a.createElement("p",{className:"flex-initial"},"Results returned will not be strictly within this area, it serves as a starting point for your search.")),c.a.createElement("div",{className:"relative overflow-hidden group text-gray-50"},c.a.createElement("button",{type:"submit",className:"block w-full p-2 uppercase font-bold tracking-wide bg-yellow hover:bg-yellow-dark rounded shadow btn-focus","aria-label":"create new session"},"create")," ",c.a.createElement(d.a,{icon:f.u,className:"absolute left-0 top-0 group-hover:mt-10 group-hover:ml-12 -mt-16 ml-2 opacity-75 transition-spacing duration-500 ease-linear pointer-events-none",size:"4x"}),c.a.createElement(d.a,{icon:f.u,className:"absolute left-0 top-0 group-hover:-mt-12 group-hover:ml-24 mt-12 ml-0 opacity-75 transition-spacing duration-300 ease-linear pointer-events-none",size:"3x"}),c.a.createElement(d.a,{icon:f.u,className:"absolute right-0 top-0 group-hover:mt-10 group-hover:mr-24 -mt-20 mr-16 opacity-75 transition-spacing duration-500 ease-linear pointer-events-none",size:"4x"}),c.a.createElement(d.a,{icon:f.u,className:"absolute right-0 top-0 group-hover:-mt-12 group-hover:mr-2 mt-16 mr-12 opacity-75 transition-spacing duration-300 ease-linear pointer-events-none",size:"3x"}),c.a.createElement(d.a,{icon:f.u,className:"absolute right-0 top-0 group-hover:-mt-12 group-hover:mr-20 mt-16 mr-0 opacity-75 transition-spacing duration-300 ease-linear pointer-events-none",size:"3x"})))})),c.a.createElement("div",{className:"p-4 border-l-8 border-gray-200 bg-gray-50 bg-opacity-25 mx-4 md:my-4 md:mx-8 rounded shadow leading-tight"},"If you are trying to join someone else's session, copy and paste the session link to your browser.")),c.a.createElement("img",{className:"flex-1 hidden md:inline max-w-lg",src:u,alt:"girl holding a giant ice cream cone"}))},E=a.p+"static/media/triangles.de4adca4.svg",y=a(62),v=a(10),w=function(){return c.a.createElement("footer",{className:"w-full"},c.a.createElement("img",{src:E,alt:"decorative footer border",className:"hidden sm:block"}),c.a.createElement("div",{className:"bg-gray-800 text-gray-50 p-2 md:px-8 md:py-4 lg:px-24 block sm:flex justify-around leading-tight items-center"},c.a.createElement(v.b,{to:"/getStarted"},c.a.createElement("img",{className:"hidden sm:block flex-initial w-32",src:m.a,alt:"chew logo"})),c.a.createElement("div",{className:"flex-initial"},c.a.createElement(y.a,null))))},x=function(e){var t=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement("main",{className:"flex-grow flex justify-center w-screen items-stretch sm:items-center"},t),c.a.createElement(w,null))},N=(a(126),a.p+"static/media/reading_girl.3d7737b0.svg"),k=function(){return c.a.createElement(x,null,c.a.createElement("div",{className:"flex-1 py-2 px-4 md:py-4 md:px-6 bg-gray-50 text-gray-800 rounded-lg shadow-lg max-w-md m-2 lg:mr-6"},c.a.createElement("h2",{className:"text-xl font-display font-bold italic"},"Page not found"),c.a.createElement("p",{className:"leading-tight mt-1"},"If you are trying to join someone's session, please make sure you have entered the url correctly."),c.a.createElement(v.b,{to:"/getStarted",className:"inline-block shadow rounded bg-red py-1 px-2 text-sm text-gray-50 uppercase tracking-wide mt-3"},c.a.createElement(d.a,{icon:f.p,className:"mr-2"}),"Go home")),c.a.createElement("img",{src:N,className:"hidden md:inline flex-1 max-w-md",alt:"girl reading a book"}))},j=a.p+"static/media/papers.4c78aba3.svg",A=function(){return c.a.createElement(x,null,c.a.createElement("img",{src:j,className:"hidden md:inline flex-1 max-w-md",alt:"girl reading a book"}),c.a.createElement("div",{className:"flex-1 py-2 px-4 md:py-4 md:px-6 bg-gray-50 text-dark-800 rounded-lg shadow-lg max-w-md m-2 lg:mr-6"},c.a.createElement("h2",{className:"text-xl font-display font-bold italic"},"Terms of Use and Privacy Policy"),c.a.createElement("p",{className:"leading-tight mt-1 px-2"},"By using Chew, you are bound by Google's"," ",c.a.createElement("a",{className:"border-b border-blue-light2",href:"https://policies.google.com/terms?hl=en",target:"_blank",rel:"noopener noreferrer"},"Terms of Service"),"."),c.a.createElement("p",{className:"leading-tight mt-1 px-2"},"Chew uses the Google Places API on the ",c.a.createElement("i",null,"Get Started")," page to provide location suggestions and to autocomplete your searches. For information about what data Google collects and how they use it, please read"," ",c.a.createElement("a",{className:"border-b border-blue-light2",href:"https://policies.google.com/privacy",target:"_blank",rel:"noopener noreferrer"},"Google's Privacy Policy"),"."),c.a.createElement(v.b,{to:"/getStarted",className:"inline-block shadow rounded bg-red py-1 px-2 text-sm text-gray-50 uppercase tracking-wide mt-3"},c.a.createElement(d.a,{icon:f.p,className:"mr-2"}),"Go home")))},O=a(36);a(127).config();var S=c.a.lazy((function(){return a.e(3).then(a.bind(null,134))})),I=function(){return c.a.createElement(g.c,null,c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/getStarted",exact:!0},c.a.createElement(x,null,c.a.createElement(b,null))),c.a.createElement(i.b,{path:"/ID/:sessionId",render:function(){return c.a.createElement(r.Suspense,{fallback:c.a.createElement(O.a,{shadow:!1,onClose:function(){}},c.a.createElement(d.a,{icon:f.f,size:"5x",className:"animate-spin text-yellow block"}))},c.a.createElement(S,null))}}),c.a.createElement(i.b,{path:"/404",exact:!0},c.a.createElement(k,null)),c.a.createElement(i.b,{path:"/TOS",exact:!0},c.a.createElement(A,null)),c.a.createElement(i.b,{path:"/",exact:!0},c.a.createElement(i.a,{to:"/getStarted"})),c.a.createElement(i.b,{path:"/"},c.a.createElement(i.a,{to:"/404"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v.a,{basename:"/chew"},c.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},17:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return f})),a.d(t,"b",(function(){return d}));var n=a(6),r=a(0),c=a.n(r),o=a(2),s=a(35),i=a(32),l=a.n(i),u=c.a.createContext({}),m=u.Provider,d=u.Consumer,f=function(e){var t=e.children,a=Object(r.useState)(""),i=Object(n.a)(a,2),u=i[0],d=i[1],f=Object(r.useState)(),g=Object(n.a)(f,2),p=g[0],h=g[1],b=Object(r.useState)(""),E=Object(n.a)(b,2),y=E[0],v=E[1],w=Object(r.useState)(""),x=Object(n.a)(w,2),N=x[0],k=x[1],j=Object(r.useState)({}),A=Object(n.a)(j,2),O=A[0],S=A[1],I=Object(r.useState)(),z=Object(n.a)(I,2),C=z[0],P=z[1],D=Object(r.useState)(""),M=Object(n.a)(D,2),Y=M[0],G=M[1],Q=Object(o.g)(),W=Object(o.h)();Object(r.useEffect)((function(){var e=localStorage.getItem("chewUserId");e&&h(e)}),[]),Object(r.useEffect)((function(){p&&(localStorage.setItem("chewUserId",p),G(l()(p)))}),[p]),Object(r.useEffect)((function(){var e=Object(o.f)(W.pathname,{path:"/ID/:sessionId"});e&&d(e.params.sessionId)}),[N,W.pathname]);return c.a.createElement(m,{value:{sessionId:u,setSessionId:d,userId:p,userIdHash:Y,setUserId:h,userState:y,setUserState:v,createSession:function(e,t,a){e.preventDefault(),k(a),s.a.newSession({userName:t,location:a,userId:p},(function(e){d(e.sessionId||""),P({name:t,hashId:l()(e.userId||"")}),h(e.userId),v("canVote"),Q.push("/ID/".concat(e.sessionId)),window.history.replaceState({fromLogin:!0},"")}))},location:N,setLocation:k,creator:C,setCreator:P,previousVotes:O,setPreviousVotes:S}},t)}},19:function(e,t,a){"use strict";t.a=a.p+"static/media/chew_logo.b2611f50.svg"},22:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),r=function(e){var t=Object(n.useRef)(null),a=Object(n.useCallback)((function(t){"Escape"===t.key&&e()}),[e]),r=Object(n.useCallback)((function(a){t.current.contains(a.target)||null===e||void 0===e||e()}),[e]);return Object(n.useEffect)((function(){return document.addEventListener("click",r),document.addEventListener("keyup",a),function(){document.removeEventListener("click",r),document.removeEventListener("keyup",a)}}),[r,a]),t}},35:function(e,t,a){"use strict";var n=a(65),r=a(66),c=a.n(r),o=a(13),s=a.n(o),i="https://chewapp.herokuapp.com",l=new function e(){var t=this;Object(n.a)(this,e),this.socket=void 0,this.search=function(e,t,a,n,r){return new Promise((function(c,o){return s.a.get("".concat(i,"/search/").concat(e,"/").concat(t,"/").concat(a,"/").concat(n,"/").concat(r)).then((function(e){return c(e.data)}))}))},this.setUserName=function(e,t,a){return new Promise((function(n,r){return s.a.post("".concat(i,"/setUserName/").concat(e,"/").concat(t,"/").concat(a)).then((function(e){return n(e.data)})).catch((function(){return console.error("error setting username")}))}))},this.addVote=function(e,t,a,n){return new Promise((function(r,c){return s.a.post("".concat(i,"/addVote/").concat(e,"/").concat(t,"/").concat(a,"/").concat(n)).then((function(e){return r(e.data)}))}))},this.addRestaurant=function(e,t,a){return new Promise((function(n,r){return s.a.post("".concat(i,"/addRestaurant/").concat(e,"/").concat(t,"/").concat(a)).then((function(e){return n(e.data)}))}))},this.removeRestaurant=function(e,t,a){return new Promise((function(n,r){return s.a.post("".concat(i,"/removeRestaurant/").concat(e,"/").concat(t,"/").concat(a)).then((function(e){return n(e.data)}))}))},this.autocomplete=function(e,t){return new Promise((function(a,n){return s.a.get("".concat(i,"/autocomplete/").concat(e,"/").concat(t)).then((function(e){return a(e.data)}))}))},this.emit=function(e,a,n){console.log("socket emitting ".concat(n," with data ").concat(JSON.stringify(e))),t.socket.emit(n,e,a)},this.newSession=function(e,a){t.emit(e,a,"newSession")},this.tryJoinSession=function(e,a){t.emit(e,a,"tryJoinSession")},this.subscribeToVoteAdded=function(e){t.socket.on("addedVote",e)},this.unSubscribeToVoteAdded=function(){t.socket.off("addedVote")},this.subscribeToRestaurantAdded=function(e){t.socket.on("addedRestaurant",e)},this.unSubscribeToRestaurantAdded=function(){t.socket.off("addedRestaurant")},this.subscribeToRestaurantRemoved=function(e){t.socket.on("removedRestaurant",e)},this.unSubscribeToRestaurantRemoved=function(){t.socket.off("removedRestaurant")},this.socket=c.a.connect(i)};t.a=l},36:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(22);t.a=function(e){var t=e.onClose,a=e.shadow,n=void 0===a||a,o=e.children,s=Object(c.a)(t);return r.a.createElement("div",{className:"w-screen h-screen fixed bg-gray-800 bg-opacity-75 flex justify-center items-center z-40 left-0 top-0"},r.a.createElement("div",{ref:s,className:"rounded-lg max-w-sm m-2 overflow-hidden "+(n?"shadow-2xl":"")},o))}},61:function(e,t,a){"use strict";var n=a(6),r=a(0),c=a.n(r),o=a(22);t.a=function(e){var t=e.items,a=e.updateSelection,s=e.last,i=Object(r.useState)(!0),l=Object(n.a)(i,2),u=l[0],m=l[1],d=Object(r.useState)(-1),f=Object(n.a)(d,2),g=f[0],p=f[1],h=Object(o.a)((function(){return m(!1)}));Object(r.useEffect)((function(){return m(!0)}),[t]);var b=function(e){switch(e.key){case"ArrowDown":p((function(e){return(e+1)%t.length}));break;case"ArrowUp":p((function(e){return((e-1)%t.length+t.length)%t.length}));break;case"Escape":p(-1);break;case"Enter":g>-1&&t.length>0&&(e.preventDefault(),a(t[g]),m(!1),p(-1))}};return Object(r.useEffect)((function(){return window.addEventListener("keydown",b),function(){return window.removeEventListener("keydown",b)}})),u?c.a.createElement("ul",{ref:h,className:"absolute bg-gray-50 z-40 divide-y shadow text-sm rounded-b overflow-hidden"},t.map((function(e,t){return c.a.createElement("li",{key:t,onMouseOver:function(e){return p(t)},className:"px-2 py-1 cursor-pointer "+(g===t?"bg-blue-light2 text-gray-50":""),onClick:function(){a(e),m(!1)}},e)})),t.length>0&&s&&c.a.createElement("li",null,s)):c.a.createElement("ul",{ref:h,className:"hidden"})}},62:function(e,t,a){"use strict";var n=a(5),r=a(4),c=a(0),o=a.n(c),s=a(10);t.a=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{className:"block",href:"http://github.com/lauraschultz/chew",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(r.a,{icon:n.A,size:"sm",className:"mr-2"}),"star on Github"),o.a.createElement(s.b,{to:"/TOS"},o.a.createElement(r.a,{icon:n.m,size:"sm",className:"mr-2"}),"terms of use & privacy policy"))}}},[[130,1,2]]]);
//# sourceMappingURL=main.5a1e4f89.chunk.js.map