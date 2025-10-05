const prompt = require("prompt-sync")();
let arr = [1,2,3,4,5]

//Move the elements to left by 1 place

let copy = arr[0]
for(let i=0; i<arr.length;i++){
    arr[i] = arr[i+1]
}
arr[arr.length-1] = copy

console.log(arr)

//Move the elements to the right by one place

let copy2 = arr[arr.length-1]
for(let i = arr.length-1;i>=0;i--){
    arr[i] = arr[i-1]
}
arr[0] = copy2
console.log(arr)

//Move the elements to the left by n place

let n = +prompt("Enter the number by which you want to rotate the array : ")
n = n%arr.length
for(let i=0;i<n;i++){
    let copy = arr[0]
    for(let j=0;j<arr.length-1;j++){
        arr[j] = arr[j+1]
    }
    arr[arr.length-1] = copy
}

console.log(arr)

// Optimized version of  above problem :Modular indexing
let arr1 = [1,2,3,4,5]
let temp = new Array(arr1.length)
let k = +prompt("Enter the value of k to specify the rotations : ")
k = k%arr1.length
for(let i=0; i<arr1.length;i++){
  temp[(i+k)%arr1.length]= arr1[i] 
}
console.log(temp)

//For left
let arr2 = [1,2,3,4,5]
let temp2 = new Array(arr2.length)
let m = +prompt("Enter the value of m : ");
m%=arr2.length
for(let i = 0; i<arr2.length;i++){
    temp2[i] = arr2[(i+m)%arr2.length]
}
console.log(temp2)

//More optimized version : Reversal algorithm
let ay = [1,2,3,4,5]
let a = +prompt("Enter the value of rotations : ")
a%=ay.length
reverse(0,a-1)
reverse(a,ay.length-1)
reverse(0,ay.length-1)
console.log(ay)
function reverse(i,j){
    while(i<j){
        let temp = ay[i];
        ay[i] = ay[j]
        ay[j] = temp;
        i++;
        j--
    }
}