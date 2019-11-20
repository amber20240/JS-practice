//(一)點選btn1儲存在localStorage，再點選btn2呈現出來
var el =document.querySelector(".btn1");
function btn1(){
    var text= document.querySelector("#text").value;
    localStorage.setItem("name",text);
};
el.addEventListener("click",text,false);

var el2=document.querySelector(".btn2");
function btn2(){
    var text2 =document.querySelector("#em");
    text2.textContent = localStorage.getItem("name");
};
el2.addEventListener("click",btn2,false);
var farms=[{
    farmer: "cool"
},{
    farmer: "star"
}];
//(二)點選btn3儲存資料庫farms資料，點選btn4顯示farms資料
var el3=document.querySelector(".btn3");
function btn3(){
    var farmsString=JSON.stringify(farms);
    localStorage.setItem("farmer",farmsString);
};
el3.addEventListener("click",btn3,false);

var el4=document.querySelector(".btn4");
function btn4(){
    var farmerString=localStorage.getItem("farmer");
    var farmerArry=JSON.parse(farmerString);
    var ul=document.querySelector("#ul");
    var farmsLen=farms.length;
    var str="";
    for(var i=0;i<farmsLen;i++){
        str +="<li>"+farmerArry[i].farmer+"</li>";
    };
    ul.innerHTML=str;
};
el4.addEventListener("click",btn4,false);
