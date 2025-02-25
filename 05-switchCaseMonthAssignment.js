function monthOfYear(num) 
{
    switch (num) {
        case 1:
        {
            console.log(`${num}____January`);     
            break;
        }
        case 2:
        {
            console.log(`${num}____February`);    
            break;
        }
        case 3:
        {
            console.log(`${num}____March`);    
            break;
        }
        case 4:
        {
            console.log(`${num}____April`);    
            break;
        }
        case 5:
        {
            console.log(`${num}____May`);    
            break;
        }
        case 6:
        {
            console.log(`${num}____June`);    
            break;
        }
        case 7:
        {
            console.log(`${num}____July`);    
            break;
        }
        case 8:
        {
            console.log(`${num}____August`);    
            break;
        }
        case 9:
        {
            console.log(`${num}____September`);    
            break;
        }
        case 10:
        {
            console.log(`${num}____October`);    
            break;
        }
        case 11:
        {
            console.log(`${num}____November`);    
            break;
        }
        case 12:
        {
            console.log(`${num}____December`);    
            break;
        }
        default:
        {
            console.log(`Invalid Data`);
            break;
        }
    }
    
}
console.log(`Passing month value:0`);
monthOfYear(0) 
console.log(`-----------------------`);
console.log(`Passing month value:2`);
monthOfYear(2) 
console.log(`-----------------------`);
console.log(`Passing month value:5`);
monthOfYear(5) 
console.log(`-----------------------`);
console.log(`Passing month value:12`);
monthOfYear(12)
console.log(`-----------------------`); 
console.log(`Passing month value:15`);
monthOfYear(15)
console.log(`-----------------------`);
console.log(`Passing month value:100`); 
monthOfYear(100) 