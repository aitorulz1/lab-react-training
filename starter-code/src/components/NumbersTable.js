import React from 'react'

const NumbersTable = ({ limit }) => {
  const list = []
  for(let i = 1; i <= limit; i++) {
  i % 2 === 0 ? list.push(<li style={{background:'red'}}>{i}</li>) : list.push(<li style={{background:'white'}}>{i}</li>)
    
  }

return (
  <ul className="NumbersTable">
    {list}
  </ul>
)
}

export default NumbersTable