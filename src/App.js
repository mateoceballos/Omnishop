import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalPage from "./views/index";
import { Product } from "./views/Product";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
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
  );
}

export default App;
