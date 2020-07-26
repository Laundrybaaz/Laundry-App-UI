import React, { Component } from 'react';
import vid from '../../Assets/focusing_clothes.mov';
import '../MensApparel/MensApparel.css'

class MensApparel extends Component {
    constructor(props) {
        super(props);
        console.log("hello")
    }

    render() {
        return (
            <div>
                <video autoPlay muted loop id="myVideo" >
                    <source src={vid} type="video/mp4" />
                </video>


                <form id="tt" action="pickup.html">
                    <legend>CLOTH COUNT</legend>
                    <fieldset>

                        <div class="form-group">
                            <label>Trouser (Rs.14)</label>
                            <input type="number" class="form-control prc" />
                        </div>
                        <div class="form-group">
                            <label>Shirt (Rs.16)</label>
                            <input type="number" class="form-control prc" />
                        </div>
                        <div class="form-group">
                            <label>T-Shirt (Rs.16)</label>
                            <input type="number" class="form-control prc" />
                        </div>
                        <div class="form-group">
                            <label>Half Pant (Rs.14)</label>
                            <input type="number" class="form-control prc" />
                        </div>
                        <div class="form-group">
                            <label>Bed Sheet (Rs.23)</label>
                            <input type="number" class="form-control prc" />
                        </div>
                        <div class="form-group">
                            <label>Pillow Cover(Rs.7)</label>
                            <input type="number" class="form-control prc" />
                        </div>
                        <div class="form-group">
                            <label>Chuddar (Rs.23)</label>
                            <input type="number" class="form-control prc" />
                        </div>
                        <div class="form-group">
                            <label>Towel (Rs.15)</label>
                            <input type="number" class="form-control prc" />
                        </div>
                        <div class="form-group">
                            <label>Formal Pant (Rs.20)</label>
                            <input type="number" class="form-control prc" />
                        </div>
                        <div class="form-group">
                            <label>Cut Banlan (Rs.17)</label>
                            <input type="number" class="form-control prc" />
                        </div>
                        <div class="form-group">
                            <label>TOTAL</label>
                            <output id="result"></output>
                        </div>
                        <button id="ff" type="submit">PROCEED</button>
                    </fieldset>
                </form>

            </div>
        );
    }
}
export default MensApparel;