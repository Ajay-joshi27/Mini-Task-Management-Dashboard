import React from "react";
import Card from "./Card";

function TaskColumn({ title, tasks, onStatusChange }) {

  // color changer based upon status column
  const headerColors = {
    "To Do": "bg-info text-white",
    "In Progress": "bg-warning text-dark",
    Done: "bg-success text-white",
  };

  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex">
      <div className="task-column bg-light p-3 rounded shadow-sm w-100 d-flex flex-column">
        {/* Column Header */}
        <h2
          className={`h5 text-center mb-3 p-2 rounded ${headerColors[title]}`}
          style={{ fontWeight: 600 }}
        >
          {title}
        </h2>

        {/* Task List */}
        <div className="d-flex flex-column gap-3">
          {/* this returns array of task length so that if task is present or not */}
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Card key={task.id} task={task} onStatusChange={onStatusChange} />
            ))
          ) : (
            <p className="text-center text-muted mt-3">No tasks yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskColumn;
