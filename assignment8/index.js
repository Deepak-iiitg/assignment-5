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


})
const del = document.getElementById("delete");
del.addEventListener("click",(e)=>{
    e.preventDefault();
    const ul = document.getElementById("items");
    const list = document.querySelectorAll("li");
    const li = list[list.length-1];
    ul.removeChild(li);
})
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
}