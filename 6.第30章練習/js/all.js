function food(chicken,tea){
    var total = chicken + tea;
    return total;
}

var totalPrice = food(60,50);
document.getElementById("food").textContent = totalPrice;