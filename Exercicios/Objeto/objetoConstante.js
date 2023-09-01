// pessoa -> 123 -> {...}

const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// vai dar erro
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa) // não vai deixar apagar, mudar ou adicionar nada pq agr eh um objeto constante


pessoa.nome = "Maria"
console.log(pessoa.nome)