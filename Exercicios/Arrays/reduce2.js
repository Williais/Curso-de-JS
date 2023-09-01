const aluno = [
    { nome: 'Sofia', nota: 7.3, bolsista: false },
    { nome: 'Luna', nota: 9.2, bolsista: true },
    { nome: 'Will', nota: 9.8, bolsista: false },
    { nome: 'Ayla', nota: 8.7, bolsista: true },
]


// Desafio 1: Todos os alunos são bolsista?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(aluno.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2: algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(aluno.map(a =>a.bolsista).reduce(algumBolsista))