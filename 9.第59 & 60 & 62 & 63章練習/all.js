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
