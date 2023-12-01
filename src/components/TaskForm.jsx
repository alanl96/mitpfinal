// En components/TaskForm.jsx
import React, { useState } from 'react';
import '../App.css';

const TaskForm = ({ onAddTask }) => {
    const [taskName, setTaskName] = useState('');
    const [place, setPlace] = useState(''); // Nuevo campo para lugar
    const [time, setTime] = useState(''); // Nuevo campo para hora

    const handleChange = e => {
    setTaskName(e.target.value);
    };

    const handlePlaceChange = e => {
    setPlace(e.target.value);
    };

    const handleTimeChange = e => {
    setTime(e.target.value);
    };

    const handleSubmit = e => {
    e.preventDefault();
    onAddTask(taskName, place, time);
    setTaskName('');
    setPlace('');
    setTime('');
    };

    return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={taskName} onChange={handleChange} placeholder="Nombre de la tarea" />
        <input type="text" value={place} onChange={handlePlaceChange} placeholder="Lugar" />
        <input type="text" value={time} onChange={handleTimeChange} placeholder="Hora" />
        <button type="submit">Agregar Tarea</button>
    </form>
    );
};

export default TaskForm;


