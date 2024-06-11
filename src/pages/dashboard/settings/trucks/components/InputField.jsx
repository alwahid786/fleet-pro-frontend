import { TextField } from '@mui/material'
import React from 'react'

const InputField = ({ type, label, maxLength }) => {
  return (
    <>
        <TextField 
            label={label}
            variant='outlined'
            fullWidth
            type={type}
            inputProps={{ maxLength: maxLength }}
        />
    </>
  )
}

export default InputField