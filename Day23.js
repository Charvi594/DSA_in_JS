//Reverse a number 

function rev(num){
    if(num>=0 && num<=9) return num;

    let reverse = 0;
    while(num!==0){
        reverse = reverse * 10 + (num%10);
        num = Math.floor(num/10);
    }
    return reverse;
}
console.log(rev(13112005));

//Find the greatest Common divisor 
function findhcf(num1, num2){
    let hcf = 0;
    for(let i=1 ; i<=num1 && i<= num2 ; i++){
        if(num1%i==0 && num2%i == 0){
            hcf  = i;
        }
    }
    return hcf;
}
console.log(findhcf(10,5))