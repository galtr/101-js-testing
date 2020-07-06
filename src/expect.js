export function expect(a) {
  return {
    toBe: function (expected) {
      console.log(a === expected);
      return a === expected;
    },
    toBeTruthy: function () {
      console.log(!!a);
      return !!a;
    },
    toBeNull: function () {
      let result = a === null;
      console.log(result);
      return result;
    },
    toContain: function (b) {
      let result = a.includes(b);
      console.log(result);
      return result;
    },
    toThrowError: function () {
      try {
        a();
        console.log(false);
        return false;
      } catch {
        console.log(true);
        return true;
      }
    },
  };
}
