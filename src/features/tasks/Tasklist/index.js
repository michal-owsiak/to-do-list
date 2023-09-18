import { StyledTasks, List, Item, ToggleDoneButton, RemoveButton } from "./styled";

const Tasklist = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <StyledTasks>
    {tasks.map(task => (
      <List
        key={task.id}
        hidden={task.done && hideDone}
      >
        <ToggleDoneButton
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </ToggleDoneButton>
        <Item done={task.done}>
          {task.content}
        </Item>
        <RemoveButton
          onClick={() => removeTask(task.id)}
        >
          🗑
        </RemoveButton>
      </List>
    ))}
  </StyledTasks>
);

export default Tasklist;