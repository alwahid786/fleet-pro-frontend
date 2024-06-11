import { Box, Button, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import BackIcon from '../../../../../assets/svgs/modal/BackIcon'
import CloseIcon from '../../../../../assets/svgs/modal/CloseIcon'
import InputField from './InputField'
import { roles } from '../../../../../data/data'
import { regions } from '../../../../../data/data'
import CameraIcon from '../../../../../assets/svgs/modal/CameraIcon'

const EditUser = ({ onClose, label, maxLength, type }) => {
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
                EDIT USER
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
            <Grid container spacing='16'>
                <Grid item xs='12' lg='6'>
                    <InputField type='text' label='First Name' maxLength='20' />
                </Grid>
                <Grid item xs='12' lg='6'>
                    <InputField type='text' label='Last Name' maxLength='20' />
                </Grid>
                <Grid item xs='12' lg='6'>
                    <InputField type='email' label='Email' maxLength='30' />
                </Grid>
                <Grid item xs='12' lg='6'>
                    <InputField type='tel' label='Phone' maxLength='20' />
                </Grid>
                <Grid item xs='12' lg='6'>
                    <TextField 
                        select
                        fullWidth
                        label='Role'
                    >
                        {roles.map((role, i) => (
                            <MenuItem key={i} value={role.role}>
                                {role.role}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField 
                        select
                        fullWidth
                        label='Region'
                        sx={{ marginTop: '1rem' }}
                    >
                        {regions.map((region, i) => (
                            <MenuItem key={i} value={region.region}>
                                {region.region}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs='12' lg='6' display='flex' flexDirection='column' alignItems='flex-end'>
                    <Typography>
                        PROFILE PICTURE
                    </Typography>
                    {/* <img src={} /> */}
                    <Button sx={{
                        border: '1px solid rgba(0, 107, 206, 1)',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: ' center',
                        gap: '0.5rem',
                        position: 'relative',
                        background: 'transparent',
                        '&:hover': {
                            background: 'transparent'
                        }
                    }}>
                        <CameraIcon      />
                        CHANGE PHOTOS
                    </Button>
                </Grid>
            </Grid>
        </Box>
    </>
  )
}

export default EditUser