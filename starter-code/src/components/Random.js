import React from 'react'

const Random = ({min, max}) => {

    const result = Math.floor(Math.random()*(max-min)) + min
    
    return(
    
    <div>Random value between {min} and {max} => {result}</div>
)
}

export default Random
