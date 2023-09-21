import { useSelector, useDispatch } from "react-redux";
import { selectHideDone, toggleTaskDone, removeTask, selectTasksByQuery } from "../../tasksSlice";
import { StyledTasks, List, Item, ToggleDoneButton, RemoveButton } from "./styled";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import searchQueryParamName from "../searchQueryParamName";

const Tasklist = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);
  
  const tasks = useSelector(state => selectTasksByQuery(state, query));
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
