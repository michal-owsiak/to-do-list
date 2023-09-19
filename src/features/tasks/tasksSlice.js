import { createSlice } from "@reduxjs/toolkit"

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks.splice(index, 1);
    },
    setAllDone: ({ tasks }) => {
      tasks.forEach((task) => {
        task.done = true
      });
    },
    fetchExampleTasks: () => { },
    setTasks: (state, {payload: tasks}) => {
      state.tasks = tasks;
    },
  },
});

export const { 
  addTask, 
  toggleHideDone, 
  toggleTaskDone, 
  removeTask,
  setAllDone,
  fetchExampleTasks,
  setTasks,
} = tasksSlice.actions;


const selectTasksState = state => state.tasks

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);

export default tasksSlice.reducer;