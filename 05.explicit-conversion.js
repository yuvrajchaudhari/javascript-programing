var num = 100;

var numStr = String(num);

console.log(`Value: ${numStr} and it's type: ${typeof numStr}`);

 

var numOne = 0;

var numBoolean = Boolean(numOne);

console.log(`Value: ${numBoolean} and it's type: ${typeof numBoolean}`);

 

var numTwo = true;

var numTwoBoolean = String(numTwo);

console.log(`Value: ${numTwoBoolean} and it's type: ${typeof numTwoBoolean}`);

 

var numTwoBoolean = Number(numTwo);

console.log(`Value: ${numTwoBoolean} and it's type: ${typeof numTwoBoolean}`);

console.log(`=================Assignment Explicit conversion operation===========`);
result = Number('324');
console.log(`Number('324)= result is: ${result}`)
console.log(`Reason: '324' is a string and containing a valid integer.  Number('324') parses it successfully  returns 324`)

    

result = Number('324e-1');
console.log(`Number('324e-1') = result is: ${result}`)
console.log(`Reason: scientific notation is 324 × 10^(-1)`)


result = Number(true);
console.log(`Number(true) = result is: ${result}`)
console.log(`Reason: true is coerced to 1 when converted to a number.`)

result = Number(false);
console.log(`Number(false) = result is: ${result}`)
console.log(`Reason: false is coerced to 0`);


console.log(`================Performing Invalide Operation======================`);
result = Number('hello');
console.log(`Result is : ${result}`);
console.log(`Reason: 'hello' is a non-numeric string,Number() tries to convert it to a number → fails,Result is NaN ("Not a Number")`)
result = Number(undefined);
console.log(`Result is : ${result}`);
console.log(`Reason: undefined has no numeric meaning`)

result = Number(NaN);
console.log(`Result is : ${result}`);
console.log(`Reason: NaN is already "Not a Number`)