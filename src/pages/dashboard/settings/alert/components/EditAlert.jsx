import { Box, Button, Grid, styled, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import BackIcon from '../../../../../assets/svgs/modal/BackIcon'
import CloseIcon from '../../../../../assets/svgs/modal/CloseIcon'
import { roles } from '../../../../../data/data'
import { regions } from '../../../../../data/data'

const EditAlert = ({ onClose, label, maxLength, type }) => {
<<<<<<< HEAD
=======
    const [selected, setSelected] = useState('On Platform');

    const handleChange = (event) => {
        setSelected(event.target.name);
    };
>>>>>>> a152627ca696b2645793fc427dab193839e18411

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
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        width: '255px',
                        justifyContent: 'center'
                    }}>
                        <CancelBtn onClick={onClose}>Cancel</CancelBtn>
                        <Button sx={{
                            color: '#fff',
                            borderRadius: '16px',
                            width: '137px',
                            padding: '16px'
                        }}>
                            Save
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>
  )
}

export default EditAlert

const CancelBtn = styled('span')({
    fontsize: '16px',
    fontWeight: 600,
    color: 'rgba(17, 17, 17, 1)',
    cursor: 'pointer'  
})