import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState(' ')
  const [description, setDescription] = useState(' ')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, description);
    setTitle(' ')
    setDescription(' ')
  };

  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e)=>{ handleSubmit(e) }} className='flex flex-col p-10 gap-5'>
        <input type="text"
        placeholder='Enter Heading'
        className='px-5 py-2 border-4 outline-none rounded'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }} />
        <textarea  
        placeholder='Enter Description'
        className='px-5 h-25 py-2 border-4 outline-none rounded flex-row'
        value={description} 
        onChange={(e)=>{
          setDescription(e.target.value)
        }}/>
        <button className='px-5 py-2 bg-gray-300 text-black border-4 rounded hover:bg-gray-400'>Add Note</button>
      </form>
    </div>
  )
}

export default App
