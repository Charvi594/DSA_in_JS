const prompt = require("prompt-sync")()
// //Sort the colours
// let colours = [0,1,1,2,2,0,1,0,2]
// i=0;
// let j=0;
// let k = colours.length-1
// while(i<=k){
//     if(colours[i]==0){
//         let temp = colours[i]
//         colours[i] = colours[j]
//         colours[j] = temp
//         i++,j++
//     }
//     else if(colours[i]==2){
//         let temp = colours[i]
//         colours[i] = colours[k]
//         colours[k] = temp
//         k--
//     }
//     else{
//         i++
//     }
   
// }

// console.log(colours)

//Move the elements to  the right by n place

//Brute force

// let arr = [1,2,3,4,5,6]
// let n = +prompt("Enter the value of n : ")
// n%= arr.length

// for(let i=0;i<n;i++){
//      let copy = arr[arr.length-1]
//     for(let j=arr.length-1;j>=0;j--){
//         arr[j]=arr[j-1]
        
//     }
//     arr[0] = copy
// }
// console.log(arr)

//Modular Indexing

let arr1=[1,2,3,4,5]
let temp = new Array(arr1.length)
let n1 = +prompt("Enter the value of n : ")

for(let i = 0; i<arr1.length;i++){
    temp[i] = arr1[(i-n1)%arr1.length]
}
console.log(temp)