import React, { Component } from 'react';
import './whatwedo.css';
import image1 from '../../Assets/s3.png';
import image2 from '../../Assets/s2.png';
import image3 from '../../Assets/s1.png';
import image4 from '../../Assets/pp.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faEraser, faExclamation, faCar } from '@fortawesome/free-solid-svg-icons'
import { SocialIcon } from 'react-social-icons';
class WhatwedoComponent extends Component {
    render() {
        return (
            <div>
                <section className="about py-5" id="about">
                    <div className="container py-xl-5 py-lg-3">
                        <div className="row">
                            <div className="col-lg-6 about-left-w3pvt pr-lg-5">
                                <h4 className="sub-tittle-w3layouts let">Who we are?</h4>
                                <h3 className="tittle-w3layouts text-uppercase mt-3">Laundry and Dry <br />Cleaning Services</h3>
                                <p className="para-text mt-5">Best Laundry Service Available In Town <br />
                                Now, walk our the door with confidence we provide you through our service 24 X 7.</p>
                            </div>
                            <div className="col-lg-6 about-right">
                                <p className="mt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
						            explicabo.</p>
                                <p className="mt-4 mb-5">Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem Lorem int ipsum dolor sit
						            amet sed quia non numquam eius modi tempora incidunt ut labore et dolore.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="serives-agile pb-5" id="services">
                    <div className="container pb-xl-5 pb-lg-3">
                        <h3 className="w3ls-title text-center font-weight-bold text-da mb-5 pb-lg-4"><span className="let mb-1">What we offer?</span>
                    Our Services</h3>
                        <div className="row text-center">
                            <div className="col-lg-4 services-w3ls-grid">
                                <img src={image1} alt="" className="img-fluid" />
                                <h4 className="mt-lg-5 mt-4 mb-sm-3 mb-2 text-da">Service 1</h4>
                                <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
                            </div>
                            <div className="col-lg-4 services-w3ls-grid my-lg-0 my-4">
                                <img src={image2} alt="" className="img-fluid" />
                                <h4 className="mt-lg-5 mt-4 mb-sm-3 mb-2 text-da">Service 2</h4>
                                <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
                            </div>
                            <div className="col-lg-4 services-w3ls-grid">
                                <img src={image3} alt="" className="img-fluid" />
                                <h4 className="mt-lg-5 mt-4 mb-sm-3 mb-2 text-da">Service 3</h4>
                                <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="agile_stats text-center py-5">
                    <div className="container pt-sm-5">
                        <div className="stats_agile mb-sm-5 mb-3">
                            <h3 className="stat-title text-capitalize pb-md-5 pb-4">let us do your laundry</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="counter pt-5 px-3 pb-3">
                                    <FontAwesomeIcon icon={faCar} size="2x" style={{ color: "#FFF" }} />
                                    <div className="timer count-title count-number mt-2" data-to="5100" data-speed="1500"></div>
                                    <p className="count-text text-capitalize">Pickup/Delivery</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-md-0 mt-sm-5 mt-3">
                                <div className="counter  pt-5 px-3 pb-3">
                                    <FontAwesomeIcon icon={faCloudSun} size="2x" style={{ color: "#FFF" }} />
                                    <div className="timer count-title count-number mt-2" data-to="4783" data-speed="1500"></div>
                                    <p className="count-text text-capitalize">dry clean</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-lg-0 mt-sm-5 mt-3">
                                <div className="counter  pt-5 px-3 pb-3">
                                    <FontAwesomeIcon icon={faEraser} size="2x" style={{ color: "#FFF" }} />
                                    <div className="timer count-title count-number mt-2" data-to="2184" data-speed="1500"></div>
                                    <p className="count-text text-capitalize">ironing</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-lg-0  mt-sm-5 mt-3">
                                <div className="counter  pt-5 px-3 pb-3">
                                    <FontAwesomeIcon icon={faExclamation} size="2x" style={{ color: "#FFF" }} />
                                    <div className="timer count-title count-number mt-2" data-to="1084" data-speed="1084"></div>
                                    <p className="count-text text-capitalize">stain removal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team" id="team">
                    <div className="container">
                        <h3 className="title clr">Meet Our Team</h3>
                        <div className="row pt-md">
                            <div className="col-lg-6 col-md-6 col-sm-6 profile">
                                <div className="bodr-img">
                                    <div className="img-box">
                                        <img src={image4} alt="" />
                                        <ul className="text-center">
                                            <li>
                                                <h4>Noble Joy</h4>
                                            </li>
                                            <li>
                                                <h6>Developer</h6>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 profile">
                                <div className="img-box">
                                    <img src="https://avatars3.githubusercontent.com/u/29887279?s=400&u=134c48e32a840b134a2c52456faac0dece665b2f&v=4" alt="" />
                                    <ul className="text-center">
                                        <li>
                                            <h4>Deep Roy</h4>
                                        </li>
                                        <li>
                                            <h6>Developer</h6>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </section>
                <div class="contact" id="contact">
                    <div class="container">
                        <div class="agile-contact-grids">
                            <h3>Contact Us</h3>
                            <div class="col-lg-12 agile-contact-left">
                                <div class="agileits-map">

                                </div>
                                <div class="map-grid">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.6717134527485!2d76.8850869147831!3d8.531217193867148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05be9baab0b293%3A0x8ac4bd082d5b0dd8!2sAishwarya%20Homes%20Infinity!5e0!3m2!1sen!2sin!4v1594563561355!5m2!1sen!2sin" width="1100" height="500" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0" title="laundry"></iframe>
                                </div>
                            </div>


                            <div class="clearfix"> </div>
                        </div>
                    </div>
                </div>
                <div class="footer" id="footer">
                    <div class="container">
                        <div class="list">
                            <div class="col-md-3 wthree_fl">
                                <a href="#top">LAUNDRYBAAZ</a>
                            </div>

                            <div class="col-md-6 wthree_fc">
                                <h6> KULATHOOR </h6>
                                <h6> 670704 KARIMANAL </h6>
                                <h6> TRIVANDRUM </h6>
                                <h6> KERALA </h6>
                            </div>

                            <div class="col-md-3 wthree_fr">
                                <h6>+91 9656080549</h6>
                                <h6><a href="mailto:service@decorate.com">chainlaunders@gmail.com</a></h6>

                            </div>

                            <div class="col-md-12 wthree_fr" text-align="center" >
                                <SocialIcon url="https://twitter.com/NobleJoy12" style={{ margin: "10px" }} />
                                <SocialIcon url="https://www.instagram.com/noble_joy/" style={{ margin: "10px" }} />
                                <SocialIcon url="https://www.facebook.com/noble.joy.739/" style={{ margin: "10px" }} />
                                <SocialIcon url="https://github.com/Laundrybaaz" style={{ margin: "10px" }} />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WhatwedoComponent;