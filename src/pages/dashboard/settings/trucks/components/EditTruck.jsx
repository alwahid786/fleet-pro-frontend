import {
    Box,
    Button,
    Grid,
    styled,
    Typography,
    TextField,
  } from '@mui/material';
  import React, { useState } from 'react';
  import BackIcon from '../../../../../assets/svgs/modal/BackIcon';
  import CloseIcon from '../../../../../assets/svgs/modal/CloseIcon';
  import CameraIcon from '../../../../../assets/svgs/modal/CameraIcon';
  import SaveIcon from '../../../../../assets/svgs/settings/SaveIcon';
  import { useFormik } from 'formik';
  import { truckSchema } from '../../../../../schemas';
  
  const EditTruck = ({ onClose }) => {
    const [imageSrc, setImageSrc] = useState('');
  
    const initialValues = {
      truckName: '',
      fleetNumber: '',
      plateNumber: '',
      status: '',
      driver: '',
      lastUpdate: '',
      deviceID: '',
      image: '',
    };
  
    const formik = useFormik({
      initialValues,
      validationSchema: truckSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: (values, { resetForm }) => {
        console.log('Form values:', values);
        resetForm();
      },
    });
  
    const handleImageSrc = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrc(reader.result);
          formik.setFieldValue('image', file);
        };
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(17, 17, 17, 1)', fontSize: { xs: '1rem', md: '1.5rem' }, fontWeight: 600 }}>
            <Box sx={{ cursor: 'pointer', height: '25px' }} onClick={onClose}>
              <BackIcon />
            </Box>
            EDIT TRUCK
          </Box>
          <Box sx={{ cursor: 'pointer' }} onClick={onClose}>
            <CloseIcon onClick={onClose} />
          </Box>
        </Box>
        <Box sx={{ marginTop: { xs: '1rem', lg: '2.5rem' } }}>
          <Typography sx={{ fontWeight: 700, fontSize: '20px', marginBottom: '2rem' }}>
            General Info
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing="2rem">
              <Grid item xs="12" lg="8">
                <Grid container spacing="14">
                  <Grid item xs="12" lg="6">
                    <TextField
                      type="text"
                      label="Truck Name"
                      value={formik.values.truckName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      fullWidth
                      name="truckName"
                      error={formik.touched.truckName && Boolean(formik.errors.truckName)}
                      helperText={formik.touched.truckName && formik.errors.truckName}
                    />
                  </Grid>
                  <Grid item xs="12" lg="6">
                    <TextField
                      type="number"
                      label="Fleet Number"
                      value={formik.values.fleetNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      fullWidth
                      name="fleetNumber"
                      error={formik.touched.fleetNumber && Boolean(formik.errors.fleetNumber)}
                      helperText={formik.touched.fleetNumber && formik.errors.fleetNumber}
                    />
                  </Grid>
                  <Grid item xs="12" lg="6">
                    <TextField
                      type="number"
                      label="Plate Number"
                      value={formik.values.plateNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      fullWidth
                      name="plateNumber"
                      error={formik.touched.plateNumber && Boolean(formik.errors.plateNumber)}
                      helperText={formik.touched.plateNumber && formik.errors.plateNumber}
                    />
                  </Grid>
                  <Grid item xs="12" lg="6">
                    <TextField
                      type="number"
                      label="Device ID"
                      value={formik.values.deviceID}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      fullWidth
                      name="deviceID"
                      error={formik.touched.deviceID && Boolean(formik.errors.deviceID)}
                      helperText={formik.touched.deviceID && formik.errors.deviceID}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs="12" lg="4">
                <Typography sx={{ color: 'rgba(113, 117, 121, 1)', fontSize: '18px', fontWeight: 600 }}>
                  Truck PICTURE
                </Typography>
                <Image src={imageSrc} />
                <ChangeButton startIcon={<CameraIcon />}>
                  CHANGE PHOTOS
                  <FileInput type="file" onChange={handleImageSrc} />
                </ChangeButton>
                {formik.touched.image && formik.errors.image && (
                  <Typography color="error">{formik.errors.image}</Typography>
                )}
              </Grid>
              <Grid item xs="12">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '255px', justifyContent: 'center' }}>
                  <CancelBtn onClick={onClose}>Cancel</CancelBtn>
                  <Button
                    type="submit"
                    startIcon={<SaveIcon />}
                    sx={{
                      color: '#fff',
                      borderRadius: '16px',
                      width: '137px',
                      padding: '16px',
                    }}
                  >
                    Save
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </>
    );
  };
  
  export default EditTruck;
  
  const ChangeButton = styled(Button)({
    border: '1px solid rgba(0, 107, 206, 1)',
    borderRadius: '14px',
    position: 'relative',
    background: 'transparent',
    padding: '1rem',
    width: '255px',
    '@media (max-width:768px)': {
      width: '100%',
    },
    '&:hover': {
      background: 'transparent',
    },
    marginBottom: '2rem',
  });
  
  const FileInput = styled('input')({
    position: 'absolute',
    inset: 0,
    opacity: '0',
    cursor: 'pointer',
  });
  
  const Image = styled('img')({
    maxWidth: '100%',
    width: '255px',
    '@media (max-width:768px)': {
      width: '100%',
    },
    borderRadius: '14px',
    margin: '10px 0 20px',
  });
  
  const CancelBtn = styled('span')({
    fontSize: '16px',
    fontWeight: 600,
    color: 'rgba(17, 17, 17, 1)',
    cursor: 'pointer',
  });
  
  