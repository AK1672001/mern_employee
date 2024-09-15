import { Router,Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import HomePage from './Pages/Home';
import LoginSignUp from './Pages/LoginSignUp';
import Navbar from './Component/Navbar';
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
