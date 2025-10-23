let str = "A man, a plan, a canal, Panama!";
str = str.toLowerCase();
str = str.replace(/[^a-z0-9]/g, ""); // "amanaplanacanalpanama"

let vowels = 0, consonants = 0;
let i = 0, j = str.length - 1;
let isPalindrome = true;

while(i <= j){
    if(str.charAt(i) !== str.charAt(j)){
        isPalindrome = false;
    }

    if("aeiou".includes(str.charAt(i))) vowels++;
    else if(str.charAt(i) >= 'a' && str.charAt(i) <= 'z') consonants++;

    if(i !== j){
        if("aeiou".includes(str.charAt(j))) vowels++;
        else if(str.charAt(j) >= 'a' && str.charAt(j) <= 'z') consonants++;
    }

    i++;
    j--;
}

console.log(vowels, consonants, isPalindrome);
// Output: 10 11 true

//Reverse only letters in a string.
let string = "a-bC-dEf-ghIj";
let arr = string.split("")
let a=0,b= string.length-1;
while(a<=b){
    if(!/[a-zA-Z]/.test(arr[a])){
        a++;
        continue;
    }
     if(!/[a-zA-Z]/.test(arr[b])){
        b--;
        continue;
    }
   let temp = arr[a]
   arr[a] = arr[b]
   arr[b] = temp;
    a++;
    b--;
}
console.log(arr.join(""))
