import { expect } from "../../expect.js";

// Данные необходимые для проверки
const obj = { hello: "hello there" };
const obj2 = obj;

const emoji = ["😀", "🤐", "🤨"];

expect(obj).toEqual(obj2); // true
expect(obj).toEqual({ ...obj }); // false;

// проверяем, что в разных объектах лежат те же ключи и значения
// нужно сравнить только первые ключи (не вложенные)
expect(obj).shallowEqual(obj); // true
expect(obj).shallowEqual({ ...obj }); // true
expect({ ...obj, emoji }).shallowEqual({ ...obj, emoji }); // true
expect({ ...obj, emoji }).shallowEqual({ hello: "hello there" }); // false
expect({ ...obj, emoji: ["😵"] }).shallowEqual({ ...obj, emoji: ["😵"] }); // false
