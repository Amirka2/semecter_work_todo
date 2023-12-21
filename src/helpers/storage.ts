import {ITodoItem} from "interfaces";
import {TODO_ITEMS} from "constants/todoItems";
// FIXME Почему импорт из директории контант не работает

export const setTodosToStorage = (todos: ITodoItem[]) => {
  localStorage.setItem(TODO_ITEMS, JSON.stringify(todos));
}

export const getTodosFromStorage: () => ITodoItem[] = () => {
  let result: ITodoItem[] = [];
  const stringedTodos = localStorage.getItem(TODO_ITEMS);

  if (stringedTodos !== null) {
    result = JSON.parse(stringedTodos);
  }

  return result;
}
