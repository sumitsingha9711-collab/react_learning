import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='h-120 w-65 mt-5 ml-4 overflow-hidden shrink-0 relative rounded-4xl'>
      <img className='h-full w-full object-cover rounded-4xl' src={props.img} alt="" />
      <Rightcardcontent tag={props.tag} id={props.id} color={props.color} />
    </div>
  )
}

export default Rightcard
