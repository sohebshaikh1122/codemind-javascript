function isPalindrome(str) {
    console.log(`The given String:--- ${str} ---is palindrome:` );
    
    let left=0;
    let right=str.length-1;
    for (let index = 0; index < str.length; index++) {
        if (str[left]!=str[right]) {
          return false
        }
        left++;
        right--; 
        return true;
    }
    
}
console.log(isPalindrome("madam"));
console.log(`-------------------`);
console.log(isPalindrome("141"));
console.log(`-------------------`);
console.log(isPalindrome("sunday"));
console.log(`-------------------`);
console.log(isPalindrome("mom"));
console.log(`-------------------`);
console.log(isPalindrome("listen"));
console.log(`-------------------`);
console.log(isPalindrome("dad"));
