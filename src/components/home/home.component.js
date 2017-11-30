import React, { Component } from 'react';

class Home extends Component {

    componentDidMount(){
        this.props.setTitle('Dahlia');
    }

    render() {
        return (
            <div className='home'>
                <h1>HOME PAGE</h1>
            </div>
        );
    }
}

export default Home;
