import Form from "./Form";
import Buttons from "./Buttons";
import Tasklist from "./Tasklist";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Search from "./Search";

function TasksPage() {
  return (
    <> 
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        mainSectionContent={<Form />}
      />
      <Section
        title="Wyszukiwarka"
        mainSectionContent={<Search />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        mainSectionContent={<Tasklist />}
      />
    </>
  );
}

export default TasksPage;