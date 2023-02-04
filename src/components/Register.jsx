import { useState, useContext } from "react";
import { registerUser } from "../store/users";
import { validContext } from "../App";
export function Register() {
  const [userForm, setUserForm] = useState("");
  const [lastNForm, setLastNForm] = useState("");
  const [emailForm, setEmailForm] = useState("");
  const [passForm, setPassForm] = useState("");
  const [errorPs, setErrorPs] = useState(false);
  const [errorDiv, setErrorDiv] = useState({
    uname: true,
    last: true,
    mail: true,
    pass: true,
  });
  const { loadingTrue, loadingFalse } = useContext(validContext);
  async function registerProcess() {
    // userForm ? setErrorDiv() : "ss";
    if (
      userForm === "" ||
      lastNForm === "" ||
      emailForm === "" ||
      passForm === ""
    ) {
      setErrorPs(true);
      if (userForm === "")
        setErrorDiv((prevState) => ({ ...prevState, uname: false }));
      if (lastNForm === "")
        setErrorDiv((prevState) => ({ ...prevState, last: false }));
      if (emailForm === "")
        setErrorDiv((prevState) => ({ ...prevState, mail: false }));
      if (passForm === "")
        setErrorDiv((prevState) => ({ ...prevState, pass: false }));
    } else {
      loadingTrue("reg");
      setTimeout(() => {
        loadingFalse("reg");
      }, "2000");
      setErrorPs(false);
      setErrorDiv({
        uname: true,
        last: true,
        mail: true,
        pass: true,
      });
      await registerUser(userForm, lastNForm, emailForm, passForm);
      const newuser = [
        {
          user: emailForm,
          password: passForm,
        },
      ];
      const localH = JSON.parse(localStorage.getItem("newUsers") || null);
      if (localH !== null) {
        localH.map(function (element) {
          newuser.push({
            user: element.user,
            password: element.password,
          });
          return ``;
        });
      }
      localStorage.setItem("newUsers", JSON.stringify(newuser));
    }
  }
  return (
    <form
      className="divBaseRegister"
      onSubmit={(ev) => {
        ev.preventDefault();
        registerProcess();
      }}
    >
      <p className="pTitle">Completa tus datos para registrarte</p>
      <div className={`${errorDiv.uname ? "" : "errorDiv"} `}>
        <input
          type="text"
          placeholder={`${errorDiv.uname ? "Nombre" : "Nombre*"} `}
          name="RName"
          id="IRNam"
          onChange={(e) => setUserForm(e.target.value)}
        />
      </div>
      <div className={`${errorDiv.last ? "" : "errorDiv"} `}>
        <input
          type="text"
          placeholder={`${errorDiv.last ? "Apellido" : "Apellido*"} `}
          name="RLas"
          id="IRLas"
          onChange={(e) => setLastNForm(e.target.value)}
        />
      </div>
      <div className={`${errorDiv.mail ? "" : "errorDiv"} `}>
        <input
          type="email"
          placeholder={`${errorDiv.mail ? "E-mail" : "E-mail*"} `}
          name="REma"
          id="IREma"
          onChange={(e) => setEmailForm(e.target.value)}
        />
      </div>
      <div className="divAlert">
        <div className={` ${errorDiv.pass ? "" : "errorDiv"} `}>
          <input
            type="password"
            placeholder={`${errorDiv.pass ? "Contraseña" : "Contraseña*"} `}
            name="RPass"
            id="IRPass"
            onChange={(e) => setPassForm(e.target.value)}
          />
        </div>
        <p className={`${errorPs ? "erorRegis" : "DN"} `}>
          Por favor, diligencia los campos marcados
        </p>
      </div>
      <button className="btnReginster">Regístrate</button>
    </form>
  );
}
