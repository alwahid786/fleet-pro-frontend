import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Button, TextField, MenuItem } from '@mui/material'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import AddIcon from '../../../../assets/svgs/settings/AddIcon'
import ViewIcon from '../../../../assets/svgs/geofence/ViewIcon'
import EditIcon from '../../../../assets/svgs/geofence/EditIcon'
import TimeIcon from '../../../../assets/svgs/geofence/TimeIcon'
import DeleteIcon from '../../../../assets/svgs/geofence/DeleteIcon'

const rows = [
  {
    id: 1,
    group: 'Customer Test',
    geofenceName: 'Leave Company Name',
    status: 'Disable|Invalid',
    alert: 'Out-Fence',
    startTime: '05/22/2024 16:09',
    endTime: '05/22/2024 16:09',
    deviceCour: '3',
    operation: '60',
  },
  {
    id: 4,
    group: 'Customer Test',
    geofenceName: 'Leave Company Name',
    status: 'Disable|Invalid',
    alert: 'Out-Fence',
    startTime: '05/22/2024 16:09',
    endTime: '05/22/2024 16:09',
    deviceCour: '3',
    operation: '60',
  },
  {
    id: 2,
    group: 'Customer Test',
    geofenceName: 'Leave Company Name',
    status: 'Disable|Invalid',
    alert: 'Out-Fence',
    startTime: '05/22/2024 16:09',
    endTime: '05/22/2024 16:09',
    deviceCour: '3',
    operation: '60',
  },
  {
    id: 3,
    group: 'Customer Test',
    geofenceName: 'Leave Company Name',
    status: 'Disable|Invalid',
    alert: 'Out-Fence',
    startTime: '05/22/2024 16:09',
    endTime: '05/22/2024 16:09',
    deviceCour: '3',
    operation: '60',
  },
]

const columns = [
  {
    field: 'group',
    headerName: 'GROUP',
    headerAlign: 'center',
    align: 'center',
    width: 140,
  },
  {
    field: 'geofenceName',
    headerName: 'GEOFENCE NAME',
    headerAlign: 'center',
    align: 'center',
    width: 230,
  },
  {
    field: 'status',
    headerName: 'STATUS',
    headerAlign: 'center',
    align: 'center',
    width: 150,
  },
  {
    field: 'alert',
    headerName: 'ALERT',
    headerAlign: 'center',
    align: 'center',
    width: 130,
  },
  {
    field: 'startTime',
    headerName: 'START TIME',
    headerAlign: 'center',
    align: 'center',
    width: 180,
  },
  {
    field: 'endTime',
    headerName: 'END TIME',
    headerAlign: 'center',
    align: 'center',
    width: 180,
  },
  {
    field: 'deviceCour',
    headerName: 'DEVICE COUR',
    headerAlign: 'center',
    align: 'center',
    width: 150,
  },
  {
    field: 'operation',
    headerName: 'OPERATION',
    width: 130,
    renderCell: () => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '7px' }}>
        <Box sx={{ cursor: 'pointer' }}>
          <ViewIcon />
        </Box>
        <Box sx={{ cursor: 'pointer' }}>
          <EditIcon />
        </Box>
        <Box sx={{ cursor: 'pointer' }}>
          <TimeIcon />
        </Box>
        <Box sx={{ cursor: 'pointer' }}>
          <DeleteIcon />
        </Box>
      </Box>
    ),
  },
]

