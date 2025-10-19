const prompt = require("prompt-sync")()
//Reversal of a string
// let str = "Charvi Khandar";
// let rev = " ";
// for(let i=str.length-1;i>=0;i--){
//     rev+=str.charAt(i)
// }
// console.log(rev)

//Palindrome or not
//First find the reverse of a string
//If the original string and the reverse of a string is equal/same, then the given string is palindrome

// let s = prompt("Enter a string to check: ")
// let reverse = ""
// for(let i = s.length-1;i>=0;i--){
//     reverse+=s.charAt(i)
    
// }
// console.log( reverse)
// if(reverse===s) console.log("The string is palindrome.")
// else {console.log( "The string is not a palindrome.")}

//Optimised version of checking palindrome of a string

let s = "abba"
let i=0
let j = s.length-1
let ispalindrome = true
while(i<j){
    if(s.charAt(i)!==s.charAt(j)){
        ispalindrome = false;
        break;
    }
    i++,j--;
    
}
if(ispalindrome) console.log("Palindromic string.")
    else console.log("Not a palindromic string.")

//Toggle character

let inp  = prompt("Enter a string to be toggled : ");
let toggle = ""
for(let i=0; i<=inp.length;i++){
    let ch = inp.charCodeAt(i);

    if(ch>=65 && ch<=90) toggle += String.fromCharCode(ch+32)
        else if(ch>=97 && ch<=122) toggle += String.fromCharCode(ch-32)
}
console.log(inp);
console.log(toggle);

//Frequency of a character

let str = prompt("Enter a string to calculate its frequency : ")
let obj = {}
for(let s of str){
    if(obj[s]){
        obj[s]+=1
    }
    else{
        obj[s] = 1
    }
}
console.log(str)
console.log(obj)