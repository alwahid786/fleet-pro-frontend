import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography, styled } from "@mui/material";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import BackIcon from "../../../../../assets/svgs/modal/BackIcon";
import CameraIcon from "../../../../../assets/svgs/modal/CameraIcon";
import CloseIcon from "../../../../../assets/svgs/modal/CloseIcon";
import SaveIcon from "../../../../../assets/svgs/settings/SaveIcon";
import { addDriverAction } from "../../../../../redux/actions/driver.actions";
import InputField from "./InputField";
import { useFormik } from "formik";
import { addDriverSchema } from "../../../../../schemas";

const trucksData = [
    {
        _id: '234',
        truckName: 'Truck One'
    },
    {
        _id: '235',
        truckName: 'Truck Two'
    },
]

// eslint-disable-next-line react/prop-types
const AddDriver = ({ onClose }) => {
    const dispatch = useDispatch();
    const [profile, setProfile] = useState("");
    const [image, setImage] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fleetNumber, setFleetNumber] = useState("");
    const [phone, setPhone] = useState("");
    const [licenseExpiry, setLicenseExpiry] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSave = async () => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("fleetNumber", fleetNumber);
        formData.append("phoneNumber", phone);
        formData.append("licenseExpiry", licenseExpiry);
        formData.append("file", image);
        await dispatch(addDriverAction(formData));
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

    const initialValues = {
        firstName: '',
        lastName: '',
        fleetNumber: '',
        licenseExpirey: '',
        phoneNumber: ''
    }

    const {values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue} = useFormik({
        initialValues,
        validationSchema: addDriverSchema,
    })

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
                    ADD DRIVER
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
                                    type="number"
                                    label="Fleet Number"
                                    maxLength="30"
                                    value={fleetNumber}
                                    change={(e) => setFleetNumber(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs="12" lg="6">
                                <InputField
                                    type="date"
                                    label="License Expiry"
                                    maxLength="30"
                                    value={licenseExpiry}
                                    change={(e) => setLicenseExpiry(e.target.value)}
                                    labelProps={true}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="truck-select-label">Select Truck</InputLabel>
                                    <Select
                                        labelId="truck-select-label"
                                        label="Select Truck"
                                        sx={{ width: '100%' }}
                                    >
                                        {trucksData.map((truck) => (
                                            <MenuItem key={truck._id} value={truck._id}>
                                                {truck.truckName}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
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
                                    value={phone}
                                    change={(e) => setPhone(e.target.value)}
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
                            Driver PICTURE
                        </Typography>
                        <Image src={profile} />
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

export default AddDriver;

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
