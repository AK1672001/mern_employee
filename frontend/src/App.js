import { Router,Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import HomePage from './Pages/Home';
import axios from 'axios'
import LoginSignUp from './Pages/LoginSignUp';
import Navbar from './Component/Navbar';
import Dashboard from './Component/Dasboard';
import EmployeeForm from './Component/EmployeeCreate';
import EmployeeList from './Component/EmployeeAllDetails.js';
import EmpUpdate from './Component/EmpUpdate.js';
import Back from './Pages/Back.js';
axios.defaults.baseURL = window.location.origin === 'http://localhost:3000' 
    ? 'http://localhost:5000' 
    : 'https://mern-employee-7.onrender.com';
axios.defaults.withCredentials = true;
// axios.defaults.headers.common['Content-Type'] = 'application/json';
function App() {
  return (
    <div className="App">
          <Navbar/>
      <Routes>
        <Route path='/login' element={<LoginSignUp/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/dash' element={<Dashboard/>}/>
        <Route path='/createemployee' element={<EmployeeForm/>}/>
        <Route path='/allemployee' element={<EmployeeList/>}/>
        <Route path='/empupdate/:id' element={<EmpUpdate/>}/>

        <Route path='/back' element={<Back/>}/>


      </Routes>
    
      
    </div>
  );
}

export default App;
