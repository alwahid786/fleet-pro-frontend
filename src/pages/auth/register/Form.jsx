import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CameraIcon from "../../../assets/svgs/modal/CameraIcon";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { registerSchema } from "../../../schemas";

const Form = () => {
  const [profile, setProfile] = useState("");

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    period: "",
    image: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue} =
    useFormik({
      initialValues,
      validationSchema: registerSchema,
      onSubmit: () => console.log("values:", values),
    });

    const handleImageSrc = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setProfile(reader.result);
            setFieldValue("image", file);
          };
          reader.readAsDataURL(file);
        }
      };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
        Register
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Welcome to Fleet Master
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                label="First Name"
                name="firstName"
                value={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="email"
                label="Email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="tel"
                name="phone"
                label="Phone Number"
                value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Address"
                name="address"
                value={values.address}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.address && Boolean(errors.address)}
                helperText={touched.address && errors.address}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <LocationOnIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="password"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                label="Password"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
                label="Confirm Password"
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                sx={{ color: "#1976d2", fontSize: "18px", fontWeight: 600 }}
              >
                Trial Period
              </Typography>
              <FormControl
                sx={{ width: "160px" }}
                error={touched.period && Boolean(errors.period)}
              >
                <InputLabel id="select-period">Select Period</InputLabel>
                <Select
                  labelId="select-period"
                  label="Select Period"
                  name="period"
                  value={values.period}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{ width: "100%" }}
                >
                  <MenuItem value={"7-days"}>7 Days</MenuItem>
                  <MenuItem value={"15-days"}>15 Days</MenuItem>
                </Select>
                {touched.period && errors.period && (
                  <Typography color="error" fontSize="12px">
                    {errors.period}
                  </Typography>
                )}
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Image src={profile} />
          <ChangeButton startIcon={<CameraIcon />}>
            Upload
            <FileInput type="file" onChange={handleImageSrc} />
          </ChangeButton>
          {touched.image && errors.image && (
            <Typography sx={{ fontSize: "12px", mb: 2 }} color="error">
              {errors.image}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            sx={{ padding: "0.8rem 2.5rem", fontSize: "18px" }}
            variant="contained"
          >
            Register
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "rgba(0, 107, 206, 1)" }}>
              Login
            </Link>
          </Box>
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled("form")({
  width: "100%",
});

const ChangeButton = styled(Button)({
  border: "1px solid rgba(0, 107, 206, 1)",
  borderRadius: "14px",
  position: "relative",
  background: "transparent",
  padding: "0.8rem",
  fontSize: "18px",
  width: "210px",
  "&:hover": {
    background: "transparent",
  },
});

const FileInput = styled("input")({
  position: "absolute",
  inset: 0,
  opacity: "0",
  cursor: "pointer",
});

const Image = styled("img")({
  maxWidth: "100%",
  width: "240px",
  height: "240px",
  objectFit: "cover",
  border: "2px solid #1976d2",
  // "@media (max-width:768px)": {
  //     width: "100%",
  // },
  borderRadius: "50%",
  margin: "0px 0 20px",
});
