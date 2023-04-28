const ul = document.getElementsByClassName("list-group")[0];
const li = document.createElement("li");
const text = document.createTextNode("items 5");
li.appendChild(text);
li.classList.add("list-group-item");
ul.append(li);