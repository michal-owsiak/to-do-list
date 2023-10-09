import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id))

  return (
    <>
      <Header title="Task details" />
      {task ? (
        <Section
          title={task.content}
          mainSectionContent={
            <>
              <strong>Done:</strong> {task.done ? "Yes" : "No"}
            </>
          }
        />
      ) : (
        <Section title="No task found" />
      )}
    </>
  );
}

export default TaskPage;