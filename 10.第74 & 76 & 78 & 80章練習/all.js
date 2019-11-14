//(一)setAttribute
document.querySelector("#liId a").setAttribute("href","https://www.google.com.tw/");
var liIdTextContent = document.querySelector("#liId a").textContent;
document.querySelector("#textContentId").textContent = liIdTextContent; 
var aAttributeHref= document.querySelector("#liId a").getAttribute("href");
document.querySelector("#aAttributeId").textContent = aAttributeHref;
var liIdHTML = document.querySelector("#liId").innerHTML;
document.querySelector("#liHtmlId").textContent = liIdHTML;
//(二)innerHTML
var ul1 =document.querySelector("#ul1");
var google="https://www.google.com.tw/";
var name="賈伯斯";
ul1.innerHTML='<li><a href="'+google+'">'+name+'</a></li>';
var farms=[{
    farmer: "賈伯斯",
    dogs: 60
},{
    farmer: "卡爾",
    dogs: 100
}];
//用innerHTML帶入撈出所有農夫的名子和養狗的數量
var ul2 = document.querySelector("#ul2");
var farmsLen=farms.length;
var str="";
for(var i=0;i<farmsLen;i++){
    var name = farms[i].farmer;
    var countDogs = farms[i].dogs;
    var content='<li><a href="'+google+'">農夫的名子:'+name+'，養了'+countDogs+'</a></li>';
    str += content;
};
ul2.innerHTML = str;
var ul1Li =document.querySelector("#ul1 li a")
ul1Li.setAttribute("class","ul3");