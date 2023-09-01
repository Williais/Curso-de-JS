const alunos = [
    { nome: 'Sofia', nota: 7.9 },
    { nome: 'Luna', nota: 8.1 },
    { nome: 'Ayla', nota: 9.2 }
]

// Imperativo

let total1 = 0 
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)