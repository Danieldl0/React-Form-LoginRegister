import { PageLogin } from "./Pages/Login";
import { PageRegister } from "./Pages/Register";
import {Routes, Route} from 'react-router-dom';
import "./style.css"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<PageLogin/>} />
        <Route path="/Cadastro" element={<PageRegister/>}/>
      </Routes>
    </div>
  );
}

export default App;
