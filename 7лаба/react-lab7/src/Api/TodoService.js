import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

class TodoService {

  static async fetchTodos() {
    try {
      const response = await axios.get(API_URL);
      return response.data;  
    } catch (error) {
      console.error('Ошибка при загрузке задач:', error);
      throw error;  
    }
  }

  
  static addTodo(newTodo, todos) {
    newTodo.id = todos.length + 1;  
    return [newTodo, ...todos];
  }


  static deleteTodo(id, todos) {
    return todos.filter(todo => todo.id !== id);
  }

 
  static toggleCompleted(id, todos) {
    return todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
}

export default TodoService;
