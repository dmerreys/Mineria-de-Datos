import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { themeSettings } from "theme";
import { useState } from "react";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import EstudiantesNuevos from "scenes/estudiantesNuevos";
import Login from "scenes/login";
import Predicciones from "scenes/predicciones";


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const [user, setUser] = useState(null);
  const [secret, setSecret] = useState(null);
  const isAuth = Boolean(user) && Boolean(secret);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>                        
            <Route
              path="/"
              element={
                isAuth ? (
                  <Layout/>
                ) : (
                  <Login setUser={setUser} setSecret={setSecret} />
                )
              }
            >  
              <Route path="/" element={isAuth && (<Navigate to="/dashboard" replace />)} />
              <Route path="/dashboard" element={
                isAuth && (
                  <Dashboard/>
                ) 
              } />
              <Route path="/Estudiantes" element={
                isAuth && (
                  <EstudiantesNuevos/>
                ) 
              } />      
              <Route path="/Predicciones" element={
                isAuth && (
                  <Predicciones/>
                ) 
              } />      
            </Route>
            {/* <Route
              path="/dashboard"
              element={
                isAuth ? (
                  <Dashboard user={user} secret={secret} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />             */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
