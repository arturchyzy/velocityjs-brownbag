import _ from 'lodash';
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import animation from './animations/velocityChain';


class App extends Component {

    animate() {
        animation('toAnimate');
    }

    render() {
        return (
            <div>
                <div>
                    <img id="toAnimate" className="toAnimate" src="https://i1.kwejk.pl/k/obrazki/2013/11/3a4da5da31e3bfdc587bb01697c0d40b_original.jpg" />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={this.animate}>Animate</button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));