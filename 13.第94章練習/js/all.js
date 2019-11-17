var humbergerNum=document.querySelector("#hamNumId").value;
console.log(humbergerNum);
var cokeNum=document.querySelector("#cokeNumId").textContent.value;
var humberPrice =100;
var cokePrice = 20;
function count(){
    var humbergerNum=parseInt(document.querySelector("#hamNumId").value);
    var cokeNum=parseInt(document.querySelector("#cokeNumId").value);
    var humberPrice =100;
    var cokePrice = 20;
    var countTotal = humbergerNum*humberPrice + cokeNum*cokePrice;
    var el2=document.querySelector("#totalId");
    el2.textContent=countTotal;
};
var el = document.querySelector("#countId");
el.addEventListener("click",count,false);

function t(e){
    var str =e.target.value;
    if(str == ""){
        alert("請輸入文字")
    }
};
var el3 = document.querySelector("#hamNumId");
el3.addEventListener("blur",t,false);

var el4 = document.querySelector("#cokeNumId");
el4.addEventListener("blur",t,false);