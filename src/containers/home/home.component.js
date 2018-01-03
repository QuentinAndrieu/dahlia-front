import React, { Component } from 'react';

class Home extends Component {

    componentDidMount() {
        this.props.setTitle('Dahlia');
    }

    render() {
        return (
            <div className='home'>
                <p>App design to manage patients and appointments.</p>
                <p>Still in prototype state</p>
            </div>
        );
    }
}

export default Home;
