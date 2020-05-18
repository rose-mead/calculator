// Reverse pseudocode

// declare variables
// on button click - store value
// if value is a number or equal sign - add number to temp variable
// store as substring in property of answer object 
// if symbol is clicked - clear variables, convert x to * etc
// if symbol is +-/* do the math on the next number in array
// if a negative number do math abs to it is handled correctly
// else push the number on to temp and val

var cells = []
cells = document.getElementsByTagName('td')
console.log(cells)
var array =[1,2,3]

var pressed = 0
var equation = []
var symbol = []



for (var i=1; i<cells.length; i++) {
    cells[i].onclick =  getNumber(i)
}

function getNumber(i) {
    return function() {
        pressed = cells[i].innerHTML
        console.log(pressed)
        addToEquation()
        displayValue()
    }
}

// if number add to array
// if symbol convert to symbol
function addToEquation() {
    if (!isNaN(pressed) || pressed == '=') {
        equation.push(Number(pressed))
        console.log(equation)
    } else if (pressed == '+') {
        symbol = +
        console.log(symbol)
    }

}

function displayValue() {
    cells[0].innerHTML = pressed
}

