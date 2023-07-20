import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

const tasks = [
  { id: 1, content: "przykładowe zadanie 1", done: false },
  { id: 2, content: "przykładowe zadanie 2", done: true },
];

const hideDone = false;

function App() {
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
          <Buttons tasks={tasks} hideDone={hideDone} />
        }
        mainSectionContent={
          <Tasks tasks={tasks} hideDone={hideDone} />
        }
      />
    </main>
  );
}

export default App;
