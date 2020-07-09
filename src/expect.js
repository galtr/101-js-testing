export function expect(value) {
  return {
    isTrimmed: function () {
      if (value == value.trim()) {
        console.log(true);
        return true;
      } else {
        console.log(false);
        return false;
      }
    },
    isPalindrome: function () {
      let half = value.slice(0, Math.ceil(value.length / 2));
      let secondHalf = half.split("").reverse().join("");
      if (value.includes(secondHalf)) {
        console.log(true);
        return true;
      } else {
        console.log(false);
        return false;
      }
    },
    within: function (arr) {
      if (value.startsWith(arr[0]) && value.endsWith(arr[1])) {
        console.log(true);
        return true;
      } else {
        console.log(false);
        return false;
      }
    },
    inCase: function (caseName) {
      let lowerValue = value.toLowerCase();
      if (value.includes("-") && caseName == "kebab") {
        console.log(true);
        return true;
      } else if (value.includes("_") && caseName == "snake") {
        console.log(true);
        return true;
      } else if (lowerValue != value && caseName == "camel") {
        console.log(true);
        return true;
      } else {
        console.log(false);
        return false;
      }
    },
  };
}
