import React, { useState, useEffect } from 'react';
import { PiStarFourFill } from "react-icons/pi";
import { FaCircle } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

function MyCarousel() {
    const [isSmallOrMobile, setIsSmallOrMobile] = useState({
        isMobile: false,
        slideCategories: []
    });

    const menwear = [
        ["/MenWear/1.jpg", "/MenWear/2.jpg", "/MenWear/3.jpg", "/MenWear/4.jpg"],
        ["/MenWear/5.jpg", "/MenWear/6.jpg", "/MenWear/7.jpg", "/MenWear/8.jpg"],
        ["/MenWear/9.jpg", "/MenWear/10.jpg", "/MenWear/11.jpg", "/MenWear/12.jpg"]
    ];

    useEffect(() => {
        const getDeviceInfo = () => {
            const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            const isSmallScreen = window.innerWidth <= 768; // Adjust the threshold as needed

            return {
                isMobile: isMobileDevice || isSmallScreen,
                isSmallScreen: isSmallScreen
            };
        }

        const deviceInfo = getDeviceInfo();
        if (deviceInfo.isMobile || deviceInfo.isSmallScreen) {
            const individualItems = [...menwear].flatMap(item => item.map(image => [image]));
            setIsSmallOrMobile({
                isMobile: true,
                slideCategories: individualItems
            });
        } else {
            setIsSmallOrMobile({
                isMobile: false,
                slideCategories: [...menwear]
            });
        }
    }, []);

    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {isSmallOrMobile.slideCategories.map((slideItems, slideIndex) => (
                    <div className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`} key={slideIndex}>
                        <div className="row">
                            {slideItems.map((eachData, index) => (
                                <div className={isSmallOrMobile.isMobile ? "col-md-12" : "col-md-3"} key={index}>
                                    <div className="card" style={{ width: "100%" }}>
                                        <img src={eachData} alt={eachData} className='card-img-top imgStyle' />
                                        <span className="badge bg-success card-img-overlay badgeNewBtn">New</span>
                                        <div className="card-body p-0 mt-1">
                                            <div className="row h6 mb-1 mx-1">
                                                <div className="col-md">
                                                    <label className='RsValues'>₹1,299</label>&nbsp;
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
                                                    <label className="text-warning">
                                                        <PiStarFourFill />
                                                    </label>
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
                                                <div className="col-md-2 text-center HeartIcon">
                                                    <CiHeart />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon leftBtn" aria-hidden="true"></span>
                <span className="visually-hidden ">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon rightbtn" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div >
    );
}

export default MyCarousel;
