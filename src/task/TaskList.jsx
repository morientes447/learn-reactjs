export default function TaskList({items = []}){
    return(
        <>
            <ul>
                {items.map((item, index) =>
                <li key={index}> {item} </li>
            )}
            </ul>
        </>
    )
}