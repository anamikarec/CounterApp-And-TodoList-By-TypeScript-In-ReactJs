import React from 'react'

interface ICountProps{
    count : number
}

function Count({count} : ICountProps) {
return <h1>{count}</h1>
}
export {Count};