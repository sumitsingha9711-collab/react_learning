import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // const getdata = async () => {
  //   const promise = await fetch('https://jsonplaceholder.typicode.com/posts')

  //   console.log('====================================');
  //   console.log(promise);
  //   console.log('====================================');
  // }

  const [data, setdata] = useState([])

  const loaddata = async () => {
    const getresponse = await axios.get('https://jsonplaceholder.typicode.com/posts')

    console.log('====================================');
    console.log(getresponse);
    console.log('====================================');

    setdata(getresponse.data)
  }
  return (
    <div>
      {/* <button onClick={getdata}>get data</button> */}
      <button onClick={loaddata}>load data</button>
      <div>
        {data.map((item, idx) => {
          return <h3>{item.author} {idx}</h3>
        })}
      </div>
    </div>

  )
}

export default App
