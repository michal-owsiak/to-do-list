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
            {hideDone ? "Show" : "Hide"} done tasks
          </StyledButton>
          <StyledButton
            disabled={isEveryTaskDone}
            onClick={() => dispatch(setAllDone())}
          >
            Make all done
          </StyledButton>
        </>
      )}
    </Wrapper>
  )
};

export default Buttons;