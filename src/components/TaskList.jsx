import TaskCard from "./TaskCard";

export default function TaskList({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return <div>No hay tares aún</div>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}
