import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TodoList from "./TodoList";
import TodoContainer from "./TodoContainer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoContainer>
      <TodoList></TodoList>
    </TodoContainer>
  </StrictMode>
);
