import React, { useState, useEffect } from "react";
import { getTasks, addTask, updateTask } from "../api";
import TaskColumn from "./TaskColumn";
import "./NotesApp.css";

function NotesApp() {
  const [data, setData] = useState({ title: "", description: "", status: "To Do" });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((res) => setTasks(res.data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = (status) => {
    if (!data.title.trim()) return alert("Please enter Title");
    const newTask = { ...data, status };
    addTask(newTask).then((res) => setTasks([...tasks, res.data]));
    setData({ title: "", description: "", status: "To Do" });
  };

  const handleStatusChange = (id, newStatus) => {
    updateTask(id, { status: newStatus }).then(() =>
      setTasks((prev) =>
        prev.map((task) => (task.id === id ? { ...task, status: newStatus } : task))
      )
    );
  };

  return (
    <>
     <section className="headerdiv container my-5">
  <div className="row justify-content-center g-3">

    {/* Task Form */}
    <div className="col-8 col-md-2 col-lg-3">
      <form className="p-2 border rounded bg-light shadow-sm">
        <div className="mb-2">
          <label htmlFor="taskTitle" className="form-label">Title</label>
          <input
            type="text"
            id="taskTitle"
            name="title"
            className="form-control"
            placeholder="Enter Title"
            value={data.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">Description</label>
          <textarea
            id="taskDescription"
            name="description"
            className="form-control"
            rows="3"
            placeholder="Enter Description"
            value={data.description}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>

    {/* Dropdown for Adding Task */}
    <div className="col-12 col-md-4 col-lg-2 d-flex justify-content-center align-items-start">
      <div className="dropdown w-100">
        <button
          className="btn btn-primary dropdown-toggle w-100"
          type="button"
          id="taskDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Add New Task
        </button>

        <ul className="dropdown-menu w-100" aria-labelledby="taskDropdown">
          <li>
            <button className="dropdown-item" onClick={() => handleAdd("To Do")}>
              TO DO
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => handleAdd("In Progress")}>
              IN PROGRESS
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => handleAdd("Done")}>
              DONE
            </button>
          </li>
        </ul>
      </div>
    </div>

  </div>
</section>

{/* here form ends */}

{/* from here reusable components started */}
      <section className="board">
        {/* reusable component 1 ToDo */}
        <TaskColumn
          title="To Do"
          tasks={tasks.filter((t) => t.status === "To Do")}
          onStatusChange={handleStatusChange}
        />
        {/* reusable component 2 In Progress */}
        <TaskColumn
          title="In Progress"
          tasks={tasks.filter((t) => t.status === "In Progress")}
          onStatusChange={handleStatusChange}
        />

            {/* reusable component 3 Done */}
        <TaskColumn
          title="Done"
          tasks={tasks.filter((t) => t.status === "Done")}
          onStatusChange={handleStatusChange}
        />
        {/* from here reusable components ended */}
      </section>
    </>
  );
}

export default NotesApp;
