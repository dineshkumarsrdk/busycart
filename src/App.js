import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { HomePage } from './pages/HomePage/HomePage';
import { OrdersPage } from './pages/OrdersPage/OrderPage';
import { ErrorPage } from './pages/ErrorPage';
import { CartPage } from './pages/CartPage/CartPage';
import { SigninPage } from './pages/SigninPage/SigninPage';
import { SignupPage } from './pages/SignupPage/SignupPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
