function soma(num1, num2){
    return num1 + num2
}
function sub(num1, num2){
    return num1 - num2
}
function multi(num1, num2){
    return num1 * num2
}
function divisao(num1, num2){
    return num1 / num2
}

let param1 = 15
let param2 = 15
let operacao = "+"

if(operacao === "+"){

    console.log(soma(param1, param2))

}else if(operacao === "-"){

    console.log(sub(param1, param2))

}else if(operacao === "*"){

    console.log(multi(param1, param2))

}else{

    console.log(divisao(param1, param2))

}