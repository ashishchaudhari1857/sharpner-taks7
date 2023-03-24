// var  itemlist= document.querySelector('.list-group-item');
// //  this wiil give you first element withh  class name list-group item;
// var secondchild=document.querySelector('.list-group-item:nth-child(2)');
// var lastchild=document.querySelector('.list-group-item:last-child');
// // even oddd child
//  var odd=document.querySelectorAll('li:nth-child(odd)');
//   odd[1].style.color='purple';
//   console.log(odd);
//  var even=document.querySelectorAll('li:nth-child(even)');
//  console.log(even);


// ** lets start with  another method

var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="blue";
// console.log(itemList.parentNode.parentNode);
//  console.log(itemList.childNodes);
 console.log(itemList.children);
 itemList.children[0].style.backgroundColor="red";
   var head=document.querySelector("#header-title");
    head.innerText='hello world  item ';
//  we have the  firstchild property  that give the text inside the element
 console.log(itemList.firstChild);
 console.log(itemList.firstElementChild);
 itemList.firstElementChild.innerText="hello world";
 console.log(itemList.lastElementChild);
 console.log(itemList.nextSibling);// similaer like first child it give text 
//   so we use a nextelementsibling
console.log(itemList.nextElementSibling);
console.log(itemList.previousElementSibling);

//  creating elements with help of js 
var newdiv= document.createElement('div');
console.log(newdiv);
// add class
 newdiv.class="hello";
//  add id
newdiv.id="world";
console.log(newdiv);
// add atritbute
newdiv.setAttribute("title" ,"hello bro");

console.log(newdiv);
// create a text node
var text=document.createTextNode("heloooo");
//  add text to div 
newdiv.appendChild(text);
console.log(newdiv);
