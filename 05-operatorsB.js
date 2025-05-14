function greaterNumber(numOne, numTwo){
var result = numOne>numTwo ? numOne:numTwo;
console.log(`Greater Number is: ${result}`)
}
greaterNumber(10,-10 );
greaterNumber(800,899 );

console.log(`===========to check Even Or Odd ============`)
function isEvenOrOdd(num) {
   var result = num % 2 == 0 ? true : false;
   return result
}

var returnValue = isEvenOrOdd(29);
console.log(`29 Is Number Even : ${returnValue}`);

var returnValue = isEvenOrOdd(44);
console.log(`44 Is Number Even : ${returnValue}`);

var returnValue = isEvenOrOdd(0);
console.log(`0 Is Number Even : ${returnValue}`);

var returnValue = isEvenOrOdd(101);
console.log(`101 Is Number Even : ${returnValue}`);

console.log(`===================word length ==============`);
var str1 = "Javascript"
strLength1 = str1.length;
console.log(`Javascript length is: ${strLength1}`)

var str2 = "developer"
strLength = str2.length;
console.log(`developer length is: ${strLength}`)

var str3 = "google"
strLength = str3.length;
console.log(`developer length is: ${strLength}`)

function wordLength(word) {
    return word.length % 2 === 0 ? "EVEN" : "ODD";
}



// Test the function with the given words
console.log("JavaScript ", wordLength("JavaScript")); 
console.log("developer ", wordLength("developer"));   
console.log("Google ", wordLength("Google"));         

console.log(`========Task 1 =====================`)
function maleMarriageEligibility(gender, age, boyName){
     var result = (gender == "Male" && age >= 21 ) ?
     `Hey ${boyName} you are eligible for marriage`
     :`Hey ${boyName} you are not eligible for marriage`
     return result;
}
var returnValue = maleMarriageEligibility("Male", 25, "Billu");
var returnValue1 = maleMarriageEligibility("Male", 15, "Stew");
console.log(returnValue);
console.log(returnValue1);

console.log(`========Task 2 =====================`)
function femaleMarriageEligibility(gender, age, girlName){
     var result = (gender == "Male" && age >= 18 ) ?
     `Hey ${girlName} you are eligible for marriage`
     :`Hey ${girlName} you are not eligible for marriage`
     return result;
}
var returnValue = femaleMarriageEligibility("Female", 16, "Jennifer");
var returnValue1 = femaleMarriageEligibility("Female", 25, "Malinda");
console.log(returnValue);
console.log(returnValue1);