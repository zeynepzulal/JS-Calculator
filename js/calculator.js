const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");

let displayValue = "0";
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

updateDisplay();

function updateDisplay(){
    display.value = displayValue;
}

keys.addEventListener("click",function(e){
    const element = e.target;
    const value = element.value;

    if (!element.matches("button")) return; //sayfada bos yere tiklayinca da degerini almaya çalismamasi için


    switch(value){
        case "+" :
        case "-" :
        case "*" :
        case "/" :
        case "=" :
            handleOperator(value);
            break;
            case ".":
                inputDecimal();
                break;
            case "clear":
                clear();
                break;
            default:
                inputNumber(value);   
                   

    }
    
    
    
    

    //console.log("number",element.value);
    
    updateDisplay();
});


function handleOperator(nextOperator){ // örn : next operator = * olsun
    const value = parseFloat(displayValue); // input daki string i -> sayiya çeviriyoruz

    if(operator && waitingForSecondValue) {//?????
        operator = nextOperator;
        return; 
    }

    if(firstValue === null) { //firstValue yoksa
       firstValue = value ; //firstValue = 0;
    } else if(operator) { // (?????)
        const result = calculate(firstValue,value,operator); //hesapla

        displayValue = `${parseFloat(result.toFixed(7))}`;//virgülden sonra max 7 basamak alsin diye yaptik ve input un içinde gözüken degeri result a esitledik
        firstValue = result; // firsValue artik 0 degil result oldu
    }

    waitingForSecondValue = true; //???
    operator = nextOperator;  //???

    //console.log(displayValue,firstValue,operator,waitingForSecondValue);
}

function calculate(first,second,operator) {
    if (operator ==="+"){
        return first + second;
    } else if(operator ==="-"){
        return first - second;
    } else if(operator === "*"){
        return first * second;
    } else if(operator === "/"){
        return first / second;
    }
    return second;
}




function inputNumber(num) {
    if(waitingForSecondValue) { //????
        displayValue = num;  
        waitingForSecondValue = false;
    } else  {
    displayValue = displayValue === "0" ? num: displayValue + num;
    }

    console.log(displayValue,firstValue,operator,waitingForSecondValue);
}


function inputDecimal() {
    if(!displayValue.includes(".")){
    displayValue += ".";
    }
}

function clear() {
    displayValue = "0";
}