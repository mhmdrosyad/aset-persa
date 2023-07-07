import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AddPage from './pages/Add';
import EditPage from './pages/Edit';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/add" element={<AddPage/>}/>
        <Route exact path="/edit/:id" element={<EditPage/>}/>
        <Route exact path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
