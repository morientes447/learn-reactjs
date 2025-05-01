import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TodoList from "./TodoList";
import TodoContainer from "./TodoContainer";
import Table from "../table/Table";
import AlertMessage from "../button/alert-message";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoContainer>
      <TodoList></TodoList>
      <Table/>
    </TodoContainer>
  </StrictMode>
);
