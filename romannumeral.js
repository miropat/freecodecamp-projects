// Function to convert a number to a Roman numeral
function convertToRoman(num) {
  // Define an array of Roman numerals and their corresponding values
  let romanNumerals = [
    { numeral: "M", value: 1000 },
    { numeral: "CM", value: 900 },
    { numeral: "D", value: 500 },
    { numeral: "CD", value: 400 },
    { numeral: "C", value: 100 },
    { numeral: "XC", value: 90 },
    { numeral: "L", value: 50 },
    { numeral: "XL", value: 40 },
    { numeral: "X", value: 10 },
    { numeral: "IX", value: 9 },
    { numeral: "V", value: 5 },
    { numeral: "IV", value: 4 },
    { numeral: "I", value: 1 },
  ];

  // Check if the input is a valid number
  if (isNaN(num)) {
    return "Please input a valid integer";
  }

  // Initialize an empty string to store the Roman numeral
  let romanNumeral = "";

  // Loop through the Roman numerals array
  for (let i = 0; i < romanNumerals.length; i++) {
    // While the number is greater than or equal to the current Roman numeral value
    while (num >= romanNumerals[i].value) {
      // Append the Roman numeral to the result string
      romanNumeral += romanNumerals[i].numeral;
      // Subtract the value of the Roman numeral from the number
      num -= romanNumerals[i].value;
    }
  }

  // Return the resulting Roman numeral
  return romanNumeral;
}

// Example usage
let result = convertToRoman(36);
console.log(result); // Output: XXXVI
