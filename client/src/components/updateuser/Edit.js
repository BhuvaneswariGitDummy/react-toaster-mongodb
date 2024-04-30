import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate, useParams} from 'react-router-dom'
import '../adduser/add.css'
import toast from 'react-hot-toast'

const Edit = () => {
  const users={
    fname:"",
    lname:"",
    email:"",
  }

  const {id} =useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(users)

  useEffect(()=>{
    axios.get(`http://localhost:8080/api/getone/${id}`)
    .then((res)=>{
      setUser(res.data)
    })
    .catch((error)=>console.log(error))
  },[id])

  const handleSubmit =async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/${id}`,user)
    .then((res)=>{
      toast.success(res.data.msg,{position:'top-right'})
      navigate('/')
    })
    .catch((error)=>console.log(error))
  }

  const inputHandler = (e) =>{
    const {name,value} = e.target;
    setUser({...user,[name]:value})
    console.log(user)
  }

  return (
    <div className='addUser'>
      <Link to={'/'}>Back</Link>
        <h3>Update User</h3>
        <form className='addUserForm' onSubmit={handleSubmit}>
            <div className='inputGroup'>
                <label htmlFor='fname'>First Name</label>
                <input type='text' name='fname' id='fname' value={user.fname}
                autoComplete='off' placeholder='First name' onChange={inputHandler}/>
            </div>
            <div className='inputGroup'>
                <label htmlFor='lname'>Last Name</label>
                <input type='text' name='lname' id='lname' value={user.lname}
                autoComplete='off' placeholder='Last name' onChange={inputHandler}/>
            </div>
            <div className='inputGroup'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email' value={user.email}
                autoComplete='off' placeholder='Email' onChange={inputHandler}/>
            </div>
            <div className='inputGroup'>
                <button type='submit'>Update User</button>
            </div>
          </form>
    </div>
  )
}

export default Edit