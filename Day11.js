//Find the number of maximum consecutive ones.
//Logic
//Here, we will iterate through a loop and whenever i == 1, its count will be incremented and when any other number comes, the count will be reset to 0. We will make a maxCount variable also that will store the maximum count by using Math.max() function and then return the maximum value.

var findMax = function(nums){
    let count = 0;
    let maxCount = 0;
    for(let i =0; i<nums.length;i++){
        if(nums[i]===1){
            count++;
            maxCount = Math.max(count,maxCount);
        }
        else{
            count=0;
        }
    }
    return maxCount;
}
console.log(findMax([1,1,0,1,1,1]))
console.log(findMax([1,0,1,1,0,1]))