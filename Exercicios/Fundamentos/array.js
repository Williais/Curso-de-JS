const valores = [10, 8.7, 2.8, 12]
console.log(valores[0], valores[2])
console.log(valores[4])

valores[4] = 45
console.log(valores)
console.log(valores.length)

console.log(valores.pop()) // o ultimo valor do array será retirado

delete valores[0]
console.log(valores)



console.log(typeof valores)