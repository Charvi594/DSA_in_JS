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

// //Merge and Sort array

// let a1 = [2,5,6] 
// let a2 = [1,3,4,8]
// let merge = new Array(a1.length+a2.length)
// var i=0,j=0,k=0;

// while(i<a1.length && j<a2.length){
//     if(a1[i]>a2[j]){
//         merge[k++]=a2[j++]
//     }
//     else{
//         merge[k]=a1[i]
//         k++,i++
//     }}

// while(j<a2.length){

//         merge[k]=a2[j]
//     k++,j++
// }
// while(i<a1.length){
   
//         merge[k]=a1[i]
//     k++,i++
// }
// console.log(merge)

// //Best time to buy and sell stocks. Find the maximum profit
// var maxProfit = function(prices){
//     let maxprofit = 0;
//     let min = prices[0]
//     for(var i = 0; i<prices.length;i++){
//         if(prices[i]<min) min = prices[i]
//         profit = prices[i] - min
//         maxprofit = Math.max(profit,maxprofit)
//     }
//     return maxprofit;
// }
// console.log(maxProfit([7,1,5,3,6,4]))

//Sort the colours
// var sortColors = function(nums){
//      var i=0,j=0,k=nums.length-1;
//     while(i<=k){
//         if(nums[i]==0){
//             let temp = nums[i]
//             nums[i] = nums[j]
//             nums[j] = temp
//             i++,j++
//         }
//         else if(nums[i]==2){
//             let temp = nums[i]
//             nums[i] = nums[k]
//             nums[k] = temp
//             k--
//         }
//         else{
//             i++
//         }
//     }
//     return nums;
// }

// console.log(sortColors([2,0,2,1,1,0]))

// //Merge sorted array(leetcode version)
// var merge = function(num1, m, num2,n){
// let i = m-1, j=n-1, k=m+n-1
// while(i>=0 && j>=0){
//     if(num1[i]>num2[j]){
//         num1[k--] = num1[i--]
//     }
//     else{
//         num1[k--] = num2[j--]
//     }
// }
// while(j>=0){
//     num1[k--]=num2[j--]
// }
// }
// let num1 = [1,2,3,0,0,0]
// merge(num1,3,[2,5,6],3)
// console.log(num1)

// //Remove duplicates from the array
// var removeDuplicates = function(num){
//     let j=0
//     for(let i=0;i<num.length;i++){
//         if(num[i]!=num[j]){
//             j++
//             num[j] = num[i]
//         }
//     }
//     return j+1
// }
// let num = [0,0,1,1,1,2,2,3,3,4]
// let k = removeDuplicates(num)
// console.log(num.slice(0,k))

// //Return maximum sum from subArray

// var maxSubArray = function(nums){
// let sum = 0;
// let start , end, tempS = 0;
// let maxSum = -Infinity;
// for(let i=0;i<nums.length;i++){
//     sum+=nums[i]
//     if(sum>maxSum){
//         maxSum = sum;
//         start = tempS;
//         end = i
//     }
//     if(sum<0){
//         sum = 0 ;
//         tempS = i+1
//     }

// }
// let subarray=nums.slice(start,end+1);
// return maxSum,subarray
// }
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

// //Return the majority element

// var majEl = function(num){
// let maj = num[0]
// count = 1
// for(let i=0; i<num.length;i++){
//     if(count == 0){
//         maj = num[i]
//         count++
//     }
//     else if(maj==num[i]) count++
//     else count--
// }
// return maj
    
// }
// console.log(majEl([2,2,2,1,1,2]))

//Trapping the water

// var trap = function(height){
//    let left = new Array(height.length)
//    let right = new Array(height.length)
//    let maxLeft = height[0], maxRight = height[height.length-1]
//    left[0] = maxLeft, right[right.length-1] = maxRight

//    for(let i=0;i<height.length;i++){
//     maxLeft = Math.max(height[i],maxLeft) 
//     left[i]=maxLeft
//    }
//    for(let i= height.length-2;i>=0;i--){
//     maxRight = Math.max(height[i],maxRight)
//     right[i] = maxRight
//    }
//    let ans = 0;
//    for(let i=0; i<height.length;i++){
//     ans+= Math.min(left[i],right[i])-height[i]
//    }
//    return ans
// }
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))

//Print pattern
//  var prints = function(n){
//    for(let i=1;i<=n;i++){
//       for(let j=1; j<n-i+1;j++){
//          process.stdout.write(j+"")
//       }
//      console.log("")
//    }
//  }
//  prints(5)

//  //Return majority element
//  var majElement = function (nums){
// let maj = nums[0]
// let count = 1;
// for(let i=0; i<nums.length;i++){
//   if(count==0) maj = nums[i]
//   else if(maj === nums[i]) count++
//   else count--
// }
// return maj
//  }
//  console.log(majElement([2,2,1,1,1,2,2]))

//  //Return majority element II

//  var maj = function(num){
//   let cand1 = null, cand2 = null, count1=0, count2 =0
//   for(let i=0;i<num.length;i++){
//     if(cand1 == num[i]) count1++
//     else if(cand2 == num[i]) count2++
//     else if(count1==0){
//       cand1 = num[i]
//       count1 = 1
//     }
//     else if(count2 == 0){
//       cand2 = num[i]
//       count2  = 1
//     }
//     else{
//       count1--;
//       count2--
//     }
//   }
//  count1 = count2 = 0 
// for(let i=0; i<num.length;i++){
//   if(cand1 == num[i]) count1++
//   else if(cand2 == num[i]) count2++
// }

// let res = []
// const n = num.length
// if(count1>Math.floor(n/3)) res.push(cand1)
//   if(count2> Math.floor(n/3)) res.push(cand2)
//     return res;
//  }
//  console.log(maj([2,2,1,1,1,2,2]))

 //Move zeroes to the end of the array keeping the order of other el unchanged.

 let arr = [0,1,0,3,12];
 let i=0, j=0;
 while(j<arr.length){
  if(arr[j]!==0){
    if(i!==j){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    i++;
  }
  j++;
 }
 console.log(arr)