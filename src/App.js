import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import EditTaskModal from "./components/EditTaskModal";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedTask, setEditedTask] = useState(null);
  const [tasksAdded, setTasksAdded] = useState(false);

  const handleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleTaskDeletion = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleTaskCreation = (taskText) => {
    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1, // Generating unique IDs
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTasksAdded(true);
  };

  const handleEditTask = (task) => {
    setEditedTask(task);
    setShowEditModal(true);
  };

  const handleSaveEditedTask = (editedTask) => {
    setTasks(
      tasks.map((task) => (task.id === editedTask.id ? editedTask : task))
    );
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditedTask(null);
  };

  return (
    <div>
      <h1 className="task-heading">Task Management Application</h1>
      <h1 className="heading">Create Task</h1>
      <TaskForm onCreate={handleTaskCreation} />
      <h1 className="heading">My Tasks</h1>
      {tasksAdded && (
        <TaskList
          tasks={tasks}
          onComplete={handleTaskCompletion}
          onDelete={handleTaskDeletion}
          onEdit={handleEditTask}
        />
      )}
      {showEditModal && (
        <EditTaskModal
          task={editedTask}
          onSave={handleSaveEditedTask}
          onClose={handleCloseEditModal}
        />
      )}
    </div>
  );
};

export default App;
