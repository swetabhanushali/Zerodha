import React from 'react';

function Education() {
  return (
    <div className="container my-5 mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
          <img
            src="media/images/education.svg"
            alt="Market Education"
            className="img-fluid"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>

        <div className="col-12 col-lg-6">
          <h2 className="mb-3 fw-bold">Free and open market education</h2>
          <p>
            <strong>Varsity</strong>, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" style={{ textDecoration: "none" }} className="text-primary fw-semibold">
            Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mt-4">
            <strong>TradingQ&A</strong>, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" style={{ textDecoration: "none" }} className="text-primary fw-semibold">
            TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
