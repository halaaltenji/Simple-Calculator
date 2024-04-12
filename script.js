let firstInput = document.querySelector("#number1");
let secondInput = document.querySelector("#number2");
let Result = document.querySelector("#result");

let addBtn = document.querySelector("#add");
let buttonSubtract = document.querySelector("#subtract");
let buttonMultiply = document.querySelector("#multiply");
let buttonDivide = document.querySelector("#divide");

function calculate(operation) {
    let num1 = Number(firstInput.value);
    let num2 = Number(secondInput.value);

    if (firstInput.value === "" || secondInput.value === "") {
        Result.textContent = "Please enter your numbers";
    } else if (isNaN(num1) || isNaN(num2)) {
        Result.textContent = "Please enter valid numbers";
    } else {
        let result;
        if (operation === "add") {
            result = num1 + num2;
        } else if (operation === "subtract") {
            result = num1 - num2;
        } else if (operation === "multiply") {
            result = num1 * num2;
        } else if (operation === "divide") {
            if (num2 === 0) {
                result = "Cannot divide by zero";
            } else {
                result = num1 / num2;
            }
        }
        // Display the result
        Result.textContent = "Result: " + result;
        clearInput()
    }
}

addBtn.addEventListener("click", function() {
    calculate("add");
});

buttonSubtract.addEventListener("click", function() {
    calculate("subtract");
});

buttonMultiply.addEventListener("click", function() {
    calculate("multiply");
});

buttonDivide.addEventListener("click", function() {
    calculate("divide");
});

function clearInput(){
    firstInput.value="";
    secondInput.value="";
}