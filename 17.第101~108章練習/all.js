//(一)點選btn1儲存在localStorage，再點選btn2呈現出來
var el =document.querySelector(".btn1");
function text12(){
    var text= document.querySelector("#text").value;
    localStorage.setItem("name",text);
};
el.addEventListener("click",text12,false);

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
//(三)data-num/dataset
var el5 = document.querySelector("#ul2");
function u2(e){
    var em2=document.querySelector("#em2");
    em2.textContent=e.target.dataset.num;
    var em3=document.querySelector("#em3");
    em3.textContent=e.target.dataset.dog;
};
el5.addEventListener("click",u2,false);
//(四)把上面的農場印出（for），在印出點到的
function x(){
    var str="";
    var el6=document.querySelector(".ul5");
    for(var i=0;i<farms.length;i++){
        str +='<li data-num="'+i+'">'+farms[i].farmer+'</li>';
    };
    el6.innerHTML=str;
};
x();

var ul6=document.querySelector(".ul5");
var ul7=document.querySelector(".ul6");
function checkList(e){
    var nodeName=e.target.nodeName;
    var text=e.target.textContent;
    var num=e.target.dataset.num;
    if(nodeName !== "LI"){return};
    var str=document.createElement("li");
    str.textContent="農場主人是："+text;
    ul7.appendChild(str);
};
ul6.addEventListener("click",checkList,false);
