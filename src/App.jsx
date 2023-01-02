import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { useState, useEffect } from "react";
import { tasks as data } from "./tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <div>
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
}
