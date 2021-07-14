// letiable.js


let age = 10;
console.log(age);

age = 20;
console.log(age);


const PI = 3.1415;
// PI = 3.2; 상수는 재할당 불가

{ //블럭 안에서는 가능
    let age = 30;
    console.log(age);
}

console.log(age);

let v1; //undefined
v1 = 'hello'; //string
v1 = 100.45; //number
v1 = true; //boolean
v1 = null; //object
v1 = [1, 2, 3]; //object
v1 = {
    name: 'Hong',
    age: 20,
    score: 80
};
v1 = function (a, b) {
    return a + b;
} //function
console.log(typeof v1);
console.log(v1('에', '오'));
v1 = 10 > 20;
v1 = null; //0, null, false => 거짓, 값이 있으면 참.
if (v1) {
    console.log("참입니다")
} else {
    console.log("거짓입니다.")
}