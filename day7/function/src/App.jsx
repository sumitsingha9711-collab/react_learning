import React from 'react'

const App = () => {

  function btnclick(){
    console.log("button clicked")
  }

  function mouseent(){
    console.log("mouse entered")
  }

  return (
    <div>
      <h1>hello</h1>
      <button onClick={()=>{
          console.log("button clicked");
      }}>click me</button>
    </div>
  )
}

export default App


// when vlaue is entered

import React from 'react'

const App = () => {
  return (
    <div>
      <input onChange={()=>{
        console.log('user input')
      }} type="text" placeholder='enter '/>
    </div>
  )
}

export default App

// tracking changing of mouse movement

import React from 'react'

const App = () => {
  return (
    <div>
      <input onChange={(elem)=>{
        console.log(elem.target.value);
      }
    } type="text" placeholder='enter '/>
    </div>
  )
}

export default App

// tracking mouse movement

import React from 'react'

const App = () => {
  return (
    <div>
      <div onMouseMove={(elem) => {
        console.log(elem.clientX, elem.clientY)
      }
    } className="box"></div>
    </div>
  )
}

export default App
