function palindrome(str) {
    let reverse="";
    for(let i=str.length-1;i>=0;i--)
    {
        reverse=reverse + str.charAt(i);
        // console.log(reverse);
    }
    str=str.toLowerCase();
    reverse=reverse.toLowerCase();    
    if(str===reverse)
    {
        console.log("It is a palindrome String:");
        
    }
    else
    {
        console.log("It is not a palindrome string:");
        
    }
}
console.log(`Given string is :"Madam"`);
palindrome("Madam");
console.log(`-----------------`);
console.log(`Given string is :"141"`);
palindrome("141");
console.log(`-----------------`);
console.log(`Given string is :"Sunday"`);
palindrome("sunday");
console.log(`-----------------`);
console.log(`Given string is :"Mom"`);
palindrome("mom");
console.log(`-----------------`);
console.log(`Given string is :"Listen"`);
palindrome("Listen");
console.log(`-----------------`);
console.log(`Given string is :"Dad"`);
palindrome("dad");
