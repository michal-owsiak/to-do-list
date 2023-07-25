import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
  <div className="tasklistButtons">
    {tasks.length > 0 && (
      <>
        <button onClick={toggleHideDone} className="tasklistButtons__button">
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