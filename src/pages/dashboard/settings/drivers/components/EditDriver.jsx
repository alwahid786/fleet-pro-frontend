/* eslint-disable react/prop-types */
import { Box, Button, Grid, styled, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import BackIcon from "../../../../../assets/svgs/modal/BackIcon";
import CameraIcon from "../../../../../assets/svgs/modal/CameraIcon";
import CloseIcon from "../../../../../assets/svgs/modal/CloseIcon";
import SaveIcon from "../../../../../assets/svgs/settings/SaveIcon";
import { updateDriverAction } from "../../../../../redux/actions/driver.actions";
import InputField from "./InputField";

const EditDriver = ({ driver, onClose }) => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState(driver?.firstName);
    const [lastName, setLastName] = useState(driver?.lastName);
    const [phoneNumber, setPhoneNumber] = useState(driver?.phoneNumber);
    const [assignedTruck, setAssignedTruck] = useState(driver?.assignedTruck);
    const [licenseExpiry, setLicenseExpiry] = useState(driver?.licenseExpiry?.split("T")[0]);
    const [image, setImage] = useState(null);
    const [profile, setProfile] = useState(driver?.image?.url);
    const [isLoading, setIsLoading] = useState(false);

    // const { trucks } = useSelector((state) => state.truck);

    const handleSave = async () => {
        setIsLoading(true);
        const formData = new FormData();
        if (image) formData.append("file", image);
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("phoneNumber", phoneNumber);
        formData.append("assignedTruck", assignedTruck);
        formData.append("licenseExpiry", licenseExpiry);
        await dispatch(updateDriverAction(driver?._id, formData));
        setIsLoading(false);
    };

    const handleImageSrc = (e) => {
        const file = e.target.files[0];
        setImage(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setProfile(reader.result);
            reader.readAsDataURL(file);
        }
    };

    // useEffect(() => {
    //     dispatch(getAllTrucksAction());
    // }, [dispatch]);
    return (
        <Fragment>
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
                    EDIT DRIVER
                </Box>
                <Box sx={{ cursor: "pointer" }} onClick={onClose}>
                    <CloseIcon onClick={onClose} />
                </Box>
            </Box>
            {/* Form  */}
            <Box
                sx={{
                    marginTop: {
                        xs: "1rem",
                        lg: "2.5rem",
                    },
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontSize: "20px",
                        marginBottom: "2rem",
                    }}
                >
                    General Info
                </Typography>
                <Grid container spacing="2rem">
                    <Grid item xs="12" lg="8">
                        <Grid container spacing="14">
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
                                    type="date"
                                    label="License Expiry"
                                    maxLength="30"
                                    value={licenseExpiry}
                                    change={(e) => setLicenseExpiry(e.target.value)}
                                />
                            </Grid>
                            {/* <Grid item xs={12} lg={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="assign-truck-label">Assign Truck</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="assign-truck-label"
                                        value={truckId}
                                        label="Assign Truck"
                                        onChange={(e) => setTruckId(e.target.value)}
                                    >
                                        {trucks?.map((truck) => (
                                            <MenuItem key={truck._id} value={truck._id}>
                                                {truck.truckName}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid> */}
                            <Grid item xs="12">
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: "20px",
                                        margin: "2rem 0",
                                    }}
                                >
                                    Contacts
                                </Typography>
                            </Grid>
                            <Grid item xs="12" lg="6">
                                <InputField
                                    type="tel"
                                    label="Phone Number"
                                    maxLength="20"
                                    value={phoneNumber}
                                    change={(e) => setPhoneNumber(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs="12" mt={3}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                        width: "255px",
                                        justifyContent: "center",
                                    }}
                                >
                                    <CancelBtn onClick={onClose}>Cancel</CancelBtn>
                                    <Button
                                        onClick={handleSave}
                                        startIcon={<SaveIcon />}
                                        sx={{
                                            color: "#fff",
                                            borderRadius: "16px",
                                            width: "157px",
                                            padding: "16px",
                                            "&:disabled": {
                                                opacity: "0.3",
                                                color: "white",
                                                cursor: "not-allowed",
                                            },
                                        }}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Saving..." : "SAVE Driver"}
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs="12" lg="4">
                        <Typography
                            sx={{
                                color: "rgba(113, 117, 121, 1)",
                                fontSize: "18px",
                                fontWeight: 600,
                            }}
                        >
                            Truck PICTURE
                        </Typography>
                        <Image src={profile} loading="lazy" />
                        <ChangeButton startIcon={<CameraIcon />}>
                            CHANGE PHOTOS
                            <FileInput type="file" onChange={handleImageSrc} />
                        </ChangeButton>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    );
};

export default EditDriver;

const ChangeButton = styled(Button)({
    border: "1px solid rgba(0, 107, 206, 1)",
    borderRadius: "14px",
    position: "relative",
    background: "transparent",
    padding: "1rem",
    width: "255px",
    "@media (max-width:768px)": {
        width: "100%",
    },
    "&:hover": {
        background: "transparent",
    },
    marginBottom: "2rem",
});

const FileInput = styled("input")({
    position: "absolute",
    inset: 0,
    opacity: "0",
    cursor: "pointer",
});

const Image = styled("img")({
    maxWidth: "100%",
    width: "255px",
    "@media (max-width:768px)": {
        width: "100%",
    },
    borderRadius: "14px",
    margin: "10px 0 20px",
});

const CancelBtn = styled("span")({
    fontsize: "16px",
    fontWeight: 600,
    color: "rgba(17, 17, 17, 1)",
    cursor: "pointer",
});
