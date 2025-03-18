function prime(num) {
    for (let index = 2; index < num; index++) {
       if (num%index==0) {
        return false
       }
        
    }
    return true
}

const array =[3,9,7,6,19,29,53];
let count=0;
for (let index = 0; index < array.length; index++) {
    if (prime(array[index])) {
        count++;
    }  
}
console.log(`The given array:`);
console.log(array);
console.log(`------------------`);
console.log(`The count of prime number : ${count}`);
