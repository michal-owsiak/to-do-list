import { useState, useEffect } from "react";

export const useTasks = () => {
	const localTasks = () => {
		const storedTasks = localStorage.getItem("tasks");
		return storedTasks ? JSON.parse(storedTasks) : [];
	};

	const [tasks, setTasks] = useState(localTasks());
	const [hideDone, setHideDone] = useState(false);

	const toggleHideDone = () => {
		setHideDone(hideDone => !hideDone);
	};

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	const removeTask = (id) => {
		setTasks(tasks => tasks.filter(task => task.id !== id));
	};

	const toggleTaskDone = (id) => {
		setTasks(tasks => tasks.map(task => (
			task.id === id ? { ...task, done: !task.done } : task
		)))
	};

	const setAllDone = () => {
		setTasks(tasks => tasks.map(task => ({
			...task,
			done: true
		})))
	};

	const addNewTask = (content) => {
		setTasks(tasks => [
			...tasks,
			{
				content,
				done: false,
				id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
			},
		]);
	};

	return {
		tasks,
		hideDone,
		removeTask,
		toggleTaskDone,
		toggleHideDone,
		setAllDone,
		addNewTask
	};
};