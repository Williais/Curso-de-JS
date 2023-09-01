const quaseArray = { 0: 'Sofia', 1: 'Luna', 2: 'Ayla' }
console.log(quaseArray)

Object.defineProperties(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    Enumerator: false
})

console.log(quaseArray[0])

const meuArray = ['Sofia', 'Luna', 'Ayla']
console.log(quaseArray.toString(), meuArray)