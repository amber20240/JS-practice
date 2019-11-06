var AHungry = 3;
var BHungry = 10;

var orderA = function(eat){
    document.getElementById("orderAId").textContent = eat;
};

if (AHungry <= 5){
    orderA("salad")
}else{
    orderA("steak")
};

var orderB = function(eat){
    document.getElementById("checkSetId").textContent = eat;
};
if(BHungry >=8 ){
    orderB("ASet")
}else if(BHungry < 7 && BHungry>4){
    orderB("BSet")
}else{
    orderB("CSet")
};