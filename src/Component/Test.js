import React from 'react'
import { useState,/* useEffect, useMemo, useCallback */} from 'react'


const Test = () => {
const [value, setValue] =  useState('Hello React');
const chnageValue = () => {
    setValue('Welcome to Hooks')
}

  return (
    <>
    <div>{value}</div>
    <button onClick={chnageValue}>chnage value</button>
    </>
    
  )
}

export default Test