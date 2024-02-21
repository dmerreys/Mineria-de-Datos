import {
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Header from "components/Header";
import { useGetStudentQuery } from "state/api";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  quintilData,
  sexoData,
  etniaData,
  areaData,
  sostenimientoData,
  regionData,
  regimenData,
  gradoData,
  zonaData,
  abandonoData
} from "assets/data";
import institucionesData from "assets/data/Instituciones.json";
import provinciasData from "assets/data/Provincias.json";

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
    editable: true,
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
    valueGetter: (params) => {
      return (
        sexoData.find((sexo) => sexo.codigo === params.value)?.nombre ||
        params.value
      );
    },
  },
  {
    field: "etnia",
    headerName: "Etnia",
    //flex: 1,
    valueGetter: (params) => {
      return (
        etniaData.find((etnia) => etnia.codigo === params.value)?.nombre ||
        params.value
      );
    },
  },
  {
    field: "regionNatural",
    headerName: "Region",
    //flex: 1,
    valueGetter: (params) => {
      return (
        regionData.find((region) => region.codigo === params.value)
          ?.nombre || params.value
      );
    },
  },
  {
    field: "area",
    headerName: "Area",
    //flex: 1,
    valueGetter: (params) => {
      return (
        areaData.find((area) => area.codigo === params.value)?.nombre ||
        params.value
      );
    },
  },
  {
    field: "quintil",
    headerName: "Quintil",
    //flex: 1,
    valueGetter: (params) => {
      return (
        quintilData.find((quintil) => quintil.codigo === params.value)
          ?.nombre || params.value
      );
    },
  },
  {
    field: "isec",
    headerName: "Isec",
    //flex: 1,
  },
  {
    field: "catIsec",
    headerName: "Categoría Isec",
    //flex: 1,
  },
  {
    field: "provincia",
    headerName: "Provincia",
    //flex: 1,
    valueGetter: (params) => {
      return (
        provinciasData.find((provincia) => provincia["Codigo de Provincia"].toString() === params.value)
          ?.["Nombre de Provincia"] || params.value
      );
    },
  },
  {
    field: "amie",
    headerName: "Institución",
    //flex: 1,
    valueGetter: (params) => {
      return (
        institucionesData.find((institucion) => institucion.AMIE === params.value)
          ?.Nombre_Institucion || params.value
      );
    },
  },
  {
    field: "grado",
    headerName: "Grado",
    //flex: 1,
    valueGetter: (params) => {
      return (
        gradoData.find((grado) => grado.codigo === params.value)
          ?.nombre || params.value
      );
    },
  },
  {
    field: "zona",
    headerName: "Zona",
    //flex: 1,
    valueGetter: (params) => {
      return (
        zonaData.find((zona) => zona.codigo === params.value)
          ?.nombre || params.value
      );
    },
  },
  {
    field: "regimenEscolar",
    headerName: "Regimen",
    //flex: 1,
    valueGetter: (params) => {
      return (
        regimenData.find((regimen) => regimen.codigo === params.value)
          ?.nombre || params.value
      );
    },
  },
  {
    field: "sostenimiento",
    headerName: "Sostenimiento",
    //flex: 1,
    valueGetter: (params) => {
      return (
        sostenimientoData.find((sostenimiento) => sostenimiento.codigo === params.value)
          ?.nombre || params.value
      );
    },
  },
  {
    field: "abandono",
    headerName: "Abandono",
    //flex: 1,
    valueGetter: (params) => {
      return (
        abandonoData.find((abandono) => abandono.codigo === params.value)
          ?.nombre || params.value
      );
    }
  },
];

const Predicciones = () => {
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const theme = useTheme();
  const { data, isLoading } = useGetStudentQuery();

  console.log(data);

  return (
    <Box m="1.5rem 2.5rem">
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
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Predicciones;
