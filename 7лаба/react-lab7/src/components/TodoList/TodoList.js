import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo, toggleCompleted }) {
  return (
    <ul className={styles['todo-list']}>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          deleteTodo={deleteTodo} 
          toggleCompleted={toggleCompleted} 
        />
      ))}
    </ul>
  );
}

export default TodoList;
