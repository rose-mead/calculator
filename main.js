// Reverse pseudocode

// declare variables - entries array, total num, temp string
// on button click - store value in temp
// if value is a number or dot - add number to temp variable
// store as substring in property of answer object 
// if symbol is clicked - clear variables, convert x to * etc push onto entries array
// if symbol is +-/* do the math on the next number in array
// if a negative number do math abs to it is handled correctly
// else push the number on to temp and val

//Improvements
// get pressed key as string
// use this instead of i with onclick function
// instead of adding to array += to string
var cells = []
cells = document.getElementsByTagName('td')
console.log(cells)
var array =[1,2,3]

var pressed = ""
var equation = []
var symbol = []
var array = []
var val = 0



for (var i=1; i<cells.length; i++) {
    cells[i].onclick =  getNumber
}

function getNumber() {
    val = this.innerHTML
    console.log(val)
    checkNumber()
}

// if number add to array
// if symbol convert to symbol
// pressed = [ [1,2,3], [x], [2]]
function checkNumber() {
    if (!isNaN(val) || val == '.') {
        pressed += val
        displayValue()

        // equation = Number(val)
    } else {
        // console.log(pressed)
    }

}

function displayValue() {
    cells[0].innerHTML = pressed
}

