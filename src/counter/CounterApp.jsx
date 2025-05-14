import { useState } from "react";
import Counter from "./counter";

export default function CounterApp(){
    const [showBoth, setShowBoth] = useState(true)

    function handleChange(e){
        setShowBoth(e.target.checked)
    }

    return(
        <>
            <h1>React will keep the state based on the component and it's position, if the position changes, state will get reset </h1>
            {showBoth ? <Counter name="The First"/> : <Counter name="The Second"/>}
            <input type="checkbox" checked={showBoth} onChange={handleChange}/>Change name
        </>
    )
}