import { useState } from "react";

export default function SayHelloForm() {
    function handleChange(e){
      setHello(e.target.value)
    }
    
    let [hello, setHello] = useState("")
    return (
    <>
      <form>
        <input type="text" id="input_name" value={hello} onChange={handleChange}/>
        <button>
          Reset
        </button>
      </form>
      <h1 id="say_hello">Welcome back! {hello}</h1>
    </>
  );
}
