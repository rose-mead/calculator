//This function returns innerHTML of key when clicked.
let values = [];//this is where values will be stored.
let operator;//this is where the operand will be stored.

//this function checks what key is pressed then directs flow to the right function
function keyDirector(key){
    let displayedText = document.getElementById("theDisplay");
    if("1234567890.".includes(key)){                             //if a value is pressed
        displayedText.innerHTML += key;
    }else if("+-*/%".includes(key)){                             //if an operation is pressed
        if(operator == undefined){
            operator = key;
            displayedText.innerHTML += key;
        }else{
            values = displayedText.innerHTML.split(operator);
            displayedText.innerHTML = eValuate(values, operator);
        }
    }else if("ACCE".includes(key)){                              //if clear is pressed
            clearAll();
    }else{                                                       //if equals is pressed
        if(typeof operator != undefined){
            values = displayedText.innerHTML.split(operator);
            displayedText.innerHTML = eValuate(values, operator);
        }
    }
}

//add click event to all buttons
let buttons = document.getElementsByTagName("td");
for(i = 0; i < buttons.length; i++){
    let keyid = buttons[i].innerHTML;
    buttons[i].addEventListener("click", function(){keyDirector(keyid)})
}

//this takes in two values and an operator and returns the evaluation.
function eValuate(vals, operand){
    a = parseFloat(vals[0]);
    b = parseFloat(vals[1]);
    if(operand == "+"){
        values[0] = a + b;
        operator = undefined;
        return values[0];
    }else if(operand == "-"){
        values[0] = a - b;
        operator = undefined;
        return values[0];
    }else if(operand == "*"){
        values[0] = a * b;
        operator = undefined;
        return values[0];
    }else if(operand == "/"){
        values[0] = a / b;
        operator = undefined;
        return values[0];
    }else if(operand == "%"){
        values[0] = a/100 * b
        operator = undefined;
        return values[0];
    }
    
}

//clears memory
function clearAll(){
    document.getElementById("theDisplay").innerHTML = "";
    values = [];
    operator = undefined;
}
