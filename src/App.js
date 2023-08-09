import { GlobalStyle } from "./styled";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import { useState } from "react";
import { useTasks } from "./useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const { 
    tasks, 
    removeTask, 
    toggleTaskDone, 
    setAllDone, 
    addNewTask 
  } = useTasks();

  return (
    <>
      <GlobalStyle />
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
          <Tasks
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

export default App;