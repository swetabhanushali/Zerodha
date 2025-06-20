import React from 'react';

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 px-4 mb-5 mb-lg-0">
          <h2 className="fs-2 mb-4 fw-bold">Trust with confidence</h2>

          <div className="mb-4">
            <h3 className="fs-5 fw-semibold">Customer-first always</h3>
            <p className="text-muted mb-2">
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
              worth of equity investments.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="fs-5 fw-semibold">No spam or gimmicks</h3>
            <p className="text-muted mb-2">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="fs-5 fw-semibold">The Zerodha universe</h3>
            <p className="text-muted mb-2">
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech
              startups offer you tailored services specific to your needs.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="fs-5 fw-semibold">Do better with money</h3>
            <p className="text-muted mb-0">
              With initiatives like Nudge and Kill Switch, we don't just facilitate
              transactions, but actively help you do better with your money.
            </p>
          </div>
        </div>

        <div className="col-12 col-lg-6 text-center text-lg-end px-4">
          <img
            src="media/images/ecosystem.png"
            alt="Zerodha Ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "90%" }}
          />
          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-end gap-3">
            <a href="#" className="text-primary text-decoration-none fw-semibold">
              Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" className="text-primary text-decoration-none fw-semibold">
              Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
