import React from 'react';


export const Button = (propy : {name:string})  => {
    //const {name} = propy ;

    return(
        <button style = {{backgroundColor: 'grey', color: 'white', padding: '10px 30px', border: '', borderRadius: '20px',}}>
            {propy.name}
        </button>
    );
};