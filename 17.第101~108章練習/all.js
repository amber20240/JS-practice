//(一)點選btn1儲存在localStorage，再點選btn2呈現出來
var el = document.querySelector(".btn1");
function text12() {
    var text = document.querySelector("#text").value;
    localStorage.setItem("name", text);
};
el.addEventListener("click", text12, false);

var el2 = document.querySelector(".btn2");
function btn2() {
    var text2 = document.querySelector("#em");
    text2.textContent = localStorage.getItem("name");
};
el2.addEventListener("click", btn2, false);
var farms = [{
    farmer: "cool"
}, {
    farmer: "star"
}];
//(二)點選btn3儲存資料庫farms資料，點選btn4顯示farms資料
var el3 = document.querySelector(".btn3");
function btn3() {
    var farmsString = JSON.stringify(farms);
    localStorage.setItem("farmer", farmsString);
};
el3.addEventListener("click", btn3, false);

var el4 = document.querySelector(".btn4");
function btn4() {
    var farmerString = localStorage.getItem("farmer");
    var farmerArry = JSON.parse(farmerString);
    var ul = document.querySelector("#ul");
    var farmsLen = farms.length;
    var str = "";
    for (var i = 0; i < farmsLen; i++) {
        str += "<li>" + farmerArry[i].farmer + "</li>";
    };
    ul.innerHTML = str;
};
el4.addEventListener("click", btn4, false);
//(三)data-num/dataset
var el5 = document.querySelector("#ul2");
function u2(e) {
    var em2 = document.querySelector("#em2");
    em2.textContent = e.target.dataset.num;
    var em3 = document.querySelector("#em3");
    em3.textContent = e.target.dataset.dog;
};
el5.addEventListener("click", u2, false);
//(四)把上面的農場印出（for），在印出點到的
function x() {
    var str = "";
    var el6 = document.querySelector(".ul3");
    for (var i = 0; i < farms.length; i++) {
        str += '<li data-num="' + i + '">' + farms[i].farmer + '</li>';
    };
    el6.innerHTML = str;
};
x();

var ul4 = document.querySelector(".ul3");
var ul6 = document.querySelector(".ul4");
function checkList(e) {
    var nodeName = e.target.nodeName;
    var text = e.target.textContent;
    var num = e.target.dataset.num;
    if (nodeName !== "LI") { return };
    var str = document.createElement("li");
    str.textContent = "農場主人是：" + text;
    ul6.appendChild(str);
};
ul4.addEventListener("click", checkList, false);
//(五)splice
function a(){
    var el6=document.querySelector(".ul5");
    var str = "";
    for(var i=0;i<farms.length;i++){
        str +='<li data-num="'+i+'">'+farms[i].farmer+'</li>';
    };
    el6.innerHTML= str;
};
a();
//點到刪除ＬＩ，再跑一次迴圈num會幫ＬＩ裡面全部重新定義
var el7=document.querySelector(".ul5");
function spliceList(e){
    var li2=e.target.nodeName;
    var num=e.target.dataset.num;
    if(li2 !== "LI"){return};
    farms.splice(num,1);
    a();
};
el7.addEventListener("click",spliceList,false);
//(五)作業
//目標＝填入文字，印出文字，在做刪除
//先做出填入東西後可印出東西，再來做刪除
var sendBtn=document.querySelector("#sendBtn");
var ulList=document.querySelector("#ul6");
var data = JSON.parse(localStorage.getItem("farmerTodo")) || []; 
updateList(data);
function sendList(){
    var todo=document.querySelector(".text2").value;
    var text={
        content: todo
    };
    data.push(text);
    updateList(data);
    localStorage.setItem("farmerTodo",JSON.stringify(data));
};
sendBtn.addEventListener("click",sendList,false);
function updateList(item){
    var str="";
    for(var i=0;i<item.length;i++){
    str +='<li><a href="#" data-num="'+i+'">刪除</a>'+item[i].content+'</li>';
    };
    ulList.innerHTML=str;
};

function del(e){
    e.preventDefault();
    var num=e.target.dataset.num;
    var nodeName=e.target.nodeName;
    if(nodeName !== "A"){return};
    data.splice(num,1);
    localStorage.setItem("farmerTodo",JSON.stringify(data));
    updateList(data);
};
ulList.addEventListener("click",del,false)
