let professor=
{
    name:"stew",
    age:35,
    subject:"computer science",
    college:"COEP",
    address:"pune",
    degrees:
    {
        engineering:"CSC",
        PHD:"ADv computing",
        HSC:"CBSC"
    },
    certificates:["Hacker rank participation","Certificate in IFE Course" ,"Certificate in Adv programming"]
}

console.log(`========================================== Task 1 =======================================================`);
console.log(`Ading 5 properties:`);
console.log(professor);
console.log(``);
console.log(`========================================== Task 2 =======================================================`);
console.log(`Nested object:"degrees":`);
console.log(professor.degrees);
console.log(``);
console.log(`========================================== Task 3 =======================================================`);
console.log(`Adding array in object:`);
console.log(professor.certificates);
console.log(``);
console.log(`========================================== Task 4 =======================================================`);
console.log(`Object created sucefully`);
console.log(``);
console.log(`========================================== Task 5 =======================================================`);
console.log(`Adding New property in object:`);
professor.totalEperince = "14 year";
console.log(`totalExperince:${professor.totalEperince}`);
console.log(``);
console.log(`========================================== Task 6 =======================================================`);
console.log(`Modify "Name" property in object:`);
console.log(`Before Modify:`);
console.log(professor);
professor.name="Elon";
console.log(`After Mofify:`);
console.log(professor);
console.log(``);
console.log(`========================================== Task 7 =======================================================`);
console.log(`Adding new certificate in array in 2nd position:`);
console.log(`Before Adding:`);
console.log(professor.certificates);
console.log(`After Adding:`);
professor.certificates.splice(2,0,"Oracle Certificate")
console.log(professor.certificates);
console.log(``);
console.log(`========================================== Task 8 =======================================================`);
console.log(`Log last element of array:`);
let element=professor.certificates.slice(3);
console.log(element);
console.log(``);
console.log(`========================================== Task 9 =======================================================`);
console.log(`Log Complete object using for in loop`);
for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key}==>${element}`);
        
    }
}




























