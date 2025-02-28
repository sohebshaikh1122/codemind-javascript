const employee_info=
`{
    "name" : "Aleix Melon",
    "id" : "E00245",
    "role": ["Dev", "DBA"],
    "Age" : 23,
    "dob" : "11-12-2019",
    "married" : false,
    "address" : 
    {
        "street" : "32, Laham st.",
        "city" : "Innsbruck",
        "Country" : "Austria"
    },
    "referred-by" : "E0012"
}`

const empobj=JSON.parse(employee_info);  // converting to object format
console.log(`Convert to Object format:`);
console.log(empobj);
console.log(`Datatype of "empobj:" ${typeof(empobj)}`);

console.log(`-------------------------------------------------------------`);
console.log(empobj.role);
console.log(`log on console ==> "Dev"`);
const array_role=empobj.role;
console.log(array_role[0]);
console.log(`-------------------------------------------------------------`);
console.log(empobj.name);
console.log(`log only last ==> "Melon"`);
const str_name=empobj.name;
const array_name=str_name.split(" ");
console.log(array_name[1]);
console.log(`-------------------------------------------------------------`);
console.log(empobj.dob);
console.log(`log joining year ==> 2019`);
const str_dob=empobj.dob;
const array_dob=str_dob.split("-");
console.log(array_dob[2]);


