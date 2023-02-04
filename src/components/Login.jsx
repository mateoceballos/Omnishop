import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import eyeP from "../assets/img/Password.png";
import eyeOp from "../assets/img/EyeP.svg";
import { accessUser } from "../store/users";
import { validContext } from "../App";
export function Login() {
  const [passw, setPassw] = useState(true);
  const [formUser, setFormUser] = useState("");
  const [formPass, setFormPass] = useState("");
  const [newsA, setNewsA] = useState(false);
  const { loadingTrue, loadingFalse } = useContext(validContext);
  const loginProcess = async () => {
    // localStorage.setItem("user", JSON.stringify({ user: "jhon", Id: 3 }));
    const token = await accessUser(formUser, formPass);
    if (token) {
      loadingTrue("log");
      setTimeout(() => {
        loadingFalse("log");
      }, "2000");
    }
    console.log(token);
  };
  function passchange() {
    setPassw(!passw);
  }

  // let navigate = useNavigate();
  return (
    <form
      className="baseDivLogin"
      onSubmit={(ev) => {
        ev.preventDefault();
        loginProcess();
      }}
    >
      <p className="pGenP pTitle">Ingresa con tus datos</p>
      <div className="userInputDivGen jcc">
        <input
          className="iUser"
          type="text"
          name="email"
          id="Uemail"
          placeholder="Email o nombre de usuario"
          onChange={(e) => setFormUser(e.target.value)}
        />
      </div>
      <div className="userInputDivGen ipass">
        <input
          className="ipass"
          type={`${passw ? "password" : "text"}`}
          name="password"
          id="Upassword"
          placeholder="Ingresa contraseña"
          onChange={(e) => setFormPass(e.target.value)}
        />
        <img
          className="imgpass"
          onClick={passchange}
          src={`${passw ? eyeP : eyeOp} `}
          alt=""
        />
      </div>
      <div className="containerNews">
        <div
          className={`checkDiv ${newsA ? "bkP" : ""}`}
          onClick={() => setNewsA(!newsA)}
        />
        <p className="pGenP pRegular">Suscríbete al newsletter</p>
      </div>
      <button type="submit" className="btnLogin">
        Ingresa
      </button>
      <p className="pGenP pRegular">¿Olvidaste tu contraseña?</p>
      {/* <button onClick={() => navigate("/Product")}>product</button> */}
    </form>
  );
}
