import React, { useState } from 'react';
import styles from './AddTodoForm.module.css';

function AddTodoForm({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <form className={styles['add-todo-form']} onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Добавить задачу"
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default AddTodoForm;
