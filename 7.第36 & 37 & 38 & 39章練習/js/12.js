//陣列
var farmer = ["bob","cool","sty","rr"];
console.log(farmer[0]);
farmer.push("yy");
console.log(farmer);
farmer[0] = "AA";
console.log(farmer);
console.log(farmer.length);
//物件
var farm ={
    farmer: ["bob","cool","sty","rr"],
    cornField: 6,
    horse: 60,
    fish: 20,
    dogs: ["C","D","F"]
};
console.log(farm.farmer[0]);
farm.farmer[4]="ww";
console.log(farm.farmer);
console.log(farm.horse);
farm.horse=100;
console.log("擴大事業版圖，馬增加到"+farm.horse+"隻");
// 物件裡面放function
var farm = {
    farmer: ["AA","BB","CC","DD","WW","TT"],
    horse: 60,
    dogs: ["VV","LL"],
    fish: 100,
    goDinner: function(){
        document.getElementById("call").textContent = farm.farmer[5]+"事業成功!";
    }
}
// 正確的呼叫function
farm.goDinner();


// 錯誤的呼叫方式function
console.log(farm.goDinner);

//物件+陣列
var farms=[{
    farmers: ["PP","BB","CC","AA","FF","LL"],
    fish: 60,
    horse: 100,
    dogs:["II","TT"],
    lookingForDog: function(){
        document.getElementById("goodDog").textContent=farms[0].dogs[0];
        document.getElementById("cuteDog").textContent=farms[0].dogs[1];
    }
},
{
    farmers: ["WW","NN","XX","TT","LL"],
    fish: 100,
    horse: 120,
    dogs: ["TT","II"],
    lookingForDog: function(){
        document.getElementById("yungDog").textContent=farms[1].dogs[0];
        document.getElementById("specticalDog").textContent=farms[1].dogs[1];
    }
}
];
farms[0].lookingForDog();
farms[1].lookingForDog();


