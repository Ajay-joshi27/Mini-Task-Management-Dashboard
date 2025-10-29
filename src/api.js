import axios from "axios";

const API_URL = "http://localhost:3000/tasks";

export const getTasks = () => axios.get(API_URL);
export const addTask = (task) => axios.post(API_URL, task);
export const updateTask = (id, updatedData) => axios.patch(`${API_URL}/${id}`, updatedData);
