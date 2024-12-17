function twoDimensionArray(a, b) {
    // Create and fill the 2D array with values
    let arr = Array.from({ length: a }, (_, i) => 
        Array.from({ length: b }, (_, j) => j)
    );
    
    return arr;
}

const x = 2;
const y = 3;

const result = twoDimensionArray(x, y);
console.log(result);
