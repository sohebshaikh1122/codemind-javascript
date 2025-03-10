console.log(`========================= Task 1 ==============================`);
console.log(`Given Array :- [20,11,40,25,23,11,9,31,60,2,19]`);
console.log(`---log the array adding 10 in each element using map arrow function------`);

const arrayNumber =[20,11,40,25,23,11,9,31,60,2,19];
const ans=arrayNumber.map(element => {

    element=element+10;
    return element;
});
console.log(ans);

console.log(`========================= Task 2 ==============================`);
console.log(`Given Array :- [20,11,40,25,23,11,9,31,60,2,19]`);
console.log(`----------- cube of the array using map arrow function--------`);

const cube=arrayNumber.map((Element)=>
{
    
    return Element * Element * Element;
})
console.log(cube);

console.log(`========================= Task 3 ==============================`);
console.log(`Given Array :- [20,11,40,25,23,11,9,31,60,2,19]`);
console.log(`-----add element and index into the array using map arrow function----`);
const addtion = arrayNumber.map((Element,index)=>
{
    return index + Element ;
})
console.log(addtion);






