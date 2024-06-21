import { Fragment, useEffect, useState } from "react";
import TruckCard from "./components/TruckCard";
// import { trucks } from "../../../../data/data";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import DownloadIcon from "../../../../assets/svgs/reports/DownloadIcon";
import AddIcon from "../../../../assets/svgs/settings/AddIcon";
import Modal from "../../../../components/modal/Modal";
import { deleteTruckAction, getAllTrucksAction } from "../../../../redux/actions/truck.actions";
import AddTruck from "./components/AddTruck";
import EditTruck from "./components/EditTruck";

const Trucks = () => {
    const [modalType, setModalType] = useState(null);
    const [singleTruck, setSingleTruck] = useState("");
    const dispatch = useDispatch();
    const { trucks, message, error } = useSelector((state) => state.truck);

    console.log(trucks);

    const handleOpenAddUserModal = () => {
        setModalType("add");
    };

    const handleOpenEditModal = (truck) => {
        setModalType("edit");
        setSingleTruck(truck);
    };

    const handleCloseModal = () => {
        setModalType(null);
    };

    const deleteTruckHandler = async (id) => {
        if (id) {
            await dispatch(deleteTruckAction(id));
            toast.success("Truck deleted successfully");
            dispatch(getAllTrucksAction());
        }
    };

    useEffect(() => {
        dispatch(getAllTrucksAction());
    }, [dispatch]);

    return (
        <Fragment>
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
                    <Box sx={{ cursor: "pointer" }} onClick={handleOpenAddUserModal}>
                        <AddIcon />
                    </Box>
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
                    {trucks?.map((truck, i) => (
                        <TruckCard
                            key={i}
                            truck={truck}
                            deleteTruckHandler={deleteTruckHandler}
                            handleOpenEditModal={handleOpenEditModal}
                        />
                    ))}
                </Box>
            </Box>
            {modalType && (
                <Modal onClose={handleCloseModal}>
                    {modalType === "edit" && (
                        <EditTruck singleTruck={singleTruck} onClose={handleCloseModal} />
                    )}
                    {modalType === "add" && <AddTruck onClose={handleCloseModal} />}
                </Modal>
            )}
        </Fragment>
    );
};

export default Trucks;
