import promptSync from 'prompt-sync';
const prompt = promptSync();
//Vou importar as classes
import {Produto,Estoque} from './Objetos.js';
//Inicializando uma variável
//Usando o Do-While, para que rode  ao menos uma vez, e se a escolha não for sair
//Continuar rodando o código
const estoqueLoja = new Estoque();
let escolha;
do{
    console.log("@---------------Estoque---------------@");
    console.log(" |        1-Adicionar Produto        |");
    console.log(" |        2-Venda                    |");
    console.log(" |        3-Valor total do estoque   |");
    console.log(" |        4-Ver Estoque              |");
    console.log(" |        5-Sair                     |");
    console.log("@---------------Estoque---------------@");  
    escolha = parseInt(prompt(":")); 
    //Utilizando um switch-case para fazer o Menu rodar, escolhendo o correto de acordo com o que mostrei
    switch (escolha){
        case 1:
            let nome = prompt("Digite o nome do produto: ");
            let quantidade1 = parseInt(prompt("Digite a quantidade de itens: "));
            let preco = parseFloat(prompt("Digite o valor:  "));
            let p = new Produto(nome,quantidade1,preco);
            estoqueLoja.adicionarProduto(p);
            break;
        case 2:
            let id = parseInt(prompt("Digite o ID do produto: "));
            let quantidade = parseInt(prompt("Digite a quantidade de itens vendidos: "));
            estoqueLoja.venderProduto(id,quantidade);
            break;
        case 3:
            estoqueLoja.valorTotalEstoque();
            break;
        case 4:
            estoqueLoja.listarEstoque();
            break;
    }
} while (escolha !== 5);
console.log("Fechando...");
console.log("Obrigado por utilizar nosso estoque!");
