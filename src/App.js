import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalPage from "./views/index";
import { Product } from "./views/Product";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const validContext = React.createContext();
function App() {
  const [loading, setLoading] = useState([{}]);
  const loadingFalse = (data) => {
    if (data === "reg") setLoading([{ regis: false }]);
    if (data === "log") setLoading([{ log: false }]);
  };
  const loadingTrue = (data) => {
    if (data === "reg") setLoading([{ regis: true }]);
    if (data === "log") setLoading([{ log: true }]);
  };
  return (
    <validContext.Provider value={{ loading, loadingFalse, loadingTrue }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<PrincipalPage />} />
          <Route
            path="/Product"
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </validContext.Provider>
  );
}

export default App;
