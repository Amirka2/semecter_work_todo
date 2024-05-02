import axios from "axios";

import {BASE_URL} from "constants/api";
import {ICreateTodoItem, ITodoItem} from "interfaces/index";

export const getTodosFromApi = async (): Promise<ITodoItem[]> => {
  return axios.get(BASE_URL + '/todos')
    .then(res => res.data)
}

export const deleteTodo = async (id: number) => {
  return axios.delete(BASE_URL + `/todos/${id}`)
    .then(res => res.data.success)
}

export const toggleTodo = async (id: number) => {
  return axios.post(BASE_URL + `/todos/${id}/toggle`)
    .then(res => res.data)
}

export const editTodo = async (todo: ITodoItem) => {
  return axios.patch(BASE_URL + `/todos`, todo)
    .then(res => res.data)
}

export const saveTodo = async (todo: ICreateTodoItem) => {
  return axios.post(BASE_URL + '/todos', todo)
    .then(res => res.data)
}
