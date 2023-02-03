import { useNavigate } from "react-router-dom";
export function Login() {
  const loginProcess = () => {
    localStorage.setItem("user", JSON.stringify({ user: "jhon", Id: 3 }));
  };
  const logoutProcess = () => {
    localStorage.removeItem("user");
  };
  let navigate = useNavigate();
  return (
    <div className="prueba">
      <h1 className="prueba2">Login</h1>
      <button onClick={loginProcess}>Login</button>
      <button onClick={logoutProcess}>Logout</button>
      <button onClick={() => navigate("/Product")}>product</button>
    </div>
  );
}
