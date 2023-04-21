# Medidor de Calorias de Saladas

O **Medidor de Calorias de Saladas** é um site estático desenvolvido com HTML, CSS e Javascript que permite aos usuários escolher ingredientes e medir a quantidade de calorias de uma salada personalizada. 

## Acessando o site

O site pode ser acessado através do link: https://viniciusmponte.github.io/medidor-de-calorias-de-saladas/

## Como funciona

Ao acessar o site, o usuário é apresentado a uma lista de ingredientes para a salada (seção 1). Ao clicar em um ingrediente, sua cor de fundo muda, indicando que foi selecionado. Depois de escolher os ingredientes desejados, o usuário pode clicar no botão "Continuar", que leva a uma nova tela (seção 2), mostrando os ingredientes selecionados e suas informações nutricionais correspondentes. Nesta tela, é possível definir a quantidade (em gramas) que o usuário deseja para cada ingrediente. A alteração da porção resulta na atualização das informações nutricionais do ingrediente. O total de calorias de todos os ingredientes juntos aparece no final da tela. O usuário pode clicar no botão "Voltar" para incluir ou remover ingredientes. As porções definidas para os ingredientes selecionados são mantidas, não exigindo que o usuário as repita a cada alteração de ingredientes.

## Estrutura do projeto

Toda a lógica do site é dividida em módulos, como segue:

- **app.js**: Inicia todos os outros módulos;

- **sections.js**: Gerencia a lógica de exibição e seleção de ingredientes, bem como a navegação entre as diferentes seções. Ele carrega uma cópia do banco de dados de ingredientes e a armazena em uma variável, realizando também a ordenação em ordem alfabética e a capitalização da primeira letra do nome do ingrediente. Em seguida, carrega os ingredientes do banco de dados na seção 1 do site e adiciona eventListeners para os ingredientes e botões. O módulo é responsável também por alternar entre as seções, armazenando os ingredientes selecionados para a seção 2, carregando as informações nutricionais e incluindo os textareas para o usuário alterar os valores das porções;

- **input.js**: Exporta um objeto com todos os métodos necessários para incluir inputs, como eventListeners, filtros de caracteres para os textareas, etc;

- **screen.js**: Exporta um objeto com todos os métodos necessários para manipular e exibição de informações na tela. Ele contém métodos para definir a grade de exibição dos ingredientes, mostrar a seção 1 ou seção 2 dos ingredientes, limpar a exibição, mostrar novos valores nutricionais e exibir o total de calorias da receita;

- **dataTools.js**: Exporta um objeto com diversos métodos para manipulação de dados, incluindo filtragem, extração de propriedades, ordenação, capitalização e criação/atualização de array de objetos. As funções recebem parâmetros como um array de objetos e uma propriedade a ser filtrada/ordenada/capitalizada;

- **mathTools.js**: Exporta um objeto com o método responsável por calcular os valores nutricionais dos ingredientes de acordo com as porções definidas pelo usuário, usando para isso uma regra de três entre os valores originais e o definido pelo usuário;

## Contato

- LinkedIn: https://www.linkedin.com/in/viniciusmponte/
- E-mail: vinicius.mponte@gmail.com
- Portfólio: https://viniciusmponte.github.io/portfolio/
