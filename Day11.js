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


//Leaders in an Array
//The question says that if the current element is greater than the rest of the elements to its right than it is the leader el.
//Intuition:
//It is observed that the last element will always be a leader, so we will first push it into the leaders array and then we will reverse traverse from it and will compare if the current element is greater than or equal to the last element. If the condition satisfies that particular element will be pushed into the array and also it will be the next leader element for comparison.

let arr=[16,17,4,3,5,2];
let leaders=[];
let leaderEl = arr[arr.length-1];
leaders.push(leaderEl);
for(let i = arr.length-2;i>=0;i--){
    if(arr[i]>=leaderEl){
        leaders.push(arr[i]);
        leaderEl = arr[i];
    }
    
}
console.log(leaders.reverse());