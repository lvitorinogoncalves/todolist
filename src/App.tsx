import React, { useState } from "react";
import Header from "./components/header/header";
import Button from "./components/button/button";
import Footer from "./components/footer/footer";
import TaskItem from "./components/taskItem/taskItem";
import Task from "./components/types/types";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [newTask, setNewTask] = useState<string>("");

  const handleDelete = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleEdit = (taskId: number, newText: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  const handleToggleComplete = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskItem: Task = {
        id: tasks.length + 1,
        text: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskItem]);
      setNewTask("");
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="AddTask">
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button onClick={handleAddTask}>Adicionar</Button>
      </div>
      <div className="List">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={() => handleDelete(task.id)}
            onEdit={(newText) => handleEdit(task.id, newText)}
            onToggleComplete={() => handleToggleComplete(task.id)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
