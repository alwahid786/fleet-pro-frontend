import { useState } from 'react'
import { Box, TextField, Button, Typography, IconButton, CircularProgress } from '@mui/material' // Added CircularProgress for loader
import EmailIcon from '../../../assets/svgs/login/EmailIcon'
import EyeIconOpen from '../../../assets/svgs/login/EyeIconOpen'
import EyeIconClose from '../../../assets/svgs/login/EyeIconCLose'
import { useNavigate } from 'react-router-dom'
import {
  useLoginMutation,
  useResetPasswordMutation,
} from '../../../redux/api/authApi'
import { toast } from 'react-toastify'

const Form = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [login] = useLoginMutation()
  const [resetPassword] = useResetPasswordMutation()
  const [isLoading, setIsLoading] = useState(false) // Set initial loading state to false

  const togglePasswordVisibility = () => {setShowPassword(!showPassword)}

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!email || !password) {return toast.error('Please fill in all fields')}

    setIsLoading(true) // Show loader while logging in

    try {

      const res = await login({ email, password })

      if (res.error) {
        toast.error(res.error.data.message)
      } else if (res.data.success === true) {
        navigate('/dashboard')
      }
    } catch (error) {
      toast.error('An error occurred while logging in.')
    } finally {
      setIsLoading(false) // Hide loader after login process is complete
    }
  }

  const resetPasswordHandle = async (event) => {
    event.preventDefault()
    if (!email) {
      return toast.error('Please enter your email to reset the password')
    }

    try {
      const res = await resetPassword({ email })
      if (res.error) {
        toast.error(res.error.data.message)
      } else {
        toast.success('Password reset link sent to your email')
      }
    } catch (error) {
      toast.error('An error occurred while resetting the password.')
    }
  }

  return (
    <>
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress /> {/* Loader */}
        </Box>
      ) : (
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
              sx={{
                width: {
                  xs: '100%',
                  md: '38vw',
                },
              }}
              id="email"
              label="Enter your email"
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
                    {showPassword ? <EyeIconClose /> : <EyeIconOpen />}
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
              onClick={resetPasswordHandle}
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
      )}
    </>
  )
}

export default Form
