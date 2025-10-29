//Two sum
let nums = [2,7,11,15], target = 9;
let map = new Map();
for(let i=0;i<nums.length;i++){
    let complement = target - nums[i];

    if(map.has(complement)){
        console.log([map.get(complement),i]);
    }
    map.set(nums[i],i)
}
//Three sum
let num = [-1, 0, 1, 2, -1, -4];
num.sort((a,b)=>a-b);
let res =[]

for(let i=0;i<num.length-1;i++){
    //Skip duplicates for first number
    if(i>0 && num[i]===num[i-1]) continue;

    let left = i+1;
    let right = num.length-1;

    while(left<right){
        const sum = num[i] + num[left] + num[right];

        if(sum==0){
            res.push([num[i],num[left],num[right]]);
            left++;
            right--;

            //Skip duplicates for left and right
            while(left<right && num[left]==num[left-1]) left++;
            while(left<right && num[right]==num[right-1]) right--;

        }
        else if(sum<0){
            left++;
        } else{
            right--;
        }
    }
}
console.log(res);