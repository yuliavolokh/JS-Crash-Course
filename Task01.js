// Task 1
const userName = prompt("Enter your name")
const userBirthYear = prompt("Enter your birth year");
const userAge = prompt("Enter your age");
const user = `My name is ${userName} + my birth year is ${userBirthYear} + and my age is ${userAge}`
alert(user);
// Tast 2
const radius = prompt("Enter circle radius:");
const pi = Math.PI;
console.log(`Area of the circle: ${pi * radius**2}`);
//Task 3
const distance = prompt("Enter distance in km between two cities:");
const time = prompt("Enter time which are needed to reach the distance:");
console.log(`Value of the required speed: ${distance * time}`);
// Task 4
const money = prompt("How much dollars do you want to convent?");
    console.log(`The converted currency is: ${money * 0.94}`);
// Task 5
const flashDrive = prompt('Enter your flash drive capacity');
const fileSize = 820;
const result = Math.floor(flashDrive * 1024/fileSize);
alert(result);
// Additional tasks
//Task 1
const kilometrs = prompt('Enter value in kilometrs: ');
const factor = 0.621371;
const convector = Math.floor(factor * kilometrs); 
alert(convector);
// Task 2
