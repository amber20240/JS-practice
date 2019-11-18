var el =document.querySelector(".btn1");
function s(e){
    var str =document.querySelector("#text").value;
    localStorage.setItem("name",str);
};
el.addEventListener("click",s,false);

var el2=document.querySelector(".btn2");
function get(e){
    var str2 = localStorage.getItem("name");
    document.querySelector("#em").textContent=str2;
};
el2.addEventListener("click",get,false);
