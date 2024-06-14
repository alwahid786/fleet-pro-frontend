import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material'
import EmailIcon from '../../../assets/svgs/login/EmailIcon'
import { useNavigate } from 'react-router-dom';
import { useLoginMutation} from '../../../redux/api/authApi';
import { useFormik } from 'formik'
import { loginSchema } from '../../../schemas'
import { toast } from 'react-toastify';
import { useState } from 'react';

const Form = () => {

  const [login] = useLoginMutation()
  const navigate = useNavigate()
  const [isLoading , setisLoading] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: { email: '', password: '' },
      validationSchema: loginSchema,
      onSubmit: async (values, actions) => {
    
        const res = await login(values)
        console.log(res)

        // if error show error
        if (res.error) {
          toast.error(res.error.data.message)
        }

        // if success show success
        if (res.data) {
          toast.success(res.data.message)

          setTimeout(() => {
            navigate('/dashboard')
          }, 1000)
        }

        // Reset the form
        actions.resetForm()
      },
    })


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
             type='password'
              id="password"
              autoComplete="current-password"
              variant="outlined"
            />

            <Typography
              sx={{
                alignSelf: 'start',
                color: 'rgba(0, 107, 206, 1)',
                cursor: 'pointer',
              }}
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
