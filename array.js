'use strict';

const arr1 = new Array();
const arr2 = [1, 2];

const fruits = ['사과', '바나나']

fruits.forEach(fruit => console.log(fruit));

//뒤에 데이터 넣기
fruits.push('키위', '복숭아');
//뒤에 하나 꺼내기
fruits.pop();
console.log(fruits);

//배열이 길면 매우 느림.
//앞에 넣기
fruits.unshift('딸기', '레몬');
//앞에 빼기
fruits.shift();

//splice(시작인덱스, 몇개지울건지)
//splice(시작인덱스) 만 쓰면 시작인덱스 이후 다 지움.
fruits.splice(1, 1);
//그 자리에 다른 데이터 넣을 수 있음
fruits.splice(1, 1, '사과', '수박');

//배열 합치기
const fruits2 = ['멜론', '포도'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//값으로 인덱스 번호 알아내기
console.clear();
let index = fruits.indexOf('사과');
console.log(index);

//배열에 값이 없으면, -1을 출력한다.
let a = fruits.indexOf('포도');
console.log(a);

//배열에 값이 있는가?
let tr = fruits.includes('수박');
let fa = fruits.includes('포도');
console.log(tr, fa);

//배열 안에 중복된 값이 있을 때, 마지막 인덱스 번호 출력
fruits.push('사과');
console.log(fruits);
let lastIndex = fruits.lastIndexOf('사과');
console.log(lastIndex);


//활용
console.clear();
console.log(fruits.toString());
console.log(fruits.length);
