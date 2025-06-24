//Arquivo para deixar mais organizado o código e para refatorar mais facilmente
//Cada produto vai ter um ID, um NOME, um Quantidade e um Preço
//Para tornar o ID de cada produto único, vou criar um contador, que a cada novo produto criado é somado em 1
//Fazendo com que dois produtos não tenham o mesmo valor
let idAtual = 1;
class Produto {
    constructor(nome, quantidade, preco,custo){
        this.id = idAtual;
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = parseFloat(preco);
        this.custo = parseFloat(custo);
        idAtual++;
    }
    adicionarAoEstoque(quantidade){
        this.quantidade += quantidade;
    }
    removerDoEstoque(quantidade){
        //Remover do estoque vou considerar que estarão comprando, e se estiverem e a quantidade que eu remover for maior
        //Do que a que existe atualmente, vou retornar estoque insuficiente
        if (quantidade > this.quantidade){
            console.log("Estoque insuficiente!");
            console.log(`${this.quantidade} peças no estoque atualmente.`);
            return false;
        } else{
        this.quantidade -= quantidade;
        console.log(`${this.quantidade} peças restantes.`);
        return true;
        }
    }
};
//Vou criar uma classe Estoque, voltada para o geral, valor das vendas total, vender os produtos, guardá-los e organizar
//De uma forma melhor
class Estoque {
    constructor(){
        this.produtos = [];
        this.valorVendas = 0;
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    venderProduto(id,quantidade){
        const produto = this.produtos.find(p => p.id === id);
        if (!produto){
            return console.log("Produto não encontrado!")
        }
        //Vou criar a const venda para ver se é possível vender o produto, se ele está no estoque
        //Se estiver o if (venda) é true e o código do if roda, se não ele não roda
        const venda = produto.removerDoEstoque(quantidade)
        if (venda) {
            const valor = quantidade * produto.preco;
            this.valorVendas += valor;
            console.log(`Venda realizada com sucesso`);
            console.log(`Valor: ${valor.toFixed(2)}`);
        }
    }
    valorTotalEstoque(){
        //Agora eu vou verificar o valor total do estoque, ou seja, eu tenho que percorrer o array
        //This.produtos inteiro e ir somando a quantidade * preço de cada produto registrado
        return console.log(`O valor total em estoque é R$${this.produtos.reduce((somaTotal, p) => somaTotal + (p.quantidade * p.preco), 0)}`)
    }
    listarEstoque(){
        this.produtos.forEach(p => 
            console.log(`ID : ${p.id} | Nome : ${p.nome} | Custo : R$${p.custo.toFixed(2)}| Preço : R$${p.preco.toFixed(2)} | Lucro : R$${(p.preco.toFixed(2) - p.custo.toFixed(2))}| Quantidade : ${p.quantidade}`)
        )
    }
//Agora vou exportar tudo, deixando possível eu importar as classes no Estoque.js
};
export { Produto, Estoque };
