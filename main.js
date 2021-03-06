//Reverse pseudocode
// on click, store the value of text

// if it is a number or a dot, store in 'temp' variable, answer.val = temp
// if it is a random symbol - do some stuff
// if it is / or *, convert to / *, push 'temp numbers' and push symbol, clear temp variable
// if it is equals, push temp, iterate through entries array, do math on the next number, add to nt variable
// 

var cells = document.getElementsByTagName('td')

var currentString = ''
var valuesArray = []
var val = ''
var result = 0 


// add onclick function to all cells
for (var i=1; i<cells.length; i++) {
    cells[i].onclick = getNumber
}

function getNumber() {
    val = this.innerHTML
    checkNumber()
}

function checkNumber() {
    if (!isNaN(val) || val == '.') {
        storeValInString()
    } else if (val === '=') {
        doMaths()
    } else if (val == 'AC') {
        reset()
    } else if (val == 'CE') {
        clearCurrentString() 
    } else {
        addToValuesArray()
    } 
    displayResult()
}

function storeValInString() {
    currentString += val
    result = currentString
}

function doMaths() {
    valuesArray.push(currentString)
    result = Number(valuesArray[0])

    for(var i=0; i<valuesArray.length; i++) {
        var nextNum = Number(valuesArray[i+1])

        if (valuesArray[i] == '+') {
            result += nextNum
        }
        if (valuesArray[i] == '-') {
            result -= nextNum
        }
        if (valuesArray[i] == '÷') {
            result /= nextNum
        }
        if (valuesArray[i] == '×') {
            result *= nextNum
        } 
    }
}

function reset() {
    currentString = ''
    valuesArray = []
    result = 0
}

function clearCurrentString() {
    currentString = ''
    result = Number(valuesArray[0])
    // if there is nothing to clear
    if (isNaN(result)) {
        result = 0
    }
}

function addToValuesArray() {
    valuesArray.push(currentString)
    valuesArray.push(val)
    currentString = ''
}

function displayResult() {
    cells[0].innerHTML = result
}

