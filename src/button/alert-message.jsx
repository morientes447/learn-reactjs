import AlertButton from "./alert-button";
import MyButton from "./mybutton";
import Toolbar from "./toolbar";


export default function AlertMessage(){
    return(
        <>
        <AlertButton text="Click me!" message="Button clicked!"/>

        <MyButton text="Smash me!" onSmash={() => alert("Button smashed!")}/>

        <Toolbar 
            onClick ={(e) => {
                e.stopPropagation()
                alert("Toolbar clicked")
            }}
        />
        </>
        
    )
}