import React from "react";
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"

export interface TodoItemProps{
    id : string | number,
    title:string,
    status : boolean
}

const Todo = () => {
    const [todos,setTodos] = React.useState<TodoItemProps[]>([]);

    const handleAdd = (text : string) => {
        const payload = {
             id : todos.length + 1,
            title : text,
            status : false
        }
    setTodos([...todos,payload]);
}

// hOW DO U WORK WITH PROMISES AND STUFFS...
const handlePostRequest = async (id : string) : Promise<Response> => {
    return fetch("https://reqres.in/users/"+id)
}
return (
    <div>
        <h1>Todo App</h1>
        <div><TodoInput onSubmit={handleAdd} /></div>
        <div>
            {todos.map(item=><TodoItem key={item.id} data={item}/>)}
            {/* <TodoItem/> */}
        </div>
    </div>
)
}

export default Todo;


// We can import direct by "tsrafc"
