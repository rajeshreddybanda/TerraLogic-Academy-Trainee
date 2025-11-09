import React from 'react'
import useToggle from '../hooks/Toggle'

const Toggle = () => {
    const [togglee,handleToggle]=useToggle()
  return (
    <div>useToggle
        <h1>{togglee?"show":"hide"}</h1>
        <button onClick={handleToggle}>change</button>
    </div>
  )
}

export default Toggle