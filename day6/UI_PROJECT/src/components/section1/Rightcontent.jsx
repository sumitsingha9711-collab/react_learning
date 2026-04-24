import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div id='right' className=' w-2/3 flex flex-nowrap h-full rounded-4xl overflow-x-auto gap-10  ' >
      {props.user.map(function(elem,idx){

        return <div key={idx} >
          <Rightcard id={idx} img={elem.img} tag={elem.tag} color={elem.color} />
        </div>
      })}
    </div>
  )
}

export default Rightcontent
