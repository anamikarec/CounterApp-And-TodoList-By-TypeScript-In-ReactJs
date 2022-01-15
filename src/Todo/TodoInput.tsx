import React, { useState } from "react";

interface Props {
    onSubmit : (text : string) => void
    // onSubmit : (text: string) => void;
}
const TodoInput = (props : Props) => {
    // If there is null in place of undefined, it will throw error
    const [text,setText] = useState<string | undefined>(undefined);
    const onChange : React.ChangeEventHandler<HTMLInputElement> = (e) => {
        // console.log(e.target)
        const {value} = e.target;
        setText(value);
    }
    const handleAdd = () => {
        if(text){
            props.onSubmit(text);
            setText('');
        }
    }
    return (
    <div>
        {/* just hover over onChange, and you will get what to write iin the function handleAdd  */}
        <input value={text} type="text" onChange={onChange} placeholder="add something..." />
        <button onClick={handleAdd}>Add</button>
    </div>
    )
}
export default TodoInput;