import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import LandingPage from './LandingPage';
import Shop from './Shop';
import About from './About';
import Contact from './Contact';
import Electronics from './Electronics';
import Fashion from './Fashion';
import Groceries from './Groceries';
import Cart from './Cart';
import Orders from './Orders';
import Signup from './Auth/signup';
import Account from './Account';
import './App.css';

// Route guard
const PrivateRoute = ({ element, setUser }) => {
  const user = JSON.parse(localStorage.getItem('ecocartUser'));
  return user ? React.cloneElement(element, { setUser }) : <Navigate to="/" replace />;
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('ecocartUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('User data corrupted:', err);
        localStorage.removeItem('ecocartUser');
      }
    }
  }, []);

  return (
    <Router>
      <Header user={user} />
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/landing" replace /> : <Signup setUser={setUser} />}
        />
        <Route
          path="/landing"
          element={<PrivateRoute element={<LandingPage />} setUser={setUser} />}
        />
        <Route
          path="/shop"
          element={<PrivateRoute element={<Shop />} setUser={setUser} />}
        />
        <Route
          path="/about"
          element={<PrivateRoute element={<About />} setUser={setUser} />}
        />
        <Route
          path="/contact"
          element={<PrivateRoute element={<Contact />} setUser={setUser} />}
        />
        <Route
          path="/shop/electronics"
          element={<PrivateRoute element={<Electronics />} setUser={setUser} />}
        />
        <Route
          path="/shop/fashion"
          element={<PrivateRoute element={<Fashion />} setUser={setUser} />}
        />
        <Route
          path="/shop/groceries"
          element={<PrivateRoute element={<Groceries />} setUser={setUser} />}
        />
        <Route
          path="/cart"
          element={<PrivateRoute element={<Cart />} setUser={setUser} />}
        />
        <Route
          path="/orders"
          element={<PrivateRoute element={<Orders />} setUser={setUser} />}
        />
        <Route
          path="/account"
          element={<PrivateRoute element={<Account />} setUser={setUser} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
