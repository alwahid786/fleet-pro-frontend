/* eslint-disable react/prop-types */
import { Box, styled } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import NotifictionIcon from "../../../../../assets/svgs/NotifictionIcon";
import { getAllNotificationsAction } from "../../../../../redux/actions/notification.actions";
import NotificationContent from "./NotificationContent";

const Notification = ({ notifications }) => {
    const dispatch = useDispatch();

    const [notiOpen, setNotiOpen] = useState(null);

    const handleNotificationOpen = async (e) => {
        setNotiOpen(e.currentTarget);
        await dispatch(getAllNotificationsAction());
    };

    const handleNotificationClose = () => {
        setNotiOpen(null);
    };

    return (
        <>
            <NotificationBox onClick={handleNotificationOpen}>
                <NotifictionIcon />
                {notifications?.length > 0 && (
                    <NotificationNumbers>{notifications.length}</NotificationNumbers>
                )}
            </NotificationBox>
            <NotificationContent notiOpen={notiOpen} handleNotificationClose={handleNotificationClose} />
        </>
    );
};

export default Notification;

const NotificationBox = styled(Box)({
    position: "absolute",
    right: "89px",
    top: "30px",
    width: "92px",
    cursor: "pointer",
});
const NotificationNumbers = styled(Box)({
    position: "absolute",
    top: "3px",
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    background: "rgba(253, 75, 46, 1)",
    color: "#fff",
    fontSize: "8px",
    fontWeight: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});
