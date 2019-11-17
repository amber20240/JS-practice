var body =document.body;
function key (e){
    console.log(e.keyCode);
    switch (e.keyCode){
        case 65:
            document.querySelector(".rocket-1").style.bottom="2000px";
            break;
        case 83:
            document.querySelector(".rocket-2").style.bottom="2000px";
            break;
        case 68:
            document.querySelector(".rocket-3").style.bottom="2000px";
            break;
    }
};
body.addEventListener("keydown",key,false); 