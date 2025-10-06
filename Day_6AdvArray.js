const prompt = require("prompt-sync")();
// let arr = [1,2,3,4,5]

// //Move the elements to left by 1 place

// let copy = arr[0]
// for(let i=0; i<arr.length;i++){
//     arr[i] = arr[i+1]
// }
// arr[arr.length-1] = copy

// console.log(arr)

// //Move the elements to the right by one place

// let copy2 = arr[arr.length-1]
// for(let i = arr.length-1;i>=0;i--){
//     arr[i] = arr[i-1]
// }
// arr[0] = copy2
// console.log(arr)

// //Move the elements to the left by n place

// let n = +prompt("Enter the number by which you want to rotate the array : ")
// n = n%arr.length
// for(let i=0;i<n;i++){
//     let copy = arr[0]
//     for(let j=0;j<arr.length-1;j++){
//         arr[j] = arr[j+1]
//     }
//     arr[arr.length-1] = copy
// }

// console.log(arr)

// // Optimized version of  above problem : Modular indexing
// let arr1 = [1,2,3,4,5]
// let temp = new Array(arr1.length)
// let k = +prompt("Enter the value of k to specify the rotations : ")
// k = k%arr1.length
// for(let i=0; i<arr1.length;i++){
//   temp[(i+k)%arr1.length]= arr1[i] 
// } 
// console.log(temp)

// //For left
// let arr2 = [1,2,3,4,5]
// let temp2 = new Array(arr2.length)
// let m = +prompt("Enter the value of m : ");
// m%=arr2.length
// for(let i = 0; i<arr2.length;i++){
//     temp2[i] = arr2[(i+m)%arr2.length]
// }
// console.log(temp2)

// //More optimized version : Reversal algorithm
// let ay = [1,2,3,4,5]
// let a = +prompt("Enter the value of rotations : ")
// a%=ay.length
// reverse(0,a-1)
// reverse(a,ay.length-1)
// reverse(0,ay.length-1)
// console.log(ay)
// function reverse(i,j){
//     while(i<j){
//         let temp = ay[i];
//         ay[i] = ay[j]
//         ay[j] = temp;
//         i++;
//         j--
//     }
// }

//Remove duplicates from array

// let array = [0,0,1,1,1,2,2,3];
// let j = 0;
// let count = 1;
// for (let i = 1; i < array.length; i++) {
//     if (array[i] != array[j]) {
//         j++;
//         array[j] = array[i];
//         count++;
//     }
// }
// console.log(`The number of unique elements are ${count}`)
// console.log(array.slice(0, j + 1)); // [0,1,2,3]

//Merge sorted array
let arr1 = [2,5,6];
let arr2 =[1,3,4,8];
let merge = new Array(arr1.length+arr2.length)
let i=0,j=0,k=0

while(i<arr1.length&&j<arr2.length){
    if(arr1[i]>arr2[j]){
        merge[k++] = arr2[j++]
    }
    else{
        merge[k++] = arr1[i++]
    }
}
while(j<arr2.length){
     merge[k++] = arr2[j++]
}
while(i<arr1.length){
     merge[k++] = arr1[i++]
}

console.log(merge)

//Find the maximum profit from the given set of prices of stock 
//Best time to buy and sell stock

let maxProfit = function(prices){
    let maxProfit = 0;
    let min = prices[0]
    for(let i=0; i <prices.length;i++){
        if(prices[i]<min) min = prices[i]
       let profit = prices[i] - min;
        maxProfit = Math.max(profit,maxProfit)
    }
    return maxProfit
}

console.log(maxProfit([7,1,5,3,6,4]))