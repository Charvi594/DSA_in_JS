//Qu-7 Sum of n natural numbers.

let n = (prompt("Enter a number : "));
if(n===null){
    console.log("You cancelled the operation.")
}
let sum = 0;

if(isNaN(n) || n<=0){
    console.log("Invalid input given by the user. Try again with a positive number.");
}
else{
    for(let i =1; i<=n;i++){
        sum +=i;
    }
    console.log(`The sum of first ${n} natural numbers is ${sum}`);
}

//Que-9 Factorial of a number

let num = +prompt("Enter a number to find its factorial : ");
console.log(num);
 let fact = 1;
if(isNaN(num) || num<=0){
    console.log("Invalid input. Enter correct input.");
}
else{
   
    for(let i = 1; i<=num ;i++){
        fact*=i;
       
    }
      console.log(`${num}! = ${fact}`);
}

//Qu-10 Print factors of a number
let number = +prompt("Enter a number to find its factors : ");
if(isNaN(number)||number<=0) console.log("Invalid input");
else{
    for(let i=1; i<=(number/2); i++){
        if(number%i===0) console.log(i);
    } console.log(number);
}


//Qu-11 Identify whether a number is prime or not
let n1 = +prompt("Enter a number to check whether it is prime or not : ");
if(isNaN(n1)||n1<=1) console.log("Invalid input");
else{ 
    if(n>0){
    function isPrime(n1){
        if(n1===2) return("Yes, it is the only even prime number.");
        if(n1%2==0) return("Not a prime number");
        for(let i=3; i<=Math.floor(Math.sqrt(n1)); i++){
            if(n1%i===0) return("Not a prime number.")
        }
    return("Yes, it is a prime number.");
    }
    console.log(isPrime(n1));
}}

//Qu-12 Sum of digits using while loop

let no = +prompt("Enter a number : ");
var i;
while(i>=no){
    let sum1 = 0;
    sum1+=i;
    console.log(sum1);
i++;}

    
   