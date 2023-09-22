import { Wrapper, StyledButton } from "../Buttons/styled";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { useDispatch, useSelector } from "react-redux";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Wrapper>
      <StyledButton 
        onClick={() => dispatch(fetchExampleTasks())}
        disabled={loading}
      >
        {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
      </StyledButton>
    </Wrapper>
  )
};

export default ExampleTasksButton;