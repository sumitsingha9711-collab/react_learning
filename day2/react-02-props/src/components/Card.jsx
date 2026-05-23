import React from 'react'

const Card = (props) => {
  return (
    <div className='Card'>
        <img src={props.img} alt="" />
        <h1>{props.user},{props.age}</h1>
        <p>This is a simple card component.</p>
        <button>Click me</button>
    </div>
  )
}

export default Card
