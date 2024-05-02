import axios from "axios";

import {BASE_URL} from "constants/api";
import {ITodoItem} from "interfaces/index";

export const getTodosFromApi = (): Promise<ITodoItem[]> => {
  return axios.get(BASE_URL + '/todos').then(res => res.data)
}
