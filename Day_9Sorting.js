//Bubble Sort 
//Sort the given array using bubble sort

let arr = [10,5,12,1,13]
let n = arr.length
for(let i=0;i<n-1;i++){
    for (let j=0;j<n-1-i;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp;
        }
    }
}
console.log(`The sorted array is : ${arr} with the time complexity of O(n^2).`)
