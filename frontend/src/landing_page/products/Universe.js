import React from 'react';

function Universe() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center">
        <div className="col-sm-6 col-md-4 p-3">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase Logo"
            className="img-fluid mb-2"
          />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>

        <div className="col-sm-6 col-md-4 p-3">
          <img
            src="media/images/streakLogo.png"
            alt="Streak Logo"
            className="img-fluid mb-2"
            style={{ maxWidth: "35%" }}
          />
          <p className="text-small text-muted">Algo & Strategy platform</p>
        </div>

        <div className="col-sm-6 col-md-4 p-3">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull Logo"
            className="img-fluid mb-2"
            style={{ maxWidth: "55%" }}
          />
          <p className="text-small text-muted">Option trading platform</p>
        </div>

        <div className="col-sm-6 col-md-4 p-3">
          <img
            src="media/images/zerodhaFundHouse.png"
            alt="Zerodha Fund House Logo"
            className="img-fluid mb-2"
            style={{ maxWidth: "55%" }}
          />
          <p className="text-small text-muted">Asset Management</p>
        </div>

        <div className="col-sm-6 col-md-4 p-3">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi Logo"
            className="img-fluid mb-2"
            style={{ maxWidth: "45%" }}
          />
          <p className="text-small text-muted">Bond trading platform</p>
        </div>

        <div className="col-sm-6 col-md-4 p-3">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto Logo"
            className="img-fluid mb-2"
            style={{ maxWidth: "35%" }}
          />
          <p className="text-small text-muted">Insurance</p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
