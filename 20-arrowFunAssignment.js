console.log(`======================== Task 1 ==========================================`);
console.log(`-----No argument function with no return type-:-----`);
let msg=()=>
{
    console.log(`Good Morning , Today is Wednesday`);
}
msg()
console.log(`======================== Task 2 ==========================================`);
console.log(`-----3 argument with no return type------`);

let multiply = (n1,n2,n3=1)=>
{
    let ans = n1*n2*n3;
    console.log(`The multiplication of Three value:`);
    console.log(ans);  
}
console.log(`values:====>5,5,2`);
multiply(5,5,2)
console.log(`-------------------------`);
console.log(`values "default value=1"===>:10,4`);
multiply(10,4)

console.log(`======================== Task 3 ==========================================`);
console.log(`------5 argument with return type------`);

let addition = (n1,n2,n3,n4,n5) =>
{
    return n1+n2+n3+n4+n5;
}
let result = addition(100,100,200,349,756)
let str_result=addition("I am ","learning"," ES6"," features"," in depth");
console.log(`The Addtion of 5 Element:`);
console.log(result);
console.log(`-------------------`);
console.log(`The Concat the given String:`);
console.log(str_result);




