import { useSelector, useDispatch } from "react-redux";
import { selectHideDone, selectTasks, toggleTaskDone, removeTask } from "../../tasksSlice";
import { StyledTasks, List, Item, ToggleDoneButton, RemoveButton } from "./styled";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Tasklist = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  
  const dispatch = useDispatch();

  return (
    <StyledTasks>
      {tasks.map(task => (
        <List
          key={task.id}
          hidden={task.done && hideDone}
        >
          <ToggleDoneButton
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✓" : ""}
          </ToggleDoneButton>
          <Item $done={task.done}>
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
          </Item>
          <RemoveButton
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </RemoveButton>
        </List>
      ))}
    </StyledTasks>
  )
};

export default Tasklist;
