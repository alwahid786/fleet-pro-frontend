import { Box, Button, Grid, styled, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import BackIcon from '../../../../../assets/svgs/modal/BackIcon'
import CloseIcon from '../../../../../assets/svgs/modal/CloseIcon'
import InputField from './InputField'
import SaveIcon from '../../../../../assets/svgs/settings/SaveIcon'
import CameraIcon from '../../../../../assets/svgs/modal/CameraIcon'

const AddDriver = ({ onClose, label, maxLength, type }) => {
    const [imageSrc, setImageSrc] = useState('');

    const handleImageSrc = (e) => {
        const file = e.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result);
            };
            reader.readAsDataURL(file)
        }
        console.log('file', file)
    }

  return (
    <>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
             <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                color: 'rgba(17, 17, 17, 1)',
                fontSize: {
                    xs: '1rem',
                    md: '1.5rem'
                },
                fontWeight: 600
             }}>
                <Box sx={{cursor: 'pointer', height: '25px'}} onClick={onClose}>
                    <BackIcon />
                </Box>
                ADD DRIVER
             </Box>
             <Box sx={{cursor: 'pointer'}} onClick={onClose}>
                <CloseIcon onClick={onClose} />
            </Box>
        </Box>
        {/* Form  */}
        <Box sx={{
            marginTop: {
                xs: '1rem',
                lg: '2.5rem',
            }
        }}>
            <Typography sx={{
                fontWeight: 700,
                fontSize: '20px',
                marginBottom: '2rem'
            }}>
                General Info
            </Typography>
            <Grid container spacing='2rem'>
                <Grid item xs='12' lg='8'>
                    <Grid container spacing='14'>
                        <Grid item xs='12' lg='6'>
                            <InputField type='text' label='First Name' maxLength='20' />
                        </Grid>
                        <Grid item xs='12' lg='6'>
                            <InputField type='text' label='Last Number' maxLength='20' />
                        </Grid>
                        <Grid item xs='12' lg='6'>
                            <InputField type='number' label='License Expiry' maxLength='20' />
                        </Grid>
                        <Grid item xs='12' lg='6'>
                            <InputField type='number' label='Fleet Number' maxLength='20' />
                        </Grid>
                        <Grid item xs='12'>
                            <Typography sx={{
                                fontWeight: 700,
                                fontSize: '20px',
                                margin: '2rem 0'
                            }}>
                                Contacts
                            </Typography>
                        </Grid>
                        <Grid item xs='12' lg='6'>
                            <InputField type='tel' label='Phone Number' maxLength='20' />
                        </Grid>
                        <Grid item xs='12' mt={3}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                width: '255px',
                                justifyContent: 'center'
                            }}>
                                <CancelBtn onClick={onClose}>Cancel</CancelBtn>
                                <Button
                                startIcon={ <SaveIcon /> } 
                                sx={{
                                    color: '#fff',
                                    borderRadius: '16px',
                                    width: '157px',
                                    padding: '16px'
                                }}>
                                    SAVE Driver
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs='12' lg='4'>
                    <Typography sx={{
                        color: 'rgba(113, 117, 121, 1)',
                        fontSize: '18px',
                        fontWeight: 600
                    }}>
                        Truck PICTURE
                    </Typography>
                    <Image src={imageSrc} />
                    <ChangeButton startIcon={ <CameraIcon /> }>
                        CHANGE PHOTOS
                        <FileInput type='file' onChange={handleImageSrc} />
                    </ChangeButton>
                </Grid>
            </Grid>
        </Box>
    </>
  )
}

export default AddDriver

const ChangeButton = styled(Button)({
    border: '1px solid rgba(0, 107, 206, 1)',
    borderRadius: '14px',
    position: 'relative',
    background: 'transparent',
    padding: '1rem',
    width: '255px',
    '@media (max-width:768px)': {
        width: '100%'
    },
    '&:hover': {
        background: 'transparent'
    },
    marginBottom: '2rem'
})

const FileInput = styled('input')({
    position: 'absolute',
    inset: 0,
    opacity: '0',
    cursor: 'pointer',
})

const Image = styled('img')({
    maxWidth: '100%',
    width: '255px',
    '@media (max-width:768px)': {
        width: '100%'
    },
    borderRadius: '14px',
    margin: '10px 0 20px'
})

const CancelBtn = styled('span')({
    fontsize: '16px',
    fontWeight: 600,
    color: 'rgba(17, 17, 17, 1)',
    cursor: 'pointer'  
})