import React,{useState} from 'react';
import { Button } from './Button';
import { Count } from './Count';

function Counter() {
    const [count,setCount] = useState<number>(0);
    const handleChange = (val:number) =>{
        setCount (count+val);
    }
    return (
        <div>
            <Count count={count}/>
            <Button label="ADD" onClick={()=>{handleChange(1)}} />
            <Button label="REDUCE" onClick={()=>{handleChange(-1)}} />
        </div>
    )
}
export {Counter};