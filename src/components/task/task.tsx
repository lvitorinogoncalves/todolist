import React, { useState } from "react";
import InputButtonAdd from "../inputButtonAdd/inputButtonAdd";
import TaskItem from "../taskItem/taskItem";
import TaskType from "../types/types";

function Task() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

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
      const newTaskItem: TaskType = {
        id: tasks.length + 1,
        text: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskItem]);
      setNewTask("");
    }
  };

  return (
    <>
      <div className="AddTask">
        <InputButtonAdd
          value={newTask}
          onChange={setNewTask}
          onAdd={handleAddTask}
          placeholder="Digite uma nova tarefa"
        />
      </div>
      <div className="List">
        <table>
          <thead>
            <tr>
              <th>Tarefas</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={() => handleDelete(task.id)}
                onEdit={(newText) => handleEdit(task.id, newText)}
                onToggleComplete={() => handleToggleComplete(task.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Task;
