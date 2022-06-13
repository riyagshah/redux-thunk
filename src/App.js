import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import Navbar from './components/Navbar';
import Profile from './page/Profile';
import RequiredAuth from './hof/RequiredAuth';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/profile' element={<RequiredAuth><Profile/></RequiredAuth>}></Route>
     </Routes>
    </div>
  );
}

export default App;
