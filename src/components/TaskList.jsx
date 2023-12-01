
import React from 'react';
import TaskItem from './TaskItem';
import '../App.css';

const TaskList = ({ tasks, onToggleComplete }) => {
    return (
    <div className="task-list">
        {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggleComplete={onToggleComplete} />
        ))}
    </div>
    );
};

export default TaskList;
