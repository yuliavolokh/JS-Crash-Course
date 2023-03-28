// Task 1.1
let number = prompt("Enter the number from 0 to 9");
const arr = ['~','!', '@', '#', '$', '%', '^', '&', '*', '('];
if (!arr[number]) {
    console.log("The number is not correct");
} else {
    console.log("The number is correct");
}
alert(arr[number]);
// Tast 1.2
function checkTheYear(year) {
    if ((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)) {
        console.log(year + ' is the leap year');
    } else {
        console.log(year + ' is not the leap  year');
    }
}
const year = prompt('Enter a year:');
checkTheYear(year); 
// Task 1.3
function getNextDate(dateStr) {
    const date = new Date(dateStr);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    day++;
    if (day > daysInMonth) {
        day = 1;
        month++;
        if (month > 11) {
            month = 0;
            year++;
        }
    }
    return `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}
const getData = prompt('Enter current data: ');
alert(getNextDate(daysInMonth));
//Task 2.1
let range = parseInt(prompt('Enter the range of number'));
let sum = 0; 
for (let i = 1; i <= range; i++) {
    sum += i;
}
console.log('The sum of natural numbers:', sum);
//Task 2.2
function getSumInRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}
let countDigits = prompt('Enter the number of  digits: ');
console.log(sum);
//Task 2.3
let count = {
  positive: 0,
  negative: 0,
  zero: 0,
  even: 0,
  odd: 0
};
for (let i = 0; i < 10; i++) {
  const number = parseInt(prompt(`Enter number ${i + 1}: `));
  if (number > 0) {
    count.positive++;
  } else if (number < 0) {
    count.negative++;
  } else {
    count.zero++;
  }
  
  if (number % 2 === 0) {
    count.even++;
  } else {
    count.odd++;
  }
}
console.log(`Positive numbers: ${count.positive}`);
console.log(`Negative numbers: ${count.negative}`);
console.log(`Zeroes: ${count.zero}`);
console.log(`Even numbers: ${count.even}`);
console.log(`Odd numbers: ${count.odd}`);
//Task 2.4
let user = prompt('Enter the day:')
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let i = 0;
let continueLoop = true;
do {
    const dayOfWeek = daysOfWeek[i];
    const message = `${dayOfWeek}. Do you want to see the next day?`;
    continueLoop = confirm(message);
    i = (i + 1) % daysOfWeek.length;
} while (continueLoop);
