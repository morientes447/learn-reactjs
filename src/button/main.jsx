import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AlertMessage from "./alert-message";
import SearchForm from "../form/SearchForm";
import SayHelloForm from "../form/SayHelloForm";
import Counter from "../form/Counter";


createRoot(document.getElementById("root"))
.render(
    <StrictMode>
        <AlertMessage></AlertMessage>
        <SearchForm/>
        <SayHelloForm/>
        <Counter/>  
        <Counter/>  
    </StrictMode>
)