import React from 'react'

const Rightcardcontent = (props) => {
  return (
    console.log(props.color),
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-8 w-8 flex justify-center items-center font-medium'>{props.id+1}</h2>
        <div>
          <p className='text-sm leading-normal font-semibold text-white mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quae. Similique praesentium iste commodi voluptates.</p>
          <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className=' text-white font-medium px-6 py-1 rounded-full text-lg'>{props.tag}</button>
            <button style={{backgroundColor:props.color}} className=' text-white font-medium px-3 py-1 rounded-full text-lg'><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
  )
}

export default Rightcardcontent
