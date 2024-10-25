import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Header from './Components/Header/Header'; 
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage'; 
import Lipsticks from './Components/Lipsticks/Lipsticks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 
import Makeupkits from './Components/Makeupkits/Makeupkits';


const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/lipsticks" element={<Lipsticks />} />
          <Route path="/makeupkits" element={<Makeupkits />} />
         
        </Routes>
      </Router>
    </div>
  );
};

export default App;
