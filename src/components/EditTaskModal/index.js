import React, { useState } from "react";
import "./index.css";

const EditTaskModal = ({ task, onSave, onClose }) => {
  const [editedText, setEditedText] = useState(task.text);

  const handleInputChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleSave = () => {
    const editedTask = { ...task, text: editedText };
    onSave(editedTask);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Task</h2>
        <input type="text" value={editedText} onChange={handleInputChange} />
        <div className="save-and-cancel-buttons">
          <button onClick={handleSave} className="save-button">
            Save
          </button>
          <button onClick={onClose} className="cancel-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
