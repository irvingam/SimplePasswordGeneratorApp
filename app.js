                // Selectors //
const randomFunction = {
    lower: getLowercase,
    upper: getUppercase,
    number: getNumber,
    symbol: getSymbol
}

                // Events ??














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