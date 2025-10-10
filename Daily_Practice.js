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

// let arr1=[1,2,3,4,5]
// let temp = new Array(arr1.length)
// let n1 = +prompt("Enter the value of n : ")

// for(let i = 0; i<arr1.length;i++){
//     temp[i] = arr1[(i+n1)%arr1.length]
// }
// console.log(temp)

// //Reversal algorithm
// let arr = [1,2,3,4,5,6]
// let k = +prompt("Enter the value of k : ")
// k%arr.length
// function swap(i,j){
//     while(i<j){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j]= temp
//         i++;
//         j--;
//     }
// }
// swap(0,k-1)
// swap(arr.length-1)
// swap(arr.length-1)
// console.log(arr)

// //Remove duplicates from array
// let arr2 = [0,0,1,1,1,2,2,3]
// let j = 0;
// for(let i=0;i<arr2.length;i++){
//     if(arr2[i]!=arr2[j]){
//         j++;
//         arr2[j]=arr2[i]
//     }
// }
// console.log(arr2.slice(0,j+1))

//Merge and Sort array

let a1 = [2,5,6] 
let a2 = [1,3,4,8]
let merge = new Array(a1.length+a2.length)
let i=0,j=0,k=0;

while(i<a1.length && j<a2.length){
    if(a1[i]>a2[j]){
        merge[k++]=a2[j++]
    }
    else{
        merge[k]=a1[i]
        k++,i++
    }}

while(j<a2.length){

        merge[k]=a2[j]
    k++,j++
}
while(i<a1.length){
   
        merge[k]=a1[i]
    k++,i++
}
console.log(merge)