import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}

export default App;
