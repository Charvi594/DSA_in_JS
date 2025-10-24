//Check whether the array is sorted and rotated
var check = function(nums){
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>nums[i+1]){
            count++
        }
    }
    if(count>1){
        return false
    }
    else{
        return true
    }
}
console.log(check([3,4,5,1,2]))