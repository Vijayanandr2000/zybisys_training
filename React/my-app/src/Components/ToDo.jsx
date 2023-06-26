import { useEffect, useState } from "react"


const ToDo = ({ name }) => {
    // console.log("name", name)
    let [todo, setTodo] = useState("")

    let [todoList, setTodoList] = useState([])

    const handleChange = (e) => {
        console.log("event", e)
        setTodo(e.target.value)
    }

    const add = () => {
        setTodoList([...todoList, todo])
    }

    useEffect(() => {
        console.log("name", name, todo, todoList)
    })

    console.log("state", todo, todoList)
    return (
        <div>
            <input type="text" required onChange={handleChange} />
            <button onClick={() => {
                add()
            }}>Add</button>


            <ul>
                {todoList.map((todo, index) => (
                    <li>{todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToDo;