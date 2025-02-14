var s1="   Hey you are doing good, keep it up   ";
console.log(`==================1=================`);
console.log(`Given String is:${s1}`);
console.log(`==================2=================`);
console.log(`The length of String: ${s1.length}`);
console.log(`==================3=================`);
var result=s1.trim();
console.log(`Remove the leading and tralling extra spaces:`);
console.log(`Result string : ${result}`);
console.log(`length: ${result.length}`);
console.log(`==================4=================`);
var space=s1.length-result.length;
console.log(`The total extra spaces count : ${space}`);
console.log(`==================5=================`);
console.log(`The first letter :${result.charAt(0)} and Last letter : ${result.charAt(result.length-1)}`);
console.log(`==================6=================`);
var array1 = result.split(" ");
console.log(`count of words : ${array1.length}`);
console.log(`==================7=================`);
console.log(`Index of good : ${result.indexOf("good")}`);
console.log(`==================8=================`);
console.log(`substring from idex 22  : ${result.substring(22)}`);
console.log(`==================9=================`);
var end =result.endsWith("up")
console.log(`check the string ends with word up : ${end}`);
console.log(`==================10=================`);
var start = result.startsWith("Hey");
console.log(`check the string start with word Hey: ${start}`);













