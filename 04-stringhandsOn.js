var str = "   Hey you are doing good, keep it up    ";
console.log(`====== 1Given string=====`);
console.log(`Given string is: ${str}`);
console.log(`===========2 Calculate the Length of string=========`);
console.log(`Length of string is: ${str.length}`);
console.log(`=====3. Remove the leading and trailing extra spaces=====`);
var strAfterTrim = str.trim()
console.log(`Remove the extra spaces: ${strAfterTrim}`)
console.log('=====4 Print the Extra spaces removed===')
trimResult = str.trim();
var totalRemovedSpaces = str.length - trimResult.length;
console.log(`RemovedExtra spaces: ${totalRemovedSpaces} `);
console.log(`====5. Print the first and last character===`)
var strAfterTrim = str.trim();
strAfterTrim.charAt(0);
console.log(`First character: ${strAfterTrim.charAt(0)}, Last character is: ${strAfterTrim.charAt(strAfterTrim.length-1)}`)
console.log(`=====5 count of total words======`)
var word = strAfterTrim.split(" ")
console.log(`total words is: ,${word}`)
console.log(`total word length: ${word.length}`)
// console.log(`Index of word:${}`)
// var greet = "Good Morning my buddy How are you!";
// var words = greet.split(" ");
// console.log(words);
console.log(`=====6 index of word “good”======`)
var indexOfGood = str.indexOf("good");
console.log(`Index of sub string "good" : ${indexOfGood} `);
console.log(`============8 Print the substring starting from index 22==========`)
var sub = str.substring(22)
console.log(`the substring starting from index 22: ${sub}`)
console.log(`=====9 Check, is string ends with word “up”=====`)
console.log(strAfterTrim.endsWith("up"))
console.log(`=====10 Check, is string start with word "Hey"=====`)
console.log(strAfterTrim.startsWith("Hey"))