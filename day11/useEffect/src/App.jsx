import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(10)

  useEffect(() => {
    console.log('useEffect called');
  }, [num])

  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button
       onClick={() => {
        setnum(num + 1)
      }}
        onMouseEnter={() => {
          setnum2(num2 + 1)
        }}>click</button>
    </div >
  )
}
export default App
