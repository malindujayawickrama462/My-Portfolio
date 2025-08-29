import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {

  return (
   <div>
    <Navbar/>
    <HomePage />
   </div>
  )
}

export default App
