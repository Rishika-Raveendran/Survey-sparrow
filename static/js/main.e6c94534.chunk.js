(this["webpackJsonpsurvey-sparrow"]=this["webpackJsonpsurvey-sparrow"]||[]).push([[0],{44:function(e,a,t){e.exports=t(64)},50:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(21),c=t.n(s),r=(t(49),t(50),t(22)),o=t(23),m=t(15),i=t(26),d=t(25),u=t(34),v=t.n(u),E=t(81),h=t(82),f=t(83),p=t(89),g=t(84),N=t(85),y=t(86),b=t(87),w=function(e){Object(i.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1},n.toggleNav=n.toggleNav.bind(Object(m.a)(n)),n}return Object(o.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{expand:"md"},l.a.createElement("div",{className:"container"},l.a.createElement(h.a,{className:"navig",href:"/"},"Maxeon"),l.a.createElement(f.a,{onClick:this.toggleNav},l.a.createElement(v.a,null)),l.a.createElement("div",{className:"col-md-7 offset-md-3 "},l.a.createElement(p.a,{isOpen:this.state.isNavOpen,navbar:!0},l.a.createElement(g.a,{className:" navitem ml-auto",navbar:!0},l.a.createElement(N.a,null,l.a.createElement(y.a,{className:"nav-link",to:"/"},"Products"))),l.a.createElement(g.a,{className:"ml-auto navitem",navbar:!0},l.a.createElement(N.a,null,l.a.createElement(y.a,{className:"nav-link",to:"/"},"Features"))),l.a.createElement(g.a,{className:"ml-auto navitem",navbar:!0},l.a.createElement(N.a,null,l.a.createElement(y.a,{className:"nav-link",to:"/"},"Use cases"))),l.a.createElement(g.a,{className:"ml-auto navitem",navbar:!0},l.a.createElement(N.a,null,l.a.createElement(y.a,{className:"nav-link",to:"/"},"Pricing"))),l.a.createElement(g.a,{className:"ml-auto navitem",navbar:!0},l.a.createElement(N.a,null,l.a.createElement(b.a,{color:"",className:"login"},"Login"))))))))}}]),t}(n.Component),k=t(42),x=t.n(k),C=t(28),O=t.n(C),B=t(39),I=t(40),j=t.n(I),S=t(41),T=t.n(S),M=t(90),W=t(88),L=function(e){Object(i.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).handleStart=function(){n.setState({started:!0});var e=document.getElementsByClassName("footer")[0],a=document.getElementById("header2"),t=document.getElementById("header3"),l=document.getElementsByClassName("chatbox")[0],s=document.getElementById("start-convo"),c=document.getElementsByClassName("send-msg")[0];document.getElementById("chat-column").innerHTML="",e.removeChild(s),e.appendChild(c),c.style.display="flex",l.removeChild(a),l.removeChild(t),document.getElementById("chat-column").style.height="37vh"},n.state={started:!1,messages:["Hello! I am looking for a couple of life hacks","Is there a simple step to make life better?","Sure there is!"]},n.message=n.message.bind(Object(m.a)(n)),n}return Object(o.a)(t,[{key:"message",value:function(e){var a=document.createElement("div");e<2?a.classList.add("row","msg"):a.classList.add("row","reply"),a.innerHTML=this.state.messages[e];var t=document.getElementById("msg");this.state.started||t.appendChild(a)}},{key:"componentDidMount",value:function(){var e=Object(B.a)(O.a.mark((function e(){var a,t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=0,t=5e3;a<2;)setTimeout(this.message,t,a),a+=1,t+=2e3;return e.next=5,fetch("https://api.adviceslip.com/advice");case 5:return n=e.sent,e.next=8,n.json();case 8:for(n=e.sent,this.state.messages.push(n.slip.advice);a<4;)setTimeout(this.message,t,a),a+=1,t+=2e3;case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{className:"col-10 offset-1 col-md-4  offset-md-2 mt-auto chat-container "},l.a.createElement("div",{className:"container chatbox",style:{display:"none"}},l.a.createElement("div",{className:"row ",id:"header1"},l.a.createElement("h5",{className:"col-12 col-md-12 "},"Hi there!")),l.a.createElement("div",{className:"row  ",id:"header2"},l.a.createElement("div",{className:"col-12 col-md-12 "},"Share your thoughts with us")),l.a.createElement("div",{className:"row ",id:"header3"},l.a.createElement("div",{className:"col-12 col-md-12 "},"Or would you like to ask a question?")),l.a.createElement("div",{className:"row ",id:"chat-column"},l.a.createElement("div",{className:"container "},l.a.createElement("div",{className:"col-12 col-md-12 ",id:"msg"}))),l.a.createElement("div",{className:"row "},l.a.createElement("div",{className:"container ",id:"chat-footer"},l.a.createElement("div",{className:"col-12 col-md-12 "},l.a.createElement("img",{src:"assets/images/sparrow favicon.png"}),"We run on surveysparrow"))),l.a.createElement("div",{className:"row footer "},l.a.createElement("div",{className:"send-msg ",style:{display:"none"}},l.a.createElement(M.a,null," ",l.a.createElement(W.a,{id:"my-input",placeholder:"Write a reply"})),l.a.createElement("span",null,l.a.createElement(j.a,null))),l.a.createElement("button",{id:"start-convo",variant:"contained",onClick:this.handleStart},"START A NEW CONVERSATION",l.a.createElement("span",null,l.a.createElement(T.a,null))),l.a.createElement("div",{className:"foot-msg"},"The team typically replies in a few minutes)"))))}}]),t}(n.Component);var A=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row body-row "},l.a.createElement("div",{className:" col-md-5 offset-1"},l.a.createElement("div",{className:"row text-content "},"Where"),l.a.createElement("div",{className:"row text-content "},"words"),l.a.createElement("div",{className:"row text-content "},"fail,"),l.a.createElement("div",{className:"row text-content "},"Music"),l.a.createElement("div",{className:"row text-content "},"speaks")),l.a.createElement(L,null)),l.a.createElement("div",{className:"row d-flex mt-3"},l.a.createElement("div",{className:"col-1 col-md-1 offset-7 offset-md-10"},l.a.createElement("button",{id:"close-fab",style:{display:"none"},onClick:function(e){var a=document.getElementById("fab"),t=document.getElementById("close-fab"),n=document.getElementsByClassName("chatbox")[0];a.style.backgroundColor="#ecf1fb",n.style.display="none",t.style.display="none ",a.style.transition="0.5s"}},l.a.createElement(x.a,null))),l.a.createElement("div",{className:"col-1 offset-1 col-md-1 offset-md-0  "},l.a.createElement("button",{id:"fab",onClick:function(e){var a=document.getElementById("fab"),t=document.getElementById("close-fab"),n=document.getElementsByClassName("chatbox")[0];document.scrollTop="40vh",n.style.display="block",t.style.display="block",a.style.transition="0.5s",a.style.backgroundColor="#0c003a"}},l.a.createElement("img",{src:"\r /assets/images/Sparrow Bird.png",height:"40px",width:"35px"}))))))};t(63);var H=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(w,null),l.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.e6c94534.chunk.js.map