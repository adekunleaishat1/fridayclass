import axios from 'axios';
import React , {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'

const Oneuser = () => {
    const [oneuser, setoneuser] = useState({})
    const route = useParams()
    console.log(route.id);
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/todos/${route.id}`)
      .then((res)=>{
        console.log(res.data);
        setoneuser(res.data)
      }).catch((err)=>{
        console.log(err);
      })
    }, [])
    
  return (
    <div>
        <h1>{oneuser.title}</h1>
    </div>
  )
}

export default Oneuser