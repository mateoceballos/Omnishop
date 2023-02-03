import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./views/Login";
import { Product } from "./views/Product";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
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
