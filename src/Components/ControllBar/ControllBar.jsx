import React from 'react';
import groupIcon from "../../Assests/group.png";
export default function ControllBar() {
    return (
        <div className='container '>
            <div className='pt-5 d-flex justify-content-between position-relative'>
                <ul className="nav controll-bar ">
                    <li className="nav-item">
                        <a className="nav-link active text-black" href="# ">All Posts(32)</a>
                    </li>
                    <li className="nav-item d-lg-block d-none">
                        <a className="nav-link" href="# " >Article</a>
                    </li>
                    <li className="nav-item d-lg-block d-none">
                        <a className="nav-link" href="# " >Event</a>
                    </li>
                    <li className="nav-item d-lg-block d-none">
                        <a className="nav-link" href="# " >Education</a>
                    </li>
                    <li className="nav-item d-lg-block d-none">
                        <a className="nav-link" href="# ">Job</a>
                    </li>
                </ul>
                <div className='d-lg-block d-none'>
                    <button className='me-2 write-post py-2 px-3 rounded'>Write a Post <i className="fa-solid fa-caret-down ms-3"></i></button>
                    <button className='ms-2 join-group py-2 px-3 rounded text-white' ><img src={groupIcon} alt="icon" className='me-2' />Join Group</button>
                </div>
                <div className="dropdown d-lg-none d-block">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter: All
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="# ">All</a></li>
                        <li><a className="dropdown-item" href="# ">Article</a></li>
                        <li><a className="dropdown-item" href="# ">Event</a></li>
                        <li><a className="dropdown-item" href="# ">Education</a></li>
                        <li><a className="dropdown-item" href="# ">Job</a></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}
