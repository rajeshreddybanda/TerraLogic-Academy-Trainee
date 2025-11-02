import React from 'react'

const MyInput = (props)=>{
return (
    <div>
        <label htmlFor= {props.id}>{props.label}</label>
        <input
        type ={props.type}
        id = {props.id}
        value = {props.value}
        onChange = {props.onChange}
        />{" "}
        </div>
);
}

export default MyInput