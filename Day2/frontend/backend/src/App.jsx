import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response) =>{
      // console.log(response);
      setJokes(response.data)
      
    })
    .catch((error)=>{
      console.log(error);
    })
  })
 

  return (
    <>
      <h1>Full Stack Decoder </h1>
      <p>JOKES:{jokes.length}</p>

      
      {
      jokes.map((joke,index)=>(
        <div key ={joke.id}>
          <h3>{joke.title}</h3>
          <h3>{joke.content }</h3>
        </div>

      )) 
      }


    </>
  )
}

export default App
