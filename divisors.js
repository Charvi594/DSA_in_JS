function print(n){
    let count = 0;
    for(let i=1; i*i<=n;i++){
        if(n%i==0){
            console.log(i);
            count++;

             if(i !== (n/i)){
            console.log(n/i)
            count++;
        }
        }

       
    }
    console.log(`Count of the divisors are as follows : ${count}`)
}
print(36)