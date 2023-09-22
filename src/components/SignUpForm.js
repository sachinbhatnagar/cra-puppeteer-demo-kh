import React, { useState } from 'react';
import './SignUpForm.css';

export default function SignUpForm() {
  const [formData, setFormData] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRegistered(true);
  };

  return (
    <div className="dark-mode">
      {!isRegistered ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullname" placeholder="Full Name" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email ID" onChange={handleChange} />
          <input type="email" name="confirmEmail" placeholder="Confirm Email ID" onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} />
          <label>
            <input type="checkbox" name="terms" onChange={handleChange} />
            Agree to our terms and conditions
          </label>
          <button type="submit">Register</button>
        </form>
      ) : (
        <p>Thank you for signing up!</p>
      )}
    </div>
  );
}
