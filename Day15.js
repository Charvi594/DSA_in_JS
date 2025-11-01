//Print names n times

function names(n){
    if(n==0) return;
    console.log("Charvi the great!!");
    names(--n);
}

names(10);

//Print numbers from 1 to n (without backtracking)

function count(i,n){
    if(i>n) return;
    console.log(i);
    count(i+1,n)
}
count(1,10)

//Print numbers from 1 to n using backtracking

function num(i,n){
    if(n>i) return;
    num(i-1,n)
    console.log(i);
}
num(10,1);

//Print numbers from n to 1

function count2(i,n){
if(n>i)return;
console.log(i);
count2(i-1,n);
}
count2(10,1);

//Print numbers from n to 1
console.log("without using i-1. Use i+1")
function nums(i,n){
    if(i>n) return;
    nums(i+1,n);
    console.log(i);
}
nums(1,3)
