function squareOfWordCount(sentence) {
  var words = sentence.split(" ");        
  var wordCount = words.length;          
  var square = wordCount * wordCount;     
  return square;
}

var sentence = "javascript";
var word = sentence.split("  ")
console.log("word length is:", word)
var result = squareOfWordCount(sentence);
console.log("square of word is:", result);

var sentence2 = "Google chrome";
var word = sentence2.split(" ")
console.log("word length is:", word)
var result = squareOfWordCount(sentence2);
console.log("square of word is:", result);

var sentence3 = "web developer smart";
var word = sentence3.split(" ")
console.log("word length is:", word)
var result = squareOfWordCount(sentence3);
console.log("square of word is:", result);

console.log(`=======TASK 2================`)
var str = "I am MERN Stack Developer"
var strLength = str.length;
console.log("String Length ", strLength )
var wordOfCourse = str.split(" ")
console.log("String word ", wordOfCourse )
console.log("Total number of words:", wordOfCourse.length);
console.log(`===========divide======`)
var result = strLength / wordOfCourse.length;
console.log(`Division:  ${result}`);
console.log(`===========Multiplication======`)
var result = strLength * wordOfCourse.length;
console.log(`Division:  ${result}`);