(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(14),o=t.n(c),a=t(3),s=t(0),i=function(e){var n=e.setSearch;return Object(s.jsxs)("div",{children:["filter shown with ",Object(s.jsx)("input",{onChange:function(e){return n(e.target.value)}})]})},u=function(e){var n=e.addName,t=e.setNewName,r=e.setNewNumber;return Object(s.jsxs)("form",{onSubmit:function(e){return n(e)},children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{onChange:function(e){return t(e.target.value)}})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{onChange:function(e){return r(e.target.value)}})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.person,t=e.remove;return Object(s.jsx)("div",{children:Object(s.jsxs)("p",{children:[n.name," - ",n.number," ",Object(s.jsx)("span",{children:Object(s.jsx)("button",{onClick:function(){return function(e){window.confirm("Delete ".concat(e.name," ?"))&&t(e.id)}(n)},children:"delete"})})]})})},b=function(e){var n=e.data,t=e.remove;return Object(s.jsx)("div",{children:n.map((function(e,n){return Object(s.jsx)(d,{person:e,remove:t},n)}))})},j=t(4),l=t.n(j),h="https://secret-lake-29076.herokuapp.com/api",p=function(){return l.a.get("".concat(h,"/persons"))},m=function(e){return l.a.post("".concat(h,"/persons"),e)},f=function(e){return l.a.delete("".concat(h,"/persons/").concat(e))},x=function(e){return l.a.put("".concat(h,"/persons/").concat(e))},O=function(){var e=Object(r.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(""),d=Object(a.a)(o,2),j=d[0],l=d[1],h=Object(r.useState)(""),O=Object(a.a)(h,2),g=O[0],v=O[1],w=Object(r.useState)(""),k=Object(a.a)(w,2),y=k[0],N=k[1],C=Object(r.useState)(""),S=Object(a.a)(C,2),E=S[0],M=S[1],R=Object(r.useState)(""),B=Object(a.a)(R,2),I=B[0],D=B[1];Object(r.useEffect)((function(){p().then((function(e){if(""!==y){var n=e.data.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())}));c(n)}else c(e.data),console.log(e.data)}))}),[y]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(i,{setSearch:N}),Object(s.jsx)("h3",{children:"add a new"}),Object(s.jsx)("div",{id:"successMessage",children:Object(s.jsx)("h3",{children:E})}),Object(s.jsx)("div",{id:"errorMessage",children:Object(s.jsx)("h3",{children:I})}),Object(s.jsx)(u,{addName:function(e){e.preventDefault();var n=t.find((function(e){return e.name===j}));n?x(n.id).then((function(e){console.log(e.data)})).catch((function(e){D("".concat(n.name," already been removed from server"));var t=document.getElementById("errorMessage").style;t.border="3px solid red",t.color="red",t.backgroundColor="lightgrey",t.padding="0px 20px",t.margin="10px",t.borderRadius="8px",setTimeout((function(){M(""),t.border="none",t.color="none",t.backgroundColor="none",t.margin="0px",t.padding="0px",t.borderRadius="0px",t.display="none"}),5e3)})):m({name:j,number:g}).then((function(e){M("Added ".concat(e.data.name," successfully"));var n=document.getElementById("successMessage").style;n.border="3px solid green",n.color="green",n.backgroundColor="lightgrey",n.padding="0px 20px",n.margin="10px",n.borderRadius="8px",setTimeout((function(){M(""),n.border="none",n.color="none",n.backgroundColor="none",n.margin="0px",n.padding="0px",n.borderRadius="0px"}),5e3)})).catch((function(e){console.log(e.message)}))},setNewName:l,setNewNumber:v}),Object(s.jsx)("h3",{children:"Numbers"}),Object(s.jsx)(b,{data:t,remove:function(e){f(e).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e.message)}))}})]})};t(38);o.a.render(Object(s.jsx)(O,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.d2395d6d.chunk.js.map