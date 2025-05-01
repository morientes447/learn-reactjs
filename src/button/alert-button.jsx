import './button-style.css'

export default function AlertButton({text, message}){
    function handleClick(e){
        console.info(e.eventPhase)
        alert(message)
    }

    return(
        <button onClick={handleClick}>{text}</button>
    )
}