import React from 'react';

function Hero() {
  return ( 
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3">
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="">Track account opening</a><br />
          <a href="">Track segment activation</a><br />
          <a href="">Intraday margins</a><br />
          <a href="">Kite user manual</a>
        </div>

        <div className="d-none d-md-block col-md-1"></div>

        <div className="col-12 col-md-5 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li id='supportList'>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
