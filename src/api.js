import axios from "axios";

// const API_URL = "http://localhost:3000/tasks";
const API_URL = "https://backend-data-6d6l.onrender.com/tasks";

export const getTasks = () => axios.get(API_URL);
export const addTask = (task) => axios.post(API_URL, task);
export const updateTask = (id, updatedData) => axios.patch(`${API_URL}/${id}`, updatedData);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);


export const deleteDoneTasks = async () => {
  const res = await axios.get(API_URL);
  const doneTasks = res.data.filter((t) => t.status === "Done");
  for (let task of doneTasks) {
    await axios.delete(`${API_URL}/${task.id}`);
  }
};
