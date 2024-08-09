import { Button, TextField ,Typography } from '@mui/material'
import React, { useState } from 'react'
const Statebase = () => {
      var[val, setval]=useState('Adithyan')
      var[name,setname]=useState()

       const handleinput=(e)=>{
        setval(e.target.value)
        console.log(e.target.value)
       }
       const submit=()=>{
        setname(val)
       }
  return (
    <div>
        <Typography variant='h3'>WELCOME  {name}</Typography> <br />
        <TextField id="outlined" label="ENTER YOUR NAME" onChange={handleinput}variant="outlined" /><br></br><br></br>
        <Button variant="contained" onClick={submit}>SUBMIT</Button>
    
        </div>
  )
}

export default Statebase