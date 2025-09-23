//Qu-7 Sum of n natural numbers.

let n2 = (prompt("Enter a number : "));
if(n===null){
    console.log("You cancelled the operation.")
}
let sum2 = 0;

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

let num1 = +prompt("Enter a number to find its factorial : ");
console.log(num1);
 let fact = 1;
if(isNaN(num1) || num1<=0){
    console.log("Invalid input. Enter correct input.");
}
else{
   
    for(let i = 1; i<=num1 ;i++){
        fact*=i;
       
    }
      console.log(`${num1}! = ${fact}`);
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
while(no>0){
    var rem = no%10;
    sum = sum+rem;
    no= Math.floor(no/10);
} console.log(`The sum of digits is ${sum}`);

//Qu-13 Reverse a number using while loop
let num = +prompt("Enter a number to reverse it : ");
let reverse = 0;  //Initially reverse is 0
while(num>0){ 
    let rem = num%10; //Return last digit and store it into remainder , i.e 4 , 123%10 = 3 , 12%10 = 2 , 1%10 = 1
    reverse = reverse*10 + rem; //0*10 + 4 = 4 , 4*10 + 3 = 43 , 43*10 + 2 = 432 , 432*10 + 1 = 4321
    num = Math.floor(num/10) //1234/10 = 123 , 123/10 = 12 , 12/10 = 1
}
console.log(`The reverse of the num is ${reverse}`); //4321

//Qu-14 check whether a number is strong or not.( 145 = 1! + 4! + 5! = 145)
let n = +prompt("Enter a number to check whether it is strong or not : ");
let sum = 0;
let temp = n;
 if(isNaN(n)||n<=0) console.log("Invalid input");
 else{
    while(n>0){
        let rem = n%10;
        let fact = 1;
        for(let i = 1; i<=rem ; i++){
            fact*=i;        
        }
        sum+=fact;
        n = Math.floor(n/10);
    }
    if(sum===temp)console.log(`${temp} is a strong number.`);
    else console.log(`${temp} is not a strong number.`);
 }

 //Qu-15 Repeat hello till the user enters 0
 let input ;
 do{
    console.log("Hello");
    input = +prompt("Enter a number (0 to stop) : ");
 }
 while(input!==0);
 

 //Qu-16 Guess the number game
 let rand = Math.floor(Math.random()*100) + 1;
 let guess;
 while(guess!==rand){
    if(guess>rand)console.log("Too high! Try again.");
    else if (guess<rand) console.log("Too low! Try again.");
    guess = +prompt("Guess a number between 1 to 100 : ");
 };
 console.log("Congratulations! You guessed it right.");
 //

 //Qu-17 Calculator
while(true){
 let inp = +prompt("Enter 1 for Addition \nEnter 2 for Subtraction \nEnter 3 for Multiplication \nEnter 4 for Division \nEnter 5 to Exit");
let a = +prompt("Enter first number : ");
let b = +prompt("Enter second number : ");
let result;

if(inp === 1){
    result = a+b;
    console.log(`The sum of ${a} and ${b} is ${result}`);
}
else if(inp === 2){
    result = a-b;
    console.log(`The difference of ${a} and ${b} is ${result}`);
}
else if(inp === 3){
    result = a*b;
    console.log(`The product of ${a} and ${b} is ${result}`);
}
else if(inp === 4){
    if(b===0) console.log("Division by 0 is not defined.");
    else{
    result = a/b;
    console.log(`The division of ${a} by ${b} is ${result}`);
    }
}
else{
    break;
}}