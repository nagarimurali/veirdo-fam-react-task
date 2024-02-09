import React from 'react';
import First from './../../assets/images/first.png';
import Second from './../../assets/images/second.png';

import Third from './../../assets/images/third .png'
import Fourth from './../../assets/images/fourth .png';
import { CiHeart } from "react-icons/ci";
import { PiStarFourFill } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdDocument } from "react-icons/io";
import { PiCheckSquareOffset } from "react-icons/pi";
import { ImLoop2 } from "react-icons/im";
import { MdVerifiedUser } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import './product.css';

const Product = () => {
    return (
        // <div className="container-fluid">
        <div className='row'>
            <div className='col-md-6'>
                <div className='row mb-1'>
                    <div className='col-md-6'>
                        <img src={First} alt="FirstImage" className='imageCard' />
                    </div>
                    <div className='col-md-6'>
                        <img src={Second} alt="Second" className='imageCard' />
                    </div>

                </div>
                <div className='row mt-2'>
                    <div className='col-md-6'>

                        <img src={Third} alt="third" className='imageCard' />
                    </div>
                    <div className='col-md-6'>

                        <img src={Fourth} alt="fourth" className='imageCard' />
                    </div>

                </div>



            </div>
            <div className='col-md-6'>
                <div className='px-3'>

                    <div className='row'>
                        <div className='col-md-8'>

                            <lable className="valuePrices">₹1,299</lable>&nbsp;
                            <strike >₹1,499</strike> &nbsp;&nbsp;
                            <label style={{ color: "#5EC380" }}>20% OFF</label>

                        </div>
                        <div className='col-md-3'>
                            <FaHeart style={{ color: "#d32bb4" }} />
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-md-12 fw-bold'>
                            Flower Printed Oversized Fit
                        </div>

                    </div>
                    <div className='row pt-2'>
                        <div className="col-md-5 text-secondary">
                            <lable className="text-warning">
                                <PiStarFourFill />
                            </lable>
                            &nbsp; 4.5|2k
                        </div>

                    </div>

                    <div className='row pt-2'>
                        <div className='col-md-12 fw-bold py-2'>OFFERS</div>

                    </div>

                    <div className='row'>
                        <div className='col-md-6 pe-0'>
                            <div className="card  border border-info">
                                <div className="card-body text-center p-0">
                                    <div className='row offecarmin'>
                                        <div className='col-md-2 px-0 mt-2'>
                                            <span className='ps-2'> <BiSolidOffer className='offerIcon text-info' /></span>

                                        </div>
                                        <div className='col-md-8 px-0'>
                                            <div className='buyrupee pb-1 text-info'>Buy 2 teest at just $699</div>
                                            <div className='addCard pb-1'>Add any 2 tees to the cart to avail</div>

                                        </div>
                                        <div className='col-md-1 px-0 mt-2'>
                                            <span className='spanNumber'>1/3</span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='col-md-6 pe-0'>
                            <div className="card  border border-info">
                                <div className="card-body text-center p-0">
                                    <div className='row offecarmin'>
                                        <div className='col-md-2 px-0 mt-2'>
                                            <span className='ps-2'> <BiSolidOffer className='offerIcon text-info' /></span>

                                        </div>
                                        <div className='col-md-8 px-0'>
                                            <div className='buyrupee pb-1 text-info'>Buy 2 teest at just $699</div>
                                            <div className='addCard pb-1'>Add any 2 tees to the cart to avail</div>

                                        </div>
                                        <div className='col-md-1 px-0 mt-2'>
                                            <span className='spanNumber'>1/3</span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 fw-bold py-2'>
                            COLOR-BEIGE
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-md-2 col-4'><img src={First} alt="FirstImage" className='imageSize' /></div>
                        <div className='col-md-2 col-4'><img src={First} alt="FirstImage" className='imageSize' /></div>
                        <div className='col-md-2 col-4'><img src={First} alt="FirstImage" className='imageSize' /></div>
                        <div className='col-md-2 col-4'><img src={First} alt="FirstImage" className='imageSize' /></div>
                        <div className='col-md-2 col-4'><img src={First} alt="FirstImage" className='imageSize' /></div>
                        <div className='col-md-2 col-4'><img src={First} alt="FirstImage" className='imageSize' /></div>
                    </div>
                    <div className='row'>
                        <div className='col-md-7  fw-bold py-2'>
                            SELECT SIZE
                        </div>
                        <div className='col-md-3 sizeGuide py-2'>
                            SELECT GUIDE
                        </div>

                    </div>
                    <div className="pt-2 sizeRow">
                        <div className="size"><span className="badge p-3 bg-light text-dark">28</span></div>
                        <div className="size"><span className="badge p-3 bg-light text-dark">30</span></div>
                        <div className="size"><span className="badge p-3 bg-light text-dark">32</span></div>
                        <div className="size"><span className="badge p-3 bg-light text-dark">34</span></div>
                        <div className="size"><span className="badge p-3 bg-light text-dark">36</span></div>
                        <div className="size"><span className="badge p-3 bg-light text-dark">38</span></div>
                        <div className="size"><span className="badge p-3 bg-light text-dark">40</span></div>
                        <div className="size"><span className="badge p-3 bg-light text-dark">42</span></div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 my-5'>
                            <button type="button" className="btn btn-success btn-sm w-75 fw-bold py-2 ms-5">Add To Cart</button>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-12 fw-bold py-2'>
                            CHECK FOR DELIVERY DETAILS

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="input-group mb-3 ">
                                <input type="text" className="form-control border border-info" placeholder="ENTER PINCODE" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span className="input-group-text border border-info" id="basic-addon2">CHECK</span>
                            </div>
                        </div>

                    </div>

                    <div className='row'>
                        <div className='col-md-12 fw-bold py-2'>
                            PRODUCT INFORMATION
                        </div>
                    </div>
                    {/*  */}

                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">

                                    <div className='row documentDes'>
                                        <div className='col-1 mt-2'><IoMdDocument /></div>
                                        <div className='col-11'>
                                            <div className='fw-bold'>
                                                Product DeScription
                                            </div>
                                            <div className='text-black-50'>
                                                Manufacture, care and Fit
                                            </div>

                                        </div>

                                    </div>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">

                                    <div className='row'>
                                        <div className='col-1 mt-2'><PiCheckSquareOffset /></div>
                                        <div className='col-11'>
                                            <div className='fw-bold'>
                                                Free Shipping
                                            </div>
                                            <div className='text-black-50'>
                                                We offer free shipping across Indian
                                            </div>

                                        </div>

                                    </div>
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <div className='row'>
                                        <div className='col-1 mt-2'><ImLoop2 /></div>
                                        <div className='col-11'>
                                            <div className='fw-bold'>
                                                14 Days Returns & Exchange
                                            </div>
                                            <div className='text-black-50'>
                                                know about return & exchange policy
                                            </div>

                                        </div>

                                    </div>
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                    </div>



                    <div className='row'>
                        <div className='col-md-12 fw-bold py-2'>
                            CUSTOMER RATINGS AND REVIEWS
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>


                            <div className="col-md-4 d-flex flex-column">
                                <div className="rating-box">
                                    <h1 className="pt-4">4.0</h1>
                                    <p className="">out of 5</p>
                                </div>
                                <div>
                                    <span><PiStarFourFill className="text-warning" /></span>
                                    <span><PiStarFourFill className="text-warning" /></span>
                                    <span><PiStarFourFill className="text-warning" /></span>
                                    <span><PiStarFourFill className="text-warning" /></span>
                                    <span><PiStarFourFill /></span>

                                </div>
                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className="row align-items-center mb-1 ">
                                <div className="col-md-2 col-2 pr-0">
                                    <div className="font-12 text-dark">5 </div>
                                </div>
                                <div className="col-md-8 col-8 pr-2">
                                    <div className="progress" style={{ height: "8px" }}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "78%" }} aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-2">
                                    <div className="font-12 text-primary">78%</div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-1">
                                <div className="col-md-2 col-2 pr-0">
                                    <div className="font-12 text-dark">4 </div>
                                </div>
                                <div className="col-md-8 col-8 pr-2">
                                    <div className="progress" style={{ height: "8px" }}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "12%" }} aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-2">
                                    <div className="font-12 text-primary">12%</div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-1">
                                <div className="col-md-2 col-2 pr-0">
                                    <div className="font-12 text-dark">3 </div>
                                </div>
                                <div className="col-md-8 col-8 pr-2">
                                    <div className="progress" style={{ height: "8px" }}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "12%" }} aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-2">
                                    <div className="font-12 text-primary">5%</div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-1">
                                <div className="col-md-2 col-2 pr-0">
                                    <div className="font-12 text-dark">2 </div>
                                </div>
                                <div className="col-md-8 col-8 pr-2">
                                    <div className="progress" style={{ height: "8px" }}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "2%" }} aria-valuenow="2" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-2">
                                    <div className="font-12 text-primary">2%</div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-2">
                                <div className="col-md-2 col-2 pr-0">
                                    <div className="font-12 text-dark">1 </div>
                                </div>
                                <div className="col-md-8 col-8 pr-2">
                                    <div className="progress" style={{ height: "8px" }}>
                                        <div className="progress-ba bg-success" role="progressbar" style={{ width: "1%" }} aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-2">
                                    <div className="font-12 text-primary">1%</div>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>

                    </div>
                    <hr />

                    <div className='row'>
                        <div className='clo-md-8'>
                            <span className='text-black-50'>Sharaya BR</span><span className='text-success'> <MdVerifiedUser /> Verified Buyer</span>
                            <span className='float-end'>7 months ago</span>
                        </div>



                    </div>
                    <div className='row py-3'>
                        <div className='clo-md-8'>
                            <span><PiStarFourFill className="text-warning" /></span> <span> 4 Powderm Blue, Size L</span>

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-12'>
                            <div >
                                <span>Superb product <span><FaHeart style={{ color: 'red' }} /></span> Great quality and nice dessign. will by more</span>
                            </div>
                            <div>Producs from Veirdo</div>
                        </div>
                    </div>
                    <div className='row pt-2'>
                        <div className='col-md-2 col-4'><img src={First} alt="FirstImage" className='imageSize' /></div>
                        <div className='col-md-2 col-4'><img src={First} alt="FirstImage" className='imageSize' /></div>
                        <div className='col-md-2 col-4'><img src={First} alt="FirstImage" className='imageSize' /></div>
                    </div>
                    <div>

                    </div>

                </div>

            </div>
        </div>
        // </div>
    )
}

export default Product
