import Form from "./Form";
import ExampleTasksButton from "./ExampleTasksButton"
import Buttons from "./Buttons";
import Tasklist from "./Tasklist";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Search from "./Search";

function TasksPage() {
  return (
    <> 
      <Header title="To do list" />
      <Section
        title="Add new task"
        extraHeaderContent={<ExampleTasksButton />}
        mainSectionContent={<Form />}
      />
      <Section
        title="Search"
        mainSectionContent={<Search />}
      />
      <Section
        title="Tasklist"
        extraHeaderContent={<Buttons />}
        mainSectionContent={<Tasklist />}
      />
    </>
  );
}

export default TasksPage;