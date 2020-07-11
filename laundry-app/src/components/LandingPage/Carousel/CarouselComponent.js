import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './carousel.css'
import slide1 from '../../Assets/slide8.jpeg';
import slide2 from '../../Assets/slide5.jpeg';
import slide3 from '../../Assets/slide7.jpeg';
class CarouselComponent extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 id="topic">LAUNDRYBAAZ</h1>
                        <p id="tag">A solution to your hectic laundry chores</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h1 id="topic">LAUNDRYBAAZ</h1>
                        <p id="tag">A solution to your hectic laundry chores</p>
                    </Carousel.Caption>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Third slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 id="topic">LAUNDRYBAAZ</h1>
                        <p id="tag">A solution to your hectic laundry chores</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselComponent;