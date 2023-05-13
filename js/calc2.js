let str = "";
let number1 = null;
let number2 = null;
let operator = "";

const display = document.getElementById("field");
const _keys = document.querySelectorAll("button");

_keys.forEach(el => {
    el.addEventListener("click", function () {
        switch (el.innerText) {
            case "0": case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": case ".":
                if(str.split(".").length > 1 && el.innerText == "." ) break;
                str = str + el.innerText;
                display.value = str;
                break;

            case "+": case "-": case "/": case "*":
                display.value = display.value + el.innerText;
                number1 = Number(str);
                str = "";
                if (number1 != null && number2 != null && operator != "") {
                    calculate();
                    display.value = number2 + el.innerText;
                }
                else number2 = number1;
                operator = el.innerText;
                break;

            case "=":
                number1 = Number(str);
                if (number1 != null && number2 != null && operator != "") {
                    calculate();
                    display.value = number2;
                }
                str = "";
                number1 = null;
                number2 = null;
                operator = "";
                break;

            case "AC":
                str = "";
                number1 = null;
                number2 = null;
                operator = "";
                display.value = "";
                break;
        }

    })
})


function calculate(){
    
    switch (operator) {
        case "+":
            number2 = number1 + number2;
            break;

        case "-":
            number2 = number1 - number2;
            break;

        case "*":
            number2 = number1 * number2;
            break;

        case "/":
            number2 = number1 / number2;
            break;


    }
}