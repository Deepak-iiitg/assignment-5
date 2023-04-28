const list = document.querySelectorAll("li");
list[2].style.color="green";
for(let i=0;i<list.length;i++){
    if(i%2 !== 0){
        list[i].style.backgroundColor = "green";
    }
}