import axios from 'axios'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Add.css';
import Button from '@mui/material/Button';
import * as Yup from "yup";
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


export default function Add() {
  const[name,setName]=useState("")
  const[surname,setSurname]=useState("")
  const[username,setUsername]=useState("")
  const[age,setAge]=useState(0)

  const handleAdd=()=>{
    const newUser={name,surname,username,age}

    axios.post('http://localhost:5000/users',newUser)
    .then(res=>console.log(res.data))

    setAge('')
    setName('')
    setSurname('')
    setUsername('')
    toast.success('User added!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

  }

  return (


    <div className='form'>
            <ToastContainer />.
    
         <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    
    </Box>
      
      <TextField className='input' id="outlined-basic" label="Name" variant="outlined" onChange={(e)=>{setName(e.target.value)}} />
   <br/>
      
    
        <TextField className='input' id="outlined-basic" label="Surname" variant="outlined" onChange={(e)=>{setSurname(e.target.value)}} />
      <br/>
    
   
       <TextField className='input' id="outlined-basic" label="Username" variant="outlined" onChange={(e)=>{setUsername(e.target.value)}} />
     <br/>
      
      
      <TextField className='input'
          id="standard-number"
          label="Age"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          onChange={(e)=>{setAge(e.target.value)}} />
    <br/>

    <Stack className='button'  direction="row" spacing={2}>

      <Button variant="contained"  onClick={handleAdd} endIcon={<SendIcon />}>
        Send new User
      </Button>
    </Stack>
     



    </div>
  )
}
