//Rearrange array elements by sign

//Brute force approach
function arrange(nums){
    let pos = new Array();
    let neg = new Array();
    let result =[];
    let i=0,j=0,k=0;

for(let i=0; i<nums.length;i++){
if(nums[i]>0){
    pos.push(nums[i]);
}
else if(nums[i]<0){
    neg.push(nums[i]);
}
}
while(i<pos.length && j<neg.length){
    result[k++] = pos[i++];
    result[k++] = neg[j++];
}
return result;

}
console.log(arrange([3,1,-2,-5,2,-4]))

//Optimal approach

function rearrange(array){
let result = [];
let i=0;
let j=1;
for(let arr of array){
    if(arr>0){
        result[i] = arr;
        i+=2
    }
    else {result[j] = arr;
        j+=2;
    }
}
return result;
}
console.log(rearrange([3,1,-2,-5,2,-4]))