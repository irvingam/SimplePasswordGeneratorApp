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

// Password Generation Event
generateBtn.addEventListener('click', () => {
    const length = +lengthElement.value
    const checkedLower = lowercaseElement.checked
    const checkedUpper = uppercaseElement.checked
    const checkedNumber = numbersElement.checked
    const checkedSymbol = symbolsElement.checked

    resultElement.innerText = generatePassword(checkedLower, checkedUpper, checkedNumber, checkedSymbol, length)
})

                // Functions //

// Puts Functions Together to Generate Password
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol 
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])

    if(typesCount === 0) {
        return ''
    }

    for(let i = 0; i < length; i+=typesCount) {
        typesArr.forEach(type => {
            const functionName = Object.keys(type)[0]
            generatedPassword += randomFunction[functionName]()
        })
    }
    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}

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
