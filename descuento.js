function calculatePriceWithDiscount(price, discount){
    priceWithDiscount = price * (100 - discount) / 100;
    return priceWithDiscount;
}

function showPriceWithDiscount(){
    var price_input = document.getElementById("price");
    var discount_input = document.getElementById("discount");
    var result_output = document.getElementById("result");
    var price = price_input.value;
    var discount = discount_input.value;
    result_output.innerText = "Price with discount is : $" + calculatePriceWithDiscount(price, discount); 
}