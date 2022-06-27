import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthorForm from './components/AuthorForm';
import DisplayAuthors from './components/DisplayAuthors';
import Update from './components/Update';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
         <Route path="/" element={<DisplayAuthors/>} /> 
         <Route path="/new" element={<AuthorForm/>} />
          <Route path="/edit/:id" element={<Update/>} />
       
      </Routes>
     
      
    </div>
    </BrowserRouter>
  );
}

export default App;
