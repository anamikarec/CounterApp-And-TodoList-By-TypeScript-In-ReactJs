import React from 'react';

interface ButtonProps {
    /** button label */
    label : string,
 /** on click handler */
    onClick : () => void;
}
function Button({label,onClick} : ButtonProps) {
    return (
        <button onClick={onClick}>
            {label} 
        </button>
    )
}
export {Button}