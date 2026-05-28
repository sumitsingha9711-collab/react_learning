import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [index, setindex] = useState(1)

  const [userdata, setuserdata] = useState([])

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)

    setuserdata(response.data)

    console.log('====================================');
    console.log(response.data);
    console.log('====================================');
  }

  useEffect(() => {
    getdata()
  }, [index])

  let printuserdata = 'no user data available'

  if (userdata.length > 0) {
    printuserdata = userdata.map(function (elem, idx) {
      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className=' bg-black text-white h-full p-4'>
      <div className='grid grid-cols-2 h-[82%] md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {printuserdata}
      </div>
      <div className='flex justify-center items-center gap-5 mt-4'>
        <button
        style={{opacity: index == 1? 0.5: 1}}
         className='flex justify-center items-center cursor-pointer active:scale-95 bg-gray-400 gap-5 px-2  rounded'
          onClick={() => {
            if (index > 1) {
              setindex(index - 1)
            }
          }}>
          Prev
        </button>
        <h2>Page {index}</h2>
        <button className='flex justify-center items-center cursor-pointer active:scale-95 bg-gray-400 gap-5 px-2 rounded '
          onClick={() => {
            setindex(index + 1)
          }}
        >
          Next
        </button>

      </div>
    </div>
  )
}

export default App
