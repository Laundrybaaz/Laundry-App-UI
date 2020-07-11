import React, { Component } from 'react';
import './whatwedo.css';
import image1 from '../../Assets/s3.png';
import image2 from '../../Assets/s2.png';
import image3 from '../../Assets/s1.png';

class WhatwedoComponent extends Component {
    render() {
        return (
            <div>
                <section class="about py-5" id="about">
                    <div class="container py-xl-5 py-lg-3">
                        <div class="row">
                            <div class="col-lg-6 about-left-w3pvt pr-lg-5">
                                <h4 class="sub-tittle-w3layouts let">Who we are?</h4>
                                <h3 class="tittle-w3layouts text-uppercase mt-3">Laundry and Dry <br />Cleaning Services</h3>
                                <p class="para-text mt-5">Best Laundry Service Available In Town <br />
                                Now, walk our the door with confidence we provide you through our service 24 X 7.</p>
                            </div>
                            <div class="col-lg-6 about-right">
                                <p class="mt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
						            explicabo.</p>
                                <p class="mt-4 mb-5">Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem Lorem int ipsum dolor sit
						            amet sed quia non numquam eius modi tempora incidunt ut labore et dolore.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="serives-agile pb-5" id="services">
                    <div class="container pb-xl-5 pb-lg-3">
                        <h3 class="w3ls-title text-center font-weight-bold text-da mb-5 pb-lg-4"><span class="let mb-1">What we offer?</span>
                    Our Services</h3>
                        <div class="row text-center">
                            <div class="col-lg-4 services-w3ls-grid">
                                <img src={image1} alt="" class="img-fluid" />
                                <h4 class="mt-lg-5 mt-4 mb-sm-3 mb-2 text-da">Service 1</h4>
                                <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
                            </div>
                            <div class="col-lg-4 services-w3ls-grid my-lg-0 my-4">
                                <img src={image2} alt="" class="img-fluid" />
                                <h4 class="mt-lg-5 mt-4 mb-sm-3 mb-2 text-da">Service 2</h4>
                                <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
                            </div>
                            <div class="col-lg-4 services-w3ls-grid">
                                <img src={image3} alt="" class="img-fluid" />
                                <h4 class="mt-lg-5 mt-4 mb-sm-3 mb-2 text-da">Service 3</h4>
                                <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WhatwedoComponent;