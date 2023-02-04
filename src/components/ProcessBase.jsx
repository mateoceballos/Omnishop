import { Login } from "./Login";
import { Register } from "./Register";

export function ProcessBase(stateP) {
  return (
    <div className="blankBase">
      {stateP.state === "Reg" ? <Register /> : <Login />}
    </div>
  );
}
