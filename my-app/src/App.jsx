import { PageLogin } from "./Pages/Login";
import { PageRegister } from "./Pages/Register";
import {Routes, Route} from 'react-router-dom';
import { HomePage } from "./Pages/Home";
import { PageUser } from "./Pages/User";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/login" element={<PageLogin/>} />
        <Route path="/Cadastro" element={<PageRegister/>}/>
        <Route path="/user" element={<PageUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
