/* eslint-disable react/prop-types */
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Typography } from "@mui/material";
import { Fragment } from "react";

const DeviceCard = ({ device, handleDeleteDevice, handleOpenEditModal }) => {
    return (
        <Fragment>
            <Box
                sx={{
                    flexGrow: "1",
                    background: "rgba(255, 255, 255, 1)",
                    borderRadius: "12px",
                    padding: {
                        xs: "1rem",
                        md: "2rem",
                    },
                }}
            >
                <Typography
                    sx={{
                        textAlign: "center",
                        color: "rgba(70, 66, 85, 1)",
                        fontSize: "18px",
                        fontWeight: 500,
                    }}
                >
                    {device?._id}
                </Typography>
                <Box
                    sx={{
                        marginTop: "1.5rem",
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "1rem",
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                color: "rgba(127, 127, 146, 1)",
                                fontSize: "12px",
                            }}
                        >
                            Date/time creation
                        </Typography>
                        <Typography
                            sx={{
                                color: "rgba(0, 107, 206, 1)",
                                fontSize: "16px",
                            }}
                        >
                            {device?.createdAt?.split("T")[0]}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                color: "rgba(127, 127, 146, 1)",
                                fontSize: "12px",
                            }}
                        >
                            Device Name
                        </Typography>
                        <Typography
                            sx={{
                                color: "rgba(0, 107, 206, 1)",
                                fontSize: "16px",
                            }}
                        >
                            {device?.name}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        marginTop: "1.5rem",
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "1rem",
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                color: "rgba(127, 127, 146, 1)",
                                fontSize: "12px",
                            }}
                        >
                            Device Type
                        </Typography>
                        <Typography
                            sx={{
                                color: "rgba(0, 107, 206, 1)",
                                fontSize: "16px",
                            }}
                        >
                            {device?.type}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                color: "rgba(127, 127, 146, 1)",
                                fontSize: "12px",
                            }}
                        >
                            Assigned To
                        </Typography>
                        <Typography
                            sx={{
                                color: "rgba(0, 107, 206, 1)",
                                fontSize: "16px",
                            }}
                        >
                            {device?.assignedTo ? device?.assignedTo?.truckName : "Not Assigned"}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        gap: "10px",
                        mt: 2,
                    }}
                >
                    <Button
                        onClick={() => handleOpenEditModal(device)}
                        size="small"
                        fullWidth
                        sx={{
                            background: "#006BCE33",
                            minWidth: "127px",
                            "&:hover": {
                                background: "transparent",
                            },
                        }}
                        startIcon={<EditIcon sx={{ color: "#006BCE" }} />}
                    >
                        Edit
                    </Button>
                    <Button
                        onClick={() => handleDeleteDevice(device?._id)}
                        size="small"
                        fullWidth
                        color="error"
                        sx={{
                            background: "#FFCCC6",
                            minWidth: "127px",
                            "&:hover": {
                                background: "transparent",
                            },
                        }}
                        startIcon={<DeleteIcon sx={{ color: "#FF1900" }} />}
                    >
                        Delete
                    </Button>
                </Box>
            </Box>
        </Fragment>
    );
};

export default DeviceCard;
