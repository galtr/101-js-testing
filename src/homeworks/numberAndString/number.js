import { expect } from "../../expect.js";

// NaN
expect(0).isNaN(); // false
expect(null).isNaN(); // false
expect(1).isNaN(); // false;
expect(NaN).isNaN();

// Является ли число простым
expect(4).isPrime(); // false
expect(17).isPrime(); // true
expect("0").isPrime(); // false

// Является ли число целым
expect(10).isInt(); // true
expect(0.3).isInt(); // false
expect("0").isInt(); // false

// Является ли число A кратное B
expect(10).isMultipleOf(5); // true
expect(9).isMultipleOf(4); // false

// Находятся ли числа близко друг к другу (вне зависимости от знака + или -)
expect([1, 2]).approximately(0.5); // false. нет. числа не находятся в пределах 0.5
expect([0.2, 0.1 + 0.2]).approximately(0.1); // false
expect([0.2, 0.3]).approximately(0.1); // true
expect([1, 2]).approximately(1); // true

// Является ли число конечным числом
expect(2).isFinite(); // true;
expect(Infinity).isFinite(); // false
expect(-Infinity).isFinite(); // false;
expect(false).isFinite(); // false
expect(NaN).isFinite(); // false
