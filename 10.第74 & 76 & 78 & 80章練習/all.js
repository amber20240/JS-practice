//(一)setAttribute / getAttribute
document.querySelector("#liId a").setAttribute("href","https://www.google.com.tw/");
var liIdTextContent = document.querySelector("#liId a").textContent;
document.querySelector("#textContentId").textContent = liIdTextContent; 
var aAttributeHref= document.querySelector("#liId a").getAttribute("href");
document.querySelector("#aAttributeId").textContent = aAttributeHref;
var liIdHTML = document.querySelector("#liId").innerHTML;
document.querySelector("#liHtmlId").textContent = liIdHTML;
