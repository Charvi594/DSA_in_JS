let nums = [2,7,11,15], target = 9;
let map = new Map();
for(let i=0;i<nums.length;i++){
    let complement = target - nums[i];

    if(map.has(complement)){
        console.log([map.get(complement),i]);
    }
    map.set(nums[i],i)
}
