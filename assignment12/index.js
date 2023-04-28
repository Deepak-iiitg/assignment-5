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
  root.innerHTML = "."+name+"."+email+"."+phone;
  const obj = [JSON.parse(localStorage.getItem('users'))];
  obj.push(user);
  localStorage.setItem('user',JSON.stringify(obj)); 
})