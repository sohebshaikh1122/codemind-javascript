function jenny(callback) {
    console.log("Jenny went home and had snacks");
    console.log("Jenny started homework preparation");
    console.log("After 2 hours she completed her homework");

    callback(); // Execute the callback function
    
    return function() {
        console.log("Hey buddy... I am back...");
    };


   
}

let elon = function() {
    console.log("********** Elon went home and had snacks **********");
    console.log("********** Elon went to play a match **********");
    console.log("********** Elon came back and started copying homework **********");
    console.log("********** Elon completed his homework **********");
};

let result = jenny(elon);
console.log(`--------------------------------`);

