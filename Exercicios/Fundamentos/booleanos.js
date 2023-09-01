let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)

/* 
* A exclamação serve para tranformar o resultado de uma variavel na tipagem de boolean. 
* "!" será uma negação.
* se houver uma exclamação "!" ele será falso
* se houver duas exclamação "!!" ele será true, pq o segundo negará o primeiro
*/


// os que são verdadeiros (true)

console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// os que são falsos (false)

console.log(!!0)
console.log(!!'')
console.log(!!NaN)
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))

// para Finalizar

console.log(!!('' || null || 0 || ' '))

// Exemplo

let nomeFalse = ''
let nomeTrue = 'Will'

console.log(nomeFalse || 'Desconhecido') // Por conta do resultado da string vazia ser falso, o '||' (OU) retornará o segundo valor
console.log(nomeTrue || 'Desconhecido')
