import React from 'react'
import person1 from "../../Assests/Rectangle 3-4.png";
import person2 from "../../Assests/Rectangle 3-1.png";
import person3 from "../../Assests/Rectangle 3-2.png";
import person4 from "../../Assests/Rectangle 3-3.png";
import image1 from "../../Assests/Rectangle 5-2.png";
import image2 from "../../Assests/Rectangle 5.png";
import image3 from "../../Assests/Rectangle 5-1.png";
import shareIcon from "../../Assests/share.png";
export default function Post() {
    let PostsList = [
        { image: image1, category: "✍️ Article", head: "What if famous brands had regular fonts? Meet RegulaBrands!", avatar: person1, name: "Sarthak Kamra" },
        { image: image2, category: "🔬️ Education", head: "Tax Benefits for Investment under National Pension Scheme launched by Government", avatar: person2, name: "Sarah West" },
    ]
    return (
        <div className='container'>
            <div className='row py-5'>
                <div className='col-lg-8'>
                    {PostsList.map((post, index) => {
                        return <div key={index} className="card mb-3 position-relative">
                            <img src={post.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title pb-2 pt-3">{post.category}</h5>
                                <div className='d-flex justify-content-between'>
                                    <h4 className="card-text pb-2 fw-bold">{post.head}</h4>
                                    <div className="dropdown ms-5">
                                        <button className="btn p-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.6667 3.00008C14.6667 4.28341 15.7167 5.33341 17 5.33341C18.2834 5.33341 19.3334 4.28341 19.3334 3.00008C19.3334 1.71675 18.2834 0.666748 17 0.666748C15.7167 0.666748 14.6667 1.71675 14.6667 3.00008ZM12.3334 3.00008C12.3334 1.71675 11.2834 0.666748 10 0.666748C8.71671 0.666748 7.66671 1.71675 7.66671 3.00008C7.66671 4.28341 8.71671 5.33341 10 5.33341C11.2834 5.33341 12.3334 4.28341 12.3334 3.00008ZM5.33337 3.00008C5.33337 1.71675 4.28337 0.666747 3.00004 0.666747C1.71671 0.666747 0.666708 1.71675 0.666708 3.00008C0.666708 4.28341 1.71671 5.33341 3.00004 5.33341C4.28337 5.33341 5.33337 4.28341 5.33337 3.00008Z" fill="black" />
                                            </svg>

                                        </button>
                                        <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="# ">Edit</a></li>
                                            <li><a className="dropdown-item" href="# ">Report</a></li>
                                            <li><a className="dropdown-item" href="# ">Option 3</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                                <div className='d-flex justify-content-between align-items-center mt-4'>
                                    <div>
                                        <img src={post.avatar} alt="" />
                                        <p className='d-inline ms-2 fw-bold fs-5'>{post.name}</p>
                                    </div>
                                    <div>
                                        <p className='d-inline me-5 views'><i className="fa-regular fa-eye"></i> 1.4k views</p>
                                        <span className='share-icon py-2 px-3'><img src={shareIcon} alt="" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                    <div className="card mb-3 meet position-relative">
                        <img src={image3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title pb-2  pt-3">🗓️ Meetup</h5>
                            <div className='d-flex justify-content-between'>
                                <h4 className="card-text pb-2 fw-bold">Finance & Investment Elite Social Mixer @Lujiazui</h4>
                                <div className="dropdown ms-5">
                                    <button className="btn p-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.6667 3.00008C14.6667 4.28341 15.7167 5.33341 17 5.33341C18.2834 5.33341 19.3334 4.28341 19.3334 3.00008C19.3334 1.71675 18.2834 0.666748 17 0.666748C15.7167 0.666748 14.6667 1.71675 14.6667 3.00008ZM12.3334 3.00008C12.3334 1.71675 11.2834 0.666748 10 0.666748C8.71671 0.666748 7.66671 1.71675 7.66671 3.00008C7.66671 4.28341 8.71671 5.33341 10 5.33341C11.2834 5.33341 12.3334 4.28341 12.3334 3.00008ZM5.33337 3.00008C5.33337 1.71675 4.28337 0.666747 3.00004 0.666747C1.71671 0.666747 0.666708 1.71675 0.666708 3.00008C0.666708 4.28341 1.71671 5.33341 3.00004 5.33341C4.28337 5.33341 5.33337 4.28341 5.33337 3.00008Z" fill="black" />
                                        </svg>

                                    </button>
                                    <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="# ">Edit</a></li>
                                        <li><a className="dropdown-item" href="# ">Report</a></li>
                                        <li><a className="dropdown-item" href="# ">Option 3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="card-text text-black d-inline Address"><i className="fa-solid fa-calendar-days me-2"></i>Fri, 12 Oct, 2018</p>
                            <p className="card-text text-black d-inline ms-5 Address"><i className="fa-solid fa-location-dot me-2"></i>Ahmedabad, India</p>
                            <button className='fw-bold rounded d-block w-100 p-2 my-3 visit-button'> Visit Website</button>
                            <div className='d-flex justify-content-between align-items-center mt-4'>
                                <div>
                                    <img src={person3} alt="" />
                                    <p className='d-inline ms-2 fw-bold fs-5'>Ronal Jones</p>
                                </div>
                                <div>
                                    <p className='d-inline me-5 views'><i className="fa-regular fa-eye"></i> 1.4k views</p>
                                    <span className='share-icon py-2 px-3'><img src={shareIcon} alt="" /></span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="card mb-3 meet position-relative">
                        <div className="card-body">
                            <h5 className="card-title pb-2  pt-2">💼️ Job</h5>
                            <div className='d-flex justify-content-between'>
                                <h4 className="card-text pb-2 fw-bold">Software Developer</h4>
                                <div className="dropdown ">
                                    <button className="btn p-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.6667 3.00008C14.6667 4.28341 15.7167 5.33341 17 5.33341C18.2834 5.33341 19.3334 4.28341 19.3334 3.00008C19.3334 1.71675 18.2834 0.666748 17 0.666748C15.7167 0.666748 14.6667 1.71675 14.6667 3.00008ZM12.3334 3.00008C12.3334 1.71675 11.2834 0.666748 10 0.666748C8.71671 0.666748 7.66671 1.71675 7.66671 3.00008C7.66671 4.28341 8.71671 5.33341 10 5.33341C11.2834 5.33341 12.3334 4.28341 12.3334 3.00008ZM5.33337 3.00008C5.33337 1.71675 4.28337 0.666747 3.00004 0.666747C1.71671 0.666747 0.666708 1.71675 0.666708 3.00008C0.666708 4.28341 1.71671 5.33341 3.00004 5.33341C4.28337 5.33341 5.33337 4.28341 5.33337 3.00008Z" fill="black" />
                                        </svg>

                                    </button>
                                    <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="# ">Edit</a></li>
                                        <li><a className="dropdown-item" href="# ">Report</a></li>
                                        <li><a className="dropdown-item" href="# ">Option 3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="card-text text-black d-inline Address"><svg className='me-2' width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6667 4.00008V2.33341H7.33342V4.00008H10.6667ZM2.33341 5.66675V14.8334H15.6667V5.66675H2.33341ZM15.6667 4.00008C16.5917 4.00008 17.3334 4.74175 17.3334 5.66675V14.8334C17.3334 15.7584 16.5917 16.5001 15.6667 16.5001H2.33341C1.40841 16.5001 0.666748 15.7584 0.666748 14.8334L0.675081 5.66675C0.675081 4.74175 1.40841 4.00008 2.33341 4.00008H5.66675V2.33341C5.66675 1.40841 6.40841 0.666748 7.33342 0.666748H10.6667C11.5917 0.666748 12.3334 1.40841 12.3334 2.33341V4.00008H15.6667Z" fill="black" />
                            </svg>Innovaccer Analytics Private Ltd.</p>
                            <p className="card-text text-black d-inline ms-3 Address"><i className="fa-solid fa-location-dot me-2"></i>Noida, India</p>
                            <button className='fw-bold rounded d-block w-100 p-2 my-3 apply-button'> Apply on Timesjobs</button>
                            <div className='d-flex justify-content-between align-items-center mt-4'>
                                <div>
                                    <img src={person4} alt="" />
                                    <p className='d-inline ms-2 fs-5 fw-bold'>Joseph Gray</p>
                                </div>
                                <div>
                                    <p className='d-inline me-5 views'><i className="fa-regular fa-eye"></i> 1.4k views</p>
                                    <span className='share-icon py-2 px-3'><img src={shareIcon} alt="" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 ps-5 d-lg-block d-none'>
                    <div className='border-bottom py-3'>
                        <div className='d-flex justify-content-between'>
                            <div><i className="fa-solid fa-location-dot me-2"></i>Noida, India</div>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 12.375V15.5H3.625L12.8417 6.28334L9.71667 3.15834L0.5 12.375ZM15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741675C12.9833 0.416675 12.4583 0.416675 12.1333 0.741675L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667Z" fill="black" />
                            </svg>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between py-4 location-note'>
                        <div><i className="fa-solid fa-circle-exclamation me-3"></i></div>
                        <p>Your location will help us serve better and extend a personalised experience.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
