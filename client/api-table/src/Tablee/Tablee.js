import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import './Tablee.css';
import { RiDeleteBinFill } from 'react-icons/ri';
import { GrView } from 'react-icons/gr';



import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  

export default function Tablee() {

    const[users,setUsers]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
       getUsers()
    },[])


const getUsers=()=>{
    axios.get("http://localhost:5000/users")
    .then(res=>setUsers(res.data))
  }
  console.log(users);

  
  const handleDelete=(id)=>{
      axios.delete(`http://localhost:5000/users/${id}`)
      .then(()=>getUsers())
    }

  const handleView=(id)=>{
    navigate(`/View/${id}`)
  }




  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Surname</StyledTableCell>
            <StyledTableCell align="right">Username</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>

            <StyledTableCell align="right">Action</StyledTableCell>

           
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.surname}</StyledTableCell>
              <StyledTableCell align="right">{row.username}</StyledTableCell>
              <StyledTableCell align="right">{row.age}</StyledTableCell>

              <StyledTableCell align="right">
                <button className='button-80' onClick={()=>handleDelete(row._id)}>< RiDeleteBinFill/></button>
                <button className='button-83' onClick={()=>handleView(row._id)}><GrView/></button>
                </StyledTableCell>
              

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
}
