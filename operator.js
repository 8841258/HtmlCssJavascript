console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false

const name = 'pooh';
if (name === 'pooh') {
    console.log('Welcome, pooh!');
} else if (name === 'piglet') {
    console.log('you are amazing dolls');
} else {
    console.log('unknown');
}

console.log(name === 'pooh' ? 'yes' : 'no');

for (let i=0; i<=10; i++) {
    if (i%2 == 0) {
        console.log(i);
        
    }

}
console.log('------------------------');
for (let i=0; i<=10; i++) {

    if (i == 8) {
        break;
    }
    console.log(i);
}

function calculate (command, a, b) {
    switch(command) {
        case 'add': return a+b; break;
        case 'substract': return a-b; break;
        case 'divide': return a/b; break;
        case 'multiply': return a*b; break;
        case 'remainder': return a%b; break;
        default: throw Error('unknown command');
    }
}

console.log(calculate('remainder', 6, 5));
console.log(calculate('a', 6, 5));