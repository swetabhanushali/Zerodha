import React from "react";

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-5 p-4 mt-4 mt-md-0">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-md-2 d-none d-md-block"></div>
        <div className="col-md-5 text-center">
          <img src={imageURL} alt={`${productName} image`} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
