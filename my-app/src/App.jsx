import { PageLogin } from "./Pages/Login";
import { PageRegister } from "./Pages/Register";
import {Routes, Route} from 'react-router-dom';
import { HomePage } from "./Pages/Home";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/login" element={<PageLogin/>} />
        <Route path="/Cadastro" element={<PageRegister/>}/>
      </Routes>
    </div>
  );
}

export default App;
