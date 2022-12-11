import React, { Fragment } from 'react'
import facebook from "../../Assests/f_logo_RGB-Blue_1024.png";
import google from "../../Assests/search.png";
import SignImage from "../../Assests/atg_illustration.png";
export default function LoginModal() {
    return (
        <Fragment>
            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <p className='m-0'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-start">
                            <div className='row'>
                                <div className='col'>
                                    <div className="text-center">
                                        <h3 className='fw-bold text-black mb-4'>Sign In</h3>
                                        <input type="email" className="form-control py-2" placeholder='Email' />
                                        <input type="password" className="form-control py-2" placeholder='Password' />
                                        <button className='btn btn-primary py-2 my-4 rounded-pill w-100 d-lg-block d-none'>Sign In </button>
                                        <div className='d-flex align-items-center justify-content-between d-lg-none d-block'>
                                            <button className='btn btn-primary py-2 my-4 rounded-pill'>Sign In</button>
                                            <a className='text-muted' href='# ' data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">or, Sign Up</a>
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
                                        <p className='m-0 mt-4 footer'>Forget Password</p>
                                    </div>
                                </div>
                                <div className='col d-lg-block d-none'>
                                    <p className='text-end mb-4 me-3'>Don’t have an account yet?
                                        <a className='text-decoration-none' data-bs-toggle="modal" href="#exampleModalToggle" role="button">Create new for free!</a>
                                    </p>
                                    <img src={SignImage} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
