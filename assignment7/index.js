const list = document.querySelectorAll("li");
const ul = document.getElementsByTagName("ul")[0];
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
console.log(ul.lastChild);
console.log(ul.firstChild);
console.log(ul.parentElement);
const li = document.createElement("li");
const text = document.createTextNode("list 5");
li.appendChild(text);
li.classList.add("list-group-item");
ul.appendChild(li);
list[2].style.color="green";
for(let i=0;i<list.length;i++){
    if(i%2 !== 0){
        list[i].style.backgroundColor = "green";
    }
}
const li2  = list[2];
console.log(li2.nextSibling);
console.log(li2.nextElementSibling);
console.log(li2.previousSibling);
console.log(li2.previousElementSibling);
