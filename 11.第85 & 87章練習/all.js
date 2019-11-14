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
 },false)