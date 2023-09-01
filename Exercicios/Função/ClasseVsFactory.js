class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome} `)
    }
}

const p1 = new Pessoa ('João')
p1.falar()

//versão factory

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = new Pessoa ('Rogério')
p2.falar()