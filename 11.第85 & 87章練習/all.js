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
},false) 
