
const prompt = require("prompt-sync")();

// //Take n values from prompt and store them in the array
// let n = +prompt("Enter the size of array : ");
// let arr2 = [];
// for(let i=0; i<n;i++){
//     arr2[i] = +prompt(`Enter ${i}th element : `)
// }
// console.log(arr2)

// //Find the sum of n numbers stored in an array
//  let arr = [];
// let sum = 0;
//  for(let i=0; i<5;i++){
//     arr[i] = +prompt(`Enter ${i}th element : `)
//     sum+= arr[i]
//  }
//  console.log(arr)
//  console.log(sum
//  )

 //find the minimum number from the given array
// let arr1 = [2,1,78,34,67,23]
// let min = arr1[0];
// for(let i=0; i<arr1.length;i++){
//     if(arr1[i]<min){
//         min = arr1[i]
//     }
// }
// console.log(min)

//Find the maximum number from array
// let arr2 = [12,45,23,57,34,89]
// let max = arr2[0]
// for(let i=0; i<arr2.length;i++){
//     if(arr2[i]>max){
//         max = arr2[i]
//     }
// }
// console.log(max)

//Find the second maximum number from array
let arr = [3,4,56,7,8,91]
let max = Math.max(arr[0],arr[1]) //4
let smax = Math.min(arr[0],arr[1]) //3

for(let i =2;i<arr.length;i++){
    if(arr[i]>max){
        smax = max
        max = arr[i]
    }
    else if(arr[i]>smax){
        smax = max
    }
}
console.log(`The second largest number is ${smax}`)

//Find the second minimum value from array
let array = [2,5,3,9,8,14]

let min = Math.min(array[0],array[1]) //2
let smin = Math.max(array[0],array[1]) //5
for(let i=2;i<array.length;i++){
    if(array[i]<min){
       min = smin
        min = array[i]
    }
    else if(array[i]<smin){ //3<5
        min = smin
        min = array[i] //2
    }
}
console.log(`The second smallest number is : ${min}`)