import React, { Fragment } from 'react'
import LoginModal from '../LoginModal/LoginModal'
import facebook from "../../Assests/f_logo_RGB-Blue_1024.png";
import google from "../../Assests/search.png";
import SignImage from "../../Assests/atg_illustration.png";

export default function SigninModal() {
    return (
        <Fragment>
            <div className="modal fade " id="exampleModalToggle" aria-hidden="true" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <p className='m-0'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-start">
                            <div className='row'>
                                <div className='col'>
                                    <div className="text-center">
                                        <h3 className='fw-bold text-black mb-4'>Create Account</h3>
                                        <div className='d-flex name-inputs'>
                                            <input type="text" className="form-control py-2" placeholder='First Name' />
                                            <input type="text" className="form-control py-2 " placeholder='Last Name' />
                                        </div>
                                        <input type="email" className="form-control py-2" placeholder='Email' />
                                        <input type="password" className="form-control py-2" placeholder='Password' />
                                        <input type="password" className="form-control py-2" placeholder='Confirm Password' />
                                        <button className='btn btn-primary py-2 my-4 rounded-pill w-100 d-lg-block d-none'>Create Account</button>
                                        <div className='d-flex align-items-center justify-content-between d-lg-none d-block'>
                                            <button className='btn btn-primary py-2 my-4 rounded-pill'>Create Account</button>
                                            <a className='text-muted' href='# ' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">or, Sign In</a>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <button className='bg-white border py-2 mb-2'>
                                                <img src={facebook} alt="" className='me-2' />
                                                Sign up with Facebook
                                            </button>
                                            <button className='bg-white border p-2 mb-2'>
                                                <img src={google} alt="" className='me-2' />
                                                Sign up with Google
                                            </button>
                                        </div>
                                        <p className='m-0 mt-4 footer  d-lg-none d-block'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                                    </div>
                                </div>
                                <div className='col d-lg-block d-none'>
                                    <p className='text-end mb-4 me-3'>Already have an account?
                                        <a className='text-decoration-none' href='# ' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Sign In</a>
                                    </p>
                                    <img src={SignImage} alt="" />
                                    <p className='m-0 mt-4 footer'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LoginModal />
        </Fragment>
    )
}
