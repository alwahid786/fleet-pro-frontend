import React from "react";
import CustomCard from "./components/CustomCard";
import { Box } from "@mui/material";
import AddIcon from "../../../../assets/svgs/settings/AddIcon";
import DownloadIcon from "../../../../assets/svgs/reports/DownloadIcon";
import { drivers } from "../../../../data/data";


const Drivers = () => {
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
            columnGap: "1rem",
            rowGap: "4rem",
          }}
        >
          {drivers.map((driver, i) => (
            <CustomCard key={i} driver={ driver } />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Drivers;
