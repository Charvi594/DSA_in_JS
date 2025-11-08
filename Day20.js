//Set Matrix zero
//Here, a matrix will be given, make entire row or column zero where the zero occurs.

//Brute-force approach
console.log("The Brute force approach is as follows : ")
let matrix = [[1,1,1],[1,0,1],[1,1,1]];
let m = matrix.length;
let n = matrix[0].length;
let copy = matrix.map(row => [...row]);

for(let i=0; i<m;i++){
    for(let j=0; j<n;j++){
        if(matrix[i][j]==0){
            for(let k=0; k<n;k++) copy[i][k] = 0;
        }
    }
}

for(let j=0; j<n;j++){
    for(let i=0; i<m; i++){
        if(matrix[i][j]==0) {
            for(let k=0; k<m; k++) copy[k][j] = 0;
        }
    }
}
console.log(copy);


//Optimised version
console.log("The optimised version is as follows :")
var setzeroes = function(matrix){
    let isCol = false, r = matrix.length; c = matrix[0].length;
    for(let i=0;i<r;i++){
        if(matrix[i][0]===0) isCol = true; //Handles marking zeroes of first row

        for(let j=1;j<c;j++){        //Handles marking zeroes from second column as first column is acting like the marker.
            if(matrix[i][j] === 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for(let i=0;i<r;i++){ // Checks for row

        for(let j=1; j<c; j++){     //Checks for columns
            if(matrix[i][0] ===0 || matrix[0][j]===0) //If the current element's either row or column is marked as zero
                matrix[i][j] = 0; // Set that element to zero .
        }
    }

    if(matrix[0][0]==0){   // If the first element of first row is  zero 
        for(let j=0;j<c;j++){ // then iterate over the columns of that first row 
            matrix[0][j] = 0; // and set them to zero
        }
    }
    if(isCol){    // This condition is to check if any zero exists in the column .
        for(let i=0;i<r;i++){   //if it does, make the elements zero
            matrix[i][0] = 0; // making first element of each row as zero ultimately making column zero.
        }
    }
    return matrix; // Return the output matrix.
}
console.log(setzeroes([[1,0],[2,1]]));