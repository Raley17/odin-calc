const display = document.querySelector(".disp");
const buttns = document.querySelector(".btnGroup");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

let firstNum = "";
let mainOperator = "-";
let secondNum = "";
let resultShown = false;

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
    if (num2 === 0) {
      return "Error";
    } else {
      return toDivide(num1, num2);
    }
  } else if (oper === "*") {
    return toMultiply(num1, num2);
  }
}

document.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

buttns.addEventListener("click", (event) => {
  if (!event.target.matches("button")) return;

  const count = event.target.textContent;

  if (!isNaN(count)) {
    if (resultShown) {
      firstNum = "";
      secondNum = "";
      mainOperator = "";
      resultShown = false;
    }
    firstNum += count;
    display.textContent = parseFloat(firstNum).toLocaleString("en-EN", {
      maximumFractionDigits: 10,
      useGrouping: true,
    });
  } else if (["+", "-", "*", "/"].includes(count)) {
    if (mainOperator !== "" && secondNum !== "" && firstNum !== "") {
      const num1 = parseFloat(secondNum);
      const num2 = parseFloat(firstNum);
      let result = operator(num1, mainOperator, num2);

      display.textContent = parseFloat(result).toLocaleString("en-EN", {
        maximumFractionDigits: 10,
        useGrouping: true,
      });

      mainOperator = count;
      secondNum = result;
      firstNum = "";
    } else if (firstNum !== "") {
      mainOperator = count;
      secondNum = firstNum;
      firstNum = "";
      display.textContent = "";
    }
  } else if (count === "=") {
    if (firstNum === "" || secondNum === "" || mainOperator === "") {
      return;
    }
    const num1 = parseFloat(secondNum);
    const num2 = parseFloat(firstNum);
    let result = operator(num1, mainOperator, num2);

    if (result === "Error") {
      display.textContent = "Error!";
      firstNum = "";
      secondNum = "";
      mainOperator = "";
      return;
    }

    display.textContent = parseFloat(result).toLocaleString("en-EN", {
      maximumFractionDigits: 10,
      useGrouping: true,
    });

    firstNum = String(result);
    secondNum = "";
    mainOperator = "";
    resultShown = true;
  } else if (count === "CC") {
    firstNum = "";
    secondNum = "";
    mainOperator = "";
    display.textContent = "";
    resultShown = false;
  } else if (count === ".") {
    if (!firstNum.includes(".")) {
      firstNum += ".";
      display.textContent = firstNum;
    }
  } else if (count === "←") {
    firstNum = firstNum.slice(0, -1);
    display.textContent = firstNum || "0";
  }
});
