Title

Swivl Frontend Assignment

Overview

Develop a simple Task Management Application(Todo) using React

Tech Stack

react js

Functionality

1.###Initialize the project

Create a new project directory and initialize it with Create React App:
npx create-react-app task-manager
cd task-manager

2.### Create React Components

1. **Task Component**:
   - Display individual tasks.
   - Show strikethrough for completed tasks.
   - Include buttons for editing and deleting tasks.
2. **TaskList Component**:
   - Render a list of tasks.
   - Manage task completion and reversion.
   - Pass tasks and handlers as props to `Task` component.
3. **TaskForm Component**:
   - Provide a form to create new tasks.
   - Manage form state and handle form submission.
4. **EditTaskModal Component**:
   - Provide a modal for editing tasks.
   - Manage modal state and handle form submission to update tasks.

3.### Implement State Management

1. **Use React Hooks**:
   - Utilize `useState` for managing tasks and form states.
   - Use `useEffect` for side effects if needed.

5.### Implement Features

1. **Task Creation**:
   - Implement form submission in `TaskForm` to add new tasks to state.
   - Use local state to store tasks.
2. **Task Completion and Reversion**:
   - Toggle strikethrough on task click to mark as complete or revert.
   - Update the task state to reflect the changes.
3. **Task Editing**:
   - Show `EditTaskModal` on clicking the edit button.
   - Update task in state on form submission.
4. **Task Deletion**:
   - Remove task from state on clicking delete icon.

6.### Apply Styling

1. **Basic CSS**:
   - Use basic CSS for styling the application.
   - Define styles in `App.css` and import it into your components.
