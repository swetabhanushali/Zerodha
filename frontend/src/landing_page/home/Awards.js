import React from 'react';

function Awards() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker Illustration"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        <div className="col-12 col-lg-6">
          <h1 className="fw-bold">Largest stock broker in India</h1>
          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail order volumes
            in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 text-center text-lg-start">
            <img
              src="media/images/pressLogos.png"
              alt="Press Mentions"
              className="img-fluid"
              style={{ maxWidth: "90%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
