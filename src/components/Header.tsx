import React from "react";

function OffcanvasExample() {
  return (
    <>
      <nav id="mainNav" className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a id="logo" className="navbar-brand" href="#">Alex Ace</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse rounded-3" id="navbarNavDropdown">
            <ul className="navbar-nav w-100 justify-content-around">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/predictions">Predictions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/membership">Membership</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/community">Join Community</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/webinars">Webinars</a>
              </li>
              <li id="Login" className="nav-item">
                <a className="nav-link redButton rounded-3" href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default OffcanvasExample;