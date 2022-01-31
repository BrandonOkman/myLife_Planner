// DOM Elms
const container = $('.container');
const currentDay = $('#currentDay');
// const saveBtn = $('.icon');

// Current Date & Time
//Date
let date = moment().format( 'MMMM DD, YYYY ' );
//Time
let hour = moment().get('hour');
if (hour>12) {
    hour=hour-12;
}
let minute = moment().get('minute');
if (minute < 10) {
    minute = '0' + minute
}
let time = hour + ':' + minute;
currentDay.text(`It's ` + time + ' on ' + date);

