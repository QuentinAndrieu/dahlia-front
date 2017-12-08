import React, { Component } from 'react';

class Home extends Component {

    componentDidMount(){
        this.props.setTitle('Dahlia');
    }

    render() {
        return (
            <div className='home'>
                <h1>Work in progress...</h1>
            </div>
        );
    }
}

export default Home;
