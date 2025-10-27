//Longest consecutive sequence 
let arr = [100,4,200,1,3,2];
let sorted = arr.sort((a,b)=>a-b)
let count =1; 
let longest = 1;
for(let i=0;i<arr.length;i++){
    if(arr[i]==arr[i-1]+1){
        count++;
    }
    else{
        count = 1;
    }
    longest = Math.max(longest,count)
}
console.log(longest);


//Optimised version :
let nums = [100,4,200,1,3,2];
//Create a hash set
let hash = new Set(nums);
let long = 0;
for(let num of hash){
    //Check for the smallest number
    if(!hash.has(num-1)){
        let cur = num;
        let count =1;

         while(hash.has(cur+1)){
            count++
            cur++;
        
    }
    long = Math.max(long,count);
   
    }


}
 console.log(long);

//Create a hash set
//Initialise long =0
//Iterate over a set and check condition
//Check whether the current element is smallest or not, if it is store it in the cur element and initialise the count =1
//In a loop check whether the set has the element 1 greater than the curr.
//If it has such element , then increment the curr and count
//Then compare the longest and the count each time and return

