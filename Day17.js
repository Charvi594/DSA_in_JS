//Reverse a string using Recursion

function rev(arr,left,right){
if(left>=right) return arr.join("");

[arr[left],arr[right]] = [arr[right],arr[left]];

return rev(arr,left+1,right-1);
}
let str = "Charvi";
let arr = str.split("");
console.log(rev(arr,0,arr.length-1));