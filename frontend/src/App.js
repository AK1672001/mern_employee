import { Router,Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import HomePage from './Pages/Home';
import axios from 'axios'
import LoginSignUp from './Pages/LoginSignUp';
import Navbar from './Component/Navbar';
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;
// axios.defaults.headers.common['Content-Type'] = 'application/json';
function App() {
  return (
    <div className="App">
          <Navbar/>
      <Routes>
        <Route path='/login' element={<LoginSignUp/>}/>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    
      
    </div>
  );
}

export default App;
