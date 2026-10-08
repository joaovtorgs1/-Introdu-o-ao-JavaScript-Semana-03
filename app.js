// ============================================================
// DESENVOLVIMENTO WEB - SEMANA 04
// ARRAYS, DOM E EVENTOS
// ============================================================


// ============================================================
// BLOCO 1 - ARRAYS E MÉTODOS
// ============================================================

console.log("===== BLOCO 1 - ARRAYS =====");

// 1. Array de nomes

const nomes = ["João", "Maria", "Carlos"];

// forEach
nomes.forEach(function(nome) {
    console.log(`Olá, ${nome}!`);
});

// map
const nomesMaiusculos = nomes.map(function(nome) {
    return nome.toUpperCase();
});

console.log("Nomes em maiúsculas:", nomesMaiusculos);


// 2. Array de preços

const precos = [10, 25, 40, 5, 60];

// filter - preços acima de 20
const precosAcimaDe20 = precos.filter(function(preco) {
    return preco > 20;
});

console.log("Preços acima de 20:", precosAcimaDe20);

// reduce - soma dos preços
const somaPrecos = precos.reduce(function(acumulador, preco) {
    return acumulador + preco;
}, 0);

console.log("Soma dos preços:", somaPrecos);


// 3. Array de objetos - produtos

const produtos = [
    {
        nome: "Caderno",
        preco: 15
    },
    {
        nome: "Mochila",
        preco: 80
    },
    {
        nome: "Caneta",
        preco: 5
    },
    {
        nome: "Livro",
        preco: 40
    }
];

// map - extrair nomes
const nomesProdutos = produtos.map(function(produto) {
    return produto.nome;
});

console.log("Nomes dos produtos:", nomesProdutos);

// filter - produtos com preço menor que 50
const produtosMenoresQue50 = produtos.filter(function(produto) {
    return produto.preco < 50;
});

console.log("Produtos com preço menor que R$ 50:", produtosMenoresQue50);

// reduce - somar todos os preços
const valorTotalProdutos = produtos.reduce(function(acumulador, produto) {
    return acumulador + produto.preco;
}, 0);

console.log("Valor total dos produtos:", valorTotalProdutos);

// forEach - imprimir nome e preço
produtos.forEach(function(produto) {
    console.log(`Nome: ${produto.nome} - R$ ${produto.preco}`);
});


// ============================================================
// BLOCO 2 - MANIPULAÇÃO DO DOM
// ============================================================

console.log("===== BLOCO 2 - DOM =====");


// 1. Selecionar o h1 e alterar o texto

const titulo = document.querySelector("#titulo");

titulo.textContent = "Blog do João";


// 2. Selecionar todos os parágrafos

const paragrafos = document.querySelectorAll(".texto");

paragrafos.forEach(function(paragrafo) {
    console.log("Parágrafo:", paragrafo.textContent);
});


// 3. Selecionar a lista e inserir dois itens

const lista = document.querySelector("#lista");

lista.innerHTML = `
    <li>Primeiro item</li>
    <li>Segundo item</li>
`;


// 4. Criar terceiro item com createElement

const terceiroItem = document.createElement("li");

terceiroItem.textContent = "Terceiro item";

lista.append(terceiroItem);


// 5. Adicionar classe destaque

terceiroItem.classList.add("destaque");

console.log(
    "Possui a classe destaque:",
    terceiroItem.classList.contains("destaque")
);


// 6. Criar array de tarefas

const tarefas = [
    "Estudar JS",
    "Fazer exercícios",
    "Revisar DOM"
];


// Criar um li para cada tarefa

tarefas.forEach(function(tarefa) {

    const item = document.createElement("li");

    item.textContent = tarefa;

    lista.append(item);

});


// Aplicar classe "feito" ao primeiro li

const primeiroItem = lista.querySelector("li");

primeiroItem.classList.add("feito");


// Quantidade total de itens

const quantidadeItens = lista.querySelectorAll("li").length;

console.log("Quantidade total de itens:", quantidadeItens);


// ============================================================
// BLOCO 3 - EVENTOS
// ============================================================

console.log("===== BLOCO 3 - EVENTOS =====");


// 1. Evento click no botão

const botao = document.querySelector("#botao");

botao.addEventListener("click", function() {

    console.log("Clicou!");

});


// 2. Evento mouseover

botao.addEventListener("mouseover", function() {

    botao.textContent = "Pode clicar!";

});


// 3. Evento keyup no campo nome

const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", function() {

    console.log("Nome digitado:", campoNome.value);

});


// ============================================================
// 4. EVENT DELEGATION
// ============================================================

// Um único evento para toda a lista

lista.addEventListener("click", function(e) {

    if (e.target.tagName === "LI") {

        e.target.classList.toggle("feito");

        console.log(
            "Item clicado:",
            e.target.textContent
        );

    }

});


// Criar novo li pelo JavaScript

const novoItem = document.createElement("li");

novoItem.textContent = "Item criado pelo JavaScript";

lista.append(novoItem);

console.log(
    "Novo item criado:",
    novoItem.textContent
);


// ============================================================
// 5. FORMULÁRIO
// ============================================================

const formulario = document.querySelector("#formulario");

const campoTarefa = document.querySelector("#tarefa");


formulario.addEventListener("submit", function(e) {

    // Impede o recarregamento da página

    e.preventDefault();


    // Pega o texto e remove espaços extras

    const textoTarefa = campoTarefa.value.trim();


    // Se estiver vazio, não adiciona

    if (textoTarefa === "") {

        return;

    }


    // Criar novo li

    const novaTarefa = document.createElement("li");

    novaTarefa.textContent = textoTarefa;


    // Adicionar à lista

    lista.append(novaTarefa);


    // Limpar campo

    campoTarefa.value = "";


    console.log(
        "Nova tarefa adicionada:",
        textoTarefa
    );

});


// ============================================================
// FINAL DO PROJETO
// ============================================================

console.log("===== PROJETO SEMANA 04 FINALIZADO =====");