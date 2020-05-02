const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const dispTime = document.querySelector('h1');
const dispDate = document.querySelector('h2');



function setDate(){

const now = new Date();
const seconds = now.getUTCSeconds();
const secondsDegrees = ((seconds / 60) * 360) + 90;
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

const mins = now.getUTCMinutes();
const minDegrees = ((mins /60) * 360) + 90;
minuteHand.style.transform = `rotate(${minDegrees}deg)`;

const hours = now.getUTCHours() + 1;
const hourDegrees = ((hours / 12) * 360) + 90;
hourHand.style.transform = `rotate(${hourDegrees}deg)`;


let disSec = seconds;
if(disSec<10) {disSec= '0' + disSec};
let disMins = mins;
if(disMins<10) {disMins = '0' + disMins};
let disHours = hours;
if (disHours<10) {disHours = '0' + disHours};

dispTime.textContent = (hours+':'+disMins+':'+disSec);


const day = now.getUTCDate();
const month = now.getUTCMonth();
const year = now.getUTCFullYear();

let today = day;
if(today<10){today = '0' + today};
let thisMonth = month;
if(thisMonth<10){thisMonth = '0' + thisMonth};

dispDate.textContent = (today+'.'+ thisMonth+'.'+year);

}

setInterval(setDate, 1000);