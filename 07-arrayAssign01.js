const fruits_seasonal=["Banana","orange","Apple","Mango","Water Melon"];
console.log(`--------- Task 1 -------------------`);
console.log(`Given array:${fruits_seasonal}`);
const first =fruits_seasonal.slice(0,1);
console.log(`The First element:${first}`);
const last=fruits_seasonal.slice(fruits_seasonal.length-1,)
console.log(`The last element is:${last}`);

console.log(`--------- Task 2 -------------------`);
console.log(`Before adding "papaya" element -----`);
console.log(fruits_seasonal);
fruits_seasonal.unshift("papaya");
console.log(`After adding "Papaya" element ------`);
console.log(fruits_seasonal);

console.log(`--------- Task 3 -------------------`);
console.log(`Given array:${fruits_seasonal}`);
fruits_seasonal.splice(4,1)
console.log(`Remove the "mango" in the array:${fruits_seasonal}`);

console.log(`--------- Task 4 -------------------`);
console.log(`Given array:${fruits_seasonal}`);
fruits_seasonal.push("pineapple");
console.log(`add "pineapple" to last:`);
console.log(fruits_seasonal);

console.log(`--------- Task 5 -------------------`);
console.log(`Given array:${fruits_seasonal}`);
fruits_seasonal.splice(4,0,"Dragon Fruit");
console.log(`add "Dragon Fruit" before the "Water melon" in the array:`);
console.log(fruits_seasonal);

console.log(`--------- Task 6 -------------------`);
console.log(`Given array:${fruits_seasonal}`);
fruits_seasonal.splice(2,1,"kiwi");
console.log(`Remove "orange" and add "kiwi":`);
console.log(fruits_seasonal);

console.log(`--------- Task 7 -------------------`);
console.log(`Given array:${fruits_seasonal}`);
const element=fruits_seasonal.slice(1,5);
console.log(`Log the elements starting from 1 to index 4`);
console.log(element);


console.log(`--------- Task 8 -------------------`);
console.log(`Given array:${fruits_seasonal}`);
let ans=fruits_seasonal.slice(fruits_seasonal.length-3)
console.log(`The last 3 elements:${ans}`);

