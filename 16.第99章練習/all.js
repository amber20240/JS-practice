var el =document.querySelector("#ul");
var el2=document.querySelector("#p");
function todolist(e){
    var str =e.target.nodeName;
    if(str !== "LI"){return};
    console.log(e.target.textContent)
}
el.addEventListener("click",todolist,false);