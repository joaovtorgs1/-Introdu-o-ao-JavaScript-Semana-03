````markdown
# Desenvolvimento Web - Semana 04

## Arrays, DOM e Eventos

Este projeto foi desenvolvido para praticar os conceitos de Arrays, manipulação do DOM e eventos em JavaScript.

## Tecnologias utilizadas

- HTML5
- JavaScript
- DOM
- Git e GitHub

---

## Bloco 1 - Arrays

Foram utilizados os principais métodos de arrays:

### forEach

O `forEach` percorre cada elemento de um array e executa uma função para cada item.

Exemplo:

```javascript
nomes.forEach(function(nome) {
    console.log(`Olá, ${nome}!`);
});
````

### map

O `map` percorre um array e cria um novo array com os valores transformados.

Exemplo:

```javascript
const nomesMaiusculos = nomes.map(function(nome) {
    return nome.toUpperCase();
});
```

### filter

O `filter` cria um novo array contendo somente os elementos que atendem a uma determinada condição.

Exemplo:

```javascript
const precosAcimaDe20 = precos.filter(function(preco) {
    return preco > 20;
});
```

### reduce

O `reduce` percorre os elementos e acumula os valores, retornando normalmente um único resultado.

Exemplo:

```javascript
const somaPrecos = precos.reduce(function(acumulador, preco) {
    return acumulador + preco;
}, 0);
```

---

## Bloco 2 - DOM

A manipulação do DOM permite alterar os elementos HTML utilizando JavaScript.

Foi utilizado `querySelector` para selecionar elementos específicos:

```javascript
const titulo = document.querySelector("#titulo");
```

Também foi utilizado `querySelectorAll` para selecionar vários elementos:

```javascript
const paragrafos = document.querySelectorAll(".texto");
```

O `createElement` foi utilizado para criar novos elementos HTML:

```javascript
const item = document.createElement("li");
```

O `append` adiciona elementos criados ao DOM:

```javascript
lista.append(item);
```

O `classList.add` adiciona uma classe ao elemento:

```javascript
item.classList.add("destaque");
```

Já o `classList.contains` verifica se uma determinada classe existe no elemento.

---

## Bloco 3 - Eventos

Os eventos permitem que o JavaScript responda às ações realizadas pelo usuário.

Foi utilizado `addEventListener` para detectar eventos como:

* click
* mouseover
* keyup
* submit

No formulário foi utilizado:

```javascript
e.preventDefault();
```

Isso impede que a página seja recarregada quando o formulário é enviado.

---

## Event Delegation

Event Delegation é uma técnica em que o evento é registrado em um elemento pai em vez de adicionar um evento individualmente em cada elemento filho.

Neste projeto, apenas um evento de `click` foi adicionado à lista:

```javascript
lista.addEventListener("click", function(e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
    }

});
```

Essa técnica melhora a organização e pode melhorar a performance, principalmente quando existem muitos elementos.

Além disso, elementos `<li>` criados posteriormente pelo JavaScript também funcionam automaticamente com o mesmo evento.

---

## Como executar

1. Abra o arquivo `index.html` no navegador.
2. Pressione `F12`.
3. Acesse a aba **Console**.
4. Interaja com o botão, campo de nome e formulário.
5. Clique nos itens da lista para testar o Event Delegation.

## Estrutura do projeto

```text
semana04/
│
├── index.html
├── app.js
└── README.md
```

## Objetivo

O objetivo deste projeto é consolidar os conhecimentos de JavaScript relacionados a arrays, manipulação do DOM e eventos, preparando a base para projetos web mais interativos e aplicações maiores.

```
```
