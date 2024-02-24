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
        p="1rem"
        display="grid"        
        justify-items="center"
        gap="20px"
        borderRadius="0.55rem"
        backgroundColor={theme.palette.background.alt}
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <Box    
          
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
    </Box>
  );
};

export default Dashboard;
