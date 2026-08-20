const display = document.querySelector(".disp");
const buttns = document.querySelector(".btnGroup");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

let firstNum = "";
let mainOperator = "-";
let secondNum = "";

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
  } else if (oper === "*") {
    return toMultiply(num1, num2);
  }
}

buttns.addEventListener("click", (event) => {
  if (!event.target.matches("button")) return;

  const count = event.target.textContent;

  if (!isNaN(count)) {
    firstNum += count;
    display.textContent = parseFloat(firstNum).toLocaleString("en-EN", {
      maximumFractionDigits: 10,
      useGrouping: true,
    });
  } else if (["+", "-", "*", "/"].includes(count)) {
    mainOperator = count;
    secondNum = firstNum;
    firstNum = "";
    display.textContent = "";
  } else if (count === "=") {
    const num1 = parseFloat(secondNum);
    const num2 = parseFloat(firstNum);
    let result = operator(num1, mainOperator, num2);

    display.textContent = parseFloat(result).toLocaleString("en-EN", {
      maximumFractionDigits: 10,
      useGrouping: true,
    });

    firstNum = String(result);
    secondNum = "";
    mainOperator = "";
  } else if (count === "CC") {
    firstNum = "";
    secondNum = "";
    mainOperator = "";
    display.textContent = "";
  }
});
