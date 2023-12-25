// Function to check if a string is a palindrome
function palindrome(str) {
  // Convert the string to an array of characters
  let splitstr = str.split("");

  // Create a reversed copy of the array (using spread syntax to create a new array)
  let reversestr = [...splitstr].reverse();

  // Join the reversed array back into a string
  let joinArr = reversestr.join("");

  // Remove non-alphanumeric characters, convert to lowercase
  let firstStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let secondStr = joinArr.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Log the cleaned strings for debugging
  console.log(firstStr);
  console.log(secondStr);

  // Check if the cleaned strings are equal (palindrome check)
  if (firstStr === secondStr) {
    return true;
  } else {
    // Strings are not equal, not a palindrome
    return false;
  }
}

// Example usage
let result = palindrome("A man, a plan, a canal. Panama");
console.log(result); // Output: true
