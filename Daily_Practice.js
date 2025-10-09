//Sort the colours
let colours = [0,1,1,2,2,0,1,0,2]
i=0;
let j=0;
let k = colours.length-1
while(i<=k){
    if(colours[i]==0){
        let temp = colours[i]
        colours[i] = colours[j]
        colours[j] = temp
        i++,j++
    }
    else if(colours[i]==2){
        let temp = colours[i]
        colours[i] = colours[k]
        colours[k] = temp
        k--
    }
    else{
        i++
    }
   
}

console.log(colours)