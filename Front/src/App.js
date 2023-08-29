import {
  Routes,
  Route
} from 'react-router-dom'; 

import Home from '../src/pages/Home';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import JobSeekerProfile from './pages/EmployeeProfile';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route 
          exact path="/"
          element={<Home />}
        />
        <Route 
          exact path="/signup"
          element={<SignUp />}
        />
        <Route 
          path="/login" 
          element={<Login />}
        />
        <Route 
          exact path ="/profile"
          element={<JobSeekerProfile />}
        />
      </Routes>
    </div>
  );
}

export default App;
