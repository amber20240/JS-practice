var myPay = 1250;
var vip = false;
var checkPayFalse = myPay >1000 && vip == true;
document.getElementById("checkAndId").textContent = checkPayFalse;
var checkPaytrue =  myPay >1000 || vip == true;
document.getElementById("checkOrId").textContent = checkPaytrue;