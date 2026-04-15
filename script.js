// Seleção de elementos
const form = document.querySelector(".task-form");
const input = document.querySelector("#task-input");
const select = document.querySelector("#priority-select");
const list = document.querySelector(".task-list");

// Evento de adicionar tarefa
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = input.value.trim();
  const priority = select.value;

  // Validação
  if (taskText === "" || priority === "") {
    alert("Preencha todos os campos!");
    return;
  }

  // Criar elemento <li>
  const li = document.createElement("li");
  li.classList.add("task-item", priority);

  // Criar estrutura interna sem quebrar o VSCode
  const article = document.createElement("article");
  article.classList.add("task-content");

  const header = document.createElement("header");
  header.classList.add("task-header");

  const title = document.createElement("h3");
  title.classList.add("task-title");
  title.textContent = taskText;

  const priorityText = document.createElement("span");
  priorityText.classList.add("priority", priority);
  priorityText.textContent = priority;

  header.appendChild(title);
  header.appendChild(priorityText);

  const footer = document.createElement("footer");

  const button = document.createElement("button");
  button.classList.add("btn-complete");
  button.textContent = "Concluir";

  footer.appendChild(button);

  article.appendChild(header);
  article.appendChild(footer);

  li.appendChild(article);

  list.appendChild(li);

  // Limpar campos
  input.value = "";
  select.value = "";
});

// Evento para concluir tarefa (delegação de evento)
list.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-complete")) {
    const taskItem = event.target.closest(".task-item");
    taskItem.classList.toggle("completed");
  }
});