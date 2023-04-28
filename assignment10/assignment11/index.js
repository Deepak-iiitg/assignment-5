const submit = document.getElementById("submit");
submit.addEventListener('click',(e)=>{
     e.preventDefault();
     console.log("listener is called");
    const inputs = document.getElementById("item");
      const ul = document.getElementById("items");
      const li = document.createElement("li");
      
      const btn = document.createElement("button");
      btn.className = "btn btn-danger btn-sm float-right delete";
      btn.appendChild(document.createTextNode(' X'));
      const text = document.createTextNode(inputs.value);
      li.appendChild(text);
      li.className = 'list-group-item';
      li.append(btn);
      ul.appendChild(li);
      const user  = {
          user:inputs.value
      }
      const obj = [JSON.parse(localStorage.getItem('user'))];
      //obj = [get];
      obj.push(user);
      localStorage.setItem("user",JSON.stringify(obj));


})
const del = document.getElementById("delete");
del.addEventListener("click",(e)=>{
    e.preventDefault();
    const ul = document.getElementById("items");
    const list = document.querySelectorAll("li");
    const li = list[list.length-1];
    ul.removeChild(li);
})
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");
filter.addEventListener('keyup', filterItems);
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
}