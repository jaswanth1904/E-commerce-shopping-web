import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleSignIn from './GoogleSignIn';
import './Signup.css';

function Signup({ setUser }) {
  const navigate = useNavigate();

  // Check if user is already logged in and redirect to landing
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('ecocartUser'));
    if (storedUser) {
      setUser(storedUser);
      navigate('/landing', { replace: true }); // ✅ corrected route
    }
  }, [setUser, navigate]);

  const handleSignIn = (userData) => {
    setUser(userData);
    localStorage.setItem('ecocartUser', JSON.stringify(userData)); // ✅ Persist login
    navigate('/landing', { replace: true }); // ✅ corrected route
  };

  return (
    <div className="signup-container">  
      <div className="signup-image">
        <img
          src="https://i.pinimg.com/736x/d7/7c/c4/d77cc47e16fccb03d2ba1c9a29129c14.jpg"
          alt="Background"
        />
        <div className="signup-logo">EcoCart</div>
      </div>
      <div className="signup-form">
        <h1 className="signup-title">Welcome To EcoCart - Sign Up with Google</h1>
        <div className="signup-subtitle">Please continue to sign in</div>
        <GoogleSignIn onSignIn={handleSignIn} />
      </div>
    </div>
  );
}

export default Signup;
