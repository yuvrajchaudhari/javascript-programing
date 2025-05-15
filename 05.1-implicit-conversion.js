let result;
result = '3' + 2;
console.log(`'3'+ 2 = result is :${result} `);
console.log(`Reason: '3' is a string,2 is a number, The + operator between a string and a number results in string concatenation, not arithmetic addition.`)

result = '3' + true;
console.log(`'3' + true = result is: ${result}`)
console.log(`Reason: '3' is a string. and true is a boolean. JavaScript converts true to the string 'true'`)

result = '3' + undefined;
console.log(`'3' + undefined = result is: ${result}`)
console.log(`Reason :'3' is a string, undefined is a special primitive type, js converts undefined to the string "undefined" `)

result = '3' + null;
console.log(`'3' + null = result is: ${result}`)
console.log(`Reason: '3' is a string and null is a primitive value, not a string ,Js converts null to the string "null"`)

result = '4' - true;
console.log(`'4' - true = result is: ${result}`)
console.log(`Reason: '4' is a string, JavaScript coerces '4' to the number 4, true is coerced to the number 1`)
result = 4 + true;
console.log(`4 + true = result is: ${result}`)
console.log(`Reason: 4 is a number ,true is coerced to 1 `)

result = 4 + false;
console.log(`4 + false = result is: ${result}`)
console.log(`Reason: 4 is a number ,false is coerced to 0`)

result = '4' - '2';
console.log(`'4' - '2' = result is: ${result}`)
console.log(`Reason: - is a numeric operator, so JavaScript tries to convert both operands to numbers.`)

result = '4' - 2;
console.log(`'4' - 2 = result is: ${result}`)
console.log(`Reason: '4' is a string, but the - operator forces it to be converted to a number.`)
result = '4' * 2;
console.log(`'4' * 2 = result is: ${result}`)
console.log(`Reason: * is also a numeric operator so * operator forces it to be converted '4' to a number`)
result = '4' / 2;
console.log(`'4' / 2 = result is: ${result}`)
console.log(`Reason: / is also a numeric operator so / operator forces it to be converted '4' to a number`)

result = 4 + undefined;
console.log(`4 + undefined = result is: ${result}`)
console.log(`Reason: + tries to add numbers. 4 is a number. undefined cannot be converted to a valid number → becomes NaN.`)
result = 4 - undefined;
console.log(`4 - undefined = result is: ${result}`)
console.log(`Reason: - tries to add numbers. 4 is a number. undefined cannot be converted to a valid number → becomes NaN.`)

result = true + undefined;
console.log(`true + undefined = result is: ${result}`)
console.log(`Reason: true is coerced to 1 ,undefined becomes NaN`)
result = null + undefined;
console.log(`null + undefined = result is: ${result}`)
console.log(`Reason:  null is coerced to 0, undefined becomes NaN, So: 0 + NaN = NaN`)