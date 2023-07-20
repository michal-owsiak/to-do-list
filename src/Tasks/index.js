import "./style.css"

const Tasks = ({ tasks, hideDone }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li key={task.id} className={
        `tasks__list ${task.done && hideDone ? "tasks__item--hide" : ""}`
      }>
        <button className="tasks__button">
          {task.done ? "✓" : ""}
        </button>
        <span className={`tasks__item ${task.done ? "tasks__item--done" : ""}`}>
          {task.content}
        </span>
        <button className="tasks__button tasks__button--remove">
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;