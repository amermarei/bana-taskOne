import React, { Fragment } from 'react';
import logo from "../../Assests/whole.png";
import SigninModal from '../SigninModal/SigninModal';
export default function Navbar() {
    return (
        <Fragment>
            <div className='head container-fluid fixed-top bg-white'>
                <div className='row py-3 justify-content-between align-items-center d-none d-md-flex'>
                    <div className='logo col ps-5 fs-4 '>
                        <a className="navbar-brand" href=" #"><img src={logo} alt="logo" /></a>
                    </div>
                    <div className='col position-relative'>
                        <input className="form-control search rounded-pill py-2 ps-5" type="search" placeholder="Search for your favorite groups in ATG" />
                        <i className="fa-solid fa-magnifying-glass search-icon position-absolute"></i>
                    </div>
                    <div className='register col text-end pe-5'>
                        <p className='m-0 p-0=' data-bs-toggle="modal" href="#exampleModalToggle" role="button">Create account.<span className='me-2'> It's free!</span><i className="fa-solid fa-caret-down"></i></p>
                    </div>
                </div>
            </div>
            <SigninModal />
        </Fragment>
    )
}
