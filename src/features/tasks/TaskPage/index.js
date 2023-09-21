import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id))

  return (
    <>
      <Header title="Szczegóły zadania" />
      {task ? (
        <Section
          title={task.content}
          mainSectionContent={
            <>
              <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
            </>
          }
        />
      ) : (
        <Section title="Nie znaleziono zadania" />
      )}
    </>
  );
}

export default TaskPage;