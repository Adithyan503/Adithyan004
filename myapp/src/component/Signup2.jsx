import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup2 = () => {
  return (
    <div>
        <h1>FACEBOOK</h1>
        <TextField variant='outlined' label='Name'/>
        <br></br><br></br>
        <TextField variant='outlined' label='Age'/>
        <br></br><br></br>
        <TextField variant='outlined' label='number'/>
        <br></br><br></br>
        <TextField variant='outlined' label='password'/>
        <br></br><br></br>
         <Button variant="outlined">LOGIN</Button> 
    </div>
  )
}

export default Signup2