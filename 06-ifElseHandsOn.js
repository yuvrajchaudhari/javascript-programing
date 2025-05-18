
var checkEvenorOdd = function(num){
if(num%2 == 0){ return "EVEN" }
else{ return "ODD" }
} 
var result = checkEvenorOdd(45)
console.log(`45 number is ${result}`);
var result = checkEvenorOdd(70)
console.log(`70 number is ${result}`)
var result = checkEvenorOdd(67)
console.log(`45 number is ${result}`)
var result = checkEvenorOdd(98)
console.log(`98 number is ${result}`)
console.log(`========Check Age Elighibility==========`)
var checkAgeEligibility = function(age){
if(18<=age){
    return "person is eligible for vote"
}else{
    return "person is NOT eligible for vote"
}

}
var result = checkAgeEligibility(18);
console.log(`The age is 18 so ${result}`)
var result = checkAgeEligibility(20);
console.log(`The age is 20 so ${result}`)
var result = checkAgeEligibility(17);
console.log(`The age is 17 so ${result}`)
var result = checkAgeEligibility(40);
console.log(`The age is 40 so ${result}`)

console.log(`===================String containlength check==============`)
str = "JavaScript - ES6";
var checkStrLength = function(str){
if(str.length>10){
    return "String Length is more than 10"
}else{
    return "String Length is less than 10"

}
}
var result = checkStrLength(str)
console.log(result)

console.log(`====check string start with java==========`)
var checkstr = function(checkstr){
    if(checkstr.startsWith("Java")){return "Yes string start with 'Java'";}
else{ return "No string is NOT start with 'java'";    }
}
var result = checkstr("JavaScript Language")
console.log(`string JavaScript Language is ${result}`)

var result = checkstr("Programming Language")
console.log(`string Programming Language is ${result}`)