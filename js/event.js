//event.js

let fruits = ['Apple', 'Orange', 'Mango', 'Melon'];

function addFruit() {
    let addVal = document.getElementById('add').value;
    fruits[fruits.length] = addVal;
    document.getElementById('add').value = null;
    removeFromDoc();
    createElements();
}

function createElements() {
    let ulTag = document.createElement('ul');
    ulTag.setAttribute('id', 'fruit');
    for (let f of fruits) {
        let liTag = document.createElement('li');
        let a = document.createTextNode(f);
        liTag.appendChild(a);
        ulTag.appendChild(liTag);
    }

    document.body.appendChild(ulTag);
}

function removeFromDoc() {
    if (document.getElementById('fruit'))
        document.getElementById('fruit').remove(); // <ul id='fruit'></ul>
}