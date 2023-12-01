// En src/App.jsx
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('La lista de tareas se ha actualizado:', tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleToggleComplete = taskId => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = (taskName, place, time) => {
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
      place, // Información adicional: lugar
      time, // Información adicional: hora
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const resetTasks = () => {
    setTasks([]);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskForm onAddTask={handleAddTask} />
      <button onClick={resetTasks}>Reiniciar Lista</button>
      <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} />
    </div>
  );
};

export default App;

