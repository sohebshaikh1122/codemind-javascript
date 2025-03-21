console.log("===== Start ======");
var num = 10;
if (num%2==0) {
    console.log("EVEN");  
}
console.log("===== END =========");

console.log(`=======if else===========`);
var jobMila = false;
if (jobMila) {
    console.log("I will go to Dubai and 100 gm gold for me..");
} else {
    console.log("I wil go and eat Pani puri"); 
}

console.log(`=========Nested if  else========`);

function dreamJob(isGotPlacement){
    if (isGotPlacement) {
        console.log("I will buy clothes for my Family");
        var isMNC = true;
        if (isMNC) {
            console.log("I will have US Trip");  
        } else {
            console.log("I will GOA trip");   
        }
    } else {
        console.log('I will one Hanky for me'); 
    }
}
dreamJob(true);