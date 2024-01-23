import React, { useState, useEffect, useRef } from "react";
import TaskType from "../types/types";
import Button from "../button/button";

type TaskItemProps = {
  task: TaskType;
  onDelete: () => void;
  onEdit: (newText: string) => void;
  onToggleComplete: () => void;
};

function TaskItem({ task, onDelete, onEdit, onToggleComplete }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const inputEditRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isEditing) {
      setFocusInputTextEdit();
    }
  }, [isEditing]);

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

  const setFocusInputTextEdit = () => {
    if (inputEditRef.current) {
      inputEditRef.current.focus();
      inputEditRef.current.select();
    }
  };

  return (
    <tr className={`item ${isEditing ? "editing" : ""}`}>
      <td>
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
              ref={inputEditRef}
              maxLength={50}
            />
          ) : (
            <span>{task.text}</span>
          )}
        </label>
      </td>
      <td>
        <Button onClick={onDelete} children="Exluir"></Button>
        {isEditing ? (
          <>
            <Button onClick={handleCancelEdit} children="Cancelar"></Button>
            <Button onClick={handleSaveEdit} children="Salvar"></Button>
          </>
        ) : (
          <Button onClick={handleEditClick} children="Editar"></Button>
        )}
      </td>
    </tr>
  );
}

export default TaskItem;
