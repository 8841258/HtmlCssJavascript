//employee.js

let json = `[{"id":1,"first_name":"Douglass","last_name":"Ginn","email":"dginn0@nationalgeographic.com","gender":"Bigender","ip_address":"76.140.235.132"},
{"id":2,"first_name":"Rem","last_name":"Ikins","email":"rikins1@comsenz.com","gender":"Bigender","ip_address":"99.71.95.150"},
{"id":3,"first_name":"Wilton","last_name":"Bousfield","email":"wbousfield2@columbia.edu","gender":"Female","ip_address":"193.154.50.136"},
{"id":4,"first_name":"Taite","last_name":"Agdahl","email":"tagdahl3@storify.com","gender":"Genderfluid","ip_address":"54.19.243.45"},
{"id":5,"first_name":"Anjanette","last_name":"Pilipyak","email":"apilipyak4@freewebs.com","gender":"Polygender","ip_address":"111.53.180.127"},
{"id":6,"first_name":"Michaeline","last_name":"Grundy","email":"mgrundy5@so-net.ne.jp","gender":"Genderqueer","ip_address":"164.89.138.122"},
{"id":7,"first_name":"Birdie","last_name":"Gammons","email":"bgammons6@utexas.edu","gender":"Female","ip_address":"97.180.40.116"},
{"id":8,"first_name":"Jacklin","last_name":"Klewer","email":"jklewer7@admin.ch","gender":"Genderqueer","ip_address":"241.243.157.138"},
{"id":9,"first_name":"Francois","last_name":"Anthoin","email":"fanthoin8@netlog.com","gender":"Genderqueer","ip_address":"88.188.88.35"},
{"id":10,"first_name":"Barnett","last_name":"Benes","email":"bbenes9@ovh.net","gender":"Non-binary","ip_address":"51.208.140.120"}]`;

let data = JSON.parse(json);
console.log(data);

document.write('<h1>사원정보</h1>')

let tableTag = document.createElement('table');
tableTag.setAttribute('border', '1');
tableTag.setAttribute('width', '1000');
tableTag.setAttribute('align', 'center');
tableTag.setAttribute('caption', '사원정보');

createHeader2();

for (let row of data) {
    let trTag = document.createElement('tr');
    trTag.setAttribute('id', row.id);
    trTag.setAttribute('height', '50')
    trTag.setAttribute('align', 'center');
    trTag.onmouseover = changeColor;
    trTag.onmouseout = orginColor;
    trTag.onclick = fillBox;

    for (let field in row) {
        let tdTag = document.createElement('td');
        let text = document.createTextNode(row[field]);
        tdTag.appendChild(text);
        trTag.appendChild(tdTag);
    }
    let tdTag = document.createElement('td');
    let btn = document.createElement('button');
    btn.onclick = deleteRow;
    let btnText = document.createTextNode('삭제');
    btn.appendChild(btnText);
    tdTag.appendChild(btn);
    trTag.appendChild(tdTag);

    tableTag.appendChild(trTag);
}
document.getElementById('show').appendChild(tableTag);






function modRow() {
    let id = document.getElementById('eid').value;

    let findTr = document.getElementById(id); //
    console.log(findTr);
    findTr.childNodes[1].childNodes[0].nodeValue = document.getElementById('first_name').value;
    findTr.childNodes[2].childNodes[0].nodeValue = document.getElementById('last_name').value;
    findTr.childNodes[3].childNodes[0].nodeValue = document.getElementById('email').value;
    findTr.childNodes[4].childNodes[0].nodeValue = document.getElementById('gender').value;
}

function addRow() {
    let id = document.getElementById('eid').value;
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;

    let arr = [id, first_name, last_name, email, gender];

    let trTag = document.createElement('tr');
    trTag.onmouseover = changeColor;
    trTag.onmouseout = orginColor;
    for (let i of arr) {
        let tdTag = document.createElement('td');
        let text = document.createTextNode(i);
        tdTag.appendChild(text);
        trTag.appendChild(tdTag);
    }
    let tdTag = document.createElement('td');
    let btn = document.createElement('button');
    btn.onclick = deleteRow;
    let btnText = document.createTextNode('삭제');
    btn.appendChild(btnText);
    tdTag.appendChild(btn);
    trTag.appendChild(tdTag);

    document.getElementsByTagName('table')[0].appendChild(trTag);
}

function fillBox() {
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = this.childNodes[i].childNodes[0].nodeValue;
    }

    let id = this.childNodes[0].childNodes[0].nodeValue;
    let first_name = this.childNodes[1].childNodes[0].nodeValue;
    let last_name = this.childNodes[2].childNodes[0].nodeValue;
    let email = this.childNodes[3].childNodes[0].nodeValue;
    let gender = this.childNodes[4].childNodes[0].nodeValue;

    document.getElementById('eid').value = id;
    document.getElementById('first_name').value = first_name;
    document.getElementById('last_name').value = last_name;
    document.getElementById('email').value = email;
    document.getElementById('gender').value = gender;
}

function deleteRow(e) {
    e.stopPropagation();
    let id = this.parentNode.parentNode.childNodes[0].childNodes[0].nodeValue;

    console.log(id);
    this.parentNode.parentNode.remove();

    for (let i = 0; i < data.length; i++) {
        if (data[i].id == parseInt(id)) {
            // delete data[i];
            data.splice(i, 1);
            break;
        }
    }
    console.log(data);
}

function orginColor() {
    this.style.backgroundColor = '';
}

function changeColor() {
    this.style.backgroundColor = 'Yellow';
}

function createHeader() {
    let trTag = document.createElement('tr');
    for (let a in data[0]) {
        let thTag = document.createElement('th');
        let text = document.createTextNode(a);
        thTag.appendChild(text);
        trTag.appendChild(thTag);
    }
    tableTag.appendChild(trTag);
}

function createHeader2() {
    let headers = ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address', '삭제'];
    let trTag = document.createElement('tr');
    for (let i in headers) {
        let thTag = document.createElement('th');
        thTag.setAttribute('height', '50')
        thTag.style.backgroundColor = 'pink';
        let text = document.createTextNode(headers[i]);
        thTag.appendChild(text);
        trTag.appendChild(thTag);
    }
    tableTag.appendChild(trTag);
}