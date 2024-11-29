import React from 'react';
import styles from './TodoItem.module.css';

function TodoItem({ todo, toggleCompleted, deleteTodo }) {
  const handleToggleCompleted = () => {
    toggleCompleted(todo.id);  
  };

  return (
    <li 
      className={`${styles['todo-item']} ${todo.completed ? styles.completed : ''}`} 
      onClick={handleToggleCompleted}  
    >
      <span>{todo.title}</span>
      <button 
        className={styles['delete-btn']} 
        onClick={(e) => {
          e.stopPropagation(); 
          deleteTodo(todo.id);  
        }}
      >
        ✖ 
      </button>
    </li>
  );
}

export default TodoItem;
