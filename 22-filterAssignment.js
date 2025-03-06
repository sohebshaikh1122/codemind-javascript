console.log(`========================= Task 1 ==============================`);
console.log(`Given array:- [20,11,40,25,37,49,9,90,60,2,19] `);
console.log(`-----log the element which greter than 50 using filter () method----`);
const arrayNumber =[20,11,40,25,37,49,9,90,60,2,19];
arrayNumber.filter((Element)=>
{
    if (Element>50) {
        console.log(Element); 
    }
})
console.log(`========================= Task 2 ==============================`);
console.log(`Given array:- [20,11,40,25,37,49,9,90,60,2,19] `);
console.log(`-----log the even element using filter () method------..`);

arrayNumber.filter((Element)=>
{
    if (Element%2==0) {
        console.log(Element);
        
    }
})
console.log(`========================= Task 3 ==============================`);
console.log(`Given array:- [20,11,40,25,37,49,9,90,60,2,19] `);
console.log(`-----------log the odd element using filter () method -----------`);

arrayNumber.filter((Element)=>
{
    if (Element%2==1) {
        console.log(Element);
        
    }
})
console.log(`========================= Task 4 ==============================`);
console.log(`Given array:- [20,11,40,25,37,49,9,90,60,2,19] `);
console.log(`----------log the element which multiple by 5 using filter method -----------`);

arrayNumber.filter((Element)=>
{
    if (Element%5==0) {
        console.log(Element);
        
    }
})
console.log(`========================= Task 5 ==============================`);
console.log(`Given array:- [20,11,40,25,37,49,9,90,60,2,19] `);
console.log(`-------log the element between 20 to 50 -----------`);

arrayNumber.filter((Element)=>
{
    if (Element>20 && Element<50) {
        console.log(Element);
        
    }
})