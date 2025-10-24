// //Check whether the array is sorted and rotated
// var check = function(nums){
//     let count = 0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]>nums[i+1]){
//             count++
//         }
//     }
//     if(count>1){
//         return false
//     }
//     else{
//         return true
//     }
// }
// console.log(check([3,4,5,1,2]))

// //Missing number 

// //1) Brute Force Approach(Nested Loops)
// // let nums = [0,3,5,1,4]
// // for(let i =1; i<=nums.length;i++){
// //     let flag = 0
// //     for(let j=0; j<nums.length;j++){  //Time Commplexity = O(n2), Space Complexity = O(1)
// //         if(nums[j]==i){
// //             flag = 1;
// //             break;
// //         }
// //     }
// //     if(flag==0){
// //         console.log(i);
// //     }
// // }

// //2) Better Solution(Hashing)

// var find = function(arr){
//     let hash = new Array(arr.length+2).fill(false)

//     for(let i=0;i<arr.length;i++){
//         hash[arr[i]] = true;
//     }
//     for(let i=1;i<=arr.length;i++){
//         if(hash[i]===false){
//             return i;
//         }
//     }
// }
// console.log(find([1,2,4,6,3,7,8]))

//Optimal Solution
//sum
var find = function(arr){
    let n = arr.length;
   let sum = (n*(n+1))/2
   let s2 = 0;
   for(let i=0;i<n;i++){
    s2+=arr[i]
   }
  let missing = sum - s2
 return{missing};
}
console.log(find([1,2,4,6,3,7,0]))

//XOR
var find = function(arr){
   let XOR1 = 0;
   for(let i=0;i<=arr.length;i++){
    XOR1^=i;
   }
   let XOR2 = 0;
   for(let i =0;i<arr.length;i++){
    XOR2^=arr[i];
   }
   return XOR1^XOR2;
}
console.log(find([1,2,4,6,3,7,0]))
