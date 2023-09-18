import Form from "./Form";
import Buttons from "./Buttons";
import Tasklist from "./Tasklist";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { useTasks } from "../../useTasks";

function Tasks() {
  const { 
    tasks,
    hideDone,
    removeTask,
    toggleTaskDone,
    toggleHideDone,
    setAllDone,
    addNewTask
  } = useTasks();

  return (
    <>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        mainSectionContent={
          <Form
            addNewTask={addNewTask}
          />
        }
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
        mainSectionContent={
          <Tasklist
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </>
  );
}

export default Tasks;