import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, TextField, Button, Typography, IconButton } from '@mui/material'
import EmailIcon from '../../../assets/svgs/login/EmailIcon'
import EyeIconOpen from '../../../assets/svgs/login/EyeIconOpen'
import EyeIconCLose from '../../../assets/svgs/login/EyeIconCLose'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Sign in
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Welcome to Fleet Master
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            sx={{
              width: {
                xs: '100%',
                md: '38vw',
              },
            }}
            id="email"
            label="Enter your eMail"
            name="email"
            autoComplete="email"
            autoFocus
            variant="outlined"
            InputProps={{
              endAdornment: <EmailIcon />,
            }}
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
            sx={{
              width: {
                xs: '100%',
                md: '38vw',
              },
            }}
            name="password"
            label="Enter your password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <EyeIconCLose /> : <EyeIconOpen />}
                </IconButton>
              ),
            }}
          />

          <Typography
            sx={{
              alignSelf: 'start',
              color: 'rgba(0, 107, 206, 1)',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/forgot-password')}
          >
            Forget Password?
          </Typography>

          <Button
            type="submit"
            variant="contained"
            sx={{
              mx: 'auto',
              mt: 3,
              mb: 2,
              width: {
                xs: '100%',
                md: '20vw',
              },
            }}
          >
            Sign in
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Form
