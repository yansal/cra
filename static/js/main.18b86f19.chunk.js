(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,n){e.exports=n(28)},22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(14),r=n.n(c),o=(n(22),n(6)),m=n(5);function u(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Home"))}function i(){return l.a.createElement("div",null,l.a.createElement("h2",null,"About"))}function p(e){var t=e.match;return l.a.createElement("div",null,l.a.createElement("h2",null,"Topics"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"".concat(t.url,"/rendering")},"Rendering with React")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"".concat(t.url,"/components")},"Components")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"".concat(t.url,"/props-v-state")},"Props v. State"))),l.a.createElement(m.a,{path:"".concat(t.path,"/:topicId"),component:E}),l.a.createElement(m.a,{exact:!0,path:t.path,render:function(){return l.a.createElement("h3",null,"Please select a topic.")}}))}function E(e){var t=e.match;return l.a.createElement("div",null,l.a.createElement("h3",null,t.params.topicId))}var s=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/topics"},"Topics"))),l.a.createElement("hr",null),l.a.createElement(m.a,{exact:!0,path:"/",component:u}),l.a.createElement(m.a,{path:"/about",component:i}),l.a.createElement(m.a,{path:"/topics",component:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.18b86f19.chunk.js.map