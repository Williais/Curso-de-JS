console.log(soma(3, 5)) /* Usando a Function Declaration, o console pode ser adicionado
 antes da funcão*/

// Function Declaration
function soma(x, y) {
    return x + y
}

// Function Expression
const sub = function soma(x, y) {
    return x - y
}
console.log(sub(3, 5))

// Named Function Expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 5))

/* Usando o Named Function Expression e o Function Expression, isso nao eh possivel.
o console precisa ser chamado depois.*/