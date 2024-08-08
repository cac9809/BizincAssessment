function doubleEvens(arr) {
    return arr.map(num => num % 2 === 0 ? num * 2 : num);
}

// Get user input
const userInput = prompt("Enter an array of numbers separated by commas:");
const inputArray = userInput.split(',').map(Number);

const outputArray = doubleEvens(inputArray);
console.log(outputArray); 
alert("Output array: " + outputArray);