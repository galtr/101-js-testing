export function expect(value) {
  return {
    isNaN: function () {
      if (isNaN(value)) {
        console.log(true);
        return true;
      } else {
        console.log(false);
        return false;
      }
    },
    isPrime: function () {
      if (typeof value != "number") {
        console.log(false);
        return false;
      }
      for (let i = 2; i < value; i++) {
        if (value % i != 0) {
          console.log(true);
          return true;
        } else {
          console.log(false);
          return false;
        }
      }
    },
    isInt: function () {
      if ((value ^ 0) === value) {
        console.log(true);
        return true;
      } else {
        console.log(false);
        return false;
      }
    },
    isMultipleOf: function (b) {
      if (value % b === 0) {
        console.log(true);
        return true;
      } else {
        console.log(false);
        return false;
      }
    },
    approximately: function (diff) {
      if (Math.abs(value[0] - value[1]).toFixed(1) == diff) {
        console.log(true);
        return true;
      } else {
        console.log(false);
        return false;
      }
    },
    isFinite: function () {
      if (Number.isFinite(value) === true) {
        console.log(true);
        return true;
      } else {
        console.log(false);
        return false;
      }
    },
  };
}
