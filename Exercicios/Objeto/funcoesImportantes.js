const pessoa = {
    nome: 'Rebeca',
    idade: 25,
    peso: 50
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperties(pessoa, 'dataNascimento', {
    enumerable: true,
    Writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2023'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ecmascript 2015)

const dest = { a: 1}
const o1 = { b: 2}
const o2 = { a: 4, c: 3}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
