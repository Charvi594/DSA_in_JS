//Que-3 - Valid Voter

let age = Number(prompt("Enter your age"));

if(isNaN(age) || age < 0){
    console.log("Invalid input")
}
else if(age >=18){
    console.log("You are a valid voter");
}
else{
    console.log("You are not a valid voter");
}

//Que-4 - Shop discount

let billAmount = Number(prompt("Enter the bill amount:"));
let discount = 0;

if(isNaN(billAmount)||(billAmount<0)){
    console.log("Invalid input");
}

else if(billAmount <= 5000){
   discount = 0;
}

else if(billAmount > 5000 && billAmount <=7000){
  discount = 5;
}

else if(billAmount > 7000 && billAmount<=9000){
  discount = 10;
    
}
else{
 discount = 20;
}

let CalDiscount = billAmount * discount/100;
PayableAmount = billAmount - CalDiscount;
 console.log(`Discount of ${discount}% is applied. Payable amount is ${PayableAmount}`);


//Que-5 - Electricity bill

 let units = Number(prompt("Enter the number of units consumed :"));
 let bill = 0; 
 
 if(units > 400){
    bill = (units-400) * 13;
    units = 400;
}

if(units < 400 && units >=200){
        bill += (units-200)*8;
        units = 200
    }

if(units < 200 && units >=100){
        bill += (units-100)*6;
        units = 100;
}
bill += units*4
   
console.log("The electricity bill is "+bill);

//Que-6 - INR Denominations

let amount = 4823

if(amount>=500){
    let notes = Math.trunc(amount/500);
    amount%=500;
    console.log(`500 : ${notes}`);
}
if(amount>=200){
    let notes = Math.trunc(amount/200)
    amount%=200;
    console.log(`200 : ${notes}`);
}
if(amount>=100){
    let notes = Math.trunc(amount/100)
    amount%=100;
    console.log(`100 : ${notes}`);
}
if(amount>=50){
    let notes = Math.trunc(amount/50);
    amount%=50;
    console.log(`50 : ${notes}`);
}
if(amount>=20){
    let notes = Math.trunc(amount/20);
    amount%=20;
    console.log(`20 : ${notes}`)
}
if(amount>=10){
    let notes = Math.trunc(amount/10);
    amount%=10;
    console.log(`10 : ${notes}`);
}
if(amount>=5){
    let notes = Math.trunc(amount/5);
    amount%=5;
    console.log(`5 : ${notes}`);
}
if(amount>=2){
    let notes = Math.trunc(amount/2);
    amount%=2;
    console.log(`2 : ${notes}`);
}
if(amount>=1){
    let notes = Math.trunc(amount/1);
    amount%=1;
    console.log(`1 : ${notes}`);
}