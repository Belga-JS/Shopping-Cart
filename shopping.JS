
var priceshoes1 = 120;
var priceSocks1 = 20;
var priceSacados1 = 80;
var Total;

var shoesQuantity = document.getElementById("shoesQuantity").innerHTML;
var socksQuantity = document.getElementById("socksQuantity").innerHTML;
var sacadosQuantity = document.getElementById("sacadosQuantity").innerHTML;
var priceQuantityshoes = shoesQuantity * priceshoes1;
var priceQuantitysocks = socksQuantity * priceSocks1;
var priceQuantitysacados = sacadosQuantity * priceSacados1;

shoesQuantity = parseInt(shoesQuantity);
socksQuantity = parseInt(socksQuantity);
sacadosQuantity = parseInt(sacadosQuantity);



function addshoes() {
    document.getElementById("shoesQuantity").innerHTML = ++shoesQuantity;

    document.getElementById("priceshoes1").innerHTML = +document.getElementById("shoesQuantity").innerHTML * 120
}


function addsocks() {
    document.getElementById("socksQuantity").innerHTML = ++socksQuantity;

    document.getElementById("pricesocks1").innerHTML = +document.getElementById("socksQuantity").innerHTML * 20

}


function addsacados() {
    document.getElementById("sacadosQuantity").innerHTML = ++sacadosQuantity;

    document.getElementById("pricesacados1").innerHTML = +document.getElementById("sacadosQuantity").innerHTML * 80

}


document.getElementById("addshoes").addEventListener("click", addshoes);
document.getElementById("addsocks").addEventListener("click", addsocks);
document.getElementById("addsacados").addEventListener("click", addsacados);

function shopping(){
    Total= priceQuantityshoes + priceQuantitysocks + priceQuantitysacados ;
    document.getElementById("Total").innerHTML=" "+Total;
}

function subshoes() {
    if (shoesQuantity > 0) {
        document.getElementById("shoesQuantity").innerHTML = --shoesQuantity;
        document.getElementById("priceshoes1").innerHTML = priceshoes1 * shoesQuantity;
        document.getElementById("Total").innerHTML = "" + Total;
    }
}
function subsocks() {
    if (socksQuantity > 0) {
        document.getElementById("socksQuantity").innerHTML = --socksQuantity;
        document.getElementById("pricesocks1").innerHTML = priceSocks1 * socksQuantity;
        document.getElementById("Total").innerHTML = "" + Total;
    }
}
function subsacados() {
    if (sacadosQuantity > 0) {
        document.getElementById("sacadosQuantity").innerHTML = --sacadosQuantity;
        document.getElementById("pricesacados1").innerHTML = priceSacados1 * sacadosQuantity;
        document.getElementById("Total").innerHTML = "" + Total;

    }
}

document.getElementById("subshoes").addEventListener("click", subshoes);
document.getElementById("subsocks").addEventListener("click", subsocks);
document.getElementById("subsacados").addEventListener("click", subsacados);

function removeshoes() {
    var elmnt = document.getElementById("shoes-row");
    elmnt.remove();
    priceshoes1 = 0;
    document.getElementById("Total").innerHTML = " " + Total;
}

function removeSocks() {
    var elmnt = document.getElementById("socks-row");
    elmnt.remove();
    pricesocks1 = 0;
    document.getElementById("Total").innerHTML = " " + Total;
}

function removeSacados() {
    var elmnt = document.getElementById("sacados-row");
    elmnt.remove();
    pricesacados1 = 0;
    document.getElementById("Total").innerHTML = " " + Total;
}

document.getElementById("delete-shoes").addEventListener("click", removeshoes);
document.getElementById("delete-socks").addEventListener("click", removeSocks);
document.getElementById("delete-sacados").addEventListener("click", removeSacados);

var shoesNbrClick=1;
var shoesHeart= document.getElementById("love-shoes");
function chnageshoesHeartColor(){
    if ((shoesNbrClick % 2) ==0){
        shoesHeart.style.color="black";
        shoesNbrClick++
    }
    else {shoesHeart.style.color="red";
    shoesNbrClick++;
}
}
var socksNbrClick=1;
var socksHeart= document.getElementById("love-socks");
function chnagesocksHeartColor(){
    if ((socksNbrClick % 2) ==0){
        socksHeart.style.color="black";
        socksNbrClick++
    }
    else {socksHeart.style.color="red";
        socksNbrClick++;
}
}
var sacadosNbrClick=1;
var sacadosHeart= document.getElementById("love-sacados");
function chnagesacadosHeartColor(){
    if ((sacadosNbrClick % 2) ==0){
        sacadosHeart.style.color="black";
        sacadosNbrClick++
    }
    else {sacadosHeart.style.color="red";
        sacadosNbrClick++;
}
}
document.getElementById("love-shoes").addEventListener("click", chnageshoesHeartColor);
document.getElementById("love-socks").addEventListener("click", chnagesocksHeartColor);
document.getElementById("love-sacados").addEventListener("click", chnagesacadosHeartColor);