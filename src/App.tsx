import { useState } from "react";
import viteLogo from "/vite.svg";
import { ThemeProvider } from "./components/utils/theme-provider";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PublicRoute from "./components/utils/PublicRoute";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import { Toaster } from "./components/ui/sonner";
import Login from "./components/pages/Login";
import AdminRoute from "./components/utils/AdminRoute";
// import "./App.css";
import "./index.css";
import Dashboard from "./components/pages/dashboard/Dashboard";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        {/* <GlobalVarProvider> */}
        <BrowserRouter>
          <Routes>
            <Route element={<PublicRoute />}>
              {/* <Route path="/login" element={<Login />} /> */}
              <Route index element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route element={<ProtectedRoute />}></Route>

            <Route element={<AdminRoute />}></Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <Toaster richColors closeButton />
        </BrowserRouter>
        {/* </GlobalVarProvider> */}
      </ThemeProvider>
    </>
  );
}

export default App;
