import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await axios.post('http://localhost:5000/send-email', formData)
            console.log(response.data);
            setSuccess('Email sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Reset form
        } catch (error) {
            console.error('Error sending email:', error);
            const errorMessage = error.response?.data?.error || 'Failed to send email. Please try again later.';
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="contact-container red-theme">
            <div className="contact-info">
                <h2>Contact Us</h2>
                <p>
                    <span className="icon">📍</span> No. 83/1, Plot Nos. 22, 23, 24, 31, 32 and 33 Raidurgam, Madhapur, Hyderabad
                </p>
                <p>
                    <span className="icon">✉️</span> hello@ecocart.com
                </p>
                <p>
                    <span className="icon">📞</span> +3356 1589 2105
                </p>
                <p>
                    <span className="icon">📠</span> +3356 1589 2100
                </p>
            </div>
            <div className="contact-form">
                <h3>Get in Touch</h3>
                <p className="subtitle">Feel free to drop us a line below!</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="input"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="input"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Typing your message here ..."
                        required
                        className="textarea"
                    />
                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`submit-button ${isLoading ? 'button-disabled' : ''}`}
                    >
                        {isLoading ? 'Sending...' : 'SEND'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;