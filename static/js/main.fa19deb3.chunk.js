(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(2),c=a.n(i),s=(a(14),a(15),a(16),a(6)),o=a(3),r=a(4),u=a(7),d=a(5),m=a(8),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).changeTask=function(e){a.setState({inputValue:e.target.value})},a.addList=function(){a.setState({list:[].concat(Object(s.a)(a.state.list),[{val:a.state.inputValue,txt:"none"}])})},a.deletFun=function(e){var t=a.state.list.slice();t.splice(e,1),a.setState({list:t})},a.changStyle=function(e){var t=a.state.list.filter((function(t,a){return t.txt=e==a?"line-through":t.txt}));a.setState({list:t})},a.state={list:[],inputValue:"",isClicked:!1,textdeco:"none"},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("section",null,l.a.createElement("header",null,l.a.createElement("div",{className:"add"},l.a.createElement("h1",null,"To-Do App!"),l.a.createElement("h4",null,"Add New To-Do"),l.a.createElement("input",{type:"text",id:"input-task",placeholder:"Enter new task",onChange:this.changeTask}),l.a.createElement("button",{id:"butadd",onClick:this.addList}," Add "))),l.a.createElement("main",null,l.a.createElement("section",{className:"main-up"},l.a.createElement("div",null,l.a.createElement("h2",null,"Let's get some work done!")),l.a.createElement("div",{className:"ligne"})),l.a.createElement("section",{className:"tasks",id:"taskss"},l.a.createElement("div",{className:"edit-task",id:"old"},this.state.list.map((function(t,a){return l.a.createElement("div",{key:a,className:"items"},l.a.createElement("button",{className:"complete",onClick:e.changStyle.bind(e,a)}," ","line-through"==t.txt?"Undo":"Complete","  "),l.a.createElement("button",{className:"delete",onClick:e.deletFun.bind(e,a)}," delete "),l.a.createElement("span",{style:{textDecoration:t.txt}},t.val))}))))))}}]),t}(n.Component);var p=function(){return l.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.fa19deb3.chunk.js.map