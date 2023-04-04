//Task 1.1
const myArray = [];
for(let i=0; i<20; i++){
  myArray.push(Math.floor(Math.random() * 100) + 1);
}
console.log("Array:"+myArray);
console.log("myArray length:", myArray.length);
//Task 1.2
for(let i=0; i<myArray.length; i++){
  console.log(`[${i}] - ${myArray[i]}`);
}
console.log(myArray);
//Task 1.3
const newArr = myArray.sort((a, b) => b - a);
console.log("newArr"+newArr);
//Task 1.4
 myArray.fill(0,10);
console.log(myArray);
//Tasf 1.5
let multipleOf7 = myArray.some(number => number % 7 === 0); 
if (multipleOf7) {
  let index = myArray.findIndex(number => number % 7 === 0); 
  console.log(`The array contains a multiple of 7 at index ${index}.`); 
} else {
  console.log("The array does not contain a multiple of 7."); 
}
console.log(myArray);
//Task 1.6
const removingArr = myArray.splice(3);
console.log("Removing Array:" + removingArr); 
console.log("Removing Array length:", removingArr.length);
//Task 1.7
let count = 0;
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    count++;
  }
}
console.log(count);
console.log("count length:", count.length);
//Task 2.1
const str = prompt('Enter the sentence: ');
const spaceCount = (str.split(" ").length - 1);
console.log(`The string contains ${spaceCount} spaces.`);
//Task 2.2
function conventsFirstLetter(str) {
  const convent = str.charAt(0).toUpperCase() + str.slice(1);
  return convent;
}
const string = prompt('Enter a string: ');
const result = conventsFirstLetter(str);
console.log(result);
//Task 2.3
const countWords = string.split(" ").length; 
console.log(`The string contains ${countWords} words.`); 
//Task 2.4
const phrase = prompt('Enter a phrase: ');
const abbreviation = (phrase = '') => {
   const phraseArr = phrase.split(' ');
   let result = '';
   phraseArr.forEach(element => {
      const [char] = element;
      if(char === char.toUpperCase() && char !== char.toLowerCase()){
         result += char;
      };
   });
   return result;
};
console.log(abbreviation(phrase));
//Task 2.5
function palindronChecker(sentence) {
  const len = sentence.length;
  for (let i = 0; i < len / 2; i++) {
        if (sentence[i] !== sentence [len - 1 - i]) {
            return 'It is not a palindrome';
        }
  }
   return 'It is a palindrome';
}
const sentence = prompt('Enter a string');
const value = palindronChecker(sentence);
console.log(value); 
