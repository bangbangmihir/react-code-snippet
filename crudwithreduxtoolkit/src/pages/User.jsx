import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers,deleteUser } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {AiFillEdit,AiFillDelete} from "react-icons/ai"


const User = () => {

  const { loading, error, users } = useSelector((state) => state.users);

  const navigate = useNavigate()


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
    
  }, [dispatch])


  if (loading === 'pending') {
    return <div><h1>Loading...</h1></div>;
  }

  const handleDeleteClick = (id) => {
    dispatch(deleteUser(id));

  };

  console.log("data",users)


  
  return (
    <>
    <button onClick={()=>navigate("/user")}>Add User</button>
    {
      users.map((p)=>(
        <>
        <div style={{width:"100%"}}>
        <div style={{display:"flex",justifyContent:"space-between",gap:50}}>
          <div style={{flex:1}}>{p.name}</div>
          <div  style={{flex:1}}>{p.username}</div>
          <div  style={{flex:1}}>{p.email}</div>
          <div>
          <Button variant="primary" className='p-2 m-1' style={{flex:1}} onClick={()=>navigate(`/edituser/${p.id}`)}><AiFillEdit/></Button>
          <Button variant="danger" className='p-2 m-1' style={{flex:1}} onClick={() => handleDeleteClick(p.id)}><AiFillDelete/></Button>
          </div>
        

        </div>

        </div>
        
    
        </>
      ))

    }
    
    
    </>
  )
}

export default User