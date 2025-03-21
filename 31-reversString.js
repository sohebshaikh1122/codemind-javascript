console.log(`---------------`);
console.log(`i/p=== i love india`);
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; 
    }
    return reversed;
}

let str1 = "i love india";
let output = reverseString(str1);
console.log(`o/p--- ${output}`); // Output: "behos"

console.log(`==============================================================`);
console.log(`i love india`);

function reverseWords(str1) {
    let words = [];
    let word = "";
    
    // Extract words from the string manually
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== ' ') {
            word += str1[i];
        } else if (word.length > 0) {
            words.push(word);
            word = "";
        }
    }
    if (word.length > 0) {
        words.push(word); // Push the last word
    }

    // Manually reverse the words array
    let result = "";
    for (let i = words.length - 1; i >= 0; i--) {
        result += words[i];
        if (i >= 0) {
            result += " "; // Add space between words
        }
    }
    
    return result;
}
let str = " I love india ";
console.log(reverseWords(str)); // Output: "india love I"