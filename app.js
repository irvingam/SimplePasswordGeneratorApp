                // Selectors //

// Function Selectors
const randomFunction = {
    lower: getLowercase,
    upper: getUppercase,
    number: getNumber,
    symbol: getSymbol
}

// DOM Selectors
const resultElement = document.getElementById('result')
const lengthElement = document.getElementById('pass-length')
const uppercaseElement = document.getElementById('pass-uppercase')
const lowercaseElement = document.getElementById('pass-lowercase')
const numbersElement = document.getElementById('pass-numbers')
const symbolsElement = document.getElementById('pass-symbols')
const generateBtn = document.getElementById('generate')
const clipboardBtn = document.getElementById('clipboard')


                // Events //
//
generateBtn.addEventListener('click', () => {
    const length = +lengthElement.value
    const checkedLower = lowercaseElement.value
    const checkedUpper = uppercaseElement.value
    const checkedNumber = numbersElement.value
    const checkedSymbol = symbolsElement.value
})












                // Functions //

// Get Lowercase Letter
function getLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

// Get Uppercase Letter
function getUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

// Get Number
function getNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

// Get Symbols
function getSymbol() {
    const symbols = '!@#$%^&*(){}[]=+<>/?.,'
    return symbols[Math.floor(Math.random() * symbols.length)]
}