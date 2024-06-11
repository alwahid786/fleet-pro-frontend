import React from 'react'
import TruckCard from './components/TruckCard'
import { trucks } from '../../../../data/data'
import { Box } from '@mui/material'
import AddIcon from "../../../../assets/svgs/settings/AddIcon";
import DownloadIcon from "../../../../assets/svgs/reports/DownloadIcon";


const Trucks = () => {
  return (
    <>
      <Box
        sx={{
          background: "#F5F4F4",
          padding: {
            xs: "5px",
            md: "10px",
          },
          borderRadius: "24px",
        }}
      >
        <Box
          sx={{
            padding: "10px 30px",
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <AddIcon />
          <DownloadIcon />
        </Box>
        <Box
          style={{
            marginTop: "50px",
            display: "flex",
            flexWrap: "wrap",
            columnGap: "0.3rem",
            rowGap: "3.4rem",
          }}
        >
          {trucks.map((truck, i)=>(
            <TruckCard key={i} truck={truck}/>
          ))} 
        </Box>
      </Box>
    </>
  )
}

export default Trucks


