//Reverse an array using recursion

function rev(i,j,arr){
if(i>=j) return;
else{
[arr[i],arr[j]] = [arr[j],arr[i]]
rev(i+1,j-1,arr);
}
}
let arr = [1,2,3,4,5]
console.log(rev(0,arr.length-1,arr))
console.log(arr)

//Check whether the string is a palindrome or not.

function isPalindrome(str, i=0,j=str.length-1){
if(i>=j) return true;
if(str[i]!==str[j]) return false;
return isPalindrome(str,i+1,j-1);
}
console.log(isPalindrome("madm"));