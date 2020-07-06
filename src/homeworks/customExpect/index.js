import { expect } from "../../expect.js";
import { withError, withoutError, foo } from "./helpers.js";
/**
 * Написать в файле expect.js функцию expect, выводящая результат сравнения в консоль (true или false)
 *
 * API
 * 1. toBe
 * 2. toBeTruthy
 * 3. toBeNull
 * 4. toContain
 * 5. toThrowError * (задание со звездочкой)
 */

console.log("toBe");
console.group();
expect(0).toBe(0); // true
expect("mama mia").toBe("mama mia"); //true
expect(0).toBe("0"); // false
expect(1).toBe(0); // false
expect({}).toBe({}); // false
expect([1, 2, 3]).toBe([1, 2, 3]); // false

expect(function () { }).toBe(function () { }); // false
expect(foo()).toBe(foo()); // true
console.groupEnd();

console.log("toBeTruthy");
console.group();
expect(true).toBeTruthy(); // true
expect(false).toBeTruthy(); // false
expect("0").toBeTruthy(); // true
expect(0).toBeTruthy(); // false
console.groupEnd();

console.log("toBeNull");
console.group();
expect(null).toBeNull(); // true;
expect(undefined).toBeNull(); // false
console.groupEnd();

console.log("toContain");
console.group();
expect("Mamaaaaaaaaaaaa, ooh, didn't mean to make you cry,").toContain(
  "Mamaaaaaaa"
); // true
expect("Mamaaaaaaaaaaaa, ooh, didn't mean to make you cry").toContain("Papa"); // false
expect([1, 2, 3, 4]).toContain(3); //true
expect([1, 2, 3, 4]).toContain(5); // false
console.groupEnd();

// Задание со звездочкой
console.log("toThrowError");
console.group();
expect(withError).toThrowError(); // true;
expect(withoutError).toThrowError(); // false;
console.groupEnd();


expect(0.1 + 0.2).toBe(0.3)
