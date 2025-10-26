import React from 'react'

const ArrayTravesal = () => {
    //const items : undefined | any []  = [] ;
    const items : undefined | any []  = ["apple" , "banana" , "mango" , "grapes"]; ;
  return (
    <div>
        <ol>
            {items?.map((val) =>  (
                <li> {val}</li>
            ))}
        </ol>
    </div>
  )
}

export default ArrayTravesal