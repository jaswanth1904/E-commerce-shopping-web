import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider, db } from './firebaseConfig'; // Import db
import { doc, setDoc } from 'firebase/firestore'; // Firestore functions
import './GoogleSignIn.css';
import { useNavigate } from 'react-router-dom';

const GoogleSignIn = ({ onSignIn }) => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userData = {
        name: user.displayName || '',
        email: user.email || '',
        photoURL: user.photoURL || '',
      };

      // Save user data to Firestore under 'users' collection with user.uid as the document ID
      await setDoc(doc(db, 'users', user.uid), userData, { merge: true });

      console.log('User data saved to Firestore');
      alert(`Welcome ${user.displayName || 'User'}`);

      // Call the onSignIn callback to update App state immediately
      if (onSignIn) {
        onSignIn(userData);
      }

      // Redirect to landing page
      navigate('/landing');
    } catch (error) {
      console.error('Error during sign-in or saving to Firestore:', error);
      alert('Failed to save user data to Firestore. Check console for details.');
    }
  };

  return (
    <div className="google-signin-container">
      <button className="google-signin-btn" onClick={handleGoogleSignIn}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/054/660/990/non_2x/google-logo-icon-outline-free-png.png"
          alt="Google Icon"
          style={{ width: 20, marginRight: 8 }}
        />
        Sign In with Google
      </button>
    </div>
  );
};

export default GoogleSignIn;