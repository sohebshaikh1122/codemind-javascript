class College
{
    // Data Member
    collegeName
    cityName
    noOfStudent
    university

    // constructor
    constructor(collegeName,cityName,noOfStudent,university)
    {
        this.collegeName=collegeName;
        this.cityName=cityName;
        this.noOfStudent=noOfStudent;
        this.university=university;
    }
    // Methods
    display()
    {
        console.log(`College Name : ${this.collegeName}, City Name : ${this.cityName}, No of Student : ${this.noOfStudent}, University : ${this.university}`);
        
    }
    
}
console.log(`.............Information of College............`);

const collegeInfo1=new College("COEP","PUNE",2000,"Savitribai phule");
collegeInfo1.display()
console.log(`===============================================================================================================`);

const collegeInfo2=new College("MIT","Banglore",3000,"Tilak Univer.");
collegeInfo2.display()
console.log(`===============================================================================================================`);
const collegeInfo3=new College("FC","Deccan",2500,"Tata Institute of social science");
collegeInfo3.display()
console.log(`===============================================================================================================`);
const collegeInfo4=new College("IIT","Mumbai",5000,"Maharashatra University of Health Science");
collegeInfo4.display()
