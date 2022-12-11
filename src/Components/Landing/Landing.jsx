import React, { Fragment } from 'react'
import SigninModal from '../SigninModal/SigninModal'

export default function Landing() {

    return (
        <Fragment>
            <div className='landing mt-lg-5 pt-5'>
                <div className='position-relative join-groups d-flex justify-content-between px-3 d-md-none '>
                    <i className="fa-solid fa-arrow-left text-white fs-4"></i>
                    <SigninModal />
                    <p className='btn btn-outline-light fw-bold' data-bs-toggle="modal" href="#exampleModalToggle" role="button">Join Group</p>
                </div>
                <div className='container d-flex align-items-end h-75  position-relative'>
                    <div className='desc text-white'>
                        <h2 className='h1'>Computer Engineering</h2>
                        <p>142,765 Computer Engineers follow this</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
