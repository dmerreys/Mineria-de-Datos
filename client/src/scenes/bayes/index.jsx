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
import { useDispatch } from "react-redux";
import { usePostLoginMutation, usePostSignUpMutation } from "state/api";
import { setUserGlobal } from "state/index";
import FlexBetween from "components/FlexBetween";
import { useGetStudentQuery } from "state/api";
import { DataGrid } from "@mui/x-data-grid";
import Distritos from "../../assets/data/Distritos.json";
import Provincias from "../../assets/data/Provincias.json";
import Instituciones from "../../assets/data/Instituciones.json";
import {
  etniaData,
  sexoData,
  quintilData,
  sostenimientoData,
  areaData,
  regionData,
  regimenData,
  //isecData,
  zonaData,
  gradoData,
} from "../../assets/data/index.js";

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
    field: "sexo",
    headerName: "Sexo",
    //flex: 1,
  },
  {
    field: "edad",
    headerName: "Edad",
    //flex: 1,
  },
  {
    field: "provincia",
    headerName: "Provincia",
    //flex: 1,
  },
  {
    field: "distrito",
    headerName: "Distrito",
    //flex: 1,
  },
  {
    field: "etnia",
    headerName: "Etnia",
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

const Bayes = () => {
  const [distritojson, setDistritojson] = useState([]);
  const [provinciajson, setProvinciajson] = useState([]);
  const [institucionjson, setInstitucionesjson] = useState([]);
  const [etniajson, setEtniajson] = useState([]);
  const [areajson, setAreajson] = useState([]);
  const [regionjson, setRegionjson] = useState([]);
  const [regimenjson, setRegimenjson] = useState([]);
  const [sexojson, setSexojson] = useState([]);
  ///////////////////////////////////////////////////////////////////////
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cedula, setCedula] = useState("");
  const [edad, setEdad] = useState("");
  const [institucion, setInstitucion] = useState(
    institucionjson[0]?.["Nombre_Institucion"] || null
  );
  const [institucionFiltrada, setInstitucionFiltrada] = useState([]);
  const [distrito, setDistrito] = useState(
    distritojson[0]?.["Nombre del Distrito"] || null
  );
  const [sexo, setSexo] = useState("");
  const [etnia, setEtnia] = useState(etniaData[0].nombre || null);
  const [provincia, setProvincia] = useState(
    provinciajson[0]?.["Nombre de Provincia"] || null
  );
  const [area, setArea] = useState("");
  const [regionNatural, setRegionNatural] = useState("");
  const [regimenEscolar, setRegimenEscolar] = useState("");
  const [sostenimiento, setSostenimiento] = useState("");
  const [quintil, setQuintil] = useState("");
  const [isec, setIsec] = useState("");
  const [catIsec, setCatIsec] = useState("");
  const [zona, setZona] = useState("");
  const [grado, setGrado] = useState("");
  const [umbralGeo, setUmbralGeo] = useState("");
  const [abandono, setAbandono] = useState("");
  /////////////////////////////

  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const theme = useTheme();
  const dispatch = useDispatch();
  const { data, isLoading } = useGetStudentQuery();

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
  };

  const handleChangeCedula = (event) => {
    setCedula(event.target.value);
  };

  const handleChangeEdad = (event) => {
    setEdad(event.target.value);
  };

  const handleChangeDistrito = (event, newValue) => {
    setDistrito(newValue);
  };

  const handleChangeSexo = (event, newSexo) => {
    setSexo(newSexo);
  };

  const handleChangeEtnia = (event, newValue) => {
    setEtnia(newValue);
  };

  const handleChangeInstitucion = (event, newValue) => {
    setInstitucion(newValue);
  };

  const handleChangeProvincia = (event, newValue) => {
    setProvincia(newValue);
  };

  const handleChangeArea = (event) => {
    setArea(event.target.value);
  };

  const handleChangeRegionNatural = (event) => {
    setRegionNatural(event.target.value);
  };

  const handleChangeRegimenEscolar = (event) => {
    setRegimenEscolar(event.target.value);
  };

  const handleChangeSostenimiento = (event) => {
    setSostenimiento(event.target.value);
  };

  const handleChangeQuintil = (event) => {
    setQuintil(event.target.value);
  };

  const handleChangeIsec = (event) => {
    setIsec(event.target.value);
  };

  const handleChangeCatIsec = (event) => {
    setCatIsec(event.target.value);
  };

  const handleChangeZona = (event) => {
    setZona(event.target.value);
  };

  const handleChangeGrado = (event) => {
    setGrado(event.target.value);
  };

  const handleChangeUmbralGeo = (event) => {
    setUmbralGeo(event.target.value);
  };

  const handleChangeAbandono = (event) => {
    setAbandono(event.target.value);
  };

  ///////////////////////////////////////////////////////////////////////////
  //const options = ['Value 1', 'Value 2'];
  //const [value, setValue] = useState(options[0]);
  const [inputEtnia, setInputEtnia] = useState("");
  const [inputDistrito, setInputDistrito] = useState("");
  const [inputInstitucion, setInputInstitucion] = useState("");
  const [inputProvincia, setInputProvincia] = useState("");
  const [inputSexo, setInputSexo] = useState("");

  const handleSubmit = () => {
    const nuevoEstudiante = {
      nombre: nombre,
      apellido: apellido,
      cedula: cedula,
      edad: edad,
      distrito: distrito,
      sexo: sexo,
      etnia: etnia,
      provincia: provincia,
      area: area,
      regionNatural: regionNatural,
      regimenEscolar: regimenEscolar,
      sostenimiento: sostenimiento,
      quintil: quintil,
      isec: isec,
      catIsec: catIsec,
      zona: zona,
      grado: grado,
      umbralGeo: umbralGeo,
      abandono: abandono,
    };
  };

  // Aquí puedes enviar el nuevo estudiante al backend para ser guardado en la base de datos

  useEffect(() => {
    setDistritojson(Distritos);
    setProvinciajson(Provincias);
    setInstitucionesjson(Instituciones);
    setEtniajson(etniaData);
    setAreajson(areaData);
    setRegionjson(regionData);
    setRegimenjson(regimenData);
    setSexojson(sexoData);
  }, []);

  useEffect(() => {
    console.log(provinciajson);
    if (provincia) {
      const provinciaSeleccionada = provinciajson.find(
        (p) => p["Nombre de Provincia"] === provincia
      );
      //console.log(provinciaSeleccionada);
      //console.log(institucionjson)
      // Filtrar las instituciones basadas en el distrito seleccionado
      const institucionFiltrada = institucionjson.filter((institucion) => {
        return (
          institucion["Cod_Provincia"] === String(provinciaSeleccionada["Codigo de Provincia"])
        );
      });
      //console.log(provinciaSeleccionada["Codigo de Provincia"])
      console.log(institucionFiltrada)

      setInstitucionFiltrada(institucionFiltrada);
    } else {
      // Si no hay distrito seleccionado, mostrar todas las instituciones
      setInstitucionFiltrada(institucionjson);
    }
  }, [provincia, provinciajson]);

  //console.log(provincia);
  /* useEffect(() => {
        // Cargar los datos desde el archivo JSON (en este caso, options.json)
        fetch("../../assets/data/Distritos.json")
          .then((response) => response.json())
          .then((data) => setOptions(data))
          .catch((error) => console.error("Error al obtener opciones:", error));
      }, []);
       */
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Bayes" subtitle="Datos Estudiantes" />
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
        <Box gridColumn="span 8" gridRow="span 3">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nombre"
                value={nombre}
                onChange={handleChangeNombre}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Apellido"
                value={apellido}
                onChange={handleChangeApellido}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Cédula"
                value={cedula}
                onChange={handleChangeCedula}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Edad"
                value={edad}
                onChange={handleChangeEdad}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                value={sexo}
                onChange={handleChangeSexo}
                inputValue={inputSexo}
                onInputChange={(event, newInputValue) => {
                  setInputSexo(newInputValue);
                }}
                id="manageable-states-demo"
                options={sexojson.map((option) => {
                  return option.nombre;
                })}
                //sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Sexo" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                value={etnia}
                onChange={handleChangeEtnia}
                inputValue={inputEtnia}
                onInputChange={(event, newInputValue) => {
                  setInputEtnia(newInputValue);
                }}
                id="manageable-states-demo"
                options={etniajson.map((option) => {
                  return option.nombre;
                })}
                //sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Etnia" />
                )}
              />
            </Grid>
            {/* PROVINCIAS*/}
            <Grid item xs={12} sm={6}>
              <Autocomplete
                value={provincia}
                onChange={handleChangeProvincia}
                inputValue={inputProvincia}
                onInputChange={(event, newInputValue) => {
                  setInputProvincia(newInputValue);
                }}
                id="manageable-states-demo"
                options={provinciajson.map((option) => {
                  return option["Nombre de Provincia"];
                })}
                //sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Provincia" />
                )}
              />
            </Grid>
            {/* INSTITUCIONES */}
            <Grid item xs={12} sm={6}>
              <Autocomplete
                value={institucion}
                onChange={handleChangeInstitucion}
                inputValue={inputInstitucion}
                onInputChange={(event, newInputValue) => {
                  setInputInstitucion(newInputValue);
                }}
                id="manageable-states-demo"
                options={institucionFiltrada.map((option) => {return `${option["Nombre_Institucion"]}-${option["AMIE"]}`;})}
                //institucionjson.map((option) => {return `${option["Nombre_Institucion"]}-${option["AMIE"]}`;})
                //sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Institucion" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                value={distrito}
                onChange={handleChangeDistrito}
                inputValue={inputDistrito}
                onInputChange={(event, newInputValue) => {
                  setInputDistrito(newInputValue);
                }}
                id="manageable-states-demo"
                options={distritojson.map((option) => {
                  return option["Nombre del Distrito"];
                })}
                //sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Distrito" />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel id="dynamic-select-label">Área</InputLabel>
              <Select
                labelId="dynamic-select-label"
                id="dynamic-select"
                value={area}
                label="Options"
                onChange={handleChangeArea}
              >
                {areajson.map((option) => (
                  <MenuItem key={option.codigo} value={option.nombre}>
                    {option.nombre}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="dynamic-select-label">Region Natural</InputLabel>
              <Select
                labelId="dynamic-select-label"
                id="dynamic-select"
                value={regionNatural}
                label="Options"
                onChange={handleChangeRegionNatural}
              >
                {regionjson.map((option) => (
                  <MenuItem key={option.codigo} value={option.nombre}>
                    {option.nombre}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="dynamic-select-label">Regimen Escolar</InputLabel>
              <Select
                labelId="dynamic-select-label"
                id="dynamic-select"
                value={regimenEscolar}
                label="Options"
                onChange={handleChangeRegimenEscolar}
              >
                {regimenjson.map((option) => (
                  <MenuItem key={option.codigo} value={option.nombre}>
                    {option.nombre}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Sostenimiento"
                value={sostenimiento}
                onChange={handleChangeSostenimiento}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Quintil"
                value={quintil}
                onChange={handleChangeQuintil}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="ISEC"
                value={isec}
                onChange={handleChangeIsec}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Categoría ISEC"
                value={catIsec}
                onChange={handleChangeCatIsec}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Zona"
                value={zona}
                onChange={handleChangeZona}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Grado"
                value={grado}
                onChange={handleChangeGrado}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Umbral Geo"
                value={umbralGeo}
                onChange={handleChangeUmbralGeo}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Abandono"
                value={abandono}
                onChange={handleChangeAbandono}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                fullWidth
              >
                Guardar
              </Button>
            </Grid>
          </Grid>
        </Box>
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
          {/* <Typography variant="h6" gutterBottom>
            Listado de Estudiantes
          </Typography>
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
          /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Bayes;
