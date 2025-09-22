
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('https://64f8a8b8824680fd2173d7a6.mockapi.io/api/v1/tasks') // Example MockAPI
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Taskboard Demo</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <strong>{task.title}</strong> - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
