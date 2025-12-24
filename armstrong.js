
//Check if its armstrong
//Steps:
//Formula : 1^3 + 5^3 + 3^3
//First take the last digit then multiply it by itself 3 times and add it to sum. Then divide the original number by 10 to get the remaining 2 digits and perform same operations on them.

let num = 1234
let copy = num;
let sum = 0;

function countdigits(num){
    let count = 0;
    while(num>0){
        count++;
        num = Math.floor(num/10)
    }
    return count;
}


let multiplier = countdigits(num)
while(num>0){
let temp = num%10;  
sum+= temp**multiplier;
num = Math.floor(num/10)
}
if(sum == copy ){
console.log("The given number is Armstrong number!!")
}
else{
    console.log("Not an armstrong number!!")
}