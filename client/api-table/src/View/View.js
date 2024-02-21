import React, { useEffect, useState } from 'react'
import './View.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export default function View() {
 const[user,setUser]=useState([])
 let {userID}=useParams()
 const navigate=useNavigate()
useEffect(()=>{
  axios.get(`http://localhost:5000/users/${userID}`)
  .then(res=>setUser(res.data))
  
},[])

  return (
    <>
    <div className='main'>


   
    {

        <Card className='card' key={user._id} sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">Name:{user.name}</Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
         Surname: {user.surname}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
         Username: {user.username}
          </Typography>
      
          <Typography variant="body2">
         Age: {user.age}
            <br />
          
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={()=>navigate(-1)}>Back to Table</Button>
        </CardActions>
      </Card>
      

    }
        </div> </>
   
  )
}
