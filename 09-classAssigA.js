class Vehicle {
    //Data members
    company
    model
    price
    vechNum
    color
    // constructor
    constructor(company,model,price,vechNum,color) {
        this.company=company;
        this.model=model;
        this.price=price;
        this.vechNum=vechNum;
        this.color=color;
    }
    //method
    details()
    {
        console.log(`company: ${this.company}, Model: ${this.model}, Price: ${this.price}, vechNum: ${this.vechNum}, Color: ${this.color}`);
        
    }
}
console.log(`=========Information about vehicle=========`);

const vechInfo1=new Vehicle("BMW","X7","1.5 cr","MH 02 l 0009","Black");
vechInfo1.details();
console.log(`****************************************************************************************`);

const vechInfo2=new Vehicle("Totota","Innova","40 lakh","MH 42 s 0027","white");
vechInfo2.details();
console.log(`****************************************************************************************`);
const vechInfo3=new Vehicle("Audi","Supra","3.5 cr","MH 01 k 7","Red");
vechInfo3.details();
console.log(`****************************************************************************************`);
const vechInfo4=new Vehicle("Tata","Safari","30 lakh","MH 50 c 3456 ","Black");
vechInfo4.details();
console.log(`****************************************************************************************`);
const vechInfo5=new Vehicle("Mahindra","XUV 700","40 lakh","MH 09 d 1009","Blue");
vechInfo5.details();



