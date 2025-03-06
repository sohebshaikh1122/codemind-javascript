
console.log(`========================== Task 1 ==============================`);
console.log(`---------- Sum of all number using reduce () method -------`);
console.log(`Given Array:= [20,11,40,25,37,49,9,90,60,2,19];`);

const array_numbers = [20,11,40,25,37,49,9,90,60,2,19];
const ans=array_numbers.reduce((runningTotal , Element)=>
{
     return runningTotal + Element ;
     
},0);
console.log(`sum of array:`);
console.log(ans);
console.log(`------------Sum of all number using  traditional way----------`);
let ans1 =0;
for(let i=0 ; i<array_numbers.length ;i++)
{
    ans1=ans1 + array_numbers[i];
}
console.log(ans1);

console.log(`========================== Task 2 ==============================`);
console.log(`Given Array:= [20,11,40,25,37,49,9,90,60,2,19];`);
console.log(`------------  multiple of 5  and sum of the array using reduce() method-----------`);

const multiple_by_five= array_numbers.filter((Element)=>
{
    if (Element%5==0) {
        return Element;
    }
})
console.log(multiple_by_five);
console.log(`sum of above array...`);

const total=multiple_by_five.reduce((runningTotal ,element)=>
{
   return runningTotal + element ;
})
console.log(total);

