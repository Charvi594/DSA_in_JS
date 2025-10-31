//Print numbers from n to 1 using recursion.

function temp(n){
if(n==0) return;
console.log(n);
temp(--n);

}
temp(10)

console.log("break")
//Print numbers from 1 to n using recursion.

function rec(n){
if(n==0)return;
rec(n-1);
console.log(n);
}
rec(10);

console.log("break");

//Calculate sum of first n natural numbers

//Add current number to previous number: n+(n-1)

function sums(n){
    if(n==0) return 0;
    return n+sums(n-1);
}
console.log(sums(10));

//Calculate factorial of first n natural  numbers.

function fact(n){

    if(n==1) return 1;
    return n*fact(n-1);
}
console.log(fact(8))