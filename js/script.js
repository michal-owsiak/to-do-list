{
  const tasks = [];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });

    render();
  };

  const removeTask = (tasksIndex) => {
    tasks.splice(tasksIndex, 1);
    render();
  };

  const toggleTaskDone = (tasksIndex) => {
    tasks[tasksIndex].done = !tasks[tasksIndex].done;
    render();
  };

  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  }

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li class="tasks__list">
          <button class="js-done tasks__button">
            ${task.done ? "✓" : ""}
          </button>
          <span class="tasks__item ${task.done ? "tasks__item--done" : ""}">  
            ${task.content}
          </span>
          <button class="js-remove tasks__button tasks__button--remove">
            🗑
          </button>
        </li>
      `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    bindEvents();
  };

  const onNewTaskButtonClick = () => {
    document.getElementById("textInput").focus();
  };

  const resetTextInput = () => {
    document.querySelector(".js-newTask").value = "";
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();

    if (newTaskContent === "") {
      return;
    };

    addNewTask(newTaskContent);
    resetTextInput();
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");
    const newTaskButton = document.querySelector(".js-newTaskButton");

    form.addEventListener("submit", onFormSubmit);
    newTaskButton.addEventListener("click", onNewTaskButtonClick);
  };

  init();
}