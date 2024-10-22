import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes';

function App() {
  console.log("process.env", process.env);
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
