// //Maximum sum from subarray

// let nums = [-2,1,-3,4,-1,2,1,-5,4]
// let sum = 0;
// let maxSum = -Infinity

// for(let i=0;i<nums.length;i++){
//     sum+=nums[i]
//      if(sum < 0) sum =0
//      maxSum = Math.max(sum,maxSum)
   
   
// }
// console.log(maxSum);

// //Return the majority element - Moore's algorithm

// let num = [2,2,1,1,1,2,2]
// let ans = num[0]
// let count = 1
// for(let i=0;i<num.length;i++){
//     if(count==0) ans = num[i]
//     else if(num[i] == ans) count++
//     else count--  
// }
// console.log(ans)

// //Trapping the water
// var trap = function(height){ 
//     let left = new Array(height.length)
//     let right = new Array(height.length)
//     let maxLeft = height[0],  maxRight = height[height.length-1];
//     left[0] = maxLeft , right[right.length-1] = maxRight
//     for(let i = 1; i<height.length;i++){
//         maxLeft = Math.max(height[i],maxLeft)
//         left[i] = maxLeft
//     }
//     for(let i = height.length-2; i >=0;i--){
//         maxRight = Math.max(height[i],maxRight)
//         right[i] = maxRight
//     }
//     let ans = 0;
//     for(let i = 0;i<height.length;i++){
//         ans+= Math.min(left[i],right[i])-height[i]
//     }
//     return ans;
// }

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))

//Return a max subarray along with the maxsum

var maxArray = function(nums){
let sum = 0;
let maxSum = -Infinity
let tempStart , start , end = 0
for(let i=0;i<nums.length;i++){
    if(sum<0) {sum =0 
        tempStart = i;}
    sum+=nums[i]
    if(sum>maxSum){
        maxSum = sum
        start = tempStart
        end = i
    }
}
console.log(nums.slice(start,end+1),maxSum);

}

maxArray([-2,1,-3,4,-1,2,1,-5,4])

