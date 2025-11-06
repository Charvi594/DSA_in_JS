//Intersection of two arrays - II

let nums1 =[4,9,5];
let nums2 = [9,4,9,8,4];

let map = new Map();
let res = [];

for(let num1 of nums1){
    map.set(num1,(map.get(num1)|| 0 )+1);
}

for(let i=0;i< nums2.length;i++){
       if(map.has(i)&& map.get(i)>0){
            res.push(i);
              map.set(i,map.get(i)-1)
}
}
console.log(res);