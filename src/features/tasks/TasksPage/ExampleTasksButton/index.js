import { StyledButton, Wrapper } from "./styled";
import { fetchExampleTasks } from "../../tasksSlice";
import { useDispatch } from "react-redux";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <StyledButton onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </StyledButton>
    </Wrapper>
  )
};

export default ExampleTasksButton;