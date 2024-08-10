function doubleEvens(arr) {
    return arr.map(num => {

        if (num % 2 === 0) {
            return num * 2; // Double an even number
        } else {
            return num; // Keep an odd number unchanged
        }
        
    });
}

// Example usage:
const inputArray = [1, 2, 3, 4];
const result = doubleEvens(inputArray);
console.log(result); // Output: [1, 4, 3, 8]