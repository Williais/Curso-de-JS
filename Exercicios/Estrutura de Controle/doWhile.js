function aleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let num = -1 //somente iniciada a variável, sem valor inicial!
/* Diferente da estrutura While, o Do/While não é necessário 
atribuir um valor inicial para a variável opcao*/

do { // Dificilmente é usado
    num = aleatorio(-1, 10)
    console.log(`O número escolhido foi ${num}. `)
} while (num != -1)

console.log("Acabou, meu irmão!")