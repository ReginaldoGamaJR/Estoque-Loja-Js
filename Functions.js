import promptSync from 'prompt-sync';
const prompt = promptSync();
//Criei esse arquivo para juntar as funções e melhorar a legibilidade do código principal, fazendo com que ele contenha apenas a lógica
//Melhorar também a escalabilidade do projeto
/////////////////// Função para receber inteiro ///////////////////////
function receberInteiro(mensagem){
    let valor;
    do {
        valor = parseInt(prompt(mensagem))
        if(isNaN(valor) || !Number.isInteger(valor) || valor < 0){
            console.log("Entrada inválida. Por favor, digite um número inteiro e positivo!");
        } else{
            break;
            }
        } while (true)
    return valor;
}
////////////////// Função para receber um Float /////////////////////////
function receberFloat(mensagem){
    let valor;
    do {
        valor = parseFloat(prompt(mensagem))
        if(isNaN(valor) || valor <= 0){
            console.log("Entrada inválida. Por favor, digite um número inteiro e positivo!");
        } else{
            break;
            }
        } while (true)
    return valor;
}

export {receberInteiro, receberFloat}
