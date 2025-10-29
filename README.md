
 Folder Structure Overview

src/
│
├── api.js                 # Handles all Axios API calls (CRUD)
│
├── components/
│   ├── NotesApp.jsx       # Main container component
│   ├── TaskColumn.jsx     # Reusable column component (To Do, In Progress, Done)
│   ├── Card.jsx           # Reusable task card component
│   └── NotesApp.css       # Styles for layout (board, responsiveness)
│
└── App.jsx                # Entry component, renders NotesApp

===============================================================================================
Data Flow Architecture (Unidirectional)

[ JSON Server / Backend (http://localhost:3000/tasks) ]
                    ▲
                    │ (Axios: get, post, patch)
                    │
              ┌─────┴─────┐
              │  api.js   │
              └─────┬─────┘
                    │
                    ▼ 
            ________________________________
           │  NotesApp.jsx                  │
           │--------------------------------│
           │ State: data, tasks             |
           │ Fetches tasks via getTasks()   |
           │ Adds new task via addTask()    |
           │ Updates status via updateTask()|
           |________________________________|
                   │
         ┌─────────┼──────────┐
         ▼          ▼          ▼
 ┌────────────┐ ┌────────────┐ ┌────────────┐
 │ TaskColumn │ │ TaskColumn │ │ TaskColumn │
 │  ("To Do") │ │("In Prog") │ │   ("Done") │
 └──────┬─────┘ └──────┬─────┘ └──────┬─────┘
        │                │              │
        ▼                ▼              ▼
     ┌───────┐       ┌───────┐       ┌───────┐
     │ Card  │       │ Card  │       │ Card  │
     └───────┘       └───────┘       └───────┘


========================================================================================================================


