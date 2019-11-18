var screenX =document.querySelector("#screenXId");
var screenY= document.querySelector("#screenYId");
var pageX=document.querySelector("#pageXId");
var pageY=document.querySelector("#pageYId");
var clientX=document.querySelector("#clientXId");
var clientY=document.querySelector("#clientYId");
var imgMove =document.querySelector("#imgId");

function mouse(e){
  screenX.textContent= e.screenX;
  screenY.textContent=e.screenY;
  pageX.textContent=e.pageX;
  pageY.textContent=e.pageY;
  clientX.textContent=e.clientX;
  clientY.textContent=e.clientY;
  imgMove.style.left=e.clientX+"px";
  imgMove.style.top=e.clientY+"px";
};
var el=document.body;
el.addEventListener("mousemove",mouse,false);