//Revision for DSA :
//Three sum equals to zero problem

let threeSum = function(nums){
nums.sort((a,b)=>a-b);
let res = [];

for(let i=0;i<nums.length;i++){
    if(i>0 && nums[i]===nums[i-1]) continue;

let left = i+1;
let right = nums.length-1;

while(left<right){
    let sum = nums[i]+nums[left]+nums[right];
    if( sum === 0){
        res.push([nums[i],nums[left], nums[right]]);
        left++;
        right--;
        while(left<right && nums[left]===nums[left-1]) left++;
        while(left<right && nums[right] === nums[right-1]) right--;
    }
    else if(sum<0) left++;
    else right--;
}}
return res;
}
console.log(threeSum([-1,0,1,2,-1,-4]))

//Recursion Practice
//Print numbers from 1 to n and n to 1.
function num(n,i){
    if(i>n) return;
    console.log(i);
    num(n,i+1);
}
num(10,1)

//Print numbers from n to 1

function count(i,n){
    if(n<i) return;
console.log(n);
count(i,n-1);
}
count(1,10)

//Print 1 to n using backtracking.
console.log("Numbers from 1 to n using backtracking : ");

function back(n, i){
    if(n<i) return;
back(n-1,i);
console.log(n);
}
back(10,1)
//Print n to 1 using backtracking.
console.log("10 to 1 using backtracking : ");
function backs(n,i){
    if(i>n) return;
backs(n,i+1);
console.log(i);
}
backs(10,1)

//Count sum of n natural numbers
console.log("Sum of n natural numbers")
function sum(n){
    if(n == 0 ) return 0;
    return n + sum(n-1);
}
console.log(sum(10))

//Print factorial of n natural numbers.
console.log("Factorial of n natural numbers.");
function fact(n){
    if(n==1) return 1;
    return n*fact(n-1);
}
console.log(fact(4))

//fibonacci series.
console.log("Print fibonacci Series");
function fibo(n){
if(n<=1) return n;
return fact(n-1)+ fact(n-2);
}
console.log(fibo(5));

//Reverse string using recursion.
console.log("Reverse a string : ");
function rev(arr,i,j){
    if(i>=j) return arr.join("");
    [arr[i],arr[j]] = [arr[j],arr[i]]
    return rev(arr,i+1,j-1);
}
let str = "charvi khandar";
let arr = str.split("");
console.log(rev(arr,0,arr.length-1));