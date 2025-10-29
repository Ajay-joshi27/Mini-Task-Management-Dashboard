# 📝 Mini Task Management Dashboard(React + Axios + JSON Server)

[LIVE WORKING LINK](https://mini-task-management-dashboard-afugoyfw9.vercel.app/)


A simple yet powerful **Mini Task Management Dashboard** built using **React.js**, **Axios**, and **Bootstrap**.  
This app allows users to **add**, **view**, and **update task statuses** (To Do, In Progress, Done) in a clean and dynamic interface.

---

## 🚀 Features

✅ Add new tasks with title and description  
✅ Categorize tasks by status (To Do, In Progress, Done)  
✅ Update task status dynamically  
✅ Responsive layout using Bootstrap  
✅ REST API integration using Axios  
✅ Modular and reusable React components

---

## 🏗️ Project Architecture

```
src/
│
├── api.js                 # Handles all API requests (GET, POST, PATCH)
│
├── components/
│   ├── NotesApp.jsx       # Main logic and state management
│   ├── TaskColumn.jsx     # Reusable column for each task status
│   ├── Card.jsx           # Individual task card with status dropdown
│   └── NotesApp.css       # Styling for board and layout
│
├── App.jsx                # Root component that renders NotesApp
└── main.jsx               # React DOM rendering and Bootstrap integration
```

---

## ⚙️ Data Flow Overview

```
[ JSON Server / Backend (http://localhost:3000/tasks) ]
                    ▲
                    │ (Axios: get, post, patch)
                    │
              ┌─────┴─────┐
              │  api.js   │
              └─────┬─────┘
                    │
                    ▼
           ┌─────────────────┐
           │  NotesApp.jsx    │
           │-----------------│
           │ State: data, tasks
           │ Fetches and updates data via API
           └───────┬────────┘
                   │
         ┌─────────┼──────────┐
         ▼          ▼          ▼
 ┌────────────┐ ┌────────────┐ ┌────────────┐
 │ TaskColumn │ │ TaskColumn │ │ TaskColumn │
 │  ("To Do") │ │("In Prog") │ │   ("Done") │
 └──────┬─────┘ └──────┬─────┘ └──────┬─────┘
        ▼                ▼              ▼
      ┌───────┐       ┌───────┐       ┌───────┐
      │ Card  │       │ Card  │       │ Card  │
      └───────┘       └───────┘       └───────┘
```

---

## 🧠 Component Responsibilities

| Component | Purpose | Key Functions / Props |
|------------|----------|-----------------------|
| **App.jsx** | Root component | Renders `<NotesApp />` |
| **NotesApp.jsx** | Handles state, API calls, and layout | `useState`, `useEffect`, `handleAdd`, `handleStatusChange` |
| **TaskColumn.jsx** | Displays tasks per status | Props: `title`, `tasks`, `onStatusChange` |
| **Card.jsx** | Individual task card | Props: `task`, `onStatusChange` |
| **api.js** | Axios API configuration | `getTasks`, `addTask`, `updateTask` |

---

## 🧩 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React.js, Bootstrap 5 |
| **API Layer** | Axios |
| **Backend** | JSON Server (Mock REST API) |
| **Styling** | CSS & Bootstrap |
| **Data Flow** | Unidirectional (React State → Props → UI → API) |

---

## 🗄️ JSON Server Setup

To simulate a backend, use **JSON Server**.

### 📁 Create `db.json`
```json
{
  "tasks": [
    { "id": 1, "title": "Setup Project", "description": "Initialize React app", "status": "To Do" },
    { "id": 2, "title": "Build UI", "description": "Create components", "status": "In Progress" }
  ]
}
```

### ▶️ Run Server
```bash
npx json-server --watch db.json --port 3000
```

---

## ⚡ Run the Project

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/task-management-app.git
cd task-management-app
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run Backend (JSON Server)
```bash
npx json-server --watch db.json --port 3000
```

### 4️⃣ Run Frontend
```bash
npm run dev
```

Now open 👉 [http://localhost:5173](http://localhost:5173) (or the port shown in terminal)

---

## 🖼️ UI Overview

### 💡 Add Task Section
- Enter **title** and **description**
- Choose status via **dropdown** (To Do / In Progress / Done)

### 📋 Task Board
- Tasks grouped under three columns
- Each task card includes a dropdown to update its status instantly

---

## 🧰 Dependencies Used

```json
"dependencies": {
  "axios": "^1.x",
  "bootstrap": "^5.x",
  "react": "^18.x",
  "react-dom": "^18.x"
}
```

---

## 📚 Future Enhancements
- ✅ Task deletion
- ✅ Edit task details
- ✅ Drag & drop functionality
- ✅ Persistent backend (Node + Express)
- ✅ Dark mode support

---

## 👨‍💻 Author

**Ajay Joshi**  
📧 [ajayajoshi143@gmail.com](mailto:ajayajoshi143@gmail.com)  
💻 Passionate about JavaScript, React, and building scalable web apps.

---

## 🪪 License

This project is open-source and available under the **MIT License**.
