console.log(`------------ Task 1 --------------`);
function squareOWordLength(str)
{
    var len1=str.length;
    return len1;
}
var length1= squareOWordLength("JavaScript");
console.log(`Length of JavaScript word:`);
console.log(`${length1}`);
var square = length1*length1;
console.log(`Square of JavaScript WOrd:`);
console.log(`${square}`);
console.log(`****************************************************`);
var length1= squareOWordLength("Google Chrome");
console.log(`Length of Google Chrome word:`);
console.log(`${length1}`);
var square = length1*length1;
console.log(`Square of Google Chrome WOrd:`);
console.log(`${square}`);
console.log(`****************************************************`);
var length1= squareOWordLength("Web Developer Smart");
console.log(`Length of Web Developer Smart word:`);
console.log(`${length1}`);
var square = length1*length1;
console.log(`Square of Web Developer Smart Word:`);
console.log(`${square}`);

console.log(`------------ Task 2 --------------`);

var wordFormat=function()
{
    var str = "I am UI Developer";
    console.log(`Length of Given String: I am UI Developer:`);
    console.log(`${str.length}`);
    var word = str.split(" ");
    var result = word.length;
    console.log(`The total number of word in given String:I am UI Developer `);
    console.log(`${result}`);
    console.log(`****************************************************`);
    var division=str.length/result;
    console.log(`The result of division:`);
    console.log(`${division}`);
    var total= str.length * result;
    console.log(`Multiply by total words to Length of String`);
    console.log(`${total}`);  
}
wordFormat();
