import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';
import EmailIcon from '../../../assets/svgs/login/EmailIcon';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation, useResetPasswordMutation } from '../../../redux/api/authApi';
import { useFormik } from 'formik';
import { loginSchema } from '../../../schemas';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Form = () => {
  const [isLoading, setisLoading] = useState(false);
  const [login] = useLoginMutation();
  const [resetPassword] = useResetPasswordMutation();
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: { email: '', password: '' },
      validationSchema: loginSchema,
      onSubmit: async (values, { resetForm }) => {
        console.log('values:', values);
        setisLoading(true);
        try {
          const res = await login(values);
          if (res.error) {
            toast.error(res.error.data.message);
          } else if (res.data) {
            toast.success(res.data.message);
            setTimeout(() => {
              navigate('/dashboard');
            }, 1000);
            resetForm(); // Using resetForm from actions
          }
        } catch (error) {
          toast.error('An unexpected error occurred');
          console.error('API Error:', error);
        } finally {
          setisLoading(false);
        }
      },
    });

  // Forget password handler
  const handleForget = async (e) => {
    e.preventDefault();
    if (!values.email) {
      toast.error('Please enter your email to reset the password');
      return;
    }
    setisLoading(true);
    try {
      const res = await resetPassword({ email: values.email });
      if (res.error) {
        toast.error(res.error.data.message);
      } else if (res.data) {
        toast.success('Password reset link sent to your email');
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
      console.error('API Error:', error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
              alignItems: 'center',
              width: '100%',
              maxWidth: '38vw', // Adjust as needed
            }}
          >
            <TextField
              type="email"
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
              sx={{ width: '100%', mb: 2 }}
            />
            <TextField
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              margin="normal"
              name="password"
              label="Enter your password"
              id="password"
              autoComplete="current-password"
              variant="outlined"
              sx={{ width: '100%', mb: 2 }}
            />
            <Typography
              onClick={handleForget}  // Updated to onClick
              variant="body2"
              sx={{ alignSelf: 'start', color: 'rgba(0, 107, 206, 1)', cursor: 'pointer', mb: 2 }}
            >
              Forgot Password?
            </Typography>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: '100%', maxWidth: '20vw', mb: 2 }}
            >
              Sign in
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Form;
