//Qu1 - Generate OTP

let OTP = Number(Math.trunc((Math.random()*9000)+1000));
console.log(OTP);

//Calculate area and perimeter of rectangle
let length = 5;
let breadth = 16;

let area = length * breadth;
let perimeter = 2 * (length + breadth);

console.log(`Area of rectangle is ${area}. `);
console.log(`Perimeter of rectangle is ${perimeter}`);

//Qu-2 Calculate Area of triangle by Heron's formula

let a = 5;
let b = 6;
let c = 7;

let s = (a+b+b)/2;

let areaofT = Math.trunc(Math.sqrt(s*(s-a)*(s-b)*(s-c)));

console.log(`The are of triangle is ${areaofT}`);