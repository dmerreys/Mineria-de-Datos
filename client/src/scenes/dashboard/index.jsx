// import React, { useState, useEffect } from "react";
// import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
// import { useGetHistoricosQuery } from "state/api"; // Importa la función para obtener los datos
// // import { XYPlot, VerticalBarSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis';
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Header from "components/Header";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Exploratorio" subtitle="Datos Historicos" />
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
        <iframe
          title="informe powerBi"
          width="1140"
          height="541.25"
          src="https://app.powerbi.com/reportEmbed?reportId=98762be7-8571-46d5-8caa-3ee7c5229706&autoAuth=true&ctid=8ca52e2b-1d20-4274-9a13-bd76eccb81d1"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </Box>
    </Box>
  );
  //   const theme = useTheme();
  //   const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  //   const [data, setData] = useState([]);
  //  /*  useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await useGetHistoricosQuery(); // Llama a la función para obtener los datos
  //         setData(response); // Actualiza el estado con los datos recibidos
  //       } catch (error) {
  //         console.error("Error al obtener los datos desde el servidor:", error);
  //       }
  //     };
  //     fetchData(); // Ejecuta la función para obtener los datos al cargar el componente
  //   }, []); // El segundo argumento [] asegura que useEffect se ejecute solo una vez al montar el componente
  //  */
  //   return (
  //     <Box m="1.5rem 2.5rem">
  //       <Box
  //         mt="20px"
  //         display="grid"
  //         gridTemplateColumns="auto"
  //         gridAutoRows="auto"
  //         gap="20px"
  //         borderRadius="0.55rem"
  //         backgroundColor={theme.palette.background.alt}
  //         sx={{
  //           "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
  //           "&": { gridAutoRows: "auto" },
  //         }}
  //       >
  //         <Box gridColumn="span 1" p="1.25rem 1rem">
  //           <div>
  //             <h1>Gráfico de Abandono por Período</h1>
  //             <XYPlot xType="ordinal" width={400} height={300} xDistance={100}>
  //               <VerticalGridLines />
  //               <HorizontalGridLines />
  //               <XAxis />
  //               <YAxis />
  //               <VerticalBarSeries data={data.map(item => ({x: item._id, y: item.totalAbandono}))} />
  //             </XYPlot>
  //           </div>
  //         </Box>
  //       </Box>
  //     </Box>
  //   );
};

export default Dashboard;
