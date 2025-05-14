import { useState } from "react";
import Counter from "./counter";

export default function CounterApp(){
    const [showBoth, setShowBoth] = useState(true)

    function handleChange(e){
        setShowBoth(e.target.checked)
    }

    return(
        <>
            <h1>React will reset the state if the key of the component is changes </h1>
            {showBoth ? <Counter key="1" name="The First"/> : <Counter key="2" name="The Second"/>}
            <input type="checkbox" checked={showBoth} onChange={handleChange}/>Change name
        </>
    )
}