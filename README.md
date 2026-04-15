# to-do-app
# To-Do List — Aplicação Web com HTML, CSS e JavaScript

## Descrição do Projeto

Este projeto consiste no desenvolvimento de uma aplicação web de lista de tarefas (To-Do List), construída utilizando HTML5, CSS3 e JavaScript puro. O objetivo principal é demonstrar a aplicação prática de conceitos fundamentais de desenvolvimento front-end, incluindo estruturação semântica, estilização responsiva e manipulação dinâmica do DOM.

A aplicação permite ao usuário adicionar tarefas, definir níveis de prioridade e marcar tarefas como concluídas, proporcionando uma interface simples, funcional e intuitiva.

---

## Estrutura do Sistema

O sistema foi desenvolvido com base na separação de responsabilidades entre as três principais tecnologias:

### HTML (Estrutura)

O HTML é responsável pela organização semântica da interface. Foram utilizados elementos como `<header>`, `<main>`, `<section>`, `<form>` e `<ul>` para garantir acessibilidade e clareza estrutural.

A interface é composta por:

* Um formulário para inserção de tarefas
* Um seletor de prioridade (Alta, Média, Baixa)
* Um botão de submissão
* Uma lista dinâmica de tarefas

---

### CSS (Estilização)

O CSS foi utilizado para criar uma interface visual moderna e responsiva. Foram aplicados conceitos como:

* Uso de variáveis CSS (`:root`) para padronização de cores e estilos
* Layout com Flexbox
* Estilização condicional baseada em classes (ex: `.alta`, `.media`, `.baixa`)
* Estados visuais para tarefas concluídas (`.completed`)
* Responsividade para diferentes tamanhos de tela

A separação entre estrutura e estilo permite maior organização e escalabilidade do código.

---

### JavaScript (Interatividade)

O JavaScript é responsável pela lógica da aplicação e manipulação dinâmica do DOM.

As principais funcionalidades implementadas incluem:

* Captura de dados do formulário por meio de `eventListener`
* Prevenção do comportamento padrão de recarregamento da página (`event.preventDefault()`)
* Criação dinâmica de elementos HTML utilizando `createElement`
* Inserção de novas tarefas na lista (`appendChild`)
* Alternância de estado de conclusão utilizando `classList.toggle`

Além disso, foi utilizada a técnica de delegação de eventos para lidar com ações em elementos dinâmicos.

---

## Funcionamento

1. O usuário insere uma descrição de tarefa e seleciona uma prioridade.
2. Ao submeter o formulário, a tarefa é adicionada dinamicamente à lista.
3. Cada tarefa recebe uma classe correspondente à sua prioridade, influenciando sua estilização.
4. O botão "Concluir" permite alternar o estado da tarefa, aplicando estilos visuais de conclusão.

---

## Considerações Finais

O projeto evidencia a importância da separação entre estrutura, estilo e comportamento no desenvolvimento web. Além disso, demonstra a utilização consciente de ferramentas e técnicas modernas, promovendo um código organizado, reutilizável e de fácil manutenção.

Trata-se de uma aplicação simples, porém representativa dos princípios fundamentais do desenvolvimento front-end.
