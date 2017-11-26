/*function square(num){
    console.log(num,num*num);
}

var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square); */

/*function isEven(num){
    return num % 2 === 0;
}

var nums = [2,4,6,8,10]

var even = nums.every(isEven);

if(even){
    console.log("all numbers are even");
}
else{
    console.log("not all numbers are even");
}*/

/*function isEven(num){
    return num % 2 === 0;
}

var nums = [1,2,3,4,5,6,7,8,9,10]; 
var someEven = nums.some(isEven);

if(someEven){
    console.log("some even");
}else{
    console.log("some odd");
}

nums = [1,3,5,7,9,10,11]; 
someEven = nums.some(isEven);

if(someEven){
    console.log("some are even");
}else{
    console.log("none are even");
}*/

/*function add(runningTotal,currentValue){
    return runningTotal + currentValue;
}
var nums = [1,2,3,4,5,6,7,8,9,10];
var sum = nums.reduce(add);
console.log(sum);*/
//pg25

/*function concat(accumulatedString,item){
    return accumulatedString+item;
}

var words = ["the ", "quick ","brown ", "fox "];
var sentence = words.reduceRight(concat); 
console.log(sentence);*/

/*function curve(grade) { 
     return grade += 5; 
}
var grades = [77, 65, 81, 92, 83];
var newgrades = grades.map(curve);
console.log(newgrades);*/

//pg26

/*function first(word) {  
     return word[0]; 
}
var words = ["for","your","information"];
var acronym = words.map(first);
console.log(acronym.toString());
console.log(acronym.join(""));*/

/*function isEven(num){
     return num % 2 === 0;
}
function isOdd(num){
    return num % 2 !== 0;
}
var nums = []; 
for (var i = 0; i < 20; ++i){
       nums[i] = i+1; 
}
var evens = nums.filter(isEven);
console.log("Even numbers: "); 
console.log(evens);

var odds = nums.filter(isOdd);
console.log("Odd numbers: ");
console.log(odds);*/

/*function passing(num){
    return num >= 60;
}
var grades = [];
for (var i = 0; i < 20; ++i){
    grades[i] = Math.floor(Math.random() * 101);
} 
var passGrades = grades.filter(passing); 
console.log("All grades: ");
console.log(grades); 
console.log("Passing grades: "); 
console.log(passGrades);*/
//pg27
/*
function afterc(str){
    if (str.indexOf("cie") > -1) {
        return true;
    }   
    return false;
}

var words = ["recieve","deceive","percieve","deceit","concieve"];
var misspelled = words.filter(afterc);
console.log(misspelled);*/

