import React from "react";

function Card({ task, onStatusChange }) {
  // Optional: color based on status
  const statusColors = {
    "To Do": "bg-info text-white",
    "In Progress": "bg-warning text-dark",
    "Done": "bg-success text-white",
  };

  return (
    <div
      className={`card p-3 mb-1 shadow-sm h-100 border-0 ${statusColors[task.status]}`}
      style={{ transition: "transform 0.2s", cursor: "pointer" }}
    >
      <h5 className="card-title text-center fw-bold">{task.title}</h5>
      <p className="card-text text-center">{task.description}</p>

      <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
        <label className="form-label mb-0 fw-semibold">Status:</label>
        <select
          className="form-select w-auto"
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>

      {/* Hover effect */}
      <style jsx>{`
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}

export default Card;
