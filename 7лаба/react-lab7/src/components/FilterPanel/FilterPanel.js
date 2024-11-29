import React from 'react';
import styles from './FilterPanel.module.css';

function FilterPanel({ setFilter }) {
  return (
    <div className={styles['filter-panel']}>
      <button onClick={() => setFilter('all')}>Все задачи</button>
      <button onClick={() => setFilter('completed')}>Выполненые</button>
      <button onClick={() => setFilter('add')}>Активные</button>
    </div>
  );
}

export default FilterPanel;
