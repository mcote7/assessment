(this.webpackJsonphatchways=this.webpackJsonphatchways||[]).push([[0],{20:function(e,t,a){e.exports=a(54)},25:function(e,t,a){},26:function(e,t,a){},50:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),o=(a(25),a(26),a(2)),s=a(17),i=a.n(s),u=a(6),m=a(5),d=a.n(m),p=function(e){var t=e.result,a=e.inputId,r=e.tagSearchQuery,l=Object(n.useState)("fa fa-plus"),s=Object(o.a)(l,2),i=s[0],m=s[1],p=Object(n.useState)(!1),f=Object(o.a)(p,2),g=f[0],E=f[1],h=Object(n.useState)([]),b=Object(o.a)(h,2),v=b[0],y=b[1],N=Object(n.useState)(!1),j=Object(o.a)(N,2),O=j[0],w=j[1],S=Object(n.useState)(!1),C=Object(o.a)(S,2),k=C[0],L=C[1];Object(n.useEffect)((function(){r&&v.toString().toLocaleLowerCase().includes(r.toString().toLowerCase())&&(w(!0),L(!0)),r&&!v.toString().toLocaleLowerCase().includes(r.toString().toLowerCase())&&(w(!0),L(!1)),r||(w(!1),L(!1))}),[r,v]);return O&&!k?null:O&&k||!O&&!k?c.a.createElement("div",{className:"studentContainer"},c.a.createElement("div",{className:"imageContainer pt-3"},c.a.createElement("img",{src:t.pic,alt:"img",className:"rounded-circle studentImage"})),c.a.createElement("div",{className:"col mainCol"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,"".concat(t.firstName.toUpperCase()," ").concat(t.lastName.toUpperCase())),c.a.createElement("button",{id:"expand-btn",className:"myButton",onClick:function(){m("fa fa-plus"===i?"fa fa-minus":"fa fa-plus"),E(!g)}},c.a.createElement("span",{className:"icon"},c.a.createElement("i",{className:"".concat(i," fa-2x"),"aria-hidden":"true"})))),c.a.createElement("div",{className:"details"},c.a.createElement("p",null,"Email: ".concat(t.email)),c.a.createElement("p",null,"Company: ".concat(t.company)),c.a.createElement("p",null,"Skill: ".concat(t.skill)),c.a.createElement("p",{className:"mb-3"},"Average: ".concat(d.a.mean(t.grades.map((function(e){return+e}))).toFixed(2),"%")),g&&t.grades.map((function(e,t){return c.a.createElement("p",{key:t},"Test: ".concat(e,"%"))})),g?v.map((function(e,t){return c.a.createElement("p",{className:"myBadge mt-2 mr-2 px-2 py-1",key:t},e,c.a.createElement("span",{onClick:function(e){return function(e){var t=Object(u.a)(v),a=e.currentTarget.parentNode.innerText;if(console.log("mytags",t),console.log("innertext",a),t.includes(a)){var n=d.a.pull(t,a);y(n)}}(e)},className:"deleteBtn ml-2"},c.a.createElement("i",{className:"fa fa-plus tagIcon","aria-hidden":"true"})))})):"",g?c.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var t=document.getElementById("".concat(a)),n=document.getElementById("".concat(a)).value,c=Object(u.a)(v);n&&(c.push(n),y(c),t.value=""),t.value=""}(e)}},c.a.createElement("input",{pattern:"^[^\\s].+[^\\s]$",id:a,type:"text",className:"myTagInput",placeholder:"Add a tag"})):""))):void 0},f=a(18),g=a.n(f),E=function(e){var t=e.loading;return c.a.createElement("div",{className:"messageLoaderWrapper mt-5"},c.a.createElement(g.a,{size:250,color:"#000000",loading:t}))},h=function(){var e=1,t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)(""),g=Object(o.a)(f,2),h=g[0],b=g[1],v=Object(n.useState)(!1),y=Object(o.a)(v,2),N=y[0],j=y[1];return Object(n.useEffect)((function(){j(!0),setTimeout((function(){i.a.get("https://www.hatchways.io/api/assessment/students").then((function(e){l(e.data.students)})).catch((function(e){return console.log(e)})),j(!1)}),1500)}),[]),c.a.createElement("div",{className:"mainContainer"},c.a.createElement("input",{id:"name-input",type:"text",className:"myInput",placeholder:"Search by name",onChange:function(e){d(e.target.value)}}),c.a.createElement("input",{id:"tag-input",type:"text",className:"myInput",placeholder:"Search by tag",onChange:function(e){b(e.target.value)}}),c.a.createElement("div",{className:"studentList"},N?c.a.createElement(E,{loading:N}):r&&r.filter((function(e){return e.firstName.concat(e.lastName).toLowerCase().includes(m.toLocaleLowerCase())})).map((function(t){return c.a.createElement(p,{key:t.id,result:t,inputId:e++,tagSearchQuery:h})}))))};a(50);var b=function(){return c.a.createElement("div",{className:"container-fluid App appContainer"},c.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(51),a(52);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.3f1f7a4e.chunk.js.map