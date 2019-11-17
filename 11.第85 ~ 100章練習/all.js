//(一)點擊按鈕，console.log 元素資訊
var el=document.querySelector(".btn");
el.onclick=function(e){
    console.log(e)
};
//(二)監聽到點擊，顯示出你已經點擊的字樣
var el2 = document.querySelector(".btn2");
el2.addEventListener("click",function(){
    var eltext = document.querySelector("#text");
    eltext.textContent = "你已經點擊";
},false);
//(三)綁定事件的語法差異(onclick / click)
    //1.onclick綁定多個事件，只會觸發最後一個事件
var el3 = document.querySelector(".btn3");
el3.onclick=function(){
  var text3=document.querySelector("#text3");
  text3.textContent= "1";
};
el3.onclick=function(){
    var text4=document.querySelector("#text4");
    text4.textContent= "2";
  };
  //2.addEventListener("click",function(){},false)綁定多個事件，全部都會觸發
var el4=document.querySelector(".btn4");
el4.addEventListener("click",function(){
   var text5=document.querySelector("#text5");
   text5.textContent ="1" ;
},false);
el4.addEventListener("click",function(){
    var text6=document.querySelector("#text6");
    text6.textContent ="2" ;
 },false);
 //(四)Event Bubbling / Event capturing
 var el5 = document.querySelector(".box1");
 var el6 = document.querySelector(".box2");
 el5.addEventListener("click",function(){
  alert("觸發按鈕5")
 },false);
 el6.addEventListener("click",function(){
   alert("觸發按鈕6")
 },false);
 var el7=document.querySelector(".box3");
 var el8 =document.querySelector(".box4");
 el7.addEventListener("click",function(){
    alert("觸發按鈕7")
 },true);
 el8.addEventListener("click",function(){
    alert("觸發按鈕8")
 },true);
//(五)stopPropagation / preventDeault
//1.stopPropagation
var el9 = document.querySelector(".box6");
var el10 = document.querySelector(".box5");
function button6(e){
  e.stopPropagation();
  alert("點選到button6")
};
function button5(){
  alert("點選到button5")
};
el9.addEventListener("click",button6,false);
el10.addEventListener("click",button5,false);
//2.preventDeault
var el11= document.querySelector("#a1");
function a1(e){
  e.preventDefault();
  console.log(e.preventDefault());
  alert("使用preventDefault 不會跳轉其他頁面")
};
el11.addEventListener("click",a1,false);
//(七) e.target.naodeName  + a 避免默認
//因為a 連結href="#"，放#，會去尋找毛點
var el12 =document.querySelector(".ul1");
function ul1(e){
  e.preventDefault();
  console.log(e.target);
  var el13=document.querySelector("#text13");
  el13.textContent= e.target.nodeName;
};
el12.addEventListener("click",ul1,false);
//(八)表單改變時觸發使用change - innerHtml
//比對選擇的內容，並印出for迴圈的內容，可用innerHTML
var farms=[{
  farmer: "cool",
  year: "1990"
},{
  farmer:"good",
  year: "1990"
},{
  farmer: "root",
  year: "1991"
},{
  farmer: "bingo",
  year: "1991"
}
];
var el13 = document.querySelector("#selectListId");
function selectList(e){
  var selectValue = e.target.value;
  var farmsLen =farms.length;
  str="";
  for(var i=0;i<farmsLen;i++){
    if(selectValue == farms[i].year){
        str +="<li>"+farms[i].farmer+"</li>"
    };
  }
  console.log(str);
  document.querySelector("#ul2").innerHTML = str;
};
el13.addEventListener("change",selectList,false);
//(九)表單改變時觸發使用change - createElement(不可用)
//比對選擇的內容，並印出for迴圈的內容，" 不可用 "creatElement
//因為createElement不會清空原本的內容</p>
var el15=document.querySelector("#s1");
var el16=document.querySelector("#ul3");
function select2(e){
  for (var i=0;i<farms.length;i++){
    var sv = e.target.value;
    if(sv == farms[i].year){
      var str =document.createElement("li");
      str.textContent = farms[i].farmer;
      el16.appendChild(str);
    }
  }
}
el15.addEventListener("change",select2,false);
