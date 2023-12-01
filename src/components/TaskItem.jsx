// En components/TaskItem.jsx
import React, { useState } from 'react';
import '../App.css';

const TaskItem = ({ task, onToggleComplete }) => {
    const [completed, setCompleted] = useState(task.completed);

    const handleToggleComplete = () => {
    setCompleted(!completed);
    onToggleComplete(task.id);
    };

    return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
        <p className="task-name">{task.name}</p>
        {completed && <p className="completed-message">Tarea Completada</p>}
        <div className="additional-info">
        <p className="info-item">Lugar: {task.place}</p>
        <p className="info-item">Hora: {task.time}</p>
        </div>
        <button onClick={handleToggleComplete}>Completar</button>
    </div>
    );
};

export default TaskItem;


