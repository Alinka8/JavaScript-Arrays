// Exploring Array Manipulation in JavaScript

// Task 1: Adding and Removing Elements
let fruits = ["apple", "banana", "orange"];
console.log("Initial array:", fruits);

fruits.push("grape");
console.log("After push:", fruits);

fruits.pop();
console.log("After pop:", fruits);

// Task 2: Sorting Arrays
let num = [3, 1, 5, 2, 4];
console.log("Initial numbers:", num);

num.sort((a, b) => a - b);
console.log("Sorted numbers:", num);

// Task 3: Applying Array Methods
let numbers = [3, 1, 5, 2, 4];
console.log("Initial numbers:", numbers);

let doubledNumbers = numbers.map((num) => num * 2);
console.log("Doubled numbers:", doubledNumbers);

let oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);

// Exploring String Manipulation in JavaScript

// Task 1: Obtaining String Length
let message = "Hello, World!";
console.log("Length of message:", message.length);

// Task 2: Converting Cases
let text = "Hello, World!";
let upperText = text.toUpperCase();
console.log("Uppercase text:", upperText);

let lowerText = text.toLowerCase();
console.log("Lowercase text:", lowerText);

// Task 3: Extracting Substrings
let sentence = "The quick brown fox jumps over the lazy dog";
let substring = sentence.substring(10, 19);
console.log("Extracted substring:", substring);

// Task 4: Splitting Strings
let textTwo = "The quick brown fox";
let words = sentence.split(" ");
console.log("Array of words:", words);
