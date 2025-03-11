console.log(`------ Task 1 ------`);
console.log(`=== Store h1 element ===`);
const h1_element=document.querySelector("h1");
// console.log(h1_element);
console.log(`***** Inner Text ******`);
console.log(h1_element.innerText);

console.log(`------ Task 2 ------`);
console.log(`=== Store single list (li) element ===`);
const li_element= document.querySelector("#Available");
// console.log(li_element);
console.log(`***** Inner Text ******`);
console.log(li_element.innerText);

console.log(`------ Task 3 ------`);
console.log(`=== Store div  element ===`);
const div_element= document.querySelectorAll("#advantages");

for (const element of div_element) {
    console.log(element.innerText);
}








