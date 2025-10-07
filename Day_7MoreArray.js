//Maximum sum from subarray

let nums = [-2,1,-3,4,-1,2,1,-5,4]
let sum = 0;
let maxSum = -Infinity

for(let i=0;i<nums.length;i++){
    sum+=nums[i]
     if(sum < 0) sum =0
     maxSum = Math.max(sum,maxSum)
   
   
}
console.log(maxSum);

//Return the majority element - Moore's algorithm

let num = [2,2,1,1,1,2,2]
let ans = num[0]
let count = 1
for(let i=0;i<num.length;i++){
    if(count==0) ans = num[i]
    else if(num[i] == ans) count++
    else count--  
}
console.log(ans)