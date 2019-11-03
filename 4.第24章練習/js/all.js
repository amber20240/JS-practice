function countCookie(cookieNum){
    var total = cookieNum*8;
    document.getElementById("oneCookie").textContent = total;
}
countCookie(10);

function countCake(oneNum,twoNum){
    var totalA = oneNum*10;
    var totalB = twoNum*10;
    document.getElementById("oneCake").textContent = totalA;
    document.getElementById("twoCake").textContent = totalB;
}
countCake(10,20); 



