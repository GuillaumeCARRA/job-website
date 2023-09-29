import {
  Routes,
  Route
} from 'react-router-dom'; 

import Home from '../src/pages/Home';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import JobSeeker from './pages/EmployeeProfile/JobSeeker';

import { UserProvider } from './context/userContext';

import './App.css';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Routes>
          <Route 
            exact path="/"
            element={<Home />}
          />
          <Route 
            exact path="/signup/sign"
            element={<SignUp />}
          />
          <Route 
            exact path="/signup/log" 
            element={<Login />}
          />
          <Route 
            exact path ="/profile"
            element={<JobSeeker />}
          />
        </Routes>
      </div>
    </UserProvider>  
  );
}

export default App;
