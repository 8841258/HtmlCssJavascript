// cal.js

function createCal() {
    let userYear = document.getElementById('year').value;
    let userMonth = document.getElementById('month').value;

    let now = new Date(userYear, userMonth, 1);
    let firstDay = now.getDay();
    console.log(firstDay);

    let today = new Date(userYear, userMonth, 0);
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    let days = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
    console.log(`${year}년\n${month}월\n${date}일`);

    let all = '<table border=1><tr>';
    for (let i = 0; i < days.length; i++) {
        all += '<td style="background-color: pink">' + days[i] + '</td>';
    }
    all += '</tr>'
    for (let i = 0; i < firstDay; i++) {
        all += '<td></td>';
    }
    for (let i = 1; i < date+1; i++) {
        if ((firstDay+i) % 7 == 1) {
            all += '<td style="background-color: red">' + i + '</td>';
        } else if ((firstDay+i) % 7 == 0) {
            all += '<td style="background-color: blue">' + i + '</td></tr><tr>';
        } else {
            all += '<td>' + i + '</td>';
        }
    }
    all += '</tr></table>';
    document.write(all);
}