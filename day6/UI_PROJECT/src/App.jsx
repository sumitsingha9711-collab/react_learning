import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Navbar from './components/section1/navbar'


const App = () => {

  const user = [
    {
      img:'https://plus.unsplash.com/premium_photo-1661315433346-ff39047c1492?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'green',
      tag:'Satisfied',
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661585403709-6f09459a637e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'yellow',
      tag:'Underdefined',
    },
    {
      img:'https://images.unsplash.com/photo-1640531005077-ea1edfa38c23?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'red',
      tag:'Underserved',
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661628726520-6424471b7e37?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'blue',
      tag:'Neutral',
    }
  ]

  return (
    <div>
      <Section1 user={user} />
      <Section2 />
    </div>
  )
}

export default App
