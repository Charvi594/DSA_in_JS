 const prompt = require("prompt-sync")();

// // // console.log("Hello");
// // // console.log("Charvi");

// // process.stdout.write("Hello ");
// // process.stdout.write("Charvi\n");

// // let a = prompt("Enter a number : ");
// // process.stdout.write("You entered : " +a);

// //PAttern Programming

// let n =+prompt("Enter a number : "); //number entered by user
// for(let i = 1;i<=n ; i++){ //outer loop will set its value to 1 // now value will be 2
//     for(let j=1;j<=n;j++){ //inner loop will run from 1 to n //again inner loop will run from 1 to n
//        process.stdout.write("*") //and print *** times //now ***
//                                                      //   ***
//     }
//    console.log("") //after inner loop finishes one iteration it will switch to next line.
// }


// let n1 =+prompt("Enter a number : "); //number entered by user
// for(let i = 1;i<=n1 ; i++){ //outer loop will set its value to 1 // now value will be 2
//     for(let j=1;j<=i;j++){ //inner loop will run from 1 to i //again inner loop will run from 1 to i
//        process.stdout.write("*") //and print * times //now *
//                                                      //    **
//     }
//    console.log("") //after inner loop finishes one iteration it will switch to next line.
// }

// let n2 = +prompt("Enter a number :");
// for(let i = 1;i<=n1 ; i++){ //outer loop will set its value to 1 // now value will be 2
//     for(let j=1;j<=i;j++){ //inner loop will run from 1 to i //again inner loop will run from 1 to i
//        process.stdout.write(j+" ") //and print * times //now *
//                                                      //    **
//     }
//    console.log("") //after inner loop finishes one iteration it will switch to next line.
// }

// let n3 = +prompt("Enter a number : ");
// for(let i=1; i<=n;i++){
//     let ascii = 65;
//     for(let j=1; j<=i;j++){
//         process.stdout.write(String.fromCharCode(ascii)+" ");
//         ascii++;
//     }
//     console.log(" ")
// }

let n4 = +prompt("Enter a number :");
for(let i=1; i<=n4; i++){
    for(let j=n4; j>=i; j--){
        process.stdout.write("* ")
    }
    console.log(" ")
}
let n = +prompt("Enter a number :");

for(let i =1; i<=n; i++){

    //normal pyramid
    for(let j=1; j<=i;j++){
        process.stdout.write(" ")
    }
    //inverted pyramid
    for(let j=n; j>=i ; j--){
        process.stdout.write("*")
    }
    
    console.log(" ")
}