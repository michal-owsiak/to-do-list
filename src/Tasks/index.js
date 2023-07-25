import "./style.css"

const Tasks = ({ tasks, hideDone, removeTask }) => (
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
        <button
          className="tasks__button tasks__button--remove"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;