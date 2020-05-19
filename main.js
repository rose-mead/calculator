//Reverse pseudocode
// on click, store the value of text

// if it is a number or a dot, store in 'temp' variable, answer.val = temp
// if it is a random symbol - do some stuff
// if it is / or *, convert to / *, push 'temp numbers' and push symbol, clear temp variable
// if it is equals, push temp, iterate through entries array, do math on the next number, add to nt variable
// 

var cells = document.getElementsByTagName('td')

var currentNum = ''
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
        currentNum = ''
        result = Number(valuesArray[0])
        // if there is nothing to clear
        if (isNaN(result)) {
            result = 0
        }
    } else {
        valuesArray.push(currentNum)
        valuesArray.push(val)
        currentNum = ''
        
        }
        displayResult()
        

}

function storeValInString() {
    currentNum += val
    result = currentNum
}

function reset() {
    currentNum = ''
    valuesArray = []
    result = 0
}

function doMaths() {
    valuesArray.push(currentNum)
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



function displayResult() {
    cells[0].innerHTML = result
}

