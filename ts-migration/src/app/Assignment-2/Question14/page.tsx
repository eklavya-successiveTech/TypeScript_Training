"use client"
import React, { useState, useCallback } from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onComplete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = React.memo(({ task, onComplete }) => {
  const handleComplete = useCallback(() => {
    onComplete(task.id);
  }, [task.id, onComplete]);

  return (
    <div>
      <span>{task.text} - {task.completed ? 'Completed' : 'Pending'}</span>
      <button onClick={handleComplete} disabled={task.completed}>
        Complete
      </button>
    </div>
  );
});

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: false },
    { id: 4, text: 'Task 4', completed: false },
  ]);

  const handleTaskComplete = useCallback((id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onComplete={handleTaskComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;