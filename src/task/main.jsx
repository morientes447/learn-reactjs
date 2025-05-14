import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Task from "./Task";
import TaskForm from "./TaskForm";

createRoot(document.getElementById("root")) 
.render(
    <StrictMode>
        <Task></Task>
        <TaskForm/>
    </StrictMode>
)