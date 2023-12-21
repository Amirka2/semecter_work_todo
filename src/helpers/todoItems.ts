import {ITodoItem} from "interfaces";

export const saveTodo = (text: string) => {
  const todos = getTodos();

  let id = 0;

  if (todos && todos.length > 0) {
    id = todos[todos.length - 1].id + 1;
  }

  const newTodo: ITodoItem = {
    text,
    id,
    isChecked: false,
  }

  todos.push(newTodo);

  setTodosToStorage(todos);
}

export const setTodosToStorage = (todos: ITodoItem[]) => {
  localStorage.setItem('todoItems', JSON.stringify(todos));
}

export const getTodos: () => ITodoItem[] = () => {
  let result: ITodoItem[] = [];
  const stringedTodos = localStorage.getItem('todoItems');

  if (stringedTodos !== null) {
    result = JSON.parse(stringedTodos);
  }

  return result;
}
