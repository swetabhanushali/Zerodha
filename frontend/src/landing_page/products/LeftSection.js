import React from 'react';

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-5 text-center">
          <img src={imageURL} alt={`${productName} image`} className="img-fluid" />
        </div>
        <div className="col-md-2 d-none d-md-block"></div>
        <div className="col-md-5 p-4 mt-4 mt-md-0">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} className="me-4" style={{ textDecoration: 'none' }}>
              Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} style={{ textDecoration: 'none' }}>
              Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay} target="_blank" rel="noopener noreferrer">
              <img src="media/images/googlePlayBadge.svg" alt="Google Play Store" />
            </a>
            <a
              href={appStore}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: '30px' }}
            >
              <img src="media/images/appstoreBadge.svg" alt="Apple App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
