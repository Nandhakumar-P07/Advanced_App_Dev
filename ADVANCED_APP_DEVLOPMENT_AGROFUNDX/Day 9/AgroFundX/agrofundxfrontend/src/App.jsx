import "./Assets/Styles/App.css";
import Routers from "./Routers/Common/Routers";
import { UseStates } from "./useContext/UseStates";
function App() {
  return (
    <>
      <UseStates>
        <Routers/>
      </UseStates>
    </>
  );
}

export default App;
