import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  return (
    <div className='py-10 flex justify-between h-[90vh] px-18 text-2xl font-bold'>
      <Leftcontent />
      <Rightcontent user = {props.user}/>
    </div>
  )
}

export default Page1content
