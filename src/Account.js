import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Account.css';

function Account({ setUser }) {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem('ecocartUser')) || {};
    return {
      firstName: storedUser.name?.split(' ')[0] || '',
      lastName: storedUser.name?.split(' ')[1] || '',
      email: storedUser.email || '',
      phone: storedUser.phone || '',
      location: storedUser.location || '',
      postalCode: storedUser.postalCode || '',
      photoURL: storedUser.photoURL || 'https://via.placeholder.com/100',
    };
  });

  const [activeSection, setActiveSection] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setUserData((prevData) => ({
        ...prevData,
        photoURL: objectUrl,
      }));
    }
  };

  useEffect(() => {
    return () => {
      if (userData.photoURL?.startsWith('blob:')) {
        URL.revokeObjectURL(userData.photoURL);
      }
    };
  }, [userData.photoURL]);

  const handleSaveChanges = () => {
    const updatedUser = {
      name: `${userData.firstName} ${userData.lastName}`.trim(),
      email: userData.email,
      phone: userData.phone,
      location: userData.location,
      postalCode: userData.postalCode,
      photoURL: userData.photoURL,
    };
    localStorage.setItem('ecocartUser', JSON.stringify(updatedUser));
    setUser(updatedUser);
    alert('Changes saved successfully!');
  };

  const handleLogout = () => {
    localStorage.removeItem('ecocartUser');
    setUser(null);
    navigate('/');
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="account-container">
      <div className="profile-content">
        <div className="profile-layout">
          <div className="profile-image-section">
            <div className="profile-image-container">
              <img
                src={userData.photoURL}
                alt="Profile"
                className="profile-image"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="image-upload-input"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="image-upload-label">
                Change Photo
              </label>
            </div>
            <div className="profile-info">
              <h2>
                {userData.firstName || userData.lastName
                  ? `${userData.firstName} ${userData.lastName}`.trim()
                  : 'User Profile'}
              </h2>
              <p>{userData.location || 'Location not set'}</p>
            </div>
          </div>

          <div className="profile-form">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={userData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={userData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={userData.location}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={userData.postalCode}
                onChange={handleInputChange}
              />
            </div>
            <div className="button-group">
              <button className="save-btn" onClick={handleSaveChanges}>
                Save Changes
              </button>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="account-sections">
          <div className="section">
            <button
              className="section-button"
              onClick={() => toggleSection('orderHistory')}
            >
              📦 Order History
            </button>
            {activeSection === 'orderHistory' && (
              <div className="section-content">
                <p>View your past orders and track shipments.</p>
                <p>No orders found. Start shopping to see your order history!</p>
              </div>
            )}
          </div>

          <div className="section">
            <button
              className="section-button"
              onClick={() => toggleSection('paymentMethods')}
            >
              💳 Payment Methods
            </button>
            {activeSection === 'paymentMethods' && (
              <div className="section-content">
                <p>Add or remove credit/debit cards.</p>
                <button className="action-btn">Add New Card</button>
              </div>
            )}
          </div>

          <div className="section">
            <button
              className="section-button"
              onClick={() => toggleSection('securitySettings')}
            >
              🔒 Security Settings
            </button>
            {activeSection === 'securitySettings' && (
              <div className="section-content">
                <p>Change your password or enable 2FA.</p>
                <button className="action-btn">Change Password</button>
                <button className="action-btn">Enable 2FA</button>
              </div>
            )}
          </div>

          <div className="section">
            <button
              className="section-button"
              onClick={() => toggleSection('newsletterPreferences')}
            >
              📬 Newsletter Preferences
            </button>
            {activeSection === 'newsletterPreferences' && (
              <div className="section-content">
                <p>Manage your email subscriptions and offers.</p>
                <label>
                  <input type="checkbox" /> Subscribe to weekly offers
                </label>
                <label>
                  <input type="checkbox" /> Subscribe to product updates
                </label>
              </div>
            )}
          </div>

          <div className="section">
            <button
              className="section-button deactivate"
              onClick={() => toggleSection('deactivateAccount')}
            >
              🛑 Deactivate Account
            </button>
            {activeSection === 'deactivateAccount' && (
              <div className="section-content">
                <p>Permanently delete your account.</p>
                <button
                  className="action-btn danger"
                  onClick={() => {
                    if (
                      window.confirm(
                        'Are you sure you want to deactivate your account?'
                      )
                    ) {
                      localStorage.removeItem('ecocartUser');
                      setUser(null);
                      navigate('/');
                    }
                  }}
                >
                  Confirm Deactivation
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
