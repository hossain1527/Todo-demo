(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(5),r=n.n(c),i=(n(12),n(6)),o=n(3),u=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"output"},l.a.createElement("i",{className:"fa fa-times","aria-hidden":"true",onClick:function(){e.onSelect(e.id)}}),l.a.createElement("li",null," ",e.listv," ")))},s=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),s=Object(o.a)(r,2),m=s[0],d=s[1],f=function(e){console.log("deleted"),d((function(t){return t.filter((function(t,n){return n!==e}))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"My ToDo List"),l.a.createElement("input",{type:"text",value:n,placeholder:"Add details",onChange:function(e){c(e.target.value)}}),l.a.createElement("button",{onClick:function(){d((function(e){return[].concat(Object(i.a)(e),[n])})),c("")}},"Add"),l.a.createElement("ul",null,m.map((function(e,t){return l.a.createElement(u,{listv:e,key:t,id:t,onSelect:f})}))))))};r.a.render(l.a.createElement(s,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.6ad4c613.chunk.js.map