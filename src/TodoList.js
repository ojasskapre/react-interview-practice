import { useState } from 'react';

let taskId = 0;

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  return (
    <div className="todolist-container">
      <h1>To-Do List</h1>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            setTasks((prevTasks) => [
              ...prevTasks,
              { id: taskId++, text: newTask },
            ]);
            setNewTask('');
          }}
        >
          Submit
        </button>
      </div>
      <div>
        <ul>
          {tasks.map(({ id, text }) => (
            <li key={id}>
              <div className="todolist-item">
                <p>{text}</p>
                <button
                  onClick={() => {
                    setTasks(tasks.filter((task) => task.id !== id));
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
