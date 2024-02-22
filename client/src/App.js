import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { themeSettings } from "theme";
import { useState } from "react";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import EstudiantesNuevos from "scenes/estudiantesNuevos";
//import Login from "scenes/login";
import Logistica from "scenes/predicciones";
import LoginPage from "scenes/login";

function App() {
  const mode = useSelector((state) => state.global.mode);
  console.log("mode" + mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const [user, setUser] = useState(null);
  const [secret, setSecret] = useState(null);
  const isAuth = Boolean(useSelector((state) => state.token));
  const dispatch = useDispatch();
  console.log(useSelector((state) => state.token));
  console.log("isAuth" + isAuth);
  //console.log(Boolean(user));
  //console.log(Boolean(secret));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/Estudiantes" replace />} />
              <Route path="/Estudiantes" element={<EstudiantesNuevos />} />
              <Route path="/Logistica" element={<Logistica />} />              
            </Route>
            {/* <Route
              path="/dashboard"
              element={isAuth ? <Dashboard /> : <Navigate to="/" />}
            /> */}
            {/* <Route
              path="/"
              element={
                isAuth ? (
                  <Layout />
                ) : (
                  <LoginPage setUser={setUser} setSecret={setSecret} />
                )
              }
            >
              <Route
                path="/"
                element={isAuth && <Navigate to="/dashboard" replace />}
              />
              <Route path="/dashboard" element={isAuth && <Dashboard />} />
              <Route
                path="/Estudiantes"
                element={isAuth && <EstudiantesNuevos />}
              />
              <Route path="/Logistica" element={isAuth && <Logistica />} /> 
            </Route>*/}
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
