import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import EmailIcon from "../../../assets/svgs/login/EmailIcon";
// import { useLoginMutation, useResetPasswordMutation } from '../../../redux/api/authApi';
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useShowMessageError from "../../../hooks/useShowMessageError";
import { forgetPasswordAction, loginUserAction } from "../../../redux/actions/user.actions";
import { clearUserError, clearUserMessage } from "../../../redux/slices/user.slice";
import { loginSchema } from "../../../schemas";

const Form = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { message, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [requestName, setRequestName] = useState(false);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: loginSchema,
        onSubmit: (values, { resetForm }) => {
            setRequestName(true);
            setIsLoading(true);
            dispatch(loginUserAction(values.email, values.password));
            resetForm();
            setIsLoading(false);
        },
    });

    // Forget password handler
    const handleForget = (e) => {
        e.preventDefault();
        setRequestName(false);
        if (!values.email) return toast.error("Please enter your email to reset the password");
        dispatch(forgetPasswordAction(values.email));
    };

    // show message and error
    useShowMessageError(message, clearUserMessage, error, clearUserError, requestName ? "/dashboard" : "");
    return (
        <>
            {isLoading ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
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
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%",
                            maxWidth: "38vw", // Adjust as needed
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
                            sx={{ width: "100%", mb: 2 }}
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
                            sx={{ width: "100%", mb: 2 }}
                        />
                        <Typography
                            onClick={handleForget} // Updated to onClick
                            variant="body2"
                            sx={{
                                alignSelf: "start",
                                color: "rgba(0, 107, 206, 1)",
                                cursor: "pointer",
                                mb: 2,
                            }}
                        >
                            Forgot Password?
                        </Typography>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ width: "100%", maxWidth: "20vw", mb: 2 }}
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
