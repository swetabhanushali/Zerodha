import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center p-5" style={{ minHeight: '60vh' }}>
      <h1 className="display-4 mt-5">404 - Page Not Found</h1>
      <p className="lead mt-3 mb-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="btn btn-primary">
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
