import React from 'react'

const App = () => {

    localStorage.clear(),
    localStorage.setItem('name', 'John Doe'),
    localStorage.getItem('name')
    // localStorage.removeItem('name')

    const data = {
        name: 'John Doe',
        age: 30,
        city: 'New York'  
    }

    localStorage.setItem('user', JSON.stringify(data))

    const userdata = JSON.parse(localStorage.getItem('user'))

  return (

    <div>
      
    </div>
  )
}

export default App
