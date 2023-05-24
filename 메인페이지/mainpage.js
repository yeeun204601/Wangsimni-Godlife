/* 날짜 */
let today = new Date();
let year = today.getFullYear();
let month = ('0' + (today.getMonth() + 1));
let day = (today.getDate());

let dateString = year + '/' + month  + '/' + day; 

document.getElementById("date1").innerHTML = dateString;

/* 종강 d-day */
let dDay = new Date("2023/06/21");
let diff_days = Math.floor((dDay - today) / (1000 * 3600 * 24));
let dDayString = "종강 D-" + diff_days;

document.getElementById("d-day1").innerHTML = dDayString;

/* 오늘의 한 마디 */
let comments = [
    '아자아자, 파이팅이닷!', '수고했어, 오늘도', '잘해왔고, 잘하고 있어!', '울지말고 웃자!', '행복하자ㅎㅎ',
    '언제나 응원해~', '좋은 일이 가득하길!', '할 수 있어!', '행복 가득, 행운 가득~', '덤벼라! 세상아'
]
let todays_num = Math.floor((Math.random() * comments.length));

document.getElementById("comment").innerHTML = "오늘의 한 마디: " + comments[todays_num];
