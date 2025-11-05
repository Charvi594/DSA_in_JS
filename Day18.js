//Intersection of two arrays

let arr1 = [1,2,2,1];
let arr2 = [2,2];
 
let res = [];

let set = new Set(arr1);

for(let i =0; i<arr2.length;i++){
    if(set.has(arr2[i]) && !res.includes(arr2[i])){
        res.push(arr2[i]);
    }
}
console.log(res)