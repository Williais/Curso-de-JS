 function Carro(velocidadeMaxima = 200, delta = 5) {

    // Atributo Privado
    let velocidadeAtual = 0

    // Método Publico
    this.acelerar = function (){ // Usando o THIS permite deixar essa função pública. Se caso quiser deixar privada esse método, troque o THIS pelo LET ou CONST.
        if (velocidadeAtual + delta <= velocidadeMaxima ) {
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Método Publico

    this.getVelocidadeAtual = function () {
        return velocidadeAtual 
    }
 }

 const uno = new Carro
 uno.acelerar()
 console.log(uno.getVelocidadeAtual())

 const ferrari = new Carro(350, 20)
 ferrari.acelerar() // Cada um valerá 20
 ferrari.acelerar() 
 ferrari.acelerar() 
 ferrari.acelerar() 
 console.log(ferrari.getVelocidadeAtual())