export default function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <div>No hay tares aún</div>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}
