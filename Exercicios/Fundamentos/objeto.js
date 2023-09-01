const prod1 = {}

prod1.nome = 'Escada';
prod1.preco = 1285.50;
prod1['Desconto legal'] = 0.40; // evitar atributos com espaços

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.50,
    desconto: 0.20
}

console.log(prod2);