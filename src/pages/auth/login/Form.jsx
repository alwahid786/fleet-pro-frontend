import { useState } from 'react'
import { Box, TextField, Button, Typography, IconButton, CircularProgress } from '@mui/material'
import EmailIcon from '../../../assets/svgs/login/EmailIcon'
import EyeIconOpen from '../../../assets/svgs/login/EyeIconOpen'
import EyeIconClose from '../../../assets/svgs/login/EyeIconCLose'
import { useNavigate } from 'react-router-dom'
import {
  useLoginMutation,
  useResetPasswordMutation,
} from '../../../redux/api/authApi'
import { useFormik } from 'formik'
import { loginSchema } from '../../../schemas'

const Form = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [login] = useLoginMutation()
  const [resetPassword] = useResetPasswordMutation()
  const [isLoading, setIsLoading] = useState(false) // Set initial loading state to false

  const togglePasswordVisibility = () => {setShowPassword(!showPassword)}

  const initialValues = {
    email: '',
    password: ''
  }

  const {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
    initialValues,
    validationSchema: loginSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, action) => {
      action.resetForm();
    },
  })

  const resetPasswordHandle = () => {
    console.log('reset is called')
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
              sx={{
                width: {
                  xs: '100%',
                  md: '38vw',
                },
              }}
              type='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              margin="normal"
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
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
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
