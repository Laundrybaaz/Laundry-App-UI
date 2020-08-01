import React, { Component } from 'react';
import vid from '../../Assets/focusing_clothes.mov';
import '../MensApparel/MensApparel.css'
import update from 'react-addons-update'

class MensApparel extends Component {
    constructor(props) {
        super(props);
        console.log("hello")
        this.rates = [14, 16, 16, 14, 23, 7, 23, 15, 20, 17];
        this.state = {
            countIndex: [0],
            numIndex: [0]
        }
    }
    handleChange(event) {
        this.setState(
            update(this.state, {
                countIndex: {
                    [event.target.name]: {
                        $set: event.target.value * this.rates[event.target.name]
                    }
                },
                numIndex: {
                    [event.target.name]: {
                        $set: event.target.value
                    }
                },
                validationMessage: { $set: '' }
            }),
            () => { console.log("callback: " + this.state.countIndex[0] + this.state.numIndex[0]) });

    }
    handleSubmit() {
        if (this.state.numIndex.reduce((result, number) => result + number) > 30) {
            this.setState({ validationMessage: "*Number of clothes must be less than 30" })
        }
    }
    render() {
        const clothes = ['Trouser (Rs.14)', 'Shirt (Rs.16)', 'T-Shirt (Rs.16)', 'Half Pant (Rs.14)', 'Bed Sheet (Rs.23)',
            'Pillow Cover(Rs.7)', 'Chuddar (Rs.23)', 'Towel (Rs.15)', 'Formal Pant (Rs.20)', 'Cut Banlan (Rs.17)'];
        return (
            <div>
                <video autoPlay muted loop id="myVideo" >
                    <source src={vid} type="video/mp4" />
                </video>

                < form id="tt"  >
                    <legend>CLOTH COUNT</legend>
                    <fieldset>
                        <span id="valid">{this.state.validationMessage}</span>
                        {clothes.map((value, index) => {
                            return (<div className="form-group" key={index}>
                                <label >{value}</label>
                                <input type="number" name={`${index}`} className="form-control prc" min="0" value={this.state[`${index}`]} onChange={this.handleChange.bind(this)} />
                            </div>)
                        })}
                        <div className="form-group">
                            <label>TOTAL</label>
                            <span id="res">{this.state.countIndex.reduce((result, number) => result + number)}</span>
                        </div>
                        <button id="ff" type="button" onClick={this.handleSubmit.bind(this)}>PROCEED</button>
                    </fieldset>
                </form >

            </div >
        );
    }
}
export default MensApparel;