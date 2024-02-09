import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const App = () => {
    const [user, setuserr] = useState("")
    const [email, setemail] = useState("")
    const [array, setarray] = useState([] && JSON.parse(localStorage.getItem("users")))
    const [loading, setloading] = useState(false)
    const [data, setdata] = useState([])
    const navigate = useNavigate()
    useEffect(() => {

      setTimeout(() => {
        setloading(!loading)
      }, 5000);
    
      localStorage.setItem("users", JSON.stringify(array))
    }, [array])

    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((res)=>{
        // console.log(res.data);
        setdata(res.data)
      }).catch((err)=>{
        console.log(err);
      })
      
    }, [])
    
    
    const save = () =>{
      let detail = {
        username:user,
        email
      }
      setarray([...array, detail])
    }
    const seemore= (e) =>{
      const id = e.id
      navigate(`/one/${id}`)
    }
  return (
    <>
       <div>
         <input onChange={(e)=>setuserr(e.target.value)} type="text" />
         <input onChange={(e)=>setemail(e.target.value)} type="text" />
         <button onClick={save}>save</button>
         {loading == false ? "loading...." :
         array.map((e, i)=>(
          <>
          <div key={i}>
            <p>{i + 1}</p>
           <h1>{e.username}</h1>
           <p>{e.email}</p>
          </div>
          </>
         ))

         }
         {loading == false ? "loading...." :
         data.map((e)=>(
          <>
          <h1>{e.title}</h1>
          <button onClick={()=>seemore(e)}>seemore</button>
          </>
         ))

         }
       </div>
    </>
  )
}

export default App