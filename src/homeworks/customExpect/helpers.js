export function withError() {
  throw new Error("oops");
}

export function withoutError() {
  return "hello";
}

let f = undefined;
export function foo() {
  if (!f) {
    f = function () {
      return undefined;
    };
  }
  return f;
}
