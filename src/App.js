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
import Allreports from './Dashboard/ReportsComponent/Reports'
import CandidatesReport from './Dashboard/ReportsComponent/Candidates';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Board from './Dashboard/Board';
import Hiringperformance from './Dashboard/ReportsComponent/Hiringperformance';
import JobsReports from './Dashboard/ReportsComponent/Jobs';
import LeaderBoard from './Dashboard/ReportsComponent/LeaderBoard';
import Sales from './Dashboard/ReportsComponent/Sales';
import Settings from './Dashboard/SettingsComponent/Settings';
import Profile from './Dashboard/SettingsComponent/Profile';
import Preferences from './Dashboard/SettingsComponent/Preferences';
import AdministartionList from './Dashboard/Administration/AdministrationList';
// anand
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/singin' element={<Singin />} />
          <Route path='/forget' element={<Forgetpassword />} />
          <Route path='/singup' element={<Creataccount />} />
          <Route path='/home' element={<Home />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/candidates' element={<Candidates />} />
          <Route path='/Placements' element={<Placements />} />
          <Route path='/activities' element={<Activities />} />
          <Route path='/inbox' element={<Inbox />} />
          <Route path='/reports' element={<Allreports />} />
          <Route path='reports/Candidates' element={<CandidatesReport />} />
          <Route path='reports/Hiring_process' element={<Hiringperformance />} />
          <Route path='reports/jobs' element={<JobsReports />} />
          <Route path='reports/leaderBoard' element={<LeaderBoard />} />
          <Route path='reports/sales' element={<Sales />} />

          <Route path='/settings' element={<Settings />} />
          <Route path='/settings/Profile' element={<Profile />} />
          <Route path='/settings/Preferences' element={<Preferences />} />
          <Route path='/Administration' element={<AdministartionList />} />

          <Route path='board' element={<Board />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
