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