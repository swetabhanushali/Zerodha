import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="container d-flex flex-column align-items-center text-center p-5 mb-5" style={{ minHeight: '60vh' }}>
      <h1 className="mt-4 display-5 fw-bold">Open a Zerodha account</h1>
      <p className="mt-3 fs-5 mb-4 px-2" style={{ maxWidth: '600px' }}>
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
      </p>
      <button
        className="btn btn-primary px-4 py-2 fs-5"
        onClick={handleSignupClick}
      >
        Sign up Now
      </button>
    </div>
  );
}

export default OpenAccount;
