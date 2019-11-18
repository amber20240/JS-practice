var el=document.querySelector("#ul");
var el2=document.querySelector("#ul2");
var str2 ="";
function todolist(e){
    var str=e.target.nodeName;
    var str3=e.target.textContent;
    if(str !== "LI"){return};
    str2 +="<li>"+str3+"</li>";
    el2.innerHTML=str2;
};
el.addEventListener("click",todolist,false);