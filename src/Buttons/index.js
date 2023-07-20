import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
  <div className="tasklistButtons">
    {tasks.length > 0 && (
      <>
        <button className="tasklistButtons__button">
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="tasklistButtons__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;