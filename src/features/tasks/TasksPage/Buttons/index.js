import { useSelector, useDispatch } from "react-redux";
import { Wrapper, StyledButton } from "./styled";
import {
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
  selectHideDone,
} from "../../tasksSlice";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();
  return (
    <Wrapper>
      {!areTasksEmpty && (
        <>
          <StyledButton onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </StyledButton>
          <StyledButton
            disabled={isEveryTaskDone}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </StyledButton>
        </>
      )}
    </Wrapper>
  )
};

export default Buttons;