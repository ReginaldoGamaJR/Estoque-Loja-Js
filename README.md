📦 Sistema de Estoque - JavaScript
Este é um projeto de sistema de controle de estoque desenvolvido em JavaScript puro (Node.js), com foco em aprendizado prático de programação orientada a objetos, modularização e estrutura de back-end.

✅ Funcionalidades atuais
Cadastro de produtos com:
ID único automático
Nome
Preço
Quantidade (com valor padrão)
Registro de vendas
Atualização automática da quantidade
Cálculo do valor da venda
Cálculo do valor total em estoque
Valor total acumulado das vendas
Listagem completa dos produtos
Menu interativo via terminal usando prompt-sync
🛠️ Tecnologias usadas
Node.js
JavaScript (ES6)
prompt-sync (entrada de dados no terminal)
🧠 Organização do projeto
estoque/ ├── Objetos.js // Classes Produto e Estoque ├── Estoque.js // Execução principal com menu e interações ├── package.json // Gerenciador de dependências

🗂️ Planejamento futuro
 Integração com banco de dados (possivelmente SQLite, MySQL ou MongoDB)
 Salvar e carregar os dados de produtos e vendas
 Registro de histórico de vendas
 Interface visual (possivelmente com React ou Electron)
 Autenticação para acesso ao sistema (admin / vendedor)
🚀 Como rodar o projeto
Clone o repositório:
git clone https://github.com/seu-usuario/estoque-lanna.git
cd estoque-lanna
2 Instale as dependências:

bash npm install 3 Execute o sistema: bash node Estoque.js Certifique-se de que seu package.json contém "type": "module" para suportar import/export.

✍️ Autor Desenvolvido por Reginaldo Gama Junior — para fins de estudo e prática com lógica e estruturação de sistemas back-end.
