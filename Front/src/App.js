import {
  Routes,
  Route
} from 'react-router-dom'; 

import Home from '../src/pages/Home';
import SignUp from './pages/Signup';
import Login from './pages/Login';

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
      </Routes>
    </div>
  );
}

export default App;
