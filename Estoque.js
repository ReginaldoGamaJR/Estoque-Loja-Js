import promptSync from 'prompt-sync';
const prompt = promptSync();
//Vou importar as classes
import {Produto,Estoque} from './Objetos.js';
//Vou importar as funções
import { receberInteiro, receberFloat } from './Functions.js';
//Inicializando uma variável
//Usando o Do-While, para que rode  ao menos uma vez, e se a escolha não for sair
//Continuar rodando o código
const estoqueLoja = new Estoque();
let escolha;
do{
    console.log("@---------------Estoque---------------@");
    console.log(" |        1-Adicionar Produto        |");
    console.log(" |        2-Alterar produto          |");
    console.log(" |        3-Venda                    |");
    console.log(" |        4-Valor total do estoque   |");
    console.log(" |        5-Ver Estoque              |");
    console.log(" |        6-Sair                     |");
    console.log("@---------------Estoque---------------@");  
    escolha = receberInteiro("Escolha a opção que deseja: ")
    //Utilizando um switch-case para fazer o Menu rodar, escolhendo o correto de acordo com o que mostrei
    switch (escolha){
        case 1:
            let nome = prompt("Digite o nome do produto: ");
            let quantidade1;
            let preco;
            let custo;
            // Validando as entradas, tanto da quantidade quanto do preço!
            quantidade1 = receberInteiro("Digite a quantidade: ")
            preco = receberFloat("Digite o valor do produto: ")
            custo = receberFloat("Digite o custo do produto: ")
            // Pronto, preco e quantidade validados, agora criar um novo produto e adicioná-lo ao estoque
            let p = new Produto(nome,quantidade1,preco,custo);
            estoqueLoja.adicionarProduto(p);
            console.log("Novo produto adicionado com sucesso ao estoque!")
            break;
        case 2:
            //Primeiro verifico se existem produtos cadastrados
            if (estoqueLoja.produtos.length == 0){
                console.log("Não há nenhum produto cadastrado no sistema!")
                break;
            } 
            //Se existem então sigo com o quadro de alterações
            else{
                let id1;
                let escolha2;
                id1 = receberInteiro("Digite o ID do produto: ");
                do {
                    console.log("@---------------Alterar---------------@");
                    console.log(" |        1-Nome                     |");
                    console.log(" |        2-Preço                    |");
                    console.log(" |        3-Quantidade               |");
                    console.log(" |        4-Voltar para o Estoque    |");
                    console.log("@-------------------------------------@"); 
                    escolha2 = receberInteiro("Escolha a opção que desejar: ");
                    switch (escolha2) {
                        case 1:
                            let nomeCerto = prompt("Digite o novo nome do produto: ");
                            estoqueLoja.produtos[id1 - 1].nome = nomeCerto;
                            console.log(`Alteração realizada com sucesso.`);
                            console.log(`Novo nome: ${estoqueLoja.produtos[id1-1].nome}`);
                        break;
                        case 2:
                            let valorCerto = receberFloat("Digite o novo valor: ");
                            estoqueLoja.produtos[id1 - 1].preco = valorCerto;
                            console.log(`Alteração realizada com sucesso.`);
                            console.log(`Novo qalor: ${estoqueLoja.produtos[id1-1].preco}`);
                            break;
                        case 3:
                            let quantidadeCerta = receberInteiro("Digite a quantidade correta do produto: ");
                            estoqueLoja.produtos[id1 - 1].quantidade = quantidadeCerta;
                           console.log(`Alteração realizada com sucesso.`)
                           console.log(`Nova quantidade: ${estoqueLoja.produtos[id1 - 1].quantidade}`)
                           break;
                    }
                } while (escolha2 !== 4)
                console.log("Voltando para o Estoque...")
                }
            break;
        case 3:
            let id = receberInteiro("Digite o ID do produto: ");
            let quantidade = receberInteiro("Digite a quantidade de itens vendidos: ");
            estoqueLoja.venderProduto(id,quantidade);
            break;
        case 4:
            estoqueLoja.valorTotalEstoque();
            break;
        case 5:
            estoqueLoja.listarEstoque();
            break;
    }
} while (escolha !== 6);
console.log("Fechando...");
console.log("Obrigado por utilizar nosso estoque!");
