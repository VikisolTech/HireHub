import Login from './Components/Login';
import Singin from './Components/Singin';
import Creataccount from './Components/Creataccount';
import Forgetpassword from './Components/Forget';
import Layout from './Dashboard/Layout';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/singin' element={<Singin/>}/>
          <Route path='/forget' element={<Forgetpassword/>}/>
          <Route path='/singup' element={<Creataccount/>}/>
          <Route path='/dashbord' element={<Layout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
