import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const userData = JSON.parse(localStorage.getItem("user") || null);
  //   const user = userData.user;
  if (!userData) {
    return <Navigate to="/" />;
  }
  return children;
}
