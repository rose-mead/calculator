//Reverse pseudocode
// on click, store the value of text

// if it is a number or a dot, store in 'temp' variable, answer.val = temp
// if it is a random symbol - do some stuff
// if it is / or *, convert to / *, push 'temp numbers' and push symbol, clear temp variable
// if it is equals, push temp, iterate through entries array, do math on the next number, add to nt variable
// 

var cells = document.getElementsByTagName('td')

var temp = ''
var equation = []
var symbolsArray = []
var valuesArray = []
var val = ''
var result = 0 



for (var i=1; i<cells.length; i++) {
    cells[i].onclick =  getNumber
}

function getNumber() {
    val = this.innerHTML
    console.log(val)
    checkNumber()
}


function checkNumber() {
    if (!isNaN(val) || val == '.') {
        temp += val
        result = temp
    }


    // go through array
    // first number = result
    // result *+ next number = result
    else if (val === '=') {
        valuesArray.push(temp)
        result = Number(valuesArray[0])
        // console.log(result)
        for(var i=0; i<valuesArray.length; i++) {
            if(valuesArray[i] == '+') {
                var nextNum = valuesArray[i+1]
                result = result + Number(nextNum)
            }
            if(valuesArray[i] == '-') {
                var nextNum = valuesArray[i+1]
                result = result - Number(nextNum)
            }
            if(valuesArray[i] == '/') {
                var nextNum = valuesArray[i+1]
                result = result / Number(nextNum)
            }
            if(valuesArray[i] == '*') {
                var nextNum = valuesArray[i+1]
                result = result * Number(nextNum)
            }
        }
        // }
    } else if (val == 'AC') {
        temp = ''
        valuesArray = []
        result = 0
    } else if (val == 'CE') {
        temp = ''

    }
 
     else {
        valuesArray.push(temp)
        val = convertSymbol()
        valuesArray.push(val)
        temp = ''
        
        }

        displayValue(result)
        

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

