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

    // if a number or a '.'
    if (!isNaN(val) || val == '.') {
        currentNum += val
        displayValue(currentNum)
    }

    //if val is =
    else if (val === '=') {
        valuesArray.push(currentNum)
        doMaths()
        displayValue(result)

    } else if (val == 'AC') {
        currentNum = ''
        valuesArray = []
        result = 0
        displayValue(result)
    } else if (val == 'CE') {
        currentNum = ''
        result = Number(valuesArray[0])
        if (!NaN(result)) {
            displayValue(result)

        } else {
            displayValue(0)
        }


    }
 
     else {
        valuesArray.push(currentNum)
        val = convertSymbol()
        valuesArray.push(val)
        currentNum = ''
        
        }

        

}

function doMaths() {
    result = Number(valuesArray[0])

    for(var i=0; i<valuesArray.length; i++) {
        var nextNum = Number(valuesArray[i+1])

        if (valuesArray[i] == '+') {
            result += nextNum
        }
        if (valuesArray[i] == '-') {
            result -= nextNum
        }
        if (valuesArray[i] == '/') {
            result /= nextNum
        }
        if (valuesArray[i] == '*') {
            result *= nextNum
        } 
    }
}

function convertSymbol() {
    if (val == '÷') {
        return '/'
    }
    if (val == '×') {
        return '*'
    } else return val
    
}

function displayValue(value) {
    cells[0].innerHTML = value
}

