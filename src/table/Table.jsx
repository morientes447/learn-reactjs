import Row from "./Row"

export default function Table(){
    return(
        <table border="1">
            <tbody>
                <Row id="1" text="One"/>
                <Row id="2" text="Two"/>
                <Row id="3" text="Three"/>
            </tbody>
        </table>
    )
}