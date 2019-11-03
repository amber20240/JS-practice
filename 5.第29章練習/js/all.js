document.getElementById("count").onclick = function countPrice(){
    var humberPrice = 100;
    var cokePrice = 60;
    var humberTotal = parseInt(document.getElementById("humberNumId").value)*humberPrice;
    var cokeTotal = parseInt(document.getElementById("cokeNumId").value)*cokePrice;
    document.getElementById("totalPriceId").textContent = humberTotal +cokeTotal;
}