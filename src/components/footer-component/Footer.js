import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    // <div className='container-fluid'>
    <>
      <footer className="text-center text-lg-start text-muted bg-success mt-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 text-white ps-5">
              <div className="footerText">JOIN OUR </div>
              <div className="footerText veirdoLine">VEIRDO FAM</div>
              <div className='pt-2'>
                Here is the Space for marketing bro's to use some combination of
                alphabets to convience people to give their email
              </div>
            </div>
            <div className="col-md-6 pt-4">
              <div className="container">
                <div className="search">
                  <div className="row">
                    <div className="col-md-12">
                      <div>
                        <div className="search-2">
                          <input type="text" placeholder="veirdo@yahoo.com" />
                          <button>SUBSCRIBE</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center mt-2">
            <div className="col-md-3 border-top border-bottom socialText">INSTAGRAM</div>
            <div className="col-md-3 border socialText">LINKEDIN</div>
            <div className="col-md-3 border socialText">WHATSAPP</div>
            <div className="col-md-3 border-top border-bottom socialText">TWITTER</div>
          </div>
        </div>

        <section className="">
          <div className="container text-center text-md-start pt-4 pb-4">
            <div className="row mt-3 footerCategories">
              <div className="col-lg-2 col-md-4 col-sm-6">
                <h5 className="text-uppercase fw-bold mb-2">
                  CATEGORIES
                </h5>
                <ul className="list-unstyled mb-4">
                  <li>NEW ARRIVALS</li>
                  <li>BESTSELLERS</li>
                  <li>WINTER-WEAR</li>
                  <li>T-SHIRTS</li>
                  <li>SHORTS</li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <h5 className="text-uppercase fw-bold mb-2"></h5>
                <ul className="list-unstyled mb-4">
                  <li>SWEATSHIRTS</li>
                  <li>TSHIRTS</li>
                  <li>VESTS</li>
                  <li>OVERSIZE T-SHIRTS</li>
                  <li>UNISEX</li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <h5 className="text-uppercase fw-bold mb-2">
                  COMPANY
                </h5>
                <ul className="list-unstyled mb-4">
                  <li>ABOUT US</li>
                  <li>BLOG</li>
                  <li>PRIVACY POLICY</li>
                  <li>TERMS & CONDITIONS</li>
                  <li>WORK WITH US</li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <h5 className="text-uppercase fw-bold mb-2">
                  FOR CUSTOMERS
                </h5>
                <ul className="list-unstyled mb-4">
                  <li>CONTACT US</li>
                  <li>FAQ'S</li>
                  <li>TRACK ORDER</li>
                  <li>RETURN POLICY</li>
                  <li>SHIPPING POLICY</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12 d-flex  py-4 border-top">
              2023 VEIRDO. All Rights Reserved By Pratyaya E-commerce PVT. Ltd.
            </div>
          </div>
        </div>
      </footer>
    </>
    // </div>
  );
};

export default Footer;
