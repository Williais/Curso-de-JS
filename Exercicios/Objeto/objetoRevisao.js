// coleção dinamica de pares chave/valor

const produto = new Object
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            lagradouro: 'Rua Conde Deu',
            numero: 123
        }
    },
    condutores:[{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Maria',
        idade: 25
    }],
    calculaValorSeguro(){
        // ...
    }
}

carro.proprietario.endereco.numero = 100

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calculaValorSeguro
console.log(carro.condutores)
