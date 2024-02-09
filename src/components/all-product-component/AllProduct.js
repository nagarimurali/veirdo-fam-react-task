import React from 'react'
import { PiStarFourFill } from "react-icons/pi";
import { FaCircle } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { menwear } from './../../database/menwear'
import MyCarousel from './MyCarousel';
import './allProduct.css'
// import Second from './../../assets/images/second.png'

const AllProduct = () => {
    console.log("menwear", menwear)

    return (
        <>
            <div className="w-100">
                <div className="text-center py-4">
                    <h6 className='headerName'>SIMILAR PRODUCTS</h6>
                </div>


                <div className="mt-3">
                    <div className="row">
                        {menwear && menwear.length > 0 && menwear.map((eachData, index) => (
                            <div class="col-md-3" key={index + 1}>
                                <div className="card" style={{ width: "100%" }}>

                                    <img src={eachData} alt={eachData} className=' card-img-top imgStyle' />
                                    <span className="badge bg-success card-img-overlay badgeNewBtn">New</span>
                                    <div className="card-body p-0 mt-1">

                                        <div className="row h6 mb-1 mx-1">
                                            <div className="col-md">
                                                <lable className='RsValues'>₹1,299</lable>&nbsp;
                                                <strike className='text-black-50'>₹1,499</strike>&nbsp;&nbsp;
                                                <label style={{ color: "#5EC380" }}>20% OFF</label>
                                            </div>
                                        </div>
                                        <div className="row mx-1">
                                            <div className="col-md text-secondary">
                                                Black veirdo T-shirt
                                            </div>
                                        </div>
                                        <div className="row mx-1">
                                            <div className="col-md-5 text-secondary">
                                                <lable className="text-warning">
                                                    <PiStarFourFill />
                                                </lable>
                                                &nbsp; 4.5|2k
                                            </div>
                                            <div className="col-md-7  spanBall">
                                                <span className='firstCircle'><FaCircle /></span>
                                                <span className='secondCircle'><FaCircle /></span>
                                                <span className='ThridCircle'><FaCircle /></span>
                                                <span className='mx-2'>+2</span>

                                            </div>
                                        </div>
                                        <hr className="mb-0 " />
                                        <div className="row">
                                            <div className="col-md-9 text-center  addToCard pt-2">ADD TO CART</div>
                                            <div
                                                className="col-md-2 text-center HeartIcon">
                                                <CiHeart />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </div>
                        ))}
                    </div>


                    <div className="text-center py-4">
                        <h6 className='headerName'>RECENTLY VIEWED PRODUCTS</h6>
                    </div>

                    <MyCarousel />

                </div>
            </div>
        </>
    )
}

export default AllProduct
