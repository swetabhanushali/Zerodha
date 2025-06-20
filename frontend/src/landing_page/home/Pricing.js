import React from 'react';

function Pricing() {
  return (
    <div className="container my-5 mb-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
          <h2 className="fs-2 fw-bold">Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }} className="text-primary fw-semibold">
            See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="d-none d-lg-block col-lg-2"></div>

        <div className="col-12 col-lg-6">
          <div className="row text-center">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <div className="p-4 border h-100 rounded shadow-sm">
                <h1 className="mb-3">₹0</h1>
                <p className="mb-0">
                  Free equity delivery and
                  <br />
                  direct mutual funds
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="p-4 border h-100 rounded shadow-sm">
                <h1 className="mb-3">₹20</h1>
                <p className="mb-0">Intraday and F&amp;O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
