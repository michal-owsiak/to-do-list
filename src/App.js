import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import { useState } from "react";

const tasks = [
  { id: 1, content: "przykładowe zadanie 1", done: false },
  { id: 2, content: "przykładowe zadanie 2", done: true },
];

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <main>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        mainSectionContent={<Form />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        }
        mainSectionContent={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
          />
        }
      />
    </main>
  );
}

export default App;
