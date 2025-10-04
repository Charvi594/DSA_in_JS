//Reverse the array

let arr = [1,2,3,4,5,6];
let i = 0, j = arr.length-1

while(i<j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr);

//Move all zeroes to left and all ones to right

let arr1 = [1,0,1,1,0,0,0,0,1]
let a=0;
let b=0;

while(a<arr1.length){
    if(arr1[a]==0){
        let temp = arr1[a];
        arr1[a] = arr1[b];
        arr1[b] = temp;
        b++;
    }
    a++;
}
console.log(arr1);

//Move all the negative elements on the one side and all the positive elements on the other

let mix = [-2,4,-1,2,3,-7,-9,5];
let m = 0;
let n = 0;
while(m<mix.length){
    if(mix[m]<0){
        let temp = mix[m];
        mix[m] = mix[n];
        mix[n] = temp;
        n++;
    }
    m++;
}
console.log(mix)