const GeoFence = () => {
  const [date, setDate] = useState(null)
  const [group, setGroup] = useState('')
  const [geofenceName, setGeofenceName] = useState('')
  const [status, setStatus] = useState('')
  const [alert, setAlert] = useState('')
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const [filteredRows, setFilteredRows] = useState(rows)

  const handleFilter = () => {
    const filtered = rows.filter((row) => {
      const matchesGroup = group ? row.group === group : true
      const matchesGeofenceName = geofenceName
        ? row.geofenceName.includes(geofenceName)
        : true
      const matchesStatus = status ? row.status.includes(status) : true
      const matchesAlert = alert ? row.alert === alert : true
      const matchesStartTime = startTime
        ? new Date(row.startTime) >= new Date(startTime).setSeconds(0, 0)
        : true
      const matchesEndTime = endTime
        ? new Date(row.endTime) <= new Date(endTime).setSeconds(0, 0)
        : true
      return (
        matchesGroup &&
        matchesGeofenceName &&
        matchesStatus &&
        matchesAlert &&
        matchesStartTime &&
        matchesEndTime
      )
    })
    setFilteredRows(filtered)
  }

  const handleReset = () => {
    setGroup('')
    setGeofenceName('')
    setStatus('')
    setAlert('')
    setStartTime(null)
    setEndTime(null)
    setFilteredRows(rows)
  }

  return (
    <Box
      sx={{
        width: '100%',
        background: '#ffffff',
        borderRadius: '24px 24px 0 0',
        marginTop: '-3.5rem',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{ padding: '16px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}
      >
        <TextField
          select
          label="Group"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          fullWidth
          sx={{
            width: '100%',
            '@media (min-width: 960px)': {
              width: '250px',
            },
          }}
        >
          <MenuItem value="customer-test">Customer Test</MenuItem>
        </TextField>
        <TextField
          label="Geofence Name"
          value={geofenceName}
          onChange={(e) => setGeofenceName(e.target.value)}
          fullWidth
          sx={{
            width: '100%',
            '@media (min-width: 960px)': {
              width: '250px',
            },
          }}
        />
        <TextField
          select
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          fullWidth
          sx={{
            width: '100%',
            '@media (min-width: 960px)': {
              width: '250px',
            },
          }}
        >
          <MenuItem value="disable-invalid">Disable|Invalid</MenuItem>
        </TextField>
        <TextField
          select
          label="Alert"
          value={alert}
          onChange={(e) => setAlert(e.target.value)}
          fullWidth
          sx={{
            width: '100%',
            '@media (min-width: 960px)': {
              width: '250px',
            },
          }}
        >
          <MenuItem value="in-fence">In-Fence</MenuItem>
        </TextField>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker
            label="Start Time"
            value={startTime}
            onChange={(newValue) => setStartTime(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
          <TimePicker
            label="End Time"
            value={endTime}
            onChange={(newValue) => setEndTime(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </LocalizationProvider>
        <Button
          onClick={handleFilter}
          sx={{ width: '110px', boxShadow: 'none' }}
          variant="contained"
          color="primary"
        >
          Search
        </Button>
        <Button
          onClick={handleReset}
          sx={{
            width: '110px',
            backgroundColor: 'transparent',
            color: 'rgba(0, 103, 194, 1)',
            border: '1px solid rgba(0, 103, 194, 1)',
            boxShadow: 'none',
            '&:hover': {
                color: '#fff',
                border: 'none'
            }
          }}
          variant="contained"
          color="primary"
        >
          Reset
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '16px',
        }}
      >
        <AddIcon />
      </Box>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        sx={{
          '& .MuiDataGrid-row.even-row': {
            backgroundColor: '#fafafa',
          },
          '& .MuiDataGrid-columnHeader .MuiDataGrid-columnHeaderTitle': {
            fontSize: {
              xs: '14px',
              md: '16px',
            },
            fontWeight: 600,
            color: '#111111',
          },
          '& .MuiDataGrid-row .MuiDataGrid-cell': {
            fontSize: {
              xs: '14px',
              md: '16px',
            },
            background: '#fafafa',
            fontWeight: 400,
            color: 'rgba(17, 17, 17, 0.6)',
          },
          '& .MuiDataGrid-root': {
            borderTopLeftRadius: '24px !important',
            borderTopRightRadius: '24px !important',
            border: '0 !important',
            overflow: 'hidden',
            width: '100%',
          },
          '& .MuiDataGrid-main': {
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            width: '100%',
            padding: '0 10px',
          },
          '& .MuiDataGrid-overlay': {
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
          },
          '& .MuiDataGrid-footerContainer': {
            display: 'none',
          },
          '& .MuiDataGrid-scrollbar': {
            '&::-webkit-scrollbar': {
              width: '6px',
              height: '6px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#00193333',
              borderRadius: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#006bce',
              borderRadius: '10px',
            },
          },
        }}
      />
    </Box>
  )
}

export default GeoFence
