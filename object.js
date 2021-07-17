const disney = {
    name: 'pooh',
    age: 5
};

//obj.key => undefined, undefined
printValue1(disney, 'name');
printValue1(disney, 'age');
console.log('----------------------------');
//obj[key] => pooh, 5
printValue2(disney, 'name');
printValue2(disney, 'age');


function printValue1(obj, key) {
    console.log(obj.key);
}

function printValue2(obj, key) {
    console.log(obj[key]);
}


const disney1 = {name: 'pooh', age: 5};
const disney2 = {name: 'piglet', age: 8};
const disney3 = {name: 'tiger', age: 10};
//const disney4 = .......

// constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person = new Person('pooh', 5);
console.log(person); 


//키가 있는지 확인하기
console.log('name' in disney);
console.log('age' in disney);
console.log('job' in disney);


//for..in
console.clear(); //이전 콘솔 출력 지우기
for (key in disney) {
    console.log(key);
}

//for..of
const arr = [1, 2, 4, 5];
for (let i of arr) {
    console.log(i);
}


//clone object
console.clear();
//1
const disney4 = {};
Object.assign(disney4, disney);
//2
const disney5 = Object.assign({}, disney);
console.log(disney4);
console.log(disney5);