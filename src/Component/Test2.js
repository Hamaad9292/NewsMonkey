import React,{Component} from "react";
import {useState} from "react";
export class Test2 extends Component{
Test =()=>{
    const[value,setValue]=useState('my value')
    const onChange=()=>{
        setValue('wellocme to onchange')
    }


return(
<>
<div>{value}</div>
<button onClick={onChange}>Click for change value</button>
</>
)
}
}
