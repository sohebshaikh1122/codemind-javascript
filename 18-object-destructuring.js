const student = {
    name: "Jenny",
    city: "Pune",
    age: 24,
    pin: 411057,
    country: "India",
    isMarried: true
}

let { name, city, age, country, isMarried,marks=0} = student;
console.log(name, city,age,country, isMarried);
console.log(marks); ///provide default value


console.log(`========== Array Destructuring with default value ==========`);
const [n1, n2, n3="MyLove", n4=1]= ["Jenny", "Elon", "Stew"];
console.log(n1,n2,n3,n4);

var array = ["Jenny", "Elon", "Stew"];
var [ n11, n22, n33="MyLove", n44=1] = array;
console.log(n11,n22,n33,n44);
console.log(array);



