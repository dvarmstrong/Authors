import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthorForm from './components/AuthorForm';
import DisplayAuthors from './components/DisplayAuthors';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
         <Route path="/" element={<DisplayAuthors/>} /> 
         <Route path="/new" element={<AuthorForm/>} />
       
      </Routes>
     
      
    </div>
    </BrowserRouter>
  );
}

export default App;
