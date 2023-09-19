import { useSelector, useDispatch } from "react-redux";
import { StyledButtons, Button } from "./styled";
import {
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
  selectHideDone,
  fetchExampleTasks
} from "../tasksSlice";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();
  return (
    <StyledButtons>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            disabled={isEveryTaskDone}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </StyledButtons>
  )
};

export default Buttons;
