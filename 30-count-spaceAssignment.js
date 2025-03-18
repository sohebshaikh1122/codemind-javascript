function spaceCount(str) {
    console.log(`Given String:`);
    console.log(str);
    console.log(`----------------------------`);
    console.log(`Total count of space:`);

    // let str_array=str.split("");
    
    let space_count=0;
    for (let index = 0; index < str.length; index++) {
        if (str[index]===" ") {
            space_count ++ ;
        }
    }
     return space_count;
}
console.log(spaceCount("Revision is the mother of success"));
console.log(`========================================================`);
console.log(spaceCount("JavaScript is the language of internet world"));


