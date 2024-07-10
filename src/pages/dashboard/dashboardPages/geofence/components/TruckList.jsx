import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const rows = [
  {
    id: 1,
    owner: "Mr. Cao",
    unitName: "SZTEST33843",
    imei: "923823C",
    deviceType: "Wired",
    status: "Offline",
  },
  {
    id: 2,
    owner: "Mr. Cao",
    unitName: "SZTEST33843",
    imei: "923823C",
    deviceType: "Wired",
    status: "Offline",
  },
  {
    id: 3,
    owner: "Jainbao",
    unitName: "SZTEST32342342",
    imei: "2342343C",
    deviceType: "Wiredless",
    status: "Online",
  },
];
const columns = [
  {
    field: "owner",
    headerName: "OWNER",
    headerAlign: "center",
    align: "center",
    width: 130,
  },
  {
    field: "unitName",
    headerName: "UNIT NAME",
    headerAlign: "center",
    align: "center",
    width: 130,
  },
  {
    field: "imei",
    headerName: "IMEI",
    headerAlign: "center",
    align: "center",
    width: 130,
  },
  {
    field: "deviceType",
    headerName: "DEVICE TYPE",
    headerAlign: "center",
    align: "center",
    width: 130,
  },
  {
    field: "status",
    headerName: "STATUS",
    headerAlign: "center",
    align: "center",
    width: 130,
  },
];

const TruckList = () => {
  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        sx={{
            "& .MuiDataGrid-row.even-row": {
              backgroundColor: "#fafafa",
            },
            "& .MuiDataGrid-columnHeader .MuiDataGrid-columnHeaderTitle": {
              fontSize: {
                xs: "12px",
                md: "13px",
              },
              fontWeight: 600,
              color: "#111111",
            },
            "& .MuiDataGrid-row .MuiDataGrid-cell": {
              fontSize: {
                xs: "12px",
                md: "13px",
              },
              background: "#fafafa",
              fontWeight: 400,
              color: "rgba(17, 17, 17, 0.6)",
            },
            "& .MuiDataGrid-root": {
              borderTopLeftRadius: "24px !important",
              borderTopRightRadius: "24px !important",
              border: "0 !important",
              overflow: "hidden",
              width: "100%",
            },
            "& .MuiDataGrid-main": {
              borderTopLeftRadius: "24px",
              borderTopRightRadius: "24px",
              width: "100%",
              padding: "0px",
            },
            "& .MuiDataGrid-overlay": {
              borderTopLeftRadius: "24px",
              borderTopRightRadius: "24px",
            },
            "& .MuiDataGrid-footerContainer": {
              display: "none",
            },
            "& .MuiDataGrid-scrollbar": {
              "&::-webkit-scrollbar": {
                width: "6px",
                height: "6px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#00193333",
                borderRadius: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#006bce",
                borderRadius: "10px",
              },
            },
          }}
      />
    </>
  );
};

export default TruckList;
