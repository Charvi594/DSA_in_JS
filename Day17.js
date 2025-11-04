//Reverse a string using Recursion

function rev(arr,left,right){
if(left>=right) return arr.join("");

[arr[left],arr[right]] = [arr[right],arr[left]];

return rev(arr,left+1,right-1);
}
let str = "Charvi";
let arr = str.split("");
console.log(rev(arr,0,arr.length-1));

//Return unique element from an array (even duplicates)

let array = [1,6,3,3,2,6,7,1];

let set = new Set();
for(let i=0; i<array.length;i++){
    if(set.has(array[i])){
        set.delete(array[i])
    }
    else{
        set.add(array[i])
    }
}
console.log(set)

//Keep only unique elements

let nums = [1,2,3,1,2,3,4,5,4];
let hashset = new Set(nums);
console.log(hashset);

//Check if the string is Pangram;

let sentence = "leetcodeaaaaaaaaaaaaaaaaaa";

let sets = new Set(sentence)
if(sets.size==26){
    console.log("Pangram hai");
}
else{
    console.log("Nhi hai bhai Pangram.")
}

//Return unique elements from an array (odd duplicates)\

let ar = [2,2,3,4,4,4,5];

let map = new Map();

for(let a of ar){
    map.set(a,(map.get(a)||0)+1);
}

const res = [];

for(let [key,val] of map){
    if(val==1) res.push(key)
}
console.log(res);