import React from 'react';
import './App.css';
import Content from './Content';
import Status from './Status';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>

        <Routes >
          <Route exact path="/"
            element={<Content />}
          />

          <Route path="/status"
            element={<Status />}
          />


        </Routes>
      </BrowserRouter>
    </div>




  );
} export default App;
