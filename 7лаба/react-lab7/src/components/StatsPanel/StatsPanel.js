import React from 'react';
import styles from './StatsPanel.module.css';

function StatsPanel({ todos }) {
  const completedCount = todos.filter(todo => todo.completed).length;
  const activeCount = todos.length - completedCount;

  return (
    <div className={styles['stats-panel']}>
      <p>Завершено: <span>{completedCount}</span></p>
      <p>Осталось: <span>{activeCount}</span></p>
    </div>
  );
}

export default StatsPanel;
