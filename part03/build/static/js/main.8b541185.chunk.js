(this["webpackJsonpex1.1-1.2"]=this["webpackJsonpex1.1-1.2"]||[]).push([[0],{21:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(15),a=n.n(r),c=n(6),o=n(3),u=n(1),s=n(0),i=function(e){var t=e.handleSearch,n=e.searchContact,r=Object(u.useState)(""),a=Object(o.a)(r,2),c=a[0],i=a[1],d="",l=("The contact you searched is found:\n ".concat(4),"Contact not found");return Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Search Phonebook:"}),Object(s.jsx)("input",{type:"search",name:"search",placeholder:"Search a contact",onKeyDown:t,onChange:function(e){i(e.target.value)}}),Object(s.jsx)("span",{children:n.searchResult&&c?"The contact you searched is found:\n ".concat(n.searchResult.name):!n.searchResult&&c?l:d})]})},d=function(e){var t=e.persons,n=e.deleteContact;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Contact Information:"}),Object(s.jsx)("ul",{children:t.map((function(e,t){return Object(s.jsxs)("li",{children:[e.name," ",Object(s.jsxs)("div",{children:["\xa0",e.number]})," ",Object(s.jsx)("button",{onClick:function(){return n(e.id,e.name)},children:"Delete"})]},t)}))})]})},l=function(e){var t=Object.assign({},e);return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(s.jsxs)("div",{children:["Name:",Object(s.jsx)("input",{type:"text",value:t.newName,onChange:t.handleNewContact})]}),Object(s.jsxs)("div",{children:["Contact Number:",Object(s.jsx)("input",{type:"text",value:t.newPhoneNumber,onChange:t.handleNewPhoneNumber})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"Add"})})]})})},h=(n(21),function(e){var t=e.action,n=e.error;if(null===t)return null;var r={addPerson:"New contact is added to the phonebook",changeNumber:"The contact phone number updated",deletePerson:"Contact successfully deleted from the phonebook successfully"},a={deletePerson:"The contact is already removed from the phonebook"},c="add"===t?"add general":"update"===t?"update general":"delete"===t?"delete general":null;return Object(s.jsxs)("div",{className:c,children:[Object(s.jsx)("span",{className:".error general",children:n?a.deletePerson:null}),n?null:"add"===t?r.addPerson:"update"===t?r.changeNumber:"delete"===t?r.deletePerson:null]})}),b=n(4),j=n.n(b),f="/api/persons",m={getPersons:function(e){return j.a.get(f).then((function(e){return e.data})).then(e)},addPerson:function(e,t){return j.a.post(f,e).then((function(e){return e.data})).then(t)},deletePerson:function(e,t,n){return j.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data})).then(t).catch(n)},updatePerson:function(e,t){return j.a.put("".concat(f,"/").concat(e.id),e).then((function(e){return e.data})).then(t)}},O=function(){var e=Object(u.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(u.useState)(""),b=Object(o.a)(a,2),j=b[0],f=b[1],O=Object(u.useState)(""),p=Object(o.a)(O,2),v=p[0],x=p[1],g=Object(u.useState)({}),w=Object(o.a)(g,2),y=w[0],P=w[1],C=Object(u.useState)(null),N=Object(o.a)(C,2),S=N[0],k=N[1],T=Object(u.useState)(null),L=Object(o.a)(T,2),R=L[0],A=L[1];Object(u.useEffect)((function(){m.getPersons((function(e){return r(e)}))}),[]),/[^\w\s]/g.test(j)&&(alert("".concat(j," is not a valid entry please try again")),f(""),x(""));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(h,{action:S,error:R}),Object(s.jsx)(i,{handleSearch:function(e){if("Enter"===e.key){var t=e.target.value;P({searchValue:t,searchResult:n.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))})}},searchContact:y}),Object(s.jsx)(l,{handleSubmit:function(e){if(e.preventDefault(),/[^\w\s]/g.test(j))return alert("".concat(j," is not a valid entry please try again")),f(""),void x("");if(!/\d/g.test(v))return alert("".concat(v," is not a valid entry. Please try again")),f(""),void x("");if(!n.every((function(e){return e.name.toLowerCase()!==j.toLowerCase()}))){if(!n.every((function(e){return e.number!==v})))return console.log("already true"),alert("".concat(j," already exists in the phonebook")),f(""),void x("");var t=Object(c.a)(Object(c.a)({},n.find((function(e){return e.name===j}))),{},{number:v});if(window.confirm("".concat(t.name," is already added to the phonebook, do you want to update old number with a new number?")))return m.updatePerson(t,(function(e){return r(n.map((function(t){return t.id===e.id?e:t})))})),f(""),x(""),k("update"),void setTimeout((function(){k(null)}),5e3);f(""),x("")}n.every((function(e){return e.name.toLowerCase()!==j.toLowerCase()&&e.number===v})),m.addPerson({name:j,number:v},(function(e){r(n.concat(e)),f(""),x(""),k("add"),setTimeout((function(){k(null)}),5e3)}))},newName:j,handleNewContact:function(e){f(e.target.value)},newPhoneNumber:v,handleNewPhoneNumber:function(e){x(e.target.value)}}),Object(s.jsx)(d,{persons:n,deleteContact:function(e,t){window.confirm("Are you sure to delete ".concat(t,"?"))&&m.deletePerson(e,(function(){m.getPersons((function(e){return r(e)}))}),(function(t){A("deleteError"),r(n.filter((function(t){return t.id!==e}))),console.error(t.message),setTimeout((function(){k(null)}),5e3)})),k("delete"),setTimeout((function(){k(null)}),5e3)}})]})};a.a.render(Object(s.jsx)(O,{}),document.querySelector("#root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8b541185.chunk.js.map