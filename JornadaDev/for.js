//    for ( /*inicializador;*//*condição-saída;*//*expressão final;*/ ){
//       executar o nosso codigo
// }

//exercicios

let notas = [2, 5, 10, 25, 50, 100, 10, 25, 50, 100, 10, 25, 50, 100, 10, 25, 50, 100]
let total = 0

for (let repeticoes = 0; repeticoes < notas.length; repeticoes++){
    total = total + notas[repeticoes]
}

console.log(total)