const arrayNumbers =[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`=============== Task 1 =======================`);
console.log(`Log the Element and Index of given array`);
arrayNumbers.forEach((Element , index)=>
{
    console.log(`${Element} ==> ${index}`);
    
})
console.log(`=============== Task 2 =======================`);
console.log(`log positive number only using arrow fuction:`);
arrayNumbers.forEach((Element)=>
{
    if (Element>0) {
        console.log(Element);
        
    }
})
console.log(`=============== Task 3 =======================`);
console.log(`Log negative number , add into array and log new array using arrow function`);
let array_negative =[];  
arrayNumbers.forEach((Element ,index, arrayNumbers)=>
{
    if (Element<0) {
        array_negative.push(Element)
    }
})
console.log(array_negative);

console.log(`=============== Task 4 =======================`);
console.log(`Log even number in given Array`);
arrayNumbers.forEach((Element)=>
{
    if (Element%2==0) {
        console.log(Element); 
    }
})
console.log(`=============== Task 5 =======================`);
console.log(`Sum of given Array:`);
let sum=0;
arrayNumbers.forEach((Element)=>
{
    sum=sum+Element
})
console.log(sum);
console.log(`=============== Task 6 =======================`);
console.log(`log even index only`);
arrayNumbers.forEach((Element , index)=>
{
    if (index%2==0) {
        console.log(`index ${index} == > element ${Element}`);
        
    }
})









