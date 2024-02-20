import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Box,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  Autocomplete,
} from "@mui/material";
import Header from "components/Header";
// import { useDispatch } from "react-redux";
// import { usePostLoginMutation, usePostSignUpMutation } from "state/api";
// import { setUserGlobal } from "state/index";
// import FlexBetween from "components/FlexBetween";
import { useGetStudentQuery } from "state/api";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "_id",
    headerName: "ID",
    //flex: 1,
  },
  {
    field: "nombre",
    headerName: "Nombre",
    //flex: 1,
    //editable: true,
  },
  {
    field: "apellido",
    headerName: "Apellido",
    //flex: 1,
  },
  {
    field: "cedula",
    headerName: "Cedula",
    //flex: 1,
  },
  {
    field: "edad",
    headerName: "Edad",
    //flex: 1,
  },
  {
    field: "sexo",
    headerName: "Sexo",
    //flex: 1,
  },
  {
    field: "etnia",
    headerName: "Etnia",
    //flex: 1,
  },
  {
    field: "provincia",
    headerName: "Provincia",
    //flex: 1,
  },
  {
    field: "area",
    headerName: "Area",
    //flex: 1,
  },
  {
    field: "regionNatural",
    headerName: "Region",
    //flex: 1,
  },
  {
    field: "regimenEscolar",
    headerName: "Regimen",
    //flex: 1,
  },
  {
    field: "quintil",
    headerName: "Quintil",
    //flex: 1,
  },
  {
    field: "isec",
    headerName: "Isec",
    //flex: 1,
  },
];

const Logistica = () => {
  const [inputData, setInputData] = useState([]);
  const [prediction, setPrediction] = useState(null);
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const theme = useTheme();
  // const dispatch = useDispatch();
  const { data, isLoading } = useGetStudentQuery();

  console.log(data);

  const handlePrediction = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: inputData,
        }),
      });

      const result = await response.json();
      setPrediction(result);
    } catch (error) {
      console.error("Error al realizar la predicción:", error);
    }
  };

  useEffect(() => {
    setInputData([
      [
        "Nombre90",
        "Apellido13",
        "8369884",
        15,
        "Mujer",
        "4",
        "2",
        "HEQMCZ",
        "2",
        "5",
        5,
        "Muy alto",
        "4",
        "4",
        "4",
        "2",
        "4",
        0.08,
        "03759",
      ],
      [
        "1",
        "4",
        "Fiscal",
        "7",
        "Sierra",
        "1",
        "Rural",
        "2",
        "6",
        "Muy Alta",
        17,
        1.0,
        "Muy Bajo",
      ],
    ]);
  }, []);

  return (
    <Box m="1.5rem 2.5rem">
      <div>
        <h1>Flask API con React</h1>
        <button onClick={handlePrediction}>Realizar Predicción</button>
        {prediction && (
          <div>
            <h2>Resultado de la Predicción:</h2>
            <p>{JSON.stringify(prediction)}</p>
          </div>
        )}
      </div>
      <Header title="Regresión Logística" subtitle="Listado de Estudiantes" />
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(1, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "5rem",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.secondary.alt,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        >
          <DataGrid
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={data || []}
            columns={columns}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Logistica;
