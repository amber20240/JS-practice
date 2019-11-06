var numberA = 3;
var numberB = 5;

var supriseA = function(gift){
    document.getElementById("numberA").textContent = gift;
};
switch(numberA){
    case 1:
        supriseA("cat");
        break;
    case 2: 
        supriseA("horse");
        break;
    case 3:
        supriseA("dog");
        break;
    default:
        supriseA("no gift"); 
        break;
};
var supriseB =function(gift){
    document.getElementById("numberB").textContent =gift;
}

switch(numberB){
    case 1: 
        supriseB("cat");
        break;
    case 2:
        supriseB("horse");
        break;
    case 3: 
        supriseB("dog");
        break;        
    default:
        supriseB("big horse");
        break;
    }

