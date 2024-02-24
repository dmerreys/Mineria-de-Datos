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
import {
  usePostEstudianteMutation,
  usePostEstudiantesMutation,
} from "state/api";
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
  isecData,
} from "../../assets/data/index.js";
import ReactFileReader from "react-file-reader";

const EstudiantesNuevos = () => {
  /* Constantes basicas */
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const theme = useTheme();
  const [postEstudiante] = usePostEstudianteMutation();
  const [postEstudiantes] = usePostEstudiantesMutation();
  /////////////////////////////////////////////////////////////////////////////////////////////
  /* seteos de datos de estudiantes */

  const [distritojson, setDistritojson] = useState([]);
  const [provinciajson, setProvinciajson] = useState([]);
  const [institucionjson, setInstitucionesjson] = useState([]);
  const [etniajson, setEtniajson] = useState([]);
  const [areajson, setAreajson] = useState([]);
  const [regionjson, setRegionjson] = useState([]);
  const [regimenjson, setRegimenjson] = useState([]);
  const [sexojson, setSexojson] = useState([]);
  const [gradojson, setGradojson] = useState([]);
  const [zonajson, setZonajson] = useState([]);
  const [isecjson, setIsecjson] = useState([]);
  const [sostenimientojson, setSostenimientojson] = useState([]);
  const [quintiljson, setQuintiljson] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cedula, setCedula] = useState("");
  const [edad, setEdad] = useState("");
  const [institucion, setInstitucion] = useState("");
  const [institucionFiltrada, setInstitucionFiltrada] = useState([]);
  const [distrito, setDistrito] = useState("");
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
  const [catGeo, setCatGeo] = useState("");
  const [abandono, setAbandono] = useState("");
  const [amie, setAmie] = useState("");

  /////////////////////////////////////////////////////////////////////////////////////////////
  /* Seteo de Inputs */
  const [inputEtnia, setInputEtnia] = useState("");
  const [inputDistrito, setInputDistrito] = useState("");
  const [inputInstitucion, setInputInstitucion] = useState("");
  const [inputProvincia, setInputProvincia] = useState("");
  const [inputSexo, setInputSexo] = useState("");
  const [inputArea, setInputArea] = useState("");
  const [inputRegionNatural, setInputRegionNatural] = useState("");
  const [inputRegimenEscolar, setInputRegimenEscolar] = useState("");
  const [inputGrado, setInputGrado] = useState("");
  const [inputZona, setInputZona] = useState("");
  const [inputQuintil, setInputQuintil] = useState("");

  /////////////////////////////////////////////////////////////////////////////////////////////
  /* Handler Changes */

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

  const handleChangeInstitucion = (event, newInstitucion) => {
    setInstitucion(newInstitucion);

    // Verificar si newInstitucion no es null y contiene "-"
    if (newInstitucion && newInstitucion.includes("-")) {
      const codigodesp = newInstitucion.split("-")[1];
      const institucionEncontrada = institucionjson.find((institucion) => {
        return institucion.AMIE === codigodesp;
      });
      setZona(institucionEncontrada.Zona);
      setRegimenEscolar(institucionEncontrada.Regimen_Escolar);
      setSostenimiento(institucionEncontrada.Sostenimiento);
      setUmbralGeo(institucionEncontrada.Categoria_Umbral);
      setCatGeo(institucionEncontrada?.["Umbral_Por_Institucion"]);
      setAmie(codigodesp);
    } else {
      // Si newInstitucion es null o no contiene "-", resetear los valores
      setZona("");
      setRegimenEscolar("");
      setSostenimiento("");
      setUmbralGeo("");
      setCatGeo("");
      setAmie("");
    }
  };

  const handleChangeProvincia = (event, newValue) => {
    setProvincia(newValue);
  };

  const handleChangeArea = (event, newArea) => {
    setArea(newArea);
  };

  const handleChangeRegionNatural = (event, newRegion) => {
    setRegionNatural(newRegion);
  };

  const handleChangeRegimenEscolar = (event, newRegimen) => {
    setRegimenEscolar(newRegimen);
  };

  const handleChangeSostenimiento = (event) => {
    setSostenimiento(event.target.value);
  };

  const handleChangeQuintil = (event, newQuintil) => {
    setQuintil(newQuintil);
  };

  const handleChangeIsec = (event) => {
    const valorIsec = parseFloat(event.target.value);

    const categoriaEncontrada = isecjson.find((categoria) => {
      return valorIsec >= categoria.min && valorIsec <= categoria.max;
    });
    if (categoriaEncontrada) {
      setCatIsec(categoriaEncontrada.nombre);
    } else {
      setCatIsec("");
    }

    setIsec(event.target.value);
  };

  const handleChangeCatIsec = (event) => {
    setCatIsec(event.target.value);
  };

  const handleChangeZona = (event, newZona) => {
    setZona(newZona);
  };

  const handleChangeGrado = (event, newGrado) => {
    setGrado(newGrado);
  };

  const handleChangeUmbralGeo = (event) => {
    setUmbralGeo(event.target.value);
  };

  const handleChangeAbandono = (event) => {
    setAbandono(event.target.value);
  };

  const handleAmie = (event) => {
    setAmie(event.target.value);
  };

  // Get Prediction
  const getPrediction = async (arr, route) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/${route}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: arr,
        }),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error al realizar la predicción:", error);
    }
  };

  const uploadFile = (files) => {
    // Creating the object of FileReader Class
    var read = new FileReader();
    // when readAsText will invoke, onload() method on the read object will execute.
    read.onload = async function (e) {
      // perform some operations with read data
      alert("Datos cargados correctamente.");
      const rows = read.result.split("\n").map((row) => row.replace("\r", ""));
      const csvData = [];

      rows.forEach((row) => {
        const columns = row.split(",");
        csvData.push(columns);
      });

      const res = await getPrediction(csvData.slice(1), "model/predictions");
      const probsColumn = res.proba.map(arr => arr[1]);

      const columnNames = csvData[0];
      const nuevosEstudiantes = [];

      for (let i = 1; i < csvData.length; i++) {
        const fila = csvData[i];
        const nuevoEstudiante = {};

        // Itera sobre las columnas y asigna los valores al objeto
        for (let j = 0; j < columnNames.length; j++) {
          const columna = columnNames[j];
          let valor = fila[j];

          // Realiza conversiones según la columna
          if (columna === "Edad") {
            valor = parseInt(valor, 10); // Convierte a entero
          } else if (columna === "isec") {
            valor = parseFloat(valor); // Convierte a float
          }

          nuevoEstudiante[columna] = valor;
        }
        // Agrega la nueva columna "abandono" y su valor desde res
        nuevoEstudiante["abandono"] = res.res[i - 1]; // i - 1 para ajustar al índice de res
        nuevoEstudiante["probabilidad"] = probsColumn[i - 1]; // i - 1 para ajustar al índice de res
        // Agrega el objeto al arreglo
        nuevosEstudiantes.push(nuevoEstudiante);
      }
      postEstudiantes(nuevosEstudiantes);
    };
    // Invoking the readAsText() method by passing the uploaded file as a parameter
    read.readAsText(files[0]);
  };

  /////////////////////////////////////////////////////////////////////////////////////////////
  /* handleSubmit */

  const handleSubmit = async () => {
    const codigoEtnia =
      etniajson.find((etnias) => etnias.nombre === etnia)?.codigo || null;
    const codigoGrado =
      gradojson.find((grados) => grados.nombre === grado)?.codigo || null;
    const codigoProvincia =
      provinciajson.find(
        (provincias) => provincias?.["Nombre de Provincia"] === provincia
      )?.["Codigo de Provincia"] || null;
    const codigoQuintil =
      quintiljson.find((quintiles) => quintiles.nombre === quintil)?.codigo ||
      null;
    const codigoRegimenEscolar =
      regimenjson.find((regimenes) => regimenes.nombre === regimenEscolar)
        ?.codigo || null;
    const codigoRegionNatural =
      regionjson.find((regiones) => regiones.nombre === regionNatural)
        ?.codigo || null;
    const codigoSostenimiento =
      sostenimientojson.find(
        (sostenimientos) => sostenimientos.nombre === sostenimiento
      )?.codigo || null;
    const codigoZona =
      zonajson.find((zonas) => zonas.nombre === zona)?.codigo || null;

    const arregloPrediccion = [
      [
        nombre,
        apellido,
        cedula,
        amie,
        parseFloat(isec),
        codigoProvincia.toString(),
        catGeo,
        sexo,
        codigoEtnia,
        codigoSostenimiento,
        codigoGrado,
        codigoRegimenEscolar,
        codigoQuintil,
        area,
        codigoRegionNatural,
        codigoZona,
        umbralGeo,
        catIsec,
        Number(parseInt(edad)),
      ],
    ];

    const pred = await getPrediction(arregloPrediccion, "model/predict");

    const nuevoEstudiante = {
      nombre: nombre,
      apellido: apellido,
      cedula: cedula,
      edad: Number(parseInt(edad)),
      distrito: distrito,
      sexo: sexo,
      etnia: codigoEtnia,
      provincia: codigoProvincia.toString(),
      area: area,
      regionNatural: codigoRegionNatural,
      regimenEscolar: codigoRegimenEscolar,
      sostenimiento: codigoSostenimiento,
      quintil: codigoQuintil,
      isec: parseFloat(isec),
      catIsec: catIsec,
      zona: codigoZona,
      grado: codigoGrado,
      catGeo: umbralGeo,
      umbralGeo: catGeo,
      abandono: pred.res,
      probabilidad: pred.proba,
      amie: amie,
    };

    postEstudiante(nuevoEstudiante);
    setNombre("");
    setApellido("");
    setCedula("");
    setEdad("");
    setDistrito("");
    setSexo("");
    setEtnia("");
    setProvincia();
    setArea("");
    setRegionNatural("");
    setRegimenEscolar("");
    setSostenimiento("");
    setQuintil("");
    setIsec("");
    setCatIsec("");
    setZona("");
    setUmbralGeo("");
    setAbandono("");
    setGrado("");
    setInstitucion("");
    setAmie("");
  };

  /////////////////////////////////////////////////////////////////////////////////////////////
  /* Use Effects */

  useEffect(() => {
    setDistritojson(Distritos);
    setProvinciajson(Provincias);
    setInstitucionesjson(Instituciones);
    setEtniajson(etniaData);
    setAreajson(areaData);
    setRegionjson(regionData);
    setRegimenjson(regimenData);
    setSexojson(sexoData);
    setGradojson(gradoData);
    setZonajson(zonaData);
    setQuintiljson(quintilData);
    setIsecjson(isecData);
    setSostenimientojson(sostenimientoData);
  }, []);

  useEffect(() => {
    if (provincia) {
      const provinciaSeleccionada = provinciajson.find(
        (p) => p["Nombre de Provincia"] === provincia
      );
      const institucionFiltrada = institucionjson.filter((institucion) => {
        return (
          institucion["Cod_Provincia"] ===
          String(provinciaSeleccionada["Codigo de Provincia"])
        );
      });
      setInstitucionFiltrada(institucionFiltrada);
    } else {
      setInstitucionFiltrada(institucionjson);
    }
  }, [provincia, provinciajson]);

  /////////////////////////////////////////////////////////////////////////////////////////////
  /* Interfaz */

  return (
    //Interfaz
    //Contenedor Principal
    <Box m="1.5rem 2.5rem">
      <Header title="Estudiantes Nuevos" subtitle="Datos Estudiantes" />
      <ReactFileReader handleFiles={uploadFile} fileTypes={".csv"}>
        {/*<button className="btn"> Upload </button>*/}
        <Button className="btn" variant="contained" color="primary" size="medium">
          Upload
        </Button>
      </ReactFileReader>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="auto"
        gridAutoRows="auto"
        gap="20px"
        borderRadius="0.55rem"
        backgroundColor={theme.palette.background.alt}
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
          "&": { gridAutoRows: "auto" },
        }}
      >
        <Box gridColumn="span 1" p="1.25rem 1rem">
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
                type="number"
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
                freeSolo
                //sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Sexo" />}
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
                freeSolo
                renderInput={(params) => (
                  <TextField {...params} label="Etnia" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                value={regionNatural}
                onChange={handleChangeRegionNatural}
                inputValue={inputRegionNatural}
                onInputChange={(event, newInputValue) => {
                  setInputRegionNatural(newInputValue);
                }}
                id="manageable-states-demo"
                options={regionjson.map((option) => {
                  return option.nombre;
                })}
                freeSolo
                renderInput={(params) => (
                  <TextField {...params} label="Región Natural" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                value={area}
                onChange={handleChangeArea}
                inputValue={inputArea}
                onInputChange={(event, newInputValue) => {
                  setInputArea(newInputValue);
                }}
                id="manageable-states-demo"
                freeSolo
                options={areajson.map((option) => {
                  return option.nombre;
                })}
                renderInput={(params) => <TextField {...params} label="Area" />}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Autocomplete
                value={quintil}
                onChange={handleChangeQuintil}
                inputValue={inputQuintil}
                onInputChange={(event, newInputValue) => {
                  setInputQuintil(newInputValue);
                }}
                id="manageable-states-demo"
                freeSolo
                options={quintiljson.map((option) => {
                  return option.nombre;
                })}
                //sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Quintil" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="ISEC"
                value={isec}
                type="number"
                onChange={handleChangeIsec}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Categoría ISEC"
                value={catIsec}
                disabled // Deshabilitar la edición del campo
                fullWidth
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
                freeSolo
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
                freeSolo
                options={institucionFiltrada.map((option) => {
                  return `${option["Nombre_Institucion"]}-${option["AMIE"]}`;
                })}
                renderInput={(params) => (
                  <TextField {...params} label="Institucion" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                value={grado}
                onChange={handleChangeGrado}
                inputValue={inputGrado}
                onInputChange={(event, newInputValue) => {
                  setInputGrado(newInputValue);
                }}
                id="manageable-states-demo"
                freeSolo
                options={gradojson.map((option) => {
                  return option.nombre;
                })}
                //sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Grado" />
                )}
              />
            </Grid>
            {/* Campo de Zona */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Zona"
                value={zona}
                disabled // Deshabilitar la edición del campo
                fullWidth
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <Autocomplete
                value={zona}
                onChange={handleChangeZona}
                inputValue={inputZona}
                onInputChange={(event, newInputValue) => {
                  setInputZona(newInputValue);
                }}
                id="manageable-states-demo" freeSolo
                options={zonajson.map((option) => {
                  return option.nombre;
                })}
                renderInput={(params) => <TextField {...params} label="Zona" />}
              />
            </Grid> */}

            {/* <Grid item xs={12} sm={6}>
              <Autocomplete
                value={distrito}
                onChange={handleChangeDistrito}
                inputValue={inputDistrito}
                onInputChange={(event, newInputValue) => {
                  setInputDistrito(newInputValue);
                }}
                id="manageable-states-demo" freeSolo
                options={distritojson.map((option) => {
                  return option["Nombre del Distrito"];
                })}
                //sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Distrito" />
                )}
              />
            </Grid> */}
            {/* Campo de Regimen Escolar */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Regimen Escolar"
                value={regimenEscolar}
                disabled // Deshabilitar la edición del campo
                fullWidth
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <Autocomplete
                value={regimenEscolar}
                onChange={handleChangeRegimenEscolar}
                inputValue={inputRegimenEscolar}
                onInputChange={(event, newInputValue) => {
                  setInputRegimenEscolar(newInputValue);
                }}
                id="manageable-states-demo" freeSolo
                options={regimenjson.map((option) => {
                  return option.nombre;
                })}
                renderInput={(params) => (
                  <TextField {...params} label="Regimen Escolar" />
                )}
              />
            </Grid> */}
            {/* Campo de Sostenimiento */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Sostenimiento"
                value={sostenimiento}
                disabled // Deshabilitar la edición del campo
                fullWidth
              />
            </Grid>

            {/* <Grid item xs={12} sm={6}>
              <TextField
                label="Categoria Umbral"
                value={umbralGeo}
                disabled
                fullWidth
              />
            </Grid> */}
            {/* <Grid item xs={12} sm={6}>
              <TextField
                label="Abandono"
                value={abandono}
                onChange={handleChangeAbandono}
                fullWidth
              />
            </Grid> */}
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
        {/* <Box
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
          /> 
        </Box> */}
      </Box>
    </Box>
  );
};

export default EstudiantesNuevos;
