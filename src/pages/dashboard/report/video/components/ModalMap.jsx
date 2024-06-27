import { Box } from "@mui/material";
import React from "react";
import CloseIcon from "../../../../../assets/svgs/modal/CloseIcon";
import BackIcon from "../../../../../assets/svgs/modal/BackIcon";

const ModalMap = ({ onClose }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            color: "rgba(17, 17, 17, 1)",
            fontSize: {
              xs: "1rem",
              md: "1.5rem",
            },
            fontWeight: 600,
          }}
        >
          <Box sx={{ cursor: "pointer", height: "25px" }} onClick={onClose}>
            <BackIcon />
          </Box>
          ADD DRIVER
        </Box>
        <Box sx={{ cursor: "pointer" }} onClick={onClose}>
          <CloseIcon onClick={onClose} />
        </Box>
      </Box>
    </>
  );
};

export default ModalMap;
