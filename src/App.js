import './App.css';
import React from 'react';
import Navbar from './Component/Navbar';
import News  from './Component/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from './Component/Test';

const App =()=>{
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key='general' pageSize={6} country="in" category="general" />} />
            <Route exact path="/Business" element={<News key='Business' pageSize={6} country="in" category="Business" />} />
            <Route exact path="/Entertainment" element={<News key='Entertainment' pageSize={6} country="in" category="Entertainment" />} />
            <Route exact path="/General" element={<News key='General' pageSize={6} country="in" category="General" />} />
            <Route exact path="/Health" element={<News key='Health' pageSize={6} country="in" category="Health" />} />
            <Route exact path="/Science" element={<News key='Science' pageSize={6} country="in" category="Science" />} />
            <Route exact path="/Sports" element={<News key='Sports' pageSize={6} country="in" category="Sports" />} />
            <Route exact path="/Technology" element={<News key='Technology' pageSize={6} country="in" category="Technology" />} />
            <Route  path='/test' element={<Test/>}/>
          </Routes>
        </Router>

     </>
    );
  }

export default App