// Helper function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to calculate the square of a number
  function square(number) {
    return number * number;
  }
  
  // Main function to perform some operations
  function main() {
    // Array of numbers
    const numbers = [1, 2, 3, 4, 5];
  
    // Display the numbers
    console.log("Numbers:", numbers);
  
    // Calculate the square of each number and display the result
    const squares = numbers.map(square);
    console.log("Squares:", squares);
  
    // Filter even numbers and display the result
    const evenNumbers = numbers.filter(isEven);
    console.log("Even Numbers:", evenNumbers);
  }
  
  // Call the main function
  main();
  