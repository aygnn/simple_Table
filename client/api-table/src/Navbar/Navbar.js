import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { AiFillHome } from 'react-icons/ai';
import './Navbar.css';


export default function Navbar() {



  return (

  
    <div className='esas'>
      <div className='navbar'>
        <Link className='home' to={'/'}>
          <span><AiFillHome/> Home </span></Link>
        <Stack spacing={2} direction="row">
          <Link className='add' to={'Add'}> <Button variant="contained">Add</Button></Link>
         </Stack>

      </div>


    </div>
  )
}
