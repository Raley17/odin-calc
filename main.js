const display = document.querySelector(".disp");
const buttns = document.querySelectorAll(".btn");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

let firstNum = 12;
let mainOperator = "-";
let secondNum = 8;

function toAdd(a, b) {
  return a + b;
}

function toSubstract(a, b) {
  return a - b;
}

function toDivide(a, b) {
  return a / b;
}

function toMultiply(a, b) {
  return a * b;
}

function operator(num1, oper, num2) {
  if (oper === "+") {
    return toAdd(num1, num2);
  } else if (oper === "-") {
    return toSubstract(num1, num2);
  } else if (oper === "/") {
    return toDivide(num1, num2);
  } else {
    return toMultiply(num1, num2);
  }
}

buttns.forEach((btn) => {
  if (btn.textContent !== "=" && btn.textContent !== "CC") {
    btn.addEventListener("click", () => {
      display.textContent += btn.textContent;
    });
  }
});
