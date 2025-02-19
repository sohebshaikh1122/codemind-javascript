console.log(`============== Task 1 ============`);
function greaterNumber(n1,n2)
{
    var result=n1>n2?n1:n2;
    console.log(`The Greter number:${result}`);
}
greaterNumber(10,-10)
greaterNumber(800,899)
console.log(`============== Task 2 ============`);
function isEvenOrOddNum(num)
{
    var result=num%2==0 ? true : false;
    return result;
}
var ans=isEvenOrOddNum(29)
console.log(`The number 29: ${ans}`);
var ans=isEvenOrOddNum(44)
console.log(`The number 44:${ans}`);
var ans=isEvenOrOddNum(0)
console.log(`The number 0:${ans}`);
var ans=isEvenOrOddNum(101)
console.log(`The number 101:${ans}`);
console.log(`============== Task 3 ============`);
function wordLength(word)
{
    var length = word.length;
    var result=length%2==0? "Even" : "ODD";
    return result;
}
var ans=wordLength("javaScript")
console.log(`javascript word length : ${ans}`);
var ans=wordLength("developer")
console.log(`developer word length : ${ans}`);
var ans=wordLength("Google")
console.log(`Google word length : ${ans}`);
