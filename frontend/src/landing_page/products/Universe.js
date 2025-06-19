import React from 'react';

function Universe() {
    return ( 
        <div className="container mt-5">
        <div className="row text-center">
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
  
          <div className="col-4 p-3 mt-5">
            <img src="media/images/smallcaseLogo.png" />
            <p className="text-small text-muted">Thematic investment platform</p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/images/streakLogo.png" style={{width:"35%"}} />
            <p className="text-small text-muted">Algo & Strategy plateform</p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/images/sensibullLogo.svg" style={{width:"55%"}} />
            <p className="text-small text-muted">Option trading platform</p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/images/zerodhaFundHouse.png" style={{width:"55%"}}/>
            <p className="text-small text-muted">Asset Management</p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/images/goldenpiLogo.png" style={{width:"45%"}} />
            <p className="text-small text-muted">Bond trading platform</p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/images/dittoLogo.png" style={{width:"35%"}} />
            <p className="text-small text-muted">Insurance</p>
          </div>
          
        </div>
      </div>
    );
}

export default Universe;