import { MdDeleteOutline } from "react-icons/md";
import "./index.css";

const Task = ({ task, onComplete, onDelete, onEdit }) => {
  const handleComplete = () => {
    onComplete(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleEdit = () => {
    onEdit(task);
  };

  return (
    <div className="task-list-container">
      <input
        type="checkbox"
        className="checkbox-input"
        checked={task.completed}
        onChange={handleComplete}
      />
      <div className="list-label-container">
        <span
          className="label"
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.text}
        </span>
        <div className="edit-and-delete-button-container">
          <button onClick={handleEdit} className="edit-button">
            Edit
          </button>
          <span>
            <MdDeleteOutline onClick={handleDelete} className="icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Task;
