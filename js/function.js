//function.js

function plus() {
    let i1 = document.getElementById('num1'); //input 태그
    let i2 = document.getElementById('num2');
    let result = document.getElementById('result');
    result.value = sum(parseInt(i1.value), parseInt(i2.value));
}

function sum(v1, v2) {
    return v1 + v2;
}

var fnc = function (v1, v2) {
    return v1 + v2;
}

function cal(a, b) {
    return a / b;
}

function abc (a) {
    if (a<0) {
        console.log("음수")
    } else if (a>0) {
        console.log("양수")
    } else {
        console.log("0")
    }
}

console.log(fnc(1, 2, 3));
console.log(7, 4);
console.log(cal(7, 4));
console.log(abc(-10));