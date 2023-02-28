const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const innerHtmlToBeAdded = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
        `;

  list.innerHTML += innerHtmlToBeAdded;
};

addForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  } else {
    alert("Must input a value!");
  }
});

// delete todos

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});


const filteredTodos = (word) => {
    Array.from(list.children)
        .filter((todo) => {
            return !todo.textContent.includes(word);
        })
        .forEach((todo) => {
            todo.classList.add('filtered');
        })
}

// keyup event
search.addEventListener('keyup', () => {
    const word = search.value.trim();
    filteredTodos(word);
})