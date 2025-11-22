//Next Permutation - medium level problem

//Step 1 : Find the pivot element.
//Step 2 : If pivot exists, find the next greatest element and swap.
//Step 3 : reverse the rest of the array

function nextPermutation(nums){
    //Step 1
    let i = nums.length-2;
    while(i>=0 && nums[i]>=nums[i+1]){i--;};
    //Step 2 
    if(i>=0){
        let j = nums.length-1;
        while(nums[j]<nums[i]){
            j--;
        }
        //Swap
        [nums[i],nums[j]] = [nums[j],nums[i]];

    }
    //Step 3
    let left = i+1;
    let right = nums.length-1;
    while(left<right){
        [nums[left],nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
    console.log(nums);
}
nextPermutation([1,2,3])
