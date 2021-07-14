//object.js

let s1 = {
    sno: 1001,
    sname: "Pooh",
    sscore: 90
}
let field = 'sscore';
console.log(s1.sno);
console.log(s1['sname']);
console.log(s1[field]);

//object의 필드정보를 읽어올 때 : for...in

for(let field in s1) {
    console.log(field + ', ' + s1[field])
}

//배열일 경우에 반복문 for .. of
let numbers = [10, 32, 55, 27, 99];
let sum = 0;

for (let num of numbers) {
    sum += num;
}
console.log(sum);

let s2 = {
    sno: 1002,
    sname: 'Tiger',
    sscore: 80
}

let s3 = {
    sno: 1003,
    sname: 'Piglet',
    sscore: 80
}

let students = [s1, s2, s3];

for (student of students) {
    for (let field in student) {
        console.log(field + ":" + student[field]);
    }
    console.log("-------------------------------")
}