export default function SearchForm(){
    return(
        <form >
            <input type="text" />
            <button onClick={(e) => {
                e.preventDefault();
                alert("You've search")
            }}>Search</button>
        </form>
    )
}