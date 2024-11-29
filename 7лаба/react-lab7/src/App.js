import React, { useState, useEffect } from 'react';
import TodoService from './Api/TodoService';  
import FilterPanel from './components/FilterPanel/FilterPanel';
import TodoList from './components/TodoList/TodoList';
import StatsPanel from './components/StatsPanel/StatsPanel';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const fetchTodos = async () => {
    try {
      const data = await TodoService.fetchTodos();  
      setTodos(data);
    } catch (error) {
      console.error('Ошибка при загрузке задач:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);


  const filterTodos = () => {
    if (filter === 'all') return todos;
    return todos.filter(todo => todo.completed === (filter === 'completed'));
  };

  
  const addTodo = (title) => {
    const newTodo = { userId: 1, title, completed: false };
    setTodos(TodoService.addTodo(newTodo, todos));  
  };

  
  const deleteTodo = (id) => {
    setTodos(TodoService.deleteTodo(id, todos));  
  };


  const toggleCompleted = (id) => {
    setTodos(TodoService.toggleCompleted(id, todos));  
  };

  return (
    <div className="App">
      <h1>Список дел</h1>
      <FilterPanel setFilter={setFilter} />
      <AddTodoForm addTodo={addTodo} />
      <TodoList 
        todos={filterTodos()} 
        deleteTodo={deleteTodo} 
        toggleCompleted={toggleCompleted}  
      />
      <StatsPanel todos={todos} />
    </div>
  );
}

export default App;
