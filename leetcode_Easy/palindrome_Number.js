// https://leetcode.com/problems/palindrome-number/
// Given an integer x, return true if x is palindrome integer.

isPalindrome = (x) => {
    // check if the number is negative, if so then you know the # is not a palindrome
    if (x < 0){
        return(false)
    }
    // convert x to a string 
    intString = x.toString() 
    // looping through the string, compare the strings position to it's same at the end, x[y] to x[x.length - 1 - y]
    for (let x = 0; x < intString.length; x++){
        // comparing two values using charAt(). if the values do not match then return false as the number is not a palindrome
        if(intString.charAt(x) !== intString.charAt((intString.length - 1 - x))){
            return(false);
        }
    }
    return(true);

}

console.log(isPalindrome(1212121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(942060249));
console.log(isPalindrome(496846543651));

