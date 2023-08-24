import React from 'react';
import Logo from '../../images/logo.png';

export default function Navbar({ searchValue, handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-between">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <span><i className='navbar-toggler-icon hide   mx-md-3'></i></span>
          <img src={Logo} alt="Logo" className="img-fluid mx-md-3" style={{ width: '40%', height: "auto" }} />
        </a>

       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarContent">
          <div className="input-group mb-3 d-flex justify-content-center">
            <div className="col-md-5">
            <input
                    type="search"
                    className="form-control p-2"
                    placeholder="Search"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    style={{ borderRadius: '20px 0px 0px 20px' }}
                    id='search'
                    value={searchValue} 
                    onChange={handleSearchChange} 
                />
            </div>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary p-2 px-4"
                type="button"
                id="button-addon2"
                style={{ borderRadius: '0px 20px 20px 0px' }}
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
            <span> <a href="/"><i className="bi bi-mic-fill fs-4 mx-4 hide text-dark p-md-2 hoverable"></i></a></span>
          </div>

          {/* Additional buttons and icons within the toggler */}
          <div className="d-flex justify-content-between align-items-center col-md-3">
            <span><a href="/"><i className="bi bi-grid-3x3-gap fs-4 mx-4 text-dark hide p-md-2  hoverable"></i></a></span>
            <span><a href="/"><i className="bi bi-three-dots-vertical mx-3 hide fs-4 text-dark  hoverable p-md-2"></i></a></span>

            <div className='hide'>
              <button className="btn btn-outline-primary d-flex btn-lg px-3" style={{ borderRadius: '0' }}>
                <span><i className="bi bi-person-circle px-2 "></i></span>SIGN IN
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}











