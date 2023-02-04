import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import eyeP from "../assets/img/Password.png";
import eyeOp from "../assets/img/EyeP.svg";
import { accessUser, getAllUser } from "../store/users";
import { validContext } from "../App";
export function Login() {
  const [passw, setPassw] = useState(true);
  const [formUser, setFormUser] = useState("");
  const [formPass, setFormPass] = useState("");
  const [datavalid, setDatavalid] = useState({
    user: true,
    pass: true,
  });
  const [messageError, setMessageError] = useState("");
  const [newsA, setNewsA] = useState(false);
  const { loadingTrue, loadingFalse } = useContext(validContext);
  let navigate = useNavigate();
  const loginProcess = async () => {
    //proceso de validación
    const users = await getAllUser();
    let User = null;
    let Password = null;
    let PasswordValid = true;
    await users.map(function (element) {
      if (element.email === formUser) {
        if (element.password === formPass) {
          User = element.email;
          Password = element.password;
        } else {
          User = element.email;
          PasswordValid = false;
        }
      }
      return null;
    });
    if (User === null && Password === null) {
      const localH = JSON.parse(localStorage.getItem("newUsers") || null);
      await localH.map(function (element) {
        if (element.user === formUser) {
          if (element.password === formPass) {
            User = element.user;
            Password = element.password;
          } else {
            User = element.user;
            PasswordValid = false;
          }
        }
        return null;
      });
    }
    if (User !== null && !PasswordValid) {
      setDatavalid({
        user: true,
        pass: false,
      });
      setMessageError("Contraseña incorrecta");
    } else if (User === null) {
      setDatavalid({
        user: false,
        pass: false,
      });
      setMessageError("Usuario y contraseña incorrecta");
    } else if (User !== null && PasswordValid) {
      setDatavalid({
        user: true,
        pass: true,
      });
      setMessageError("Iniciando sesion...");
      const token = await accessUser("john@gmail.com", "m38rmF$");
      if (token) {
        loadingTrue("log");
        localStorage.setItem("token", JSON.stringify(token));
        setTimeout(() => {
          loadingFalse("log");
          navigate("/Product");
        }, "2000");
      }
    }
  };
  function passchange() {
    setPassw(!passw);
  }

  return (
    <form
      className="baseDivLogin"
      onSubmit={(ev) => {
        ev.preventDefault();
        loginProcess();
      }}
    >
      <p className="pGenP pTitle">Ingresa con tus datos</p>
      <div className={`userInputDivGen ${!datavalid.user ? "divError" : ""}`}>
        <input
          className="iUser"
          type="text"
          name="email"
          id="Uemail"
          placeholder="Email o nombre de usuario"
          required
          onChange={(e) => setFormUser(e.target.value)}
        />
      </div>
      <div className="containerBase">
        <div className={`userInputDivGen ${!datavalid.pass ? "divError" : ""}`}>
          <input
            className="ipass"
            type={`${passw ? "password" : "text"}`}
            name="password"
            id="Upassword"
            placeholder="Ingresa contraseña"
            required
            onChange={(e) => setFormPass(e.target.value)}
          />
          <img
            className="imgpass"
            onClick={passchange}
            src={`${passw ? eyeP : eyeOp} `}
            alt=""
          />
        </div>
        <p className={`pBase ${!datavalid.pass ? "pError" : "pOk"}`}>
          {`${messageError}`}
        </p>
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
    </form>
  );
}
