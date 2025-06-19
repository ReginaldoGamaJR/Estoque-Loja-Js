const prompt = require("prompt-sync")()
//Vou importar as classes
import { Produto, Estoque } from './Objetos.js';
//Inicializando uma variável
//Usando o Do-While, para que rode  ao menos uma vez, e se a escolha não for sair
//Continuar rodando o código
estoqueLoja = new Estoque();
let escolha;
do{
    console.log("@---------------Estoque---------------@");
    console.log(" |        1-Adicionar Produto        |");
    console.log(" |        2-Remover Produto          |");
    console.log(" |        3-Venda                    |");
    console.log(" |        4-Saldo                    |");
    console.log(" |        5-Ver Estoque              |");
    console.log(" |        6-Sair                     |");
    console.log("@---------------Estoque---------------@");  
    escolha = parseInt(prompt(":")); 
    //Utilizando um switch-case para fazer o Menu rodar, escolhendo o correto de acordo com o que mostrei
    switch (escolha){
        case 1:
            nome = prompt("Digite o nome do produto: ");
            preco = prompt("Digite o valor:  ");
            p = new Produto(nome,preco);
            estoqueLoja.adicionarProduto(p);
            break;
    }
} while (escolha !== 6);
console.log("Fechando...");
console.log("Obrigado por utilizar nosso estoque!");
