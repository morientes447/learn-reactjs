import Todo from './Todo.jsx'

export default function TodoList(){
    return(
        <ul>
            <Todo isCompleted={true} text="Learn HTML" isDeleted={true}/>
            <Todo isCompleted={true} text="Learn CSS" isDeleted={false}/>
            <Todo isCompleted={true} text="Learn JavaScript"/>
            <Todo isCompleted={false} text="Learn ReactJS"/>
        </ul>
    )
}