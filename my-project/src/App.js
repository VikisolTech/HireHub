import Login from './Components/Login';
import Singin from './Components/Singin';
import Creataccount from './Components/Creataccount';
import Forgetpassword from './Components/Forget';
import Home from './Dashboard/Home';
import Clients from './Dashboard/Clients';
import Jobs from './Dashboard/Jobs';
import Candidates from './Dashboard/Candidates';
import Placements from './Dashboard/Placements';
import Activities from './Dashboard/Activities';
import Inbox from './Dashboard/Inbox';
import Reports from './Dashboard/Reports';
import Settings from './Dashboard/Settings';
import Administration from './Dashboard/Administration';
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
          <Route path='/home' element={<Home/>}/>
          <Route path='/clients' element={<Clients/>}/>
          <Route path='/jobs' element={<Jobs/>}/>
          <Route path='/jobs' element={<Jobs/>}/>
          <Route path='/candidates' element={<Candidates/>}/>
          <Route path='/Placements' element={<Placements/>}/>
          <Route path='/activities' element={<Activities/>}/>
          <Route path='/inbox' element={<Inbox/>}/>
          <Route path='/reports' element={<Reports/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/administration' element={<Administration/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
