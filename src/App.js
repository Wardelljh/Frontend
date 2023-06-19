import logo from './logo.svg';
import './App.css';
import Logis from './components/Logis';

import ComplaintForm from './components/ComplaintForm';

import Sidebar from './components/Sidebar';
import MainLayout from './components/MainLayout';
import Registration from './components/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';







function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Logis/>}/>
    <Route path='/registration' element={<Registration/>}/>
    <Route path='/main' element={<MainLayout/>}/>

    </Routes>
    </BrowserRouter>
    
      
  );
}

export default App;
