// estimates of square

function perimeterSquare(side){
    return side * 4;
}

function areaSquare(side){
    return side * side;
}

// estimates of triangle

function perimeterTriangle(sideA, sideB, base){
    return sideA + sideB + base;
}

function areaTriangle(base, height){
    return (base * height) / 2;
}

// estimates of circle

function circumferenceCircle(radius){
    return 2 * Math.PI * radius;
}

function areaCircle(radius){
    return Math.PI * radius * radius;
}

function calcPerimeterSquare(){
    var side = document.getElementById("side");
    var side_value = Number(side.value);
    alert(perimeterSquare(side_value));
}

function calcAreaSquare(){
    var side = document.getElementById("side");
    var side_value = Number(side.value);
    alert(areaSquare(side_value));
}

function calcPerimeterTriangle(){
    var sideA = document.getElementById("sideA");
    var sideB = document.getElementById("sideB");
    var base = document.getElementById("base");
    var sideA_value = Number(sideA.value);
    var sideB_value = Number(sideB.value);
    var base_value = Number(base.value);
    alert(perimeterTriangle(sideA_value, sideB_value, base_value));
}

function calcAreaTriangle(){
    var base = document.getElementById("base");
    var height = document.getElementById("height");
    var base_value = Number(base.value);
    var height_value = Number(height.value);
    alert(areaTriangle(base_value, height_value));
}

function calcCircumferenceCircle(){
    var radius = document.getElementById("radius");
    var radius_value = Number(radius.value);
    alert(circumferenceCircle(radius_value));
}

function calcAreaCircle(){
    var radius = document.getElementById("radius");
    var radius_value = Number(radius.value);
    alert(areaCircle(radius_value));
}