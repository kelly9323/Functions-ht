let input = "2";
const fetchToNumber = function (value) {
  if (isNaN(Number(value)) || value === null || value === "") {
    return NaN;
  }
  return Number(input);
};
const chooseOddEven = function (value) {
  if (isNaN(value)) {
    return NaN;
  }
  if (value % 2 === 0) {
    return "even";
  }
  return "odd";
};

console.log(chooseOddEven(fetchToNumber(input)));

let input2 = 7;
let input3 = "gh7g";

function checkTypeOf(value1, value2) {
  if (typeof value1 === typeof value2 && value1 > value2) {
    return value1;
  }
  if (typeof value1 === typeof value2 && value2 > value1) {
    return value2;
  }
  return null;
}
console.log(checkTypeOf(input2, input3));
