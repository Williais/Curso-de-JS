const escola = [{
    nome: 'Turma m1',
    alunos: [{
        nome: 'Sofia',
        nota: 9.8
    },{
        nome: 'Ayla',
        nota: 8.9
    }]
}, {
    nome: 'Turma m2',
    alunos: [{
        nome: 'Will',
        nota: 7.8
    },{
        nome: 'Apolo',
        nota: 9.5
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)