let val;

val = document;
val = document.all; //list of all elements
val = document.all[2]; //access particular element
val = document.all.length; //count all element
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain; //address
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms; //list of all forms
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

//foreach is for arrays only so we have to convert it to array

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);