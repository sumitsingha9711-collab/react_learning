import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div>
      <Card user="John Doe" age={30} img='https://plus.unsplash.com/premium_photo-1711367287679-d6ce302fdc2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
      <Card user="Jane Smith" age={25} img='https://plus.unsplash.com/premium_photo-1764533873501-bee26e5ea0f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
      <Card user="sumit singh" age={25} img='https://plus.unsplash.com/premium_photo-1770194454700-d9696f7ba319?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzOHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8'/>
      <Card user="Aryan sharma" age={25} img='https://plus.unsplash.com/premium_photo-1749010150570-366f704b7c96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3NHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8'/>
    </div>
  )
}

export default App
