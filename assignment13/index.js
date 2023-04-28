const submit = document.getElementById("submit");
submit.addEventListener("click",(e)=>{
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const user = {
    name:name,
    email:email,
    phone:phone
  }
  const root = document.getElementById("root");
 // root.innerHTML = "."+name+"."+email+"."+phone;
  const p = document.createElement("p");
  const text = document.createTextNode("."+name+"."+email+"."+phone);
  p.appendChild(text);
  const btn = document.createElement("button");
  btn.appendChild(document.createTextNode("delete"));
  btn.className = "delete";
  p.append(text);
  p.append(btn);
  p.className = "p";
 // const text = document.createTextNode()
 root.appendChild(p);
  const obj = [JSON.parse(localStorage.getItem('users'))];
  obj.push(user);
  localStorage.setItem('user',JSON.stringify(obj));
   
})
const root = document.getElementById("root");
