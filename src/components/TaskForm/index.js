import { useState } from "react";
import "./index.css";

const TaskForm = ({ onCreate }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    onCreate(taskText);
    setTaskText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="user-input"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="What needs to be done"
      />
      <button type="submit" class="button">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
