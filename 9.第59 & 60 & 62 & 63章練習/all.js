//for迴圈
for (var i=0;i<4;i++){
   var el= document.querySelectorAll(".u");
   el[i].textContent =1+"*"+(i+1)+"="+1*(i+1);
};
//for迴圈陣列
var farms =[{
    farmer: "賈伯斯",
    horse: 30,
    duck: 80,
    dogs:["bo","ho"]
},{
    farmer: "卡斯柏",
    horse: 30,
    duck: 30,
    dogs: ["do","ll"]
},{
    farmer: "特斯拉",
    horse: 100,
    duck: 30,
    dogs: ["do","ll"]
},{
    farmer: "卡司特",
    horse: 200,
    duck: 30,
    dogs: ["do","ll"]
}
];
var farmsLen=farms.length;
for (var i=0;i<farmsLen;i++){
var el=document.querySelectorAll(".w");
el[i].textContent=farms[i].farmer;
};
//for迴圈的判斷
//判斷馬超過50隻的農場，找到並停止
for(var i=0;i<farmsLen;i++){
    if(farms[i].horse>50){
        var el =document.querySelectorAll(".l");
        el[0].textContent = "第"+i+"個農場有"+farms[i].horse+"隻的馬";
        break;
    }
};
//for迴圈的加總
//印出全部農場的HORSE的數量
var farmsHorseTotal =0;
for(var i=0;i<farmsLen;i++){
    farmsHorseTotal+=farms[i].horse;
};
var farmsHorseEl = document.querySelectorAll(".r");
farmsHorseEl[0].textContent = farmsHorseTotal;
//for迴圈 &break的應用
//for迴圈要想到break;if要想到else
//任務要找一家農場，買20隻的馬，並計算此農場剩下的數量
for(var i=0;i<farmsLen;i++){
    if(farms[i].horse>50){
        var el= document.querySelectorAll(".y");
        var farmsHorseTotal=farms[i].horse;
        el[0].textContent="第"+i+"個農場有"+farms[i].horse+"隻馬";
        farmsHorseTotal -=50;
        el[1].textContent = "現在要在這個農場買50隻馬，扣掉買完的數量第"+i+"個農場剰"+farmsHorseTotal+"隻馬";
        break;
    }
}