import { StyledTasks, List, Item, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <StyledTasks>
    {tasks.map(task => (
      <List
        key={task.id}
        hidden={task.done && hideDone}
      >
        <Button
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </Button>
        <Item done={task.done}>
          {task.content}
        </Item>
        <Button
          remove
          onClick={() => removeTask(task.id)}
        >
          🗑
        </Button>
      </List>
    ))}
  </StyledTasks>
);

export default Tasks;