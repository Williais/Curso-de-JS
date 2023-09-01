const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Sofia'
console.log(filha1.corCabelo)

const filha2 = Object.creat (pai, {
    nome: {value: 'Luna', writable: false, enumerable: true}
})

console.log(filha2.nome)
console.log(`$[filha2.nome] tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))