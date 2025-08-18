// Problem 1: Reverse a String
function reverseString(string) {
  return string.split("").reverse().join("");
}

// Problem 2: Count Vowels in a String
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return [...str].filter((char) => vowels.includes(char)).length;
}

// Problem 3: Check for Palindrome
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// Problem 4: Find the Maximum Number
function findMax(arr) {
  return Math.max(...arr);
}

// Problem 5: Remove Duplicates from an Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Problem 6: Sum of All Numbers in an Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Problem 7: Find Even Numbers in an Array
function findEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Problem 9: Find the Factorial of a Number
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Problem 10: PingPong Challenge
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}
