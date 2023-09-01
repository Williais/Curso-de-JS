const aluno = [
    { nome: 'Sofia', nota: 7.3, bolsista: false },
    { nome: 'Luna', nota: 9.2, bolsista: true },
    { nome: 'Will', nota: 9.8, bolsista: false },
    { nome: 'Ayla', nota: 8.7, bolsista: true },
]

console.log(aluno.map(a => a.nota))
const resultado = aluno.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)