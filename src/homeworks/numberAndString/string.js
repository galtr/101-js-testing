import { expect } from "../../expect.js";

// есть ли пробелы в начале и конце
console.log("isTrimmed: ");
expect("somebody to love").isTrimmed(); // true
expect(" somebody to love ").isTrimmed(); // false
expect("\t\t\tsomebody to love\n").isTrimmed(); //false

// строка читаемая одинаково в обе стороны
console.log("isPalindrome: ");
expect("kayak").isPalindrome(); // true
expect("queen").isPalindrome(); // false

// строка начинается и заканчивается на букву
console.log("within: ");
expect("killer queen").within(["k", "n"]); // true
expect("killer queen").within(["x", "z"]); // false

// Строка оформлена в одном из кейсов (camelCase, snake_case, kebab-case)
console.log("inCase: ");
expect("under_pressure").inCase("snake"); // true
expect("underPressure").inCase("snake"); // false

expect("underPressure").inCase("camel"); // true
expect("under-pressure").inCase("camel"); // false

expect("under-pressure").inCase("kebab"); // true;
expect("underpressure").inCase("kebab"); // false
