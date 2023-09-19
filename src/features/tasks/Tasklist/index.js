import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleTaskDone, removeTask } from "../tasksSlice";
import { StyledTasks, List, Item, ToggleDoneButton, RemoveButton } from "./styled";

const Tasklist = () => {
  const {tasks, hideDone} = useSelector(selectTasksState);
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
            {task.content}
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