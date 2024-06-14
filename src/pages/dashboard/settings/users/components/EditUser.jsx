import {
  Box,
  Button,
  Grid,
  styled,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import BackIcon from '../../../../../assets/svgs/modal/BackIcon'
import CloseIcon from '../../../../../assets/svgs/modal/CloseIcon'
import InputField from './InputField'
import { roles } from '../../../../../data/data'
import { regions } from '../../../../../data/data'
import CameraIcon from '../../../../../assets/svgs/modal/CameraIcon'

const EditUser = ({
  onClose,
  user,
  onSave,
  label,
  maxLength,
  type,
  value,
  change,
}) => {
  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)
  const [role, setRole] = useState(user.role)
  const [profile, setProfile] = useState(user.profile)

  const handleSave = () => {
    onSave({
      ...user,
      firstName,
      lastName,
      email,
      phone,
      role,
      profile
    })
  }

  const handleImageSrc = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfile(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            color: 'rgba(17, 17, 17, 1)',
            fontSize: {
              xs: '1rem',
              md: '1.5rem',
            },
            fontWeight: 600,
          }}
        >
          <Box sx={{ cursor: 'pointer', height: '25px' }} onClick={onClose}>
            <BackIcon />
          </Box>
          EDIT USER
        </Box>
        <Box sx={{ cursor: 'pointer' }} onClick={onClose}>
          <CloseIcon onClick={onClose} />
        </Box>
      </Box>
      {/* Form  */}
      <Box
        sx={{
          marginTop: {
            xs: '1rem',
            lg: '2.5rem',
          },
        }}
      >
        <Grid container spacing="16">
          <Grid item xs="12" lg="6">
            <InputField
              type="text"
              label="First Name"
              maxLength="20"
              value={firstName}
              change={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs="12" lg="6">
            <InputField
              type="text"
              label="Last Name"
              maxLength="20"
              value={lastName}
              change={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs="12" lg="6">
            <InputField
              type="email"
              label="Email"
              maxLength="30"
              value={email}
              change={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs="12" lg="6">
            <InputField
              type="tel"
              label="Phone Number"
              maxLength="30"
              value={phone}
              change={(e) => setPhone(e.target.value)}
            />
          </Grid>
          <Grid item xs="12" lg="6">
            <InputField
              type="text"
              label="Role"
              maxLength="30"
              value={role}
              change={(e) => setRole(e.target.value)}
            />
          </Grid>
          <Grid
            item
            xs="12"
            lg="6"
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
          >
            <Typography
              sx={{
                color: 'rgba(113, 117, 121, 1)',
                fontSize: '18px',
                fontWeight: 600,
              }}
            >
              PROFILE PICTURE
            </Typography>
            <Image src={profile} />
            <ChangeButton startIcon={<CameraIcon />}>
              CHANGE PHOTOS
              <FileInput type="file" onChange={handleImageSrc} />
            </ChangeButton>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                width: '255px',
                justifyContent: 'center',
              }}
            >
              <CancelBtn onClick={onClose}>Cancel</CancelBtn>
              <Button
                onClick={handleSave}
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
      </Box>
    </>
  )
}

export default EditUser

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
    width: '100%',
  },
  borderRadius: '14px',
  margin: '10px 0 20px',
})

const CancelBtn = styled('span')({
  fontsize: '16px',
  fontWeight: 600,
  color: 'rgba(17, 17, 17, 1)',
  cursor: 'pointer',
})
