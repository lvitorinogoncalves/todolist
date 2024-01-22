import React, { useState } from "react";

interface Task {
    id: number;
    text: string;
    completed: boolean;
  }

interface TaskItemProps {
  task: Task;
  onDelete: () => void;
  onEdit: (newText: string) => void;
  onToggleComplete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onEdit, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewText(task.text);
  };

  const handleSaveEdit = () => {
    onEdit(newText);
    setIsEditing(false);
  };

  return (
    <div className="item">
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggleComplete}
        />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <p>{task.text}</p>
        )}
      </label>
      <button onClick={onDelete}>Delete</button>
      {isEditing ? (
        <>
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
};

export default TaskItem;
