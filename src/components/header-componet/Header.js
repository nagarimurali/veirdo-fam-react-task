import React from "react";
import LogoImage from './../../assets/images/Logo.jpg';
import { FiAlignJustify } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiNotificationBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import "./header.css";


const Header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark shadow-sm p-2 mb-5 ">
                {/* <div className="container-fluid"> */}
                    <img src={LogoImage} alt="Logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <FiAlignJustify className="menuIcon" />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="row w-100">
                            <div className="col-md-7 nav-items">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        NEW ARRIVALS
                                    </li>
                                    <li className="nav-item">
                                        MEN
                                    </li>
                                    <li className="nav-item">
                                        WINTER COLLECTION
                                    </li>
                                    <li className="nav-item">
                                        SHOP BY MERCH
                                    </li>
                                    <li className="nav-item">
                                        UNISEX
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 d-flex align-items-center justify-content-end">
                                <input className="form-control me-2 searchTerm"  type="search" placeholder="Search" aria-label="Search"/>
                                <CiSearch className="searchButton" />
                               
                            </div>
                            {/* <div className="col-md-3 d-flex align-items-center">
                                <input className="form-control me-2 flex-grow-1" type="search" placeholder="Search" aria-label="Search" />
                                <CiSearch />
                            </div> */}
                            <div className="icon-group col-md-2">
                                <CiUser className="icon" />
                                <CiHeart className="icon" />
                                <PiNotificationBold className="icon" />
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </nav>




        </>
    );
};

export default Header;
